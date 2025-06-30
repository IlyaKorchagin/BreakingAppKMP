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
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var listOf = kotlin_kotlin.$_$.ca;
  var to = kotlin_kotlin.$_$.dm;
  var emptyList = kotlin_kotlin.$_$.o8;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var addAll = kotlin_kotlin.$_$.g7;
  var lazy = kotlin_kotlin.$_$.ql;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var isInterface = kotlin_kotlin.$_$.oe;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var equals = kotlin_kotlin.$_$.od;
  var hashCode = kotlin_kotlin.$_$.xd;
  var toString = kotlin_kotlin.$_$.jf;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x2;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var CancellationException = kotlin_kotlin.$_$.fc;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var Path = kotlin_com_squareup_okio_okio.$_$.e;
  var getKClass = kotlin_kotlin.$_$.g;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lc;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Element = kotlin_kotlin.$_$.uc;
  var sortedWith = kotlin_kotlin.$_$.ib;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var Comparator = kotlin_kotlin.$_$.ak;
  var compareValues = kotlin_kotlin.$_$.cc;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var startsWith = kotlin_kotlin.$_$.mi;
  var joinToString = kotlin_kotlin.$_$.n9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var indexOf = kotlin_kotlin.$_$.uh;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var Companion_getInstance = kotlin_com_squareup_okio_okio.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var replace = kotlin_kotlin.$_$.hi;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var toInt = kotlin_kotlin.$_$.dj;
  var toByte = kotlin_kotlin.$_$.gf;
  var NumberFormatException = kotlin_kotlin.$_$.lk;
  var decodeToString = kotlin_kotlin.$_$.kh;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var Enum = kotlin_kotlin.$_$.bk;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var coerceAtMost = kotlin_kotlin.$_$.ag;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var buffer = kotlin_com_squareup_okio_okio.$_$.f;
  var AutoCloseable = kotlin_kotlin.$_$.vj;
  var isByteArray = kotlin_kotlin.$_$.ie;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var emptyMap = kotlin_kotlin.$_$.p8;
  var Long = kotlin_kotlin.$_$.hk;
  var abs = kotlin_kotlin.$_$.lf;
  var toMutableMap = kotlin_kotlin.$_$.xb;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.s1;
  var KtMap = kotlin_kotlin.$_$.y6;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var RuntimeException = kotlin_kotlin.$_$.ok;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.c3;
  var captureStack = kotlin_kotlin.$_$.fd;
  var Exception = kotlin_kotlin.$_$.dk;
  var first = kotlin_kotlin.$_$.z8;
  var toLong = kotlin_kotlin.$_$.hf;
  var substringAfterLast = kotlin_kotlin.$_$.pi;
  var isBlank = kotlin_kotlin.$_$.vh;
  var substringBeforeLast = kotlin_kotlin.$_$.si;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var FileSystem = kotlin_com_squareup_okio_okio.$_$.c;
  var coerceAtLeast = kotlin_kotlin.$_$.uf;
  var Companion_getInstance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var addSuppressed = kotlin_kotlin.$_$.cl;
  var Companion_getInstance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var coerceAtMost_0 = kotlin_kotlin.$_$.xf;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var Entry = kotlin_kotlin.$_$.x6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.f1;
  var KtList = kotlin_kotlin.$_$.w6;
  var MutableEntry = kotlin_kotlin.$_$.b7;
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
  initMetadataForClass(FileImageSource, 'FileImageSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(SourceImageSource, 'SourceImageSource', VOID, VOID, [AutoCloseable]);
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
    tmp.bkb_1 = ArrayList_init_$Create$();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.ckb_1 = ArrayList_init_$Create$();
    var tmp_1 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.dkb_1 = ArrayList_init_$Create$();
    var tmp_2 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.ekb_1 = ArrayList_init_$Create$();
    var tmp_3 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.fkb_1 = ArrayList_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(registry, $this) {
    Builder.call($this);
    $this.bkb_1 = toMutableList(registry.gkb_1);
    $this.ckb_1 = toMutableList(registry.hkb_1);
    $this.dkb_1 = toMutableList(registry.ikb_1);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = registry.nkb();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$1 = ComponentRegistry$Builder$_init_$lambda_dk7m6y(item);
      destination.e(tmp$ret$1);
    }
    tmp.ekb_1 = destination;
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_1 = registry.okb();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.m();
    while (tmp0_iterator_0.n()) {
      var item_0 = tmp0_iterator_0.o();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$4 = ComponentRegistry$Builder$_init_$lambda_dk7m6y_0(item_0);
      destination_0.e(tmp$ret$4);
    }
    tmp_0.fkb_1 = destination_0;
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
  protoOf(Builder).pkb = function (interceptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.bkb_1.e(interceptor);
    return this;
  };
  protoOf(Builder).qkb = function (mapper, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.ckb_1;
    var element = to(mapper, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).rkb = function (keyer, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.dkb_1;
    var element = to(keyer, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).skb = function (factory, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.ekb_1;
    var element = ComponentRegistry$Builder$add$lambda(factory, type);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).tkb = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addFetcherFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.ekb_1.e(factory);
    return this;
  };
  protoOf(Builder).ukb = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.fkb_1;
    var element = ComponentRegistry$Builder$add$lambda_0(factory);
    this_0.e(element);
    return this;
  };
  protoOf(Builder).vkb = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addDecoderFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.fkb_1.e(factory);
    return this;
  };
  protoOf(Builder).a2u = function () {
    return new ComponentRegistry(toImmutableList(this.bkb_1), toImmutableList(this.ckb_1), toImmutableList(this.dkb_1), toImmutableList(this.ekb_1), toImmutableList(this.fkb_1));
  };
  function Builder() {
  }
  function ComponentRegistry$fetcherFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.jkb_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.u(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
      this$0.jkb_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry$decoderFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.kkb_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.u(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
      this$0.kkb_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry(interceptors, mappers, keyers, lazyFetcherFactories, lazyDecoderFactories) {
    this.gkb_1 = interceptors;
    this.hkb_1 = mappers;
    this.ikb_1 = keyers;
    this.jkb_1 = lazyFetcherFactories;
    this.kkb_1 = lazyDecoderFactories;
    var tmp = this;
    tmp.lkb_1 = lazy(ComponentRegistry$fetcherFactories$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.mkb_1 = lazy(ComponentRegistry$decoderFactories$delegate$lambda(this));
  }
  protoOf(ComponentRegistry).nkb = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.lkb_1;
    fetcherFactories$factory();
    return this_0.c1();
  };
  protoOf(ComponentRegistry).okb = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mkb_1;
    decoderFactories$factory();
    return this_0.c1();
  };
  protoOf(ComponentRegistry).wkb = function (data, options) {
    var mappedData = data;
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.hkb_1;
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.map.<anonymous>' call
        var destruct = this_0.u(i);
        var mapper = destruct.lb();
        var type = destruct.mb();
        if (type.qb(mappedData)) {
          var tmp0_safe_receiver = (isInterface(mapper, Mapper) ? mapper : THROW_CCE()).xkb(mappedData, options);
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
  protoOf(ComponentRegistry).ykb = function (data, options) {
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.ikb_1;
    var inductionVariable = 0;
    var last = this_0.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.key.<anonymous>' call
        var destruct = this_0.u(i);
        var keyer = destruct.lb();
        var type = destruct.mb();
        if (type.qb(data)) {
          var tmp0_safe_receiver = (isInterface(keyer, Keyer) ? keyer : THROW_CCE()).zkb(data, options);
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
  protoOf(ComponentRegistry).akc = function (data, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.nkb().p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var _destruct__k2r9zo = this.nkb().u(index);
        var factory = _destruct__k2r9zo.lb();
        var type = _destruct__k2r9zo.mb();
        if (type.qb(data)) {
          var fetcher = (isInterface(factory, Factory_0) ? factory : THROW_CCE()).bkc(data, options, imageLoader);
          if (!(fetcher == null))
            return to(fetcher, index);
        }
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).ckc = function (result, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.okb().p();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.okb().u(index);
        var decoder = factory.dkc(result, options, imageLoader);
        if (!(decoder == null))
          return to(decoder, index);
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).ekc = function () {
    return Builder_init_$Create$_0(this);
  };
  function fetcherFactories$factory() {
    return getPropertyCallableRef('fetcherFactories', 1, KProperty1, function (receiver) {
      return receiver.nkb();
    }, null);
  }
  function decoderFactories$factory() {
    return getPropertyCallableRef('decoderFactories', 1, KProperty1, function (receiver) {
      return receiver.okb();
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
    tmp.fkc_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$_1() {
    return Builder_init_$Init$_1(objectCreate(protoOf(Builder_0)));
  }
  function Key(default_0) {
    this.gkc_1 = default_0;
  }
  protoOf(Builder_0).hkc = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.set.<anonymous>' call
    if (!(value == null)) {
      // Inline function 'kotlin.collections.set' call
      this.fkc_1.k2(key, value);
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.fkc_1.l2(key);
    }
    return this;
  };
  protoOf(Builder_0).a2u = function () {
    return new Extras(toImmutableMap(this.fkc_1));
  };
  function Builder_0() {
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.ikc_1 = Builder_init_$Create$_1().a2u();
  }
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function Extras(data) {
    Companion_getInstance_4();
    this.jkc_1 = data;
  }
  protoOf(Extras).kkc = function (key) {
    var tmp = this.jkc_1.s2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(Extras).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Extras))
      return false;
    if (!equals(this.jkc_1, other.jkc_1))
      return false;
    return true;
  };
  protoOf(Extras).hashCode = function () {
    return hashCode(this.jkc_1);
  };
  protoOf(Extras).toString = function () {
    return 'Extras(data=' + toString(this.jkc_1) + ')';
  };
  function getOrDefault(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.kkc(key);
    return tmp0_elvis_lhs == null ? key.gkc_1 : tmp0_elvis_lhs;
  }
  function getExtra(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.ukc_1.kkc(key);
    return tmp0_elvis_lhs == null ? key.gkc_1 : tmp0_elvis_lhs;
  }
  function getExtra_0(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.skd_1.kkc(key);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.ukd_1.ike_1.kkc(key) : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? key.gkc_1 : tmp1_elvis_lhs;
  }
  function Builder_init_$Init$_2(context, $this) {
    Builder_1.call($this);
    $this.jke_1 = get_application(context);
    $this.kke_1 = Companion_getInstance_8().rke_1;
    $this.lke_1 = null;
    $this.mke_1 = null;
    $this.nke_1 = null;
    $this.oke_1 = null;
    $this.pke_1 = null;
    $this.qke_1 = Builder_init_$Create$_1();
    return $this;
  }
  function Builder_init_$Create$_2(context) {
    return Builder_init_$Init$_2(context, objectCreate(protoOf(Builder_1)));
  }
  function ImageLoader$Builder$build$lambda(this$0) {
    return function () {
      return (new Builder_2()).vke(this$0.jke_1).a2u();
    };
  }
  function ImageLoader$Builder$build$lambda_0() {
    return singletonDiskCache();
  }
  protoOf(Builder_1).a2u = function () {
    var tmp = this.kke_1.wke(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, this.qke_1.a2u());
    var tmp0_elvis_lhs = this.lke_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      tmp_0 = lazy(ImageLoader$Builder$build$lambda(this));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    var tmp1_elvis_lhs = this.mke_1;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      tmp_2 = lazy(ImageLoader$Builder$build$lambda_0);
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    var tmp2_elvis_lhs = this.nke_1;
    var tmp_4 = tmp2_elvis_lhs == null ? Companion_getInstance_11().xke_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.oke_1;
    var options = new Options(this.jke_1, tmp, tmp_1, tmp_3, tmp_4, tmp3_elvis_lhs == null ? ComponentRegistry_init_$Create$() : tmp3_elvis_lhs, this.pke_1);
    return new RealImageLoader(options);
  };
  function Builder_1() {
  }
  function ImageLoader() {
  }
  function RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation) {
    this.lkf_1 = this$0;
    this.mkf_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda$slambda).okf = function ($this$async, $completion) {
    var tmp = this.b20($this$async, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RealImageLoader$execute$slambda$slambda).ma = function (p1, $completion) {
    return this.okf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = execute(this.lkf_1, this.mkf_1, 1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).b20 = function ($this$async, completion) {
    var i = new RealImageLoader$execute$slambda$slambda(this.lkf_1, this.mkf_1, completion);
    i.nkf_1 = $this$async;
    return i;
  };
  function RealImageLoader$execute$slambda$slambda_0(this$0, $request, resultContinuation) {
    var i = new RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.okf($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function execute($this, initialRequest, type, $completion) {
    var tmp = new $executeCOROUTINE$1($this, initialRequest, type, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function onSuccess_1($this, result, target, eventListener) {
    var request = result.jkg_1;
    var dataSource = result.kkg_1;
    var tmp0_safe_receiver = $this.wkg_1.vkg_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.fkh().a3(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onSuccess.<anonymous>' call
        var tmp$ret$0 = get_emoji(dataSource) + ' Successful (' + dataSource.y2_1 + ') - ' + toString(request.wkc_1);
        tmp0_safe_receiver.ekh(tag, level, tmp$ret$0, null);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.gkh(result.ikg_1);
    }
    eventListener.hkh(request, result);
    var tmp1_safe_receiver = request.ykc_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.hkh(request, result);
    }
  }
  function onError_1($this, result, target, eventListener) {
    var request = result.jkh_1;
    var tmp0_safe_receiver = $this.wkg_1.vkg_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var throwable = result.kkh_1;
      if (tmp0_safe_receiver.fkh().a3(Level_Error_getInstance()) <= 0) {
        var tmp = Level_Error_getInstance();
        // Inline function 'coil3.RealImageLoader.onError.<anonymous>' call
        var tmp$ret$0 = '\uD83D\uDEA8 Failed - ' + toString(request.wkc_1);
        tmp0_safe_receiver.ekh(tag, tmp, tmp$ret$0, throwable);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.lkh(result.ikh_1);
    }
    eventListener.mkh(request, result);
    var tmp1_safe_receiver = request.ykc_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.mkh(request, result);
    }
  }
  function onCancel_0($this, request, eventListener) {
    var tmp0_safe_receiver = $this.wkg_1.vkg_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.fkh().a3(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onCancel.<anonymous>' call
        var tmp$ret$0 = '\uD83C\uDFD7 Cancelled - ' + toString(request.wkc_1);
        tmp0_safe_receiver.ekh(tag, level, tmp$ret$0, null);
      }
    }
    eventListener.nkh(request);
    var tmp1_safe_receiver = request.ykc_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.nkh(request);
    }
  }
  function Options(application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger) {
    this.pkg_1 = application;
    this.qkg_1 = defaults;
    this.rkg_1 = memoryCacheLazy;
    this.skg_1 = diskCacheLazy;
    this.tkg_1 = eventListenerFactory;
    this.ukg_1 = componentRegistry;
    this.vkg_1 = logger;
  }
  protoOf(Options).toString = function () {
    return 'Options(application=' + toString(this.pkg_1) + ', defaults=' + this.qkg_1.toString() + ', memoryCacheLazy=' + toString(this.rkg_1) + ', diskCacheLazy=' + toString(this.skg_1) + ', eventListenerFactory=' + toString(this.tkg_1) + ', componentRegistry=' + toString(this.ukg_1) + ', logger=' + toString_0(this.vkg_1) + ')';
  };
  protoOf(Options).hashCode = function () {
    var result = hashCode(this.pkg_1);
    result = imul(result, 31) + this.qkg_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.rkg_1) | 0;
    result = imul(result, 31) + hashCode(this.skg_1) | 0;
    result = imul(result, 31) + hashCode(this.tkg_1) | 0;
    result = imul(result, 31) + hashCode(this.ukg_1) | 0;
    result = imul(result, 31) + (this.vkg_1 == null ? 0 : hashCode(this.vkg_1)) | 0;
    return result;
  };
  protoOf(Options).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options))
      return false;
    var tmp0_other_with_cast = other instanceof Options ? other : THROW_CCE();
    if (!equals(this.pkg_1, tmp0_other_with_cast.pkg_1))
      return false;
    if (!this.qkg_1.equals(tmp0_other_with_cast.qkg_1))
      return false;
    if (!equals(this.rkg_1, tmp0_other_with_cast.rkg_1))
      return false;
    if (!equals(this.skg_1, tmp0_other_with_cast.skg_1))
      return false;
    if (!equals(this.tkg_1, tmp0_other_with_cast.tkg_1))
      return false;
    if (!equals(this.ukg_1, tmp0_other_with_cast.ukg_1))
      return false;
    if (!equals(this.vkg_1, tmp0_other_with_cast.vkg_1))
      return false;
    return true;
  };
  function RealImageLoader$execute$slambda($request, this$0, resultContinuation) {
    this.wkh_1 = $request;
    this.xkh_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda).okf = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RealImageLoader$execute$slambda).ma = function (p1, $completion) {
    return this.okf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = Dispatchers_getInstance().e1h().y1g();
            tmp_0.zkh_1 = async(this.ykh_1, tmp_1, VOID, RealImageLoader$execute$slambda$slambda_0(this.xkh_1, this.wkh_1, null));
            this.s9_1 = 1;
            suspendResult = getDisposable(this.wkh_1, this.zkh_1).e1b().y17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new RealImageLoader$execute$slambda(this.wkh_1, this.xkh_1, completion);
    i.ykh_1 = $this$coroutineScope;
    return i;
  };
  function RealImageLoader$execute$slambda_0($request, this$0, resultContinuation) {
    var i = new RealImageLoader$execute$slambda($request, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.okf($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    this.iki_1 = $request;
    this.jki_1 = this$0;
    this.kki_1 = $size;
    this.lki_1 = $eventListener;
    this.mki_1 = $cachedPlaceholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda_1).okf = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RealImageLoader$execute$slambda_1).ma = function (p1, $completion) {
    return this.okf((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = (new RealInterceptorChain(this.iki_1, this.jki_1.ckh_1.gkb_1, 0, this.iki_1, this.kki_1, this.lki_1, !(this.mki_1 == null))).vki(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda_1).b20 = function ($this$withContext, completion) {
    var i = new RealImageLoader$execute$slambda_1(this.iki_1, this.jki_1, this.kki_1, this.lki_1, this.mki_1, completion);
    i.nki_1 = $this$withContext;
    return i;
  };
  function RealImageLoader$execute$slambda_2($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    var i = new RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.okf($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ekj_1 = _this__u8e3s4;
    this.fkj_1 = request;
  }
  protoOf($executeCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            if (needsExecuteOnMainDispatcher(this.fkj_1)) {
              this.s9_1 = 2;
              suspendResult = coroutineScope(RealImageLoader$execute$slambda_0(this.fkj_1, this.ekj_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = execute(this.ekj_1, this.fkj_1, 1, this);
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
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $executeCOROUTINE$1(_this__u8e3s4, initialRequest, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xkf_1 = _this__u8e3s4;
    this.ykf_1 = initialRequest;
    this.zkf_1 = type;
  }
  protoOf($executeCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 11;
            var tmp_0 = this;
            var this_0 = this.xkf_1.zkg_1.gkj(this.ykf_1, get_job(this.y9()), this.zkf_1 === 0);
            this_0.hkj();
            tmp_0.akg_1 = this_0;
            this.bkg_1 = this.xkf_1.zkg_1.ikj(this.ykf_1);
            this.ckg_1 = this.xkf_1.wkg_1.tkg_1.jkj(this.bkg_1);
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.t9_1 = 10;
            this.t9_1 = 7;
            if (equals(this.bkg_1.wkc_1, NullRequestData_instance)) {
              throw new NullRequestDataException();
            }

            this.akg_1.v4a();
            if (this.zkf_1 === 0) {
              this.s9_1 = 3;
              suspendResult = this.akg_1.kkj(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            var tmp_1 = this;
            var tmp0_safe_receiver = this.bkg_1.lkd_1;
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp0_safe_receiver_0 = this.xkf_1.akf();
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.lkj(tmp0_safe_receiver);
              tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.mkj_1;
            }

            tmp_1.fkg_1 = tmp_2;
            var tmp1_safe_receiver_0 = this.bkg_1.xkc_1;
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              var tmp2_elvis_lhs = this.fkg_1;
              tmp1_safe_receiver_0.pkj(tmp2_elvis_lhs == null ? this.bkg_1.okj() : tmp2_elvis_lhs);
            }

            this.ckg_1.qkj(this.bkg_1);
            var tmp3_safe_receiver = this.bkg_1.ykc_1;
            if (tmp3_safe_receiver == null)
              null;
            else {
              tmp3_safe_receiver.qkj(this.bkg_1);
            }

            this.gkg_1 = this.bkg_1.pkd_1;
            this.ckg_1.rkj(this.bkg_1, this.gkg_1);
            this.s9_1 = 5;
            suspendResult = this.gkg_1.skj(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.hkg_1 = suspendResult;
            this.ckg_1.tkj(this.bkg_1, this.hkg_1);
            this.s9_1 = 6;
            suspendResult = withContext(this.bkg_1.fkd_1, RealImageLoader$execute$slambda_2(this.bkg_1, this.xkf_1, this.hkg_1, this.ckg_1, this.fkg_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var result = suspendResult;
            if (result instanceof SuccessResult) {
              onSuccess_1(this.xkf_1, result, this.bkg_1.xkc_1, this.ckg_1);
            } else {
              if (result instanceof ErrorResult) {
                onError_1(this.xkf_1, result, this.bkg_1.xkc_1, this.ckg_1);
              } else {
                noWhenBranchMatchedException();
              }
            }

            this.ekg_1 = result;
            this.t9_1 = 11;
            this.s9_1 = 8;
            var tmp_3 = this;
            continue $sm;
          case 7:
            this.t9_1 = 10;
            var tmp_4 = this.v9_1;
            if (tmp_4 instanceof Error) {
              var throwable = this.v9_1;
              if (throwable instanceof CancellationException) {
                onCancel_0(this.xkf_1, this.bkg_1, this.ckg_1);
                throw throwable;
              } else {
                var result_0 = ErrorResult_0(this.bkg_1, throwable);
                onError_1(this.xkf_1, result_0, this.bkg_1.xkc_1, this.ckg_1);
                this.ekg_1 = result_0;
                this.t9_1 = 11;
                this.s9_1 = 8;
                continue $sm;
              }
            } else {
              throw this.v9_1;
            }

          case 8:
            var tmp_5 = this.ekg_1;
            this.t9_1 = 11;
            this.akg_1.ukj();
            return tmp_5;
          case 9:
            this.dkg_1 = Unit_instance;
            this.t9_1 = 11;
            this.s9_1 = 12;
            continue $sm;
          case 10:
            this.t9_1 = 11;
            var t = this.v9_1;
            this.akg_1.ukj();
            throw t;
          case 11:
            throw this.v9_1;
          case 12:
            this.t9_1 = 11;
            this.akg_1.ukj();
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 11) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function RealImageLoader(options) {
    this.wkg_1 = options;
    this.xkg_1 = CoroutineScope_1(this.wkg_1.vkg_1);
    this.ykg_1 = SystemCallbacks(this);
    this.zkg_1 = RequestService(this, this.ykg_1, this.wkg_1.vkg_1);
    this.akh_1 = this.wkg_1.rkg_1;
    this.bkh_1 = this.wkg_1.skg_1;
    this.ckh_1 = addCommonComponents(addAppleComponents(addJvmComponents(addAndroidComponents(addServiceLoaderComponents(this.wkg_1.ukg_1.ekc(), this.wkg_1), this.wkg_1), this.wkg_1), this.wkg_1)).pkb(new EngineInterceptor(this, this.ykg_1, this.zkg_1, this.wkg_1.vkg_1)).a2u();
    this.dkh_1 = atomic$boolean$1(false);
  }
  protoOf(RealImageLoader).yke = function () {
    return this.wkg_1.qkg_1;
  };
  protoOf(RealImageLoader).akf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.akh_1;
    memoryCache$factory();
    return this_0.c1();
  };
  protoOf(RealImageLoader).bkf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bkh_1;
    diskCache$factory();
    return this_0.c1();
  };
  protoOf(RealImageLoader).zke = function () {
    return this.ckh_1;
  };
  protoOf(RealImageLoader).ckf = function (request, $completion) {
    var tmp = new $executeCOROUTINE$0(this, request, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function CoroutineScope_1(logger) {
    var tmp = SupervisorJob().hj(Dispatchers_getInstance().e1h().y1g());
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
    var this_0 = _this__u8e3s4.qkb(mapper, PrimitiveClasses_getInstance().vc());
    var mapper_0 = new PathMapper();
    var this_1 = this_0.qkb(mapper_0, getKClass(Path));
    var keyer = new FileUriKeyer();
    var this_2 = this_1.rkb(keyer, getKClass(Uri));
    var keyer_0 = new UriKeyer();
    var this_3 = this_2.rkb(keyer_0, getKClass(Uri));
    var factory = new Factory_1();
    var this_4 = this_3.skb(factory, getKClass(Uri));
    var factory_0 = new Factory();
    return this_4.skb(factory_0, PrimitiveClasses_getInstance().zc());
  }
  function addServiceLoaderComponents(_this__u8e3s4, options) {
    if (get_serviceLoaderEnabled(options)) {
      _this__u8e3s4.tkb(addServiceLoaderComponents$lambda);
      _this__u8e3s4.vkb(addServiceLoaderComponents$lambda_0);
    }
    return _this__u8e3s4;
  }
  function _no_name_provided__qut3iv($logger) {
    this.wkj_1 = $logger;
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).h1c = function (context, exception) {
    var tmp0_safe_receiver = this.wkj_1;
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
    var this_0 = ServiceLoaderComponentRegistry_getInstance().akk();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
          var target = this_1.u(i);
          if (!isInterface(target, FetcherServiceLoaderTarget))
            THROW_CCE();
          var tmp0_elvis_lhs = target.bkk();
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$3 = null;
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var factory = tmp_0;
          var tmp1_elvis_lhs = target.ckk();
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
    this.dkk_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.dkk_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).x3 = function () {
    return this.dkk_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
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
    return hashCode(this.x3());
  };
  function addServiceLoaderComponents$lambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp = b.ekk();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.ekk();
    return compareValues(tmp, tmp$ret$1);
  }
  function addServiceLoaderComponents$lambda_0() {
    // Inline function 'coil3.util.mapNotNullIndices' call
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = ServiceLoaderComponentRegistry_getInstance().fkk();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda_0;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
        var value = this_1.u(i).bkk();
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
    var tmp = b.ekk();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.ekk();
    return compareValues(tmp, tmp$ret$1);
  }
  function memoryCache$factory() {
    return getPropertyCallableRef('memoryCache', 1, KProperty1, function (receiver) {
      return receiver.akf();
    }, null);
  }
  function diskCache$factory() {
    return getPropertyCallableRef('diskCache', 1, KProperty1, function (receiver) {
      return receiver.bkf();
    }, null);
  }
  function Uri(data, separator, scheme, authority, path, query, fragment) {
    this.gkk_1 = data;
    this.hkk_1 = separator;
    this.ikk_1 = scheme;
    this.jkk_1 = authority;
    this.kkk_1 = path;
    this.lkk_1 = query;
    this.mkk_1 = fragment;
  }
  protoOf(Uri).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof Uri) {
      tmp = other.gkk_1 === this.gkk_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Uri).hashCode = function () {
    return getStringHashCode(this.gkk_1);
  };
  protoOf(Uri).toString = function () {
    return this.gkk_1;
  };
  function get_filePath(_this__u8e3s4) {
    var pathSegments = get_pathSegments(_this__u8e3s4);
    if (pathSegments.j()) {
      return null;
    } else {
      var prefix = startsWith(ensureNotNull(_this__u8e3s4.kkk_1), _this__u8e3s4.hkk_1) ? _this__u8e3s4.hkk_1 : '';
      var tmp0_separator = _this__u8e3s4.hkk_1;
      return joinToString(pathSegments, tmp0_separator, prefix);
    }
  }
  function get_pathSegments(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.kkk_1;
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
    separator = separator === VOID ? Companion_getInstance().dk8_1 : separator;
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
    separator = separator === VOID ? Companion_getInstance().dk8_1 : separator;
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
      this_0.v8(scheme);
      this_0.w8(_Char___init__impl__6a9atx(58));
    }
    if (!(authority == null)) {
      this_0.v8('//');
      this_0.v8(authority);
    }
    if (!(path == null)) {
      this_0.v8(path);
    }
    if (!(query == null)) {
      this_0.w8(_Char___init__impl__6a9atx(63));
      this_0.v8(query);
    }
    if (!(fragment == null)) {
      this_0.w8(_Char___init__impl__6a9atx(35));
      this_0.v8(fragment);
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
    this.nkk_1 = image;
    this.okk_1 = isSampled;
  }
  protoOf(DecodeResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeResult))
      return false;
    if (!equals(this.nkk_1, other.nkk_1))
      return false;
    if (!(this.okk_1 === other.okk_1))
      return false;
    return true;
  };
  protoOf(DecodeResult).hashCode = function () {
    var result = hashCode(this.nkk_1);
    result = imul(result, 31) + getBooleanHashCode(this.okk_1) | 0;
    return result;
  };
  protoOf(DecodeResult).toString = function () {
    return 'DecodeResult(image=' + toString(this.nkk_1) + ', isSampled=' + this.okk_1 + ')';
  };
  function toPx(_this__u8e3s4, $this, scale) {
    // Inline function 'coil3.size.pxOrElse' call
    var tmp;
    if (_this__u8e3s4 instanceof Pixels) {
      tmp = _Pixels___get_px__impl__uix9dv(_this__u8e3s4.pkk_1);
    } else {
      // Inline function 'coil3.decode.DecodeUtils.toPx.<anonymous>' call
      var tmp_0;
      switch (scale.z2_1) {
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
  protoOf(DecodeUtils).qkk = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp;
    switch (scale.z2_1) {
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
  protoOf(DecodeUtils).rkk = function (srcWidth, srcHeight, targetSize, scale, maxSize) {
    var dstWidth;
    var dstHeight;
    if (get_isOriginal(targetSize)) {
      dstWidth = srcWidth;
      dstHeight = srcHeight;
    } else {
      dstWidth = toPx(targetSize.skk_1, this, scale);
      dstHeight = toPx(targetSize.tkk_1, this, scale);
    }
    var tmp;
    var tmp_0 = maxSize.skk_1;
    if (tmp_0 instanceof Pixels) {
      tmp = !isMinOrMax(dstWidth);
    } else {
      tmp = false;
    }
    if (tmp) {
      dstWidth = coerceAtMost(dstWidth, _Pixels___get_px__impl__uix9dv(maxSize.skk_1.pkk_1));
    }
    var tmp_1;
    var tmp_2 = maxSize.tkk_1;
    if (tmp_2 instanceof Pixels) {
      tmp_1 = !isMinOrMax(dstHeight);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      dstHeight = coerceAtMost(dstHeight, _Pixels___get_px__impl__uix9dv(maxSize.tkk_1.pkk_1));
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
    if (!!$this.akl_1) {
      // Inline function 'coil3.decode.FileImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function FileImageSource(file, fileSystem, diskCacheKey, closeable, metadata) {
    this.ukk_1 = file;
    this.vkk_1 = fileSystem;
    this.wkk_1 = diskCacheKey;
    this.xkk_1 = closeable;
    this.ykk_1 = metadata;
    this.zkk_1 = new Object();
    this.akl_1 = false;
    this.bkl_1 = null;
  }
  protoOf(FileImageSource).ckl = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.zkk_1;
    assertNotClosed(this);
    var tmp0_safe_receiver = this.bkl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.vkk_1.sk8(this.ukk_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.FileImageSource.source.<anonymous>.<anonymous>' call
    this.bkl_1 = this_0;
    return this_0;
  };
  protoOf(FileImageSource).q4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.zkk_1;
    this.akl_1 = true;
    var tmp0_safe_receiver = this.bkl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.xkk_1;
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
    if (!!$this.gkl_1) {
      // Inline function 'coil3.decode.SourceImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function close$delete(receiver, p0) {
    receiver.vk8(p0);
  }
  function SourceImageSource(source, fileSystem, metadata) {
    this.dkl_1 = fileSystem;
    this.ekl_1 = metadata;
    this.fkl_1 = new Object();
    this.gkl_1 = false;
    this.hkl_1 = source;
    this.ikl_1 = null;
  }
  protoOf(SourceImageSource).ckl = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.fkl_1;
    assertNotClosed_0(this);
    var tmp0_safe_receiver = this.hkl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.dkl_1.sk8(ensureNotNull(this.ikl_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.SourceImageSource.source.<anonymous>.<anonymous>' call
    this.hkl_1 = this_0;
    return this_0;
  };
  protoOf(SourceImageSource).q4 = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.fkl_1;
    this.gkl_1 = true;
    var tmp0_safe_receiver = this.hkl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.ikl_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp1_let_receiver = this.dkl_1;
      // Inline function 'kotlin.contracts.contract' call
      close$delete(tmp1_let_receiver, tmp1_safe_receiver);
    }
    return Unit_instance;
  };
  function Factory() {
  }
  protoOf(Factory).jkl = function (data, options, imageLoader) {
    return new ByteArrayFetcher(data, options);
  };
  protoOf(Factory).bkc = function (data, options, imageLoader) {
    return this.jkl(isByteArray(data) ? data : THROW_CCE(), options, imageLoader);
  };
  function ByteArrayFetcher(byteArray, options) {
    this.kkl_1 = byteArray;
    this.lkl_1 = options;
  }
  protoOf(ByteArrayFetcher).mkl = function ($completion) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.fetch.ByteArrayFetcher.fetch.<anonymous>' call
    this_0.jka(this.kkl_1);
    return new SourceFetchResult(ImageSource(this_0, this.lkl_1.qkc_1), null, DataSource_MEMORY_getInstance());
  };
  protoOf(ByteArrayFetcher).nkl = function ($completion) {
    return this.mkl($completion);
  };
  function SourceFetchResult(source, mimeType, dataSource) {
    this.okl_1 = source;
    this.pkl_1 = mimeType;
    this.qkl_1 = dataSource;
  }
  protoOf(SourceFetchResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SourceFetchResult))
      return false;
    if (!equals(this.okl_1, other.okl_1))
      return false;
    if (!(this.pkl_1 == other.pkl_1))
      return false;
    if (!this.qkl_1.equals(other.qkl_1))
      return false;
    return true;
  };
  protoOf(SourceFetchResult).hashCode = function () {
    var result = hashCode(this.okl_1);
    result = imul(result, 31) + (this.pkl_1 == null ? 0 : getStringHashCode(this.pkl_1)) | 0;
    result = imul(result, 31) + this.qkl_1.hashCode() | 0;
    return result;
  };
  protoOf(SourceFetchResult).toString = function () {
    return 'SourceFetchResult(source=' + toString(this.okl_1) + ', mimeType=' + this.pkl_1 + ', dataSource=' + this.qkl_1.toString() + ')';
  };
  function ImageFetchResult() {
  }
  function Factory_0() {
  }
  function Factory_1() {
  }
  protoOf(Factory_1).rkl = function (data, options, imageLoader) {
    if (!isFileUri(data))
      return null;
    return new FileUriFetcher(data, options);
  };
  protoOf(Factory_1).bkc = function (data, options, imageLoader) {
    return this.rkl(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function FileUriFetcher(uri, options) {
    this.skl_1 = uri;
    this.tkl_1 = options;
  }
  protoOf(FileUriFetcher).mkl = function ($completion) {
    var tmp = Companion_getInstance();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = get_filePath(this.skl_1);
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
    var path = tmp.qk8(tmp$ret$1);
    return new SourceFetchResult(ImageSource_0(path, this.tkl_1.qkc_1), MimeTypeMap_instance.ukl(get_extension(path)), DataSource_DISK_getInstance());
  };
  protoOf(FileUriFetcher).nkl = function ($completion) {
    return this.mkl($completion);
  };
  function get_serviceLoaderEnabledKey() {
    _init_properties_imageLoaders_kt__fgbxt1();
    return serviceLoaderEnabledKey;
  }
  var serviceLoaderEnabledKey;
  function get_serviceLoaderEnabled(_this__u8e3s4) {
    _init_properties_imageLoaders_kt__fgbxt1();
    return getOrDefault(_this__u8e3s4.qkg_1.ike_1, get_serviceLoaderEnabledKey());
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
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function fetch($this, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $fetchCOROUTINE$4($this, components, request, mappedData, options, eventListener, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function decode($this, fetchResult, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $decodeCOROUTINE$5($this, fetchResult, components, request, mappedData, options, eventListener, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function ExecuteResult(image, isSampled, dataSource, diskCacheKey) {
    this.cko_1 = image;
    this.dko_1 = isSampled;
    this.eko_1 = dataSource;
    this.fko_1 = diskCacheKey;
  }
  protoOf(ExecuteResult).toString = function () {
    return 'ExecuteResult(image=' + toString(this.cko_1) + ', isSampled=' + this.dko_1 + ', dataSource=' + this.eko_1.toString() + ', diskCacheKey=' + this.fko_1 + ')';
  };
  protoOf(ExecuteResult).hashCode = function () {
    var result = hashCode(this.cko_1);
    result = imul(result, 31) + getBooleanHashCode(this.dko_1) | 0;
    result = imul(result, 31) + this.eko_1.hashCode() | 0;
    result = imul(result, 31) + (this.fko_1 == null ? 0 : getStringHashCode(this.fko_1)) | 0;
    return result;
  };
  protoOf(ExecuteResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExecuteResult))
      return false;
    var tmp0_other_with_cast = other instanceof ExecuteResult ? other : THROW_CCE();
    if (!equals(this.cko_1, tmp0_other_with_cast.cko_1))
      return false;
    if (!(this.dko_1 === tmp0_other_with_cast.dko_1))
      return false;
    if (!this.eko_1.equals(tmp0_other_with_cast.eko_1))
      return false;
    if (!(this.fko_1 == tmp0_other_with_cast.fko_1))
      return false;
    return true;
  };
  function Companion_1() {
    this.gko_1 = 'EngineInterceptor';
  }
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    this.pko_1 = this$0;
    this.qko_1 = $request;
    this.rko_1 = $mappedData;
    this.sko_1 = $options;
    this.tko_1 = $eventListener;
    this.uko_1 = $cacheKey;
    this.vko_1 = $chain;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$intercept$slambda).xko = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(EngineInterceptor$intercept$slambda).ma = function (p1, $completion) {
    return this.xko((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$intercept$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = execute_0(this.pko_1, this.qko_1, this.rko_1, this.sko_1, this.tko_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            this.pko_1.zko_1.dkp();
            var isCached = this.pko_1.ckp_1.hkp(this.uko_1, this.qko_1, result);
            var this_0 = this.uko_1;
            var tmp_0;
            if (isCached) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            return new SuccessResult(result.cko_1, this.qko_1, result.eko_1, tmp_0, result.fko_1, result.dko_1, get_isPlaceholderCached(this.vko_1));
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$intercept$slambda).b20 = function ($this$withContext, completion) {
    var i = new EngineInterceptor$intercept$slambda(this.pko_1, this.qko_1, this.rko_1, this.sko_1, this.tko_1, this.uko_1, this.vko_1, completion);
    i.wko_1 = $this$withContext;
    return i;
  };
  function EngineInterceptor$intercept$slambda_0(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    var i = new EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.xko($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    this.qkp_1 = this$0;
    this.rkp_1 = $fetchResult;
    this.skp_1 = $components;
    this.tkp_1 = $request;
    this.ukp_1 = $mappedData;
    this.vkp_1 = $options;
    this.wkp_1 = $eventListener;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$execute$slambda).ykp = function ($this$withContext, $completion) {
    var tmp = this.b20($this$withContext, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(EngineInterceptor$execute$slambda).ma = function (p1, $completion) {
    return this.ykp((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$execute$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = decode(this.qkp_1, this.rkp_1._v, this.skp_1._v, this.tkp_1, this.ukp_1, this.vkp_1._v, this.wkp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$execute$slambda).b20 = function ($this$withContext, completion) {
    var i = new EngineInterceptor$execute$slambda(this.qkp_1, this.rkp_1, this.skp_1, this.tkp_1, this.ukp_1, this.vkp_1, this.wkp_1, completion);
    i.xkp_1 = $this$withContext;
    return i;
  };
  function EngineInterceptor$execute$slambda_0(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    var i = new EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.ykp($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $interceptCOROUTINE$2(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hkq_1 = _this__u8e3s4;
    this.ikq_1 = chain;
  }
  protoOf($interceptCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.jkq_1 = this.ikq_1.uj7();
            this.kkq_1 = this.jkq_1.wkc_1;
            this.lkq_1 = this.ikq_1.p();
            this.mkq_1 = get_eventListener(this.ikq_1);
            this.nkq_1 = this.hkq_1.akp_1.skq(this.jkq_1, this.lkq_1);
            this.okq_1 = this.nkq_1.nkc_1;
            this.mkq_1.tkq(this.jkq_1, this.kkq_1);
            this.pkq_1 = this.hkq_1.yko_1.zke().wkb(this.kkq_1, this.nkq_1);
            this.mkq_1.ukq(this.jkq_1, this.pkq_1);
            this.qkq_1 = this.hkq_1.ckp_1.vkq(this.jkq_1, this.pkq_1, this.nkq_1, this.mkq_1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.qkq_1;
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = this.hkq_1.ckp_1.wkq(this.jkq_1, tmp0_safe_receiver, this.lkq_1, this.okq_1);
            }

            tmp_0.rkq_1 = tmp_1;
            if (!(this.rkq_1 == null)) {
              return this.hkq_1.ckp_1.xkq(this.ikq_1, this.jkq_1, this.qkq_1, this.rkq_1);
            }

            this.s9_1 = 1;
            suspendResult = withContext(this.jkq_1.gkd_1, EngineInterceptor$intercept$slambda_0(this.hkq_1, this.jkq_1, this.pkq_1, this.nkq_1, this.mkq_1, this.qkq_1, this.ikq_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.t9_1 = 3;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof Error) {
              var throwable = this.v9_1;
              if (throwable instanceof CancellationException) {
                throw throwable;
              } else {
                return ErrorResult_0(this.ikq_1.uj7(), throwable);
              }
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $executeCOROUTINE$3(_this__u8e3s4, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dkm_1 = _this__u8e3s4;
    this.ekm_1 = request;
    this.fkm_1 = mappedData;
    this.gkm_1 = options;
    this.hkm_1 = eventListener;
  }
  protoOf($executeCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            this.ikm_1 = {_v: this.gkm_1};
            this.jkm_1 = {_v: this.dkm_1.yko_1.zke()};
            this.kkm_1 = {_v: null};
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 7;
            this.ikm_1._v = this.dkm_1.akp_1.ykq(this.ikm_1._v);
            if (!(this.ekm_1.dkd_1 == null) || !(this.ekm_1.ekd_1 == null)) {
              this.jkm_1._v = addFirst(addFirst_0(this.jkm_1._v.ekc(), this.ekm_1.dkd_1), this.ekm_1.ekd_1).a2u();
            }

            this.s9_1 = 2;
            suspendResult = fetch(this.dkm_1, this.jkm_1._v, this.ekm_1, this.fkm_1, this.ikm_1._v, this.hkm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.mkm_1 = suspendResult;
            this.kkm_1._v = this.mkm_1;
            this.nkm_1 = this.kkm_1._v;
            var tmp_0 = this.nkm_1;
            if (tmp_0 instanceof SourceFetchResult) {
              this.s9_1 = 3;
              suspendResult = withContext(this.ekm_1.hkd_1, EngineInterceptor$execute$slambda_0(this.dkm_1, this.kkm_1, this.jkm_1, this.ekm_1, this.fkm_1, this.ikm_1, this.hkm_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.nkm_1;
              if (tmp_1 instanceof ImageFetchResult) {
                var tmp_2 = this;
                tmp_2.okm_1 = new ExecuteResult(this.kkm_1._v.zkq_1, this.kkm_1._v.akr_1, this.kkm_1._v.bkr_1, null);
                this.s9_1 = 4;
                continue $sm;
              } else {
                var tmp_3 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 3:
            this.okm_1 = suspendResult;
            this.s9_1 = 4;
            continue $sm;
          case 4:
            this.lkm_1 = this.okm_1;
            this.t9_1 = 8;
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.pkm_1 = this.lkm_1;
            this.t9_1 = 8;
            var tmp_4 = this.kkm_1._v;
            var tmp1_safe_receiver = tmp_4 instanceof SourceFetchResult ? tmp_4 : null;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.okl_1;
            if (tmp2_safe_receiver == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver);
            }

            this.qkm_1 = this.pkm_1;
            this.s9_1 = 6;
            suspendResult = transform(this.qkm_1, this.ekm_1, this.ikm_1._v, this.hkm_1, this.dkm_1.bkp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var finalResult = suspendResult;
            prepareToDraw(finalResult.cko_1);
            return finalResult;
          case 7:
            this.t9_1 = 8;
            var t = this.v9_1;
            var tmp_5 = this.kkm_1._v;
            var tmp1_safe_receiver_0 = tmp_5 instanceof SourceFetchResult ? tmp_5 : null;
            var tmp2_safe_receiver_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.okl_1;
            if (tmp2_safe_receiver_0 == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver_0);
            }

            throw t;
          case 8:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 8) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $fetchCOROUTINE$4(_this__u8e3s4, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zkm_1 = _this__u8e3s4;
    this.akn_1 = components;
    this.bkn_1 = request;
    this.ckn_1 = mappedData;
    this.dkn_1 = options;
    this.ekn_1 = eventListener;
  }
  protoOf($fetchCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 6;
            this.gkn_1 = 0;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.s9_1 = 7;
              continue $sm;
            }

            this.hkn_1 = this.akn_1.akc(this.ckn_1, this.dkn_1, this.zkm_1.yko_1, this.gkn_1);
            l$ret$1: do {
              if (this.hkn_1 == null) {
                var message = 'Unable to create a fetcher that supports: ' + toString(this.ckn_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.ikn_1 = this.hkn_1.jb_1;
            this.gkn_1 = this.hkn_1.kb_1 + 1 | 0;
            this.ekn_1.ckr(this.bkn_1, this.ikn_1, this.dkn_1);
            this.s9_1 = 2;
            suspendResult = this.ikn_1.nkl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.t9_1 = 3;
            this.ekn_1.dkr(this.bkn_1, this.ikn_1, this.dkn_1, result);
            this.t9_1 = 6;
            this.s9_1 = 4;
            continue $sm;
          case 3:
            this.t9_1 = 6;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof Error) {
              var throwable = this.v9_1;
              var tmp0_safe_receiver = result instanceof SourceFetchResult ? result : null;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.okl_1;
              if (tmp1_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp1_safe_receiver);
              }
              throw throwable;
            } else {
              throw this.v9_1;
            }

          case 4:
            this.t9_1 = 6;
            if (!(result == null)) {
              this.fkn_1 = result;
              this.s9_1 = 7;
              continue $sm;
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 5:
            this.s9_1 = 1;
            continue $sm;
          case 6:
            throw this.v9_1;
          case 7:
            return this.fkn_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 6) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$5(_this__u8e3s4, fetchResult, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rkn_1 = _this__u8e3s4;
    this.skn_1 = fetchResult;
    this.tkn_1 = components;
    this.ukn_1 = request;
    this.vkn_1 = mappedData;
    this.wkn_1 = options;
    this.xkn_1 = eventListener;
  }
  protoOf($decodeCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.zkn_1 = 0;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.s9_1 = 4;
              continue $sm;
            }

            this.ako_1 = this.tkn_1.ckc(this.skn_1, this.wkn_1, this.rkn_1.yko_1, this.zkn_1);
            l$ret$1: do {
              if (this.ako_1 == null) {
                var message = 'Unable to create a decoder that supports: ' + toString(this.vkn_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.bko_1 = this.ako_1.jb_1;
            this.zkn_1 = this.ako_1.kb_1 + 1 | 0;
            this.xkn_1.ekr(this.ukn_1, this.bko_1, this.wkn_1);
            this.s9_1 = 2;
            suspendResult = this.bko_1.fkr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.xkn_1.gkr(this.ukn_1, this.bko_1, this.wkn_1, result);
            if (!(result == null)) {
              this.ykn_1 = result;
              this.s9_1 = 4;
              continue $sm;
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            this.s9_1 = 1;
            continue $sm;
          case 4:
            var tmp_0 = this.skn_1.okl_1;
            var tmp0_safe_receiver = tmp_0 instanceof FileImageSource ? tmp_0 : null;
            return new ExecuteResult(this.ykn_1.nkk_1, this.ykn_1.okk_1, this.skn_1.qkl_1, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wkk_1);
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function EngineInterceptor(imageLoader, systemCallbacks, requestService, logger) {
    this.yko_1 = imageLoader;
    this.zko_1 = systemCallbacks;
    this.akp_1 = requestService;
    this.bkp_1 = logger;
    this.ckp_1 = new MemoryCacheService(this.yko_1, this.akp_1, this.bkp_1);
  }
  protoOf(EngineInterceptor).hkr = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$2(this, chain, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function checkRequest($this, request, interceptor) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.vkc_1 === $this.oki_1.vkc_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message = "Interceptor '" + toString(interceptor) + "' cannot modify the request's context.";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(request.wkc_1 === NullRequestData_instance)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_0 = "Interceptor '" + toString(interceptor) + "' cannot set the request's data to null.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.xkc_1 === $this.oki_1.xkc_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_1 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's target.";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.pkd_1 === $this.oki_1.pkd_1)) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_2 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's size resolver. " + 'Use `Interceptor.Chain.withSize` instead.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
  }
  function copy($this, index, request, size) {
    return new RealInterceptorChain($this.oki_1, $this.pki_1, index, request, size, $this.tki_1, $this.uki_1);
  }
  function copy$default($this, index, request, size, $super) {
    index = index === VOID ? $this.qki_1 : index;
    request = request === VOID ? $this.rki_1 : request;
    size = size === VOID ? $this.ski_1 : size;
    return copy($this, index, request, size);
  }
  function $proceedCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qkr_1 = _this__u8e3s4;
  }
  protoOf($proceedCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.rkr_1 = this.qkr_1.pki_1.u(this.qkr_1.qki_1);
            this.skr_1 = copy$default(this.qkr_1, this.qkr_1.qki_1 + 1 | 0);
            this.s9_1 = 1;
            suspendResult = this.rkr_1.hkr(this.skr_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            checkRequest(this.qkr_1, result.uj7(), this.rkr_1);
            return result;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function RealInterceptorChain(initialRequest, interceptors, index, request, size, eventListener, isPlaceholderCached) {
    this.oki_1 = initialRequest;
    this.pki_1 = interceptors;
    this.qki_1 = index;
    this.rki_1 = request;
    this.ski_1 = size;
    this.tki_1 = eventListener;
    this.uki_1 = isPlaceholderCached;
  }
  protoOf(RealInterceptorChain).uj7 = function () {
    return this.rki_1;
  };
  protoOf(RealInterceptorChain).p = function () {
    return this.ski_1;
  };
  protoOf(RealInterceptorChain).vki = function ($completion) {
    var tmp = new $proceedCOROUTINE$6(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function FileUriKeyer() {
  }
  protoOf(FileUriKeyer).tkr = function (data, options) {
    if (isFileUri(data) && get_addLastModifiedToFileCacheKey(options)) {
      var path = get_filePath(data);
      if (!(path == null)) {
        var timestamp = options.qkc_1.rk8(Companion_getInstance().qk8(path)).zkr_1;
        return data.toString() + '-' + toString_0(timestamp);
      }
    }
    return null;
  };
  protoOf(FileUriKeyer).zkb = function (data, options) {
    return this.tkr(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Keyer() {
  }
  function UriKeyer() {
  }
  protoOf(UriKeyer).tkr = function (data, options) {
    return data.toString();
  };
  protoOf(UriKeyer).zkb = function (data, options) {
    return this.tkr(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Mapper() {
  }
  function PathMapper() {
  }
  protoOf(PathMapper).cks = function (data, options) {
    return Uri_0('file', VOID, data.toString());
  };
  protoOf(PathMapper).xkb = function (data, options) {
    return this.cks(data instanceof Path ? data : THROW_CCE(), options);
  };
  function StringMapper() {
  }
  protoOf(StringMapper).dks = function (data, options) {
    return toUri(data);
  };
  protoOf(StringMapper).xkb = function (data, options) {
    return this.dks(typeof data === 'string' ? data : THROW_CCE(), options);
  };
  function MemoryCache$Builder$maxSizePercent$lambda($percent, $context) {
    return function () {
      return numberToLong($percent * totalAvailableMemoryBytes($context).w3());
    };
  }
  function Key_0(key, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.eks_1 = key;
    this.fks_1 = toImmutableMap(extras);
  }
  protoOf(Key_0).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Key_0) {
      tmp_0 = this.eks_1 === other.eks_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.fks_1, other.fks_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Key_0).hashCode = function () {
    var result = getStringHashCode(this.eks_1);
    result = imul(31, result) + hashCode(this.fks_1) | 0;
    return result;
  };
  protoOf(Key_0).toString = function () {
    return 'Key(key=' + this.eks_1 + ', extras=' + toString(this.fks_1) + ')';
  };
  function Value(image, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.mkj_1 = image;
    this.nkj_1 = toImmutableMap(extras);
  }
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Value) {
      tmp_0 = equals(this.mkj_1, other.mkj_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.nkj_1, other.nkj_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Value).hashCode = function () {
    var result = hashCode(this.mkj_1);
    result = imul(31, result) + hashCode(this.nkj_1) | 0;
    return result;
  };
  protoOf(Value).toString = function () {
    return 'Value(image=' + toString(this.mkj_1) + ', extras=' + toString(this.nkj_1) + ')';
  };
  function Builder_2() {
    this.ske_1 = null;
    this.tke_1 = true;
    this.uke_1 = true;
  }
  protoOf(Builder_2).gks = function (context, percent) {
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
    tmp.ske_1 = MemoryCache$Builder$maxSizePercent$lambda(percent, context);
    return this;
  };
  protoOf(Builder_2).vke = function (context, percent, $super) {
    percent = percent === VOID ? defaultMemoryCacheSizePercent(context) : percent;
    return $super === VOID ? this.gks(context, percent) : $super.gks.call(this, context, percent);
  };
  protoOf(Builder_2).a2u = function () {
    var tmp;
    if (this.uke_1) {
      tmp = new RealWeakMemoryCache();
    } else {
      tmp = new EmptyWeakMemoryCache();
    }
    var weakMemoryCache = tmp;
    var tmp_0;
    if (this.tke_1) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.ske_1;
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
      if (maxSizeBytes.h1(new Long(0, 0)) > 0) {
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
    var cacheKeySize = cacheKey.fks_1.s2('coil#size');
    if (!(cacheKeySize == null)) {
      if (cacheKeySize === size.toString()) {
        return true;
      } else {
        var tmp0_safe_receiver = $this.gkp_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'coil3.util.log' call
          var tag = 'MemoryCacheService';
          var level = Level_Debug_getInstance();
          if (tmp0_safe_receiver.fkh().a3(level) <= 0) {
            // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
            var tmp$ret$0 = toString(request.wkc_1) + ": Memory cached image's size " + ('(' + cacheKeySize + ') does not exactly match the target size ') + ('(' + size.toString() + ').');
            tmp0_safe_receiver.ekh(tag, level, tmp$ret$0, null);
          }
        }
        return false;
      }
    }
    if (!_get_isSampled__22pfz3(cacheValue, $this) && (get_isOriginal(size) || request.rkd_1.equals(Precision_INEXACT_getInstance()))) {
      return true;
    }
    var srcWidth = cacheValue.mkj_1.x5g();
    var srcHeight = cacheValue.mkj_1.y5g();
    var tmp;
    var tmp_0 = cacheValue.mkj_1;
    if (tmp_0 instanceof BitmapImage) {
      tmp = get_maxBitmapSize(request);
    } else {
      tmp = Companion_getInstance_9().hks_1;
    }
    var maxSize = tmp;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_0 = size.skk_1;
    var tmp_1;
    if (this_0 instanceof Pixels) {
      tmp_1 = _Pixels___get_px__impl__uix9dv(this_0.pkk_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_1 = 2147483647;
    }
    var a = tmp_1;
    // Inline function 'coil3.size.pxOrElse' call
    var this_1 = maxSize.skk_1;
    var tmp_2;
    if (this_1 instanceof Pixels) {
      tmp_2 = _Pixels___get_px__impl__uix9dv(this_1.pkk_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_2 = 2147483647;
    }
    var b = tmp_2;
    var dstWidth = Math.min(a, b);
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_2 = size.tkk_1;
    var tmp_3;
    if (this_2 instanceof Pixels) {
      tmp_3 = _Pixels___get_px__impl__uix9dv(this_2.pkk_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_3 = 2147483647;
    }
    var a_0 = tmp_3;
    // Inline function 'coil3.size.pxOrElse' call
    var this_3 = maxSize.tkk_1;
    var tmp_4;
    if (this_3 instanceof Pixels) {
      tmp_4 = _Pixels___get_px__impl__uix9dv(this_3.pkk_1);
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
    switch (tmp_5.z2_1) {
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
    switch (request.rkd_1.z2_1) {
      case 0:
        if (multiplier === 1.0) {
          return true;
        } else {
          var tmp3_safe_receiver = $this.gkp_1;
          if (tmp3_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_0 = 'MemoryCacheService';
            var level_0 = Level_Debug_getInstance();
            if (tmp3_safe_receiver.fkh().a3(level_0) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$11 = toString(request.wkc_1) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') does not exactly match the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp3_safe_receiver.ekh(tag_0, level_0, tmp$ret$11, null);
            }
          }
          return false;
        }

      case 1:
        if (multiplier <= 1.0) {
          return true;
        } else {
          var tmp4_safe_receiver = $this.gkp_1;
          if (tmp4_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_1 = 'MemoryCacheService';
            var level_1 = Level_Debug_getInstance();
            if (tmp4_safe_receiver.fkh().a3(level_1) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$12 = toString(request.wkc_1) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') is smaller than the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp4_safe_receiver.ekh(tag_1, level_1, tmp$ret$12, null);
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
    var tmp = _this__u8e3s4.nkj_1.s2('coil#is_sampled');
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  }
  function _get_diskCacheKey__t0sb73(_this__u8e3s4, $this) {
    var tmp = _this__u8e3s4.nkj_1.s2('coil#disk_cache_key');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function Companion_2() {
    this.iks_1 = 'MemoryCacheService';
    this.jks_1 = 'coil#size';
    this.kks_1 = 'coil#is_sampled';
    this.lks_1 = 'coil#disk_cache_key';
  }
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function MemoryCacheService(imageLoader, requestService, logger) {
    this.ekp_1 = imageLoader;
    this.fkp_1 = requestService;
    this.gkp_1 = logger;
  }
  protoOf(MemoryCacheService).vkq = function (request, mappedData, options, eventListener) {
    if (!(request.zkc_1 == null)) {
      return new Key_0(request.zkc_1, request.akd_1);
    }
    eventListener.mks(request, mappedData);
    var key = this.ekp_1.zke().ykb(mappedData, options);
    eventListener.nks(request, key);
    if (key == null) {
      return null;
    }
    var extras = toMutableMap(request.akd_1);
    if (needsSizeInCacheKey(request)) {
      // Inline function 'kotlin.collections.set' call
      var key_0 = 'coil#size';
      var value = options.mkc_1.toString();
      extras.k2(key_0, value);
    }
    return new Key_0(key, extras);
  };
  protoOf(MemoryCacheService).wkq = function (request, cacheKey, size, scale) {
    if (!request.ikd_1.qks_1)
      return null;
    var tmp0_safe_receiver = this.ekp_1.akf();
    var cacheValue = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lkj(cacheKey);
    var tmp;
    if (cacheValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.memory.MemoryCacheService.getCacheValue.<anonymous>' call
      if (this.sks(request, cacheKey, cacheValue, size, scale)) {
        tmp_0 = cacheValue;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MemoryCacheService).sks = function (request, cacheKey, cacheValue, size, scale) {
    if (!this.fkp_1.tks(request, cacheValue)) {
      var tmp0_safe_receiver = this.gkp_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'coil3.util.log' call
        var tag = 'MemoryCacheService';
        var level = Level_Debug_getInstance();
        if (tmp0_safe_receiver.fkh().a3(level) <= 0) {
          // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValid.<anonymous>' call
          var tmp$ret$0 = toString(request.wkc_1) + ': Cached bitmap is hardware-backed, ' + 'which is incompatible with the request.';
          tmp0_safe_receiver.ekh(tag, level, tmp$ret$0, null);
        }
      }
      return false;
    }
    return isCacheValueValidForSize(this, request, cacheKey, cacheValue, size, scale);
  };
  protoOf(MemoryCacheService).hkp = function (cacheKey, request, result) {
    if (cacheKey == null || !request.ikd_1.rks_1 || !result.cko_1.uks()) {
      return false;
    }
    var tmp0_elvis_lhs = this.ekp_1.akf();
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
    var value = result.dko_1;
    extras.k2(key, value);
    var tmp1_safe_receiver = result.fko_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var key_0 = 'coil#disk_cache_key';
      extras.k2(key_0, tmp1_safe_receiver);
    }
    memoryCache.vks(cacheKey, new Value(result.cko_1, extras));
    return true;
  };
  protoOf(MemoryCacheService).xkq = function (chain, request, cacheKey, cacheValue) {
    return new SuccessResult(cacheValue.mkj_1, request, DataSource_MEMORY_CACHE_getInstance(), cacheKey, _get_diskCacheKey__t0sb73(cacheValue, this), _get_isSampled__22pfz3(cacheValue, this), get_isPlaceholderCached(chain));
  };
  function RealMemoryCache(strongMemoryCache, weakMemoryCache) {
    this.wks_1 = strongMemoryCache;
    this.xks_1 = weakMemoryCache;
    this.yks_1 = new Object();
  }
  protoOf(RealMemoryCache).lkj = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yks_1;
    var tmp0_elvis_lhs = this.wks_1.lkj(key);
    var value = tmp0_elvis_lhs == null ? this.xks_1.lkj(key) : tmp0_elvis_lhs;
    if (!(value == null) && !value.mkj_1.uks()) {
      this.zks(key);
    }
    return value;
  };
  protoOf(RealMemoryCache).vks = function (key, value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yks_1;
    var size = value.mkj_1.p();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'coil3.memory.RealMemoryCache.set.<anonymous>.<anonymous>' call
      var message = 'Image size must be non-negative: ' + size.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wks_1.akt(key, value.mkj_1, value.nkj_1, size);
    return Unit_instance;
  };
  protoOf(RealMemoryCache).zks = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.yks_1;
    var removedStrong = this.wks_1.zks(key);
    var removedWeak = this.xks_1.zks(key);
    return removedStrong || removedWeak;
  };
  function InternalValue(image, extras, size) {
    this.bkt_1 = image;
    this.ckt_1 = extras;
    this.dkt_1 = size;
  }
  function RealStrongMemoryCache$cache$1($maxSize, this$0) {
    this.hkt_1 = this$0;
    LruCache.call(this, $maxSize);
  }
  protoOf(RealStrongMemoryCache$cache$1).ikt = function (key, value) {
    return value.dkt_1;
  };
  protoOf(RealStrongMemoryCache$cache$1).jkt = function (key, value) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    return this.ikt(tmp, value instanceof InternalValue ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache$cache$1).kkt = function (key, oldValue, newValue) {
    return this.hkt_1.lkt_1.akt(key, oldValue.bkt_1, oldValue.ckt_1, oldValue.dkt_1);
  };
  protoOf(RealStrongMemoryCache$cache$1).nkt = function (key, oldValue, newValue) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    var tmp_0 = oldValue instanceof InternalValue ? oldValue : THROW_CCE();
    return this.kkt(tmp, tmp_0, (newValue == null ? true : newValue instanceof InternalValue) ? newValue : THROW_CCE());
  };
  function RealStrongMemoryCache(maxSize, weakMemoryCache) {
    this.lkt_1 = weakMemoryCache;
    var tmp = this;
    tmp.mkt_1 = new RealStrongMemoryCache$cache$1(maxSize, this);
  }
  protoOf(RealStrongMemoryCache).ukt = function () {
    return this.mkt_1.okt_1;
  };
  protoOf(RealStrongMemoryCache).lkj = function (key) {
    var tmp0_safe_receiver = this.mkt_1.zim(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.memory.RealStrongMemoryCache.get.<anonymous>' call
      tmp = new Value(tmp0_safe_receiver.bkt_1, tmp0_safe_receiver.ckt_1);
    }
    return tmp;
  };
  protoOf(RealStrongMemoryCache).akt = function (key, image, extras, size) {
    if (size.h1(this.ukt()) <= 0) {
      this.mkt_1.rkt(key, new InternalValue(image, extras, size));
    } else {
      this.mkt_1.skt(key);
      this.lkt_1.akt(key, image, extras, size);
    }
  };
  protoOf(RealStrongMemoryCache).zks = function (key) {
    return !(this.mkt_1.skt(key) == null);
  };
  function EmptyStrongMemoryCache(weakMemoryCache) {
    this.vkt_1 = weakMemoryCache;
  }
  protoOf(EmptyStrongMemoryCache).lkj = function (key) {
    return null;
  };
  protoOf(EmptyStrongMemoryCache).akt = function (key, image, extras, size) {
    this.vkt_1.akt(key, image, extras, size);
  };
  protoOf(EmptyStrongMemoryCache).zks = function (key) {
    return false;
  };
  function cleanUpIfNecessary($this) {
    var _unary__edvuaz = $this.xkt_1;
    $this.xkt_1 = _unary__edvuaz + 1 | 0;
    if (_unary__edvuaz >= 10) {
      $this.ykt();
    }
  }
  function InternalValue_0(image, extras, size) {
    this.zkt_1 = image;
    this.aku_1 = extras;
    this.bku_1 = size;
  }
  function Companion_3() {
    this.cku_1 = 10;
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    return Companion_instance_4;
  }
  function RealWeakMemoryCache() {
    this.wkt_1 = LinkedHashMap_init_$Create$();
    this.xkt_1 = 0;
  }
  protoOf(RealWeakMemoryCache).lkj = function (key) {
    var tmp0_elvis_lhs = this.wkt_1.s2(key);
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
      var last = values.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>' call
          var value = values.u(i);
          var tmp0_safe_receiver = value.zkt_1.dq();
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>.<anonymous>' call
            tmp_0 = new Value(tmp0_safe_receiver, value.aku_1);
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
  protoOf(RealWeakMemoryCache).akt = function (key, image, extras, size) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.wkt_1;
    var value = this_0.s2(key);
    var tmp;
    if (value == null) {
      // Inline function 'coil3.memory.RealWeakMemoryCache.set.<anonymous>' call
      // Inline function 'kotlin.collections.arrayListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.k2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var values = tmp;
    var newValue = new InternalValue_0(new WeakReference(image), extras, size);
    if (values.j()) {
      // Inline function 'kotlin.collections.plusAssign' call
      values.e(newValue);
    } else {
      var inductionVariable = 0;
      var last = values.p() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value_0 = values.u(index);
          if (size.h1(value_0.bku_1) >= 0) {
            if (value_0.zkt_1.dq() === image) {
              values.v2(index, newValue);
            } else {
              values.w2(index, newValue);
            }
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    cleanUpIfNecessary(this);
  };
  protoOf(RealWeakMemoryCache).zks = function (key) {
    return !(this.wkt_1.l2(key) == null);
  };
  protoOf(RealWeakMemoryCache).ykt = function () {
    this.xkt_1 = 0;
    var iterator = this.wkt_1.p2().m();
    while (iterator.n()) {
      var list = iterator.o();
      if (list.p() <= 1) {
        var tmp0_safe_receiver = firstOrNull(list);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zkt_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.dq()) == null) {
          iterator.t4();
        }
      } else {
        // Inline function 'coil3.util.removeIfIndices' call
        var numDeleted = 0;
        var inductionVariable = 0;
        var last = list.p() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var rawIndex = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var index = rawIndex - numDeleted | 0;
            // Inline function 'coil3.memory.RealWeakMemoryCache.cleanUp.<anonymous>' call
            if (list.u(index).zkt_1.dq() == null) {
              list.x2(index);
              numDeleted = numDeleted + 1 | 0;
            }
          }
           while (inductionVariable <= last);
        if (list.j()) {
          iterator.t4();
        }
      }
    }
  };
  function EmptyWeakMemoryCache() {
  }
  protoOf(EmptyWeakMemoryCache).lkj = function (key) {
    return null;
  };
  protoOf(EmptyWeakMemoryCache).akt = function (key, image, extras, size) {
  };
  protoOf(EmptyWeakMemoryCache).zks = function (key) {
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
    this.qks_1 = readEnabled;
    this.rks_1 = writeEnabled;
  }
  function CachePolicy_ENABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_ENABLED_instance;
  }
  function OneShotDisposable(job) {
    this.eku_1 = job;
  }
  protoOf(OneShotDisposable).e1b = function () {
    return this.eku_1;
  };
  function Companion_4() {
    Companion_instance_5 = this;
    this.rke_1 = new Defaults();
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function Builder_init_$Init$_3(context, $this) {
    Builder_3.call($this);
    $this.fku_1 = context;
    $this.gku_1 = Companion_getInstance_8().rke_1;
    $this.hku_1 = null;
    $this.iku_1 = null;
    $this.jku_1 = null;
    $this.kku_1 = null;
    $this.mku_1 = emptyMap();
    $this.nku_1 = null;
    $this.oku_1 = null;
    $this.pku_1 = null;
    $this.qku_1 = null;
    $this.rku_1 = null;
    $this.sku_1 = null;
    $this.tku_1 = null;
    $this.uku_1 = null;
    $this.vku_1 = null;
    $this.wku_1 = null;
    $this.xku_1 = null;
    $this.yku_1 = get_EMPTY_IMAGE_FACTORY();
    $this.zku_1 = get_EMPTY_IMAGE_FACTORY();
    $this.akv_1 = get_EMPTY_IMAGE_FACTORY();
    $this.bkv_1 = null;
    $this.ckv_1 = null;
    $this.dkv_1 = null;
    $this.ekv_1 = Companion_getInstance_4().ikc_1;
    return $this;
  }
  function Builder_init_$Create$_3(context) {
    return Builder_init_$Init$_3(context, objectCreate(protoOf(Builder_3)));
  }
  function Builder_init_$Init$_4(request, context, $this) {
    context = context === VOID ? request.vkc_1 : context;
    Builder_3.call($this);
    $this.fku_1 = context;
    $this.gku_1 = request.ukd_1;
    $this.hku_1 = request.wkc_1;
    $this.iku_1 = request.xkc_1;
    $this.jku_1 = request.ykc_1;
    $this.kku_1 = request.zkc_1;
    $this.mku_1 = request.akd_1;
    $this.nku_1 = request.bkd_1;
    $this.oku_1 = request.tkd_1.fkv_1;
    $this.pku_1 = request.dkd_1;
    $this.qku_1 = request.ekd_1;
    $this.rku_1 = request.tkd_1.gkv_1;
    $this.sku_1 = request.tkd_1.hkv_1;
    $this.tku_1 = request.tkd_1.ikv_1;
    $this.uku_1 = request.tkd_1.jkv_1;
    $this.vku_1 = request.tkd_1.kkv_1;
    $this.wku_1 = request.tkd_1.lkv_1;
    $this.xku_1 = request.lkd_1;
    $this.yku_1 = request.tkd_1.mkv_1;
    $this.zku_1 = request.tkd_1.nkv_1;
    $this.akv_1 = request.tkd_1.okv_1;
    $this.bkv_1 = request.tkd_1.pkv_1;
    $this.ckv_1 = request.tkd_1.qkv_1;
    $this.dkv_1 = request.tkd_1.rkv_1;
    $this.ekv_1 = request.skd_1;
    return $this;
  }
  function Builder_init_$Create$_4(request, context) {
    return Builder_init_$Init$_4(request, context, objectCreate(protoOf(Builder_3)));
  }
  function Listener() {
  }
  function Defined(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision) {
    this.fkv_1 = fileSystem;
    this.gkv_1 = interceptorCoroutineContext;
    this.hkv_1 = fetcherCoroutineContext;
    this.ikv_1 = decoderCoroutineContext;
    this.jkv_1 = memoryCachePolicy;
    this.kkv_1 = diskCachePolicy;
    this.lkv_1 = networkCachePolicy;
    this.mkv_1 = placeholderFactory;
    this.nkv_1 = errorFactory;
    this.okv_1 = fallbackFactory;
    this.pkv_1 = sizeResolver;
    this.qkv_1 = scale;
    this.rkv_1 = precision;
  }
  protoOf(Defined).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defined))
      return false;
    if (!equals(this.fkv_1, other.fkv_1))
      return false;
    if (!equals(this.gkv_1, other.gkv_1))
      return false;
    if (!equals(this.hkv_1, other.hkv_1))
      return false;
    if (!equals(this.ikv_1, other.ikv_1))
      return false;
    if (!equals(this.jkv_1, other.jkv_1))
      return false;
    if (!equals(this.kkv_1, other.kkv_1))
      return false;
    if (!equals(this.lkv_1, other.lkv_1))
      return false;
    if (!equals(this.mkv_1, other.mkv_1))
      return false;
    if (!equals(this.nkv_1, other.nkv_1))
      return false;
    if (!equals(this.okv_1, other.okv_1))
      return false;
    if (!equals(this.pkv_1, other.pkv_1))
      return false;
    if (!equals(this.qkv_1, other.qkv_1))
      return false;
    if (!equals(this.rkv_1, other.rkv_1))
      return false;
    return true;
  };
  protoOf(Defined).hashCode = function () {
    var result = this.fkv_1 == null ? 0 : hashCode(this.fkv_1);
    result = imul(result, 31) + (this.gkv_1 == null ? 0 : hashCode(this.gkv_1)) | 0;
    result = imul(result, 31) + (this.hkv_1 == null ? 0 : hashCode(this.hkv_1)) | 0;
    result = imul(result, 31) + (this.ikv_1 == null ? 0 : hashCode(this.ikv_1)) | 0;
    result = imul(result, 31) + (this.jkv_1 == null ? 0 : this.jkv_1.hashCode()) | 0;
    result = imul(result, 31) + (this.kkv_1 == null ? 0 : this.kkv_1.hashCode()) | 0;
    result = imul(result, 31) + (this.lkv_1 == null ? 0 : this.lkv_1.hashCode()) | 0;
    result = imul(result, 31) + (this.mkv_1 == null ? 0 : hashCode(this.mkv_1)) | 0;
    result = imul(result, 31) + (this.nkv_1 == null ? 0 : hashCode(this.nkv_1)) | 0;
    result = imul(result, 31) + (this.okv_1 == null ? 0 : hashCode(this.okv_1)) | 0;
    result = imul(result, 31) + (this.pkv_1 == null ? 0 : hashCode(this.pkv_1)) | 0;
    result = imul(result, 31) + (this.qkv_1 == null ? 0 : this.qkv_1.hashCode()) | 0;
    result = imul(result, 31) + (this.rkv_1 == null ? 0 : this.rkv_1.hashCode()) | 0;
    return result;
  };
  protoOf(Defined).toString = function () {
    return 'Defined(fileSystem=' + toString_0(this.fkv_1) + ', interceptorCoroutineContext=' + toString_0(this.gkv_1) + ', fetcherCoroutineContext=' + toString_0(this.hkv_1) + ', decoderCoroutineContext=' + toString_0(this.ikv_1) + ', memoryCachePolicy=' + toString_0(this.jkv_1) + ', diskCachePolicy=' + toString_0(this.kkv_1) + ', networkCachePolicy=' + toString_0(this.lkv_1) + ', placeholderFactory=' + toString_0(this.mkv_1) + ', errorFactory=' + toString_0(this.nkv_1) + ', fallbackFactory=' + toString_0(this.okv_1) + ', sizeResolver=' + toString_0(this.pkv_1) + ', scale=' + toString_0(this.qkv_1) + ', precision=' + toString_0(this.rkv_1) + ')';
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
    sizeResolver = sizeResolver === VOID ? Companion_getInstance_10().skv_1 : sizeResolver;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    extras = extras === VOID ? Companion_getInstance_4().ikc_1 : extras;
    this.vkd_1 = fileSystem;
    this.wkd_1 = interceptorCoroutineContext;
    this.xkd_1 = fetcherCoroutineContext;
    this.ykd_1 = decoderCoroutineContext;
    this.zkd_1 = memoryCachePolicy;
    this.ake_1 = diskCachePolicy;
    this.bke_1 = networkCachePolicy;
    this.cke_1 = placeholderFactory;
    this.dke_1 = errorFactory;
    this.eke_1 = fallbackFactory;
    this.fke_1 = sizeResolver;
    this.gke_1 = scale;
    this.hke_1 = precision;
    this.ike_1 = extras;
  }
  protoOf(Defaults).tkv = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) {
    return new Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).wke = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, $super) {
    fileSystem = fileSystem === VOID ? this.vkd_1 : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? this.wkd_1 : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? this.xkd_1 : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? this.ykd_1 : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.zkd_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.ake_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.bke_1 : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? this.cke_1 : placeholderFactory;
    errorFactory = errorFactory === VOID ? this.dke_1 : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? this.eke_1 : fallbackFactory;
    sizeResolver = sizeResolver === VOID ? this.fke_1 : sizeResolver;
    scale = scale === VOID ? this.gke_1 : scale;
    precision = precision === VOID ? this.hke_1 : precision;
    extras = extras === VOID ? this.ike_1 : extras;
    return $super === VOID ? this.tkv(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) : $super.tkv.call(this, fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defaults))
      return false;
    if (!equals(this.vkd_1, other.vkd_1))
      return false;
    if (!equals(this.wkd_1, other.wkd_1))
      return false;
    if (!equals(this.xkd_1, other.xkd_1))
      return false;
    if (!equals(this.ykd_1, other.ykd_1))
      return false;
    if (!this.zkd_1.equals(other.zkd_1))
      return false;
    if (!this.ake_1.equals(other.ake_1))
      return false;
    if (!this.bke_1.equals(other.bke_1))
      return false;
    if (!equals(this.cke_1, other.cke_1))
      return false;
    if (!equals(this.dke_1, other.dke_1))
      return false;
    if (!equals(this.eke_1, other.eke_1))
      return false;
    if (!equals(this.fke_1, other.fke_1))
      return false;
    if (!this.gke_1.equals(other.gke_1))
      return false;
    if (!this.hke_1.equals(other.hke_1))
      return false;
    if (!this.ike_1.equals(other.ike_1))
      return false;
    return true;
  };
  protoOf(Defaults).hashCode = function () {
    var result = hashCode(this.vkd_1);
    result = imul(result, 31) + hashCode(this.wkd_1) | 0;
    result = imul(result, 31) + hashCode(this.xkd_1) | 0;
    result = imul(result, 31) + hashCode(this.ykd_1) | 0;
    result = imul(result, 31) + this.zkd_1.hashCode() | 0;
    result = imul(result, 31) + this.ake_1.hashCode() | 0;
    result = imul(result, 31) + this.bke_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.cke_1) | 0;
    result = imul(result, 31) + hashCode(this.dke_1) | 0;
    result = imul(result, 31) + hashCode(this.eke_1) | 0;
    result = imul(result, 31) + hashCode(this.fke_1) | 0;
    result = imul(result, 31) + this.gke_1.hashCode() | 0;
    result = imul(result, 31) + this.hke_1.hashCode() | 0;
    result = imul(result, 31) + this.ike_1.hashCode() | 0;
    return result;
  };
  protoOf(Defaults).toString = function () {
    return 'Defaults(fileSystem=' + toString(this.vkd_1) + ', interceptorCoroutineContext=' + toString(this.wkd_1) + ', fetcherCoroutineContext=' + toString(this.xkd_1) + ', decoderCoroutineContext=' + toString(this.ykd_1) + ', memoryCachePolicy=' + this.zkd_1.toString() + ', diskCachePolicy=' + this.ake_1.toString() + ', networkCachePolicy=' + this.bke_1.toString() + ', placeholderFactory=' + toString(this.cke_1) + ', errorFactory=' + toString(this.dke_1) + ', fallbackFactory=' + toString(this.eke_1) + ', sizeResolver=' + toString(this.fke_1) + ', scale=' + this.gke_1.toString() + ', precision=' + this.hke_1.toString() + ', extras=' + this.ike_1.toString() + ')';
  };
  protoOf(Builder_3).ukv = function (data) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.data.<anonymous>' call
    this.hku_1 = data;
    return this;
  };
  protoOf(Builder_3).vkv = function (target) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    this.iku_1 = target;
    return this;
  };
  protoOf(Builder_3).wkv = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.coroutineContext.<anonymous>' call
    this.rku_1 = context;
    this.sku_1 = context;
    this.tku_1 = context;
    return this;
  };
  protoOf(Builder_3).xkv = function (resolver) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.size.<anonymous>' call
    this.bkv_1 = resolver;
    return this;
  };
  protoOf(Builder_3).ykv = function (scale) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.scale.<anonymous>' call
    this.ckv_1 = scale;
    return this;
  };
  protoOf(Builder_3).zkv = function (precision) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.precision.<anonymous>' call
    this.dkv_1 = precision;
    return this;
  };
  protoOf(Builder_3).akw = function (defaults) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.defaults.<anonymous>' call
    this.gku_1 = defaults;
    return this;
  };
  protoOf(Builder_3).a2u = function () {
    var tmp27_context = this.fku_1;
    var tmp0_elvis_lhs = this.hku_1;
    var tmp28_data = tmp0_elvis_lhs == null ? NullRequestData_instance : tmp0_elvis_lhs;
    var tmp29_target = this.iku_1;
    var tmp30_listener = this.jku_1;
    var tmp31_memoryCacheKey = this.kku_1;
    var memoryCacheKeyExtras = this.mku_1;
    var tmp;
    if (equals(memoryCacheKeyExtras, this.lku_1)) {
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
    var tmp33_diskCacheKey = this.nku_1;
    var tmp1_elvis_lhs = this.oku_1;
    var tmp34_fileSystem = tmp1_elvis_lhs == null ? this.gku_1.vkd_1 : tmp1_elvis_lhs;
    var tmp35_fetcherFactory = this.pku_1;
    var tmp36_decoderFactory = this.qku_1;
    var tmp2_elvis_lhs = this.uku_1;
    var tmp37_memoryCachePolicy = tmp2_elvis_lhs == null ? this.gku_1.zkd_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.vku_1;
    var tmp38_diskCachePolicy = tmp3_elvis_lhs == null ? this.gku_1.ake_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = this.wku_1;
    var tmp39_networkCachePolicy = tmp4_elvis_lhs == null ? this.gku_1.bke_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.rku_1;
    var tmp40_interceptorCoroutineContext = tmp5_elvis_lhs == null ? this.gku_1.wkd_1 : tmp5_elvis_lhs;
    var tmp6_elvis_lhs = this.sku_1;
    var tmp41_fetcherCoroutineContext = tmp6_elvis_lhs == null ? this.gku_1.xkd_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = this.tku_1;
    var tmp42_decoderCoroutineContext = tmp7_elvis_lhs == null ? this.gku_1.ykd_1 : tmp7_elvis_lhs;
    var tmp43_placeholderMemoryCacheKey = this.xku_1;
    var tmp8_elvis_lhs = this.yku_1;
    var tmp44_placeholderFactory = tmp8_elvis_lhs == null ? this.gku_1.cke_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = this.zku_1;
    var tmp45_errorFactory = tmp9_elvis_lhs == null ? this.gku_1.dke_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = this.akv_1;
    var tmp46_fallbackFactory = tmp10_elvis_lhs == null ? this.gku_1.eke_1 : tmp10_elvis_lhs;
    var tmp11_elvis_lhs = this.bkv_1;
    var tmp47_sizeResolver = tmp11_elvis_lhs == null ? this.gku_1.fke_1 : tmp11_elvis_lhs;
    var tmp12_elvis_lhs = this.ckv_1;
    var tmp48_scale = tmp12_elvis_lhs == null ? this.gku_1.gke_1 : tmp12_elvis_lhs;
    var tmp13_elvis_lhs = this.dkv_1;
    var tmp49_precision = tmp13_elvis_lhs == null ? this.gku_1.hke_1 : tmp13_elvis_lhs;
    var extras = this.ekv_1;
    var tmp_1;
    if (extras instanceof Builder_0) {
      tmp_1 = extras.a2u();
    } else {
      if (extras instanceof Extras) {
        tmp_1 = extras;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    var tmp50_extras = tmp_1;
    var tmp14_fileSystem = this.oku_1;
    var tmp15_interceptorCoroutineContext = this.rku_1;
    var tmp16_fetcherCoroutineContext = this.sku_1;
    var tmp17_decoderCoroutineContext = this.tku_1;
    var tmp18_placeholderFactory = this.yku_1;
    var tmp19_errorFactory = this.zku_1;
    var tmp20_fallbackFactory = this.akv_1;
    var tmp21_memoryCachePolicy = this.uku_1;
    var tmp22_diskCachePolicy = this.vku_1;
    var tmp23_networkCachePolicy = this.wku_1;
    var tmp24_sizeResolver = this.bkv_1;
    var tmp25_scale = this.ckv_1;
    var tmp26_precision = this.dkv_1;
    var tmp51_defined = new Defined(tmp14_fileSystem, tmp15_interceptorCoroutineContext, tmp16_fetcherCoroutineContext, tmp17_decoderCoroutineContext, tmp21_memoryCachePolicy, tmp22_diskCachePolicy, tmp23_networkCachePolicy, tmp18_placeholderFactory, tmp19_errorFactory, tmp20_fallbackFactory, tmp24_sizeResolver, tmp25_scale, tmp26_precision);
    var tmp52_defaults = this.gku_1;
    return new ImageRequest(tmp27_context, tmp28_data, tmp29_target, tmp30_listener, tmp31_memoryCacheKey, tmp32_memoryCacheKeyExtras, tmp33_diskCacheKey, tmp34_fileSystem, tmp35_fetcherFactory, tmp36_decoderFactory, tmp40_interceptorCoroutineContext, tmp41_fetcherCoroutineContext, tmp42_decoderCoroutineContext, tmp37_memoryCachePolicy, tmp38_diskCachePolicy, tmp39_networkCachePolicy, tmp43_placeholderMemoryCacheKey, tmp44_placeholderFactory, tmp45_errorFactory, tmp46_fallbackFactory, tmp47_sizeResolver, tmp48_scale, tmp49_precision, tmp50_extras, tmp51_defined, tmp52_defaults);
  };
  function Builder_3() {
    this.lku_1 = false;
  }
  function ImageRequest(context, data, target, listener, memoryCacheKey, memoryCacheKeyExtras, diskCacheKey, fileSystem, fetcherFactory, decoderFactory, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderMemoryCacheKey, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, defined, defaults) {
    this.vkc_1 = context;
    this.wkc_1 = data;
    this.xkc_1 = target;
    this.ykc_1 = listener;
    this.zkc_1 = memoryCacheKey;
    this.akd_1 = memoryCacheKeyExtras;
    this.bkd_1 = diskCacheKey;
    this.ckd_1 = fileSystem;
    this.dkd_1 = fetcherFactory;
    this.ekd_1 = decoderFactory;
    this.fkd_1 = interceptorCoroutineContext;
    this.gkd_1 = fetcherCoroutineContext;
    this.hkd_1 = decoderCoroutineContext;
    this.ikd_1 = memoryCachePolicy;
    this.jkd_1 = diskCachePolicy;
    this.kkd_1 = networkCachePolicy;
    this.lkd_1 = placeholderMemoryCacheKey;
    this.mkd_1 = placeholderFactory;
    this.nkd_1 = errorFactory;
    this.okd_1 = fallbackFactory;
    this.pkd_1 = sizeResolver;
    this.qkd_1 = scale;
    this.rkd_1 = precision;
    this.skd_1 = extras;
    this.tkd_1 = defined;
    this.ukd_1 = defaults;
  }
  protoOf(ImageRequest).okj = function () {
    var tmp0_elvis_lhs = this.mkd_1(this);
    return tmp0_elvis_lhs == null ? this.ukd_1.cke_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).bkw = function () {
    var tmp0_elvis_lhs = this.nkd_1(this);
    return tmp0_elvis_lhs == null ? this.ukd_1.dke_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).ckw = function () {
    var tmp0_elvis_lhs = this.okd_1(this);
    return tmp0_elvis_lhs == null ? this.ukd_1.eke_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).dkw = function (context) {
    return Builder_init_$Create$_4(this, context);
  };
  protoOf(ImageRequest).ekw = function (context, $super) {
    context = context === VOID ? this.vkc_1 : context;
    return $super === VOID ? this.dkw(context) : $super.dkw.call(this, context);
  };
  protoOf(ImageRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageRequest))
      return false;
    if (!equals(this.vkc_1, other.vkc_1))
      return false;
    if (!equals(this.wkc_1, other.wkc_1))
      return false;
    if (!equals(this.xkc_1, other.xkc_1))
      return false;
    if (!equals(this.ykc_1, other.ykc_1))
      return false;
    if (!(this.zkc_1 == other.zkc_1))
      return false;
    if (!equals(this.akd_1, other.akd_1))
      return false;
    if (!(this.bkd_1 == other.bkd_1))
      return false;
    if (!equals(this.ckd_1, other.ckd_1))
      return false;
    if (!equals(this.dkd_1, other.dkd_1))
      return false;
    if (!equals(this.ekd_1, other.ekd_1))
      return false;
    if (!equals(this.fkd_1, other.fkd_1))
      return false;
    if (!equals(this.gkd_1, other.gkd_1))
      return false;
    if (!equals(this.hkd_1, other.hkd_1))
      return false;
    if (!this.ikd_1.equals(other.ikd_1))
      return false;
    if (!this.jkd_1.equals(other.jkd_1))
      return false;
    if (!this.kkd_1.equals(other.kkd_1))
      return false;
    if (!equals(this.lkd_1, other.lkd_1))
      return false;
    if (!equals(this.mkd_1, other.mkd_1))
      return false;
    if (!equals(this.nkd_1, other.nkd_1))
      return false;
    if (!equals(this.okd_1, other.okd_1))
      return false;
    if (!equals(this.pkd_1, other.pkd_1))
      return false;
    if (!this.qkd_1.equals(other.qkd_1))
      return false;
    if (!this.rkd_1.equals(other.rkd_1))
      return false;
    if (!this.skd_1.equals(other.skd_1))
      return false;
    if (!this.tkd_1.equals(other.tkd_1))
      return false;
    if (!this.ukd_1.equals(other.ukd_1))
      return false;
    return true;
  };
  protoOf(ImageRequest).hashCode = function () {
    var result = hashCode(this.vkc_1);
    result = imul(result, 31) + hashCode(this.wkc_1) | 0;
    result = imul(result, 31) + (this.xkc_1 == null ? 0 : hashCode(this.xkc_1)) | 0;
    result = imul(result, 31) + (this.ykc_1 == null ? 0 : hashCode(this.ykc_1)) | 0;
    result = imul(result, 31) + (this.zkc_1 == null ? 0 : getStringHashCode(this.zkc_1)) | 0;
    result = imul(result, 31) + hashCode(this.akd_1) | 0;
    result = imul(result, 31) + (this.bkd_1 == null ? 0 : getStringHashCode(this.bkd_1)) | 0;
    result = imul(result, 31) + hashCode(this.ckd_1) | 0;
    result = imul(result, 31) + (this.dkd_1 == null ? 0 : this.dkd_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ekd_1 == null ? 0 : hashCode(this.ekd_1)) | 0;
    result = imul(result, 31) + hashCode(this.fkd_1) | 0;
    result = imul(result, 31) + hashCode(this.gkd_1) | 0;
    result = imul(result, 31) + hashCode(this.hkd_1) | 0;
    result = imul(result, 31) + this.ikd_1.hashCode() | 0;
    result = imul(result, 31) + this.jkd_1.hashCode() | 0;
    result = imul(result, 31) + this.kkd_1.hashCode() | 0;
    result = imul(result, 31) + (this.lkd_1 == null ? 0 : this.lkd_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.mkd_1) | 0;
    result = imul(result, 31) + hashCode(this.nkd_1) | 0;
    result = imul(result, 31) + hashCode(this.okd_1) | 0;
    result = imul(result, 31) + hashCode(this.pkd_1) | 0;
    result = imul(result, 31) + this.qkd_1.hashCode() | 0;
    result = imul(result, 31) + this.rkd_1.hashCode() | 0;
    result = imul(result, 31) + this.skd_1.hashCode() | 0;
    result = imul(result, 31) + this.tkd_1.hashCode() | 0;
    result = imul(result, 31) + this.ukd_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageRequest).toString = function () {
    return 'ImageRequest(context=' + toString(this.vkc_1) + ', data=' + toString(this.wkc_1) + ', target=' + toString_0(this.xkc_1) + ', listener=' + toString_0(this.ykc_1) + ', memoryCacheKey=' + this.zkc_1 + ', memoryCacheKeyExtras=' + toString(this.akd_1) + ', diskCacheKey=' + this.bkd_1 + ', fileSystem=' + toString(this.ckd_1) + ', fetcherFactory=' + toString_0(this.dkd_1) + ', decoderFactory=' + toString_0(this.ekd_1) + ', interceptorCoroutineContext=' + toString(this.fkd_1) + ', fetcherCoroutineContext=' + toString(this.gkd_1) + ', decoderCoroutineContext=' + toString(this.hkd_1) + ', memoryCachePolicy=' + this.ikd_1.toString() + ', diskCachePolicy=' + this.jkd_1.toString() + ', networkCachePolicy=' + this.kkd_1.toString() + ', placeholderMemoryCacheKey=' + toString_0(this.lkd_1) + ', placeholderFactory=' + toString(this.mkd_1) + ', errorFactory=' + toString(this.nkd_1) + ', fallbackFactory=' + toString(this.okd_1) + ', sizeResolver=' + toString(this.pkd_1) + ', scale=' + this.qkd_1.toString() + ', precision=' + this.rkd_1.toString() + ', extras=' + this.skd_1.toString() + ', defined=' + this.tkd_1.toString() + ', defaults=' + this.ukd_1.toString() + ')';
  };
  function ErrorResult(image, request, throwable) {
    this.ikh_1 = image;
    this.jkh_1 = request;
    this.kkh_1 = throwable;
  }
  protoOf(ErrorResult).uj7 = function () {
    return this.jkh_1;
  };
  protoOf(ErrorResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ErrorResult))
      return false;
    if (!equals(this.ikh_1, other.ikh_1))
      return false;
    if (!this.jkh_1.equals(other.jkh_1))
      return false;
    if (!equals(this.kkh_1, other.kkh_1))
      return false;
    return true;
  };
  protoOf(ErrorResult).hashCode = function () {
    var result = this.ikh_1 == null ? 0 : hashCode(this.ikh_1);
    result = imul(result, 31) + this.jkh_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.kkh_1) | 0;
    return result;
  };
  protoOf(ErrorResult).toString = function () {
    return 'ErrorResult(image=' + toString_0(this.ikh_1) + ', request=' + this.jkh_1.toString() + ', throwable=' + this.kkh_1.toString() + ')';
  };
  function SuccessResult(image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached) {
    dataSource = dataSource === VOID ? DataSource_MEMORY_getInstance() : dataSource;
    memoryCacheKey = memoryCacheKey === VOID ? null : memoryCacheKey;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    isSampled = isSampled === VOID ? false : isSampled;
    isPlaceholderCached = isPlaceholderCached === VOID ? false : isPlaceholderCached;
    this.ikg_1 = image;
    this.jkg_1 = request;
    this.kkg_1 = dataSource;
    this.lkg_1 = memoryCacheKey;
    this.mkg_1 = diskCacheKey;
    this.nkg_1 = isSampled;
    this.okg_1 = isPlaceholderCached;
  }
  protoOf(SuccessResult).uj7 = function () {
    return this.jkg_1;
  };
  protoOf(SuccessResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuccessResult))
      return false;
    if (!equals(this.ikg_1, other.ikg_1))
      return false;
    if (!this.jkg_1.equals(other.jkg_1))
      return false;
    if (!this.kkg_1.equals(other.kkg_1))
      return false;
    if (!equals(this.lkg_1, other.lkg_1))
      return false;
    if (!(this.mkg_1 == other.mkg_1))
      return false;
    if (!(this.nkg_1 === other.nkg_1))
      return false;
    if (!(this.okg_1 === other.okg_1))
      return false;
    return true;
  };
  protoOf(SuccessResult).hashCode = function () {
    var result = hashCode(this.ikg_1);
    result = imul(result, 31) + this.jkg_1.hashCode() | 0;
    result = imul(result, 31) + this.kkg_1.hashCode() | 0;
    result = imul(result, 31) + (this.lkg_1 == null ? 0 : this.lkg_1.hashCode()) | 0;
    result = imul(result, 31) + (this.mkg_1 == null ? 0 : getStringHashCode(this.mkg_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.nkg_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.okg_1) | 0;
    return result;
  };
  protoOf(SuccessResult).toString = function () {
    return 'SuccessResult(image=' + toString(this.ikg_1) + ', request=' + this.jkg_1.toString() + ', dataSource=' + this.kkg_1.toString() + ', memoryCacheKey=' + toString_0(this.lkg_1) + ', diskCacheKey=' + this.mkg_1 + ', isSampled=' + this.nkg_1 + ', isPlaceholderCached=' + this.okg_1 + ')';
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
    size = size === VOID ? Companion_getInstance_9().hks_1 : size;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    fileSystem = fileSystem === VOID ? defaultFileSystem() : fileSystem;
    memoryCachePolicy = memoryCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : networkCachePolicy;
    extras = extras === VOID ? Companion_getInstance_4().ikc_1 : extras;
    this.lkc_1 = context;
    this.mkc_1 = size;
    this.nkc_1 = scale;
    this.okc_1 = precision;
    this.pkc_1 = diskCacheKey;
    this.qkc_1 = fileSystem;
    this.rkc_1 = memoryCachePolicy;
    this.skc_1 = diskCachePolicy;
    this.tkc_1 = networkCachePolicy;
    this.ukc_1 = extras;
  }
  protoOf(Options_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options_0))
      return false;
    if (!equals(this.lkc_1, other.lkc_1))
      return false;
    if (!this.mkc_1.equals(other.mkc_1))
      return false;
    if (!this.nkc_1.equals(other.nkc_1))
      return false;
    if (!this.okc_1.equals(other.okc_1))
      return false;
    if (!(this.pkc_1 == other.pkc_1))
      return false;
    if (!equals(this.qkc_1, other.qkc_1))
      return false;
    if (!this.rkc_1.equals(other.rkc_1))
      return false;
    if (!this.skc_1.equals(other.skc_1))
      return false;
    if (!this.tkc_1.equals(other.tkc_1))
      return false;
    if (!this.ukc_1.equals(other.ukc_1))
      return false;
    return true;
  };
  protoOf(Options_0).hashCode = function () {
    var result = hashCode(this.lkc_1);
    result = imul(result, 31) + this.mkc_1.hashCode() | 0;
    result = imul(result, 31) + this.nkc_1.hashCode() | 0;
    result = imul(result, 31) + this.okc_1.hashCode() | 0;
    result = imul(result, 31) + (this.pkc_1 == null ? 0 : getStringHashCode(this.pkc_1)) | 0;
    result = imul(result, 31) + hashCode(this.qkc_1) | 0;
    result = imul(result, 31) + this.rkc_1.hashCode() | 0;
    result = imul(result, 31) + this.skc_1.hashCode() | 0;
    result = imul(result, 31) + this.tkc_1.hashCode() | 0;
    result = imul(result, 31) + this.ukc_1.hashCode() | 0;
    return result;
  };
  protoOf(Options_0).toString = function () {
    return 'Options(context=' + toString(this.lkc_1) + ', size=' + this.mkc_1.toString() + ', scale=' + this.nkc_1.toString() + ', precision=' + this.okc_1.toString() + ', diskCacheKey=' + this.pkc_1 + ', fileSystem=' + toString(this.qkc_1) + ', memoryCachePolicy=' + this.rkc_1.toString() + ', diskCachePolicy=' + this.skc_1.toString() + ', networkCachePolicy=' + this.tkc_1.toString() + ', extras=' + this.ukc_1.toString() + ')';
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
    var tmp0_other_with_cast = other instanceof BaseRequestDelegate ? other.fkw_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaseRequestDelegate(job) {
    this.fkw_1 = job;
  }
  protoOf(BaseRequestDelegate).toString = function () {
    return BaseRequestDelegate__toString_impl_2jbf6m(this.fkw_1);
  };
  protoOf(BaseRequestDelegate).hashCode = function () {
    return BaseRequestDelegate__hashCode_impl_j7uhm9(this.fkw_1);
  };
  protoOf(BaseRequestDelegate).equals = function (other) {
    return BaseRequestDelegate__equals_impl_k3lysr(this.fkw_1, other);
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
    if (!($this === (other instanceof Pixels ? other.pkk_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Pixels(px) {
    this.pkk_1 = px;
  }
  protoOf(Pixels).toString = function () {
    return Pixels__toString_impl_9ua830(this.pkk_1);
  };
  protoOf(Pixels).hashCode = function () {
    return Pixels__hashCode_impl_vlg4vv(this.pkk_1);
  };
  protoOf(Pixels).equals = function (other) {
    return Pixels__equals_impl_g64au9(this.pkk_1, other);
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
    this.gkw_1 = size;
  }
  protoOf(RealSizeResolver).skj = function ($completion) {
    return this.gkw_1;
  };
  protoOf(RealSizeResolver).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RealSizeResolver))
      return false;
    if (!this.gkw_1.equals(other.gkw_1))
      return false;
    return true;
  };
  protoOf(RealSizeResolver).hashCode = function () {
    return this.gkw_1.hashCode();
  };
  protoOf(RealSizeResolver).toString = function () {
    return 'RealSizeResolver(size=' + this.gkw_1.toString() + ')';
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
    this.hks_1 = new Size(Undefined_instance, Undefined_instance);
  }
  var Companion_instance_6;
  function Companion_getInstance_9() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function Size(width, height) {
    Companion_getInstance_9();
    this.skk_1 = width;
    this.tkk_1 = height;
  }
  protoOf(Size).toString = function () {
    return 'Size(width=' + toString(this.skk_1) + ', height=' + toString(this.tkk_1) + ')';
  };
  protoOf(Size).hashCode = function () {
    var result = hashCode(this.skk_1);
    result = imul(result, 31) + hashCode(this.tkk_1) | 0;
    return result;
  };
  protoOf(Size).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other : THROW_CCE();
    if (!equals(this.skk_1, tmp0_other_with_cast.skk_1))
      return false;
    if (!equals(this.tkk_1, tmp0_other_with_cast.tkk_1))
      return false;
    return true;
  };
  function Size_0(width, height) {
    return new Size(new Pixels(Dimension(width)), new Pixels(Dimension(height)));
  }
  function get_isOriginal(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_9().hks_1);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.skv_1 = SizeResolver(Companion_getInstance_9().hks_1);
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
    var this_0 = $this.pkt_1.a1();
    var sum = new Long(0, 0);
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      var tmp = sum;
      // Inline function 'coil3.util.LruCache.recomputeSize.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.c1();
      var tmp$ret$2 = safeSizeOf($this, key, value);
      sum = tmp.f3(tmp$ret$2);
    }
    return sum;
  }
  function safeSizeOf($this, key, value) {
    try {
      var size = $this.jkt(key, value);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(size.h1(new Long(0, 0)) >= 0)) {
        // Inline function 'coil3.util.LruCache.safeSizeOf.<anonymous>' call
        var message = 'sizeOf(' + toString(key) + ', ' + toString(value) + ') returned a negative value: ' + size.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return size;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        $this.qkt_1 = new Long(-1, -1);
        throw e;
      } else {
        throw $p;
      }
    }
  }
  function LruCache(maxSize) {
    this.okt_1 = maxSize;
    this.pkt_1 = LruMutableMap();
    this.qkt_1 = new Long(0, 0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.okt_1.h1(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.util.LruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(LruCache).p = function () {
    if (this.qkt_1.equals(new Long(-1, -1))) {
      this.qkt_1 = recomputeSize(this);
    }
    return this.qkt_1;
  };
  protoOf(LruCache).jkt = function (key, value) {
    return new Long(1, 0);
  };
  protoOf(LruCache).nkt = function (key, oldValue, newValue) {
  };
  protoOf(LruCache).rkt = function (key, value) {
    var oldValue = this.pkt_1.k2(key, value);
    this.qkt_1 = this.p().f3(safeSizeOf(this, key, value));
    if (!(oldValue == null)) {
      this.qkt_1 = this.p().g3(safeSizeOf(this, key, oldValue));
      this.nkt(key, oldValue, value);
    }
    this.tkt(this.okt_1);
    return oldValue;
  };
  protoOf(LruCache).zim = function (key) {
    return this.pkt_1.s2(key);
  };
  protoOf(LruCache).skt = function (key) {
    var oldValue = this.pkt_1.l2(key);
    if (!(oldValue == null)) {
      this.qkt_1 = this.p().g3(safeSizeOf(this, key, oldValue));
      this.nkt(key, oldValue, null);
    }
    return oldValue;
  };
  protoOf(LruCache).tkt = function (size) {
    $l$loop: while (this.p().h1(size) > 0) {
      if (this.pkt_1.j()) {
        if (!this.p().equals(new Long(0, 0))) {
          // Inline function 'kotlin.error' call
          var message = 'sizeOf() is returning inconsistent values';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$loop;
      }
      var _destruct__k2r9zo = first(this.pkt_1.a1());
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.c1();
      this.pkt_1.l2(key);
      this.qkt_1 = this.p().g3(safeSizeOf(this, key, value));
      this.nkt(key, value, null);
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
    return _IntPair___init__impl__vp9xsg(toLong(first).o3(32).s3(toLong(second).r3(new Long(-1, 0))));
  }
  function _IntPair___get_first__impl__dvuucb($this) {
    return _get_value__a43j40($this).p3(32).m1();
  }
  function _IntPair___get_second__impl__vrxpzp($this) {
    return _get_value__a43j40($this).r3(new Long(-1, 0)).m1();
  }
  function get_extension(_this__u8e3s4) {
    return substringAfterLast(_this__u8e3s4.s3p(), _Char___init__impl__6a9atx(46), '');
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
    if (_this__u8e3s4.fkh().a3(Level_Error_getInstance()) <= 0) {
      _this__u8e3s4.ekh(tag, Level_Error_getInstance(), null, throwable);
    }
  }
  function get_mimeTypeData() {
    _init_properties_mimeTypes_kt__qozbkj();
    return mimeTypeData;
  }
  var mimeTypeData;
  function MimeTypeMap() {
  }
  protoOf(MimeTypeMap).hkw = function (url) {
    if (isBlank(url)) {
      return null;
    }
    var extension = substringAfterLast(substringAfterLast(substringBeforeLast(substringBeforeLast(url, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(47)), _Char___init__impl__6a9atx(46), '');
    return this.ukl(extension);
  };
  protoOf(MimeTypeMap).ukl = function (extension) {
    if (isBlank(extension)) {
      return null;
    }
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var lowerExtension = extension.toLowerCase();
    var tmp0_elvis_lhs = get_mimeTypeData().s2(lowerExtension);
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
      this_0.k2('bin', 'application/octet-stream');
      this_0.k2('gz', 'application/gzip');
      this_0.k2('json', 'application/json');
      this_0.k2('pdf', 'application/pdf');
      this_0.k2('yaml', 'application/yaml');
      this_0.k2('avif', 'image/avif');
      this_0.k2('avifs', 'image/avif');
      this_0.k2('bmp', 'image/bmp');
      this_0.k2('cgm', 'image/cgm');
      this_0.k2('g3', 'image/g3fax');
      this_0.k2('gif', 'image/gif');
      this_0.k2('heif', 'image/heic');
      this_0.k2('heic', 'image/heic');
      this_0.k2('ief', 'image/ief');
      this_0.k2('jpe', 'image/jpeg');
      this_0.k2('jpeg', 'image/jpeg');
      this_0.k2('jpg', 'image/jpeg');
      this_0.k2('pjpg', 'image/jpeg');
      this_0.k2('jfif', 'image/jpeg');
      this_0.k2('jfif-tbnl', 'image/jpeg');
      this_0.k2('jif', 'image/jpeg');
      this_0.k2('png', 'image/png');
      this_0.k2('btif', 'image/prs.btif');
      this_0.k2('svg', 'image/svg+xml');
      this_0.k2('svgz', 'image/svg+xml');
      this_0.k2('tif', 'image/tiff');
      this_0.k2('tiff', 'image/tiff');
      this_0.k2('psd', 'image/vnd.adobe.photoshop');
      this_0.k2('djv', 'image/vnd.djvu');
      this_0.k2('djvu', 'image/vnd.djvu');
      this_0.k2('dwg', 'image/vnd.dwg');
      this_0.k2('dxf', 'image/vnd.dxf');
      this_0.k2('fbs', 'image/vnd.fastbidsheet');
      this_0.k2('fpx', 'image/vnd.fpx');
      this_0.k2('fst', 'image/vnd.fst');
      this_0.k2('mmr', 'image/vnd.fujixerox.edmics-mmr');
      this_0.k2('rlc', 'image/vnd.fujixerox.edmics-rlc');
      this_0.k2('mdi', 'image/vnd.ms-modi');
      this_0.k2('npx', 'image/vnd.net-fpx');
      this_0.k2('wbmp', 'image/vnd.wap.wbmp');
      this_0.k2('xif', 'image/vnd.xiff');
      this_0.k2('webp', 'image/webp');
      this_0.k2('dng', 'image/x-adobe-dng');
      this_0.k2('cr2', 'image/x-canon-cr2');
      this_0.k2('crw', 'image/x-canon-crw');
      this_0.k2('ras', 'image/x-cmu-raster');
      this_0.k2('cmx', 'image/x-cmx');
      this_0.k2('erf', 'image/x-epson-erf');
      this_0.k2('fh', 'image/x-freehand');
      this_0.k2('fh4', 'image/x-freehand');
      this_0.k2('fh5', 'image/x-freehand');
      this_0.k2('fh7', 'image/x-freehand');
      this_0.k2('fhc', 'image/x-freehand');
      this_0.k2('raf', 'image/x-fuji-raf');
      this_0.k2('icns', 'image/x-icns');
      this_0.k2('ico', 'image/x-icon');
      this_0.k2('dcr', 'image/x-kodak-dcr');
      this_0.k2('k25', 'image/x-kodak-k25');
      this_0.k2('kdc', 'image/x-kodak-kdc');
      this_0.k2('mrw', 'image/x-minolta-mrw');
      this_0.k2('nef', 'image/x-nikon-nef');
      this_0.k2('orf', 'image/x-olympus-orf');
      this_0.k2('raw', 'image/x-panasonic-raw');
      this_0.k2('rw2', 'image/x-panasonic-raw');
      this_0.k2('rwl', 'image/x-panasonic-raw');
      this_0.k2('pcx', 'image/x-pcx');
      this_0.k2('pef', 'image/x-pentax-pef');
      this_0.k2('ptx', 'image/x-pentax-pef');
      this_0.k2('pct', 'image/x-pict');
      this_0.k2('pic', 'image/x-pict');
      this_0.k2('pnm', 'image/x-portable-anymap');
      this_0.k2('pbm', 'image/x-portable-bitmap');
      this_0.k2('pgm', 'image/x-portable-graymap');
      this_0.k2('ppm', 'image/x-portable-pixmap');
      this_0.k2('rgb', 'image/x-rgb');
      this_0.k2('x3f', 'image/x-sigma-x3f');
      this_0.k2('arw', 'image/x-sony-arw');
      this_0.k2('sr2', 'image/x-sony-sr2');
      this_0.k2('srf', 'image/x-sony-srf');
      this_0.k2('xbm', 'image/x-xbitmap');
      this_0.k2('xpm', 'image/x-xpixmap');
      this_0.k2('xwd', 'image/x-xwindowdump');
      this_0.k2('css', 'text/css');
      this_0.k2('csv', 'text/csv');
      this_0.k2('htm', 'text/html');
      this_0.k2('html', 'text/html');
      this_0.k2('ics', 'text/calendar');
      this_0.k2('js', 'text/javascript');
      this_0.k2('mjs', 'text/javascript');
      this_0.k2('md', 'text/markdown');
      this_0.k2('txt', 'text/plain');
      this_0.k2('xml', 'text/xml');
      this_0.k2('3gp', 'video/3gpp');
      this_0.k2('3g2', 'video/3gpp2');
      this_0.k2('h261', 'video/h261');
      this_0.k2('h263', 'video/h263');
      this_0.k2('h264', 'video/h264');
      this_0.k2('jpgv', 'video/jpeg');
      this_0.k2('jpgm', 'video/jpm');
      this_0.k2('jpm', 'video/jpm');
      this_0.k2('mj2', 'video/mj2');
      this_0.k2('mjp2', 'video/mj2');
      this_0.k2('ts', 'video/mp2t');
      this_0.k2('mp4', 'video/mp4');
      this_0.k2('mp4v', 'video/mp4');
      this_0.k2('mpg4', 'video/mp4');
      this_0.k2('m1v', 'video/mpeg');
      this_0.k2('m2v', 'video/mpeg');
      this_0.k2('mpa', 'video/mpeg');
      this_0.k2('mpe', 'video/mpeg');
      this_0.k2('mpeg', 'video/mpeg');
      this_0.k2('mpg', 'video/mpeg');
      this_0.k2('ogv', 'video/ogg');
      this_0.k2('mov', 'video/quicktime');
      this_0.k2('qt', 'video/quicktime');
      this_0.k2('fvt', 'video/vnd.fvt');
      this_0.k2('m4u', 'video/vnd.mpegurl');
      this_0.k2('mxu', 'video/vnd.mpegurl');
      this_0.k2('pyv', 'video/vnd.ms-playready.media.pyv');
      this_0.k2('viv', 'video/vnd.vivo');
      this_0.k2('webm', 'video/webm');
      this_0.k2('f4v', 'video/x-f4v');
      this_0.k2('fli', 'video/x-fli');
      this_0.k2('flv', 'video/x-flv');
      this_0.k2('m4v', 'video/x-m4v');
      this_0.k2('mkv', 'video/x-matroska');
      this_0.k2('asf', 'video/x-ms-asf');
      this_0.k2('asx', 'video/x-ms-asf');
      this_0.k2('wm', 'video/x-ms-wm');
      this_0.k2('wmv', 'video/x-ms-wmv');
      this_0.k2('wmx', 'video/x-ms-wmx');
      this_0.k2('wvx', 'video/x-ms-wvx');
      this_0.k2('avi', 'video/x-msvideo');
      this_0.k2('movie', 'video/x-sgi-movie');
      mimeTypeData = this_0.b6();
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
      var tmp0_elvis_lhs = request.ckw();
      tmp = tmp0_elvis_lhs == null ? request.bkw() : tmp0_elvis_lhs;
    } else {
      tmp = request.bkw();
    }
    return new ErrorResult(tmp, request, throwable);
  }
  function get_emoji(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    switch (_this__u8e3s4.z2_1) {
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
      _this__u8e3s4.q4();
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
      tmp = _this__u8e3s4.tki_1;
    } else {
      tmp = Companion_getInstance_12().ikw_1;
    }
    return tmp;
  }
  function get_isPlaceholderCached(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (_this__u8e3s4 instanceof RealInterceptorChain) {
      tmp = _this__u8e3s4.uki_1;
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
      _this__u8e3s4.fkb_1.w2(0, addFirst$lambda(factory));
    }
    return _this__u8e3s4;
  }
  function addFirst_0(_this__u8e3s4, pair) {
    _init_properties_utils_kt__i7zv1b();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.util.addFirst.<anonymous>' call
    if (!(pair == null)) {
      _this__u8e3s4.ekb_1.w2(0, addFirst$lambda_0(pair));
    }
    return _this__u8e3s4;
  }
  function isFileUri(uri) {
    _init_properties_utils_kt__i7zv1b();
    return (uri.ikk_1 == null || uri.ikk_1 === 'file') && !(uri.kkk_1 == null) && !isAssetUri(uri);
  }
  function closeQuietly_0(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    try {
      _this__u8e3s4.q4();
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
    return Dispatchers_getInstance().a1h_1;
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
  protoOf(ThrowingFileSystem).uk8 = function (path, mustExist) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).xk7 = function (path) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).tk8 = function (file, mustCreate) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).sk8 = function (file) {
    throwReadWriteIsUnsupported(this);
  };
  var ThrowingFileSystem_instance;
  function ThrowingFileSystem_getInstance() {
    if (ThrowingFileSystem_instance == null)
      new ThrowingFileSystem();
    return ThrowingFileSystem_instance;
  }
  function WeakReference(referred) {
    this.dku_1 = new WeakRef(referred);
  }
  protoOf(WeakReference).dq = function () {
    var tmp0_safe_receiver = this.dku_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
  };
  function sam$coil3_EventListener_Factory$0(function_0) {
    this.jkw_1 = function_0;
  }
  protoOf(sam$coil3_EventListener_Factory$0).jkj = function (request) {
    return this.jkw_1(request);
  };
  protoOf(sam$coil3_EventListener_Factory$0).x3 = function () {
    return this.jkw_1;
  };
  protoOf(sam$coil3_EventListener_Factory$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Factory_2) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
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
    return hashCode(this.x3());
  };
  function EventListener$Factory$Companion$NONE$lambda(it) {
    return Companion_getInstance_12().ikw_1;
  }
  function Companion_7() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = EventListener$Factory$Companion$NONE$lambda;
    tmp.xke_1 = new sam$coil3_EventListener_Factory$0(tmp_0);
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
    tmp.ikw_1 = new EventListener$Companion$NONE$1();
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
  protoOf(EventListener).qkj = function (request) {
  };
  protoOf(EventListener).rkj = function (request, sizeResolver) {
  };
  protoOf(EventListener).tkj = function (request, size) {
  };
  protoOf(EventListener).tkq = function (request, input) {
  };
  protoOf(EventListener).ukq = function (request, output) {
  };
  protoOf(EventListener).mks = function (request, input) {
  };
  protoOf(EventListener).nks = function (request, output) {
  };
  protoOf(EventListener).ckr = function (request, fetcher, options) {
  };
  protoOf(EventListener).dkr = function (request, fetcher, options, result) {
  };
  protoOf(EventListener).ekr = function (request, decoder, options) {
  };
  protoOf(EventListener).gkr = function (request, decoder, options, result) {
  };
  protoOf(EventListener).nkh = function (request) {
  };
  protoOf(EventListener).mkh = function (request, result) {
  };
  protoOf(EventListener).hkh = function (request, result) {
  };
  function BitmapImage(bitmap, shareable) {
    this.kkw_1 = bitmap;
    this.lkw_1 = shareable;
  }
  protoOf(BitmapImage).uks = function () {
    return this.lkw_1;
  };
  protoOf(BitmapImage).p = function () {
    var size = toLong(this.kkw_1.k5k().k5s());
    if (size.h1(new Long(0, 0)) <= 0) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(4, 0);
      var other = this.kkw_1.x5g();
      var this_1 = this_0.h3(toLong(other));
      var other_0 = this.kkw_1.y5g();
      size = this_1.h3(toLong(other_0));
    }
    return coerceAtLeast(size, new Long(0, 0));
  };
  protoOf(BitmapImage).x5g = function () {
    return this.kkw_1.x5g();
  };
  protoOf(BitmapImage).y5g = function () {
    return this.kkw_1.y5g();
  };
  protoOf(BitmapImage).mkw = function (canvas) {
    canvas.z5n(this.kkw_1, 0, 0);
  };
  protoOf(BitmapImage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapImage))
      return false;
    if (!this.kkw_1.equals(other.kkw_1))
      return false;
    if (!(this.lkw_1 === other.lkw_1))
      return false;
    return true;
  };
  protoOf(BitmapImage).hashCode = function () {
    var result = this.kkw_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.lkw_1) | 0;
    return result;
  };
  protoOf(BitmapImage).toString = function () {
    return 'BitmapImage(bitmap=' + this.kkw_1.toString() + ', shareable=' + this.lkw_1 + ')';
  };
  function asImage(_this__u8e3s4, shareable) {
    shareable = shareable === VOID ? true : shareable;
    return new BitmapImage(_this__u8e3s4, shareable);
  }
  function toBitmap(_this__u8e3s4, width, height) {
    width = width === VOID ? _this__u8e3s4.x5g() : width;
    height = height === VOID ? _this__u8e3s4.y5g() : height;
    var colorType;
    var colorAlphaType;
    var colorSpace;
    if (_this__u8e3s4 instanceof BitmapImage) {
      colorType = _this__u8e3s4.kkw_1.g5l();
      colorAlphaType = _this__u8e3s4.kkw_1.k5k().i5s();
      colorSpace = _this__u8e3s4.kkw_1.h5l();
    } else {
      colorType = Companion_getInstance_0().s5o_1;
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
      tmp_3 = _this__u8e3s4.kkw_1.x5g() === width;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = _this__u8e3s4.kkw_1.y5g() === height;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = _this__u8e3s4.kkw_1.g5l().equals(colorType);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.kkw_1.k5k().i5s().equals(colorAlphaType);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(_this__u8e3s4.kkw_1.h5l(), colorSpace);
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4.kkw_1;
    }
    var bitmap = Bitmap_init_$Create$();
    var imageInfo = new ImageInfo(new ColorInfo(colorType, colorAlphaType, colorSpace), width, height);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!bitmap.o5k(imageInfo)) {
      // Inline function 'coil3.toBitmap.<anonymous>' call
      var message = 'allocPixels(' + imageInfo.toString() + ') failed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.apply' call
    var this_0 = Canvas_init_$Create$(bitmap);
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.mkw(this_0);
    var canvas = this_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!canvas.y5n(bitmap, 0, 0)) {
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
    tmp.nkw_1 = new PlatformContext$Companion$INSTANCE$1();
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
    return _this__u8e3s4.ukb(new Factory_3());
  }
  function getDisposable(request, job) {
    return new OneShotDisposable(job);
  }
  function needsExecuteOnMainDispatcher(request) {
    return false;
  }
  function Factory_3() {
  }
  protoOf(Factory_3).dkc = function (result, options, imageLoader) {
    return new SkiaImageDecoder(result.okl_1, options);
  };
  function SkiaImageDecoder(source, options) {
    this.okw_1 = source;
    this.pkw_1 = options;
  }
  protoOf(SkiaImageDecoder).qkw = function ($completion) {
    // Inline function 'okio.use' call
    var this_0 = this.okw_1.ckl();
    var thrown = null;
    var tmp;
    try {
      // Inline function 'coil3.decode.SkiaImageDecoder.decode.<anonymous>' call
      tmp = this_0.dka();
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
          this_0.q4();
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
    var image = Companion_getInstance_1().w5r(bytes);
    var isSampled;
    var bitmap;
    try {
      bitmap = makeFromImage(Companion_getInstance_2(), image, this.pkw_1);
      bitmap.u5k();
      isSampled = bitmap.x5g() < image.x5g() || bitmap.y5g() < image.y5g();
    }finally {
      image.q4();
    }
    return new DecodeResult(asImage(bitmap), isSampled);
  };
  protoOf(SkiaImageDecoder).fkr = function ($completion) {
    return this.qkw($completion);
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
    this.rkw_1 = imageLoader;
  }
  protoOf(NonAndroidRequestService).gkj = function (request, job, findLifecycle) {
    return new BaseRequestDelegate(_BaseRequestDelegate___init__impl__wreley(job));
  };
  protoOf(NonAndroidRequestService).ikj = function (request) {
    return request.ekw().akw(this.rkw_1.yke()).a2u();
  };
  protoOf(NonAndroidRequestService).skq = function (request, size) {
    return new Options_0(request.vkc_1, size, request.qkd_1, request.rkd_1, request.bkd_1, request.ckd_1, request.ikd_1, request.jkd_1, request.kkd_1, request.skd_1);
  };
  protoOf(NonAndroidRequestService).ykq = function (options) {
    return options;
  };
  protoOf(NonAndroidRequestService).tks = function (request, cacheValue) {
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
  protoOf(NoopSystemCallbacks).dkp = function () {
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
    var srcWidth = image.x5g();
    var srcHeight = image.y5g();
    var _destruct__k2r9zo = DecodeUtils_instance.rkk(srcWidth, srcHeight, options.mkc_1, options.nkc_1, get_maxBitmapSize_0(options));
    // Inline function 'coil3.util.component1' call
    var dstWidth = _IntPair___get_first__impl__dvuucb(_destruct__k2r9zo);
    // Inline function 'coil3.util.component2' call
    var dstHeight = _IntPair___get_second__impl__vrxpzp(_destruct__k2r9zo);
    var multiplier = DecodeUtils_instance.qkk(srcWidth, srcHeight, dstWidth, dstHeight, options.nkc_1);
    if (options.okc_1.equals(Precision_INEXACT_getInstance())) {
      multiplier = coerceAtMost_0(multiplier, 1.0);
    }
    var outWidth = numberToInt(multiplier * srcWidth);
    var outHeight = numberToInt(multiplier * srcHeight);
    var bitmap = Bitmap_init_$Create$();
    bitmap.f5l(outWidth, outHeight);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Canvas_init_$Create$(bitmap);
    var tmp;
    try {
      // Inline function 'coil3.util.makeFromImage.<anonymous>' call
      tmp = this_0.g5n(image, Companion_instance.y5v(srcWidth, srcHeight), Companion_instance.y5v(outWidth, outHeight));
    }finally {
      this_0.q4();
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
    this.xkj_1 = new Object();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ykj_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.zkj_1 = ArrayList_init_$Create$();
  }
  protoOf(ServiceLoaderComponentRegistry).akk = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xkj_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-fetchers>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance().ykj_1);
  };
  protoOf(ServiceLoaderComponentRegistry).fkk = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xkj_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-decoders>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance().zkj_1);
  };
  protoOf(ServiceLoaderComponentRegistry).skw = function (fetcher) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.xkj_1;
    ServiceLoaderComponentRegistry_getInstance().ykj_1.e(fetcher);
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
    if (_this__u8e3s4.j()) {
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
    this.tkw_1 = delegate;
  }
  protoOf(ImmutableEntry).equals = function (other) {
    return equals(this.tkw_1, other);
  };
  protoOf(ImmutableEntry).hashCode = function () {
    return hashCode(this.tkw_1);
  };
  protoOf(ImmutableEntry).toString = function () {
    return toString(this.tkw_1);
  };
  protoOf(ImmutableEntry).b1 = function () {
    return this.tkw_1.b1();
  };
  protoOf(ImmutableEntry).c1 = function () {
    return this.tkw_1.c1();
  };
  function ImmutableMap(delegate) {
    this.ukw_1 = delegate;
  }
  protoOf(ImmutableMap).a1 = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.ukw_1.a1();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      var tmp$ret$1 = new ImmutableEntry(item);
      destination.e(tmp$ret$1);
    }
    return destination;
  };
  protoOf(ImmutableMap).equals = function (other) {
    return equals(this.ukw_1, other);
  };
  protoOf(ImmutableMap).hashCode = function () {
    return hashCode(this.ukw_1);
  };
  protoOf(ImmutableMap).toString = function () {
    return toString(this.ukw_1);
  };
  protoOf(ImmutableMap).q2 = function (key) {
    return this.ukw_1.q2(key);
  };
  protoOf(ImmutableMap).s2 = function (key) {
    return this.ukw_1.s2(key);
  };
  protoOf(ImmutableMap).j = function () {
    return this.ukw_1.j();
  };
  protoOf(ImmutableMap).o2 = function () {
    return this.ukw_1.o2();
  };
  protoOf(ImmutableMap).p = function () {
    return this.ukw_1.p();
  };
  protoOf(ImmutableMap).p2 = function () {
    return this.ukw_1.p2();
  };
  function toImmutableList(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.j()) {
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
    this.vkw_1 = delegate;
  }
  protoOf(ImmutableIterator).equals = function (other) {
    return equals(this.vkw_1, other);
  };
  protoOf(ImmutableIterator).hashCode = function () {
    return hashCode(this.vkw_1);
  };
  protoOf(ImmutableIterator).toString = function () {
    return toString(this.vkw_1);
  };
  protoOf(ImmutableIterator).n = function () {
    return this.vkw_1.n();
  };
  protoOf(ImmutableIterator).o = function () {
    return this.vkw_1.o();
  };
  function ImmutableListIterator(delegate) {
    this.wkw_1 = delegate;
  }
  protoOf(ImmutableListIterator).equals = function (other) {
    return equals(this.wkw_1, other);
  };
  protoOf(ImmutableListIterator).hashCode = function () {
    return hashCode(this.wkw_1);
  };
  protoOf(ImmutableListIterator).toString = function () {
    return toString(this.wkw_1);
  };
  protoOf(ImmutableListIterator).n = function () {
    return this.wkw_1.n();
  };
  protoOf(ImmutableListIterator).d5 = function () {
    return this.wkw_1.d5();
  };
  protoOf(ImmutableListIterator).o = function () {
    return this.wkw_1.o();
  };
  protoOf(ImmutableListIterator).e5 = function () {
    return this.wkw_1.e5();
  };
  protoOf(ImmutableListIterator).f5 = function () {
    return this.wkw_1.f5();
  };
  protoOf(ImmutableListIterator).g5 = function () {
    return this.wkw_1.g5();
  };
  function ImmutableList(delegate) {
    this.xkw_1 = delegate;
  }
  protoOf(ImmutableList).m = function () {
    return new ImmutableIterator(this.xkw_1.m());
  };
  protoOf(ImmutableList).w = function (index) {
    return new ImmutableListIterator(this.xkw_1.w(index));
  };
  protoOf(ImmutableList).equals = function (other) {
    return equals(this.xkw_1, other);
  };
  protoOf(ImmutableList).hashCode = function () {
    return hashCode(this.xkw_1);
  };
  protoOf(ImmutableList).toString = function () {
    return toString(this.xkw_1);
  };
  protoOf(ImmutableList).ch = function (element) {
    return this.xkw_1.v(element);
  };
  protoOf(ImmutableList).v = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ch((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).dh = function (elements) {
    return this.xkw_1.g2(elements);
  };
  protoOf(ImmutableList).g2 = function (elements) {
    return this.dh(elements);
  };
  protoOf(ImmutableList).u = function (index) {
    return this.xkw_1.u(index);
  };
  protoOf(ImmutableList).x3s = function (element) {
    return this.xkw_1.x(element);
  };
  protoOf(ImmutableList).x = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.x3s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).j = function () {
    return this.xkw_1.j();
  };
  protoOf(ImmutableList).y3s = function (element) {
    return this.xkw_1.h2(element);
  };
  protoOf(ImmutableList).h2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.y3s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).j2 = function (fromIndex, toIndex) {
    return this.xkw_1.j2(fromIndex, toIndex);
  };
  protoOf(ImmutableList).p = function () {
    return this.xkw_1.p();
  };
  function MutableEntry_0($outer, delegate) {
    this.zkw_1 = $outer;
    this.ykw_1 = delegate;
  }
  protoOf(MutableEntry_0).b1 = function () {
    return this.ykw_1.b1();
  };
  protoOf(MutableEntry_0).c1 = function () {
    return this.ykw_1.c1();
  };
  function LruMutableMap_0(delegate) {
    this.akx_1 = delegate;
  }
  protoOf(LruMutableMap_0).a1 = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.akx_1.a1();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      var tmp$ret$1 = new MutableEntry_0(this, item);
      destination.e(tmp$ret$1);
    }
    return destination;
  };
  protoOf(LruMutableMap_0).zim = function (key) {
    var item = this.akx_1.l2(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.akx_1.k2(key, item);
    }
    return item;
  };
  protoOf(LruMutableMap_0).s2 = function (key) {
    if (!!(key == null))
      return null;
    return this.zim(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).rkt = function (key, value) {
    var item = this.akx_1.l2(key);
    // Inline function 'kotlin.collections.set' call
    this.akx_1.k2(key, value);
    return item;
  };
  protoOf(LruMutableMap_0).k2 = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.rkt(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(LruMutableMap_0).m2 = function (from) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.a1().m();
    while (_iterator__ex2g4s.n()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.o();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.c1();
      this.rkt(key, value);
    }
  };
  protoOf(LruMutableMap_0).n2 = function () {
    this.akx_1.n2();
  };
  protoOf(LruMutableMap_0).skt = function (key) {
    return this.akx_1.l2(key);
  };
  protoOf(LruMutableMap_0).l2 = function (key) {
    if (!!(key == null))
      return null;
    return this.skt(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).o2 = function () {
    return this.akx_1.o2();
  };
  protoOf(LruMutableMap_0).p2 = function () {
    return this.akx_1.p2();
  };
  protoOf(LruMutableMap_0).bkx = function (key) {
    return this.akx_1.q2(key);
  };
  protoOf(LruMutableMap_0).q2 = function (key) {
    if (!!(key == null))
      return false;
    return this.bkx(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).j = function () {
    return this.akx_1.j();
  };
  protoOf(LruMutableMap_0).p = function () {
    return this.akx_1.p();
  };
  function addAppleComponents(_this__u8e3s4, options) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  protoOf(BaseRequestDelegate).hkj = assertActive;
  protoOf(BaseRequestDelegate).v4a = start;
  protoOf(BaseRequestDelegate).kkj = awaitStarted;
  protoOf(BaseRequestDelegate).ukj = complete;
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
  _.$_$.h = NullRequestDataException;
  _.$_$.i = SuccessResult;
  _.$_$.j = get_crossfadeMillis;
  _.$_$.k = Pixels;
  _.$_$.l = Dimension;
  _.$_$.m = Size;
  _.$_$.n = Target;
  _.$_$.o = FetcherServiceLoaderTarget;
  _.$_$.p = BitmapImage;
  _.$_$.q = Key;
  _.$_$.r = ImageLoader;
  _.$_$.s = Uri;
  _.$_$.t = getExtra;
  _.$_$.u = toBitmap;
  _.$_$.v = DataSource_DISK_getInstance;
  _.$_$.w = DataSource_MEMORY_CACHE_getInstance;
  _.$_$.x = DataSource_NETWORK_getInstance;
  _.$_$.y = Precision_INEXACT_getInstance;
  _.$_$.z = Scale_FILL_getInstance;
  _.$_$.a1 = Scale_FIT_getInstance;
  _.$_$.b1 = Builder_init_$Create$_3;
  _.$_$.c1 = Builder_init_$Create$_2;
  _.$_$.d1 = Undefined_instance;
  _.$_$.e1 = Companion_getInstance_10;
  _.$_$.f1 = MimeTypeMap_instance;
  _.$_$.g1 = ServiceLoaderComponentRegistry_getInstance;
  _.$_$.h1 = Companion_getInstance_13;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-core.js.map
