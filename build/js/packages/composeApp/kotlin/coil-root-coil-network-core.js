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
  var toInt = kotlin_kotlin.$_$.cj;
  var toLong = kotlin_kotlin.$_$.fj;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var toLong_0 = kotlin_kotlin.$_$.hf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var equals = kotlin_kotlin.$_$.od;
  var toString = kotlin_kotlin.$_$.cm;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var isInterface = kotlin_kotlin.$_$.oe;
  var hashCode = kotlin_kotlin.$_$.xd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var RuntimeException = kotlin_kotlin.$_$.ok;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.c3;
  var captureStack = kotlin_kotlin.$_$.fd;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var Long = kotlin_kotlin.$_$.hk;
  var buffer = kotlin_com_squareup_okio_okio.$_$.f;
  var addSuppressed = kotlin_kotlin.$_$.cl;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var IOException = kotlin_com_squareup_okio_okio.$_$.d;
  var ImageSource = kotlin_io_coil_kt_coil3_coil_core.$_$.b;
  var ImageSource_0 = kotlin_io_coil_kt_coil3_coil_core.$_$.a;
  var lazy = kotlin_kotlin.$_$.ql;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.s;
  var Factory = kotlin_io_coil_kt_coil3_coil_core.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var DataSource_NETWORK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.x;
  var SourceFetchResult = kotlin_io_coil_kt_coil3_coil_core.$_$.d;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var DataSource_DISK_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.v;
  var Exception = kotlin_kotlin.$_$.dk;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var buffer_0 = kotlin_com_squareup_okio_okio.$_$.g;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var MimeTypeMap_instance = kotlin_io_coil_kt_coil3_coil_core.$_$.f1;
  var startsWith = kotlin_kotlin.$_$.mi;
  var substringBefore = kotlin_kotlin.$_$.ti;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var mutableListOf = kotlin_kotlin.$_$.ja;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var toMap = kotlin_kotlin.$_$.tb;
  var lastOrNull = kotlin_kotlin.$_$.v9;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var getExtra = kotlin_io_coil_kt_coil3_coil_core.$_$.t;
  var Key = kotlin_io_coil_kt_coil3_coil_core.$_$.q;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var indexOf = kotlin_kotlin.$_$.uh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var closeFinally = kotlin_kotlin.$_$.el;
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
  protoOf(CacheNetworkResponse).ckx = function (source) {
    var code = toInt(source.aka());
    var requestMillis = toLong(source.aka());
    var responseMillis = toLong(source.aka());
    var headers = Builder_init_$Create$();
    var headersLineCount = toInt(source.aka());
    var inductionVariable = 0;
    if (inductionVariable < headersLineCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        append(headers, source.aka());
      }
       while (inductionVariable < headersLineCount);
    return new NetworkResponse(code, requestMillis, responseMillis, headers.a2u());
  };
  protoOf(CacheNetworkResponse).ekx = function (response, sink) {
    var tmp = sink.mka(toLong_0(response.fkx_1));
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(10);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp.ika(tmp$ret$0);
    var tmp_0 = sink.mka(response.gkx_1);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(10);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp_0.ika(tmp$ret$1);
    var tmp_1 = sink.mka(response.hkx_1);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(10);
    var tmp$ret$2 = Char__toInt_impl_vasixd(this_2);
    tmp_1.ika(tmp$ret$2);
    var headers = response.ikx_1.mkx().a1();
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator = headers.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      var tmp_2 = sum;
      // Inline function 'coil3.network.CacheNetworkResponse.writeTo.<anonymous>' call
      sum = tmp_2 + element.c1().p() | 0;
    }
    var tmp$ret$4 = sum;
    var headersLineCount = toLong_0(tmp$ret$4);
    var tmp_3 = sink.mka(headersLineCount);
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(10);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_3);
    tmp_3.ika(tmp$ret$5);
    var _iterator__ex2g4s = headers.m();
    while (_iterator__ex2g4s.n()) {
      var header = _iterator__ex2g4s.o();
      var _iterator__ex2g4s_0 = header.c1().m();
      while (_iterator__ex2g4s_0.n()) {
        var value = _iterator__ex2g4s_0.o();
        var tmp_4 = sink.yk7(header.b1()).yk7(':').yk7(value);
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(10);
        var tmp$ret$6 = Char__toInt_impl_vasixd(this_4);
        tmp_4.ika(tmp$ret$6);
      }
    }
  };
  var CacheNetworkResponse_instance;
  function CacheNetworkResponse_getInstance() {
    return CacheNetworkResponse_instance;
  }
  function ReadResult_init_$Init$(response, $this) {
    ReadResult.call($this);
    $this.nkx_1 = null;
    $this.okx_1 = response;
    return $this;
  }
  function ReadResult_init_$Create$(response) {
    return ReadResult_init_$Init$(response, objectCreate(protoOf(ReadResult)));
  }
  function WriteResult_init_$Init$(response, $this) {
    WriteResult.call($this);
    $this.pkx_1 = response;
    return $this;
  }
  function WriteResult_init_$Create$(response) {
    return WriteResult_init_$Init$(response, objectCreate(protoOf(WriteResult)));
  }
  function WriteResult_init_$Init$_0($this) {
    WriteResult.call($this);
    $this.pkx_1 = null;
    return $this;
  }
  function WriteResult_init_$Create$_0() {
    return WriteResult_init_$Init$_0(objectCreate(protoOf(WriteResult)));
  }
  function Companion() {
    Companion_instance = this;
    this.qkx_1 = WriteResult_init_$Create$_0();
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
      tmp_0 = equals(this.nkx_1, other.nkx_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.okx_1, other.okx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ReadResult).hashCode = function () {
    var tmp0_safe_receiver = this.nkx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.okx_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(ReadResult).toString = function () {
    return 'ReadResult(request=' + toString(this.nkx_1) + ', response=' + toString(this.okx_1) + ')';
  };
  function ReadResult() {
  }
  protoOf(WriteResult).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof WriteResult) {
      tmp = equals(this.pkx_1, other.pkx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(WriteResult).hashCode = function () {
    var tmp0_safe_receiver = this.pkx_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(WriteResult).toString = function () {
    return 'WriteResult(response=' + toString(this.pkx_1) + ')';
  };
  function WriteResult() {
    Companion_getInstance();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.rkx_1 = new DefaultCacheStrategy();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function sam$coil3_network_ConnectivityChecker$0(function_0) {
    this.skx_1 = function_0;
  }
  protoOf(sam$coil3_network_ConnectivityChecker$0).tkx = function () {
    return this.skx_1();
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).x3 = function () {
    return this.skx_1;
  };
  protoOf(sam$coil3_network_ConnectivityChecker$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ConnectivityChecker) : false) {
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
  protoOf(sam$coil3_network_ConnectivityChecker$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function ConnectivityChecker$Companion$ONLINE$lambda() {
    return true;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = ConnectivityChecker$Companion$ONLINE$lambda;
    tmp.ukx_1 = new sam$coil3_network_ConnectivityChecker$0(tmp_0);
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
    RuntimeException_init_$Init$('HTTP ' + response.fkx_1, this);
    captureStack(this, HttpException);
    this.vkx_1 = response;
  }
  function NetworkRequest(url, method, headers, body) {
    method = method === VOID ? 'GET' : method;
    headers = headers === VOID ? Companion_getInstance_2().wkx_1 : headers;
    body = body === VOID ? null : body;
    this.xkx_1 = url;
    this.ykx_1 = method;
    this.zkx_1 = headers;
    this.aky_1 = body;
  }
  protoOf(NetworkRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkRequest))
      return false;
    if (!(this.xkx_1 === other.xkx_1))
      return false;
    if (!(this.ykx_1 === other.ykx_1))
      return false;
    if (!this.zkx_1.equals(other.zkx_1))
      return false;
    if (!equals(this.aky_1, other.aky_1))
      return false;
    return true;
  };
  protoOf(NetworkRequest).hashCode = function () {
    var result = getStringHashCode(this.xkx_1);
    result = imul(result, 31) + getStringHashCode(this.ykx_1) | 0;
    result = imul(result, 31) + this.zkx_1.hashCode() | 0;
    result = imul(result, 31) + (this.aky_1 == null ? 0 : hashCode(this.aky_1)) | 0;
    return result;
  };
  protoOf(NetworkRequest).toString = function () {
    return 'NetworkRequest(url=' + this.xkx_1 + ', method=' + this.ykx_1 + ', headers=' + this.zkx_1.toString() + ', body=' + toString(this.aky_1) + ')';
  };
  function NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate) {
    code = code === VOID ? 200 : code;
    requestMillis = requestMillis === VOID ? new Long(0, 0) : requestMillis;
    responseMillis = responseMillis === VOID ? new Long(0, 0) : responseMillis;
    headers = headers === VOID ? Companion_getInstance_2().wkx_1 : headers;
    body = body === VOID ? null : body;
    delegate = delegate === VOID ? null : delegate;
    this.fkx_1 = code;
    this.gkx_1 = requestMillis;
    this.hkx_1 = responseMillis;
    this.ikx_1 = headers;
    this.jkx_1 = body;
    this.kkx_1 = delegate;
  }
  protoOf(NetworkResponse).bky = function (code, requestMillis, responseMillis, headers, body, delegate) {
    return new NetworkResponse(code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).cky = function (code, requestMillis, responseMillis, headers, body, delegate, $super) {
    code = code === VOID ? this.fkx_1 : code;
    requestMillis = requestMillis === VOID ? this.gkx_1 : requestMillis;
    responseMillis = responseMillis === VOID ? this.hkx_1 : responseMillis;
    headers = headers === VOID ? this.ikx_1 : headers;
    body = body === VOID ? this.jkx_1 : body;
    delegate = delegate === VOID ? this.kkx_1 : delegate;
    return $super === VOID ? this.bky(code, requestMillis, responseMillis, headers, body, delegate) : $super.bky.call(this, code, requestMillis, responseMillis, headers, body, delegate);
  };
  protoOf(NetworkResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkResponse))
      return false;
    if (!(this.fkx_1 === other.fkx_1))
      return false;
    if (!this.gkx_1.equals(other.gkx_1))
      return false;
    if (!this.hkx_1.equals(other.hkx_1))
      return false;
    if (!this.ikx_1.equals(other.ikx_1))
      return false;
    if (!equals(this.jkx_1, other.jkx_1))
      return false;
    if (!equals(this.kkx_1, other.kkx_1))
      return false;
    return true;
  };
  protoOf(NetworkResponse).hashCode = function () {
    var result = this.fkx_1;
    result = imul(result, 31) + this.gkx_1.hashCode() | 0;
    result = imul(result, 31) + this.hkx_1.hashCode() | 0;
    result = imul(result, 31) + this.ikx_1.hashCode() | 0;
    result = imul(result, 31) + (this.jkx_1 == null ? 0 : hashCode(this.jkx_1)) | 0;
    result = imul(result, 31) + (this.kkx_1 == null ? 0 : hashCode(this.kkx_1)) | 0;
    return result;
  };
  protoOf(NetworkResponse).toString = function () {
    return 'NetworkResponse(code=' + this.fkx_1 + ', requestMillis=' + this.gkx_1.toString() + ', responseMillis=' + this.hkx_1.toString() + ', headers=' + this.ikx_1.toString() + ', body=' + toString(this.jkx_1) + ', delegate=' + toString(this.kkx_1) + ')';
  };
  function isApplicable($this, data) {
    return data.ikk_1 === 'http' || data.ikk_1 === 'https';
  }
  function NetworkFetcher$Factory$_init_$lambda_9nhdas() {
    return Companion_getInstance_0().rkx_1;
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
      return $imageLoader.bkf();
    };
  }
  function readFromDiskCache($this) {
    if ($this.eky_1.skc_1.qks_1) {
      var tmp0_safe_receiver = $this.gky_1.c1();
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jky(_get_diskCacheKey__t0sb73($this));
    } else {
      return null;
    }
  }
  function writeToDiskCache($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion) {
    var tmp = new $writeToDiskCacheCOROUTINE$1($this, snapshot, cacheResponse, networkRequest, networkResponse, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function newRequest($this) {
    var headers = get_httpHeaders($this.eky_1).ekc();
    var diskRead = $this.eky_1.skc_1.qks_1;
    var networkRead = $this.eky_1.tkc_1.qks_1 && $this.iky_1.tkx();
    if (!networkRead && diskRead) {
      headers.ckz('Cache-Control', 'only-if-cached, max-stale=2147483647');
    } else if (networkRead && !diskRead)
      if ($this.eky_1.skc_1.rks_1) {
        headers.ckz('Cache-Control', 'no-cache');
      } else {
        headers.ckz('Cache-Control', 'no-cache, no-store');
      }
     else if (!networkRead && !diskRead) {
      headers.ckz('Cache-Control', 'no-cache, only-if-cached');
    }
    return new NetworkRequest($this.dky_1, get_httpMethod($this.eky_1), headers.a2u(), get_httpBody($this.eky_1));
  }
  function executeNetworkRequest($this, request, block, $completion) {
    if ($this.eky_1.tkc_1.qks_1) {
      assertNotOnMainThread();
    }
    var tmp = $this.fky_1.c1();
    return tmp.dkz(request, NetworkFetcher$executeNetworkRequest$slambda_0(block, null), $completion);
  }
  function toNetworkResponseOrNull(_this__u8e3s4, $this) {
    try {
      // Inline function 'okio.FileSystem.read' call
      var this_0 = _get_fileSystem__siywv4($this);
      var file = _this__u8e3s4.ekz();
      // Inline function 'okio.use' call
      var this_1 = buffer(this_0.sk8(file));
      var thrown = null;
      var tmp;
      try {
        // Inline function 'okio.FileSystem.read.<anonymous>' call
        // Inline function 'coil3.network.NetworkFetcher.toNetworkResponseOrNull.<anonymous>' call
        tmp = CacheNetworkResponse_instance.ckx(this_1);
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
            this_1.q4();
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
    return ImageSource(_this__u8e3s4.fkz(), _get_fileSystem__siywv4($this), _get_diskCacheKey__t0sb73($this), _this__u8e3s4);
  }
  function toImageSource_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $toImageSourceCOROUTINE$2($this, _this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function toImageSource_1(_this__u8e3s4, $this) {
    return ImageSource_0(_this__u8e3s4, _get_fileSystem__siywv4($this));
  }
  function _get_diskCacheKey__t0sb73($this) {
    var tmp0_elvis_lhs = $this.eky_1.pkc_1;
    return tmp0_elvis_lhs == null ? $this.dky_1 : tmp0_elvis_lhs;
  }
  function _get_fileSystem__siywv4($this) {
    var tmp0_safe_receiver = $this.gky_1.c1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rkz();
    return tmp1_elvis_lhs == null ? $this.eky_1.qkc_1 : tmp1_elvis_lhs;
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
    this.skz_1 = lazy(networkClient);
    this.tkz_1 = lazy(cacheStrategy);
    this.ukz_1 = singleParameterLazy(connectivityChecker);
  }
  protoOf(Factory_0).rkl = function (data, options, imageLoader) {
    if (!isApplicable(this, data))
      return null;
    var tmp = data.toString();
    return new NetworkFetcher(tmp, options, this.skz_1, lazy(NetworkFetcher$Factory$create$lambda(imageLoader)), this.tkz_1, this.ukz_1.xkz(options.lkc_1));
  };
  protoOf(Factory_0).bkc = function (data, options, imageLoader) {
    return this.rkl(data instanceof Uri ? data : THROW_CCE(), options, imageLoader);
  };
  function NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    this.gl0_1 = $snapshot;
    this.hl0_1 = this$0;
    this.il0_1 = $cacheResponse;
    this.jl0_1 = $networkRequest;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda).ml0 = function (response, $completion) {
    var tmp = this.nl0(response, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NetworkFetcher$fetch$slambda).ma = function (p1, $completion) {
    return this.ml0(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = writeToDiskCache(this.hl0_1, this.gl0_1._v, this.il0_1._v, this.jl0_1, this.kl0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ll0_1 = suspendResult;
            this.gl0_1._v = this.ll0_1;
            if (!(this.gl0_1._v == null)) {
              this.il0_1._v = toNetworkResponseOrNull(ensureNotNull(this.gl0_1._v), this.hl0_1);
              var tmp_0 = toImageSource(ensureNotNull(this.gl0_1._v), this.hl0_1);
              var tmp0_safe_receiver = this.il0_1._v;
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ikx_1;
              return new SourceFetchResult(tmp_0, this.hl0_1.ol0(this.hl0_1.dky_1, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i4f('Content-Type')), DataSource_NETWORK_getInstance());
            }

            this.s9_1 = 2;
            suspendResult = readBuffer(requireBody(this.kl0_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseBody = suspendResult;
            if (responseBody.uk7_1.h1(new Long(0, 0)) > 0) {
              return new SourceFetchResult(toImageSource_1(responseBody, this.hl0_1), this.hl0_1.ol0(this.hl0_1.dky_1, this.kl0_1.ikx_1.i4f('Content-Type')), DataSource_NETWORK_getInstance());
            }

            return null;
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
  protoOf(NetworkFetcher$fetch$slambda).nl0 = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda(this.gl0_1, this.hl0_1, this.il0_1, this.jl0_1, completion);
    i.kl0_1 = response;
    return i;
  };
  function NetworkFetcher$fetch$slambda_0($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda($snapshot, this$0, $cacheResponse, $networkRequest, resultContinuation);
    var l = function (response, $completion) {
      return i.ml0(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$fetch$slambda_1(this$0, resultContinuation) {
    this.xl0_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$fetch$slambda_1).zl0 = function (response, $completion) {
    var tmp = this.nl0(response, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NetworkFetcher$fetch$slambda_1).ma = function (p1, $completion) {
    return this.zl0(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$fetch$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = toImageSource_0(requireBody(this.yl0_1), this.xl0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SourceFetchResult(ARGUMENT, this.xl0_1.ol0(this.xl0_1.dky_1, this.yl0_1.ikx_1.i4f('Content-Type')), DataSource_NETWORK_getInstance());
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
  protoOf(NetworkFetcher$fetch$slambda_1).nl0 = function (response, completion) {
    var i = new NetworkFetcher$fetch$slambda_1(this.xl0_1, completion);
    i.yl0_1 = response;
    return i;
  };
  function NetworkFetcher$fetch$slambda_2(this$0, resultContinuation) {
    var i = new NetworkFetcher$fetch$slambda_1(this$0, resultContinuation);
    var l = function (response, $completion) {
      return i.zl0(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation) {
    this.il1_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).kl1 = function (response, $completion) {
    var tmp = this.nl0(response, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).ma = function (p1, $completion) {
    return this.kl1(p1 instanceof NetworkResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0;
            var containsArg = this.jl1_1.fkx_1;
            if (!(200 <= containsArg ? containsArg < 300 : false)) {
              tmp_0 = !(this.jl1_1.fkx_1 === 304);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              throw new HttpException(this.jl1_1);
            }

            this.s9_1 = 1;
            suspendResult = this.il1_1(this.jl1_1, this);
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
  protoOf(NetworkFetcher$executeNetworkRequest$slambda).nl0 = function (response, completion) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda(this.il1_1, completion);
    i.jl1_1 = response;
    return i;
  };
  function NetworkFetcher$executeNetworkRequest$slambda_0($block, resultContinuation) {
    var i = new NetworkFetcher$executeNetworkRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.kl1(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $fetchCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tl1_1 = _this__u8e3s4;
  }
  protoOf($fetchCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            this.ul1_1 = {_v: readFromDiskCache(this.tl1_1)};
            this.t9_1 = 7;
            this.vl1_1 = null;
            this.wl1_1 = {_v: null};
            if (!(this.ul1_1._v == null)) {
              if (equals(_get_fileSystem__siywv4(this.tl1_1).rk8(this.ul1_1._v.ekz()).xkr_1, new Long(0, 0))) {
                return new SourceFetchResult(toImageSource(this.ul1_1._v, this.tl1_1), this.tl1_1.ol0(this.tl1_1.dky_1, null), DataSource_DISK_getInstance());
              }
              this.wl1_1._v = toNetworkResponseOrNull(this.ul1_1._v, this.tl1_1);
              if (!(this.wl1_1._v == null)) {
                this.s9_1 = 1;
                suspendResult = this.tl1_1.hky_1.c1().zl1(this.wl1_1._v, newRequest(this.tl1_1), this.tl1_1.eky_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 2;
                continue $sm;
              }
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 1:
            this.vl1_1 = suspendResult;
            if (!(this.vl1_1.okx_1 == null)) {
              return new SourceFetchResult(toImageSource(this.ul1_1._v, this.tl1_1), this.tl1_1.ol0(this.tl1_1.dky_1, this.vl1_1.okx_1.ikx_1.i4f('Content-Type')), DataSource_DISK_getInstance());
            }

            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this;
            var tmp0_safe_receiver = this.vl1_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nkx_1;
            tmp_0.xl1_1 = tmp1_elvis_lhs == null ? newRequest(this.tl1_1) : tmp1_elvis_lhs;
            this.s9_1 = 4;
            suspendResult = executeNetworkRequest(this.tl1_1, this.xl1_1, NetworkFetcher$fetch$slambda_0(this.ul1_1, this.tl1_1, this.wl1_1, this.xl1_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.yl1_1 = suspendResult;
            if (this.yl1_1 == null) {
              this.s9_1 = 5;
              var tmp_1 = newRequest(this.tl1_1);
              suspendResult = executeNetworkRequest(this.tl1_1, tmp_1, NetworkFetcher$fetch$slambda_2(this.tl1_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 6;
              continue $sm;
            }

          case 5:
            this.yl1_1 = suspendResult;
            this.s9_1 = 6;
            continue $sm;
          case 6:
            return this.yl1_1;
          case 7:
            this.t9_1 = 8;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof Exception) {
              var e = this.v9_1;
              var tmp2_safe_receiver = this.ul1_1._v;
              if (tmp2_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp2_safe_receiver);
              }
              throw e;
            } else {
              throw this.v9_1;
            }

          case 8:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 8) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $writeToDiskCacheCOROUTINE$1(_this__u8e3s4, snapshot, cacheResponse, networkRequest, networkResponse, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sky_1 = _this__u8e3s4;
    this.tky_1 = snapshot;
    this.uky_1 = cacheResponse;
    this.vky_1 = networkRequest;
    this.wky_1 = networkResponse;
  }
  protoOf($writeToDiskCacheCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            if (!this.sky_1.eky_1.skc_1.rks_1) {
              var tmp0_safe_receiver = this.tky_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp0_safe_receiver);
              }
              return null;
            }

            this.s9_1 = 1;
            suspendResult = this.sky_1.hky_1.c1().al2(this.uky_1, this.vky_1, this.wky_1, this.sky_1.eky_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xky_1 = suspendResult;
            var tmp_0 = this;
            var tmp1_elvis_lhs = this.xky_1.pkx_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            tmp_0.yky_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3;
            if (!(this.tky_1 == null)) {
              tmp_3 = this.tky_1.cl2();
            } else {
              var tmp2_safe_receiver = this.sky_1.gky_1.c1();
              tmp_3 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bl2(_get_diskCacheKey__t0sb73(this.sky_1));
            }

            var tmp3_elvis_lhs = tmp_3;
            var tmp_4;
            if (tmp3_elvis_lhs == null) {
              return null;
            } else {
              tmp_4 = tmp3_elvis_lhs;
            }

            tmp_2.zky_1 = tmp_4;
            this.t9_1 = 4;
            var this_0 = _get_fileSystem__siywv4(this.sky_1);
            var file = this.zky_1.ekz();
            var this_1 = buffer_0(this_0.tk8(file, false));
            var thrown = null;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_5;
              try {
                var tmp_6;
                try {
                  CacheNetworkResponse_instance.ekx(this.yky_1, this_1);
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
                    this_1.q4();
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
                this_1.q4();
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
            this.akz_1 = this.yky_1.jkx_1;
            if (this.akz_1 == null) {
              this.bkz_1 = null;
              this.s9_1 = 3;
              continue $sm;
            } else {
              this.s9_1 = 2;
              suspendResult = this.akz_1.dl2(_get_fileSystem__siywv4(this.sky_1), this.zky_1.fkz(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp_10 = this;
            tmp_10.bkz_1 = Unit_instance;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.zky_1.el2();
          case 4:
            this.t9_1 = 5;
            var tmp_11 = this.v9_1;
            if (tmp_11 instanceof Exception) {
              var e = this.v9_1;
              abortQuietly(this.zky_1);
              var tmp5_safe_receiver = this.wky_1.jkx_1;
              if (tmp5_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp5_safe_receiver);
              }
              var tmp6_safe_receiver = this.yky_1.jkx_1;
              if (tmp6_safe_receiver == null)
                null;
              else {
                closeQuietly(tmp6_safe_receiver);
              }
              throw e;
            } else {
              throw this.v9_1;
            }

          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 5) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $toImageSourceCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.okz_1 = _this__u8e3s4;
    this.pkz_1 = _this__u8e3s4_0;
  }
  protoOf($toImageSourceCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.qkz_1 = new Buffer();
            this.s9_1 = 1;
            suspendResult = this.pkz_1.fl2(this.qkz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return toImageSource_1(this.qkz_1, this.okz_1);
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
  function NetworkFetcher(url, options, networkClient, diskCache, cacheStrategy, connectivityChecker) {
    this.dky_1 = url;
    this.eky_1 = options;
    this.fky_1 = networkClient;
    this.gky_1 = diskCache;
    this.hky_1 = cacheStrategy;
    this.iky_1 = connectivityChecker;
  }
  protoOf(NetworkFetcher).mkl = function ($completion) {
    var tmp = new $fetchCOROUTINE$0(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(NetworkFetcher).nkl = function ($completion) {
    return this.mkl($completion);
  };
  protoOf(NetworkFetcher).ol0 = function (url, contentType) {
    if (contentType == null || startsWith(contentType, 'text/plain')) {
      var tmp0_safe_receiver = MimeTypeMap_instance.hkw(url);
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
    tmp.dkx_1 = LinkedHashMap_init_$Create$();
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(headers, $this) {
    Builder.call($this);
    var tmp = $this;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var this_0 = headers.lkx_1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element.b1();
      // Inline function 'coil3.network.Builder.<init>.<anonymous>' call
      var tmp$ret$2 = toMutableList(element.c1());
      destination.k2(tmp_0, tmp$ret$2);
    }
    tmp.dkx_1 = destination;
    return $this;
  }
  function Builder_init_$Create$_0(headers) {
    return Builder_init_$Init$_0(headers, objectCreate(protoOf(Builder)));
  }
  protoOf(Builder).ckz = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.dkx_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = mutableListOf([value]);
    this_0.k2(key_0, value_0);
    return this;
  };
  protoOf(Builder).gl2 = function (key, values) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.set.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.dkx_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value = toMutableList(values);
    this_0.k2(key_0, value);
    return this;
  };
  protoOf(Builder).hl2 = function (key, value) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.network.Builder.add.<anonymous>' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.dkx_1;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var key_0 = key.toLowerCase();
    var value_0 = this_0.s2(key_0);
    var tmp;
    if (value_0 == null) {
      // Inline function 'coil3.network.Builder.add.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      this_0.k2(key_0, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var values = tmp;
    // Inline function 'kotlin.collections.plusAssign' call
    values.e(value);
    return this;
  };
  protoOf(Builder).a2u = function () {
    return new NetworkHeaders(toMap(this.dkx_1));
  };
  function Builder() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.wkx_1 = Builder_init_$Create$().a2u();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function NetworkHeaders(data) {
    Companion_getInstance_2();
    this.lkx_1 = data;
  }
  protoOf(NetworkHeaders).i4f = function (key) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = key.toLowerCase();
    var tmp0_safe_receiver = this.lkx_1.s2(tmp$ret$1);
    return tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
  };
  protoOf(NetworkHeaders).mkx = function () {
    return this.lkx_1;
  };
  protoOf(NetworkHeaders).ekc = function () {
    return Builder_init_$Create$_0(this);
  };
  protoOf(NetworkHeaders).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NetworkHeaders))
      return false;
    if (!equals(this.lkx_1, other.lkx_1))
      return false;
    return true;
  };
  protoOf(NetworkHeaders).hashCode = function () {
    return hashCode(this.lkx_1);
  };
  protoOf(NetworkHeaders).toString = function () {
    return 'NetworkHeaders(data=' + toString_0(this.lkx_1) + ')';
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
      httpHeadersKey = new Key(Companion_getInstance_2().wkx_1);
      httpBodyKey = new Key(null);
    }
  }
  function SingleParameterLazy(initializer) {
    this.vkz_1 = initializer;
    this.wkz_1 = UNINITIALIZED_instance;
  }
  protoOf(SingleParameterLazy).xkz = function (parameter) {
    var value1 = this.wkz_1;
    if (!(value1 === UNINITIALIZED_instance)) {
      return (value1 == null ? true : !(value1 == null)) ? value1 : THROW_CCE();
    }
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'coil3.network.internal.SingleParameterLazy.get.<anonymous>' call
    var value2 = this.wkz_1;
    var tmp;
    if (!(value2 === UNINITIALIZED_instance)) {
      tmp = (value2 == null ? true : !(value2 == null)) ? value2 : THROW_CCE();
    } else {
      var newValue = ensureNotNull(this.vkz_1)(parameter);
      this.wkz_1 = newValue;
      this.vkz_1 = null;
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
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function requireBody(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = _this__u8e3s4.jkx_1;
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
  function abortQuietly(_this__u8e3s4) {
    try {
      _this__u8e3s4.xl2();
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
  protoOf(DefaultCacheStrategy).zl1 = function (cacheResponse, networkRequest, options, $completion) {
    return ReadResult_init_$Create$(cacheResponse);
  };
  protoOf(DefaultCacheStrategy).al2 = function (cacheResponse, networkRequest, networkResponse, options, $completion) {
    if (networkResponse.fkx_1 === 304 && !(cacheResponse == null)) {
      var combinedHeaders = plus(cacheResponse.ikx_1, networkResponse.ikx_1);
      return WriteResult_init_$Create$(networkResponse.cky(VOID, VOID, VOID, combinedHeaders, null));
    }
    return WriteResult_init_$Create$(networkResponse);
  };
  function plus(_this__u8e3s4, other) {
    var builder = _this__u8e3s4.ekc();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = other.mkx().a1().m();
    while (_iterator__ex2g4s.n()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.o();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.c1();
      builder.gl2(key, values);
    }
    return builder.a2u();
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
    _this__u8e3s4.hl2(tmp, tmp$ret$5);
    return _this__u8e3s4;
  }
  function $readBufferCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ql2_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 10;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.sl2_1 = this.ql2_1;
            this.tl2_1 = null;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            this.t9_1 = 9;
            this.t9_1 = 8;
            var tmp_1 = this;
            tmp_1.vl2_1 = this.sl2_1;
            this.wl2_1 = new Buffer();
            this.s9_1 = 5;
            suspendResult = this.vl2_1.fl2(this.wl2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.ul2_1 = this.wl2_1;
            this.t9_1 = 10;
            this.s9_1 = 6;
            var tmp_2 = this;
            continue $sm;
          case 6:
            var tmp_3 = this.ul2_1;
            this.t9_1 = 10;
            closeFinally(this.sl2_1, this.tl2_1);
            return tmp_3;
          case 7:
            this.t9_1 = 10;
            var tmp_4 = this;
            closeFinally(this.sl2_1, this.tl2_1);
            tmp_4.rl2_1 = Unit_instance;
            this.s9_1 = 12;
            continue $sm;
          case 8:
            this.t9_1 = 9;
            var tmp_5 = this.v9_1;
            if (tmp_5 instanceof Error) {
              var e = this.v9_1;
              var tmp_6 = this;
              this.tl2_1 = e;
              throw e;
            } else {
              throw this.v9_1;
            }

          case 9:
            this.t9_1 = 10;
            var t = this.v9_1;
            closeFinally(this.sl2_1, this.tl2_1);
            throw t;
          case 10:
            throw this.v9_1;
          case 11:
            this.t9_1 = 10;
            closeFinally(this.sl2_1, this.tl2_1);
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 12;
            continue $sm;
          case 12:
            return this.rl2_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 10) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function ConnectivityChecker_0(context) {
    return Companion_getInstance_1().ukx_1;
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
