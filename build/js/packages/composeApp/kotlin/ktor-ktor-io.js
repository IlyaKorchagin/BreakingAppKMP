(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var toString = kotlin_kotlin.$_$.rk;
  var hashCode = kotlin_kotlin.$_$.zc;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var createFailure = kotlin_kotlin.$_$.xj;
  var Result = kotlin_kotlin.$_$.cj;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.i;
  var isInterface = kotlin_kotlin.$_$.qd;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var toLong = kotlin_kotlin.$_$.je;
  var intercepted = kotlin_kotlin.$_$.lb;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var returnIfSuspended = kotlin_kotlin.$_$.n;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var Long = kotlin_kotlin.$_$.wi;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var Continuation = kotlin_kotlin.$_$.sb;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.dd;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m2;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var toString_0 = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readTo = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var encodeToByteArray = kotlin_kotlin.$_$.lg;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var replace = kotlin_kotlin.$_$.fh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var charSequenceSubSequence = kotlin_kotlin.$_$.mc;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var trim = kotlin_kotlin.$_$.gi;
  var toByte = kotlin_kotlin.$_$.ie;
  var decodeToString = kotlin_kotlin.$_$.jg;
  var setOf = kotlin_kotlin.$_$.la;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.nf6().y9(Companion_getInstance().lf6_1);
  }
  function resume_0(throwable) {
    var tmp = this.nf6();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.Task.resume.<anonymous>' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.y9(tmp1_elvis_lhs == null ? Companion_getInstance().lf6_1 : tmp1_elvis_lhs.mn_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.rf8(min, $completion) : $super.rf8.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($readRemainingCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  function close() {
    this.n18();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool');
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.kf6_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.lf6_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    other instanceof Empty || THROW_CCE();
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.mf6_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.mf6_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.mf6_1 == null ? 0 : hashCode(this.mf6_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
    if (!equals(this.mf6_1, tmp0_other_with_cast.mf6_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.rf6_1 = continuation;
  }
  protoOf(Read).nf6 = function () {
    return this.rf6_1;
  };
  protoOf(Read).of6 = function () {
    return 'read';
  };
  function Write(continuation) {
    this.sf6_1 = continuation;
  }
  protoOf(Write).nf6 = function () {
    return this.sf6_1;
  };
  protoOf(Write).of6 = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.wf6_1;
    $this.uf6_1.qf4($this.yf6_1);
    $this.vf6_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.xf6_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.xf6_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.pf6();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().kf6_1;
    var continuation = $this.xf6_1.atomicfu$getAndSet(closeContinuation);
    if (!isInterface(continuation, Task))
      return Unit_instance;
    continuation.qf6(cause);
  }
  function $awaitContentCOROUTINE$0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jf7_1 = _this__u8e3s4;
    this.kf7_1 = min;
  }
  protoOf($awaitContentCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.jf7_1);
            if (numberToLong(this.jf7_1.vf6_1).a3(this.jf7_1.yf6_1.j()).b1(toLong(this.kf7_1)) >= 0)
              return true;
            var tmp_0 = this;
            tmp_0.lf7_1 = this.jf7_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(numberToLong(this.jf7_1.vf6_1).a3(this.jf7_1.yf6_1.j()).b1(toLong(this.kf7_1)) < 0 && this.jf7_1.af7_1.kotlinx$atomicfu$value == null)) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p19();
            l$ret$1: do {
              var this_0 = this.lf7_1;
              var slot = new Read(cancellable);
              var previous = this_0.xf6_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!this_0.xf6_1.atomicfu$compareAndSet(previous, slot)) {
                  slot.pf6();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.qf6(new ConcurrentIOException(slot.of6()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.pf6();
                } else {
                  if (previous instanceof Closed) {
                    slot.qf6(previous.mf6_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(numberToLong(this.jf7_1.vf6_1).a3(this.jf7_1.yf6_1.j()).b1(toLong(this.kf7_1)) < 0 && this.jf7_1.af7_1.kotlinx$atomicfu$value == null)) {
                var current = this_0.xf6_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Read) {
                  tmp_1 = this_0.xf6_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.pf6();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.t16(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            if (this.jf7_1.yf6_1.j().b1(new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.jf7_1);
            }

            return this.jf7_1.yf6_1.j().b1(toLong(this.kf7_1)) >= 0;
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
  function $flushCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uf7_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.uf7_1);
            this.uf7_1.wf7();
            if (this.uf7_1.vf6_1 < 1048576)
              return Unit_instance;
            var tmp_0 = this;
            tmp_0.vf7_1 = this.uf7_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.uf7_1.vf6_1 >= 1048576 && this.uf7_1.af7_1.kotlinx$atomicfu$value == null)) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p19();
            l$ret$1: do {
              var this_0 = this.vf7_1;
              var slot = new Write(cancellable);
              var previous = this_0.xf6_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!this_0.xf6_1.atomicfu$compareAndSet(previous, slot)) {
                  slot.pf6();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.qf6(new ConcurrentIOException(slot.of6()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.pf6();
                } else {
                  if (previous instanceof Closed) {
                    slot.qf6(previous.mf6_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.uf7_1.vf6_1 >= 1048576 && this.uf7_1.af7_1.kotlinx$atomicfu$value == null)) {
                var current = this_0.xf6_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Write) {
                  tmp_1 = this_0.xf6_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.pf6();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.t16(), this);
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
  function $flushAndCloseCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ff8_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.gf8_1 = this.ff8_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.if8_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.jf8_1 = this.gf8_1;
            this.n9_1 = 1;
            suspendResult = this.jf8_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hf8_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 4;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 4;
            var tmp_3 = this.q9_1;
            if (tmp_3 instanceof Error) {
              var e = this.q9_1;
              var tmp_4 = this;
              tmp_4.hf8_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 4;
            if (!this.ff8_1.af7_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.ff8_1, null);
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 4) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.tf6_1 = autoFlush;
    this.uf6_1 = new Buffer();
    this.vf6_1 = 0;
    this.wf6_1 = new Object();
    this.xf6_1 = atomic$ref$1(Empty_instance);
    this.yf6_1 = new Buffer();
    this.zf6_1 = new Buffer();
    this.af7_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).lf8 = function () {
    var tmp0_safe_receiver = this.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if (this.yf6_1.of3()) {
      moveFlushToReadBuffer(this);
    }
    return this.yf6_1;
  };
  protoOf(ByteChannel).nf8 = function () {
    var tmp0_safe_receiver = this.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if (this.of8()) {
      throw IOException_init_$Create$('Channel is closed for write');
    }
    return this.zf6_1;
  };
  protoOf(ByteChannel).mf8 = function () {
    var tmp0_safe_receiver = this.af7_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1();
  };
  protoOf(ByteChannel).of8 = function () {
    return !(this.af7_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).qf8 = function () {
    return !(this.mf8() == null) || (this.of8() && this.vf6_1 === 0 && this.yf6_1.of3());
  };
  protoOf(ByteChannel).rf8 = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ByteChannel).kf8 = function ($completion) {
    var tmp = new $flushCOROUTINE$1(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ByteChannel).wf7 = function () {
    if (this.zf6_1.of3())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.wf6_1;
    var count = this.zf6_1.j().g1();
    this.uf6_1.df5(this.zf6_1);
    this.vf6_1 = this.vf6_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.xf6_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.xf6_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.pf6();
    }
  };
  protoOf(ByteChannel).tf8 = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ByteChannel).q8e = function (cause) {
    if (!(this.af7_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.af7_1.atomicfu$compareAndSet(null, closedToken);
    var actualCause = closedToken.n1();
    closeSlot(this, actualCause);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName) {
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    this_0.vf4(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.uf8_1 = null;
    this.vf8_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).mf8 = function () {
    return this.uf8_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).qf8 = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).lf8 = function () {
    return this.vf8_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).rf8 = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).q8e = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.wf8_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.q8e(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function get_availableForRead(_this__u8e3s4) {
    return _this__u8e3s4.lf8().nf3().j().g1();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$4(_this__u8e3s4, packet, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$9(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function readRemaining_0(_this__u8e3s4, max, $completion) {
    var tmp = new $readRemainingCOROUTINE$11(_this__u8e3s4, max, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$13(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function $readRemainingCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ff9_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.gf9_1 = BytePacketBuilder();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.ff9_1.qf8()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.gf9_1.df5(this.ff9_1.lf8());
            this.n9_1 = 2;
            suspendResult = this.ff9_1.sf8(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.ff9_1);
            return this.gf9_1.nf3();
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
  function $readPacketCOROUTINE$4(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pf9_1 = _this__u8e3s4;
    this.qf9_1 = packet;
  }
  protoOf($readPacketCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.rf9_1 = new Buffer();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.rf9_1.j().b1(toLong(this.qf9_1)) < 0)) {
              this.n9_1 = 5;
              continue $sm;
            }

            if (this.pf9_1.lf8().of3()) {
              this.n9_1 = 2;
              suspendResult = this.pf9_1.sf8(VOID, this);
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
            if (this.pf9_1.qf8()) {
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.pf9_1.lf8()).b1(numberToLong(this.qf9_1).b3(this.rf9_1.j())) > 0) {
              this.pf9_1.lf8().pf4(this.rf9_1, numberToLong(this.qf9_1).b3(this.rf9_1.j()));
            } else {
              this.pf9_1.lf8().qf4(this.rf9_1);
            }

            this.n9_1 = 1;
            continue $sm;
          case 5:
            if (this.rf9_1.j().b1(toLong(this.qf9_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.qf9_1 + ' bytes but only ' + this.rf9_1.j().toString() + ' available');
            }

            return this.rf9_1;
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
  function $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.afa_1 = _this__u8e3s4;
    this.bfa_1 = buffer;
    this.cfa_1 = offset;
    this.dfa_1 = length;
  }
  protoOf($readAvailableCOROUTINE$7).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.afa_1.qf8())
              return -1;
            if (this.afa_1.lf8().of3()) {
              this.n9_1 = 1;
              suspendResult = this.afa_1.sf8(VOID, this);
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
            if (this.afa_1.qf8())
              return -1;
            return readAvailable_0(this.afa_1.lf8(), this.bfa_1, this.cfa_1, this.dfa_1);
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
  function $toByteArrayCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mfa_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$9).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = readBuffer(this.mfa_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vfa_1 = _this__u8e3s4;
    this.wfa_1 = channel;
    this.xfa_1 = limit;
  }
  protoOf($copyToCOROUTINE$10).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 12;
            this.yfa_1 = this.xfa_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 8;
            this.o9_1 = 7;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.vfa_1.qf8() && this.yfa_1.b1(new Long(0, 0)) > 0)) {
              this.n9_1 = 6;
              continue $sm;
            }

            if (this.vfa_1.lf8().of3()) {
              this.n9_1 = 3;
              suspendResult = this.vfa_1.sf8(VOID, this);
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
            var tmp_0 = this;
            var a = this.yfa_1;
            var b = get_remaining(this.vfa_1.lf8());
            tmp_0.afb_1 = a.b1(b) <= 0 ? a : b;
            this.vfa_1.lf8().pf4(this.wfa_1.nf8(), this.afb_1);
            this.yfa_1 = this.yfa_1.b3(this.afb_1);
            this.n9_1 = 5;
            suspendResult = this.wfa_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n9_1 = 2;
            continue $sm;
          case 6:
            this.zfa_1 = Unit_instance;
            this.o9_1 = 12;
            this.n9_1 = 10;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              this.bfb_1 = this.q9_1;
              var tmp_2 = this;
              this.vfa_1.q8e(this.bfb_1);
              close_0(this.wfa_1, this.bfb_1);
              throw this.bfb_1;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 12;
            this.cfb_1 = this.q9_1;
            this.n9_1 = 9;
            suspendResult = this.wfa_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.cfb_1;
          case 10:
            this.o9_1 = 12;
            this.n9_1 = 11;
            suspendResult = this.wfa_1.kf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return this.xfa_1.b3(this.yfa_1);
          case 12:
            throw this.q9_1;
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
  function $readRemainingCOROUTINE$11(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lfb_1 = _this__u8e3s4;
    this.mfb_1 = max;
  }
  protoOf($readRemainingCOROUTINE$11).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.nfb_1 = BytePacketBuilder();
            this.ofb_1 = this.mfb_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.lfb_1.qf8() && this.ofb_1.b1(new Long(0, 0)) > 0)) {
              this.n9_1 = 3;
              continue $sm;
            }

            if (this.ofb_1.b1(get_remaining(this.lfb_1.lf8())) >= 0) {
              this.ofb_1 = this.ofb_1.b3(get_remaining(this.lfb_1.lf8()));
              this.lfb_1.lf8().qf4(this.nfb_1);
            } else {
              this.lfb_1.lf8().pf4(this.nfb_1, this.ofb_1);
              this.ofb_1 = new Long(0, 0);
            }

            this.n9_1 = 2;
            suspendResult = this.lfb_1.sf8(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return this.nfb_1.nf3();
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
  function $readBufferCOROUTINE$13(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xfb_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$13).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.yfb_1 = new Buffer();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.xfb_1.qf8()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.yfb_1.df5(this.xfb_1.lf8());
            this.n9_1 = 2;
            suspendResult = this.xfb_1.sf8(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.xfb_1.mf8();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.yfb_1;
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
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$14(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $flushIfNeededCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hfc_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$14).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            rethrowCloseCauseIfNeeded_0(this.hfc_1);
            var tmp_0;
            var tmp_1 = this.hfc_1;
            var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tf6_1) === true) {
              tmp_0 = true;
            } else {
              tmp_0 = get_size(this.hfc_1.nf8()) >= 1048576;
            }

            if (tmp_0) {
              this.n9_1 = 1;
              suspendResult = this.hfc_1.kf8(this);
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.ifc_1 = channel;
    this.jfc_1 = job;
  }
  protoOf(WriterJob).w1a = function () {
    return this.jfc_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.kfc_1 = channel;
    this.lfc_1 = coroutineContext;
  }
  protoOf(WriterScope).b14 = function () {
    return this.lfc_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.nf8().vf4(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, copy, $completion) {
    _this__u8e3s4.nf8().df5(copy);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function get_isCompleted(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.w1a().x14();
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.q8e(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    var tmp = _this__u8e3s4.w1a();
    tmp.e15(invokeOnCompletion$lambda(block));
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.writer.<anonymous>' call
    this_0.e15(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function NO_CALLBACK$1() {
    this.mfc_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).t9 = function () {
    return this.mfc_1;
  };
  protoOf(NO_CALLBACK$1).u9 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).y9 = function (result) {
    return this.u9(result);
  };
  function ByteWriteChannel$flushAndClose$ref($boundThis) {
    this.nfc_1 = $boundThis;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).i23 = function ($completion) {
    return this.nfc_1.tf8($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).db = function ($completion) {
    return this.i23($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
    var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function invokeOnCompletion$lambda($block) {
    return function (it) {
      $block();
      return Unit_instance;
    };
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.wfc_1 = $block;
    this.xfc_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(writer$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 14;
            this.zfc_1 = Job(get_job(this.yfc_1.b14()));
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = this.wfc_1(new WriterScope(this.xfc_1, this.yfc_1.b14().hj(this.zfc_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zfc_1.s1b();
            var tmp_0 = this;
            var tmp_1;
            if (get_job(this.yfc_1.b14()).y14()) {
              this.xfc_1.q8e(get_job(this.yfc_1.b14()).b15());
              tmp_1 = Unit_instance;
            }

            tmp_0.afd_1 = tmp_1;
            this.o9_1 = 14;
            this.n9_1 = 9;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Error) {
              this.bfd_1 = this.q9_1;
              var tmp_3 = this;
              cancel(this.zfc_1, 'Exception thrown while writing to channel', this.bfd_1);
              this.xfc_1.q8e(this.bfd_1);
              tmp_3.afd_1 = Unit_instance;
              this.o9_1 = 14;
              this.n9_1 = 9;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 14;
            this.cfd_1 = this.q9_1;
            this.n9_1 = 5;
            suspendResult = this.zfc_1.i15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.dfd_1 = this.yfc_1;
            this.o9_1 = 7;
            var tmp_5 = this;
            tmp_5.ffd_1 = Companion_instance;
            var tmp_6 = this;
            tmp_6.gfd_1 = this.dfd_1;
            this.n9_1 = 6;
            suspendResult = this.xfc_1.tf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_7 = this;
            tmp_7.hfd_1 = Unit_instance;
            this.efd_1 = _Result___init__impl__xyqfz8(this.hfd_1);
            this.o9_1 = 14;
            this.n9_1 = 8;
            continue $sm;
          case 7:
            this.o9_1 = 14;
            var tmp_8 = this.q9_1;
            if (tmp_8 instanceof Error) {
              this.ifd_1 = this.q9_1;
              var tmp_9 = this;
              var exception = this.ifd_1;
              tmp_9.efd_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 8;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 14;
            throw this.cfd_1;
          case 9:
            this.o9_1 = 14;
            this.n9_1 = 10;
            suspendResult = this.zfc_1.i15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            var tmp_10 = this;
            tmp_10.jfd_1 = this.yfc_1;
            this.o9_1 = 12;
            var tmp_11 = this;
            tmp_11.lfd_1 = Companion_instance;
            var tmp_12 = this;
            tmp_12.mfd_1 = this.jfd_1;
            this.n9_1 = 11;
            suspendResult = this.xfc_1.tf8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.kfd_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 14;
            this.n9_1 = 13;
            continue $sm;
          case 12:
            this.o9_1 = 14;
            var tmp_13 = this.q9_1;
            if (tmp_13 instanceof Error) {
              var e = this.q9_1;
              var tmp_14 = this;
              tmp_14.kfd_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 13;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 13:
            this.o9_1 = 14;
            return Unit_instance;
          case 14:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 14) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).f1x = function ($this$launch, completion) {
    var i = new writer$slambda(this.wfc_1, this.xfc_1, completion);
    i.yfc_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.of8()) {
        $channel.q8e(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function CloseToken(origin) {
    var tmp = this;
    var tmp_0;
    if (origin == null) {
      tmp_0 = null;
    } else {
      if (origin instanceof CancellationException) {
        var tmp_1;
        if (isInterface(origin, CopyableThrowable)) {
          tmp_1 = origin.c1c();
        } else {
          var tmp0_elvis_lhs = origin.message;
          tmp_1 = CancellationException_init_$Create$(tmp0_elvis_lhs == null ? 'Channel was cancelled' : tmp0_elvis_lhs, origin);
        }
        tmp_0 = tmp_1;
      } else {
        var tmp_2;
        if (origin instanceof IOException) {
          tmp_2 = isInterface(origin, CopyableThrowable);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp_0 = origin.c1c();
        } else {
          var tmp1_elvis_lhs = origin.message;
          tmp_0 = IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was closed' : tmp1_elvis_lhs, origin);
        }
      }
    }
    tmp.pf8_1 = tmp_0;
  }
  protoOf(CloseToken).n1 = function () {
    var tmp;
    if (this.pf8_1 == null) {
      tmp = null;
    } else {
      var tmp_0 = this.pf8_1;
      if (tmp_0 instanceof IOException) {
        var tmp_1;
        var tmp_2 = this.pf8_1;
        if (isInterface(tmp_2, CopyableThrowable)) {
          tmp_1 = this.pf8_1.c1c();
        } else {
          tmp_1 = IOException_init_$Create$_0(this.pf8_1.message, this.pf8_1);
        }
        tmp = tmp_1;
      } else {
        var tmp_3 = this.pf8_1;
        if (!(tmp_3 == null) ? isInterface(tmp_3, CopyableThrowable) : false) {
          var tmp0_elvis_lhs = this.pf8_1.c1c();
          tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(this.pf8_1.message, this.pf8_1) : tmp0_elvis_lhs;
        } else {
          tmp = CancellationException_init_$Create$(this.pf8_1.message, this.pf8_1);
        }
      }
    }
    return tmp;
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function readText(_this__u8e3s4) {
    return readString(_this__u8e3s4);
  }
  function SourceByteReadChannel(source) {
    this.nfd_1 = source;
    this.ofd_1 = null;
  }
  protoOf(SourceByteReadChannel).mf8 = function () {
    var tmp0_safe_receiver = this.ofd_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1();
  };
  protoOf(SourceByteReadChannel).qf8 = function () {
    return this.nfd_1.of3();
  };
  protoOf(SourceByteReadChannel).lf8 = function () {
    var tmp0_safe_receiver = this.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    return this.nfd_1;
  };
  protoOf(SourceByteReadChannel).rf8 = function (min, $completion) {
    var tmp0_safe_receiver = this.mf8();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    return get_remaining(this.nfd_1).b1(toLong(min)) >= 0;
  };
  protoOf(SourceByteReadChannel).q8e = function (cause) {
    if (!(this.ofd_1 == null))
      return Unit_instance;
    this.nfd_1.l4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.ofd_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(max);
    var b = input.nf3().j();
    var capacity = (a.b1(b) <= 0 ? a : b).g1();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(rc >= 0)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.of3();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? _this__u8e3s4.j().g1() : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writePacket_0(_this__u8e3s4, packet) {
    _this__u8e3s4.df5(packet);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.nf3();
  }
  function get_size(_this__u8e3s4) {
    return _this__u8e3s4.nf3().j().g1();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.vf4(buffer, offset, offset + length | 0);
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.nf3().j();
  }
  function readFully(_this__u8e3s4, out, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? out.length - offset | 0 : length;
    _init_properties_ByteReadPacket_kt__28475y();
    readTo(_this__u8e3s4, out, offset, offset + length | 0);
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.of3() && block(_this__u8e3s4.nf3())) {
    }
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.lf4(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().pfd_1)) {
      if (max === 2147483647)
        return readString(_this__u8e3s4);
      // Inline function 'kotlin.math.min' call
      var a = _this__u8e3s4.nf3().j();
      var b = toLong(max);
      var count = a.b1(b) <= 0 ? a : b;
      return readString_0(_this__u8e3s4, count);
    }
    return decode(charset.sfd(), _this__u8e3s4, max);
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    if (charset.equals(Charsets_getInstance().pfd_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.tfd(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    if (charset === Charsets_getInstance().pfd_1) {
      return writeString(_this__u8e3s4, toString_0(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.tfd(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).xfd = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function Companion_1() {
  }
  protoOf(Companion_1).gfe = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().pfd_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call

        var it = replace(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_2;
        if (it === 'iso-8859-1') {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_2 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_1 = tmp_2;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().qfd_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function Charset(_name) {
    this.rfd_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.rfd_1 === other.rfd_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.rfd_1);
  };
  protoOf(Charset).toString = function () {
    return this.rfd_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.rfd_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.pfd_1 = new CharsetImpl('UTF-8');
    this.qfd_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.hfe_1 = _charset;
  }
  function CharsetEncoder(_charset) {
    this.ife_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).tfd = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).sfd = function () {
    return new CharsetDecoderImpl(this);
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.lfe_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.lfe_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.lfe_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.lfe_1.equals(tmp0_other_with_cast.lfe_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.nfe_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.nfe_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.nfe_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.nfe_1.equals(tmp0_other_with_cast.nfe_1))
      return false;
    return true;
  };
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    // Inline function 'kotlin.comparisons.minOf' call
    var a = input.nf3().j();
    var b = toLong(max);
    var count = a.b1(b) <= 0 ? a : b;
    var tmp = readByteArray(input, count.g1());
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.ofe(array);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp_0;
    dst.f(result);
    return result.length;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.hfe_1;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(fromIndex <= toIndex)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().qfd_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().pfd_1)) {
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$2 = toString_0(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.yf4(result);
    return result.length;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.ife_1;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_2.gfe(name);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.textDecoderOptions.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.pfe_1 = $this_toKtor;
  }
  protoOf(toKtor$1).ofe = function (buffer) {
    return this.pfe_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.qfe_1 = fatal;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_0(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ENCODING_ALIASES().p(requestedEncoding)) {
      // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.<anonymous>' call
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
  }
  protoOf(TextDecoderFallback).ofe = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.decode.<anonymous>' call
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!this.qfe_1) {
            // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.ef5(toByte(point >> 8));
        }
        builder.ef5(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.ef5(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.yfd_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.yfd_1;
    tmp.zfd_1 = fillArrayVal(Array(size), null);
    this.afe_1 = 0;
  }
  protoOf(DefaultPool).bfe = function (instance) {
  };
  protoOf(DefaultPool).cfe = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).dfe = function (instance) {
  };
  protoOf(DefaultPool).efe = function () {
    if (this.afe_1 === 0)
      return this.xfd();
    this.afe_1 = this.afe_1 - 1 | 0;
    var idx = this.afe_1;
    var tmp = this.zfd_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.zfd_1[idx] = null;
    return this.cfe(instance);
  };
  protoOf(DefaultPool).ffe = function (instance) {
    this.dfe(instance);
    if (this.afe_1 === this.yfd_1) {
      this.bfe(instance);
    } else {
      var _unary__edvuaz = this.afe_1;
      this.afe_1 = _unary__edvuaz + 1 | 0;
      this.zfd_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).n18 = function () {
    var inductionVariable = 0;
    var last = this.afe_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.zfd_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.zfd_1[i] = null;
        this.bfe(instance);
      }
       while (inductionVariable < last);
    this.afe_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).pf6 = resume;
  protoOf(Read).qf6 = resume_0;
  protoOf(Write).pf6 = resume;
  protoOf(Write).qf6 = resume_0;
  protoOf(ByteChannel).sf8 = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).sf8 = awaitContent$default;
  protoOf(SourceByteReadChannel).sf8 = awaitContent$default;
  protoOf(DefaultPool).l4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_2 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = readPacket;
  _.$_$.d = readRemaining;
  _.$_$.e = readRemaining_0;
  _.$_$.f = toByteArray;
  _.$_$.g = writeFully;
  _.$_$.h = writePacket;
  _.$_$.i = Charsets_getInstance;
  _.$_$.j = Companion_getInstance_0;
  _.$_$.k = MalformedInputException;
  _.$_$.l = decode;
  _.$_$.m = encode;
  _.$_$.n = forName;
  _.$_$.o = get_name;
  _.$_$.p = BytePacketBuilder;
  _.$_$.q = build;
  _.$_$.r = canRead;
  _.$_$.s = readFully;
  _.$_$.t = readText_0;
  _.$_$.u = get_remaining;
  _.$_$.v = takeWhile;
  _.$_$.w = toByteArray_0;
  _.$_$.x = writeFully_0;
  _.$_$.y = writePacket_0;
  _.$_$.z = writeText;
  _.$_$.a1 = get_ByteArrayPool;
  _.$_$.b1 = ByteReadChannel;
  _.$_$.c1 = ByteReadChannel_1;
  _.$_$.d1 = WriterScope;
  _.$_$.e1 = get_availableForRead;
  _.$_$.f1 = cancel_0;
  _.$_$.g1 = close_0;
  _.$_$.h1 = invokeOnCompletion;
  _.$_$.i1 = get_isCompleted;
  _.$_$.j1 = readText;
  _.$_$.k1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
