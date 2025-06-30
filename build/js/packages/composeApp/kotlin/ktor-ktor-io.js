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
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var toString = kotlin_kotlin.$_$.cm;
  var hashCode = kotlin_kotlin.$_$.xd;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var createFailure = kotlin_kotlin.$_$.il;
  var Result = kotlin_kotlin.$_$.nk;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.j;
  var isInterface = kotlin_kotlin.$_$.oe;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var toLong = kotlin_kotlin.$_$.hf;
  var intercepted = kotlin_kotlin.$_$.jc;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var returnIfSuspended = kotlin_kotlin.$_$.o;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var Long = kotlin_kotlin.$_$.hk;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var captureStack = kotlin_kotlin.$_$.fd;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w1;
  var Continuation = kotlin_kotlin.$_$.qc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.be;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x2;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u2;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var CancellationException = kotlin_kotlin.$_$.fc;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var toString_0 = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readTo = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var encodeToByteArray = kotlin_kotlin.$_$.lh;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var AutoCloseable = kotlin_kotlin.$_$.vj;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var replace = kotlin_kotlin.$_$.ii;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var charSequenceSubSequence = kotlin_kotlin.$_$.kd;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var toByte = kotlin_kotlin.$_$.gf;
  var decodeToString = kotlin_kotlin.$_$.jh;
  var setOf = kotlin_kotlin.$_$.cb;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.oic().da(Companion_getInstance().mic_1);
  }
  function resume_0(throwable) {
    var tmp = this.oic();
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
    return tmp.da(tmp1_elvis_lhs == null ? Companion_getInstance().mic_1 : tmp1_elvis_lhs.pn_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.sie(min, $completion) : $super.sie.call(this, min, $completion);
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
    this.v18();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
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
    this.lic_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.mic_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.nic_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.nic_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.nic_1 == null ? 0 : hashCode(this.nic_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
    if (!equals(this.nic_1, tmp0_other_with_cast.nic_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.sic_1 = continuation;
  }
  protoOf(Read).oic = function () {
    return this.sic_1;
  };
  protoOf(Read).pic = function () {
    return 'read';
  };
  function Write(continuation) {
    this.tic_1 = continuation;
  }
  protoOf(Write).oic = function () {
    return this.tic_1;
  };
  protoOf(Write).pic = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.xic_1;
    $this.vic_1.ria($this.zic_1);
    $this.wic_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.yic_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.yic_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.qic();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().lic_1;
    var continuation = $this.yic_1.atomicfu$getAndSet(closeContinuation);
    if (!isInterface(continuation, Task))
      return Unit_instance;
    continuation.ric(cause);
  }
  function $awaitContentCOROUTINE$0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kid_1 = _this__u8e3s4;
    this.lid_1 = min;
  }
  protoOf($awaitContentCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.kid_1);
            if (numberToLong(this.kid_1.wic_1).f3(this.kid_1.zic_1.p()).h1(toLong(this.lid_1)) >= 0)
              return true;
            var tmp_0 = this;
            tmp_0.mid_1 = this.kid_1;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!(numberToLong(this.kid_1.wic_1).f3(this.kid_1.zic_1.p()).h1(toLong(this.lid_1)) < 0 && this.kid_1.bid_1.kotlinx$atomicfu$value == null)) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.s9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.x19();
            l$ret$1: do {
              var this_0 = this.mid_1;
              var slot = new Read(cancellable);
              var previous = this_0.yic_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!this_0.yic_1.atomicfu$compareAndSet(previous, slot)) {
                  slot.qic();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.ric(new ConcurrentIOException(slot.pic()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.qic();
                } else {
                  if (previous instanceof Closed) {
                    slot.ric(previous.nic_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(numberToLong(this.kid_1.wic_1).f3(this.kid_1.zic_1.p()).h1(toLong(this.lid_1)) < 0 && this.kid_1.bid_1.kotlinx$atomicfu$value == null)) {
                var current = this_0.yic_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Read) {
                  tmp_1 = this_0.yic_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.qic();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.a17(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
            continue $sm;
          case 3:
            if (this.kid_1.zic_1.p().h1(new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.kid_1);
            }

            return this.kid_1.zic_1.p().h1(toLong(this.lid_1)) >= 0;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $flushCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vid_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.vid_1);
            this.vid_1.xid();
            if (this.vid_1.wic_1 < 1048576)
              return Unit_instance;
            var tmp_0 = this;
            tmp_0.wid_1 = this.vid_1;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.vid_1.wic_1 >= 1048576 && this.vid_1.bid_1.kotlinx$atomicfu$value == null)) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.s9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.x19();
            l$ret$1: do {
              var this_0 = this.wid_1;
              var slot = new Write(cancellable);
              var previous = this_0.yic_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!this_0.yic_1.atomicfu$compareAndSet(previous, slot)) {
                  slot.qic();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.ric(new ConcurrentIOException(slot.pic()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.qic();
                } else {
                  if (previous instanceof Closed) {
                    slot.ric(previous.nic_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.vid_1.wic_1 >= 1048576 && this.vid_1.bid_1.kotlinx$atomicfu$value == null)) {
                var current = this_0.yic_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Write) {
                  tmp_1 = this_0.yic_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.qic();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.a17(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $flushAndCloseCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gie_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            tmp_0.hie_1 = this.gie_1;
            this.t9_1 = 2;
            var tmp_1 = this;
            tmp_1.jie_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.kie_1 = this.hie_1;
            this.s9_1 = 1;
            suspendResult = this.kie_1.lie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.iie_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.t9_1 = 4;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.t9_1 = 4;
            var tmp_3 = this.v9_1;
            if (tmp_3 instanceof Error) {
              var e = this.v9_1;
              var tmp_4 = this;
              tmp_4.iie_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.s9_1 = 3;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            this.t9_1 = 4;
            if (!this.gie_1.bid_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.gie_1, null);
            return Unit_instance;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 4) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.uic_1 = autoFlush;
    this.vic_1 = new Buffer();
    this.wic_1 = 0;
    this.xic_1 = new Object();
    this.yic_1 = atomic$ref$1(Empty_instance);
    this.zic_1 = new Buffer();
    this.aid_1 = new Buffer();
    this.bid_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).mie = function () {
    var tmp0_safe_receiver = this.nie();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if (this.zic_1.pi9()) {
      moveFlushToReadBuffer(this);
    }
    return this.zic_1;
  };
  protoOf(ByteChannel).oie = function () {
    var tmp0_safe_receiver = this.nie();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if (this.pie()) {
      throw IOException_init_$Create$('Channel is closed for write');
    }
    return this.aid_1;
  };
  protoOf(ByteChannel).nie = function () {
    var tmp0_safe_receiver = this.bid_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
  };
  protoOf(ByteChannel).pie = function () {
    return !(this.bid_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).rie = function () {
    return !(this.nie() == null) || (this.pie() && this.wic_1 === 0 && this.zic_1.pi9());
  };
  protoOf(ByteChannel).sie = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ByteChannel).lie = function ($completion) {
    var tmp = new $flushCOROUTINE$1(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ByteChannel).xid = function () {
    if (this.aid_1.pi9())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.xic_1;
    var count = this.aid_1.p().m1();
    this.vic_1.eib(this.aid_1);
    this.wic_1 = this.wic_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.yic_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.yic_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.qic();
    }
  };
  protoOf(ByteChannel).uie = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ByteChannel).y8w = function (cause) {
    if (!(this.bid_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.bid_1.atomicfu$compareAndSet(null, closedToken);
    var actualCause = closedToken.t1();
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
    this_0.wia(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.vie_1 = null;
    this.wie_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).nie = function () {
    return this.vie_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).rie = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).mie = function () {
    return this.wie_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).sie = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).y8w = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.xie_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.y8w(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function get_availableForRead(_this__u8e3s4) {
    return _this__u8e3s4.mie().oi9().p().m1();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$4(_this__u8e3s4, packet, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$9(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function readRemaining_0(_this__u8e3s4, max, $completion) {
    var tmp = new $readRemainingCOROUTINE$11(_this__u8e3s4, max, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.nie();
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
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.nie();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.nie();
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
    this.gif_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.hif_1 = BytePacketBuilder();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.gif_1.rie()) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.hif_1.eib(this.gif_1.mie());
            this.s9_1 = 2;
            suspendResult = this.gif_1.tie(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.gif_1);
            return this.hif_1.oi9();
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $readPacketCOROUTINE$4(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qif_1 = _this__u8e3s4;
    this.rif_1 = packet;
  }
  protoOf($readPacketCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 6;
            this.sif_1 = new Buffer();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.sif_1.p().h1(toLong(this.rif_1)) < 0)) {
              this.s9_1 = 5;
              continue $sm;
            }

            if (this.qif_1.mie().pi9()) {
              this.s9_1 = 2;
              suspendResult = this.qif_1.tie(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            if (this.qif_1.rie()) {
              this.s9_1 = 5;
              continue $sm;
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.qif_1.mie()).h1(numberToLong(this.rif_1).g3(this.sif_1.p())) > 0) {
              this.qif_1.mie().qia(this.sif_1, numberToLong(this.rif_1).g3(this.sif_1.p()));
            } else {
              this.qif_1.mie().ria(this.sif_1);
            }

            this.s9_1 = 1;
            continue $sm;
          case 5:
            if (this.sif_1.p().h1(toLong(this.rif_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.rif_1 + ' bytes but only ' + this.sif_1.p().toString() + ' available');
            }

            return this.sif_1;
          case 6:
            throw this.v9_1;
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
  function $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.big_1 = _this__u8e3s4;
    this.cig_1 = buffer;
    this.dig_1 = offset;
    this.eig_1 = length;
  }
  protoOf($readAvailableCOROUTINE$7).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            if (this.big_1.rie())
              return -1;
            if (this.big_1.mie().pi9()) {
              this.s9_1 = 1;
              suspendResult = this.big_1.tie(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (this.big_1.rie())
              return -1;
            return readAvailable_0(this.big_1.mie(), this.cig_1, this.dig_1, this.eig_1);
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
  function $toByteArrayCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nig_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$9).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = readBuffer(this.nig_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wig_1 = _this__u8e3s4;
    this.xig_1 = channel;
    this.yig_1 = limit;
  }
  protoOf($copyToCOROUTINE$10).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 12;
            this.zig_1 = this.yig_1;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 8;
            this.t9_1 = 7;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.wig_1.rie() && this.zig_1.h1(new Long(0, 0)) > 0)) {
              this.s9_1 = 6;
              continue $sm;
            }

            if (this.wig_1.mie().pi9()) {
              this.s9_1 = 3;
              suspendResult = this.wig_1.tie(VOID, this);
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
            var tmp_0 = this;
            var a = this.zig_1;
            var b = get_remaining(this.wig_1.mie());
            tmp_0.bih_1 = a.h1(b) <= 0 ? a : b;
            this.wig_1.mie().qia(this.xig_1.oie(), this.bih_1);
            this.zig_1 = this.zig_1.g3(this.bih_1);
            this.s9_1 = 5;
            suspendResult = this.xig_1.lie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.s9_1 = 2;
            continue $sm;
          case 6:
            this.aih_1 = Unit_instance;
            this.t9_1 = 12;
            this.s9_1 = 10;
            continue $sm;
          case 7:
            this.t9_1 = 8;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Error) {
              this.cih_1 = this.v9_1;
              var tmp_2 = this;
              this.wig_1.y8w(this.cih_1);
              close_0(this.xig_1, this.cih_1);
              throw this.cih_1;
            } else {
              throw this.v9_1;
            }

          case 8:
            this.t9_1 = 12;
            this.dih_1 = this.v9_1;
            this.s9_1 = 9;
            suspendResult = this.xig_1.lie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.dih_1;
          case 10:
            this.t9_1 = 12;
            this.s9_1 = 11;
            suspendResult = this.xig_1.lie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return this.yig_1.g3(this.zig_1);
          case 12:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 12) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $readRemainingCOROUTINE$11(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mih_1 = _this__u8e3s4;
    this.nih_1 = max;
  }
  protoOf($readRemainingCOROUTINE$11).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.oih_1 = BytePacketBuilder();
            this.pih_1 = this.nih_1;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.mih_1.rie() && this.pih_1.h1(new Long(0, 0)) > 0)) {
              this.s9_1 = 3;
              continue $sm;
            }

            if (this.pih_1.h1(get_remaining(this.mih_1.mie())) >= 0) {
              this.pih_1 = this.pih_1.g3(get_remaining(this.mih_1.mie()));
              this.mih_1.mie().ria(this.oih_1);
            } else {
              this.mih_1.mie().qia(this.oih_1, this.pih_1);
              this.pih_1 = new Long(0, 0);
            }

            this.s9_1 = 2;
            suspendResult = this.mih_1.tie(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
            continue $sm;
          case 3:
            return this.oih_1.oi9();
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $readBufferCOROUTINE$13(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yih_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$13).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.zih_1 = new Buffer();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.yih_1.rie()) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.zih_1.eib(this.yih_1.mie());
            this.s9_1 = 2;
            suspendResult = this.yih_1.tie(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.yih_1.nie();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.zih_1;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$14(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $flushIfNeededCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iii_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$14).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            rethrowCloseCauseIfNeeded_0(this.iii_1);
            var tmp_0;
            var tmp_1 = this.iii_1;
            var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uic_1) === true) {
              tmp_0 = true;
            } else {
              tmp_0 = get_size(this.iii_1.oie()) >= 1048576;
            }

            if (tmp_0) {
              this.s9_1 = 1;
              suspendResult = this.iii_1.lie(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 1:
            this.s9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.jii_1 = channel;
    this.kii_1 = job;
  }
  protoOf(WriterJob).e1b = function () {
    return this.kii_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.lii_1 = channel;
    this.mii_1 = coroutineContext;
  }
  protoOf(WriterScope).h14 = function () {
    return this.mii_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.oie().wia(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, copy, $completion) {
    _this__u8e3s4.oie().eib(copy);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function get_isCompleted(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.e1b().d15();
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.y8w(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    var tmp = _this__u8e3s4.e1b();
    tmp.k15(invokeOnCompletion$lambda(block));
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.writer.<anonymous>' call
    this_0.k15(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function NO_CALLBACK$1() {
    this.nii_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).y9 = function () {
    return this.nii_1;
  };
  protoOf(NO_CALLBACK$1).z9 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).da = function (result) {
    return this.z9(result);
  };
  function ByteWriteChannel$flushAndClose$ref($boundThis) {
    this.oii_1 = $boundThis;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).y25 = function ($completion) {
    return this.oii_1.uie($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).ib = function ($completion) {
    return this.y25($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
    var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
    var l = function ($completion) {
      return i.y25($completion);
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
    this.xii_1 = $block;
    this.yii_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(writer$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 14;
            this.aij_1 = Job(get_job(this.zii_1.h14()));
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.t9_1 = 3;
            this.s9_1 = 2;
            suspendResult = this.xii_1(new WriterScope(this.yii_1, this.zii_1.h14().hj(this.aij_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.aij_1.a1c();
            var tmp_0 = this;
            var tmp_1;
            if (get_job(this.zii_1.h14()).e15()) {
              this.yii_1.y8w(get_job(this.zii_1.h14()).h15());
              tmp_1 = Unit_instance;
            }

            tmp_0.bij_1 = tmp_1;
            this.t9_1 = 14;
            this.s9_1 = 9;
            continue $sm;
          case 3:
            this.t9_1 = 4;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof Error) {
              this.cij_1 = this.v9_1;
              var tmp_3 = this;
              cancel(this.aij_1, 'Exception thrown while writing to channel', this.cij_1);
              this.yii_1.y8w(this.cij_1);
              tmp_3.bij_1 = Unit_instance;
              this.t9_1 = 14;
              this.s9_1 = 9;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 4:
            this.t9_1 = 14;
            this.dij_1 = this.v9_1;
            this.s9_1 = 5;
            suspendResult = this.aij_1.o15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.eij_1 = this.zii_1;
            this.t9_1 = 7;
            var tmp_5 = this;
            tmp_5.gij_1 = Companion_instance;
            var tmp_6 = this;
            tmp_6.hij_1 = this.eij_1;
            this.s9_1 = 6;
            suspendResult = this.yii_1.uie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_7 = this;
            tmp_7.iij_1 = Unit_instance;
            this.fij_1 = _Result___init__impl__xyqfz8(this.iij_1);
            this.t9_1 = 14;
            this.s9_1 = 8;
            continue $sm;
          case 7:
            this.t9_1 = 14;
            var tmp_8 = this.v9_1;
            if (tmp_8 instanceof Error) {
              this.jij_1 = this.v9_1;
              var tmp_9 = this;
              var exception = this.jij_1;
              tmp_9.fij_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.s9_1 = 8;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 8:
            this.t9_1 = 14;
            throw this.dij_1;
          case 9:
            this.t9_1 = 14;
            this.s9_1 = 10;
            suspendResult = this.aij_1.o15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            var tmp_10 = this;
            tmp_10.kij_1 = this.zii_1;
            this.t9_1 = 12;
            var tmp_11 = this;
            tmp_11.mij_1 = Companion_instance;
            var tmp_12 = this;
            tmp_12.nij_1 = this.kij_1;
            this.s9_1 = 11;
            suspendResult = this.yii_1.uie(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.lij_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.t9_1 = 14;
            this.s9_1 = 13;
            continue $sm;
          case 12:
            this.t9_1 = 14;
            var tmp_13 = this.v9_1;
            if (tmp_13 instanceof Error) {
              var e = this.v9_1;
              var tmp_14 = this;
              tmp_14.lij_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.s9_1 = 13;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 13:
            this.t9_1 = 14;
            return Unit_instance;
          case 14:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 14) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).b20 = function ($this$launch, completion) {
    var i = new writer$slambda(this.xii_1, this.yii_1, completion);
    i.zii_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.pie()) {
        $channel.y8w(it);
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
          tmp_1 = origin.k1c();
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
          tmp_0 = origin.k1c();
        } else {
          var tmp1_elvis_lhs = origin.message;
          tmp_0 = IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was closed' : tmp1_elvis_lhs, origin);
        }
      }
    }
    tmp.qie_1 = tmp_0;
  }
  protoOf(CloseToken).t1 = function () {
    var tmp;
    if (this.qie_1 == null) {
      tmp = null;
    } else {
      var tmp_0 = this.qie_1;
      if (tmp_0 instanceof IOException) {
        var tmp_1;
        var tmp_2 = this.qie_1;
        if (isInterface(tmp_2, CopyableThrowable)) {
          tmp_1 = this.qie_1.k1c();
        } else {
          tmp_1 = IOException_init_$Create$_0(this.qie_1.message, this.qie_1);
        }
        tmp = tmp_1;
      } else {
        var tmp_3 = this.qie_1;
        if (!(tmp_3 == null) ? isInterface(tmp_3, CopyableThrowable) : false) {
          var tmp0_elvis_lhs = this.qie_1.k1c();
          tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(this.qie_1.message, this.qie_1) : tmp0_elvis_lhs;
        } else {
          tmp = CancellationException_init_$Create$(this.qie_1.message, this.qie_1);
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
    this.oij_1 = source;
    this.pij_1 = null;
  }
  protoOf(SourceByteReadChannel).nie = function () {
    var tmp0_safe_receiver = this.pij_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
  };
  protoOf(SourceByteReadChannel).rie = function () {
    return this.oij_1.pi9();
  };
  protoOf(SourceByteReadChannel).mie = function () {
    var tmp0_safe_receiver = this.nie();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    return this.oij_1;
  };
  protoOf(SourceByteReadChannel).sie = function (min, $completion) {
    var tmp0_safe_receiver = this.nie();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    return get_remaining(this.oij_1).h1(toLong(min)) >= 0;
  };
  protoOf(SourceByteReadChannel).y8w = function (cause) {
    if (!(this.pij_1 == null))
      return Unit_instance;
    this.oij_1.q4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.pij_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(max);
    var b = input.oi9().p();
    var capacity = (a.h1(b) <= 0 ? a : b).m1();
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
    return !_this__u8e3s4.pi9();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? _this__u8e3s4.p().m1() : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writePacket_0(_this__u8e3s4, packet) {
    _this__u8e3s4.eib(packet);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.oi9();
  }
  function get_size(_this__u8e3s4) {
    return _this__u8e3s4.oi9().p().m1();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.wia(buffer, offset, offset + length | 0);
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.oi9().p();
  }
  function readFully(_this__u8e3s4, out, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? out.length - offset | 0 : length;
    _init_properties_ByteReadPacket_kt__28475y();
    readTo(_this__u8e3s4, out, offset, offset + length | 0);
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.pi9() && block(_this__u8e3s4.oi9())) {
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
    var result = _this__u8e3s4.mia(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().qij_1)) {
      if (max === 2147483647)
        return readString(_this__u8e3s4);
      // Inline function 'kotlin.math.min' call
      var a = _this__u8e3s4.oi9().p();
      var b = toLong(max);
      var count = a.h1(b) <= 0 ? a : b;
      return readString_0(_this__u8e3s4, count);
    }
    return decode(charset.tij(), _this__u8e3s4, max);
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
    if (charset.equals(Charsets_getInstance().qij_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.uij(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
    if (charset === Charsets_getInstance().qij_1) {
      return writeString(_this__u8e3s4, toString_0(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.uij(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).yij = function () {
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
  protoOf(Companion_1).hik = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().qij_1;
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
      return Charsets_getInstance().rij_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function Charset(_name) {
    this.sij_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.sij_1 === other.sij_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.sij_1);
  };
  protoOf(Charset).toString = function () {
    return this.sij_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.sij_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.qij_1 = new CharsetImpl('UTF-8');
    this.rij_1 = new CharsetImpl('ISO-8859-1');
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
    this.iik_1 = _charset;
  }
  function CharsetEncoder(_charset) {
    this.jik_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).uij = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).tij = function () {
    return new CharsetDecoderImpl(this);
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.mik_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.mik_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.mik_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.mik_1.equals(tmp0_other_with_cast.mik_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.oik_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.oik_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.oik_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.oik_1.equals(tmp0_other_with_cast.oik_1))
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
    var a = input.oi9().p();
    var b = toLong(max);
    var count = a.h1(b) <= 0 ? a : b;
    var tmp = readByteArray(input, count.m1());
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.pik(array);
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
    return _this__u8e3s4.iik_1;
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
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().rij_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().qij_1)) {
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
    dst.zia(result);
    return result.length;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.jik_1;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_2.hik(name);
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
    this.qik_1 = $this_toKtor;
  }
  protoOf(toKtor$1).pik = function (buffer) {
    return this.qik_1.decode(buffer);
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
    this.rik_1 = fatal;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_0(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!get_ENCODING_ALIASES().v(requestedEncoding)) {
      // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.<anonymous>' call
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
  }
  protoOf(TextDecoderFallback).pik = function (buffer) {
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
          if (!!this.rik_1) {
            // Inline function 'io.ktor.utils.io.charsets.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.fib(toByte(point >> 8));
        }
        builder.fib(toByte(point & 255));
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
        dst.fib(toByte(character));
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
    this.zij_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.zij_1;
    tmp.aik_1 = fillArrayVal(Array(size), null);
    this.bik_1 = 0;
  }
  protoOf(DefaultPool).cik = function (instance) {
  };
  protoOf(DefaultPool).dik = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).eik = function (instance) {
  };
  protoOf(DefaultPool).fik = function () {
    if (this.bik_1 === 0)
      return this.yij();
    this.bik_1 = this.bik_1 - 1 | 0;
    var idx = this.bik_1;
    var tmp = this.aik_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.aik_1[idx] = null;
    return this.dik(instance);
  };
  protoOf(DefaultPool).gik = function (instance) {
    this.eik(instance);
    if (this.bik_1 === this.zij_1) {
      this.cik(instance);
    } else {
      var _unary__edvuaz = this.bik_1;
      this.bik_1 = _unary__edvuaz + 1 | 0;
      this.aik_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).v18 = function () {
    var inductionVariable = 0;
    var last = this.bik_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.aik_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.aik_1[i] = null;
        this.cik(instance);
      }
       while (inductionVariable < last);
    this.bik_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).qic = resume;
  protoOf(Read).ric = resume_0;
  protoOf(Write).qic = resume;
  protoOf(Write).ric = resume_0;
  protoOf(ByteChannel).tie = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).tie = awaitContent$default;
  protoOf(SourceByteReadChannel).tie = awaitContent$default;
  protoOf(DefaultPool).q4 = close;
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
