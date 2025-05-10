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
  var protoOf = kotlin_kotlin.$_$.he;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.r;
  var getKClass = kotlin_kotlin.$_$.f;
  var FetcherServiceLoaderTarget = kotlin_io_coil_kt_coil3_coil_core.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var hashCode = kotlin_kotlin.$_$.zc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.d;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_network_core.$_$.c;
  var cancel = kotlin_io_ktor_ktor_io.$_$.f1;
  var toString = kotlin_kotlin.$_$.le;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var NetworkResponse = kotlin_io_coil_kt_coil3_coil_network_core.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.b;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.d1;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var arrayOf = kotlin_kotlin.$_$.sj;
  var createKType = kotlin_kotlin.$_$.c;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.i;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.p;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.b;
  var ServiceLoaderComponentRegistry_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.f1;
  var defineProp = kotlin_kotlin.$_$.oc;
  var toLong = kotlin_kotlin.$_$.je;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.e;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.u;
  var readFully = kotlin_io_ktor_ktor_io.$_$.s;
  var buffer = kotlin_com_squareup_okio_okio.$_$.g;
  var addSuppressed = kotlin_kotlin.$_$.rj;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KtorNetworkFetcherServiceLoaderTarget, 'KtorNetworkFetcherServiceLoaderTarget', KtorNetworkFetcherServiceLoaderTarget, VOID, [FetcherServiceLoaderTarget]);
  initMetadataForLambda(KtorNetworkClient$executeRequest$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeRequestCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(KtorNetworkClient, 'KtorNetworkClient', VOID, VOID, VOID, [2]);
  initMetadataForClass(KtorNetworkResponseBody, 'KtorNetworkResponseBody', VOID, VOID, VOID, [1, 2]);
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
  protoOf(KtorNetworkFetcherServiceLoaderTarget).bhe = function () {
    return KtorNetworkFetcherFactory();
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).che = function () {
    return getKClass(Uri);
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).ehe = function () {
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
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
    var tmp0_other_with_cast = other instanceof KtorNetworkClient ? other.mhx_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkClient$executeRequest$slambda($block, resultContinuation) {
    this.vhx_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KtorNetworkClient$executeRequest$slambda).yhx = function (response, $completion) {
    var tmp = this.wg8(response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).ha = function (p1, $completion) {
    return this.yhx(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = toNetworkResponse(this.whx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xhx_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.vhx_1(this.xhx_1, this);
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
  protoOf(KtorNetworkClient$executeRequest$slambda).wg8 = function (response, completion) {
    var i = new KtorNetworkClient$executeRequest$slambda(this.vhx_1, completion);
    i.whx_1 = response;
    return i;
  };
  function KtorNetworkClient$executeRequest$slambda_0($block, resultContinuation) {
    var i = new KtorNetworkClient$executeRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.yhx(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeRequestCOROUTINE$0(_this__u8e3s4, request, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ghx_1 = _this__u8e3s4;
    this.hhx_1 = request;
    this.ihx_1 = block;
  }
  protoOf($executeRequestCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.jhx_1 = _get_httpClient__2ty1zc(this.ghx_1);
            this.n9_1 = 1;
            suspendResult = toHttpRequestBuilder(this.hhx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.khx_1 = suspendResult;
            this.lhx_1 = new HttpStatement(this.khx_1, this.jhx_1);
            this.n9_1 = 2;
            suspendResult = this.lhx_1.ogv(KtorNetworkClient$executeRequest$slambda_0(this.ihx_1, null), this);
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
  function KtorNetworkClient(httpClient) {
    this.mhx_1 = httpClient;
  }
  protoOf(KtorNetworkClient).dht = function (request, block, $completion) {
    return KtorNetworkClient__executeRequest_impl_ia3b2y(this.mhx_1, request, block, $completion);
  };
  protoOf(KtorNetworkClient).toString = function () {
    return KtorNetworkClient__toString_impl_iu595g(this.mhx_1);
  };
  protoOf(KtorNetworkClient).hashCode = function () {
    return KtorNetworkClient__hashCode_impl_2x0nnf(this.mhx_1);
  };
  protoOf(KtorNetworkClient).equals = function (other) {
    return KtorNetworkClient__equals_impl_3j9gyn(this.mhx_1, other);
  };
  function toNetworkResponse(_this__u8e3s4, $completion) {
    var tmp = new $toNetworkResponseCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function toHttpRequestBuilder(_this__u8e3s4, $completion) {
    var tmp = new $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function toNetworkHeaders(_this__u8e3s4) {
    var headers = Builder_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.kfg().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.w();
      headers.ghw(key, values);
    }
    return headers.c2o();
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
    var tmp0_other_with_cast = other instanceof KtorNetworkResponseBody ? other.yhy_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkResponseBody(channel) {
    this.yhy_1 = channel;
  }
  protoOf(KtorNetworkResponseBody).fhw = function (sink, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o(this.yhy_1, sink, $completion);
  };
  protoOf(KtorNetworkResponseBody).dhw = function (fileSystem, path, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o_0(this.yhy_1, fileSystem, path, $completion);
  };
  protoOf(KtorNetworkResponseBody).l4 = function () {
    return KtorNetworkResponseBody__close_impl_c8ie9y(this.yhy_1);
  };
  protoOf(KtorNetworkResponseBody).toString = function () {
    return KtorNetworkResponseBody__toString_impl_rnug64(this.yhy_1);
  };
  protoOf(KtorNetworkResponseBody).hashCode = function () {
    return KtorNetworkResponseBody__hashCode_impl_5wojd9(this.yhy_1);
  };
  protoOf(KtorNetworkResponseBody).equals = function (other) {
    return KtorNetworkResponseBody__equals_impl_ns0k7r(this.yhy_1, other);
  };
  function takeFrom_0(_this__u8e3s4, headers) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = headers.mhr().u().g();
    while (_iterator__ex2g4s.h()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.v();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.w();
      _this__u8e3s4.pfg(key, values);
    }
  }
  function readByteArray(_this__u8e3s4, $completion) {
    var tmp = new $readByteArrayCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $toNetworkResponseCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hhy_1 = _this__u8e3s4;
  }
  protoOf($toNetworkResponseCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ihy_1 = this.hhy_1.xg1().dft_1;
            this.jhy_1 = this.hhy_1.dg3().lfh_1;
            this.khy_1 = this.hhy_1.eg3().lfh_1;
            this.lhy_1 = toNetworkHeaders(this.hhy_1.ifq());
            this.n9_1 = 1;
            suspendResult = bodyAsChannel(this.hhy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = _KtorNetworkResponseBody___init__impl__ej6zys(ARGUMENT);
            return new NetworkResponse(this.ihy_1, this.jhy_1, this.khy_1, this.lhy_1, new KtorNetworkResponseBody(ARGUMENT_0), this.hhy_1);
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
  function $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uhy_1 = _this__u8e3s4;
  }
  protoOf($toHttpRequestBuilderCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.vhy_1 = new HttpRequestBuilder();
            takeFrom(this.vhy_1.kfz_1, this.uhy_1.xhr_1);
            this.vhy_1.lfz_1 = Companion_getInstance().yn(this.uhy_1.yhr_1);
            takeFrom_0(this.vhy_1.mfz_1, this.uhy_1.zhr_1);
            this.why_1 = this.uhy_1.ahs_1;
            if (this.why_1 == null) {
              this.xhy_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = readByteArray(this.why_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.xhy_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var tmp1_safe_receiver = this.xhy_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var this_0 = this.vhy_1;
              if (tmp1_safe_receiver == null) {
                this_0.nfz_1 = NullBody_instance;
                var tmp_0 = PrimitiveClasses_getInstance().uc();
                var tmp_1;
                try {
                  tmp_1 = createKType(PrimitiveClasses_getInstance().uc(), arrayOf([]), false);
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
                this_0.jg5(new TypeInfo(tmp_0, tmp_1));
              } else {
                if (tmp1_safe_receiver instanceof OutgoingContent) {
                  this_0.nfz_1 = tmp1_safe_receiver;
                  this_0.jg5(null);
                } else {
                  this_0.nfz_1 = tmp1_safe_receiver;
                  var tmp_3 = PrimitiveClasses_getInstance().uc();
                  var tmp_4;
                  try {
                    tmp_4 = createKType(PrimitiveClasses_getInstance().uc(), arrayOf([]), false);
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
                  this_0.jg5(new TypeInfo(tmp_3, tmp_4));
                }
              }
            }

            return this.vhy_1;
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
  function $readByteArrayCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hhz_1 = _this__u8e3s4;
  }
  protoOf($readByteArrayCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.ihz_1 = new Buffer();
            this.n9_1 = 1;
            suspendResult = this.hhz_1.fhw(this.ihz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.ihz_1.dh4();
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
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function initHook$init$() {
    ServiceLoaderComponentRegistry_getInstance().shq(new KtorNetworkFetcherServiceLoaderTarget());
    return Unit_instance;
  }
  function writeTo(_this__u8e3s4, sink, $completion) {
    var tmp = new $writeToCOROUTINE$4(_this__u8e3s4, sink, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function writeTo_0(_this__u8e3s4, fileSystem, path, $completion) {
    var tmp = new $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $writeToCOROUTINE$4(_this__u8e3s4, sink, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rhz_1 = _this__u8e3s4;
    this.shz_1 = sink;
  }
  protoOf($writeToCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.thz_1 = new Int8Array(8192);
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.rhz_1.qf8()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.n9_1 = 2;
            suspendResult = readRemaining(this.rhz_1, toLong(this.thz_1.length), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var packet = suspendResult;
            if (packet.of3()) {
              this.n9_1 = 4;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            var bytesRead = get_remaining(packet).g1();
            readFully(packet, this.thz_1, 0, bytesRead);
            this.shz_1.wh1(this.thz_1, 0, bytesRead);
            this.n9_1 = 1;
            continue $sm;
          case 4:
            var tmp0_safe_receiver = this.rhz_1.mf8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

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
  function $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ci0_1 = _this__u8e3s4;
    this.di0_1 = fileSystem;
    this.ei0_1 = path;
  }
  protoOf($writeToCOROUTINE$5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.fi0_1 = this.di0_1;
            var tmp_1 = this;
            tmp_1.gi0_1 = this.ei0_1;
            var tmp_2 = this;
            tmp_2.hi0_1 = false;
            var tmp_3 = this;
            tmp_3.ii0_1 = buffer(this.fi0_1.th2(this.gi0_1, this.hi0_1));
            this.ji0_1 = null;
            this.ki0_1 = Unit_instance;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            var tmp_4 = this;
            tmp_4.li0_1 = this.ii0_1;
            var tmp_5 = this;
            tmp_5.mi0_1 = this.li0_1;
            this.n9_1 = 2;
            suspendResult = writeTo(this.ci0_1, this.mi0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_6 = this;
            tmp_6.ki0_1 = Unit_instance;
            this.o9_1 = 5;
            this.n9_1 = 6;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Error) {
              var t = this.q9_1;
              var tmp_8 = this;
              this.ji0_1 = t;
              tmp_8.ki0_1 = null;
              this.o9_1 = 5;
              this.n9_1 = 6;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 5;
            var t_0 = this.q9_1;
            try {
              var tmp0_safe_receiver = this.ii0_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.l4();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_1 = $p;
                if (this.ji0_1 == null) {
                  this.ji0_1 = t_1;
                } else {
                  addSuppressed(this.ji0_1, t_1);
                }
              } else {
                throw $p;
              }
            }

            throw t_0;
          case 5:
            throw this.q9_1;
          case 6:
            var tmp_9 = this.ki0_1;
            this.o9_1 = 5;
            try {
              var tmp0_safe_receiver_0 = this.ii0_1;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                tmp0_safe_receiver_0.l4();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_2 = $p;
                if (this.ji0_1 == null) {
                  this.ji0_1 = t_2;
                } else {
                  addSuppressed(this.ji0_1, t_2);
                }
              } else {
                throw $p;
              }
            }

            var result = tmp_9;
            if (!(this.ji0_1 == null))
              throw this.ji0_1;
            if (!(result == null ? true : !(result == null)))
              THROW_CCE();
            return Unit_instance;
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
