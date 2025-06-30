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
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var protoOf = kotlin_kotlin.$_$.ff;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.e1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var println = kotlin_kotlin.$_$.ad;
  var Char = kotlin_kotlin.$_$.xj;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var ClassCastException = kotlin_kotlin.$_$.yj;
  var getKClass = kotlin_kotlin.$_$.g;
  var ArrayList = kotlin_kotlin.$_$.p6;
  var isByteArray = kotlin_kotlin.$_$.ie;
  var isIntArray = kotlin_kotlin.$_$.ne;
  var isArray = kotlin_kotlin.$_$.ge;
  var toString = kotlin_kotlin.$_$.jf;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var KtList = kotlin_kotlin.$_$.w6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var firstOrNull_0 = kotlin_kotlin.$_$.x8;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var isShortArray = kotlin_kotlin.$_$.re;
  var isLongArray = kotlin_kotlin.$_$.pe;
  var isFloatArray = kotlin_kotlin.$_$.me;
  var isDoubleArray = kotlin_kotlin.$_$.le;
  var isCharArray = kotlin_kotlin.$_$.je;
  var isBooleanArray = kotlin_kotlin.$_$.he;
  var Long = kotlin_kotlin.$_$.hk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Bundle, 'Bundle', Bundle_init_$Create$);
  //endregion
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
    Bundle.call($this, LinkedHashMap_init_$Create$_1(bundle.q4c_1));
    return $this;
  }
  function Bundle_init_$Create$_1(bundle) {
    return Bundle_init_$Init$_1(bundle, objectCreate(protoOf(Bundle)));
  }
  function typeWarning($this, key, value, className, defaultValue, e) {
    var sb = StringBuilder_init_$Create$();
    sb.v8('Key ');
    sb.v8(key);
    sb.v8(' expected ');
    sb.v8(className);
    if (!(value == null)) {
      sb.v8(' but value was a ');
      sb.v8(get_canonicalName(getKClassFromExpression(value)));
    } else {
      sb.v8(' but value was of a different type');
    }
    sb.v8('.  The default value ');
    sb.u8(defaultValue);
    sb.v8(' was returned.');
    println(sb.toString());
    println('Attempt to cast generated internal exception: ' + e.toString());
  }
  function typeWarning_0($this, key, value, className, e) {
    typeWarning($this, key, value, className, '<null>', e);
  }
  function Bundle(bundleData) {
    this.q4c_1 = bundleData;
  }
  protoOf(Bundle).lr = function () {
    return this.q4c_1.p();
  };
  protoOf(Bundle).j = function () {
    return this.q4c_1.j();
  };
  protoOf(Bundle).r4c = function (key) {
    return this.q4c_1.q2(key);
  };
  protoOf(Bundle).s4c = function (key) {
    this.q4c_1.l2(key);
  };
  protoOf(Bundle).t4c = function () {
    return this.q4c_1.o2();
  };
  protoOf(Bundle).u4c = function (bundle) {
    this.q4c_1.m2(bundle.q4c_1);
  };
  protoOf(Bundle).v4c = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).w4c = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).x4c = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    var value_0 = new Char(value);
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value_0);
  };
  protoOf(Bundle).y4c = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).z4c = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).a4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).b4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).c4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).d4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).e4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).f4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).g4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).h4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).i4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).j4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).k4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).l4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).m4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).n4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).o4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).p4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).q4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).r4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).s4d = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.q4c_1.k2(key, value);
  };
  protoOf(Bundle).t4d = function (key) {
    return this.u4d(key, false);
  };
  protoOf(Bundle).u4d = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().oc())), defaultValue, e);
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
  protoOf(Bundle).v4d = function (key) {
    return this.w4d(key, 0);
  };
  protoOf(Bundle).w4d = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().rc())), defaultValue, e);
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
  protoOf(Bundle).x4d = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().vc())), e);
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
  protoOf(Bundle).y4d = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
  protoOf(Bundle).z4d = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArrayList' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning_0(this, key, value, 'ArrayList<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().vc())) + '>', e);
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
  protoOf(Bundle).a4e = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().zc())), e);
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
  protoOf(Bundle).b4e = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().bd())), e);
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
  protoOf(Bundle).c4e = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.q4c_1.s2(key);
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
  protoOf(Bundle).d4e = function (key) {
    return this.q4c_1.s2(key);
  };
  protoOf(Bundle).toString = function () {
    return toString(this.q4c_1);
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
      var key = tmp1_loop_parameter.lb();
      var value = tmp1_loop_parameter.mb();
      if (value == null) {
        this_0.d4d(key, null);
      } else {
        if (!(value == null) ? typeof value === 'boolean' : false) {
          this_0.v4c(key, value);
        } else {
          if (!(value == null) ? typeof value === 'number' : false) {
            this_0.w4c(key, value);
          } else {
            if (value instanceof Char) {
              this_0.x4c(key, value.u1_1);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                this_0.c4d(key, value);
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  this_0.b4d(key, value);
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    this_0.z4c(key, value);
                  } else {
                    if (value instanceof Long) {
                      this_0.a4d(key, value);
                    } else {
                      if (!(value == null) ? typeof value === 'number' : false) {
                        this_0.y4c(key, value);
                      } else {
                        if (value instanceof Bundle) {
                          this_0.f4d(key, value);
                        } else {
                          if (!(value == null) ? typeof value === 'string' : false) {
                            this_0.d4d(key, value);
                          } else {
                            if (!(value == null) ? isCharSequence(value) : false) {
                              this_0.e4d(key, value);
                            } else {
                              if (!(value == null) ? isBooleanArray(value) : false) {
                                this_0.i4d(key, value);
                              } else {
                                if (!(value == null) ? isByteArray(value) : false) {
                                  this_0.j4d(key, value);
                                } else {
                                  if (!(value == null) ? isCharArray(value) : false) {
                                    this_0.l4d(key, value);
                                  } else {
                                    if (!(value == null) ? isDoubleArray(value) : false) {
                                      this_0.p4d(key, value);
                                    } else {
                                      if (!(value == null) ? isFloatArray(value) : false) {
                                        this_0.o4d(key, value);
                                      } else {
                                        if (!(value == null) ? isIntArray(value) : false) {
                                          this_0.m4d(key, value);
                                        } else {
                                          if (!(value == null) ? isLongArray(value) : false) {
                                            this_0.n4d(key, value);
                                          } else {
                                            if (!(value == null) ? isShortArray(value) : false) {
                                              this_0.k4d(key, value);
                                            } else {
                                              if (!(value == null) ? isArray(value) : false) {
                                                // Inline function 'androidx.core.bundle.putArray' call
                                                var tmp0_subject = firstOrNull_0(value);
                                                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                                                  this_0.q4d(key, isArray(value) ? value : THROW_CCE());
                                                } else {
                                                  if (!(tmp0_subject == null) ? isCharSequence(tmp0_subject) : false) {
                                                    this_0.r4d(key, isArray(value) ? value : THROW_CCE());
                                                  } else {
                                                    if (tmp0_subject instanceof Bundle) {
                                                      this_0.s4d(key, isArray(value) ? value : THROW_CCE());
                                                    } else {
                                                      // Inline function 'kotlin.collections.isEmpty' call
                                                      if (value.length === 0) {
                                                        this_0.q4d(key, isArray(value) ? value : THROW_CCE());
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
                                                    this_0.g4d(key, value instanceof ArrayList ? value : THROW_CCE());
                                                  } else {
                                                    if (!(tmp0_subject_0 == null) ? typeof tmp0_subject_0 === 'string' : false) {
                                                      this_0.h4d(key, value instanceof ArrayList ? value : THROW_CCE());
                                                    } else {
                                                      if (value.j()) {
                                                        this_0.h4d(key, value instanceof ArrayList ? value : THROW_CCE());
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
                                                      this_0.g4d(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                    } else {
                                                      if (!(tmp0_subject_1 == null) ? typeof tmp0_subject_1 === 'string' : false) {
                                                        this_0.h4d(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                      } else {
                                                        if (value_0.j()) {
                                                          this_0.h4d(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
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
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.pb();
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

//# sourceMappingURL=compose-multiplatform-core-core-core-bundle.js.map
