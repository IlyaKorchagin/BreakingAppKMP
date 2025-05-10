(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.yh;
  var toString = kotlin_kotlin.$_$.ci;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var VOID = kotlin_kotlin.$_$.i;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function EventListenerHandler(handler) {
    this.handler_1 = handler;
  }
  protoOf(EventListenerHandler).handleEvent_zcjn50_k$ = function (event) {
    this.handler_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.handleEvent_zcjn50_k$(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.handler_1) + ')';
  };
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function KeyboardEventInit(key, code, location, repeat, isComposing, ctrlKey, shiftKey, altKey, metaKey, modifierAltGraph, modifierCapsLock, modifierFn, modifierFnLock, modifierHyper, modifierNumLock, modifierScrollLock, modifierSuper, modifierSymbol, modifierSymbolLock, view, detail, bubbles, cancelable, composed) {
    key = key === VOID ? '' : key;
    code = code === VOID ? '' : code;
    location = location === VOID ? 0 : location;
    repeat = repeat === VOID ? false : repeat;
    isComposing = isComposing === VOID ? false : isComposing;
    ctrlKey = ctrlKey === VOID ? false : ctrlKey;
    shiftKey = shiftKey === VOID ? false : shiftKey;
    altKey = altKey === VOID ? false : altKey;
    metaKey = metaKey === VOID ? false : metaKey;
    modifierAltGraph = modifierAltGraph === VOID ? false : modifierAltGraph;
    modifierCapsLock = modifierCapsLock === VOID ? false : modifierCapsLock;
    modifierFn = modifierFn === VOID ? false : modifierFn;
    modifierFnLock = modifierFnLock === VOID ? false : modifierFnLock;
    modifierHyper = modifierHyper === VOID ? false : modifierHyper;
    modifierNumLock = modifierNumLock === VOID ? false : modifierNumLock;
    modifierScrollLock = modifierScrollLock === VOID ? false : modifierScrollLock;
    modifierSuper = modifierSuper === VOID ? false : modifierSuper;
    modifierSymbol = modifierSymbol === VOID ? false : modifierSymbol;
    modifierSymbolLock = modifierSymbolLock === VOID ? false : modifierSymbolLock;
    view = view === VOID ? null : view;
    detail = detail === VOID ? 0 : detail;
    bubbles = bubbles === VOID ? false : bubbles;
    cancelable = cancelable === VOID ? false : cancelable;
    composed = composed === VOID ? false : composed;
    var o = {};
    o['key'] = key;
    o['code'] = code;
    o['location'] = location;
    o['repeat'] = repeat;
    o['isComposing'] = isComposing;
    o['ctrlKey'] = ctrlKey;
    o['shiftKey'] = shiftKey;
    o['altKey'] = altKey;
    o['metaKey'] = metaKey;
    o['modifierAltGraph'] = modifierAltGraph;
    o['modifierCapsLock'] = modifierCapsLock;
    o['modifierFn'] = modifierFn;
    o['modifierFnLock'] = modifierFnLock;
    o['modifierHyper'] = modifierHyper;
    o['modifierNumLock'] = modifierNumLock;
    o['modifierScrollLock'] = modifierScrollLock;
    o['modifierSuper'] = modifierSuper;
    o['modifierSymbol'] = modifierSymbol;
    o['modifierSymbolLock'] = modifierSymbolLock;
    o['view'] = view;
    o['detail'] = detail;
    o['bubbles'] = bubbles;
    o['cancelable'] = cancelable;
    o['composed'] = composed;
    return o;
  }
  function AddEventListenerOptions(passive, once, capture) {
    passive = passive === VOID ? false : passive;
    once = once === VOID ? false : once;
    capture = capture === VOID ? false : capture;
    var o = {};
    o['passive'] = passive;
    o['once'] = once;
    o['capture'] = capture;
    return o;
  }
  function get_ARRAYBUFFER(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'arraybuffer';
  }
  function get_FOLLOW(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'follow';
  }
  function get_MANUAL(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'manual';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
