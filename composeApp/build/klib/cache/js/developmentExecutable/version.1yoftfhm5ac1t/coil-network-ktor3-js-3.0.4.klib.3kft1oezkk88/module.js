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
  var Factory = kotlin_io_coil_kt_coil3_coil_network_core.$_$.b;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var protoOf = kotlin_kotlin.$_$.ki;
  var Uri = kotlin_io_coil_kt_coil3_coil_core.$_$.u;
  var getKClass = kotlin_kotlin.$_$.g;
  var FetcherServiceLoaderTarget = kotlin_io_coil_kt_coil3_coil_core.$_$.q;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var hashCode = kotlin_kotlin.$_$.bh;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.i;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var NetworkClient = kotlin_io_coil_kt_coil3_coil_network_core.$_$.a;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_network_core.$_$.e;
  var cancel = kotlin_io_ktor_ktor_io.$_$.l1;
  var toString = kotlin_kotlin.$_$.oi;
  var NetworkResponseBody = kotlin_io_coil_kt_coil3_coil_network_core.$_$.c;
  var bodyAsChannel = kotlin_io_ktor_ktor_client_core.$_$.a;
  var NetworkResponse = kotlin_io_coil_kt_coil3_coil_network_core.$_$.d;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.f;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.m1;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.h6;
  var arrayOf = kotlin_kotlin.$_$.cp;
  var createKType = kotlin_kotlin.$_$.d;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.j;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.a;
  var Buffer = kotlin_com_squareup_okio_okio.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var ServiceLoaderComponentRegistry_getInstance = kotlin_io_coil_kt_coil3_coil_core.$_$.i1;
  var defineProp = kotlin_kotlin.$_$.qg;
  var toLong = kotlin_kotlin.$_$.mi;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.g;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var readFully = kotlin_io_ktor_ktor_io.$_$.x;
  var buffer = kotlin_com_squareup_okio_okio.$_$.o;
  var addSuppressed = kotlin_kotlin.$_$.bp;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KtorNetworkFetcherServiceLoaderTarget, 'KtorNetworkFetcherServiceLoaderTarget', KtorNetworkFetcherServiceLoaderTarget, VOID, [FetcherServiceLoaderTarget]);
  initMetadataForLambda(KtorNetworkClient$executeRequest$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($executeRequestCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(KtorNetworkClient, 'KtorNetworkClient', VOID, VOID, [NetworkClient], [2]);
  initMetadataForClass(KtorNetworkResponseBody, 'KtorNetworkResponseBody', VOID, VOID, [NetworkResponseBody], [1, 2]);
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
  protoOf(KtorNetworkFetcherServiceLoaderTarget).factory_i22u46_k$ = function () {
    return KtorNetworkFetcherFactory();
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).type_24myi_k$ = function () {
    return getKClass(Uri);
  };
  protoOf(KtorNetworkFetcherServiceLoaderTarget).priority_j9vvj0_k$ = function () {
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
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
    var tmp0_other_with_cast = other instanceof KtorNetworkClient ? other.httpClient_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkClient$executeRequest$slambda($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KtorNetworkClient$executeRequest$slambda).invoke_nbrvzv_k$ = function (response, $completion) {
    var tmp = this.create_bkvwgl_k$(response, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nbrvzv_k$(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = toNetworkResponse(this.response_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$block_1(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  protoOf(KtorNetworkClient$executeRequest$slambda).create_bkvwgl_k$ = function (response, completion) {
    var i = new KtorNetworkClient$executeRequest$slambda(this.$block_1, completion);
    i.response_1 = response;
    return i;
  };
  protoOf(KtorNetworkClient$executeRequest$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_bkvwgl_k$(value instanceof HttpResponse ? value : THROW_CCE(), completion);
  };
  function KtorNetworkClient$executeRequest$slambda_0($block, resultContinuation) {
    var i = new KtorNetworkClient$executeRequest$slambda($block, resultContinuation);
    var l = function (response, $completion) {
      return i.invoke_nbrvzv_k$(response, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $executeRequestCOROUTINE$0(_this__u8e3s4, request, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.request_1 = request;
    this.block_1 = block;
  }
  protoOf($executeRequestCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.this0__1 = _get_httpClient__2ty1zc(this._this__u8e3s4__1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = toHttpRequestBuilder(this.request_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.builder1__1 = suspendResult;
            this.ARGUMENT2__1 = new HttpStatement(this.builder1__1, this.this0__1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.ARGUMENT2__1.execute_dr84pm_k$(KtorNetworkClient$executeRequest$slambda_0(this.block_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
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
  function KtorNetworkClient(httpClient) {
    this.httpClient_1 = httpClient;
  }
  protoOf(KtorNetworkClient).executeRequest_xedpr8_k$ = function (request, block, $completion) {
    return KtorNetworkClient__executeRequest_impl_ia3b2y(this.httpClient_1, request, block, $completion);
  };
  protoOf(KtorNetworkClient).toString = function () {
    return KtorNetworkClient__toString_impl_iu595g(this.httpClient_1);
  };
  protoOf(KtorNetworkClient).hashCode = function () {
    return KtorNetworkClient__hashCode_impl_2x0nnf(this.httpClient_1);
  };
  protoOf(KtorNetworkClient).equals = function (other) {
    return KtorNetworkClient__equals_impl_3j9gyn(this.httpClient_1, other);
  };
  function toNetworkResponse(_this__u8e3s4, $completion) {
    var tmp = new $toNetworkResponseCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toHttpRequestBuilder(_this__u8e3s4, $completion) {
    var tmp = new $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toNetworkHeaders(_this__u8e3s4) {
    var headers = Builder_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.entries_qbkxv4_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.get_value_j01efc_k$();
      headers.set_mcyucq_k$(key, values);
    }
    return headers.build_1k0s4u_k$();
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
    var tmp0_other_with_cast = other instanceof KtorNetworkResponseBody ? other.channel_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function KtorNetworkResponseBody(channel) {
    this.channel_1 = channel;
  }
  protoOf(KtorNetworkResponseBody).writeTo_duii9t_k$ = function (sink, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o(this.channel_1, sink, $completion);
  };
  protoOf(KtorNetworkResponseBody).writeTo_874liu_k$ = function (fileSystem, path, $completion) {
    return KtorNetworkResponseBody__writeTo_impl_y15g8o_0(this.channel_1, fileSystem, path, $completion);
  };
  protoOf(KtorNetworkResponseBody).close_yn9xrc_k$ = function () {
    return KtorNetworkResponseBody__close_impl_c8ie9y(this.channel_1);
  };
  protoOf(KtorNetworkResponseBody).toString = function () {
    return KtorNetworkResponseBody__toString_impl_rnug64(this.channel_1);
  };
  protoOf(KtorNetworkResponseBody).hashCode = function () {
    return KtorNetworkResponseBody__hashCode_impl_5wojd9(this.channel_1);
  };
  protoOf(KtorNetworkResponseBody).equals = function (other) {
    return KtorNetworkResponseBody__equals_impl_ns0k7r(this.channel_1, other);
  };
  function takeFrom_0(_this__u8e3s4, headers) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = headers.asMap_1jf4ju_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var values = _destruct__k2r9zo.get_value_j01efc_k$();
      _this__u8e3s4.appendAll_ytnfgb_k$(key, values);
    }
  }
  function readByteArray(_this__u8e3s4, $completion) {
    var tmp = new $readByteArrayCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $toNetworkResponseCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($toNetworkResponseCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.ARGUMENT0__1 = this._this__u8e3s4__1.get_status_jnf6d7_k$().get_value_j01efc_k$();
            this.ARGUMENT1__1 = this._this__u8e3s4__1.get_requestTime_wwxhg3_k$().get_timestamp_9fccx9_k$();
            this.ARGUMENT2__1 = this._this__u8e3s4__1.get_responseTime_scfvg7_k$().get_timestamp_9fccx9_k$();
            this.ARGUMENT3__1 = toNetworkHeaders(this._this__u8e3s4__1.get_headers_ef25jx_k$());
            this.set_state_rjd8d0_k$(1);
            suspendResult = bodyAsChannel(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = _KtorNetworkResponseBody___init__impl__ej6zys(ARGUMENT);
            return new NetworkResponse(this.ARGUMENT0__1, this.ARGUMENT1__1, this.ARGUMENT2__1, this.ARGUMENT3__1, new KtorNetworkResponseBody(ARGUMENT_0), this._this__u8e3s4__1);
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
  function $toHttpRequestBuilderCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($toHttpRequestBuilderCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.request0__1 = new HttpRequestBuilder();
            takeFrom(this.request0__1.get_url_18iuii_k$(), this._this__u8e3s4__1.get_url_18iuii_k$());
            this.request0__1.set_method_hoo95u_k$(Companion_getInstance().parse_pc1q8p_k$(this._this__u8e3s4__1.get_method_gl8esq_k$()));
            takeFrom_0(this.request0__1.get_headers_ef25jx_k$(), this._this__u8e3s4__1.get_headers_ef25jx_k$());
            this.tmp0_safe_receiver1__1 = this._this__u8e3s4__1.get_body_wojkyz_k$();
            if (this.tmp0_safe_receiver1__1 == null) {
              this.WHEN_RESULT2__1 = null;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = readByteArray(this.tmp0_safe_receiver1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var tmp1_safe_receiver = this.WHEN_RESULT2__1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var this_0 = this.request0__1;
              if (tmp1_safe_receiver == null) {
                this_0.set_body_slfhxt_k$(NullBody_getInstance());
                var tmp_0 = PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$();
                var tmp_1;
                try {
                  tmp_1 = createKType(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), arrayOf([]), false);
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
                this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_0, tmp_1));
              } else {
                if (tmp1_safe_receiver instanceof OutgoingContent) {
                  this_0.set_body_slfhxt_k$(tmp1_safe_receiver);
                  this_0.set_bodyType_8pgqkl_k$(null);
                } else {
                  this_0.set_body_slfhxt_k$(tmp1_safe_receiver);
                  var tmp_3 = PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$();
                  var tmp_4;
                  try {
                    tmp_4 = createKType(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), arrayOf([]), false);
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
                  this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_3, tmp_4));
                }
              }
            }

            return this.request0__1;
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
  function $readByteArrayCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readByteArrayCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.buffer0__1 = new Buffer();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.writeTo_duii9t_k$(this.buffer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.buffer0__1.readByteArray_52wnjv_k$();
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
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function initHook$init$() {
    ServiceLoaderComponentRegistry_getInstance().register_bkcr45_k$(new KtorNetworkFetcherServiceLoaderTarget());
    return Unit_getInstance();
  }
  function writeTo(_this__u8e3s4, sink, $completion) {
    var tmp = new $writeToCOROUTINE$4(_this__u8e3s4, sink, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function writeTo_0(_this__u8e3s4, fileSystem, path, $completion) {
    var tmp = new $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $writeToCOROUTINE$4(_this__u8e3s4, sink, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.sink_1 = sink;
  }
  protoOf($writeToCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.buffer0__1 = new Int8Array(8192);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = readRemaining(this._this__u8e3s4__1, toLong(this.buffer0__1.length), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var packet = suspendResult;
            if (packet.exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            var bytesRead = get_remaining(packet).toInt_1tsl84_k$();
            readFully(packet, this.buffer0__1, 0, bytesRead);
            this.sink_1.write_owzzlt_k$(this.buffer0__1, 0, bytesRead);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            var tmp0_safe_receiver = this._this__u8e3s4__1.get_closedCause_o1qcj8_k$();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return Unit_getInstance();
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
  function $writeToCOROUTINE$5(_this__u8e3s4, fileSystem, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fileSystem_1 = fileSystem;
    this.path_1 = path;
  }
  protoOf($writeToCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this.fileSystem_1;
            var tmp_1 = this;
            tmp_1.file1__1 = this.path_1;
            var tmp_2 = this;
            tmp_2.mustCreate2__1 = false;
            var tmp_3 = this;
            tmp_3.this3__1 = buffer(this.this0__1.sink_3ey1xj_k$(this.file1__1, this.mustCreate2__1));
            this.thrown4__1 = null;
            this.tmp$ret$05__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            var tmp_4 = this;
            tmp_4.it6__1 = this.this3__1;
            var tmp_5 = this;
            tmp_5.$this$write7__1 = this.it6__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = writeTo(this._this__u8e3s4__1, this.$this$write7__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_6 = this;
            tmp_6.tmp$ret$05__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_7 = this.get_exception_x0n6w6_k$();
            if (tmp_7 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              var tmp_8 = this;
              this.thrown4__1 = t;
              tmp_8.tmp$ret$05__1 = null;
              this.set_exceptionState_fex74n_k$(5);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var t_0 = this.get_exception_x0n6w6_k$();
            try {
              var tmp0_safe_receiver = this.this3__1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.close_yn9xrc_k$();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_1 = $p;
                if (this.thrown4__1 == null) {
                  this.thrown4__1 = t_1;
                } else {
                  addSuppressed(this.thrown4__1, t_1);
                }
              } else {
                throw $p;
              }
            }

            throw t_0;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            var tmp_9 = this.tmp$ret$05__1;
            this.set_exceptionState_fex74n_k$(5);
            try {
              var tmp0_safe_receiver_0 = this.this3__1;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                tmp0_safe_receiver_0.close_yn9xrc_k$();
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var t_2 = $p;
                if (this.thrown4__1 == null) {
                  this.thrown4__1 = t_2;
                } else {
                  addSuppressed(this.thrown4__1, t_2);
                }
              } else {
                throw $p;
              }
            }

            var result = tmp_9;
            if (!(this.thrown4__1 == null))
              throw this.thrown4__1;
            if (!(result == null ? true : !(result == null)))
              THROW_CCE();
            return Unit_getInstance();
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
