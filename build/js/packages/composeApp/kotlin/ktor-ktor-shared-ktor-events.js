(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    globalThis['ktor-ktor-shared-ktor-events'] = factory(typeof globalThis['ktor-ktor-shared-ktor-events'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-events'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var LockFreeLinkedListNode = kotlin_io_ktor_ktor_utils.$_$.d;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var VOID = kotlin_kotlin.$_$.j;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var addSuppressed = kotlin_kotlin.$_$.cl;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
  initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, DisposableHandle]);
  initMetadataForClass(Events, 'Events', Events);
  //endregion
  function EventDefinition() {
  }
  function HandlerRegistration() {
  }
  function Events() {
    this.dj2_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).ej2 = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.dj2_1.zim(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.r1j();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.raise.<anonymous>' call
          var registration = cur;
          try {
            var tmp_0 = registration.gj2_1;
            (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_1 = Unit_instance;
              }
              if (tmp_1 == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.yin();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp1_safe_receiver;
    }
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-events.js.map
