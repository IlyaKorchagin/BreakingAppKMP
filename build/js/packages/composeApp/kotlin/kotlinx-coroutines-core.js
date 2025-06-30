(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var Continuation = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j5;
  var Key_instance = kotlin_kotlin.$_$.i5;
  var equals = kotlin_kotlin.$_$.od;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.ic;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.jc;
  var isInterface = kotlin_kotlin.$_$.oe;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var hashCode = kotlin_kotlin.$_$.xd;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.x3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a4;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.mc;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.lc;
  var get = kotlin_kotlin.$_$.nc;
  var minusKey = kotlin_kotlin.$_$.oc;
  var ContinuationInterceptor = kotlin_kotlin.$_$.pc;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f3;
  var addSuppressed = kotlin_kotlin.$_$.cl;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var Enum = kotlin_kotlin.$_$.bk;
  var startCoroutine = kotlin_kotlin.$_$.yc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rl;
  var Long = kotlin_kotlin.$_$.hk;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.q;
  var RuntimeException = kotlin_kotlin.$_$.ok;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.e3;
  var captureStack = kotlin_kotlin.$_$.fd;
  var Error_0 = kotlin_kotlin.$_$.ck;
  var Error_init_$Init$ = kotlin_kotlin.$_$.x1;
  var Element = kotlin_kotlin.$_$.uc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yl;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var CancellationException = kotlin_kotlin.$_$.fc;
  var ArrayList = kotlin_kotlin.$_$.p6;
  var SequenceScope = kotlin_kotlin.$_$.pg;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.s2;
  var sequence = kotlin_kotlin.$_$.ah;
  var plus = kotlin_kotlin.$_$.vc;
  var get_0 = kotlin_kotlin.$_$.sc;
  var fold = kotlin_kotlin.$_$.rc;
  var minusKey_0 = kotlin_kotlin.$_$.tc;
  var anyToString = kotlin_kotlin.$_$.cd;
  var UnsupportedOperationException = kotlin_kotlin.$_$.bl;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.i1;
  var Companion_getInstance = kotlin_kotlin.$_$.w5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration = kotlin_kotlin.$_$.sj;
  var returnIfSuspended = kotlin_kotlin.$_$.o;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var toLong = kotlin_kotlin.$_$.hf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.da;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var compareTo = kotlin_kotlin.$_$.ld;
  var last = kotlin_kotlin.$_$.bi;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p2;
  var NoSuchElementException = kotlin_kotlin.$_$.ik;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.w2;
  var getKClass = kotlin_kotlin.$_$.g;
  var Unit = kotlin_kotlin.$_$.al;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var copyOf = kotlin_kotlin.$_$.i8;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.xl;
  var joinToString = kotlin_kotlin.$_$.n9;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.kc;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.x2;
  var Exception = kotlin_kotlin.$_$.dk;
  var toLongOrNull = kotlin_kotlin.$_$.ej;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.hc;
  var isSuspendFunction = kotlin_kotlin.$_$.se;
  var Collection = kotlin_kotlin.$_$.q6;
  var KtList = kotlin_kotlin.$_$.w6;
  var plus_0 = kotlin_kotlin.$_$.ra;
  var listOf_0 = kotlin_kotlin.$_$.ca;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var removeFirstOrNull = kotlin_kotlin.$_$.va;
  var KtMutableList = kotlin_kotlin.$_$.a7;
  var coerceIn = kotlin_kotlin.$_$.eg;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.c3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.r15(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.r15.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.l15(onCancelling, invokeImmediately, handler) : $super.l15.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForCoroutine($joinAllCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.g18(cause) : $super.g18.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, DisposableHandle, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineName, 'CoroutineName', VOID, AbstractCoroutineContextElement);
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().m1c(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(SelectOnAwaitCompletionHandler, 'SelectOnAwaitCompletionHandler', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode, [JobNode, DisposableHandle]);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, CompletableJob], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(SupervisorCoroutine, 'SupervisorCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CancellationException, CopyableThrowable]);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [ScopeCoroutine, Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$4, CoroutineImpl);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$8, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$6, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.i1o(cause) : $super.i1o.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.r15(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.r15.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [1, 0]);
  initMetadataForCoroutine($awaitCloseCOROUTINE$12, CoroutineImpl);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.q1q(context, capacity, onBufferOverflow) : $super.q1q.call(this, context, capacity, onBufferOverflow);
  }
  initMetadataForInterface(FusibleFlow, 'FusibleFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, [FusibleFlow], [1]);
  initMetadataForClass(ChannelFlowBuilder, 'ChannelFlowBuilder', VOID, ChannelFlow, VOID, [1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectToCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(CallbackFlowBuilder, 'CallbackFlowBuilder', VOID, ChannelFlowBuilder, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$17, CoroutineImpl);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$18, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForInterface(SharedFlow, 'SharedFlow', VOID, VOID, VOID, [1]);
  initMetadataForInterface(MutableSharedFlow, 'MutableSharedFlow', VOID, VOID, [SharedFlow, FlowCollector], [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$19, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, MutableSharedFlow, FusibleFlow], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SharingCommand, 'SharingCommand', VOID, Enum);
  initMetadataForClass(StartedEagerly, 'StartedEagerly', StartedEagerly);
  initMetadataForLambda(StartedLazily$command$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(StartedLazily$command$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StartedLazily, 'StartedLazily', StartedLazily);
  initMetadataForInterface(StateFlow, 'StateFlow', VOID, VOID, [SharedFlow], [1]);
  initMetadataForCoroutine($collectCOROUTINE$20, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, StateFlow, MutableSharedFlow, FusibleFlow], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForClass(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', VOID, SharedFlowImpl, [StateFlow, SharedFlowImpl], [1]);
  initMetadataForClass(ChannelFlowOperator, 'ChannelFlowOperator', VOID, ChannelFlow, VOID, [1, 2]);
  initMetadataForClass(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlowOperator$collectWithContextUndispatched$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$21, CoroutineImpl);
  initMetadataForLambda(UndispatchedContextCollector$emitRef$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(UndispatchedContextCollector, 'UndispatchedContextCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(StackFrameContinuation, 'StackFrameContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(FlowCoroutine, 'FlowCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForLambda(scopedFlow$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$22, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForObject(NopCollector, 'NopCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(debounceInternal$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(DistinctFlowImpl$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(DistinctFlowImpl, 'DistinctFlowImpl', VOID, VOID, VOID, [1]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(mapLatest$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$29, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$30, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, [StateFlow, FusibleFlow], [1]);
  initMetadataForClass(SharingConfig, 'SharingConfig');
  initMetadataForCoroutine($collectCOROUTINE$31, CoroutineImpl);
  initMetadataForClass(ReadonlySharedFlow, 'ReadonlySharedFlow', VOID, VOID, [SharedFlow, FusibleFlow], [1]);
  initMetadataForLambda(launchSharing$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(launchSharing$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(launchSharing$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(onEach$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$32, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(launchIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($emitCOROUTINE$38, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_2, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_3, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($firstCOROUTINE$35, CoroutineImpl);
  initMetadataForCoroutine($firstCOROUTINE$36, CoroutineImpl);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(_no_name_provided__qut3iv_4, VOID, VOID, VOID, [Runnable]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForInterface(SelectClause1, 'SelectClause1');
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl', VOID, VOID, [SelectClause1]);
  initMetadataForCoroutine($invokeBlockCOROUTINE$44, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$40, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$41, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$42, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$43, CoroutineImpl);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.i2i(owner, $completion) : $super.i2i.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.k2i(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.k2i.call(this, owner);
    }
    return tmp;
  }
  initMetadataForInterface(Mutex, 'Mutex', VOID, VOID, VOID, [1]);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreAndMutexImpl, [SemaphoreAndMutexImpl, Mutex], [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForLambda(asDeferred$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(AbortFlowException, 'AbortFlowException', VOID, CancellationException);
  initMetadataForClass(ChildCancelledException, 'ChildCancelledException', ChildCancelledException, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.d14(parentContext.fa(Key_instance_3));
    }
    this.g14_1 = parentContext.hj(this);
  }
  protoOf(AbstractCoroutine).y9 = function () {
    return this.g14_1;
  };
  protoOf(AbstractCoroutine).h14 = function () {
    return this.g14_1;
  };
  protoOf(AbstractCoroutine).i14 = function () {
    return protoOf(JobSupport).i14.call(this);
  };
  protoOf(AbstractCoroutine).j14 = function (value) {
  };
  protoOf(AbstractCoroutine).k14 = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).l14 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).m14 = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.k14(state.n14_1, state.p14());
    } else {
      this.j14((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).da = function (result) {
    var state = this.q14(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.r14(state);
  };
  protoOf(AbstractCoroutine).r14 = function (state) {
    return this.s14(state);
  };
  protoOf(AbstractCoroutine).t14 = function (exception) {
    handleCoroutineException(this.g14_1, exception);
  };
  protoOf(AbstractCoroutine).u14 = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.g14_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).u14.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).u14.call(this);
  };
  protoOf(AbstractCoroutine).v14 = function (start, receiver, block) {
    start.y14(block, receiver, this);
  };
  function joinAll(_this__u8e3s4, $completion) {
    var tmp = new $joinAllCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $joinAllCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p16_1 = _this__u8e3s4;
  }
  protoOf($joinAllCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            tmp_0.q16_1 = this.p16_1;
            this.r16_1 = this.q16_1.m();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!this.r16_1.n()) {
              this.s9_1 = 3;
              continue $sm;
            }

            this.s16_1 = this.r16_1.o();
            var tmp_1 = this;
            tmp_1.t16_1 = this.s16_1;
            this.s9_1 = 2;
            suspendResult = this.t16_1.o15(this);
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.u16() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.v14(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.y9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.fa(Key_instance), oldContext.fa(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.g14_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.a17();
    }
    return tmp$ret$0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.u16() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.v14(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).d16 = function (exception) {
    handleCoroutineException(this.g14_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.h17_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).g15 = function () {
    startCoroutineCancellable_0(this.h17_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.z16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.z16_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.z16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.z16_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.z16_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).s14 = function (state) {
    this.r14(state);
  };
  protoOf(DispatchedCoroutine).r14 = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.l17_1), recoverResult(state, this.l17_1));
  };
  protoOf(DispatchedCoroutine).a17 = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.c15());
    if (state instanceof CompletedExceptionally)
      throw state.n14_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u17_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.u17_1.f16(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).y17 = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(DeferredCoroutine).z17 = function () {
    var tmp = this.g16();
    return isInterface(tmp, SelectClause1) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.d18_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).g15 = function () {
    startCoroutineCancellable_0(this.d18_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.s18(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function DisposeOnCancel(handle) {
    this.t18_1 = handle;
  }
  protoOf(DisposeOnCancel).u18 = function (cause) {
    return this.t18_1.v18();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.t18_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp4_safe_receiver = delegate.c19();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp4_safe_receiver.d19()) {
        tmp_0 = tmp4_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.r18_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp5_subject = $this.c15();
    var tmp;
    if (!(tmp5_subject == null) ? isInterface(tmp5_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp5_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.f19_1)) {
      var tmp_0 = $this.n18_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).e19();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.n18_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.g19(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.p18_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.l19(index, cause, $this.y9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.y9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.p18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.p18_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.p18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.p18_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.y9().fa(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.r18_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.q18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.q18_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.u19()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp13_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.n14_1;
              if (isInterface(handler, CancelHandler)) {
                $this.r19(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.n19_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.s19()) {
                $this.r19(handler, state.q19_1);
                return Unit_instance;
              }
              var update = state.t19(VOID, handler);
              if ($this.q18_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.q18_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.q18_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, $this.f19_1, onCancellation, idempotent);
          if (!$this.q18_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (state instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && state.p19_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.v19();
    }
  }
  function CancellableContinuationImpl$resume$lambda($onCancellation) {
    return function (cause, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $onCancellation(cause);
      return Unit_instance;
    };
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.n18_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.o18_1 = this.n18_1.y9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.p18_1 = atomic$int$1(tmp$ret$0);
    this.q18_1 = atomic$ref$1(Active_instance);
    this.r18_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).w19 = function () {
    return this.n18_1;
  };
  protoOf(CancellableContinuationImpl).y9 = function () {
    return this.o18_1;
  };
  protoOf(CancellableContinuationImpl).c15 = function () {
    return this.q18_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).i14 = function () {
    var tmp = this.c15();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).d15 = function () {
    var tmp = this.c15();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).e15 = function () {
    var tmp = this.c15();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).x19 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.d15()) {
      handle.v18();
      this.r18_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).d19 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.q18_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.p19_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.v19();
      return false;
    }
    var tmp_0 = this.p18_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.q18_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).y19 = function () {
    return this.c15();
  };
  protoOf(CancellableContinuationImpl).z19 = function (takenState, cause) {
    var this_0 = this.q18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.s19()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.t19(VOID, VOID, VOID, VOID, cause);
            if (this.q18_1.atomicfu$compareAndSet(state, update)) {
              state.a1a(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.q18_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).g18 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.q18_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(state, CancelHandler)) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.q18_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (isInterface(state, CancelHandler)) {
          this.r19(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.f19_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).b1a = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.g18(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).r19 = function (handler, cause) {
    var tmp;
    try {
      handler.u18(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.y9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).c1a = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.y9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.y9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).d1a = function (parent) {
    return parent.h15();
  };
  protoOf(CancellableContinuationImpl).a17 = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.e1a();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.e1a();
    }
    var state = this.c15();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.n14_1, this);
    if (get_isCancellableMode(this.f19_1)) {
      var job = this.y9().fa(Key_instance_3);
      if (!(job == null) && !job.i14()) {
        var cause = job.h15();
        this.z19(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.f1a(state);
  };
  protoOf(CancellableContinuationImpl).e1a = function () {
    var tmp = this.n18_1;
    var tmp10_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp0_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.g1a(this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.v19();
    this.g18(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).da = function (result) {
    return this.h1a(toState(result, this), this.f19_1);
  };
  protoOf(CancellableContinuationImpl).k18 = function (value, onCancellation) {
    var tmp = this.f19_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resume.<anonymous>' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.i1a(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).l18 = function (value, onCancellation) {
    return this.i1a(value, this.f19_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).j1a = function (segment, index) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.p18_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.contracts.contract' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        // Inline function 'kotlinx.coroutines.decision' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).i18 = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).s18 = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).i1a = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.q18_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState(this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.q18_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.n1a()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                this.c1a(onCancellation, state.n14_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).h1a = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.i1a(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.i1a.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).v19 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.v18();
    this.r18_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).e18 = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).f18 = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.f19_1);
  };
  protoOf(CancellableContinuationImpl).j18 = function (_this__u8e3s4, value) {
    var tmp = this.n18_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.x18_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.f19_1;
    }
    this.h1a(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).f1a = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.m19_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).o1a = function (state) {
    var tmp20_safe_receiver = protoOf(DispatchedTask).o1a.call(this, state);
    var tmp;
    if (tmp20_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp20_safe_receiver, this.n18_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.p1a() + '(' + toDebugString(this.n18_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).p1a = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.s1a_1 = handler;
  }
  protoOf(UserSupplied).u18 = function (cause) {
    this.s1a_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.s1a_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.m19_1 = result;
    this.n19_1 = cancelHandler;
    this.o19_1 = onCancellation;
    this.p19_1 = idempotentResume;
    this.q19_1 = cancelCause;
  }
  protoOf(CompletedContinuation).s19 = function () {
    return !(this.q19_1 == null);
  };
  protoOf(CompletedContinuation).a1a = function (cont, cause) {
    var tmp21_safe_receiver = this.n19_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.r19(tmp21_safe_receiver, cause);
    }
    var tmp22_safe_receiver = this.o19_1;
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.c1a(tmp22_safe_receiver, cause, this.m19_1);
    }
  };
  protoOf(CompletedContinuation).t1a = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).t19 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.m19_1 : result;
    cancelHandler = cancelHandler === VOID ? this.n19_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.o19_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.p19_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.q19_1 : cancelCause;
    return $super === VOID ? this.t1a(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.t1a.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.m19_1) + ', cancelHandler=' + toString_0(this.n19_1) + ', onCancellation=' + toString_0(this.o19_1) + ', idempotentResume=' + toString_0(this.p19_1) + ', cancelCause=' + toString_0(this.q19_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.m19_1 == null ? 0 : hashCode(this.m19_1);
    result = imul(result, 31) + (this.n19_1 == null ? 0 : hashCode(this.n19_1)) | 0;
    result = imul(result, 31) + (this.o19_1 == null ? 0 : hashCode(this.o19_1)) | 0;
    result = imul(result, 31) + (this.p19_1 == null ? 0 : hashCode(this.p19_1)) | 0;
    result = imul(result, 31) + (this.q19_1 == null ? 0 : hashCode(this.q19_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.m19_1, tmp0_other_with_cast.m19_1))
      return false;
    if (!equals(this.n19_1, tmp0_other_with_cast.n19_1))
      return false;
    if (!equals(this.o19_1, tmp0_other_with_cast.o19_1))
      return false;
    if (!equals(this.p19_1, tmp0_other_with_cast.p19_1))
      return false;
    if (!equals(this.q19_1, tmp0_other_with_cast.q19_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.y1a_1 = child;
  }
  protoOf(ChildContinuation).z1a = function () {
    return true;
  };
  protoOf(ChildContinuation).u18 = function (cause) {
    this.y1a_1.b1a(this.y1a_1.d1a(this.e1b()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1b_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.u1b_1.f16(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.d14(parent);
  }
  protoOf(CompletableDeferredImpl).q15 = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).y17 = function ($completion) {
    var tmp = new $awaitCOROUTINE$3(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(CompletableDeferredImpl).z17 = function () {
    var tmp = this.g16();
    return isInterface(tmp, SelectClause1) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).x1b = function (value) {
    return this.y1b(value);
  };
  protoOf(CompletableDeferredImpl).z1b = function (exception) {
    return this.y1b(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.n14_1 = cause;
    this.o14_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).p14 = function () {
    return this.o14_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).u19 = function () {
    return this.o14_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.n14_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.m1a_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).n1a = function () {
    return this.m1a_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.n14_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).d1c = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).f1c = function (context, block) {
    return this.e1c(context, block);
  };
  protoOf(CoroutineDispatcher).ga = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).ha = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.g1c();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.fa(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp23_safe_receiver.h1c(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineName(name) {
    AbstractCoroutineContextElement.call(this, Key_instance_2);
    this.j1c_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.j1c_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.j1c_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.j1c_1 === tmp0_other_with_cast.j1c_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.fa(Key_instance_3) == null) ? context : context.hj(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.y9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.h14().fa(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.r15(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp24_safe_receiver = _this__u8e3s4.h14().fa(Key_instance_3);
    var tmp0_elvis_lhs = tmp24_safe_receiver == null ? null : tmp24_safe_receiver.i14();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).h14 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_0(message, cause));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).y14 = function (block, receiver, completion) {
    var tmp;
    switch (this.z2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).u16 = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.fa(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.h1(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.h1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.y9()).l1c(timeMillis, cancellable);
    }
    return cancellable.a17();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.p1c_1 = new Long(0, 0);
    this.q1c_1 = false;
    this.r1c_1 = null;
  }
  protoOf(EventLoop).s1c = function () {
    var tmp0_elvis_lhs = this.r1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.sg();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.q1a();
    return true;
  };
  protoOf(EventLoop).t1c = function (task) {
    var tmp0_elvis_lhs = this.r1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.r1c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.qg(task);
  };
  protoOf(EventLoop).u1c = function () {
    return this.p1c_1.h1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).v1c = function () {
    var tmp27_safe_receiver = this.r1c_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.j();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).w1c = function (unconfined) {
    this.p1c_1 = this.p1c_1.f3(delta(this, unconfined));
    if (!unconfined)
      this.q1c_1 = true;
  };
  protoOf(EventLoop).x1c = function (unconfined) {
    this.p1c_1 = this.p1c_1.g3(delta(this, unconfined));
    if (this.p1c_1.h1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.q1c_1) {
      this.y1c();
    }
  };
  protoOf(EventLoop).y1c = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.z1c_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).a1d = function () {
    var tmp0_elvis_lhs = this.z1c_1.dq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().z1c_1.c1d(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).b15 = function () {
    return null;
  };
  protoOf(NonDisposableHandle).v18 = function () {
  };
  protoOf(NonDisposableHandle).v15 = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp41_safe_receiver = _this__u8e3s4.fa(Key_instance_3);
    if (tmp41_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp41_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.n15(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.z1a();
      tmp = _this__u8e3s4.l15(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.i14())
      throw _this__u8e3s4.h15();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.fa(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.s15();
    return _this__u8e3s4.o15($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp39_safe_receiver = _this__u8e3s4.fa(Key_instance_3);
    var tmp0_elvis_lhs = tmp39_safe_receiver == null ? null : tmp39_safe_receiver.i14();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.r15(CancellationException_0(message, cause));
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.h1d_1 = handle;
  }
  protoOf(DisposeOnCompletion).z1a = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).u18 = function (cause) {
    return this.h1d_1.v18();
  };
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp40_safe_receiver = _this__u8e3s4.fa(Key_instance_3);
    if (tmp40_safe_receiver == null)
      null;
    else {
      tmp40_safe_receiver.r15(cause);
    }
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.u18(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.i1d_1 = isActive;
  }
  protoOf(Empty).i14 = function () {
    return this.i1d_1;
  };
  protoOf(Empty).f1b = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.i1d_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).i14 = function () {
    return true;
  };
  protoOf(NodeList).f1b = function () {
    return this;
  };
  protoOf(NodeList).m1d = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.v8('List{');
    this_0.v8(state);
    this_0.v8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.g1b_1;
    while (!equals(cur, this)) {
      // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.v8(', ');
        this_0.u8(node);
      }
      cur = cur.g1b_1;
    }
    this_0.v8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.m1d('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).e1b = function () {
    var tmp = this.d1b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).i14 = function () {
    return true;
  };
  protoOf(JobNode).f1b = function () {
    return null;
  };
  protoOf(JobNode).v18 = function () {
    return this.e1b().p15(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.e1b()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.r1d_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.r1d_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.n14_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.s1d();
    var exceptions = state.t1d(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.d16(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).u19();
      }
    }
    if (!wasCancelling) {
      $this.a16(finalException);
    }
    $this.m14(finalState);
    var casSuccess = $this.b14_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.j()) {
      if (state.s1d()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.l14() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.u(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.m();
        while (tmp0_iterator_0.n()) {
          var element_0 = tmp0_iterator_0.o();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.p() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.p());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.m();
    while (_iterator__ex2g4s.n()) {
      var exception = _iterator__ex2g4s.o();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.e(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.b14_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.a16(null);
    $this.m14(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.a15();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp47_safe_receiver.v18();
      $this.z14(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.n14_1;
    if (state instanceof JobNode) {
      try {
        state.u18(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.t14(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.f1b();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp49_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.a16(cause);
    list.n1d(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.g1b_1;
    while (!equals(cur, list)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCancelling.<anonymous>' call
        tmp = node.z1a();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.u18(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.g1b_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.t14(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.b16())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.a15();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.v15(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    _this__u8e3s4.n1d(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.g1b_1;
    while (!equals(cur, _this__u8e3s4)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCompletion.<anonymous>' call
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.u18(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.g1b_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.t14(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.i1d_1)
        return 0;
      if (!$this.b14_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.g15();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.b14_1.atomicfu$compareAndSet(state, state.u1d_1))
          return -1;
        $this.g15();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.i1d_1 ? list : new InactiveNodeList(list);
    $this.b14_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.l1b(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.g1b_1;
    $this.b14_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.c15();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.a17();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.c15();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.v1d();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.l14() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).y15();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.c15();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.w1d())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.s1d();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.x1d(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.y1d();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.o1d_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp0_elvis_lhs_0 = causeExceptionCache;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var causeException_0 = tmp_1;
            if (state.i14()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.f1b();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.b14_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.v1d())
      return get_COMPLETING_ALREADY();
    finishing.z1d(true);
    if (!(finishing === state)) {
      if (!$this.b14_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.s1d();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.x1d(tmp65_safe_receiver.n14_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.y1d();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild(list, $this);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.n1d(2);
    var anotherChild = nextChild(list, $this);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp67_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.n14_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.e1e_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.o1d_1.n1d(2);
    var waitChildAgain = nextChild(lastChild, $this);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.s14(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.i1b_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.h1b_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.g1b_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.i1b_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.s1d() ? 'Cancelling' : state.v1d() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.i14() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.o1d_1 = list;
    this.p1d_1 = atomic$boolean$1(isCompleting);
    this.q1d_1 = atomic$ref$1(rootCause);
    this.r1d_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).f1b = function () {
    return this.o1d_1;
  };
  protoOf(Finishing).z1d = function (value) {
    this.p1d_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).v1d = function () {
    return this.p1d_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).f1e = function (value) {
    this.q1d_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).y1d = function () {
    return this.q1d_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).w1d = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).s1d = function () {
    return !(this.y1d() == null);
  };
  protoOf(Finishing).i14 = function () {
    return this.y1d() == null;
  };
  protoOf(Finishing).t1d = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.e(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.y1d();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.w2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.e(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).x1d = function (exception) {
    var rootCause = this.y1d();
    if (rootCause == null) {
      this.f1e(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.e(eh);
        this_0.e(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).e(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.s1d() + ', completing=' + this.v1d() + ', rootCause=' + toString_0(this.y1d()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.o1d_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.k1e_1 = parent;
    this.l1e_1 = state;
    this.m1e_1 = child;
    this.n1e_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).z1a = function () {
    return false;
  };
  protoOf(ChildCompletion).u18 = function (cause) {
    continueCompleting(this.k1e_1, this.l1e_1, this.m1e_1, this.n1e_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.u1e_1 = job;
  }
  protoOf(AwaitContinuation).d1a = function (parent) {
    var state = this.u1e_1.c15();
    if (state instanceof Finishing) {
      var tmp73_safe_receiver = state.y1d();
      if (tmp73_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp73_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.n14_1;
    return parent.h15();
  };
  protoOf(AwaitContinuation).p1a = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.x19();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.a17();
  }
  function onAwaitInternalRegFunc($this, select, ignoredParam) {
    $l$loop: while (true) {
      var state = $this.c15();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        var tmp;
        if (state instanceof CompletedExceptionally) {
          tmp = state;
        } else {
          tmp = unboxState(state);
        }
        var result = tmp;
        select.v1e(result);
        return Unit_instance;
      }
      if (startInternal($this, state) >= 0)
        break $l$loop;
    }
    var disposableHandle = invokeOnCompletion($this, VOID, new SelectOnAwaitCompletionHandler($this, select));
    select.w1e(disposableHandle);
  }
  function onAwaitInternalProcessResFunc($this, ignoredParam, result) {
    if (result instanceof CompletedExceptionally)
      throw result.n14_1;
    return result;
  }
  function SelectOnAwaitCompletionHandler($outer, select) {
    this.c1f_1 = $outer;
    JobNode.call(this);
    this.b1f_1 = select;
  }
  protoOf(SelectOnAwaitCompletionHandler).z1a = function () {
    return false;
  };
  protoOf(SelectOnAwaitCompletionHandler).u18 = function (cause) {
    var state = this.c1f_1.c15();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = state;
    } else {
      tmp = unboxState(state);
    }
    var result = tmp;
    this.b1f_1.d1f(this.c1f_1, result);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.m1f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).w1f = function ($this$sequence, $completion) {
    var tmp = this.x1f($this$sequence, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ma = function (p1, $completion) {
    return this.w1f(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            this.o1f_1 = this.m1f_1.c15();
            var tmp_0 = this.o1f_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.s9_1 = 6;
              suspendResult = this.n1f_1.wh(this.o1f_1.e1e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.o1f_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.p1f_1 = this.o1f_1.f1b();
                if (this.p1f_1 == null) {
                  this.q1f_1 = null;
                  this.s9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.r1f_1 = this.p1f_1;
                  var tmp_3 = this;
                  tmp_3.s1f_1 = this.r1f_1;
                  var tmp_4 = this;
                  tmp_4.t1f_1 = this.s1f_1;
                  this.u1f_1 = this.t1f_1.g1b_1;
                  this.s9_1 = 1;
                  continue $sm;
                }
              } else {
                this.s9_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.u1f_1, this.t1f_1)) {
              this.s9_1 = 4;
              continue $sm;
            }

            var tmp_5 = this;
            tmp_5.v1f_1 = this.u1f_1;
            var tmp_6 = this.v1f_1;
            if (tmp_6 instanceof ChildHandleNode) {
              this.s9_1 = 2;
              suspendResult = this.n1f_1.wh(this.v1f_1.e1e_1, this);
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
            this.u1f_1 = this.u1f_1.g1b_1;
            this.s9_1 = 1;
            continue $sm;
          case 4:
            this.q1f_1 = Unit_instance;
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.s9_1 = 7;
            continue $sm;
          case 6:
            this.s9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 8) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).x1f = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.m1f_1, completion);
    i.n1f_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.w1f($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport$onAwaitInternalRegFunc$ref() {
    var l = function (p0, p1, p2) {
      onAwaitInternalRegFunc(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'onAwaitInternalRegFunc';
    return l;
  }
  function JobSupport$onAwaitInternalProcessResFunc$ref() {
    var l = function (p0, p1, p2) {
      return onAwaitInternalProcessResFunc(p0, p1, p2);
    };
    l.callableName = 'onAwaitInternalProcessResFunc';
    return l;
  }
  function JobSupport(active) {
    this.b14_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.c14_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).b1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).z14 = function (value) {
    this.c14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).a15 = function () {
    return this.c14_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).b15 = function () {
    var tmp45_safe_receiver = this.a15();
    return tmp45_safe_receiver == null ? null : tmp45_safe_receiver.b15();
  };
  protoOf(JobSupport).d14 = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.z14(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.f15();
    var handle = parent.z15(this);
    this.z14(handle);
    if (this.d15()) {
      handle.v18();
      this.z14(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).c15 = function () {
    return this.b14_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).i14 = function () {
    var state = this.c15();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.i14();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).d15 = function () {
    var tmp = this.c15();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).e15 = function () {
    var state = this.c15();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.s1d();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).f15 = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.c15();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).g15 = function () {
  };
  protoOf(JobSupport).h15 = function () {
    var state = this.c15();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.y1d();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.i15(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.j15(state.n14_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).i15 = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.l14() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).j15 = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.i15(_this__u8e3s4, message) : $super.i15.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).k15 = function (handler) {
    return this.n15(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).l15 = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.n15(invokeImmediately, tmp);
  };
  protoOf(JobSupport).n15 = function (invokeImmediately, node) {
    node.d1b_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.c15();
        if (state instanceof Empty) {
          if (state.i1d_1) {
            if (this.b14_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.f1b();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
              var tmp;
              if (node.z1a()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.y1d();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.j1b(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.u18(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.j1b(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.c15();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.u18(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.n14_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).o15 = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.y9();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).p15 = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.c15();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.b14_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.f1b() == null)) {
            node.k1b();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).q15 = function () {
    return false;
  };
  protoOf(JobSupport).r15 = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.l14() : null, null, this);
    } else {
      tmp = cause;
    }
    this.t15(tmp);
  };
  protoOf(JobSupport).l14 = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).t15 = function (cause) {
    this.x15(cause);
  };
  protoOf(JobSupport).u15 = function (parentJob) {
    this.x15(parentJob);
  };
  protoOf(JobSupport).v15 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.x15(cause) && this.c16();
  };
  protoOf(JobSupport).w15 = function (cause) {
    return this.x15(cause);
  };
  protoOf(JobSupport).x15 = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.q15()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.s14(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).y15 = function () {
    var state = this.c15();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.y1d();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.n14_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
  };
  protoOf(JobSupport).y1b = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var state = this.c15();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.s14(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).q14 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.c15();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).b1c = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).z15 = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
    this_0.d1b_1 = this;
    var node = this_0;
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.c15();
        if (state instanceof Empty) {
          if (state.i1d_1) {
            if (this.b14_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.f1b();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
              var addedBeforeCancellation = list.j1b(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.j1b(node, 3);
                var latestState = this.c15();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.y1d();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.n14_1;
                }
                var rootCause = tmp_0;
                node.u18(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$1 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$1;
    if (added)
      return node;
    var tmp_2 = this.c15();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.u18(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.n14_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).t14 = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).a16 = function (cause) {
  };
  protoOf(JobSupport).b16 = function () {
    return false;
  };
  protoOf(JobSupport).c16 = function () {
    return true;
  };
  protoOf(JobSupport).d16 = function (exception) {
    return false;
  };
  protoOf(JobSupport).m14 = function (state) {
  };
  protoOf(JobSupport).s14 = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.e16() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).e16 = function () {
    return this.u14() + '{' + stateString(this, this.c15()) + '}';
  };
  protoOf(JobSupport).u14 = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).f16 = function ($completion) {
    $l$loop: while (true) {
      var state = this.c15();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.n14_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  protoOf(JobSupport).g16 = function () {
    var tmp = JobSupport$onAwaitInternalRegFunc$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = JobSupport$onAwaitInternalProcessResFunc$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE());
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.u1d_1 = list;
  }
  protoOf(InactiveNodeList).f1b = function () {
    return this.u1d_1;
  };
  protoOf(InactiveNodeList).i14 = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.u1d_1.m1d('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.c1g_1 = handler;
  }
  protoOf(InvokeOnCompletion).z1a = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).u18 = function (cause) {
    return this.c1g_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.h1g_1 = handler;
    this.i1g_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).z1a = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).u18 = function (cause) {
    if (this.i1g_1.atomicfu$compareAndSet(false, true))
      this.h1g_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.n1g_1 = continuation;
  }
  protoOf(ResumeOnCompletion).z1a = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).u18 = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.n1g_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.da(tmp$ret$0);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.e1e_1 = childJob;
  }
  protoOf(ChildHandleNode).b15 = function () {
    return this.e1b();
  };
  protoOf(ChildHandleNode).z1a = function () {
    return true;
  };
  protoOf(ChildHandleNode).u18 = function (cause) {
    return this.e1e_1.u15(this.e1b());
  };
  protoOf(ChildHandleNode).v15 = function (cause) {
    return this.e1b().v15(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.o1g_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.t1g_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).z1a = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).u18 = function (cause) {
    var state = this.e1b().c15();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = this.t1g_1;
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.n14_1;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_0.da(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var this_1 = this.t1g_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      this_1.da(tmp$ret$2);
    }
  };
  function IncompleteStateBox(state) {
    this.o1g_1 = state;
  }
  function handlesExceptionF($this) {
    var tmp = $this.a15();
    var tmp75_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp0_elvis_lhs = tmp75_safe_receiver == null ? null : tmp75_safe_receiver.e1b();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.c16())
        return true;
      var tmp_1 = parentJob.a15();
      var tmp76_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp76_safe_receiver == null ? null : tmp76_safe_receiver.e1b();
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.d14(parent);
    this.w1g_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).q15 = function () {
    return true;
  };
  protoOf(JobImpl).c16 = function () {
    return this.w1g_1;
  };
  protoOf(JobImpl).a1c = function () {
    return this.y1b(Unit_instance);
  };
  protoOf(JobImpl).z1b = function (exception) {
    return this.y1b(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.z1g();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).z1g = function () {
    var main = Dispatchers_getInstance().e1h();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.y1g();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).v15 = function (cause) {
    return false;
  };
  function supervisorScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.supervisorScope.<anonymous>' call
    var coroutine = new SupervisorCoroutine($completion.y9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function SupervisorCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(SupervisorCoroutine).v15 = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.m1h_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).k1c = function () {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.m1h_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(this_0, this);
    return this_0;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$4(timeMillis, block, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.y9(), uCont);
    this.c1i_1 = time;
  }
  protoOf(TimeoutCoroutine).q1a = function () {
    this.w15(TimeoutCancellationException_0(this.c1i_1, get_delay(this.g14_1), this));
  };
  protoOf(TimeoutCoroutine).u14 = function () {
    return protoOf(ScopeCoroutine).u14.call(this) + '(timeMillis=' + this.c1i_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.l17_1;
    var context = cont.y9();
    disposeOnCompletion(coroutine, get_delay(context).m1c(coroutine.c1i_1, coroutine, coroutine.g14_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp77_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp77_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp77_safe_receiver.n1c(tmp$ret$0);
    }
    var tmp0_elvis_lhs = tmp;
    var message = tmp0_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp0_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$4(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1h_1 = timeMillis;
    this.w1h_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            if (this.v1h_1.h1(new Long(0, 0)) <= 0)
              return null;
            this.x1h_1 = {_v: null};
            this.t9_1 = 2;
            this.s9_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.v1h_1, this);
            this.x1h_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.w1h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.t9_1 = 3;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.v9_1;
              if (e.m1h_1 === this.x1h_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).d1c = function (context) {
    return false;
  };
  protoOf(Unconfined).e1c = function (context, block) {
    var yieldContext = context.fa(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.f1i_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.f1i_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.y9();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.x18_1.d1c(context)) {
        cont.g1i(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.g1i(context.hj(yieldContext), Unit_instance);
        if (yieldContext.f1i_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.m1i_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.l1i_1 = channel;
    this.m1i_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).n1i = function () {
    return ensureNotNull(this.l1i_1);
  };
  protoOf(ChannelSegment).o1i = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).p1i = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).q1i = function (index) {
    var tmp = this.m1i_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).r1i = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.q1i(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.s1i(index);
    return this_0;
  };
  protoOf(ChannelSegment).s1i = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).t1i = function (index) {
    return this.m1i_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).u1i = function (index, value) {
    this.m1i_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).v1i = function (index, from, to) {
    return this.m1i_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).w1i = function (index, update) {
    return this.m1i_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).l19 = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.q1i(index_0);
    $l$loop: while (true) {
      var cur = this.t1i(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.v1i(index_0, cur, update)) {
          this.s1i(index_0);
          this.j1j(index_0, !isSender);
          if (isSender) {
            var tmp109_safe_receiver = this.n1i().y1i_1;
            if (tmp109_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp109_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.s1i(index_0);
          if (isSender) {
            var tmp110_safe_receiver = this.n1i().y1i_1;
            if (tmp110_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp110_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).j1j = function (index, receiver) {
    if (receiver) {
      var tmp = this.n1i();
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = this.j19_1;
      var other = get_SEGMENT_SIZE();
      var tmp$ret$1 = this_0.h3(toLong(other)).f3(toLong(index));
      tmp.k1j(tmp$ret$1);
    }
    this.l1j();
  };
  function onClosedHasNext($this) {
    $this.x1j_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.z1j_1.a1k();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.y1j_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.z1j_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.h1(this_0.b1k()) < 0) {
          segment.v1j();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.e1j_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.c1k()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.a1j_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.i3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.j3(toLong(other_0)).m1();
            if (!segment_0.j19_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp92_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, this_0, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.h1(this_0.b1k()) < 0) {
                segment_0.v1j();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.v1j();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.x1j_1 = element;
              $this.y1j_1 = null;
              var tmp96_safe_receiver = $this.z1j_1.y1i_1;
              cancellable.l18(true, tmp96_safe_receiver == null ? null : bindCancellationFun(tmp96_safe_receiver, $this.z1j_1, element));
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.v1j();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.x1j_1 = element_0;
        $this.y1j_1 = null;
        var tmp96_safe_receiver_0 = $this.z1j_1.y1i_1;
        cancellable.l18(true, tmp96_safe_receiver_0 == null ? null : bindCancellationFun(tmp96_safe_receiver_0, $this.z1j_1, element_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.e1a();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.a17();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.y1j_1);
    $this.y1j_1 = null;
    $this.x1j_1 = get_CHANNEL_CLOSED();
    var cause = $this.z1j_1.a1k();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.da(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.da(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1k_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$8).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            if (!(this.l1k_1.x1j_1 === get_NO_RECEIVE_RESULT()) && !(this.l1k_1.x1j_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.m1k_1 = true;
              this.s9_1 = 11;
              continue $sm;
            } else {
              this.s9_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.o1k_1 = this.l1k_1.z1j_1;
            var tmp_2 = this;
            tmp_2.p1k_1 = null;
            this.q1k_1 = this.o1k_1.e1j_1.kotlinx$atomicfu$value;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.s9_1 = 9;
              continue $sm;
            }

            if (this.o1k_1.c1k()) {
              var tmp_3 = this;
              tmp_3.n1k_1 = onClosedHasNext(this.l1k_1);
              this.s9_1 = 10;
              continue $sm;
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            this.r1k_1 = this.o1k_1.a1j_1.atomicfu$getAndIncrement$long();
            var tmp_4 = this;
            var this_0 = this.r1k_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.s1k_1 = this_0.i3(toLong(other));
            var tmp_5 = this;
            var this_1 = this.r1k_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.t1k_1 = this_1.j3(toLong(other_0)).m1();
            if (!this.q1k_1.j19_1.equals(this.s1k_1)) {
              this.u1k_1 = findSegmentReceive(this.o1k_1, this.s1k_1, this.q1k_1);
              if (this.u1k_1 == null) {
                this.s9_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                this.v1k_1 = this.u1k_1;
                this.s9_1 = 4;
                continue $sm;
              }
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 4:
            this.q1k_1 = this.v1k_1;
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.w1k_1 = updateCellReceive(this.o1k_1, this.q1k_1, this.t1k_1, this.r1k_1, this.p1k_1);
            if (this.w1k_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_7 = this;
              var tmp_8 = this.p1k_1;
              var tmp92_safe_receiver = (!(tmp_8 == null) ? isInterface(tmp_8, Waiter) : false) ? tmp_8 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, this.o1k_1, this.q1k_1, this.t1k_1);
              }
              this.q1k_1;
              this.t1k_1;
              this.r1k_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.w1k_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.r1k_1.h1(this.o1k_1.b1k()) < 0) {
                  this.q1k_1.v1j();
                }
                this.s9_1 = 2;
                var tmp_9 = this;
                continue $sm;
              } else {
                if (this.w1k_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_10 = this;
                  tmp_10.y1k_1 = this.q1k_1;
                  var tmp_11 = this;
                  tmp_11.z1k_1 = this.t1k_1;
                  var tmp_12 = this;
                  tmp_12.a1l_1 = this.r1k_1;
                  this.s9_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.l1k_1, this.y1k_1, this.z1k_1, this.a1l_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_13 = this;
                  this.q1k_1.v1j();
                  var tmp_14 = this.w1k_1;
                  var element = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                  this.l1k_1.x1j_1 = element;
                  tmp_13.x1k_1 = true;
                  this.s9_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_15 = this;
            return suspendResult;
          case 7:
            this.n1k_1 = this.x1k_1;
            this.s9_1 = 10;
            continue $sm;
          case 8:
            throw this.v9_1;
          case 9:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 10;
            continue $sm;
          case 10:
            this.m1k_1 = this.n1k_1;
            this.s9_1 = 11;
            continue $sm;
          case 11:
            return this.m1k_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 8) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.b1j_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp79_safe_receiver = $this.y1i_1;
      var tmp80_safe_receiver = tmp79_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp79_safe_receiver, element);
      if (tmp80_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp80_safe_receiver, $this.b1l());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp80_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.da(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.b1l();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.da(tmp$ret$3);
    }
    return cancellable.a17();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.v1j();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.da(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.da(tmp$ret$2);
          break;
        case 2:
          prepareSenderForSuspension(cancellable, $this, segment, index);
          break;
        case 4:
          if (s.h1($this.c1l()) < 0) {
            segment.v1j();
          }

          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.v1j();
          $l$block_4: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.d1j_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.z1i_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.i3(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.j3(toLong(other_0)).m1();
              if (!segment_0.j19_1.equals(id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_4;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.v1j();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.da(tmp$ret$8);
                  break $l$block_4;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.da(tmp$ret$10);
                  break $l$block_4;
                case 2:
                  if (closed) {
                    segment_0.l1j();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_4;
                  }

                  var tmp83_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp83_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension(tmp83_safe_receiver, $this, segment_0, i);
                  }

                  // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call

                  break $l$block_4;
                case 4:
                  if (s_0.h1($this.c1l()) < 0) {
                    segment_0.v1j();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_4;
                case 5:
                  segment_0.v1j();
                  continue $l$loop_0;
                case 3:
                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.e1a();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.a17();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.j1a(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp81_safe_receiver = $this.y1i_1;
    if (tmp81_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp81_safe_receiver, element, cont.y9());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.b1l(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.da(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.p1i(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.t1i(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.v1i(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.v1i(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.s1i(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.u1i(index, get_DONE_RCV());
          $this.d1l();
          tmp = 0;
        } else {
          if (!(segment.w1i(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.j1j(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.t1i(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.v1i(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.v1i(index, null, get_INTERRUPTED_SEND())) {
              segment.j1j(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.v1i(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.v1i(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.s1i(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.s1i(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.s1i(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.s1i(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.e1l_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.u1i(index, get_DONE_RCV());
          $this.d1l();
          tmp_0 = 0;
        } else {
          if (!(segment.w1i(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.j1j(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.r3(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.h1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.c1l();
      var other = $this.x1i_1;
      var tmp$ret$0 = this_0.f3(toLong(other));
      tmp = curSenders.h1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.d1f($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().h1l(element);
        var tmp86_safe_receiver = $this.y1i_1;
        tmp = tryResume0(_this__u8e3s4.i1l_1, new ChannelResult(tmp_0), tmp86_safe_receiver == null ? null : bindCancellationFunResult(tmp86_safe_receiver, $this));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.f1l(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp87_safe_receiver = $this.y1i_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp87_safe_receiver == null ? null : bindCancellationFun_0(tmp87_safe_receiver, $this));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.h1($this.b1k()) < 0) {
          segment.v1j();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.e1j_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.c1k()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.a1j_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.i3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.j3(toLong(other_0)).m1();
            if (!segment_0.j19_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp92_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.h1($this.b1k()) < 0) {
                segment_0.v1j();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.v1j();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp88_safe_receiver = $this.y1i_1;
              var onCancellation = tmp88_safe_receiver == null ? null : bindCancellationFun_0(tmp88_safe_receiver, $this);
              cancellable.l18(element, onCancellation);
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.v1j();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp88_safe_receiver_0 = $this.y1i_1;
        var onCancellation_0 = tmp88_safe_receiver_0 == null ? null : bindCancellationFun_0(tmp88_safe_receiver_0, $this);
        cancellable.l18(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.e1a();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.a17();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.j1l();
    _this__u8e3s4.j1a(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.da(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.t1i(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.z1i_1.kotlinx$atomicfu$value.r3(new Long(-1, 268435455));
      if (r.h1(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.v1i(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.v1i(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.r1i(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.t1i(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.z1i_1.kotlinx$atomicfu$value.r3(new Long(-1, 268435455));
        if (r.h1(senders) < 0) {
          if (segment.v1i(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.v1i(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.v1i(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.r1i(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_POISONED())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.v1i(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.e1l_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.u1i(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.r1i(index);
          } else {
            segment.u1i(index, get_INTERRUPTED_SEND());
            segment.j1j(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = _get_FAILED_$accessor$yt74tm_h47uk8();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.r1l($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.s1i(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.k1l_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.f1j_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.b1j_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.i3(toLong(other));
      var s = $this.b1k();
      if (s.h1(b) <= 0) {
        if (segment.j19_1.h1(id) < 0 && !(segment.r1j() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.j19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.j3(toLong(other_0)).m1();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.t1i(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.h1($this.a1j_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.v1i(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.u1i(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.u1i(index, get_INTERRUPTED_SEND());
            segment.j1j(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.t1i(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.h1($this.a1j_1.kotlinx$atomicfu$value) < 0) {
          if (segment.v1i(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.v1i(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.u1i(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.u1i(index, get_INTERRUPTED_SEND());
              segment.j1j(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.v1i(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.c1j_1.atomicfu$addAndGet$long(nAttempts).r3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.c1j_1.kotlinx$atomicfu$value.r3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.e1j_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if ($this.c1k()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        var r = $this.a1j_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r.i3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r.j3(toLong(other_0)).m1();
        if (!segment.j19_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
          var tmp92_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
          if (tmp92_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp92_safe_receiver, $this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.registerSelectForReceive.<anonymous>' call
          tmp_0 = Unit_instance;
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
          if (r.h1($this.b1k()) < 0) {
            segment.v1j();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.v1j();
          var elem = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          select.v1e(elem);
          tmp_0 = Unit_instance;
        }
        tmp$ret$0 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  }
  function onClosedSelectOnReceive($this, select) {
    select.v1e(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceive($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      throw _get_receiveException__foorc1($this);
    } else {
      tmp = selectResult;
    }
    return tmp;
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      tmp = Companion_getInstance_0().s1l($this.a1k());
    } else {
      var tmp_0 = Companion_getInstance_0();
      tmp = tmp_0.h1l((selectResult == null ? true : !(selectResult == null)) ? selectResult : THROW_CCE());
    }
    return new ChannelResult(tmp);
  }
  function BufferedChannelIterator($outer) {
    this.z1j_1 = $outer;
    this.x1j_1 = get_NO_RECEIVE_RESULT();
    this.y1j_1 = null;
  }
  protoOf(BufferedChannelIterator).t1l = function ($completion) {
    var tmp = new $hasNextCOROUTINE$8(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(BufferedChannelIterator).j1a = function (segment, index) {
    var tmp97_safe_receiver = this.y1j_1;
    if (tmp97_safe_receiver == null)
      null;
    else {
      tmp97_safe_receiver.j1a(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).o = function () {
    var result = this.x1j_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.x1j_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.z1j_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).f1l = function (element) {
    var cont = ensureNotNull(this.y1j_1);
    this.y1j_1 = null;
    this.x1j_1 = element;
    var tmp98_safe_receiver = this.z1j_1.y1i_1;
    return tryResume0(cont, true, tmp98_safe_receiver == null ? null : bindCancellationFun(tmp98_safe_receiver, this.z1j_1, element));
  };
  protoOf(BufferedChannelIterator).u1l = function () {
    var cont = ensureNotNull(this.y1j_1);
    this.y1j_1 = null;
    this.x1j_1 = get_CHANNEL_CLOSED();
    var cause = this.z1j_1.a1k();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.da(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.da(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.a1k();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var this_0 = $this.i1j_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.a1k());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.z1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.p3(60).m1()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.r3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.r3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.z1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.r3(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.z1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.p3(60).m1() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.r3(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.v1l();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.x1l()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.w1l(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.f1j_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = $this.d1j_1.kotlinx$atomicfu$value;
    if (it.j19_1.h1(lastSegment.j19_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it_0 = $this.e1j_1.kotlinx$atomicfu$value;
    if (it_0.j19_1.h1(lastSegment.j19_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.j19_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.h3(toLong(other)).f3(toLong(index));
          if (globalIndex.h1($this.c1l()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.t1i(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                segment.l1j();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.u1j();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.y1i_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.j19_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.h3(toLong(other)).f3(toLong(index));
          update_cell: while (true) {
            var state = segment.t1i(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.h1($this.c1l()) < 0)
                  break process_segments;
                if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.q1i(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.s1i(index);
                  segment.l1j();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                    segment.l1j();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.h1($this.c1l()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.e1l_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.q1i(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.s1i(index);
                      segment.l1j();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.u1j();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedSenders;
      var tmp154_subject = _get_holder__f6h5pd(this_1);
      if (tmp154_subject == null) {
        break $l$block;
      } else {
        if (!(tmp154_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var tmp_2 = _get_holder__f6h5pd(this_1);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(it, $this);
        } else {
          var tmp_3 = _get_holder__f6h5pd(this_1);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.p() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.u(i);
              resumeSenderOnCancelledChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp100_safe_receiver = undeliveredElementException;
    if (tmp100_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp100_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.j19_1;
          var other = get_SEGMENT_SIZE();
          if (this_0.h3(toLong(other)).f3(toLong(index)).h1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.t1i(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                segment.l1j();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.e1l_1);
                  segment.j1j(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.v1i(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.j1j(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.u1j();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedReceivers;
      var tmp154_subject = _get_holder__f6h5pd(this_1);
      if (tmp154_subject == null) {
        break $l$block;
      } else {
        if (!(tmp154_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var tmp = _get_holder__f6h5pd(this_1);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(it, $this);
        } else {
          var tmp_0 = _get_holder__f6h5pd(this_1);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.p() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.u(i);
              resumeReceiverOnClosedChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.k1l_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.da(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.b1l();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.da(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = _this__u8e3s4.i1l_1;
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().s1l($this.a1k()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          this_1.da(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.u1l();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance))
              _this__u8e3s4.d1f($this, get_CHANNEL_CLOSED());
            else {
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.p3(60).m1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.y1l() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.p3(60).m1();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.t1i(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.v1i(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.c1l());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.d1j_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.j19_1.h1(to.j19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.n1j()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.o1j()) {
                  cur.t4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.o1j()) {
                to.t4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.j19_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.h3(toLong(other)).h1($this.c1l()) < 0) {
        startFrom.v1j();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.j19_1.h1(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_2 = segment.j19_1;
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.h3(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        // Inline function 'kotlin.Long.times' call
        var this_3 = segment.j19_1;
        var other_1 = get_SEGMENT_SIZE();
        if (this_3.h3(toLong(other_1)).h1($this.c1l()) < 0) {
          segment.v1j();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.e1j_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.j19_1.h1(to.j19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.n1j()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.o1j()) {
                  cur.t4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.o1j()) {
                to.t4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.j19_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.h3(toLong(other)).h1($this.b1k()) < 0) {
        startFrom.v1j();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        // Inline function 'kotlin.Long.div' call
        var this_2 = _get_bufferEndCounter__2d4hee($this);
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.i3(toLong(other_0));
        tmp_1 = id.h1(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var this_3 = $this.f1j_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = this_3.kotlinx$atomicfu$value;
            if (cur_0.j19_1.h1(segment.j19_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.n1j()) {
              break $l$block_5;
            }
            if (this_3.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.o1j()) {
                cur_0.t4();
              }
              break $l$block_5;
            }
            if (segment.o1j()) {
              segment.t4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.j19_1.h1(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_4 = segment.j19_1;
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = this_4.h3(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        // Inline function 'kotlin.Long.times' call
        var this_5 = segment.j19_1;
        var other_2 = get_SEGMENT_SIZE();
        if (this_5.h3(toLong(other_2)).h1($this.b1k()) < 0) {
          segment.v1j();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.f1j_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.j19_1.h1(to.j19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.n1j()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.o1j()) {
                  cur.t4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.o1j()) {
                to.t4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.j19_1.h1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.f3(toLong(1));
        // Inline function 'kotlin.Long.times' call
        var this_1 = segment.j19_1;
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_1.h3(toLong(other));
        if ($this.b1j_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          // Inline function 'kotlin.Long.times' call
          var this_2 = segment.j19_1;
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = this_2.h3(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.g3(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.j19_1.h1(id) < 0) {
      var tmp0_elvis_lhs = segment.r1j();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.m1j()) {
        var tmp1_elvis_lhs = segment.r1j();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var this_0 = $this.f1j_1;
        var to = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = this_0.kotlinx$atomicfu$value;
          if (cur.j19_1.h1(to.j19_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!to.n1j()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (this_0.atomicfu$compareAndSet(cur, to)) {
            if (cur.o1j()) {
              cur.t4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (to.o1j()) {
            to.t4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.z1i_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.r3(new Long(-1, 268435455));
      if (curCounter.h1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.p3(60).m1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.z1i_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.a1j_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.h1(value) >= 0)
        return Unit_instance;
      if ($this.a1j_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function bindCancellationFunResult(_this__u8e3s4, $this) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.y1i_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun(_this__u8e3s4, $this, element) {
    return BufferedChannel$bindCancellationFun$lambda(_this__u8e3s4, element);
  }
  function bindCancellationFun_0(_this__u8e3s4, $this) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.y1i_1), element, context);
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceive$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceive(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceive';
    return l;
  }
  function BufferedChannel$registerSelectForReceive$ref_0() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveCatching';
    return l;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.y1i_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.y9());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($boundThis) {
    var l = function (p0, p1, p2) {
      onCancellationChannelResultImplDoNotCall($boundThis, p0, p1.a1m_1, p2);
      return Unit_instance;
    };
    l.callableName = 'onCancellationChannelResultImplDoNotCall';
    return l;
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref($boundThis) {
    var l = function (p0, p1, p2) {
      onCancellationImplDoNotCall($boundThis, p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'onCancellationImplDoNotCall';
    return l;
  }
  function $sendCOROUTINE$5(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1m_1 = _this__u8e3s4;
    this.k1m_1 = element;
  }
  protoOf($sendCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 11;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.m1m_1 = this.j1m_1;
            var tmp_1 = this;
            tmp_1.n1m_1 = this.k1m_1;
            var tmp_2 = this;
            tmp_2.o1m_1 = null;
            this.p1m_1 = this.m1m_1.d1j_1.kotlinx$atomicfu$value;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.s9_1 = 12;
              continue $sm;
            }

            this.q1m_1 = this.m1m_1.z1i_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.r1m_1 = this.q1m_1.r3(new Long(-1, 268435455));
            this.s1m_1 = _get_isClosedForSend0__kxgf9m(this.q1m_1, this.m1m_1);
            var tmp_4 = this;
            var this_0 = this.r1m_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.t1m_1 = this_0.i3(toLong(other));
            var tmp_5 = this;
            var this_1 = this.r1m_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.u1m_1 = this_1.j3(toLong(other_0)).m1();
            if (!this.p1m_1.j19_1.equals(this.t1m_1)) {
              this.v1m_1 = findSegmentSend(this.m1m_1, this.t1m_1, this.p1m_1);
              if (this.v1m_1 == null) {
                if (this.s1m_1) {
                  this.s9_1 = 10;
                  suspendResult = onClosedSend(this.j1m_1, this.k1m_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.s9_1 = 2;
                  continue $sm;
                }
              } else {
                this.w1m_1 = this.v1m_1;
                this.s9_1 = 3;
                continue $sm;
              }
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 3:
            this.p1m_1 = this.w1m_1;
            this.s9_1 = 4;
            continue $sm;
          case 4:
            this.x1m_1 = updateCellSend(this.m1m_1, this.p1m_1, this.u1m_1, this.n1m_1, this.r1m_1, this.o1m_1, this.s1m_1);
            if (this.x1m_1 === 0) {
              this.p1m_1.v1j();
              var tmp_6 = this;
              tmp_6.l1m_1 = Unit_instance;
              this.s9_1 = 13;
              continue $sm;
            } else {
              if (this.x1m_1 === 1) {
                var tmp_7 = this;
                tmp_7.l1m_1 = Unit_instance;
                this.s9_1 = 13;
                continue $sm;
              } else {
                if (this.x1m_1 === 2) {
                  if (this.s1m_1) {
                    this.p1m_1.l1j();
                    this.s9_1 = 9;
                    suspendResult = onClosedSend(this.j1m_1, this.k1m_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.s9_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.x1m_1 === 4) {
                    if (this.r1m_1.h1(this.m1m_1.c1l()) < 0) {
                      this.p1m_1.v1j();
                    }
                    this.s9_1 = 7;
                    suspendResult = onClosedSend(this.j1m_1, this.k1m_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.x1m_1 === 5) {
                      this.p1m_1.v1j();
                      this.s9_1 = 2;
                      continue $sm;
                    } else {
                      if (this.x1m_1 === 3) {
                        var tmp_8 = this;
                        tmp_8.y1m_1 = this.p1m_1;
                        var tmp_9 = this;
                        tmp_9.z1m_1 = this.u1m_1;
                        var tmp_10 = this;
                        tmp_10.a1n_1 = this.n1m_1;
                        var tmp_11 = this;
                        tmp_11.b1n_1 = this.r1m_1;
                        this.s9_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.j1m_1, this.y1m_1, this.z1m_1, this.a1n_1, this.b1n_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.s9_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.s9_1 = 2;
            continue $sm;
          case 6:
            this.l1m_1 = suspendResult;
            this.s9_1 = 13;
            continue $sm;
          case 7:
            this.l1m_1 = suspendResult;
            this.s9_1 = 13;
            continue $sm;
          case 8:
            var tmp_12 = this.o1m_1;
            var tmp83_safe_receiver = (!(tmp_12 == null) ? isInterface(tmp_12, Waiter) : false) ? tmp_12 : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp83_safe_receiver, this.m1m_1, this.p1m_1, this.u1m_1);
            }

            var tmp_13 = this;
            this.p1m_1;
            this.u1m_1;
            tmp_13.l1m_1 = Unit_instance;
            this.s9_1 = 13;
            continue $sm;
          case 9:
            this.l1m_1 = suspendResult;
            this.s9_1 = 13;
            continue $sm;
          case 10:
            this.l1m_1 = suspendResult;
            this.s9_1 = 13;
            continue $sm;
          case 11:
            throw this.v9_1;
          case 12:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 11) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1n_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 8;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.m1n_1 = this.k1n_1;
            var tmp_1 = this;
            tmp_1.n1n_1 = null;
            this.o1n_1 = this.m1n_1.e1j_1.kotlinx$atomicfu$value;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.s9_1 = 9;
              continue $sm;
            }

            if (this.m1n_1.c1k()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.k1n_1));
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 3:
            this.p1n_1 = this.m1n_1.a1j_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.p1n_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.q1n_1 = this_0.i3(toLong(other));
            var tmp_4 = this;
            var this_1 = this.p1n_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.r1n_1 = this_1.j3(toLong(other_0)).m1();
            if (!this.o1n_1.j19_1.equals(this.q1n_1)) {
              this.s1n_1 = findSegmentReceive(this.m1n_1, this.q1n_1, this.o1n_1);
              if (this.s1n_1 == null) {
                this.s9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.t1n_1 = this.s1n_1;
                this.s9_1 = 4;
                continue $sm;
              }
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 4:
            this.o1n_1 = this.t1n_1;
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.u1n_1 = updateCellReceive(this.m1n_1, this.o1n_1, this.r1n_1, this.p1n_1, this.n1n_1);
            if (this.u1n_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.n1n_1;
              var tmp92_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, this.m1n_1, this.o1n_1, this.r1n_1);
              }
              this.o1n_1;
              this.r1n_1;
              this.p1n_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.u1n_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.p1n_1.h1(this.m1n_1.b1k()) < 0) {
                  this.o1n_1.v1j();
                }
                this.s9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.u1n_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.w1n_1 = this.o1n_1;
                  var tmp_10 = this;
                  tmp_10.x1n_1 = this.r1n_1;
                  var tmp_11 = this;
                  tmp_11.y1n_1 = this.p1n_1;
                  this.s9_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.k1n_1, this.w1n_1, this.x1n_1, this.y1n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.o1n_1.v1j();
                  var tmp_13 = this.u1n_1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.v1n_1 = suspendResult;
            this.s9_1 = 7;
            continue $sm;
          case 7:
            this.l1n_1 = this.v1n_1;
            this.s9_1 = 10;
            continue $sm;
          case 8:
            throw this.v9_1;
          case 9:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 10;
            continue $sm;
          case 10:
            return this.l1n_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 8) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.x1i_1 = capacity;
    this.y1i_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x1i_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.x1i_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.z1i_1 = atomic$long$1(new Long(0, 0));
    this.a1j_1 = atomic$long$1(new Long(0, 0));
    this.b1j_1 = atomic$long$1(initialBufferEnd(this.x1i_1));
    this.c1j_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.d1j_1 = atomic$ref$1(firstSegment);
    this.e1j_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.f1j_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.y1i_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.g1j_1 = tmp_3;
    this.h1j_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.i1j_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).b1k = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.z1i_1.kotlinx$atomicfu$value.r3(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).c1l = function () {
    return this.a1j_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).z1n = function (element, $completion) {
    var tmp = new $sendCOROUTINE$5(this, element, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(BufferedChannel).a1o = function (element) {
    if (shouldSendSuspend0(this, this.z1i_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().b1o();
    var tmp$ret$4;
    $l$block_4: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_INTERRUPTED_SEND();
      var segment = this.d1j_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.z1i_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.i3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.j3(toLong(other_0)).m1();
        if (!segment.j19_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().s1l(this.b1l());
              break $l$block_4;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, waiter, closed)) {
          case 0:
            segment.v1j();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().h1l(Unit_instance);
            break $l$block_4;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().h1l(Unit_instance);
            break $l$block_4;
          case 2:
            if (closed) {
              segment.l1j();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().s1l(this.b1l());
              break $l$block_4;
            }

            var tmp83_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp83_safe_receiver, this, segment, i);
            }

            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            segment.l1j();
            tmp$ret$4 = Companion_getInstance_0().b1o();
            break $l$block_4;
          case 4:
            if (s.h1(this.c1l()) < 0) {
              segment.v1j();
            }

            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().s1l(this.b1l());
            break $l$block_4;
          case 5:
            segment.v1j();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).c1o = function (element) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
    var waiter = get_BUFFERED();
    var segment = this.d1j_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.z1i_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = s.i3(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = s.j3(toLong(other_0)).m1();
      if (!segment.j19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return Companion_getInstance_0().s1l(this.b1l());
          } else {
            continue $l$loop_0;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      switch (updateCellSend(this, segment, i, element, s, waiter, closed)) {
        case 0:
          segment.v1j();
          return Companion_getInstance_0().h1l(Unit_instance);
        case 1:
          return Companion_getInstance_0().h1l(Unit_instance);
        case 2:
          if (closed) {
            segment.l1j();
            return Companion_getInstance_0().s1l(this.b1l());
          }

          var tmp83_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp83_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp83_safe_receiver, this, segment, i);
          }

          // Inline function 'kotlin.Long.plus' call

          // Inline function 'kotlin.Long.times' call

          var this_0 = segment.j19_1;
          var other_1 = get_SEGMENT_SIZE();
          var tmp$ret$5 = this_0.h3(toLong(other_1)).f3(toLong(i));
          this.w1l(tmp$ret$5);
          return Companion_getInstance_0().h1l(Unit_instance);
        case 4:
          if (s.h1(this.c1l()) < 0) {
            segment.v1j();
          }

          return Companion_getInstance_0().s1l(this.b1l());
        case 5:
          segment.v1j();
          continue $l$loop_0;
        case 3:
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).j1l = function () {
  };
  protoOf(BufferedChannel).d1l = function () {
  };
  protoOf(BufferedChannel).d1o = function ($completion) {
    var tmp = new $receiveCOROUTINE$6(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(BufferedChannel).e1o = function () {
    var r = this.a1j_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.z1i_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_0().s1l(this.a1k());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.r3(new Long(-1, 268435455));
    if (r.h1(s) >= 0)
      return Companion_getInstance_0().b1o();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var waiter = get_INTERRUPTED_RCV();
      var segment = this.e1j_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.c1k()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_0().s1l(this.a1k());
          break $l$block_0;
        }
        var r_0 = this.a1j_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.i3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.j3(toLong(other_0)).m1();
        if (!segment.j19_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, waiter);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
          var tmp92_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp92_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp92_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var segm = segment;
          this.k1j(r_0);
          segm.l1j();
          tmp_0 = new ChannelResult(Companion_getInstance_0().b1o());
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
          if (r_0.h1(this.b1k()) < 0) {
            segment.v1j();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.v1j();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().h1l(element));
        }
        tmp$ret$2 = tmp_0.a1m_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).w1l = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.e1j_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.a1j_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.math.max' call
      // Inline function 'kotlin.Long.plus' call
      var other = this.x1i_1;
      var a = r.f3(toLong(other));
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = a.h1(b) >= 0 ? a : b;
      if (globalCellIndex.h1(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.f3(toLong(1));
      if (!this.a1j_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.i3(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.j3(toLong(other_1)).m1();
      if (!segment.j19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.h1(this.b1k()) < 0) {
          segment.v1j();
        }
      } else {
        segment.v1j();
        var tmp90_safe_receiver = this.y1i_1;
        var tmp_0;
        if (tmp90_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp90_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp91_safe_receiver = tmp_0;
        if (tmp91_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw tmp91_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).k1j = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).h1(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.c1j_1.kotlinx$atomicfu$value.r3(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.c1j_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.r3(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.c1j_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.r3(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.r3(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var this_1 = this.c1j_1;
          while (true) {
            var cur_0 = this_1.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.r3(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (this_1.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.c1j_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).f1o = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceive$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.g1j_1);
  };
  protoOf(BufferedChannel).g1o = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref_0();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.g1j_1);
  };
  protoOf(BufferedChannel).m = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).a1k = function () {
    var tmp = this.h1j_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).b1l = function () {
    var tmp0_elvis_lhs = this.a1k();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).h1o = function () {
  };
  protoOf(BufferedChannel).i1o = function (cause) {
    return this.j1o(cause, false);
  };
  protoOf(BufferedChannel).r15 = function (cause) {
    this.l1o(cause);
  };
  protoOf(BufferedChannel).l1o = function (cause) {
    return this.j1o(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).j1o = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.h1j_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.h1o();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).n1o = function (handler) {
    if (this.i1j_1.atomicfu$compareAndSet(null, handler)) {
      return Unit_instance;
    }
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.i1j_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeOnClose.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur === get_CLOSE_HANDLER_CLOSED()) {
        if (this.i1j_1.atomicfu$compareAndSet(get_CLOSE_HANDLER_CLOSED(), get_CLOSE_HANDLER_INVOKED())) {
          handler(this.a1k());
          return Unit_instance;
        }
      } else if (cur === get_CLOSE_HANDLER_INVOKED()) {
        // Inline function 'kotlin.error' call
        var message = 'Another handler was already registered and successfully invoked';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        // Inline function 'kotlin.error' call
        var message_0 = 'Another handler is already registered: ' + toString_0(cur);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
  };
  protoOf(BufferedChannel).x1l = function () {
    return false;
  };
  protoOf(BufferedChannel).v1l = function () {
    return _get_isClosedForSend0__kxgf9m(this.z1i_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).c1k = function () {
    return _get_isClosedForReceive0__f7qknl(this.z1i_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).y1l = function () {
    $l$loop: while (true) {
      var segment = this.e1j_1.kotlinx$atomicfu$value;
      var r = this.c1l();
      var s = this.b1k();
      if (s.h1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.i3(toLong(other));
      if (!segment.j19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.e1j_1.kotlinx$atomicfu$value.j19_1.h1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.v1j();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.j3(toLong(other_0)).m1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.f3(toLong(1));
      this.a1j_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp103_subject = this.z1i_1.kotlinx$atomicfu$value.p3(60).m1();
    if (tmp103_subject === 2) {
      sb.v8('closed,');
    } else if (tmp103_subject === 3) {
      sb.v8('cancelled,');
    }
    sb.v8('capacity=' + this.x1i_1 + ',');
    sb.v8('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = listOf([this.e1j_1.kotlinx$atomicfu$value, this.d1j_1.kotlinx$atomicfu$value, this.f1j_1.kotlinx$atomicfu$value]);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        if (!(element === get_NULL_SEGMENT())) {
          destination.e(element);
        }
      }
      var iterator = destination.m();
      if (!iterator.n())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.o();
      if (!iterator.n()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.j19_1;
      do {
        var e = iterator.o();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.j19_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.n());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.c1l();
    var s = this.b1k();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_1 = segment.j19_1;
          var other = get_SEGMENT_SIZE();
          var globalCellIndex = this_1.h3(toLong(other)).f3(toLong(i));
          if (globalCellIndex.h1(s) >= 0 && globalCellIndex.h1(r) >= 0)
            break append_elements;
          var cellState = segment.t1i(i);
          var element_0 = segment.q1i(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.h1(r) < 0 && globalCellIndex.h1(s) >= 0 ? 'receive' : globalCellIndex.h1(s) < 0 && globalCellIndex.h1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.h1(r) < 0 && globalCellIndex.h1(s) >= 0 ? 'onReceive' : globalCellIndex.h1(s) < 0 && globalCellIndex.h1(r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.v8('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.v8(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp0_elvis_lhs = segment.r1j();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.nd(sb.a() - 1 | 0);
    }
    sb.v8(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.e1l_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.e1l_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return toLong(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var token = _this__u8e3s4.e18(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.f18(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).f3(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).o3(60).f3(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.n1i(), 0);
  }
  function _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND_NO_WAITER();
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.o1o_1 = 2147483647;
    this.p1o_1 = 0;
    this.q1o_1 = -1;
    this.r1o_1 = -2;
    this.s1o_1 = -3;
    this.t1o_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.u1o_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp112_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp112_safe_receiver == null ? null : tmp112_safe_receiver.v1o_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.v1o_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.v1o_1, other.v1o_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.v1o_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.v1o_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.g1l_1 = new Failed();
  }
  protoOf(Companion).h1l = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).b1o = function () {
    return _ChannelResult___init__impl__siwsuf(this.g1l_1);
  };
  protoOf(Companion).s1l = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.a1m_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.a1m_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.a1m_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.a1m_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.a1m_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().u1o_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.z1o_1 = _channel;
  }
  protoOf(ChannelCoroutine).z1n = function (element, $completion) {
    return this.z1o_1.z1n(element, $completion);
  };
  protoOf(ChannelCoroutine).a1o = function (element) {
    return this.z1o_1.a1o(element);
  };
  protoOf(ChannelCoroutine).i1o = function (cause) {
    return this.z1o_1.i1o(cause);
  };
  protoOf(ChannelCoroutine).n1o = function (handler) {
    this.z1o_1.n1o(handler);
  };
  protoOf(ChannelCoroutine).d1o = function ($completion) {
    return this.z1o_1.d1o($completion);
  };
  protoOf(ChannelCoroutine).e1o = function () {
    return this.z1o_1.e1o();
  };
  protoOf(ChannelCoroutine).m = function () {
    return this.z1o_1.m();
  };
  protoOf(ChannelCoroutine).v1l = function () {
    return this.z1o_1.v1l();
  };
  protoOf(ChannelCoroutine).f1o = function () {
    return this.z1o_1.f1o();
  };
  protoOf(ChannelCoroutine).g1o = function () {
    return this.z1o_1.g1o();
  };
  protoOf(ChannelCoroutine).r15 = function (cause) {
    if (this.e15())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.l14() : null, null, this);
    } else {
      tmp = cause;
    }
    this.t15(tmp);
  };
  protoOf(ChannelCoroutine).m1o = function (cause, $super) {
    return this.s15(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).t15 = function (cause) {
    var exception = this.j15(cause);
    this.z1o_1.r15(exception);
    this.w15(exception);
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.r15(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.n1p_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.c1o(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).a1o.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp118_safe_receiver = $this.y1i_1;
      var tmp119_safe_receiver = tmp118_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp118_safe_receiver, element);
      if (tmp119_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp119_safe_receiver;
      }
    }
    return Companion_getInstance_0().h1l(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.m1p_1 = capacity;
    this.n1p_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.n1p_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).pb() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.m1p_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.m1p_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).x1l = function () {
    return this.n1p_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).z1n = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp116_safe_receiver = this.y1i_1;
      var tmp117_safe_receiver = tmp116_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp116_safe_receiver, element);
      if (tmp117_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp117_safe_receiver, this.b1l());
        throw tmp117_safe_receiver;
      }
      throw this.b1l();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).a1o = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.k15(onCompletion);
    }
    coroutine.v14(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).i14 = function () {
    return protoOf(ChannelCoroutine).i14.call(this);
  };
  protoOf(ProducerCoroutine).s1p = function (value) {
    this.z1o_1.k1o();
  };
  protoOf(ProducerCoroutine).j14 = function (value) {
    return this.s1p(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).k14 = function (cause, handled) {
    var processed = this.z1o_1.i1o(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.g14_1, cause);
    }
  };
  protoOf(ProducerCoroutine).m1o = function (cause, $super) {
    return this.s15(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function awaitClose(_this__u8e3s4, block, $completion) {
    var tmp;
    if (block === VOID) {
      tmp = awaitClose$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $awaitCloseCOROUTINE$12(_this__u8e3s4, block, $completion);
    tmp_0.u9_1 = Unit_instance;
    tmp_0.v9_1 = null;
    return tmp_0.aa();
  }
  function produce_0(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function awaitClose$lambda() {
    return Unit_instance;
  }
  function awaitClose$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $awaitCloseCOROUTINE$12(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1q_1 = _this__u8e3s4;
    this.c1q_1 = block;
  }
  protoOf($awaitCloseCOROUTINE$12).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            if (!(this.y9().fa(Key_instance_3) === this.b1q_1)) {
              var message = 'awaitClose() can only be invoked from the producer context';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.x19();
            this.b1q_1.n1o(awaitClose$lambda_0(cancellable));
            suspendResult = returnIfSuspended(cancellable.a17(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d1q_1 = suspendResult;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 5;
            this.c1q_1();
            return Unit_instance;
          case 4:
            this.t9_1 = 5;
            var t = this.v9_1;
            this.c1q_1();
            throw t;
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
  function channelFlow(block) {
    return new ChannelFlowBuilder(block);
  }
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.h1q_1 = block;
  }
  protoOf(ChannelFlowBuilder).i1q = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowBuilder(this.h1q_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowBuilder).j1q = function (scope, $completion) {
    return this.h1q_1(scope, $completion);
  };
  protoOf(ChannelFlowBuilder).toString = function () {
    return 'block[' + toString(this.h1q_1) + '] -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function flowOf(value) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(value);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.v1q_1 = block;
  }
  protoOf(SafeFlow).w1q = function (collector, $completion) {
    return this.v1q_1(collector, $completion);
  };
  function callbackFlow(block) {
    return new CallbackFlowBuilder(block);
  }
  function $collectToCOROUTINE$13(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1r_1 = _this__u8e3s4;
    this.g1r_1 = scope;
  }
  protoOf($collectToCOROUTINE$13).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = protoOf(ChannelFlowBuilder).j1q.call(this.f1r_1, this.g1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!this.g1r_1.v1l()) {
              throw IllegalStateException_init_$Create$("'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\nOtherwise, a callback/listener may leak in case of external cancellation.\nSee callbackFlow API documentation for the details.");
            }

            return Unit_instance;
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
  function CallbackFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowBuilder.call(this, block, context, capacity, onBufferOverflow);
    this.l1r_1 = block;
  }
  protoOf(CallbackFlowBuilder).j1q = function (scope, $completion) {
    var tmp = new $collectToCOROUTINE$13(this, scope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(CallbackFlowBuilder).i1q = function (context, capacity, onBufferOverflow) {
    return new CallbackFlowBuilder(this.l1r_1, context, capacity, onBufferOverflow);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1r_1 = _this__u8e3s4;
    this.v1r_1 = collector;
  }
  protoOf($collectCOROUTINE$14).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.w1r_1 = this.v1r_1;
            this.s9_1 = 1;
            suspendResult = this.w1r_1.y1r(this.u1r_1.x1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function _no_name_provided__qut3iv($value) {
    this.x1r_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$16(_this__u8e3s4, channel, consume, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function produceIn(_this__u8e3s4, scope) {
    return asChannelFlow(_this__u8e3s4).s1q(scope);
  }
  function markConsumed($this) {
    if ($this.t1s_1) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!$this.u1s_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1t_1 = _this__u8e3s4;
    this.e1t_1 = collector;
  }
  protoOf($collectCOROUTINE$17).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            if (this.d1t_1.l1q_1 === -3) {
              markConsumed(this.d1t_1);
              this.s9_1 = 2;
              suspendResult = emitAllImpl(this.e1t_1, this.d1t_1.s1s_1, this.d1t_1.t1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = protoOf(ChannelFlow).t1q.call(this.d1t_1, this.e1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.s9_1 = 3;
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.s1s_1 = channel;
    this.t1s_1 = consume;
    this.u1s_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).i1q = function (context, capacity, onBufferOverflow) {
    return new ChannelAsFlow(this.s1s_1, this.t1s_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelAsFlow).p1q = function () {
    return new ChannelAsFlow(this.s1s_1, this.t1s_1);
  };
  protoOf(ChannelAsFlow).j1q = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.s1s_1, this.t1s_1, $completion);
  };
  protoOf(ChannelAsFlow).s1q = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.l1q_1 === -3) {
      tmp = this.s1s_1;
    } else {
      tmp = protoOf(ChannelFlow).s1q.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).t1q = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelAsFlow).u1q = function () {
    return 'channel=' + toString(this.s1s_1);
  };
  function $emitAllImplCOROUTINE$16(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1s_1 = _this__u8e3s4;
    this.j1s_1 = channel;
    this.k1s_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$16).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 9;
            ensureActive_1(this.i1s_1);
            this.l1s_1 = null;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 7;
            this.t9_1 = 6;
            this.n1s_1 = this.j1s_1.m();
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            suspendResult = this.n1s_1.t1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.s9_1 = 5;
              continue $sm;
            }

            this.o1s_1 = this.n1s_1.o();
            this.s9_1 = 4;
            suspendResult = this.i1s_1.y1r(this.o1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s9_1 = 2;
            continue $sm;
          case 5:
            this.m1s_1 = Unit_instance;
            this.t9_1 = 9;
            this.s9_1 = 8;
            continue $sm;
          case 6:
            this.t9_1 = 7;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof Error) {
              var e = this.v9_1;
              var tmp_1 = this;
              this.l1s_1 = e;
              throw e;
            } else {
              throw this.v9_1;
            }

          case 7:
            this.t9_1 = 9;
            var t = this.v9_1;
            if (this.k1s_1) {
              cancelConsumed(this.j1s_1, this.l1s_1);
            }

            throw t;
          case 8:
            this.t9_1 = 9;
            if (this.k1s_1) {
              cancelConsumed(this.j1s_1, this.l1s_1);
            }

            return Unit_instance;
          case 9:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 9) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$18(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1t_1 = _this__u8e3s4;
    this.o1t_1 = collector;
  }
  protoOf($collectCOROUTINE$18).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.p1t_1 = new SafeCollector(this.o1t_1, this.y9());
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            suspendResult = this.n1t_1.w1q(this.p1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q1t_1 = suspendResult;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 5;
            this.p1t_1.ca();
            return Unit_instance;
          case 4:
            this.t9_1 = 5;
            var t = this.v9_1;
            this.p1t_1.ca();
            throw t;
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).t1q = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$18(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function SharedFlow() {
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === 0 || capacity === -3) && onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.i1u_1;
    var b = $this.h1u_1;
    return a.h1(b) <= 0 ? a : b;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.j1u_1;
    return this_0.f3(toLong(other)).g3($this.h1u_1).m1();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.j1u_1 + $this.k1u_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.j1u_1;
    return this_0.f3(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.j1u_1;
    var this_1 = this_0.f3(toLong(other));
    var other_0 = $this.k1u_1;
    return this_1.f3(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.m1u_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.j1u_1 >= $this.e1u_1 && $this.i1u_1.h1($this.h1u_1) <= 0) {
      switch ($this.f1u_1.z2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    enqueueLocked($this, value);
    $this.j1u_1 = $this.j1u_1 + 1 | 0;
    if ($this.j1u_1 > $this.e1u_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.d1u_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.h1u_1.f3(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.i1u_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.d1u_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.j1u_1 = $this.j1u_1 + 1 | 0;
    if ($this.j1u_1 > $this.d1u_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.j1u_1;
    tmp.i1u_1 = this_0.f3(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.g1u_1), _get_head__d7jo8b($this), null);
    $this.j1u_1 = $this.j1u_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).f3(toLong(1));
    if ($this.h1u_1.h1(newHead) < 0)
      $this.h1u_1 = newHead;
    if ($this.i1u_1.h1(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.m1u_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.l1u_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.p1u_1.h1(new Long(0, 0)) >= 0 && element.p1u_1.h1(newHead) < 0) {
              element.p1u_1 = newHead;
            }
          }
        }
      }
    }
    $this.i1u_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.g1u_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).f3(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.g1u_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.f3(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.f3(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.da(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.Long.plus' call
      var this_0 = _get_head__d7jo8b($this);
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = this_0.f3(toLong(other));
      var this_1 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_1);
      $this.k1u_1 = $this.k1u_1 + 1 | 0;
      if ($this.e1u_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = this_1;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
        r.da(tmp$ret$8);
      }
    }
    return cancellable.a17();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.s1u_1.h1(_get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.g1u_1);
    if (!(getBufferAt(buffer, emitter.s1u_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.s1u_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.h1(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.h1(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.f3(new Long(1, 0));
        setBufferAt(ensureNotNull($this.g1u_1), index, null);
      }
       while (inductionVariable.h1(newHead) < 0);
    $this.h1u_1 = newReplayIndex;
    $this.i1u_1 = newMinCollectorIndex;
    $this.j1u_1 = newBufferEndIndex.g3(newHead).m1();
    $this.k1u_1 = newQueueEndIndex.g3(newBufferEndIndex).m1();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.e1u_1 === 0 && $this.k1u_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.g1u_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.k1u_1 > 0) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = _get_head__d7jo8b($this);
        var other = _get_totalSize__xhdb3o($this);
        var tmp$ret$1 = this_0.f3(toLong(other)).g3(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.k1u_1 = $this.k1u_1 - 1 | 0;
      // Inline function 'kotlin.Long.plus' call
      var this_1 = _get_head__d7jo8b($this);
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = this_1.f3(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.h1(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.p1u_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.p1u_1 = index.f3(toLong(1));
      resumes = $this.v1u(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.da(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.p1u_1;
    if (index.h1(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.e1u_1 > 0)
      return new Long(-1, -1);
    if (index.h1(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.k1u_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.g1u_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.t1u_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.h1(new Long(0, 0)) < 0) {
        slot.q1u_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.da(tmp$ret$0);
        break $l$block;
      }
      slot.q1u_1 = cancellable;
    }
    return cancellable.a17();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.m1u_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.l1u_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.q1u_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).h1(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var _unary__edvuaz = resumeCount;
              resumeCount = _unary__edvuaz + 1 | 0;
              tmp_1[_unary__edvuaz] = cont;
              element.q1u_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.r1u_1 = flow;
    this.s1u_1 = index;
    this.t1u_1 = value;
    this.u1u_1 = cont;
  }
  protoOf(Emitter).v18 = function () {
    return cancelEmitter(this.r1u_1, this);
  };
  function $collectCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1v_1 = _this__u8e3s4;
    this.f1v_1 = collector;
  }
  protoOf($collectCOROUTINE$19).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 13;
            this.g1v_1 = this.e1v_1.k1v();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 12;
            var tmp_0 = this.f1v_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.s9_1 = 2;
              suspendResult = this.f1v_1.n1v(this);
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
            var tmp_1 = this;
            tmp_1.i1v_1 = this.y9().fa(Key_instance_3);
            this.s9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.s9_1 = 10;
              continue $sm;
            }

            this.s9_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.s9_1 = 8;
              continue $sm;
            }

            this.j1v_1 = tryTakeValue(this.e1v_1, this.g1v_1);
            if (!(this.j1v_1 === get_NO_VALUE())) {
              this.s9_1 = 8;
              continue $sm;
            } else {
              this.s9_1 = 6;
              continue $sm;
            }

          case 6:
            this.s9_1 = 7;
            suspendResult = awaitValue(this.e1v_1, this.g1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.s9_1 = 5;
            continue $sm;
          case 8:
            var tmp121_safe_receiver = this.i1v_1;
            if (tmp121_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp121_safe_receiver);
            }

            this.s9_1 = 9;
            var tmp_2 = this.j1v_1;
            suspendResult = this.f1v_1.y1r((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.s9_1 = 4;
            continue $sm;
          case 10:
            this.h1v_1 = Unit_instance;
            this.t9_1 = 13;
            this.s9_1 = 11;
            continue $sm;
          case 11:
            this.t9_1 = 13;
            this.e1v_1.o1v(this.g1v_1);
            return Unit_instance;
          case 12:
            this.t9_1 = 13;
            var t = this.v9_1;
            this.e1v_1.o1v(this.g1v_1);
            throw t;
          case 13:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 13) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.d1u_1 = replay;
    this.e1u_1 = bufferCapacity;
    this.f1u_1 = onBufferOverflow;
    this.g1u_1 = null;
    this.h1u_1 = new Long(0, 0);
    this.i1u_1 = new Long(0, 0);
    this.j1u_1 = 0;
    this.k1u_1 = 0;
  }
  protoOf(SharedFlowImpl).p1v = function () {
    var tmp = ensureNotNull(this.g1u_1);
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.h1u_1;
    var other = _get_replaySize__dxgnb1(this);
    var tmp$ret$1 = this_0.f3(toLong(other)).g3(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).y1t = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$19(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SharedFlowImpl).t1q = function (collector, $completion) {
    return this.y1t(collector, $completion);
  };
  protoOf(SharedFlowImpl).v1t = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.da(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).y1r = function (value, $completion) {
    if (this.v1t(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).q1v = function () {
    var index = this.h1u_1;
    if (index.h1(this.i1u_1) < 0)
      this.i1u_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).v1u = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.h1(this.i1u_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.j1u_1;
    var newMinCollectorIndex = head.f3(toLong(other));
    if (this.e1u_1 === 0 && this.k1u_1 > 0) {
      newMinCollectorIndex = newMinCollectorIndex.k3();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.m1u_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = this.l1u_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.p1u_1.h1(new Long(0, 0)) >= 0 && element.p1u_1.h1(newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.p1u_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.h1(this.i1u_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.m1u_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.g3(newMinCollectorIndex).m1();
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.k1u_1;
      var b = this.e1u_1 - newBufferSize0 | 0;
      tmp = Math.min(a, b);
    } else {
      tmp = this.k1u_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var this_0 = newBufferEndIndex;
    var other_0 = this.k1u_1;
    var newQueueEndIndex = this_0.f3(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.g1u_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.h1(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.f3(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var _unary__edvuaz = resumeCount;
            resumeCount = _unary__edvuaz + 1 | 0;
            tmp_0[_unary__edvuaz] = emitter.u1u_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.t1u_1);
            newBufferEndIndex = newBufferEndIndex.k3();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.h1(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.g3(head).m1();
    if (this.m1u_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = this.h1u_1;
    // Inline function 'kotlin.Long.minus' call
    var this_1 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a_1 = this.d1u_1;
    var other_1 = Math.min(a_1, newBufferSize1);
    var b_0 = this_1.g3(toLong(other_1));
    var newReplayIndex = a_0.h1(b_0) >= 0 ? a_0 : b_0;
    if (this.e1u_1 === 0 && newReplayIndex.h1(newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.g1u_1), newReplayIndex), get_NO_VALUE())) {
      newBufferEndIndex = newBufferEndIndex.k3();
      newReplayIndex = newReplayIndex.k3();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).r1v = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).s1v = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(SharedFlowImpl).x1t = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.i1u_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    return Unit_instance;
  };
  protoOf(SharedFlowImpl).q1q = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.p1u_1 = new Long(-1, -1);
    this.q1u_1 = null;
  }
  protoOf(SharedFlowSlot).t1v = function (flow) {
    if (this.p1u_1.h1(new Long(0, 0)) >= 0)
      return false;
    this.p1u_1 = flow.q1v();
    return true;
  };
  protoOf(SharedFlowSlot).u1v = function (flow) {
    return this.t1v(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).v1v = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.p1u_1;
    this.p1u_1 = new Long(-1, -1);
    this.q1u_1 = null;
    return flow.v1u(oldIndex);
  };
  protoOf(SharedFlowSlot).w1v = function (flow) {
    return this.v1v(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.m1() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.m1() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.x1v_1 = new StartedEagerly();
    this.y1v_1 = new StartedLazily();
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  var SharingCommand_START_instance;
  var SharingCommand_STOP_instance;
  var SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance;
  var SharingCommand_entriesInitialized;
  function SharingCommand_initEntries() {
    if (SharingCommand_entriesInitialized)
      return Unit_instance;
    SharingCommand_entriesInitialized = true;
    SharingCommand_START_instance = new SharingCommand('START', 0);
    SharingCommand_STOP_instance = new SharingCommand('STOP', 1);
    SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance = new SharingCommand('STOP_AND_RESET_REPLAY_CACHE', 2);
  }
  function SharingCommand(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StartedEagerly() {
  }
  protoOf(StartedEagerly).z1v = function (subscriptionCount) {
    return flowOf(SharingCommand_START_getInstance());
  };
  protoOf(StartedEagerly).toString = function () {
    return 'SharingStarted.Eagerly';
  };
  function StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation) {
    this.i1w_1 = $started;
    this.j1w_1 = $this_flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda$slambda).l1w = function (count, $completion) {
    var tmp = this.m1w(count, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StartedLazily$command$slambda$slambda).ma = function (p1, $completion) {
    return this.l1w((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            if (this.k1w_1 > 0 && !this.i1w_1._v) {
              this.i1w_1._v = true;
              this.s9_1 = 1;
              suspendResult = this.j1w_1.y1r(SharingCommand_START_getInstance(), this);
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
  protoOf(StartedLazily$command$slambda$slambda).m1w = function (count, completion) {
    var i = new StartedLazily$command$slambda$slambda(this.i1w_1, this.j1w_1, completion);
    i.k1w_1 = count;
    return i;
  };
  function StartedLazily$command$slambda$slambda_0($started, $this_flow, resultContinuation) {
    var i = new StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation);
    var l = function (count, $completion) {
      return i.l1w(count, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.n1w_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.n1w_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.n1w_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function StartedLazily$command$slambda($subscriptionCount, resultContinuation) {
    this.w1w_1 = $subscriptionCount;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda).z1w = function ($this$flow, $completion) {
    var tmp = this.a1x($this$flow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StartedLazily$command$slambda).ma = function (p1, $completion) {
    return this.z1w((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.y1w_1 = {_v: false};
            this.s9_1 = 1;
            var tmp_0 = StartedLazily$command$slambda$slambda_0(this.y1w_1, this.x1w_1, null);
            suspendResult = this.w1w_1.y1t(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(StartedLazily$command$slambda).a1x = function ($this$flow, completion) {
    var i = new StartedLazily$command$slambda(this.w1w_1, completion);
    i.x1w_1 = $this$flow;
    return i;
  };
  function StartedLazily$command$slambda_0($subscriptionCount, resultContinuation) {
    var i = new StartedLazily$command$slambda($subscriptionCount, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.z1w($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StartedLazily() {
  }
  protoOf(StartedLazily).z1v = function (subscriptionCount) {
    return flow(StartedLazily$command$slambda_0(subscriptionCount, null));
  };
  protoOf(StartedLazily).toString = function () {
    return 'SharingStarted.Lazily';
  };
  function SharingCommand_START_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_START_instance;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function StateFlow() {
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.f1x_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.f1x_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.g1x_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.g1x_1 = curSequence;
    } else {
      $this.g1x_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.l1u_1;
    while (true) {
      var tmp127_safe_receiver = curSlots;
      if (tmp127_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp127_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp127_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.i1x();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.g1x_1 === curSequence) {
        $this.g1x_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.g1x_1;
      curSlots = $this.l1u_1;
    }
  }
  function $collectCOROUTINE$20(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1x_1 = _this__u8e3s4;
    this.s1x_1 = collector;
  }
  protoOf($collectCOROUTINE$20).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 12;
            this.t1x_1 = this.r1x_1.k1v();
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 11;
            var tmp_0 = this.s1x_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.s9_1 = 2;
              suspendResult = this.s1x_1.n1v(this);
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
            var tmp_1 = this;
            tmp_1.v1x_1 = this.y9().fa(Key_instance_3);
            this.w1x_1 = null;
            this.s9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.s9_1 = 9;
              continue $sm;
            }

            this.x1x_1 = this.r1x_1.f1x_1.kotlinx$atomicfu$value;
            var tmp129_safe_receiver = this.v1x_1;
            if (tmp129_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp129_safe_receiver);
            }

            if (this.w1x_1 == null || !equals(this.w1x_1, this.x1x_1)) {
              this.s9_1 = 5;
              var this_0 = get_NULL();
              var value = this.x1x_1;
              var tmp_2;
              if (value === this_0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.s1x_1.y1r(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 6;
              continue $sm;
            }

          case 5:
            this.w1x_1 = this.x1x_1;
            this.s9_1 = 6;
            continue $sm;
          case 6:
            if (!this.t1x_1.z1x()) {
              this.s9_1 = 7;
              suspendResult = this.t1x_1.y1x(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 8;
              continue $sm;
            }

          case 7:
            this.s9_1 = 8;
            continue $sm;
          case 8:
            this.s9_1 = 4;
            continue $sm;
          case 9:
            this.u1x_1 = Unit_instance;
            this.t9_1 = 12;
            this.s9_1 = 10;
            continue $sm;
          case 10:
            this.t9_1 = 12;
            this.r1x_1.o1v(this.t1x_1);
            return Unit_instance;
          case 11:
            this.t9_1 = 12;
            var t = this.v9_1;
            this.r1x_1.o1v(this.t1x_1);
            throw t;
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
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.f1x_1 = atomic$ref$1(initialState);
    this.g1x_1 = 0;
  }
  protoOf(StateFlowImpl).a1y = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).c1 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.f1x_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).b1y = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).v1t = function (value) {
    this.a1y(value);
    return true;
  };
  protoOf(StateFlowImpl).y1r = function (value, $completion) {
    this.a1y(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).x1t = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).y1t = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$20(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StateFlowImpl).t1q = function (collector, $completion) {
    return this.y1t(collector, $completion);
  };
  protoOf(StateFlowImpl).r1v = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).s1v = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(StateFlowImpl).q1q = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.h1x_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).c1y = function (flow) {
    if (!(get_value(this.h1x_1) == null))
      return false;
    set_value(this.h1x_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).u1v = function (flow) {
    return this.c1y(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).d1y = function (flow) {
    set_value(this.h1x_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).w1v = function (flow) {
    return this.d1y(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).i1x = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.h1x_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.h1x_1.f1y(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.h1x_1.f1y(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.da(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).z1x = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.h1x_1.g1y(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).y1x = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.h1x_1.f1y(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.da(tmp$ret$1);
    }
    return cancellable.a17();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) || capacity === -2) && onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance())) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.l1u_1 = null;
    this.m1u_1 = 0;
    this.n1u_1 = 0;
    this.o1u_1 = null;
  }
  protoOf(AbstractSharedFlow).w1t = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this.o1u_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SubscriptionCountStateFlow(this.m1u_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this.o1u_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractSharedFlow).k1v = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.l1u_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.s1v(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.l1u_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.m1u_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.l1u_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.n1u_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.r1v();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).u1v(this))
        break $l$loop;
    }
    this.n1u_1 = index;
    this.m1u_1 = this.m1u_1 + 1 | 0;
    subscriptionCount = this.o1u_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.t1y(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).o1v = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.m1u_1 = this.m1u_1 - 1 | 0;
    subscriptionCount = this.o1u_1;
    if (this.m1u_1 === 0)
      this.n1u_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).w1v(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.da(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.t1y(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, 2147483647, BufferOverflow_DROP_OLDEST_getInstance());
    this.v1t(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).c1 = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    return this.p1v();
  };
  protoOf(SubscriptionCountStateFlow).t1y = function (delta) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    return this.v1t(this.p1v() + delta | 0);
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).i1q = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.b1z_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).p1q = function () {
    return this.b1z_1;
  };
  protoOf(ChannelFlowOperatorImpl).c1z = function (collector, $completion) {
    return this.b1z_1.t1q(collector, $completion);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.l1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).n1z = function (it, $completion) {
    var tmp = this.o1z(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ma = function (p1, $completion) {
    return this.n1z((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.l1z_1.j1q(this.m1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).o1z = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.l1z_1, completion);
    i.m1z_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.n1z(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.x1z_1 = $collector;
    this.y1z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).a20 = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlow$collect$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = emitAll(this.x1z_1, this.y1z_1.s1q(this.z1z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ChannelFlow$collect$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.x1z_1, this.y1z_1, completion);
    i.z1z_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.a20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.k1q_1 = context;
    this.l1q_1 = capacity;
    this.m1q_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).n1q = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).o1q = function () {
    return this.l1q_1 === -3 ? -2 : this.l1q_1;
  };
  protoOf(ChannelFlow).p1q = function () {
    return null;
  };
  protoOf(ChannelFlow).q1q = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.hj(this.k1q_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.l1q_1 === -3) {
        tmp = capacity;
      } else if (capacity === -3) {
        tmp = this.l1q_1;
      } else if (this.l1q_1 === -2) {
        tmp = capacity;
      } else if (capacity === -2) {
        tmp = this.l1q_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.l1q_1 + capacity | 0;
        tmp = sum >= 0 ? sum : 2147483647;
      }
      newCapacity = tmp;
      newOverflow = this.m1q_1;
    }
    if (equals(newContext, this.k1q_1) && newCapacity === this.l1q_1 && newOverflow.equals(this.m1q_1))
      return this;
    return this.i1q(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).s1q = function (scope) {
    return produce(scope, this.k1q_1, this.o1q(), this.m1q_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.n1q());
  };
  protoOf(ChannelFlow).t1q = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).u1q = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp134_safe_receiver = this.u1q();
    if (tmp134_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.e(tmp134_safe_receiver);
    }
    if (!(this.k1q_1 === EmptyCoroutineContext_getInstance())) {
      props.e('context=' + toString(this.k1q_1));
    }
    if (!(this.l1q_1 === -3)) {
      props.e('capacity=' + this.l1q_1);
    }
    if (!this.m1q_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.e('onBufferOverflow=' + this.m1q_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.y9();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.k20_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).m20 = function (it, $completion) {
    var tmp = this.n20(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).ma = function (p1, $completion) {
    return this.m20((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.k20_1.c1z(this.l20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).n20 = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.k20_1, completion);
    i.l20_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.m20(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$21(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w20_1 = _this__u8e3s4;
    this.x20_1 = collector;
  }
  protoOf($collectCOROUTINE$21).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 7;
            if (this.w20_1.l1q_1 === -3) {
              var tmp_0 = this;
              tmp_0.y20_1 = this.y9();
              this.z20_1 = newCoroutineContext_0(this.y20_1, this.w20_1.k1q_1);
              if (equals(this.z20_1, this.y20_1)) {
                this.s9_1 = 6;
                suspendResult = this.w20_1.c1z(this.x20_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 1;
                continue $sm;
              }
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

          case 1:
            if (equals(this.z20_1.fa(Key_instance), this.y20_1.fa(Key_instance))) {
              this.s9_1 = 5;
              suspendResult = collectWithContextUndispatched(this.w20_1, this.x20_1, this.z20_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 2:
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.s9_1 = 4;
            suspendResult = protoOf(ChannelFlow).t1q.call(this.w20_1, this.x20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            return Unit_instance;
          case 6:
            return Unit_instance;
          case 7:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 7) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.b1z_1 = flow;
  }
  protoOf(ChannelFlowOperator).j1q = function (scope, $completion) {
    return this.c1z(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).t1q = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$21(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return toString(this.b1z_1) + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = _this__u8e3s4 instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var completion = new StackFrameContinuation($completion, newContext);
    return startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, value, completion);
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.i21_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).k21 = function (it, $completion) {
    var tmp = this.l21(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).ma = function (p1, $completion) {
    return this.k21((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.i21_1.y1r(this.j21_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).l21 = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.i21_1, completion);
    i.j21_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.k21(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.m21_1 = emitContext;
    this.n21_1 = threadContextElements(this.m21_1);
    var tmp = this;
    tmp.o21_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).y1r = function (value, $completion) {
    return withContextUndispatched(this.m21_1, value, this.n21_1, this.o21_1, $completion);
  };
  function StackFrameContinuation(uCont, context) {
    this.p21_1 = uCont;
    this.q21_1 = context;
  }
  protoOf(StackFrameContinuation).y9 = function () {
    return this.q21_1;
  };
  protoOf(StackFrameContinuation).da = function (result) {
    this.p21_1.da(result);
  };
  function asChannelFlow(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ChannelFlow ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? new ChannelFlowOperatorImpl(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function scopedFlow(block) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(block);
  }
  function flowScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.flow.internal.flowScope.<anonymous>' call
    var coroutine = new FlowCoroutine($completion.y9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).v15 = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.x15(cause);
  };
  function scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation) {
    this.d22_1 = $block;
    this.e22_1 = $$this$flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(scopedFlow$o$collect$slambda).a20 = function ($this$flowScope, $completion) {
    var tmp = this.b20($this$flowScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(scopedFlow$o$collect$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(scopedFlow$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.d22_1(this.f22_1, this.e22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(scopedFlow$o$collect$slambda).b20 = function ($this$flowScope, completion) {
    var i = new scopedFlow$o$collect$slambda(this.d22_1, this.e22_1, completion);
    i.f22_1 = $this$flowScope;
    return i;
  };
  function scopedFlow$o$collect$slambda_0($block, $$this$flow, resultContinuation) {
    var i = new scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.a20($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$22(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o22_1 = _this__u8e3s4;
    this.p22_1 = collector;
  }
  protoOf($collectCOROUTINE$22).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.q22_1 = this.p22_1;
            this.s9_1 = 1;
            suspendResult = flowScope(scopedFlow$o$collect$slambda_0(this.o22_1.r22_1, this.q22_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function _no_name_provided__qut3iv_0($block) {
    this.r22_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_0).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$22(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_0).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.s22_1 === owner))
      throw _this__u8e3s4;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.b23_1 = this$0;
    this.c23_1 = $collector;
    this.d23_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.b23_1.j23_1(this.c23_1, this.d23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.b23_1, this.c23_1, this.d23_1, completion);
    i.e23_1 = $this$launch;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.s23_1 = $previousFlow;
    this.t23_1 = $this_coroutineScope;
    this.u23_1 = this$0;
    this.v23_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).k21 = function (value, $completion) {
    var tmp = this.l21(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).ma = function (p1, $completion) {
    return this.k21((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.x23_1 = this.s23_1._v;
            if (this.x23_1 == null) {
              this.y23_1 = null;
              this.s9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.z23_1 = this.x23_1;
              var tmp_1 = this;
              tmp_1.a24_1 = this.z23_1;
              this.a24_1.r15(new ChildCancelledException());
              this.s9_1 = 1;
              suspendResult = this.a24_1.o15(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.y23_1 = this.z23_1;
            this.s9_1 = 2;
            continue $sm;
          case 2:
            var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
            this.s23_1._v = launch(this.t23_1, VOID, tmp_2, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.u23_1, this.v23_1, this.w23_1, null));
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).l21 = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.s23_1, this.t23_1, this.u23_1, this.v23_1, completion);
    i.w23_1 = value;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.k21(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.b24_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.b24_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.b24_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.k24_1 = this$0;
    this.l24_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).a20 = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.n24_1 = {_v: null};
            this.s9_1 = 1;
            var tmp_0 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(this.n24_1, this.m24_1, this.k24_1, this.l24_1, null);
            suspendResult = this.k24_1.b1z_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.k24_1, this.l24_1, completion);
    i.m24_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.a20($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.j23_1 = transform;
  }
  protoOf(ChannelFlowTransformLatest).i1q = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowTransformLatest(this.j23_1, this.b1z_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowTransformLatest).o24 = function (collector, $completion) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $completion);
  };
  protoOf(ChannelFlowTransformLatest).c1z = function (collector, $completion) {
    return this.o24(collector, $completion);
  };
  function NopCollector() {
  }
  protoOf(NopCollector).p24 = function (value, $completion) {
    return Unit_instance;
  };
  protoOf(NopCollector).y1r = function (value, $completion) {
    return this.p24((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.gj(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.t1t_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.s1t_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.b15();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.b1();
      var collectElement = $this_checkContext.s1t_1.fa(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.q24_1 = channel;
  }
  protoOf(SendingCollector).y1r = function (value, $completion) {
    return this.q24_1.z1n(value, $completion);
  };
  function buffer(_this__u8e3s4, capacity, onBufferOverflow) {
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(capacity >= 0 || capacity === -2 || capacity === -1)) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message = 'Buffer size should be non-negative, BUFFERED, or CONFLATED, but was ' + capacity;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(capacity === -1) || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message_0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var capacity_0 = capacity;
    var onBufferOverflow_0 = onBufferOverflow;
    if (capacity_0 === -1) {
      capacity_0 = 0;
      onBufferOverflow_0 = BufferOverflow_DROP_OLDEST_getInstance();
    }
    var tmp;
    if (isInterface(_this__u8e3s4, FusibleFlow)) {
      tmp = _this__u8e3s4.r1q(VOID, capacity_0, onBufferOverflow_0);
    } else {
      tmp = new ChannelFlowOperatorImpl(_this__u8e3s4, VOID, capacity_0, onBufferOverflow_0);
    }
    return tmp;
  }
  function debounce(_this__u8e3s4, timeoutMillis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(timeoutMillis.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.debounce.<anonymous>' call
      var message = 'Debounce timeout should not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (timeoutMillis.equals(new Long(0, 0)))
      return _this__u8e3s4;
    return debounceInternal(_this__u8e3s4, debounce$lambda(timeoutMillis));
  }
  function debounceInternal(_this__u8e3s4, timeoutMillisSelector) {
    return scopedFlow(debounceInternal$slambda_0(timeoutMillisSelector, _this__u8e3s4, null));
  }
  function debounce$lambda($timeoutMillis) {
    return function (it) {
      return $timeoutMillis;
    };
  }
  function debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation) {
    this.z24_1 = $this_produce;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda$slambda).k21 = function (value, $completion) {
    var tmp = this.l21(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(debounceInternal$slambda$slambda$slambda).ma = function (p1, $completion) {
    return this.k21((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp0_elvis_lhs = this.a25_1;
            suspendResult = this.z24_1.z1n(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(debounceInternal$slambda$slambda$slambda).l21 = function (value, completion) {
    var i = new debounceInternal$slambda$slambda$slambda(this.z24_1, completion);
    i.a25_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda$slambda_0($this_produce, resultContinuation) {
    var i = new debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation);
    var l = function (value, $completion) {
      return i.k21(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.b25_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).y1r = function (value, $completion) {
    return this.b25_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x3 = function () {
    return this.b25_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.x3());
  };
  function debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation) {
    this.k25_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda).m25 = function ($this$produce, $completion) {
    var tmp = this.n25($this$produce, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(debounceInternal$slambda$slambda).ma = function (p1, $completion) {
    return this.m25((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = debounceInternal$slambda$slambda$slambda_0(this.l25_1, null);
            suspendResult = this.k25_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(debounceInternal$slambda$slambda).n25 = function ($this$produce, completion) {
    var i = new debounceInternal$slambda$slambda(this.k25_1, completion);
    i.l25_1 = $this$produce;
    return i;
  };
  function debounceInternal$slambda$slambda_0($this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.m25($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation) {
    this.w25_1 = $downstream;
    this.x25_1 = $lastValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_1).y25 = function ($completion) {
    var tmp = this.z25($completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(debounceInternal$slambda$slambda_1).ib = function ($completion) {
    return this.y25($completion);
  };
  protoOf(debounceInternal$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var this_0 = get_NULL();
            var value = this.x25_1._v;
            var tmp_0;
            if (value === this_0) {
              tmp_0 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
            } else {
              tmp_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
            }

            suspendResult = this.w25_1.y1r(tmp_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x25_1._v = null;
            return Unit_instance;
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
  protoOf(debounceInternal$slambda$slambda_1).z25 = function (completion) {
    return new debounceInternal$slambda$slambda_1(this.w25_1, this.x25_1, completion);
  };
  function debounceInternal$slambda$slambda_2($downstream, $lastValue, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation);
    var l = function ($completion) {
      return i.y25($completion);
    };
    l.$arity = 0;
    return l;
  }
  function debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation) {
    this.i26_1 = $lastValue;
    this.j26_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_3).n26 = function (value, $completion) {
    var tmp = this.o26(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(debounceInternal$slambda$slambda_3).ma = function (p1, $completion) {
    return this.n26(p1 instanceof ChannelResult ? p1.a1m_1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.k26_1;
            var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
            if (!(tmp_1 instanceof Failed)) {
              var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
              var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
              this.i26_1._v = it;
            }

            tmp_0.l26_1 = this_0;
            var tmp_3 = _ChannelResult___get_holder__impl__pm9gzw(this.l26_1);
            if (tmp_3 instanceof Failed) {
              var tmp_4 = this;
              tmp_4.m26_1 = ChannelResult__exceptionOrNull_impl_16ei30(this.l26_1);
              var tmp140_safe_receiver = this.m26_1;
              if (tmp140_safe_receiver == null)
                null;
              else {
                throw tmp140_safe_receiver;
              }
              if (!(this.i26_1._v == null)) {
                this.s9_1 = 1;
                var this_1 = get_NULL();
                var value = this.i26_1._v;
                var tmp_5;
                if (value === this_1) {
                  tmp_5 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_5 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
                }
                suspendResult = this.j26_1.y1r(tmp_5, this);
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
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.i26_1._v = get_DONE();
            this.s9_1 = 3;
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
  protoOf(debounceInternal$slambda$slambda_3).o26 = function (value, completion) {
    var i = new debounceInternal$slambda$slambda_3(this.i26_1, this.j26_1, completion);
    i.k26_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda_4($lastValue, $downstream, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation);
    var l = function (value, $completion) {
      return i.n26(value.a1m_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    this.x26_1 = $timeoutMillisSelector;
    this.y26_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda).g27 = function ($this$scopedFlow, downstream, $completion) {
    var tmp = this.h27($this$scopedFlow, downstream, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(debounceInternal$slambda).i27 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.g27(tmp, (!(p2 == null) ? isInterface(p2, FlowCollector) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 7;
            var tmp_0 = this;
            tmp_0.b27_1 = produce_0(this.z26_1, VOID, VOID, debounceInternal$slambda$slambda_0(this.y26_1, null));
            this.c27_1 = {_v: null};
            this.s9_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.c27_1._v === get_DONE())) {
              this.s9_1 = 6;
              continue $sm;
            }

            this.d27_1 = {_v: new Long(0, 0)};
            if (!(this.c27_1._v == null)) {
              var this_0 = get_NULL();
              var value = this.c27_1._v;
              var tmp_1;
              if (value === this_0) {
                tmp_1 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_1 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              this.d27_1._v = this.x26_1(tmp_1);
              if (!(this.d27_1._v.h1(new Long(0, 0)) >= 0)) {
                var message = 'Debounce timeout should not be negative';
                throw IllegalArgumentException_init_$Create$(toString(message));
              }
              if (this.d27_1._v.equals(new Long(0, 0))) {
                this.s9_1 = 2;
                var this_1 = get_NULL();
                var value_0 = this.c27_1._v;
                var tmp_2;
                if (value_0 === this_1) {
                  tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_2 = (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE();
                }
                suspendResult = this.a27_1.y1r(tmp_2, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 3;
                continue $sm;
              }
            } else {
              this.s9_1 = 4;
              continue $sm;
            }

          case 2:
            this.c27_1._v = null;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            var tmp_3 = this;
            tmp_3.e27_1 = new SelectImplementation(this.y9());
            var tmp_4 = this;
            tmp_4.f27_1 = this.e27_1;
            var $this$select = this.f27_1;
            if (!(this.c27_1._v == null)) {
              var tmp_5 = this.d27_1._v;
              onTimeout($this$select, tmp_5, debounceInternal$slambda$slambda_2(this.a27_1, this.c27_1, null));
            }

            var tmp_6 = this.b27_1.g1o();
            $this$select.j27(tmp_6, debounceInternal$slambda$slambda_4(this.c27_1, this.a27_1, null));
            this.s9_1 = 5;
            suspendResult = this.f27_1.k27(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.s9_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 7) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(debounceInternal$slambda).h27 = function ($this$scopedFlow, downstream, completion) {
    var i = new debounceInternal$slambda(this.x26_1, this.y26_1, completion);
    i.z26_1 = $this$scopedFlow;
    i.a27_1 = downstream;
    return i;
  };
  function debounceInternal$slambda_0($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation);
    var l = function ($this$scopedFlow, downstream, $completion) {
      return i.g27($this$scopedFlow, downstream, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function distinctUntilChanged(_this__u8e3s4) {
    _init_properties_Distinct_kt__4eindw();
    var tmp;
    if (isInterface(_this__u8e3s4, StateFlow)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = distinctUntilChangedBy(_this__u8e3s4, get_defaultKeySelector(), get_defaultAreEquivalent());
    }
    return tmp;
  }
  function distinctUntilChangedBy(_this__u8e3s4, keySelector, areEquivalent) {
    _init_properties_Distinct_kt__4eindw();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (_this__u8e3s4 instanceof DistinctFlowImpl) {
      tmp_1 = _this__u8e3s4.m27_1 === keySelector;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.n27_1 === areEquivalent;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new DistinctFlowImpl(_this__u8e3s4, keySelector, areEquivalent);
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.o27_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).y1r = function (value, $completion) {
    return this.o27_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).x3 = function () {
    return this.o27_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).hashCode = function () {
    return hashCode(this.x3());
  };
  function DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation) {
    this.x27_1 = this$0;
    this.y27_1 = $previousKey;
    this.z27_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DistinctFlowImpl$collect$slambda).k21 = function (value, $completion) {
    var tmp = this.l21(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(DistinctFlowImpl$collect$slambda).ma = function (p1, $completion) {
    return this.k21((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DistinctFlowImpl$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.b28_1 = this.x27_1.m27_1(this.a28_1);
            if (this.y27_1._v === get_NULL() || !this.x27_1.n27_1(this.y27_1._v, this.b28_1)) {
              this.y27_1._v = this.b28_1;
              this.s9_1 = 1;
              suspendResult = this.z27_1.y1r(this.a28_1, this);
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
  protoOf(DistinctFlowImpl$collect$slambda).l21 = function (value, completion) {
    var i = new DistinctFlowImpl$collect$slambda(this.x27_1, this.y27_1, this.z27_1, completion);
    i.a28_1 = value;
    return i;
  };
  function DistinctFlowImpl$collect$slambda_0(this$0, $previousKey, $collector, resultContinuation) {
    var i = new DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.k21(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DistinctFlowImpl(upstream, keySelector, areEquivalent) {
    this.l27_1 = upstream;
    this.m27_1 = keySelector;
    this.n27_1 = areEquivalent;
  }
  protoOf(DistinctFlowImpl).t1q = function (collector, $completion) {
    var previousKey = {_v: get_NULL()};
    var tmp = DistinctFlowImpl$collect$slambda_0(this, previousKey, collector, null);
    return this.l27_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp), $completion);
  };
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (!properties_initialized_Distinct_kt_uy8c72) {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.c28_1;
  }
  function ThrowingCollector() {
  }
  var DEFAULT_CONCURRENCY;
  function mapLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return transformLatest(_this__u8e3s4, mapLatest$slambda_0(transform, null));
  }
  function transformLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return new ChannelFlowTransformLatest(transform, _this__u8e3s4);
  }
  function mapLatest$slambda($transform, resultContinuation) {
    this.l28_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapLatest$slambda).p28 = function ($this$transformLatest, it, $completion) {
    var tmp = this.q28($this$transformLatest, it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(mapLatest$slambda).i27 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.p28(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(mapLatest$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = this.l28_1(this.n28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o28_1 = suspendResult;
            this.s9_1 = 2;
            suspendResult = this.m28_1.y1r(this.o28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(mapLatest$slambda).q28 = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.l28_1, completion);
    i.m28_1 = $this$transformLatest;
    i.n28_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.p28($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, 2147483647);
    }
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function stateIn(_this__u8e3s4, scope, started, initialValue) {
    var config = configureSharing(_this__u8e3s4, 1);
    var state = MutableStateFlow(initialValue);
    var job = launchSharing(scope, config.u28_1, config.r28_1, state, started, initialValue);
    return new ReadonlyStateFlow(state, job);
  }
  function $onSubscriptionCOROUTINE$29(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d29_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$29).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 7;
            var tmp_0 = this;
            tmp_0.e29_1 = new SafeCollector(this.d29_1.l1v_1, this.y9());
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 6;
            this.s9_1 = 2;
            suspendResult = this.d29_1.m1v_1(this.e29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f29_1 = suspendResult;
            this.t9_1 = 7;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 7;
            this.e29_1.ca();
            var tmp_1 = this.d29_1.l1v_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.s9_1 = 4;
              suspendResult = this.d29_1.l1v_1.n1v(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 4:
            this.s9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.t9_1 = 7;
            var t = this.v9_1;
            this.e29_1.ca();
            throw t;
          case 7:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 7) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).n1v = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$29(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o29_1 = _this__u8e3s4;
    this.p29_1 = collector;
  }
  protoOf($collectCOROUTINE$30).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.o29_1.q29_1.y1t(this.p29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.q29_1 = flow;
    this.r29_1 = job;
  }
  protoOf(ReadonlyStateFlow).y1t = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$30(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ReadonlyStateFlow).t1q = function (collector, $completion) {
    return this.y1t(collector, $completion);
  };
  protoOf(ReadonlyStateFlow).c1 = function () {
    return this.q29_1.c1();
  };
  protoOf(ReadonlyStateFlow).q1q = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function SharingConfig(upstream, extraBufferCapacity, onBufferOverflow, context) {
    this.r28_1 = upstream;
    this.s28_1 = extraBufferCapacity;
    this.t28_1 = onBufferOverflow;
    this.u28_1 = context;
  }
  function configureSharing(_this__u8e3s4, replay) {
    // Inline function 'kotlinx.coroutines.assert' call
    var defaultExtraCapacity = coerceAtLeast(replay, Factory_getInstance().u1o_1) - replay | 0;
    if (_this__u8e3s4 instanceof ChannelFlow) {
      var upstream = _this__u8e3s4.p1q();
      if (!(upstream == null)) {
        var tmp144_subject = _this__u8e3s4.l1q_1;
        return new SharingConfig(upstream, tmp144_subject === -3 || (tmp144_subject === -2 || tmp144_subject === 0) ? _this__u8e3s4.m1q_1.equals(BufferOverflow_SUSPEND_getInstance()) ? _this__u8e3s4.l1q_1 === 0 ? 0 : defaultExtraCapacity : replay === 0 ? 1 : 0 : _this__u8e3s4.l1q_1, _this__u8e3s4.m1q_1, _this__u8e3s4.k1q_1);
      }
    }
    return new SharingConfig(_this__u8e3s4, defaultExtraCapacity, BufferOverflow_SUSPEND_getInstance(), EmptyCoroutineContext_getInstance());
  }
  function launchSharing(_this__u8e3s4, context, upstream, shared, started, initialValue) {
    var start = equals(started, Companion_getInstance_1().x1v_1) ? CoroutineStart_DEFAULT_getInstance() : CoroutineStart_UNDISPATCHED_getInstance();
    return launch(_this__u8e3s4, context, start, launchSharing$slambda_0(started, upstream, shared, initialValue, null));
  }
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function $collectCOROUTINE$31(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2a_1 = _this__u8e3s4;
    this.b2a_1 = collector;
  }
  protoOf($collectCOROUTINE$31).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.a2a_1.c2a_1.y1t(this.b2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlySharedFlow(flow, job) {
    this.c2a_1 = flow;
    this.d2a_1 = job;
  }
  protoOf(ReadonlySharedFlow).y1t = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$31(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ReadonlySharedFlow).t1q = function (collector, $completion) {
    return this.y1t(collector, $completion);
  };
  protoOf(ReadonlySharedFlow).q1q = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function launchSharing$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda).n2a = function (it, $completion) {
    var tmp = this.m1w(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(launchSharing$slambda$slambda).ma = function (p1, $completion) {
    return this.n2a((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          return this.m2a_1 > 0;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(launchSharing$slambda$slambda).m1w = function (it, completion) {
    var i = new launchSharing$slambda$slambda(completion);
    i.m2a_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_0(resultContinuation) {
    var i = new launchSharing$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.n2a(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation) {
    this.w2a_1 = $upstream;
    this.x2a_1 = $shared;
    this.y2a_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda_1).d2b = function (it, $completion) {
    var tmp = this.e2b(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(launchSharing$slambda$slambda_1).ma = function (p1, $completion) {
    return this.d2b(p1 instanceof SharingCommand ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.a2b_1 = this.z2a_1;
            this.b2b_1 = this.a2b_1.z2_1;
            if (this.b2b_1 === 0) {
              this.s9_1 = 1;
              suspendResult = this.w2a_1.t1q(this.x2a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.b2b_1 === 1) {
                var tmp_0 = this;
                tmp_0.c2b_1 = Unit_instance;
                this.s9_1 = 2;
                continue $sm;
              } else {
                if (this.b2b_1 === 2) {
                  var tmp_1 = this;
                  var tmp_2;
                  if (this.y2a_1 === get_NO_VALUE()) {
                    this.x2a_1.x1t();
                    tmp_2 = Unit_instance;
                  } else {
                    tmp_2 = this.x2a_1.v1t(this.y2a_1);
                  }
                  tmp_1.c2b_1 = tmp_2;
                  this.s9_1 = 2;
                  continue $sm;
                } else {
                  var tmp_3 = this;
                  noWhenBranchMatchedException();
                }
              }
            }

            break;
          case 1:
            var tmp_4 = this;
            tmp_4.c2b_1 = Unit_instance;
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
  protoOf(launchSharing$slambda$slambda_1).e2b = function (it, completion) {
    var i = new launchSharing$slambda$slambda_1(this.w2a_1, this.x2a_1, this.y2a_1, completion);
    i.z2a_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_2($upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation);
    var l = function (it, $completion) {
      return i.d2b(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation) {
    this.n2b_1 = $started;
    this.o2b_1 = $upstream;
    this.p2b_1 = $shared;
    this.q2b_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(launchSharing$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 6;
            if (this.n2b_1 === Companion_getInstance_1().x1v_1) {
              this.s9_1 = 4;
              suspendResult = this.o2b_1.t1q(this.p2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.n2b_1 === Companion_getInstance_1().y1v_1) {
                this.s9_1 = 2;
                var tmp_0 = this.p2b_1.w1t();
                suspendResult = first(tmp_0, launchSharing$slambda$slambda_0(null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.s9_1 = 1;
                var tmp_1 = distinctUntilChanged(this.n2b_1.z1v(this.p2b_1.w1t()));
                suspendResult = collectLatest(tmp_1, launchSharing$slambda$slambda_2(this.o2b_1, this.p2b_1, this.q2b_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 1:
            this.s9_1 = 5;
            continue $sm;
          case 2:
            this.s9_1 = 3;
            suspendResult = this.o2b_1.t1q(this.p2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.s9_1 = 5;
            continue $sm;
          case 4:
            this.s9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
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
  protoOf(launchSharing$slambda).b20 = function ($this$launch, completion) {
    var i = new launchSharing$slambda(this.n2b_1, this.o2b_1, this.p2b_1, this.q2b_1, completion);
    i.r2b_1 = $this$launch;
    return i;
  };
  function launchSharing$slambda_0($started, $upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function onEach(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4, action);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.s2b_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).y1r = function (value, $completion) {
    return this.s2b_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).x3 = function () {
    return this.s2b_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).hashCode = function () {
    return hashCode(this.x3());
  };
  function onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation) {
    this.b2c_1 = $$this$unsafeFlow;
    this.c2c_1 = $action;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(onEach$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(onEach$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onEach$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            var tmp_0 = this;
            tmp_0.e2c_1 = this.b2c_1;
            var tmp_1 = this;
            tmp_1.f2c_1 = this.d2c_1;
            this.s9_1 = 1;
            suspendResult = this.c2c_1(this.f2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9_1 = 2;
            suspendResult = this.e2c_1.y1r(this.f2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(onEach$o$collect$slambda).h2c = function (value, completion) {
    var i = new onEach$o$collect$slambda(this.b2c_1, this.c2c_1, completion);
    i.d2c_1 = value;
    return i;
  };
  function onEach$o$collect$slambda_0($$this$unsafeFlow, $action, resultContinuation) {
    var i = new onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$32(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2c_1 = _this__u8e3s4;
    this.r2c_1 = collector;
  }
  protoOf($collectCOROUTINE$32).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.s2c_1 = this.r2c_1;
            this.s9_1 = 1;
            var tmp_1 = onEach$o$collect$slambda_0(this.s2c_1, this.q2c_1.u2c_1, null);
            suspendResult = this.q2c_1.t2c_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  function _no_name_provided__qut3iv_1($this, $action) {
    this.t2c_1 = $this;
    this.u2c_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_1).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$32(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_1).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.t1q(NopCollector_instance, $completion);
  }
  function collectLatest(_this__u8e3s4, action, $completion) {
    return collect(buffer(mapLatest(_this__u8e3s4, action), 0), $completion);
  }
  function launchIn(_this__u8e3s4, scope) {
    return launch(scope, VOID, VOID, launchIn$slambda_0(_this__u8e3s4, null));
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.t1q(_this__u8e3s4, $completion);
  }
  function launchIn$slambda($this_launchIn, resultContinuation) {
    this.d2d_1 = $this_launchIn;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchIn$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(launchIn$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchIn$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = collect(this.d2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(launchIn$slambda).b20 = function ($this$launch, completion) {
    var i = new launchIn$slambda(this.d2d_1, completion);
    i.e2d_1 = $this$launch;
    return i;
  };
  function launchIn$slambda_0($this_launchIn, resultContinuation) {
    var i = new launchIn$slambda($this_launchIn, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$35(_this__u8e3s4, predicate, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function first_0(_this__u8e3s4, $completion) {
    var tmp = new $firstCOROUTINE$36(_this__u8e3s4, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function $emitCOROUTINE$38(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2e_1 = _this__u8e3s4;
    this.n2e_1 = value;
  }
  protoOf($emitCOROUTINE$38).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            tmp_0.o2e_1 = this.n2e_1;
            this.s9_1 = 1;
            suspendResult = this.m2e_1.q2e_1(this.o2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this.m2e_1.r2e_1._v = this.o2e_1;
              tmp_1.p2e_1 = false;
              this.s9_1 = 2;
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.p2e_1 = true;
              this.s9_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.p2e_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.m2e_1);
            } else {
              this.s9_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_2($predicate, $result) {
    this.q2e_1 = $predicate;
    this.r2e_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_2).p24 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$38(this, value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv_2).y1r = function (value, $completion) {
    return this.p24((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function _no_name_provided__qut3iv_3($result) {
    this.s2e_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_3).p24 = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.flow.first.<anonymous>' call
    this.s2e_1._v = value;
    if (!false) {
      throw new AbortFlowException(this);
    }
    return Unit_instance;
  };
  protoOf(_no_name_provided__qut3iv_3).y1r = function (value, $completion) {
    return this.p24((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function $firstCOROUTINE$35(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n2d_1 = _this__u8e3s4;
    this.o2d_1 = predicate;
  }
  protoOf($firstCOROUTINE$35).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.p2d_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.q2d_1 = this.n2d_1;
            var tmp_1 = this;
            tmp_1.r2d_1 = new _no_name_provided__qut3iv_2(this.o2d_1, this.p2d_1);
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.q2d_1.t1q(this.r2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.v9_1;
              checkOwnership(e, this.r2d_1);
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            if (this.p2d_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + toString(this.o2d_1));
            var tmp_3 = this.p2d_1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $firstCOROUTINE$36(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2e_1 = _this__u8e3s4;
  }
  protoOf($firstCOROUTINE$36).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.b2e_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.c2e_1 = this.a2e_1;
            var tmp_1 = this;
            tmp_1.d2e_1 = new _no_name_provided__qut3iv_3(this.b2e_1);
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.c2e_1.t1q(this.d2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.v9_1;
              checkOwnership(e, this.d2e_1);
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            if (this.b2e_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element');
            var tmp_3 = this.b2e_1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.t2e(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.dq();
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.j19_1 = id;
    this.k19_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).m1j = function () {
    return this.k19_1.kotlinx$atomicfu$value === this.o1i() && !this.t1j();
  };
  protoOf(Segment).n1j = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var this_0 = this.k19_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.o1i()) || this.t1j())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (this_0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).o1j = function () {
    return this.k19_1.atomicfu$addAndGet(-65536) === this.o1i() && !this.t1j();
  };
  protoOf(Segment).l1j = function () {
    if (this.k19_1.atomicfu$incrementAndGet() === this.o1i()) {
      this.t4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        // Inline function 'kotlinx.coroutines.internal.close.<anonymous>' call
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.w1j())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.z1l_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.z1l_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.z1l_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.z1l_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.z1l_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.p1j_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.u1j();
    while (!(cur === null) && cur.m1j())
      cur = cur.q1j_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.r1j());
    while (cur.m1j()) {
      var tmp0_elvis_lhs = cur.r1j();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this.p1j_1 = atomic$ref$1(null);
    this.q1j_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).r1j = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var it = _get_nextOrClosed__w0gmuv(this);
    var tmp;
    if (it === get_CLOSED()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.<get-next>.<anonymous>' call
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).s1j = function (value) {
    return this.p1j_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).t1j = function () {
    return this.r1j() == null;
  };
  protoOf(ConcurrentLinkedListNode).u1j = function () {
    return this.q1j_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).v1j = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.q1j_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).w1j = function () {
    return this.p1j_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).t4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.t1j())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var this_0 = next.q1j_1;
        while (true) {
          var cur = this_0.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (this_0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.p1j_1.kotlinx$atomicfu$value = next;
      if (next.m1j() && !next.t1j())
        continue $l$loop_0;
      if (!(prev === null) && prev.m1j())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.j19_1.h1(id) < 0 || cur.m1j()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        // Inline function 'kotlinx.coroutines.internal.findSegmentInternal.<anonymous>' call
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.j19_1.f3(toLong(1)), cur);
      if (cur.s1j(newTail)) {
        if (cur.m1j()) {
          cur.t4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().m();
    while (_iterator__ex2g4s.n()) {
      var handler = _iterator__ex2g4s.o();
      try {
        handler.h1c(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.b19_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.x18_1 = dispatcher;
    this.y18_1 = continuation;
    this.z18_1 = get_UNDEFINED();
    this.a19_1 = threadContextElements(this.y9());
    this.b19_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).y9 = function () {
    return this.y18_1.y9();
  };
  protoOf(DispatchedContinuation).e19 = function () {
    return !(this.b19_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).u2e = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b19_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).g1c = function () {
    this.u2e();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.v19();
    }
  };
  protoOf(DispatchedContinuation).c19 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b19_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.b19_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.b19_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).g1a = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b19_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.b19_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.b19_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).g19 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.b19_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.b19_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.b19_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).y19 = function () {
    var state = this.z18_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.z18_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).w19 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).da = function (result) {
    var state = toState_0(result);
    if (this.x18_1.d1c(this.y9())) {
      this.z18_1 = state;
      this.f19_1 = 0;
      this.x18_1.e1c(this.y9(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().a1d();
        if (false && eventLoop.v1c()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.u1c()) {
          this.z18_1 = state;
          this.f19_1 = 0;
          eventLoop.t1c(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.w1c(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.y9();
            this.a19_1;
            this.y18_1.da(result);
            $l$loop: while (eventLoop.s1c()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.r1a(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.x1c(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).g1i = function (context, value) {
    this.z18_1 = value;
    this.f19_1 = 1;
    this.x18_1.f1c(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.x18_1.toString() + ', ' + toDebugString(this.y18_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result);
      if (_this__u8e3s4.x18_1.d1c(_this__u8e3s4.y9())) {
        _this__u8e3s4.z18_1 = state;
        _this__u8e3s4.f19_1 = 1;
        _this__u8e3s4.x18_1.e1c(_this__u8e3s4.y9(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().a1d();
          if (false && eventLoop.v1c()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.u1c()) {
            _this__u8e3s4.z18_1 = state;
            _this__u8e3s4.f19_1 = 1;
            eventLoop.t1c(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.w1c(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.y9().fa(Key_instance_3);
                if (!(job == null) && !job.i14()) {
                  var cause = job.h15();
                  _this__u8e3s4.z19(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.da(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.y18_1;
                _this__u8e3s4.a19_1;
                _this__u8e3s4.y18_1.da(result);
              }
              $l$loop: while (eventLoop.s1c()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.r1a(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.x1c(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.da(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().a1d();
      if (true && eventLoop.v1c()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.u1c()) {
        _this__u8e3s4.z18_1 = Unit_instance;
        _this__u8e3s4.f19_1 = 1;
        eventLoop.t1c(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.w1c(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.q1a();
          $l$loop: while (eventLoop.s1c()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.r1a(e);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.x1c(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.f19_1 = resumeMode;
  }
  protoOf(DispatchedTask).z19 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).f1a = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).o1a = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.n14_1;
  };
  protoOf(DispatchedTask).q1a = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.w19();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.y18_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.a19_1;
      var context = continuation.y9();
      var state = this.y19();
      var exception = this.o1a(state);
      var job = exception == null && get_isCancellableMode(this.f19_1) ? context.fa(Key_instance_3) : null;
      if (!(job == null) && !job.i14()) {
        var cause = job.h15();
        this.z19(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.da(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.da(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.f1a(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.da(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp152_safe_receiver = fatalException;
      if (tmp152_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this.r1a(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).r1a = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.w19().y9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.w19();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.f19_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.x18_1;
      var context = delegate.y9();
      if (dispatcher.d1c(context)) {
        dispatcher.e1c(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().a1d();
    if (eventLoop.u1c()) {
      eventLoop.t1c(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.w1c(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.w19(), true);
        $l$loop: while (eventLoop.s1c()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.r1a(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.x1c(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.y19();
    var exception = _this__u8e3s4.o1a(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.f1a(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.y18_1;
      this_0.a19_1;
      this_0.y18_1.da(result);
    } else {
      delegate.da(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp153_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp153_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp153_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).e(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.e((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.e(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp156_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp156_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp156_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ContextScope(context) {
    this.v2e_1 = context;
  }
  protoOf(ContextScope).h14 = function () {
    return this.v2e_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.v2e_1) + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.l17_1 = uCont;
  }
  protoOf(ScopeCoroutine).b16 = function () {
    return true;
  };
  protoOf(ScopeCoroutine).s14 = function (state) {
    resumeCancellableWith(intercepted(this.l17_1), recoverResult(state, this.l17_1));
  };
  protoOf(ScopeCoroutine).r14 = function (state) {
    this.l17_1.da(recoverResult(state, this.l17_1));
  };
  function Symbol(symbol) {
    this.w2e_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.w2e_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).m1();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.h1(parsed) <= 0 ? parsed.h1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.da(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.q14(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.n14_1;
        if (true) {
          throw recoverStackTrace(state.n14_1, _this__u8e3s4.l17_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.n14_1, _this__u8e3s4.l17_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.q14(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var e_0 = state.n14_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.m1h_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.n14_1, _this__u8e3s4.l17_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.n14_1, _this__u8e3s4.l17_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.y9();
      // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.da(tmp$ret$4);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$6 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.da(tmp$ret$6);
    }
  }
  function onTimeout(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.z2e((new OnTimeout(timeMillis)).y2e(), block);
  }
  function register($this, select, ignoredParam) {
    if ($this.x2e_1.h1(new Long(0, 0)) <= 0) {
      select.v1e(Unit_instance);
      return Unit_instance;
    }
    // Inline function 'kotlinx.coroutines.Runnable' call
    var action = new _no_name_provided__qut3iv_4(select, $this);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.y9();
    var disposableHandle = get_delay(context).m1c($this.x2e_1, action, context);
    select.w1e(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'register';
    return l;
  }
  function _no_name_provided__qut3iv_4($select, this$0) {
    this.a2f_1 = $select;
    this.b2f_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_4).q1a = function () {
    // Inline function 'kotlinx.coroutines.selects.OnTimeout.register.<anonymous>' call
    this.a2f_1.d1f(this.b2f_1, Unit_instance);
  };
  function OnTimeout(timeMillis) {
    this.x2e_1 = timeMillis;
  }
  protoOf(OnTimeout).y2e = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.c2f_1 = clauseObject;
    this.d2f_1 = regFunc;
    this.e2f_1 = onCancellationConstructor;
    this.f2f_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).g2f = function () {
    return this.c2f_1;
  };
  protoOf(SelectClause0Impl).h2f = function () {
    return this.d2f_1;
  };
  protoOf(SelectClause0Impl).i2f = function () {
    return this.e2f_1;
  };
  protoOf(SelectClause0Impl).j2f = function () {
    return this.f2f_1;
  };
  function SelectInstance() {
  }
  function SelectClause1() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.k2f_1 = clauseObject;
    this.l2f_1 = regFunc;
    this.m2f_1 = processResFunc;
    this.n2f_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).g2f = function () {
    return this.k2f_1;
  };
  protoOf(SelectClause1Impl).h2f = function () {
    return this.l2f_1;
  };
  protoOf(SelectClause1Impl).j2f = function () {
    return this.m2f_1;
  };
  protoOf(SelectClause1Impl).i2f = function () {
    return this.n2f_1;
  };
  function $invokeBlockCOROUTINE$44(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2f_1 = _this__u8e3s4;
    this.x2f_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$44).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.y2f_1 = this.w2f_1.e2g_1;
            if (this.w2f_1.d2g_1 === get_PARAM_CLAUSE_0()) {
              var tmp_0 = this.y2f_1;
              if (!isSuspendFunction(tmp_0, 0))
                THROW_CCE();
              this.s9_1 = 2;
              suspendResult = this.y2f_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.y2f_1;
              if (!isSuspendFunction(tmp_1, 1))
                THROW_CCE();
              this.s9_1 = 1;
              suspendResult = this.y2f_1(this.x2f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.z2f_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.z2f_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.z2f_1;
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
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.m1l_1.kotlinx$atomicfu$value;
    return tmp instanceof ClauseData;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$41($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.n1l_1);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = clauses.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.checkClauseObject.<anonymous>' call
        if (element.a2g_1 === clauseObject) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$0) {
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.checkClauseObject.<anonymous>' call
      var message = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.m1l_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>' call
        var curState = this_0.kotlinx$atomicfu$value;
        if (curState === get_STATE_REG()) {
          if ($this.m1l_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.m1l_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = curState.m();
              while (tmp0_iterator.n()) {
                var element = tmp0_iterator.o();
                // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>.<anonymous>' call
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.l18(Unit_instance, curState.s2g($this, $this.q1l_1));
              break $l$block_0;
            } else {
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.a17();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.g2g_1 = null;
    clause.h2g_1 = -1;
    $this.t2g(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.m1l_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.s2g($this, internalResult);
        if ($this.m1l_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.q1l_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.q1l_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.m1l_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.m1l_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.n1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = clauses.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.a2g_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$42($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$43($this, clause, internalResult, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.n1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.cleanup.<anonymous>' call
      if (!(element === selectedClause)) {
        element.v18();
      }
    }
    $this.m1l_1.kotlinx$atomicfu$value = get_STATE_COMPLETED();
    $this.q1l_1 = get_NO_RESULT();
    $this.n1l_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.i2g_1 = $outer;
    this.a2g_1 = clauseObject;
    this.b2g_1 = regFunc;
    this.c2g_1 = processResFunc;
    this.d2g_1 = param;
    this.e2g_1 = block;
    this.f2g_1 = onCancellationConstructor;
    this.g2g_1 = null;
    this.h2g_1 = -1;
  }
  protoOf(ClauseData).u2h = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.b2g_1(this.a2g_1, select, this.d2g_1);
    return select.q1l_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).v2h = function (result) {
    return this.c2g_1(this.a2g_1, this.d2g_1, result);
  };
  protoOf(ClauseData).w2h = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$44(this, argument, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ClauseData).v18 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.selects.ClauseData.dispose.<anonymous>' call
    var $this$with = this.g2g_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.l19(this.h2g_1, null, this.i2g_1.y9());
      tmp = Unit_instance;
    } else {
      var tmp160_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp160_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp160_safe_receiver.v18();
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).s2g = function (select, internalResult) {
    var tmp161_safe_receiver = this.f2g_1;
    return tmp161_safe_receiver == null ? null : tmp161_safe_receiver(select, this.d2g_1, internalResult);
  };
  function $doSelectCOROUTINE$40(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2i_1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$40).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            if (_get_isSelected__uy0hmu(this.f2i_1)) {
              this.s9_1 = 2;
              suspendResult = complete(this.f2i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = doSelectSuspend(this.f2i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.g2i_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.g2i_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.g2i_1;
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
  function $doSelectSuspendCOROUTINE$41(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2g_1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$41).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = waitUntilSelected(this.r2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s9_1 = 2;
            suspendResult = complete(this.r2g_1, this);
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
  function $completeCOROUTINE$42(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2h_1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$42).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            var tmp_0 = this;
            var tmp_1 = this.c2h_1.m1l_1.kotlinx$atomicfu$value;
            tmp_0.d2h_1 = tmp_1 instanceof ClauseData ? tmp_1 : THROW_CCE();
            this.e2h_1 = this.c2h_1.q1l_1;
            cleanup(this.c2h_1, this.d2h_1);
            if (!get_RECOVER_STACK_TRACES()) {
              this.g2h_1 = this.d2h_1.v2h(this.e2h_1);
              this.s9_1 = 2;
              suspendResult = this.d2h_1.w2h(this.g2h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 1;
              suspendResult = processResultAndInvokeBlockRecoveringException(this.c2h_1, this.d2h_1, this.e2h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f2h_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 2:
            this.f2h_1 = suspendResult;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.f2h_1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$43(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p2h_1 = _this__u8e3s4;
    this.q2h_1 = clause;
    this.r2h_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$43).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.t2h_1 = this.q2h_1.v2h(this.r2h_1);
            this.s9_1 = 1;
            suspendResult = this.q2h_1.w2h(this.t2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s2h_1 = suspendResult;
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof Error) {
              var e = this.v9_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return this.s2h_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function SelectImplementation(context) {
    this.l1l_1 = context;
    this.m1l_1 = atomic$ref$1(get_STATE_REG());
    this.n1l_1 = ArrayList_init_$Create$(2);
    this.o1l_1 = null;
    this.p1l_1 = -1;
    this.q1l_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).y9 = function () {
    return this.l1l_1;
  };
  protoOf(SelectImplementation).k27 = function ($completion) {
    var tmp = new $doSelectCOROUTINE$40(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(SelectImplementation).z2e = function (_this__u8e3s4, block) {
    return this.h2i(new ClauseData(this, _this__u8e3s4.g2f(), _this__u8e3s4.h2f(), _this__u8e3s4.j2f(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.i2f()));
  };
  protoOf(SelectImplementation).j27 = function (_this__u8e3s4, block) {
    return this.h2i(new ClauseData(this, _this__u8e3s4.g2f(), _this__u8e3s4.h2f(), _this__u8e3s4.j2f(), null, block, _this__u8e3s4.i2f()));
  };
  protoOf(SelectImplementation).t2g = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.selects.SelectImplementation.register.<anonymous>' call
    if (this.m1l_1.kotlinx$atomicfu$value instanceof ClauseData)
      return Unit_instance;
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.a2g_1);
    }
    if (_this__u8e3s4.u2h(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.n1l_1).e(_this__u8e3s4);
      }
      _this__u8e3s4.g2g_1 = this.o1l_1;
      _this__u8e3s4.h2g_1 = this.p1l_1;
      this.o1l_1 = null;
      this.p1l_1 = -1;
    } else {
      this.m1l_1.kotlinx$atomicfu$value = _this__u8e3s4;
    }
  };
  protoOf(SelectImplementation).h2i = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.t2g(_this__u8e3s4, reregister);
      tmp = Unit_instance;
    } else {
      tmp = $super.t2g.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).w1e = function (disposableHandle) {
    this.o1l_1 = disposableHandle;
  };
  protoOf(SelectImplementation).j1a = function (segment, index) {
    this.o1l_1 = segment;
    this.p1l_1 = index;
  };
  protoOf(SelectImplementation).v1e = function (internalResult) {
    this.q1l_1 = internalResult;
  };
  protoOf(SelectImplementation).d1f = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).r1l = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).u18 = function (cause) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.m1l_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.invoke.<anonymous>' call
        if (cur === get_STATE_COMPLETED())
          return Unit_instance;
        var upd = get_STATE_CANCELLED();
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.n1l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.invoke.<anonymous>' call
      element.v18();
    }
    this.q1l_1 = get_NO_RESULT();
    this.n1l_1 = null;
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.e18(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.f18(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.t2i_1.kotlinx$atomicfu$value = this$1.w2i_1;
      this$0.k2i(this$1.w2i_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.k2i(this$1.w2i_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.y2i())
        return 0;
      var curOwner = $this.t2i_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.e1a();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.a17();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.g2j()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.t2i_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.x2i_1 = $outer;
    this.v2i_1 = cont;
    this.w2i_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).h2j = function (value, onCancellation) {
    this.v2i_1.k18(Unit_instance, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).k18 = function (value, onCancellation) {
    return this.h2j(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).f18 = function (token) {
    this.v2i_1.f18(token);
  };
  protoOf(CancellableContinuationWithOwner).g18 = function (cause) {
    return this.v2i_1.g18(cause);
  };
  protoOf(CancellableContinuationWithOwner).i18 = function (handler) {
    this.v2i_1.i18(handler);
  };
  protoOf(CancellableContinuationWithOwner).i2j = function (_this__u8e3s4, value) {
    this.v2i_1.j18(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).j18 = function (_this__u8e3s4, value) {
    return this.i2j(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).xh = function (result) {
    this.v2i_1.da(result);
  };
  protoOf(CancellableContinuationWithOwner).da = function (result) {
    return this.xh(result);
  };
  protoOf(CancellableContinuationWithOwner).i14 = function () {
    return this.v2i_1.i14();
  };
  protoOf(CancellableContinuationWithOwner).e15 = function () {
    return this.v2i_1.e15();
  };
  protoOf(CancellableContinuationWithOwner).y9 = function () {
    return this.v2i_1.y9();
  };
  protoOf(CancellableContinuationWithOwner).j1a = function (segment, index) {
    this.v2i_1.j1a(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).j2j = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.v2i_1.e18(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.x2i_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.x2i_1.t2i_1.kotlinx$atomicfu$value = this.w2i_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).e18 = function (value, idempotent, onCancellation) {
    return this.j2j(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).k2j = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.x2i_1.t2i_1.kotlinx$atomicfu$value = this.w2i_1;
    this.v2i_1.k18(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.x2i_1, this));
  };
  protoOf(CancellableContinuationWithOwner).l18 = function (value, onCancellation) {
    return this.k2j(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.k2i($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_unused_var__etf5q3, owner, _unused_var__etf5q3_0) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreAndMutexImpl.call(this, 1, locked ? 1 : 0);
    this.t2i_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.u2i_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).y2i = function () {
    return this.l2j() === 0;
  };
  protoOf(MutexImpl).i2i = function (owner, $completion) {
    if (this.m2j(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).m2j = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).k2i = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.y2i()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.t2i_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(curOwner === owner || owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.t2i_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.n2j();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.y2i() + ',owner=' + toString_0(this.t2i_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.e2j_1.atomicfu$getAndDecrement();
      if (p > $this.z2i_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.e2j_1.kotlinx$atomicfu$value;
      if (cur <= $this.z2i_1)
        break $l$loop_0;
      if ($this.e2j_1.atomicfu$compareAndSet(cur, $this.z2i_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.c2j_1.kotlinx$atomicfu$value;
    var enqIdx = $this.d2j_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.c2j_1;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE_0();
      var id = enqIdx.i3(toLong(other));
      while (true) {
        var s = findSegmentInternal(curTail, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.j19_1.h1(to.j19_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.n1j()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.o1j()) {
                  cur.t4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.o1j()) {
                to.t4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = enqIdx.j3(toLong(other_0)).m1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.s2j_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.j1a(segment, i);
      return true;
    }
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var expected = get_PERMIT();
    var value = get_TAKEN();
    if (segment.s2j_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.l18(Unit_instance, $this.f2j_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.v1e(Unit_instance);
        } else {
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.a2j_1.kotlinx$atomicfu$value;
    var deqIdx = $this.b2j_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.i3(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.a2j_1;
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.j19_1.h1(to.j19_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.n1j()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.o1j()) {
                  cur.t4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.o1j()) {
                to.t4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.v1j();
    if (segment.j19_1.h1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.j3(toLong(other_0)).m1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.s2j_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.tryResumeNextFromQueue.<anonymous>' call
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.s2j_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var expected = get_PERMIT();
      var value_0 = get_BROKEN();
      return !segment.s2j_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.e18(Unit_instance, null, $this.f2j_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.f18(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.d1f($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.n2j();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.z2i_1 = permits;
    this.b2j_1 = atomic$long$1(new Long(0, 0));
    this.d2j_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z2i_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.z2i_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.z2i_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.z2i_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.a2j_1 = atomic$ref$1(s);
    this.c2j_1 = atomic$ref$1(s);
    this.e2j_1 = atomic$int$1(this.z2i_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.f2j_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).l2j = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.e2j_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).g2j = function () {
    $l$loop: while (true) {
      var p = this.e2j_1.kotlinx$atomicfu$value;
      if (p > this.z2i_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.e2j_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire.<anonymous>' call
          waiter.l18(Unit_instance, this.f2j_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire.<anonymous>' call
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreAndMutexImpl).n2j = function () {
    while (true) {
      var p = this.e2j_1.atomicfu$getAndIncrement();
      if (p >= this.z2i_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.z2i_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.s2j_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).o1i = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).l19 = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.s2j_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.l1j();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.j19_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).pb();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).v2j = function () {
    process.nextTick(this.c2k_1.a2k_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.g2k();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.z2j_1 = dispatcher;
    var tmp = this;
    tmp.a2k_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).h2k = function () {
    this.z2j_1.v2j();
  };
  protoOf(ScheduledMessageQueue).i2k = function () {
    setTimeout(this.a2k_1, 0);
  };
  protoOf(ScheduledMessageQueue).j2k = function (timeout) {
    setTimeout(this.a2k_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.y2k_1 && event.data == this$0.z2k_1) {
        event.stopPropagation();
        this$0.g2k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.g2k();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.y2k_1 = window_0;
    this.z2k_1 = 'dispatchCoroutine';
    this.y2k_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).h2k = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).i2k = function () {
    this.y2k_1.postMessage(this.z2k_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.x19();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.a17();
  }
  function asDeferred(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var deferred = _this__u8e3s4.deferred;
    var tmp;
    if (deferred == null) {
      var tmp_0 = GlobalScope_instance;
      var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
      tmp = async(tmp_0, VOID, tmp_1, asDeferred$slambda_0(_this__u8e3s4, null));
    } else {
      tmp = deferred;
    }
    return tmp;
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.da(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asDeferred$slambda($this_asDeferred, resultContinuation) {
    this.i2l_1 = $this_asDeferred;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(asDeferred$slambda).k2l = function ($this$async, $completion) {
    var tmp = this.b20($this$async, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(asDeferred$slambda).ma = function (p1, $completion) {
    return this.k2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(asDeferred$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = await_0(this.i2l_1, this);
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
  protoOf(asDeferred$slambda).b20 = function ($this$async, completion) {
    var i = new asDeferred$slambda(this.i2l_1, completion);
    i.j2l_1 = $this$async;
    return i;
  };
  function asDeferred$slambda_0($this_asDeferred, resultContinuation) {
    var i = new asDeferred$slambda($this_asDeferred, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.k2l($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).e1c = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).v2j = function () {
    this.c2k_1.j2k(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.q1a();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.j18(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.c2k_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).e1c = function (context, block) {
    this.c2k_1.u2k(block);
  };
  protoOf(SetTimeoutBasedDispatcher).m1c = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).l1c = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.d2k_1 = ArrayDeque_init_$Create$();
    this.e2k_1 = 16;
    this.f2k_1 = false;
  }
  protoOf(MessageQueue).k2k = function (element) {
    return this.d2k_1.e(element);
  };
  protoOf(MessageQueue).e = function (element) {
    return this.k2k((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).l2k = function (index, element) {
    this.d2k_1.w2(index, element);
  };
  protoOf(MessageQueue).w2 = function (index, element) {
    return this.l2k(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).m2k = function (index, elements) {
    return this.d2k_1.u2(index, elements);
  };
  protoOf(MessageQueue).u2 = function (index, elements) {
    return this.m2k(index, elements);
  };
  protoOf(MessageQueue).n2k = function (elements) {
    return this.d2k_1.t(elements);
  };
  protoOf(MessageQueue).t = function (elements) {
    return this.n2k(elements);
  };
  protoOf(MessageQueue).n2 = function () {
    this.d2k_1.n2();
  };
  protoOf(MessageQueue).w = function (index) {
    return this.d2k_1.w(index);
  };
  protoOf(MessageQueue).o2k = function (element) {
    return this.d2k_1.t2(element);
  };
  protoOf(MessageQueue).t2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.o2k((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).x2 = function (index) {
    return this.d2k_1.x2(index);
  };
  protoOf(MessageQueue).p2k = function (index, element) {
    return this.d2k_1.v2(index, element);
  };
  protoOf(MessageQueue).v2 = function (index, element) {
    return this.p2k(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).j2 = function (fromIndex, toIndex) {
    return this.d2k_1.j2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).q2k = function (element) {
    return this.d2k_1.v(element);
  };
  protoOf(MessageQueue).v = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.q2k((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).r2k = function (elements) {
    return this.d2k_1.g2(elements);
  };
  protoOf(MessageQueue).g2 = function (elements) {
    return this.r2k(elements);
  };
  protoOf(MessageQueue).u = function (index) {
    return this.d2k_1.u(index);
  };
  protoOf(MessageQueue).s2k = function (element) {
    return this.d2k_1.x(element);
  };
  protoOf(MessageQueue).x = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.s2k((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).j = function () {
    return this.d2k_1.j();
  };
  protoOf(MessageQueue).m = function () {
    return this.d2k_1.m();
  };
  protoOf(MessageQueue).t2k = function (element) {
    return this.d2k_1.h2(element);
  };
  protoOf(MessageQueue).h2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.t2k((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).p = function () {
    return this.d2k_1.kg_1;
  };
  protoOf(MessageQueue).u2k = function (element) {
    this.k2k(element);
    if (!this.f2k_1) {
      this.f2k_1 = true;
      this.h2k();
    }
  };
  protoOf(MessageQueue).g2k = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.e2k_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.q1a();
        }
         while (inductionVariable < times);
    }finally {
      if (this.j()) {
        this.f2k_1 = false;
      } else {
        this.i2k();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.s2l_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).v18 = function () {
    w3cClearTimeout(this.s2l_1.u2l_1, this.w2l_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.j18(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref($boundThis) {
    var l = function () {
      $boundThis.q1a();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.u2l_1 = window_0;
    this.v2l_1 = new WindowMessageQueue(this.u2l_1);
  }
  protoOf(WindowDispatcher).e1c = function (context, block) {
    return this.v2l_1.u2k(block);
  };
  protoOf(WindowDispatcher).l1c = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.u2l_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).m1c = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.u2l_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).m1();
  }
  function ClearTimeout(handle) {
    this.w2l_1 = handle;
  }
  protoOf(ClearTimeout).v18 = function () {
    w3cClearTimeout_0(this.w2l_1);
  };
  protoOf(ClearTimeout).u18 = function (cause) {
    this.v18();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.w2l_1 + ']';
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().a1h_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.h14().hj(context);
    return !(combined === Dispatchers_getInstance().a1h_1) && combined.fa(Key_instance) == null ? combined.hj(Dispatchers_getInstance().a1h_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.hj(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).r14 = function (state) {
    return this.l17_1.da(recoverResult(state, this.l17_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.a1h_1 = createDefaultDispatcher();
    this.b1h_1 = Unconfined_getInstance();
    this.c1h_1 = new JsMainDispatcher(this.a1h_1, false);
    this.d1h_1 = null;
  }
  protoOf(Dispatchers).e1h = function () {
    var tmp0_elvis_lhs = this.d1h_1;
    return tmp0_elvis_lhs == null ? this.c1h_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.c2m_1 = delegate;
    this.d2m_1 = invokeImmediately;
    this.e2m_1 = this.d2m_1 ? this : new JsMainDispatcher(this.c2m_1, true);
  }
  protoOf(JsMainDispatcher).y1g = function () {
    return this.e2m_1;
  };
  protoOf(JsMainDispatcher).d1c = function (context) {
    return !this.d2m_1;
  };
  protoOf(JsMainDispatcher).e1c = function (context, block) {
    return this.c2m_1.e1c(context, block);
  };
  protoOf(JsMainDispatcher).f1c = function (context, block) {
    return this.c2m_1.f1c(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.z1g();
    return tmp0_elvis_lhs == null ? this.c2m_1.toString() : tmp0_elvis_lhs;
  };
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.f2m_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.f2m_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.f2m_1, this.f2m_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.f2m_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.s22_1 = owner;
  }
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.r1t_1 = collector;
    this.s1t_1 = collectContext;
    var tmp = this;
    tmp.t1t_1 = this.s1t_1.gj(0, SafeCollector$collectContextSize$lambda);
    this.u1t_1 = null;
  }
  protoOf(SafeCollector).y1r = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.y9();
    ensureActive(currentContext);
    if (!(this.u1t_1 === currentContext)) {
      checkContext(this, currentContext);
      this.u1t_1 = currentContext;
    }
    return this.r1t_1.y1r(value, $completion);
  };
  protoOf(SafeCollector).ca = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.e1y_1 = value;
  }
  protoOf(WorkaroundAtomicReference).dq = function () {
    return this.e1y_1;
  };
  protoOf(WorkaroundAtomicReference).t2e = function (value) {
    this.e1y_1 = value;
  };
  protoOf(WorkaroundAtomicReference).g1y = function (value) {
    var prev = this.e1y_1;
    this.e1y_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).f1y = function (expected, value) {
    if (this.e1y_1 === expected) {
      this.e1y_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function LockFreeLinkedListNode() {
    this.g1b_1 = this;
    this.h1b_1 = this;
    this.i1b_1 = false;
  }
  protoOf(LockFreeLinkedListNode).j1b = function (node, permissionsBitmask) {
    var prev = this.h1b_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.j2m_1 & permissionsBitmask) === 0 && prev.j1b(node, permissionsBitmask));
    } else {
      node.g1b_1 = this;
      node.h1b_1 = prev;
      prev.g1b_1 = node;
      this.h1b_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).n1d = function (forbiddenElementsBit) {
    this.j1b(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).k1b = function () {
    if (this.i1b_1)
      return false;
    var prev = this.h1b_1;
    var next = this.g1b_1;
    prev.g1b_1 = next;
    next.h1b_1 = prev;
    this.i1b_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).l1b = function (node) {
    if (!(this.g1b_1 === this))
      return false;
    this.j1b(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.j2m_1 = forbiddenElementsBitmask;
  }
  function unwrap(exception) {
    return exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.b1d_1 = null;
  }
  protoOf(CommonThreadLocal).dq = function () {
    var tmp = this.b1d_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).c1d = function (value) {
    this.b1d_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).m15 = invokeOnCompletion$default;
  protoOf(JobSupport).s15 = cancel$default;
  protoOf(JobSupport).hj = plus;
  protoOf(JobSupport).fa = get_0;
  protoOf(JobSupport).gj = fold;
  protoOf(JobSupport).fj = minusKey_0;
  protoOf(CancellableContinuationImpl).h18 = cancel$default_0;
  protoOf(CoroutineDispatcher).fa = get;
  protoOf(CoroutineDispatcher).fj = minusKey;
  protoOf(BufferedChannel).k1o = close$default;
  protoOf(BufferedChannel).m1o = cancel$default_1;
  protoOf(ChannelCoroutine).k1o = close$default;
  protoOf(ChannelFlow).r1q = fuse$default;
  protoOf(SharedFlowImpl).r1q = fuse$default;
  protoOf(StateFlowImpl).r1q = fuse$default;
  protoOf(ReadonlyStateFlow).r1q = fuse$default;
  protoOf(ReadonlySharedFlow).r1q = fuse$default;
  protoOf(CancellableContinuationWithOwner).h18 = cancel$default_0;
  protoOf(MutexImpl).j2i = lock$default;
  protoOf(MutexImpl).l2i = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  NopCollector_instance = new NopCollector();
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_LAZY_getInstance;
  _.$_$.c = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.d = awaitClose;
  _.$_$.e = emitAll_0;
  _.$_$.f = first_0;
  _.$_$.g = first;
  _.$_$.h = await_0;
  _.$_$.i = cancelAndJoin;
  _.$_$.j = coroutineScope;
  _.$_$.k = delay;
  _.$_$.l = joinAll;
  _.$_$.m = supervisorScope;
  _.$_$.n = withContext;
  _.$_$.o = withTimeoutOrNull;
  _.$_$.p = yield_0;
  _.$_$.q = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.r = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.s = Companion_getInstance_1;
  _.$_$.t = Key_getInstance;
  _.$_$.u = Key_instance_1;
  _.$_$.v = Key_instance_2;
  _.$_$.w = Dispatchers_getInstance;
  _.$_$.x = GlobalScope_instance;
  _.$_$.y = Key_instance_3;
  _.$_$.z = ChannelResult;
  _.$_$.a1 = Channel;
  _.$_$.b1 = ProducerScope;
  _.$_$.c1 = cancelConsumed;
  _.$_$.d1 = FlowCollector;
  _.$_$.e1 = MutableSharedFlow_0;
  _.$_$.f1 = MutableSharedFlow;
  _.$_$.g1 = MutableStateFlow;
  _.$_$.h1 = SharedFlow;
  _.$_$.i1 = asSharedFlow;
  _.$_$.j1 = asStateFlow;
  _.$_$.k1 = callbackFlow;
  _.$_$.l1 = channelFlow;
  _.$_$.m1 = debounce;
  _.$_$.n1 = flow;
  _.$_$.o1 = launchIn;
  _.$_$.p1 = mapLatest;
  _.$_$.q1 = onEach;
  _.$_$.r1 = produceIn;
  _.$_$.s1 = receiveAsFlow;
  _.$_$.t1 = stateIn;
  _.$_$.u1 = transformLatest;
  _.$_$.v1 = recoverStackTrace;
  _.$_$.w1 = startCoroutineCancellable_1;
  _.$_$.x1 = SelectImplementation;
  _.$_$.y1 = Mutex_0;
  _.$_$.z1 = CancellableContinuationImpl;
  _.$_$.a2 = CancellationException_0;
  _.$_$.b2 = CompletableDeferred;
  _.$_$.c2 = CompletableJob;
  _.$_$.d2 = CopyableThrowable;
  _.$_$.e2 = CoroutineDispatcher;
  _.$_$.f2 = CoroutineName;
  _.$_$.g2 = CoroutineScope_0;
  _.$_$.h2 = CoroutineScope;
  _.$_$.i2 = invokeOnTimeout;
  _.$_$.j2 = Delay;
  _.$_$.k2 = DisposableHandle;
  _.$_$.l2 = Job_0;
  _.$_$.m2 = MainCoroutineDispatcher;
  _.$_$.n2 = Runnable;
  _.$_$.o2 = SupervisorJob;
  _.$_$.p2 = asDeferred;
  _.$_$.q2 = async;
  _.$_$.r2 = cancel;
  _.$_$.s2 = cancel_2;
  _.$_$.t2 = cancel_0;
  _.$_$.u2 = cancel_1;
  _.$_$.v2 = get_isActive_0;
  _.$_$.w2 = get_isActive;
  _.$_$.x2 = get_job;
  _.$_$.y2 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
