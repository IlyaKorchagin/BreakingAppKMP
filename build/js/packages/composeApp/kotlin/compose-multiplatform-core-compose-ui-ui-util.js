(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var toString = kotlin_kotlin.$_$.cm;
  var Char = kotlin_kotlin.$_$.xj;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var toRawBits = kotlin_kotlin.$_$.bm;
  var toLong = kotlin_kotlin.$_$.hf;
  var Long = kotlin_kotlin.$_$.hk;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var floatFromBits = kotlin_kotlin.$_$.rd;
  var roundToInt = kotlin_kotlin.$_$.pf;
  //endregion
  //region block: pre-declaration
  //endregion
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.p() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.u(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.w8(element.u1_1);
        } else {
          _this__u8e3s4.f(toString(element));
        }
      }
    }
  }
  function fastFilterNotNull(_this__u8e3s4) {
    var target = ArrayList_init_$Create$(_this__u8e3s4.p());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.u(index);
        // Inline function 'androidx.compose.ui.util.fastFilterNotNull.<anonymous>' call
        if (!(item == null)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastCbrt(x) {
    var v = toLong(toRawBits(x)).r3(new Long(-1, 1));
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.Long.div' call
    // Inline function 'kotlin.fromBits' call
    var bits = 709952852 + v.i3(toLong(3)).m1() | 0;
    var estimate = floatFromBits(bits);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    return estimate;
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (stop - start | 0) * fraction;
    return start + roundToInt(this_0) | 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastCbrt;
  _.$_$.b = fastFilterNotNull;
  _.$_$.c = fastJoinToString;
  _.$_$.d = lerp;
  _.$_$.e = lerp_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-util.js.map
