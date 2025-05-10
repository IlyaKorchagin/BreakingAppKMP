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
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.d1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var println = kotlin_kotlin.$_$.cc;
  var Char = kotlin_kotlin.$_$.mi;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var ClassCastException = kotlin_kotlin.$_$.ni;
  var getKClass = kotlin_kotlin.$_$.f;
  var ArrayList = kotlin_kotlin.$_$.g6;
  var isIntArray = kotlin_kotlin.$_$.pd;
  var isArray = kotlin_kotlin.$_$.id;
  var toString = kotlin_kotlin.$_$.le;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var firstOrNull = kotlin_kotlin.$_$.h8;
  var KtList = kotlin_kotlin.$_$.m6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var firstOrNull_0 = kotlin_kotlin.$_$.j8;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var isShortArray = kotlin_kotlin.$_$.td;
  var isLongArray = kotlin_kotlin.$_$.rd;
  var isFloatArray = kotlin_kotlin.$_$.od;
  var isDoubleArray = kotlin_kotlin.$_$.nd;
  var isCharArray = kotlin_kotlin.$_$.ld;
  var isByteArray = kotlin_kotlin.$_$.kd;
  var isBooleanArray = kotlin_kotlin.$_$.jd;
  var Long = kotlin_kotlin.$_$.wi;
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
    Bundle.call($this, LinkedHashMap_init_$Create$_1(bundle.g46_1));
    return $this;
  }
  function Bundle_init_$Create$_1(bundle) {
    return Bundle_init_$Init$_1(bundle, objectCreate(protoOf(Bundle)));
  }
  function typeWarning($this, key, value, className, defaultValue, e) {
    var sb = StringBuilder_init_$Create$();
    sb.p8('Key ');
    sb.p8(key);
    sb.p8(' expected ');
    sb.p8(className);
    if (!(value == null)) {
      sb.p8(' but value was a ');
      sb.p8(get_canonicalName(getKClassFromExpression(value)));
    } else {
      sb.p8(' but value was of a different type');
    }
    sb.p8('.  The default value ');
    sb.o8(defaultValue);
    sb.p8(' was returned.');
    println(sb.toString());
    println('Attempt to cast generated internal exception: ' + e.toString());
  }
  function typeWarning_0($this, key, value, className, e) {
    typeWarning($this, key, value, className, '<null>', e);
  }
  function Bundle(bundleData) {
    this.g46_1 = bundleData;
  }
  protoOf(Bundle).hr = function () {
    return this.g46_1.j();
  };
  protoOf(Bundle).q = function () {
    return this.g46_1.q();
  };
  protoOf(Bundle).h46 = function (key) {
    return this.g46_1.l2(key);
  };
  protoOf(Bundle).i46 = function (key) {
    this.g46_1.g2(key);
  };
  protoOf(Bundle).j46 = function () {
    return this.g46_1.j2();
  };
  protoOf(Bundle).k46 = function (bundle) {
    this.g46_1.h2(bundle.g46_1);
  };
  protoOf(Bundle).l46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).m46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).n46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    var value_0 = new Char(value);
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value_0);
  };
  protoOf(Bundle).o46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).p46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).q46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).r46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).s46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).t46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).u46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).v46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).w46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).x46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).y46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).z46 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).a47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).b47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).c47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).d47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).e47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).f47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).g47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).h47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).i47 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.g46_1.f2(key, value);
  };
  protoOf(Bundle).j47 = function (key) {
    return this.k47(key, false);
  };
  protoOf(Bundle).k47 = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().jc())), defaultValue, e);
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
  protoOf(Bundle).l47 = function (key) {
    return this.m47(key, 0);
  };
  protoOf(Bundle).m47 = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().mc())), defaultValue, e);
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
  protoOf(Bundle).n47 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().qc())), e);
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
  protoOf(Bundle).o47 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
  protoOf(Bundle).p47 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArrayList' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
          typeWarning_0(this, key, value, 'ArrayList<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().qc())) + '>', e);
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
  protoOf(Bundle).q47 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().wc())), e);
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
  protoOf(Bundle).r47 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.g46_1.n2(key);
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
  protoOf(Bundle).s47 = function (key) {
    return this.g46_1.n2(key);
  };
  protoOf(Bundle).toString = function () {
    return toString(this.g46_1);
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
      var key = tmp1_loop_parameter.gb();
      var value = tmp1_loop_parameter.hb();
      if (value == null) {
        this_0.t46(key, null);
      } else {
        if (!(value == null) ? typeof value === 'boolean' : false) {
          this_0.l46(key, value);
        } else {
          if (!(value == null) ? typeof value === 'number' : false) {
            this_0.m46(key, value);
          } else {
            if (value instanceof Char) {
              this_0.n46(key, value.o1_1);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                this_0.s46(key, value);
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  this_0.r46(key, value);
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    this_0.p46(key, value);
                  } else {
                    if (value instanceof Long) {
                      this_0.q46(key, value);
                    } else {
                      if (!(value == null) ? typeof value === 'number' : false) {
                        this_0.o46(key, value);
                      } else {
                        if (value instanceof Bundle) {
                          this_0.v46(key, value);
                        } else {
                          if (!(value == null) ? typeof value === 'string' : false) {
                            this_0.t46(key, value);
                          } else {
                            if (!(value == null) ? isCharSequence(value) : false) {
                              this_0.u46(key, value);
                            } else {
                              if (!(value == null) ? isBooleanArray(value) : false) {
                                this_0.y46(key, value);
                              } else {
                                if (!(value == null) ? isByteArray(value) : false) {
                                  this_0.z46(key, value);
                                } else {
                                  if (!(value == null) ? isCharArray(value) : false) {
                                    this_0.b47(key, value);
                                  } else {
                                    if (!(value == null) ? isDoubleArray(value) : false) {
                                      this_0.f47(key, value);
                                    } else {
                                      if (!(value == null) ? isFloatArray(value) : false) {
                                        this_0.e47(key, value);
                                      } else {
                                        if (!(value == null) ? isIntArray(value) : false) {
                                          this_0.c47(key, value);
                                        } else {
                                          if (!(value == null) ? isLongArray(value) : false) {
                                            this_0.d47(key, value);
                                          } else {
                                            if (!(value == null) ? isShortArray(value) : false) {
                                              this_0.a47(key, value);
                                            } else {
                                              if (!(value == null) ? isArray(value) : false) {
                                                // Inline function 'androidx.core.bundle.putArray' call
                                                var tmp0_subject = firstOrNull_0(value);
                                                if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
                                                  this_0.g47(key, isArray(value) ? value : THROW_CCE());
                                                } else {
                                                  if (!(tmp0_subject == null) ? isCharSequence(tmp0_subject) : false) {
                                                    this_0.h47(key, isArray(value) ? value : THROW_CCE());
                                                  } else {
                                                    if (tmp0_subject instanceof Bundle) {
                                                      this_0.i47(key, isArray(value) ? value : THROW_CCE());
                                                    } else {
                                                      // Inline function 'kotlin.collections.isEmpty' call
                                                      if (value.length === 0) {
                                                        this_0.g47(key, isArray(value) ? value : THROW_CCE());
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
                                                    this_0.w46(key, value instanceof ArrayList ? value : THROW_CCE());
                                                  } else {
                                                    if (!(tmp0_subject_0 == null) ? typeof tmp0_subject_0 === 'string' : false) {
                                                      this_0.x46(key, value instanceof ArrayList ? value : THROW_CCE());
                                                    } else {
                                                      if (value.q()) {
                                                        this_0.x46(key, value instanceof ArrayList ? value : THROW_CCE());
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
                                                      this_0.w46(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                    } else {
                                                      if (!(tmp0_subject_1 == null) ? typeof tmp0_subject_1 === 'string' : false) {
                                                        this_0.x46(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
                                                      } else {
                                                        if (value_0.q()) {
                                                          this_0.x46(key, value_0 instanceof ArrayList ? value_0 : THROW_CCE());
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
    return _this__u8e3s4.kb();
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
