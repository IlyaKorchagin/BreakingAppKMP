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
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.he;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var Continuation = kotlin_kotlin.$_$.sb;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a5;
  var Key_instance = kotlin_kotlin.$_$.z4;
  var equals = kotlin_kotlin.$_$.qc;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.kb;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.lb;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var isInterface = kotlin_kotlin.$_$.qd;
  var toString_0 = kotlin_kotlin.$_$.rk;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var hashCode = kotlin_kotlin.$_$.zc;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.p3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r3;
  var Companion_instance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o3;
  var createFailure = kotlin_kotlin.$_$.xj;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.ob;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.nb;
  var get = kotlin_kotlin.$_$.pb;
  var minusKey = kotlin_kotlin.$_$.qb;
  var ContinuationInterceptor = kotlin_kotlin.$_$.rb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.y2;
  var addSuppressed = kotlin_kotlin.$_$.rj;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var Enum = kotlin_kotlin.$_$.qi;
  var startCoroutine = kotlin_kotlin.$_$.ac;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.gk;
  var Long = kotlin_kotlin.$_$.wi;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.p;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.x2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var Error_0 = kotlin_kotlin.$_$.ri;
  var Error_init_$Init$ = kotlin_kotlin.$_$.v1;
  var Element = kotlin_kotlin.$_$.wb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.nk;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var CancellationException = kotlin_kotlin.$_$.hb;
  var ArrayList = kotlin_kotlin.$_$.g6;
  var SequenceScope = kotlin_kotlin.$_$.pf;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n2;
  var sequence = kotlin_kotlin.$_$.ag;
  var plus = kotlin_kotlin.$_$.xb;
  var get_0 = kotlin_kotlin.$_$.ub;
  var fold = kotlin_kotlin.$_$.tb;
  var minusKey_0 = kotlin_kotlin.$_$.vb;
  var anyToString = kotlin_kotlin.$_$.ec;
  var UnsupportedOperationException = kotlin_kotlin.$_$.qj;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var Companion_getInstance = kotlin_kotlin.$_$.n5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.k;
  var toDuration = kotlin_kotlin.$_$.ji;
  var returnIfSuspended = kotlin_kotlin.$_$.n;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var toLong = kotlin_kotlin.$_$.je;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.n9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var compareTo = kotlin_kotlin.$_$.nc;
  var last = kotlin_kotlin.$_$.bh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var NoSuchElementException = kotlin_kotlin.$_$.xi;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var getKClass = kotlin_kotlin.$_$.f;
  var Unit = kotlin_kotlin.$_$.pj;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var copyOf = kotlin_kotlin.$_$.w7;
  var joinToString = kotlin_kotlin.$_$.y8;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.mb;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.mk;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.s2;
  var Exception = kotlin_kotlin.$_$.si;
  var toLongOrNull = kotlin_kotlin.$_$.zh;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.jb;
  var isSuspendFunction = kotlin_kotlin.$_$.ud;
  var Collection = kotlin_kotlin.$_$.h6;
  var KtList = kotlin_kotlin.$_$.m6;
  var plus_0 = kotlin_kotlin.$_$.ba;
  var listOf_0 = kotlin_kotlin.$_$.m9;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var removeFirstOrNull = kotlin_kotlin.$_$.ea;
  var KtMutableList = kotlin_kotlin.$_$.q6;
  var coerceIn = kotlin_kotlin.$_$.ff;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.v2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.l15(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.l15.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.f15(onCancelling, invokeImmediately, handler) : $super.f15.call(this, onCancelling, invokeImmediately, handler);
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
    return $super === VOID ? this.y17(cause) : $super.y17.call(this, cause);
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
    return get_DefaultDelay().e1c(timeMillis, block, context);
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
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.l15(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.l15.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.s1n(cause) : $super.s1n.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [ReceiveChannel, SendChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, ReceiveChannel, SendChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [1, 0]);
  initMetadataForCoroutine($awaitCloseCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelFlowBuilder, 'ChannelFlowBuilder', VOID, ChannelFlow, VOID, [1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectToCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(CallbackFlowBuilder, 'CallbackFlowBuilder', VOID, ChannelFlowBuilder, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$16, CoroutineImpl);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$17, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$18, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$19, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlowOperator$collectWithContextUndispatched$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$20, CoroutineImpl);
  initMetadataForClass(ChannelFlowOperator, 'ChannelFlowOperator', VOID, ChannelFlow, VOID, [1, 2]);
  initMetadataForLambda(UndispatchedContextCollector$emitRef$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(UndispatchedContextCollector, 'UndispatchedContextCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(StackFrameContinuation, 'StackFrameContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(FlowCoroutine, 'FlowCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForLambda(scopedFlow$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ChannelFlowTransformLatest$flowCollect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', VOID, ChannelFlowOperator, VOID, [1]);
  initMetadataForObject(NopCollector, 'NopCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(debounceInternal$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(mapLatest$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$27, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$28, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$29, CoroutineImpl);
  initMetadataForClass(ReadonlySharedFlow, 'ReadonlySharedFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(onEach$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$30, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(launchIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($emitCOROUTINE$35, CoroutineImpl);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($firstCOROUTINE$33, CoroutineImpl);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(_no_name_provided__qut3iv_2, VOID, VOID, VOID, [Runnable]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl');
  initMetadataForCoroutine($invokeBlockCOROUTINE$41, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$37, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$38, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$39, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$40, CoroutineImpl);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.x2c(owner, $completion) : $super.x2c.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.z2c(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.z2c.call(this, owner);
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
      this.x13(parentContext.aa(Key_instance_3));
    }
    this.a14_1 = parentContext.hj(this);
  }
  protoOf(AbstractCoroutine).t9 = function () {
    return this.a14_1;
  };
  protoOf(AbstractCoroutine).b14 = function () {
    return this.a14_1;
  };
  protoOf(AbstractCoroutine).c14 = function () {
    return protoOf(JobSupport).c14.call(this);
  };
  protoOf(AbstractCoroutine).d14 = function (value) {
  };
  protoOf(AbstractCoroutine).e14 = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).f14 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).g14 = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.e14(state.h14_1, state.j14());
    } else {
      this.d14((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).y9 = function (result) {
    var state = this.k14(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.l14(state);
  };
  protoOf(AbstractCoroutine).l14 = function (state) {
    return this.m14(state);
  };
  protoOf(AbstractCoroutine).n14 = function (exception) {
    handleCoroutineException(this.a14_1, exception);
  };
  protoOf(AbstractCoroutine).o14 = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.a14_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).o14.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).o14.call(this);
  };
  protoOf(AbstractCoroutine).p14 = function (start, receiver, block) {
    start.s14(block, receiver, this);
  };
  function joinAll(_this__u8e3s4, $completion) {
    var tmp = new $joinAllCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $joinAllCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i16_1 = _this__u8e3s4;
  }
  protoOf($joinAllCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.j16_1 = this.i16_1;
            this.k16_1 = this.j16_1.g();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.k16_1.h()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.l16_1 = this.k16_1.i();
            var tmp_1 = this;
            tmp_1.m16_1 = this.l16_1;
            this.n9_1 = 2;
            suspendResult = this.m16_1.i15(this);
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.n16() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.p14(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.t9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.aa(Key_instance), oldContext.aa(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.a14_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.t16();
    }
    return tmp$ret$0;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.n16() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.p14(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).x15 = function (exception) {
    handleCoroutineException(this.a14_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.a17_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).a15 = function () {
    startCoroutineCancellable_0(this.a17_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.s16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.s16_1.atomicfu$compareAndSet(0, 1))
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
    var this_0 = $this.s16_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.s16_1.atomicfu$compareAndSet(0, 2))
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
    this.s16_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).m14 = function (state) {
    this.l14(state);
  };
  protoOf(DispatchedCoroutine).l14 = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.e17_1), recoverResult(state, this.e17_1));
  };
  protoOf(DispatchedCoroutine).t16 = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.w14());
    if (state instanceof CompletedExceptionally)
      throw state.h14_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n17_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.n17_1.z15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).r17 = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.v17_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).a15 = function () {
    startCoroutineCancellable_0(this.v17_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.k18(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function DisposeOnCancel(handle) {
    this.l18_1 = handle;
  }
  protoOf(DisposeOnCancel).m18 = function (cause) {
    return this.l18_1.n18();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.l18_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp4_safe_receiver = delegate.u18();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp4_safe_receiver.v18()) {
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
    return $this.j18_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp5_subject = $this.w14();
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
    if (get_isReusableMode($this.x18_1)) {
      var tmp_0 = $this.f18_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).w18();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.f18_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.y18(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.h18_1.kotlinx$atomicfu$value & 536870911;
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
      segment.d19(index, cause, $this.t9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.t9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.h18_1.atomicfu$compareAndSet(cur, tmp$ret$2))
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
    var this_0 = $this.h18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.h18_1.atomicfu$compareAndSet(cur, tmp$ret$2))
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
    var tmp0_elvis_lhs = $this.t9().aa(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.j18_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.i18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.i18_1.atomicfu$compareAndSet(state, handler))
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
            if (!state.m19()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp13_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.h14_1;
              if (isInterface(handler, CancelHandler)) {
                $this.j19(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.f19_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.k19()) {
                $this.j19(handler, state.i19_1);
                return Unit_instance;
              }
              var update = state.l19(VOID, handler);
              if ($this.i18_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.i18_1.atomicfu$compareAndSet(state, update_0))
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
    var this_0 = $this.i18_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, $this.x18_1, onCancellation, idempotent);
          if (!$this.i18_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (state instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && state.h19_1 === idempotent) {
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
      $this.n19();
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
    this.f18_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.g18_1 = this.f18_1.t9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << 29) + 536870911 | 0;
    tmp.h18_1 = atomic$int$1(tmp$ret$0);
    this.i18_1 = atomic$ref$1(Active_instance);
    this.j18_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).o19 = function () {
    return this.f18_1;
  };
  protoOf(CancellableContinuationImpl).t9 = function () {
    return this.g18_1;
  };
  protoOf(CancellableContinuationImpl).w14 = function () {
    return this.i18_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).x14 = function () {
    var tmp = this.w14();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).y14 = function () {
    var tmp = this.w14();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).p19 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.x14()) {
      handle.n18();
      this.j18_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).v18 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.i18_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.h19_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.n19();
      return false;
    }
    var tmp_0 = this.h18_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.i18_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).q19 = function () {
    return this.w14();
  };
  protoOf(CancellableContinuationImpl).r19 = function (takenState, cause) {
    var this_0 = this.i18_1;
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
            if (!!state.k19()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.l19(VOID, VOID, VOID, VOID, cause);
            if (this.i18_1.atomicfu$compareAndSet(state, update)) {
              state.s19(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.i18_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).y17 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.i18_1;
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
        if (!this.i18_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (isInterface(state, CancelHandler)) {
          this.j19(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.x18_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).t19 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.y17(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).j19 = function (handler, cause) {
    var tmp;
    try {
      handler.m18(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).u19 = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.t9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).v19 = function (parent) {
    return parent.b15();
  };
  protoOf(CancellableContinuationImpl).t16 = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.w19();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.w19();
    }
    var state = this.w14();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.h14_1, this);
    if (get_isCancellableMode(this.x18_1)) {
      var job = this.t9().aa(Key_instance_3);
      if (!(job == null) && !job.c14()) {
        var cause = job.b15();
        this.r19(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.x19(state);
  };
  protoOf(CancellableContinuationImpl).w19 = function () {
    var tmp = this.f18_1;
    var tmp10_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp0_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.y19(this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.n19();
    this.y17(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).y9 = function (result) {
    return this.z19(toState(result, this), this.x18_1);
  };
  protoOf(CancellableContinuationImpl).c18 = function (value, onCancellation) {
    var tmp = this.x18_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resume.<anonymous>' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.a1a(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).d18 = function (value, onCancellation) {
    return this.a1a(value, this.x18_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).b1a = function (segment, index) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.h18_1;
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
  protoOf(CancellableContinuationImpl).a18 = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).k18 = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).a1a = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.i18_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState(this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.i18_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.f1a()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                this.u19(onCancellation, state.h14_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).z19 = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.a1a(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.a1a.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).n19 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.n18();
    this.j18_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).w17 = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).x17 = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.x18_1);
  };
  protoOf(CancellableContinuationImpl).b18 = function (_this__u8e3s4, value) {
    var tmp = this.f18_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.p18_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.x18_1;
    }
    this.z19(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).x19 = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.e19_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).g1a = function (state) {
    var tmp20_safe_receiver = protoOf(DispatchedTask).g1a.call(this, state);
    var tmp;
    if (tmp20_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp20_safe_receiver, this.f18_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.h1a() + '(' + toDebugString(this.f18_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).h1a = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.k1a_1 = handler;
  }
  protoOf(UserSupplied).m18 = function (cause) {
    this.k1a_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.k1a_1) + '@' + get_hexAddress(this) + ']';
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
    this.e19_1 = result;
    this.f19_1 = cancelHandler;
    this.g19_1 = onCancellation;
    this.h19_1 = idempotentResume;
    this.i19_1 = cancelCause;
  }
  protoOf(CompletedContinuation).k19 = function () {
    return !(this.i19_1 == null);
  };
  protoOf(CompletedContinuation).s19 = function (cont, cause) {
    var tmp21_safe_receiver = this.f19_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.j19(tmp21_safe_receiver, cause);
    }
    var tmp22_safe_receiver = this.g19_1;
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.u19(tmp22_safe_receiver, cause, this.e19_1);
    }
  };
  protoOf(CompletedContinuation).l1a = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).l19 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.e19_1 : result;
    cancelHandler = cancelHandler === VOID ? this.f19_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.g19_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.h19_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.i19_1 : cancelCause;
    return $super === VOID ? this.l1a(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.l1a.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.e19_1) + ', cancelHandler=' + toString_0(this.f19_1) + ', onCancellation=' + toString_0(this.g19_1) + ', idempotentResume=' + toString_0(this.h19_1) + ', cancelCause=' + toString_0(this.i19_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.e19_1 == null ? 0 : hashCode(this.e19_1);
    result = imul(result, 31) + (this.f19_1 == null ? 0 : hashCode(this.f19_1)) | 0;
    result = imul(result, 31) + (this.g19_1 == null ? 0 : hashCode(this.g19_1)) | 0;
    result = imul(result, 31) + (this.h19_1 == null ? 0 : hashCode(this.h19_1)) | 0;
    result = imul(result, 31) + (this.i19_1 == null ? 0 : hashCode(this.i19_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.e19_1, tmp0_other_with_cast.e19_1))
      return false;
    if (!equals(this.f19_1, tmp0_other_with_cast.f19_1))
      return false;
    if (!equals(this.g19_1, tmp0_other_with_cast.g19_1))
      return false;
    if (!equals(this.h19_1, tmp0_other_with_cast.h19_1))
      return false;
    if (!equals(this.i19_1, tmp0_other_with_cast.i19_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.q1a_1 = child;
  }
  protoOf(ChildContinuation).r1a = function () {
    return true;
  };
  protoOf(ChildContinuation).m18 = function (cause) {
    this.q1a_1.t19(this.q1a_1.v19(this.w1a()));
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
    this.m1b_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m1b_1.z15(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.x13(parent);
  }
  protoOf(CompletableDeferredImpl).k15 = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).r17 = function ($completion) {
    var tmp = new $awaitCOROUTINE$3(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(CompletableDeferredImpl).p1b = function (value) {
    return this.q1b(value);
  };
  protoOf(CompletableDeferredImpl).r1b = function (exception) {
    return this.q1b(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.h14_1 = cause;
    this.i14_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).j14 = function () {
    return this.i14_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).m19 = function () {
    return this.i14_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.h14_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.e1a_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).f1a = function () {
    return this.e1a_1.atomicfu$compareAndSet(false, true);
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
      var exception = recoverStackTrace(state.h14_1, uCont);
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
  protoOf(CoroutineDispatcher).v1b = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).x1b = function (context, block) {
    return this.w1b(context, block);
  };
  protoOf(CoroutineDispatcher).ba = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).ca = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.y1b();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.aa(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp23_safe_receiver.z1b(context, exception);
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
    this.b1c_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.b1c_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.b1c_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.b1c_1 === tmp0_other_with_cast.b1c_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.aa(Key_instance_3) == null) ? context : context.hj(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.t9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.b14().aa(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.l15(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp24_safe_receiver = _this__u8e3s4.b14().aa(Key_instance_3);
    var tmp0_elvis_lhs = tmp24_safe_receiver == null ? null : tmp24_safe_receiver.c14();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).b14 = function () {
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
  protoOf(CoroutineStart).s14 = function (block, receiver, completion) {
    var tmp;
    switch (this.u2_1) {
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
  protoOf(CoroutineStart).n16 = function () {
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
    var tmp = _this__u8e3s4.aa(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.b1(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.b1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.t9()).d1c(timeMillis, cancellable);
    }
    return cancellable.t16();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.h1c_1 = new Long(0, 0);
    this.i1c_1 = false;
    this.j1c_1 = null;
  }
  protoOf(EventLoop).k1c = function () {
    var tmp0_elvis_lhs = this.j1c_1;
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
    task.i1a();
    return true;
  };
  protoOf(EventLoop).l1c = function (task) {
    var tmp0_elvis_lhs = this.j1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.j1c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.qg(task);
  };
  protoOf(EventLoop).m1c = function () {
    return this.h1c_1.b1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).n1c = function () {
    var tmp27_safe_receiver = this.j1c_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.q();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).o1c = function (unconfined) {
    this.h1c_1 = this.h1c_1.a3(delta(this, unconfined));
    if (!unconfined)
      this.i1c_1 = true;
  };
  protoOf(EventLoop).p1c = function (unconfined) {
    this.h1c_1 = this.h1c_1.b3(delta(this, unconfined));
    if (this.h1c_1.b1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.i1c_1) {
      this.q1c();
    }
  };
  protoOf(EventLoop).q1c = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.r1c_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).s1c = function () {
    var tmp0_elvis_lhs = this.r1c_1.zp();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().r1c_1.u1c(this_0);
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
  protoOf(NonDisposableHandle).v14 = function () {
    return null;
  };
  protoOf(NonDisposableHandle).n18 = function () {
  };
  protoOf(NonDisposableHandle).p15 = function (cause) {
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
    var tmp41_safe_receiver = _this__u8e3s4.aa(Key_instance_3);
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
      tmp = _this__u8e3s4.h15(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.r1a();
      tmp = _this__u8e3s4.f15(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.c14())
      throw _this__u8e3s4.b15();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.aa(Key_instance_3);
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
    _this__u8e3s4.m15();
    return _this__u8e3s4.i15($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp39_safe_receiver = _this__u8e3s4.aa(Key_instance_3);
    var tmp0_elvis_lhs = tmp39_safe_receiver == null ? null : tmp39_safe_receiver.c14();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.l15(CancellationException_0(message, cause));
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.z1c_1 = handle;
  }
  protoOf(DisposeOnCompletion).r1a = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).m18 = function (cause) {
    return this.z1c_1.n18();
  };
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp40_safe_receiver = _this__u8e3s4.aa(Key_instance_3);
    if (tmp40_safe_receiver == null)
      null;
    else {
      tmp40_safe_receiver.l15(cause);
    }
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.m18(p0);
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
    this.a1d_1 = isActive;
  }
  protoOf(Empty).c14 = function () {
    return this.a1d_1;
  };
  protoOf(Empty).x1a = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.a1d_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).c14 = function () {
    return true;
  };
  protoOf(NodeList).x1a = function () {
    return this;
  };
  protoOf(NodeList).e1d = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.p8('List{');
    this_0.p8(state);
    this_0.p8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.y1a_1;
    while (!equals(cur, this)) {
      // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.p8(', ');
        this_0.o8(node);
      }
      cur = cur.y1a_1;
    }
    this_0.p8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.e1d('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).w1a = function () {
    var tmp = this.v1a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).c14 = function () {
    return true;
  };
  protoOf(JobNode).x1a = function () {
    return null;
  };
  protoOf(JobNode).n18 = function () {
    return this.w1a().j15(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.w1a()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.j1d_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.j1d_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.h14_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.k1d();
    var exceptions = state.l1d(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.x15(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).m19();
      }
    }
    if (!wasCancelling) {
      $this.u15(finalException);
    }
    $this.g14(finalState);
    var casSuccess = $this.v13_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.k1d()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.f14() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
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
    var first = exceptions.o(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.g();
        while (tmp0_iterator_0.h()) {
          var element_0 = tmp0_iterator_0.i();
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
    if (exceptions.j() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.j());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.g();
    while (_iterator__ex2g4s.h()) {
      var exception = _iterator__ex2g4s.i();
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
    if (!$this.v13_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.u15(null);
    $this.g14(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.u14();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp47_safe_receiver.n18();
      $this.t14(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.h14_1;
    if (state instanceof JobNode) {
      try {
        state.m18(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.n14(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.x1a();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp49_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.u15(cause);
    list.f1d(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.y1a_1;
    while (!equals(cur, list)) {
      // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyCancelling.<anonymous>' call
        tmp = node.r1a();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.m18(cause);
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
      cur = cur.y1a_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.n14(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.v15())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.u14();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.p15(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    _this__u8e3s4.f1d(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.y1a_1;
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
          node.m18(cause);
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
      cur = cur.y1a_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.n14(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.a1d_1)
        return 0;
      if (!$this.v13_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.a15();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.v13_1.atomicfu$compareAndSet(state, state.m1d_1))
          return -1;
        $this.a15();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.a1d_1 ? list : new InactiveNodeList(list);
    $this.v13_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.d1b(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.y1a_1;
    $this.v13_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.w14();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.t16();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.w14();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.n1d();
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
        tmp_0 = new JobCancellationException(null == null ? $this.f14() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).s15();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.w14();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.o1d())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.k1d();
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
            state.p1d(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.q1d();
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
            notifyCancelling($this, state.g1d_1, notifyRootCause);
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
            if (state.c14()) {
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
    var tmp0_elvis_lhs = state.x1a();
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
    if (!$this.v13_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.n1d())
      return get_COMPLETING_ALREADY();
    finishing.r1d(true);
    if (!(finishing === state)) {
      if (!$this.v13_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.k1d();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.p1d(tmp65_safe_receiver.h14_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.q1d();
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
    list.f1d(2);
    var anotherChild = nextChild(list, $this);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp67_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.h14_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.w1d_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
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
    state.g1d_1.f1d(2);
    var waitChildAgain = nextChild(lastChild, $this);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.m14(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.a1b_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.z1a_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.y1a_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.a1b_1)
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
      tmp = state.k1d() ? 'Cancelling' : state.n1d() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.c14() ? 'Active' : 'New';
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
    this.g1d_1 = list;
    this.h1d_1 = atomic$boolean$1(isCompleting);
    this.i1d_1 = atomic$ref$1(rootCause);
    this.j1d_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).x1a = function () {
    return this.g1d_1;
  };
  protoOf(Finishing).r1d = function (value) {
    this.h1d_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).n1d = function () {
    return this.h1d_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).x1d = function (value) {
    this.i1d_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).q1d = function () {
    return this.i1d_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).o1d = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).k1d = function () {
    return !(this.q1d() == null);
  };
  protoOf(Finishing).c14 = function () {
    return this.q1d() == null;
  };
  protoOf(Finishing).l1d = function (proposedException) {
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
    var rootCause = this.q1d();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.r2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.e(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).p1d = function (exception) {
    var rootCause = this.q1d();
    if (rootCause == null) {
      this.x1d(exception);
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
    return 'Finishing[cancelling=' + this.k1d() + ', completing=' + this.n1d() + ', rootCause=' + toString_0(this.q1d()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.g1d_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.c1e_1 = parent;
    this.d1e_1 = state;
    this.e1e_1 = child;
    this.f1e_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).r1a = function () {
    return false;
  };
  protoOf(ChildCompletion).m18 = function (cause) {
    continueCompleting(this.c1e_1, this.d1e_1, this.e1e_1, this.f1e_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.m1e_1 = job;
  }
  protoOf(AwaitContinuation).v19 = function (parent) {
    var state = this.m1e_1.w14();
    if (state instanceof Finishing) {
      var tmp73_safe_receiver = state.q1d();
      if (tmp73_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp73_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.h14_1;
    return parent.b15();
  };
  protoOf(AwaitContinuation).h1a = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.p19();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.t16();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.v1e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).f1f = function ($this$sequence, $completion) {
    var tmp = this.g1f($this$sequence, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ha = function (p1, $completion) {
    return this.f1f(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.x1e_1 = this.v1e_1.w14();
            var tmp_0 = this.x1e_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.n9_1 = 6;
              suspendResult = this.w1e_1.wh(this.x1e_1.w1d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.x1e_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.y1e_1 = this.x1e_1.x1a();
                if (this.y1e_1 == null) {
                  this.z1e_1 = null;
                  this.n9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.a1f_1 = this.y1e_1;
                  var tmp_3 = this;
                  tmp_3.b1f_1 = this.a1f_1;
                  var tmp_4 = this;
                  tmp_4.c1f_1 = this.b1f_1;
                  this.d1f_1 = this.c1f_1.y1a_1;
                  this.n9_1 = 1;
                  continue $sm;
                }
              } else {
                this.n9_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.d1f_1, this.c1f_1)) {
              this.n9_1 = 4;
              continue $sm;
            }

            var tmp_5 = this;
            tmp_5.e1f_1 = this.d1f_1;
            var tmp_6 = this.e1f_1;
            if (tmp_6 instanceof ChildHandleNode) {
              this.n9_1 = 2;
              suspendResult = this.w1e_1.wh(this.e1f_1.w1d_1, this);
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
            this.d1f_1 = this.d1f_1.y1a_1;
            this.n9_1 = 1;
            continue $sm;
          case 4:
            this.z1e_1 = Unit_instance;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.n9_1 = 7;
            continue $sm;
          case 6:
            this.n9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.q9_1;
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
  protoOf(JobSupport$_get_children_$slambda_k839f8).g1f = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.v1e_1, completion);
    i.w1e_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.f1f($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.v13_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.w13_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).v = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).t14 = function (value) {
    this.w13_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).u14 = function () {
    return this.w13_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).v14 = function () {
    var tmp45_safe_receiver = this.u14();
    return tmp45_safe_receiver == null ? null : tmp45_safe_receiver.v14();
  };
  protoOf(JobSupport).x13 = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.t14(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.z14();
    var handle = parent.t15(this);
    this.t14(handle);
    if (this.x14()) {
      handle.n18();
      this.t14(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).w14 = function () {
    return this.v13_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).c14 = function () {
    var state = this.w14();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.c14();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).x14 = function () {
    var tmp = this.w14();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).y14 = function () {
    var state = this.w14();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.k1d();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).z14 = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.w14();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).a15 = function () {
  };
  protoOf(JobSupport).b15 = function () {
    var state = this.w14();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.q1d();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.c15(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.d15(state.h14_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).c15 = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.f14() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).d15 = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.c15(_this__u8e3s4, message) : $super.c15.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).e15 = function (handler) {
    return this.h15(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).f15 = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.h15(invokeImmediately, tmp);
  };
  protoOf(JobSupport).h15 = function (invokeImmediately, node) {
    node.v1a_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.w14();
        if (state instanceof Empty) {
          if (state.a1d_1) {
            if (this.v13_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.x1a();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
              var tmp;
              if (node.r1a()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.q1d();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.b1b(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.m18(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.b1b(node, 1);
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
      var tmp_1 = this.w14();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.m18(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.h14_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).i15 = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.t9();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).j15 = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.w14();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.v13_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.x1a() == null)) {
            node.c1b();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).k15 = function () {
    return false;
  };
  protoOf(JobSupport).l15 = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.f14() : null, null, this);
    } else {
      tmp = cause;
    }
    this.n15(tmp);
  };
  protoOf(JobSupport).f14 = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).n15 = function (cause) {
    this.r15(cause);
  };
  protoOf(JobSupport).o15 = function (parentJob) {
    this.r15(parentJob);
  };
  protoOf(JobSupport).p15 = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.r15(cause) && this.w15();
  };
  protoOf(JobSupport).q15 = function (cause) {
    return this.r15(cause);
  };
  protoOf(JobSupport).r15 = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.k15()) {
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
      this.m14(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).s15 = function () {
    var state = this.w14();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.q1d();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.h14_1;
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
  protoOf(JobSupport).q1b = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var state = this.w14();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.m14(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).k14 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.w14();
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
  protoOf(JobSupport).t1b = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).t15 = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
    this_0.v1a_1 = this;
    var node = this_0;
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList.<anonymous>' call
        var state = this.w14();
        if (state instanceof Empty) {
          if (state.a1d_1) {
            if (this.v13_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$1 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.x1a();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              // Inline function 'kotlinx.coroutines.JobSupport.attachChild.<anonymous>' call
              var addedBeforeCancellation = list.b1b(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.b1b(node, 3);
                var latestState = this.w14();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.q1d();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.h14_1;
                }
                var rootCause = tmp_0;
                node.m18(rootCause);
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
    var tmp_2 = this.w14();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.m18(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.h14_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).n14 = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).u15 = function (cause) {
  };
  protoOf(JobSupport).v15 = function () {
    return false;
  };
  protoOf(JobSupport).w15 = function () {
    return true;
  };
  protoOf(JobSupport).x15 = function (exception) {
    return false;
  };
  protoOf(JobSupport).g14 = function (state) {
  };
  protoOf(JobSupport).m14 = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.y15() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).y15 = function () {
    return this.o14() + '{' + stateString(this, this.w14()) + '}';
  };
  protoOf(JobSupport).o14 = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).z15 = function ($completion) {
    $l$loop: while (true) {
      var state = this.w14();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.h14_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
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
    this.m1d_1 = list;
  }
  protoOf(InactiveNodeList).x1a = function () {
    return this.m1d_1;
  };
  protoOf(InactiveNodeList).c14 = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.m1d_1.e1d('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.l1f_1 = handler;
  }
  protoOf(InvokeOnCompletion).r1a = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).m18 = function (cause) {
    return this.l1f_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.q1f_1 = handler;
    this.r1f_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).r1a = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).m18 = function (cause) {
    if (this.r1f_1.atomicfu$compareAndSet(false, true))
      this.q1f_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.w1f_1 = continuation;
  }
  protoOf(ResumeOnCompletion).r1a = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).m18 = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.w1f_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.y9(tmp$ret$0);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.w1d_1 = childJob;
  }
  protoOf(ChildHandleNode).v14 = function () {
    return this.w1a();
  };
  protoOf(ChildHandleNode).r1a = function () {
    return true;
  };
  protoOf(ChildHandleNode).m18 = function (cause) {
    return this.w1d_1.o15(this.w1a());
  };
  protoOf(ChildHandleNode).p15 = function (cause) {
    return this.w1a().p15(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.x1f_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.c1g_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).r1a = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).m18 = function (cause) {
    var state = this.w1a().w14();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = this.c1g_1;
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.h14_1;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_0.y9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var this_1 = this.c1g_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      this_1.y9(tmp$ret$2);
    }
  };
  function IncompleteStateBox(state) {
    this.x1f_1 = state;
  }
  function handlesExceptionF($this) {
    var tmp = $this.u14();
    var tmp75_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp0_elvis_lhs = tmp75_safe_receiver == null ? null : tmp75_safe_receiver.w1a();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.w15())
        return true;
      var tmp_1 = parentJob.u14();
      var tmp76_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp76_safe_receiver == null ? null : tmp76_safe_receiver.w1a();
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
    this.x13(parent);
    this.f1g_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).k15 = function () {
    return true;
  };
  protoOf(JobImpl).w15 = function () {
    return this.f1g_1;
  };
  protoOf(JobImpl).s1b = function () {
    return this.q1b(Unit_instance);
  };
  protoOf(JobImpl).r1b = function (exception) {
    return this.q1b(new CompletedExceptionally(exception));
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
    var tmp0_elvis_lhs = this.i1g();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).i1g = function () {
    var main = Dispatchers_getInstance().n1g();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.h1g();
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
  protoOf(SupervisorJobImpl).p15 = function (cause) {
    return false;
  };
  function supervisorScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.supervisorScope.<anonymous>' call
    var coroutine = new SupervisorCoroutine($completion.t9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function SupervisorCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(SupervisorCoroutine).p15 = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.v1g_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).c1c = function () {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.v1g_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(this_0, this);
    return this_0;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$4(timeMillis, block, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.t9(), uCont);
    this.l1h_1 = time;
  }
  protoOf(TimeoutCoroutine).i1a = function () {
    this.q15(TimeoutCancellationException_0(this.l1h_1, get_delay(this.a14_1), this));
  };
  protoOf(TimeoutCoroutine).o14 = function () {
    return protoOf(ScopeCoroutine).o14.call(this) + '(timeMillis=' + this.l1h_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.e17_1;
    var context = cont.t9();
    disposeOnCompletion(coroutine, get_delay(context).e1c(coroutine.l1h_1, coroutine, coroutine.a14_1));
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
      tmp = tmp77_safe_receiver.f1c(tmp$ret$0);
    }
    var tmp0_elvis_lhs = tmp;
    var message = tmp0_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp0_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$4(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1h_1 = timeMillis;
    this.f1h_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$4).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.e1h_1.b1(new Long(0, 0)) <= 0)
              return null;
            this.g1h_1 = {_v: null};
            this.o9_1 = 2;
            this.n9_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.e1h_1, this);
            this.g1h_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.f1h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.o9_1 = 3;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.q9_1;
              if (e.v1g_1 === this.g1h_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).v1b = function (context) {
    return false;
  };
  protoOf(Unconfined).w1b = function (context, block) {
    var yieldContext = context.aa(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.o1h_1 = true;
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
    this.o1h_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.t9();
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
      if (cont.p18_1.v1b(context)) {
        cont.p1h(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.p1h(context.hj(yieldContext), Unit_instance);
        if (yieldContext.o1h_1) {
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
    $this.v1h_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.u1h_1 = channel;
    this.v1h_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).w1h = function () {
    return ensureNotNull(this.u1h_1);
  };
  protoOf(ChannelSegment).x1h = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).y1h = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).z1h = function (index) {
    var tmp = this.v1h_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).a1i = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.z1h(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.b1i(index);
    return this_0;
  };
  protoOf(ChannelSegment).b1i = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).c1i = function (index) {
    return this.v1h_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).d1i = function (index, value) {
    this.v1h_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).e1i = function (index, from, to) {
    return this.v1h_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).f1i = function (index, update) {
    return this.v1h_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).d19 = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.z1h(index_0);
    $l$loop: while (true) {
      var cur = this.c1i(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.e1i(index_0, cur, update)) {
          this.b1i(index_0);
          this.s1i(index_0, !isSender);
          if (isSender) {
            var tmp109_safe_receiver = this.w1h().h1i_1;
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
          this.b1i(index_0);
          if (isSender) {
            var tmp110_safe_receiver = this.w1h().h1i_1;
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
  protoOf(ChannelSegment).s1i = function (index, receiver) {
    if (receiver) {
      var tmp = this.w1h();
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = this.b19_1;
      var other = get_SEGMENT_SIZE();
      var tmp$ret$1 = this_0.c3(toLong(other)).a3(toLong(index));
      tmp.t1i(tmp$ret$1);
    }
    this.u1i();
  };
  function onClosedHasNext($this) {
    $this.g1j_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.i1j_1.j1j();
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
      $this.h1j_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.i1j_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.b1(this_0.k1j()) < 0) {
          segment.e1j();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.n1i_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.l1j()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.j1i_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.d3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.e3(toLong(other_0)).g1();
            if (!segment_0.b19_1.equals(id)) {
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
              if (r_0.b1(this_0.k1j()) < 0) {
                segment_0.e1j();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.e1j();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.g1j_1 = element;
              $this.h1j_1 = null;
              var tmp96_safe_receiver = $this.i1j_1.h1i_1;
              cancellable.d18(true, tmp96_safe_receiver == null ? null : bindCancellationFun(tmp96_safe_receiver, $this.i1j_1, element));
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.e1j();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.g1j_1 = element_0;
        $this.h1j_1 = null;
        var tmp96_safe_receiver_0 = $this.i1j_1.h1i_1;
        cancellable.d18(true, tmp96_safe_receiver_0 == null ? null : bindCancellationFun(tmp96_safe_receiver_0, $this.i1j_1, element_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.w19();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.t16();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.h1j_1);
    $this.h1j_1 = null;
    $this.g1j_1 = get_CHANNEL_CLOSED();
    var cause = $this.i1j_1.j1j();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y9(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1j_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$8).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            if (!(this.u1j_1.g1j_1 === get_NO_RECEIVE_RESULT()) && !(this.u1j_1.g1j_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.v1j_1 = true;
              this.n9_1 = 11;
              continue $sm;
            } else {
              this.n9_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.x1j_1 = this.u1j_1.i1j_1;
            var tmp_2 = this;
            tmp_2.y1j_1 = null;
            this.z1j_1 = this.x1j_1.n1i_1.kotlinx$atomicfu$value;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n9_1 = 9;
              continue $sm;
            }

            if (this.x1j_1.l1j()) {
              var tmp_3 = this;
              tmp_3.w1j_1 = onClosedHasNext(this.u1j_1);
              this.n9_1 = 10;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.a1k_1 = this.x1j_1.j1i_1.atomicfu$getAndIncrement$long();
            var tmp_4 = this;
            var this_0 = this.a1k_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.b1k_1 = this_0.d3(toLong(other));
            var tmp_5 = this;
            var this_1 = this.a1k_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.c1k_1 = this_1.e3(toLong(other_0)).g1();
            if (!this.z1j_1.b19_1.equals(this.b1k_1)) {
              this.d1k_1 = findSegmentReceive(this.x1j_1, this.b1k_1, this.z1j_1);
              if (this.d1k_1 == null) {
                this.n9_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                this.e1k_1 = this.d1k_1;
                this.n9_1 = 4;
                continue $sm;
              }
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.z1j_1 = this.e1k_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.f1k_1 = updateCellReceive(this.x1j_1, this.z1j_1, this.c1k_1, this.a1k_1, this.y1j_1);
            if (this.f1k_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_7 = this;
              var tmp_8 = this.y1j_1;
              var tmp92_safe_receiver = (!(tmp_8 == null) ? isInterface(tmp_8, Waiter) : false) ? tmp_8 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, this.x1j_1, this.z1j_1, this.c1k_1);
              }
              this.z1j_1;
              this.c1k_1;
              this.a1k_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.f1k_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.a1k_1.b1(this.x1j_1.k1j()) < 0) {
                  this.z1j_1.e1j();
                }
                this.n9_1 = 2;
                var tmp_9 = this;
                continue $sm;
              } else {
                if (this.f1k_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_10 = this;
                  tmp_10.h1k_1 = this.z1j_1;
                  var tmp_11 = this;
                  tmp_11.i1k_1 = this.c1k_1;
                  var tmp_12 = this;
                  tmp_12.j1k_1 = this.a1k_1;
                  this.n9_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.u1j_1, this.h1k_1, this.i1k_1, this.j1k_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_13 = this;
                  this.z1j_1.e1j();
                  var tmp_14 = this.f1k_1;
                  var element = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                  this.u1j_1.g1j_1 = element;
                  tmp_13.g1k_1 = true;
                  this.n9_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_15 = this;
            return suspendResult;
          case 7:
            this.w1j_1 = this.g1k_1;
            this.n9_1 = 10;
            continue $sm;
          case 8:
            throw this.q9_1;
          case 9:
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 10;
            continue $sm;
          case 10:
            this.v1j_1 = this.w1j_1;
            this.n9_1 = 11;
            continue $sm;
          case 11:
            return this.v1j_1;
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
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.k1i_1.kotlinx$atomicfu$value;
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
    cancellable.p19();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp79_safe_receiver = $this.h1i_1;
      var tmp80_safe_receiver = tmp79_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp79_safe_receiver, element);
      if (tmp80_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp80_safe_receiver, $this.k1k());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp80_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.y9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.k1k();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.y9(tmp$ret$3);
    }
    return cancellable.t16();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.e1j();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y9(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.y9(tmp$ret$2);
          break;
        case 2:
          prepareSenderForSuspension(cancellable, $this, segment, index);
          break;
        case 4:
          if (s.b1($this.l1k()) < 0) {
            segment.e1j();
          }

          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.e1j();
          $l$block_4: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.m1i_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.i1i_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.d3(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.e3(toLong(other_0)).g1();
              if (!segment_0.b19_1.equals(id)) {
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
                  segment_0.e1j();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y9(tmp$ret$8);
                  break $l$block_4;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.y9(tmp$ret$10);
                  break $l$block_4;
                case 2:
                  if (closed) {
                    segment_0.u1i();
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
                  if (s_0.b1($this.l1k()) < 0) {
                    segment_0.e1j();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_4;
                case 5:
                  segment_0.e1j();
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
        cancellable.w19();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.t16();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.b1a(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp81_safe_receiver = $this.h1i_1;
    if (tmp81_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp81_safe_receiver, element, cont.t9());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.k1k(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.y9(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.y1h(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.c1i(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.e1i(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.e1i(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.b1i(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.d1i(index, get_DONE_RCV());
          $this.m1k();
          tmp = 0;
        } else {
          if (!(segment.f1i(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.s1i(index, true);
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
      var state = segment.c1i(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.e1i(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.e1i(index, null, get_INTERRUPTED_SEND())) {
              segment.s1i(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.e1i(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.e1i(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.b1i(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.b1i(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.b1i(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.b1i(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.n1k_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.d1i(index, get_DONE_RCV());
          $this.m1k();
          tmp_0 = 0;
        } else {
          if (!(segment.f1i(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.s1i(index, true);
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
    var tmp$ret$0 = curSendersAndCloseStatus.m3(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.b1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.l1k();
      var other = $this.g1i_1;
      var tmp$ret$0 = this_0.a3(toLong(other));
      tmp = curSenders.b1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.s1k($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().q1k(element);
        var tmp86_safe_receiver = $this.h1i_1;
        tmp = tryResume0(_this__u8e3s4.r1k_1, new ChannelResult(tmp_0), tmp86_safe_receiver == null ? null : bindCancellationFunResult(tmp86_safe_receiver, $this));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.o1k(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp87_safe_receiver = $this.h1i_1;
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
        if (r.b1($this.k1j()) < 0) {
          segment.e1j();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.n1i_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.l1j()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.j1i_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.d3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.e3(toLong(other_0)).g1();
            if (!segment_0.b19_1.equals(id)) {
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
              if (r_0.b1($this.k1j()) < 0) {
                segment_0.e1j();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.e1j();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp88_safe_receiver = $this.h1i_1;
              var onCancellation = tmp88_safe_receiver == null ? null : bindCancellationFun_0(tmp88_safe_receiver, $this);
              cancellable.d18(element, onCancellation);
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.e1j();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp88_safe_receiver_0 = $this.h1i_1;
        var onCancellation_0 = tmp88_safe_receiver_0 == null ? null : bindCancellationFun_0(tmp88_safe_receiver_0, $this);
        cancellable.d18(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.w19();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.t16();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.t1k();
    _this__u8e3s4.b1a(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.y9(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.c1i(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.i1i_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
      if (r.b1(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.e1i(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.e1i(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.a1i(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.c1i(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.i1i_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
        if (r.b1(senders) < 0) {
          if (segment.e1i(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.e1i(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.e1i(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.a1i(index);
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
        if (segment.e1i(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.n1k_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.d1i(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.a1i(index);
          } else {
            segment.d1i(index, get_INTERRUPTED_SEND());
            segment.s1i(index, false);
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
        var trySelectResult = _this__u8e3s4.b1l($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.b1i(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.u1k_1, true);
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
    var segment = $this.o1i_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.k1i_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.d3(toLong(other));
      var s = $this.k1j();
      if (s.b1(b) <= 0) {
        if (segment.b19_1.b1(id) < 0 && !(segment.a1j() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.b19_1.equals(id)) {
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
      var i = b.e3(toLong(other_0)).g1();
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
    var state = segment.c1i(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.b1($this.j1i_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.e1i(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.d1i(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.d1i(index, get_INTERRUPTED_SEND());
            segment.s1i(index, false);
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
      var state = segment.c1i(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.b1($this.j1i_1.kotlinx$atomicfu$value) < 0) {
          if (segment.e1i(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.e1i(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.d1i(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.d1i(index, get_INTERRUPTED_SEND());
              segment.s1i(index, false);
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
            if (segment.e1i(index, state, get_IN_BUFFER()))
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
    if (!$this.l1i_1.atomicfu$addAndGet$long(nAttempts).m3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.l1i_1.kotlinx$atomicfu$value.m3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
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
      var segment = $this.n1i_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if ($this.l1j()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        var r = $this.j1i_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r.d3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r.e3(toLong(other_0)).g1();
        if (!segment.b19_1.equals(id)) {
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
          if (r.b1($this.k1j()) < 0) {
            segment.e1j();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.e1j();
          var elem = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          select.c1l(elem);
          tmp_0 = Unit_instance;
        }
        tmp$ret$0 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  }
  function onClosedSelectOnReceive($this, select) {
    select.c1l(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    var tmp;
    if (selectResult === get_CHANNEL_CLOSED()) {
      tmp = Companion_getInstance_0().d1l($this.j1j());
    } else {
      var tmp_0 = Companion_getInstance_0();
      tmp = tmp_0.q1k((selectResult == null ? true : !(selectResult == null)) ? selectResult : THROW_CCE());
    }
    return new ChannelResult(tmp);
  }
  function BufferedChannelIterator($outer) {
    this.i1j_1 = $outer;
    this.g1j_1 = get_NO_RECEIVE_RESULT();
    this.h1j_1 = null;
  }
  protoOf(BufferedChannelIterator).e1l = function ($completion) {
    var tmp = new $hasNextCOROUTINE$8(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(BufferedChannelIterator).b1a = function (segment, index) {
    var tmp97_safe_receiver = this.h1j_1;
    if (tmp97_safe_receiver == null)
      null;
    else {
      tmp97_safe_receiver.b1a(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).i = function () {
    var result = this.g1j_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.g1j_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.i1j_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).o1k = function (element) {
    var cont = ensureNotNull(this.h1j_1);
    this.h1j_1 = null;
    this.g1j_1 = element;
    var tmp98_safe_receiver = this.i1j_1.h1i_1;
    return tryResume0(cont, true, tmp98_safe_receiver == null ? null : bindCancellationFun(tmp98_safe_receiver, this.i1j_1, element));
  };
  protoOf(BufferedChannelIterator).f1l = function () {
    var cont = ensureNotNull(this.h1j_1);
    this.h1j_1 = null;
    this.g1j_1 = get_CHANNEL_CLOSED();
    var cause = this.i1j_1.j1j();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.y9(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.y9(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.j1j();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var this_0 = $this.r1i_1;
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
    closeHandler($this.j1j());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.i1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.k3(60).g1()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.m3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.m3(new Long(-1, 268435455));
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
      var this_0 = $this.i1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.m3(new Long(-1, 268435455));
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
      var this_0 = $this.i1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.k3(60).g1() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.m3(new Long(-1, 268435455));
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
    $this.g1l();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.i1l()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.h1l(lastBufferedCellGlobalIndex);
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
    var lastSegment = $this.o1i_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = $this.m1i_1.kotlinx$atomicfu$value;
    if (it.b19_1.b1(lastSegment.b19_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it_0 = $this.n1i_1.kotlinx$atomicfu$value;
    if (it_0.b19_1.b1(lastSegment.b19_1) > 0)
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
          var this_0 = segment.b19_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.c3(toLong(other)).a3(toLong(index));
          if (globalIndex.b1($this.l1k()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.c1i(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                segment.u1i();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.d1j();
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
    var onUndeliveredElement = $this.h1i_1;
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
          var this_0 = segment.b19_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.c3(toLong(other)).a3(toLong(index));
          update_cell: while (true) {
            var state = segment.c1i(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.b1($this.l1k()) < 0)
                  break process_segments;
                if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.z1h(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.b1i(index);
                  segment.u1i();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                    segment.u1i();
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
                    if (globalIndex.b1($this.l1k()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.n1k_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.z1h(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.b1i(index);
                      segment.u1i();
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
      var tmp0_elvis_lhs = segment.d1j();
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
          var inductionVariable_0 = list.j() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.o(i);
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
          var this_0 = segment.b19_1;
          var other = get_SEGMENT_SIZE();
          if (this_0.c3(toLong(other)).a3(toLong(index)).b1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.c1i(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                segment.u1i();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.n1k_1);
                  segment.s1i(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.e1i(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.s1i(index, true);
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
      segment = segment.d1j();
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
          var inductionVariable_0 = list.j() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.o(i);
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
      var this_0 = _this__u8e3s4.u1k_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.y9(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.k1k();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.y9(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = _this__u8e3s4.r1k_1;
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().d1l($this.j1j()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          this_1.y9(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.f1l();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance))
              _this__u8e3s4.s1k($this, get_CHANNEL_CLOSED());
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
    switch (sendersAndCloseStatusCur.k3(60).g1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.j1l() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.k3(60).g1();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.c1i(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.e1i(index, state, get_POISONED())) {
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
        return globalIndex.equals($this.l1k());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.m1i_1;
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
              if (cur.b19_1.b1(to.b19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.w1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.x1i()) {
                  cur.o4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.x1i()) {
                to.o4();
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
      var this_1 = startFrom.b19_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.c3(toLong(other)).b1($this.l1k()) < 0) {
        startFrom.e1j();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.b19_1.b1(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_2 = segment.b19_1;
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.c3(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        // Inline function 'kotlin.Long.times' call
        var this_3 = segment.b19_1;
        var other_1 = get_SEGMENT_SIZE();
        if (this_3.c3(toLong(other_1)).b1($this.l1k()) < 0) {
          segment.e1j();
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
      var this_0 = $this.n1i_1;
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
              if (cur.b19_1.b1(to.b19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.w1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.x1i()) {
                  cur.o4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.x1i()) {
                to.o4();
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
      var this_1 = startFrom.b19_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.c3(toLong(other)).b1($this.k1j()) < 0) {
        startFrom.e1j();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        // Inline function 'kotlin.Long.div' call
        var this_2 = _get_bufferEndCounter__2d4hee($this);
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.d3(toLong(other_0));
        tmp_1 = id.b1(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var this_3 = $this.o1i_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = this_3.kotlinx$atomicfu$value;
            if (cur_0.b19_1.b1(segment.b19_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.w1i()) {
              break $l$block_5;
            }
            if (this_3.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.x1i()) {
                cur_0.o4();
              }
              break $l$block_5;
            }
            if (segment.x1i()) {
              segment.o4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.b19_1.b1(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_4 = segment.b19_1;
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = this_4.c3(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        // Inline function 'kotlin.Long.times' call
        var this_5 = segment.b19_1;
        var other_2 = get_SEGMENT_SIZE();
        if (this_5.c3(toLong(other_2)).b1($this.k1j()) < 0) {
          segment.e1j();
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
      var this_0 = $this.o1i_1;
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
              if (cur.b19_1.b1(to.b19_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.w1i()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.x1i()) {
                  cur.o4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.x1i()) {
                to.o4();
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
      if (segment.b19_1.b1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.a3(toLong(1));
        // Inline function 'kotlin.Long.times' call
        var this_1 = segment.b19_1;
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_1.c3(toLong(other));
        if ($this.k1i_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          // Inline function 'kotlin.Long.times' call
          var this_2 = segment.b19_1;
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = this_2.c3(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.b3(currentBufferEndCounter));
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
    $l$loop: while (segment.b19_1.b1(id) < 0) {
      var tmp0_elvis_lhs = segment.a1j();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.v1i()) {
        var tmp1_elvis_lhs = segment.a1j();
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
        var this_0 = $this.o1i_1;
        var to = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = this_0.kotlinx$atomicfu$value;
          if (cur.b19_1.b1(to.b19_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!to.w1i()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (this_0.atomicfu$compareAndSet(cur, to)) {
            if (cur.x1i()) {
              cur.o4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (to.x1i()) {
            to.o4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.i1i_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.m3(new Long(-1, 268435455));
      if (curCounter.b1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.k3(60).g1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.i1i_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.j1i_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.b1(value) >= 0)
        return Unit_instance;
      if ($this.j1i_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function bindCancellationFunResult(_this__u8e3s4, $this) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.h1i_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun(_this__u8e3s4, $this, element) {
    return BufferedChannel$bindCancellationFun$lambda(_this__u8e3s4, element);
  }
  function bindCancellationFun_0(_this__u8e3s4, $this) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.h1i_1), element, context);
  }
  function BufferedChannel$registerSelectForReceive$ref() {
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
        callUndeliveredElement(this$0.h1i_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.t9());
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
      onCancellationChannelResultImplDoNotCall($boundThis, p0, p1.l1l_1, p2);
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
    this.u1l_1 = _this__u8e3s4;
    this.v1l_1 = element;
  }
  protoOf($sendCOROUTINE$5).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.x1l_1 = this.u1l_1;
            var tmp_1 = this;
            tmp_1.y1l_1 = this.v1l_1;
            var tmp_2 = this;
            tmp_2.z1l_1 = null;
            this.a1m_1 = this.x1l_1.m1i_1.kotlinx$atomicfu$value;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n9_1 = 12;
              continue $sm;
            }

            this.b1m_1 = this.x1l_1.i1i_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.c1m_1 = this.b1m_1.m3(new Long(-1, 268435455));
            this.d1m_1 = _get_isClosedForSend0__kxgf9m(this.b1m_1, this.x1l_1);
            var tmp_4 = this;
            var this_0 = this.c1m_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.e1m_1 = this_0.d3(toLong(other));
            var tmp_5 = this;
            var this_1 = this.c1m_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.f1m_1 = this_1.e3(toLong(other_0)).g1();
            if (!this.a1m_1.b19_1.equals(this.e1m_1)) {
              this.g1m_1 = findSegmentSend(this.x1l_1, this.e1m_1, this.a1m_1);
              if (this.g1m_1 == null) {
                if (this.d1m_1) {
                  this.n9_1 = 10;
                  suspendResult = onClosedSend(this.u1l_1, this.v1l_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 2;
                  continue $sm;
                }
              } else {
                this.h1m_1 = this.g1m_1;
                this.n9_1 = 3;
                continue $sm;
              }
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            this.a1m_1 = this.h1m_1;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.i1m_1 = updateCellSend(this.x1l_1, this.a1m_1, this.f1m_1, this.y1l_1, this.c1m_1, this.z1l_1, this.d1m_1);
            if (this.i1m_1 === 0) {
              this.a1m_1.e1j();
              var tmp_6 = this;
              tmp_6.w1l_1 = Unit_instance;
              this.n9_1 = 13;
              continue $sm;
            } else {
              if (this.i1m_1 === 1) {
                var tmp_7 = this;
                tmp_7.w1l_1 = Unit_instance;
                this.n9_1 = 13;
                continue $sm;
              } else {
                if (this.i1m_1 === 2) {
                  if (this.d1m_1) {
                    this.a1m_1.u1i();
                    this.n9_1 = 9;
                    suspendResult = onClosedSend(this.u1l_1, this.v1l_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.n9_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.i1m_1 === 4) {
                    if (this.c1m_1.b1(this.x1l_1.l1k()) < 0) {
                      this.a1m_1.e1j();
                    }
                    this.n9_1 = 7;
                    suspendResult = onClosedSend(this.u1l_1, this.v1l_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.i1m_1 === 5) {
                      this.a1m_1.e1j();
                      this.n9_1 = 2;
                      continue $sm;
                    } else {
                      if (this.i1m_1 === 3) {
                        var tmp_8 = this;
                        tmp_8.j1m_1 = this.a1m_1;
                        var tmp_9 = this;
                        tmp_9.k1m_1 = this.f1m_1;
                        var tmp_10 = this;
                        tmp_10.l1m_1 = this.y1l_1;
                        var tmp_11 = this;
                        tmp_11.m1m_1 = this.c1m_1;
                        this.n9_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.u1l_1, this.j1m_1, this.k1m_1, this.l1m_1, this.m1m_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.n9_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.n9_1 = 2;
            continue $sm;
          case 6:
            this.w1l_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 7:
            this.w1l_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 8:
            var tmp_12 = this.z1l_1;
            var tmp83_safe_receiver = (!(tmp_12 == null) ? isInterface(tmp_12, Waiter) : false) ? tmp_12 : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp83_safe_receiver, this.x1l_1, this.a1m_1, this.f1m_1);
            }

            var tmp_13 = this;
            this.a1m_1;
            this.f1m_1;
            tmp_13.w1l_1 = Unit_instance;
            this.n9_1 = 13;
            continue $sm;
          case 9:
            this.w1l_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 10:
            this.w1l_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 11:
            throw this.q9_1;
          case 12:
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function $receiveCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1m_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$6).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.x1m_1 = this.v1m_1;
            var tmp_1 = this;
            tmp_1.y1m_1 = null;
            this.z1m_1 = this.x1m_1.n1i_1.kotlinx$atomicfu$value;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.n9_1 = 9;
              continue $sm;
            }

            if (this.x1m_1.l1j()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.v1m_1));
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.a1n_1 = this.x1m_1.j1i_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.a1n_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.b1n_1 = this_0.d3(toLong(other));
            var tmp_4 = this;
            var this_1 = this.a1n_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.c1n_1 = this_1.e3(toLong(other_0)).g1();
            if (!this.z1m_1.b19_1.equals(this.b1n_1)) {
              this.d1n_1 = findSegmentReceive(this.x1m_1, this.b1n_1, this.z1m_1);
              if (this.d1n_1 == null) {
                this.n9_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.e1n_1 = this.d1n_1;
                this.n9_1 = 4;
                continue $sm;
              }
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.z1m_1 = this.e1n_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.f1n_1 = updateCellReceive(this.x1m_1, this.z1m_1, this.c1n_1, this.a1n_1, this.y1m_1);
            if (this.f1n_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.y1m_1;
              var tmp92_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp92_safe_receiver, this.x1m_1, this.z1m_1, this.c1n_1);
              }
              this.z1m_1;
              this.c1n_1;
              this.a1n_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.f1n_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.a1n_1.b1(this.x1m_1.k1j()) < 0) {
                  this.z1m_1.e1j();
                }
                this.n9_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.f1n_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.h1n_1 = this.z1m_1;
                  var tmp_10 = this;
                  tmp_10.i1n_1 = this.c1n_1;
                  var tmp_11 = this;
                  tmp_11.j1n_1 = this.a1n_1;
                  this.n9_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.v1m_1, this.h1n_1, this.i1n_1, this.j1n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.z1m_1.e1j();
                  var tmp_13 = this.f1n_1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.g1n_1 = suspendResult;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            this.w1m_1 = this.g1n_1;
            this.n9_1 = 10;
            continue $sm;
          case 8:
            throw this.q9_1;
          case 9:
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 10;
            continue $sm;
          case 10:
            return this.w1m_1;
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.g1i_1 = capacity;
    this.h1i_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g1i_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.g1i_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.i1i_1 = atomic$long$1(new Long(0, 0));
    this.j1i_1 = atomic$long$1(new Long(0, 0));
    this.k1i_1 = atomic$long$1(initialBufferEnd(this.g1i_1));
    this.l1i_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.m1i_1 = atomic$ref$1(firstSegment);
    this.n1i_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.o1i_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.h1i_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.p1i_1 = tmp_3;
    this.q1i_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.r1i_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).k1j = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.i1i_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).l1k = function () {
    return this.j1i_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).k1n = function (element, $completion) {
    var tmp = new $sendCOROUTINE$5(this, element, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(BufferedChannel).l1n = function (element) {
    if (shouldSendSuspend0(this, this.i1i_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().m1n();
    var tmp$ret$4;
    $l$block_4: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_INTERRUPTED_SEND();
      var segment = this.m1i_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.i1i_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.d3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.e3(toLong(other_0)).g1();
        if (!segment.b19_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().d1l(this.k1k());
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
            segment.e1j();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().q1k(Unit_instance);
            break $l$block_4;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().q1k(Unit_instance);
            break $l$block_4;
          case 2:
            if (closed) {
              segment.u1i();
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_0().d1l(this.k1k());
              break $l$block_4;
            }

            var tmp83_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp83_safe_receiver, this, segment, i);
            }

            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            segment.u1i();
            tmp$ret$4 = Companion_getInstance_0().m1n();
            break $l$block_4;
          case 4:
            if (s.b1(this.l1k()) < 0) {
              segment.e1j();
            }

            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call

            tmp$ret$4 = Companion_getInstance_0().d1l(this.k1k());
            break $l$block_4;
          case 5:
            segment.e1j();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).n1n = function (element) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
    var waiter = get_BUFFERED();
    var segment = this.m1i_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.i1i_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = s.d3(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = s.e3(toLong(other_0)).g1();
      if (!segment.b19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return Companion_getInstance_0().d1l(this.k1k());
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
          segment.e1j();
          return Companion_getInstance_0().q1k(Unit_instance);
        case 1:
          return Companion_getInstance_0().q1k(Unit_instance);
        case 2:
          if (closed) {
            segment.u1i();
            return Companion_getInstance_0().d1l(this.k1k());
          }

          var tmp83_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp83_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp83_safe_receiver, this, segment, i);
          }

          // Inline function 'kotlin.Long.plus' call

          // Inline function 'kotlin.Long.times' call

          var this_0 = segment.b19_1;
          var other_1 = get_SEGMENT_SIZE();
          var tmp$ret$5 = this_0.c3(toLong(other_1)).a3(toLong(i));
          this.h1l(tmp$ret$5);
          return Companion_getInstance_0().q1k(Unit_instance);
        case 4:
          if (s.b1(this.l1k()) < 0) {
            segment.e1j();
          }

          return Companion_getInstance_0().d1l(this.k1k());
        case 5:
          segment.e1j();
          continue $l$loop_0;
        case 3:
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).t1k = function () {
  };
  protoOf(BufferedChannel).m1k = function () {
  };
  protoOf(BufferedChannel).o1n = function ($completion) {
    var tmp = new $receiveCOROUTINE$6(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(BufferedChannel).p1n = function () {
    var r = this.j1i_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.i1i_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_0().d1l(this.j1j());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
    if (r.b1(s) >= 0)
      return Companion_getInstance_0().m1n();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var waiter = get_INTERRUPTED_RCV();
      var segment = this.n1i_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.l1j()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_0().d1l(this.j1j());
          break $l$block_0;
        }
        var r_0 = this.j1i_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.d3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.e3(toLong(other_0)).g1();
        if (!segment.b19_1.equals(id)) {
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
          this.t1i(r_0);
          segm.u1i();
          tmp_0 = new ChannelResult(Companion_getInstance_0().m1n());
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
          if (r_0.b1(this.k1j()) < 0) {
            segment.e1j();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.e1j();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = new ChannelResult(Companion_getInstance_0().q1k(element));
        }
        tmp$ret$2 = tmp_0.l1l_1;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).h1l = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.n1i_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.j1i_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.math.max' call
      // Inline function 'kotlin.Long.plus' call
      var other = this.g1i_1;
      var a = r.a3(toLong(other));
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = a.b1(b) >= 0 ? a : b;
      if (globalCellIndex.b1(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.a3(toLong(1));
      if (!this.j1i_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.d3(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.e3(toLong(other_1)).g1();
      if (!segment.b19_1.equals(id)) {
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
        if (r.b1(this.k1j()) < 0) {
          segment.e1j();
        }
      } else {
        segment.e1j();
        var tmp90_safe_receiver = this.h1i_1;
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
  protoOf(BufferedChannel).t1i = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).b1(globalIndex) <= 0) {
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
        var ebCompleted = this.l1i_1.kotlinx$atomicfu$value.m3(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.l1i_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.m3(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.l1i_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.m3(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.m3(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var this_1 = this.l1i_1;
          while (true) {
            var cur_0 = this_1.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.m3(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (this_1.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.l1i_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).q1n = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.p1i_1);
  };
  protoOf(BufferedChannel).g = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).j1j = function () {
    var tmp = this.q1i_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).k1k = function () {
    var tmp0_elvis_lhs = this.j1j();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).r1n = function () {
  };
  protoOf(BufferedChannel).s1n = function (cause) {
    return this.t1n(cause, false);
  };
  protoOf(BufferedChannel).l15 = function (cause) {
    this.v1n(cause);
  };
  protoOf(BufferedChannel).v1n = function (cause) {
    return this.t1n(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).t1n = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.q1i_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.r1n();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).x1n = function (handler) {
    if (this.r1i_1.atomicfu$compareAndSet(null, handler)) {
      return Unit_instance;
    }
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.r1i_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeOnClose.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur === get_CLOSE_HANDLER_CLOSED()) {
        if (this.r1i_1.atomicfu$compareAndSet(get_CLOSE_HANDLER_CLOSED(), get_CLOSE_HANDLER_INVOKED())) {
          handler(this.j1j());
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
  protoOf(BufferedChannel).i1l = function () {
    return false;
  };
  protoOf(BufferedChannel).g1l = function () {
    return _get_isClosedForSend0__kxgf9m(this.i1i_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).l1j = function () {
    return _get_isClosedForReceive0__f7qknl(this.i1i_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).j1l = function () {
    $l$loop: while (true) {
      var segment = this.n1i_1.kotlinx$atomicfu$value;
      var r = this.l1k();
      var s = this.k1j();
      if (s.b1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.d3(toLong(other));
      if (!segment.b19_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.n1i_1.kotlinx$atomicfu$value.b19_1.b1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.e1j();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.e3(toLong(other_0)).g1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.a3(toLong(1));
      this.j1i_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp103_subject = this.i1i_1.kotlinx$atomicfu$value.k3(60).g1();
    if (tmp103_subject === 2) {
      sb.p8('closed,');
    } else if (tmp103_subject === 3) {
      sb.p8('cancelled,');
    }
    sb.p8('capacity=' + this.g1i_1 + ',');
    sb.p8('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = listOf([this.n1i_1.kotlinx$atomicfu$value, this.m1i_1.kotlinx$atomicfu$value, this.o1i_1.kotlinx$atomicfu$value]);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        if (!(element === get_NULL_SEGMENT())) {
          destination.e(element);
        }
      }
      var iterator = destination.g();
      if (!iterator.h())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.i();
      if (!iterator.h()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.b19_1;
      do {
        var e = iterator.i();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.b19_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.h());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.l1k();
    var s = this.k1j();
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
          var this_1 = segment.b19_1;
          var other = get_SEGMENT_SIZE();
          var globalCellIndex = this_1.c3(toLong(other)).a3(toLong(i));
          if (globalCellIndex.b1(s) >= 0 && globalCellIndex.b1(r) >= 0)
            break append_elements;
          var cellState = segment.c1i(i);
          var element_0 = segment.z1h(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.b1(r) < 0 && globalCellIndex.b1(s) >= 0 ? 'receive' : globalCellIndex.b1(s) < 0 && globalCellIndex.b1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.b1(r) < 0 && globalCellIndex.b1(s) >= 0 ? 'onReceive' : globalCellIndex.b1(s) < 0 && globalCellIndex.b1(r) >= 0 ? 'onSend' : 'select';
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
            sb.p8('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.p8(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp0_elvis_lhs = segment.a1j();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.id(sb.a() - 1 | 0);
    }
    sb.p8(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.n1k_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.n1k_1) + ')';
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
    var token = _this__u8e3s4.w17(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.x17(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).a3(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).j3(60).a3(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.w1h(), 0);
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
    this.y1n_1 = 2147483647;
    this.z1n_1 = 0;
    this.a1o_1 = -1;
    this.b1o_1 = -2;
    this.c1o_1 = -3;
    this.d1o_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.e1o_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
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
    return tmp112_safe_receiver == null ? null : tmp112_safe_receiver.f1o_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.f1o_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.f1o_1, other.f1o_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.f1o_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.f1o_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.p1k_1 = new Failed();
  }
  protoOf(Companion).q1k = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).m1n = function () {
    return _ChannelResult___init__impl__siwsuf(this.p1k_1);
  };
  protoOf(Companion).d1l = function (cause) {
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
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.l1l_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.l1l_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.l1l_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.l1l_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.l1l_1, other);
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
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().e1o_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.j1o_1 = _channel;
  }
  protoOf(ChannelCoroutine).k1n = function (element, $completion) {
    return this.j1o_1.k1n(element, $completion);
  };
  protoOf(ChannelCoroutine).l1n = function (element) {
    return this.j1o_1.l1n(element);
  };
  protoOf(ChannelCoroutine).s1n = function (cause) {
    return this.j1o_1.s1n(cause);
  };
  protoOf(ChannelCoroutine).x1n = function (handler) {
    this.j1o_1.x1n(handler);
  };
  protoOf(ChannelCoroutine).o1n = function ($completion) {
    return this.j1o_1.o1n($completion);
  };
  protoOf(ChannelCoroutine).p1n = function () {
    return this.j1o_1.p1n();
  };
  protoOf(ChannelCoroutine).g = function () {
    return this.j1o_1.g();
  };
  protoOf(ChannelCoroutine).g1l = function () {
    return this.j1o_1.g1l();
  };
  protoOf(ChannelCoroutine).q1n = function () {
    return this.j1o_1.q1n();
  };
  protoOf(ChannelCoroutine).l15 = function (cause) {
    if (this.y14())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.f14() : null, null, this);
    } else {
      tmp = cause;
    }
    this.n15(tmp);
  };
  protoOf(ChannelCoroutine).w1n = function (cause, $super) {
    return this.m15(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).n15 = function (cause) {
    var exception = this.d15(cause);
    this.j1o_1.l15(exception);
    this.q15(exception);
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
    _this__u8e3s4.l15(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.x1o_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.n1n(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).l1n.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp118_safe_receiver = $this.h1i_1;
      var tmp119_safe_receiver = tmp118_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp118_safe_receiver, element);
      if (tmp119_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp119_safe_receiver;
      }
    }
    return Companion_getInstance_0().q1k(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.w1o_1 = capacity;
    this.x1o_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.x1o_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).kb() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1o_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.w1o_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).i1l = function () {
    return this.x1o_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).k1n = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp116_safe_receiver = this.h1i_1;
      var tmp117_safe_receiver = tmp116_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp116_safe_receiver, element);
      if (tmp117_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp117_safe_receiver, this.k1k());
        throw tmp117_safe_receiver;
      }
      throw this.k1k();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).l1n = function (element) {
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
      coroutine.e15(onCompletion);
    }
    coroutine.p14(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).c14 = function () {
    return protoOf(ChannelCoroutine).c14.call(this);
  };
  protoOf(ProducerCoroutine).c1p = function (value) {
    this.j1o_1.u1n();
  };
  protoOf(ProducerCoroutine).d14 = function (value) {
    return this.c1p(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).e14 = function (cause, handled) {
    var processed = this.j1o_1.s1n(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.a14_1, cause);
    }
  };
  protoOf(ProducerCoroutine).w1n = function (cause, $super) {
    return this.m15(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
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
    tmp_0.p9_1 = Unit_instance;
    tmp_0.q9_1 = null;
    return tmp_0.v9();
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
      this_0.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $awaitCloseCOROUTINE$12(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1p_1 = _this__u8e3s4;
    this.m1p_1 = block;
  }
  protoOf($awaitCloseCOROUTINE$12).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            if (!(this.t9().aa(Key_instance_3) === this.l1p_1)) {
              var message = 'awaitClose() can only be invoked from the producer context';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.p19();
            this.l1p_1.x1n(awaitClose$lambda_0(cancellable));
            suspendResult = returnIfSuspended(cancellable.t16(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n1p_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 5;
            this.m1p_1();
            return Unit_instance;
          case 4:
            this.o9_1 = 5;
            var t = this.q9_1;
            this.m1p_1();
            throw t;
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
  function channelFlow(block) {
    return new ChannelFlowBuilder(block);
  }
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.r1p_1 = block;
  }
  protoOf(ChannelFlowBuilder).s1p = function (scope, $completion) {
    return this.r1p_1(scope, $completion);
  };
  protoOf(ChannelFlowBuilder).toString = function () {
    return 'block[' + toString(this.r1p_1) + '] -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function callbackFlow(block) {
    return new CallbackFlowBuilder(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.b1q_1 = block;
  }
  protoOf(SafeFlow).c1q = function (collector, $completion) {
    return this.b1q_1(collector, $completion);
  };
  function $collectToCOROUTINE$13(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1q_1 = _this__u8e3s4;
    this.m1q_1 = scope;
  }
  protoOf($collectToCOROUTINE$13).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = protoOf(ChannelFlowBuilder).s1p.call(this.l1q_1, this.m1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!this.m1q_1.g1l()) {
              throw IllegalStateException_init_$Create$("'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\nOtherwise, a callback/listener may leak in case of external cancellation.\nSee callbackFlow API documentation for the details.");
            }

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
  function CallbackFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowBuilder.call(this, block, context, capacity, onBufferOverflow);
    this.r1q_1 = block;
  }
  protoOf(CallbackFlowBuilder).s1p = function (scope, $completion) {
    var tmp = new $collectToCOROUTINE$13(this, scope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$15(_this__u8e3s4, channel, consume, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.l1r_1) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!$this.m1r_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1r_1 = _this__u8e3s4;
    this.w1r_1 = collector;
  }
  protoOf($collectCOROUTINE$16).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (this.v1r_1.u1p_1 === -3) {
              markConsumed(this.v1r_1);
              this.n9_1 = 2;
              suspendResult = emitAllImpl(this.w1r_1, this.v1r_1.k1r_1, this.v1r_1.l1r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = protoOf(ChannelFlow).z1p.call(this.v1r_1, this.w1r_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n9_1 = 3;
            continue $sm;
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.k1r_1 = channel;
    this.l1r_1 = consume;
    this.m1r_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).s1p = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.k1r_1, this.l1r_1, $completion);
  };
  protoOf(ChannelAsFlow).y1p = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.u1p_1 === -3) {
      tmp = this.k1r_1;
    } else {
      tmp = protoOf(ChannelFlow).y1p.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).z1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$16(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelAsFlow).a1q = function () {
    return 'channel=' + toString(this.k1r_1);
  };
  function $emitAllImplCOROUTINE$15(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1r_1 = _this__u8e3s4;
    this.b1r_1 = channel;
    this.c1r_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$15).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            ensureActive_1(this.a1r_1);
            this.d1r_1 = null;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 7;
            this.o9_1 = 6;
            this.f1r_1 = this.b1r_1.g();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            suspendResult = this.f1r_1.e1l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.g1r_1 = this.f1r_1.i();
            this.n9_1 = 4;
            suspendResult = this.a1r_1.x1r(this.g1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 2;
            continue $sm;
          case 5:
            this.e1r_1 = Unit_instance;
            this.o9_1 = 9;
            this.n9_1 = 8;
            continue $sm;
          case 6:
            this.o9_1 = 7;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var e = this.q9_1;
              var tmp_1 = this;
              this.d1r_1 = e;
              throw e;
            } else {
              throw this.q9_1;
            }

          case 7:
            this.o9_1 = 9;
            var t = this.q9_1;
            if (this.c1r_1) {
              cancelConsumed(this.b1r_1, this.d1r_1);
            }

            throw t;
          case 8:
            this.o9_1 = 9;
            if (this.c1r_1) {
              cancelConsumed(this.b1r_1, this.d1r_1);
            }

            return Unit_instance;
          case 9:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 9) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1s_1 = _this__u8e3s4;
    this.h1s_1 = collector;
  }
  protoOf($collectCOROUTINE$17).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.i1s_1 = new SafeCollector(this.h1s_1, this.t9());
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.n9_1 = 2;
            suspendResult = this.g1s_1.c1q(this.i1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j1s_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 5;
            this.i1s_1.x9();
            return Unit_instance;
          case 4:
            this.o9_1 = 5;
            var t = this.q9_1;
            this.i1s_1.x9();
            throw t;
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).z1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
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
  function _get_head__d7jo8b($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.x1s_1;
    var b = $this.w1s_1;
    return a.b1(b) <= 0 ? a : b;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.y1s_1;
    return this_0.a3(toLong(other)).b3($this.w1s_1).g1();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.y1s_1 + $this.z1s_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.y1s_1;
    return this_0.a3(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.y1s_1;
    var this_1 = this_0.a3(toLong(other));
    var other_0 = $this.z1s_1;
    return this_1.a3(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.b1t_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.y1s_1 >= $this.t1s_1 && $this.x1s_1.b1($this.w1s_1) <= 0) {
      switch ($this.u1s_1.u2_1) {
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
    $this.y1s_1 = $this.y1s_1 + 1 | 0;
    if ($this.y1s_1 > $this.t1s_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.s1s_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.w1s_1.a3(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.x1s_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.s1s_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.y1s_1 = $this.y1s_1 + 1 | 0;
    if ($this.y1s_1 > $this.s1s_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.y1s_1;
    tmp.x1s_1 = this_0.a3(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.v1s_1), _get_head__d7jo8b($this), null);
    $this.y1s_1 = $this.y1s_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).a3(toLong(1));
    if ($this.w1s_1.b1(newHead) < 0)
      $this.w1s_1 = newHead;
    if ($this.x1s_1.b1(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.b1t_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.a1t_1;
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
            if (element.e1t_1.b1(new Long(0, 0)) >= 0 && element.e1t_1.b1(newHead) < 0) {
              element.e1t_1 = newHead;
            }
          }
        }
      }
    }
    $this.x1s_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.v1s_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).a3(toLong(curSize));
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
    $this.v1s_1 = this_0;
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
        var tmp = head.a3(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.a3(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
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
        cancellable.y9(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.Long.plus' call
      var this_0 = _get_head__d7jo8b($this);
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = this_0.a3(toLong(other));
      var this_1 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_1);
      $this.z1s_1 = $this.z1s_1 + 1 | 0;
      if ($this.t1s_1 === 0)
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
        r.y9(tmp$ret$8);
      }
    }
    return cancellable.t16();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.h1t_1.b1(_get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.v1s_1);
    if (!(getBufferAt(buffer, emitter.h1t_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.h1t_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.b1(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.b1(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.a3(new Long(1, 0));
        setBufferAt(ensureNotNull($this.v1s_1), index, null);
      }
       while (inductionVariable.b1(newHead) < 0);
    $this.w1s_1 = newReplayIndex;
    $this.x1s_1 = newMinCollectorIndex;
    $this.y1s_1 = newBufferEndIndex.b3(newHead).g1();
    $this.z1s_1 = newQueueEndIndex.b3(newBufferEndIndex).g1();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.t1s_1 === 0 && $this.z1s_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.v1s_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.z1s_1 > 0) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = _get_head__d7jo8b($this);
        var other = _get_totalSize__xhdb3o($this);
        var tmp$ret$1 = this_0.a3(toLong(other)).b3(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.z1s_1 = $this.z1s_1 - 1 | 0;
      // Inline function 'kotlin.Long.plus' call
      var this_1 = _get_head__d7jo8b($this);
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = this_1.a3(toLong(other_0));
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
    if (index.b1(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.e1t_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.e1t_1 = index.a3(toLong(1));
      resumes = $this.k1t(oldIndex);
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
        resume.y9(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.e1t_1;
    if (index.b1(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.t1s_1 > 0)
      return new Long(-1, -1);
    if (index.b1(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.z1s_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.v1s_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.i1t_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.b1(new Long(0, 0)) < 0) {
        slot.f1t_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.y9(tmp$ret$0);
        break $l$block;
      }
      slot.f1t_1 = cancellable;
    }
    return cancellable.t16();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.b1t_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.a1t_1;
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
              var tmp0_elvis_lhs = element.f1t_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).b1(new Long(0, 0)) < 0) {
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
              element.f1t_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.g1t_1 = flow;
    this.h1t_1 = index;
    this.i1t_1 = value;
    this.j1t_1 = cont;
  }
  protoOf(Emitter).n18 = function () {
    return cancelEmitter(this.g1t_1, this);
  };
  function $collectCOROUTINE$18(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1t_1 = _this__u8e3s4;
    this.u1t_1 = collector;
  }
  protoOf($collectCOROUTINE$18).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 13;
            this.v1t_1 = this.t1t_1.z1t();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 12;
            var tmp_0 = this.u1t_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.n9_1 = 2;
              suspendResult = this.u1t_1.c1u(this);
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
            var tmp_1 = this;
            tmp_1.x1t_1 = this.t9().aa(Key_instance_3);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.n9_1 = 10;
              continue $sm;
            }

            this.n9_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.n9_1 = 8;
              continue $sm;
            }

            this.y1t_1 = tryTakeValue(this.t1t_1, this.v1t_1);
            if (!(this.y1t_1 === get_NO_VALUE())) {
              this.n9_1 = 8;
              continue $sm;
            } else {
              this.n9_1 = 6;
              continue $sm;
            }

          case 6:
            this.n9_1 = 7;
            suspendResult = awaitValue(this.t1t_1, this.v1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.n9_1 = 5;
            continue $sm;
          case 8:
            var tmp121_safe_receiver = this.x1t_1;
            if (tmp121_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp121_safe_receiver);
            }

            this.n9_1 = 9;
            var tmp_2 = this.y1t_1;
            suspendResult = this.u1t_1.x1r((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.n9_1 = 4;
            continue $sm;
          case 10:
            this.w1t_1 = Unit_instance;
            this.o9_1 = 13;
            this.n9_1 = 11;
            continue $sm;
          case 11:
            this.o9_1 = 13;
            this.t1t_1.d1u(this.v1t_1);
            return Unit_instance;
          case 12:
            this.o9_1 = 13;
            var t = this.q9_1;
            this.t1t_1.d1u(this.v1t_1);
            throw t;
          case 13:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 13) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.s1s_1 = replay;
    this.t1s_1 = bufferCapacity;
    this.u1s_1 = onBufferOverflow;
    this.v1s_1 = null;
    this.w1s_1 = new Long(0, 0);
    this.x1s_1 = new Long(0, 0);
    this.y1s_1 = 0;
    this.z1s_1 = 0;
  }
  protoOf(SharedFlowImpl).e1u = function () {
    var tmp = ensureNotNull(this.v1s_1);
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.w1s_1;
    var other = _get_replaySize__dxgnb1(this);
    var tmp$ret$1 = this_0.a3(toLong(other)).b3(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).f1u = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$18(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SharedFlowImpl).z1p = function (collector, $completion) {
    return this.f1u(collector, $completion);
  };
  protoOf(SharedFlowImpl).g1u = function (value) {
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
        cont.y9(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).x1r = function (value, $completion) {
    if (this.g1u(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).h1u = function () {
    var index = this.w1s_1;
    if (index.b1(this.x1s_1) < 0)
      this.x1s_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).k1t = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.b1(this.x1s_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.y1s_1;
    var newMinCollectorIndex = head.a3(toLong(other));
    if (this.t1s_1 === 0 && this.z1s_1 > 0) {
      newMinCollectorIndex = newMinCollectorIndex.f3();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.b1t_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = this.a1t_1;
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
            if (element.e1t_1.b1(new Long(0, 0)) >= 0 && element.e1t_1.b1(newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.e1t_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.b1(this.x1s_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.b1t_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.b3(newMinCollectorIndex).g1();
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.z1s_1;
      var b = this.t1s_1 - newBufferSize0 | 0;
      tmp = Math.min(a, b);
    } else {
      tmp = this.z1s_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var this_0 = newBufferEndIndex;
    var other_0 = this.z1s_1;
    var newQueueEndIndex = this_0.a3(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.v1s_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.b1(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.a3(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var _unary__edvuaz = resumeCount;
            resumeCount = _unary__edvuaz + 1 | 0;
            tmp_0[_unary__edvuaz] = emitter.j1t_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.i1t_1);
            newBufferEndIndex = newBufferEndIndex.f3();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.b1(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.b3(head).g1();
    if (this.b1t_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = this.w1s_1;
    // Inline function 'kotlin.Long.minus' call
    var this_1 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a_1 = this.s1s_1;
    var other_1 = Math.min(a_1, newBufferSize1);
    var b_0 = this_1.b3(toLong(other_1));
    var newReplayIndex = a_0.b1(b_0) >= 0 ? a_0 : b_0;
    if (this.t1s_1 === 0 && newReplayIndex.b1(newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.v1s_1), newReplayIndex), get_NO_VALUE())) {
      newBufferEndIndex = newBufferEndIndex.f3();
      newReplayIndex = newReplayIndex.f3();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).i1u = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).j1u = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.e1t_1 = new Long(-1, -1);
    this.f1t_1 = null;
  }
  protoOf(SharedFlowSlot).k1u = function (flow) {
    if (this.e1t_1.b1(new Long(0, 0)) >= 0)
      return false;
    this.e1t_1 = flow.h1u();
    return true;
  };
  protoOf(SharedFlowSlot).l1u = function (flow) {
    return this.k1u(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).m1u = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.e1t_1;
    this.e1t_1 = new Long(-1, -1);
    this.f1t_1 = null;
    return flow.k1t(oldIndex);
  };
  protoOf(SharedFlowSlot).n1u = function (flow) {
    return this.m1u(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.g1() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.g1() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
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
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.s1u_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.s1u_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.t1u_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.t1u_1 = curSequence;
    } else {
      $this.t1u_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.a1t_1;
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
            element.v1u();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.t1u_1 === curSequence) {
        $this.t1u_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.t1u_1;
      curSlots = $this.a1t_1;
    }
  }
  function $collectCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1v_1 = _this__u8e3s4;
    this.f1v_1 = collector;
  }
  protoOf($collectCOROUTINE$19).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 12;
            this.g1v_1 = this.e1v_1.z1t();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 11;
            var tmp_0 = this.f1v_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.n9_1 = 2;
              suspendResult = this.f1v_1.c1u(this);
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
            var tmp_1 = this;
            tmp_1.i1v_1 = this.t9().aa(Key_instance_3);
            this.j1v_1 = null;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.k1v_1 = this.e1v_1.s1u_1.kotlinx$atomicfu$value;
            var tmp129_safe_receiver = this.i1v_1;
            if (tmp129_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp129_safe_receiver);
            }

            if (this.j1v_1 == null || !equals(this.j1v_1, this.k1v_1)) {
              this.n9_1 = 5;
              var this_0 = get_NULL();
              var value = this.k1v_1;
              var tmp_2;
              if (value === this_0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.f1v_1.x1r(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 6;
              continue $sm;
            }

          case 5:
            this.j1v_1 = this.k1v_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            if (!this.g1v_1.m1v()) {
              this.n9_1 = 7;
              suspendResult = this.g1v_1.l1v(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 8;
              continue $sm;
            }

          case 7:
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.n9_1 = 4;
            continue $sm;
          case 9:
            this.h1v_1 = Unit_instance;
            this.o9_1 = 12;
            this.n9_1 = 10;
            continue $sm;
          case 10:
            this.o9_1 = 12;
            this.e1v_1.d1u(this.g1v_1);
            return Unit_instance;
          case 11:
            this.o9_1 = 12;
            var t = this.q9_1;
            this.e1v_1.d1u(this.g1v_1);
            throw t;
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
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.s1u_1 = atomic$ref$1(initialState);
    this.t1u_1 = 0;
  }
  protoOf(StateFlowImpl).n1v = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).w = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.s1u_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).o1v = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).g1u = function (value) {
    this.n1v(value);
    return true;
  };
  protoOf(StateFlowImpl).x1r = function (value, $completion) {
    this.n1v(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).f1u = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$19(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(StateFlowImpl).z1p = function (collector, $completion) {
    return this.f1u(collector, $completion);
  };
  protoOf(StateFlowImpl).i1u = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).j1u = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.u1u_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).p1v = function (flow) {
    if (!(get_value(this.u1u_1) == null))
      return false;
    set_value(this.u1u_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).l1u = function (flow) {
    return this.p1v(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).q1v = function (flow) {
    set_value(this.u1u_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).n1u = function (flow) {
    return this.q1v(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).v1u = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.u1u_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.u1u_1.s1v(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.u1u_1.s1v(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.y9(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).m1v = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.u1u_1.t1v(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).l1v = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.p19();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.u1u_1.s1v(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.y9(tmp$ret$1);
    }
    return cancellable.t16();
  };
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
    this.a1t_1 = null;
    this.b1t_1 = 0;
    this.c1t_1 = 0;
    this.d1t_1 = null;
  }
  protoOf(AbstractSharedFlow).z1t = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.a1t_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.j1u(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.a1t_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.b1t_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.a1t_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.c1t_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.i1u();
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
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).l1u(this))
        break $l$loop;
    }
    this.c1t_1 = index;
    this.b1t_1 = this.b1t_1 + 1 | 0;
    subscriptionCount = this.d1t_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.g1w(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).d1u = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.b1t_1 = this.b1t_1 - 1 | 0;
    subscriptionCount = this.d1t_1;
    if (this.b1t_1 === 0)
      this.c1t_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).n1u(this);
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
        cont.y9(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.g1w(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.p1w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).r1w = function (it, $completion) {
    var tmp = this.s1w(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ha = function (p1, $completion) {
    return this.r1w((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.p1w_1.s1p(this.q1w_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).s1w = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.p1w_1, completion);
    i.q1w_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.r1w(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.b1x_1 = $collector;
    this.c1x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).e1x = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlow$collect$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = emitAll(this.b1x_1, this.c1x_1.y1p(this.d1x_1), this);
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
  protoOf(ChannelFlow$collect$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.b1x_1, this.c1x_1, completion);
    i.d1x_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.t1p_1 = context;
    this.u1p_1 = capacity;
    this.v1p_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).w1p = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).x1p = function () {
    return this.u1p_1 === -3 ? -2 : this.u1p_1;
  };
  protoOf(ChannelFlow).y1p = function (scope) {
    return produce(scope, this.t1p_1, this.x1p(), this.v1p_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.w1p());
  };
  protoOf(ChannelFlow).z1p = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).a1q = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp134_safe_receiver = this.a1q();
    if (tmp134_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.e(tmp134_safe_receiver);
    }
    if (!(this.t1p_1 === EmptyCoroutineContext_getInstance())) {
      props.e('context=' + toString(this.t1p_1));
    }
    if (!(this.u1p_1 === -3)) {
      props.e('capacity=' + this.u1p_1);
    }
    if (!this.v1p_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.e('onBufferOverflow=' + this.v1p_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.t9();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.o1x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).q1x = function (it, $completion) {
    var tmp = this.r1x(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).ha = function (p1, $completion) {
    return this.q1x((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.o1x_1.w1x(this.p1x_1, this);
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).r1x = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.o1x_1, completion);
    i.p1x_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.q1x(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$20(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1y_1 = _this__u8e3s4;
    this.g1y_1 = collector;
  }
  protoOf($collectCOROUTINE$20).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            if (this.f1y_1.u1p_1 === -3) {
              var tmp_0 = this;
              tmp_0.h1y_1 = this.t9();
              this.i1y_1 = newCoroutineContext_0(this.h1y_1, this.f1y_1.t1p_1);
              if (equals(this.i1y_1, this.h1y_1)) {
                this.n9_1 = 6;
                suspendResult = this.f1y_1.w1x(this.g1y_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 1;
                continue $sm;
              }
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 1:
            if (equals(this.i1y_1.aa(Key_instance), this.h1y_1.aa(Key_instance))) {
              this.n9_1 = 5;
              suspendResult = collectWithContextUndispatched(this.f1y_1, this.g1y_1, this.i1y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            suspendResult = protoOf(ChannelFlow).z1p.call(this.f1y_1, this.g1y_1, this);
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
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.v1x_1 = flow;
  }
  protoOf(ChannelFlowOperator).s1p = function (scope, $completion) {
    return this.w1x(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).z1p = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$20(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return toString(this.v1x_1) + ' -> ' + protoOf(ChannelFlow).toString.call(this);
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
    this.r1y_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).t1y = function (it, $completion) {
    var tmp = this.u1y(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).ha = function (p1, $completion) {
    return this.t1y((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.r1y_1.x1r(this.s1y_1, this);
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).u1y = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.r1y_1, completion);
    i.s1y_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.t1y(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.v1y_1 = emitContext;
    this.w1y_1 = threadContextElements(this.v1y_1);
    var tmp = this;
    tmp.x1y_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).x1r = function (value, $completion) {
    return withContextUndispatched(this.v1y_1, value, this.w1y_1, this.x1y_1, $completion);
  };
  function StackFrameContinuation(uCont, context) {
    this.y1y_1 = uCont;
    this.z1y_1 = context;
  }
  protoOf(StackFrameContinuation).t9 = function () {
    return this.z1y_1;
  };
  protoOf(StackFrameContinuation).y9 = function (result) {
    this.y1y_1.y9(result);
  };
  function scopedFlow(block) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(block);
  }
  function flowScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.flow.internal.flowScope.<anonymous>' call
    var coroutine = new FlowCoroutine($completion.t9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).p15 = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.r15(cause);
  };
  function scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation) {
    this.m1z_1 = $block;
    this.n1z_1 = $$this$flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(scopedFlow$o$collect$slambda).e1x = function ($this$flowScope, $completion) {
    var tmp = this.f1x($this$flowScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(scopedFlow$o$collect$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(scopedFlow$o$collect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m1z_1(this.o1z_1, this.n1z_1, this);
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
  protoOf(scopedFlow$o$collect$slambda).f1x = function ($this$flowScope, completion) {
    var i = new scopedFlow$o$collect$slambda(this.m1z_1, this.n1z_1, completion);
    i.o1z_1 = $this$flowScope;
    return i;
  };
  function scopedFlow$o$collect$slambda_0($block, $$this$flow, resultContinuation) {
    var i = new scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.e1x($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$21(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1z_1 = _this__u8e3s4;
    this.y1z_1 = collector;
  }
  protoOf($collectCOROUTINE$21).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.z1z_1 = this.y1z_1;
            this.n9_1 = 1;
            suspendResult = flowScope(scopedFlow$o$collect$slambda_0(this.x1z_1.a20_1, this.z1z_1, null), this);
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
  function _no_name_provided__qut3iv($block) {
    this.a20_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv).b20 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$21(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_no_name_provided__qut3iv).z1p = function (collector, $completion) {
    return this.b20(collector, $completion);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.c20_1 === owner))
      throw _this__u8e3s4;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.l20_1 = this$0;
    this.m20_1 = $collector;
    this.n20_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.l20_1.t20_1(this.m20_1, this.n20_1, this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.l20_1, this.m20_1, this.n20_1, completion);
    i.o20_1 = $this$launch;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.c21_1 = $previousFlow;
    this.d21_1 = $this_coroutineScope;
    this.e21_1 = this$0;
    this.f21_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).t1y = function (value, $completion) {
    var tmp = this.u1y(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).ha = function (p1, $completion) {
    return this.t1y((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.h21_1 = this.c21_1._v;
            if (this.h21_1 == null) {
              this.i21_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.j21_1 = this.h21_1;
              var tmp_1 = this;
              tmp_1.k21_1 = this.j21_1;
              this.k21_1.l15(new ChildCancelledException());
              this.n9_1 = 1;
              suspendResult = this.k21_1.i15(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.i21_1 = this.j21_1;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
            this.c21_1._v = launch(this.d21_1, VOID, tmp_2, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.e21_1, this.f21_1, this.g21_1, null));
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).u1y = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.c21_1, this.d21_1, this.e21_1, this.f21_1, completion);
    i.g21_1 = value;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.t1y(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.l21_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.l21_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.l21_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.u21_1 = this$0;
    this.v21_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).e1x = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.x21_1 = {_v: null};
            this.n9_1 = 1;
            var tmp_0 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(this.x21_1, this.w21_1, this.u21_1, this.v21_1, null);
            suspendResult = this.u21_1.v1x_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.u21_1, this.v21_1, completion);
    i.w21_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e1x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.t20_1 = transform;
  }
  protoOf(ChannelFlowTransformLatest).y21 = function (collector, $completion) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $completion);
  };
  protoOf(ChannelFlowTransformLatest).w1x = function (collector, $completion) {
    return this.y21(collector, $completion);
  };
  function NopCollector() {
  }
  protoOf(NopCollector).z21 = function (value, $completion) {
    return Unit_instance;
  };
  protoOf(NopCollector).x1r = function (value, $completion) {
    return this.z21((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
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
    if (!(result === _this__u8e3s4.m1s_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.l1s_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
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
        $this = $this.v14();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.v();
      var collectElement = $this_checkContext.l1s_1.aa(key);
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
    this.a22_1 = channel;
  }
  protoOf(SendingCollector).x1r = function (value, $completion) {
    return this.a22_1.k1n(value, $completion);
  };
  function debounce(_this__u8e3s4, timeoutMillis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(timeoutMillis.b1(new Long(0, 0)) >= 0)) {
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
    this.j22_1 = $this_produce;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda$slambda).t1y = function (value, $completion) {
    var tmp = this.u1y(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(debounceInternal$slambda$slambda$slambda).ha = function (p1, $completion) {
    return this.t1y((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp0_elvis_lhs = this.k22_1;
            suspendResult = this.j22_1.k1n(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs, this);
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
  protoOf(debounceInternal$slambda$slambda$slambda).u1y = function (value, completion) {
    var i = new debounceInternal$slambda$slambda$slambda(this.j22_1, completion);
    i.k22_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda$slambda_0($this_produce, resultContinuation) {
    var i = new debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation);
    var l = function (value, $completion) {
      return i.t1y(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.l22_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x1r = function (value, $completion) {
    return this.l22_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.l22_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation) {
    this.u22_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda).w22 = function ($this$produce, $completion) {
    var tmp = this.x22($this$produce, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(debounceInternal$slambda$slambda).ha = function (p1, $completion) {
    return this.w22((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = debounceInternal$slambda$slambda$slambda_0(this.v22_1, null);
            suspendResult = this.u22_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  protoOf(debounceInternal$slambda$slambda).x22 = function ($this$produce, completion) {
    var i = new debounceInternal$slambda$slambda(this.u22_1, completion);
    i.v22_1 = $this$produce;
    return i;
  };
  function debounceInternal$slambda$slambda_0($this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.w22($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation) {
    this.g23_1 = $downstream;
    this.h23_1 = $lastValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_1).i23 = function ($completion) {
    var tmp = this.j23($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(debounceInternal$slambda$slambda_1).db = function ($completion) {
    return this.i23($completion);
  };
  protoOf(debounceInternal$slambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var this_0 = get_NULL();
            var value = this.h23_1._v;
            var tmp_0;
            if (value === this_0) {
              tmp_0 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
            } else {
              tmp_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
            }

            suspendResult = this.g23_1.x1r(tmp_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h23_1._v = null;
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
  protoOf(debounceInternal$slambda$slambda_1).j23 = function (completion) {
    return new debounceInternal$slambda$slambda_1(this.g23_1, this.h23_1, completion);
  };
  function debounceInternal$slambda$slambda_2($downstream, $lastValue, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation);
    var l = function ($completion) {
      return i.i23($completion);
    };
    l.$arity = 0;
    return l;
  }
  function debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation) {
    this.s23_1 = $lastValue;
    this.t23_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_3).x23 = function (value, $completion) {
    var tmp = this.y23(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(debounceInternal$slambda$slambda_3).ha = function (p1, $completion) {
    return this.x23(p1 instanceof ChannelResult ? p1.l1l_1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda_3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.u23_1;
            var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
            if (!(tmp_1 instanceof Failed)) {
              var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
              var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
              this.s23_1._v = it;
            }

            tmp_0.v23_1 = this_0;
            var tmp_3 = _ChannelResult___get_holder__impl__pm9gzw(this.v23_1);
            if (tmp_3 instanceof Failed) {
              var tmp_4 = this;
              tmp_4.w23_1 = ChannelResult__exceptionOrNull_impl_16ei30(this.v23_1);
              var tmp140_safe_receiver = this.w23_1;
              if (tmp140_safe_receiver == null)
                null;
              else {
                throw tmp140_safe_receiver;
              }
              if (!(this.s23_1._v == null)) {
                this.n9_1 = 1;
                var this_1 = get_NULL();
                var value = this.s23_1._v;
                var tmp_5;
                if (value === this_1) {
                  tmp_5 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_5 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
                }
                suspendResult = this.t23_1.x1r(tmp_5, this);
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
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.s23_1._v = get_DONE();
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
  protoOf(debounceInternal$slambda$slambda_3).y23 = function (value, completion) {
    var i = new debounceInternal$slambda$slambda_3(this.s23_1, this.t23_1, completion);
    i.u23_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda_4($lastValue, $downstream, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation);
    var l = function (value, $completion) {
      return i.x23(value.l1l_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    this.h24_1 = $timeoutMillisSelector;
    this.i24_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda).q24 = function ($this$scopedFlow, downstream, $completion) {
    var tmp = this.r24($this$scopedFlow, downstream, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(debounceInternal$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.q24(tmp, (!(p2 == null) ? isInterface(p2, FlowCollector) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            tmp_0.l24_1 = produce_0(this.j24_1, VOID, VOID, debounceInternal$slambda$slambda_0(this.i24_1, null));
            this.m24_1 = {_v: null};
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.m24_1._v === get_DONE())) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.n24_1 = {_v: new Long(0, 0)};
            if (!(this.m24_1._v == null)) {
              var this_0 = get_NULL();
              var value = this.m24_1._v;
              var tmp_1;
              if (value === this_0) {
                tmp_1 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_1 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              this.n24_1._v = this.h24_1(tmp_1);
              if (!(this.n24_1._v.b1(new Long(0, 0)) >= 0)) {
                var message = 'Debounce timeout should not be negative';
                throw IllegalArgumentException_init_$Create$(toString(message));
              }
              if (this.n24_1._v.equals(new Long(0, 0))) {
                this.n9_1 = 2;
                var this_1 = get_NULL();
                var value_0 = this.m24_1._v;
                var tmp_2;
                if (value_0 === this_1) {
                  tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
                } else {
                  tmp_2 = (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE();
                }
                suspendResult = this.k24_1.x1r(tmp_2, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 3;
                continue $sm;
              }
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 2:
            this.m24_1._v = null;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            var tmp_3 = this;
            tmp_3.o24_1 = new SelectImplementation(this.t9());
            var tmp_4 = this;
            tmp_4.p24_1 = this.o24_1;
            var $this$select = this.p24_1;
            if (!(this.m24_1._v == null)) {
              var tmp_5 = this.n24_1._v;
              onTimeout($this$select, tmp_5, debounceInternal$slambda$slambda_2(this.k24_1, this.m24_1, null));
            }

            var tmp_6 = this.l24_1.q1n();
            $this$select.t24(tmp_6, debounceInternal$slambda$slambda_4(this.m24_1, this.k24_1, null));
            this.n9_1 = 5;
            suspendResult = this.p24_1.u24(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n9_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(debounceInternal$slambda).r24 = function ($this$scopedFlow, downstream, completion) {
    var i = new debounceInternal$slambda(this.h24_1, this.i24_1, completion);
    i.j24_1 = $this$scopedFlow;
    i.k24_1 = downstream;
    return i;
  };
  function debounceInternal$slambda_0($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation);
    var l = function ($this$scopedFlow, downstream, $completion) {
      return i.q24($this$scopedFlow, downstream, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.v24_1;
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
    this.e25_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapLatest$slambda).i25 = function ($this$transformLatest, it, $completion) {
    var tmp = this.j25($this$transformLatest, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(mapLatest$slambda).s24 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.i25(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(mapLatest$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.e25_1(this.g25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h25_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.f25_1.x1r(this.h25_1, this);
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
  protoOf(mapLatest$slambda).j25 = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.e25_1, completion);
    i.f25_1 = $this$transformLatest;
    i.g25_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.i25($this$transformLatest, it, $completion);
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
  function $onSubscriptionCOROUTINE$27(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s25_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$27).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            tmp_0.t25_1 = new SafeCollector(this.s25_1.a1u_1, this.t9());
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 6;
            this.n9_1 = 2;
            suspendResult = this.s25_1.b1u_1(this.t25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u25_1 = suspendResult;
            this.o9_1 = 7;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 7;
            this.t25_1.x9();
            var tmp_1 = this.s25_1.a1u_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.n9_1 = 4;
              suspendResult = this.s25_1.a1u_1.c1u(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.o9_1 = 7;
            var t = this.q9_1;
            this.t25_1.x9();
            throw t;
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).c1u = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$27(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  function $collectCOROUTINE$28(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d26_1 = _this__u8e3s4;
    this.e26_1 = collector;
  }
  protoOf($collectCOROUTINE$28).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.d26_1.f26_1.f1u(this.e26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.f26_1 = flow;
    this.g26_1 = job;
  }
  protoOf(ReadonlyStateFlow).f1u = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$28(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ReadonlyStateFlow).z1p = function (collector, $completion) {
    return this.f1u(collector, $completion);
  };
  protoOf(ReadonlyStateFlow).w = function () {
    return this.f26_1.w();
  };
  function asSharedFlow(_this__u8e3s4) {
    return new ReadonlySharedFlow(_this__u8e3s4, null);
  }
  function $collectCOROUTINE$29(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p26_1 = _this__u8e3s4;
    this.q26_1 = collector;
  }
  protoOf($collectCOROUTINE$29).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.p26_1.r26_1.f1u(this.q26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlySharedFlow(flow, job) {
    this.r26_1 = flow;
    this.s26_1 = job;
  }
  protoOf(ReadonlySharedFlow).f1u = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$29(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ReadonlySharedFlow).z1p = function (collector, $completion) {
    return this.f1u(collector, $completion);
  };
  function onEach(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4, action);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.t26_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).x1r = function (value, $completion) {
    return this.t26_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).s3 = function () {
    return this.t26_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.s3());
  };
  function onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation) {
    this.c27_1 = $$this$unsafeFlow;
    this.d27_1 = $action;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(onEach$o$collect$slambda).h27 = function (value, $completion) {
    var tmp = this.i27(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(onEach$o$collect$slambda).ha = function (p1, $completion) {
    return this.h27((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onEach$o$collect$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.f27_1 = this.c27_1;
            var tmp_1 = this;
            tmp_1.g27_1 = this.e27_1;
            this.n9_1 = 1;
            suspendResult = this.d27_1(this.g27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = this.f27_1.x1r(this.g27_1, this);
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
  protoOf(onEach$o$collect$slambda).i27 = function (value, completion) {
    var i = new onEach$o$collect$slambda(this.c27_1, this.d27_1, completion);
    i.e27_1 = value;
    return i;
  };
  function onEach$o$collect$slambda_0($$this$unsafeFlow, $action, resultContinuation) {
    var i = new onEach$o$collect$slambda($$this$unsafeFlow, $action, resultContinuation);
    var l = function (value, $completion) {
      return i.h27(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r27_1 = _this__u8e3s4;
    this.s27_1 = collector;
  }
  protoOf($collectCOROUTINE$30).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.t27_1 = this.s27_1;
            this.n9_1 = 1;
            var tmp_1 = onEach$o$collect$slambda_0(this.t27_1, this.r27_1.v27_1, null);
            suspendResult = this.r27_1.u27_1.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
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
  function _no_name_provided__qut3iv_0($this, $action) {
    this.u27_1 = $this;
    this.v27_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_0).b20 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$30(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_no_name_provided__qut3iv_0).z1p = function (collector, $completion) {
    return this.b20(collector, $completion);
  };
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.z1p(NopCollector_instance, $completion);
  }
  function launchIn(_this__u8e3s4, scope) {
    return launch(scope, VOID, VOID, launchIn$slambda_0(_this__u8e3s4, null));
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.z1p(_this__u8e3s4, $completion);
  }
  function launchIn$slambda($this_launchIn, resultContinuation) {
    this.e28_1 = $this_launchIn;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchIn$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(launchIn$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchIn$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = collect(this.e28_1, this);
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
  protoOf(launchIn$slambda).f1x = function ($this$launch, completion) {
    var i = new launchIn$slambda(this.e28_1, completion);
    i.f28_1 = $this$launch;
    return i;
  };
  function launchIn$slambda_0($this_launchIn, resultContinuation) {
    var i = new launchIn$slambda($this_launchIn, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$33(_this__u8e3s4, predicate, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function $emitCOROUTINE$35(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b29_1 = _this__u8e3s4;
    this.c29_1 = value;
  }
  protoOf($emitCOROUTINE$35).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.d29_1 = this.c29_1;
            this.n9_1 = 1;
            suspendResult = this.b29_1.f29_1(this.d29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this.b29_1.g29_1._v = this.d29_1;
              tmp_1.e29_1 = false;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.e29_1 = true;
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.e29_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.b29_1);
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_1($predicate, $result) {
    this.f29_1 = $predicate;
    this.g29_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_1).z21 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$35(this, value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(_no_name_provided__qut3iv_1).x1r = function (value, $completion) {
    return this.z21((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function $firstCOROUTINE$33(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o28_1 = _this__u8e3s4;
    this.p28_1 = predicate;
  }
  protoOf($firstCOROUTINE$33).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.q28_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.r28_1 = this.o28_1;
            var tmp_1 = this;
            tmp_1.s28_1 = new _no_name_provided__qut3iv_1(this.p28_1, this.q28_1);
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.r28_1.z1p(this.s28_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.q9_1;
              checkOwnership(e, this.s28_1);
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            if (this.q28_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + toString(this.p28_1));
            var tmp_3 = this.q28_1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.h29(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.zp();
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.b19_1 = id;
    this.c19_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).v1i = function () {
    return this.c19_1.kotlinx$atomicfu$value === this.x1h() && !this.c1j();
  };
  protoOf(Segment).w1i = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var this_0 = this.c19_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.x1h()) || this.c1j())) {
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
  protoOf(Segment).x1i = function () {
    return this.c19_1.atomicfu$addAndGet(-65536) === this.x1h() && !this.c1j();
  };
  protoOf(Segment).u1i = function () {
    if (this.c19_1.atomicfu$incrementAndGet() === this.x1h()) {
      this.o4();
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
        if (cur.f1j())
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
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.k1l_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.k1l_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.k1l_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.k1l_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.k1l_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.y1i_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.d1j();
    while (!(cur === null) && cur.v1i())
      cur = cur.z1i_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.a1j());
    while (cur.v1i()) {
      var tmp0_elvis_lhs = cur.a1j();
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
    this.y1i_1 = atomic$ref$1(null);
    this.z1i_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).a1j = function () {
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
  protoOf(ConcurrentLinkedListNode).b1j = function (value) {
    return this.y1i_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).c1j = function () {
    return this.a1j() == null;
  };
  protoOf(ConcurrentLinkedListNode).d1j = function () {
    return this.z1i_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).e1j = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.z1i_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).f1j = function () {
    return this.y1i_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).o4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.c1j())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var this_0 = next.z1i_1;
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
        prev.y1i_1.kotlinx$atomicfu$value = next;
      if (next.v1i() && !next.c1j())
        continue $l$loop_0;
      if (!(prev === null) && prev.v1i())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.b19_1.b1(id) < 0 || cur.v1i()) {
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
      var newTail = createNewSegment(cur.b19_1.a3(toLong(1)), cur);
      if (cur.b1j(newTail)) {
        if (cur.v1i()) {
          cur.o4();
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
    var _iterator__ex2g4s = get_platformExceptionHandlers().g();
    while (_iterator__ex2g4s.h()) {
      var handler = _iterator__ex2g4s.i();
      try {
        handler.z1b(context, exception);
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
    var tmp = $this.t18_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.p18_1 = dispatcher;
    this.q18_1 = continuation;
    this.r18_1 = get_UNDEFINED();
    this.s18_1 = threadContextElements(this.t9());
    this.t18_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).t9 = function () {
    return this.q18_1.t9();
  };
  protoOf(DispatchedContinuation).w18 = function () {
    return !(this.t18_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).i29 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.t18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).y1b = function () {
    this.i29();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.n19();
    }
  };
  protoOf(DispatchedContinuation).u18 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.t18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.t18_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.t18_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
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
  protoOf(DispatchedContinuation).y19 = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.t18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.t18_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.t18_1.atomicfu$compareAndSet(state, null)) {
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
  protoOf(DispatchedContinuation).y18 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.t18_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.t18_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.t18_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).q19 = function () {
    var state = this.r18_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.r18_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).o19 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).y9 = function (result) {
    var state = toState_0(result);
    if (this.p18_1.v1b(this.t9())) {
      this.r18_1 = state;
      this.x18_1 = 0;
      this.p18_1.w1b(this.t9(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().s1c();
        if (false && eventLoop.n1c()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.m1c()) {
          this.r18_1 = state;
          this.x18_1 = 0;
          eventLoop.l1c(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.o1c(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.t9();
            this.s18_1;
            this.q18_1.y9(result);
            $l$loop: while (eventLoop.k1c()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.j1a(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.p1c(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).p1h = function (context, value) {
    this.r18_1 = value;
    this.x18_1 = 1;
    this.p18_1.x1b(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.p18_1.toString() + ', ' + toDebugString(this.q18_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result);
      if (_this__u8e3s4.p18_1.v1b(_this__u8e3s4.t9())) {
        _this__u8e3s4.r18_1 = state;
        _this__u8e3s4.x18_1 = 1;
        _this__u8e3s4.p18_1.w1b(_this__u8e3s4.t9(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().s1c();
          if (false && eventLoop.n1c()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.m1c()) {
            _this__u8e3s4.r18_1 = state;
            _this__u8e3s4.x18_1 = 1;
            eventLoop.l1c(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.o1c(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.t9().aa(Key_instance_3);
                if (!(job == null) && !job.c14()) {
                  var cause = job.b15();
                  _this__u8e3s4.r19(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.y9(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.q18_1;
                _this__u8e3s4.s18_1;
                _this__u8e3s4.q18_1.y9(result);
              }
              $l$loop: while (eventLoop.k1c()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.j1a(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.p1c(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.y9(result);
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
      var eventLoop = ThreadLocalEventLoop_getInstance().s1c();
      if (true && eventLoop.n1c()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.m1c()) {
        _this__u8e3s4.r18_1 = Unit_instance;
        _this__u8e3s4.x18_1 = 1;
        eventLoop.l1c(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.o1c(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.i1a();
          $l$loop: while (eventLoop.k1c()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.j1a(e);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.p1c(true);
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
    this.x18_1 = resumeMode;
  }
  protoOf(DispatchedTask).r19 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).x19 = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).g1a = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.h14_1;
  };
  protoOf(DispatchedTask).i1a = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.o19();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.q18_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.s18_1;
      var context = continuation.t9();
      var state = this.q19();
      var exception = this.g1a(state);
      var job = exception == null && get_isCancellableMode(this.x18_1) ? context.aa(Key_instance_3) : null;
      if (!(job == null) && !job.c14()) {
        var cause = job.b15();
        this.r19(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.y9(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.y9(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.x19(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.y9(tmp$ret$3);
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
        this.j1a(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).j1a = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.o19().t9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.o19();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.x18_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.p18_1;
      var context = delegate.t9();
      if (dispatcher.v1b(context)) {
        dispatcher.w1b(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().s1c();
    if (eventLoop.m1c()) {
      eventLoop.l1c(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.o1c(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.o19(), true);
        $l$loop: while (eventLoop.k1c()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.j1a(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.p1c(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.q19();
    var exception = _this__u8e3s4.g1a(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.x19(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.q18_1;
      this_0.s18_1;
      this_0.q18_1.y9(result);
    } else {
      delegate.y9(result);
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
    this.j29_1 = context;
  }
  protoOf(ContextScope).b14 = function () {
    return this.j29_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.j29_1) + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.e17_1 = uCont;
  }
  protoOf(ScopeCoroutine).v15 = function () {
    return true;
  };
  protoOf(ScopeCoroutine).m14 = function (state) {
    resumeCancellableWith(intercepted(this.e17_1), recoverResult(state, this.e17_1));
  };
  protoOf(ScopeCoroutine).l14 = function (state) {
    this.e17_1.y9(recoverResult(state, this.e17_1));
  };
  function Symbol(symbol) {
    this.k29_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.k29_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).g1();
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
    if (!(minValue.b1(parsed) <= 0 ? parsed.b1(maxValue) <= 0 : false)) {
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
    completion.y9(tmp$ret$0);
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
      var state = _this__u8e3s4.k14(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.h14_1;
        if (true) {
          throw recoverStackTrace(state.h14_1, _this__u8e3s4.e17_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.h14_1, _this__u8e3s4.e17_1);
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
      var state = _this__u8e3s4.k14(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var e_0 = state.h14_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.v1g_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.h14_1, _this__u8e3s4.e17_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.h14_1, _this__u8e3s4.e17_1);
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
      actualCompletion.t9();
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
        actualCompletion.y9(tmp$ret$4);
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
      actualCompletion.y9(tmp$ret$6);
    }
  }
  function onTimeout(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.n29((new OnTimeout(timeMillis)).m29(), block);
  }
  function register($this, select, ignoredParam) {
    if ($this.l29_1.b1(new Long(0, 0)) <= 0) {
      select.c1l(Unit_instance);
      return Unit_instance;
    }
    // Inline function 'kotlinx.coroutines.Runnable' call
    var action = new _no_name_provided__qut3iv_2(select, $this);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.t9();
    var disposableHandle = get_delay(context).e1c($this.l29_1, action, context);
    select.o29(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'register';
    return l;
  }
  function _no_name_provided__qut3iv_2($select, this$0) {
    this.p29_1 = $select;
    this.q29_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_2).i1a = function () {
    // Inline function 'kotlinx.coroutines.selects.OnTimeout.register.<anonymous>' call
    this.p29_1.s1k(this.q29_1, Unit_instance);
  };
  function OnTimeout(timeMillis) {
    this.l29_1 = timeMillis;
  }
  protoOf(OnTimeout).m29 = function () {
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
    this.r29_1 = clauseObject;
    this.s29_1 = regFunc;
    this.t29_1 = onCancellationConstructor;
    this.u29_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).v29 = function () {
    return this.r29_1;
  };
  protoOf(SelectClause0Impl).w29 = function () {
    return this.s29_1;
  };
  protoOf(SelectClause0Impl).x29 = function () {
    return this.t29_1;
  };
  protoOf(SelectClause0Impl).y29 = function () {
    return this.u29_1;
  };
  function SelectInstance() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.z29_1 = clauseObject;
    this.a2a_1 = regFunc;
    this.b2a_1 = processResFunc;
    this.c2a_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).v29 = function () {
    return this.z29_1;
  };
  protoOf(SelectClause1Impl).w29 = function () {
    return this.a2a_1;
  };
  protoOf(SelectClause1Impl).y29 = function () {
    return this.b2a_1;
  };
  protoOf(SelectClause1Impl).x29 = function () {
    return this.c2a_1;
  };
  function $invokeBlockCOROUTINE$41(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2a_1 = _this__u8e3s4;
    this.m2a_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$41).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n2a_1 = this.l2a_1.t2a_1;
            if (this.l2a_1.s2a_1 === get_PARAM_CLAUSE_0()) {
              var tmp_0 = this.n2a_1;
              if (!isSuspendFunction(tmp_0, 0))
                THROW_CCE();
              this.n9_1 = 2;
              suspendResult = this.n2a_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.n2a_1;
              if (!isSuspendFunction(tmp_1, 1))
                THROW_CCE();
              this.n9_1 = 1;
              suspendResult = this.n2a_1(this.m2a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.o2a_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o2a_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.o2a_1;
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
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.w1k_1.kotlinx$atomicfu$value;
    return tmp instanceof ClauseData;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$38($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.x1k_1);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.q();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = clauses.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.checkClauseObject.<anonymous>' call
        if (element.p2a_1 === clauseObject) {
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
    cancellable.p19();
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>' call
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.w1k_1;
      while (true) {
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>' call
        var curState = this_0.kotlinx$atomicfu$value;
        if (curState === get_STATE_REG()) {
          if ($this.w1k_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.w1k_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = curState.g();
              while (tmp0_iterator.h()) {
                var element = tmp0_iterator.i();
                // Inline function 'kotlinx.coroutines.selects.SelectImplementation.waitUntilSelected.<anonymous>.<anonymous>.<anonymous>' call
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.d18(Unit_instance, curState.h2b($this, $this.a1l_1));
              break $l$block_0;
            } else {
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.t16();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.v2a_1 = null;
    clause.w2a_1 = -1;
    $this.i2b(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.w1k_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.h2b($this, internalResult);
        if ($this.w1k_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.a1l_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.a1l_1 = get_NO_RESULT();
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
              if ($this.w1k_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.w1k_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
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
    var tmp0_elvis_lhs = $this.x1k_1;
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
      var tmp0_iterator = clauses.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.p2a_1 === clauseObject) {
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
    var tmp = new $completeCOROUTINE$39($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$40($this, clause, internalResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.x1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.cleanup.<anonymous>' call
      if (!(element === selectedClause)) {
        element.n18();
      }
    }
    $this.w1k_1.kotlinx$atomicfu$value = get_STATE_COMPLETED();
    $this.a1l_1 = get_NO_RESULT();
    $this.x1k_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.x2a_1 = $outer;
    this.p2a_1 = clauseObject;
    this.q2a_1 = regFunc;
    this.r2a_1 = processResFunc;
    this.s2a_1 = param;
    this.t2a_1 = block;
    this.u2a_1 = onCancellationConstructor;
    this.v2a_1 = null;
    this.w2a_1 = -1;
  }
  protoOf(ClauseData).j2c = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.q2a_1(this.p2a_1, select, this.s2a_1);
    return select.a1l_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).k2c = function (result) {
    return this.r2a_1(this.p2a_1, this.s2a_1, result);
  };
  protoOf(ClauseData).l2c = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$41(this, argument, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ClauseData).n18 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.selects.ClauseData.dispose.<anonymous>' call
    var $this$with = this.v2a_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.d19(this.w2a_1, null, this.x2a_1.t9());
      tmp = Unit_instance;
    } else {
      var tmp160_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp160_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp160_safe_receiver.n18();
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).h2b = function (select, internalResult) {
    var tmp161_safe_receiver = this.u2a_1;
    return tmp161_safe_receiver == null ? null : tmp161_safe_receiver(select, this.s2a_1, internalResult);
  };
  function $doSelectCOROUTINE$37(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2c_1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$37).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (_get_isSelected__uy0hmu(this.u2c_1)) {
              this.n9_1 = 2;
              suspendResult = complete(this.u2c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = doSelectSuspend(this.u2c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.v2c_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.v2c_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.v2c_1;
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
  function $doSelectSuspendCOROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g2b_1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$38).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = waitUntilSelected(this.g2b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = complete(this.g2b_1, this);
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
  function $completeCOROUTINE$39(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2b_1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$39).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var tmp_1 = this.r2b_1.w1k_1.kotlinx$atomicfu$value;
            tmp_0.s2b_1 = tmp_1 instanceof ClauseData ? tmp_1 : THROW_CCE();
            this.t2b_1 = this.r2b_1.a1l_1;
            cleanup(this.r2b_1, this.s2b_1);
            if (!get_RECOVER_STACK_TRACES()) {
              this.v2b_1 = this.s2b_1.k2c(this.t2b_1);
              this.n9_1 = 2;
              suspendResult = this.s2b_1.l2c(this.v2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = processResultAndInvokeBlockRecoveringException(this.r2b_1, this.s2b_1, this.t2b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u2b_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.u2b_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.u2b_1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$40(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2c_1 = _this__u8e3s4;
    this.f2c_1 = clause;
    this.g2c_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$40).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            this.i2c_1 = this.f2c_1.k2c(this.g2c_1);
            this.n9_1 = 1;
            suspendResult = this.f2c_1.l2c(this.i2c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h2c_1 = suspendResult;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var e = this.q9_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return this.h2c_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function SelectImplementation(context) {
    this.v1k_1 = context;
    this.w1k_1 = atomic$ref$1(get_STATE_REG());
    this.x1k_1 = ArrayList_init_$Create$(2);
    this.y1k_1 = null;
    this.z1k_1 = -1;
    this.a1l_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).t9 = function () {
    return this.v1k_1;
  };
  protoOf(SelectImplementation).u24 = function ($completion) {
    var tmp = new $doSelectCOROUTINE$37(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(SelectImplementation).n29 = function (_this__u8e3s4, block) {
    return this.w2c(new ClauseData(this, _this__u8e3s4.v29(), _this__u8e3s4.w29(), _this__u8e3s4.y29(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.x29()));
  };
  protoOf(SelectImplementation).t24 = function (_this__u8e3s4, block) {
    return this.w2c(new ClauseData(this, _this__u8e3s4.v29(), _this__u8e3s4.w29(), _this__u8e3s4.y29(), null, block, _this__u8e3s4.x29()));
  };
  protoOf(SelectImplementation).i2b = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.selects.SelectImplementation.register.<anonymous>' call
    if (this.w1k_1.kotlinx$atomicfu$value instanceof ClauseData)
      return Unit_instance;
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.p2a_1);
    }
    if (_this__u8e3s4.j2c(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.x1k_1).e(_this__u8e3s4);
      }
      _this__u8e3s4.v2a_1 = this.y1k_1;
      _this__u8e3s4.w2a_1 = this.z1k_1;
      this.y1k_1 = null;
      this.z1k_1 = -1;
    } else {
      this.w1k_1.kotlinx$atomicfu$value = _this__u8e3s4;
    }
  };
  protoOf(SelectImplementation).w2c = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.i2b(_this__u8e3s4, reregister);
      tmp = Unit_instance;
    } else {
      tmp = $super.i2b.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).o29 = function (disposableHandle) {
    this.y1k_1 = disposableHandle;
  };
  protoOf(SelectImplementation).b1a = function (segment, index) {
    this.y1k_1 = segment;
    this.z1k_1 = index;
  };
  protoOf(SelectImplementation).c1l = function (internalResult) {
    this.a1l_1 = internalResult;
  };
  protoOf(SelectImplementation).s1k = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).b1l = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).m18 = function (cause) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.w1k_1;
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
    var tmp0_elvis_lhs = this.x1k_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'kotlinx.coroutines.selects.SelectImplementation.invoke.<anonymous>' call
      element.n18();
    }
    this.a1l_1 = get_NO_RESULT();
    this.x1k_1 = null;
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
    var tmp0_elvis_lhs = _this__u8e3s4.w17(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.x17(token);
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
      this$0.i2d_1.kotlinx$atomicfu$value = this$1.l2d_1;
      this$0.z2c(this$1.l2d_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.z2c(this$1.l2d_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.n2d())
        return 0;
      var curOwner = $this.i2d_1.kotlinx$atomicfu$value;
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
        cancellable.w19();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.t16();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.v2d()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.i2d_1.kotlinx$atomicfu$value = owner;
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
    this.m2d_1 = $outer;
    this.k2d_1 = cont;
    this.l2d_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).w2d = function (value, onCancellation) {
    this.k2d_1.c18(Unit_instance, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).c18 = function (value, onCancellation) {
    return this.w2d(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).x17 = function (token) {
    this.k2d_1.x17(token);
  };
  protoOf(CancellableContinuationWithOwner).y17 = function (cause) {
    return this.k2d_1.y17(cause);
  };
  protoOf(CancellableContinuationWithOwner).a18 = function (handler) {
    this.k2d_1.a18(handler);
  };
  protoOf(CancellableContinuationWithOwner).x2d = function (_this__u8e3s4, value) {
    this.k2d_1.b18(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).b18 = function (_this__u8e3s4, value) {
    return this.x2d(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).xh = function (result) {
    this.k2d_1.y9(result);
  };
  protoOf(CancellableContinuationWithOwner).y9 = function (result) {
    return this.xh(result);
  };
  protoOf(CancellableContinuationWithOwner).y14 = function () {
    return this.k2d_1.y14();
  };
  protoOf(CancellableContinuationWithOwner).t9 = function () {
    return this.k2d_1.t9();
  };
  protoOf(CancellableContinuationWithOwner).b1a = function (segment, index) {
    this.k2d_1.b1a(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).y2d = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.k2d_1.w17(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.m2d_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.m2d_1.i2d_1.kotlinx$atomicfu$value = this.l2d_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).w17 = function (value, idempotent, onCancellation) {
    return this.y2d(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).z2d = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.m2d_1.i2d_1.kotlinx$atomicfu$value = this.l2d_1;
    this.k2d_1.c18(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.m2d_1, this));
  };
  protoOf(CancellableContinuationWithOwner).d18 = function (value, onCancellation) {
    return this.z2d(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.z2c($owner);
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
    this.i2d_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.j2d_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).n2d = function () {
    return this.a2e() === 0;
  };
  protoOf(MutexImpl).x2c = function (owner, $completion) {
    if (this.b2e(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).b2e = function (owner) {
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
  protoOf(MutexImpl).z2c = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.n2d()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.i2d_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(curOwner === owner || owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.i2d_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.c2e();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.n2d() + ',owner=' + toString_0(this.i2d_1.kotlinx$atomicfu$value) + ']';
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
      var p = $this.t2d_1.atomicfu$getAndDecrement();
      if (p > $this.o2d_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.t2d_1.kotlinx$atomicfu$value;
      if (cur <= $this.o2d_1)
        break $l$loop_0;
      if ($this.t2d_1.atomicfu$compareAndSet(cur, $this.o2d_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.r2d_1.kotlinx$atomicfu$value;
    var enqIdx = $this.s2d_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.r2d_1;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE_0();
      var id = enqIdx.d3(toLong(other));
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
              if (cur.b19_1.b1(to.b19_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.w1i()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.x1i()) {
                  cur.o4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.x1i()) {
                to.o4();
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
    var i = enqIdx.e3(toLong(other_0)).g1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.h2e_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.b1a(segment, i);
      return true;
    }
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var expected = get_PERMIT();
    var value = get_TAKEN();
    if (segment.h2e_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.d18(Unit_instance, $this.u2d_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.c1l(Unit_instance);
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
    var curHead = $this.p2d_1.kotlinx$atomicfu$value;
    var deqIdx = $this.q2d_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.d3(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.p2d_1;
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
              if (cur.b19_1.b1(to.b19_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.w1i()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.x1i()) {
                  cur.o4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.x1i()) {
                to.o4();
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
    segment.e1j();
    if (segment.b19_1.b1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.e3(toLong(other_0)).g1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.h2e_1.atomicfu$get(i).atomicfu$getAndSet(value);
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
          if (segment.h2e_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var expected = get_PERMIT();
      var value_0 = get_BROKEN();
      return !segment.h2e_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value_0);
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
      var token = _this__u8e3s4.w17(Unit_instance, null, $this.u2d_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.x17(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.s1k($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.c2e();
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
    this.o2d_1 = permits;
    this.q2d_1 = atomic$long$1(new Long(0, 0));
    this.s2d_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.o2d_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.o2d_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.o2d_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.o2d_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.p2d_1 = atomic$ref$1(s);
    this.r2d_1 = atomic$ref$1(s);
    this.t2d_1 = atomic$int$1(this.o2d_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.u2d_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).a2e = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.t2d_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).v2d = function () {
    $l$loop: while (true) {
      var p = this.t2d_1.kotlinx$atomicfu$value;
      if (p > this.o2d_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.t2d_1.atomicfu$compareAndSet(p, p - 1 | 0))
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
          waiter.d18(Unit_instance, this.u2d_1);
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
  protoOf(SemaphoreAndMutexImpl).c2e = function () {
    while (true) {
      var p = this.t2d_1.atomicfu$getAndIncrement();
      if (p >= this.o2d_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.o2d_1;
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
    this.h2e_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).x1h = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).d19 = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.h2e_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.u1i();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.b19_1.toString() + ', hashCode=' + hashCode(this) + ']';
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
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).kb();
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
  protoOf(NodeDispatcher).k2e = function () {
    process.nextTick(this.r2e_1.p2e_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.v2e();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.o2e_1 = dispatcher;
    var tmp = this;
    tmp.p2e_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).w2e = function () {
    this.o2e_1.k2e();
  };
  protoOf(ScheduledMessageQueue).x2e = function () {
    setTimeout(this.p2e_1, 0);
  };
  protoOf(ScheduledMessageQueue).y2e = function (timeout) {
    setTimeout(this.p2e_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.n2f_1 && event.data == this$0.o2f_1) {
        event.stopPropagation();
        this$0.v2e();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.v2e();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.n2f_1 = window_0;
    this.o2f_1 = 'dispatchCoroutine';
    this.n2f_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).w2e = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).x2e = function () {
    this.n2f_1.postMessage(this.o2f_1, '*');
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
    cancellable.p19();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.t16();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.y9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.y9(tmp$ret$0);
      return Unit_instance;
    };
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
  protoOf(UnconfinedEventLoop).w1b = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).k2e = function () {
    this.r2e_1.y2e(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.i1a();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.b18(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.r2e_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).w1b = function (context, block) {
    this.r2e_1.j2f(block);
  };
  protoOf(SetTimeoutBasedDispatcher).e1c = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).d1c = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.s2e_1 = ArrayDeque_init_$Create$();
    this.t2e_1 = 16;
    this.u2e_1 = false;
  }
  protoOf(MessageQueue).z2e = function (element) {
    return this.s2e_1.e(element);
  };
  protoOf(MessageQueue).e = function (element) {
    return this.z2e((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).a2f = function (index, element) {
    this.s2e_1.r2(index, element);
  };
  protoOf(MessageQueue).r2 = function (index, element) {
    return this.a2f(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).b2f = function (index, elements) {
    return this.s2e_1.p2(index, elements);
  };
  protoOf(MessageQueue).p2 = function (index, elements) {
    return this.b2f(index, elements);
  };
  protoOf(MessageQueue).c2f = function (elements) {
    return this.s2e_1.n(elements);
  };
  protoOf(MessageQueue).n = function (elements) {
    return this.c2f(elements);
  };
  protoOf(MessageQueue).i2 = function () {
    this.s2e_1.i2();
  };
  protoOf(MessageQueue).d2 = function (index) {
    return this.s2e_1.d2(index);
  };
  protoOf(MessageQueue).d2f = function (element) {
    return this.s2e_1.o2(element);
  };
  protoOf(MessageQueue).o2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.d2f((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).s2 = function (index) {
    return this.s2e_1.s2(index);
  };
  protoOf(MessageQueue).e2f = function (index, element) {
    return this.s2e_1.q2(index, element);
  };
  protoOf(MessageQueue).q2 = function (index, element) {
    return this.e2f(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).e2 = function (fromIndex, toIndex) {
    return this.s2e_1.e2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).f2f = function (element) {
    return this.s2e_1.p(element);
  };
  protoOf(MessageQueue).p = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.f2f((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).g2f = function (elements) {
    return this.s2e_1.a2(elements);
  };
  protoOf(MessageQueue).a2 = function (elements) {
    return this.g2f(elements);
  };
  protoOf(MessageQueue).o = function (index) {
    return this.s2e_1.o(index);
  };
  protoOf(MessageQueue).h2f = function (element) {
    return this.s2e_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.h2f((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q = function () {
    return this.s2e_1.q();
  };
  protoOf(MessageQueue).g = function () {
    return this.s2e_1.g();
  };
  protoOf(MessageQueue).i2f = function (element) {
    return this.s2e_1.b2(element);
  };
  protoOf(MessageQueue).b2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.i2f((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).j = function () {
    return this.s2e_1.kg_1;
  };
  protoOf(MessageQueue).j2f = function (element) {
    this.z2e(element);
    if (!this.u2e_1) {
      this.u2e_1 = true;
      this.w2e();
    }
  };
  protoOf(MessageQueue).v2e = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.t2e_1;
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
          element.i1a();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.u2e_1 = false;
      } else {
        this.x2e();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.w2f_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).n18 = function () {
    w3cClearTimeout(this.w2f_1.y2f_1, this.a2g_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.b18(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref($boundThis) {
    var l = function () {
      $boundThis.i1a();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.y2f_1 = window_0;
    this.z2f_1 = new WindowMessageQueue(this.y2f_1);
  }
  protoOf(WindowDispatcher).w1b = function (context, block) {
    return this.z2f_1.j2f(block);
  };
  protoOf(WindowDispatcher).d1c = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.y2f_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).e1c = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.y2f_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).g1();
  }
  function ClearTimeout(handle) {
    this.a2g_1 = handle;
  }
  protoOf(ClearTimeout).n18 = function () {
    w3cClearTimeout_0(this.a2g_1);
  };
  protoOf(ClearTimeout).m18 = function (cause) {
    this.n18();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.a2g_1 + ']';
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().j1g_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.b14().hj(context);
    return !(combined === Dispatchers_getInstance().j1g_1) && combined.aa(Key_instance) == null ? combined.hj(Dispatchers_getInstance().j1g_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.hj(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).l14 = function (state) {
    return this.e17_1.y9(recoverResult(state, this.e17_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.j1g_1 = createDefaultDispatcher();
    this.k1g_1 = Unconfined_getInstance();
    this.l1g_1 = new JsMainDispatcher(this.j1g_1, false);
    this.m1g_1 = null;
  }
  protoOf(Dispatchers).n1g = function () {
    var tmp0_elvis_lhs = this.m1g_1;
    return tmp0_elvis_lhs == null ? this.l1g_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.g2g_1 = delegate;
    this.h2g_1 = invokeImmediately;
    this.i2g_1 = this.h2g_1 ? this : new JsMainDispatcher(this.g2g_1, true);
  }
  protoOf(JsMainDispatcher).h1g = function () {
    return this.i2g_1;
  };
  protoOf(JsMainDispatcher).v1b = function (context) {
    return !this.h2g_1;
  };
  protoOf(JsMainDispatcher).w1b = function (context, block) {
    return this.g2g_1.w1b(context, block);
  };
  protoOf(JsMainDispatcher).x1b = function (context, block) {
    return this.g2g_1.x1b(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.i1g();
    return tmp0_elvis_lhs == null ? this.g2g_1.toString() : tmp0_elvis_lhs;
  };
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.j2g_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.j2g_1);
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
        tmp_1 = equals(other.j2g_1, this.j2g_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.j2g_1) | 0, 31);
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
    this.c20_1 = owner;
  }
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.k1s_1 = collector;
    this.l1s_1 = collectContext;
    var tmp = this;
    tmp.m1s_1 = this.l1s_1.gj(0, SafeCollector$collectContextSize$lambda);
    this.n1s_1 = null;
  }
  protoOf(SafeCollector).x1r = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.t9();
    ensureActive(currentContext);
    if (!(this.n1s_1 === currentContext)) {
      checkContext(this, currentContext);
      this.n1s_1 = currentContext;
    }
    return this.k1s_1.x1r(value, $completion);
  };
  protoOf(SafeCollector).x9 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.r1v_1 = value;
  }
  protoOf(WorkaroundAtomicReference).zp = function () {
    return this.r1v_1;
  };
  protoOf(WorkaroundAtomicReference).h29 = function (value) {
    this.r1v_1 = value;
  };
  protoOf(WorkaroundAtomicReference).t1v = function (value) {
    var prev = this.r1v_1;
    this.r1v_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).s1v = function (expected, value) {
    if (this.r1v_1 === expected) {
      this.r1v_1 = value;
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
    this.y1a_1 = this;
    this.z1a_1 = this;
    this.a1b_1 = false;
  }
  protoOf(LockFreeLinkedListNode).b1b = function (node, permissionsBitmask) {
    var prev = this.z1a_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.n2g_1 & permissionsBitmask) === 0 && prev.b1b(node, permissionsBitmask));
    } else {
      node.y1a_1 = this;
      node.z1a_1 = prev;
      prev.y1a_1 = node;
      this.z1a_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).f1d = function (forbiddenElementsBit) {
    this.b1b(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).c1b = function () {
    if (this.a1b_1)
      return false;
    var prev = this.z1a_1;
    var next = this.y1a_1;
    prev.y1a_1 = next;
    next.z1a_1 = prev;
    this.a1b_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).d1b = function (node) {
    if (!(this.y1a_1 === this))
      return false;
    this.b1b(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.n2g_1 = forbiddenElementsBitmask;
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
    this.t1c_1 = null;
  }
  protoOf(CommonThreadLocal).zp = function () {
    var tmp = this.t1c_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).u1c = function (value) {
    this.t1c_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).g15 = invokeOnCompletion$default;
  protoOf(JobSupport).m15 = cancel$default;
  protoOf(JobSupport).hj = plus;
  protoOf(JobSupport).aa = get_0;
  protoOf(JobSupport).gj = fold;
  protoOf(JobSupport).fj = minusKey_0;
  protoOf(CancellableContinuationImpl).z17 = cancel$default_0;
  protoOf(CoroutineDispatcher).aa = get;
  protoOf(CoroutineDispatcher).fj = minusKey;
  protoOf(BufferedChannel).u1n = close$default;
  protoOf(BufferedChannel).w1n = cancel$default_1;
  protoOf(ChannelCoroutine).u1n = close$default;
  protoOf(CancellableContinuationWithOwner).z17 = cancel$default_0;
  protoOf(MutexImpl).y2c = lock$default;
  protoOf(MutexImpl).a2d = unlock$default;
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
  _.$_$.f = first;
  _.$_$.g = await_0;
  _.$_$.h = cancelAndJoin;
  _.$_$.i = coroutineScope;
  _.$_$.j = delay;
  _.$_$.k = joinAll;
  _.$_$.l = supervisorScope;
  _.$_$.m = withContext;
  _.$_$.n = withTimeoutOrNull;
  _.$_$.o = yield_0;
  _.$_$.p = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.q = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.r = Key_getInstance;
  _.$_$.s = Key_instance_1;
  _.$_$.t = Key_instance_2;
  _.$_$.u = Dispatchers_getInstance;
  _.$_$.v = GlobalScope_instance;
  _.$_$.w = Key_instance_3;
  _.$_$.x = ChannelResult;
  _.$_$.y = Channel;
  _.$_$.z = ProducerScope;
  _.$_$.a1 = cancelConsumed;
  _.$_$.b1 = FlowCollector;
  _.$_$.c1 = MutableSharedFlow;
  _.$_$.d1 = MutableStateFlow;
  _.$_$.e1 = asSharedFlow;
  _.$_$.f1 = asStateFlow;
  _.$_$.g1 = callbackFlow;
  _.$_$.h1 = channelFlow;
  _.$_$.i1 = debounce;
  _.$_$.j1 = flow;
  _.$_$.k1 = launchIn;
  _.$_$.l1 = mapLatest;
  _.$_$.m1 = onEach;
  _.$_$.n1 = receiveAsFlow;
  _.$_$.o1 = transformLatest;
  _.$_$.p1 = recoverStackTrace;
  _.$_$.q1 = startCoroutineCancellable_1;
  _.$_$.r1 = Mutex_0;
  _.$_$.s1 = CancellableContinuationImpl;
  _.$_$.t1 = CancellationException_0;
  _.$_$.u1 = CompletableDeferred;
  _.$_$.v1 = CompletableJob;
  _.$_$.w1 = CopyableThrowable;
  _.$_$.x1 = CoroutineDispatcher;
  _.$_$.y1 = CoroutineName;
  _.$_$.z1 = CoroutineScope_0;
  _.$_$.a2 = CoroutineScope;
  _.$_$.b2 = invokeOnTimeout;
  _.$_$.c2 = Delay;
  _.$_$.d2 = DisposableHandle;
  _.$_$.e2 = Job_0;
  _.$_$.f2 = MainCoroutineDispatcher;
  _.$_$.g2 = Runnable;
  _.$_$.h2 = SupervisorJob;
  _.$_$.i2 = async;
  _.$_$.j2 = cancel;
  _.$_$.k2 = cancel_2;
  _.$_$.l2 = cancel_0;
  _.$_$.m2 = cancel_1;
  _.$_$.n2 = get_isActive_0;
  _.$_$.o2 = get_isActive;
  _.$_$.p2 = get_job;
  _.$_$.q2 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
