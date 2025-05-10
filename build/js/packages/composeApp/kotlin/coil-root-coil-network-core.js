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
  var toInt = kotlin_kotlin.$_$.xh;
  var toLong = kotlin_kotlin.$_$.ai;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.he;
  var toLong_0 = kotlin_kotlin.$_$.je;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var equals = kotlin_kotlin.$_$.qc;
  var toString = kotlin_kotlin.$_$.rk;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var isInterface = kotlin_kotlin.$_$.qd;
  var hashCode = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var Long = kotlin_kotlin.$_$.wi;
  var buffer = kotlin_com_squareup_okio_okio.$_$.f;
  var addSuppressed = kotlin_kotlin.$_$.rj;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var IOException = kotlin_com_squareup_okio_okio.$_$.d;
  var ImageSource = kotlin_io_coil_kt_coil3_coil_core.$_$.b;
  var ImageSource_0 = kotlin_io_coil_kt_coil3_coil_core.$_$.a;
  var lazy = kotlin_kotlin.$_$.fk;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.r;
  var Factory = kotlin_io_coil_kt_coil3_coil_core.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var DataSource_NETWORK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.w;
  var SourceFetchResult = kotlin_io_coil_kt_coil3_coil_core.$_$.d;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var DataSource_DISK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.u;
  var Exception = kotlin_kotlin.$_$.si;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.g;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var MimeTypeMap_instance = kotlin_io_coil_kt_coil3_coil_core.$_$.e1;
  var startsWith = kotlin_kotlin.$_$.jh;
  var substringBefore = kotlin_kotlin.$_$.oh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var mutableListOf = kotlin_kotlin.$_$.t9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var toMap = kotlin_kotlin.$_$.ya;
  var lastOrNull = kotlin_kotlin.$_$.g9;
  var toString_0 = kotlin_kotlin.$_$.le;
  var getExtra = kotlin_io_coil_kt_coil3_coil_core.$_$.s;
  var Key = kotlin_io_coil_kt_coil3_coil_core.$_$.p;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var indexOf = kotlin_kotlin.$_$.ug;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var trim = kotlin_kotlin.$_$.gi;
  var closeFinally = kotlin_kotlin.$_$.tj;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CacheNetworkResponse, 'CacheNetworkResponse');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ReadResult, 'ReadResult');
  initMetadataForClass(WriteResult, 'WriteResult');
  initMetadataForCompanion(Companion_0);
  initMetadataForInterface(ConnectivityChecker, 'ConnectivityChecker');
  initMetadataForClass(sam$coil3_network_ConnectivityChecker$0, 'sam$coil3_network_ConnectivityChecker$0', VOID, VOID, [ConnectivityChecker, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpException, 'HttpException', VOID, RuntimeException);
  initMetadataForClass(NetworkRequest, 'NetworkRequest');
  initMetadataForClass(NetworkResponse, 'NetworkResponse', NetworkResponse);
  initMetadataForClass(Factory_0, 'Factory', VOID, VOID, [Factory]);
  initMetadataForLambda(NetworkFetcher$fetch$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(NetworkFetcher$fetch$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(NetworkFetcher$executeNetworkRequest$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($fetchCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($writeToDiskCacheCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($toImageSourceCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(NetworkFetcher, 'NetworkFetcher', VOID, VOID, VOID, [0, 4, 2]);
  initMetadataForClass(Builder, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(NetworkHeaders, 'NetworkHeaders');
  initMetadataForClass(SingleParameterLazy, 'SingleParameterLazy');
  initMetadataForObject(UNINITIALIZED, 'UNINITIALIZED');
  initMetadataForClass(DefaultCacheStrategy, 'DefaultCacheStrategy', DefaultCacheStrategy, VOID, VOID, [3, 4]);
  initMetadataForCoroutine($readBufferCOROUTINE$3, CoroutineImpl);
  //endregion
  function CacheNetworkResponse() {
  }
  protoOf(CacheNetworkResponse).chr = function (source) {
    var code = toInt(source.ah4());
    var requestMillis = toLong(source.ah4());
    var responseMillis = toLong(source.ah4());
    var headers = Builder_init_$Create$();
    var headersLineCount = toInt(source.ah4());
    var inductionVariable = 0;
    if (inductionVariable < headersLineCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        append(headers, source.ah4());
      }
       while (inductionVariable < headersLineCount);
    return new NetworkResponse(code, requestMillis, responseMillis, headers.c2o());
  };
  protoOf(CacheNetworkResponse).ehr = function (response, sink) {
    var tmp = sink.mh4(toLong_0(response.fhr_1));
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(10);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp.ih4(tmp$ret$0);
    var tmp_0 = sink.mh4(response.ghr_1);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp_0.ih4(tmp$ret$1);
    var tmp_1 = sink.mh4(response.hhr_1);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
    tmp_1.ih4(tmp$ret$2);
    var headers = response.ihr_1.mhr().u();
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator = headers.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      var tmp_2 = sum;
      // Inline function 'coil3.network.CacheNetworkResponse.writeTo.<anonymous>' call
      sum = tmp_2 + element.w().j() | 0;
    }
    var tmp$ret$4 = sum;
    var headersLineCount = toLong_0(tmp$ret$4);
    var tmp_3 = sink.mh4(headersLineCount);
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(10);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
    tmp_3.ih4(tmp$ret$5);
    var _iterator__ex2g4s = headers.g();
    while (_iterator__ex2g4s.h()) {
      var header = _iterator__ex2g4s.i();
      var _iterator__ex2g4s_0 = header.w().g();
      while (_iterator__ex2g4s_0.h()) {
        var value = _iterator__ex2g4s_0.i();
        var tmp_4 = sink.yh1(header.v()).yh1(':').yh1(value);
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(10);
        var tmp$ret$6 = Char__toInt_impl_vasixd(this_4);
        tmp_4.ih4(tmp$ret$6);
      }
    }
  };
  var CacheNetworkResponse_instance;
  function CacheNetworkResponse_getInstance() {
    return CacheNetworkResponse_instance;
  }
  function ReadResult_init_$Init$(response, $this) {
    ReadResult.call($this);
    $this.nhr_1 = null;
    $this.ohr_1 = response;
    return $this;
  }
  function ReadResult_init_$Create$(response) {
    return ReadResult_init_$Init$(response, objectCreate(protoOf(ReadResult)));
  }
  function WriteResult_init_$Init$(response, $this) {
    WriteResult.call($this);
    $this.phr_1 = response;
    return $this;
  }
  function WriteResult_init_$Create$(response) {
    return WriteResult_init_$Init$(response, objectCreate(protoOf(WriteResult)));
  }
  function WriteResult_init_$Init$_0($this) {
    WriteResult.call($this);
    $this.phr_1 = null;
    return $this;
  }
  function WriteResult_init_$Create$_0() {
    return WriteResult_init_$Init$_0(objectCreate(protoOf(WriteResult)));
  }
  function Companion() {
    Companion_instance = this;
    this.qhr_1 = WriteResult_init_$Create$_0();
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(ReadResult).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    var tmp_0;
    if (other instanceof ReadResult) {
      tmp_0 = equals(this.nhr_1, other.nhr_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.ohr_1, other.ohr_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ReadResult).hashCode = function () {
    var tmp0_safe_receiver = this.nhr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.ohr_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(ReadResult).toString = function () {
    return 'ReadResult(request=' + toString(this.nhr_1) + ', response=' + toString(this.ohr_1) + ')';
  };
  function ReadResult() {
  }
  protoOf(WriteResult).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof WriteResult) {
      tmp = equals(this.phr_1, other.phr_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(WriteResult).hashCode = function () {
    var tmp0_safe_receiver = this.phr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(WriteResult).toString = function () {
    return 'WriteResult(response=' + toString(this.phr_1) + ')';
  };
  function WriteResult() {
    Companion_getInstance();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.rhr_1 = new DefaultCacheStrategy();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function sam$coil3_network_ConnectivityChecker$0(function_0) {
    this.shr_1 = function_0;
  }
  protoOf(sam$coil3_network_ConnectivityChecker$0).thr = function () {
    return this.shr_1();
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).s3 = function () {
    return this.shr_1;
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ConnectivityChecker) : false) {
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
  protoOf(sam$coil3_network_ConnectivityChecker$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function ConnectivityChecker$Companion$ONLINE$lambda() {
    return true;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = ConnectivityChecker$Companion$ONLINE$lambda;
    tmp.uhr_1 = new sam$coil3_network_ConnectivityChecker$0(tmp_0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ConnectivityChecker() {
  }
  function HttpException(response) {
    RuntimeException_init_$Init$('HTTP ' + response.fhr_1, this);
    captureStack(this, HttpException);
    this.vhr_1 = response;
  }
  function NetworkRequest(url, method, headers, body) {
    method = method === VOID ? 'GET' : method;
    headers = headers === VOID ? Companion_getInstance_2().whr_1 : headers;
    body = body === VOID ? null : body;
    this.xhr_1 = url;
    this.yhr_1 = method;
    this.zhr_1 = headers;
    this.ahs_1 = body;
  }
  protoOf(NetworkRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkRequest))
      return false;
    if (!(this.xhr_1 === other.xhr_1))
      return false;
    if (!(this.yhr_1 === other.yhr_1))
      return false;
    if (!this.zhr_1.equals(other.zhr_1))
      return false;
    if (!equals(this.ahs_1, other.ahs_1))
      return false;
    return true;
  };
  protoOf(NetworkRequest).hashCode = function () {
    var result = getStringHashCode(this.xhr_1);
    result = imul(result, 31) + getStringHashCode(this.yhr_1) | 0;
    result = imul(result, 31) + this.zhr_1.hashCode() | 0;
    result = imul(result, 31) + (this.ahs_1 == null ? 0 : hashCode(this.ahs_1)) | 0;
    return result;
  };
  protoOf(NetworkRequest).toString = function () {
    return 'NetworkRequest(url=' + this.xhr_1 + ', method=' + this.yhr_1 + ', headers=' + this.zhr_1.toString() + ', body=' + toString(this.ahs_1) + ')';
  };
  function NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate) {
    code = code === VOID ? 200 : code;
    requestMillis = requestMillis === VOID ? new Long(0, 0) : requestMillis;
    responseMillis = responseMillis === VOID ? new Long(0, 0) : responseMillis;
    headers = headers === VOID ? Companion_getInstance_2().whr_1 : headers;
    body = body === VOID ? null : body;
    delegate = delegate === VOID ? null : delegate;
    this.fhr_1 = code;
    this.ghr_1 = requestMillis;
    this.hhr_1 = responseMillis;
    this.ihr_1 = headers;
    this.jhr_1 = body;
    this.khr_1 = delegate;
  }
  protoOf(NetworkResponse).bhs = function (code, requestMillis, responseMillis, headers, body, delegate) {
    return new NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).chs = function (code, requestMillis, responseMillis, headers, body, delegate, $super) {
    code = code === VOID ? this.fhr_1 : code;
    requestMillis = requestMillis === VOID ? this.ghr_1 : requestMillis;
    responseMillis = responseMillis === VOID ? this.hhr_1 : responseMillis;
    headers = headers === VOID ? this.ihr_1 : headers;
    body = body === VOID ? this.jhr_1 : body;
    delegate = delegate === VOID ? this.khr_1 : delegate;
    return $super === VOID ? this.bhs(code, requestMillis, responseMillis, headers, body, delegate) : $super.bhs.call(this, code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkResponse))
      return false;
    if (!(this.fhr_1 === other.fhr_1))
      return false;
    if (!this.ghr_1.equals(other.ghr_1))
      return false;
    if (!this.hhr_1.equals(other.hhr_1))
      return false;
    if (!this.ihr_1.equals(other.ihr_1))
      return false;
    if (!equals(this.jhr_1, other.jhr_1))
      return false;
    if (!equals(this.khr_1, other.khr_1))
      return false;
    return true;
  };
  protoOf(NetworkResponse).hashCode = function () {
    var result = this.fhr_1;
    result = imul(result, 31) + this.ghr_1.hashCode() | 0;
    result = imul(result, 31) + this.hhr_1.hashCode() | 0;
    result = imul(result, 31) + this.ihr_1.hashCode() | 0;
    result = imul(result, 31) + (this.jhr_1 == null ? 0 : hashCode(this.jhr_1)) | 0;
    result = imul(result, 31) + (this.khr_1 == null ? 0 : hashCode(this.khr_1)) | 0;
    return result;
  };
  protoOf(NetworkResponse).toString = function () {
    return 'NetworkResponse(code=' + this.fhr_1 + ', requestMillis=' + this.ghr_1.toString() + ', responseMillis=' + this.hhr_1.toString() + ', headers=' + this.ihr_1.toString() + ', body=' + toString(this.jhr_1) + ', delegate=' + toString(this.khr_1) + ')';
  };
  function isApplicable($this, data) {
    return data.ihe_1 === 'http' || data.ihe_1 === 'https';
  }
  function NetworkFetcher$Factory$_init_$lambda_9nhdas() {
    return Companion_getInstance_0().rhr_1;
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
      return $imageLoader.bh9();
    };
  }
  function readFromDiskCache($this) {
    if ($this.ehs_1.sh6_1.qhm_1) {
      var tmp0_safe_receiver = $this.ghs_1.w();
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jhs(_get_diskCacheKey__t0sb73($this));
    } else {
      return null;
    }
  }
  function writeToDiskCache($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion) {
    var tmp = new $writeToDiskCacheCOROUTINE$1($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function newRequest($this) {
    var headers = get_httpHeaders($this.ehs_1).eh6();
    var diskRead = $this.ehs_1.sh6_1.qhm_1;
    var networkRead = $this.ehs_1.th6_1.qhm_1 && $this.ihs_1.thr();
    if (!networkRead && diskRead) {
      headers.cht('Cache-Control', 'only-if-cached, max-stale=2147483647');
    } else if (networkRead && !diskRead)
      if ($this.ehs_1.sh6_1.rhm_1) {
        headers.cht('Cache-Control', 'no-cache');
      } else {
        headers.cht('Cache-Control', 'no-cache, no-store');
      }
     else if (!networkRead && !diskRead) {
      headers.cht('Cache-Control', 'no-cache, only-if-cached');
    }
    return new NetworkRequest($this.dhs_1, get_httpMethod($this.ehs_1), headers.c2o(), get_httpBody($this.ehs_1));
  }
  function executeNetworkRequest($this, request, block, $completion) {
    if ($this.ehs_1.th6_1.qhm_1) {
      assertNotOnMainThread();
    }
    var tmp = $this.fhs_1.w();
    return tmp.dht(request, NetworkFetcher$executeNetworkRequest$slambda_0(block, null), $completion);
  }
  function toNetworkResponseOrNull(_this__u8e3s4, $this) {
    try {
      // Inline function 'okio.FileSystem.read' call
      var this_0 = _get_fileSystem__siywv4($this);
      var file = _this__u8e3s4.eht();
      // Inline function 'okio.use' call
      var this_1 = buffer(this_0.sh2(file));
      var thrown = null;
      var tmp;
      try {
        // Inline function 'okio.FileSystem.read.<anonymous>' call
        // Inline function 'coil3.network.NetworkFetcher.toNetworkResponseOrNull.<anonymous>' call
        tmp = CacheNetworkResponse_instance.chr(this_1);
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
            this_1.l4();
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
    return ImageSource(_this__u8e3s4.fht(), _get_fileSystem__siywv4($this), _get_diskCacheKey__t0sb73($this), _this__u8e3s4);
  }
  function toImageSource_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $toImageSourceCOROUTINE$2($this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function toImageSource_1(_this__u8e3s4, $this) {
    return ImageSource_0(_this__u8e3s4, _get_fileSystem__siywv4($this));
  }
  function _get_diskCacheKey__t0sb73($this) {
    var tmp0_elvis_lhs = $this.ehs_1.ph6_1;
    return tmp0_elvis_lhs == null ? $this.dhs_1 : tmp0_elvis_lhs;
  }
  function _get_fileSystem__siywv4($this) {
    var tmp0_safe_receiver = $this.ghs_1.w();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rht();
    return tmp1_elvis_lhs == null ? $this.ehs_1.qh6_1 : tmp1_elvis_lhs;
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
    this.sht_1 = lazy(networkClient);
    this.tht_1 = lazy(cacheStrategy);
    this.uht_1 = singleParameterLazy(connectivityChecker);
  }
  protoOf(Factory_0).rhf = function (data, options, imageLoader) {
    if (!isApplicable(this, data))
      return null;
    var tmp = data.toString();
    return new NetworkFetcher(tmp, options, this.sht_1, lazy(NetworkFetcher$Factory$create$lambda(imageLoader)), this.tht_1, this.uht_1.xht(options.lh6_1));
  };
  protoOf(Factory_0).bh6 = function (data, options, imageLoader) {
    return this.rhf(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    this.ghu_1 = $snapshot;
    this.hhu_1 = this$0;
    this.ihu_1 = $cacheResponse;
    this.jhu_1 = $networkRequest;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda).mhu = function (response, $completion) {
    var tmp = this.nhu(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(NetworkFetcher$fetch$slambda).ha = function (p1, $completion) {
    return this.mhu(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = writeToDiskCache(this.hhu_1, this.ghu_1._v, this.ihu_1._v, this.jhu_1, this.khu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.lhu_1 = suspendResult;
            this.ghu_1._v = this.lhu_1;
            if (!(this.ghu_1._v == null)) {
              this.ihu_1._v = toNetworkResponseOrNull(ensureNotNull(this.ghu_1._v), this.hhu_1);
              var tmp_0 = toImageSource(ensureNotNull(this.ghu_1._v), this.hhu_1);
              var tmp0_safe_receiver = this.ihu_1._v;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ihr_1;
              return new SourceFetchResult(tmp_0, this.hhu_1.ohu(this.hhu_1.dhs_1, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v48('Content-Type')), DataSource_NETWORK_getInstance());
            }

            this.n9_1 = 2;
            suspendResult = readBuffer(requireBody(this.khu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseBody = suspendResult;
            if (responseBody.uh1_1.b1(new Long(0, 0)) > 0) {
              return new SourceFetchResult(toImageSource_1(responseBody, this.hhu_1), this.hhu_1.ohu(this.hhu_1.dhs_1, this.khu_1.ihr_1.v48('Content-Type')), DataSource_NETWORK_getInstance());
            }

            return null;
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
  protoOf(NetworkFetcher$fetch$slambda).nhu = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda(this.ghu_1, this.hhu_1, this.ihu_1, this.jhu_1, completion);
    i.khu_1 = response;
    return i;
  };
  function NetworkFetcher$fetch$slambda_0($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation);
    var l = function (response, $completion) {
      return i.mhu(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$fetch$slambda_1(this$0, resultContinuation) {
    this.xhu_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda_1).zhu = function (response, $completion) {
    var tmp = this.nhu(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(NetworkFetcher$fetch$slambda_1).ha = function (p1, $completion) {
    return this.zhu(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = toImageSource_0(requireBody(this.yhu_1), this.xhu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SourceFetchResult(ARGUMENT, this.xhu_1.ohu(this.xhu_1.dhs_1, this.yhu_1.ihr_1.v48('Content-Type')), DataSource_NETWORK_getInstance());
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
  protoOf(NetworkFetcher$fetch$slambda_1).nhu = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda_1(this.xhu_1, completion);
    i.yhu_1 = response;
    return i;
  };
  function NetworkFetcher$fetch$slambda_2(this$0, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda_1(this$0, resultContinuation);
    var l = function (response, $completion) {
      return i.zhu(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation) {
    this.ihv_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).khv = function (response, $completion) {
    var tmp = this.nhu(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).ha = function (p1, $completion) {
    return this.khv(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0;
            var containsArg = this.jhv_1.fhr_1;
            if (!(200 <= containsArg ? containsArg < 300 : false)) {
              tmp_0 = !(this.jhv_1.fhr_1 === 304);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              throw new HttpException(this.jhv_1);
            }

            this.n9_1 = 1;
            suspendResult = this.ihv_1(this.jhv_1, this);
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
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).nhu = function (response, completion) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda(this.ihv_1, completion);
    i.jhv_1 = response;
    return i;
  };
  function NetworkFetcher$executeNetworkRequest$slambda_0($block, resultContinuation) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.khv(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $fetchCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.thv_1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.uhv_1 = {_v: readFromDiskCache(this.thv_1)};
            this.o9_1 = 7;
            this.vhv_1 = null;
            this.whv_1 = {_v: null};
            if (!(this.uhv_1._v == null)) {
              if (equals(_get_fileSystem__siywv4(this.thv_1).rh2(this.uhv_1._v.eht()).xhl_1, new Long(0, 0))) {
                return new SourceFetchResult(toImageSource(this.uhv_1._v, this.thv_1), this.thv_1.ohu(this.thv_1.dhs_1, null), DataSource_DISK_getInstance());
              }
              this.whv_1._v = toNetworkResponseOrNull(this.uhv_1._v, this.thv_1);
              if (!(this.whv_1._v == null)) {
                this.n9_1 = 1;
                suspendResult = this.thv_1.hhs_1.w().zhv(this.whv_1._v, newRequest(this.thv_1), this.thv_1.ehs_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 2;
                continue $sm;
              }
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 1:
            this.vhv_1 = suspendResult;
            if (!(this.vhv_1.ohr_1 == null)) {
              return new SourceFetchResult(toImageSource(this.uhv_1._v, this.thv_1), this.thv_1.ohu(this.thv_1.dhs_1, this.vhv_1.ohr_1.ihr_1.v48('Content-Type')), DataSource_DISK_getInstance());
            }

            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this;
            var tmp0_safe_receiver = this.vhv_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nhr_1;
            tmp_0.xhv_1 = tmp1_elvis_lhs == null ? newRequest(this.thv_1) : tmp1_elvis_lhs;
            this.n9_1 = 4;
            suspendResult = executeNetworkRequest(this.thv_1, this.xhv_1, NetworkFetcher$fetch$slambda_0(this.uhv_1, this.thv_1, this.whv_1, this.xhv_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.yhv_1 = suspendResult;
            if (this.yhv_1 == null) {
              this.n9_1 = 5;
              var tmp_1 = newRequest(this.thv_1);
              suspendResult = executeNetworkRequest(this.thv_1, tmp_1, NetworkFetcher$fetch$slambda_2(this.thv_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 6;
              continue $sm;
            }

          case 5:
            this.yhv_1 = suspendResult;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return this.yhv_1;
          case 7:
            this.o9_1 = 8;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Exception) {
              var e = this.q9_1;
              var tmp2_safe_receiver = this.uhv_1._v;
              if (tmp2_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp2_safe_receiver);
              }
              throw e;
            } else {
              throw this.q9_1;
            }

          case 8:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 8) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $writeToDiskCacheCOROUTINE$1(_this__u8e3s4, snapshot, cacheResponse, networkRequest, networkResponse, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.shs_1 = _this__u8e3s4;
    this.ths_1 = snapshot;
    this.uhs_1 = cacheResponse;
    this.vhs_1 = networkRequest;
    this.whs_1 = networkResponse;
  }
  protoOf($writeToDiskCacheCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            if (!this.shs_1.ehs_1.sh6_1.rhm_1) {
              var tmp0_safe_receiver = this.ths_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp0_safe_receiver);
              }
              return null;
            }

            this.n9_1 = 1;
            suspendResult = this.shs_1.hhs_1.w().ahw(this.uhs_1, this.vhs_1, this.whs_1, this.shs_1.ehs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xhs_1 = suspendResult;
            var tmp_0 = this;
            var tmp1_elvis_lhs = this.xhs_1.phr_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            tmp_0.yhs_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3;
            if (!(this.ths_1 == null)) {
              tmp_3 = this.ths_1.chw();
            } else {
              var tmp2_safe_receiver = this.shs_1.ghs_1.w();
              tmp_3 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bhw(_get_diskCacheKey__t0sb73(this.shs_1));
            }

            var tmp3_elvis_lhs = tmp_3;
            var tmp_4;
            if (tmp3_elvis_lhs == null) {
              return null;
            } else {
              tmp_4 = tmp3_elvis_lhs;
            }

            tmp_2.zhs_1 = tmp_4;
            this.o9_1 = 4;
            var this_0 = _get_fileSystem__siywv4(this.shs_1);
            var file = this.zhs_1.eht();
            var this_1 = buffer_0(this_0.th2(file, false));
            var thrown = null;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_5;
              try {
                var tmp_6;
                try {
                  CacheNetworkResponse_instance.ehr(this.yhs_1, this_1);
                  tmp$ret$0 = Unit_instance;
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
                    this_1.l4();
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
                this_1.l4();
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
            this.aht_1 = this.yhs_1.jhr_1;
            if (this.aht_1 == null) {
              this.bht_1 = null;
              this.n9_1 = 3;
              continue $sm;
            } else {
              this.n9_1 = 2;
              suspendResult = this.aht_1.dhw(_get_fileSystem__siywv4(this.shs_1), this.zhs_1.fht(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp_10 = this;
            tmp_10.bht_1 = Unit_instance;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.zhs_1.ehw();
          case 4:
            this.o9_1 = 5;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Exception) {
              var e = this.q9_1;
              abortQuietly(this.zhs_1);
              var tmp5_safe_receiver = this.whs_1.jhr_1;
              if (tmp5_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp5_safe_receiver);
              }
              var tmp6_safe_receiver = this.yhs_1.jhr_1;
              if (tmp6_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp6_safe_receiver);
              }
              throw e;
            } else {
              throw this.q9_1;
            }

          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 5) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $toImageSourceCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oht_1 = _this__u8e3s4;
    this.pht_1 = _this__u8e3s4_0;
  }
  protoOf($toImageSourceCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.qht_1 = new Buffer();
            this.n9_1 = 1;
            suspendResult = this.pht_1.fhw(this.qht_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return toImageSource_1(this.qht_1, this.oht_1);
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
  function NetworkFetcher(url, options, networkClient, diskCache, cacheStrategy, connectivityChecker) {
    this.dhs_1 = url;
    this.ehs_1 = options;
    this.fhs_1 = networkClient;
    this.ghs_1 = diskCache;
    this.hhs_1 = cacheStrategy;
    this.ihs_1 = connectivityChecker;
  }
  protoOf(NetworkFetcher).mhf = function ($completion) {
    var tmp = new $fetchCOROUTINE$0(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(NetworkFetcher).nhf = function ($completion) {
    return this.mhf($completion);
  };
  protoOf(NetworkFetcher).ohu = function (url, contentType) {
    if (contentType == null || startsWith(contentType, 'text/plain')) {
      var tmp0_safe_receiver = MimeTypeMap_instance.hhq(url);
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
  function Builder_init_$Init$($this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.dhr_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(headers, $this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var this_0 = headers.lhr_1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element.v();
      // Inline function 'coil3.network.Builder.<init>.<anonymous>' call
      var tmp$ret$2 = toMutableList(element.w());
      destination.f2(tmp_0, tmp$ret$2);
    }
    tmp.dhr_1 = destination;
    return $this;
  }
  function Builder_init_$Create$_0(headers) {
    return Builder_init_$Init$_0(headers, objectCreate(protoOf(Builder)));
  }
  protoOf(Builder).cht = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.dhr_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = mutableListOf([value]);
    this_0.f2(key_0, value_0);
    return this;
  };
  protoOf(Builder).ghw = function (key, values) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.dhr_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value = toMutableList(values);
    this_0.f2(key_0, value);
    return this;
  };
  protoOf(Builder).hhw = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.dhr_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = this_0.n2(key_0);
    var tmp;
    if (value_0 == null) {
      // Inline function 'coil3.network.Builder.add.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.f2(key_0, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var values = tmp;
    // Inline function 'kotlin.collections.plusAssign' call
    values.e(value);
    return this;
  };
  protoOf(Builder).c2o = function () {
    return new NetworkHeaders(toMap(this.dhr_1));
  };
  function Builder() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.whr_1 = Builder_init_$Create$().c2o();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function NetworkHeaders(data) {
    Companion_getInstance_2();
    this.lhr_1 = data;
  }
  protoOf(NetworkHeaders).v48 = function (key) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = key.toLowerCase();
    var tmp0_safe_receiver = this.lhr_1.n2(tmp$ret$1);
    return tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
  };
  protoOf(NetworkHeaders).mhr = function () {
    return this.lhr_1;
  };
  protoOf(NetworkHeaders).eh6 = function () {
    return Builder_init_$Create$_0(this);
  };
  protoOf(NetworkHeaders).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkHeaders))
      return false;
    if (!equals(this.lhr_1, other.lhr_1))
      return false;
    return true;
  };
  protoOf(NetworkHeaders).hashCode = function () {
    return hashCode(this.lhr_1);
  };
  protoOf(NetworkHeaders).toString = function () {
    return 'NetworkHeaders(data=' + toString_0(this.lhr_1) + ')';
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
      httpHeadersKey = new Key(Companion_getInstance_2().whr_1);
      httpBodyKey = new Key(null);
    }
  }
  function SingleParameterLazy(initializer) {
    this.vht_1 = initializer;
    this.wht_1 = UNINITIALIZED_instance;
  }
  protoOf(SingleParameterLazy).xht = function (parameter) {
    var value1 = this.wht_1;
    if (!(value1 === UNINITIALIZED_instance)) {
      return (value1 == null ? true : !(value1 == null)) ? value1 : THROW_CCE();
    }
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'coil3.network.internal.SingleParameterLazy.get.<anonymous>' call
    var value2 = this.wht_1;
    var tmp;
    if (!(value2 === UNINITIALIZED_instance)) {
      tmp = (value2 == null ? true : !(value2 == null)) ? value2 : THROW_CCE();
    } else {
      var newValue = ensureNotNull(this.vht_1)(parameter);
      this.wht_1 = newValue;
      this.vht_1 = null;
      tmp = newValue;
    }
    return tmp;
  };
  function singleParameterLazy(initializer) {
    return new SingleParameterLazy(initializer);
  }
  function UNINITIALIZED() {
  }
  var UNINITIALIZED_instance;
  function UNINITIALIZED_getInstance() {
    return UNINITIALIZED_instance;
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function requireBody(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = _this__u8e3s4.jhr_1;
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
  function abortQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.xhw();
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
  protoOf(DefaultCacheStrategy).zhv = function (cacheResponse, networkRequest, options, $completion) {
    return ReadResult_init_$Create$(cacheResponse);
  };
  protoOf(DefaultCacheStrategy).ahw = function (cacheResponse, networkRequest, networkResponse, options, $completion) {
    if (networkResponse.fhr_1 === 304 && !(cacheResponse == null)) {
      var combinedHeaders = plus(cacheResponse.ihr_1, networkResponse.ihr_1);
      return WriteResult_init_$Create$(networkResponse.chs(VOID, VOID, VOID, combinedHeaders, null));
    }
    return WriteResult_init_$Create$(networkResponse);
  };
  function plus(_this__u8e3s4, other) {
    var builder = _this__u8e3s4.eh6();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = other.mhr().u().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.w();
      builder.ghw(key, values);
    }
    return builder.c2o();
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
    _this__u8e3s4.hhw(tmp, tmp$ret$5);
    return _this__u8e3s4;
  }
  function $readBufferCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qhw_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.shw_1 = this.qhw_1;
            this.thw_1 = null;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.o9_1 = 9;
            this.o9_1 = 8;
            var tmp_1 = this;
            tmp_1.vhw_1 = this.shw_1;
            this.whw_1 = new Buffer();
            this.n9_1 = 5;
            suspendResult = this.vhw_1.fhw(this.whw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.uhw_1 = this.whw_1;
            this.o9_1 = 10;
            this.n9_1 = 6;
            var tmp_2 = this;
            continue $sm;
          case 6:
            var tmp_3 = this.uhw_1;
            this.o9_1 = 10;
            closeFinally(this.shw_1, this.thw_1);
            return tmp_3;
          case 7:
            this.o9_1 = 10;
            var tmp_4 = this;
            closeFinally(this.shw_1, this.thw_1);
            tmp_4.rhw_1 = Unit_instance;
            this.n9_1 = 12;
            continue $sm;
          case 8:
            this.o9_1 = 9;
            var tmp_5 = this.q9_1;
            if (tmp_5 instanceof Error) {
              var e = this.q9_1;
              var tmp_6 = this;
              this.thw_1 = e;
              throw e;
            } else {
              throw this.q9_1;
            }

          case 9:
            this.o9_1 = 10;
            var t = this.q9_1;
            closeFinally(this.shw_1, this.thw_1);
            throw t;
          case 10:
            throw this.q9_1;
          case 11:
            this.o9_1 = 10;
            closeFinally(this.shw_1, this.thw_1);
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 12;
            continue $sm;
          case 12:
            return this.rhw_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 10) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function ConnectivityChecker_0(context) {
    return Companion_getInstance_1().uhr_1;
  }
  function assertNotOnMainThread() {
  }
  //region block: init
  CacheNetworkResponse_instance = new CacheNetworkResponse();
  UNINITIALIZED_instance = new UNINITIALIZED();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Factory_0;
  _.$_$.b = NetworkResponse;
  _.$_$.c = Builder_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-network-core.js.map
