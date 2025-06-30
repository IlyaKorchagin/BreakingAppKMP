(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './coil-root-coil-network-core.js', './ktor-ktor-client-ktor-client-core.js', './kotlin-kotlin-stdlib.js', './coil-root-coil-core.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './okio-parent-okio.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./coil-root-coil-network-core.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./coil-root-coil-core.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./okio-parent-okio.js'));
  else {
    if (typeof globalThis['coil-root-coil-network-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'coil-root-coil-network-core' was not found. Please, check whether 'coil-root-coil-network-core' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['coil-root-coil-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'coil-root-coil-core' was not found. Please, check whether 'coil-root-coil-core' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    if (typeof globalThis['okio-parent-okio'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil-network-ktor3'. Its dependency 'okio-parent-okio' was not found. Please, check whether 'okio-parent-okio' is loaded prior to 'coil-root-coil-network-ktor3'.");
    }
    globalThis['coil-root-coil-network-ktor3'] = factory(typeof globalThis['coil-root-coil-network-ktor3'] === 'undefined' ? {} : globalThis['coil-root-coil-network-ktor3'], globalThis['coil-root-coil-network-core'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['coil-root-coil-core'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['okio-parent-okio']);
  }
}(function (_, kotlin_io_coil_kt_coil3_coil_network_core, kotlin_io_ktor_ktor_client_core, kotlin_kotlin, kotlin_io_coil_kt_coil3_coil_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_com_squareup_okio_okio) {
  'use strict';
  //region block: imports
  var Factory = kotlin_io_coil_kt_coil3_coil_network_core.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.e;
  var protoOf = kotlin_kotlin.$_$.ff;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.s;
  var getKClass = kotlin_kotlin.$_$.g;
  var FetcherServiceLoaderTarget = kotlin_io_coil_kt_coil3_coil_core.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.d;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_network_core.$_$.c;
  var cancel = kotlin_io_ktor_ktor_io.$_$.f1;
  var toString = kotlin_kotlin.$_$.jf;
  var AutoCloseable = kotlin_kotlin.$_$.vj;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var NetworkResponse = kotlin_io_coil_kt_coil3_coil_network_core.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.b;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d1;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var arrayOf = kotlin_kotlin.$_$.dl;
  var createKType = kotlin_kotlin.$_$.d;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.i;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var ServiceLoaderComponentRegistry_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.g1;
  var defineProp = kotlin_kotlin.$_$.md;
  var toLong = kotlin_kotlin.$_$.hf;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.e;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.u;
  var readFully = kotlin_io_ktor_ktor_io.$_$.s;
  var buffer = kotlin_com_squareup_okio_okio.$_$.g;
  var addSuppressed = kotlin_kotlin.$_$.cl;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KtorNetworkFetcherServiceLoaderTarget, 'KtorNetworkFetcherServiceLoaderTarget', KtorNetworkFetcherServiceLoaderTarget, VOID, [FetcherServiceLoaderTarget]);
  initMetadataForLambda(KtorNetworkClient$executeRequest$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeRequestCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(KtorNetworkClient, 'KtorNetworkClient', VOID, VOID, VOID, [2]);
  initMetadataForClass(KtorNetworkResponseBody, 'KtorNetworkResponseBody', VOID, VOID, [AutoCloseable], [1, 2]);
  initMetadataForCoroutine($toNetworkResponseCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($toHttpRequestBuilderCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($readByteArrayCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($writeToCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($writeToCOROUTINE$5, CoroutineImpl);
  //endregion
  function KtorNetworkFetcherFactory() {
    return new Factory(KtorNetworkFetcherFactory$lambda);
  }
  function asNetworkClient(_this__u8e3s4) {
    return new KtorNetworkClient(_KtorNetworkClient___init__impl__iiqcwc(_this__u8e3s4));
  }
  function KtorNetworkFetcherFactory$lambda() {
    return asNetworkClient(HttpClient());
  }
  function KtorNetworkFetcherServiceLoaderTarget() {
  }
  protoOf(KtorNetworkFetcherServiceLoaderTarget).bkk = function () {
    return KtorNetworkFetcherFactory();
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).ckk = function () {
    return getKClass(Uri);
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).ekk = function () {
    return 1;
  };
  function _KtorNetworkClient___init__impl__iiqcwc(httpClient) {
    return httpClient;
  }
  function _get_httpClient__2ty1zc($this) {
    return $this;
  }
  function KtorNetworkClient__executeRequest_impl_ia3b2y($this, request, block, $completion) {
    var tmp = new $executeRequestCOROUTINE$0($this, request, block, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function KtorNetworkClient__toString_impl_iu595g($this) {
    return 'KtorNetworkClient(httpClient=' + $this.toString() + ')';
  }
  function KtorNetworkClient__hashCode_impl_2x0nnf($this) {
    return hashCode($this);
  }
  function KtorNetworkClient__equals_impl_3j9gyn($this, other) {
    if (!(other instanceof KtorNetworkClient))
      return false;
    var tmp0_other_with_cast = other instanceof KtorNetworkClient ? other.ml3_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkClient$executeRequest$slambda($block, resultContinuation) {
    this.vl3_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KtorNetworkClient$executeRequest$slambda).yl3 = function (response, $completion) {
    var tmp = this.wje(response, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).ma = function (p1, $completion) {
    return this.yl3(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = toNetworkResponse(this.wl3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xl3_1 = suspendResult;
            this.s9_1 = 2;
            suspendResult = this.vl3_1(this.xl3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  protoOf(KtorNetworkClient$executeRequest$slambda).wje = function (response, completion) {
    var i = new KtorNetworkClient$executeRequest$slambda(this.vl3_1, completion);
    i.wl3_1 = response;
    return i;
  };
  function KtorNetworkClient$executeRequest$slambda_0($block, resultContinuation) {
    var i = new KtorNetworkClient$executeRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.yl3(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeRequestCOROUTINE$0(_this__u8e3s4, request, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gl3_1 = _this__u8e3s4;
    this.hl3_1 = request;
    this.il3_1 = block;
  }
  protoOf($executeRequestCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            var tmp_0 = this;
            tmp_0.jl3_1 = _get_httpClient__2ty1zc(this.gl3_1);
            this.s9_1 = 1;
            suspendResult = toHttpRequestBuilder(this.hl3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kl3_1 = suspendResult;
            this.ll3_1 = new HttpStatement(this.kl3_1, this.jl3_1);
            this.s9_1 = 2;
            suspendResult = this.ll3_1.ok1(KtorNetworkClient$executeRequest$slambda_0(this.il3_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  function KtorNetworkClient(httpClient) {
    this.ml3_1 = httpClient;
  }
  protoOf(KtorNetworkClient).dkz = function (request, block, $completion) {
    return KtorNetworkClient__executeRequest_impl_ia3b2y(this.ml3_1, request, block, $completion);
  };
  protoOf(KtorNetworkClient).toString = function () {
    return KtorNetworkClient__toString_impl_iu595g(this.ml3_1);
  };
  protoOf(KtorNetworkClient).hashCode = function () {
    return KtorNetworkClient__hashCode_impl_2x0nnf(this.ml3_1);
  };
  protoOf(KtorNetworkClient).equals = function (other) {
    return KtorNetworkClient__equals_impl_3j9gyn(this.ml3_1, other);
  };
  function toNetworkResponse(_this__u8e3s4, $completion) {
    var tmp = new $toNetworkResponseCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function toHttpRequestBuilder(_this__u8e3s4, $completion) {
    var tmp = new $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function toNetworkHeaders(_this__u8e3s4) {
    var headers = Builder_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.lim().m();
    while (_iterator__ex2g4s.n()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.o();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.c1();
      headers.gl2(key, values);
    }
    return headers.a2u();
  }
  function _KtorNetworkResponseBody___init__impl__ej6zys(channel) {
    return channel;
  }
  function _get_channel__c6e3yq($this) {
    return $this;
  }
  function KtorNetworkResponseBody__writeTo_impl_y15g8o($this, sink, $completion) {
    return writeTo(_get_channel__c6e3yq($this), sink, $completion);
  }
  function KtorNetworkResponseBody__writeTo_impl_y15g8o_0($this, fileSystem, path, $completion) {
    return writeTo_0(_get_channel__c6e3yq($this), fileSystem, path, $completion);
  }
  function KtorNetworkResponseBody__close_impl_c8ie9y($this) {
    cancel(_get_channel__c6e3yq($this));
  }
  function KtorNetworkResponseBody__toString_impl_rnug64($this) {
    return 'KtorNetworkResponseBody(channel=' + toString($this) + ')';
  }
  function KtorNetworkResponseBody__hashCode_impl_5wojd9($this) {
    return hashCode($this);
  }
  function KtorNetworkResponseBody__equals_impl_ns0k7r($this, other) {
    if (!(other instanceof KtorNetworkResponseBody))
      return false;
    var tmp0_other_with_cast = other instanceof KtorNetworkResponseBody ? other.yl4_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkResponseBody(channel) {
    this.yl4_1 = channel;
  }
  protoOf(KtorNetworkResponseBody).fl2 = function (sink, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o(this.yl4_1, sink, $completion);
  };
  protoOf(KtorNetworkResponseBody).dl2 = function (fileSystem, path, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o_0(this.yl4_1, fileSystem, path, $completion);
  };
  protoOf(KtorNetworkResponseBody).q4 = function () {
    return KtorNetworkResponseBody__close_impl_c8ie9y(this.yl4_1);
  };
  protoOf(KtorNetworkResponseBody).toString = function () {
    return KtorNetworkResponseBody__toString_impl_rnug64(this.yl4_1);
  };
  protoOf(KtorNetworkResponseBody).hashCode = function () {
    return KtorNetworkResponseBody__hashCode_impl_5wojd9(this.yl4_1);
  };
  protoOf(KtorNetworkResponseBody).equals = function (other) {
    return KtorNetworkResponseBody__equals_impl_ns0k7r(this.yl4_1, other);
  };
  function takeFrom_0(_this__u8e3s4, headers) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = headers.mkx().a1().m();
    while (_iterator__ex2g4s.n()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.o();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.b1();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.c1();
      _this__u8e3s4.qim(key, values);
    }
  }
  function readByteArray(_this__u8e3s4, $completion) {
    var tmp = new $readByteArrayCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $toNetworkResponseCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hl4_1 = _this__u8e3s4;
  }
  protoOf($toNetworkResponseCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.il4_1 = this.hl4_1.yaq().eiz_1;
            this.jl4_1 = this.hl4_1.dj9().min_1;
            this.kl4_1 = this.hl4_1.ej9().min_1;
            this.ll4_1 = toNetworkHeaders(this.hl4_1.jiw());
            this.s9_1 = 1;
            suspendResult = bodyAsChannel(this.hl4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = _KtorNetworkResponseBody___init__impl__ej6zys(ARGUMENT);
            return new NetworkResponse(this.il4_1, this.jl4_1, this.kl4_1, this.ll4_1, new KtorNetworkResponseBody(ARGUMENT_0), this.hl4_1);
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
  function $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ul4_1 = _this__u8e3s4;
  }
  protoOf($toHttpRequestBuilderCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.vl4_1 = new HttpRequestBuilder();
            takeFrom(this.vl4_1.lj5_1, this.ul4_1.xkx_1);
            this.vl4_1.mj5_1 = Companion_getInstance().co(this.ul4_1.ykx_1);
            takeFrom_0(this.vl4_1.nj5_1, this.ul4_1.zkx_1);
            this.wl4_1 = this.ul4_1.aky_1;
            if (this.wl4_1 == null) {
              this.xl4_1 = null;
              this.s9_1 = 2;
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = readByteArray(this.wl4_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.xl4_1 = suspendResult;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            var tmp1_safe_receiver = this.xl4_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var this_0 = this.vl4_1;
              if (tmp1_safe_receiver == null) {
                this_0.oj5_1 = NullBody_instance;
                var tmp_0 = PrimitiveClasses_getInstance().zc();
                var tmp_1;
                try {
                  tmp_1 = createKType(PrimitiveClasses_getInstance().zc(), arrayOf([]), false);
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
                this_0.jjb(new TypeInfo(tmp_0, tmp_1));
              } else {
                if (tmp1_safe_receiver instanceof OutgoingContent) {
                  this_0.oj5_1 = tmp1_safe_receiver;
                  this_0.jjb(null);
                } else {
                  this_0.oj5_1 = tmp1_safe_receiver;
                  var tmp_3 = PrimitiveClasses_getInstance().zc();
                  var tmp_4;
                  try {
                    tmp_4 = createKType(PrimitiveClasses_getInstance().zc(), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_5;
                    if ($p instanceof Error) {
                      var _unused_var__etf5q3_0 = $p;
                      tmp_5 = null;
                    } else {
                      throw $p;
                    }
                    tmp_4 = tmp_5;
                  }
                  this_0.jjb(new TypeInfo(tmp_3, tmp_4));
                }
              }
            }

            return this.vl4_1;
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
  function $readByteArrayCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hl5_1 = _this__u8e3s4;
  }
  protoOf($readByteArrayCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.il5_1 = new Buffer();
            this.s9_1 = 1;
            suspendResult = this.hl5_1.fl2(this.il5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.il5_1.dka();
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
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function initHook$init$() {
    ServiceLoaderComponentRegistry_getInstance().skw(new KtorNetworkFetcherServiceLoaderTarget());
    return Unit_instance;
  }
  function writeTo(_this__u8e3s4, sink, $completion) {
    var tmp = new $writeToCOROUTINE$4(_this__u8e3s4, sink, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function writeTo_0(_this__u8e3s4, fileSystem, path, $completion) {
    var tmp = new $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $writeToCOROUTINE$4(_this__u8e3s4, sink, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rl5_1 = _this__u8e3s4;
    this.sl5_1 = sink;
  }
  protoOf($writeToCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.tl5_1 = new Int8Array(8192);
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.rl5_1.rie()) {
              this.s9_1 = 4;
              continue $sm;
            }

            this.s9_1 = 2;
            suspendResult = readRemaining(this.rl5_1, toLong(this.tl5_1.length), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var packet = suspendResult;
            if (packet.pi9()) {
              this.s9_1 = 4;
              continue $sm;
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            var bytesRead = get_remaining(packet).m1();
            readFully(packet, this.tl5_1, 0, bytesRead);
            this.sl5_1.wk7(this.tl5_1, 0, bytesRead);
            this.s9_1 = 1;
            continue $sm;
          case 4:
            var tmp0_safe_receiver = this.rl5_1.nie();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return Unit_instance;
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
  function $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cl6_1 = _this__u8e3s4;
    this.dl6_1 = fileSystem;
    this.el6_1 = path;
  }
  protoOf($writeToCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.fl6_1 = this.dl6_1;
            var tmp_1 = this;
            tmp_1.gl6_1 = this.el6_1;
            var tmp_2 = this;
            tmp_2.hl6_1 = false;
            var tmp_3 = this;
            tmp_3.il6_1 = buffer(this.fl6_1.tk8(this.gl6_1, this.hl6_1));
            this.jl6_1 = null;
            this.kl6_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.t9_1 = 3;
            var tmp_4 = this;
            tmp_4.ll6_1 = this.il6_1;
            var tmp_5 = this;
            tmp_5.ml6_1 = this.ll6_1;
            this.s9_1 = 2;
            suspendResult = writeTo(this.cl6_1, this.ml6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_6 = this;
            tmp_6.kl6_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 6;
            continue $sm;
          case 3:
            this.t9_1 = 4;
            var tmp_7 = this.v9_1;
            if (tmp_7 instanceof Error) {
              var t = this.v9_1;
              var tmp_8 = this;
              this.jl6_1 = t;
              tmp_8.kl6_1 = null;
              this.t9_1 = 5;
              this.s9_1 = 6;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 4:
            this.t9_1 = 5;
            var t_0 = this.v9_1;
            try {
              var tmp0_safe_receiver = this.il6_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.q4();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_1 = $p;
                if (this.jl6_1 == null) {
                  this.jl6_1 = t_1;
                } else {
                  addSuppressed(this.jl6_1, t_1);
                }
              } else {
                throw $p;
              }
            }

            throw t_0;
          case 5:
            throw this.v9_1;
          case 6:
            var tmp_9 = this.kl6_1;
            this.t9_1 = 5;
            try {
              var tmp0_safe_receiver_0 = this.il6_1;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                tmp0_safe_receiver_0.q4();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_2 = $p;
                if (this.jl6_1 == null) {
                  this.jl6_1 = t_2;
                } else {
                  addSuppressed(this.jl6_1, t_2);
                }
              } else {
                throw $p;
              }
            }

            var result = tmp_9;
            if (!(this.jl6_1 == null))
              throw this.jl6_1;
            if (!(result == null ? true : !(result == null)))
              THROW_CCE();
            return Unit_instance;
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
  //region block: init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $coil3 = _.coil3 || (_.coil3 = {});
    var $coil3$network = $coil3.network || ($coil3.network = {});
    var $coil3$network$ktor3 = $coil3$network.ktor3 || ($coil3$network.ktor3 = {});
    var $coil3$network$ktor3$internal = $coil3$network$ktor3.internal || ($coil3$network$ktor3.internal = {});
    defineProp($coil3$network$ktor3$internal, 'initHook', get_initHook);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil-network-ktor3.js.map
