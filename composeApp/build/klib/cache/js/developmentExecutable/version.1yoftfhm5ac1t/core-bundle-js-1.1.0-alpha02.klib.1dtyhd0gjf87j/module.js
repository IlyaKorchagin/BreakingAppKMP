(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-core-core-bundle'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-core-core-bundle'.");
    }
    globalThis['compose-multiplatform-core-core-core-bundle'] = factory(typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var protoOf = kotlin_kotlin.$_$.yh;
  var objectCreate = kotlin_kotlin.$_$.xh;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.f1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var println = kotlin_kotlin.$_$.rf;
  var Char = kotlin_kotlin.$_$.fn;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.e6;
  var ensureNotNull = kotlin_kotlin.$_$.to;
  var ClassCastException = kotlin_kotlin.$_$.gn;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.y3;
  var getKClass = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.pn;
  var isCharSequence = kotlin_kotlin.$_$.ch;
  var CharSequence = kotlin_kotlin.$_$.en;
  var ArrayList = kotlin_kotlin.$_$.z6;
  var isBooleanArray = kotlin_kotlin.$_$.zg;
  var isByteArray = kotlin_kotlin.$_$.ah;
  var isShortArray = kotlin_kotlin.$_$.jh;
  var isCharArray = kotlin_kotlin.$_$.bh;
  var isIntArray = kotlin_kotlin.$_$.fh;
  var isLongArray = kotlin_kotlin.$_$.hh;
  var isFloatArray = kotlin_kotlin.$_$.eh;
  var isDoubleArray = kotlin_kotlin.$_$.dh;
  var isArray = kotlin_kotlin.$_$.yg;
  var toString = kotlin_kotlin.$_$.ci;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var firstOrNull = kotlin_kotlin.$_$.ia;
  var KtList = kotlin_kotlin.$_$.j7;
  var isInterface = kotlin_kotlin.$_$.gh;
  var firstOrNull_0 = kotlin_kotlin.$_$.la;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Bundle, 'Bundle', Bundle_init_$Create$);
  //endregion
  function _get_bundleData__zd0v5r($this) {
    return $this.bundleData_1;
  }
  function Bundle_init_$Init$($this) {
    Bundle.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function Bundle_init_$Create$() {
    return Bundle_init_$Init$(objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_0(initialCapacity, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_0(initialCapacity));
    return $this;
  }
  function Bundle_init_$Create$_0(initialCapacity) {
    return Bundle_init_$Init$_0(initialCapacity, objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_1(bundle, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_1(bundle.bundleData_1));
    return $this;
  }
  function Bundle_init_$Create$_1(bundle) {
    return Bundle_init_$Init$_1(bundle, objectCreate(protoOf(Bundle)));
  }
  function setObject($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    $this.bundleData_1.put_4fpzoq_k$(key, value);
  }
  function typeWarning($this, key, value, className, defaultValue, e) {
    var sb = StringBuilder_init_$Create$();
    sb.append_22ad7x_k$('Key ');
    sb.append_22ad7x_k$(key);
    sb.append_22ad7x_k$(' expected ');
    sb.append_22ad7x_k$(className);
    if (!(value == null)) {
      sb.append_22ad7x_k$(' but value was a ');
      sb.append_22ad7x_k$(get_canonicalName(getKClassFromExpression(value)));
    } else {
      sb.append_22ad7x_k$(' but value was of a different type');
    }
    sb.append_22ad7x_k$('.  The default value ');
    sb.append_t8pm91_k$(defaultValue);
    sb.append_22ad7x_k$(' was returned.');
    println(sb.toString());
    println('Attempt to cast generated internal exception: ' + e.toString());
  }
  function typeWarning_0($this, key, value, className, e) {
    typeWarning($this, key, value, className, '<null>', e);
  }
  function Bundle(bundleData) {
    this.bundleData_1 = bundleData;
  }
  protoOf(Bundle).size_23och_k$ = function () {
    return this.bundleData_1.get_size_woubt6_k$();
  };
  protoOf(Bundle).isEmpty_y1axqb_k$ = function () {
    return this.bundleData_1.isEmpty_y1axqb_k$();
  };
  protoOf(Bundle).clear_j9egeb_k$ = function () {
    this.bundleData_1.clear_j9egeb_k$();
  };
  protoOf(Bundle).containsKey_1fhnt3_k$ = function (key) {
    return this.bundleData_1.containsKey_aw81wo_k$(key);
  };
  protoOf(Bundle).remove_ewgslv_k$ = function (key) {
    this.bundleData_1.remove_gppy8k_k$(key);
  };
  protoOf(Bundle).keySet_irk8e5_k$ = function () {
    return this.bundleData_1.get_keys_wop4xp_k$();
  };
  protoOf(Bundle).putAll_w596ud_k$ = function (bundle) {
    this.bundleData_1.putAll_wgg6cj_k$(bundle.bundleData_1);
  };
  protoOf(Bundle).putBoolean_kf6y2l_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putByte_jj9vu0_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putChar_cd8dpb_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    var value_0 = new Char(value);
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value_0);
  };
  protoOf(Bundle).putShort_xzua0y_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putInt_bo1v9r_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putLong_gnrvd2_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putFloat_be5qqm_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putDouble_uddzq5_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putString_rtcuxu_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putCharSequence_kihkfb_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putBundle_yus54s_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putIntegerArrayList_uvbgy_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putStringArrayList_fdygnr_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putBooleanArray_w8i9l8_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putByteArray_intauc_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putShortArray_919td0_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putCharArray_ny1i58_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putIntArray_mue24i_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putLongArray_wmcbl0_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putFloatArray_bp4x7o_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putDoubleArray_bjfpms_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putStringArray_rzbsdw_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putCharSequenceArray_uyn251_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).putBundleArray_ji4i8m_k$ = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.bundleData_1.put_4fpzoq_k$(key, value);
  };
  protoOf(Bundle).getBoolean_es67bp_k$ = function (key) {
    return this.getBoolean_uc1lk6_k$(key, false);
  };
  protoOf(Bundle).getBoolean_uc1lk6_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'boolean' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getByte_7653ih_k$ = function (key) {
    return this.getByte_voj7cv_k$(key, 0);
  };
  protoOf(Bundle).getByte_voj7cv_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getChar_dy1tx5_k$ = function (key) {
    return this.getChar_lwizcm_k$(key, _Char___init__impl__6a9atx(0));
  };
  protoOf(Bundle).getChar_lwizcm_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof Char ? value.value_1 : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(getKClass(Char))), new Char(defaultValue), e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getShort_9vqtdr_k$ = function (key) {
    return this.getShort_rkkc2v_k$(key, 0);
  };
  protoOf(Bundle).getShort_rkkc2v_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getInt_lyy75e_k$ = function (key) {
    return this.getInt_rol8x2_k$(key, 0);
  };
  protoOf(Bundle).getInt_rol8x2_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getLong_nnkqs5_k$ = function (key) {
    return this.getLong_ksg9wd_k$(key, new Long(0, 0));
  };
  protoOf(Bundle).getLong_ksg9wd_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof Long ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(getKClass(Long))), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getFloat_klxq8v_k$ = function (key) {
    return this.getFloat_fm14op_k$(key, 0.0);
  };
  protoOf(Bundle).getFloat_fm14op_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getDouble_s4mcow_k$ = function (key) {
    return this.getDouble_ubci0q_k$(key, 0.0);
  };
  protoOf(Bundle).getDouble_ubci0q_k$ = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getString_au6gao_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'string' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getString_xvfk3e_k$ = function (key, defaultValue) {
    var tmp0_elvis_lhs = this.getString_au6gao_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  };
  protoOf(Bundle).getCharSequence_um5l5m_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isCharSequence(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(getKClass(CharSequence))), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getCharSequence_lmmgzb_k$ = function (key, defaultValue) {
    var tmp0_elvis_lhs = this.getCharSequence_um5l5m_k$(key);
    return tmp0_elvis_lhs == null ? defaultValue : tmp0_elvis_lhs;
  };
  protoOf(Bundle).getBundle_4qisc1_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof Bundle ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(getKClass(Bundle))), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getIntegerArrayList_efi2zc_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArrayList' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof ArrayList ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'ArrayList<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getStringArrayList_bu80fr_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArrayList' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof ArrayList ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'ArrayList<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$())) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getBooleanArray_5qjreo_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isBooleanArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getByteArray_qwsy30_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isByteArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getShortArray_5vc94c_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isShortArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getCharArray_iadhy2_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isCharArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getIntArray_12era1_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isIntArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getLongArray_4pivls_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isLongArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getFloatArray_rydob0_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isFloatArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getDoubleArray_v24o5n_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isDoubleArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getStringArray_hj3z05_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'Array<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$())) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getCharSequenceArray_lt4rvp_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'Array<' + ensureNotNull(get_canonicalName(getKClass(CharSequence))) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).getBundleArray_wsisai_k$ = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.bundleData_1.get_wei43m_k$(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'Array<' + ensureNotNull(get_canonicalName(getKClass(Bundle))) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).get_jl1mi9_k$ = function (key) {
    return this.bundleData_1.get_wei43m_k$(key);
  };
  protoOf(Bundle).toString = function () {
    return toString(this.bundleData_1);
  };
  function bundleOf(pairs) {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$_0(pairs.length);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.core.bundle.bundleOf.<anonymous>' call
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_7eebsc_k$();
      var value = tmp1_loop_parameter.component2_7eebsb_k$();
      if (value == null) {
        this_0.putString_rtcuxu_k$(key, null);
      } else {
        if (!(value == null) ? typeof value === 'boolean' : false) {
          this_0.putBoolean_kf6y2l_k$(key, value);
        } else {
          if (!(value == null) ? typeof value === 'number' : false) {
            this_0.putByte_jj9vu0_k$(key, value);
          } else {
            if (value instanceof Char) {
              this_0.putChar_cd8dpb_k$(key, value.value_1);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                this_0.putDouble_uddzq5_k$(key, value);
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  this_0.putFloat_be5qqm_k$(key, value);
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    this_0.putInt_bo1v9r_k$(key, value);
                  } else {
                    if (value instanceof Long) {
                      this_0.putLong_gnrvd2_k$(key, value);
                    } else {
                      if (!(value == null) ? typeof value === 'number' : false) {
                        this_0.putShort_xzua0y_k$(key, value);
                      } else {
                        if (value instanceof Bundle) {
                          this_0.putBundle_yus54s_k$(key, value);
                        } else {
                          if (!(value == null) ? typeof value === 'string' : false) {
                            this_0.putString_rtcuxu_k$(key, value);
                          } else {
                            if (!(value == null) ? isCharSequence(value) : false) {
                              this_0.putCharSequence_kihkfb_k$(key, value);
                            } else {
                              if (!(value == null) ? isBooleanArray(value) : false) {
                                this_0.putBooleanArray_w8i9l8_k$(key, value);
                              } else {
                                if (!(value == null) ? isByteArray(value) : false) {
                                  this_0.putByteArray_intauc_k$(key, value);
                                } else {
                                  if (!(value == null) ? isCharArray(value) : false) {
                                    this_0.putCharArray_ny1i58_k$(key, value);
                                  } else {
                                    if (!(value == null) ? isDoubleArray(value) : false) {
                                      this_0.putDoubleArray_bjfpms_k$(key, value);
                                    } else {
                                      if (!(value == null) ? isFloatArray(value) : false) {
                                        this_0.putFloatArray_bp4x7o_k$(key, value);
                                      } else {
                                        if (!(value == null) ? isIntArray(value) : false) {
                                          this_0.putIntArray_mue24i_k$(key, value);
                                        } else {
                                          if (!(value == null) ? isLongArray(value) : false) {
                                            this_0.putLongArray_wmcbl0_k$(key, value);
                                          } else {
                                            if (!(value == null) ? isShortArray(value) : false) {
                                              this_0.putShortArray_919td0_k$(key, value);
                                            } else {
                                              if (!(value == null) ? isArray(value) : false) {
                                                // Inline function 'androidx.core.bundle.putArray' call
                                                var tmp0_subject = firstOrNull_0(value);
                                                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                                                  this_0.putStringArray_rzbsdw_k$(key, isArray(value) ? value : THROW_CCE());
                                                } else {
                                                  if (!(tmp0_subject == null) ? isCharSequence(tmp0_subject) : false) {
                                                    this_0.putCharSequenceArray_uyn251_k$(key, isArray(value) ? value : THROW_CCE());
                                                  } else {
                                                    if (tmp0_subject instanceof Bundle) {
                                                      this_0.putBundleArray_ji4i8m_k$(key, isArray(value) ? value : THROW_CCE());
                                                    } else {
                                                      // Inline function 'kotlin.collections.isEmpty' call
                                                      if (value.length === 0) {
                                                        this_0.putStringArray_rzbsdw_k$(key, isArray(value) ? value : THROW_CCE());
                                                      } else {
                                                        // Inline function 'androidx.core.bundle.throwIllegalValueType' call
                                                        var valueType = get_canonicalName(getKClassFromExpression(value));
                                                        throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
                                                      }
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (value instanceof ArrayList) {
                                                  // Inline function 'androidx.core.bundle.putArrayList' call
                                                  var tmp0_subject_0 = firstOrNull(value);
                                                  if (!(tmp0_subject_0 == null) ? typeof tmp0_subject_0 === 'number' : false) {
                                                    this_0.putIntegerArrayList_uvbgy_k$(key, value instanceof ArrayList ? value : THROW_CCE());
                                                  } else {
                                                    if (!(tmp0_subject_0 == null) ? typeof tmp0_subject_0 === 'string' : false) {
                                                      this_0.putStringArrayList_fdygnr_k$(key, value instanceof ArrayList ? value : THROW_CCE());
                                                    } else {
                                                      if (value.isEmpty_y1axqb_k$()) {
                                                        this_0.putStringArrayList_fdygnr_k$(key, value instanceof ArrayList ? value : THROW_CCE());
                                                      } else {
                                                        // Inline function 'androidx.core.bundle.throwIllegalValueType' call
                                                        var valueType_0 = get_canonicalName(getKClassFromExpression(value));
                                                        throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType_0 + ' for key "' + key + '"');
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  if (!(value == null) ? isInterface(value, KtList) : false) {
                                                    // Inline function 'androidx.core.bundle.putArrayList' call
                                                    var value_0 = ArrayList_init_$Create$(value);
                                                    var tmp0_subject_1 = firstOrNull(value_0);
                                                    if (!(tmp0_subject_1 == null) ? typeof tmp0_subject_1 === 'number' : false) {
                                                      this_0.putIntegerArrayList_uvbgy_k$(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                    } else {
                                                      if (!(tmp0_subject_1 == null) ? typeof tmp0_subject_1 === 'string' : false) {
                                                        this_0.putStringArrayList_fdygnr_k$(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                      } else {
                                                        if (value_0.isEmpty_y1axqb_k$()) {
                                                          this_0.putStringArrayList_fdygnr_k$(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                        } else {
                                                          // Inline function 'androidx.core.bundle.throwIllegalValueType' call
                                                          var valueType_1 = get_canonicalName(getKClassFromExpression(value_0));
                                                          throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType_1 + ' for key "' + key + '"');
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    var valueType_2 = get_canonicalName(getKClassFromExpression(value));
                                                    throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType_2 + ' for key "' + key + '"');
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return this_0;
  }
  function putArray(_this__u8e3s4, key, value) {
    var tmp0_subject = firstOrNull_0(value);
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
      _this__u8e3s4.putStringArray_rzbsdw_k$(key, isArray(value) ? value : THROW_CCE());
    } else {
      if (!(tmp0_subject == null) ? isCharSequence(tmp0_subject) : false) {
        _this__u8e3s4.putCharSequenceArray_uyn251_k$(key, isArray(value) ? value : THROW_CCE());
      } else {
        if (tmp0_subject instanceof Bundle) {
          _this__u8e3s4.putBundleArray_ji4i8m_k$(key, isArray(value) ? value : THROW_CCE());
        } else {
          // Inline function 'kotlin.collections.isEmpty' call
          if (value.length === 0) {
            _this__u8e3s4.putStringArray_rzbsdw_k$(key, isArray(value) ? value : THROW_CCE());
          } else {
            // Inline function 'androidx.core.bundle.throwIllegalValueType' call
            var valueType = get_canonicalName(getKClassFromExpression(value));
            throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
          }
        }
      }
    }
  }
  function putArrayList(_this__u8e3s4, key, value) {
    var tmp0_subject = firstOrNull(value);
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
      _this__u8e3s4.putIntegerArrayList_uvbgy_k$(key, value instanceof ArrayList ? value : THROW_CCE());
    } else {
      if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
        _this__u8e3s4.putStringArrayList_fdygnr_k$(key, value instanceof ArrayList ? value : THROW_CCE());
      } else {
        if (value.isEmpty_y1axqb_k$()) {
          _this__u8e3s4.putStringArrayList_fdygnr_k$(key, value instanceof ArrayList ? value : THROW_CCE());
        } else {
          // Inline function 'androidx.core.bundle.throwIllegalValueType' call
          var valueType = get_canonicalName(getKClassFromExpression(value));
          throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
        }
      }
    }
  }
  function throwIllegalValueType(key, value) {
    var valueType = get_canonicalName(getKClassFromExpression(value));
    throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.get_simpleName_r6f8py_k$();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Bundle;
  _.$_$.b = bundleOf;
  _.$_$.c = Bundle_init_$Create$_1;
  _.$_$.d = Bundle_init_$Create$;
  //endregion
  return _;
}));
