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
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.ff;
  var MutableCollection = kotlin_kotlin.$_$.z6;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var KtMutableMap = kotlin_kotlin.$_$.c7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g1;
  var KtMutableSet = kotlin_kotlin.$_$.d7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConcurrentMutableCollection, 'ConcurrentMutableCollection', VOID, VOID, [MutableCollection]);
  initMetadataForClass(ConcurrentMutableIterator, 'ConcurrentMutableIterator');
  initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap_init_$Create$, VOID, [KtMutableMap]);
  initMetadataForClass(ConcurrentMutableSet, 'ConcurrentMutableSet', ConcurrentMutableSet_init_$Create$, ConcurrentMutableCollection, [ConcurrentMutableCollection, KtMutableSet]);
  //endregion
  function ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this$0) {
    return function () {
      return this$0.eq_1.p();
    };
  }
  function ConcurrentMutableCollection$contains$lambda(this$0, $element) {
    return function () {
      return this$0.eq_1.v($element);
    };
  }
  function ConcurrentMutableCollection$containsAll$lambda(this$0, $elements) {
    return function () {
      return this$0.eq_1.g2($elements);
    };
  }
  function ConcurrentMutableCollection$isEmpty$lambda(this$0) {
    return function () {
      return this$0.eq_1.j();
    };
  }
  function ConcurrentMutableCollection$add$lambda(this$0, $element) {
    return function () {
      return this$0.eq_1.e($element);
    };
  }
  function ConcurrentMutableCollection$addAll$lambda(this$0, $elements) {
    return function () {
      return this$0.eq_1.t($elements);
    };
  }
  function ConcurrentMutableCollection$clear$lambda(this$0) {
    return function () {
      this$0.eq_1.n2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableCollection$iterator$lambda(this$0) {
    return function () {
      return new ConcurrentMutableIterator(this$0.fq_1, this$0.eq_1.m());
    };
  }
  function ConcurrentMutableCollection$remove$lambda(this$0, $element) {
    return function () {
      return this$0.eq_1.t2($element);
    };
  }
  function ConcurrentMutableCollection(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.eq_1 = del;
    var tmp = this;
    tmp.fq_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableCollection).p = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$_get_size_$lambda_dssf9y(this)();
  };
  protoOf(ConcurrentMutableCollection).v = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$contains$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).g2 = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$containsAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).j = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).e = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$add$lambda(this, element)();
  };
  protoOf(ConcurrentMutableCollection).t = function (elements) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$addAll$lambda(this, elements)();
  };
  protoOf(ConcurrentMutableCollection).n2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    ConcurrentMutableCollection$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).m = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$iterator$lambda(this)();
  };
  protoOf(ConcurrentMutableCollection).t2 = function (element) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.fq_1;
    return ConcurrentMutableCollection$remove$lambda(this, element)();
  };
  function ConcurrentMutableIterator$hasNext$lambda(this$0) {
    return function () {
      return this$0.hq_1.n();
    };
  }
  function ConcurrentMutableIterator$next$lambda(this$0) {
    return function () {
      return this$0.hq_1.o();
    };
  }
  function ConcurrentMutableIterator$remove$lambda(this$0) {
    return function () {
      this$0.hq_1.t4();
      return Unit_instance;
    };
  }
  function ConcurrentMutableIterator(root, del) {
    this.gq_1 = root;
    this.hq_1 = del;
  }
  protoOf(ConcurrentMutableIterator).n = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.gq_1;
    return ConcurrentMutableIterator$hasNext$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).o = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.gq_1;
    return ConcurrentMutableIterator$next$lambda(this)();
  };
  protoOf(ConcurrentMutableIterator).t4 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.gq_1;
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
      return this$0.iq_1.p();
    };
  }
  function ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.iq_1.a1());
    };
  }
  function ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this$0) {
    return function () {
      return new ConcurrentMutableSet(this$0, this$0.iq_1.o2());
    };
  }
  function ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this$0) {
    return function () {
      return new ConcurrentMutableCollection(this$0, this$0.iq_1.p2());
    };
  }
  function ConcurrentMutableMap$containsKey$lambda(this$0, $key) {
    return function () {
      return this$0.iq_1.q2($key);
    };
  }
  function ConcurrentMutableMap$get$lambda(this$0, $key) {
    return function () {
      return this$0.iq_1.s2($key);
    };
  }
  function ConcurrentMutableMap$isEmpty$lambda(this$0) {
    return function () {
      return this$0.iq_1.j();
    };
  }
  function ConcurrentMutableMap$clear$lambda(this$0) {
    return function () {
      this$0.iq_1.n2();
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$put$lambda(this$0, $key, $value) {
    return function () {
      return this$0.iq_1.k2($key, $value);
    };
  }
  function ConcurrentMutableMap$putAll$lambda(this$0, $from) {
    return function () {
      this$0.iq_1.m2($from);
      return Unit_instance;
    };
  }
  function ConcurrentMutableMap$remove$lambda(this$0, $key) {
    return function () {
      return this$0.iq_1.l2($key);
    };
  }
  function ConcurrentMutableMap(rootArg, del) {
    rootArg = rootArg === VOID ? null : rootArg;
    this.iq_1 = del;
    var tmp = this;
    tmp.jq_1 = rootArg == null ? this : rootArg;
  }
  protoOf(ConcurrentMutableMap).p = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$_get_size_$lambda_nuyc4q(this)();
  };
  protoOf(ConcurrentMutableMap).a1 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$_get_entries_$lambda_dp7xtt(this)();
  };
  protoOf(ConcurrentMutableMap).o2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$_get_keys_$lambda_5gjoyr(this)();
  };
  protoOf(ConcurrentMutableMap).p2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$_get_values_$lambda_tyvlyt(this)();
  };
  protoOf(ConcurrentMutableMap).q2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$containsKey$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).s2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$get$lambda(this, key)();
  };
  protoOf(ConcurrentMutableMap).j = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$isEmpty$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).n2 = function () {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    ConcurrentMutableMap$clear$lambda(this)();
  };
  protoOf(ConcurrentMutableMap).k2 = function (key, value) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    return ConcurrentMutableMap$put$lambda(this, key, value)();
  };
  protoOf(ConcurrentMutableMap).m2 = function (from) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
    ConcurrentMutableMap$putAll$lambda(this, from)();
  };
  protoOf(ConcurrentMutableMap).l2 = function (key) {
    // Inline function 'co.touchlab.stately.concurrency.synchronize' call
    this.jq_1;
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
    this.mq_1 = del;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ConcurrentMutableMap_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-concurrent-collections.js.map
