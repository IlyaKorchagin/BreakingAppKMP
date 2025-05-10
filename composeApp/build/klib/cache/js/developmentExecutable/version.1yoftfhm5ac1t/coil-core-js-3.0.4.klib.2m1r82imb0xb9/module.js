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
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var protoOf = kotlin_kotlin.$_$.yh;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var toMutableList = kotlin_kotlin.$_$.ae;
  var listOf = kotlin_kotlin.$_$.qb;
  var to = kotlin_kotlin.$_$.pp;
  var emptyList = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var addAll = kotlin_kotlin.$_$.b8;
  var lazy = kotlin_kotlin.$_$.bp;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var isInterface = kotlin_kotlin.$_$.gh;
  var Unit_getInstance = kotlin_kotlin.$_$.q6;
  var VOID = kotlin_kotlin.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.hj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ng;
  var initMetadataForCompanion = kotlin_kotlin.$_$.rg;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var toMutableMap = kotlin_kotlin.$_$.ce;
  var equals = kotlin_kotlin.$_$.gg;
  var hashCode = kotlin_kotlin.$_$.pg;
  var toString = kotlin_kotlin.$_$.ci;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var FunctionAdapter = kotlin_kotlin.$_$.sf;
  var lazyOf = kotlin_kotlin.$_$.zo;
  var CoroutineImpl = kotlin_kotlin.$_$.if;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.re;
  var initMetadataForLambda = kotlin_kotlin.$_$.vg;
  var toString_0 = kotlin_kotlin.$_$.op;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.sg;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f3;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cp;
  var CancellationException = kotlin_kotlin.$_$.qe;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z2;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.e6;
  var Path = kotlin_com_squareup_okio_okio.$_$.k;
  var getKClass = kotlin_kotlin.$_$.f;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.we;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var sortedWith = kotlin_kotlin.$_$.dd;
  var Comparator = kotlin_kotlin.$_$.in;
  var compareValues = kotlin_kotlin.$_$.ne;
  var SuspendFunction1 = kotlin_kotlin.$_$.kf;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var startsWith = kotlin_kotlin.$_$.ql;
  var joinToString = kotlin_kotlin.$_$.cb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y3;
  var indexOf = kotlin_kotlin.$_$.vk;
  var charSequenceLength = kotlin_kotlin.$_$.bg;
  var Companion_getInstance = kotlin_com_squareup_okio_okio.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var replace = kotlin_kotlin.$_$.ll;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var charSequenceGet = kotlin_kotlin.$_$.ag;
  var toInt = kotlin_kotlin.$_$.km;
  var toByte = kotlin_kotlin.$_$.zh;
  var NumberFormatException = kotlin_kotlin.$_$.tn;
  var decodeToString = kotlin_kotlin.$_$.kk;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.f4;
  var Annotation = kotlin_kotlin.$_$.bn;
  var THROW_IAE = kotlin_kotlin.$_$.yn;
  var enumEntries = kotlin_kotlin.$_$.qf;
  var Enum = kotlin_kotlin.$_$.jn;
  var getBooleanHashCode = kotlin_kotlin.$_$.kg;
  var takeHighestOneBit = kotlin_kotlin.$_$.hp;
  var coerceAtLeast = kotlin_kotlin.$_$.qi;
  var coerceAtMost = kotlin_kotlin.$_$.ui;
  var initMetadataForObject = kotlin_kotlin.$_$.wg;
  var AutoCloseable = kotlin_kotlin.$_$.dn;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var buffer = kotlin_com_squareup_okio_okio.$_$.n;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.o;
  var addSuppressed = kotlin_kotlin.$_$.lo;
  var Long = kotlin_kotlin.$_$.pn;
  var toLong = kotlin_kotlin.$_$.ai;
  var numberToLong = kotlin_kotlin.$_$.vh;
  var coerceIn = kotlin_kotlin.$_$.yi;
  var Exception = kotlin_kotlin.$_$.ln;
  var IOException_init_$Create$ = kotlin_com_squareup_okio_okio.$_$.a;
  var EOFException = kotlin_com_squareup_okio_okio.$_$.f;
  var charArrayOf = kotlin_kotlin.$_$.yf;
  var split = kotlin_kotlin.$_$.ol;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g3;
  var booleanArray = kotlin_kotlin.$_$.wf;
  var longArray = kotlin_kotlin.$_$.ph;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var StringBuilder = kotlin_kotlin.$_$.dk;
  var toLong_0 = kotlin_kotlin.$_$.mm;
  var IOException = kotlin_com_squareup_okio_okio.$_$.j;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p1;
  var ForwardingFileSystem = kotlin_com_squareup_okio_okio.$_$.i;
  var blackholeSink = kotlin_com_squareup_okio_okio.$_$.m;
  var copyToArray = kotlin_kotlin.$_$.v9;
  var Sink = kotlin_com_squareup_okio_okio.$_$.l;
  var Companion_getInstance_0 = kotlin_com_squareup_okio_okio.$_$.b;
  var isByteArray = kotlin_kotlin.$_$.ah;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var emptyMap = kotlin_kotlin.$_$.aa;
  var abs = kotlin_kotlin.$_$.ei;
  var plus = kotlin_kotlin.$_$.dc;
  var emptySet = kotlin_kotlin.$_$.ba;
  var toSet = kotlin_kotlin.$_$.ee;
  var firstOrNull = kotlin_kotlin.$_$.ia;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.u1;
  var KtMap = kotlin_kotlin.$_$.m7;
  var KtMutableMap = kotlin_kotlin.$_$.u7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t5;
  var RuntimeException = kotlin_kotlin.$_$.wn;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.f3;
  var captureStack = kotlin_kotlin.$_$.xf;
  var first = kotlin_kotlin.$_$.na;
  var substringAfterLast = kotlin_kotlin.$_$.tl;
  var FileNotFoundException = kotlin_com_squareup_okio_okio.$_$.g;
  var Companion_getInstance_1 = kotlin_com_squareup_okio_okio.$_$.c;
  var Default_getInstance = kotlin_kotlin.$_$.c6;
  var nextULong = kotlin_kotlin.$_$.oi;
  var ULong = kotlin_kotlin.$_$.go;
  var isBlank = kotlin_kotlin.$_$.wk;
  var substringBeforeLast = kotlin_kotlin.$_$.wl;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l3;
  var FileSystem = kotlin_com_squareup_okio_okio.$_$.h;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.pi;
  var Companion_getInstance_2 = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.z5;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var coerceAtMost_0 = kotlin_kotlin.$_$.si;
  var numberToInt = kotlin_kotlin.$_$.uh;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var Entry = kotlin_kotlin.$_$.k7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.g1;
  var Iterator = kotlin_kotlin.$_$.e7;
  var ListIterator = kotlin_kotlin.$_$.i7;
  var KtList = kotlin_kotlin.$_$.j7;
  var MutableEntry = kotlin_kotlin.$_$.s7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForClass(ComponentRegistry, 'ComponentRegistry', ComponentRegistry_init_$Create$);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(Builder_0, 'Builder', Builder_init_$Create$_1);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Extras, 'Extras');
  initMetadataForInterface(Image, 'Image');
  initMetadataForInterface(Factory_3, 'Factory');
  initMetadataForClass(sam$coil3_EventListener_Factory$0, 'sam$coil3_EventListener_Factory$0', VOID, VOID, [Factory_3, FunctionAdapter]);
  initMetadataForClass(Builder_1, 'Builder');
  initMetadataForInterface(ImageLoader, 'ImageLoader', VOID, VOID, VOID, [1]);
  initMetadataForLambda(RealImageLoader$execute$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Options, 'Options');
  initMetadataForLambda(RealImageLoader$enqueue$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RealImageLoader$execute$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RealImageLoader$execute$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($executeCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($executeCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(RealImageLoader, 'RealImageLoader', VOID, VOID, [ImageLoader], [1, 2]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Uri, 'Uri');
  initMetadataForClass(Poko, 'Poko', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalCoilApi, 'InternalCoilApi', VOID, VOID, [Annotation]);
  initMetadataForClass(MainThread, 'MainThread', VOID, VOID, [Annotation]);
  initMetadataForClass(VisibleForTesting, 'VisibleForTesting', VOID, VOID, [Annotation]);
  initMetadataForClass(WorkerThread, 'WorkerThread', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalCoilApi, 'ExperimentalCoilApi', VOID, VOID, [Annotation]);
  initMetadataForClass(DelicateCoilApi, 'DelicateCoilApi', VOID, VOID, [Annotation]);
  initMetadataForClass(DataSource, 'DataSource', VOID, Enum);
  initMetadataForClass(DecodeResult, 'DecodeResult');
  initMetadataForObject(DecodeUtils, 'DecodeUtils');
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForInterface(Decoder, 'Decoder', VOID, VOID, VOID, [0]);
  initMetadataForClass(Metadata, 'Metadata');
  initMetadataForInterface(ImageSource, 'ImageSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(FileImageSource, 'FileImageSource', VOID, VOID, [ImageSource]);
  initMetadataForClass(SourceImageSource, 'SourceImageSource', VOID, VOID, [ImageSource]);
  initMetadataForInterface(Snapshot, 'Snapshot', VOID, VOID, [AutoCloseable]);
  initMetadataForInterface(Editor, 'Editor');
  initMetadataForClass(Builder_2, 'Builder', Builder_2);
  initMetadataForInterface(DiskCache, 'DiskCache');
  initMetadataForClass(Snapshot_0, 'Snapshot', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(Editor_0, 'Editor');
  initMetadataForClass(Entry_0, 'Entry');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(DiskLruCache$fileSystem$1, VOID, VOID, ForwardingFileSystem);
  initMetadataForLambda(DiskLruCache$launchCleanup$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(DiskLruCache, 'DiskLruCache', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(FaultHidingSink, 'FaultHidingSink', VOID, VOID, [Sink]);
  initMetadataForClass(RealSnapshot, 'RealSnapshot', VOID, VOID, [Snapshot]);
  initMetadataForClass(RealEditor, 'RealEditor', VOID, VOID, [Editor]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RealDiskCache, 'RealDiskCache', VOID, VOID, [DiskCache]);
  initMetadataForInterface(Factory_1, 'Factory');
  initMetadataForClass(Factory_0, 'Factory', Factory_0, VOID, [Factory_1]);
  initMetadataForInterface(Fetcher, 'Fetcher', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteArrayFetcher, 'ByteArrayFetcher', VOID, VOID, [Fetcher], [0]);
  initMetadataForInterface(FetchResult, 'FetchResult');
  initMetadataForClass(SourceFetchResult, 'SourceFetchResult', VOID, VOID, [FetchResult]);
  initMetadataForClass(ImageFetchResult, 'ImageFetchResult', VOID, VOID, [FetchResult]);
  initMetadataForClass(Factory_2, 'Factory', Factory_2, VOID, [Factory_1]);
  initMetadataForClass(FileUriFetcher, 'FileUriFetcher', VOID, VOID, [Fetcher], [0]);
  initMetadataForClass(ExecuteResult, 'ExecuteResult');
  initMetadataForCompanion(Companion_3);
  initMetadataForLambda(EngineInterceptor$intercept$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(EngineInterceptor$execute$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($interceptCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($executeCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($fetchCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($decodeCOROUTINE$5, CoroutineImpl);
  initMetadataForInterface(Interceptor, 'Interceptor', VOID, VOID, VOID, [1]);
  initMetadataForClass(EngineInterceptor, 'EngineInterceptor', VOID, VOID, [Interceptor], [1, 4, 5, 6]);
  initMetadataForInterface(Chain, 'Chain', VOID, VOID, VOID, [0]);
  initMetadataForCoroutine($proceedCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(RealInterceptorChain, 'RealInterceptorChain', VOID, VOID, [Chain], [0]);
  initMetadataForInterface(Keyer, 'Keyer');
  initMetadataForClass(FileUriKeyer, 'FileUriKeyer', FileUriKeyer, VOID, [Keyer]);
  initMetadataForClass(UriKeyer, 'UriKeyer', UriKeyer, VOID, [Keyer]);
  initMetadataForInterface(Mapper, 'Mapper');
  initMetadataForClass(PathMapper, 'PathMapper', PathMapper, VOID, [Mapper]);
  initMetadataForClass(StringMapper, 'StringMapper', StringMapper, VOID, [Mapper]);
  initMetadataForClass(Key_0, 'Key');
  initMetadataForClass(Value, 'Value');
  initMetadataForClass(Builder_3, 'Builder', Builder_3);
  initMetadataForInterface(MemoryCache, 'MemoryCache');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(MemoryCacheService, 'MemoryCacheService');
  initMetadataForClass(RealMemoryCache, 'RealMemoryCache', VOID, VOID, [MemoryCache]);
  initMetadataForInterface(StrongMemoryCache, 'StrongMemoryCache');
  initMetadataForClass(InternalValue, 'InternalValue');
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(RealStrongMemoryCache$cache$1, VOID, VOID, LruCache);
  initMetadataForClass(RealStrongMemoryCache, 'RealStrongMemoryCache', VOID, VOID, [StrongMemoryCache]);
  initMetadataForClass(EmptyStrongMemoryCache, 'EmptyStrongMemoryCache', VOID, VOID, [StrongMemoryCache]);
  initMetadataForInterface(WeakMemoryCache, 'WeakMemoryCache');
  initMetadataForClass(InternalValue_0, 'InternalValue');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(RealWeakMemoryCache, 'RealWeakMemoryCache', RealWeakMemoryCache, VOID, [WeakMemoryCache]);
  initMetadataForClass(EmptyWeakMemoryCache, 'EmptyWeakMemoryCache', EmptyWeakMemoryCache, VOID, [WeakMemoryCache]);
  initMetadataForClass(CachePolicy, 'CachePolicy', VOID, Enum);
  initMetadataForInterface(Disposable, 'Disposable');
  initMetadataForClass(OneShotDisposable, 'OneShotDisposable', VOID, VOID, [Disposable]);
  initMetadataForCompanion(Companion_6);
  function onStart(placeholder) {
  }
  function onError(error) {
  }
  function onSuccess(result) {
  }
  initMetadataForInterface(Target, 'Target');
  initMetadataForClass(ImageRequest$Builder$target$4, VOID, VOID, VOID, [Target]);
  function onStart_0(request) {
  }
  function onCancel(request) {
  }
  function onError_0(request, result) {
  }
  function onSuccess_0(request, result) {
  }
  initMetadataForInterface(Listener, 'Listener');
  initMetadataForClass(ImageRequest$Builder$listener$5, VOID, VOID, VOID, [Listener]);
  initMetadataForClass(Defined, 'Defined');
  initMetadataForClass(Defaults, 'Defaults', Defaults);
  initMetadataForClass(Builder_4, 'Builder');
  initMetadataForClass(ImageRequest, 'ImageRequest');
  initMetadataForInterface(ImageResult, 'ImageResult');
  initMetadataForClass(ErrorResult, 'ErrorResult', VOID, VOID, [ImageResult]);
  initMetadataForClass(SuccessResult, 'SuccessResult', VOID, VOID, [ImageResult]);
  initMetadataForObject(NullRequestData, 'NullRequestData');
  initMetadataForClass(NullRequestDataException, 'NullRequestDataException', NullRequestDataException, RuntimeException);
  initMetadataForClass(Options_0, 'Options');
  function assertActive() {
  }
  function start() {
  }
  function awaitStarted($completion) {
    return Unit_getInstance();
  }
  function complete() {
  }
  function dispose() {
  }
  initMetadataForInterface(RequestDelegate, 'RequestDelegate', VOID, VOID, VOID, [0]);
  initMetadataForClass(BaseRequestDelegate, 'BaseRequestDelegate', VOID, VOID, [RequestDelegate], [0]);
  initMetadataForInterface(RequestService, 'RequestService');
  initMetadataForInterface(Dimension, 'Dimension');
  initMetadataForClass(Pixels, 'Pixels', VOID, VOID, [Dimension]);
  initMetadataForObject(Undefined, 'Undefined', VOID, VOID, [Dimension]);
  initMetadataForClass(Precision, 'Precision', VOID, Enum);
  initMetadataForInterface(SizeResolver, 'SizeResolver', VOID, VOID, VOID, [0]);
  initMetadataForClass(RealSizeResolver, 'RealSizeResolver', VOID, VOID, [SizeResolver], [0]);
  initMetadataForClass(Scale, 'Scale', VOID, Enum);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Size, 'Size');
  initMetadataForCompanion(Companion_8);
  function priority() {
    return 0;
  }
  initMetadataForInterface(FetcherServiceLoaderTarget, 'FetcherServiceLoaderTarget');
  function priority_0() {
    return 0;
  }
  initMetadataForInterface(DecoderServiceLoaderTarget, 'DecoderServiceLoaderTarget');
  initMetadataForInterface(SystemCallbacks, 'SystemCallbacks');
  initMetadataForClass(IntPair, 'IntPair');
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForInterface(Logger, 'Logger');
  initMetadataForObject(MimeTypeMap, 'MimeTypeMap');
  initMetadataForObject(ThrowingFileSystem, 'ThrowingFileSystem', VOID, FileSystem);
  initMetadataForClass(WeakReference, 'WeakReference');
  initMetadataForClass(sam$coil3_EventListener_Factory$0_0, 'sam$coil3_EventListener_Factory$0', VOID, VOID, [Factory_3, FunctionAdapter]);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(EventListener, 'EventListener', VOID, VOID, [Listener]);
  initMetadataForClass(EventListener$Companion$NONE$1, VOID, VOID, EventListener);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(BitmapImage, 'BitmapImage', VOID, VOID, [Image]);
  initMetadataForClass(PlatformContext, 'PlatformContext');
  initMetadataForClass(PlatformContext$Companion$INSTANCE$1, VOID, VOID, PlatformContext);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Factory_4, 'Factory', Factory_4, VOID, [Factory]);
  initMetadataForClass(SkiaImageDecoder, 'SkiaImageDecoder', VOID, VOID, [Decoder], [0]);
  initMetadataForClass(NonAndroidRequestService, 'NonAndroidRequestService', VOID, VOID, [RequestService]);
  initMetadataForClass(NoopSystemCallbacks, 'NoopSystemCallbacks', NoopSystemCallbacks, VOID, [SystemCallbacks]);
  initMetadataForObject(ServiceLoaderComponentRegistry, 'ServiceLoaderComponentRegistry');
  initMetadataForClass(ImmutableEntry, 'ImmutableEntry', VOID, VOID, [Entry]);
  initMetadataForClass(ImmutableMap, 'ImmutableMap', VOID, VOID, [KtMap]);
  initMetadataForClass(ImmutableIterator, 'ImmutableIterator', VOID, VOID, [Iterator]);
  initMetadataForClass(ImmutableListIterator, 'ImmutableListIterator', VOID, VOID, [ListIterator]);
  initMetadataForClass(ImmutableList, 'ImmutableList', VOID, VOID, [KtList]);
  initMetadataForClass(MutableEntry_0, 'MutableEntry', VOID, VOID, [MutableEntry]);
  initMetadataForClass(LruMutableMap_0, 'LruMutableMap', VOID, VOID, [KtMutableMap]);
  //endregion
  function Builder_init_$Init$($this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interceptors_1 = ArrayList_init_$Create$();
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.mappers_1 = ArrayList_init_$Create$();
    var tmp_1 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.keyers_1 = ArrayList_init_$Create$();
    var tmp_2 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.lazyFetcherFactories_1 = ArrayList_init_$Create$();
    var tmp_3 = $this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.lazyDecoderFactories_1 = ArrayList_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(registry, $this) {
    Builder.call($this);
    $this.interceptors_1 = toMutableList(registry.interceptors_1);
    $this.mappers_1 = toMutableList(registry.mappers_1);
    $this.keyers_1 = toMutableList(registry.keyers_1);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = registry.get_fetcherFactories_4dfruy_k$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$1 = ComponentRegistry$Builder$_init_$lambda_dk7m6y(item);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    tmp.lazyFetcherFactories_1 = destination;
    var tmp_0 = $this;
    // Inline function 'kotlin.collections.mapTo' call
    var this_1 = registry.get_decoderFactories_plk5cd_k$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'coil3.Builder.<init>.<anonymous>' call
      var tmp$ret$4 = ComponentRegistry$Builder$_init_$lambda_dk7m6y_0(item_0);
      destination_0.add_utx5q5_k$(tmp$ret$4);
    }
    tmp_0.lazyDecoderFactories_1 = destination_0;
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
  function _set_lazyFetcherFactories__icinby($this, _set____db54di) {
    $this.lazyFetcherFactories_1 = _set____db54di;
  }
  function _get_lazyFetcherFactories__walbca($this) {
    return $this.lazyFetcherFactories_1;
  }
  function _set_lazyDecoderFactories__d8gvz($this, _set____db54di) {
    $this.lazyDecoderFactories_1 = _set____db54di;
  }
  function _get_lazyDecoderFactories__dku74d($this) {
    return $this.lazyDecoderFactories_1;
  }
  function ComponentRegistry_init_$Init$($this) {
    ComponentRegistry.call($this, emptyList(), emptyList(), emptyList(), emptyList(), emptyList());
    return $this;
  }
  function ComponentRegistry_init_$Create$() {
    return ComponentRegistry_init_$Init$(objectCreate(protoOf(ComponentRegistry)));
  }
  protoOf(Builder).get_interceptors_wsg560_k$ = function () {
    return this.interceptors_1;
  };
  protoOf(Builder).get_mappers_9q162y_k$ = function () {
    return this.mappers_1;
  };
  protoOf(Builder).get_keyers_66404v_k$ = function () {
    return this.keyers_1;
  };
  protoOf(Builder).get_lazyFetcherFactories_4y7ji9_k$ = function () {
    return this.lazyFetcherFactories_1;
  };
  protoOf(Builder).get_lazyDecoderFactories_pxqaiq_k$ = function () {
    return this.lazyDecoderFactories_1;
  };
  protoOf(Builder).add_qfrar0_k$ = function (interceptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.interceptors_1.add_utx5q5_k$(interceptor);
    return this;
  };
  protoOf(Builder).add_abfi6n_k$ = function (mapper, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.mappers_1;
    var element = to(mapper, type);
    this_0.add_utx5q5_k$(element);
    return this;
  };
  protoOf(Builder).add_ry2ic9_k$ = function (keyer, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.keyers_1;
    var element = to(keyer, type);
    this_0.add_utx5q5_k$(element);
    return this;
  };
  protoOf(Builder).add_kpo1zt_k$ = function (factory, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.lazyFetcherFactories_1;
    var element = ComponentRegistry$Builder$add$lambda(factory, type);
    this_0.add_utx5q5_k$(element);
    return this;
  };
  protoOf(Builder).addFetcherFactories_4o3jsg_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addFetcherFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.lazyFetcherFactories_1.add_utx5q5_k$(factory);
    return this;
  };
  protoOf(Builder).add_5btad7_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.lazyDecoderFactories_1;
    var element = ComponentRegistry$Builder$add$lambda_0(factory);
    this_0.add_utx5q5_k$(element);
    return this;
  };
  protoOf(Builder).addDecoderFactories_je1v81_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.addDecoderFactories.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.lazyDecoderFactories_1.add_utx5q5_k$(factory);
    return this;
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ComponentRegistry(toImmutableList(this.interceptors_1), toImmutableList(this.mappers_1), toImmutableList(this.keyers_1), toImmutableList(this.lazyFetcherFactories_1), toImmutableList(this.lazyDecoderFactories_1));
  };
  function Builder() {
  }
  function ComponentRegistry$fetcherFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.lazyFetcherFactories_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.get_c1px32_k$(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.fetcherFactories$delegate.<anonymous>.<anonymous>' call
      this$0.lazyFetcherFactories_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry$decoderFactories$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      // Inline function 'coil3.util.flatMapIndices' call
      var this_0 = this$0.lazyDecoderFactories_1;
      // Inline function 'kotlin.collections.mutableListOf' call
      var destination = ArrayList_init_$Create$();
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
          var elements = this_0.get_c1px32_k$(i)();
          addAll(destination, elements);
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.ComponentRegistry.decoderFactories$delegate.<anonymous>.<anonymous>' call
      this$0.lazyDecoderFactories_1 = emptyList();
      return destination;
    };
  }
  function ComponentRegistry(interceptors, mappers, keyers, lazyFetcherFactories, lazyDecoderFactories) {
    this.interceptors_1 = interceptors;
    this.mappers_1 = mappers;
    this.keyers_1 = keyers;
    this.lazyFetcherFactories_1 = lazyFetcherFactories;
    this.lazyDecoderFactories_1 = lazyDecoderFactories;
    var tmp = this;
    tmp.fetcherFactories$delegate_1 = lazy(ComponentRegistry$fetcherFactories$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.decoderFactories$delegate_1 = lazy(ComponentRegistry$decoderFactories$delegate$lambda(this));
  }
  protoOf(ComponentRegistry).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  protoOf(ComponentRegistry).get_mappers_f47lux_k$ = function () {
    return this.mappers_1;
  };
  protoOf(ComponentRegistry).get_keyers_fn8asw_k$ = function () {
    return this.keyers_1;
  };
  protoOf(ComponentRegistry).get_fetcherFactories_4dfruy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fetcherFactories$delegate_1;
    fetcherFactories$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(ComponentRegistry).get_decoderFactories_plk5cd_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.decoderFactories$delegate_1;
    decoderFactories$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(ComponentRegistry).map_kbsc43_k$ = function (data, options) {
    var mappedData = data;
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.mappers_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.map.<anonymous>' call
        var destruct = this_0.get_c1px32_k$(i);
        var mapper = destruct.component1_7eebsc_k$();
        var type = destruct.component2_7eebsb_k$();
        if (type.isInstance_6tn68w_k$(mappedData)) {
          var tmp0_safe_receiver = (isInterface(mapper, Mapper) ? mapper : THROW_CCE()).map_z38an7_k$(mappedData, options);
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
  protoOf(ComponentRegistry).key_98ny9c_k$ = function (data, options) {
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.keyers_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.ComponentRegistry.key.<anonymous>' call
        var destruct = this_0.get_c1px32_k$(i);
        var keyer = destruct.component1_7eebsc_k$();
        var type = destruct.component2_7eebsb_k$();
        if (type.isInstance_6tn68w_k$(data)) {
          var tmp0_safe_receiver = (isInterface(keyer, Keyer) ? keyer : THROW_CCE()).key_whhcm8_k$(data, options);
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
  protoOf(ComponentRegistry).newFetcher_78dey7_k$ = function (data, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.get_fetcherFactories_4dfruy_k$().get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var _destruct__k2r9zo = this.get_fetcherFactories_4dfruy_k$().get_c1px32_k$(index);
        var factory = _destruct__k2r9zo.component1_7eebsc_k$();
        var type = _destruct__k2r9zo.component2_7eebsb_k$();
        if (type.isInstance_6tn68w_k$(data)) {
          var fetcher = (isInterface(factory, Factory_1) ? factory : THROW_CCE()).create_63rtby_k$(data, options, imageLoader);
          if (!(fetcher == null))
            return to(fetcher, index);
        }
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).newFetcher$default_v1p6vv_k$ = function (data, options, imageLoader, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.newFetcher_78dey7_k$(data, options, imageLoader, startIndex) : $super.newFetcher_78dey7_k$.call(this, data, options, imageLoader, startIndex);
  };
  protoOf(ComponentRegistry).newDecoder_ak0d4k_k$ = function (result, options, imageLoader, startIndex) {
    var inductionVariable = startIndex;
    var last = this.get_decoderFactories_plk5cd_k$().get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var factory = this.get_decoderFactories_plk5cd_k$().get_c1px32_k$(index);
        var decoder = factory.create_o1e21o_k$(result, options, imageLoader);
        if (!(decoder == null))
          return to(decoder, index);
      }
       while (inductionVariable < last);
    return null;
  };
  protoOf(ComponentRegistry).newDecoder$default_j1o3uk_k$ = function (result, options, imageLoader, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.newDecoder_ak0d4k_k$(result, options, imageLoader, startIndex) : $super.newDecoder_ak0d4k_k$.call(this, result, options, imageLoader, startIndex);
  };
  protoOf(ComponentRegistry).newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_0(this);
  };
  function fetcherFactories$factory() {
    return getPropertyCallableRef('fetcherFactories', 1, KProperty1, function (receiver) {
      return receiver.get_fetcherFactories_4dfruy_k$();
    }, null);
  }
  function decoderFactories$factory() {
    return getPropertyCallableRef('decoderFactories', 1, KProperty1, function (receiver) {
      return receiver.get_decoderFactories_plk5cd_k$();
    }, null);
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_6() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function Builder_init_$Init$_1($this) {
    Builder_0.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.data_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$_1() {
    return Builder_init_$Init$_1(objectCreate(protoOf(Builder_0)));
  }
  function Builder_init_$Init$_2(map, $this) {
    Builder_0.call($this);
    $this.data_1 = toMutableMap(map);
    return $this;
  }
  function Builder_init_$Create$_2(map) {
    return Builder_init_$Init$_2(map, objectCreate(protoOf(Builder_0)));
  }
  function Builder_init_$Init$_3(extras, $this) {
    Builder_0.call($this);
    $this.data_1 = toMutableMap(extras.data_1);
    return $this;
  }
  function Builder_init_$Create$_3(extras) {
    return Builder_init_$Init$_3(extras, objectCreate(protoOf(Builder_0)));
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  function Key(default_0) {
    Companion_getInstance_6();
    this.default_1 = default_0;
  }
  protoOf(Key).get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  protoOf(Builder_0).set_l6159z_k$ = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.set.<anonymous>' call
    if (!(value == null)) {
      // Inline function 'kotlin.collections.set' call
      this.data_1.put_4fpzoq_k$(key, value);
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.data_1.remove_gppy8k_k$(key);
    }
    return this;
  };
  protoOf(Builder_0).setAll_p6a3ud_k$ = function (extras) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.setAll.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = extras.data_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.get_value_j01efc_k$();
      this.set_l6159z_k$(key instanceof Key ? key : THROW_CCE(), value);
    }
    return this;
  };
  protoOf(Builder_0).build_1k0s4u_k$ = function () {
    return new Extras(toImmutableMap(this.data_1));
  };
  function Builder_0() {
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EMPTY_1 = Builder_init_$Create$_1().build_1k0s4u_k$();
  }
  protoOf(Companion_0).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Extras(data) {
    Companion_getInstance_7();
    this.data_1 = data;
  }
  protoOf(Extras).get_jd2i6n_k$ = function (key) {
    var tmp = this.data_1.get_wei43m_k$(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(Extras).asMap_1jf4ju_k$ = function () {
    return this.data_1;
  };
  protoOf(Extras).newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_3(this);
  };
  protoOf(Extras).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Extras))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    return true;
  };
  protoOf(Extras).hashCode = function () {
    return hashCode(this.data_1);
  };
  protoOf(Extras).toString = function () {
    return 'Extras(data=' + toString(this.data_1) + ')';
  };
  function getOrDefault(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_jd2i6n_k$(key);
    return tmp0_elvis_lhs == null ? key.default_1 : tmp0_elvis_lhs;
  }
  function getExtra(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_extras_d3bq0c_k$().get_jd2i6n_k$(key);
    return tmp0_elvis_lhs == null ? key.default_1 : tmp0_elvis_lhs;
  }
  function getExtra_0(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_extras_d3bq0c_k$().get_jd2i6n_k$(key);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.get_defaults_l5ckbp_k$().get_extras_d3bq0c_k$().get_jd2i6n_k$(key) : tmp0_elvis_lhs;
    return tmp1_elvis_lhs == null ? key.default_1 : tmp1_elvis_lhs;
  }
  function Image() {
  }
  function _get_application__s69pz3($this) {
    return $this.application_1;
  }
  function _set_defaults__cgtcqt($this, _set____db54di) {
    $this.defaults_1 = _set____db54di;
  }
  function _get_defaults__c2ypz($this) {
    return $this.defaults_1;
  }
  function _set_memoryCacheLazy__hxyub4($this, _set____db54di) {
    $this.memoryCacheLazy_1 = _set____db54di;
  }
  function _get_memoryCacheLazy__7u8msk($this) {
    return $this.memoryCacheLazy_1;
  }
  function _set_diskCacheLazy__w2s61g($this, _set____db54di) {
    $this.diskCacheLazy_1 = _set____db54di;
  }
  function _get_diskCacheLazy__nqkdfc($this) {
    return $this.diskCacheLazy_1;
  }
  function _set_eventListenerFactory__m1zmzf($this, _set____db54di) {
    $this.eventListenerFactory_1 = _set____db54di;
  }
  function _get_eventListenerFactory__83wyz3($this) {
    return $this.eventListenerFactory_1;
  }
  function _set_componentRegistry__a2im39($this, _set____db54di) {
    $this.componentRegistry_1 = _set____db54di;
  }
  function _get_componentRegistry__vsbidl($this) {
    return $this.componentRegistry_1;
  }
  function _set_logger__t1fpfd($this, _set____db54di) {
    $this.logger_1 = _set____db54di;
  }
  function _get_logger__rkp4sl($this) {
    return $this.logger_1;
  }
  function Builder_init_$Init$_4(context, $this) {
    Builder_1.call($this);
    $this.application_1 = get_application(context);
    $this.defaults_1 = Companion_getInstance_13().get_DEFAULT_wccqmg_k$();
    $this.memoryCacheLazy_1 = null;
    $this.diskCacheLazy_1 = null;
    $this.eventListenerFactory_1 = null;
    $this.componentRegistry_1 = null;
    $this.logger_1 = null;
    $this.extras_1 = Builder_init_$Create$_1();
    return $this;
  }
  function Builder_init_$Create$_4(context) {
    return Builder_init_$Init$_4(context, objectCreate(protoOf(Builder_1)));
  }
  function Builder_init_$Init$_5(options, $this) {
    Builder_1.call($this);
    $this.application_1 = options.get_application_vfjrq1_k$();
    $this.defaults_1 = options.get_defaults_l5ckbp_k$();
    $this.memoryCacheLazy_1 = options.get_memoryCacheLazy_5aenkk_k$();
    $this.diskCacheLazy_1 = options.get_diskCacheLazy_pxmqeo_k$();
    $this.eventListenerFactory_1 = options.get_eventListenerFactory_vz38jp_k$();
    $this.componentRegistry_1 = options.get_componentRegistry_9xd8z5_k$();
    $this.logger_1 = options.get_logger_g9gejd_k$();
    $this.extras_1 = options.get_defaults_l5ckbp_k$().get_extras_d3bq0c_k$().newBuilder_dnl2aj_k$();
    return $this;
  }
  function Builder_init_$Create$_5(options) {
    return Builder_init_$Init$_5(options, objectCreate(protoOf(Builder_1)));
  }
  function sam$coil3_EventListener_Factory$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$coil3_EventListener_Factory$0).create_hjtfdt_k$ = function (request) {
    return this.function_1(request);
  };
  protoOf(sam$coil3_EventListener_Factory$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$coil3_EventListener_Factory$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Factory_3) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ImageLoader$Builder$eventListener$lambda($listener) {
    return function (it) {
      return $listener;
    };
  }
  function ImageLoader$Builder$placeholder$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function ImageLoader$Builder$error$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function ImageLoader$Builder$fallback$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function ImageLoader$Builder$build$lambda(this$0) {
    return function () {
      return (new Builder_3()).maxSizePercent$default_b972wv_k$(this$0.application_1).build_1k0s4u_k$();
    };
  }
  function ImageLoader$Builder$build$lambda_0() {
    return singletonDiskCache();
  }
  protoOf(Builder_1).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Builder_1).components_8m5vmr_k$ = function (builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = Builder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this.components_5rm16l_k$(this_0.build_1k0s4u_k$());
  };
  protoOf(Builder_1).components_5rm16l_k$ = function (components) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.components.<anonymous>' call
    this.componentRegistry_1 = components;
    return this;
  };
  protoOf(Builder_1).memoryCache_d0enhc_k$ = function (memoryCache) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.memoryCache.<anonymous>' call
    this.memoryCacheLazy_1 = lazyOf(memoryCache);
    return this;
  };
  protoOf(Builder_1).memoryCache_nkivh2_k$ = function (initializer) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.memoryCache.<anonymous>' call
    this.memoryCacheLazy_1 = lazy(initializer);
    return this;
  };
  protoOf(Builder_1).diskCache_se7h6k_k$ = function (diskCache) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.diskCache.<anonymous>' call
    this.diskCacheLazy_1 = lazyOf(diskCache);
    return this;
  };
  protoOf(Builder_1).diskCache_7azc36_k$ = function (initializer) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.diskCache.<anonymous>' call
    this.diskCacheLazy_1 = lazy(initializer);
    return this;
  };
  protoOf(Builder_1).fileSystem_nw5gf3_k$ = function (fileSystem) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.fileSystem.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(fileSystem);
    return this;
  };
  protoOf(Builder_1).eventListener_deixvz_k$ = function (listener) {
    var tmp = ImageLoader$Builder$eventListener$lambda(listener);
    return this.eventListenerFactory_7gzw1l_k$(new sam$coil3_EventListener_Factory$0(tmp));
  };
  protoOf(Builder_1).eventListenerFactory_7gzw1l_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.eventListenerFactory.<anonymous>' call
    this.eventListenerFactory_1 = factory;
    return this;
  };
  protoOf(Builder_1).precision_s919ji_k$ = function (precision) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.precision.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, precision);
    return this;
  };
  protoOf(Builder_1).coroutineContext_ygypem_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.coroutineContext.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, context, context, context);
    return this;
  };
  protoOf(Builder_1).interceptorCoroutineContext_vi517h_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.interceptorCoroutineContext.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, context);
    return this;
  };
  protoOf(Builder_1).fetcherCoroutineContext_q6drs5_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.fetcherCoroutineContext.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, context);
    return this;
  };
  protoOf(Builder_1).decoderCoroutineContext_oo1l6m_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.decoderCoroutineContext.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, context);
    return this;
  };
  protoOf(Builder_1).placeholder_2joe88_k$ = function (image) {
    return this.placeholder_d2ngzk_k$(ImageLoader$Builder$placeholder$lambda(image));
  };
  protoOf(Builder_1).placeholder_d2ngzk_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.placeholder.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, factory);
    return this;
  };
  protoOf(Builder_1).error_r4ahyb_k$ = function (image) {
    return this.error_u3urez_k$(ImageLoader$Builder$error$lambda(image));
  };
  protoOf(Builder_1).error_u3urez_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.error.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, factory);
    return this;
  };
  protoOf(Builder_1).fallback_o7e749_k$ = function (image) {
    return this.fallback_9ec3ht_k$(ImageLoader$Builder$fallback$lambda(image));
  };
  protoOf(Builder_1).fallback_9ec3ht_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.fallback.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, factory);
    return this;
  };
  protoOf(Builder_1).memoryCachePolicy_ja3s15_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.memoryCachePolicy.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, policy);
    return this;
  };
  protoOf(Builder_1).diskCachePolicy_6azk57_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.diskCachePolicy.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, policy);
    return this;
  };
  protoOf(Builder_1).networkCachePolicy_vhutuy_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.networkCachePolicy.<anonymous>' call
    this.defaults_1 = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, policy);
    return this;
  };
  protoOf(Builder_1).logger_az5m49_k$ = function (logger) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.Builder.logger.<anonymous>' call
    this.logger_1 = logger;
    return this;
  };
  protoOf(Builder_1).build_1k0s4u_k$ = function () {
    var tmp = this.defaults_1.copy$default_4uchks_k$(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, this.extras_1.build_1k0s4u_k$());
    var tmp0_elvis_lhs = this.memoryCacheLazy_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      tmp_0 = lazy(ImageLoader$Builder$build$lambda(this));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    var tmp1_elvis_lhs = this.diskCacheLazy_1;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      tmp_2 = lazy(ImageLoader$Builder$build$lambda_0);
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_2;
    var tmp2_elvis_lhs = this.eventListenerFactory_1;
    var tmp_4 = tmp2_elvis_lhs == null ? Companion_getInstance_16().get_NONE_wo64xt_k$() : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.componentRegistry_1;
    var options = new Options(this.application_1, tmp, tmp_1, tmp_3, tmp_4, tmp3_elvis_lhs == null ? ComponentRegistry_init_$Create$() : tmp3_elvis_lhs, this.logger_1);
    return new RealImageLoader(options);
  };
  function Builder_1() {
  }
  function ImageLoader() {
  }
  function RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda$slambda).invoke_o5maow_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$execute$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_o5maow_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = execute(this.this$0__1, this.$request_1, 1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new RealImageLoader$execute$slambda$slambda(this.this$0__1, this.$request_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(RealImageLoader$execute$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$execute$slambda$slambda_0(this$0, $request, resultContinuation) {
    var i = new RealImageLoader$execute$slambda$slambda(this$0, $request, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_o5maow_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_scope__bi2zur($this) {
    return $this.scope_1;
  }
  function _get_systemCallbacks__h61eaa($this) {
    return $this.systemCallbacks_1;
  }
  function _get_requestService__k7fg4b($this) {
    return $this.requestService_1;
  }
  function _get_shutdown__8pusdx($this) {
    return $this.shutdown_1;
  }
  function execute($this, initialRequest, type, $completion) {
    var tmp = new $executeCOROUTINE$1($this, initialRequest, type, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function onSuccess_1($this, result, target, eventListener) {
    var request = result.get_request_jdwg4m_k$();
    var dataSource = result.get_dataSource_vce0e_k$();
    var tmp0_safe_receiver = $this.options_1.logger_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onSuccess.<anonymous>' call
        var tmp$ret$0 = get_emoji(dataSource) + ' Successful (' + dataSource.get_name_woqyms_k$() + ') - ' + toString(request.get_data_wokkxf_k$());
        tmp0_safe_receiver.log_m12gkb_k$(tag, level, tmp$ret$0, null);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.onSuccess_u2d2o2_k$(result.get_image_it3i2a_k$());
    }
    eventListener.onSuccess_uq0ty0_k$(request, result);
    var tmp1_safe_receiver = request.get_listener_9jgv43_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onSuccess_uq0ty0_k$(request, result);
    }
  }
  function onError_1($this, result, target, eventListener) {
    var request = result.get_request_jdwg4m_k$();
    var tmp0_safe_receiver = $this.options_1.logger_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var throwable = result.get_throwable_c93gq1_k$();
      if (tmp0_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(Level_Error_getInstance()) <= 0) {
        var tmp = Level_Error_getInstance();
        // Inline function 'coil3.RealImageLoader.onError.<anonymous>' call
        var tmp$ret$0 = '\uD83D\uDEA8 Failed - ' + toString(request.get_data_wokkxf_k$());
        tmp0_safe_receiver.log_m12gkb_k$(tag, tmp, tmp$ret$0, throwable);
      }
    }
    // Inline function 'coil3.transition' call
    if (target == null)
      null;
    else {
      target.onError_18s0r6_k$(result.get_image_it3i2a_k$());
    }
    eventListener.onError_bveiqq_k$(request, result);
    var tmp1_safe_receiver = request.get_listener_9jgv43_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onError_bveiqq_k$(request, result);
    }
  }
  function onCancel_0($this, request, eventListener) {
    var tmp0_safe_receiver = $this.options_1.logger_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'coil3.util.log' call
      var tag = 'RealImageLoader';
      var level = Level_Info_getInstance();
      if (tmp0_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level) <= 0) {
        // Inline function 'coil3.RealImageLoader.onCancel.<anonymous>' call
        var tmp$ret$0 = '\uD83C\uDFD7 Cancelled - ' + toString(request.get_data_wokkxf_k$());
        tmp0_safe_receiver.log_m12gkb_k$(tag, level, tmp$ret$0, null);
      }
    }
    eventListener.onCancel_r6pvsi_k$(request);
    var tmp1_safe_receiver = request.get_listener_9jgv43_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.onCancel_r6pvsi_k$(request);
    }
  }
  function Options(application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger) {
    this.application_1 = application;
    this.defaults_1 = defaults;
    this.memoryCacheLazy_1 = memoryCacheLazy;
    this.diskCacheLazy_1 = diskCacheLazy;
    this.eventListenerFactory_1 = eventListenerFactory;
    this.componentRegistry_1 = componentRegistry;
    this.logger_1 = logger;
  }
  protoOf(Options).get_application_vfjrq1_k$ = function () {
    return this.application_1;
  };
  protoOf(Options).get_defaults_l5ckbp_k$ = function () {
    return this.defaults_1;
  };
  protoOf(Options).get_memoryCacheLazy_5aenkk_k$ = function () {
    return this.memoryCacheLazy_1;
  };
  protoOf(Options).get_diskCacheLazy_pxmqeo_k$ = function () {
    return this.diskCacheLazy_1;
  };
  protoOf(Options).get_eventListenerFactory_vz38jp_k$ = function () {
    return this.eventListenerFactory_1;
  };
  protoOf(Options).get_componentRegistry_9xd8z5_k$ = function () {
    return this.componentRegistry_1;
  };
  protoOf(Options).get_logger_g9gejd_k$ = function () {
    return this.logger_1;
  };
  protoOf(Options).component1_7eebsc_k$ = function () {
    return this.application_1;
  };
  protoOf(Options).component2_7eebsb_k$ = function () {
    return this.defaults_1;
  };
  protoOf(Options).component3_7eebsa_k$ = function () {
    return this.memoryCacheLazy_1;
  };
  protoOf(Options).component4_7eebs9_k$ = function () {
    return this.diskCacheLazy_1;
  };
  protoOf(Options).component5_7eebs8_k$ = function () {
    return this.eventListenerFactory_1;
  };
  protoOf(Options).component6_7eebs7_k$ = function () {
    return this.componentRegistry_1;
  };
  protoOf(Options).component7_7eebs6_k$ = function () {
    return this.logger_1;
  };
  protoOf(Options).copy_c783bu_k$ = function (application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger) {
    return new Options(application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger);
  };
  protoOf(Options).copy$default_tw6pms_k$ = function (application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger, $super) {
    application = application === VOID ? this.application_1 : application;
    defaults = defaults === VOID ? this.defaults_1 : defaults;
    memoryCacheLazy = memoryCacheLazy === VOID ? this.memoryCacheLazy_1 : memoryCacheLazy;
    diskCacheLazy = diskCacheLazy === VOID ? this.diskCacheLazy_1 : diskCacheLazy;
    eventListenerFactory = eventListenerFactory === VOID ? this.eventListenerFactory_1 : eventListenerFactory;
    componentRegistry = componentRegistry === VOID ? this.componentRegistry_1 : componentRegistry;
    logger = logger === VOID ? this.logger_1 : logger;
    return $super === VOID ? this.copy_c783bu_k$(application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger) : $super.copy_c783bu_k$.call(this, application, defaults, memoryCacheLazy, diskCacheLazy, eventListenerFactory, componentRegistry, logger);
  };
  protoOf(Options).toString = function () {
    return 'Options(application=' + toString(this.application_1) + ', defaults=' + this.defaults_1.toString() + ', memoryCacheLazy=' + toString(this.memoryCacheLazy_1) + ', diskCacheLazy=' + toString(this.diskCacheLazy_1) + ', eventListenerFactory=' + toString(this.eventListenerFactory_1) + ', componentRegistry=' + toString(this.componentRegistry_1) + ', logger=' + toString_0(this.logger_1) + ')';
  };
  protoOf(Options).hashCode = function () {
    var result = hashCode(this.application_1);
    result = imul(result, 31) + this.defaults_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.memoryCacheLazy_1) | 0;
    result = imul(result, 31) + hashCode(this.diskCacheLazy_1) | 0;
    result = imul(result, 31) + hashCode(this.eventListenerFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.componentRegistry_1) | 0;
    result = imul(result, 31) + (this.logger_1 == null ? 0 : hashCode(this.logger_1)) | 0;
    return result;
  };
  protoOf(Options).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options))
      return false;
    var tmp0_other_with_cast = other instanceof Options ? other : THROW_CCE();
    if (!equals(this.application_1, tmp0_other_with_cast.application_1))
      return false;
    if (!this.defaults_1.equals(tmp0_other_with_cast.defaults_1))
      return false;
    if (!equals(this.memoryCacheLazy_1, tmp0_other_with_cast.memoryCacheLazy_1))
      return false;
    if (!equals(this.diskCacheLazy_1, tmp0_other_with_cast.diskCacheLazy_1))
      return false;
    if (!equals(this.eventListenerFactory_1, tmp0_other_with_cast.eventListenerFactory_1))
      return false;
    if (!equals(this.componentRegistry_1, tmp0_other_with_cast.componentRegistry_1))
      return false;
    if (!equals(this.logger_1, tmp0_other_with_cast.logger_1))
      return false;
    return true;
  };
  function RealImageLoader$enqueue$slambda(this$0, $request, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$enqueue$slambda).invoke_o5maow_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$enqueue$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_o5maow_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$enqueue$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = execute(this.this$0__1, this.$request_1, 0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$enqueue$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new RealImageLoader$enqueue$slambda(this.this$0__1, this.$request_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(RealImageLoader$enqueue$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$enqueue$slambda_0(this$0, $request, resultContinuation) {
    var i = new RealImageLoader$enqueue$slambda(this$0, $request, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_o5maow_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader$execute$slambda($request, this$0, resultContinuation) {
    this.$request_1 = $request;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda).invoke_o5maow_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$execute$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_o5maow_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var tmp_1 = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
            tmp_0.job0__1 = async(this.$this$coroutineScope_1, tmp_1, VOID, RealImageLoader$execute$slambda$slambda_0(this.this$0__1, this.$request_1, null));
            this.set_state_rjd8d0_k$(1);
            suspendResult = getDisposable(this.$request_1, this.job0__1).get_job_18j2r0_k$().await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new RealImageLoader$execute$slambda(this.$request_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(RealImageLoader$execute$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$execute$slambda_0($request, this$0, resultContinuation) {
    var i = new RealImageLoader$execute$slambda($request, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_o5maow_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    this.$request_1 = $request;
    this.this$0__1 = this$0;
    this.$size_1 = $size;
    this.$eventListener_1 = $eventListener;
    this.$cachedPlaceholder_1 = $cachedPlaceholder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealImageLoader$execute$slambda_1).invoke_o5maow_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader$execute$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_o5maow_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RealImageLoader$execute$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = (new RealInterceptorChain(this.$request_1, this.this$0__1.components_1.get_interceptors_e78bex_k$(), 0, this.$request_1, this.$size_1, this.$eventListener_1, !(this.$cachedPlaceholder_1 == null))).proceed_db2cv0_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RealImageLoader$execute$slambda_1).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new RealImageLoader$execute$slambda_1(this.$request_1, this.this$0__1, this.$size_1, this.$eventListener_1, this.$cachedPlaceholder_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(RealImageLoader$execute$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RealImageLoader$execute$slambda_2($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation) {
    var i = new RealImageLoader$execute$slambda_1($request, this$0, $size, $eventListener, $cachedPlaceholder, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_o5maow_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
  }
  protoOf($executeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (needsExecuteOnMainDispatcher(this.request_1)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = coroutineScope(RealImageLoader$execute$slambda_0(this.request_1, this._this__u8e3s4__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = execute(this._this__u8e3s4__1, this.request_1, 1, this);
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
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $executeCOROUTINE$1(_this__u8e3s4, initialRequest, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.initialRequest_1 = initialRequest;
    this.type_1 = type;
  }
  protoOf($executeCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(11);
            var tmp_0 = this;
            var this_0 = this._this__u8e3s4__1.requestService_1.requestDelegate_cfrpmr_k$(this.initialRequest_1, get_job(this.get_context_h02k06_k$()), this.type_1 === 0);
            this_0.assertActive_d24ly4_k$();
            tmp_0.requestDelegate0__1 = this_0;
            this.request1__1 = this._this__u8e3s4__1.requestService_1.updateRequest_fiwegb_k$(this.initialRequest_1);
            this.eventListener2__1 = this._this__u8e3s4__1.options_1.eventListenerFactory_1.create_hjtfdt_k$(this.request1__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(10);
            this.set_exceptionState_fex74n_k$(7);
            if (equals(this.request1__1.get_data_wokkxf_k$(), NullRequestData_getInstance())) {
              throw new NullRequestDataException();
            }

            this.requestDelegate0__1.start_fyv442_k$();
            if (this.type_1 === 0) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.requestDelegate0__1.awaitStarted_to5nxo_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            var tmp_1 = this;
            var tmp0_safe_receiver = this.request1__1.get_placeholderMemoryCacheKey_66wdrs_k$();
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var tmp0_safe_receiver_0 = this._this__u8e3s4__1.get_memoryCache_y3xch4_k$();
              var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_4ro1bf_k$(tmp0_safe_receiver);
              tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_image_it3i2a_k$();
            }

            tmp_1.cachedPlaceholder5__1 = tmp_2;
            var tmp1_safe_receiver_0 = this.request1__1.get_target_juba8q_k$();
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              var tmp2_elvis_lhs = this.cachedPlaceholder5__1;
              tmp1_safe_receiver_0.onStart_5harg8_k$(tmp2_elvis_lhs == null ? this.request1__1.placeholder_9w6i5v_k$() : tmp2_elvis_lhs);
            }

            this.eventListener2__1.onStart_xloqp4_k$(this.request1__1);
            var tmp3_safe_receiver = this.request1__1.get_listener_9jgv43_k$();
            if (tmp3_safe_receiver == null)
              null;
            else {
              tmp3_safe_receiver.onStart_xloqp4_k$(this.request1__1);
            }

            this.sizeResolver6__1 = this.request1__1.get_sizeResolver_v7l9bk_k$();
            this.eventListener2__1.resolveSizeStart_yxrj9q_k$(this.request1__1, this.sizeResolver6__1);
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.sizeResolver6__1.size_87lmu0_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.size7__1 = suspendResult;
            this.eventListener2__1.resolveSizeEnd_jx58md_k$(this.request1__1, this.size7__1);
            this.set_state_rjd8d0_k$(6);
            var tmp_3 = this.request1__1.get_interceptorCoroutineContext_tr9mjx_k$();
            suspendResult = withContext(tmp_3, RealImageLoader$execute$slambda_2(this.request1__1, this._this__u8e3s4__1, this.size7__1, this.eventListener2__1, this.cachedPlaceholder5__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var result = suspendResult;
            if (result instanceof SuccessResult) {
              onSuccess_1(this._this__u8e3s4__1, result, this.request1__1.get_target_juba8q_k$(), this.eventListener2__1);
            } else {
              if (result instanceof ErrorResult) {
                onError_1(this._this__u8e3s4__1, result, this.request1__1.get_target_juba8q_k$(), this.eventListener2__1);
              } else {
                noWhenBranchMatchedException();
              }
            }

            this.tmp$ret$04__1 = result;
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(8);
            var tmp_4 = this;
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(10);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var throwable = this.get_exception_x0n6w6_k$();
              if (throwable instanceof CancellationException) {
                onCancel_0(this._this__u8e3s4__1, this.request1__1, this.eventListener2__1);
                throw throwable;
              } else {
                var result_0 = ErrorResult_0(this.request1__1, throwable);
                onError_1(this._this__u8e3s4__1, result_0, this.request1__1.get_target_juba8q_k$(), this.eventListener2__1);
                this.tmp$ret$04__1 = result_0;
                this.set_exceptionState_fex74n_k$(11);
                this.set_state_rjd8d0_k$(8);
                continue $sm;
              }
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            var tmp_6 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(11);
            this.requestDelegate0__1.complete_grcas7_k$();
            return tmp_6;
          case 9:
            this.tmp$ret$23__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(11);
            var t = this.get_exception_x0n6w6_k$();
            this.requestDelegate0__1.complete_grcas7_k$();
            throw t;
          case 11:
            throw this.get_exception_x0n6w6_k$();
          case 12:
            this.set_exceptionState_fex74n_k$(11);
            this.requestDelegate0__1.complete_grcas7_k$();
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function RealImageLoader(options) {
    this.options_1 = options;
    this.scope_1 = CoroutineScope_1(this.options_1.logger_1);
    this.systemCallbacks_1 = SystemCallbacks_0(this);
    this.requestService_1 = RequestService_0(this, this.systemCallbacks_1, this.options_1.logger_1);
    this.memoryCache$delegate_1 = this.options_1.memoryCacheLazy_1;
    this.diskCache$delegate_1 = this.options_1.diskCacheLazy_1;
    this.components_1 = addCommonComponents(addAppleComponents(addJvmComponents(addAndroidComponents(addServiceLoaderComponents(this.options_1.componentRegistry_1.newBuilder_dnl2aj_k$(), this.options_1), this.options_1), this.options_1), this.options_1)).add_qfrar0_k$(new EngineInterceptor(this, this.systemCallbacks_1, this.requestService_1, this.options_1.logger_1)).build_1k0s4u_k$();
    this.shutdown_1 = atomic$boolean$1(false);
  }
  protoOf(RealImageLoader).get_options_jecmyz_k$ = function () {
    return this.options_1;
  };
  protoOf(RealImageLoader).get_defaults_l5ckbp_k$ = function () {
    return this.options_1.defaults_1;
  };
  protoOf(RealImageLoader).get_memoryCache_y3xch4_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.memoryCache$delegate_1;
    memoryCache$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RealImageLoader).get_diskCache_9m5hks_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.diskCache$delegate_1;
    diskCache$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RealImageLoader).get_components_rknech_k$ = function () {
    return this.components_1;
  };
  protoOf(RealImageLoader).enqueue_izyz83_k$ = function (request) {
    var job = async(this.scope_1, VOID, VOID, RealImageLoader$enqueue$slambda_0(this, request, null));
    return getDisposable(request, job);
  };
  protoOf(RealImageLoader).execute_ncrliw_k$ = function (request, $completion) {
    var tmp = new $executeCOROUTINE$0(this, request, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RealImageLoader).shutdown_cplwmy_k$ = function () {
    if (this.shutdown_1.atomicfu$getAndSet(true))
      return Unit_getInstance();
    cancel(this.scope_1);
    this.systemCallbacks_1.shutdown_cplwmy_k$();
    var tmp0_safe_receiver = this.get_memoryCache_y3xch4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(RealImageLoader).newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_5(this.options_1);
  };
  function CoroutineScope_1(logger) {
    var tmp = SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$());
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv(logger);
    var context = tmp.plus_s13ygv_k$(tmp$ret$0);
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
    var this_0 = _this__u8e3s4.add_abfi6n_k$(mapper, PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$());
    var mapper_0 = new PathMapper();
    var this_1 = this_0.add_abfi6n_k$(mapper_0, getKClass(Path));
    var keyer = new FileUriKeyer();
    var this_2 = this_1.add_ry2ic9_k$(keyer, getKClass(Uri));
    var keyer_0 = new UriKeyer();
    var this_3 = this_2.add_ry2ic9_k$(keyer_0, getKClass(Uri));
    var factory = new Factory_2();
    var this_4 = this_3.add_kpo1zt_k$(factory, getKClass(Uri));
    var factory_0 = new Factory_0();
    return this_4.add_kpo1zt_k$(factory_0, PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$());
  }
  function addServiceLoaderComponents(_this__u8e3s4, options) {
    if (get_serviceLoaderEnabled(options)) {
      _this__u8e3s4.addFetcherFactories_4o3jsg_k$(addServiceLoaderComponents$lambda);
      _this__u8e3s4.addDecoderFactories_je1v81_k$(addServiceLoaderComponents$lambda_0);
    }
    return _this__u8e3s4;
  }
  function _no_name_provided__qut3iv($logger) {
    this.$logger_1 = $logger;
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).handleException_e679jj_k$ = function (context, exception) {
    var tmp0_safe_receiver = this.$logger_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      log_1(tmp0_safe_receiver, 'RealImageLoader', exception);
    }
    return Unit_getInstance();
  };
  function addServiceLoaderComponents$lambda() {
    // Inline function 'coil3.util.mapNotNullIndices' call
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = ServiceLoaderComponentRegistry_getInstance().get_fetchers_rvptjf_k$();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
          var target = this_1.get_c1px32_k$(i);
          if (!isInterface(target, FetcherServiceLoaderTarget))
            THROW_CCE();
          var tmp0_elvis_lhs = target.factory_i22u46_k$();
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$3 = null;
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var factory = tmp_0;
          var tmp1_elvis_lhs = target.type_24myi_k$();
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
          destination.add_utx5q5_k$(value);
        }
      }
       while (inductionVariable <= last);
    return destination;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function addServiceLoaderComponents$lambda$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp = b.priority_j9vvj0_k$();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.priority_j9vvj0_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function addServiceLoaderComponents$lambda_0() {
    // Inline function 'coil3.util.mapNotNullIndices' call
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = ServiceLoaderComponentRegistry_getInstance().get_decoders_md3b7s_k$();
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = addServiceLoaderComponents$lambda$lambda_0;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var this_1 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
        var value = this_1.get_c1px32_k$(i).factory_i22u46_k$();
        if (!(value == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          destination.add_utx5q5_k$(value);
        }
      }
       while (inductionVariable <= last);
    return destination;
  }
  function addServiceLoaderComponents$lambda$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp = b.priority_j9vvj0_k$();
    // Inline function 'coil3.addServiceLoaderComponents.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.priority_j9vvj0_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function memoryCache$factory() {
    return getPropertyCallableRef('memoryCache', 1, KProperty1, function (receiver) {
      return receiver.get_memoryCache_y3xch4_k$();
    }, null);
  }
  function diskCache$factory() {
    return getPropertyCallableRef('diskCache', 1, KProperty1, function (receiver) {
      return receiver.get_diskCache_9m5hks_k$();
    }, null);
  }
  function _get_data__d5abxd_1($this) {
    return $this.data_1;
  }
  function Uri(data, separator, scheme, authority, path, query, fragment) {
    this.data_1 = data;
    this.separator_1 = separator;
    this.scheme_1 = scheme;
    this.authority_1 = authority;
    this.path_1 = path;
    this.query_1 = query;
    this.fragment_1 = fragment;
  }
  protoOf(Uri).get_separator_xuwon8_k$ = function () {
    return this.separator_1;
  };
  protoOf(Uri).get_scheme_je6tv2_k$ = function () {
    return this.scheme_1;
  };
  protoOf(Uri).get_authority_wx29i2_k$ = function () {
    return this.authority_1;
  };
  protoOf(Uri).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Uri).get_query_ixn1y7_k$ = function () {
    return this.query_1;
  };
  protoOf(Uri).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(Uri).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof Uri) {
      tmp = other.data_1 === this.data_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Uri).hashCode = function () {
    return getStringHashCode(this.data_1);
  };
  protoOf(Uri).toString = function () {
    return this.data_1;
  };
  function get_filePath(_this__u8e3s4) {
    var pathSegments = get_pathSegments(_this__u8e3s4);
    if (pathSegments.isEmpty_y1axqb_k$()) {
      return null;
    } else {
      var prefix = startsWith(ensureNotNull(_this__u8e3s4.path_1), _this__u8e3s4.separator_1) ? _this__u8e3s4.separator_1 : '';
      var tmp0_separator = _this__u8e3s4.separator_1;
      return joinToString(pathSegments, tmp0_separator, prefix);
    }
  }
  function get_pathSegments(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.path_1;
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
        segments.add_utx5q5_k$(segment);
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
    separator = separator === VOID ? Companion_getInstance().get_DIRECTORY_SEPARATOR_5d74ru_k$() : separator;
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
    separator = separator === VOID ? Companion_getInstance().get_DIRECTORY_SEPARATOR_5d74ru_k$() : separator;
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
      this_0.append_22ad7x_k$(scheme);
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(58));
    }
    if (!(authority == null)) {
      this_0.append_22ad7x_k$('//');
      this_0.append_22ad7x_k$(authority);
    }
    if (!(path == null)) {
      this_0.append_22ad7x_k$(path);
    }
    if (!(query == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(63));
      this_0.append_22ad7x_k$(query);
    }
    if (!(fragment == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35));
      this_0.append_22ad7x_k$(fragment);
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
  function Poko() {
  }
  protoOf(Poko).equals = function (other) {
    if (!(other instanceof Poko))
      return false;
    other instanceof Poko || THROW_CCE();
    return true;
  };
  protoOf(Poko).hashCode = function () {
    return 0;
  };
  protoOf(Poko).toString = function () {
    return '@coil3.annotation.Poko(' + ')';
  };
  function InternalCoilApi() {
  }
  protoOf(InternalCoilApi).equals = function (other) {
    if (!(other instanceof InternalCoilApi))
      return false;
    other instanceof InternalCoilApi || THROW_CCE();
    return true;
  };
  protoOf(InternalCoilApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoilApi).toString = function () {
    return '@coil3.annotation.InternalCoilApi(' + ')';
  };
  function MainThread() {
  }
  protoOf(MainThread).equals = function (other) {
    if (!(other instanceof MainThread))
      return false;
    other instanceof MainThread || THROW_CCE();
    return true;
  };
  protoOf(MainThread).hashCode = function () {
    return 0;
  };
  protoOf(MainThread).toString = function () {
    return '@coil3.annotation.MainThread(' + ')';
  };
  function VisibleForTesting() {
  }
  protoOf(VisibleForTesting).equals = function (other) {
    if (!(other instanceof VisibleForTesting))
      return false;
    other instanceof VisibleForTesting || THROW_CCE();
    return true;
  };
  protoOf(VisibleForTesting).hashCode = function () {
    return 0;
  };
  protoOf(VisibleForTesting).toString = function () {
    return '@coil3.annotation.VisibleForTesting(' + ')';
  };
  function WorkerThread() {
  }
  protoOf(WorkerThread).equals = function (other) {
    if (!(other instanceof WorkerThread))
      return false;
    other instanceof WorkerThread || THROW_CCE();
    return true;
  };
  protoOf(WorkerThread).hashCode = function () {
    return 0;
  };
  protoOf(WorkerThread).toString = function () {
    return '@coil3.annotation.WorkerThread(' + ')';
  };
  function ExperimentalCoilApi() {
  }
  protoOf(ExperimentalCoilApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoilApi))
      return false;
    other instanceof ExperimentalCoilApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoilApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoilApi).toString = function () {
    return '@coil3.annotation.ExperimentalCoilApi(' + ')';
  };
  function DelicateCoilApi() {
  }
  protoOf(DelicateCoilApi).equals = function (other) {
    if (!(other instanceof DelicateCoilApi))
      return false;
    other instanceof DelicateCoilApi || THROW_CCE();
    return true;
  };
  protoOf(DelicateCoilApi).hashCode = function () {
    return 0;
  };
  protoOf(DelicateCoilApi).toString = function () {
    return '@coil3.annotation.DelicateCoilApi(' + ')';
  };
  var DataSource_MEMORY_CACHE_instance;
  var DataSource_MEMORY_instance;
  var DataSource_DISK_instance;
  var DataSource_NETWORK_instance;
  function values() {
    return [DataSource_MEMORY_CACHE_getInstance(), DataSource_MEMORY_getInstance(), DataSource_DISK_getInstance(), DataSource_NETWORK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'MEMORY_CACHE':
        return DataSource_MEMORY_CACHE_getInstance();
      case 'MEMORY':
        return DataSource_MEMORY_getInstance();
      case 'DISK':
        return DataSource_DISK_getInstance();
      case 'NETWORK':
        return DataSource_NETWORK_getInstance();
      default:
        DataSource_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DataSource_entriesInitialized;
  function DataSource_initEntries() {
    if (DataSource_entriesInitialized)
      return Unit_getInstance();
    DataSource_entriesInitialized = true;
    DataSource_MEMORY_CACHE_instance = new DataSource('MEMORY_CACHE', 0);
    DataSource_MEMORY_instance = new DataSource('MEMORY', 1);
    DataSource_DISK_instance = new DataSource('DISK', 2);
    DataSource_NETWORK_instance = new DataSource('NETWORK', 3);
  }
  var $ENTRIES;
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
    this.image_1 = image;
    this.isSampled_1 = isSampled;
  }
  protoOf(DecodeResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(DecodeResult).get_isSampled_trm7d3_k$ = function () {
    return this.isSampled_1;
  };
  protoOf(DecodeResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeResult))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!(this.isSampled_1 === other.isSampled_1))
      return false;
    return true;
  };
  protoOf(DecodeResult).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + getBooleanHashCode(this.isSampled_1) | 0;
    return result;
  };
  protoOf(DecodeResult).toString = function () {
    return 'DecodeResult(image=' + toString(this.image_1) + ', isSampled=' + this.isSampled_1 + ')';
  };
  function toPx(_this__u8e3s4, $this, scale) {
    // Inline function 'coil3.size.pxOrElse' call
    var tmp;
    if (_this__u8e3s4 instanceof Pixels) {
      tmp = _Pixels___get_px__impl__uix9dv(_this__u8e3s4.px_1);
    } else {
      // Inline function 'coil3.decode.DecodeUtils.toPx.<anonymous>' call
      var tmp_0;
      switch (scale.get_ordinal_ip24qg_k$()) {
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
    DecodeUtils_instance = this;
  }
  protoOf(DecodeUtils).calculateInSampleSize_vwnu16_k$ = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthInSampleSize = takeHighestOneBit(srcWidth / dstWidth | 0);
    var heightInSampleSize = takeHighestOneBit(srcHeight / dstHeight | 0);
    var tmp;
    switch (scale.get_ordinal_ip24qg_k$()) {
      case 0:
        // Inline function 'kotlin.comparisons.minOf' call

        tmp = Math.min(widthInSampleSize, heightInSampleSize);
        break;
      case 1:
        // Inline function 'kotlin.comparisons.maxOf' call

        tmp = Math.max(widthInSampleSize, heightInSampleSize);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return coerceAtLeast(tmp, 1);
  };
  protoOf(DecodeUtils).computeSizeMultiplier_y90lir_k$ = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp;
    switch (scale.get_ordinal_ip24qg_k$()) {
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
  protoOf(DecodeUtils).computeSizeMultiplier_rkmnf1_k$ = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp;
    switch (scale.get_ordinal_ip24qg_k$()) {
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
  protoOf(DecodeUtils).computeSizeMultiplier_npwrkd_k$ = function (srcWidth, srcHeight, dstWidth, dstHeight, scale) {
    var widthPercent = dstWidth / srcWidth;
    var heightPercent = dstHeight / srcHeight;
    var tmp;
    switch (scale.get_ordinal_ip24qg_k$()) {
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
  protoOf(DecodeUtils).computeDstSize_g1prh4_k$ = function (srcWidth, srcHeight, targetSize, scale, maxSize) {
    var dstWidth;
    var dstHeight;
    if (get_isOriginal(targetSize)) {
      dstWidth = srcWidth;
      dstHeight = srcHeight;
    } else {
      dstWidth = toPx(targetSize.get_width_j0q4yl_k$(), this, scale);
      dstHeight = toPx(targetSize.get_height_e7t92o_k$(), this, scale);
    }
    var tmp;
    var tmp_0 = maxSize.get_width_j0q4yl_k$();
    if (tmp_0 instanceof Pixels) {
      tmp = !isMinOrMax(dstWidth);
    } else {
      tmp = false;
    }
    if (tmp) {
      dstWidth = coerceAtMost(dstWidth, _Pixels___get_px__impl__uix9dv(maxSize.get_width_j0q4yl_k$().px_1));
    }
    var tmp_1;
    var tmp_2 = maxSize.get_height_e7t92o_k$();
    if (tmp_2 instanceof Pixels) {
      tmp_1 = !isMinOrMax(dstHeight);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      dstHeight = coerceAtMost(dstHeight, _Pixels___get_px__impl__uix9dv(maxSize.get_height_e7t92o_k$().px_1));
    }
    return _IntPair___init__impl__vp9xsg_0(dstWidth, dstHeight);
  };
  var DecodeUtils_instance;
  function DecodeUtils_getInstance() {
    if (DecodeUtils_instance == null)
      new DecodeUtils();
    return DecodeUtils_instance;
  }
  function Factory() {
  }
  function Decoder() {
  }
  function Metadata() {
  }
  function ImageSource() {
  }
  function _get_closeable__fbvrr3($this) {
    return $this.closeable_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _set_isClosed__sz8o0v($this, _set____db54di) {
    $this.isClosed_1 = _set____db54di;
  }
  function _get_isClosed__t8z2hh($this) {
    return $this.isClosed_1;
  }
  function _set_source__2w4bj0($this, _set____db54di) {
    $this.source_1 = _set____db54di;
  }
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function assertNotClosed($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.isClosed_1) {
      // Inline function 'coil3.decode.FileImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function FileImageSource(file, fileSystem, diskCacheKey, closeable, metadata) {
    this.file_1 = file;
    this.fileSystem_1 = fileSystem;
    this.diskCacheKey_1 = diskCacheKey;
    this.closeable_1 = closeable;
    this.metadata_1 = metadata;
    this.lock_1 = new Object();
    this.isClosed_1 = false;
    this.source_1 = null;
  }
  protoOf(FileImageSource).get_file_q7pjdy_k$ = function () {
    return this.file_1;
  };
  protoOf(FileImageSource).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(FileImageSource).get_diskCacheKey_av1s10_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(FileImageSource).get_metadata_vs95vc_k$ = function () {
    return this.metadata_1;
  };
  protoOf(FileImageSource).source_etr8bp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed(this);
    var tmp0_safe_receiver = this.source_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.fileSystem_1.source_11bfje_k$(this.file_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.FileImageSource.source.<anonymous>.<anonymous>' call
    this.source_1 = this_0;
    return this_0;
  };
  protoOf(FileImageSource).sourceOrNull_k0n0g5_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed(this);
    return this.source_1;
  };
  protoOf(FileImageSource).file_1vd6k_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed(this);
    return this.file_1;
  };
  protoOf(FileImageSource).fileOrNull_rur352_k$ = function () {
    return this.file_1vd6k_k$();
  };
  protoOf(FileImageSource).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.isClosed_1 = true;
    var tmp0_safe_receiver = this.source_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.closeable_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      closeQuietly(tmp1_safe_receiver);
    }
    return Unit_getInstance();
  };
  function ImageSource_0(source, fileSystem, metadata) {
    metadata = metadata === VOID ? null : metadata;
    return new SourceImageSource(source, fileSystem, metadata);
  }
  function ImageSource_1(file, fileSystem, diskCacheKey, closeable, metadata) {
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    closeable = closeable === VOID ? null : closeable;
    metadata = metadata === VOID ? null : metadata;
    return new FileImageSource(file, fileSystem, diskCacheKey, closeable, metadata);
  }
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_isClosed__sz8o0v_0($this, _set____db54di) {
    $this.isClosed_1 = _set____db54di;
  }
  function _get_isClosed__t8z2hh_0($this) {
    return $this.isClosed_1;
  }
  function _set_source__2w4bj0_0($this, _set____db54di) {
    $this.source_1 = _set____db54di;
  }
  function _get_source__4cuw5s_0($this) {
    return $this.source_1;
  }
  function _set_file__9mqvkr($this, _set____db54di) {
    $this.file_1 = _set____db54di;
  }
  function _get_file__d6iv67($this) {
    return $this.file_1;
  }
  function assertNotClosed_0($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.isClosed_1) {
      // Inline function 'coil3.decode.SourceImageSource.assertNotClosed.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function close$delete(receiver, p0) {
    receiver.delete$default_1zkyi8_k$(p0);
  }
  function SourceImageSource(source, fileSystem, metadata) {
    this.fileSystem_1 = fileSystem;
    this.metadata_1 = metadata;
    this.lock_1 = new Object();
    this.isClosed_1 = false;
    this.source_1 = source;
    this.file_1 = null;
  }
  protoOf(SourceImageSource).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(SourceImageSource).get_metadata_vs95vc_k$ = function () {
    return this.metadata_1;
  };
  protoOf(SourceImageSource).source_etr8bp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed_0(this);
    var tmp0_safe_receiver = this.source_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    // Inline function 'kotlin.also' call
    var this_0 = buffer(this.fileSystem_1.source_11bfje_k$(ensureNotNull(this.file_1)));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.SourceImageSource.source.<anonymous>.<anonymous>' call
    this.source_1 = this_0;
    return this_0;
  };
  protoOf(SourceImageSource).sourceOrNull_k0n0g5_k$ = function () {
    return this.source_etr8bp_k$();
  };
  protoOf(SourceImageSource).file_1vd6k_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed_0(this);
    var tmp0_safe_receiver = this.file_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var tempFile = createTempFile(this.fileSystem_1);
    // Inline function 'okio.FileSystem.write' call
    var this_0 = this.fileSystem_1;
    // Inline function 'okio.use' call
    var this_1 = buffer_0(this_0.sink_3ey1xj_k$(tempFile, false));
    var thrown = null;
    var tmp;
    try {
      // Inline function 'okio.FileSystem.write.<anonymous>' call
      // Inline function 'coil3.decode.SourceImageSource.file.<anonymous>.<anonymous>' call
      tmp = this_1.writeAll_goqmgy_k$(ensureNotNull(this.source_1));
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
        if (this_1 == null)
          null;
        else {
          this_1.close_yn9xrc_k$();
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
    (result == null ? true : !(result == null)) || THROW_CCE();
    this.source_1 = null;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.decode.SourceImageSource.file.<anonymous>.<anonymous>' call
    this.file_1 = tempFile;
    return tempFile;
  };
  protoOf(SourceImageSource).fileOrNull_rur352_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    assertNotClosed_0(this);
    return this.file_1;
  };
  protoOf(SourceImageSource).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.isClosed_1 = true;
    var tmp0_safe_receiver = this.source_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      closeQuietly_0(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.file_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp1_let_receiver = this.fileSystem_1;
      // Inline function 'kotlin.contracts.contract' call
      close$delete(tmp1_let_receiver, tmp1_safe_receiver);
    }
    return Unit_getInstance();
  };
  function _set_directory__nte77c($this, _set____db54di) {
    $this.directory_1 = _set____db54di;
  }
  function _get_directory__hwved8($this) {
    return $this.directory_1;
  }
  function _set_fileSystem__dgqbpw($this, _set____db54di) {
    $this.fileSystem_1 = _set____db54di;
  }
  function _get_fileSystem__siywv4($this) {
    return $this.fileSystem_1;
  }
  function _set_maxSizePercent__ni8lpl($this, _set____db54di) {
    $this.maxSizePercent_1 = _set____db54di;
  }
  function _get_maxSizePercent__20uubv($this) {
    return $this.maxSizePercent_1;
  }
  function _set_minimumMaxSizeBytes__i6frm7($this, _set____db54di) {
    $this.minimumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_minimumMaxSizeBytes__4vpipv($this) {
    return $this.minimumMaxSizeBytes_1;
  }
  function _set_maximumMaxSizeBytes__bf7tt($this, _set____db54di) {
    $this.maximumMaxSizeBytes_1 = _set____db54di;
  }
  function _get_maximumMaxSizeBytes__czb12j($this) {
    return $this.maximumMaxSizeBytes_1;
  }
  function _set_maxSizeBytes__bar9an($this, _set____db54di) {
    $this.maxSizeBytes_1 = _set____db54di;
  }
  function _get_maxSizeBytes__48zh9h($this) {
    return $this.maxSizeBytes_1;
  }
  function _set_cleanupDispatcher__3laldm($this, _set____db54di) {
    $this.cleanupDispatcher_1 = _set____db54di;
  }
  function _get_cleanupDispatcher__i4iawq($this) {
    return $this.cleanupDispatcher_1;
  }
  function Snapshot() {
  }
  function Editor() {
  }
  function Builder_2() {
    this.directory_1 = null;
    this.fileSystem_1 = defaultFileSystem();
    this.maxSizePercent_1 = 0.02;
    var tmp = this;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    tmp.minimumMaxSizeBytes_1 = (new Long(10, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
    var tmp_0 = this;
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    tmp_0.maximumMaxSizeBytes_1 = (new Long(250, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
    this.maxSizeBytes_1 = new Long(0, 0);
    this.cleanupDispatcher_1 = ioCoroutineDispatcher();
  }
  protoOf(Builder_2).directory_dtsav0_k$ = function (directory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.directory.<anonymous>' call
    this.directory_1 = directory;
    return this;
  };
  protoOf(Builder_2).fileSystem_nw5gf3_k$ = function (fileSystem) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.fileSystem.<anonymous>' call
    this.fileSystem_1 = fileSystem;
    return this;
  };
  protoOf(Builder_2).maxSizePercent_dykaka_k$ = function (percent) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.maxSizePercent.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= percent ? percent <= 1.0 : false)) {
      // Inline function 'coil3.disk.Builder.maxSizePercent.<anonymous>.<anonymous>' call
      var message = 'percent must be in the range [0.0, 1.0].';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizeBytes_1 = new Long(0, 0);
    this.maxSizePercent_1 = percent;
    return this;
  };
  protoOf(Builder_2).minimumMaxSizeBytes_7mkbdy_k$ = function (size) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.minimumMaxSizeBytes.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.disk.Builder.minimumMaxSizeBytes.<anonymous>.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.minimumMaxSizeBytes_1 = size;
    return this;
  };
  protoOf(Builder_2).maximumMaxSizeBytes_m1xk08_k$ = function (size) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.maximumMaxSizeBytes.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.disk.Builder.maximumMaxSizeBytes.<anonymous>.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maximumMaxSizeBytes_1 = size;
    return this;
  };
  protoOf(Builder_2).maxSizeBytes_ec1adk_k$ = function (size) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.maxSizeBytes.<anonymous>' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.disk.Builder.maxSizeBytes.<anonymous>.<anonymous>' call
      var message = 'size must be > 0.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.maxSizePercent_1 = 0.0;
    this.maxSizeBytes_1 = size;
    return this;
  };
  protoOf(Builder_2).cleanupDispatcher_oqosjw_k$ = function (dispatcher) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.Builder.cleanupDispatcher.<anonymous>' call
    this.cleanupDispatcher_1 = dispatcher;
    return this;
  };
  protoOf(Builder_2).build_1k0s4u_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = this.directory_1;
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'coil3.disk.Builder.build.<anonymous>' call
        var message = 'directory == null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    var directory = tmp$ret$1;
    var tmp;
    if (this.maxSizePercent_1 > 0) {
      var tmp_0;
      try {
        var size = this.maxSizePercent_1 * remainingFreeSpaceBytes(this.fileSystem_1, directory).toDouble_ygsx0s_k$();
        tmp_0 = coerceIn(numberToLong(size), this.minimumMaxSizeBytes_1, this.maximumMaxSizeBytes_1);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Exception) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = this.minimumMaxSizeBytes_1;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = this.maxSizeBytes_1;
    }
    var maxSize = tmp;
    return new RealDiskCache(maxSize, directory, this.fileSystem_1, this.cleanupDispatcher_1);
  };
  function DiskCache() {
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_closed__kdb0et_0($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_0($this) {
    return $this.closed_1;
  }
  function complete_0($this, success) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.$this_1.lock_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.closed_1) {
      // Inline function 'coil3.disk.Editor.complete.<anonymous>.<anonymous>' call
      var message = 'editor is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (equals($this.entry_1.currentEditor_1, $this)) {
      completeEdit($this.$this_1, $this, success);
    }
    $this.closed_1 = true;
  }
  function file$createFile(receiver, p0) {
    createFile(receiver, p0);
  }
  function _get_CLEAN__ylnxa0($this) {
    return $this.CLEAN_1;
  }
  function _get_DIRTY__y60zhd($this) {
    return $this.DIRTY_1;
  }
  function _get_REMOVE__3aymm1($this) {
    return $this.REMOVE_1;
  }
  function _get_READ__cuv33p($this) {
    return $this.READ_1;
  }
  function _get_LEGAL_KEY_PATTERN__v5vnwn($this) {
    return $this.LEGAL_KEY_PATTERN_1;
  }
  function sink$createDirectories(receiver, p0) {
    receiver.createDirectories$default_swo9f0_k$(p0);
  }
  function _get_directory__hwved8_0($this) {
    return $this.directory_1;
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _get_appVersion__jdhr04($this) {
    return $this.appVersion_1;
  }
  function _get_valueCount__8mgy0d($this) {
    return $this.valueCount_1;
  }
  function _get_journalFile__fg8j32($this) {
    return $this.journalFile_1;
  }
  function _get_journalFileTmp__l9i2tj($this) {
    return $this.journalFileTmp_1;
  }
  function _get_journalFileBackup__yrc0l8($this) {
    return $this.journalFileBackup_1;
  }
  function _get_lruEntries__vxc62y($this) {
    return $this.lruEntries_1;
  }
  function _get_cleanupScope__q7zg05($this) {
    return $this.cleanupScope_1;
  }
  function _get_lock__d9xa4g_1($this) {
    return $this.lock_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _set_operationsSinceRewrite__rjj4mf($this, _set____db54di) {
    $this.operationsSinceRewrite_1 = _set____db54di;
  }
  function _get_operationsSinceRewrite__5afo6r($this) {
    return $this.operationsSinceRewrite_1;
  }
  function _set_journalWriter__c6q7lx($this, _set____db54di) {
    $this.journalWriter_1 = _set____db54di;
  }
  function _get_journalWriter__rehq49($this) {
    return $this.journalWriter_1;
  }
  function _set_hasJournalErrors__x1nmxb($this, _set____db54di) {
    $this.hasJournalErrors_1 = _set____db54di;
  }
  function _get_hasJournalErrors__8wc5z1($this) {
    return $this.hasJournalErrors_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_closed__kdb0et_1($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_1($this) {
    return $this.closed_1;
  }
  function _set_mostRecentTrimFailed__hbjli2($this, _set____db54di) {
    $this.mostRecentTrimFailed_1 = _set____db54di;
  }
  function _get_mostRecentTrimFailed__3dgxhq($this) {
    return $this.mostRecentTrimFailed_1;
  }
  function _set_mostRecentRebuildFailed__8rrm8l($this, _set____db54di) {
    $this.mostRecentRebuildFailed_1 = _set____db54di;
  }
  function _get_mostRecentRebuildFailed__t8x0i1($this) {
    return $this.mostRecentRebuildFailed_1;
  }
  function _get_fileSystem__siywv4_0($this) {
    return $this.fileSystem_1;
  }
  function readJournal($this) {
    // Inline function 'okio.FileSystem.read' call
    var this_0 = $this.fileSystem_1;
    var file = $this.journalFile_1;
    // Inline function 'okio.use' call
    var this_1 = buffer(this_0.source_11bfje_k$(file));
    var thrown = null;
    var tmp;
    try {
      // Inline function 'okio.FileSystem.read.<anonymous>' call
      var magic = this_1.readUtf8LineStrict_40ilic_k$();
      var version = this_1.readUtf8LineStrict_40ilic_k$();
      var appVersionString = this_1.readUtf8LineStrict_40ilic_k$();
      var valueCountString = this_1.readUtf8LineStrict_40ilic_k$();
      var blank = this_1.readUtf8LineStrict_40ilic_k$();
      var tmp_0;
      if (!('libcore.io.DiskLruCache' === magic) || !('1' === version) || !($this.appVersion_1.toString() === appVersionString) || !($this.valueCount_1.toString() === valueCountString)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp_0 = charSequenceLength(blank) > 0;
      }
      if (tmp_0) {
        throw IOException_init_$Create$('unexpected journal header: ' + ('[' + magic + ', ' + version + ', ' + appVersionString + ', ' + valueCountString + ', ' + blank + ']'));
      }
      var lineCount = 0;
      $l$loop: while (true) {
        try {
          readJournalLine($this, this_1.readUtf8LineStrict_40ilic_k$());
          lineCount = lineCount + 1 | 0;
        } catch ($p) {
          if ($p instanceof EOFException) {
            var _unused_var__etf5q3 = $p;
            break $l$loop;
          } else {
            throw $p;
          }
        }
      }
      $this.operationsSinceRewrite_1 = lineCount - $this.lruEntries_1.get_size_woubt6_k$() | 0;
      if (!this_1.exhausted_p1jt55_k$()) {
        writeJournal($this);
      } else {
        $this.journalWriter_1 = newJournalWriter($this);
      }
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    finally {
      try {
        if (this_1 == null)
          null;
        else {
          this_1.close_yn9xrc_k$();
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
    (result == null ? true : !(result == null)) || THROW_CCE();
  }
  function newJournalWriter($this) {
    var fileSink = $this.fileSystem_1.appendingSink$default_yfdib4_k$($this.journalFile_1);
    var faultHidingSink = new FaultHidingSink(fileSink, DiskLruCache$newJournalWriter$lambda($this));
    return buffer_0(faultHidingSink);
  }
  function readJournalLine($this, line) {
    var firstSpace = indexOf(line, _Char___init__impl__6a9atx(32));
    if (firstSpace === -1)
      throw IOException_init_$Create$('unexpected journal line: ' + line);
    var keyBegin = firstSpace + 1 | 0;
    var secondSpace = indexOf(line, _Char___init__impl__6a9atx(32), keyBegin);
    var key;
    if (secondSpace === -1) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      key = line.substring(keyBegin);
      if (firstSpace === 6 && startsWith(line, 'REMOVE')) {
        $this.lruEntries_1.remove_gppy8k_k$(key);
        return Unit_getInstance();
      }
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      key = line.substring(keyBegin, secondSpace);
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = $this.lruEntries_1;
    var key_0 = key;
    var value = this_0.get_wei43m_k$(key_0);
    var tmp;
    if (value == null) {
      // Inline function 'coil3.disk.DiskLruCache.readJournalLine.<anonymous>' call
      var answer = new Entry_0($this, key);
      this_0.put_4fpzoq_k$(key_0, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var entry = tmp;
    if (!(secondSpace === -1) && firstSpace === 5 && startsWith(line, 'CLEAN')) {
      // Inline function 'kotlin.text.substring' call
      var startIndex = secondSpace + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = line.substring(startIndex);
      var parts = split(tmp$ret$7, charArrayOf([_Char___init__impl__6a9atx(32)]));
      entry.readable_1 = true;
      entry.currentEditor_1 = null;
      entry.setLengths_wljuh_k$(parts);
    } else if (secondSpace === -1 && firstSpace === 5 && startsWith(line, 'DIRTY')) {
      entry.currentEditor_1 = new Editor_0($this, entry);
    } else if (secondSpace !== -1 || firstSpace !== 4 || !startsWith(line, 'READ'))
      throw IOException_init_$Create$('unexpected journal line: ' + line);
  }
  function processJournal($this) {
    var size = new Long(0, 0);
    var iterator = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var entry = iterator.next_20eer_k$();
      if (entry.currentEditor_1 == null) {
        var inductionVariable = 0;
        var last = $this.valueCount_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            size = size.plus_r93sks_k$(entry.lengths_1[i]);
          }
           while (inductionVariable < last);
      } else {
        entry.currentEditor_1 = null;
        var inductionVariable_0 = 0;
        var last_0 = $this.valueCount_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $this.fileSystem_1.delete$default_1zkyi8_k$(entry.cleanFiles_1.get_c1px32_k$(i_0));
            $this.fileSystem_1.delete$default_1zkyi8_k$(entry.dirtyFiles_1.get_c1px32_k$(i_0));
          }
           while (inductionVariable_0 < last_0);
        iterator.remove_ldkf9o_k$();
      }
    }
    $this.size_1 = size;
  }
  function writeJournal($this) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.lock_1;
    var tmp0_safe_receiver = $this.journalWriter_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_yn9xrc_k$();
    }
    // Inline function 'okio.FileSystem.write' call
    var this_0 = $this.fileSystem_1;
    var file = $this.journalFileTmp_1;
    // Inline function 'okio.use' call
    var this_1 = buffer_0(this_0.sink_3ey1xj_k$(file, false));
    var thrown = null;
    var tmp;
    try {
      // Inline function 'okio.FileSystem.write.<anonymous>' call
      var tmp_0 = this_1.writeUtf8_9rv3au_k$('libcore.io.DiskLruCache');
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(10);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_2);
      tmp_0.writeByte_3m2t4h_k$(tmp$ret$0);
      var tmp_1 = this_1.writeUtf8_9rv3au_k$('1');
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(10);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_3);
      tmp_1.writeByte_3m2t4h_k$(tmp$ret$1);
      var tmp_2 = this_1.writeDecimalLong_3t8cww_k$(toLong($this.appVersion_1));
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(10);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_4);
      tmp_2.writeByte_3m2t4h_k$(tmp$ret$2);
      var tmp_3 = this_1.writeDecimalLong_3t8cww_k$(toLong($this.valueCount_1));
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_5);
      tmp_3.writeByte_3m2t4h_k$(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_6);
      this_1.writeByte_3m2t4h_k$(tmp$ret$4);
      var _iterator__ex2g4s = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var entry = _iterator__ex2g4s.next_20eer_k$();
        if (!(entry.currentEditor_1 == null)) {
          this_1.writeUtf8_9rv3au_k$('DIRTY');
          // Inline function 'kotlin.code' call
          var this_7 = _Char___init__impl__6a9atx(32);
          var tmp$ret$5 = Char__toInt_impl_vasixd(this_7);
          this_1.writeByte_3m2t4h_k$(tmp$ret$5);
          this_1.writeUtf8_9rv3au_k$(entry.key_1);
          // Inline function 'kotlin.code' call
          var this_8 = _Char___init__impl__6a9atx(10);
          var tmp$ret$6 = Char__toInt_impl_vasixd(this_8);
          this_1.writeByte_3m2t4h_k$(tmp$ret$6);
        } else {
          this_1.writeUtf8_9rv3au_k$('CLEAN');
          // Inline function 'kotlin.code' call
          var this_9 = _Char___init__impl__6a9atx(32);
          var tmp$ret$7 = Char__toInt_impl_vasixd(this_9);
          this_1.writeByte_3m2t4h_k$(tmp$ret$7);
          this_1.writeUtf8_9rv3au_k$(entry.key_1);
          entry.writeLengths_oj0xc6_k$(this_1);
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(10);
          var tmp$ret$8 = Char__toInt_impl_vasixd(this_10);
          this_1.writeByte_3m2t4h_k$(tmp$ret$8);
        }
      }
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var t = $p;
        thrown = t;
        tmp_4 = null;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    finally {
      try {
        if (this_1 == null)
          null;
        else {
          this_1.close_yn9xrc_k$();
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
    (result == null ? true : !(result == null)) || THROW_CCE();
    if ($this.fileSystem_1.exists_gjgzpn_k$($this.journalFile_1)) {
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFile_1, $this.journalFileBackup_1);
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFileTmp_1, $this.journalFile_1);
      $this.fileSystem_1.delete$default_1zkyi8_k$($this.journalFileBackup_1);
    } else {
      $this.fileSystem_1.atomicMove_mzx74k_k$($this.journalFileTmp_1, $this.journalFile_1);
    }
    $this.journalWriter_1 = newJournalWriter($this);
    $this.operationsSinceRewrite_1 = 0;
    $this.hasJournalErrors_1 = false;
    $this.mostRecentRebuildFailed_1 = false;
    return Unit_getInstance();
  }
  function completeEdit($this, editor, success) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.lock_1;
    var entry = editor.entry_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(entry.currentEditor_1, editor)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (success && !entry.zombie_1) {
      var inductionVariable = 0;
      var last = $this.valueCount_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (editor.written_1[i] && !$this.fileSystem_1.exists_gjgzpn_k$(entry.dirtyFiles_1.get_c1px32_k$(i))) {
            editor.abort_lahfmo_k$();
            return Unit_getInstance();
          }
        }
         while (inductionVariable < last);
      var inductionVariable_0 = 0;
      var last_0 = $this.valueCount_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var dirty = entry.dirtyFiles_1.get_c1px32_k$(i_0);
          var clean = entry.cleanFiles_1.get_c1px32_k$(i_0);
          if ($this.fileSystem_1.exists_gjgzpn_k$(dirty)) {
            $this.fileSystem_1.atomicMove_mzx74k_k$(dirty, clean);
          } else {
            createFile($this.fileSystem_1, entry.cleanFiles_1.get_c1px32_k$(i_0));
          }
          var oldLength = entry.lengths_1[i_0];
          var tmp0_elvis_lhs = $this.fileSystem_1.metadata_r9b8qq_k$(clean).get_size_woubt6_k$();
          var newLength = tmp0_elvis_lhs == null ? new Long(0, 0) : tmp0_elvis_lhs;
          entry.lengths_1[i_0] = newLength;
          $this.size_1 = $this.size_1.minus_mfbszm_k$(oldLength).plus_r93sks_k$(newLength);
        }
         while (inductionVariable_0 < last_0);
    } else {
      var inductionVariable_1 = 0;
      var last_1 = $this.valueCount_1;
      if (inductionVariable_1 < last_1)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          $this.fileSystem_1.delete$default_1zkyi8_k$(entry.dirtyFiles_1.get_c1px32_k$(i_1));
        }
         while (inductionVariable_1 < last_1);
    }
    entry.currentEditor_1 = null;
    if (entry.zombie_1) {
      removeEntry($this, entry);
      return Unit_getInstance();
    }
    $this.operationsSinceRewrite_1 = $this.operationsSinceRewrite_1 + 1 | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull($this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.DiskLruCache.completeEdit.<anonymous>.<anonymous>' call
    if (success || entry.readable_1) {
      entry.readable_1 = true;
      this_0.writeUtf8_9rv3au_k$('CLEAN');
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(32);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      this_0.writeByte_3m2t4h_k$(tmp$ret$1);
      this_0.writeUtf8_9rv3au_k$(entry.key_1);
      entry.writeLengths_oj0xc6_k$(this_0);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(10);
      var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
      this_0.writeByte_3m2t4h_k$(tmp$ret$2);
    } else {
      $this.lruEntries_1.remove_gppy8k_k$(entry.key_1);
      this_0.writeUtf8_9rv3au_k$('REMOVE');
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(32);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_3);
      this_0.writeByte_3m2t4h_k$(tmp$ret$3);
      this_0.writeUtf8_9rv3au_k$(entry.key_1);
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
      this_0.writeByte_3m2t4h_k$(tmp$ret$4);
    }
    this_0.flush_shahbo_k$();
    if ($this.size_1.compareTo_9jj042_k$($this.maxSize_1) > 0 || journalRewriteRequired($this)) {
      launchCleanup($this);
    }
    return Unit_getInstance();
  }
  function journalRewriteRequired($this) {
    return $this.operationsSinceRewrite_1 >= 2000;
  }
  function removeEntry($this, entry) {
    if (entry.lockingSnapshotCount_1 > 0) {
      var tmp0_safe_receiver = $this.journalWriter_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.disk.DiskLruCache.removeEntry.<anonymous>' call
        tmp0_safe_receiver.writeUtf8_9rv3au_k$('DIRTY');
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(32);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        tmp0_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$0);
        tmp0_safe_receiver.writeUtf8_9rv3au_k$(entry.key_1);
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(10);
        var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
        tmp0_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$1);
        tmp0_safe_receiver.flush_shahbo_k$();
      }
    }
    if (entry.lockingSnapshotCount_1 > 0 || !(entry.currentEditor_1 == null)) {
      entry.zombie_1 = true;
      return true;
    }
    var inductionVariable = 0;
    var last = $this.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $this.fileSystem_1.delete$default_1zkyi8_k$(entry.cleanFiles_1.get_c1px32_k$(i));
        $this.size_1 = $this.size_1.minus_mfbszm_k$(entry.lengths_1[i]);
        entry.lengths_1[i] = new Long(0, 0);
      }
       while (inductionVariable < last);
    $this.operationsSinceRewrite_1 = $this.operationsSinceRewrite_1 + 1 | 0;
    var tmp1_safe_receiver = $this.journalWriter_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.disk.DiskLruCache.removeEntry.<anonymous>' call
      tmp1_safe_receiver.writeUtf8_9rv3au_k$('REMOVE');
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(32);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_2);
      tmp1_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$3);
      tmp1_safe_receiver.writeUtf8_9rv3au_k$(entry.key_1);
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(10);
      var tmp$ret$4 = Char__toInt_impl_vasixd(this_3);
      tmp1_safe_receiver.writeByte_3m2t4h_k$(tmp$ret$4);
      tmp1_safe_receiver.flush_shahbo_k$();
    }
    $this.lruEntries_1.remove_gppy8k_k$(entry.key_1);
    if (journalRewriteRequired($this)) {
      launchCleanup($this);
    }
    return true;
  }
  function checkNotClosed($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.closed_1) {
      // Inline function 'coil3.disk.DiskLruCache.checkNotClosed.<anonymous>' call
      var message = 'cache is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function trimToSize($this) {
    while ($this.size_1.compareTo_9jj042_k$($this.maxSize_1) > 0) {
      if (!removeOldestEntry($this))
        return Unit_getInstance();
    }
    $this.mostRecentTrimFailed_1 = false;
  }
  function removeOldestEntry($this) {
    var _iterator__ex2g4s = $this.lruEntries_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var toEvict = _iterator__ex2g4s.next_20eer_k$();
      if (!toEvict.zombie_1) {
        removeEntry($this, toEvict);
        return true;
      }
    }
    return false;
  }
  function delete_0($this) {
    $this.close_yn9xrc_k$();
    deleteContents($this.fileSystem_1, $this.directory_1);
  }
  function launchCleanup($this) {
    launch($this.cleanupScope_1, VOID, VOID, DiskLruCache$launchCleanup$slambda_0($this, null));
  }
  function validateKey($this, key) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_8().LEGAL_KEY_PATTERN_1.matches_evli6i_k$(key)) {
      // Inline function 'coil3.disk.DiskLruCache.validateKey.<anonymous>' call
      var message = 'keys must match regex [a-z0-9_-]{1,120}: "' + key + '"';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function Snapshot_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = false;
  }
  protoOf(Snapshot_0).get_entry_iqxd1l_k$ = function () {
    return this.entry_1;
  };
  protoOf(Snapshot_0).file_w9da5g_k$ = function (index) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.closed_1) {
      // Inline function 'coil3.disk.Snapshot.file.<anonymous>' call
      var message = 'snapshot is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.entry_1.cleanFiles_1.get_c1px32_k$(index);
  };
  protoOf(Snapshot_0).close_yn9xrc_k$ = function () {
    if (!this.closed_1) {
      this.closed_1 = true;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.$this_1.lock_1;
      var _receiver__tnumb7 = this.entry_1;
      _receiver__tnumb7.lockingSnapshotCount_1 = _receiver__tnumb7.lockingSnapshotCount_1 - 1 | 0;
      if (this.entry_1.lockingSnapshotCount_1 === 0 && this.entry_1.zombie_1) {
        removeEntry(this.$this_1, this.entry_1);
      }
    }
  };
  protoOf(Snapshot_0).closeAndEdit_yimkix_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.$this_1.lock_1;
    this.close_yn9xrc_k$();
    return this.$this_1.edit_cuotlc_k$(this.entry_1.key_1);
  };
  function Editor_0($outer, entry) {
    this.$this_1 = $outer;
    this.entry_1 = entry;
    this.closed_1 = false;
    this.written_1 = booleanArray(this.$this_1.valueCount_1);
  }
  protoOf(Editor_0).get_entry_iqxd1l_k$ = function () {
    return this.entry_1;
  };
  protoOf(Editor_0).get_written_rry7fy_k$ = function () {
    return this.written_1;
  };
  protoOf(Editor_0).file_w9da5g_k$ = function (index) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.$this_1.lock_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.closed_1) {
      // Inline function 'coil3.disk.Editor.file.<anonymous>.<anonymous>' call
      var message = 'editor is closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.written_1[index] = true;
    // Inline function 'kotlin.also' call
    var this_0 = this.entry_1.dirtyFiles_1.get_c1px32_k$(index);
    var tmp2_also_receiver = this.$this_1.fileSystem_1;
    // Inline function 'kotlin.contracts.contract' call
    file$createFile(tmp2_also_receiver, this_0);
    return this_0;
  };
  protoOf(Editor_0).detach_fa8mkd_k$ = function () {
    if (equals(this.entry_1.currentEditor_1, this)) {
      this.entry_1.zombie_1 = true;
    }
  };
  protoOf(Editor_0).commit_vpt10n_k$ = function () {
    return complete_0(this, true);
  };
  protoOf(Editor_0).commitAndGet_ki4bmy_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.$this_1.lock_1;
    this.commit_vpt10n_k$();
    return this.$this_1.get_6bo4tg_k$(this.entry_1.key_1);
  };
  protoOf(Editor_0).abort_lahfmo_k$ = function () {
    return complete_0(this, false);
  };
  function Entry_0($outer, key) {
    this.$this_1 = $outer;
    this.key_1 = key;
    this.lengths_1 = longArray(this.$this_1.valueCount_1);
    this.cleanFiles_1 = ArrayList_init_$Create$_0(this.$this_1.valueCount_1);
    this.dirtyFiles_1 = ArrayList_init_$Create$_0(this.$this_1.valueCount_1);
    this.readable_1 = false;
    this.zombie_1 = false;
    this.currentEditor_1 = null;
    this.lockingSnapshotCount_1 = 0;
    var fileBuilder = (new StringBuilder(this.key_1)).append_am5a4z_k$(_Char___init__impl__6a9atx(46));
    var truncateTo = fileBuilder.get_length_g42xv3_k$();
    var inductionVariable = 0;
    var last = this.$this_1.valueCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        fileBuilder.append_uppzia_k$(i);
        // Inline function 'kotlin.collections.plusAssign' call
        var this_0 = this.cleanFiles_1;
        var element = this.$this_1.directory_1.div_thrqyx_k$(fileBuilder.toString());
        this_0.add_utx5q5_k$(element);
        fileBuilder.append_22ad7x_k$('.tmp');
        // Inline function 'kotlin.collections.plusAssign' call
        var this_1 = this.dirtyFiles_1;
        var element_0 = this.$this_1.directory_1.div_thrqyx_k$(fileBuilder.toString());
        this_1.add_utx5q5_k$(element_0);
        fileBuilder.setLength_oy0ork_k$(truncateTo);
      }
       while (inductionVariable < last);
  }
  protoOf(Entry_0).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry_0).get_lengths_2aqs10_k$ = function () {
    return this.lengths_1;
  };
  protoOf(Entry_0).get_cleanFiles_yknzyh_k$ = function () {
    return this.cleanFiles_1;
  };
  protoOf(Entry_0).get_dirtyFiles_boy8e_k$ = function () {
    return this.dirtyFiles_1;
  };
  protoOf(Entry_0).set_readable_ld3txk_k$ = function (_set____db54di) {
    this.readable_1 = _set____db54di;
  };
  protoOf(Entry_0).get_readable_ovw33t_k$ = function () {
    return this.readable_1;
  };
  protoOf(Entry_0).set_zombie_ai8j2q_k$ = function (_set____db54di) {
    this.zombie_1 = _set____db54di;
  };
  protoOf(Entry_0).get_zombie_mw6ucv_k$ = function () {
    return this.zombie_1;
  };
  protoOf(Entry_0).set_currentEditor_mwty4y_k$ = function (_set____db54di) {
    this.currentEditor_1 = _set____db54di;
  };
  protoOf(Entry_0).get_currentEditor_t0a8t9_k$ = function () {
    return this.currentEditor_1;
  };
  protoOf(Entry_0).set_lockingSnapshotCount_2pfe6v_k$ = function (_set____db54di) {
    this.lockingSnapshotCount_1 = _set____db54di;
  };
  protoOf(Entry_0).get_lockingSnapshotCount_rgcd3x_k$ = function () {
    return this.lockingSnapshotCount_1;
  };
  protoOf(Entry_0).setLengths_wljuh_k$ = function (strings) {
    if (!(strings.get_size_woubt6_k$() === this.$this_1.valueCount_1)) {
      throw IOException_init_$Create$('unexpected journal line: ' + toString(strings));
    }
    try {
      var inductionVariable = 0;
      var last = strings.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.lengths_1[i] = toLong_0(strings.get_c1px32_k$(i));
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof NumberFormatException) {
        var _unused_var__etf5q3 = $p;
        throw IOException_init_$Create$('unexpected journal line: ' + toString(strings));
      } else {
        throw $p;
      }
    }
  };
  protoOf(Entry_0).writeLengths_oj0xc6_k$ = function (writer) {
    var indexedObject = this.lengths_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var length = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      writer.writeByte_3m2t4h_k$(tmp$ret$0).writeDecimalLong_3t8cww_k$(length);
    }
  };
  protoOf(Entry_0).snapshot_4plubo_k$ = function () {
    if (!this.readable_1)
      return null;
    if (!(this.currentEditor_1 == null) || this.zombie_1)
      return null;
    // Inline function 'coil3.util.forEachIndices' call
    var this_0 = this.cleanFiles_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'coil3.disk.Entry.snapshot.<anonymous>' call
        var file = this_0.get_c1px32_k$(i);
        if (!this.$this_1.fileSystem_1.exists_gjgzpn_k$(file)) {
          try {
            removeEntry(this.$this_1, this);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _unused_var__etf5q3 = $p;
            } else {
              throw $p;
            }
          }
          return null;
        }
      }
       while (inductionVariable <= last);
    this.lockingSnapshotCount_1 = this.lockingSnapshotCount_1 + 1 | 0;
    return new Snapshot_0(this.$this_1, this);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.JOURNAL_FILE_1 = 'journal';
    this.JOURNAL_FILE_TMP_1 = 'journal.tmp';
    this.JOURNAL_FILE_BACKUP_1 = 'journal.bkp';
    this.MAGIC_1 = 'libcore.io.DiskLruCache';
    this.VERSION_1 = '1';
    this.CLEAN_1 = 'CLEAN';
    this.DIRTY_1 = 'DIRTY';
    this.REMOVE_1 = 'REMOVE';
    this.READ_1 = 'READ';
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '[a-z0-9_-]{1,120}';
    tmp.LEGAL_KEY_PATTERN_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_1).get_JOURNAL_FILE_hcx6ry_k$ = function () {
    return this.JOURNAL_FILE_1;
  };
  protoOf(Companion_1).get_JOURNAL_FILE_TMP_64defa_k$ = function () {
    return this.JOURNAL_FILE_TMP_1;
  };
  protoOf(Companion_1).get_JOURNAL_FILE_BACKUP_5n0xyt_k$ = function () {
    return this.JOURNAL_FILE_BACKUP_1;
  };
  protoOf(Companion_1).get_MAGIC_am13wl_k$ = function () {
    return this.MAGIC_1;
  };
  protoOf(Companion_1).get_VERSION_bw4n00_k$ = function () {
    return this.VERSION_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_8() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DiskLruCache$fileSystem$1($fileSystem) {
    ForwardingFileSystem.call(this, $fileSystem);
  }
  protoOf(DiskLruCache$fileSystem$1).sink_3ey1xj_k$ = function (file, mustCreate) {
    var tmp0_safe_receiver = file.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      sink$createDirectories(this, tmp0_safe_receiver);
    }
    return protoOf(ForwardingFileSystem).sink_3ey1xj_k$.call(this, file, mustCreate);
  };
  function DiskLruCache$newJournalWriter$lambda(this$0) {
    return function (it) {
      this$0.hasJournalErrors_1 = true;
      return Unit_getInstance();
    };
  }
  function DiskLruCache$launchCleanup$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DiskLruCache$launchCleanup$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DiskLruCache$launchCleanup$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1.lock_1;
          if (!this.this$0__1.initialized_1 || this.this$0__1.closed_1)
            return Unit_getInstance();
          try {
            trimToSize(this.this$0__1);
          } catch ($p) {
            if ($p instanceof IOException) {
              var _unused_var__etf5q3 = $p;
              this.this$0__1.mostRecentTrimFailed_1 = true;
            } else {
              throw $p;
            }
          }
          try {
            if (journalRewriteRequired(this.this$0__1)) {
              writeJournal(this.this$0__1);
            }
          } catch ($p) {
            if ($p instanceof IOException) {
              var _unused_var__etf5q3_0 = $p;
              this.this$0__1.mostRecentRebuildFailed_1 = true;
              this.this$0__1.journalWriter_1 = buffer_0(blackholeSink());
            } else {
              throw $p;
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DiskLruCache$launchCleanup$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DiskLruCache$launchCleanup$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DiskLruCache$launchCleanup$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DiskLruCache$launchCleanup$slambda_0(this$0, resultContinuation) {
    var i = new DiskLruCache$launchCleanup$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DiskLruCache(fileSystem, directory, cleanupDispatcher, maxSize, appVersion, valueCount) {
    Companion_getInstance_8();
    this.directory_1 = directory;
    this.maxSize_1 = maxSize;
    this.appVersion_1 = appVersion;
    this.valueCount_1 = valueCount;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.maxSize_1.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.disk.DiskLruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.valueCount_1 > 0)) {
      // Inline function 'coil3.disk.DiskLruCache.<anonymous>' call
      var message_0 = 'valueCount <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.journalFile_1 = this.directory_1.div_thrqyx_k$('journal');
    this.journalFileTmp_1 = this.directory_1.div_thrqyx_k$('journal.tmp');
    this.journalFileBackup_1 = this.directory_1.div_thrqyx_k$('journal.bkp');
    this.lruEntries_1 = LruMutableMap();
    this.cleanupScope_1 = CoroutineScope_0(SupervisorJob().plus_s13ygv_k$(cleanupDispatcher.limitedParallelism$default_fymcw7_k$(1)));
    this.lock_1 = new Object();
    this.size_1 = new Long(0, 0);
    this.operationsSinceRewrite_1 = 0;
    this.journalWriter_1 = null;
    this.hasJournalErrors_1 = false;
    this.initialized_1 = false;
    this.closed_1 = false;
    this.mostRecentTrimFailed_1 = false;
    this.mostRecentRebuildFailed_1 = false;
    var tmp = this;
    tmp.fileSystem_1 = new DiskLruCache$fileSystem$1(fileSystem);
  }
  protoOf(DiskLruCache).initialize_o9rygw_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    if (this.initialized_1)
      return Unit_getInstance();
    this.fileSystem_1.delete$default_1zkyi8_k$(this.journalFileTmp_1);
    if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFileBackup_1)) {
      if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFile_1)) {
        this.fileSystem_1.delete$default_1zkyi8_k$(this.journalFileBackup_1);
      } else {
        this.fileSystem_1.atomicMove_mzx74k_k$(this.journalFileBackup_1, this.journalFile_1);
      }
    }
    if (this.fileSystem_1.exists_gjgzpn_k$(this.journalFile_1)) {
      try {
        readJournal(this);
        processJournal(this);
        this.initialized_1 = true;
        return Unit_getInstance();
      } catch ($p) {
        if ($p instanceof IOException) {
          var _unused_var__etf5q3 = $p;
        } else {
          throw $p;
        }
      }
      try {
        delete_0(this);
      }finally {
        this.closed_1 = false;
      }
    }
    writeJournal(this);
    this.initialized_1 = true;
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).get_6bo4tg_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var tmp0_safe_receiver = this.lruEntries_1.get_wei43m_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.snapshot_4plubo_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var snapshot = tmp;
    this.operationsSinceRewrite_1 = this.operationsSinceRewrite_1 + 1 | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.DiskLruCache.get.<anonymous>.<anonymous>' call
    this_0.writeUtf8_9rv3au_k$('READ');
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(32);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
    this_0.writeByte_3m2t4h_k$(tmp$ret$0);
    this_0.writeUtf8_9rv3au_k$(key);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
    this_0.writeByte_3m2t4h_k$(tmp$ret$1);
    this_0.flush_shahbo_k$();
    if (journalRewriteRequired(this)) {
      launchCleanup(this);
    }
    return snapshot;
  };
  protoOf(DiskLruCache).edit_cuotlc_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var entry = this.lruEntries_1.get_wei43m_k$(key);
    var tmp0_safe_receiver = entry;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.currentEditor_1) == null)) {
      return null;
    }
    if (!(entry == null) && !(entry.lockingSnapshotCount_1 === 0)) {
      return null;
    }
    if (this.mostRecentTrimFailed_1 || this.mostRecentRebuildFailed_1) {
      launchCleanup(this);
      return null;
    }
    // Inline function 'kotlin.apply' call
    var this_0 = ensureNotNull(this.journalWriter_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.disk.DiskLruCache.edit.<anonymous>.<anonymous>' call
    this_0.writeUtf8_9rv3au_k$('DIRTY');
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(32);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
    this_0.writeByte_3m2t4h_k$(tmp$ret$0);
    this_0.writeUtf8_9rv3au_k$(key);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
    this_0.writeByte_3m2t4h_k$(tmp$ret$1);
    this_0.flush_shahbo_k$();
    if (this.hasJournalErrors_1) {
      return null;
    }
    if (entry == null) {
      entry = new Entry_0(this, key);
      // Inline function 'kotlin.collections.set' call
      var this_3 = this.lruEntries_1;
      var value = entry;
      this_3.put_4fpzoq_k$(key, value);
    }
    var editor = new Editor_0(this, entry);
    entry.currentEditor_1 = editor;
    return editor;
  };
  protoOf(DiskLruCache).size_23och_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.initialize_o9rygw_k$();
    return this.size_1;
  };
  protoOf(DiskLruCache).remove_z05dva_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    checkNotClosed(this);
    validateKey(this, key);
    this.initialize_o9rygw_k$();
    var tmp0_elvis_lhs = this.lruEntries_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    var removed = removeEntry(this, entry);
    if (removed && this.size_1.compareTo_9jj042_k$(this.maxSize_1) <= 0) {
      this.mostRecentTrimFailed_1 = false;
    }
    return removed;
  };
  protoOf(DiskLruCache).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    if (!this.initialized_1 || this.closed_1) {
      this.closed_1 = true;
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.lruEntries_1.get_values_ksazhn_k$();
    var indexedObject = copyToArray(this_0);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp0_safe_receiver = entry.currentEditor_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.detach_fa8mkd_k$();
      }
    }
    trimToSize(this);
    cancel(this.cleanupScope_1);
    ensureNotNull(this.journalWriter_1).close_yn9xrc_k$();
    this.journalWriter_1 = null;
    this.closed_1 = true;
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).flush_shahbo_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    if (!this.initialized_1)
      return Unit_getInstance();
    checkNotClosed(this);
    trimToSize(this);
    ensureNotNull(this.journalWriter_1).flush_shahbo_k$();
    return Unit_getInstance();
  };
  protoOf(DiskLruCache).evictAll_sdrs94_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.initialize_o9rygw_k$();
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.lruEntries_1.get_values_ksazhn_k$();
    var indexedObject = copyToArray(this_0);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var entry = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      removeEntry(this, entry);
    }
    this.mostRecentTrimFailed_1 = false;
    return Unit_getInstance();
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_onException__a5todb($this) {
    return $this.onException_1;
  }
  function _set_hasErrors__t94ssg($this, _set____db54di) {
    $this.hasErrors_1 = _set____db54di;
  }
  function _get_hasErrors__ch4ss4($this) {
    return $this.hasErrors_1;
  }
  function FaultHidingSink(delegate, onException) {
    this.delegate_1 = delegate;
    this.onException_1 = onException;
    this.hasErrors_1 = false;
  }
  protoOf(FaultHidingSink).write_f49az7_k$ = function (source, byteCount) {
    if (this.hasErrors_1) {
      source.skip_bgd4sf_k$(byteCount);
      return Unit_getInstance();
    }
    try {
      this.delegate_1.write_f49az7_k$(source, byteCount);
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).flush_shahbo_k$ = function () {
    try {
      this.delegate_1.flush_shahbo_k$();
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).close_yn9xrc_k$ = function () {
    try {
      this.delegate_1.close_yn9xrc_k$();
    } catch ($p) {
      if ($p instanceof IOException) {
        var e = $p;
        this.hasErrors_1 = true;
        this.onException_1(e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(FaultHidingSink).timeout_lq9okf_k$ = function () {
    return this.delegate_1.timeout_lq9okf_k$();
  };
  function _get_snapshot__shtuvb($this) {
    return $this.snapshot_1;
  }
  function _get_editor__6kl8ou($this) {
    return $this.editor_1;
  }
  function _get_ENTRY_METADATA__qj5p1r($this) {
    return $this.ENTRY_METADATA_1;
  }
  function _get_ENTRY_DATA__65kstw($this) {
    return $this.ENTRY_DATA_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function hash(_this__u8e3s4, $this) {
    return Companion_getInstance_0().encodeUtf8_5n709n_k$(_this__u8e3s4).sha256_exzwt5_k$().hex_27mj_k$();
  }
  function RealSnapshot(snapshot) {
    this.snapshot_1 = snapshot;
  }
  protoOf(RealSnapshot).get_metadata_vs95vc_k$ = function () {
    return this.snapshot_1.file_w9da5g_k$(0);
  };
  protoOf(RealSnapshot).get_data_wokkxf_k$ = function () {
    return this.snapshot_1.file_w9da5g_k$(1);
  };
  protoOf(RealSnapshot).close_yn9xrc_k$ = function () {
    return this.snapshot_1.close_yn9xrc_k$();
  };
  protoOf(RealSnapshot).closeAndOpenEditor_du1eh6_k$ = function () {
    var tmp0_safe_receiver = this.snapshot_1.closeAndEdit_yimkix_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealEditor(tmp0_safe_receiver);
    }
    return tmp;
  };
  function RealEditor(editor) {
    this.editor_1 = editor;
  }
  protoOf(RealEditor).get_metadata_vs95vc_k$ = function () {
    return this.editor_1.file_w9da5g_k$(0);
  };
  protoOf(RealEditor).get_data_wokkxf_k$ = function () {
    return this.editor_1.file_w9da5g_k$(1);
  };
  protoOf(RealEditor).commit_vpt10n_k$ = function () {
    return this.editor_1.commit_vpt10n_k$();
  };
  protoOf(RealEditor).commitAndOpenSnapshot_teh9jm_k$ = function () {
    var tmp0_safe_receiver = this.editor_1.commitAndGet_ki4bmy_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealSnapshot(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealEditor).abort_lahfmo_k$ = function () {
    return this.editor_1.abort_lahfmo_k$();
  };
  function Companion_2() {
    Companion_instance_2 = this;
    this.ENTRY_METADATA_1 = 0;
    this.ENTRY_DATA_1 = 1;
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RealDiskCache(maxSize, directory, fileSystem, cleanupDispatcher) {
    Companion_getInstance_9();
    this.maxSize_1 = maxSize;
    this.directory_1 = directory;
    this.fileSystem_1 = fileSystem;
    this.cache_1 = new DiskLruCache(this.fileSystem_1, this.directory_1, cleanupDispatcher, this.maxSize_1, 3, 2);
  }
  protoOf(RealDiskCache).get_maxSize_f83j4s_k$ = function () {
    return this.maxSize_1;
  };
  protoOf(RealDiskCache).get_directory_7ekq4c_k$ = function () {
    return this.directory_1;
  };
  protoOf(RealDiskCache).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(RealDiskCache).get_size_woubt6_k$ = function () {
    return this.cache_1.size_23och_k$();
  };
  protoOf(RealDiskCache).openSnapshot_67z3ik_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_6bo4tg_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealSnapshot(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealDiskCache).openEditor_5w5t8d_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.edit_cuotlc_k$(hash(key, this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = new RealEditor(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(RealDiskCache).remove_z05dva_k$ = function (key) {
    return this.cache_1.remove_z05dva_k$(hash(key, this));
  };
  protoOf(RealDiskCache).clear_j9egeb_k$ = function () {
    this.cache_1.evictAll_sdrs94_k$();
  };
  protoOf(RealDiskCache).shutdown_cplwmy_k$ = function () {
    closeQuietly(this.cache_1);
  };
  function _get_byteArray__lzbpog($this) {
    return $this.byteArray_1;
  }
  function _get_options__xuq71v($this) {
    return $this.options_1;
  }
  function Factory_0() {
  }
  protoOf(Factory_0).create_ldlvjo_k$ = function (data, options, imageLoader) {
    return new ByteArrayFetcher(data, options);
  };
  protoOf(Factory_0).create_63rtby_k$ = function (data, options, imageLoader) {
    return this.create_ldlvjo_k$(isByteArray(data) ? data : THROW_CCE(), options, imageLoader);
  };
  function ByteArrayFetcher(byteArray, options) {
    this.byteArray_1 = byteArray;
    this.options_1 = options;
  }
  protoOf(ByteArrayFetcher).fetch_jkxcim_k$ = function ($completion) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.fetch.ByteArrayFetcher.fetch.<anonymous>' call
    this_0.write_ldf0ov_k$(this.byteArray_1);
    return new SourceFetchResult(ImageSource_0(this_0, this.options_1.get_fileSystem_9p6nv8_k$()), null, DataSource_MEMORY_getInstance());
  };
  protoOf(ByteArrayFetcher).fetch_fwgef_k$ = function ($completion) {
    return this.fetch_jkxcim_k$($completion);
  };
  function FetchResult() {
  }
  function SourceFetchResult(source, mimeType, dataSource) {
    this.source_1 = source;
    this.mimeType_1 = mimeType;
    this.dataSource_1 = dataSource;
  }
  protoOf(SourceFetchResult).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(SourceFetchResult).get_mimeType_g7ccbb_k$ = function () {
    return this.mimeType_1;
  };
  protoOf(SourceFetchResult).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(SourceFetchResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SourceFetchResult))
      return false;
    if (!equals(this.source_1, other.source_1))
      return false;
    if (!(this.mimeType_1 == other.mimeType_1))
      return false;
    if (!this.dataSource_1.equals(other.dataSource_1))
      return false;
    return true;
  };
  protoOf(SourceFetchResult).hashCode = function () {
    var result = hashCode(this.source_1);
    result = imul(result, 31) + (this.mimeType_1 == null ? 0 : getStringHashCode(this.mimeType_1)) | 0;
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    return result;
  };
  protoOf(SourceFetchResult).toString = function () {
    return 'SourceFetchResult(source=' + toString(this.source_1) + ', mimeType=' + this.mimeType_1 + ', dataSource=' + this.dataSource_1.toString() + ')';
  };
  function ImageFetchResult(image, isSampled, dataSource) {
    this.image_1 = image;
    this.isSampled_1 = isSampled;
    this.dataSource_1 = dataSource;
  }
  protoOf(ImageFetchResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ImageFetchResult).get_isSampled_trm7d3_k$ = function () {
    return this.isSampled_1;
  };
  protoOf(ImageFetchResult).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(ImageFetchResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageFetchResult))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!(this.isSampled_1 === other.isSampled_1))
      return false;
    if (!this.dataSource_1.equals(other.dataSource_1))
      return false;
    return true;
  };
  protoOf(ImageFetchResult).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + getBooleanHashCode(this.isSampled_1) | 0;
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageFetchResult).toString = function () {
    return 'ImageFetchResult(image=' + toString(this.image_1) + ', isSampled=' + this.isSampled_1 + ', dataSource=' + this.dataSource_1.toString() + ')';
  };
  function Factory_1() {
  }
  function Fetcher() {
  }
  function _get_uri__e6i4dh($this) {
    return $this.uri_1;
  }
  function _get_options__xuq71v_0($this) {
    return $this.options_1;
  }
  function Factory_2() {
  }
  protoOf(Factory_2).create_aehmyz_k$ = function (data, options, imageLoader) {
    if (!isFileUri(data))
      return null;
    return new FileUriFetcher(data, options);
  };
  protoOf(Factory_2).create_63rtby_k$ = function (data, options, imageLoader) {
    return this.create_aehmyz_k$(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function FileUriFetcher(uri, options) {
    this.uri_1 = uri;
    this.options_1 = options;
  }
  protoOf(FileUriFetcher).fetch_jkxcim_k$ = function ($completion) {
    var tmp = Companion_getInstance();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = get_filePath(this.uri_1);
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
    var path = tmp.toPath$default_vs59ry_k$(tmp$ret$1);
    return new SourceFetchResult(ImageSource_1(path, this.options_1.get_fileSystem_9p6nv8_k$()), MimeTypeMap_getInstance().getMimeTypeFromExtension_gym021_k$(get_extension(path)), DataSource_DISK_getInstance());
  };
  protoOf(FileUriFetcher).fetch_fwgef_k$ = function ($completion) {
    return this.fetch_jkxcim_k$($completion);
  };
  function get_serviceLoaderEnabledKey() {
    _init_properties_imageLoaders_kt__fgbxt1();
    return serviceLoaderEnabledKey;
  }
  var serviceLoaderEnabledKey;
  function get_serviceLoaderEnabled(_this__u8e3s4) {
    _init_properties_imageLoaders_kt__fgbxt1();
    return getOrDefault(_this__u8e3s4.get_defaults_l5ckbp_k$().get_extras_d3bq0c_k$(), get_serviceLoaderEnabledKey());
  }
  var properties_initialized_imageLoaders_kt_u99cbr;
  function _init_properties_imageLoaders_kt__fgbxt1() {
    if (!properties_initialized_imageLoaders_kt_u99cbr) {
      properties_initialized_imageLoaders_kt_u99cbr = true;
      serviceLoaderEnabledKey = new Key(true);
    }
  }
  function _get_imageLoader__s7mz25($this) {
    return $this.imageLoader_1;
  }
  function _get_systemCallbacks__h61eaa_0($this) {
    return $this.systemCallbacks_1;
  }
  function _get_requestService__k7fg4b_0($this) {
    return $this.requestService_1;
  }
  function _get_logger__rkp4sl_0($this) {
    return $this.logger_1;
  }
  function _get_memoryCacheService__vwlw2f($this) {
    return $this.memoryCacheService_1;
  }
  function execute_0($this, request, mappedData, options, eventListener, $completion) {
    var tmp = new $executeCOROUTINE$3($this, request, mappedData, options, eventListener, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function fetch($this, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $fetchCOROUTINE$4($this, components, request, mappedData, options, eventListener, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function decode($this, fetchResult, components, request, mappedData, options, eventListener, $completion) {
    var tmp = new $decodeCOROUTINE$5($this, fetchResult, components, request, mappedData, options, eventListener, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function ExecuteResult(image, isSampled, dataSource, diskCacheKey) {
    this.image_1 = image;
    this.isSampled_1 = isSampled;
    this.dataSource_1 = dataSource;
    this.diskCacheKey_1 = diskCacheKey;
  }
  protoOf(ExecuteResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ExecuteResult).get_isSampled_trm7d3_k$ = function () {
    return this.isSampled_1;
  };
  protoOf(ExecuteResult).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(ExecuteResult).get_diskCacheKey_gvj33x_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(ExecuteResult).component1_7eebsc_k$ = function () {
    return this.image_1;
  };
  protoOf(ExecuteResult).component2_7eebsb_k$ = function () {
    return this.isSampled_1;
  };
  protoOf(ExecuteResult).component3_7eebsa_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(ExecuteResult).component4_7eebs9_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(ExecuteResult).copy_jn5x4n_k$ = function (image, isSampled, dataSource, diskCacheKey) {
    return new ExecuteResult(image, isSampled, dataSource, diskCacheKey);
  };
  protoOf(ExecuteResult).copy$default_dhyi06_k$ = function (image, isSampled, dataSource, diskCacheKey, $super) {
    image = image === VOID ? this.image_1 : image;
    isSampled = isSampled === VOID ? this.isSampled_1 : isSampled;
    dataSource = dataSource === VOID ? this.dataSource_1 : dataSource;
    diskCacheKey = diskCacheKey === VOID ? this.diskCacheKey_1 : diskCacheKey;
    return $super === VOID ? this.copy_jn5x4n_k$(image, isSampled, dataSource, diskCacheKey) : $super.copy_jn5x4n_k$.call(this, image, isSampled, dataSource, diskCacheKey);
  };
  protoOf(ExecuteResult).toString = function () {
    return 'ExecuteResult(image=' + toString(this.image_1) + ', isSampled=' + this.isSampled_1 + ', dataSource=' + this.dataSource_1.toString() + ', diskCacheKey=' + this.diskCacheKey_1 + ')';
  };
  protoOf(ExecuteResult).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + getBooleanHashCode(this.isSampled_1) | 0;
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    result = imul(result, 31) + (this.diskCacheKey_1 == null ? 0 : getStringHashCode(this.diskCacheKey_1)) | 0;
    return result;
  };
  protoOf(ExecuteResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExecuteResult))
      return false;
    var tmp0_other_with_cast = other instanceof ExecuteResult ? other : THROW_CCE();
    if (!equals(this.image_1, tmp0_other_with_cast.image_1))
      return false;
    if (!(this.isSampled_1 === tmp0_other_with_cast.isSampled_1))
      return false;
    if (!this.dataSource_1.equals(tmp0_other_with_cast.dataSource_1))
      return false;
    if (!(this.diskCacheKey_1 == tmp0_other_with_cast.diskCacheKey_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.TAG_1 = 'EngineInterceptor';
  }
  protoOf(Companion_3).get_TAG_bzwhiq_k$ = function () {
    return this.TAG_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_10() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    this.this$0__1 = this$0;
    this.$request_1 = $request;
    this.$mappedData_1 = $mappedData;
    this.$options_1 = $options;
    this.$eventListener_1 = $eventListener;
    this.$cacheKey_1 = $cacheKey;
    this.$chain_1 = $chain;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$intercept$slambda).invoke_n4bx54_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(EngineInterceptor$intercept$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_n4bx54_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$intercept$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = execute_0(this.this$0__1, this.$request_1, this.$mappedData_1, this.$options_1, this.$eventListener_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            this.this$0__1.systemCallbacks_1.registerMemoryPressureCallbacks_fy5q1h_k$();
            var isCached = this.this$0__1.memoryCacheService_1.setCacheValue_bgdv7_k$(this.$cacheKey_1, this.$request_1, result);
            var this_0 = this.$cacheKey_1;
            var tmp_0;
            if (isCached) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            return new SuccessResult(result.image_1, this.$request_1, result.dataSource_1, tmp_0, result.diskCacheKey_1, result.isSampled_1, get_isPlaceholderCached(this.$chain_1));
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$intercept$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new EngineInterceptor$intercept$slambda(this.this$0__1, this.$request_1, this.$mappedData_1, this.$options_1, this.$eventListener_1, this.$cacheKey_1, this.$chain_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(EngineInterceptor$intercept$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function EngineInterceptor$intercept$slambda_0(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation) {
    var i = new EngineInterceptor$intercept$slambda(this$0, $request, $mappedData, $options, $eventListener, $cacheKey, $chain, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_n4bx54_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    this.this$0__1 = this$0;
    this.$fetchResult_1 = $fetchResult;
    this.$components_1 = $components;
    this.$request_1 = $request;
    this.$mappedData_1 = $mappedData;
    this.$options_1 = $options;
    this.$eventListener_1 = $eventListener;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EngineInterceptor$execute$slambda).invoke_4dw44i_k$ = function ($this$withContext, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withContext, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(EngineInterceptor$execute$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_4dw44i_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EngineInterceptor$execute$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = decode(this.this$0__1, this.$fetchResult_1._v, this.$components_1._v, this.$request_1, this.$mappedData_1, this.$options_1._v, this.$eventListener_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(EngineInterceptor$execute$slambda).create_rcuf4x_k$ = function ($this$withContext, completion) {
    var i = new EngineInterceptor$execute$slambda(this.this$0__1, this.$fetchResult_1, this.$components_1, this.$request_1, this.$mappedData_1, this.$options_1, this.$eventListener_1, completion);
    i.$this$withContext_1 = $this$withContext;
    return i;
  };
  protoOf(EngineInterceptor$execute$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function EngineInterceptor$execute$slambda_0(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation) {
    var i = new EngineInterceptor$execute$slambda(this$0, $fetchResult, $components, $request, $mappedData, $options, $eventListener, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.invoke_4dw44i_k$($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $interceptCOROUTINE$2(_this__u8e3s4, chain, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.chain_1 = chain;
  }
  protoOf($interceptCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.request0__1 = this.chain_1.get_request_jdwg4m_k$();
            this.data1__1 = this.request0__1.get_data_wokkxf_k$();
            this.size2__1 = this.chain_1.get_size_woubt6_k$();
            this.eventListener3__1 = get_eventListener(this.chain_1);
            this.options4__1 = this._this__u8e3s4__1.requestService_1.options_1wlr8l_k$(this.request0__1, this.size2__1);
            this.scale5__1 = this.options4__1.get_scale_iyf28x_k$();
            this.eventListener3__1.mapStart_5dkugz_k$(this.request0__1, this.data1__1);
            this.mappedData6__1 = this._this__u8e3s4__1.imageLoader_1.get_components_rknech_k$().map_kbsc43_k$(this.data1__1, this.options4__1);
            this.eventListener3__1.mapEnd_wbcdey_k$(this.request0__1, this.mappedData6__1);
            this.cacheKey7__1 = this._this__u8e3s4__1.memoryCacheService_1.newCacheKey_c12jyi_k$(this.request0__1, this.mappedData6__1, this.options4__1, this.eventListener3__1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.cacheKey7__1;
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = this._this__u8e3s4__1.memoryCacheService_1.getCacheValue_tolmk3_k$(this.request0__1, tmp0_safe_receiver, this.size2__1, this.scale5__1);
            }

            tmp_0.cacheValue8__1 = tmp_1;
            if (!(this.cacheValue8__1 == null)) {
              return this._this__u8e3s4__1.memoryCacheService_1.newResult_ojmwaq_k$(this.chain_1, this.request0__1, this.cacheKey7__1, this.cacheValue8__1);
            }

            this.set_state_rjd8d0_k$(1);
            var tmp_2 = this.request0__1.get_fetcherCoroutineContext_qg8u97_k$();
            suspendResult = withContext(tmp_2, EngineInterceptor$intercept$slambda_0(this._this__u8e3s4__1, this.request0__1, this.mappedData6__1, this.options4__1, this.eventListener3__1, this.cacheKey7__1, this.chain_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var throwable = this.get_exception_x0n6w6_k$();
              if (throwable instanceof CancellationException) {
                throw throwable;
              } else {
                return ErrorResult_0(this.chain_1.get_request_jdwg4m_k$(), throwable);
              }
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $executeCOROUTINE$3(_this__u8e3s4, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
    this.mappedData_1 = mappedData;
    this.options_1 = options;
    this.eventListener_1 = eventListener;
  }
  protoOf($executeCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.options0__1 = {_v: this.options_1};
            this.components1__1 = {_v: this._this__u8e3s4__1.imageLoader_1.get_components_rknech_k$()};
            this.fetchResult2__1 = {_v: null};
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.options0__1._v = this._this__u8e3s4__1.requestService_1.updateOptions_brn2p2_k$(this.options0__1._v);
            if (!(this.request_1.get_fetcherFactory_h2i1g4_k$() == null) || !(this.request_1.get_decoderFactory_p3qqj5_k$() == null)) {
              this.components1__1._v = addFirst(addFirst_0(this.components1__1._v.newBuilder_dnl2aj_k$(), this.request_1.get_fetcherFactory_h2i1g4_k$()), this.request_1.get_decoderFactory_p3qqj5_k$()).build_1k0s4u_k$();
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = fetch(this._this__u8e3s4__1, this.components1__1._v, this.request_1, this.mappedData_1, this.options0__1._v, this.eventListener_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT4__1 = suspendResult;
            this.fetchResult2__1._v = this.ARGUMENT4__1;
            this.tmp0_subject5__1 = this.fetchResult2__1._v;
            var tmp_0 = this.tmp0_subject5__1;
            if (tmp_0 instanceof SourceFetchResult) {
              this.set_state_rjd8d0_k$(3);
              var tmp_1 = this.request_1.get_decoderCoroutineContext_a943wu_k$();
              suspendResult = withContext(tmp_1, EngineInterceptor$execute$slambda_0(this._this__u8e3s4__1, this.fetchResult2__1, this.components1__1, this.request_1, this.mappedData_1, this.options0__1, this.eventListener_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.tmp0_subject5__1;
              if (tmp_2 instanceof ImageFetchResult) {
                var tmp_3 = this;
                tmp_3.WHEN_RESULT6__1 = new ExecuteResult(this.fetchResult2__1._v.get_image_it3i2a_k$(), this.fetchResult2__1._v.get_isSampled_trm7d3_k$(), this.fetchResult2__1._v.get_dataSource_vce0e_k$(), null);
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              } else {
                var tmp_4 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 3:
            this.WHEN_RESULT6__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.tmp$ret$03__1 = this.WHEN_RESULT6__1;
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.tmp7__1 = this.tmp$ret$03__1;
            this.set_exceptionState_fex74n_k$(8);
            var tmp_5 = this.fetchResult2__1._v;
            var tmp1_safe_receiver = tmp_5 instanceof SourceFetchResult ? tmp_5 : null;
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_source_jl0x7o_k$();
            if (tmp2_safe_receiver == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver);
            }

            this.executeResult8__1 = this.tmp7__1;
            this.set_state_rjd8d0_k$(6);
            suspendResult = transform(this.executeResult8__1, this.request_1, this.options0__1._v, this.eventListener_1, this._this__u8e3s4__1.logger_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var finalResult = suspendResult;
            prepareToDraw(finalResult.image_1);
            return finalResult;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            var tmp_6 = this.fetchResult2__1._v;
            var tmp1_safe_receiver_0 = tmp_6 instanceof SourceFetchResult ? tmp_6 : null;
            var tmp2_safe_receiver_0 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.get_source_jl0x7o_k$();
            if (tmp2_safe_receiver_0 == null)
              null;
            else {
              closeQuietly(tmp2_safe_receiver_0);
            }

            throw t;
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $fetchCOROUTINE$4(_this__u8e3s4, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.components_1 = components;
    this.request_1 = request;
    this.mappedData_1 = mappedData;
    this.options_1 = options;
    this.eventListener_1 = eventListener;
  }
  protoOf($fetchCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.searchIndex1__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            this.pair2__1 = this.components_1.newFetcher_78dey7_k$(this.mappedData_1, this.options_1, this._this__u8e3s4__1.imageLoader_1, this.searchIndex1__1);
            l$ret$1: do {
              if (this.pair2__1 == null) {
                var message = 'Unable to create a fetcher that supports: ' + toString(this.mappedData_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.fetcher3__1 = this.pair2__1.get_first_irdx8n_k$();
            this.searchIndex1__1 = this.pair2__1.get_second_jf7fjx_k$() + 1 | 0;
            this.eventListener_1.fetchStart_7bf573_k$(this.request_1, this.fetcher3__1, this.options_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.fetcher3__1.fetch_fwgef_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.eventListener_1.fetchEnd_zbqlxi_k$(this.request_1, this.fetcher3__1, this.options_1, result);
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var throwable = this.get_exception_x0n6w6_k$();
              var tmp0_safe_receiver = result instanceof SourceFetchResult ? result : null;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_source_jl0x7o_k$();
              if (tmp1_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp1_safe_receiver);
              }
              throw throwable;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(6);
            if (!(result == null)) {
              this.fetchResult0__1 = result;
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 5:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            return this.fetchResult0__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $decodeCOROUTINE$5(_this__u8e3s4, fetchResult, components, request, mappedData, options, eventListener, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fetchResult_1 = fetchResult;
    this.components_1 = components;
    this.request_1 = request;
    this.mappedData_1 = mappedData;
    this.options_1 = options;
    this.eventListener_1 = eventListener;
  }
  protoOf($decodeCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.searchIndex1__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.pair2__1 = this.components_1.newDecoder_ak0d4k_k$(this.fetchResult_1, this.options_1, this._this__u8e3s4__1.imageLoader_1, this.searchIndex1__1);
            l$ret$1: do {
              if (this.pair2__1 == null) {
                var message = 'Unable to create a decoder that supports: ' + toString(this.mappedData_1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else {
                break l$ret$1;
              }
            }
             while (false);
            this.decoder3__1 = this.pair2__1.get_first_irdx8n_k$();
            this.searchIndex1__1 = this.pair2__1.get_second_jf7fjx_k$() + 1 | 0;
            this.eventListener_1.decodeStart_si0v68_k$(this.request_1, this.decoder3__1, this.options_1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.decoder3__1.decode_s6ntzj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            this.eventListener_1.decodeEnd_17f199_k$(this.request_1, this.decoder3__1, this.options_1, result);
            if (!(result == null)) {
              this.decodeResult0__1 = result;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            var tmp_0 = this.decodeResult0__1.get_image_it3i2a_k$();
            var tmp_1 = this.decodeResult0__1.get_isSampled_trm7d3_k$();
            var tmp_2 = this.fetchResult_1.get_dataSource_vce0e_k$();
            var tmp_3 = this.fetchResult_1.get_source_jl0x7o_k$();
            var tmp0_safe_receiver = tmp_3 instanceof FileImageSource ? tmp_3 : null;
            return new ExecuteResult(tmp_0, tmp_1, tmp_2, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_diskCacheKey_av1s10_k$());
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function EngineInterceptor(imageLoader, systemCallbacks, requestService, logger) {
    Companion_getInstance_10();
    this.imageLoader_1 = imageLoader;
    this.systemCallbacks_1 = systemCallbacks;
    this.requestService_1 = requestService;
    this.logger_1 = logger;
    this.memoryCacheService_1 = new MemoryCacheService(this.imageLoader_1, this.requestService_1, this.logger_1);
  }
  protoOf(EngineInterceptor).intercept_d7igby_k$ = function (chain, $completion) {
    var tmp = new $interceptCOROUTINE$2(this, chain, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function Chain() {
  }
  function Interceptor() {
  }
  function checkRequest($this, request, interceptor) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.get_context_h02k06_k$() === $this.initialRequest_1.get_context_h02k06_k$())) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message = "Interceptor '" + toString(interceptor) + "' cannot modify the request's context.";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(request.get_data_wokkxf_k$() === NullRequestData_getInstance())) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_0 = "Interceptor '" + toString(interceptor) + "' cannot set the request's data to null.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.get_target_juba8q_k$() === $this.initialRequest_1.get_target_juba8q_k$())) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_1 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's target.";
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(request.get_sizeResolver_v7l9bk_k$() === $this.initialRequest_1.get_sizeResolver_v7l9bk_k$())) {
      // Inline function 'coil3.intercept.RealInterceptorChain.checkRequest.<anonymous>' call
      var message_2 = "Interceptor '" + toString(interceptor) + "' cannot modify the request's size resolver. " + 'Use `Interceptor.Chain.withSize` instead.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
  }
  function copy($this, index, request, size) {
    return new RealInterceptorChain($this.initialRequest_1, $this.interceptors_1, index, request, size, $this.eventListener_1, $this.isPlaceholderCached_1);
  }
  function copy$default($this, index, request, size, $super) {
    index = index === VOID ? $this.index_1 : index;
    request = request === VOID ? $this.request_1 : request;
    size = size === VOID ? $this.size_1 : size;
    return copy($this, index, request, size);
  }
  function $proceedCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($proceedCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.interceptor0__1 = this._this__u8e3s4__1.interceptors_1.get_c1px32_k$(this._this__u8e3s4__1.index_1);
            this.next1__1 = copy$default(this._this__u8e3s4__1, this._this__u8e3s4__1.index_1 + 1 | 0);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.interceptor0__1.intercept_d7igby_k$(this.next1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            checkRequest(this._this__u8e3s4__1, result.get_request_jdwg4m_k$(), this.interceptor0__1);
            return result;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function RealInterceptorChain(initialRequest, interceptors, index, request, size, eventListener, isPlaceholderCached) {
    this.initialRequest_1 = initialRequest;
    this.interceptors_1 = interceptors;
    this.index_1 = index;
    this.request_1 = request;
    this.size_1 = size;
    this.eventListener_1 = eventListener;
    this.isPlaceholderCached_1 = isPlaceholderCached;
  }
  protoOf(RealInterceptorChain).get_initialRequest_4bioc4_k$ = function () {
    return this.initialRequest_1;
  };
  protoOf(RealInterceptorChain).get_interceptors_e78bex_k$ = function () {
    return this.interceptors_1;
  };
  protoOf(RealInterceptorChain).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(RealInterceptorChain).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(RealInterceptorChain).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(RealInterceptorChain).get_eventListener_aiqsaj_k$ = function () {
    return this.eventListener_1;
  };
  protoOf(RealInterceptorChain).get_isPlaceholderCached_fjjhfi_k$ = function () {
    return this.isPlaceholderCached_1;
  };
  protoOf(RealInterceptorChain).withRequest_urrzxu_k$ = function (request) {
    if (this.index_1 > 0) {
      checkRequest(this, request, this.interceptors_1.get_c1px32_k$(this.index_1 - 1 | 0));
    }
    return copy$default(this, VOID, request);
  };
  protoOf(RealInterceptorChain).withSize_l1xbcn_k$ = function (size) {
    return copy$default(this, VOID, VOID, size);
  };
  protoOf(RealInterceptorChain).proceed_db2cv0_k$ = function ($completion) {
    var tmp = new $proceedCOROUTINE$6(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function FileUriKeyer() {
  }
  protoOf(FileUriKeyer).key_4a2kkz_k$ = function (data, options) {
    if (isFileUri(data) && get_addLastModifiedToFileCacheKey(options)) {
      var path = get_filePath(data);
      if (!(path == null)) {
        var timestamp = options.get_fileSystem_9p6nv8_k$().metadata_r9b8qq_k$(Companion_getInstance().toPath$default_vs59ry_k$(path)).get_lastModifiedAtMillis_1tj6pr_k$();
        return data.toString() + '-' + toString_0(timestamp);
      }
    }
    return null;
  };
  protoOf(FileUriKeyer).key_whhcm8_k$ = function (data, options) {
    return this.key_4a2kkz_k$(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Keyer() {
  }
  function UriKeyer() {
  }
  protoOf(UriKeyer).key_4a2kkz_k$ = function (data, options) {
    return data.toString();
  };
  protoOf(UriKeyer).key_whhcm8_k$ = function (data, options) {
    return this.key_4a2kkz_k$(data instanceof Uri ? data : THROW_CCE(), options);
  };
  function Mapper() {
  }
  function PathMapper() {
  }
  protoOf(PathMapper).map_ykig3e_k$ = function (data, options) {
    return Uri_0('file', VOID, data.toString());
  };
  protoOf(PathMapper).map_z38an7_k$ = function (data, options) {
    return this.map_ykig3e_k$(data instanceof Path ? data : THROW_CCE(), options);
  };
  function StringMapper() {
  }
  protoOf(StringMapper).map_eg43m7_k$ = function (data, options) {
    return toUri(data);
  };
  protoOf(StringMapper).map_z38an7_k$ = function (data, options) {
    return this.map_eg43m7_k$(typeof data === 'string' ? data : THROW_CCE(), options);
  };
  function _set_maxSizeBytesFactory__pfti9r($this, _set____db54di) {
    $this.maxSizeBytesFactory_1 = _set____db54di;
  }
  function _get_maxSizeBytesFactory__c539df($this) {
    return $this.maxSizeBytesFactory_1;
  }
  function _set_strongReferencesEnabled__5s1k3n($this, _set____db54di) {
    $this.strongReferencesEnabled_1 = _set____db54di;
  }
  function _get_strongReferencesEnabled__ep3u5t($this) {
    return $this.strongReferencesEnabled_1;
  }
  function _set_weakReferencesEnabled__435hng($this, _set____db54di) {
    $this.weakReferencesEnabled_1 = _set____db54di;
  }
  function _get_weakReferencesEnabled__a8ru34($this) {
    return $this.weakReferencesEnabled_1;
  }
  function MemoryCache$Builder$maxSizeBytes$lambda($size) {
    return function () {
      return $size;
    };
  }
  function MemoryCache$Builder$maxSizePercent$lambda($percent, $context) {
    return function () {
      return numberToLong($percent * totalAvailableMemoryBytes($context).toDouble_ygsx0s_k$());
    };
  }
  function Key_0(key, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.key_1 = key;
    this.extras_1 = toImmutableMap(extras);
  }
  protoOf(Key_0).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Key_0).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Key_0).copy_7d5tgn_k$ = function (key, extras) {
    return new Key_0(key, extras);
  };
  protoOf(Key_0).copy$default_m8w3mg_k$ = function (key, extras, $super) {
    key = key === VOID ? this.key_1 : key;
    extras = extras === VOID ? this.extras_1 : extras;
    return $super === VOID ? this.copy_7d5tgn_k$(key, extras) : $super.copy_7d5tgn_k$.call(this, key, extras);
  };
  protoOf(Key_0).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Key_0) {
      tmp_0 = this.key_1 === other.key_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.extras_1, other.extras_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Key_0).hashCode = function () {
    var result = getStringHashCode(this.key_1);
    result = imul(31, result) + hashCode(this.extras_1) | 0;
    return result;
  };
  protoOf(Key_0).toString = function () {
    return 'Key(key=' + this.key_1 + ', extras=' + toString(this.extras_1) + ')';
  };
  function Value(image, extras) {
    extras = extras === VOID ? emptyMap() : extras;
    this.image_1 = image;
    this.extras_1 = toImmutableMap(extras);
  }
  protoOf(Value).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Value).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Value).copy_i1vhxk_k$ = function (image, extras) {
    return new Value(image, extras);
  };
  protoOf(Value).copy$default_bck5hb_k$ = function (image, extras, $super) {
    image = image === VOID ? this.image_1 : image;
    extras = extras === VOID ? this.extras_1 : extras;
    return $super === VOID ? this.copy_i1vhxk_k$(image, extras) : $super.copy_i1vhxk_k$.call(this, image, extras);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof Value) {
      tmp_0 = equals(this.image_1, other.image_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.extras_1, other.extras_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Value).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(31, result) + hashCode(this.extras_1) | 0;
    return result;
  };
  protoOf(Value).toString = function () {
    return 'Value(image=' + toString(this.image_1) + ', extras=' + toString(this.extras_1) + ')';
  };
  function Builder_3() {
    this.maxSizeBytesFactory_1 = null;
    this.strongReferencesEnabled_1 = true;
    this.weakReferencesEnabled_1 = true;
  }
  protoOf(Builder_3).maxSizeBytes_ec1adk_k$ = function (size) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.memory.Builder.maxSizeBytes.<anonymous>' call
    var tmp = this;
    tmp.maxSizeBytesFactory_1 = MemoryCache$Builder$maxSizeBytes$lambda(size);
    return this;
  };
  protoOf(Builder_3).maxSizeBytes_m571s6_k$ = function (size) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.memory.Builder.maxSizeBytes.<anonymous>' call
    this.maxSizeBytesFactory_1 = size;
    return this;
  };
  protoOf(Builder_3).maxSizePercent_i9u9rp_k$ = function (context, percent) {
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
    tmp.maxSizeBytesFactory_1 = MemoryCache$Builder$maxSizePercent$lambda(percent, context);
    return this;
  };
  protoOf(Builder_3).maxSizePercent$default_b972wv_k$ = function (context, percent, $super) {
    percent = percent === VOID ? defaultMemoryCacheSizePercent(context) : percent;
    return $super === VOID ? this.maxSizePercent_i9u9rp_k$(context, percent) : $super.maxSizePercent_i9u9rp_k$.call(this, context, percent);
  };
  protoOf(Builder_3).strongReferencesEnabled_8vjm03_k$ = function (enable) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.memory.Builder.strongReferencesEnabled.<anonymous>' call
    this.strongReferencesEnabled_1 = enable;
    return this;
  };
  protoOf(Builder_3).weakReferencesEnabled_buvprw_k$ = function (enable) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.memory.Builder.weakReferencesEnabled.<anonymous>' call
    this.weakReferencesEnabled_1 = enable;
    return this;
  };
  protoOf(Builder_3).build_1k0s4u_k$ = function () {
    var tmp;
    if (this.weakReferencesEnabled_1) {
      tmp = new RealWeakMemoryCache();
    } else {
      tmp = new EmptyWeakMemoryCache();
    }
    var weakMemoryCache = tmp;
    var tmp_0;
    if (this.strongReferencesEnabled_1) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        var value = this.maxSizeBytesFactory_1;
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
      if (maxSizeBytes.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
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
  function MemoryCache() {
  }
  function _get_TAG__e5w0nr($this) {
    return $this.TAG_1;
  }
  function _get_imageLoader__s7mz25_0($this) {
    return $this.imageLoader_1;
  }
  function _get_requestService__k7fg4b_1($this) {
    return $this.requestService_1;
  }
  function _get_logger__rkp4sl_1($this) {
    return $this.logger_1;
  }
  function isCacheValueValidForSize($this, request, cacheKey, cacheValue, size, scale) {
    var cacheKeySize = cacheKey.get_extras_d3bq0c_k$().get_wei43m_k$('coil#size');
    if (!(cacheKeySize == null)) {
      if (cacheKeySize === size.toString()) {
        return true;
      } else {
        var tmp0_safe_receiver = $this.logger_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'coil3.util.log' call
          var tag = 'MemoryCacheService';
          var level = Level_Debug_getInstance();
          if (tmp0_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level) <= 0) {
            // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
            var tmp$ret$0 = toString(request.get_data_wokkxf_k$()) + ": Memory cached image's size " + ('(' + cacheKeySize + ') does not exactly match the target size ') + ('(' + size.toString() + ').');
            tmp0_safe_receiver.log_m12gkb_k$(tag, level, tmp$ret$0, null);
          }
        }
        return false;
      }
    }
    if (!_get_isSampled__22pfz3(cacheValue, $this) && (get_isOriginal(size) || request.get_precision_e8tfsb_k$().equals(Precision_INEXACT_getInstance()))) {
      return true;
    }
    var srcWidth = cacheValue.get_image_it3i2a_k$().get_width_j0q4yl_k$();
    var srcHeight = cacheValue.get_image_it3i2a_k$().get_height_e7t92o_k$();
    var tmp;
    var tmp_0 = cacheValue.get_image_it3i2a_k$();
    if (tmp_0 instanceof BitmapImage) {
      tmp = get_maxBitmapSize(request);
    } else {
      tmp = Companion_getInstance_14().get_ORIGINAL_3y2d22_k$();
    }
    var maxSize = tmp;
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_0 = size.get_width_j0q4yl_k$();
    var tmp_1;
    if (this_0 instanceof Pixels) {
      tmp_1 = _Pixels___get_px__impl__uix9dv(this_0.px_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_1 = 2147483647;
    }
    var a = tmp_1;
    // Inline function 'coil3.size.pxOrElse' call
    var this_1 = maxSize.get_width_j0q4yl_k$();
    var tmp_2;
    if (this_1 instanceof Pixels) {
      tmp_2 = _Pixels___get_px__impl__uix9dv(this_1.px_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_2 = 2147483647;
    }
    var b = tmp_2;
    var dstWidth = Math.min(a, b);
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'coil3.size.pxOrElse' call
    var this_2 = size.get_height_e7t92o_k$();
    var tmp_3;
    if (this_2 instanceof Pixels) {
      tmp_3 = _Pixels___get_px__impl__uix9dv(this_2.px_1);
    } else {
      // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
      tmp_3 = 2147483647;
    }
    var a_0 = tmp_3;
    // Inline function 'coil3.size.pxOrElse' call
    var this_3 = maxSize.get_height_e7t92o_k$();
    var tmp_4;
    if (this_3 instanceof Pixels) {
      tmp_4 = _Pixels___get_px__impl__uix9dv(this_3.px_1);
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
    switch (tmp_5.get_ordinal_ip24qg_k$()) {
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
    switch (request.get_precision_e8tfsb_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        if (multiplier === 1.0) {
          return true;
        } else {
          var tmp3_safe_receiver = $this.logger_1;
          if (tmp3_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_0 = 'MemoryCacheService';
            var level_0 = Level_Debug_getInstance();
            if (tmp3_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level_0) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$11 = toString(request.get_data_wokkxf_k$()) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') does not exactly match the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp3_safe_receiver.log_m12gkb_k$(tag_0, level_0, tmp$ret$11, null);
            }
          }
          return false;
        }

      case 1:
        if (multiplier <= 1.0) {
          return true;
        } else {
          var tmp4_safe_receiver = $this.logger_1;
          if (tmp4_safe_receiver == null)
            null;
          else {
            // Inline function 'coil3.util.log' call
            var tag_1 = 'MemoryCacheService';
            var level_1 = Level_Debug_getInstance();
            if (tmp4_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level_1) <= 0) {
              // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValidForSize.<anonymous>' call
              var tmp$ret$12 = toString(request.get_data_wokkxf_k$()) + ": Memory cached image's size " + ('(' + srcWidth + ', ' + srcHeight + ') is smaller than the target size ') + ('(' + dstWidth + ', ' + dstHeight + ').');
              tmp4_safe_receiver.log_m12gkb_k$(tag_1, level_1, tmp$ret$12, null);
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
    var tmp = _this__u8e3s4.get_extras_d3bq0c_k$().get_wei43m_k$('coil#is_sampled');
    var tmp0_elvis_lhs = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  }
  function _get_diskCacheKey__t0sb73(_this__u8e3s4, $this) {
    var tmp = _this__u8e3s4.get_extras_d3bq0c_k$().get_wei43m_k$('coil#disk_cache_key');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.TAG_1 = 'MemoryCacheService';
    this.EXTRA_SIZE_1 = 'coil#size';
    this.EXTRA_IS_SAMPLED_1 = 'coil#is_sampled';
    this.EXTRA_DISK_CACHE_KEY_1 = 'coil#disk_cache_key';
  }
  protoOf(Companion_4).get_EXTRA_SIZE_vmskd6_k$ = function () {
    return this.EXTRA_SIZE_1;
  };
  protoOf(Companion_4).get_EXTRA_IS_SAMPLED_rr4qw2_k$ = function () {
    return this.EXTRA_IS_SAMPLED_1;
  };
  protoOf(Companion_4).get_EXTRA_DISK_CACHE_KEY_99zd47_k$ = function () {
    return this.EXTRA_DISK_CACHE_KEY_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_11() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function MemoryCacheService(imageLoader, requestService, logger) {
    Companion_getInstance_11();
    this.imageLoader_1 = imageLoader;
    this.requestService_1 = requestService;
    this.logger_1 = logger;
  }
  protoOf(MemoryCacheService).newCacheKey_c12jyi_k$ = function (request, mappedData, options, eventListener) {
    if (!(request.get_memoryCacheKey_p17wyv_k$() == null)) {
      return new Key_0(request.get_memoryCacheKey_p17wyv_k$(), request.get_memoryCacheKeyExtras_7l3w9i_k$());
    }
    eventListener.keyStart_wgry0q_k$(request, mappedData);
    var key = this.imageLoader_1.get_components_rknech_k$().key_98ny9c_k$(mappedData, options);
    eventListener.keyEnd_1jnney_k$(request, key);
    if (key == null) {
      return null;
    }
    var extras = toMutableMap(request.get_memoryCacheKeyExtras_7l3w9i_k$());
    if (needsSizeInCacheKey(request)) {
      // Inline function 'kotlin.collections.set' call
      var key_0 = 'coil#size';
      var value = options.get_size_woubt6_k$().toString();
      extras.put_4fpzoq_k$(key_0, value);
    }
    return new Key_0(key, extras);
  };
  protoOf(MemoryCacheService).getCacheValue_tolmk3_k$ = function (request, cacheKey, size, scale) {
    if (!request.get_memoryCachePolicy_xij562_k$().get_readEnabled_oyc6n2_k$())
      return null;
    var tmp0_safe_receiver = this.imageLoader_1.get_memoryCache_y3xch4_k$();
    var cacheValue = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_4ro1bf_k$(cacheKey);
    var tmp;
    if (cacheValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'coil3.memory.MemoryCacheService.getCacheValue.<anonymous>' call
      if (this.isCacheValueValid_ko48r3_k$(request, cacheKey, cacheValue, size, scale)) {
        tmp_0 = cacheValue;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MemoryCacheService).isCacheValueValid_ko48r3_k$ = function (request, cacheKey, cacheValue, size, scale) {
    if (!this.requestService_1.isCacheValueValidForHardware_ucpcye_k$(request, cacheValue)) {
      var tmp0_safe_receiver = this.logger_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'coil3.util.log' call
        var tag = 'MemoryCacheService';
        var level = Level_Debug_getInstance();
        if (tmp0_safe_receiver.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level) <= 0) {
          // Inline function 'coil3.memory.MemoryCacheService.isCacheValueValid.<anonymous>' call
          var tmp$ret$0 = toString(request.get_data_wokkxf_k$()) + ': Cached bitmap is hardware-backed, ' + 'which is incompatible with the request.';
          tmp0_safe_receiver.log_m12gkb_k$(tag, level, tmp$ret$0, null);
        }
      }
      return false;
    }
    return isCacheValueValidForSize(this, request, cacheKey, cacheValue, size, scale);
  };
  protoOf(MemoryCacheService).setCacheValue_bgdv7_k$ = function (cacheKey, request, result) {
    if (cacheKey == null || !request.get_memoryCachePolicy_xij562_k$().get_writeEnabled_mrjiqz_k$() || !result.get_image_it3i2a_k$().get_shareable_hn5jao_k$()) {
      return false;
    }
    var tmp0_elvis_lhs = this.imageLoader_1.get_memoryCache_y3xch4_k$();
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
    var value = result.get_isSampled_trm7d3_k$();
    extras.put_4fpzoq_k$(key, value);
    var tmp1_safe_receiver = result.get_diskCacheKey_gvj33x_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var key_0 = 'coil#disk_cache_key';
      extras.put_4fpzoq_k$(key_0, tmp1_safe_receiver);
    }
    memoryCache.set_1ue2ui_k$(cacheKey, new Value(result.get_image_it3i2a_k$(), extras));
    return true;
  };
  protoOf(MemoryCacheService).newResult_ojmwaq_k$ = function (chain, request, cacheKey, cacheValue) {
    return new SuccessResult(cacheValue.get_image_it3i2a_k$(), request, DataSource_MEMORY_CACHE_getInstance(), cacheKey, _get_diskCacheKey__t0sb73(cacheValue, this), _get_isSampled__22pfz3(cacheValue, this), get_isPlaceholderCached(chain));
  };
  function _get_strongMemoryCache__2pnl21($this) {
    return $this.strongMemoryCache_1;
  }
  function _get_weakMemoryCache__eo3r9k($this) {
    return $this.weakMemoryCache_1;
  }
  function _get_lock__d9xa4g_2($this) {
    return $this.lock_1;
  }
  function RealMemoryCache(strongMemoryCache, weakMemoryCache) {
    this.strongMemoryCache_1 = strongMemoryCache;
    this.weakMemoryCache_1 = weakMemoryCache;
    this.lock_1 = new Object();
  }
  protoOf(RealMemoryCache).get_size_woubt6_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'coil3.memory.RealMemoryCache.<get-size>.<anonymous>' call
    return this.strongMemoryCache_1.get_size_woubt6_k$();
  };
  protoOf(RealMemoryCache).get_maxSize_f83j4s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'coil3.memory.RealMemoryCache.<get-maxSize>.<anonymous>' call
    return this.strongMemoryCache_1.get_maxSize_f83j4s_k$();
  };
  protoOf(RealMemoryCache).get_keys_wop4xp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'coil3.memory.RealMemoryCache.<get-keys>.<anonymous>' call
    return plus(this.strongMemoryCache_1.get_keys_wop4xp_k$(), this.weakMemoryCache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealMemoryCache).get_4ro1bf_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var tmp0_elvis_lhs = this.strongMemoryCache_1.get_4ro1bf_k$(key);
    var value = tmp0_elvis_lhs == null ? this.weakMemoryCache_1.get_4ro1bf_k$(key) : tmp0_elvis_lhs;
    if (!(value == null) && !value.get_image_it3i2a_k$().get_shareable_hn5jao_k$()) {
      this.remove_58onvd_k$(key);
    }
    return value;
  };
  protoOf(RealMemoryCache).set_1ue2ui_k$ = function (key, value) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var size = value.get_image_it3i2a_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
      // Inline function 'coil3.memory.RealMemoryCache.set.<anonymous>.<anonymous>' call
      var message = 'Image size must be non-negative: ' + size.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.strongMemoryCache_1.set_7wlc7s_k$(key, value.get_image_it3i2a_k$(), value.get_extras_d3bq0c_k$(), size);
    return Unit_getInstance();
  };
  protoOf(RealMemoryCache).remove_58onvd_k$ = function (key) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var removedStrong = this.strongMemoryCache_1.remove_58onvd_k$(key);
    var removedWeak = this.weakMemoryCache_1.remove_58onvd_k$(key);
    return removedStrong || removedWeak;
  };
  protoOf(RealMemoryCache).trimToSize_keb9c0_k$ = function (size) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.strongMemoryCache_1.trimToSize_keb9c0_k$(size);
    return Unit_getInstance();
  };
  protoOf(RealMemoryCache).clear_j9egeb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    this.strongMemoryCache_1.clear_j9egeb_k$();
    this.weakMemoryCache_1.clear_j9egeb_k$();
    return Unit_getInstance();
  };
  function StrongMemoryCache() {
  }
  function _get_weakMemoryCache__eo3r9k_0($this) {
    return $this.weakMemoryCache_1;
  }
  function _get_cache__j44d4h_0($this) {
    return $this.cache_1;
  }
  function InternalValue(image, extras, size) {
    this.image_1 = image;
    this.extras_1 = extras;
    this.size_1 = size;
  }
  protoOf(InternalValue).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(InternalValue).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(InternalValue).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function RealStrongMemoryCache$cache$1($maxSize, this$0) {
    this.this$0__1 = this$0;
    LruCache.call(this, $maxSize);
  }
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_m3bbry_k$ = function (key, value) {
    return value.size_1;
  };
  protoOf(RealStrongMemoryCache$cache$1).sizeOf_pwp2ab_k$ = function (key, value) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    return this.sizeOf_m3bbry_k$(tmp, value instanceof InternalValue ? value : THROW_CCE());
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_o6hl56_k$ = function (key, oldValue, newValue) {
    return this.this$0__1.weakMemoryCache_1.set_7wlc7s_k$(key, oldValue.image_1, oldValue.extras_1, oldValue.size_1);
  };
  protoOf(RealStrongMemoryCache$cache$1).entryRemoved_p3g81a_k$ = function (key, oldValue, newValue) {
    var tmp = key instanceof Key_0 ? key : THROW_CCE();
    var tmp_0 = oldValue instanceof InternalValue ? oldValue : THROW_CCE();
    return this.entryRemoved_o6hl56_k$(tmp, tmp_0, (newValue == null ? true : newValue instanceof InternalValue) ? newValue : THROW_CCE());
  };
  function RealStrongMemoryCache(maxSize, weakMemoryCache) {
    this.weakMemoryCache_1 = weakMemoryCache;
    var tmp = this;
    tmp.cache_1 = new RealStrongMemoryCache$cache$1(maxSize, this);
  }
  protoOf(RealStrongMemoryCache).get_size_woubt6_k$ = function () {
    return this.cache_1.get_size_woubt6_k$();
  };
  protoOf(RealStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return this.cache_1.get_maxSize_f83j4s_k$();
  };
  protoOf(RealStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return this.cache_1.get_keys_wop4xp_k$();
  };
  protoOf(RealStrongMemoryCache).get_4ro1bf_k$ = function (key) {
    var tmp0_safe_receiver = this.cache_1.get_h31hzz_k$(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.memory.RealStrongMemoryCache.get.<anonymous>' call
      tmp = new Value(tmp0_safe_receiver.image_1, tmp0_safe_receiver.extras_1);
    }
    return tmp;
  };
  protoOf(RealStrongMemoryCache).set_7wlc7s_k$ = function (key, image, extras, size) {
    if (size.compareTo_9jj042_k$(this.get_maxSize_f83j4s_k$()) <= 0) {
      this.cache_1.put_fa630k_k$(key, new InternalValue(image, extras, size));
    } else {
      this.cache_1.remove_1r2rzn_k$(key);
      this.weakMemoryCache_1.set_7wlc7s_k$(key, image, extras, size);
    }
  };
  protoOf(RealStrongMemoryCache).remove_58onvd_k$ = function (key) {
    return !(this.cache_1.remove_1r2rzn_k$(key) == null);
  };
  protoOf(RealStrongMemoryCache).clear_j9egeb_k$ = function () {
    this.cache_1.clear_j9egeb_k$();
  };
  protoOf(RealStrongMemoryCache).trimToSize_keb9c0_k$ = function (size) {
    this.cache_1.trimToSize_keb9c0_k$(size);
  };
  function _get_weakMemoryCache__eo3r9k_1($this) {
    return $this.weakMemoryCache_1;
  }
  function EmptyStrongMemoryCache(weakMemoryCache) {
    this.weakMemoryCache_1 = weakMemoryCache;
  }
  protoOf(EmptyStrongMemoryCache).get_size_woubt6_k$ = function () {
    return new Long(0, 0);
  };
  protoOf(EmptyStrongMemoryCache).get_maxSize_f83j4s_k$ = function () {
    return new Long(0, 0);
  };
  protoOf(EmptyStrongMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyStrongMemoryCache).get_4ro1bf_k$ = function (key) {
    return null;
  };
  protoOf(EmptyStrongMemoryCache).set_7wlc7s_k$ = function (key, image, extras, size) {
    this.weakMemoryCache_1.set_7wlc7s_k$(key, image, extras, size);
  };
  protoOf(EmptyStrongMemoryCache).remove_58onvd_k$ = function (key) {
    return false;
  };
  protoOf(EmptyStrongMemoryCache).trimToSize_keb9c0_k$ = function (size) {
  };
  protoOf(EmptyStrongMemoryCache).clear_j9egeb_k$ = function () {
  };
  function WeakMemoryCache() {
  }
  function _get_CLEAN_UP_INTERVAL__upkbmm($this) {
    return $this.CLEAN_UP_INTERVAL_1;
  }
  function _set_operationsSinceCleanUp__arn42n($this, _set____db54di) {
    $this.operationsSinceCleanUp_1 = _set____db54di;
  }
  function _get_operationsSinceCleanUp__bhgcd1($this) {
    return $this.operationsSinceCleanUp_1;
  }
  function cleanUpIfNecessary($this) {
    var _unary__edvuaz = $this.operationsSinceCleanUp_1;
    $this.operationsSinceCleanUp_1 = _unary__edvuaz + 1 | 0;
    if (_unary__edvuaz >= 10) {
      $this.cleanUp_hozsdn_k$();
    }
  }
  function InternalValue_0(image, extras, size) {
    this.image_1 = image;
    this.extras_1 = extras;
    this.size_1 = size;
  }
  protoOf(InternalValue_0).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(InternalValue_0).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(InternalValue_0).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.CLEAN_UP_INTERVAL_1 = 10;
  }
  var Companion_instance_5;
  function Companion_getInstance_12() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function RealWeakMemoryCache() {
    Companion_getInstance_12();
    this.cache_1 = LinkedHashMap_init_$Create$();
    this.operationsSinceCleanUp_1 = 0;
  }
  protoOf(RealWeakMemoryCache).get_cache_ixgj5y_k$ = function () {
    return this.cache_1;
  };
  protoOf(RealWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    return toSet(this.cache_1.get_keys_wop4xp_k$());
  };
  protoOf(RealWeakMemoryCache).get_4ro1bf_k$ = function (key) {
    var tmp0_elvis_lhs = this.cache_1.get_wei43m_k$(key);
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
      var last = values.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>' call
          var value = values.get_c1px32_k$(i);
          var tmp0_safe_receiver = value.image_1.get_26vq_k$();
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'coil3.memory.RealWeakMemoryCache.get.<anonymous>.<anonymous>' call
            tmp_0 = new Value(tmp0_safe_receiver, value.extras_1);
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
  protoOf(RealWeakMemoryCache).set_7wlc7s_k$ = function (key, image, extras, size) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.cache_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'coil3.memory.RealWeakMemoryCache.set.<anonymous>' call
      // Inline function 'kotlin.collections.arrayListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var values = tmp;
    var newValue = new InternalValue_0(new WeakReference(image), extras, size);
    if (values.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.plusAssign' call
      values.add_utx5q5_k$(newValue);
    } else {
      var inductionVariable = 0;
      var last = values.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        $l$loop: do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value_0 = values.get_c1px32_k$(index);
          if (size.compareTo_9jj042_k$(value_0.size_1) >= 0) {
            if (value_0.image_1.get_26vq_k$() === image) {
              values.set_82063s_k$(index, newValue);
            } else {
              values.add_dl6gt3_k$(index, newValue);
            }
            break $l$loop;
          }
        }
         while (inductionVariable <= last);
    }
    cleanUpIfNecessary(this);
  };
  protoOf(RealWeakMemoryCache).remove_58onvd_k$ = function (key) {
    return !(this.cache_1.remove_gppy8k_k$(key) == null);
  };
  protoOf(RealWeakMemoryCache).clear_j9egeb_k$ = function () {
    this.operationsSinceCleanUp_1 = 0;
    this.cache_1.clear_j9egeb_k$();
  };
  protoOf(RealWeakMemoryCache).cleanUp_hozsdn_k$ = function () {
    this.operationsSinceCleanUp_1 = 0;
    var iterator = this.cache_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var list = iterator.next_20eer_k$();
      if (list.get_size_woubt6_k$() <= 1) {
        var tmp0_safe_receiver = firstOrNull(list);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.image_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_26vq_k$()) == null) {
          iterator.remove_ldkf9o_k$();
        }
      } else {
        // Inline function 'coil3.util.removeIfIndices' call
        var numDeleted = 0;
        var inductionVariable = 0;
        var last = list.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var rawIndex = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var index = rawIndex - numDeleted | 0;
            // Inline function 'coil3.memory.RealWeakMemoryCache.cleanUp.<anonymous>' call
            if (list.get_c1px32_k$(index).image_1.get_26vq_k$() == null) {
              list.removeAt_6niowx_k$(index);
              numDeleted = numDeleted + 1 | 0;
            }
          }
           while (inductionVariable <= last);
        if (list.isEmpty_y1axqb_k$()) {
          iterator.remove_ldkf9o_k$();
        }
      }
    }
  };
  function EmptyWeakMemoryCache() {
  }
  protoOf(EmptyWeakMemoryCache).get_keys_wop4xp_k$ = function () {
    return emptySet();
  };
  protoOf(EmptyWeakMemoryCache).get_4ro1bf_k$ = function (key) {
    return null;
  };
  protoOf(EmptyWeakMemoryCache).set_7wlc7s_k$ = function (key, image, extras, size) {
  };
  protoOf(EmptyWeakMemoryCache).remove_58onvd_k$ = function (key) {
    return false;
  };
  protoOf(EmptyWeakMemoryCache).clear_j9egeb_k$ = function () {
  };
  var CachePolicy_ENABLED_instance;
  var CachePolicy_READ_ONLY_instance;
  var CachePolicy_WRITE_ONLY_instance;
  var CachePolicy_DISABLED_instance;
  function values_0() {
    return [CachePolicy_ENABLED_getInstance(), CachePolicy_READ_ONLY_getInstance(), CachePolicy_WRITE_ONLY_getInstance(), CachePolicy_DISABLED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'ENABLED':
        return CachePolicy_ENABLED_getInstance();
      case 'READ_ONLY':
        return CachePolicy_READ_ONLY_getInstance();
      case 'WRITE_ONLY':
        return CachePolicy_WRITE_ONLY_getInstance();
      case 'DISABLED':
        return CachePolicy_DISABLED_getInstance();
      default:
        CachePolicy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var CachePolicy_entriesInitialized;
  function CachePolicy_initEntries() {
    if (CachePolicy_entriesInitialized)
      return Unit_getInstance();
    CachePolicy_entriesInitialized = true;
    CachePolicy_ENABLED_instance = new CachePolicy('ENABLED', 0, true, true);
    CachePolicy_READ_ONLY_instance = new CachePolicy('READ_ONLY', 1, true, false);
    CachePolicy_WRITE_ONLY_instance = new CachePolicy('WRITE_ONLY', 2, false, true);
    CachePolicy_DISABLED_instance = new CachePolicy('DISABLED', 3, false, false);
  }
  var $ENTRIES_0;
  function CachePolicy(name, ordinal, readEnabled, writeEnabled) {
    Enum.call(this, name, ordinal);
    this.readEnabled_1 = readEnabled;
    this.writeEnabled_1 = writeEnabled;
  }
  protoOf(CachePolicy).get_readEnabled_oyc6n2_k$ = function () {
    return this.readEnabled_1;
  };
  protoOf(CachePolicy).get_writeEnabled_mrjiqz_k$ = function () {
    return this.writeEnabled_1;
  };
  function CachePolicy_ENABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_ENABLED_instance;
  }
  function CachePolicy_READ_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_READ_ONLY_instance;
  }
  function CachePolicy_WRITE_ONLY_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_WRITE_ONLY_instance;
  }
  function CachePolicy_DISABLED_getInstance() {
    CachePolicy_initEntries();
    return CachePolicy_DISABLED_instance;
  }
  function Disposable() {
  }
  function OneShotDisposable(job) {
    this.job_1 = job;
  }
  protoOf(OneShotDisposable).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(OneShotDisposable).get_isDisposed_skr1u0_k$ = function () {
    return !this.job_1.get_isActive_quafmh_k$();
  };
  protoOf(OneShotDisposable).dispose_3nnxhr_k$ = function () {
    if (this.get_isDisposed_skr1u0_k$())
      return Unit_getInstance();
    this.job_1.cancel$default_8haxne_k$();
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.DEFAULT_1 = new Defaults();
  }
  protoOf(Companion_6).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_13() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function _set_defaults__cgtcqt_0($this, _set____db54di) {
    $this.defaults_1 = _set____db54di;
  }
  function _get_defaults__c2ypz_0($this) {
    return $this.defaults_1;
  }
  function _set_data__9licbx($this, _set____db54di) {
    $this.data_1 = _set____db54di;
  }
  function _get_data__d5abxd_2($this) {
    return $this.data_1;
  }
  function _set_target__aw1jfq($this, _set____db54di) {
    $this.target_1 = _set____db54di;
  }
  function _get_target__ccs42i($this) {
    return $this.target_1;
  }
  function _set_listener__h5jsf7($this, _set____db54di) {
    $this.listener_1 = _set____db54di;
  }
  function _get_listener__4cngyf($this) {
    return $this.listener_1;
  }
  function _set_memoryCacheKey__ebs0jr($this, _set____db54di) {
    $this.memoryCacheKey_1 = _set____db54di;
  }
  function _get_memoryCacheKey__b7bfhp($this) {
    return $this.memoryCacheKey_1;
  }
  function _set_memoryCacheKeyExtrasAreMutable__m0aq4k($this, _set____db54di) {
    $this.memoryCacheKeyExtrasAreMutable_1 = _set____db54di;
  }
  function _get_memoryCacheKeyExtrasAreMutable__yq6h14($this) {
    return $this.memoryCacheKeyExtrasAreMutable_1;
  }
  function _set_lazyMemoryCacheKeyExtras__cylxz6($this, _set____db54di) {
    $this.lazyMemoryCacheKeyExtras_1 = _set____db54di;
  }
  function _get_lazyMemoryCacheKeyExtras__hgz5me($this) {
    return $this.lazyMemoryCacheKeyExtras_1;
  }
  function _get_memoryCacheKeyExtras__arb8l2($this) {
    var memoryCacheKeyExtras = $this.lazyMemoryCacheKeyExtras_1;
    var tmp;
    if (equals(memoryCacheKeyExtras, $this.memoryCacheKeyExtrasAreMutable_1)) {
      tmp = memoryCacheKeyExtras;
    } else {
      if (isInterface(memoryCacheKeyExtras, KtMap)) {
        // Inline function 'kotlin.also' call
        var this_0 = toMutableMap(memoryCacheKeyExtras);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.request.Builder.<get-memoryCacheKeyExtras>.<anonymous>' call
        $this.lazyMemoryCacheKeyExtras_1 = this_0;
        $this.memoryCacheKeyExtrasAreMutable_1 = true;
        tmp = this_0;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KtMutableMap) ? tmp_0 : THROW_CCE();
  }
  function _set_diskCacheKey__qgl07x($this, _set____db54di) {
    $this.diskCacheKey_1 = _set____db54di;
  }
  function _get_diskCacheKey__t0sb73_0($this) {
    return $this.diskCacheKey_1;
  }
  function _set_fileSystem__dgqbpw_0($this, _set____db54di) {
    $this.fileSystem_1 = _set____db54di;
  }
  function _get_fileSystem__siywv4_1($this) {
    return $this.fileSystem_1;
  }
  function _set_fetcherFactory__u20e38($this, _set____db54di) {
    $this.fetcherFactory_1 = _set____db54di;
  }
  function _get_fetcherFactory__fg07ug($this) {
    return $this.fetcherFactory_1;
  }
  function _set_decoderFactory__5x51lb($this, _set____db54di) {
    $this.decoderFactory_1 = _set____db54di;
  }
  function _get_decoderFactory__jlyeg5($this) {
    return $this.decoderFactory_1;
  }
  function _set_interceptorCoroutineContext__cm2jqv($this, _set____db54di) {
    $this.interceptorCoroutineContext_1 = _set____db54di;
  }
  function _get_interceptorCoroutineContext__v5j6z9($this) {
    return $this.interceptorCoroutineContext_1;
  }
  function _set_fetcherCoroutineContext__rsx661($this, _set____db54di) {
    $this.fetcherCoroutineContext_1 = _set____db54di;
  }
  function _get_fetcherCoroutineContext__mr1hjn($this) {
    return $this.fetcherCoroutineContext_1;
  }
  function _set_decoderCoroutineContext__mvmvcm($this, _set____db54di) {
    $this.decoderCoroutineContext_1 = _set____db54di;
  }
  function _get_decoderCoroutineContext__robsd2($this) {
    return $this.decoderCoroutineContext_1;
  }
  function _set_memoryCachePolicy__aufk42($this, _set____db54di) {
    $this.memoryCachePolicy_1 = _set____db54di;
  }
  function _get_memoryCachePolicy__avdc6a($this) {
    return $this.memoryCachePolicy_1;
  }
  function _set_diskCachePolicy__4rw4k2($this, _set____db54di) {
    $this.diskCachePolicy_1 = _set____db54di;
  }
  function _get_diskCachePolicy__5bu2yi($this) {
    return $this.diskCachePolicy_1;
  }
  function _set_networkCachePolicy__9f0c8f($this, _set____db54di) {
    $this.networkCachePolicy_1 = _set____db54di;
  }
  function _get_networkCachePolicy__ro8emd($this) {
    return $this.networkCachePolicy_1;
  }
  function _set_placeholderMemoryCacheKey__2iehh0($this, _set____db54di) {
    $this.placeholderMemoryCacheKey_1 = _set____db54di;
  }
  function _get_placeholderMemoryCacheKey__9jyio($this) {
    return $this.placeholderMemoryCacheKey_1;
  }
  function _set_placeholderFactory__bt625c($this, _set____db54di) {
    $this.placeholderFactory_1 = _set____db54di;
  }
  function _get_placeholderFactory__m4p8z0($this) {
    return $this.placeholderFactory_1;
  }
  function _set_errorFactory__q5f2ob($this, _set____db54di) {
    $this.errorFactory_1 = _set____db54di;
  }
  function _get_errorFactory__aloc47($this) {
    return $this.errorFactory_1;
  }
  function _set_fallbackFactory__bvty9p($this, _set____db54di) {
    $this.fallbackFactory_1 = _set____db54di;
  }
  function _get_fallbackFactory__lzk5s9($this) {
    return $this.fallbackFactory_1;
  }
  function _set_sizeResolver__phyk28($this, _set____db54di) {
    $this.sizeResolver_1 = _set____db54di;
  }
  function _get_sizeResolver__tzercs($this) {
    return $this.sizeResolver_1;
  }
  function _set_scale__kisfuj($this, _set____db54di) {
    $this.scale_1 = _set____db54di;
  }
  function _get_scale__bic0mx($this) {
    return $this.scale_1;
  }
  function _set_precision__ov89hj($this, _set____db54di) {
    $this.precision_1 = _set____db54di;
  }
  function _get_precision__gv1c31($this) {
    return $this.precision_1;
  }
  function _set_lazyExtras__npu9s($this, _set____db54di) {
    $this.lazyExtras_1 = _set____db54di;
  }
  function _get_lazyExtras__fpyff0($this) {
    return $this.lazyExtras_1;
  }
  function Builder_init_$Init$_6(context, $this) {
    Builder_4.call($this);
    $this.context_1 = context;
    $this.defaults_1 = Companion_getInstance_13().DEFAULT_1;
    $this.data_1 = null;
    $this.target_1 = null;
    $this.listener_1 = null;
    $this.memoryCacheKey_1 = null;
    $this.lazyMemoryCacheKeyExtras_1 = emptyMap();
    $this.diskCacheKey_1 = null;
    $this.fileSystem_1 = null;
    $this.fetcherFactory_1 = null;
    $this.decoderFactory_1 = null;
    $this.interceptorCoroutineContext_1 = null;
    $this.fetcherCoroutineContext_1 = null;
    $this.decoderCoroutineContext_1 = null;
    $this.memoryCachePolicy_1 = null;
    $this.diskCachePolicy_1 = null;
    $this.networkCachePolicy_1 = null;
    $this.placeholderMemoryCacheKey_1 = null;
    $this.placeholderFactory_1 = get_EMPTY_IMAGE_FACTORY();
    $this.errorFactory_1 = get_EMPTY_IMAGE_FACTORY();
    $this.fallbackFactory_1 = get_EMPTY_IMAGE_FACTORY();
    $this.sizeResolver_1 = null;
    $this.scale_1 = null;
    $this.precision_1 = null;
    $this.lazyExtras_1 = Companion_getInstance_7().get_EMPTY_i8q41w_k$();
    return $this;
  }
  function Builder_init_$Create$_6(context) {
    return Builder_init_$Init$_6(context, objectCreate(protoOf(Builder_4)));
  }
  function Builder_init_$Init$_7(request, context, $this) {
    context = context === VOID ? request.context_1 : context;
    Builder_4.call($this);
    $this.context_1 = context;
    $this.defaults_1 = request.defaults_1;
    $this.data_1 = request.data_1;
    $this.target_1 = request.target_1;
    $this.listener_1 = request.listener_1;
    $this.memoryCacheKey_1 = request.memoryCacheKey_1;
    $this.lazyMemoryCacheKeyExtras_1 = request.memoryCacheKeyExtras_1;
    $this.diskCacheKey_1 = request.diskCacheKey_1;
    $this.fileSystem_1 = request.defined_1.fileSystem_1;
    $this.fetcherFactory_1 = request.fetcherFactory_1;
    $this.decoderFactory_1 = request.decoderFactory_1;
    $this.interceptorCoroutineContext_1 = request.defined_1.interceptorCoroutineContext_1;
    $this.fetcherCoroutineContext_1 = request.defined_1.fetcherCoroutineContext_1;
    $this.decoderCoroutineContext_1 = request.defined_1.decoderCoroutineContext_1;
    $this.memoryCachePolicy_1 = request.defined_1.memoryCachePolicy_1;
    $this.diskCachePolicy_1 = request.defined_1.diskCachePolicy_1;
    $this.networkCachePolicy_1 = request.defined_1.networkCachePolicy_1;
    $this.placeholderMemoryCacheKey_1 = request.placeholderMemoryCacheKey_1;
    $this.placeholderFactory_1 = request.defined_1.placeholderFactory_1;
    $this.errorFactory_1 = request.defined_1.errorFactory_1;
    $this.fallbackFactory_1 = request.defined_1.fallbackFactory_1;
    $this.sizeResolver_1 = request.defined_1.sizeResolver_1;
    $this.scale_1 = request.defined_1.scale_1;
    $this.precision_1 = request.defined_1.precision_1;
    $this.lazyExtras_1 = request.extras_1;
    return $this;
  }
  function Builder_init_$Create$_7(request, context) {
    return Builder_init_$Init$_7(request, context, objectCreate(protoOf(Builder_4)));
  }
  function ImageRequest$Builder$target$lambda(it) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$target$lambda_0(it) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$target$lambda_1(it) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$target$4($onStart, $onError, $onSuccess) {
    this.$onStart_1 = $onStart;
    this.$onError_1 = $onError;
    this.$onSuccess_1 = $onSuccess;
  }
  protoOf(ImageRequest$Builder$target$4).onStart_5harg8_k$ = function (placeholder) {
    return this.$onStart_1(placeholder);
  };
  protoOf(ImageRequest$Builder$target$4).onError_18s0r6_k$ = function (error) {
    return this.$onError_1(error);
  };
  protoOf(ImageRequest$Builder$target$4).onSuccess_u2d2o2_k$ = function (result) {
    return this.$onSuccess_1(result);
  };
  function ImageRequest$Builder$listener$lambda(it) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$listener$lambda_0(it) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$listener$lambda_1(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$listener$lambda_2(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return Unit_getInstance();
  }
  function ImageRequest$Builder$listener$5($onStart, $onCancel, $onError, $onSuccess) {
    this.$onStart_1 = $onStart;
    this.$onCancel_1 = $onCancel;
    this.$onError_1 = $onError;
    this.$onSuccess_1 = $onSuccess;
  }
  protoOf(ImageRequest$Builder$listener$5).onStart_xloqp4_k$ = function (request) {
    return this.$onStart_1(request);
  };
  protoOf(ImageRequest$Builder$listener$5).onCancel_r6pvsi_k$ = function (request) {
    return this.$onCancel_1(request);
  };
  protoOf(ImageRequest$Builder$listener$5).onError_bveiqq_k$ = function (request, result) {
    return this.$onError_1(request, result);
  };
  protoOf(ImageRequest$Builder$listener$5).onSuccess_uq0ty0_k$ = function (request, result) {
    return this.$onSuccess_1(request, result);
  };
  function ImageRequest$Builder$placeholder$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function ImageRequest$Builder$error$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function ImageRequest$Builder$fallback$lambda($image) {
    return function (it) {
      return $image;
    };
  }
  function Listener() {
  }
  function Defined(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision) {
    this.fileSystem_1 = fileSystem;
    this.interceptorCoroutineContext_1 = interceptorCoroutineContext;
    this.fetcherCoroutineContext_1 = fetcherCoroutineContext;
    this.decoderCoroutineContext_1 = decoderCoroutineContext;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.networkCachePolicy_1 = networkCachePolicy;
    this.placeholderFactory_1 = placeholderFactory;
    this.errorFactory_1 = errorFactory;
    this.fallbackFactory_1 = fallbackFactory;
    this.sizeResolver_1 = sizeResolver;
    this.scale_1 = scale;
    this.precision_1 = precision;
  }
  protoOf(Defined).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(Defined).get_interceptorCoroutineContext_tr9mjx_k$ = function () {
    return this.interceptorCoroutineContext_1;
  };
  protoOf(Defined).get_fetcherCoroutineContext_qg8u97_k$ = function () {
    return this.fetcherCoroutineContext_1;
  };
  protoOf(Defined).get_decoderCoroutineContext_a943wu_k$ = function () {
    return this.decoderCoroutineContext_1;
  };
  protoOf(Defined).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Defined).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Defined).get_networkCachePolicy_zd32gh_k$ = function () {
    return this.networkCachePolicy_1;
  };
  protoOf(Defined).get_placeholderFactory_6kc9ls_k$ = function () {
    return this.placeholderFactory_1;
  };
  protoOf(Defined).get_errorFactory_9eoded_k$ = function () {
    return this.errorFactory_1;
  };
  protoOf(Defined).get_fallbackFactory_il3u8v_k$ = function () {
    return this.fallbackFactory_1;
  };
  protoOf(Defined).get_sizeResolver_v7l9bk_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(Defined).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Defined).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(Defined).copy_7kczcw_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision) {
    return new Defined(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision);
  };
  protoOf(Defined).copy$default_kznm7v_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, $super) {
    fileSystem = fileSystem === VOID ? this.fileSystem_1 : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? this.interceptorCoroutineContext_1 : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? this.fetcherCoroutineContext_1 : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? this.decoderCoroutineContext_1 : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.memoryCachePolicy_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.diskCachePolicy_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.networkCachePolicy_1 : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? this.placeholderFactory_1 : placeholderFactory;
    errorFactory = errorFactory === VOID ? this.errorFactory_1 : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? this.fallbackFactory_1 : fallbackFactory;
    sizeResolver = sizeResolver === VOID ? this.sizeResolver_1 : sizeResolver;
    scale = scale === VOID ? this.scale_1 : scale;
    precision = precision === VOID ? this.precision_1 : precision;
    return $super === VOID ? this.copy_7kczcw_k$(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision) : $super.copy_7kczcw_k$.call(this, fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision);
  };
  protoOf(Defined).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defined))
      return false;
    if (!equals(this.fileSystem_1, other.fileSystem_1))
      return false;
    if (!equals(this.interceptorCoroutineContext_1, other.interceptorCoroutineContext_1))
      return false;
    if (!equals(this.fetcherCoroutineContext_1, other.fetcherCoroutineContext_1))
      return false;
    if (!equals(this.decoderCoroutineContext_1, other.decoderCoroutineContext_1))
      return false;
    if (!equals(this.memoryCachePolicy_1, other.memoryCachePolicy_1))
      return false;
    if (!equals(this.diskCachePolicy_1, other.diskCachePolicy_1))
      return false;
    if (!equals(this.networkCachePolicy_1, other.networkCachePolicy_1))
      return false;
    if (!equals(this.placeholderFactory_1, other.placeholderFactory_1))
      return false;
    if (!equals(this.errorFactory_1, other.errorFactory_1))
      return false;
    if (!equals(this.fallbackFactory_1, other.fallbackFactory_1))
      return false;
    if (!equals(this.sizeResolver_1, other.sizeResolver_1))
      return false;
    if (!equals(this.scale_1, other.scale_1))
      return false;
    if (!equals(this.precision_1, other.precision_1))
      return false;
    return true;
  };
  protoOf(Defined).hashCode = function () {
    var result = this.fileSystem_1 == null ? 0 : hashCode(this.fileSystem_1);
    result = imul(result, 31) + (this.interceptorCoroutineContext_1 == null ? 0 : hashCode(this.interceptorCoroutineContext_1)) | 0;
    result = imul(result, 31) + (this.fetcherCoroutineContext_1 == null ? 0 : hashCode(this.fetcherCoroutineContext_1)) | 0;
    result = imul(result, 31) + (this.decoderCoroutineContext_1 == null ? 0 : hashCode(this.decoderCoroutineContext_1)) | 0;
    result = imul(result, 31) + (this.memoryCachePolicy_1 == null ? 0 : this.memoryCachePolicy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.diskCachePolicy_1 == null ? 0 : this.diskCachePolicy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.networkCachePolicy_1 == null ? 0 : this.networkCachePolicy_1.hashCode()) | 0;
    result = imul(result, 31) + (this.placeholderFactory_1 == null ? 0 : hashCode(this.placeholderFactory_1)) | 0;
    result = imul(result, 31) + (this.errorFactory_1 == null ? 0 : hashCode(this.errorFactory_1)) | 0;
    result = imul(result, 31) + (this.fallbackFactory_1 == null ? 0 : hashCode(this.fallbackFactory_1)) | 0;
    result = imul(result, 31) + (this.sizeResolver_1 == null ? 0 : hashCode(this.sizeResolver_1)) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + (this.precision_1 == null ? 0 : this.precision_1.hashCode()) | 0;
    return result;
  };
  protoOf(Defined).toString = function () {
    return 'Defined(fileSystem=' + toString_0(this.fileSystem_1) + ', interceptorCoroutineContext=' + toString_0(this.interceptorCoroutineContext_1) + ', fetcherCoroutineContext=' + toString_0(this.fetcherCoroutineContext_1) + ', decoderCoroutineContext=' + toString_0(this.decoderCoroutineContext_1) + ', memoryCachePolicy=' + toString_0(this.memoryCachePolicy_1) + ', diskCachePolicy=' + toString_0(this.diskCachePolicy_1) + ', networkCachePolicy=' + toString_0(this.networkCachePolicy_1) + ', placeholderFactory=' + toString_0(this.placeholderFactory_1) + ', errorFactory=' + toString_0(this.errorFactory_1) + ', fallbackFactory=' + toString_0(this.fallbackFactory_1) + ', sizeResolver=' + toString_0(this.sizeResolver_1) + ', scale=' + toString_0(this.scale_1) + ', precision=' + toString_0(this.precision_1) + ')';
  };
  function Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) {
    Companion_getInstance_13();
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
    sizeResolver = sizeResolver === VOID ? Companion_getInstance_15().get_ORIGINAL_3y2d22_k$() : sizeResolver;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    extras = extras === VOID ? Companion_getInstance_7().get_EMPTY_i8q41w_k$() : extras;
    this.fileSystem_1 = fileSystem;
    this.interceptorCoroutineContext_1 = interceptorCoroutineContext;
    this.fetcherCoroutineContext_1 = fetcherCoroutineContext;
    this.decoderCoroutineContext_1 = decoderCoroutineContext;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.networkCachePolicy_1 = networkCachePolicy;
    this.placeholderFactory_1 = placeholderFactory;
    this.errorFactory_1 = errorFactory;
    this.fallbackFactory_1 = fallbackFactory;
    this.sizeResolver_1 = sizeResolver;
    this.scale_1 = scale;
    this.precision_1 = precision;
    this.extras_1 = extras;
  }
  protoOf(Defaults).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(Defaults).get_interceptorCoroutineContext_tr9mjx_k$ = function () {
    return this.interceptorCoroutineContext_1;
  };
  protoOf(Defaults).get_fetcherCoroutineContext_qg8u97_k$ = function () {
    return this.fetcherCoroutineContext_1;
  };
  protoOf(Defaults).get_decoderCoroutineContext_a943wu_k$ = function () {
    return this.decoderCoroutineContext_1;
  };
  protoOf(Defaults).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Defaults).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Defaults).get_networkCachePolicy_zd32gh_k$ = function () {
    return this.networkCachePolicy_1;
  };
  protoOf(Defaults).get_placeholderFactory_6kc9ls_k$ = function () {
    return this.placeholderFactory_1;
  };
  protoOf(Defaults).get_errorFactory_9eoded_k$ = function () {
    return this.errorFactory_1;
  };
  protoOf(Defaults).get_fallbackFactory_il3u8v_k$ = function () {
    return this.fallbackFactory_1;
  };
  protoOf(Defaults).get_sizeResolver_v7l9bk_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(Defaults).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Defaults).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(Defaults).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Defaults).copy_3vcnjn_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) {
    return new Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).copy$default_4uchks_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, $super) {
    fileSystem = fileSystem === VOID ? this.fileSystem_1 : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? this.interceptorCoroutineContext_1 : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? this.fetcherCoroutineContext_1 : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? this.decoderCoroutineContext_1 : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.memoryCachePolicy_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.diskCachePolicy_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.networkCachePolicy_1 : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? this.placeholderFactory_1 : placeholderFactory;
    errorFactory = errorFactory === VOID ? this.errorFactory_1 : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? this.fallbackFactory_1 : fallbackFactory;
    sizeResolver = sizeResolver === VOID ? this.sizeResolver_1 : sizeResolver;
    scale = scale === VOID ? this.scale_1 : scale;
    precision = precision === VOID ? this.precision_1 : precision;
    extras = extras === VOID ? this.extras_1 : extras;
    return $super === VOID ? this.copy_3vcnjn_k$(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras) : $super.copy_3vcnjn_k$.call(this, fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras);
  };
  protoOf(Defaults).copy_j8rj5r_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, precision, extras) {
    return new Defaults(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, VOID, VOID, precision, extras);
  };
  protoOf(Defaults).copy$default_rhzxb2_k$ = function (fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, precision, extras, $super) {
    fileSystem = fileSystem === VOID ? this.fileSystem_1 : fileSystem;
    interceptorCoroutineContext = interceptorCoroutineContext === VOID ? this.interceptorCoroutineContext_1 : interceptorCoroutineContext;
    fetcherCoroutineContext = fetcherCoroutineContext === VOID ? this.fetcherCoroutineContext_1 : fetcherCoroutineContext;
    decoderCoroutineContext = decoderCoroutineContext === VOID ? this.decoderCoroutineContext_1 : decoderCoroutineContext;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.memoryCachePolicy_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.diskCachePolicy_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.networkCachePolicy_1 : networkCachePolicy;
    placeholderFactory = placeholderFactory === VOID ? this.placeholderFactory_1 : placeholderFactory;
    errorFactory = errorFactory === VOID ? this.errorFactory_1 : errorFactory;
    fallbackFactory = fallbackFactory === VOID ? this.fallbackFactory_1 : fallbackFactory;
    precision = precision === VOID ? this.precision_1 : precision;
    extras = extras === VOID ? this.extras_1 : extras;
    return $super === VOID ? this.copy_j8rj5r_k$(fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, precision, extras) : $super.copy_j8rj5r_k$.call(this, fileSystem, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderFactory, errorFactory, fallbackFactory, precision, extras);
  };
  protoOf(Defaults).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Defaults))
      return false;
    if (!equals(this.fileSystem_1, other.fileSystem_1))
      return false;
    if (!equals(this.interceptorCoroutineContext_1, other.interceptorCoroutineContext_1))
      return false;
    if (!equals(this.fetcherCoroutineContext_1, other.fetcherCoroutineContext_1))
      return false;
    if (!equals(this.decoderCoroutineContext_1, other.decoderCoroutineContext_1))
      return false;
    if (!this.memoryCachePolicy_1.equals(other.memoryCachePolicy_1))
      return false;
    if (!this.diskCachePolicy_1.equals(other.diskCachePolicy_1))
      return false;
    if (!this.networkCachePolicy_1.equals(other.networkCachePolicy_1))
      return false;
    if (!equals(this.placeholderFactory_1, other.placeholderFactory_1))
      return false;
    if (!equals(this.errorFactory_1, other.errorFactory_1))
      return false;
    if (!equals(this.fallbackFactory_1, other.fallbackFactory_1))
      return false;
    if (!equals(this.sizeResolver_1, other.sizeResolver_1))
      return false;
    if (!this.scale_1.equals(other.scale_1))
      return false;
    if (!this.precision_1.equals(other.precision_1))
      return false;
    if (!this.extras_1.equals(other.extras_1))
      return false;
    return true;
  };
  protoOf(Defaults).hashCode = function () {
    var result = hashCode(this.fileSystem_1);
    result = imul(result, 31) + hashCode(this.interceptorCoroutineContext_1) | 0;
    result = imul(result, 31) + hashCode(this.fetcherCoroutineContext_1) | 0;
    result = imul(result, 31) + hashCode(this.decoderCoroutineContext_1) | 0;
    result = imul(result, 31) + this.memoryCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.diskCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.networkCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.placeholderFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.errorFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.fallbackFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.sizeResolver_1) | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    result = imul(result, 31) + this.precision_1.hashCode() | 0;
    result = imul(result, 31) + this.extras_1.hashCode() | 0;
    return result;
  };
  protoOf(Defaults).toString = function () {
    return 'Defaults(fileSystem=' + toString(this.fileSystem_1) + ', interceptorCoroutineContext=' + toString(this.interceptorCoroutineContext_1) + ', fetcherCoroutineContext=' + toString(this.fetcherCoroutineContext_1) + ', decoderCoroutineContext=' + toString(this.decoderCoroutineContext_1) + ', memoryCachePolicy=' + this.memoryCachePolicy_1.toString() + ', diskCachePolicy=' + this.diskCachePolicy_1.toString() + ', networkCachePolicy=' + this.networkCachePolicy_1.toString() + ', placeholderFactory=' + toString(this.placeholderFactory_1) + ', errorFactory=' + toString(this.errorFactory_1) + ', fallbackFactory=' + toString(this.fallbackFactory_1) + ', sizeResolver=' + toString(this.sizeResolver_1) + ', scale=' + this.scale_1.toString() + ', precision=' + this.precision_1.toString() + ', extras=' + this.extras_1.toString() + ')';
  };
  protoOf(Builder_4).get_extras_d3bq0c_k$ = function () {
    var extras = this.lazyExtras_1;
    var tmp;
    if (extras instanceof Builder_0) {
      tmp = extras;
    } else {
      if (extras instanceof Extras) {
        // Inline function 'kotlin.also' call
        var this_0 = extras.newBuilder_dnl2aj_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'coil3.request.Builder.<get-extras>.<anonymous>' call
        this.lazyExtras_1 = this_0;
        tmp = this_0;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    return tmp;
  };
  protoOf(Builder_4).data_nz5vvv_k$ = function (data) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.data.<anonymous>' call
    this.data_1 = data;
    return this;
  };
  protoOf(Builder_4).target_gnizg_k$ = function (onStart, onError, onSuccess) {
    return this.target_x9a50a_k$(new ImageRequest$Builder$target$4(onStart, onError, onSuccess));
  };
  protoOf(Builder_4).target_x9a50a_k$ = function (target) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.target.<anonymous>' call
    this.target_1 = target;
    return this;
  };
  protoOf(Builder_4).memoryCacheKey_n3ayr8_k$ = function (key) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.memoryCacheKey.<anonymous>' call
    this.memoryCacheKey_xi6cx5_k$(key == null ? null : key.get_key_18j28a_k$());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = key == null ? null : key.get_extras_d3bq0c_k$();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    this.memoryCacheKeyExtras_ac5hd7_k$(tmp$ret$0);
    return this;
  };
  protoOf(Builder_4).memoryCacheKey_xi6cx5_k$ = function (key) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.memoryCacheKey.<anonymous>' call
    this.memoryCacheKey_1 = key;
    return this;
  };
  protoOf(Builder_4).memoryCacheKeyExtras_ac5hd7_k$ = function (extras) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.memoryCacheKeyExtras.<anonymous>' call
    this.lazyMemoryCacheKeyExtras_1 = toMutableMap(extras);
    this.memoryCacheKeyExtrasAreMutable_1 = true;
    return this;
  };
  protoOf(Builder_4).memoryCacheKeyExtra_5qlizj_k$ = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.memoryCacheKeyExtra.<anonymous>' call
    if (!(value == null)) {
      // Inline function 'kotlin.collections.set' call
      _get_memoryCacheKeyExtras__arb8l2(this).put_4fpzoq_k$(key, value);
    } else {
      _get_memoryCacheKeyExtras__arb8l2(this).remove_gppy8k_k$(key);
    }
    return this;
  };
  protoOf(Builder_4).diskCacheKey_bxucvn_k$ = function (key) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.diskCacheKey.<anonymous>' call
    this.diskCacheKey_1 = key;
    return this;
  };
  protoOf(Builder_4).fileSystem_nw5gf3_k$ = function (fileSystem) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.fileSystem.<anonymous>' call
    this.fileSystem_1 = fileSystem;
    return this;
  };
  protoOf(Builder_4).listener_qmohu1_k$ = function (onStart, onCancel, onError, onSuccess) {
    return this.listener_2ngg90_k$(new ImageRequest$Builder$listener$5(onStart, onCancel, onError, onSuccess));
  };
  protoOf(Builder_4).listener_2ngg90_k$ = function (listener) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.listener.<anonymous>' call
    this.listener_1 = listener;
    return this;
  };
  protoOf(Builder_4).coroutineContext_ygypem_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.coroutineContext.<anonymous>' call
    this.interceptorCoroutineContext_1 = context;
    this.fetcherCoroutineContext_1 = context;
    this.decoderCoroutineContext_1 = context;
    return this;
  };
  protoOf(Builder_4).interceptorCoroutineContext_vi517h_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.interceptorCoroutineContext.<anonymous>' call
    this.interceptorCoroutineContext_1 = context;
    return this;
  };
  protoOf(Builder_4).fetcherCoroutineContext_q6drs5_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.fetcherCoroutineContext.<anonymous>' call
    this.fetcherCoroutineContext_1 = context;
    return this;
  };
  protoOf(Builder_4).decoderCoroutineContext_oo1l6m_k$ = function (context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.decoderCoroutineContext.<anonymous>' call
    this.decoderCoroutineContext_1 = context;
    return this;
  };
  protoOf(Builder_4).size_vxaref_k$ = function (size) {
    return this.size_mipxur_k$(Size_0(size, size));
  };
  protoOf(Builder_4).size_722bi7_k$ = function (width, height) {
    return this.size_mipxur_k$(Size_0(width, height));
  };
  protoOf(Builder_4).size_xkjdrx_k$ = function (width, height) {
    return this.size_mipxur_k$(new Size(width, height));
  };
  protoOf(Builder_4).size_mipxur_k$ = function (size) {
    return this.size_jl2d87_k$(SizeResolver_0(size));
  };
  protoOf(Builder_4).size_jl2d87_k$ = function (resolver) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.size.<anonymous>' call
    this.sizeResolver_1 = resolver;
    return this;
  };
  protoOf(Builder_4).scale_wf5gzi_k$ = function (scale) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.scale.<anonymous>' call
    this.scale_1 = scale;
    return this;
  };
  protoOf(Builder_4).precision_s919ji_k$ = function (precision) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.precision.<anonymous>' call
    this.precision_1 = precision;
    return this;
  };
  protoOf(Builder_4).fetcherFactory_r375ln_k$ = function (factory, type) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.fetcherFactory.<anonymous>' call
    this.fetcherFactory_1 = to(factory, type);
    return this;
  };
  protoOf(Builder_4).decoderFactory_2zoclc_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.decoderFactory.<anonymous>' call
    this.decoderFactory_1 = factory;
    return this;
  };
  protoOf(Builder_4).memoryCachePolicy_ja3s15_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.memoryCachePolicy.<anonymous>' call
    this.memoryCachePolicy_1 = policy;
    return this;
  };
  protoOf(Builder_4).diskCachePolicy_6azk57_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.diskCachePolicy.<anonymous>' call
    this.diskCachePolicy_1 = policy;
    return this;
  };
  protoOf(Builder_4).networkCachePolicy_vhutuy_k$ = function (policy) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.networkCachePolicy.<anonymous>' call
    this.networkCachePolicy_1 = policy;
    return this;
  };
  protoOf(Builder_4).placeholderMemoryCacheKey_v7td06_k$ = function (key) {
    var tmp;
    if (key == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'coil3.request.Builder.placeholderMemoryCacheKey.<anonymous>' call
      tmp = new Key_0(key);
    }
    return this.placeholderMemoryCacheKey_eakwvz_k$(tmp);
  };
  protoOf(Builder_4).placeholderMemoryCacheKey_eakwvz_k$ = function (key) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.placeholderMemoryCacheKey.<anonymous>' call
    this.placeholderMemoryCacheKey_1 = key;
    return this;
  };
  protoOf(Builder_4).placeholder_2joe88_k$ = function (image) {
    return this.placeholder_d2ngzk_k$(ImageRequest$Builder$placeholder$lambda(image));
  };
  protoOf(Builder_4).placeholder_d2ngzk_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.placeholder.<anonymous>' call
    this.placeholderFactory_1 = factory;
    return this;
  };
  protoOf(Builder_4).error_r4ahyb_k$ = function (image) {
    return this.error_u3urez_k$(ImageRequest$Builder$error$lambda(image));
  };
  protoOf(Builder_4).error_u3urez_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.error.<anonymous>' call
    this.errorFactory_1 = factory;
    return this;
  };
  protoOf(Builder_4).fallback_o7e749_k$ = function (image) {
    return this.fallback_9ec3ht_k$(ImageRequest$Builder$fallback$lambda(image));
  };
  protoOf(Builder_4).fallback_9ec3ht_k$ = function (factory) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.fallback.<anonymous>' call
    this.fallbackFactory_1 = factory;
    return this;
  };
  protoOf(Builder_4).defaults_jdonvz_k$ = function (defaults) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.request.Builder.defaults.<anonymous>' call
    this.defaults_1 = defaults;
    return this;
  };
  protoOf(Builder_4).build_1k0s4u_k$ = function () {
    var tmp27_context = this.context_1;
    var tmp0_elvis_lhs = this.data_1;
    var tmp28_data = tmp0_elvis_lhs == null ? NullRequestData_getInstance() : tmp0_elvis_lhs;
    var tmp29_target = this.target_1;
    var tmp30_listener = this.listener_1;
    var tmp31_memoryCacheKey = this.memoryCacheKey_1;
    var memoryCacheKeyExtras = this.lazyMemoryCacheKeyExtras_1;
    var tmp;
    if (equals(memoryCacheKeyExtras, this.memoryCacheKeyExtrasAreMutable_1)) {
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
    var tmp33_diskCacheKey = this.diskCacheKey_1;
    var tmp1_elvis_lhs = this.fileSystem_1;
    var tmp34_fileSystem = tmp1_elvis_lhs == null ? this.defaults_1.fileSystem_1 : tmp1_elvis_lhs;
    var tmp35_fetcherFactory = this.fetcherFactory_1;
    var tmp36_decoderFactory = this.decoderFactory_1;
    var tmp2_elvis_lhs = this.memoryCachePolicy_1;
    var tmp37_memoryCachePolicy = tmp2_elvis_lhs == null ? this.defaults_1.memoryCachePolicy_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.diskCachePolicy_1;
    var tmp38_diskCachePolicy = tmp3_elvis_lhs == null ? this.defaults_1.diskCachePolicy_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = this.networkCachePolicy_1;
    var tmp39_networkCachePolicy = tmp4_elvis_lhs == null ? this.defaults_1.networkCachePolicy_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.interceptorCoroutineContext_1;
    var tmp40_interceptorCoroutineContext = tmp5_elvis_lhs == null ? this.defaults_1.interceptorCoroutineContext_1 : tmp5_elvis_lhs;
    var tmp6_elvis_lhs = this.fetcherCoroutineContext_1;
    var tmp41_fetcherCoroutineContext = tmp6_elvis_lhs == null ? this.defaults_1.fetcherCoroutineContext_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = this.decoderCoroutineContext_1;
    var tmp42_decoderCoroutineContext = tmp7_elvis_lhs == null ? this.defaults_1.decoderCoroutineContext_1 : tmp7_elvis_lhs;
    var tmp43_placeholderMemoryCacheKey = this.placeholderMemoryCacheKey_1;
    var tmp8_elvis_lhs = this.placeholderFactory_1;
    var tmp44_placeholderFactory = tmp8_elvis_lhs == null ? this.defaults_1.placeholderFactory_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = this.errorFactory_1;
    var tmp45_errorFactory = tmp9_elvis_lhs == null ? this.defaults_1.errorFactory_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = this.fallbackFactory_1;
    var tmp46_fallbackFactory = tmp10_elvis_lhs == null ? this.defaults_1.fallbackFactory_1 : tmp10_elvis_lhs;
    var tmp11_elvis_lhs = this.sizeResolver_1;
    var tmp47_sizeResolver = tmp11_elvis_lhs == null ? this.defaults_1.sizeResolver_1 : tmp11_elvis_lhs;
    var tmp12_elvis_lhs = this.scale_1;
    var tmp48_scale = tmp12_elvis_lhs == null ? this.defaults_1.scale_1 : tmp12_elvis_lhs;
    var tmp13_elvis_lhs = this.precision_1;
    var tmp49_precision = tmp13_elvis_lhs == null ? this.defaults_1.precision_1 : tmp13_elvis_lhs;
    var extras = this.lazyExtras_1;
    var tmp_1;
    if (extras instanceof Builder_0) {
      tmp_1 = extras.build_1k0s4u_k$();
    } else {
      if (extras instanceof Extras) {
        tmp_1 = extras;
      } else {
        throw AssertionError_init_$Create$();
      }
    }
    var tmp50_extras = tmp_1;
    var tmp14_fileSystem = this.fileSystem_1;
    var tmp15_interceptorCoroutineContext = this.interceptorCoroutineContext_1;
    var tmp16_fetcherCoroutineContext = this.fetcherCoroutineContext_1;
    var tmp17_decoderCoroutineContext = this.decoderCoroutineContext_1;
    var tmp18_placeholderFactory = this.placeholderFactory_1;
    var tmp19_errorFactory = this.errorFactory_1;
    var tmp20_fallbackFactory = this.fallbackFactory_1;
    var tmp21_memoryCachePolicy = this.memoryCachePolicy_1;
    var tmp22_diskCachePolicy = this.diskCachePolicy_1;
    var tmp23_networkCachePolicy = this.networkCachePolicy_1;
    var tmp24_sizeResolver = this.sizeResolver_1;
    var tmp25_scale = this.scale_1;
    var tmp26_precision = this.precision_1;
    var tmp51_defined = new Defined(tmp14_fileSystem, tmp15_interceptorCoroutineContext, tmp16_fetcherCoroutineContext, tmp17_decoderCoroutineContext, tmp21_memoryCachePolicy, tmp22_diskCachePolicy, tmp23_networkCachePolicy, tmp18_placeholderFactory, tmp19_errorFactory, tmp20_fallbackFactory, tmp24_sizeResolver, tmp25_scale, tmp26_precision);
    var tmp52_defaults = this.defaults_1;
    return new ImageRequest(tmp27_context, tmp28_data, tmp29_target, tmp30_listener, tmp31_memoryCacheKey, tmp32_memoryCacheKeyExtras, tmp33_diskCacheKey, tmp34_fileSystem, tmp35_fetcherFactory, tmp36_decoderFactory, tmp40_interceptorCoroutineContext, tmp41_fetcherCoroutineContext, tmp42_decoderCoroutineContext, tmp37_memoryCachePolicy, tmp38_diskCachePolicy, tmp39_networkCachePolicy, tmp43_placeholderMemoryCacheKey, tmp44_placeholderFactory, tmp45_errorFactory, tmp46_fallbackFactory, tmp47_sizeResolver, tmp48_scale, tmp49_precision, tmp50_extras, tmp51_defined, tmp52_defaults);
  };
  function Builder_4() {
    this.memoryCacheKeyExtrasAreMutable_1 = false;
  }
  function ImageRequest(context, data, target, listener, memoryCacheKey, memoryCacheKeyExtras, diskCacheKey, fileSystem, fetcherFactory, decoderFactory, interceptorCoroutineContext, fetcherCoroutineContext, decoderCoroutineContext, memoryCachePolicy, diskCachePolicy, networkCachePolicy, placeholderMemoryCacheKey, placeholderFactory, errorFactory, fallbackFactory, sizeResolver, scale, precision, extras, defined, defaults) {
    this.context_1 = context;
    this.data_1 = data;
    this.target_1 = target;
    this.listener_1 = listener;
    this.memoryCacheKey_1 = memoryCacheKey;
    this.memoryCacheKeyExtras_1 = memoryCacheKeyExtras;
    this.diskCacheKey_1 = diskCacheKey;
    this.fileSystem_1 = fileSystem;
    this.fetcherFactory_1 = fetcherFactory;
    this.decoderFactory_1 = decoderFactory;
    this.interceptorCoroutineContext_1 = interceptorCoroutineContext;
    this.fetcherCoroutineContext_1 = fetcherCoroutineContext;
    this.decoderCoroutineContext_1 = decoderCoroutineContext;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.networkCachePolicy_1 = networkCachePolicy;
    this.placeholderMemoryCacheKey_1 = placeholderMemoryCacheKey;
    this.placeholderFactory_1 = placeholderFactory;
    this.errorFactory_1 = errorFactory;
    this.fallbackFactory_1 = fallbackFactory;
    this.sizeResolver_1 = sizeResolver;
    this.scale_1 = scale;
    this.precision_1 = precision;
    this.extras_1 = extras;
    this.defined_1 = defined;
    this.defaults_1 = defaults;
  }
  protoOf(ImageRequest).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ImageRequest).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(ImageRequest).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(ImageRequest).get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  protoOf(ImageRequest).get_memoryCacheKey_p17wyv_k$ = function () {
    return this.memoryCacheKey_1;
  };
  protoOf(ImageRequest).get_memoryCacheKeyExtras_7l3w9i_k$ = function () {
    return this.memoryCacheKeyExtras_1;
  };
  protoOf(ImageRequest).get_diskCacheKey_gvj33x_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(ImageRequest).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(ImageRequest).get_fetcherFactory_h2i1g4_k$ = function () {
    return this.fetcherFactory_1;
  };
  protoOf(ImageRequest).get_decoderFactory_p3qqj5_k$ = function () {
    return this.decoderFactory_1;
  };
  protoOf(ImageRequest).get_interceptorCoroutineContext_tr9mjx_k$ = function () {
    return this.interceptorCoroutineContext_1;
  };
  protoOf(ImageRequest).get_fetcherCoroutineContext_qg8u97_k$ = function () {
    return this.fetcherCoroutineContext_1;
  };
  protoOf(ImageRequest).get_decoderCoroutineContext_a943wu_k$ = function () {
    return this.decoderCoroutineContext_1;
  };
  protoOf(ImageRequest).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(ImageRequest).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(ImageRequest).get_networkCachePolicy_zd32gh_k$ = function () {
    return this.networkCachePolicy_1;
  };
  protoOf(ImageRequest).get_placeholderMemoryCacheKey_66wdrs_k$ = function () {
    return this.placeholderMemoryCacheKey_1;
  };
  protoOf(ImageRequest).get_placeholderFactory_6kc9ls_k$ = function () {
    return this.placeholderFactory_1;
  };
  protoOf(ImageRequest).get_errorFactory_9eoded_k$ = function () {
    return this.errorFactory_1;
  };
  protoOf(ImageRequest).get_fallbackFactory_il3u8v_k$ = function () {
    return this.fallbackFactory_1;
  };
  protoOf(ImageRequest).get_sizeResolver_v7l9bk_k$ = function () {
    return this.sizeResolver_1;
  };
  protoOf(ImageRequest).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(ImageRequest).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(ImageRequest).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(ImageRequest).get_defined_qtfew0_k$ = function () {
    return this.defined_1;
  };
  protoOf(ImageRequest).get_defaults_l5ckbp_k$ = function () {
    return this.defaults_1;
  };
  protoOf(ImageRequest).placeholder_9w6i5v_k$ = function () {
    var tmp0_elvis_lhs = this.placeholderFactory_1(this);
    return tmp0_elvis_lhs == null ? this.defaults_1.placeholderFactory_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).error_1lmfpk_k$ = function () {
    var tmp0_elvis_lhs = this.errorFactory_1(this);
    return tmp0_elvis_lhs == null ? this.defaults_1.errorFactory_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).fallback_cl834y_k$ = function () {
    var tmp0_elvis_lhs = this.fallbackFactory_1(this);
    return tmp0_elvis_lhs == null ? this.defaults_1.fallbackFactory_1(this) : tmp0_elvis_lhs;
  };
  protoOf(ImageRequest).newBuilder_lgfy5y_k$ = function (context) {
    return Builder_init_$Create$_7(this, context);
  };
  protoOf(ImageRequest).newBuilder$default_dz3r4s_k$ = function (context, $super) {
    context = context === VOID ? this.context_1 : context;
    return $super === VOID ? this.newBuilder_lgfy5y_k$(context) : $super.newBuilder_lgfy5y_k$.call(this, context);
  };
  protoOf(ImageRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageRequest))
      return false;
    if (!equals(this.context_1, other.context_1))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    if (!equals(this.target_1, other.target_1))
      return false;
    if (!equals(this.listener_1, other.listener_1))
      return false;
    if (!(this.memoryCacheKey_1 == other.memoryCacheKey_1))
      return false;
    if (!equals(this.memoryCacheKeyExtras_1, other.memoryCacheKeyExtras_1))
      return false;
    if (!(this.diskCacheKey_1 == other.diskCacheKey_1))
      return false;
    if (!equals(this.fileSystem_1, other.fileSystem_1))
      return false;
    if (!equals(this.fetcherFactory_1, other.fetcherFactory_1))
      return false;
    if (!equals(this.decoderFactory_1, other.decoderFactory_1))
      return false;
    if (!equals(this.interceptorCoroutineContext_1, other.interceptorCoroutineContext_1))
      return false;
    if (!equals(this.fetcherCoroutineContext_1, other.fetcherCoroutineContext_1))
      return false;
    if (!equals(this.decoderCoroutineContext_1, other.decoderCoroutineContext_1))
      return false;
    if (!this.memoryCachePolicy_1.equals(other.memoryCachePolicy_1))
      return false;
    if (!this.diskCachePolicy_1.equals(other.diskCachePolicy_1))
      return false;
    if (!this.networkCachePolicy_1.equals(other.networkCachePolicy_1))
      return false;
    if (!equals(this.placeholderMemoryCacheKey_1, other.placeholderMemoryCacheKey_1))
      return false;
    if (!equals(this.placeholderFactory_1, other.placeholderFactory_1))
      return false;
    if (!equals(this.errorFactory_1, other.errorFactory_1))
      return false;
    if (!equals(this.fallbackFactory_1, other.fallbackFactory_1))
      return false;
    if (!equals(this.sizeResolver_1, other.sizeResolver_1))
      return false;
    if (!this.scale_1.equals(other.scale_1))
      return false;
    if (!this.precision_1.equals(other.precision_1))
      return false;
    if (!this.extras_1.equals(other.extras_1))
      return false;
    if (!this.defined_1.equals(other.defined_1))
      return false;
    if (!this.defaults_1.equals(other.defaults_1))
      return false;
    return true;
  };
  protoOf(ImageRequest).hashCode = function () {
    var result = hashCode(this.context_1);
    result = imul(result, 31) + hashCode(this.data_1) | 0;
    result = imul(result, 31) + (this.target_1 == null ? 0 : hashCode(this.target_1)) | 0;
    result = imul(result, 31) + (this.listener_1 == null ? 0 : hashCode(this.listener_1)) | 0;
    result = imul(result, 31) + (this.memoryCacheKey_1 == null ? 0 : getStringHashCode(this.memoryCacheKey_1)) | 0;
    result = imul(result, 31) + hashCode(this.memoryCacheKeyExtras_1) | 0;
    result = imul(result, 31) + (this.diskCacheKey_1 == null ? 0 : getStringHashCode(this.diskCacheKey_1)) | 0;
    result = imul(result, 31) + hashCode(this.fileSystem_1) | 0;
    result = imul(result, 31) + (this.fetcherFactory_1 == null ? 0 : this.fetcherFactory_1.hashCode()) | 0;
    result = imul(result, 31) + (this.decoderFactory_1 == null ? 0 : hashCode(this.decoderFactory_1)) | 0;
    result = imul(result, 31) + hashCode(this.interceptorCoroutineContext_1) | 0;
    result = imul(result, 31) + hashCode(this.fetcherCoroutineContext_1) | 0;
    result = imul(result, 31) + hashCode(this.decoderCoroutineContext_1) | 0;
    result = imul(result, 31) + this.memoryCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.diskCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.networkCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + (this.placeholderMemoryCacheKey_1 == null ? 0 : this.placeholderMemoryCacheKey_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.placeholderFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.errorFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.fallbackFactory_1) | 0;
    result = imul(result, 31) + hashCode(this.sizeResolver_1) | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    result = imul(result, 31) + this.precision_1.hashCode() | 0;
    result = imul(result, 31) + this.extras_1.hashCode() | 0;
    result = imul(result, 31) + this.defined_1.hashCode() | 0;
    result = imul(result, 31) + this.defaults_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageRequest).toString = function () {
    return 'ImageRequest(context=' + toString(this.context_1) + ', data=' + toString(this.data_1) + ', target=' + toString_0(this.target_1) + ', listener=' + toString_0(this.listener_1) + ', memoryCacheKey=' + this.memoryCacheKey_1 + ', memoryCacheKeyExtras=' + toString(this.memoryCacheKeyExtras_1) + ', diskCacheKey=' + this.diskCacheKey_1 + ', fileSystem=' + toString(this.fileSystem_1) + ', fetcherFactory=' + toString_0(this.fetcherFactory_1) + ', decoderFactory=' + toString_0(this.decoderFactory_1) + ', interceptorCoroutineContext=' + toString(this.interceptorCoroutineContext_1) + ', fetcherCoroutineContext=' + toString(this.fetcherCoroutineContext_1) + ', decoderCoroutineContext=' + toString(this.decoderCoroutineContext_1) + ', memoryCachePolicy=' + this.memoryCachePolicy_1.toString() + ', diskCachePolicy=' + this.diskCachePolicy_1.toString() + ', networkCachePolicy=' + this.networkCachePolicy_1.toString() + ', placeholderMemoryCacheKey=' + toString_0(this.placeholderMemoryCacheKey_1) + ', placeholderFactory=' + toString(this.placeholderFactory_1) + ', errorFactory=' + toString(this.errorFactory_1) + ', fallbackFactory=' + toString(this.fallbackFactory_1) + ', sizeResolver=' + toString(this.sizeResolver_1) + ', scale=' + this.scale_1.toString() + ', precision=' + this.precision_1.toString() + ', extras=' + this.extras_1.toString() + ', defined=' + this.defined_1.toString() + ', defaults=' + this.defaults_1.toString() + ')';
  };
  function ErrorResult(image, request, throwable) {
    this.image_1 = image;
    this.request_1 = request;
    this.throwable_1 = throwable;
  }
  protoOf(ErrorResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(ErrorResult).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(ErrorResult).get_throwable_c93gq1_k$ = function () {
    return this.throwable_1;
  };
  protoOf(ErrorResult).copy_rxvzvk_k$ = function (image, request, throwable) {
    return new ErrorResult(image, request, throwable);
  };
  protoOf(ErrorResult).copy$default_2to3z5_k$ = function (image, request, throwable, $super) {
    image = image === VOID ? this.image_1 : image;
    request = request === VOID ? this.request_1 : request;
    throwable = throwable === VOID ? this.throwable_1 : throwable;
    return $super === VOID ? this.copy_rxvzvk_k$(image, request, throwable) : $super.copy_rxvzvk_k$.call(this, image, request, throwable);
  };
  protoOf(ErrorResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ErrorResult))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!this.request_1.equals(other.request_1))
      return false;
    if (!equals(this.throwable_1, other.throwable_1))
      return false;
    return true;
  };
  protoOf(ErrorResult).hashCode = function () {
    var result = this.image_1 == null ? 0 : hashCode(this.image_1);
    result = imul(result, 31) + this.request_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.throwable_1) | 0;
    return result;
  };
  protoOf(ErrorResult).toString = function () {
    return 'ErrorResult(image=' + toString_0(this.image_1) + ', request=' + this.request_1.toString() + ', throwable=' + this.throwable_1.toString() + ')';
  };
  function SuccessResult(image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached) {
    dataSource = dataSource === VOID ? DataSource_MEMORY_getInstance() : dataSource;
    memoryCacheKey = memoryCacheKey === VOID ? null : memoryCacheKey;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    isSampled = isSampled === VOID ? false : isSampled;
    isPlaceholderCached = isPlaceholderCached === VOID ? false : isPlaceholderCached;
    this.image_1 = image;
    this.request_1 = request;
    this.dataSource_1 = dataSource;
    this.memoryCacheKey_1 = memoryCacheKey;
    this.diskCacheKey_1 = diskCacheKey;
    this.isSampled_1 = isSampled;
    this.isPlaceholderCached_1 = isPlaceholderCached;
  }
  protoOf(SuccessResult).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(SuccessResult).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(SuccessResult).get_dataSource_vce0e_k$ = function () {
    return this.dataSource_1;
  };
  protoOf(SuccessResult).get_memoryCacheKey_p17wyv_k$ = function () {
    return this.memoryCacheKey_1;
  };
  protoOf(SuccessResult).get_diskCacheKey_gvj33x_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(SuccessResult).get_isSampled_trm7d3_k$ = function () {
    return this.isSampled_1;
  };
  protoOf(SuccessResult).get_isPlaceholderCached_fjjhfi_k$ = function () {
    return this.isPlaceholderCached_1;
  };
  protoOf(SuccessResult).copy_yi1x11_k$ = function (image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached) {
    return new SuccessResult(image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached);
  };
  protoOf(SuccessResult).copy$default_wtbp3b_k$ = function (image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached, $super) {
    image = image === VOID ? this.image_1 : image;
    request = request === VOID ? this.request_1 : request;
    dataSource = dataSource === VOID ? this.dataSource_1 : dataSource;
    memoryCacheKey = memoryCacheKey === VOID ? this.memoryCacheKey_1 : memoryCacheKey;
    diskCacheKey = diskCacheKey === VOID ? this.diskCacheKey_1 : diskCacheKey;
    isSampled = isSampled === VOID ? this.isSampled_1 : isSampled;
    isPlaceholderCached = isPlaceholderCached === VOID ? this.isPlaceholderCached_1 : isPlaceholderCached;
    return $super === VOID ? this.copy_yi1x11_k$(image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached) : $super.copy_yi1x11_k$.call(this, image, request, dataSource, memoryCacheKey, diskCacheKey, isSampled, isPlaceholderCached);
  };
  protoOf(SuccessResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SuccessResult))
      return false;
    if (!equals(this.image_1, other.image_1))
      return false;
    if (!this.request_1.equals(other.request_1))
      return false;
    if (!this.dataSource_1.equals(other.dataSource_1))
      return false;
    if (!equals(this.memoryCacheKey_1, other.memoryCacheKey_1))
      return false;
    if (!(this.diskCacheKey_1 == other.diskCacheKey_1))
      return false;
    if (!(this.isSampled_1 === other.isSampled_1))
      return false;
    if (!(this.isPlaceholderCached_1 === other.isPlaceholderCached_1))
      return false;
    return true;
  };
  protoOf(SuccessResult).hashCode = function () {
    var result = hashCode(this.image_1);
    result = imul(result, 31) + this.request_1.hashCode() | 0;
    result = imul(result, 31) + this.dataSource_1.hashCode() | 0;
    result = imul(result, 31) + (this.memoryCacheKey_1 == null ? 0 : this.memoryCacheKey_1.hashCode()) | 0;
    result = imul(result, 31) + (this.diskCacheKey_1 == null ? 0 : getStringHashCode(this.diskCacheKey_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isSampled_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isPlaceholderCached_1) | 0;
    return result;
  };
  protoOf(SuccessResult).toString = function () {
    return 'SuccessResult(image=' + toString(this.image_1) + ', request=' + this.request_1.toString() + ', dataSource=' + this.dataSource_1.toString() + ', memoryCacheKey=' + toString_0(this.memoryCacheKey_1) + ', diskCacheKey=' + this.diskCacheKey_1 + ', isSampled=' + this.isSampled_1 + ', isPlaceholderCached=' + this.isPlaceholderCached_1 + ')';
  };
  function ImageResult() {
  }
  function NullRequestData() {
    NullRequestData_instance = this;
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
    if (NullRequestData_instance == null)
      new NullRequestData();
    return NullRequestData_instance;
  }
  function NullRequestDataException() {
    RuntimeException_init_$Init$("The request's data is null.", this);
    captureStack(this, NullRequestDataException);
  }
  function Options_0(context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras) {
    size = size === VOID ? Companion_getInstance_14().get_ORIGINAL_3y2d22_k$() : size;
    scale = scale === VOID ? Scale_FIT_getInstance() : scale;
    precision = precision === VOID ? Precision_EXACT_getInstance() : precision;
    diskCacheKey = diskCacheKey === VOID ? null : diskCacheKey;
    fileSystem = fileSystem === VOID ? defaultFileSystem() : fileSystem;
    memoryCachePolicy = memoryCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? CachePolicy_ENABLED_getInstance() : networkCachePolicy;
    extras = extras === VOID ? Companion_getInstance_7().get_EMPTY_i8q41w_k$() : extras;
    this.context_1 = context;
    this.size_1 = size;
    this.scale_1 = scale;
    this.precision_1 = precision;
    this.diskCacheKey_1 = diskCacheKey;
    this.fileSystem_1 = fileSystem;
    this.memoryCachePolicy_1 = memoryCachePolicy;
    this.diskCachePolicy_1 = diskCachePolicy;
    this.networkCachePolicy_1 = networkCachePolicy;
    this.extras_1 = extras;
  }
  protoOf(Options_0).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(Options_0).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(Options_0).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Options_0).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(Options_0).get_diskCacheKey_gvj33x_k$ = function () {
    return this.diskCacheKey_1;
  };
  protoOf(Options_0).get_fileSystem_9p6nv8_k$ = function () {
    return this.fileSystem_1;
  };
  protoOf(Options_0).get_memoryCachePolicy_xij562_k$ = function () {
    return this.memoryCachePolicy_1;
  };
  protoOf(Options_0).get_diskCachePolicy_b6aqha_k$ = function () {
    return this.diskCachePolicy_1;
  };
  protoOf(Options_0).get_networkCachePolicy_zd32gh_k$ = function () {
    return this.networkCachePolicy_1;
  };
  protoOf(Options_0).get_extras_d3bq0c_k$ = function () {
    return this.extras_1;
  };
  protoOf(Options_0).copy_8f403_k$ = function (context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras) {
    return new Options_0(context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras);
  };
  protoOf(Options_0).copy$default_xin1y4_k$ = function (context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras, $super) {
    context = context === VOID ? this.context_1 : context;
    size = size === VOID ? this.size_1 : size;
    scale = scale === VOID ? this.scale_1 : scale;
    precision = precision === VOID ? this.precision_1 : precision;
    diskCacheKey = diskCacheKey === VOID ? this.diskCacheKey_1 : diskCacheKey;
    fileSystem = fileSystem === VOID ? this.fileSystem_1 : fileSystem;
    memoryCachePolicy = memoryCachePolicy === VOID ? this.memoryCachePolicy_1 : memoryCachePolicy;
    diskCachePolicy = diskCachePolicy === VOID ? this.diskCachePolicy_1 : diskCachePolicy;
    networkCachePolicy = networkCachePolicy === VOID ? this.networkCachePolicy_1 : networkCachePolicy;
    extras = extras === VOID ? this.extras_1 : extras;
    return $super === VOID ? this.copy_8f403_k$(context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras) : $super.copy_8f403_k$.call(this, context, size, scale, precision, diskCacheKey, fileSystem, memoryCachePolicy, diskCachePolicy, networkCachePolicy, extras);
  };
  protoOf(Options_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Options_0))
      return false;
    if (!equals(this.context_1, other.context_1))
      return false;
    if (!this.size_1.equals(other.size_1))
      return false;
    if (!this.scale_1.equals(other.scale_1))
      return false;
    if (!this.precision_1.equals(other.precision_1))
      return false;
    if (!(this.diskCacheKey_1 == other.diskCacheKey_1))
      return false;
    if (!equals(this.fileSystem_1, other.fileSystem_1))
      return false;
    if (!this.memoryCachePolicy_1.equals(other.memoryCachePolicy_1))
      return false;
    if (!this.diskCachePolicy_1.equals(other.diskCachePolicy_1))
      return false;
    if (!this.networkCachePolicy_1.equals(other.networkCachePolicy_1))
      return false;
    if (!this.extras_1.equals(other.extras_1))
      return false;
    return true;
  };
  protoOf(Options_0).hashCode = function () {
    var result = hashCode(this.context_1);
    result = imul(result, 31) + this.size_1.hashCode() | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    result = imul(result, 31) + this.precision_1.hashCode() | 0;
    result = imul(result, 31) + (this.diskCacheKey_1 == null ? 0 : getStringHashCode(this.diskCacheKey_1)) | 0;
    result = imul(result, 31) + hashCode(this.fileSystem_1) | 0;
    result = imul(result, 31) + this.memoryCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.diskCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.networkCachePolicy_1.hashCode() | 0;
    result = imul(result, 31) + this.extras_1.hashCode() | 0;
    return result;
  };
  protoOf(Options_0).toString = function () {
    return 'Options(context=' + toString(this.context_1) + ', size=' + this.size_1.toString() + ', scale=' + this.scale_1.toString() + ', precision=' + this.precision_1.toString() + ', diskCacheKey=' + this.diskCacheKey_1 + ', fileSystem=' + toString(this.fileSystem_1) + ', memoryCachePolicy=' + this.memoryCachePolicy_1.toString() + ', diskCachePolicy=' + this.diskCachePolicy_1.toString() + ', networkCachePolicy=' + this.networkCachePolicy_1.toString() + ', extras=' + this.extras_1.toString() + ')';
  };
  function RequestDelegate() {
  }
  function _BaseRequestDelegate___init__impl__wreley(job) {
    return job;
  }
  function _get_job__e6b14k($this) {
    return $this;
  }
  function BaseRequestDelegate__dispose_impl_vosptd($this) {
    _get_job__e6b14k($this).cancel$default_8haxne_k$();
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
    var tmp0_other_with_cast = other instanceof BaseRequestDelegate ? other.job_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaseRequestDelegate(job) {
    this.job_1 = job;
  }
  protoOf(BaseRequestDelegate).dispose_3nnxhr_k$ = function () {
    return BaseRequestDelegate__dispose_impl_vosptd(this.job_1);
  };
  protoOf(BaseRequestDelegate).toString = function () {
    return BaseRequestDelegate__toString_impl_2jbf6m(this.job_1);
  };
  protoOf(BaseRequestDelegate).hashCode = function () {
    return BaseRequestDelegate__hashCode_impl_j7uhm9(this.job_1);
  };
  protoOf(BaseRequestDelegate).equals = function (other) {
    return BaseRequestDelegate__equals_impl_k3lysr(this.job_1, other);
  };
  function RequestService() {
  }
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
    if (!($this === (other instanceof Pixels ? other.px_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Pixels(px) {
    this.px_1 = px;
  }
  protoOf(Pixels).toString = function () {
    return Pixels__toString_impl_9ua830(this.px_1);
  };
  protoOf(Pixels).hashCode = function () {
    return Pixels__hashCode_impl_vlg4vv(this.px_1);
  };
  protoOf(Pixels).equals = function (other) {
    return Pixels__equals_impl_g64au9(this.px_1, other);
  };
  function Undefined() {
    Undefined_instance = this;
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
    if (Undefined_instance == null)
      new Undefined();
    return Undefined_instance;
  }
  function Dimension() {
  }
  function Dimension_0(px) {
    return _Pixels___init__impl__qgjjfw(px);
  }
  function pxOrElse(_this__u8e3s4, block) {
    var tmp;
    if (_this__u8e3s4 instanceof Pixels) {
      tmp = _Pixels___get_px__impl__uix9dv(_this__u8e3s4.px_1);
    } else {
      tmp = block();
    }
    return tmp;
  }
  var Precision_EXACT_instance;
  var Precision_INEXACT_instance;
  function values_1() {
    return [Precision_EXACT_getInstance(), Precision_INEXACT_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'EXACT':
        return Precision_EXACT_getInstance();
      case 'INEXACT':
        return Precision_INEXACT_getInstance();
      default:
        Precision_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Precision_entriesInitialized;
  function Precision_initEntries() {
    if (Precision_entriesInitialized)
      return Unit_getInstance();
    Precision_entriesInitialized = true;
    Precision_EXACT_instance = new Precision('EXACT', 0);
    Precision_INEXACT_instance = new Precision('INEXACT', 1);
  }
  var $ENTRIES_1;
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
  function _get_size__ddoh9m_0($this) {
    return $this.size_1;
  }
  function RealSizeResolver(size) {
    this.size_1 = size;
  }
  protoOf(RealSizeResolver).size_87lmu0_k$ = function ($completion) {
    return this.size_1;
  };
  protoOf(RealSizeResolver).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RealSizeResolver))
      return false;
    if (!this.size_1.equals(other.size_1))
      return false;
    return true;
  };
  protoOf(RealSizeResolver).hashCode = function () {
    return this.size_1.hashCode();
  };
  protoOf(RealSizeResolver).toString = function () {
    return 'RealSizeResolver(size=' + this.size_1.toString() + ')';
  };
  var Scale_FILL_instance;
  var Scale_FIT_instance;
  function values_2() {
    return [Scale_FILL_getInstance(), Scale_FIT_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'FILL':
        return Scale_FILL_getInstance();
      case 'FIT':
        return Scale_FIT_getInstance();
      default:
        Scale_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Scale_entriesInitialized;
  function Scale_initEntries() {
    if (Scale_entriesInitialized)
      return Unit_getInstance();
    Scale_entriesInitialized = true;
    Scale_FILL_instance = new Scale('FILL', 0);
    Scale_FIT_instance = new Scale('FIT', 1);
  }
  var $ENTRIES_2;
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
  function Companion_7() {
    Companion_instance_7 = this;
    this.ORIGINAL_1 = new Size(Undefined_getInstance(), Undefined_getInstance());
  }
  protoOf(Companion_7).get_ORIGINAL_3y2d22_k$ = function () {
    return this.ORIGINAL_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_14() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Size(width, height) {
    Companion_getInstance_14();
    this.width_1 = width;
    this.height_1 = height;
  }
  protoOf(Size).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(Size).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(Size).component1_7eebsc_k$ = function () {
    return this.width_1;
  };
  protoOf(Size).component2_7eebsb_k$ = function () {
    return this.height_1;
  };
  protoOf(Size).copy_c9s2kp_k$ = function (width, height) {
    return new Size(width, height);
  };
  protoOf(Size).copy$default_em3e1x_k$ = function (width, height, $super) {
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    return $super === VOID ? this.copy_c9s2kp_k$(width, height) : $super.copy_c9s2kp_k$.call(this, width, height);
  };
  protoOf(Size).toString = function () {
    return 'Size(width=' + toString(this.width_1) + ', height=' + toString(this.height_1) + ')';
  };
  protoOf(Size).hashCode = function () {
    var result = hashCode(this.width_1);
    result = imul(result, 31) + hashCode(this.height_1) | 0;
    return result;
  };
  protoOf(Size).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other : THROW_CCE();
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    return true;
  };
  function Size_0(width, height) {
    return new Size(new Pixels(Dimension_0(width)), new Pixels(Dimension_0(height)));
  }
  function get_isOriginal(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_14().ORIGINAL_1);
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.ORIGINAL_1 = SizeResolver_0(Companion_getInstance_14().get_ORIGINAL_3y2d22_k$());
  }
  protoOf(Companion_8).get_ORIGINAL_3y2d22_k$ = function () {
    return this.ORIGINAL_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_15() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function SizeResolver() {
  }
  function SizeResolver_0(size) {
    return new RealSizeResolver(size);
  }
  function Target() {
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _set_size__9twho6_0($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function recomputeSize($this) {
    // Inline function 'kotlin.collections.sumOf' call
    var this_0 = $this.map_1.get_entries_p20ztl_k$();
    var sum = new Long(0, 0);
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp = sum;
      // Inline function 'coil3.util.LruCache.recomputeSize.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      var tmp$ret$2 = safeSizeOf($this, key, value);
      sum = tmp.plus_r93sks_k$(tmp$ret$2);
    }
    return sum;
  }
  function safeSizeOf($this, key, value) {
    try {
      var size = $this.sizeOf_pwp2ab_k$(key, value);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(size.compareTo_9jj042_k$(new Long(0, 0)) >= 0)) {
        // Inline function 'coil3.util.LruCache.safeSizeOf.<anonymous>' call
        var message = 'sizeOf(' + toString(key) + ', ' + toString(value) + ') returned a negative value: ' + size.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return size;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        $this.size_1 = new Long(-1, -1);
        throw e;
      } else {
        throw $p;
      }
    }
  }
  function LruCache(maxSize) {
    this.maxSize_1 = maxSize;
    this.map_1 = LruMutableMap();
    this.size_1 = new Long(0, 0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.maxSize_1.compareTo_9jj042_k$(new Long(0, 0)) > 0)) {
      // Inline function 'coil3.util.LruCache.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(LruCache).get_maxSize_f83j4s_k$ = function () {
    return this.maxSize_1;
  };
  protoOf(LruCache).get_size_woubt6_k$ = function () {
    if (this.size_1.equals(new Long(-1, -1))) {
      this.size_1 = recomputeSize(this);
    }
    return this.size_1;
  };
  protoOf(LruCache).get_keys_wop4xp_k$ = function () {
    return toSet(this.map_1.get_keys_wop4xp_k$());
  };
  protoOf(LruCache).sizeOf_pwp2ab_k$ = function (key, value) {
    return new Long(1, 0);
  };
  protoOf(LruCache).entryRemoved_p3g81a_k$ = function (key, oldValue, newValue) {
  };
  protoOf(LruCache).put_fa630k_k$ = function (key, value) {
    var oldValue = this.map_1.put_4fpzoq_k$(key, value);
    this.size_1 = this.get_size_woubt6_k$().plus_r93sks_k$(safeSizeOf(this, key, value));
    if (!(oldValue == null)) {
      this.size_1 = this.get_size_woubt6_k$().minus_mfbszm_k$(safeSizeOf(this, key, oldValue));
      this.entryRemoved_p3g81a_k$(key, oldValue, value);
    }
    this.trimToSize_keb9c0_k$(this.maxSize_1);
    return oldValue;
  };
  protoOf(LruCache).get_h31hzz_k$ = function (key) {
    return this.map_1.get_wei43m_k$(key);
  };
  protoOf(LruCache).remove_1r2rzn_k$ = function (key) {
    var oldValue = this.map_1.remove_gppy8k_k$(key);
    if (!(oldValue == null)) {
      this.size_1 = this.get_size_woubt6_k$().minus_mfbszm_k$(safeSizeOf(this, key, oldValue));
      this.entryRemoved_p3g81a_k$(key, oldValue, null);
    }
    return oldValue;
  };
  protoOf(LruCache).trimToSize_keb9c0_k$ = function (size) {
    $l$loop: while (this.get_size_woubt6_k$().compareTo_9jj042_k$(size) > 0) {
      if (this.map_1.isEmpty_y1axqb_k$()) {
        if (!this.get_size_woubt6_k$().equals(new Long(0, 0))) {
          // Inline function 'kotlin.error' call
          var message = 'sizeOf() is returning inconsistent values';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        break $l$loop;
      }
      var _destruct__k2r9zo = first(this.map_1.get_entries_p20ztl_k$());
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.get_value_j01efc_k$();
      this.map_1.remove_gppy8k_k$(key);
      this.size_1 = this.get_size_woubt6_k$().minus_mfbszm_k$(safeSizeOf(this, key, value));
      this.entryRemoved_p3g81a_k$(key, value, null);
    }
  };
  protoOf(LruCache).clear_j9egeb_k$ = function () {
    this.trimToSize_keb9c0_k$(new Long(-1, -1));
  };
  function FetcherServiceLoaderTarget() {
  }
  function DecoderServiceLoaderTarget() {
  }
  function SystemCallbacks() {
  }
  function firstNotNullOfOrNullIndices(_this__u8e3s4, transform) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_safe_receiver = transform(_this__u8e3s4.get_c1px32_k$(i));
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          return tmp0_safe_receiver;
        }
      }
       while (inductionVariable <= last);
    return null;
  }
  function removeIfIndices(_this__u8e3s4, predicate) {
    var numDeleted = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var rawIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var index = rawIndex - numDeleted | 0;
        if (predicate(_this__u8e3s4.get_c1px32_k$(index))) {
          _this__u8e3s4.removeAt_6niowx_k$(index);
          numDeleted = numDeleted + 1 | 0;
        }
      }
       while (inductionVariable <= last);
  }
  function flatMapIndices(_this__u8e3s4, transform) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var elements = transform(_this__u8e3s4.get_c1px32_k$(i));
        addAll(destination, elements);
      }
       while (inductionVariable <= last);
    return destination;
  }
  function forEachIndices(_this__u8e3s4, action) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        action(_this__u8e3s4.get_c1px32_k$(i));
      }
       while (inductionVariable <= last);
  }
  function mapNotNullIndices(_this__u8e3s4, transform) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value = transform(_this__u8e3s4.get_c1px32_k$(i));
        if (!(value == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          destination.add_utx5q5_k$(value);
        }
      }
       while (inductionVariable <= last);
    return destination;
  }
  function _IntPair___init__impl__vp9xsg(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _IntPair___init__impl__vp9xsg_0(first, second) {
    return _IntPair___init__impl__vp9xsg(toLong(first).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(second).and_4spn93_k$(new Long(-1, 0))));
  }
  function _IntPair___get_first__impl__dvuucb($this) {
    return _get_value__a43j40($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function _IntPair___get_second__impl__vrxpzp($this) {
    return _get_value__a43j40($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function IntPair__toString_impl_r62p2g($this) {
    return 'IntPair(value=' + $this.toString() + ')';
  }
  function IntPair__hashCode_impl_m3vg3t($this) {
    return $this.hashCode();
  }
  function IntPair__equals_impl_gta9sr($this, other) {
    if (!(other instanceof IntPair))
      return false;
    var tmp0_other_with_cast = other instanceof IntPair ? other.value_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntPair(value) {
    this.value_1 = value;
  }
  protoOf(IntPair).toString = function () {
    return IntPair__toString_impl_r62p2g(this.value_1);
  };
  protoOf(IntPair).hashCode = function () {
    return IntPair__hashCode_impl_m3vg3t(this.value_1);
  };
  protoOf(IntPair).equals = function (other) {
    return IntPair__equals_impl_gta9sr(this.value_1, other);
  };
  function component1(_this__u8e3s4) {
    return _IntPair___get_first__impl__dvuucb(_this__u8e3s4);
  }
  function component2(_this__u8e3s4) {
    return _IntPair___get_second__impl__vrxpzp(_this__u8e3s4);
  }
  function get_extension(_this__u8e3s4) {
    return substringAfterLast(_this__u8e3s4.get_name_woqyms_k$(), _Char___init__impl__6a9atx(46), '');
  }
  function createFile(_this__u8e3s4, file, mustCreate) {
    mustCreate = mustCreate === VOID ? false : mustCreate;
    if (mustCreate) {
      closeQuietly_0(_this__u8e3s4.sink_3ey1xj_k$(file, true));
    } else if (!_this__u8e3s4.exists_gjgzpn_k$(file)) {
      closeQuietly_0(_this__u8e3s4.sink$default_shv2w8_k$(file));
    }
  }
  function deleteContents(_this__u8e3s4, directory) {
    var exception = null;
    var tmp;
    try {
      tmp = _this__u8e3s4.list_tub7t9_k$(directory);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof FileNotFoundException) {
        var _unused_var__etf5q3 = $p;
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    var files = tmp;
    var _iterator__ex2g4s = files.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var file = _iterator__ex2g4s.next_20eer_k$();
      try {
        if (_this__u8e3s4.metadata_r9b8qq_k$(file).get_isDirectory_hgpbzu_k$()) {
          deleteContents(_this__u8e3s4, file);
        }
        _this__u8e3s4.delete$default_1zkyi8_k$(file);
      } catch ($p) {
        if ($p instanceof IOException) {
          var e = $p;
          if (exception == null) {
            exception = e;
          }
        } else {
          throw $p;
        }
      }
    }
    if (!(exception == null)) {
      throw exception;
    }
  }
  function createTempFile(_this__u8e3s4) {
    var tempFile;
    do {
      tempFile = Companion_getInstance_1().get_SYSTEM_TEMPORARY_DIRECTORY_j2u020_k$().div_thrqyx_k$('tmp_' + new ULong(nextULong(Default_getInstance())));
    }
     while (_this__u8e3s4.exists_gjgzpn_k$(tempFile));
    createFile(_this__u8e3s4, tempFile, true);
    return tempFile;
  }
  var Level_Verbose_instance;
  var Level_Debug_instance;
  var Level_Info_instance;
  var Level_Warn_instance;
  var Level_Error_instance;
  function values_3() {
    return [Level_Verbose_getInstance(), Level_Debug_getInstance(), Level_Info_getInstance(), Level_Warn_getInstance(), Level_Error_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Verbose':
        return Level_Verbose_getInstance();
      case 'Debug':
        return Level_Debug_getInstance();
      case 'Info':
        return Level_Info_getInstance();
      case 'Warn':
        return Level_Warn_getInstance();
      case 'Error':
        return Level_Error_getInstance();
      default:
        Level_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_Verbose_instance = new Level('Verbose', 0);
    Level_Debug_instance = new Level('Debug', 1);
    Level_Info_instance = new Level('Info', 2);
    Level_Warn_instance = new Level('Warn', 3);
    Level_Error_instance = new Level('Error', 4);
  }
  var $ENTRIES_3;
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Level_Verbose_getInstance() {
    Level_initEntries();
    return Level_Verbose_instance;
  }
  function Level_Debug_getInstance() {
    Level_initEntries();
    return Level_Debug_instance;
  }
  function Level_Info_getInstance() {
    Level_initEntries();
    return Level_Info_instance;
  }
  function Level_Warn_getInstance() {
    Level_initEntries();
    return Level_Warn_instance;
  }
  function Level_Error_getInstance() {
    Level_initEntries();
    return Level_Error_instance;
  }
  function Logger() {
  }
  function log(_this__u8e3s4, tag, level, message) {
    if (_this__u8e3s4.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(level) <= 0) {
      _this__u8e3s4.log_m12gkb_k$(tag, level, message(), null);
    }
  }
  function log_0(_this__u8e3s4, tag, throwable, message) {
    if (_this__u8e3s4.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(Level_Error_getInstance()) <= 0) {
      _this__u8e3s4.log_m12gkb_k$(tag, Level_Error_getInstance(), message(), throwable);
    }
  }
  function log_1(_this__u8e3s4, tag, throwable) {
    if (_this__u8e3s4.get_minLevel_gaxw63_k$().compareTo_30rs7w_k$(Level_Error_getInstance()) <= 0) {
      _this__u8e3s4.log_m12gkb_k$(tag, Level_Error_getInstance(), null, throwable);
    }
  }
  function get_mimeTypeData() {
    _init_properties_mimeTypes_kt__qozbkj();
    return mimeTypeData;
  }
  var mimeTypeData;
  function MimeTypeMap() {
    MimeTypeMap_instance = this;
  }
  protoOf(MimeTypeMap).getMimeTypeFromUrl_c4ea6x_k$ = function (url) {
    if (isBlank(url)) {
      return null;
    }
    var extension = substringAfterLast(substringAfterLast(substringBeforeLast(substringBeforeLast(url, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63)), _Char___init__impl__6a9atx(47)), _Char___init__impl__6a9atx(46), '');
    return this.getMimeTypeFromExtension_gym021_k$(extension);
  };
  protoOf(MimeTypeMap).getMimeTypeFromExtension_gym021_k$ = function (extension) {
    if (isBlank(extension)) {
      return null;
    }
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var lowerExtension = extension.toLowerCase();
    var tmp0_elvis_lhs = get_mimeTypeData().get_wei43m_k$(lowerExtension);
    return tmp0_elvis_lhs == null ? extensionFromMimeTypeMap(lowerExtension) : tmp0_elvis_lhs;
  };
  var MimeTypeMap_instance;
  function MimeTypeMap_getInstance() {
    if (MimeTypeMap_instance == null)
      new MimeTypeMap();
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
      this_0.put_4fpzoq_k$('bin', 'application/octet-stream');
      this_0.put_4fpzoq_k$('gz', 'application/gzip');
      this_0.put_4fpzoq_k$('json', 'application/json');
      this_0.put_4fpzoq_k$('pdf', 'application/pdf');
      this_0.put_4fpzoq_k$('yaml', 'application/yaml');
      this_0.put_4fpzoq_k$('avif', 'image/avif');
      this_0.put_4fpzoq_k$('avifs', 'image/avif');
      this_0.put_4fpzoq_k$('bmp', 'image/bmp');
      this_0.put_4fpzoq_k$('cgm', 'image/cgm');
      this_0.put_4fpzoq_k$('g3', 'image/g3fax');
      this_0.put_4fpzoq_k$('gif', 'image/gif');
      this_0.put_4fpzoq_k$('heif', 'image/heic');
      this_0.put_4fpzoq_k$('heic', 'image/heic');
      this_0.put_4fpzoq_k$('ief', 'image/ief');
      this_0.put_4fpzoq_k$('jpe', 'image/jpeg');
      this_0.put_4fpzoq_k$('jpeg', 'image/jpeg');
      this_0.put_4fpzoq_k$('jpg', 'image/jpeg');
      this_0.put_4fpzoq_k$('pjpg', 'image/jpeg');
      this_0.put_4fpzoq_k$('jfif', 'image/jpeg');
      this_0.put_4fpzoq_k$('jfif-tbnl', 'image/jpeg');
      this_0.put_4fpzoq_k$('jif', 'image/jpeg');
      this_0.put_4fpzoq_k$('png', 'image/png');
      this_0.put_4fpzoq_k$('btif', 'image/prs.btif');
      this_0.put_4fpzoq_k$('svg', 'image/svg+xml');
      this_0.put_4fpzoq_k$('svgz', 'image/svg+xml');
      this_0.put_4fpzoq_k$('tif', 'image/tiff');
      this_0.put_4fpzoq_k$('tiff', 'image/tiff');
      this_0.put_4fpzoq_k$('psd', 'image/vnd.adobe.photoshop');
      this_0.put_4fpzoq_k$('djv', 'image/vnd.djvu');
      this_0.put_4fpzoq_k$('djvu', 'image/vnd.djvu');
      this_0.put_4fpzoq_k$('dwg', 'image/vnd.dwg');
      this_0.put_4fpzoq_k$('dxf', 'image/vnd.dxf');
      this_0.put_4fpzoq_k$('fbs', 'image/vnd.fastbidsheet');
      this_0.put_4fpzoq_k$('fpx', 'image/vnd.fpx');
      this_0.put_4fpzoq_k$('fst', 'image/vnd.fst');
      this_0.put_4fpzoq_k$('mmr', 'image/vnd.fujixerox.edmics-mmr');
      this_0.put_4fpzoq_k$('rlc', 'image/vnd.fujixerox.edmics-rlc');
      this_0.put_4fpzoq_k$('mdi', 'image/vnd.ms-modi');
      this_0.put_4fpzoq_k$('npx', 'image/vnd.net-fpx');
      this_0.put_4fpzoq_k$('wbmp', 'image/vnd.wap.wbmp');
      this_0.put_4fpzoq_k$('xif', 'image/vnd.xiff');
      this_0.put_4fpzoq_k$('webp', 'image/webp');
      this_0.put_4fpzoq_k$('dng', 'image/x-adobe-dng');
      this_0.put_4fpzoq_k$('cr2', 'image/x-canon-cr2');
      this_0.put_4fpzoq_k$('crw', 'image/x-canon-crw');
      this_0.put_4fpzoq_k$('ras', 'image/x-cmu-raster');
      this_0.put_4fpzoq_k$('cmx', 'image/x-cmx');
      this_0.put_4fpzoq_k$('erf', 'image/x-epson-erf');
      this_0.put_4fpzoq_k$('fh', 'image/x-freehand');
      this_0.put_4fpzoq_k$('fh4', 'image/x-freehand');
      this_0.put_4fpzoq_k$('fh5', 'image/x-freehand');
      this_0.put_4fpzoq_k$('fh7', 'image/x-freehand');
      this_0.put_4fpzoq_k$('fhc', 'image/x-freehand');
      this_0.put_4fpzoq_k$('raf', 'image/x-fuji-raf');
      this_0.put_4fpzoq_k$('icns', 'image/x-icns');
      this_0.put_4fpzoq_k$('ico', 'image/x-icon');
      this_0.put_4fpzoq_k$('dcr', 'image/x-kodak-dcr');
      this_0.put_4fpzoq_k$('k25', 'image/x-kodak-k25');
      this_0.put_4fpzoq_k$('kdc', 'image/x-kodak-kdc');
      this_0.put_4fpzoq_k$('mrw', 'image/x-minolta-mrw');
      this_0.put_4fpzoq_k$('nef', 'image/x-nikon-nef');
      this_0.put_4fpzoq_k$('orf', 'image/x-olympus-orf');
      this_0.put_4fpzoq_k$('raw', 'image/x-panasonic-raw');
      this_0.put_4fpzoq_k$('rw2', 'image/x-panasonic-raw');
      this_0.put_4fpzoq_k$('rwl', 'image/x-panasonic-raw');
      this_0.put_4fpzoq_k$('pcx', 'image/x-pcx');
      this_0.put_4fpzoq_k$('pef', 'image/x-pentax-pef');
      this_0.put_4fpzoq_k$('ptx', 'image/x-pentax-pef');
      this_0.put_4fpzoq_k$('pct', 'image/x-pict');
      this_0.put_4fpzoq_k$('pic', 'image/x-pict');
      this_0.put_4fpzoq_k$('pnm', 'image/x-portable-anymap');
      this_0.put_4fpzoq_k$('pbm', 'image/x-portable-bitmap');
      this_0.put_4fpzoq_k$('pgm', 'image/x-portable-graymap');
      this_0.put_4fpzoq_k$('ppm', 'image/x-portable-pixmap');
      this_0.put_4fpzoq_k$('rgb', 'image/x-rgb');
      this_0.put_4fpzoq_k$('x3f', 'image/x-sigma-x3f');
      this_0.put_4fpzoq_k$('arw', 'image/x-sony-arw');
      this_0.put_4fpzoq_k$('sr2', 'image/x-sony-sr2');
      this_0.put_4fpzoq_k$('srf', 'image/x-sony-srf');
      this_0.put_4fpzoq_k$('xbm', 'image/x-xbitmap');
      this_0.put_4fpzoq_k$('xpm', 'image/x-xpixmap');
      this_0.put_4fpzoq_k$('xwd', 'image/x-xwindowdump');
      this_0.put_4fpzoq_k$('css', 'text/css');
      this_0.put_4fpzoq_k$('csv', 'text/csv');
      this_0.put_4fpzoq_k$('htm', 'text/html');
      this_0.put_4fpzoq_k$('html', 'text/html');
      this_0.put_4fpzoq_k$('ics', 'text/calendar');
      this_0.put_4fpzoq_k$('js', 'text/javascript');
      this_0.put_4fpzoq_k$('mjs', 'text/javascript');
      this_0.put_4fpzoq_k$('md', 'text/markdown');
      this_0.put_4fpzoq_k$('txt', 'text/plain');
      this_0.put_4fpzoq_k$('xml', 'text/xml');
      this_0.put_4fpzoq_k$('3gp', 'video/3gpp');
      this_0.put_4fpzoq_k$('3g2', 'video/3gpp2');
      this_0.put_4fpzoq_k$('h261', 'video/h261');
      this_0.put_4fpzoq_k$('h263', 'video/h263');
      this_0.put_4fpzoq_k$('h264', 'video/h264');
      this_0.put_4fpzoq_k$('jpgv', 'video/jpeg');
      this_0.put_4fpzoq_k$('jpgm', 'video/jpm');
      this_0.put_4fpzoq_k$('jpm', 'video/jpm');
      this_0.put_4fpzoq_k$('mj2', 'video/mj2');
      this_0.put_4fpzoq_k$('mjp2', 'video/mj2');
      this_0.put_4fpzoq_k$('ts', 'video/mp2t');
      this_0.put_4fpzoq_k$('mp4', 'video/mp4');
      this_0.put_4fpzoq_k$('mp4v', 'video/mp4');
      this_0.put_4fpzoq_k$('mpg4', 'video/mp4');
      this_0.put_4fpzoq_k$('m1v', 'video/mpeg');
      this_0.put_4fpzoq_k$('m2v', 'video/mpeg');
      this_0.put_4fpzoq_k$('mpa', 'video/mpeg');
      this_0.put_4fpzoq_k$('mpe', 'video/mpeg');
      this_0.put_4fpzoq_k$('mpeg', 'video/mpeg');
      this_0.put_4fpzoq_k$('mpg', 'video/mpeg');
      this_0.put_4fpzoq_k$('ogv', 'video/ogg');
      this_0.put_4fpzoq_k$('mov', 'video/quicktime');
      this_0.put_4fpzoq_k$('qt', 'video/quicktime');
      this_0.put_4fpzoq_k$('fvt', 'video/vnd.fvt');
      this_0.put_4fpzoq_k$('m4u', 'video/vnd.mpegurl');
      this_0.put_4fpzoq_k$('mxu', 'video/vnd.mpegurl');
      this_0.put_4fpzoq_k$('pyv', 'video/vnd.ms-playready.media.pyv');
      this_0.put_4fpzoq_k$('viv', 'video/vnd.vivo');
      this_0.put_4fpzoq_k$('webm', 'video/webm');
      this_0.put_4fpzoq_k$('f4v', 'video/x-f4v');
      this_0.put_4fpzoq_k$('fli', 'video/x-fli');
      this_0.put_4fpzoq_k$('flv', 'video/x-flv');
      this_0.put_4fpzoq_k$('m4v', 'video/x-m4v');
      this_0.put_4fpzoq_k$('mkv', 'video/x-matroska');
      this_0.put_4fpzoq_k$('asf', 'video/x-ms-asf');
      this_0.put_4fpzoq_k$('asx', 'video/x-ms-asf');
      this_0.put_4fpzoq_k$('wm', 'video/x-ms-wm');
      this_0.put_4fpzoq_k$('wmv', 'video/x-ms-wmv');
      this_0.put_4fpzoq_k$('wmx', 'video/x-ms-wmx');
      this_0.put_4fpzoq_k$('wvx', 'video/x-ms-wvx');
      this_0.put_4fpzoq_k$('avi', 'video/x-msvideo');
      this_0.put_4fpzoq_k$('movie', 'video/x-sgi-movie');
      mimeTypeData = this_0.build_nmwvly_k$();
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
      var tmp0_elvis_lhs = request.fallback_cl834y_k$();
      tmp = tmp0_elvis_lhs == null ? request.error_1lmfpk_k$() : tmp0_elvis_lhs;
    } else {
      tmp = request.error_1lmfpk_k$();
    }
    return new ErrorResult(tmp, request, throwable);
  }
  function get_emoji(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
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
      _this__u8e3s4.close_yn9xrc_k$();
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
      tmp = _this__u8e3s4.get_eventListener_aiqsaj_k$();
    } else {
      tmp = Companion_getInstance_17().get_NONE_wo64xt_k$();
    }
    return tmp;
  }
  function get_isPlaceholderCached(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    var tmp;
    if (_this__u8e3s4 instanceof RealInterceptorChain) {
      tmp = _this__u8e3s4.get_isPlaceholderCached_fjjhfi_k$();
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
      var tmp = _this__u8e3s4.get_lazyDecoderFactories_pxqaiq_k$();
      tmp.add_dl6gt3_k$(0, addFirst$lambda(factory));
    }
    return _this__u8e3s4;
  }
  function addFirst_0(_this__u8e3s4, pair) {
    _init_properties_utils_kt__i7zv1b();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.util.addFirst.<anonymous>' call
    if (!(pair == null)) {
      var tmp = _this__u8e3s4.get_lazyFetcherFactories_4y7ji9_k$();
      tmp.add_dl6gt3_k$(0, addFirst$lambda_0(pair));
    }
    return _this__u8e3s4;
  }
  function isFileUri(uri) {
    _init_properties_utils_kt__i7zv1b();
    return (uri.get_scheme_je6tv2_k$() == null || uri.get_scheme_je6tv2_k$() === 'file') && !(uri.get_path_wos8ry_k$() == null) && !isAssetUri(uri);
  }
  function closeQuietly_0(_this__u8e3s4) {
    _init_properties_utils_kt__i7zv1b();
    try {
      _this__u8e3s4.close_yn9xrc_k$();
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
    return Dispatchers_getInstance().get_Default_goqax4_k$();
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
  protoOf(ThrowingFileSystem).atomicMove_mzx74k_k$ = function (source, target) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).canonicalize_53uxip_k$ = function (path) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).createDirectory_k91ghh_k$ = function (dir, mustCreate) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).createSymlink_sty0ad_k$ = function (source, target) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).delete_jmjgr3_k$ = function (path, mustExist) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).list_tub7t9_k$ = function (dir) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).listOrNull_no1pe1_k$ = function (dir) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).metadataOrNull_qcjrxk_k$ = function (path) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).openReadOnly_doqud7_k$ = function (file) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).openReadWrite_e9zqsu_k$ = function (file, mustCreate, mustExist) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).sink_3ey1xj_k$ = function (file, mustCreate) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).appendingSink_3y8l4f_k$ = function (file, mustExist) {
    throwReadWriteIsUnsupported(this);
  };
  protoOf(ThrowingFileSystem).source_11bfje_k$ = function (file) {
    throwReadWriteIsUnsupported(this);
  };
  var ThrowingFileSystem_instance;
  function ThrowingFileSystem_getInstance() {
    if (ThrowingFileSystem_instance == null)
      new ThrowingFileSystem();
    return ThrowingFileSystem_instance;
  }
  function _set_reference__s0wb3a($this, _set____db54di) {
    $this.reference_1 = _set____db54di;
  }
  function _get_reference__19y5ba($this) {
    return $this.reference_1;
  }
  function WeakReference(referred) {
    this.reference_1 = new WeakRef(referred);
  }
  protoOf(WeakReference).get_26vq_k$ = function () {
    var tmp0_safe_receiver = this.reference_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
  };
  protoOf(WeakReference).clear_j9egeb_k$ = function () {
    this.reference_1 = null;
  };
  function sam$coil3_EventListener_Factory$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$coil3_EventListener_Factory$0_0).create_hjtfdt_k$ = function (request) {
    return this.function_1(request);
  };
  protoOf(sam$coil3_EventListener_Factory$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$coil3_EventListener_Factory$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Factory_3) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$coil3_EventListener_Factory$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function EventListener$Factory$Companion$NONE$lambda(it) {
    return Companion_getInstance_17().NONE_1;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = EventListener$Factory$Companion$NONE$lambda;
    tmp.NONE_1 = new sam$coil3_EventListener_Factory$0_0(tmp_0);
  }
  protoOf(Companion_9).get_NONE_wo64xt_k$ = function () {
    return this.NONE_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_16() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function EventListener$Companion$NONE$1() {
    EventListener.call(this);
  }
  function Factory_3() {
  }
  function Companion_10() {
    Companion_instance_10 = this;
    var tmp = this;
    tmp.NONE_1 = new EventListener$Companion$NONE$1();
  }
  protoOf(Companion_10).get_NONE_wo64xt_k$ = function () {
    return this.NONE_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_17() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function EventListener() {
    Companion_getInstance_17();
  }
  protoOf(EventListener).onStart_xloqp4_k$ = function (request) {
  };
  protoOf(EventListener).resolveSizeStart_yxrj9q_k$ = function (request, sizeResolver) {
  };
  protoOf(EventListener).resolveSizeEnd_jx58md_k$ = function (request, size) {
  };
  protoOf(EventListener).mapStart_5dkugz_k$ = function (request, input) {
  };
  protoOf(EventListener).mapEnd_wbcdey_k$ = function (request, output) {
  };
  protoOf(EventListener).keyStart_wgry0q_k$ = function (request, input) {
  };
  protoOf(EventListener).keyEnd_1jnney_k$ = function (request, output) {
  };
  protoOf(EventListener).fetchStart_7bf573_k$ = function (request, fetcher, options) {
  };
  protoOf(EventListener).fetchEnd_zbqlxi_k$ = function (request, fetcher, options, result) {
  };
  protoOf(EventListener).decodeStart_si0v68_k$ = function (request, decoder, options) {
  };
  protoOf(EventListener).decodeEnd_17f199_k$ = function (request, decoder, options, result) {
  };
  protoOf(EventListener).onCancel_r6pvsi_k$ = function (request) {
  };
  protoOf(EventListener).onError_bveiqq_k$ = function (request, result) {
  };
  protoOf(EventListener).onSuccess_uq0ty0_k$ = function (request, result) {
  };
  function BitmapImage(bitmap, shareable) {
    this.bitmap_1 = bitmap;
    this.shareable_1 = shareable;
  }
  protoOf(BitmapImage).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  protoOf(BitmapImage).get_shareable_hn5jao_k$ = function () {
    return this.shareable_1;
  };
  protoOf(BitmapImage).get_size_woubt6_k$ = function () {
    var size = toLong(this.bitmap_1.get_imageInfo_60i77k_k$().computeMinByteSize_33guu4_k$());
    if (size.compareTo_9jj042_k$(new Long(0, 0)) <= 0) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(4, 0);
      var other = this.bitmap_1.get_width_j0q4yl_k$();
      var this_1 = this_0.times_nfzjiw_k$(toLong(other));
      var other_0 = this.bitmap_1.get_height_e7t92o_k$();
      size = this_1.times_nfzjiw_k$(toLong(other_0));
    }
    return coerceAtLeast_0(size, new Long(0, 0));
  };
  protoOf(BitmapImage).get_width_j0q4yl_k$ = function () {
    return this.bitmap_1.get_width_j0q4yl_k$();
  };
  protoOf(BitmapImage).get_height_e7t92o_k$ = function () {
    return this.bitmap_1.get_height_e7t92o_k$();
  };
  protoOf(BitmapImage).draw_uyhr5d_k$ = function (canvas) {
    canvas.writePixels_ddrjz1_k$(this.bitmap_1, 0, 0);
  };
  protoOf(BitmapImage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapImage))
      return false;
    if (!this.bitmap_1.equals(other.bitmap_1))
      return false;
    if (!(this.shareable_1 === other.shareable_1))
      return false;
    return true;
  };
  protoOf(BitmapImage).hashCode = function () {
    var result = this.bitmap_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.shareable_1) | 0;
    return result;
  };
  protoOf(BitmapImage).toString = function () {
    return 'BitmapImage(bitmap=' + this.bitmap_1.toString() + ', shareable=' + this.shareable_1 + ')';
  };
  function asImage(_this__u8e3s4, shareable) {
    shareable = shareable === VOID ? true : shareable;
    return new BitmapImage(_this__u8e3s4, shareable);
  }
  function toBitmap(_this__u8e3s4, width, height) {
    width = width === VOID ? _this__u8e3s4.get_width_j0q4yl_k$() : width;
    height = height === VOID ? _this__u8e3s4.get_height_e7t92o_k$() : height;
    var colorType;
    var colorAlphaType;
    var colorSpace;
    if (_this__u8e3s4 instanceof BitmapImage) {
      colorType = _this__u8e3s4.bitmap_1.get_colorType_tr6rn0_k$();
      colorAlphaType = _this__u8e3s4.bitmap_1.get_imageInfo_60i77k_k$().get_colorAlphaType_aqfov2_k$();
      colorSpace = _this__u8e3s4.bitmap_1.get_colorSpace_yx2b0_k$();
    } else {
      colorType = Companion_getInstance_2().get_N32_18jozg_k$();
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
      tmp_3 = _this__u8e3s4.bitmap_1.get_width_j0q4yl_k$() === width;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = _this__u8e3s4.bitmap_1.get_height_e7t92o_k$() === height;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = _this__u8e3s4.bitmap_1.get_colorType_tr6rn0_k$().equals(colorType);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.bitmap_1.get_imageInfo_60i77k_k$().get_colorAlphaType_aqfov2_k$().equals(colorAlphaType);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(_this__u8e3s4.bitmap_1.get_colorSpace_yx2b0_k$(), colorSpace);
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4.bitmap_1;
    }
    var bitmap = Bitmap_init_$Create$();
    var imageInfo = new ImageInfo(new ColorInfo(colorType, colorAlphaType, colorSpace), width, height);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!bitmap.allocPixels_elr7wo_k$(imageInfo)) {
      // Inline function 'coil3.toBitmap.<anonymous>' call
      var message = 'allocPixels(' + imageInfo.toString() + ') failed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.apply' call
    var this_0 = Canvas_init_$Create$(bitmap);
    // Inline function 'kotlin.contracts.contract' call
    _this__u8e3s4.draw_uyhr5d_k$(this_0);
    var canvas = this_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!canvas.readPixels_yiqj5g_k$(bitmap, 0, 0)) {
      // Inline function 'coil3.toBitmap.<anonymous>' call
      var message_0 = 'readPixels(' + bitmap.toString() + ') failed';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return bitmap;
  }
  function PlatformContext$Companion$INSTANCE$1() {
    PlatformContext.call(this);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    tmp.INSTANCE_1 = new PlatformContext$Companion$INSTANCE$1();
  }
  protoOf(Companion_11).get_INSTANCE_9oh0gy_k$ = function () {
    return this.INSTANCE_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_18() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function PlatformContext() {
    Companion_getInstance_18();
  }
  function addAndroidComponents(_this__u8e3s4, options) {
    return _this__u8e3s4.add_5btad7_k$(new Factory_4());
  }
  function getDisposable(request, job) {
    return new OneShotDisposable(job);
  }
  function needsExecuteOnMainDispatcher(request) {
    return false;
  }
  function transition(result, target, eventListener, setDrawable) {
    return setDrawable();
  }
  function _get_source__4cuw5s_1($this) {
    return $this.source_1;
  }
  function _get_options__xuq71v_1($this) {
    return $this.options_1;
  }
  function Factory_4() {
  }
  protoOf(Factory_4).create_o1e21o_k$ = function (result, options, imageLoader) {
    return new SkiaImageDecoder(result.get_source_jl0x7o_k$(), options);
  };
  function SkiaImageDecoder(source, options) {
    this.source_1 = source;
    this.options_1 = options;
  }
  protoOf(SkiaImageDecoder).decode_269qa0_k$ = function ($completion) {
    // Inline function 'okio.use' call
    var this_0 = this.source_1.source_etr8bp_k$();
    var thrown = null;
    var tmp;
    try {
      // Inline function 'coil3.decode.SkiaImageDecoder.decode.<anonymous>' call
      tmp = this_0.readByteArray_52wnjv_k$();
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
          this_0.close_yn9xrc_k$();
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
    var image = Companion_getInstance_3().makeFromEncoded_99p5hy_k$(bytes);
    var isSampled;
    var bitmap;
    try {
      bitmap = makeFromImage(Companion_getInstance_4(), image, this.options_1);
      bitmap.setImmutable_j5sn28_k$();
      isSampled = bitmap.get_width_j0q4yl_k$() < image.get_width_j0q4yl_k$() || bitmap.get_height_e7t92o_k$() < image.get_height_e7t92o_k$();
    }finally {
      image.close_yn9xrc_k$();
    }
    return new DecodeResult(asImage(bitmap), isSampled);
  };
  protoOf(SkiaImageDecoder).decode_s6ntzj_k$ = function ($completion) {
    return this.decode_269qa0_k$($completion);
  };
  function transform(result, request, options, eventListener, logger, $completion) {
    return result;
  }
  function needsSizeInCacheKey(_this__u8e3s4) {
    return false;
  }
  function RequestService_0(imageLoader, systemCallbacks, logger) {
    return new NonAndroidRequestService(imageLoader);
  }
  function _get_imageLoader__s7mz25_1($this) {
    return $this.imageLoader_1;
  }
  function NonAndroidRequestService(imageLoader) {
    this.imageLoader_1 = imageLoader;
  }
  protoOf(NonAndroidRequestService).requestDelegate_cfrpmr_k$ = function (request, job, findLifecycle) {
    return new BaseRequestDelegate(_BaseRequestDelegate___init__impl__wreley(job));
  };
  protoOf(NonAndroidRequestService).updateRequest_fiwegb_k$ = function (request) {
    return request.newBuilder$default_dz3r4s_k$().defaults_jdonvz_k$(this.imageLoader_1.get_defaults_l5ckbp_k$()).build_1k0s4u_k$();
  };
  protoOf(NonAndroidRequestService).options_1wlr8l_k$ = function (request, size) {
    return new Options_0(request.get_context_h02k06_k$(), size, request.get_scale_iyf28x_k$(), request.get_precision_e8tfsb_k$(), request.get_diskCacheKey_gvj33x_k$(), request.get_fileSystem_9p6nv8_k$(), request.get_memoryCachePolicy_xij562_k$(), request.get_diskCachePolicy_b6aqha_k$(), request.get_networkCachePolicy_zd32gh_k$(), request.get_extras_d3bq0c_k$());
  };
  protoOf(NonAndroidRequestService).updateOptions_brn2p2_k$ = function (options) {
    return options;
  };
  protoOf(NonAndroidRequestService).isCacheValueValidForHardware_ucpcye_k$ = function (request, cacheValue) {
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
  function SystemCallbacks_0(imageLoader) {
    return new NoopSystemCallbacks();
  }
  function NoopSystemCallbacks() {
  }
  protoOf(NoopSystemCallbacks).registerMemoryPressureCallbacks_fy5q1h_k$ = function () {
  };
  protoOf(NoopSystemCallbacks).shutdown_cplwmy_k$ = function () {
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
    var srcWidth = image.get_width_j0q4yl_k$();
    var srcHeight = image.get_height_e7t92o_k$();
    var _destruct__k2r9zo = DecodeUtils_getInstance().computeDstSize_g1prh4_k$(srcWidth, srcHeight, options.get_size_woubt6_k$(), options.get_scale_iyf28x_k$(), get_maxBitmapSize_0(options));
    // Inline function 'coil3.util.component1' call
    var dstWidth = _IntPair___get_first__impl__dvuucb(_destruct__k2r9zo);
    // Inline function 'coil3.util.component2' call
    var dstHeight = _IntPair___get_second__impl__vrxpzp(_destruct__k2r9zo);
    var multiplier = DecodeUtils_getInstance().computeSizeMultiplier_y90lir_k$(srcWidth, srcHeight, dstWidth, dstHeight, options.get_scale_iyf28x_k$());
    if (options.get_precision_e8tfsb_k$().equals(Precision_INEXACT_getInstance())) {
      multiplier = coerceAtMost_0(multiplier, 1.0);
    }
    var outWidth = numberToInt(multiplier * srcWidth);
    var outHeight = numberToInt(multiplier * srcHeight);
    var bitmap = Bitmap_init_$Create$();
    bitmap.allocN32Pixels$default_jdhd5q_k$(outWidth, outHeight);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Canvas_init_$Create$(bitmap);
    var tmp;
    try {
      // Inline function 'coil3.util.makeFromImage.<anonymous>' call
      tmp = this_0.drawImageRect_8bb4mv_k$(image, Companion_getInstance_5().makeWH_nov667_k$(srcWidth, srcHeight), Companion_getInstance_5().makeWH_nov667_k$(outWidth, outHeight));
    }finally {
      this_0.close_yn9xrc_k$();
    }
    return bitmap;
  }
  function isAssetUri(uri) {
    return false;
  }
  function addJvmComponents(_this__u8e3s4, options) {
    return _this__u8e3s4;
  }
  function _get_lock__d9xa4g_3($this) {
    return $this.lock_1;
  }
  function _get__fetchers__4bmqcm($this) {
    return $this._fetchers_1;
  }
  function _get__decoders__xasef7($this) {
    return $this._decoders_1;
  }
  function ServiceLoaderComponentRegistry() {
    ServiceLoaderComponentRegistry_instance = this;
    this.lock_1 = new Object();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._fetchers_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0._decoders_1 = ArrayList_init_$Create$();
  }
  protoOf(ServiceLoaderComponentRegistry).get_fetchers_rvptjf_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-fetchers>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance()._fetchers_1);
  };
  protoOf(ServiceLoaderComponentRegistry).get_decoders_md3b7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'coil3.util.ServiceLoaderComponentRegistry.<get-decoders>.<anonymous>' call
    return toImmutableList(ServiceLoaderComponentRegistry_getInstance()._decoders_1);
  };
  protoOf(ServiceLoaderComponentRegistry).register_bkcr45_k$ = function (fetcher) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    ServiceLoaderComponentRegistry_getInstance()._fetchers_1.add_utx5q5_k$(fetcher);
    return Unit_getInstance();
  };
  protoOf(ServiceLoaderComponentRegistry).register_fot2rs_k$ = function (decoder) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    ServiceLoaderComponentRegistry_getInstance()._decoders_1.add_utx5q5_k$(decoder);
    return Unit_getInstance();
  };
  var ServiceLoaderComponentRegistry_instance;
  function ServiceLoaderComponentRegistry_getInstance() {
    if (ServiceLoaderComponentRegistry_instance == null)
      new ServiceLoaderComponentRegistry();
    return ServiceLoaderComponentRegistry_instance;
  }
  function toImmutableMap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.isEmpty_y1axqb_k$()) {
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
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function _get_delegate__idh0py_1($this) {
    return $this.delegate_1;
  }
  function ImmutableEntry(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(ImmutableEntry).equals = function (other) {
    return equals(this.delegate_1, other);
  };
  protoOf(ImmutableEntry).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(ImmutableEntry).toString = function () {
    return toString(this.delegate_1);
  };
  protoOf(ImmutableEntry).get_key_18j28a_k$ = function () {
    return this.delegate_1.get_key_18j28a_k$();
  };
  protoOf(ImmutableEntry).get_value_j01efc_k$ = function () {
    return this.delegate_1.get_value_j01efc_k$();
  };
  function ImmutableMap(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(ImmutableMap).get_entries_p20ztl_k$ = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.delegate_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1 = new ImmutableEntry(item);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    return destination;
  };
  protoOf(ImmutableMap).equals = function (other) {
    return equals(this.delegate_1, other);
  };
  protoOf(ImmutableMap).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(ImmutableMap).toString = function () {
    return toString(this.delegate_1);
  };
  protoOf(ImmutableMap).asJsReadonlyMapView_6h4p3w_k$ = function () {
    return this.delegate_1.asJsReadonlyMapView_6h4p3w_k$();
  };
  protoOf(ImmutableMap).containsKey_aw81wo_k$ = function (key) {
    return this.delegate_1.containsKey_aw81wo_k$(key);
  };
  protoOf(ImmutableMap).containsValue_yf2ykl_k$ = function (value) {
    return this.delegate_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(ImmutableMap).get_wei43m_k$ = function (key) {
    return this.delegate_1.get_wei43m_k$(key);
  };
  protoOf(ImmutableMap).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(ImmutableMap).get_keys_wop4xp_k$ = function () {
    return this.delegate_1.get_keys_wop4xp_k$();
  };
  protoOf(ImmutableMap).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(ImmutableMap).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  function toImmutableList(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.isEmpty_y1axqb_k$()) {
      tmp = emptyList();
    } else {
      if (_this__u8e3s4 instanceof ImmutableList) {
        tmp = _this__u8e3s4;
      } else {
        tmp = new ImmutableList(ArrayList_init_$Create$_1(_this__u8e3s4));
      }
    }
    return tmp;
  }
  function LruMutableMap(initialCapacity, loadFactor) {
    initialCapacity = initialCapacity === VOID ? 0 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    return new LruMutableMap_0(LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor));
  }
  function _get_delegate__idh0py_2($this) {
    return $this.delegate_1;
  }
  function _get_delegate__idh0py_3($this) {
    return $this.delegate_1;
  }
  function _get_delegate__idh0py_4($this) {
    return $this.delegate_1;
  }
  function ImmutableIterator(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(ImmutableIterator).equals = function (other) {
    return equals(this.delegate_1, other);
  };
  protoOf(ImmutableIterator).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(ImmutableIterator).toString = function () {
    return toString(this.delegate_1);
  };
  protoOf(ImmutableIterator).hasNext_bitz1p_k$ = function () {
    return this.delegate_1.hasNext_bitz1p_k$();
  };
  protoOf(ImmutableIterator).next_20eer_k$ = function () {
    return this.delegate_1.next_20eer_k$();
  };
  function ImmutableListIterator(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(ImmutableListIterator).equals = function (other) {
    return equals(this.delegate_1, other);
  };
  protoOf(ImmutableListIterator).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(ImmutableListIterator).toString = function () {
    return toString(this.delegate_1);
  };
  protoOf(ImmutableListIterator).hasNext_bitz1p_k$ = function () {
    return this.delegate_1.hasNext_bitz1p_k$();
  };
  protoOf(ImmutableListIterator).hasPrevious_qh0629_k$ = function () {
    return this.delegate_1.hasPrevious_qh0629_k$();
  };
  protoOf(ImmutableListIterator).next_20eer_k$ = function () {
    return this.delegate_1.next_20eer_k$();
  };
  protoOf(ImmutableListIterator).nextIndex_jshxun_k$ = function () {
    return this.delegate_1.nextIndex_jshxun_k$();
  };
  protoOf(ImmutableListIterator).previous_l2dfd5_k$ = function () {
    return this.delegate_1.previous_l2dfd5_k$();
  };
  protoOf(ImmutableListIterator).previousIndex_4qtyw5_k$ = function () {
    return this.delegate_1.previousIndex_4qtyw5_k$();
  };
  function ImmutableList(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(ImmutableList).iterator_jk1svi_k$ = function () {
    return new ImmutableIterator(this.delegate_1.iterator_jk1svi_k$());
  };
  protoOf(ImmutableList).listIterator_xjshxw_k$ = function () {
    return new ImmutableListIterator(this.delegate_1.listIterator_xjshxw_k$());
  };
  protoOf(ImmutableList).listIterator_70e65o_k$ = function (index) {
    return new ImmutableListIterator(this.delegate_1.listIterator_70e65o_k$(index));
  };
  protoOf(ImmutableList).equals = function (other) {
    return equals(this.delegate_1, other);
  };
  protoOf(ImmutableList).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(ImmutableList).toString = function () {
    return toString(this.delegate_1);
  };
  protoOf(ImmutableList).asJsReadonlyArrayView_ch6hjz_k$ = function () {
    return this.delegate_1.asJsReadonlyArrayView_ch6hjz_k$();
  };
  protoOf(ImmutableList).contains_ccp5tc_k$ = function (element) {
    return this.delegate_1.contains_aljjnj_k$(element);
  };
  protoOf(ImmutableList).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_ccp5tc_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).containsAll_70schq_k$ = function (elements) {
    return this.delegate_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(ImmutableList).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_70schq_k$(elements);
  };
  protoOf(ImmutableList).get_c1px32_k$ = function (index) {
    return this.delegate_1.get_c1px32_k$(index);
  };
  protoOf(ImmutableList).indexOf_u97212_k$ = function (element) {
    return this.delegate_1.indexOf_si1fv9_k$(element);
  };
  protoOf(ImmutableList).indexOf_si1fv9_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.indexOf_u97212_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(ImmutableList).lastIndexOf_wtunlo_k$ = function (element) {
    return this.delegate_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(ImmutableList).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.lastIndexOf_wtunlo_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ImmutableList).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.delegate_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(ImmutableList).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  function _get_delegate__idh0py_5($this) {
    return $this.delegate_1;
  }
  function _get_delegate__idh0py_6($this) {
    return $this.delegate_1;
  }
  function MutableEntry_0($outer, delegate) {
    this.$this_1 = $outer;
    this.delegate_1 = delegate;
  }
  protoOf(MutableEntry_0).setValue_kbj4ar_k$ = function (newValue) {
    var oldValue = this.delegate_1.setValue_9cjski_k$(newValue);
    this.$this_1.put_fa630k_k$(this.get_key_18j28a_k$(), this.get_value_j01efc_k$());
    return oldValue;
  };
  protoOf(MutableEntry_0).setValue_9cjski_k$ = function (newValue) {
    return this.setValue_kbj4ar_k$(!(newValue == null) ? newValue : THROW_CCE());
  };
  protoOf(MutableEntry_0).get_key_18j28a_k$ = function () {
    return this.delegate_1.get_key_18j28a_k$();
  };
  protoOf(MutableEntry_0).get_value_j01efc_k$ = function () {
    return this.delegate_1.get_value_j01efc_k$();
  };
  function LruMutableMap_0(delegate) {
    this.delegate_1 = delegate;
  }
  protoOf(LruMutableMap_0).get_entries_p20ztl_k$ = function () {
    // Inline function 'kotlin.collections.mapTo' call
    var this_0 = this.delegate_1.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var destination = LinkedHashSet_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1 = new MutableEntry_0(this, item);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    return destination;
  };
  protoOf(LruMutableMap_0).get_h31hzz_k$ = function (key) {
    var item = this.delegate_1.remove_gppy8k_k$(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.delegate_1.put_4fpzoq_k$(key, item);
    }
    return item;
  };
  protoOf(LruMutableMap_0).get_wei43m_k$ = function (key) {
    if (!!(key == null))
      return null;
    return this.get_h31hzz_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).put_fa630k_k$ = function (key, value) {
    var item = this.delegate_1.remove_gppy8k_k$(key);
    // Inline function 'kotlin.collections.set' call
    this.delegate_1.put_4fpzoq_k$(key, value);
    return item;
  };
  protoOf(LruMutableMap_0).put_4fpzoq_k$ = function (key, value) {
    var tmp = !(key == null) ? key : THROW_CCE();
    return this.put_fa630k_k$(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(LruMutableMap_0).putAll_wgg6cj_k$ = function (from) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.get_value_j01efc_k$();
      this.put_fa630k_k$(key, value);
    }
  };
  protoOf(LruMutableMap_0).asJsMapView_ii14sm_k$ = function () {
    return this.delegate_1.asJsMapView_ii14sm_k$();
  };
  protoOf(LruMutableMap_0).clear_j9egeb_k$ = function () {
    this.delegate_1.clear_j9egeb_k$();
  };
  protoOf(LruMutableMap_0).remove_1r2rzn_k$ = function (key) {
    return this.delegate_1.remove_gppy8k_k$(key);
  };
  protoOf(LruMutableMap_0).remove_gppy8k_k$ = function (key) {
    if (!!(key == null))
      return null;
    return this.remove_1r2rzn_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).get_keys_wop4xp_k$ = function () {
    return this.delegate_1.get_keys_wop4xp_k$();
  };
  protoOf(LruMutableMap_0).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  protoOf(LruMutableMap_0).asJsReadonlyMapView_6h4p3w_k$ = function () {
    return this.delegate_1.asJsReadonlyMapView_6h4p3w_k$();
  };
  protoOf(LruMutableMap_0).containsKey_wfh6rb_k$ = function (key) {
    return this.delegate_1.containsKey_aw81wo_k$(key);
  };
  protoOf(LruMutableMap_0).containsKey_aw81wo_k$ = function (key) {
    if (!!(key == null))
      return false;
    return this.containsKey_wfh6rb_k$(!(key == null) ? key : THROW_CCE());
  };
  protoOf(LruMutableMap_0).containsValue_x6smwq_k$ = function (value) {
    return this.delegate_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(LruMutableMap_0).containsValue_yf2ykl_k$ = function (value) {
    if (!!(value == null))
      return false;
    return this.containsValue_x6smwq_k$(!(value == null) ? value : THROW_CCE());
  };
  protoOf(LruMutableMap_0).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(LruMutableMap_0).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  function remainingFreeSpaceBytes(_this__u8e3s4, directory) {
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.times' call
    return (new Long(4, 0)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024)).times_nfzjiw_k$(toLong(1024));
  }
  function addAppleComponents(_this__u8e3s4, options) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  protoOf(BaseRequestDelegate).assertActive_d24ly4_k$ = assertActive;
  protoOf(BaseRequestDelegate).start_fyv442_k$ = start;
  protoOf(BaseRequestDelegate).awaitStarted_to5nxo_k$ = awaitStarted;
  protoOf(BaseRequestDelegate).complete_grcas7_k$ = complete;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ImageSource_0;
  _.$_$.b = ImageSource_1;
  _.$_$.c = Factory_1;
  _.$_$.d = Fetcher;
  _.$_$.e = SourceFetchResult;
  _.$_$.f = ErrorResult;
  _.$_$.g = Builder_4;
  _.$_$.h = ImageRequest;
  _.$_$.i = SuccessResult;
  _.$_$.j = get_crossfadeMillis;
  _.$_$.k = Pixels;
  _.$_$.l = Dimension_0;
  _.$_$.m = SizeResolver;
  _.$_$.n = Size;
  _.$_$.o = Target;
  _.$_$.p = FetcherServiceLoaderTarget;
  _.$_$.q = BitmapImage;
  _.$_$.r = Key;
  _.$_$.s = ImageLoader;
  _.$_$.t = Uri;
  _.$_$.u = getExtra;
  _.$_$.v = toBitmap;
  _.$_$.w = DataSource_DISK_getInstance;
  _.$_$.x = DataSource_MEMORY_CACHE_getInstance;
  _.$_$.y = DataSource_NETWORK_getInstance;
  _.$_$.z = Precision_INEXACT_getInstance;
  _.$_$.a1 = Scale_FILL_getInstance;
  _.$_$.b1 = Scale_FIT_getInstance;
  _.$_$.c1 = Builder_init_$Create$_6;
  _.$_$.d1 = Builder_init_$Create$_4;
  _.$_$.e1 = Undefined_getInstance;
  _.$_$.f1 = Companion_getInstance_15;
  _.$_$.g1 = MimeTypeMap_getInstance;
  _.$_$.h1 = ServiceLoaderComponentRegistry_getInstance;
  _.$_$.i1 = Companion_getInstance_18;
  //endregion
  return _;
}));
