(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './okio-parent-okio.js', './coil-root-coil-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./okio-parent-okio.js'), require('./coil-root-coil-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-network-core'.");
    }
    if (typeof globalThis['okio-parent-okio'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-core'. Its dependency 'okio-parent-okio' was not found. Please, check whether 'okio-parent-okio' is loaded prior to 'coil-root-coil-network-core'.");
    }
    if (typeof globalThis['coil-root-coil-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-core'. Its dependency 'coil-root-coil-core' was not found. Please, check whether 'coil-root-coil-core' is loaded prior to 'coil-root-coil-network-core'.");
    }
    globalThis['coil-root-coil-network-core'] = factory(typeof globalThis['coil-root-coil-network-core'] === 'undefined' ? {} : globalThis['coil-root-coil-network-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['okio-parent-okio'], globalThis['coil-root-coil-core']);
  }
}(function (_, kotlin_kotlin, kotlin_com_squareup_okio_okio, kotlin_io_coil_kt_coil3_coil_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toInt = kotlin_kotlin.$_$.wm;
  var toLong = kotlin_kotlin.$_$.zm;
  var protoOf = kotlin_kotlin.$_$.ki;
  var toLong_0 = kotlin_kotlin.$_$.mi;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h4;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var objectCreate = kotlin_kotlin.$_$.ji;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var equals = kotlin_kotlin.$_$.sg;
  var toString = kotlin_kotlin.$_$.eq;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var VOID = kotlin_kotlin.$_$.j;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var isInterface = kotlin_kotlin.$_$.sh;
  var hashCode = kotlin_kotlin.$_$.bh;
  var RuntimeException = kotlin_kotlin.$_$.mo;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.h3;
  var captureStack = kotlin_kotlin.$_$.jg;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var Long = kotlin_kotlin.$_$.fo;
  var AutoCloseable = kotlin_kotlin.$_$.tn;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var buffer = kotlin_com_squareup_okio_okio.$_$.n;
  var addSuppressed = kotlin_kotlin.$_$.bp;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var IOException = kotlin_com_squareup_okio_okio.$_$.j;
  var ImageSource = kotlin_io_coil_kt_coil3_coil_core.$_$.b;
  var ImageSource_0 = kotlin_io_coil_kt_coil3_coil_core.$_$.a;
  var lazy = kotlin_kotlin.$_$.rp;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.u;
  var Factory = kotlin_io_coil_kt_coil3_coil_core.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var DataSource_NETWORK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.z;
  var SourceFetchResult = kotlin_io_coil_kt_coil3_coil_core.$_$.e;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var DataSource_DISK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.x;
  var Exception = kotlin_kotlin.$_$.bo;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.o;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var MimeTypeMap_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.h1;
  var startsWith = kotlin_kotlin.$_$.dm;
  var substringBefore = kotlin_kotlin.$_$.lm;
  var Fetcher = kotlin_io_coil_kt_coil3_coil_core.$_$.d;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toMutableList = kotlin_kotlin.$_$.le;
  var mutableListOf = kotlin_kotlin.$_$.gc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var toMap = kotlin_kotlin.$_$.ie;
  var lastOrNull = kotlin_kotlin.$_$.qb;
  var emptyList = kotlin_kotlin.$_$.ea;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var getExtra = kotlin_io_coil_kt_coil3_coil_core.$_$.v;
  var Key = kotlin_io_coil_kt_coil3_coil_core.$_$.s;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var indexOf = kotlin_kotlin.$_$.il;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var isCharSequence = kotlin_kotlin.$_$.oh;
  var trim = kotlin_kotlin.$_$.jn;
  var closeFinally = kotlin_kotlin.$_$.dp;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CacheNetworkResponse, 'CacheNetworkResponse');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ReadResult, 'ReadResult');
  initMetadataForClass(WriteResult, 'WriteResult');
  initMetadataForCompanion(Companion_0);
  initMetadataForInterface(CacheStrategy, 'CacheStrategy', VOID, VOID, VOID, [3, 4]);
  initMetadataForInterface(ConnectivityChecker, 'ConnectivityChecker');
  initMetadataForClass(sam$coil3_network_ConnectivityChecker$0, 'sam$coil3_network_ConnectivityChecker$0', VOID, VOID, [ConnectivityChecker, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpException, 'HttpException', VOID, RuntimeException);
  initMetadataForInterface(NetworkRequestBody, 'NetworkRequestBody', VOID, VOID, VOID, [1]);
  initMetadataForInterface(NetworkClient, 'NetworkClient', VOID, VOID, VOID, [2]);
  initMetadataForClass(NetworkRequest, 'NetworkRequest');
  initMetadataForClass(NetworkResponse, 'NetworkResponse', NetworkResponse);
  initMetadataForInterface(NetworkResponseBody, 'NetworkResponseBody', VOID, VOID, [AutoCloseable], [1, 2]);
  initMetadataForClass(Factory_0, 'Factory', VOID, VOID, [Factory]);
  initMetadataForLambda(NetworkFetcher$fetch$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NetworkFetcher$fetch$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NetworkFetcher$executeNetworkRequest$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($fetchCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($writeToDiskCacheCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($toImageSourceCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(NetworkFetcher, 'NetworkFetcher', VOID, VOID, [Fetcher], [0, 4, 2]);
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(NetworkHeaders, 'NetworkHeaders');
  initMetadataForClass(SingleParameterLazy, 'SingleParameterLazy');
  initMetadataForObject(UNINITIALIZED, 'UNINITIALIZED');
  initMetadataForClass(DefaultCacheStrategy, 'DefaultCacheStrategy', DefaultCacheStrategy, VOID, [CacheStrategy], [3, 4]);
  initMetadataForCoroutine($readBufferCOROUTINE$3, CoroutineImpl);
  //endregion
  function CacheNetworkResponse() {
    CacheNetworkResponse_instance = this;
  }
  protoOf(CacheNetworkResponse).readFrom_ysa92s_k$ = function (source) {
    var code = toInt(source.readUtf8LineStrict_40ilic_k$());
    var requestMillis = toLong(source.readUtf8LineStrict_40ilic_k$());
    var responseMillis = toLong(source.readUtf8LineStrict_40ilic_k$());
    var headers = Builder_init_$Create$();
    var headersLineCount = toInt(source.readUtf8LineStrict_40ilic_k$());
    var inductionVariable = 0;
    if (inductionVariable < headersLineCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        append(headers, source.readUtf8LineStrict_40ilic_k$());
      }
       while (inductionVariable < headersLineCount);
    return new NetworkResponse(code, requestMillis, responseMillis, headers.build_1k0s4u_k$());
  };
  protoOf(CacheNetworkResponse).writeTo_kndwrz_k$ = function (response, sink) {
    var tmp = sink.writeDecimalLong_3t8cww_k$(toLong_0(response.get_code_wok7xy_k$()));
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(10);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp.writeByte_3m2t4h_k$(tmp$ret$0);
    var tmp_0 = sink.writeDecimalLong_3t8cww_k$(response.get_requestMillis_izejd8_k$());
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp_0.writeByte_3m2t4h_k$(tmp$ret$1);
    var tmp_1 = sink.writeDecimalLong_3t8cww_k$(response.get_responseMillis_vy9qsw_k$());
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
    tmp_1.writeByte_3m2t4h_k$(tmp$ret$2);
    var headers = response.get_headers_ef25jx_k$().asMap_1jf4ju_k$().get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator = headers.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp_2 = sum;
      // Inline function 'coil3.network.CacheNetworkResponse.writeTo.<anonymous>' call
      sum = tmp_2 + element.get_value_j01efc_k$().get_size_woubt6_k$() | 0;
    }
    var tmp$ret$4 = sum;
    var headersLineCount = toLong_0(tmp$ret$4);
    var tmp_3 = sink.writeDecimalLong_3t8cww_k$(headersLineCount);
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(10);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
    tmp_3.writeByte_3m2t4h_k$(tmp$ret$5);
    var _iterator__ex2g4s = headers.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var header = _iterator__ex2g4s.next_20eer_k$();
      var _iterator__ex2g4s_0 = header.get_value_j01efc_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var value = _iterator__ex2g4s_0.next_20eer_k$();
        var tmp_4 = sink.writeUtf8_9rv3au_k$(header.get_key_18j28a_k$()).writeUtf8_9rv3au_k$(':').writeUtf8_9rv3au_k$(value);
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(10);
        var tmp$ret$6 = Char__toInt_impl_vasixd(this_4);
        tmp_4.writeByte_3m2t4h_k$(tmp$ret$6);
      }
    }
  };
  var CacheNetworkResponse_instance;
  function CacheNetworkResponse_getInstance() {
    if (CacheNetworkResponse_instance == null)
      new CacheNetworkResponse();
    return CacheNetworkResponse_instance;
  }
  function ReadResult_init_$Init$(request, $this) {
    ReadResult.call($this);
    $this.request_1 = request;
    $this.response_1 = null;
    return $this;
  }
  function ReadResult_init_$Create$(request) {
    return ReadResult_init_$Init$(request, objectCreate(protoOf(ReadResult)));
  }
  function ReadResult_init_$Init$_0(response, $this) {
    ReadResult.call($this);
    $this.request_1 = null;
    $this.response_1 = response;
    return $this;
  }
  function ReadResult_init_$Create$_0(response) {
    return ReadResult_init_$Init$_0(response, objectCreate(protoOf(ReadResult)));
  }
  function WriteResult_init_$Init$(response, $this) {
    WriteResult.call($this);
    $this.response_1 = response;
    return $this;
  }
  function WriteResult_init_$Create$(response) {
    return WriteResult_init_$Init$(response, objectCreate(protoOf(WriteResult)));
  }
  function WriteResult_init_$Init$_0($this) {
    WriteResult.call($this);
    $this.response_1 = null;
    return $this;
  }
  function WriteResult_init_$Create$_0() {
    return WriteResult_init_$Init$_0(objectCreate(protoOf(WriteResult)));
  }
  function Companion() {
    Companion_instance = this;
    this.DISABLED_1 = WriteResult_init_$Create$_0();
  }
  protoOf(Companion).get_DISABLED_edo4or_k$ = function () {
    return this.DISABLED_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(ReadResult).get_request_jdwg4m_k$ = function () {
    return this.request_1;
  };
  protoOf(ReadResult).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(ReadResult).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof ReadResult) {
      tmp_0 = equals(this.request_1, other.request_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.response_1, other.response_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ReadResult).hashCode = function () {
    var tmp0_safe_receiver = this.request_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.response_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(ReadResult).toString = function () {
    return 'ReadResult(request=' + toString(this.request_1) + ', response=' + toString(this.response_1) + ')';
  };
  function ReadResult() {
  }
  protoOf(WriteResult).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  protoOf(WriteResult).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof WriteResult) {
      tmp = equals(this.response_1, other.response_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(WriteResult).hashCode = function () {
    var tmp0_safe_receiver = this.response_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(WriteResult).toString = function () {
    return 'WriteResult(response=' + toString(this.response_1) + ')';
  };
  function WriteResult() {
    Companion_getInstance();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_1 = new DefaultCacheStrategy();
  }
  protoOf(Companion_0).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CacheStrategy() {
  }
  function sam$coil3_network_ConnectivityChecker$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$coil3_network_ConnectivityChecker$0).isOnline_5lcjqb_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ConnectivityChecker) : false) {
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
  protoOf(sam$coil3_network_ConnectivityChecker$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ConnectivityChecker$Companion$ONLINE$lambda() {
    return true;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = ConnectivityChecker$Companion$ONLINE$lambda;
    tmp.ONLINE_1 = new sam$coil3_network_ConnectivityChecker$0(tmp_0);
  }
  protoOf(Companion_1).get_ONLINE_20ia1o_k$ = function () {
    return this.ONLINE_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ConnectivityChecker() {
  }
  function HttpException(response) {
    RuntimeException_init_$Init$('HTTP ' + response.get_code_wok7xy_k$(), this);
    captureStack(this, HttpException);
    this.response_1 = response;
  }
  protoOf(HttpException).get_response_xlk07e_k$ = function () {
    return this.response_1;
  };
  function NetworkRequestBody() {
  }
  function NetworkClient() {
  }
  function NetworkRequest(url, method, headers, body) {
    method = method === VOID ? 'GET' : method;
    headers = headers === VOID ? Companion_getInstance_2().get_EMPTY_i8q41w_k$() : headers;
    body = body === VOID ? null : body;
    this.url_1 = url;
    this.method_1 = method;
    this.headers_1 = headers;
    this.body_1 = body;
  }
  protoOf(NetworkRequest).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(NetworkRequest).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(NetworkRequest).get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  protoOf(NetworkRequest).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(NetworkRequest).copy_bzk6mb_k$ = function (url, method, headers, body) {
    return new NetworkRequest(url, method, headers, body);
  };
  protoOf(NetworkRequest).copy$default_ck24lc_k$ = function (url, method, headers, body, $super) {
    url = url === VOID ? this.url_1 : url;
    method = method === VOID ? this.method_1 : method;
    headers = headers === VOID ? this.headers_1 : headers;
    body = body === VOID ? this.body_1 : body;
    return $super === VOID ? this.copy_bzk6mb_k$(url, method, headers, body) : $super.copy_bzk6mb_k$.call(this, url, method, headers, body);
  };
  protoOf(NetworkRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkRequest))
      return false;
    if (!(this.url_1 === other.url_1))
      return false;
    if (!(this.method_1 === other.method_1))
      return false;
    if (!this.headers_1.equals(other.headers_1))
      return false;
    if (!equals(this.body_1, other.body_1))
      return false;
    return true;
  };
  protoOf(NetworkRequest).hashCode = function () {
    var result = getStringHashCode(this.url_1);
    result = imul(result, 31) + getStringHashCode(this.method_1) | 0;
    result = imul(result, 31) + this.headers_1.hashCode() | 0;
    result = imul(result, 31) + (this.body_1 == null ? 0 : hashCode(this.body_1)) | 0;
    return result;
  };
  protoOf(NetworkRequest).toString = function () {
    return 'NetworkRequest(url=' + this.url_1 + ', method=' + this.method_1 + ', headers=' + this.headers_1.toString() + ', body=' + toString(this.body_1) + ')';
  };
  function NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate) {
    code = code === VOID ? 200 : code;
    requestMillis = requestMillis === VOID ? new Long(0, 0) : requestMillis;
    responseMillis = responseMillis === VOID ? new Long(0, 0) : responseMillis;
    headers = headers === VOID ? Companion_getInstance_2().get_EMPTY_i8q41w_k$() : headers;
    body = body === VOID ? null : body;
    delegate = delegate === VOID ? null : delegate;
    this.code_1 = code;
    this.requestMillis_1 = requestMillis;
    this.responseMillis_1 = responseMillis;
    this.headers_1 = headers;
    this.body_1 = body;
    this.delegate_1 = delegate;
  }
  protoOf(NetworkResponse).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(NetworkResponse).get_requestMillis_izejd8_k$ = function () {
    return this.requestMillis_1;
  };
  protoOf(NetworkResponse).get_responseMillis_vy9qsw_k$ = function () {
    return this.responseMillis_1;
  };
  protoOf(NetworkResponse).get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  protoOf(NetworkResponse).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(NetworkResponse).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(NetworkResponse).copy_qb74g4_k$ = function (code, requestMillis, responseMillis, headers, body, delegate) {
    return new NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).copy$default_5qhez9_k$ = function (code, requestMillis, responseMillis, headers, body, delegate, $super) {
    code = code === VOID ? this.code_1 : code;
    requestMillis = requestMillis === VOID ? this.requestMillis_1 : requestMillis;
    responseMillis = responseMillis === VOID ? this.responseMillis_1 : responseMillis;
    headers = headers === VOID ? this.headers_1 : headers;
    body = body === VOID ? this.body_1 : body;
    delegate = delegate === VOID ? this.delegate_1 : delegate;
    return $super === VOID ? this.copy_qb74g4_k$(code, requestMillis, responseMillis, headers, body, delegate) : $super.copy_qb74g4_k$.call(this, code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkResponse))
      return false;
    if (!(this.code_1 === other.code_1))
      return false;
    if (!this.requestMillis_1.equals(other.requestMillis_1))
      return false;
    if (!this.responseMillis_1.equals(other.responseMillis_1))
      return false;
    if (!this.headers_1.equals(other.headers_1))
      return false;
    if (!equals(this.body_1, other.body_1))
      return false;
    if (!equals(this.delegate_1, other.delegate_1))
      return false;
    return true;
  };
  protoOf(NetworkResponse).hashCode = function () {
    var result = this.code_1;
    result = imul(result, 31) + this.requestMillis_1.hashCode() | 0;
    result = imul(result, 31) + this.responseMillis_1.hashCode() | 0;
    result = imul(result, 31) + this.headers_1.hashCode() | 0;
    result = imul(result, 31) + (this.body_1 == null ? 0 : hashCode(this.body_1)) | 0;
    result = imul(result, 31) + (this.delegate_1 == null ? 0 : hashCode(this.delegate_1)) | 0;
    return result;
  };
  protoOf(NetworkResponse).toString = function () {
    return 'NetworkResponse(code=' + this.code_1 + ', requestMillis=' + this.requestMillis_1.toString() + ', responseMillis=' + this.responseMillis_1.toString() + ', headers=' + this.headers_1.toString() + ', body=' + toString(this.body_1) + ', delegate=' + toString(this.delegate_1) + ')';
  };
  function NetworkResponseBody() {
  }
  function _get_networkClientLazy__umsm9o($this) {
    return $this.networkClientLazy_1;
  }
  function _get_cacheStrategyLazy__1fe27s($this) {
    return $this.cacheStrategyLazy_1;
  }
  function _get_connectivityCheckerLazy__qc7y67($this) {
    return $this.connectivityCheckerLazy_1;
  }
  function isApplicable($this, data) {
    return data.get_scheme_je6tv2_k$() === 'http' || data.get_scheme_je6tv2_k$() === 'https';
  }
  function NetworkFetcher$Factory$_init_$lambda_9nhdas() {
    return Companion_getInstance_0().get_DEFAULT_wccqmg_k$();
  }
  function ConnectivityChecker$ref() {
    var l = function (p0) {
      return ConnectivityChecker_0(p0);
    };
    l.callableName = 'ConnectivityChecker';
    return l;
  }
  function NetworkFetcher$Factory$create$lambda($imageLoader) {
    return function () {
      return $imageLoader.get_diskCache_9m5hks_k$();
    };
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function _get_options__xuq71v($this) {
    return $this.options_1;
  }
  function _get_networkClient__596u94($this) {
    return $this.networkClient_1;
  }
  function _get_diskCache__chwufg($this) {
    return $this.diskCache_1;
  }
  function _get_cacheStrategy__3xc198($this) {
    return $this.cacheStrategy_1;
  }
  function _get_connectivityChecker__q8d3rn($this) {
    return $this.connectivityChecker_1;
  }
  function readFromDiskCache($this) {
    if ($this.options_1.get_diskCachePolicy_b6aqha_k$().get_readEnabled_oyc6n2_k$()) {
      var tmp0_safe_receiver = $this.diskCache_1.get_value_j01efc_k$();
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.openSnapshot_67z3ik_k$(_get_diskCacheKey__t0sb73($this));
    } else {
      return null;
    }
  }
  function writeToDiskCache($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion) {
    var tmp = new $writeToDiskCacheCOROUTINE$1($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function newRequest($this) {
    var headers = get_httpHeaders($this.options_1).newBuilder_dnl2aj_k$();
    var diskRead = $this.options_1.get_diskCachePolicy_b6aqha_k$().get_readEnabled_oyc6n2_k$();
    var networkRead = $this.options_1.get_networkCachePolicy_zd32gh_k$().get_readEnabled_oyc6n2_k$() && $this.connectivityChecker_1.isOnline_5lcjqb_k$();
    if (!networkRead && diskRead) {
      headers.set_bcp8rm_k$('Cache-Control', 'only-if-cached, max-stale=2147483647');
    } else if (networkRead && !diskRead)
      if ($this.options_1.get_diskCachePolicy_b6aqha_k$().get_writeEnabled_mrjiqz_k$()) {
        headers.set_bcp8rm_k$('Cache-Control', 'no-cache');
      } else {
        headers.set_bcp8rm_k$('Cache-Control', 'no-cache, no-store');
      }
     else if (!networkRead && !diskRead) {
      headers.set_bcp8rm_k$('Cache-Control', 'no-cache, only-if-cached');
    }
    return new NetworkRequest($this.url_1, get_httpMethod($this.options_1), headers.build_1k0s4u_k$(), get_httpBody($this.options_1));
  }
  function executeNetworkRequest($this, request, block, $completion) {
    if ($this.options_1.get_networkCachePolicy_zd32gh_k$().get_readEnabled_oyc6n2_k$()) {
      assertNotOnMainThread();
    }
    var tmp = $this.networkClient_1.get_value_j01efc_k$();
    return tmp.executeRequest_xedpr8_k$(request, NetworkFetcher$executeNetworkRequest$slambda_0(block, null), $completion);
  }
  function toNetworkResponseOrNull(_this__u8e3s4, $this) {
    try {
      // Inline function 'okio.FileSystem.read' call
      var this_0 = _get_fileSystem__siywv4($this);
      var file = _this__u8e3s4.get_metadata_vs95vc_k$();
      // Inline function 'okio.use' call
      var this_1 = buffer(this_0.source_11bfje_k$(file));
      var thrown = null;
      var tmp;
      try {
        // Inline function 'okio.FileSystem.read.<anonymous>' call
        // Inline function 'coil3.network.NetworkFetcher.toNetworkResponseOrNull.<anonymous>' call
        tmp = CacheNetworkResponse_getInstance().readFrom_ysa92s_k$(this_1);
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
      return (result == null ? true : !(result == null)) ? result : THROW_CCE();
    } catch ($p) {
      if ($p instanceof IOException) {
        var _unused_var__etf5q3 = $p;
        return null;
      } else {
        throw $p;
      }
    }
  }
  function toImageSource(_this__u8e3s4, $this) {
    return ImageSource(_this__u8e3s4.get_data_wokkxf_k$(), _get_fileSystem__siywv4($this), _get_diskCacheKey__t0sb73($this), _this__u8e3s4);
  }
  function toImageSource_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $toImageSourceCOROUTINE$2($this, _this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toImageSource_1(_this__u8e3s4, $this) {
    return ImageSource_0(_this__u8e3s4, _get_fileSystem__siywv4($this));
  }
  function _get_diskCacheKey__t0sb73($this) {
    var tmp0_elvis_lhs = $this.options_1.get_diskCacheKey_gvj33x_k$();
    return tmp0_elvis_lhs == null ? $this.url_1 : tmp0_elvis_lhs;
  }
  function _get_fileSystem__siywv4($this) {
    var tmp0_safe_receiver = $this.diskCache_1.get_value_j01efc_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_fileSystem_9p6nv8_k$();
    return tmp1_elvis_lhs == null ? $this.options_1.get_fileSystem_9p6nv8_k$() : tmp1_elvis_lhs;
  }
  function Factory_0(networkClient, cacheStrategy, connectivityChecker) {
    var tmp;
    if (cacheStrategy === VOID) {
      tmp = NetworkFetcher$Factory$_init_$lambda_9nhdas;
    } else {
      tmp = cacheStrategy;
    }
    cacheStrategy = tmp;
    var tmp_0;
    if (connectivityChecker === VOID) {
      tmp_0 = ConnectivityChecker$ref();
    } else {
      tmp_0 = connectivityChecker;
    }
    connectivityChecker = tmp_0;
    this.networkClientLazy_1 = lazy(networkClient);
    this.cacheStrategyLazy_1 = lazy(cacheStrategy);
    this.connectivityCheckerLazy_1 = singleParameterLazy(connectivityChecker);
  }
  protoOf(Factory_0).create_aehmyz_k$ = function (data, options, imageLoader) {
    if (!isApplicable(this, data))
      return null;
    var tmp = data.toString();
    return new NetworkFetcher(tmp, options, this.networkClientLazy_1, lazy(NetworkFetcher$Factory$create$lambda(imageLoader)), this.cacheStrategyLazy_1, this.connectivityCheckerLazy_1.get_ed6ptv_k$(options.get_context_h02k06_k$()));
  };
  protoOf(Factory_0).create_63rtby_k$ = function (data, options, imageLoader) {
    return this.create_aehmyz_k$(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    this.$snapshot_1 = $snapshot;
    this.this$0__1 = this$0;
    this.$cacheResponse_1 = $cacheResponse;
    this.$networkRequest_1 = $networkRequest;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda).invoke_w5qgr3_k$ = function (response, $completion) {
    var tmp = this.create_175c2c_k$(response, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NetworkFetcher$fetch$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_w5qgr3_k$(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = writeToDiskCache(this.this$0__1, this.$snapshot_1._v, this.$cacheResponse_1._v, this.$networkRequest_1, this.response_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.$snapshot_1._v = this.ARGUMENT0__1;
            if (!(this.$snapshot_1._v == null)) {
              this.$cacheResponse_1._v = toNetworkResponseOrNull(ensureNotNull(this.$snapshot_1._v), this.this$0__1);
              var tmp_0 = toImageSource(ensureNotNull(this.$snapshot_1._v), this.this$0__1);
              var tmp0_safe_receiver = this.$cacheResponse_1._v;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_headers_ef25jx_k$();
              return new SourceFetchResult(tmp_0, this.this$0__1.getMimeType_qqbckv_k$(this.this$0__1.url_1, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_6bo4tg_k$('Content-Type')), DataSource_NETWORK_getInstance());
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = readBuffer(requireBody(this.response_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseBody = suspendResult;
            if (responseBody.get_size_woubt6_k$().compareTo_9jj042_k$(new Long(0, 0)) > 0) {
              return new SourceFetchResult(toImageSource_1(responseBody, this.this$0__1), this.this$0__1.getMimeType_qqbckv_k$(this.this$0__1.url_1, this.response_1.get_headers_ef25jx_k$().get_6bo4tg_k$('Content-Type')), DataSource_NETWORK_getInstance());
            }

            return null;
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
  protoOf(NetworkFetcher$fetch$slambda).create_175c2c_k$ = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda(this.$snapshot_1, this.this$0__1, this.$cacheResponse_1, this.$networkRequest_1, completion);
    i.response_1 = response;
    return i;
  };
  protoOf(NetworkFetcher$fetch$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_175c2c_k$(value instanceof NetworkResponse ? value : THROW_CCE(), completion);
  };
  function NetworkFetcher$fetch$slambda_0($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation);
    var l = function (response, $completion) {
      return i.invoke_w5qgr3_k$(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$fetch$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda_1).invoke_4cs5ju_k$ = function (response, $completion) {
    var tmp = this.create_175c2c_k$(response, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NetworkFetcher$fetch$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_4cs5ju_k$(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = toImageSource_0(requireBody(this.response_1), this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SourceFetchResult(ARGUMENT, this.this$0__1.getMimeType_qqbckv_k$(this.this$0__1.url_1, this.response_1.get_headers_ef25jx_k$().get_6bo4tg_k$('Content-Type')), DataSource_NETWORK_getInstance());
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
  protoOf(NetworkFetcher$fetch$slambda_1).create_175c2c_k$ = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda_1(this.this$0__1, completion);
    i.response_1 = response;
    return i;
  };
  protoOf(NetworkFetcher$fetch$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_175c2c_k$(value instanceof NetworkResponse ? value : THROW_CCE(), completion);
  };
  function NetworkFetcher$fetch$slambda_2(this$0, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda_1(this$0, resultContinuation);
    var l = function (response, $completion) {
      return i.invoke_4cs5ju_k$(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).invoke_3o2we_k$ = function (response, $completion) {
    var tmp = this.create_175c2c_k$(response, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_3o2we_k$(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0;
            var containsArg = this.response_1.get_code_wok7xy_k$();
            if (!(200 <= containsArg ? containsArg < 300 : false)) {
              tmp_0 = !(this.response_1.get_code_wok7xy_k$() === 304);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              throw new HttpException(this.response_1);
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$block_1(this.response_1, this);
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
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).create_175c2c_k$ = function (response, completion) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda(this.$block_1, completion);
    i.response_1 = response;
    return i;
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_175c2c_k$(value instanceof NetworkResponse ? value : THROW_CCE(), completion);
  };
  function NetworkFetcher$executeNetworkRequest$slambda_0($block, resultContinuation) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.invoke_3o2we_k$(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $fetchCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.snapshot0__1 = {_v: readFromDiskCache(this._this__u8e3s4__1)};
            this.set_exceptionState_fex74n_k$(7);
            this.readResult1__1 = null;
            this.cacheResponse2__1 = {_v: null};
            if (!(this.snapshot0__1._v == null)) {
              if (equals(_get_fileSystem__siywv4(this._this__u8e3s4__1).metadata_r9b8qq_k$(this.snapshot0__1._v.get_metadata_vs95vc_k$()).get_size_woubt6_k$(), new Long(0, 0))) {
                return new SourceFetchResult(toImageSource(this.snapshot0__1._v, this._this__u8e3s4__1), this._this__u8e3s4__1.getMimeType_qqbckv_k$(this._this__u8e3s4__1.url_1, null), DataSource_DISK_getInstance());
              }
              this.cacheResponse2__1._v = toNetworkResponseOrNull(this.snapshot0__1._v, this._this__u8e3s4__1);
              if (!(this.cacheResponse2__1._v == null)) {
                this.set_state_rjd8d0_k$(1);
                suspendResult = this._this__u8e3s4__1.cacheStrategy_1.get_value_j01efc_k$().read_ot62vo_k$(this.cacheResponse2__1._v, newRequest(this._this__u8e3s4__1), this._this__u8e3s4__1.options_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 1:
            this.readResult1__1 = suspendResult;
            if (!(this.readResult1__1.get_response_xlk07e_k$() == null)) {
              return new SourceFetchResult(toImageSource(this.snapshot0__1._v, this._this__u8e3s4__1), this._this__u8e3s4__1.getMimeType_qqbckv_k$(this._this__u8e3s4__1.url_1, this.readResult1__1.get_response_xlk07e_k$().get_headers_ef25jx_k$().get_6bo4tg_k$('Content-Type')), DataSource_DISK_getInstance());
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_0 = this;
            var tmp0_safe_receiver = this.readResult1__1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_request_jdwg4m_k$();
            tmp_0.networkRequest3__1 = tmp1_elvis_lhs == null ? newRequest(this._this__u8e3s4__1) : tmp1_elvis_lhs;
            this.set_state_rjd8d0_k$(4);
            suspendResult = executeNetworkRequest(this._this__u8e3s4__1, this.networkRequest3__1, NetworkFetcher$fetch$slambda_0(this.snapshot0__1, this._this__u8e3s4__1, this.cacheResponse2__1, this.networkRequest3__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.fetchResult4__1 = suspendResult;
            if (this.fetchResult4__1 == null) {
              this.set_state_rjd8d0_k$(5);
              var tmp_1 = newRequest(this._this__u8e3s4__1);
              suspendResult = executeNetworkRequest(this._this__u8e3s4__1, tmp_1, NetworkFetcher$fetch$slambda_2(this._this__u8e3s4__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 5:
            this.fetchResult4__1 = suspendResult;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            return this.fetchResult4__1;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp2_safe_receiver = this.snapshot0__1._v;
              if (tmp2_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp2_safe_receiver);
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $writeToDiskCacheCOROUTINE$1(_this__u8e3s4, snapshot, cacheResponse, networkRequest, networkResponse, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.snapshot_1 = snapshot;
    this.cacheResponse_1 = cacheResponse;
    this.networkRequest_1 = networkRequest;
    this.networkResponse_1 = networkResponse;
  }
  protoOf($writeToDiskCacheCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            if (!this._this__u8e3s4__1.options_1.get_diskCachePolicy_b6aqha_k$().get_writeEnabled_mrjiqz_k$()) {
              var tmp0_safe_receiver = this.snapshot_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp0_safe_receiver);
              }
              return null;
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.cacheStrategy_1.get_value_j01efc_k$().write_r0nzyq_k$(this.cacheResponse_1, this.networkRequest_1, this.networkResponse_1, this._this__u8e3s4__1.options_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.writeResult0__1 = suspendResult;
            var tmp_0 = this;
            var tmp1_elvis_lhs = this.writeResult0__1.get_response_xlk07e_k$();
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            tmp_0.modifiedNetworkResponse1__1 = tmp_1;
            var tmp_2 = this;
            var tmp_3;
            if (!(this.snapshot_1 == null)) {
              tmp_3 = this.snapshot_1.closeAndOpenEditor_du1eh6_k$();
            } else {
              var tmp2_safe_receiver = this._this__u8e3s4__1.diskCache_1.get_value_j01efc_k$();
              tmp_3 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.openEditor_5w5t8d_k$(_get_diskCacheKey__t0sb73(this._this__u8e3s4__1));
            }

            var tmp3_elvis_lhs = tmp_3;
            var tmp_4;
            if (tmp3_elvis_lhs == null) {
              return null;
            } else {
              tmp_4 = tmp3_elvis_lhs;
            }

            tmp_2.editor2__1 = tmp_4;
            this.set_exceptionState_fex74n_k$(4);
            var this_0 = _get_fileSystem__siywv4(this._this__u8e3s4__1);
            var file = this.editor2__1.get_metadata_vs95vc_k$();
            var this_1 = buffer_0(this_0.sink_3ey1xj_k$(file, false));
            var thrown = null;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_5;
              try {
                var tmp_6;
                try {
                  CacheNetworkResponse_getInstance().writeTo_kndwrz_k$(this.modifiedNetworkResponse1__1, this_1);
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                } catch ($p) {
                  var tmp_7;
                  if ($p instanceof Error) {
                    var t = $p;
                    thrown = t;
                    tmp$ret$0 = null;
                    break l$ret$1;
                  } else {
                    throw $p;
                  }
                }
              } catch ($p) {
                var tmp_8;
                var t_0 = $p;
                try {
                  if (this_1 == null)
                    null;
                  else {
                    this_1.close_yn9xrc_k$();
                  }
                } catch ($p) {
                  if ($p instanceof Error) {
                    var t_1 = $p;
                    if (thrown == null) {
                      thrown = t_1;
                    } else {
                      addSuppressed(thrown, t_1);
                    }
                  } else {
                    throw $p;
                  }
                }
                throw t_0;
              }
            }
             while (false);
            var tmp_9 = tmp$ret$0;
            try {
              if (this_1 == null)
                null;
              else {
                this_1.close_yn9xrc_k$();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_2 = $p;
                if (thrown == null) {
                  thrown = t_2;
                } else {
                  addSuppressed(thrown, t_2);
                }
              } else {
                throw $p;
              }
            }

            var result = tmp_9;
            if (!(thrown == null))
              throw thrown;
            if (!(result == null ? true : !(result == null)))
              THROW_CCE();
            this.tmp4_safe_receiver3__1 = this.modifiedNetworkResponse1__1.get_body_wojkyz_k$();
            if (this.tmp4_safe_receiver3__1 == null) {
              this.WHEN_RESULT4__1 = null;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.tmp4_safe_receiver3__1.writeTo_874liu_k$(_get_fileSystem__siywv4(this._this__u8e3s4__1), this.editor2__1.get_data_wokkxf_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp_10 = this;
            tmp_10.WHEN_RESULT4__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.editor2__1.commitAndOpenSnapshot_teh9jm_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_11 = this.get_exception_x0n6w6_k$();
            if (tmp_11 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              abortQuietly(this.editor2__1);
              var tmp5_safe_receiver = this.networkResponse_1.get_body_wojkyz_k$();
              if (tmp5_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp5_safe_receiver);
              }
              var tmp6_safe_receiver = this.modifiedNetworkResponse1__1.get_body_wojkyz_k$();
              if (tmp6_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp6_safe_receiver);
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $toImageSourceCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($toImageSourceCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.buffer0__1 = new Buffer();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__2.writeTo_duii9t_k$(this.buffer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return toImageSource_1(this.buffer0__1, this._this__u8e3s4__1);
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
  function NetworkFetcher(url, options, networkClient, diskCache, cacheStrategy, connectivityChecker) {
    this.url_1 = url;
    this.options_1 = options;
    this.networkClient_1 = networkClient;
    this.diskCache_1 = diskCache;
    this.cacheStrategy_1 = cacheStrategy;
    this.connectivityChecker_1 = connectivityChecker;
  }
  protoOf(NetworkFetcher).fetch_jkxcim_k$ = function ($completion) {
    var tmp = new $fetchCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NetworkFetcher).fetch_fwgef_k$ = function ($completion) {
    return this.fetch_jkxcim_k$($completion);
  };
  protoOf(NetworkFetcher).getMimeType_qqbckv_k$ = function (url, contentType) {
    if (contentType == null || startsWith(contentType, 'text/plain')) {
      var tmp0_safe_receiver = MimeTypeMap_getInstance().getMimeTypeFromUrl_c4ea6x_k$(url);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    return contentType == null ? null : substringBefore(contentType, _Char___init__impl__6a9atx(59));
  };
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function Builder_init_$Init$($this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.data_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(headers, $this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var this_0 = headers.data_1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element.get_key_18j28a_k$();
      // Inline function 'coil3.network.Builder.<init>.<anonymous>' call
      var tmp$ret$2 = toMutableList(element.get_value_j01efc_k$());
      destination.put_4fpzoq_k$(tmp_0, tmp$ret$2);
    }
    tmp.data_1 = destination;
    return $this;
  }
  function Builder_init_$Create$_0(headers) {
    return Builder_init_$Init$_0(headers, objectCreate(protoOf(Builder)));
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  protoOf(Builder).set_bcp8rm_k$ = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.data_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = mutableListOf([value]);
    this_0.put_4fpzoq_k$(key_0, value_0);
    return this;
  };
  protoOf(Builder).set_mcyucq_k$ = function (key, values) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.data_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value = toMutableList(values);
    this_0.put_4fpzoq_k$(key_0, value);
    return this;
  };
  protoOf(Builder).add_9zbmn3_k$ = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.data_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = this_0.get_wei43m_k$(key_0);
    var tmp;
    if (value_0 == null) {
      // Inline function 'coil3.network.Builder.add.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.put_4fpzoq_k$(key_0, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var values = tmp;
    // Inline function 'kotlin.collections.plusAssign' call
    values.add_utx5q5_k$(value);
    return this;
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new NetworkHeaders(toMap(this.data_1));
  };
  function Builder() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.EMPTY_1 = Builder_init_$Create$().build_1k0s4u_k$();
  }
  protoOf(Companion_2).get_EMPTY_i8q41w_k$ = function () {
    return this.EMPTY_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function NetworkHeaders(data) {
    Companion_getInstance_2();
    this.data_1 = data;
  }
  protoOf(NetworkHeaders).get_6bo4tg_k$ = function (key) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = key.toLowerCase();
    var tmp0_safe_receiver = this.data_1.get_wei43m_k$(tmp$ret$1);
    return tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
  };
  protoOf(NetworkHeaders).getAll_ffxf4h_k$ = function (key) {
    // Inline function 'kotlin.collections.orEmpty' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = key.toLowerCase();
    var tmp0_elvis_lhs = this.data_1.get_wei43m_k$(tmp$ret$1);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(NetworkHeaders).asMap_1jf4ju_k$ = function () {
    return this.data_1;
  };
  protoOf(NetworkHeaders).newBuilder_dnl2aj_k$ = function () {
    return Builder_init_$Create$_0(this);
  };
  protoOf(NetworkHeaders).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkHeaders))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    return true;
  };
  protoOf(NetworkHeaders).hashCode = function () {
    return hashCode(this.data_1);
  };
  protoOf(NetworkHeaders).toString = function () {
    return 'NetworkHeaders(data=' + toString_0(this.data_1) + ')';
  };
  function get_httpMethodKey() {
    _init_properties_imageRequests_kt__vz1wml();
    return httpMethodKey;
  }
  var httpMethodKey;
  function get_httpHeadersKey() {
    _init_properties_imageRequests_kt__vz1wml();
    return httpHeadersKey;
  }
  var httpHeadersKey;
  function get_httpBodyKey() {
    _init_properties_imageRequests_kt__vz1wml();
    return httpBodyKey;
  }
  var httpBodyKey;
  function get_httpHeaders(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra(_this__u8e3s4, get_httpHeadersKey());
  }
  function get_httpMethod(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra(_this__u8e3s4, get_httpMethodKey());
  }
  function get_httpBody(_this__u8e3s4) {
    _init_properties_imageRequests_kt__vz1wml();
    return getExtra(_this__u8e3s4, get_httpBodyKey());
  }
  var properties_initialized_imageRequests_kt_62wmpb;
  function _init_properties_imageRequests_kt__vz1wml() {
    if (!properties_initialized_imageRequests_kt_62wmpb) {
      properties_initialized_imageRequests_kt_62wmpb = true;
      httpMethodKey = new Key('GET');
      httpHeadersKey = new Key(Companion_getInstance_2().get_EMPTY_i8q41w_k$());
      httpBodyKey = new Key(null);
    }
  }
  function _set_initializer__9jqmcd($this, _set____db54di) {
    $this.initializer_1 = _set____db54di;
  }
  function _get_initializer__kqnjzj($this) {
    return $this.initializer_1;
  }
  function _set__value__3j54pn($this, _set____db54di) {
    $this._value_1 = _set____db54di;
  }
  function _get__value__22ek2v($this) {
    return $this._value_1;
  }
  function SingleParameterLazy(initializer) {
    this.initializer_1 = initializer;
    this._value_1 = UNINITIALIZED_getInstance();
  }
  protoOf(SingleParameterLazy).get_ed6ptv_k$ = function (parameter) {
    var value1 = this._value_1;
    if (!(value1 === UNINITIALIZED_getInstance())) {
      return (value1 == null ? true : !(value1 == null)) ? value1 : THROW_CCE();
    }
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'coil3.network.internal.SingleParameterLazy.get.<anonymous>' call
    var value2 = this._value_1;
    var tmp;
    if (!(value2 === UNINITIALIZED_getInstance())) {
      tmp = (value2 == null ? true : !(value2 == null)) ? value2 : THROW_CCE();
    } else {
      var newValue = ensureNotNull(this.initializer_1)(parameter);
      this._value_1 = newValue;
      this.initializer_1 = null;
      tmp = newValue;
    }
    return tmp;
  };
  function singleParameterLazy(initializer) {
    return new SingleParameterLazy(initializer);
  }
  function UNINITIALIZED() {
    UNINITIALIZED_instance = this;
  }
  var UNINITIALIZED_instance;
  function UNINITIALIZED_getInstance() {
    if (UNINITIALIZED_instance == null)
      new UNINITIALIZED();
    return UNINITIALIZED_instance;
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function requireBody(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = _this__u8e3s4.get_body_wojkyz_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'coil3.network.internal.requireBody.<anonymous>' call
        var message = 'body == null';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function closeQuietly(_this__u8e3s4) {
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
  function abortQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.abort_lahfmo_k$();
    } catch ($p) {
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
      } else {
        throw $p;
      }
    }
  }
  function DefaultCacheStrategy() {
  }
  protoOf(DefaultCacheStrategy).read_ot62vo_k$ = function (cacheResponse, networkRequest, options, $completion) {
    return ReadResult_init_$Create$_0(cacheResponse);
  };
  protoOf(DefaultCacheStrategy).write_r0nzyq_k$ = function (cacheResponse, networkRequest, networkResponse, options, $completion) {
    if (networkResponse.get_code_wok7xy_k$() === 304 && !(cacheResponse == null)) {
      var combinedHeaders = plus(cacheResponse.get_headers_ef25jx_k$(), networkResponse.get_headers_ef25jx_k$());
      return WriteResult_init_$Create$(networkResponse.copy$default_5qhez9_k$(VOID, VOID, VOID, combinedHeaders, null));
    }
    return WriteResult_init_$Create$(networkResponse);
  };
  function plus(_this__u8e3s4, other) {
    var builder = _this__u8e3s4.newBuilder_dnl2aj_k$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = other.asMap_1jf4ju_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.get_value_j01efc_k$();
      builder.set_mcyucq_k$(key, values);
    }
    return builder.build_1k0s4u_k$();
  }
  function append(_this__u8e3s4, line) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.internal.append.<anonymous>' call
    var index = indexOf(line, _Char___init__impl__6a9atx(58));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === -1)) {
      // Inline function 'coil3.network.internal.append.<anonymous>.<anonymous>' call
      var message = 'Unexpected header: ' + line;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = line.substring(0, index);
    var tmp = toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.substring' call
    var startIndex = index + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = line.substring(startIndex);
    _this__u8e3s4.add_9zbmn3_k$(tmp, tmp$ret$5);
    return _this__u8e3s4;
  }
  function $readBufferCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(10);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.this1__1 = this._this__u8e3s4__1;
            this.exception2__1 = null;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(9);
            this.set_exceptionState_fex74n_k$(8);
            var tmp_1 = this;
            tmp_1.body6__1 = this.this1__1;
            this.buffer7__1 = new Buffer();
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.body6__1.writeTo_duii9t_k$(this.buffer7__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.tmp$ret$05__1 = this.buffer7__1;
            this.set_exceptionState_fex74n_k$(10);
            this.set_state_rjd8d0_k$(6);
            var tmp_2 = this;
            continue $sm;
          case 6:
            var tmp_3 = this.tmp$ret$05__1;
            this.set_exceptionState_fex74n_k$(10);
            closeFinally(this.this1__1, this.exception2__1);
            return tmp_3;
          case 7:
            this.set_exceptionState_fex74n_k$(10);
            var tmp_4 = this;
            closeFinally(this.this1__1, this.exception2__1);
            tmp_4.tmp$ret$60__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_5 = this.get_exception_x0n6w6_k$();
            if (tmp_5 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_6 = this;
              this.exception2__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_fex74n_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            closeFinally(this.this1__1, this.exception2__1);
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            this.set_exceptionState_fex74n_k$(10);
            closeFinally(this.this1__1, this.exception2__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 12:
            return this.tmp$ret$60__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function ConnectivityChecker_0(context) {
    return Companion_getInstance_1().get_ONLINE_20ia1o_k$();
  }
  function assertNotOnMainThread() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NetworkClient;
  _.$_$.b = Factory_0;
  _.$_$.c = NetworkResponseBody;
  _.$_$.d = NetworkResponse;
  _.$_$.e = Builder_init_$Create$;
  //endregion
  return _;
}));
