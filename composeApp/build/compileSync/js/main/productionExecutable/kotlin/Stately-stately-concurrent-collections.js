(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-concurrent-collections'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-concurrent-collections'.");
    }
    globalThis['Stately-stately-concurrent-collections'] = factory(typeof globalThis['Stately-stately-concurrent-collections'] === 'undefined' ? {} : globalThis['Stately-stately-concurrent-collections'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var VOID = kotlin_kotlin.$_$.i;
  var protoOf = kotlin_kotlin.$_$.he;
  var MutableCollection = kotlin_kotlin.$_$.p6;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var KtMutableMap = kotlin_kotlin.$_$.s6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var KtMutableSet = kotlin_kotlin.$_$.t6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [MutableCollection]);
  initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator');
  initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap_init_$Create$, VOID, [KtMutableMap]);
  initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet_init_$Create$, ConcurrentMutableCollection, [ConcurrentMutableCollection, KtMutableSet]);
  //endregion
  function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
    return function () {
      return this$0.aq_1.j();
    };
  }
  function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
    return function () {
      return this$0.aq_1.p($element);
    };
  }
  function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
    return function () {
      return this$0.aq_1.a2($elements);
    };
  }
  function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
    return function () {
      return this$0.aq_1.q();
    };
  }
  function ConcurrentMutableCollection$add$lambda(this$0, $element) {
    return function () {
      return this$0.aq_1.e($element);
    };
  }
  function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
    return function () {
      return this$0.aq_1.n($elements);
    };
  }
  function ConcurrentMutableCollection$clear$lambda(this$0) {
    return function () {
      this$0.aq_1.i2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableCollection$iterator$lambda(this$0) {
    return function () {
      return new ConcurrentMutableIterator(this$0.bq_1, this$0.aq_1.g());
    };
  }
  function ConcurrentMutableCollection$remove$lambda(this$0, $element) {
    return function () {
      return this$0.aq_1.o2($element);
    };
  }
  function ConcurrentMutableCollection(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.aq_1 = del;
    var tmp = this;
    tmp.bq_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableCollection).j = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
  };
  protoOf(ConcurrentMutableCollection).p = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$contains$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).a2 = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).q = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).e = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$add$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).n = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$addAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).i2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    ConcurrentMutableCollection$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).g = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$iterator$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).o2 = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.bq_1;
    return ConcurrentMutableCollection$remove$lambda(this, element)();
  };
  function ConcurrentMutableIterator$hasNext$lambda(this$0) {
    return function () {
      return this$0.dq_1.h();
    };
  }
  function ConcurrentMutableIterator$next$lambda(this$0) {
    return function () {
      return this$0.dq_1.i();
    };
  }
  function ConcurrentMutableIterator$remove$lambda(this$0) {
    return function () {
      this$0.dq_1.o4();
      return Unit_instance;
    };
  }
  function ConcurrentMutableIterator(root, del) {
    this.cq_1 = root;
    this.dq_1 = del;
  }
  protoOf(ConcurrentMutableIterator).h = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.cq_1;
    return ConcurrentMutableIterator$hasNext$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).i = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.cq_1;
    return ConcurrentMutableIterator$next$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).o4 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.cq_1;
    ConcurrentMutableIterator$remove$lambda(this)();
  };
  function ConcurrentMutableMap_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var tmp$ret$0 = LinkedHashMap_init_$Create$();
    ConcurrentMutableMap.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableMap_init_$Create$() {
    return ConcurrentMutableMap_init_$Init$(objectCreate(protoOf(ConcurrentMutableMap)));
  }
  function ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this$0) {
    return function () {
      return this$0.eq_1.j();
    };
  }
  function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.eq_1.u());
    };
  }
  function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.eq_1.j2());
    };
  }
  function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
    return function () {
      return new ConcurrentMutableCollection(this$0, this$0.eq_1.k2());
    };
  }
  function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
    return function () {
      return this$0.eq_1.l2($key);
    };
  }
  function ConcurrentMutableMap$get$lambda(this$0, $key) {
    return function () {
      return this$0.eq_1.n2($key);
    };
  }
  function ConcurrentMutableMap$isEmpty$lambda(this$0) {
    return function () {
      return this$0.eq_1.q();
    };
  }
  function ConcurrentMutableMap$clear$lambda(this$0) {
    return function () {
      this$0.eq_1.i2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
    return function () {
      return this$0.eq_1.f2($key, $value);
    };
  }
  function ConcurrentMutableMap$putAll$lambda(this$0, $from) {
    return function () {
      this$0.eq_1.h2($from);
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$remove$lambda(this$0, $key) {
    return function () {
      return this$0.eq_1.g2($key);
    };
  }
  function ConcurrentMutableMap(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.eq_1 = del;
    var tmp = this;
    tmp.fq_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableMap).j = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
  };
  protoOf(ConcurrentMutableMap).u = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
  };
  protoOf(ConcurrentMutableMap).j2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
  };
  protoOf(ConcurrentMutableMap).k2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
  };
  protoOf(ConcurrentMutableMap).l2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$containsKey$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).n2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$get$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).q = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).i2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    ConcurrentMutableMap$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).f2 = function (key, value) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$put$lambda(this, key, value)();
  };
  protoOf(ConcurrentMutableMap).h2 = function (from) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    ConcurrentMutableMap$putAll$lambda(this, from)();
  };
  protoOf(ConcurrentMutableMap).g2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableMap$remove$lambda(this, key)();
  };
  function ConcurrentMutableSet_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableSetOf' call
    var tmp$ret$0 = LinkedHashSet_init_$Create$();
    ConcurrentMutableSet.call($this, null, tmp$ret$0);
    return $this;
  }
  function ConcurrentMutableSet_init_$Create$() {
    return ConcurrentMutableSet_init_$Init$(objectCreate(protoOf(ConcurrentMutableSet)));
  }
  function ConcurrentMutableSet(rootArg, del) {
    ConcurrentMutableCollection.call(this, rootArg, del);
    this.iq_1 = del;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ConcurrentMutableMap_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrent-collections.js.map
