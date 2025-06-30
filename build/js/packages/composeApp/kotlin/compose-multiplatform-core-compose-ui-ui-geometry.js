(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var floatFromBits = kotlin_kotlin.$_$.rd;
  var Long = kotlin_kotlin.$_$.hk;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var toRawBits = kotlin_kotlin.$_$.bm;
  var toLong = kotlin_kotlin.$_$.hf;
  var isNaN_0 = kotlin_kotlin.$_$.nl;
  var isInfinite = kotlin_kotlin.$_$.ml;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var equals = kotlin_kotlin.$_$.od;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).p3(32).m1();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).r3(new Long(-1, 0)).m1();
    return floatFromBits(bits);
  }
  function Companion() {
    Companion_instance = this;
    this.f5g_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.g5g_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.g5g_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.g5g_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.g5g_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.g5g_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function MutableRect(left, top, right, bottom) {
    this.h5g_1 = left;
    this.i5g_1 = top;
    this.j5g_1 = right;
    this.k5g_1 = bottom;
  }
  protoOf(MutableRect).i2w = function () {
    return this.h5g_1 >= this.j5g_1 || this.i5g_1 >= this.k5g_1;
  };
  protoOf(MutableRect).l5g = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.h5g_1;
    tmp.h5g_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.i5g_1;
    tmp_0.i5g_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.j5g_1;
    tmp_1.j5g_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.k5g_1;
    tmp_2.k5g_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).m5g = function (left, top, right, bottom) {
    this.h5g_1 = left;
    this.i5g_1 = top;
    this.j5g_1 = right;
    this.k5g_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.h5g_1, 1) + ', ') + (toStringAsFixed(this.i5g_1, 1) + ', ') + (toStringAsFixed(this.j5g_1, 1) + ', ') + (toStringAsFixed(this.k5g_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.h5g_1, _this__u8e3s4.i5g_1, _this__u8e3s4.j5g_1, _this__u8e3s4.k5g_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    return floatFromBits(bits);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$6 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
      tmp = floatFromBits(bits);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
      tmp_0 = floatFromBits(bits_0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    var tmp_1;
    if ($super === VOID) {
      tmp_1 = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_2 = $super;
      tmp_1 = (tmp_2 == null ? null : new Offset(tmp_2)).o5g.call(new Offset($this), x, y).n5g_1;
    }
    return tmp_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p5g_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.q5g_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.r5g_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    var v = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(2147483647, 2147483647));
    return v.g3(new Long(2139095041, 2139095041)).r3(v.n3()).r3(new Long(-2147483648, -2147483648)).equals(new Long(-2147483648, -2147483648));
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return _Offset___init__impl__c168vi(_Offset___get_packedValue__impl__xh2k8q($this).t3(new Long(-2147483648, -2147483648)));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).p3(32).m1();
    var val1 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).r3(new Long(-1, 0)).m1();
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).p3(32).m1();
    var val1 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).r3(new Long(-1, 0)).m1();
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var val1 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).p3(32).m1();
    var val1 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).r3(new Long(-1, 0)).m1();
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.n5g_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.n5g_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.n5g_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.n5g_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.n5g_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    var v = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).r3(new Long(2139095040, 2139095040)).t3(new Long(2139095040, 2139095040));
    return v.g3(new Long(1, 1)).r3(v.n3()).r3(new Long(-2147483648, -2147483648)).equals(new Long(0, 0));
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).r3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).r3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q(start).p3(32).m1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(stop).p3(32).m1();
    var tmp$ret$5 = floatFromBits(bits_0);
    var val1 = lerp(tmp, tmp$ret$5, fraction);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q(start).r3(new Long(-1, 0)).m1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(stop).r3(new Long(-1, 0)).m1();
    var tmp$ret$11 = floatFromBits(bits_2);
    var val2 = lerp(tmp_0, tmp$ret$11, fraction);
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.s5g_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.t5g_1 = left;
    this.u5g_1 = top;
    this.v5g_1 = right;
    this.w5g_1 = bottom;
  }
  protoOf(Rect).x5g = function () {
    return this.v5g_1 - this.t5g_1;
  };
  protoOf(Rect).y5g = function () {
    return this.w5g_1 - this.u5g_1;
  };
  protoOf(Rect).z5g = function () {
    return Size_0(this.x5g(), this.y5g());
  };
  protoOf(Rect).a5h = function (offset) {
    return new Rect(this.t5g_1 + _Offset___get_x__impl__xvi35n(offset), this.u5g_1 + _Offset___get_y__impl__8bzhra(offset), this.v5g_1 + _Offset___get_x__impl__xvi35n(offset), this.w5g_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).b5h = function (translateX, translateY) {
    return new Rect(this.t5g_1 + translateX, this.u5g_1 + translateY, this.v5g_1 + translateX, this.w5g_1 + translateY);
  };
  protoOf(Rect).c5h = function (other) {
    // Inline function 'kotlin.math.max' call
    var a = this.t5g_1;
    var b = other.t5g_1;
    var tmp = Math.max(a, b);
    // Inline function 'kotlin.math.max' call
    var a_0 = this.u5g_1;
    var b_0 = other.u5g_1;
    var tmp_0 = Math.max(a_0, b_0);
    // Inline function 'kotlin.math.min' call
    var a_1 = this.v5g_1;
    var b_1 = other.v5g_1;
    var tmp_1 = Math.min(a_1, b_1);
    // Inline function 'kotlin.math.min' call
    var a_2 = this.w5g_1;
    var b_2 = other.w5g_1;
    var tmp$ret$3 = Math.min(a_2, b_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).d5h = function () {
    return Offset_0(this.t5g_1, this.u5g_1);
  };
  protoOf(Rect).e5h = function () {
    return Offset_0(this.v5g_1, this.w5g_1);
  };
  protoOf(Rect).f5h = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset) >= this.t5g_1 && _Offset___get_x__impl__xvi35n(offset) < this.v5g_1 && _Offset___get_y__impl__8bzhra(offset) >= this.u5g_1 && _Offset___get_y__impl__8bzhra(offset) < this.w5g_1;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.t5g_1, 1) + ', ') + (toStringAsFixed(this.u5g_1, 1) + ', ') + (toStringAsFixed(this.v5g_1, 1) + ', ') + (toStringAsFixed(this.w5g_1, 1) + ')');
  };
  protoOf(Rect).g5h = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).h5h = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.t5g_1 : left;
    top = top === VOID ? this.u5g_1 : top;
    right = right === VOID ? this.v5g_1 : right;
    bottom = bottom === VOID ? this.w5g_1 : bottom;
    return $super === VOID ? this.g5h(left, top, right, bottom) : $super.g5h.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.t5g_1);
    result = imul(result, 31) + getNumberHashCode(this.u5g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v5g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w5g_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.t5g_1, tmp0_other_with_cast.t5g_1))
      return false;
    if (!equals(this.u5g_1, tmp0_other_with_cast.u5g_1))
      return false;
    if (!equals(this.v5g_1, tmp0_other_with_cast.v5g_1))
      return false;
    if (!equals(this.w5g_1, tmp0_other_with_cast.w5g_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Rect_1(topLeft, bottomRight) {
    return new Rect(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(bottomRight), _Offset___get_y__impl__8bzhra(bottomRight));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.i5h_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().f5g_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().f5g_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().f5g_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().f5g_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().f5g_1 : bottomLeftCornerRadius;
    this.j5h_1 = left;
    this.k5h_1 = top;
    this.l5h_1 = right;
    this.m5h_1 = bottom;
    this.n5h_1 = topLeftCornerRadius;
    this.o5h_1 = topRightCornerRadius;
    this.p5h_1 = bottomRightCornerRadius;
    this.q5h_1 = bottomLeftCornerRadius;
    this.r5h_1 = null;
  }
  protoOf(RoundRect).x5g = function () {
    return this.l5h_1 - this.j5h_1;
  };
  protoOf(RoundRect).y5g = function () {
    return this.m5h_1 - this.k5h_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.n5h_1;
    var trRadius = this.o5h_1;
    var brRadius = this.p5h_1;
    var blRadius = this.q5h_1;
    var rect = toStringAsFixed(this.j5h_1, 1) + ', ' + (toStringAsFixed(this.k5h_1, 1) + ', ') + (toStringAsFixed(this.l5h_1, 1) + ', ') + toStringAsFixed(this.m5h_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.j5h_1);
    result = imul(result, 31) + getNumberHashCode(this.k5h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l5h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m5h_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.n5h_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.o5h_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.p5h_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.q5h_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.j5h_1, tmp0_other_with_cast.j5h_1))
      return false;
    if (!equals(this.k5h_1, tmp0_other_with_cast.k5h_1))
      return false;
    if (!equals(this.l5h_1, tmp0_other_with_cast.l5h_1))
      return false;
    if (!equals(this.m5h_1, tmp0_other_with_cast.m5h_1))
      return false;
    if (!equals(this.n5h_1, tmp0_other_with_cast.n5h_1))
      return false;
    if (!equals(this.o5h_1, tmp0_other_with_cast.o5h_1))
      return false;
    if (!equals(this.p5h_1, tmp0_other_with_cast.p5h_1))
      return false;
    if (!equals(this.q5h_1, tmp0_other_with_cast.q5h_1))
      return false;
    return true;
  };
  function get_isSimple(_this__u8e3s4) {
    return _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.n5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.o5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.o5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.p5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.p5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.q5h_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.n5h_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.q5h_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().f5g_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().f5g_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().f5g_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().f5g_1 : bottomLeft;
    return new RoundRect(rect.t5g_1, rect.u5g_1, rect.v5g_1, rect.w5g_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).p3(32).m1();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).r3(new Long(-1, 0)).m1();
    return floatFromBits(bits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.s5h_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.t5h_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    var tmp = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.Long.times' call
    var tmp$ret$0 = _Size___get_packedValue__impl__7rlt1o($this).r3(new Long(-2147483648, -2147483648)).q3(31).h3(toLong(-1));
    var v = tmp.r3(tmp$ret$0.n3());
    return v.q3(32).r3(v.r3(new Long(-1, 0))).equals(new Long(0, 0));
  }
  function Size__times_impl_fnp4nc($this, operand) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.packFloats' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).p3(32).m1();
    var val1 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).r3(new Long(-1, 0)).m1();
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(val1));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'kotlin.math.min' call
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).p3(32).r3(new Long(2147483647, 0)).m1();
    var a = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).r3(new Long(2147483647, 0)).m1();
    var b = floatFromBits(bits_0);
    return Math.min(a, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.u5h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.u5h_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.u5h_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.u5h_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.u5h_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().p5g_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$0 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    if (_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).p3(32).m1();
    var tmp = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).r3(new Long(-1, 0)).m1();
    var tmp$ret$5 = floatFromBits(bits_0);
    return Offset_0(tmp, tmp$ret$5 / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_1;
  _.$_$.g = Rect_0;
  _.$_$.h = Rect;
  _.$_$.i = RoundRect_0;
  _.$_$.j = RoundRect_1;
  _.$_$.k = RoundRect;
  _.$_$.l = Size_0;
  _.$_$.m = Size;
  _.$_$.n = get_center;
  _.$_$.o = get_isFinite;
  _.$_$.p = get_isSimple;
  _.$_$.q = get_isSpecified;
  _.$_$.r = get_isUnspecified;
  _.$_$.s = lerp_0;
  _.$_$.t = toRect;
  _.$_$.u = toRect_0;
  _.$_$.v = _CornerRadius___get_x__impl__1594cn;
  _.$_$.w = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.x = Offset__copy_impl_9gtypn;
  _.$_$.y = Offset__div_impl_eaxtg1;
  _.$_$.z = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.a1 = Offset__getDistance_impl_pclvxn;
  _.$_$.b1 = Offset__hashCode_impl_hbql41;
  _.$_$.c1 = Offset__isValid_impl_z7krde;
  _.$_$.d1 = Offset__minus_impl_hoj2c0;
  _.$_$.e1 = _Offset___get_packedValue__impl__xh2k8q;
  _.$_$.f1 = Offset__plus_impl_c78cg0;
  _.$_$.g1 = Offset__times_impl_jz1mli;
  _.$_$.h1 = Offset__toString_impl_4ffbou;
  _.$_$.i1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.j1 = _Offset___get_x__impl__xvi35n;
  _.$_$.k1 = _Offset___get_y__impl__8bzhra;
  _.$_$.l1 = Size__hashCode_impl_2h1qpd;
  _.$_$.m1 = _Size___get_height__impl__a04p02;
  _.$_$.n1 = Size__isEmpty_impl_o9ye97;
  _.$_$.o1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.p1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.q1 = Size__times_impl_fnp4nc;
  _.$_$.r1 = Size__toString_impl_o87ni8;
  _.$_$.s1 = _Size___get_width__impl__58y75t;
  _.$_$.t1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.u1 = Companion_getInstance;
  _.$_$.v1 = Companion_getInstance_0;
  _.$_$.w1 = Companion_getInstance_1;
  _.$_$.x1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
