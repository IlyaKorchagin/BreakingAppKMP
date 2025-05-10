(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-shared-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-shared-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-shared-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-shared-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-shared-ktor-events' was not found. Please, check whether 'ktor-ktor-shared-ktor-events' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-core'. Its dependency 'ktor-ktor-shared-ktor-websockets' was not found. Please, check whether 'ktor-ktor-shared-ktor-websockets' is loaded prior to 'ktor-ktor-client-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-shared-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-shared-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.f;
  var toString = kotlin_kotlin.$_$.le;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.l;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.c1;
  var isInterface = kotlin_kotlin.$_$.qd;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var arrayOf = kotlin_kotlin.$_$.sj;
  var createKType = kotlin_kotlin.$_$.c;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.i;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.k;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.qc;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var defineProp = kotlin_kotlin.$_$.oc;
  var UnsupportedOperationException = kotlin_kotlin.$_$.qj;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.z2;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var trimIndent = kotlin_kotlin.$_$.ei;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.b1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.d;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.k2;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var writer = kotlin_io_ktor_ktor_io.$_$.k1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.n;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.j;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.l;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.m;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.j;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.k;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.d1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var emptySet = kotlin_kotlin.$_$.c8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var getKClass = kotlin_kotlin.$_$.f;
  var getStarKTypeProjection = kotlin_kotlin.$_$.g;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.n;
  var lazy = kotlin_kotlin.$_$.fk;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var setOf = kotlin_kotlin.$_$.ka;
  var get = kotlin_kotlin.$_$.ub;
  var fold = kotlin_kotlin.$_$.tb;
  var minusKey = kotlin_kotlin.$_$.vb;
  var plus = kotlin_kotlin.$_$.xb;
  var Element = kotlin_kotlin.$_$.wb;
  var joinToString = kotlin_kotlin.$_$.y8;
  var setOf_0 = kotlin_kotlin.$_$.la;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.g;
  var isSuspendFunction = kotlin_kotlin.$_$.ud;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.z;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.k;
  var Unit = kotlin_kotlin.$_$.pj;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.e;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.je;
  var toLong_0 = kotlin_kotlin.$_$.ai;
  var contentType = kotlin_io_ktor_ktor_http.$_$.a1;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Long = kotlin_kotlin.$_$.wi;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.f1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.s;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.h1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var readText = kotlin_io_ktor_ktor_io.$_$.j1;
  var toInt = kotlin_kotlin.$_$.xh;
  var reversed = kotlin_kotlin.$_$.ia;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.m;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.i;
  var toList = kotlin_kotlin.$_$.va;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var get_name = kotlin_io_ktor_ktor_io.$_$.o;
  var roundToInt = kotlin_kotlin.$_$.re;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var Comparator = kotlin_kotlin.$_$.pi;
  var hashCode = kotlin_kotlin.$_$.zc;
  var charset = kotlin_io_ktor_ktor_http.$_$.y;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.e1;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.t;
  var compareValues = kotlin_kotlin.$_$.fb;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.w;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.b1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.f;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.dd;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var trimMargin = kotlin_kotlin.$_$.fi;
  var createKTypeParameter = kotlin_kotlin.$_$.b;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.i;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.p;
  var get_availableForRead = kotlin_io_ktor_ktor_io.$_$.e1;
  var readPacket = kotlin_io_ktor_ktor_io.$_$.c;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.h;
  var Exception = kotlin_kotlin.$_$.si;
  var writePacket_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var build = kotlin_io_ktor_ktor_io.$_$.q;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var get_isCompleted = kotlin_io_ktor_ktor_io.$_$.i1;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.m2;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.t;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.r;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.c1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.v;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.c;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.h;
  var decode = kotlin_io_ktor_ktor_io.$_$.l;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.a1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var close = kotlin_io_ktor_ktor_io.$_$.g1;
  var equals_0 = kotlin_kotlin.$_$.og;
  var flatten = kotlin_kotlin.$_$.n8;
  var copyToArray = kotlin_kotlin.$_$.y7;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.g;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.d;
  var intercepted = kotlin_kotlin.$_$.lb;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var createFailure = kotlin_kotlin.$_$.xj;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var toTypedArray = kotlin_kotlin.$_$.db;
  var Error_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.kg;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.x;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.sg2().b14();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($saveCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$4, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().vfz_1;
    client.lfx_1.rfj(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBodyPlugin$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$7, CoroutineImpl);
  initMetadataForFunctionReference(SetupRequestContext$install$slambda$proceed$ref, VOID, VOID, [0]);
  initMetadataForCoroutine($invoke$proceedCOROUTINE$8, CoroutineImpl);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2, 0]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$9, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance');
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForLambda(ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(CopyFromSourceTask, 'CopyFromSourceTask', VOID, VOID, VOID, [0]);
  initMetadataForLambda(ByteChannelReplay$replay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ByteChannelReplay, 'ByteChannelReplay');
  initMetadataForClass(SaveBodyAbandonedReadException, 'SaveBodyAbandonedReadException', SaveBodyAbandonedReadException, RuntimeException);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$12, CoroutineImpl);
  initMetadataForCoroutine($bodyAsChannelCOROUTINE$13, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($executeCOROUTINE$14, CoroutineImpl);
  initMetadataForCoroutine($fetchStreamingResponseCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($cleanupCOROUTINE$17, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$18, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$19, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$20, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$21, CoroutineImpl);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [CoroutineScope], [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.ffx_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel(this$0.dfx_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.zfx_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).dfy = function ($this$intercept, call, $completion) {
    var tmp = this.efy($this$intercept, call, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClient$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this.bfy_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.bfy_1) + '(' + toString(getKClassFromExpression(this.bfy_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.n9_1 = 1;
            suspendResult = this.zfx_1.mfx_1.mfj(Unit_instance, this.bfy_1.kfy(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cfy_1 = suspendResult;
            this.bfy_1.lfy(this.cfy_1);
            this.n9_1 = 2;
            suspendResult = this.afy_1.sfi(this.bfy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(HttpClient$slambda).efy = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.zfx_1, completion);
    i.afy_1 = $this$intercept;
    i.bfy_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $completion) {
      return i.dfy($this$intercept, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.ufy_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).yfy = function ($this$intercept, it, $completion) {
    var tmp = this.zfy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClient$slambda_1).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.yfy(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.vfy_1.tfi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xfy_1 = suspendResult;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q9_1;
              var tmp_1 = this;
              this.ufy_1.pfx_1.dfw(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.vfy_1.nfj_1.kfy(), cause));
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return Unit_instance;
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
  protoOf(HttpClient$slambda_1).zfy = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.ufy_1, completion);
    i.vfy_1 = $this$intercept;
    i.wfy_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.yfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ifz_1 = _this__u8e3s4;
    this.jfz_1 = builder;
  }
  protoOf($executeCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ifz_1.pfx_1.dfw(get_HttpRequestCreated(), this.jfz_1);
            this.n9_1 = 1;
            suspendResult = this.ifz_1.jfx_1.mfj(this.jfz_1, this.jfz_1.nfz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.dfx_1 = engine;
    this.efx_1 = userConfig;
    this.ffx_1 = false;
    this.gfx_1 = atomic$boolean$1(false);
    this.hfx_1 = Job(this.dfx_1.b14().aa(Key_instance));
    this.ifx_1 = this.dfx_1.b14().hj(this.hfx_1);
    this.jfx_1 = new HttpRequestPipeline();
    this.kfx_1 = new HttpResponsePipeline();
    this.lfx_1 = new HttpSendPipeline();
    this.mfx_1 = new HttpReceivePipeline();
    this.nfx_1 = AttributesJsFn(true);
    this.ofx_1 = this.dfx_1.qfz();
    this.pfx_1 = new Events();
    this.qfx_1 = new HttpClientConfig();
    if (this.ffx_1) {
      this.hfx_1.e15(HttpClient$lambda(this));
    }
    this.dfx_1.rfz(this);
    var tmp = Phases_getInstance_0().wfz_1;
    this.lfx_1.rfj(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.efx_1;
    this.qfx_1.fg0(get_HttpRequestLifecycle());
    this.qfx_1.fg0(get_BodyProgress());
    this.qfx_1.fg0(get_SaveBodyPlugin());
    if ($this$with.cg0_1) {
      this.qfx_1.gg0('DefaultTransformers', HttpClient$lambda_0);
    }
    this.qfx_1.fg0(Plugin_getInstance());
    this.qfx_1.fg0(get_HttpCallValidator());
    if ($this$with.bg0_1) {
      this.qfx_1.fg0(get_HttpRedirect());
    }
    this.qfx_1.hg0($this$with);
    if ($this$with.cg0_1) {
      this.qfx_1.fg0(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.qfx_1);
    this.qfx_1.rfz(this);
    var tmp_0 = Phases_getInstance_2().ig0_1;
    this.kfx_1.rfj(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).b14 = function () {
    return this.ifx_1;
  };
  protoOf(HttpClient).ng0 = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$0(this, builder, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.dfx_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    var engine = engineFactory.og0(config.ag0_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp_0 = ensureNotNull(client.ifx_1.aa(Key_instance));
    tmp_0.e15(HttpClient$lambda_2(engine));
    return client;
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClient$lambda_2($engine) {
    return function (it) {
      $engine.l4();
      return Unit_instance;
    };
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.nfx_1.yfe(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.qfx_1.yfz_1.n2($plugin.v()));
      var pluginData = $plugin.pg0(config);
      $plugin.qg0(pluginData, scope);
      attributes.wfe($plugin.v(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.xfz_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.yfz_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.zfz_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.ag0_1 = HttpClientConfig$engineConfig$lambda;
    this.bg0_1 = true;
    this.cg0_1 = true;
    this.dg0_1 = false;
    this.eg0_1 = PlatformUtils_getInstance().ffg_1;
  }
  protoOf(HttpClientConfig).rg0 = function (plugin, configure) {
    var previousConfigBlock = this.yfz_1.n2(plugin.v());
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.yfz_1;
    var key = plugin.v();
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    this_0.f2(key, value);
    if (this.xfz_1.l2(plugin.v()))
      return Unit_instance;
    // Inline function 'kotlin.collections.set' call
    var this_1 = this.xfz_1;
    var key_0 = plugin.v();
    var value_0 = HttpClientConfig$install$lambda_1(plugin);
    this_1.f2(key_0, value_0);
  };
  protoOf(HttpClientConfig).fg0 = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.rg0(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.rg0.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).gg0 = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.zfz_1.f2(key, block);
  };
  protoOf(HttpClientConfig).rfz = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.xfz_1.k2().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.zfz_1.k2().g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).hg0 = function (other) {
    this.bg0_1 = other.bg0_1;
    this.cg0_1 = other.cg0_1;
    this.dg0_1 = other.dg0_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.xfz_1;
    var map = other.xfz_1;
    this_0.h2(map);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_1 = this.yfz_1;
    var map_0 = other.yfz_1;
    this_1.h2(map_0);
    // Inline function 'kotlin.collections.plusAssign' call
    var this_2 = this.zfz_1;
    var map_1 = other.zfz_1;
    this_2.h2(map_1);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.hfy_1 = new DefaultHttpRequest($this, requestData);
    $this.ify_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.wg0_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.zg0().wfe(Companion_getInstance_5().ag1_1, responseData.wg0_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().gc();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$0 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$0);
    tmp.ag1_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jg1_1 = _this__u8e3s4;
    this.kg1_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.o9_1 = 4;
            if (instanceOf(this.jg1_1.kfy(), this.kg1_1.efk_1))
              return this.jg1_1.kfy();
            if (!this.jg1_1.pg1() && !get_isSaved(this.jg1_1.kfy()) && !this.jg1_1.gfy_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.jg1_1);
            }

            this.lg1_1 = this.jg1_1.zg0().ufe(Companion_getInstance_5().ag1_1);
            if (this.lg1_1 == null) {
              this.n9_1 = 1;
              suspendResult = this.jg1_1.qg1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.mg1_1 = this.lg1_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.mg1_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.ng1_1 = this.mg1_1;
            this.og1_1 = new HttpResponseContainer(this.kg1_1, this.ng1_1);
            this.n9_1 = 3;
            suspendResult = this.jg1_1.ffy_1.kfx_1.mfj(this.jg1_1, this.og1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var this_0 = ARGUMENT.sg1_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.kg1_1.efk_1)) {
              var from = getKClassFromExpression(result);
              var to = this.kg1_1.efk_1;
              throw new NoTransformationFoundException(this.jg1_1.kfy(), from, to);
            }

            return result;
          case 4:
            this.o9_1 = 5;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q9_1;
              cancel_0(this.jg1_1.kfy(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.q9_1;
            }

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
  function HttpClientCall(client) {
    Companion_getInstance_5();
    this.ffy_1 = client;
    this.gfy_1 = atomic$boolean$1(false);
    this.jfy_1 = false;
  }
  protoOf(HttpClientCall).b14 = function () {
    return this.kfy().b14();
  };
  protoOf(HttpClientCall).zg0 = function () {
    return this.tg1().zg0();
  };
  protoOf(HttpClientCall).tg1 = function () {
    var tmp = this.hfy_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).kfy = function () {
    var tmp = this.ify_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).pg1 = function () {
    return this.jfy_1;
  };
  protoOf(HttpClientCall).qg1 = function ($completion) {
    return this.kfy().ug1();
  };
  protoOf(HttpClientCall).vg1 = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.tg1().wg1().toString() + ', ' + this.kfy().xg1().toString() + ']';
  };
  protoOf(HttpClientCall).lfy = function (response) {
    this.ify_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.yg1_1 = 'Response already received: ' + call.toString();
  }
  protoOf(DoubleReceiveException).m1 = function () {
    return this.yg1_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.zg1_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).wg1().toString() + '`\n        Response status `' + response.xg1().toString() + '`\n        Response header `ContentType: ' + response.ifq().v48(HttpHeaders_getInstance().yfm_1) + '` \n        Request header `Accept: ' + get_request(response).ifq().v48(HttpHeaders_getInstance().gfm_1) + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
  }
  protoOf(NoTransformationFoundException).m1 = function () {
    return this.zg1_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.og2_1 = responseBody;
    this.hfy_1 = new SavedHttpRequest(this, request);
    this.ify_1 = new SavedHttpResponse(this, this.og2_1, response);
    this.pg2_1 = true;
  }
  protoOf(SavedHttpCall).qg1 = function ($completion) {
    return ByteReadChannel_0(this.og2_1);
  };
  protoOf(SavedHttpCall).pg1 = function () {
    return this.pg2_1;
  };
  function SavedHttpRequest(call, origin) {
    this.qg2_1 = origin;
    this.rg2_1 = call;
  }
  protoOf(SavedHttpRequest).sg2 = function () {
    return this.rg2_1;
  };
  protoOf(SavedHttpRequest).b14 = function () {
    return this.qg2_1.b14();
  };
  protoOf(SavedHttpRequest).tg2 = function () {
    return this.qg2_1.tg2();
  };
  protoOf(SavedHttpRequest).wg1 = function () {
    return this.qg2_1.wg1();
  };
  protoOf(SavedHttpRequest).zg0 = function () {
    return this.qg2_1.zg0();
  };
  protoOf(SavedHttpRequest).ifq = function () {
    return this.qg2_1.ifq();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.ug2_1 = call;
    this.vg2_1 = body;
    this.wg2_1 = origin.xg1();
    this.xg2_1 = origin.cg3();
    this.yg2_1 = origin.dg3();
    this.zg2_1 = origin.eg3();
    this.ag3_1 = origin.ifq();
    this.bg3_1 = origin.b14();
  }
  protoOf(SavedHttpResponse).sg2 = function () {
    return this.ug2_1;
  };
  protoOf(SavedHttpResponse).xg1 = function () {
    return this.wg2_1;
  };
  protoOf(SavedHttpResponse).cg3 = function () {
    return this.xg2_1;
  };
  protoOf(SavedHttpResponse).dg3 = function () {
    return this.yg2_1;
  };
  protoOf(SavedHttpResponse).eg3 = function () {
    return this.zg2_1;
  };
  protoOf(SavedHttpResponse).ifq = function () {
    return this.ag3_1;
  };
  protoOf(SavedHttpResponse).b14 = function () {
    return this.bg3_1;
  };
  protoOf(SavedHttpResponse).ug1 = function () {
    return ByteReadChannel_0(this.vg2_1);
  };
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ig2_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = readRemaining(this.ig2_1.kfy().ug1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.ig2_1.ffy_1, this.ig2_1.tg1(), this.ig2_1.kfy(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.wfv());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.tfv());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().wf8_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.pfv();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.ig3_1, true, ObservableContent$getContent$slambda_0(delegate, null)).ifc_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.tg3_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ObservableContent$getContent$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.tg3_1.rfv(this.ug3_1.kfc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ObservableContent$getContent$slambda).wg3 = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.tg3_1, completion);
    i.ug3_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.hg3_1 = delegate;
    this.ig3_1 = callContext;
    this.jg3_1 = listener;
    this.kg3_1 = getContent(this, this.hg3_1);
  }
  protoOf(ObservableContent).mfv = function () {
    return this.hg3_1.mfv();
  };
  protoOf(ObservableContent).nfv = function () {
    return this.hg3_1.nfv();
  };
  protoOf(ObservableContent).ifq = function () {
    return this.hg3_1.ifq();
  };
  protoOf(ObservableContent).pfv = function () {
    return observable(this.kg3_1, this.ig3_1, this.nfv(), this.jg3_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.pfx_1.dfw(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.b14().aa(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c14();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.pg4_1.g();
    while (_iterator__ex2g4s.h()) {
      var requestedExtension = _iterator__ex2g4s.i();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!$this.qg4().p(requestedExtension)) {
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.zg4_1 = $client;
    this.ag5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).dfy = function ($this$intercept, content, $completion) {
    var tmp = this.efy($this$intercept, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClientEngine$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.ig5(this.bg5_1.nfj_1);
            var body = this.cg5_1;
            if (body == null) {
              this_0.nfz_1 = NullBody_instance;
              var tmp_1 = PrimitiveClasses_getInstance().gc();
              var tmp_2;
              try {
                tmp_2 = createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              this_0.jg5(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.nfz_1 = body;
                this_0.jg5(null);
              } else {
                this_0.nfz_1 = body;
                var tmp_4 = PrimitiveClasses_getInstance().gc();
                var tmp_5;
                try {
                  tmp_5 = createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_6 = null;
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                this_0.jg5(new TypeInfo(tmp_4, tmp_5));
              }
            }

            tmp_0.dg5_1 = this_0;
            this.zg4_1.pfx_1.dfw(get_HttpRequestIsReadyForSending(), this.dg5_1);
            var tmp_7 = this;
            var this_1 = this.dg5_1.c2o();
            this_1.og4_1.wfe(get_CLIENT_CONFIG(), this.zg4_1.qfx_1);
            tmp_7.eg5_1 = this_1;
            validateHeaders(this.eg5_1);
            checkExtensions(this.ag5_1, this.eg5_1);
            this.n9_1 = 1;
            suspendResult = executeWithinCallContext(this.ag5_1, this.eg5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fg5_1 = suspendResult;
            this.gg5_1 = HttpClientCall_init_$Create$(this.zg4_1, this.eg5_1, this.fg5_1);
            this.hg5_1 = this.gg5_1.kfy();
            this.zg4_1.pfx_1.dfw(get_HttpResponseReceived(), this.hg5_1);
            var tmp_8 = get_job(this.hg5_1.b14());
            tmp_8.e15(HttpClientEngine$install$slambda$lambda(this.zg4_1, this.hg5_1));
            this.n9_1 = 2;
            suspendResult = this.bg5_1.sfi(this.gg5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(HttpClientEngine$install$slambda).efy = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.zg4_1, this.ag5_1, completion);
    i.bg5_1 = $this$intercept;
    i.cg5_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.dfy($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.sg5_1 = this$0;
    this.tg5_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).vg5 = function ($this$async, $completion) {
    var tmp = this.f1x($this$async, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).ha = function (p1, $completion) {
    return this.vg5((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (_get_closed__iwkfs1(this.sg5_1)) {
              throw new ClientEngineClosedException();
            }

            this.n9_1 = 1;
            suspendResult = this.sg5_1.wg5(this.tg5_1, this);
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).f1x = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.sg5_1, this.tg5_1, completion);
    i.ug5_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.vg5($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fg4_1 = _this__u8e3s4;
    this.gg4_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = createCallContext(this.fg4_1, this.gg4_1.ng4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hg4_1 = suspendResult;
            this.ig4_1 = this.hg4_1.hj(new KtorCallContextElement(this.hg4_1));
            this.n9_1 = 2;
            suspendResult = async(this.fg4_1, this.ig4_1, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.fg4_1, this.gg4_1, null)).r17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.lg4_1;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = requestHeaders.jfg();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      if (HttpHeaders_getInstance().bfq_1.p(element)) {
        destination.e(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.q()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.b14().hj(callJob).hj(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.t9().aa(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.g15(true, VOID, createCallContext$lambda(callJob));
      callJob.e15(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      $callJob.l15(CancellationException_init_$Create$(cause.message));
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.n18();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.xg5_1 = cause;
  }
  protoOf(ClientEngineClosedException).n1 = function () {
    return this.xg5_1;
  };
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.qfz().zg5_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().hj(this$0.gg6()).hj(new CoroutineName(this$0.cg6_1 + '-context'));
    };
  }
  function HttpClientEngineBase(engineName) {
    this.cg6_1 = engineName;
    this.dg6_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.eg6_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.fg6_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).gg6 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.eg6_1;
    dispatcher$factory();
    return this_0.w();
  };
  protoOf(HttpClientEngineBase).b14 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fg6_1;
    coroutineContext$factory();
    return this_0.w();
  };
  protoOf(HttpClientEngineBase).l4 = function () {
    if (!this.dg6_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.b14().aa(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.s1b();
  };
  function dispatcher$factory() {
    return getPropertyCallableRef('dispatcher', 1, KProperty1, function (receiver) {
      return receiver.gg6();
    }, null);
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.b14();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.yg5_1 = 4;
    this.zg5_1 = null;
    this.ag6_1 = false;
    this.bg6_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_6() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.hg6_1 = callContext;
  }
  protoOf(KtorCallContextElement).v = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t9();
    return ensureNotNull(tmp$ret$0.aa(Companion_instance_1)).hg6_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.lfg(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.v48(HttpHeaders_getInstance().efp_1) == null && content.ifq().v48(HttpHeaders_getInstance().efp_1) == null;
    if (missingAgent && needUserAgent()) {
      block(HttpHeaders_getInstance().efp_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.mfv();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.ifq().v48(HttpHeaders_getInstance().yfm_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.v48(HttpHeaders_getInstance().yfm_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.nfv();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.ifq().v48(HttpHeaders_getInstance().vfm_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.v48(HttpHeaders_getInstance().vfm_1) : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().yfm_1, type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      block(HttpHeaders_getInstance().vfm_1, length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().zff_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.tfg($requestHeaders);
      $this$buildHeaders.tfg($content.ifq());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().vfm_1 === key) {
        return Unit_instance;
      }
      var tmp_0;
      if (HttpHeaders_getInstance().yfm_1 === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().p(key)) {
        var tmp0_iterator = values.g();
        while (tmp0_iterator.h()) {
          var element = tmp0_iterator.i();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = HttpHeaders_getInstance().zfm_1 === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().bfn_1, HttpHeaders_getInstance().hfn_1, HttpHeaders_getInstance().tfn_1, HttpHeaders_getInstance().ofn_1, HttpHeaders_getInstance().sfn_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.qg6_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).dfy = function ($this$intercept, content, $completion) {
    var tmp = this.efy($this$intercept, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AfterRenderHook$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this.sg6_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.n9_1 = 1;
            suspendResult = this.qg6_1(this.rg6_1.nfj_1, this.sg6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tg6_1 = suspendResult;
            var tmp_1 = this;
            var tmp_2;
            if (this.tg6_1 == null) {
              return Unit_instance;
            } else {
              tmp_2 = this.tg6_1;
            }

            tmp_1.ug6_1 = tmp_2;
            this.n9_1 = 2;
            suspendResult = this.rg6_1.sfi(this.ug6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(AfterRenderHook$install$slambda).efy = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.qg6_1, completion);
    i.rg6_1 = $this$intercept;
    i.sg6_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.dfy($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).vg6 = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.jfx_1.ofj(Phases_getInstance().zg6_1, observableContentPhase);
    client.jfx_1.rfj(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).bg7 = function (client, handler) {
    return this.vg6(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.kg7_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).og7 = function ($this$intercept, response, $completion) {
    var tmp = this.pg7($this$intercept, response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(AfterReceiveHook$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.og7(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.kg7_1(this.mg7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ng7_1 = suspendResult;
            if (!(this.ng7_1 == null)) {
              this.n9_1 = 2;
              suspendResult = this.lg7_1.sfi(this.ng7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterReceiveHook$install$slambda).pg7 = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.kg7_1, completion);
    i.lg7_1 = $this$intercept;
    i.mg7_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.og7($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).qg7 = function (client, handler) {
    var tmp = Phases_getInstance_1().tg7_1;
    client.mfx_1.rfj(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).bg7 = function (client, handler) {
    return this.qg7(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var observableByteChannel = observable(_this__u8e3s4.ug1(), _this__u8e3s4.b14(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4.sg2(), observableByteChannel).kfy();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.zg7(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.zg7(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).kg8 = function (request, content, $completion) {
    var tmp = this.lg8(request, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(BodyProgress$lambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.kg8(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_elvis_lhs = this.ig8_1.pfz_1.ufe(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.jg8_1, this.ig8_1.ofz_1, listener);
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).lg8 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.ig8_1 = request;
    i.jg8_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    var l = function (request, content, $completion) {
      return i.kg8(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).vg8 = function (response, $completion) {
    var tmp = this.wg8(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(BodyProgress$lambda$slambda_1).ha = function (p1, $completion) {
    return this.vg8(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_elvis_lhs = this.ug8_1.sg2().tg1().zg0().ufe(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.ug8_1, listener);
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).wg8 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.ug8_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    var l = function (response, $completion) {
      return i.vg8(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$0_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$0_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.xg8_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.zg8_1 = 'Unhandled redirect: ' + response.sg2().tg1().tg2().rfq_1 + ' ' + response.sg2().tg1().wg1().toString() + '. ' + ('Status: ' + response.xg1().toString() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(RedirectResponseException).m1 = function () {
    return this.zg8_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.bg9_1 = 'Client request(' + response.sg2().tg1().tg2().rfq_1 + ' ' + response.sg2().tg1().wg1().toString() + ') ' + ('invalid: ' + response.xg1().toString() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ClientRequestException).m1 = function () {
    return this.bg9_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.dg9_1 = 'Server error(' + response.sg2().tg1().tg2().rfq_1 + ' ' + response.sg2().tg1().wg1().toString() + ': ' + (response.xg1().toString() + '. Text: "' + cachedResponseText + '"');
  }
  protoOf(ServerResponseException).m1 = function () {
    return this.dg9_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).ug9 = function (response, $completion) {
    var tmp = this.wg8(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).ha = function (p1, $completion) {
    return this.ug9(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.ng9_1 = this.mg9_1.sg2().zg0().tfe(get_ExpectSuccessAttributeKey());
            if (!this.ng9_1) {
              get_LOGGER().ifk('Skipping default response validation for ' + this.mg9_1.sg2().tg1().wg1().toString());
              return Unit_instance;
            }

            this.og9_1 = this.mg9_1.xg1().dft_1;
            this.pg9_1 = this.mg9_1.sg2();
            if (this.og9_1 < 300 || this.pg9_1.zg0().vfe(get_ValidateMark())) {
              return Unit_instance;
            }

            this.n9_1 = 1;
            suspendResult = save(this.pg9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qg9_1 = suspendResult;
            this.qg9_1.zg0().wfe(get_ValidateMark(), Unit_instance);
            this.rg9_1 = this.qg9_1;
            this.sg9_1 = this.rg9_1.kfy();
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.sg9_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tg9_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 5;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.q9_1;
              var tmp_1 = this;
              tmp_1.tg9_1 = '<body failed decoding>';
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 5;
            var exceptionResponseText = this.tg9_1;
            var tmp0_subject = this.og9_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.sg9_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.sg9_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.sg9_1, exceptionResponseText) : new ResponseException(this.sg9_1, exceptionResponseText);
            get_LOGGER().ifk('Default response validation for ' + this.mg9_1.sg2().tg1().wg1().toString() + ' failed with ' + exception.toString());
            throw exception;
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
  protoOf(addDefaultResponseValidation$lambda$slambda).wg8 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.mg9_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $completion) {
      return i.ug9(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.xg9_1 = $this_addDefaultResponseValidation.dg0_1;
      $this$HttpResponseValidator.yg9(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().zg6_1;
    _this__u8e3s4.jfx_1.rfj(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_2().jg0_1;
    _this__u8e3s4.kfx_1.rfj(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.cga_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.aga_1 = $contentType == null ? Application_getInstance().yfk_1 : $contentType;
    this.bga_1 = toLong($body.length);
  }
  protoOf(defaultTransformers$1$content$1).mfv = function () {
    return this.aga_1;
  };
  protoOf(defaultTransformers$1$content$1).nfv = function () {
    return this.bga_1;
  };
  protoOf(defaultTransformers$1$content$1).tfv = function () {
    return this.cga_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.gga_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.nfj_1.mfz_1.v48(HttpHeaders_getInstance().vfm_1);
    tmp.ega_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.fga_1 = $contentType == null ? Application_getInstance().yfk_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).nfv = function () {
    return this.ega_1;
  };
  protoOf(defaultTransformers$1$content$2).mfv = function () {
    return this.fga_1;
  };
  protoOf(defaultTransformers$1$content$2).pfv = function () {
    return this.gga_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).dfy = function ($this$intercept, body, $completion) {
    var tmp = this.efy($this$intercept, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(defaultTransformers$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.pga_1.nfj_1.mfz_1.v48(HttpHeaders_getInstance().gfm_1) == null) {
              this.pga_1.nfj_1.mfz_1.sfg(HttpHeaders_getInstance().gfm_1, '*/*');
            }

            this.rga_1 = contentType(this.pga_1.nfj_1);
            var tmp_0 = this;
            var tmp0_subject = this.qga_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.rga_1;
              tmp_1 = new TextContent(this.qga_1, tmp1_elvis_lhs == null ? Text_getInstance().pfl_1 : tmp1_elvis_lhs);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.rga_1, this.qga_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.pga_1, this.rga_1, this.qga_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.qga_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.rga_1, this.pga_1.nfj_1, this.qga_1);
                  }
                }
              }
            }

            tmp_0.sga_1 = tmp_1;
            var tmp2_safe_receiver = this.sga_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.mfv()) == null)) {
              this.pga_1.nfj_1.mfz_1.ufg(HttpHeaders_getInstance().yfm_1);
              get_LOGGER_0().ifk('Transformed with default transformers request body for ' + this.pga_1.nfj_1.kfz_1.toString() + ' from ' + toString(getKClassFromExpression(this.qga_1)));
              this.n9_1 = 1;
              suspendResult = this.pga_1.sfi(this.sga_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(defaultTransformers$slambda).efy = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.pga_1 = $this$intercept;
    i.qga_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $completion) {
      return i.dfy($this$intercept, body, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.bgb_1 = $body;
    this.cgb_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(defaultTransformers$slambda$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = copyTo(this.bgb_1, this.dgb_1.kfc_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.egb_1 = suspendResult;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.q9_1;
              var tmp_1 = this;
              cancel(this.cgb_1, cause);
              throw cause;
            } else {
              var tmp_2 = this.q9_1;
              if (tmp_2 instanceof Error) {
                var cause_0 = this.q9_1;
                var tmp_3 = this;
                cancel_0(this.cgb_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.q9_1;
              }
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return Unit_instance;
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
  protoOf(defaultTransformers$slambda$slambda).wg3 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.bgb_1, this.cgb_1, completion);
    i.dgb_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function () {
      $responseJobHolder.s1b();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.ngb_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).yfy = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.zfy($this$intercept, _destruct__k2r9zo, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(defaultTransformers$slambda_1).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.yfy(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            this.qgb_1 = this.pgb_1.gb();
            this.rgb_1 = this.pgb_1.hb();
            var tmp_0 = this.rgb_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_instance;
            this.sgb_1 = this.ogb_1.nfj_1.kfy();
            this.tgb_1 = this.qgb_1.efk_1;
            if (this.tgb_1.equals(getKClass(Unit))) {
              cancel_1(this.rgb_1);
              this.n9_1 = 9;
              suspendResult = this.ogb_1.sfi(new HttpResponseContainer(this.qgb_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tgb_1.equals(PrimitiveClasses_getInstance().mc())) {
                this.n9_1 = 7;
                suspendResult = readRemaining(this.rgb_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.tgb_1.equals(getKClass(Source)) || this.tgb_1.equals(getKClass(Source))) {
                  this.n9_1 = 5;
                  suspendResult = readRemaining(this.rgb_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.tgb_1.equals(PrimitiveClasses_getInstance().uc())) {
                    this.n9_1 = 3;
                    suspendResult = toByteArray(this.rgb_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.tgb_1.equals(getKClass(ByteReadChannel))) {
                      this.vgb_1 = Job(this.sgb_1.b14().aa(Key_instance));
                      var tmp_1 = this;
                      var this_0 = writer(this.ogb_1, this.ngb_1.ifx_1, VOID, defaultTransformers$slambda$slambda_0(this.rgb_1, this.sgb_1, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(this.vgb_1));
                      tmp_1.wgb_1 = this_0.ifc_1;
                      this.n9_1 = 2;
                      suspendResult = this.ogb_1.sfi(new HttpResponseContainer(this.qgb_1, this.wgb_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.tgb_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.rgb_1);
                        this.n9_1 = 1;
                        suspendResult = this.ogb_1.sfi(new HttpResponseContainer(this.qgb_1, this.sgb_1.xg1()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.ugb_1 = null;
                        this.n9_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 2:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 3:
            this.xgb_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.ogb_1.sfi(new HttpResponseContainer(this.qgb_1, this.xgb_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 5:
            this.ygb_1 = suspendResult;
            this.zgb_1 = new HttpResponseContainer(this.qgb_1, this.ygb_1);
            this.n9_1 = 6;
            suspendResult = this.ogb_1.sfi(this.zgb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 7:
            this.agc_1 = suspendResult;
            this.bgc_1 = readText(this.agc_1);
            this.cgc_1 = toInt(this.bgc_1);
            this.dgc_1 = new HttpResponseContainer(this.qgb_1, this.cgc_1);
            this.n9_1 = 8;
            suspendResult = this.ogb_1.sfi(this.dgc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 9:
            this.ugb_1 = suspendResult;
            this.n9_1 = 10;
            continue $sm;
          case 10:
            var result = this.ugb_1;
            if (!(result == null)) {
              get_LOGGER_0().ifk('Transformed with default transformers response body ' + ('for ' + this.ogb_1.nfj_1.tg1().wg1().toString() + ' to ' + toString(this.qgb_1.efk_1)));
            }

            return Unit_instance;
          case 11:
            throw this.q9_1;
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
  protoOf(defaultTransformers$slambda_1).zfy = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.ngb_1, completion);
    i.ogb_1 = $this$intercept;
    i.pgb_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    var l = function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.yfy($this$intercept, _destruct__k2r9zo, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_SaveBodyPlugin() {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    return SaveBodyPlugin;
  }
  var SaveBodyPlugin;
  function SaveBodyPluginConfig() {
    this.egc_1 = false;
  }
  function get_isSaved(_this__u8e3s4) {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    return _this__u8e3s4.sg2().zg0().vfe(get_RESPONSE_BODY_SAVED());
  }
  function skipSavingBody(_this__u8e3s4) {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    _this__u8e3s4.pfz_1.wfe(get_SKIP_SAVE_BODY(), Unit_instance);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    var l = function () {
      return new SaveBodyPluginConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_DoubleReceivePlugin_kt__8jv4hf();
    var disabled = $this$createClientPlugin.wg7_1.egc_1;
    var tmp = Phases_getInstance_1().rg7_1;
    $this$createClientPlugin.vg7_1.mfx_1.rfj(tmp, SaveBodyPlugin$lambda$slambda_0(disabled, null));
    return Unit_instance;
  }
  function SaveBodyPlugin$lambda$slambda$lambda($bodyReplay) {
    return function () {
      return $bodyReplay.hgc();
    };
  }
  function SaveBodyPlugin$lambda$slambda($disabled, resultContinuation) {
    this.qgc_1 = $disabled;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBodyPlugin$lambda$slambda).og7 = function ($this$intercept, response, $completion) {
    var tmp = this.pg7($this$intercept, response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SaveBodyPlugin$lambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.og7(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBodyPlugin$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (this.qgc_1)
              return Unit_instance;
            this.tgc_1 = this.sgc_1.sg2().zg0();
            if (this.tgc_1.vfe(get_SKIP_SAVE_BODY()))
              return Unit_instance;
            this.ugc_1 = new ByteChannelReplay(this.sgc_1.ug1());
            var tmp_0 = this;
            var tmp_1 = this.sgc_1.sg2();
            tmp_0.vgc_1 = wrapWithContent_0(tmp_1, SaveBodyPlugin$lambda$slambda$lambda(this.ugc_1));
            this.vgc_1.zg0().wfe(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.n9_1 = 1;
            suspendResult = this.rgc_1.sfi(this.vgc_1.kfy(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SaveBodyPlugin$lambda$slambda).pg7 = function ($this$intercept, response, completion) {
    var i = new SaveBodyPlugin$lambda$slambda(this.qgc_1, completion);
    i.rgc_1 = $this$intercept;
    i.sgc_1 = response;
    return i;
  };
  function SaveBodyPlugin$lambda$slambda_0($disabled, resultContinuation) {
    var i = new SaveBodyPlugin$lambda$slambda($disabled, resultContinuation);
    var l = function ($this$intercept, response, $completion) {
      return i.og7($this$intercept, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_DoubleReceivePlugin_kt_p63y2z;
  function _init_properties_DoubleReceivePlugin_kt__8jv4hf() {
    if (!properties_initialized_DoubleReceivePlugin_kt_p63y2z) {
      properties_initialized_DoubleReceivePlugin_kt_p63y2z = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$0_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$0_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.vg9_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.wg9_1 = ArrayList_init_$Create$();
    this.xg9_1 = true;
  }
  protoOf(HttpCallValidatorConfig).yg9 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.vg9_1.e(block);
  };
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.egd_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).dfy = function ($this$intercept, it, $completion) {
    var tmp = this.efy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RequestError$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.fgd_1.tfi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hgd_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 5;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.igd_1 = this.q9_1;
              this.n9_1 = 3;
              suspendResult = this.egd_1(HttpRequest(this.fgd_1.nfj_1), this.igd_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.hgd_1 = Unit_instance;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.o9_1 = 5;
            return Unit_instance;
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
  protoOf(RequestError$install$slambda).efy = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.egd_1, completion);
    i.fgd_1 = $this$intercept;
    i.ggd_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.dfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RequestError() {
  }
  protoOf(RequestError).jgd = function (client, handler) {
    var tmp = Phases_getInstance().wg6_1;
    client.jfx_1.rfj(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).bg7 = function (client, handler) {
    return this.jgd(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.sgd_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).yfy = function ($this$intercept, it, $completion) {
    var tmp = this.zfy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ReceiveError$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.yfy(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.tgd_1.tfi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.vgd_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 5;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.wgd_1 = this.q9_1;
              this.n9_1 = 3;
              suspendResult = this.sgd_1(this.tgd_1.nfj_1.tg1(), this.wgd_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.vgd_1 = Unit_instance;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.o9_1 = 5;
            return Unit_instance;
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
  protoOf(ReceiveError$install$slambda).zfy = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.sgd_1, completion);
    i.tgd_1 = $this$intercept;
    i.ugd_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.yfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).jgd = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.kfx_1.qfj(Phases_getInstance_2().ig0_1, BeforeReceive);
    client.kfx_1.rfj(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).bg7 = function (client, handler) {
    return this.jgd(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.rg0(get_HttpCallValidator(), block);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    var l = function () {
      return new HttpCallValidatorConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.wg7_1.vg9_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.wg7_1.wg9_1);
    var expectSuccess = $this$createClientPlugin.wg7_1.xg9_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.zg7(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.zg7(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.zg7(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.zg7(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$5(responseValidators, response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$6(callExceptionHandlers, cause, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.igf_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).kgf = function (request, $completion) {
    var tmp = this.lgf(request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpCallValidator$lambda$slambda).ha = function (p1, $completion) {
    return this.kgf(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.jgf_1.pfz_1.yfe(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.igf_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).lgf = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.igf_1, completion);
    i.jgf_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    var l = function (request, $completion) {
      return i.kgf(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.ugf_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).ygf = function ($this$on, request, $completion) {
    var tmp = this.zgf($this$on, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.ygf(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.vgf_1.cgg(this.wgf_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xgf_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = invoke$validateResponse(this.ugf_1, this.xgf_1.kfy(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.xgf_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).zgf = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.ugf_1, completion);
    i.vgf_1 = $this$on;
    i.wgf_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.ygf($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.lgg_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).pgg = function (request, cause, $completion) {
    var tmp = this.qgg(request, cause, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.pgg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ogg_1 = unwrapCancellationException(this.ngg_1);
            this.n9_1 = 1;
            suspendResult = invoke$processException(this.lgg_1, this.ogg_1, this.mgg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.ogg_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).qgg = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.lgg_1, completion);
    i.mgg_1 = request;
    i.ngg_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.pgg(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.zgg_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).pgg = function (request, cause, $completion) {
    var tmp = this.qgg(request, cause, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.pgg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.cgh_1 = unwrapCancellationException(this.bgh_1);
            this.n9_1 = 1;
            suspendResult = invoke$processException(this.zgg_1, this.cgh_1, this.agh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.cgh_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).qgg = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.zgg_1, completion);
    i.agh_1 = request;
    i.bgh_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    var l = function (request, cause, $completion) {
      return i.pgg(request, cause, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$validateResponseCOROUTINE$5(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fge_1 = responseValidators;
    this.gge_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            get_LOGGER_1().ifk('Validating response for request ' + this.gge_1.sg2().tg1().wg1().toString());
            var tmp_0 = this;
            tmp_0.hge_1 = this.fge_1;
            this.ige_1 = this.hge_1.g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.ige_1.h()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.jge_1 = this.ige_1.i();
            this.n9_1 = 2;
            suspendResult = this.jge_1(this.gge_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$processExceptionCOROUTINE$6(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sge_1 = callExceptionHandlers;
    this.tge_1 = cause;
    this.uge_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$6).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            get_LOGGER_1().ifk('Processing exception ' + this.tge_1.toString() + ' for request ' + this.uge_1.wg1().toString());
            var tmp_0 = this;
            tmp_0.vge_1 = this.sge_1;
            this.wge_1 = this.vge_1.g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.wge_1.h()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.xge_1 = this.wge_1.i();
            var tmp_1 = this;
            tmp_1.yge_1 = this.xge_1;
            this.zge_1 = this.yge_1;
            var tmp_2 = this.zge_1;
            if (tmp_2 instanceof ExceptionHandlerWrapper) {
              this.n9_1 = 3;
              suspendResult = this.yge_1.egh_1(this.tge_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this.zge_1;
              if (tmp_3 instanceof RequestExceptionHandlerWrapper) {
                this.n9_1 = 2;
                suspendResult = this.yge_1.dgh_1(this.tge_1, this.uge_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.q9_1;
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
  function HttpRequest$1($builder) {
    this.jgh_1 = $builder;
    this.fgh_1 = $builder.lfz_1;
    this.ggh_1 = $builder.kfz_1.c2o();
    this.hgh_1 = $builder.pfz_1;
    this.igh_1 = $builder.mfz_1.c2o();
  }
  protoOf(HttpRequest$1).sg2 = function () {
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).tg2 = function () {
    return this.fgh_1;
  };
  protoOf(HttpRequest$1).wg1 = function () {
    return this.ggh_1;
  };
  protoOf(HttpRequest$1).zg0 = function () {
    return this.hgh_1;
  };
  protoOf(HttpRequest$1).ifq = function () {
    return this.igh_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().jc();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().jc(), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$0 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$0);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.v().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.nfx_1.ufe(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ufe(plugin.v());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.kgh_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.lgh_1 = LinkedHashMap_init_$Create$();
    this.mgh_1 = null;
    this.ngh_1 = Charsets_getInstance().pfd_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.wgh_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).dfy = function ($this$intercept, content, $completion) {
    var tmp = this.efy($this$intercept, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RenderRequestHook$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.wgh_1(this.xgh_1.nfj_1, this.ygh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zgh_1 = suspendResult;
            if (!(this.zgh_1 == null)) {
              this.n9_1 = 2;
              suspendResult = this.xgh_1.sfi(this.zgh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RenderRequestHook$install$slambda).efy = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.wgh_1, completion);
    i.xgh_1 = $this$intercept;
    i.ygh_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.dfy($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).agi = function (client, handler) {
    var tmp = Phases_getInstance().zg6_1;
    client.jfx_1.rfj(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).bg7 = function (client, handler) {
    return this.agi(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    var l = function () {
      return new HttpPlainTextConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.wg7_1.lgh_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$0);
    var responseCharsetFallback = $this$createClientPlugin.wg7_1.ngh_1;
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = $this$createClientPlugin.wg7_1.kgh_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      if (!$this$createClientPlugin.wg7_1.lgh_1.l2(element)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$5);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_2 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_2) > 0) {
        this_2.p8(',');
      }
      this_2.p8(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.g();
    while (tmp0_iterator_1.h()) {
      var element_1 = tmp0_iterator_1.i();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>.<anonymous>' call
      var charset = element_1.gb();
      var quality = element_1.hb();
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_2) > 0) {
        this_2.p8(',');
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0.0 <= quality ? quality <= 1.0 : false)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.math.roundToInt' call
      var this_3 = 100 * quality;
      var truncatedQuality = roundToInt(this_3) / 100.0;
      this_2.p8(get_name(charset) + ';q=' + truncatedQuality);
    }
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(this_2) === 0) {
      this_2.p8(get_name(responseCharsetFallback));
    }
    var acceptCharsetHeader = this_2.toString();
    var tmp0_elvis_lhs = $this$createClientPlugin.wg7_1.mgh_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_1 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.eb_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().pfd_1 : tmp3_elvis_lhs;
    var tmp_2 = RenderRequestHook_instance;
    $this$createClientPlugin.zg7(tmp_2, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.bgi(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.cgi_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.cgi_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.cgi_1;
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
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().pfl_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().ifk('Sending request body to ' + request.kfz_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.kfy());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().ifk('Reading response body for ' + call.tg1().wg1().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addCharsetHeaders(acceptCharsetHeader, context) {
    if (!(context.mfz_1.v48(HttpHeaders_getInstance().hfm_1) == null))
      return Unit_instance;
    get_LOGGER_2().ifk('Adding Accept-Charset=' + acceptCharsetHeader + ' to ' + context.kfz_1.toString());
    context.mfz_1.qfg(HttpHeaders_getInstance().hfm_1, acceptCharsetHeader);
  }
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
    var tmp = b.fb_1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
    var tmp$ret$1 = a.fb_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
    var tmp = get_name(a);
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
    var tmp$ret$1 = get_name(b);
    return compareValues(tmp, tmp$ret$1);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.lgi_1 = $acceptCharsetHeader;
    this.mgi_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).pgi = function (request, content, $completion) {
    var tmp = this.qgi(request, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpPlainText$lambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.pgi(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          invoke$addCharsetHeaders(this.lgi_1, this.ngi_1);
          var tmp_0 = this.ogi_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.ngi_1);
          if (!(contentType_0 == null) && !(contentType_0.zfl_1 === Text_getInstance().pfl_1.zfl_1)) {
            return null;
          }
          return invoke$wrapContent(this.mgi_1, this.ngi_1, this.ogi_1, contentType_0);
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).qgi = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.lgi_1, this.mgi_1, completion);
    i.ngi_1 = request;
    i.ogi_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    var l = function (request, content, $completion) {
      return i.pgi(request, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.zgi_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).egj = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.fgj($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpPlainText$lambda$slambda_1).ggj = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.egj(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (!this.dgj_1.efk_1.equals(PrimitiveClasses_getInstance().qc()))
              return null;
            this.n9_1 = 1;
            suspendResult = readRemaining(this.cgj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.zgi_1, this.bgj_1.sg2(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).fgj = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.zgi_1, completion);
    i.agj_1 = $this$transformResponseBody;
    i.bgj_1 = response;
    i.cgj_1 = content;
    i.dgj_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    var l = function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.egj($this$transformResponseBody, response, content, requestedType, $completion);
    };
    l.$arity = 4;
    return l;
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.hgj_1 = true;
    this.igj_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.dft_1;
    return tmp0_subject === Companion_getInstance_0().mfr_1.dft_1 || tmp0_subject === Companion_getInstance_0().nfr_1.dft_1 || (tmp0_subject === Companion_getInstance_0().sfr_1.dft_1 || (tmp0_subject === Companion_getInstance_0().tfr_1.dft_1 || tmp0_subject === Companion_getInstance_0().ofr_1.dft_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    var l = function () {
      return new HttpRedirectConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.wg7_1.hgj_1;
    var allowHttpsDowngrade = $this$createClientPlugin.wg7_1.igj_1;
    var tmp = Send_instance;
    $this$createClientPlugin.zg7(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$7(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.jgk_1 = $checkHttpMethod;
    this.kgk_1 = $allowHttpsDowngrade;
    this.lgk_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).ygf = function ($this$on, request, $completion) {
    var tmp = this.zgf($this$on, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpRedirect$lambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.ygf(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.mgk_1.cgg(this.ngk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ogk_1 = suspendResult;
            if (this.jgk_1 && !get_ALLOWED_FOR_REDIRECT().p(this.ogk_1.tg1().tg2())) {
              return this.ogk_1;
            }

            this.n9_1 = 2;
            suspendResult = invoke$handleCall(this.mgk_1, this.ngk_1, this.ogk_1, this.kgk_1, this.lgk_1.vg7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  protoOf(HttpRedirect$lambda$slambda).zgf = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.jgk_1, this.kgk_1, this.lgk_1, completion);
    i.mgk_1 = $this$on;
    i.ngk_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.ygf($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $invoke$handleCallCOROUTINE$7(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rgj_1 = _this__u8e3s4;
    this.sgj_1 = context;
    this.tgj_1 = origin;
    this.ugj_1 = allowHttpsDowngrade;
    this.vgj_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$7).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!isRedirect(this.tgj_1.kfy().xg1()))
              return this.tgj_1;
            this.wgj_1 = this.tgj_1;
            this.xgj_1 = this.sgj_1;
            this.ygj_1 = this.tgj_1.tg1().wg1().ifu_1;
            this.zgj_1 = get_authority(this.tgj_1.tg1().wg1());
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.vgj_1.pfx_1.dfw(get_HttpResponseRedirectEvent(), this.wgj_1.kfy());
            this.agk_1 = this.wgj_1.kfy().ifq().v48(HttpHeaders_getInstance().ufn_1);
            get_LOGGER_3().ifk('Received redirect response to ' + this.agk_1 + ' for request ' + this.sgj_1.kfz_1.toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.ig5(this.xgj_1);
            this_0.kfz_1.sft_1.i2();
            var tmp0_safe_receiver = this.agk_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(this_0.kfz_1, tmp0_safe_receiver);
            }

            if (!this.ugj_1 && isSecure(this.ygj_1) && !isSecure(this_0.kfz_1.vft())) {
              get_LOGGER_3().ifk('Can not redirect ' + this.sgj_1.kfz_1.toString() + ' because of security downgrade');
              return this.wgj_1;
            }

            if (!(this.zgj_1 === get_authority_0(this_0.kfz_1))) {
              this_0.mfz_1.ufg(HttpHeaders_getInstance().pfm_1);
              get_LOGGER_3().ifk('Removing Authorization header from redirect for ' + this.sgj_1.kfz_1.toString());
            }

            tmp_0.xgj_1 = this_0;
            this.n9_1 = 2;
            suspendResult = this.rgj_1.cgg(this.xgj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wgj_1 = suspendResult;
            if (!isRedirect(this.wgj_1.kfy().xg1()))
              return this.wgj_1;
            this.n9_1 = 1;
            continue $sm;
          case 3:
            throw this.q9_1;
          case 4:
            return Unit_instance;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_1().jfq_1, Companion_getInstance_1().ofq_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function invoke$proceed(receiver, $completion) {
    var tmp = new $invoke$proceedCOROUTINE$8(receiver, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function SetupRequestContext$install$slambda$proceed$ref($boundThis) {
    this.ygk_1 = $boundThis;
  }
  protoOf(SetupRequestContext$install$slambda$proceed$ref).i23 = function ($completion) {
    return invoke$proceed(this.ygk_1, $completion);
  };
  protoOf(SetupRequestContext$install$slambda$proceed$ref).db = function ($completion) {
    return this.i23($completion);
  };
  function SetupRequestContext$install$slambda$proceed$ref_0($boundThis) {
    var i = new SetupRequestContext$install$slambda$proceed$ref($boundThis);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $invoke$proceedCOROUTINE$8(receiver, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xgk_1 = receiver;
  }
  protoOf($invoke$proceedCOROUTINE$8).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.xgk_1.tfi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.hgl_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).dfy = function ($this$intercept, it, $completion) {
    var tmp = this.efy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SetupRequestContext$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.hgl_1(this.igl_1.nfj_1, SetupRequestContext$install$slambda$proceed$ref_0(this.igl_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SetupRequestContext$install$slambda).efy = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.hgl_1, completion);
    i.igl_1 = $this$intercept;
    i.jgl_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.dfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).kgl = function (client, handler) {
    var tmp = Phases_getInstance().wg6_1;
    client.jfx_1.rfj(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).bg7 = function (client, handler) {
    return this.kgl(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.e15(attachToClientEngineJob$lambda(requestJob));
    requestJob.e15(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.zg7(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.tgl_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).ygl = function (request, proceed, $completion) {
    var tmp = this.zgl(request, proceed, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.ygl(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.wgl_1 = SupervisorJob(this.ugl_1.ofz_1);
            attachToClientEngineJob(this.wgl_1, ensureNotNull(this.tgl_1.vg7_1.ifx_1.aa(Key_instance)));
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            this.ugl_1.ofz_1 = this.wgl_1;
            this.n9_1 = 2;
            suspendResult = this.vgl_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xgl_1 = suspendResult;
            this.o9_1 = 6;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q9_1;
              var tmp_1 = this;
              this.wgl_1.r1b(cause);
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 6;
            var t = this.q9_1;
            this.wgl_1.s1b();
            throw t;
          case 5:
            this.o9_1 = 6;
            this.wgl_1.s1b();
            return Unit_instance;
          case 6:
            throw this.q9_1;
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
  protoOf(HttpRequestLifecycle$lambda$slambda).zgl = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.tgl_1, completion);
    i.ugl_1 = request;
    i.vgl_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    var l = function (request, proceed, $completion) {
      return i.ygl(request, proceed, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().ifk('Cancelling request because engine Job failed with error: ' + toString_0(cause));
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().ifk('Cancelling request because engine Job completed');
        $requestJob.s1b();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.n18();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function Sender() {
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.jgm_1 = $plugin;
    this.kgm_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).dfy = function ($this$intercept, content, $completion) {
    var tmp = this.efy($this$intercept, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpSend$Plugin$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this.mgm_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.mgm_1)) + ', with Content-Type: ' + toString_0(contentType(this.lgm_1.nfj_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var this_0 = this.lgm_1.nfj_1;
            var body = this.mgm_1;
            if (body == null) {
              this_0.nfz_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              this_0.jg5(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.nfz_1 = body;
                this_0.jg5(null);
              } else {
                this_0.nfz_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_6 = null;
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                this_0.jg5(new TypeInfo(tmp_4, tmp_5));
              }
            }

            this.ngm_1 = new DefaultSender(this.jgm_1.qgm_1, this.kgm_1);
            this.ogm_1 = this.ngm_1;
            var _iterator__ex2g4s = reversed(this.jgm_1.rgm_1).g();
            while (_iterator__ex2g4s.h()) {
              var interceptor = _iterator__ex2g4s.i();
              this.ogm_1 = new InterceptedSender(interceptor, this.ogm_1);
            }

            this.n9_1 = 1;
            suspendResult = this.ogm_1.agm(this.lgm_1.nfj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.pgm_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.lgm_1.sfi(this.pgm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(HttpSend$Plugin$install$slambda).efy = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.jgm_1, this.kgm_1, completion);
    i.lgm_1 = $this$intercept;
    i.mgm_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $completion) {
      return i.dfy($this$intercept, content, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$9(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.agn_1 = _this__u8e3s4;
    this.bgn_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$9).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp0_safe_receiver = this.agn_1.fgn_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.agn_1.egn_1 >= this.agn_1.cgn_1) {
              throw new SendCountExceedException('Max send count ' + this.agn_1.cgn_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.agn_1.egn_1;
            this.agn_1.egn_1 = _unary__edvuaz + 1 | 0;
            this.n9_1 = 1;
            suspendResult = this.agn_1.dgn_1.lfx_1.mfj(this.bgn_1, this.bgn_1.nfz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.agn_1.fgn_1 = call;
            return call;
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
  function Config() {
    this.ggn_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$0 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$0);
    tmp.hgn_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).v = function () {
    return this.hgn_1;
  };
  protoOf(Plugin).ign = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new HttpSend(config.ggn_1);
  };
  protoOf(Plugin).pg0 = function (block) {
    return this.ign(block);
  };
  protoOf(Plugin).jgn = function (plugin, scope) {
    var tmp = Phases_getInstance().ag7_1;
    scope.jfx_1.rfj(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).qg0 = function (plugin, scope) {
    return this.jgn(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.kgn_1 = interceptor;
    this.lgn_1 = nextSender;
  }
  protoOf(InterceptedSender).agm = function (requestBuilder, $completion) {
    return this.kgn_1(this.lgn_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.cgn_1 = maxSendCount;
    this.dgn_1 = client;
    this.egn_1 = 0;
    this.fgn_1 = null;
  }
  protoOf(DefaultSender).agm = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$9(this, requestBuilder, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.qgm_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.rgm_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).mgn = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.rgm_1.e(block);
  };
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    other instanceof HttpTimeoutCapability || THROW_CCE();
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HookHandler(hook, handler) {
    this.ngn_1 = hook;
    this.ogn_1 = handler;
  }
  protoOf(HookHandler).rfz = function (client) {
    this.ngn_1.bg7(client, this.ogn_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.ug7_1 = key;
    this.vg7_1 = client;
    this.wg7_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.xg7_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.yg7_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).bgi = function (block) {
    this.zg7(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).zg7 = function (hook, handler) {
    this.xg7_1.e(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.pgn_1 = key;
    this.qgn_1 = config;
    this.rgn_1 = body;
    var tmp = this;
    tmp.sgn_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).rfz = function (scope) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ClientPluginBuilder(this.pgn_1, scope, this.qgn_1);
    // Inline function 'kotlin.contracts.contract' call
    this.rgn_1(this_0);
    var pluginBuilder = this_0;
    this.sgn_1 = pluginBuilder.yg7_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = pluginBuilder.xg7_1.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.plugins.api.ClientPluginInstance.install.<anonymous>' call
      element.rfz(scope);
    }
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.bgo_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).dfy = function ($this$intercept, it, $completion) {
    var tmp = this.efy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SetupRequest$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.dfy(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.bgo_1(this.cgo_1.nfj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SetupRequest$install$slambda).efy = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.bgo_1, completion);
    i.cgo_1 = $this$intercept;
    i.dgo_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.dfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).ego = function (client, handler) {
    var tmp = Phases_getInstance().wg6_1;
    client.jfx_1.rfj(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).bg7 = function (client, handler) {
    return this.ego(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.agg_1 = httpSendSender;
    this.bgg_1 = coroutineContext;
  }
  protoOf(Sender_0).b14 = function () {
    return this.bgg_1;
  };
  protoOf(Sender_0).cgg = function (requestBuilder, $completion) {
    return this.agg_1.agm(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.ngo_1 = $handler;
    this.ogo_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).rgo = function ($this$intercept, request, $completion) {
    var tmp = this.sgo($this$intercept, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Send$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.rgo(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ngo_1(new Sender_0(this.pgo_1, this.ogo_1.ifx_1), this.qgo_1, this);
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
  protoOf(Send$install$slambda).sgo = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.ngo_1, this.ogo_1, completion);
    i.pgo_1 = $this$intercept;
    i.qgo_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    var l = function ($this$intercept, request, $completion) {
      return i.rgo($this$intercept, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Send() {
  }
  protoOf(Send).tgo = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.mgn(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).bg7 = function (client, handler) {
    return this.tgo(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.ugo_1 = createConfiguration;
    this.vgo_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().gc(), arrayOf([]), false)]), 'invariant', false), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_2 = null;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    var tmp$ret$0 = tmp_1;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$0);
    tmp.wgo_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).v = function () {
    return this.wgo_1;
  };
  protoOf(ClientPluginImpl).xgo = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.ugo_1();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.wgo_1, config, this.vgo_1);
  };
  protoOf(ClientPluginImpl).pg0 = function (block) {
    return this.xgo(block);
  };
  protoOf(ClientPluginImpl).ygo = function (plugin, scope) {
    plugin.rfz(scope);
  };
  protoOf(ClientPluginImpl).qg0 = function (plugin, scope) {
    return this.ygo(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.hgp_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).yfy = function ($this$intercept, it, $completion) {
    var tmp = this.zfy($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(TransformResponseBodyHook$install$slambda).s24 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.yfy(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.kgp_1 = this.igp_1.rfi();
            this.lgp_1 = this.kgp_1.gb();
            this.mgp_1 = this.kgp_1.hb();
            var tmp_0 = this.mgp_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_instance;
            this.n9_1 = 1;
            suspendResult = this.hgp_1(new TransformResponseBodyContext(), this.igp_1.nfj_1.kfy(), this.mgp_1, this.lgp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ngp_1 = suspendResult;
            var tmp_1 = this;
            var tmp_2;
            if (this.ngp_1 == null) {
              return Unit_instance;
            } else {
              tmp_2 = this.ngp_1;
            }

            tmp_1.ogp_1 = tmp_2;
            var tmp_3;
            var tmp_4 = this.ogp_1;
            if (!(tmp_4 instanceof NullBody)) {
              tmp_3 = !this.lgp_1.efk_1.lb(this.ogp_1);
            } else {
              tmp_3 = false;
            }

            if (tmp_3) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(this.ogp_1) + ' but expected value of type ' + this.lgp_1.toString());
            }

            this.n9_1 = 2;
            suspendResult = this.igp_1.sfi(new HttpResponseContainer(this.lgp_1, this.ogp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(TransformResponseBodyHook$install$slambda).zfy = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.hgp_1, completion);
    i.igp_1 = $this$intercept;
    i.jgp_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.yfy($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).pgp = function (client, handler) {
    var tmp = Phases_getInstance_2().kg0_1;
    client.kfx_1.rfj(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).bg7 = function (client, handler) {
    return this.pgp(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda(this$0, this$1, resultContinuation) {
    this.ygp_1 = this$0;
    this.zgp_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 12;
            this.bgq_1 = BytePacketBuilder();
            this.o9_1 = 11;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.ygp_1.fgc_1.qf8()) {
              this.n9_1 = 10;
              continue $sm;
            }

            if (get_availableForRead(this.ygp_1.fgc_1) === 0) {
              this.n9_1 = 2;
              suspendResult = this.ygp_1.fgc_1.sf8(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            suspendResult = readPacket(this.ygp_1.fgc_1, get_availableForRead(this.ygp_1.fgc_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.dgq_1 = suspendResult;
            this.o9_1 = 8;
            if (!this.agq_1.kfc_1.of8()) {
              this.n9_1 = 5;
              suspendResult = writePacket(this.agq_1.kfc_1, this.dgq_1.s2v(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 5:
            this.n9_1 = 6;
            suspendResult = this.agq_1.kfc_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.n9_1 = 7;
            continue $sm;
          case 7:
            this.o9_1 = 11;
            this.n9_1 = 9;
            continue $sm;
          case 8:
            this.o9_1 = 11;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Exception) {
              var _unused_var__etf5q3 = this.q9_1;
              this.n9_1 = 9;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 9:
            this.o9_1 = 11;
            writePacket_0(this.bgq_1, this.dgq_1);
            this.n9_1 = 1;
            continue $sm;
          case 10:
            var tmp0_safe_receiver = this.ygp_1.fgc_1.mf8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            this.cgq_1 = this.zgp_1.egq_1.p1b(readByteArray(build(this.bgq_1)));
            this.o9_1 = 12;
            this.n9_1 = 13;
            continue $sm;
          case 11:
            this.o9_1 = 12;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q9_1;
              var tmp_2 = this;
              this.bgq_1.l4();
              this.zgp_1.egq_1.r1b(cause);
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 12:
            throw this.q9_1;
          case 13:
            this.o9_1 = 12;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 12) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda).wg3 = function ($this$writer, completion) {
    var i = new ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda(this.ygp_1, this.zgp_1, completion);
    i.agq_1 = $this$writer;
    return i;
  };
  function ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda_0(this$0, this$1, resultContinuation) {
    var i = new ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CopyFromSourceTask($outer, savedResponse) {
    savedResponse = savedResponse === VOID ? CompletableDeferred() : savedResponse;
    this.ggq_1 = $outer;
    this.egq_1 = savedResponse;
  }
  protoOf(CopyFromSourceTask).hgq = function () {
    var tmp = this.fgq_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('writerJob');
    }
  };
  protoOf(CopyFromSourceTask).z14 = function () {
    this.fgq_1 = this.igq();
    return this.hgq().ifc_1;
  };
  protoOf(CopyFromSourceTask).igq = function () {
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().k1g_1;
    return writer(tmp, tmp_0, VOID, ByteChannelReplay$CopyFromSourceTask$receiveBody$slambda_0(this.ggq_1, this, null));
  };
  protoOf(CopyFromSourceTask).jgq = function ($completion) {
    if (!get_isCompleted(this.hgq())) {
      this.hgq().ifc_1.q8e(new SaveBodyAbandonedReadException());
    }
    return this.egq_1.r17($completion);
  };
  function ByteChannelReplay$replay$slambda($copyTask, resultContinuation) {
    this.sgq_1 = $copyTask;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ByteChannelReplay$replay$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ByteChannelReplay$replay$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ByteChannelReplay$replay$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = ensureNotNull(this.sgq_1._v).jgq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ugq_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = writeFully(this.tgq_1.kfc_1, this.ugq_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf(ByteChannelReplay$replay$slambda).wg3 = function ($this$writer, completion) {
    var i = new ByteChannelReplay$replay$slambda(this.sgq_1, completion);
    i.tgq_1 = $this$writer;
    return i;
  };
  function ByteChannelReplay$replay$slambda_0($copyTask, resultContinuation) {
    var i = new ByteChannelReplay$replay$slambda($copyTask, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ByteChannelReplay(origin) {
    this.fgc_1 = origin;
    this.ggc_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannelReplay).hgc = function () {
    if (!(this.fgc_1.mf8() == null)) {
      throw ensureNotNull(this.fgc_1.mf8());
    }
    var copyTask = {_v: this.ggc_1.kotlinx$atomicfu$value};
    if (copyTask._v == null) {
      copyTask._v = new CopyFromSourceTask(this);
      if (!this.ggc_1.atomicfu$compareAndSet(null, copyTask._v)) {
        copyTask._v = this.ggc_1.kotlinx$atomicfu$value;
      } else {
        return copyTask._v.z14();
      }
    }
    var tmp = GlobalScope_instance;
    return writer(tmp, VOID, VOID, ByteChannelReplay$replay$slambda_0(copyTask, null)).ifc_1;
  };
  function SaveBodyAbandonedReadException() {
    RuntimeException_init_$Init$('Save body abandoned', this);
    captureStack(this, SaveBodyAbandonedReadException);
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return DelegatedCall_init_$Create$(_this__u8e3s4.ffy_1, content, _this__u8e3s4);
  }
  function wrapWithContent_0(_this__u8e3s4, block) {
    return new DelegatedCall(_this__u8e3s4.ffy_1, block, _this__u8e3s4);
  }
  function DelegatedCall_init_$Init$(client, content, originCall, responseHeaders, $this) {
    responseHeaders = responseHeaders === VOID ? originCall.kfy().ifq() : responseHeaders;
    DelegatedCall.call($this, client, DelegatedCall$_init_$lambda_8e37y(content), originCall, responseHeaders);
    return $this;
  }
  function DelegatedCall_init_$Create$(client, content, originCall, responseHeaders) {
    return DelegatedCall_init_$Init$(client, content, originCall, responseHeaders, objectCreate(protoOf(DelegatedCall)));
  }
  function DelegatedCall$_init_$lambda_8e37y($content) {
    return function () {
      return $content;
    };
  }
  function DelegatedCall(client, block, originCall, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.kfy().ifq() : responseHeaders;
    HttpClientCall.call(this, client);
    this.hfy_1 = new DelegatedRequest(this, originCall.tg1());
    this.ify_1 = new DelegatedResponse(this, block, originCall.kfy(), responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.vgq_1 = origin;
    this.wgq_1 = call;
  }
  protoOf(DelegatedRequest).sg2 = function () {
    return this.wgq_1;
  };
  protoOf(DelegatedRequest).b14 = function () {
    return this.vgq_1.b14();
  };
  protoOf(DelegatedRequest).tg2 = function () {
    return this.vgq_1.tg2();
  };
  protoOf(DelegatedRequest).wg1 = function () {
    return this.vgq_1.wg1();
  };
  protoOf(DelegatedRequest).zg0 = function () {
    return this.vgq_1.zg0();
  };
  protoOf(DelegatedRequest).ifq = function () {
    return this.vgq_1.ifq();
  };
  function DelegatedResponse(call, block, origin, headers) {
    headers = headers === VOID ? origin.ifq() : headers;
    HttpResponse.call(this);
    this.xgq_1 = call;
    this.ygq_1 = block;
    this.zgq_1 = origin;
    this.agr_1 = headers;
    this.bgr_1 = this.zgq_1.b14();
  }
  protoOf(DelegatedResponse).sg2 = function () {
    return this.xgq_1;
  };
  protoOf(DelegatedResponse).ifq = function () {
    return this.agr_1;
  };
  protoOf(DelegatedResponse).ug1 = function () {
    return this.ygq_1();
  };
  protoOf(DelegatedResponse).b14 = function () {
    return this.bgr_1;
  };
  protoOf(DelegatedResponse).xg1 = function () {
    return this.zgq_1.xg1();
  };
  protoOf(DelegatedResponse).cg3 = function () {
    return this.zgq_1.cg3();
  };
  protoOf(DelegatedResponse).dg3 = function () {
    return this.zgq_1.dg3();
  };
  protoOf(DelegatedResponse).eg3 = function () {
    return this.zgq_1.eg3();
  };
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    other instanceof SSECapability || THROW_CCE();
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    other instanceof WebSocketCapability || THROW_CCE();
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  function ClientUpgradeContent() {
  }
  function DefaultHttpRequest(call, data) {
    this.cgr_1 = call;
    this.dgr_1 = data.kg4_1;
    this.egr_1 = data.jg4_1;
    this.fgr_1 = data.mg4_1;
    this.ggr_1 = data.lg4_1;
    this.hgr_1 = data.og4_1;
  }
  protoOf(DefaultHttpRequest).sg2 = function () {
    return this.cgr_1;
  };
  protoOf(DefaultHttpRequest).b14 = function () {
    return this.sg2().b14();
  };
  protoOf(DefaultHttpRequest).tg2 = function () {
    return this.dgr_1;
  };
  protoOf(DefaultHttpRequest).wg1 = function () {
    return this.egr_1;
  };
  protoOf(DefaultHttpRequest).ifq = function () {
    return this.ggr_1;
  };
  protoOf(DefaultHttpRequest).zg0 = function () {
    return this.hgr_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_7() {
    return Companion_instance_2;
  }
  function HttpRequestBuilder() {
    this.kfz_1 = new URLBuilder();
    this.lfz_1 = Companion_getInstance_1().jfq_1;
    this.mfz_1 = new HeadersBuilder();
    this.nfz_1 = EmptyContent_getInstance();
    this.ofz_1 = SupervisorJob();
    this.pfz_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).ifq = function () {
    return this.mfz_1;
  };
  protoOf(HttpRequestBuilder).jg5 = function (value) {
    if (!(value == null)) {
      this.pfz_1.wfe(get_BodyTypeAttributeKey(), value);
    } else {
      this.pfz_1.xfe(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).igr = function () {
    return this.pfz_1.ufe(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).c2o = function () {
    var tmp = this.kfz_1.c2o();
    var tmp_0 = this.lfz_1;
    var tmp_1 = this.mfz_1.c2o();
    var tmp_2 = this.nfz_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var message = 'No request transformation found: ' + toString(this.nfz_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.ofz_1, this.pfz_1);
  };
  protoOf(HttpRequestBuilder).ig5 = function (builder) {
    this.ofz_1 = builder.ofz_1;
    return this.jgr(builder);
  };
  protoOf(HttpRequestBuilder).jgr = function (builder) {
    this.lfz_1 = builder.lfz_1;
    this.nfz_1 = builder.nfz_1;
    this.jg5(builder.igr());
    takeFrom_0(this.kfz_1, builder.kfz_1);
    this.kfz_1.qft_1 = this.kfz_1.qft_1;
    appendAll(this.mfz_1, builder.mfz_1);
    putAll(this.pfz_1, builder.pfz_1);
    return this;
  };
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.jg4_1 = url;
    this.kg4_1 = method;
    this.lg4_1 = headers;
    this.mg4_1 = body;
    this.ng4_1 = executionContext;
    this.og4_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.og4_1.ufe(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    tmp.pg4_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.jg4_1.toString() + ', method=' + this.kg4_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.sg0_1 = statusCode;
    this.tg0_1 = requestTime;
    this.ug0_1 = headers;
    this.vg0_1 = version;
    this.wg0_1 = body;
    this.xg0_1 = callContext;
    this.yg0_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.sg0_1.toString() + ')';
  };
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.mg4_1;
    return tmp instanceof ClientUpgradeContent;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.wg6_1 = new PipelinePhase('Before');
    this.xg6_1 = new PipelinePhase('State');
    this.yg6_1 = new PipelinePhase('Transform');
    this.zg6_1 = new PipelinePhase('Render');
    this.ag7_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().wg6_1, Phases_getInstance().xg6_1, Phases_getInstance().yg6_1, Phases_getInstance().zg6_1, Phases_getInstance().ag7_1]);
    this.sgr_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).lfj = function () {
    return this.sgr_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.sfz_1 = new PipelinePhase('Before');
    this.tfz_1 = new PipelinePhase('State');
    this.ufz_1 = new PipelinePhase('Monitoring');
    this.vfz_1 = new PipelinePhase('Engine');
    this.wfz_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().sfz_1, Phases_getInstance_0().tfz_1, Phases_getInstance_0().ufz_1, Phases_getInstance_0().vfz_1, Phases_getInstance_0().wfz_1]);
    this.ags_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).lfj = function () {
    return this.ags_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.bgs_1 = call;
    this.cgs_1 = responseData.xg0_1;
    this.dgs_1 = responseData.sg0_1;
    this.egs_1 = responseData.vg0_1;
    this.fgs_1 = responseData.tg0_1;
    this.ggs_1 = responseData.yg0_1;
    var tmp = this;
    var tmp_0 = responseData.wg0_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.hgs_1 = tmp0_elvis_lhs == null ? Companion_getInstance().wf8_1 : tmp0_elvis_lhs;
    this.igs_1 = responseData.ug0_1;
  }
  protoOf(DefaultHttpResponse).sg2 = function () {
    return this.bgs_1;
  };
  protoOf(DefaultHttpResponse).b14 = function () {
    return this.cgs_1;
  };
  protoOf(DefaultHttpResponse).xg1 = function () {
    return this.dgs_1;
  };
  protoOf(DefaultHttpResponse).cg3 = function () {
    return this.egs_1;
  };
  protoOf(DefaultHttpResponse).dg3 = function () {
    return this.fgs_1;
  };
  protoOf(DefaultHttpResponse).eg3 = function () {
    return this.ggs_1;
  };
  protoOf(DefaultHttpResponse).ug1 = function () {
    return this.hgs_1;
  };
  protoOf(DefaultHttpResponse).ifq = function () {
    return this.igs_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).wg1().toString() + ', ' + this.xg1().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.sg2().tg1();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().pfd_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function bodyAsChannel(_this__u8e3s4, $completion) {
    var tmp = new $bodyAsChannelCOROUTINE$13(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rgs_1 = _this__u8e3s4;
    this.sgs_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$12).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.rgs_1);
            tmp_0.tgs_1 = tmp0_elvis_lhs == null ? this.sgs_1 : tmp0_elvis_lhs;
            this.ugs_1 = this.tgs_1.sfd();
            var tmp_1 = this;
            tmp_1.vgs_1 = this.rgs_1;
            this.n9_1 = 1;
            var tmp_2 = this.vgs_1.sg2();
            var tmp_3 = getKClass(Source);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_2.vg1(new TypeInfo(tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.ugs_1, input);
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
  function $bodyAsChannelCOROUTINE$13(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.egt_1 = _this__u8e3s4;
  }
  protoOf($bodyAsChannelCOROUTINE$13).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.fgt_1 = this.egt_1;
            this.n9_1 = 1;
            var tmp_1 = this.fgt_1.sg2();
            var tmp_2 = getKClass(ByteReadChannel);
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(ByteReadChannel), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_1.vg1(new TypeInfo(tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (!(suspendResult == null) ? isInterface(suspendResult, ByteReadChannel) : false) ? suspendResult : THROW_CCE();
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.rg7_1 = new PipelinePhase('Before');
    this.sg7_1 = new PipelinePhase('State');
    this.tg7_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().rg7_1, Phases_getInstance_1().sg7_1, Phases_getInstance_1().tg7_1]);
    this.ngt_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).lfj = function () {
    return this.ngt_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.ig0_1 = new PipelinePhase('Receive');
    this.jg0_1 = new PipelinePhase('Parse');
    this.kg0_1 = new PipelinePhase('Transform');
    this.lg0_1 = new PipelinePhase('State');
    this.mg0_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().ig0_1, Phases_getInstance_2().jg0_1, Phases_getInstance_2().kg0_1, Phases_getInstance_2().lg0_1, Phases_getInstance_2().mg0_1]);
    this.vgt_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).lfj = function () {
    return this.vgt_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.rg1_1 = expectedType;
    this.sg1_1 = response;
  }
  protoOf(HttpResponseContainer).gb = function () {
    return this.rg1_1;
  };
  protoOf(HttpResponseContainer).hb = function () {
    return this.sg1_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.rg1_1.toString() + ', response=' + toString(this.sg1_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.rg1_1.hashCode();
    result = imul(result, 31) + hashCode(this.sg1_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.rg1_1.equals(tmp0_other_with_cast.rg1_1))
      return false;
    if (!equals(this.sg1_1, tmp0_other_with_cast.sg1_1))
      return false;
    return true;
  };
  function $executeCOROUTINE$14(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.egu_1 = _this__u8e3s4;
    this.fgu_1 = block;
  }
  protoOf($executeCOROUTINE$14).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 14;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 13;
            this.n9_1 = 2;
            suspendResult = this.egu_1.ngu(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hgu_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.o9_1 = 11;
            this.n9_1 = 5;
            suspendResult = this.fgu_1(this.hgu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.igu_1 = suspendResult;
            this.n9_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.jgu_1 = this.igu_1;
            this.o9_1 = 13;
            this.n9_1 = 7;
            suspendResult = this.egu_1.ogu(this.hgu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.jgu_1;
          case 8:
            this.o9_1 = 13;
            this.n9_1 = 9;
            suspendResult = this.egu_1.ogu(this.hgu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.ggu_1 = Unit_instance;
            this.o9_1 = 14;
            this.n9_1 = 10;
            continue $sm;
          case 10:
            return this.ggu_1;
          case 11:
            this.o9_1 = 13;
            this.kgu_1 = this.q9_1;
            this.n9_1 = 12;
            suspendResult = this.egu_1.ogu(this.hgu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            throw this.kgu_1;
          case 13:
            this.o9_1 = 14;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.q9_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.q9_1;
            }

          case 14:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 14) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $fetchStreamingResponseCOROUTINE$15(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xgu_1 = _this__u8e3s4;
  }
  protoOf($fetchStreamingResponseCOROUTINE$15).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.zgu_1 = (new HttpRequestBuilder()).ig5(this.xgu_1.lgu_1);
            skipSavingBody(this.zgu_1);
            this.n9_1 = 2;
            suspendResult = this.xgu_1.mgu_1.ng0(this.zgu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.kfy();
          case 3:
            return this.ygu_1;
          case 4:
            this.o9_1 = 5;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.q9_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.q9_1;
            }

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
  function $cleanupCOROUTINE$17(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.igv_1 = _this__u8e3s4;
    this.jgv_1 = _this__u8e3s4_0;
  }
  protoOf($cleanupCOROUTINE$17).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.jgv_1.b14().aa(Key_instance));
            tmp_0.kgv_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            var tmp_2 = this;
            tmp_2.lgv_1 = this.kgv_1;
            var tmp_3 = this;
            tmp_3.mgv_1 = this.lgv_1;
            this.mgv_1.s1b();
            this.o9_1 = 1;
            cancel_1(this.jgv_1.ug1());
            this.o9_1 = 4;
            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              this.ngv_1 = this.q9_1;
              this.n9_1 = 2;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 2:
            this.o9_1 = 4;
            this.n9_1 = 3;
            suspendResult = this.mgv_1.i15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.lgu_1 = builder;
    this.mgu_1 = client;
  }
  protoOf(HttpStatement).ogv = function (block, $completion) {
    var tmp = new $executeCOROUTINE$14(this, block, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpStatement).ngu = function ($completion) {
    var tmp = new $fetchStreamingResponseCOROUTINE$15(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpStatement).ogu = function (_this__u8e3s4, $completion) {
    var tmp = new $cleanupCOROUTINE$17(this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.lgu_1.kfz_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).ifc_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.xgv_1 = $this_observable;
    this.ygv_1 = $listener;
    this.zgv_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(observable$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 16;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.cgw_1 = get_ByteArrayPool();
            this.dgw_1 = this.cgw_1.efe();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 15;
            var tmp_1 = this;
            tmp_1.fgw_1 = this.dgw_1;
            this.ggw_1 = new Long(0, 0);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!!this.xgv_1.qf8()) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.n9_1 = 5;
            suspendResult = readAvailable(this.xgv_1, this.fgw_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.hgw_1 = suspendResult;
            if (this.hgw_1 <= 0) {
              this.n9_1 = 4;
              continue $sm;
            } else {
              this.n9_1 = 6;
              continue $sm;
            }

          case 6:
            this.n9_1 = 7;
            suspendResult = writeFully(this.agw_1.kfc_1, this.fgw_1, 0, this.hgw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_2 = this;
            var this_0 = this.ggw_1;
            var other = this.hgw_1;
            tmp_2.ggw_1 = this_0.a3(toLong(other));
            this.n9_1 = 8;
            suspendResult = this.ygv_1.fg3(this.ggw_1, this.zgv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.n9_1 = 4;
            continue $sm;
          case 9:
            this.igw_1 = this.xgv_1.mf8();
            close(this.agw_1.kfc_1, this.igw_1);
            if (this.igw_1 == null && this.ggw_1.equals(new Long(0, 0))) {
              this.n9_1 = 10;
              suspendResult = this.ygv_1.fg3(this.ggw_1, this.zgv_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 11;
              continue $sm;
            }

          case 10:
            this.n9_1 = 11;
            continue $sm;
          case 11:
            this.egw_1 = Unit_instance;
            this.o9_1 = 16;
            this.n9_1 = 12;
            var tmp_3 = this;
            continue $sm;
          case 12:
            this.o9_1 = 16;
            var tmp_4 = this;
            this.cgw_1.ffe(this.dgw_1);
            tmp_4.bgw_1 = Unit_instance;
            this.n9_1 = 14;
            continue $sm;
          case 13:
            this.o9_1 = 16;
            this.cgw_1.ffe(this.dgw_1);
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.o9_1 = 16;
            var t = this.q9_1;
            this.cgw_1.ffe(this.dgw_1);
            throw t;
          case 16:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 16) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).wg3 = function ($this$writer, completion) {
    var i = new observable$slambda(this.xgv_1, this.ygv_1, this.zgv_1, completion);
    i.agw_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.jgw_1 = response;
    this.kgw_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.mgw_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).nfv = function () {
    return this.mgw_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    other instanceof EmptyContent || THROW_CCE();
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0.c2o();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    this.rgw_1 = Object.create(null);
  }
  function Js() {
  }
  protoOf(Js).sgw = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).og0 = function (block) {
    return this.sgw(block);
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = headers.jfg();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.createWebSocket.<anonymous>' call
      if (equals_0(element, 'sec-websocket-protocol', true)) {
        destination.e(element);
      }
    }
    var protocolHeaderNames = destination;
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = protocolHeaderNames.g();
    while (tmp0_iterator_0.h()) {
      var element_0 = tmp0_iterator_0.i();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.createWebSocket.<anonymous>' call
      var tmp0_safe_receiver = headers.ifg(element_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination_0.e(tmp0_safe_receiver);
      }
    }
    var this_1 = flatten(destination_0);
    var protocols = copyToArray(this_1);
    var tmp;
    if (PlatformUtils_getInstance().zff_1) {
      tmp = new WebSocket(urlString_capturingHack, protocols);
    } else {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.lfg(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, protocols, {headers: headers_capturingHack});
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$19($this, request, callContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function JsClientEngine$execute$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$18(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rgx_1 = _this__u8e3s4;
    this.sgx_1 = data;
  }
  protoOf($executeCOROUTINE$18).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.n9_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tgx_1 = suspendResult;
            this.ugx_1 = this.sgx_1.og4_1.tfe(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.sgx_1)) {
              this.n9_1 = 5;
              suspendResult = executeWebSocketRequest(this.rgx_1, this.sgx_1, this.tgx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            this.vgx_1 = GMTDate();
            this.n9_1 = 3;
            suspendResult = toRaw(this.sgx_1, this.ugx_1, this.tgx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.wgx_1 = suspendResult;
            this.xgx_1 = AbortController_0();
            this.wgx_1.signal = this.xgx_1.signal;
            var tmp_0 = get_job(this.tgx_1);
            tmp_0.g15(true, VOID, JsClientEngine$execute$lambda(this.xgx_1));
            this.n9_1 = 4;
            suspendResult = commonFetch(this.sgx_1.jg4_1.toString(), this.wgx_1, this.rgx_1.cgy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_2().tfq_1;
            var body = readBody(CoroutineScope_0(this.tgx_1), rawResponse);
            var tmp0_safe_receiver = this.sgx_1.og4_1.ufe(get_ResponseAdapterAttributeKey());
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kgr(this.sgx_1, status, headers, body, this.sgx_1.mg4_1, this.tgx_1);
            var responseBody = tmp1_elvis_lhs == null ? body : tmp1_elvis_lhs;
            return new HttpResponseData(status, this.vgx_1, headers, version, responseBody, this.tgx_1);
          case 5:
            return suspendResult;
          case 6:
            throw this.q9_1;
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
  function $executeWebSocketRequestCOROUTINE$19(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bgx_1 = _this__u8e3s4;
    this.cgx_1 = request;
    this.dgx_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$19).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.egx_1 = GMTDate();
            this.fgx_1 = this.cgx_1.jg4_1.toString();
            this.ggx_1 = createWebSocket(this.bgx_1, this.fgx_1, this.cgx_1.lg4_1);
            this.hgx_1 = new JsWebSocketSession(this.dgx_1, this.ggx_1);
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = awaitConnection(this.ggx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.igx_1 = suspendResult;
            this.o9_1 = 4;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 4;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var cause = this.q9_1;
              var tmp_1 = this;
              cancel_3(this.dgx_1, CancellationException_0('Failed to connect to ' + this.fgx_1, cause));
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 4;
            return new HttpResponseData(Companion_getInstance_0().bfr_1, this.egx_1, Companion_getInstance_3().dfm_1, Companion_getInstance_2().tfq_1, this.hgx_1, this.dgx_1);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.cgy_1 = config;
    this.dgy_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.cgy_1.bg6_1 == null)) {
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).qfz = function () {
    return this.cgy_1;
  };
  protoOf(JsClientEngine).qg4 = function () {
    return this.dgy_1;
  };
  protoOf(JsClientEngine).wg5 = function (data, $completion) {
    var tmp = new $executeCOROUTINE$18(this, data, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.y14()) {
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.a18(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    return cancellable.t16();
  }
  function asString(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = ['message', 'target', 'type', 'isTrusted'];
    this_0.p8(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    return this_0.toString();
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.sfg(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($continuation, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        // Inline function 'kotlin.coroutines.resume' call
        var this_0 = $continuation;
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
        this_0.y9(tmp$ret$0);
        tmp = Unit_instance;
      } else if (tmp0_subject === 'error') {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = $continuation;
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        this_1.y9(tmp$ret$2);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$20(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$21(content, callContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var this_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.kg4_1.rfq_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.bg0_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.kgz_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(getBodyBytes$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.kgz_1.rfv(this.lgz_1.kfc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(getBodyBytes$slambda).wg3 = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.kgz_1, completion);
    i.lgz_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $toRawCOROUTINE$20(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mgy_1 = _this__u8e3s4;
    this.ngy_1 = clientConfig;
    this.ogy_1 = callContext;
  }
  protoOf($toRawCOROUTINE$20).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.pgy_1 = {};
            mergeHeaders(this.mgy_1.lg4_1, this.mgy_1.mg4_1, toRaw$lambda(this.pgy_1));
            this.n9_1 = 1;
            suspendResult = getBodyBytes(this.mgy_1.mg4_1, this.ogy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.mgy_1, this.pgy_1, this.ngy_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$21(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ygy_1 = content;
    this.zgy_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$21).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.agz_1 = this.ygy_1;
            var tmp_0 = this.agz_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.bgz_1 = this.ygy_1.tfv();
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_1 = this.agz_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.n9_1 = 3;
                suspendResult = readRemaining(this.ygy_1.pfv(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.agz_1;
                if (tmp_2 instanceof WriteChannelContent) {
                  this.n9_1 = 2;
                  var tmp_3 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_3, this.zgy_1, VOID, getBodyBytes$slambda_0(this.ygy_1, null)).ifc_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_4 = this.agz_1;
                  if (tmp_4 instanceof ContentWrapper) {
                    this.n9_1 = 1;
                    suspendResult = getBodyBytes(this.ygy_1.wfv(), this.zgy_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_5 = this.agz_1;
                    if (tmp_5 instanceof NoContent) {
                      this.bgz_1 = null;
                      this.n9_1 = 5;
                      continue $sm;
                    } else {
                      var tmp_6 = this.agz_1;
                      if (tmp_6 instanceof ProtocolUpgrade) {
                        var tmp_7 = this;
                        throw new UnsupportedContentTypeException(this.ygy_1);
                      } else {
                        var tmp_8 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.bgz_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.bgz_1 = readByteArray(ARGUMENT);
            this.n9_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.bgz_1 = readByteArray(ARGUMENT_0);
            this.n9_1 = 5;
            continue $sm;
          case 4:
            throw this.q9_1;
          case 5:
            return this.bgz_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().wf8_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).ifc_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    return cancellable.t16();
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.ugz_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).vg3 = function ($this$writer, $completion) {
    var tmp = this.wg3($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(channelFromStream$slambda).ha = function (p1, $completion) {
    return this.vg3(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.wgz_1 = this.ugz_1.getReader();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.o9_1 = 7;
            this.n9_1 = 2;
            suspendResult = readChunk(this.wgz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xgz_1 = suspendResult;
            if (this.xgz_1 == null) {
              this.o9_1 = 8;
              this.n9_1 = 9;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.ygz_1 = this.xgz_1;
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.zgz_1 = this.ygz_1;
            this.n9_1 = 4;
            suspendResult = writeFully(this.vgz_1.kfc_1, asByteArray(this.zgz_1), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 5;
            suspendResult = this.vgz_1.kfc_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o9_1 = 8;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.o9_1 = 8;
            this.n9_1 = 1;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              var cause = this.q9_1;
              this.wgz_1.cancel(cause);
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 8:
            throw this.q9_1;
          case 9:
            return Unit_instance;
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
  protoOf(channelFromStream$slambda).wg3 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.ugz_1, completion);
    i.vgz_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.vg3($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $continuation.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch(input, init, config, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var tmp;
    if (PlatformUtils_getInstance().zff_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.rgw_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda(cancellable);
    promise.then(tmp_0, commonFetch$lambda_0(cancellable));
    return cancellable.t16();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function commonFetch$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $continuation.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      $continuation.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    var resolved = Companion_getInstance_4().lfw(_this__u8e3s4);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var event = it;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.ch0_1.r1b(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.dh0_1.l1n(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = WebSocketException_init_$Create$(toString(it));
      this$0.ch0_1.r1b(cause);
      this$0.dh0_1.s1n(cause);
      this$0.eh0_1.w1n();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.ch0_1.p1b(reason);
      this$0.dh0_1.l1n(Close_init_$Create$(reason));
      this$0.dh0_1.u1n();
      this$0.eh0_1.w1n();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.qh0_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(JsWebSocketSession$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            var tmp_0 = this;
            tmp_0.sh0_1 = this.qh0_1.eh0_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.uh0_1 = this.sh0_1;
            this.vh0_1 = null;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 9;
            this.o9_1 = 8;
            var tmp_2 = this;
            tmp_2.xh0_1 = this.uh0_1;
            this.yh0_1 = this.xh0_1.g();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 5;
            suspendResult = this.yh0_1.e1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.n9_1 = 6;
              continue $sm;
            }

            var e = this.yh0_1.i();
            switch (e.xfw_1.u2_1) {
              case 0:
                var text = e.yfw_1;
                this.qh0_1.bh0_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_3 = e.yfw_1;
                var source = tmp_3 instanceof Int8Array ? tmp_3 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.qh0_1.bh0_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully_0(builder, e.yfw_1);
                var data = builder;
                var code = data.cf4();
                var reason = readText(data);
                this.qh0_1.ch0_1.p1b(new CloseReason(code, reason));
                if (isReservedStatusCode(code, this.qh0_1)) {
                  this.qh0_1.bh0_1.close();
                } else {
                  this.qh0_1.bh0_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.n9_1 = 4;
            continue $sm;
          case 6:
            this.wh0_1 = Unit_instance;
            this.o9_1 = 10;
            this.n9_1 = 7;
            var tmp_4 = this;
            continue $sm;
          case 7:
            this.o9_1 = 10;
            var tmp_5 = this;
            cancelConsumed(this.uh0_1, this.vh0_1);
            tmp_5.th0_1 = Unit_instance;
            this.n9_1 = 12;
            continue $sm;
          case 8:
            this.o9_1 = 9;
            var tmp_6 = this.q9_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.q9_1;
              var tmp_7 = this;
              this.vh0_1 = e_0;
              throw e_0;
            } else {
              throw this.q9_1;
            }

          case 9:
            this.o9_1 = 10;
            var t = this.q9_1;
            cancelConsumed(this.uh0_1, this.vh0_1);
            throw t;
          case 10:
            throw this.q9_1;
          case 11:
            this.o9_1 = 10;
            cancelConsumed(this.uh0_1, this.vh0_1);
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o9_1 === 10) {
          throw e_1;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).f1x = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.qh0_1, completion);
    i.rh0_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.bh0_1.close();
        tmp = Unit_instance;
      } else {
        this$0.bh0_1.close(Codes_NORMAL_getInstance().ifw_1, 'Client failed');
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.ah0_1 = coroutineContext;
    this.bh0_1 = websocket;
    this.ch0_1 = CompletableDeferred();
    this.dh0_1 = Channel(2147483647);
    this.eh0_1 = Channel(2147483647);
    this.fh0_1 = this.dh0_1;
    this.gh0_1 = this.eh0_1;
    this.hh0_1 = this.ch0_1;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'arraybuffer';
    this.bh0_1.binaryType = tmp$ret$2;
    this.bh0_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.bh0_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.bh0_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    var tmp0_safe_receiver = this.ah0_1.aa(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e15(JsWebSocketSession$lambda_2(this));
    }
  }
  protoOf(JsWebSocketSession).b14 = function () {
    return this.ah0_1;
  };
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_3;
    } else {
      tmp = block;
    }
    block = tmp;
    return HttpClient_0(JsClient(), block);
  }
  function HttpClient$lambda_3(_this__u8e3s4) {
    return Unit_instance;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().j1g_1;
  }
  function JsClient() {
    return Js_instance;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.m1();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.m1();
  });
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.n1();
  });
  protoOf(HttpClientEngineBase).qg4 = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).rfz = install;
  protoOf(KtorCallContextElement).aa = get;
  protoOf(KtorCallContextElement).gj = fold;
  protoOf(KtorCallContextElement).fj = minusKey;
  protoOf(KtorCallContextElement).hj = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.m1();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.m1();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.m1();
  });
  protoOf(HttpRequest$1).b14 = get_coroutineContext;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_2 = new Companion_1();
  Js_instance = new Js();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = bodyAsChannel;
  _.$_$.b = HttpRequestBuilder;
  _.$_$.c = HttpResponse;
  _.$_$.d = HttpStatement;
  _.$_$.e = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-core.js.map
