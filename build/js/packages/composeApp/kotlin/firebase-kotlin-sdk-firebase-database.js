(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/database', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/database'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['firebase/database'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'firebase/database' was not found. Please, check whether 'firebase/database' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-database'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-database'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase/database'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, $module$firebase_database_g0xk0h, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var ref = $module$firebase_database_g0xk0h.ref;
  var getDatabase = $module$firebase_database_g0xk0h.getDatabase;
  var onValue = $module$firebase_database_g0xk0h.onValue;
  var orderByChild = $module$firebase_database_g0xk0h.orderByChild;
  var query = $module$firebase_database_g0xk0h.query;
  var equalTo = $module$firebase_database_g0xk0h.equalTo;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var Exception = kotlin_kotlin.$_$.si;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var isInterface = kotlin_kotlin.$_$.qd;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var toString = kotlin_kotlin.$_$.le;
  var captureStack = kotlin_kotlin.$_$.hc;
  var RuntimeException = kotlin_kotlin.$_$.dj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.x2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Query, 'Query');
  initMetadataForClass(DatabaseReference, 'DatabaseReference', VOID, Query, VOID, [3, 1, 2, 0]);
  initMetadataForClass(FirebaseDatabase, 'FirebaseDatabase');
  initMetadataForClass(DataSnapshot, 'DataSnapshot');
  initMetadataForLambda(Query$_get_valueEvents_$slambda_5e8cap, CoroutineImpl, VOID, [1]);
  initMetadataForClass(NativeQuery, 'NativeQuery');
  initMetadataForClass(NativeDatabaseReference, 'NativeDatabaseReference', VOID, NativeQuery, VOID, [0, 1, 3]);
  initMetadataForClass(DatabaseException, 'DatabaseException', VOID, RuntimeException);
  //endregion
  function DatabaseReference(nativeReference) {
    Query.call(this, nativeReference);
    this.ef2_1 = nativeReference;
    this.ff2_1 = this.ef2_1.v();
  }
  function FirebaseDatabase(js) {
    this.pf2_1 = js;
  }
  protoOf(FirebaseDatabase).qf2 = function (path) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.FirebaseDatabase.reference.<anonymous>' call
        tmp$ret$2 = new DatabaseReference(new NativeDatabaseReference(ref(this.pf2_1, path), this.pf2_1));
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw DatabaseException_init_$Create$(e_0);
        }
      }
    }
    return tmp$ret$2;
  };
  function get_database(_this__u8e3s4) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.<get-database>.<anonymous>' call
        tmp$ret$2 = new FirebaseDatabase(getDatabase());
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw DatabaseException_init_$Create$(e_0);
        }
      }
    }
    return tmp$ret$2;
  }
  function DataSnapshot$children$lambda($it, $$this$rethrow) {
    return function (snapshot) {
      $it.e(new DataSnapshot(snapshot, $$this$rethrow.sf2_1));
      return false;
    };
  }
  function DataSnapshot(js, database) {
    this.rf2_1 = js;
    this.sf2_1 = database;
    var tmp = this;
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$(this.rf2_1.size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>.<anonymous>' call
        this.rf2_1.forEach(DataSnapshot$children$lambda(this_0, this));
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw DatabaseException_init_$Create$(e_0);
        }
      }
    }
    tmp.tf2_1 = this_0;
  }
  function Query$_get_valueEvents_$slambda$lambda_g10dbq($$this$rethrow, this$0) {
    return function (it) {
      $$this$rethrow.l1n(new DataSnapshot(it, this$0.kf2_1));
      return Unit_instance;
    };
  }
  function Query$_get_valueEvents_$slambda$lambda_g10dbq_0($$this$rethrow) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.database.Query.<get-valueEvents>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      $$this$rethrow.s1n(DatabaseException_init_$Create$(it));
      return Unit_instance;
    };
  }
  function Query$_get_valueEvents_$slambda$lambda_g10dbq_1($this_callbackFlow, $unsubscribe) {
    return function () {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      $l$block: {
        // Inline function 'dev.gitlive.firebase.database.rethrow' call
        try {
          // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
          $unsubscribe();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Exception) {
            var e = $p;
            throw e;
          } else {
            var e_0 = $p;
            throw DatabaseException_init_$Create$(e_0);
          }
        }
      }
      return Unit_instance;
    };
  }
  function Query_init_$Init$(js, database, $this) {
    Query.call($this, new NativeQuery(js, database));
    return $this;
  }
  function Query_init_$Create$(js, database) {
    return Query_init_$Init$(js, database, objectCreate(protoOf(Query)));
  }
  function Query$_get_valueEvents_$slambda_5e8cap(this$0, resultContinuation) {
    this.cf3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).ff3 = function ($this$callbackFlow, $completion) {
    var tmp = this.gf3($this$callbackFlow, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).ha = function (p1, $completion) {
    return this.ff3((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.df3_1;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              try {
                var tmp_1 = get_js_0(this.cf3_1);
                var tmp_2 = Query$_get_valueEvents_$slambda$lambda_g10dbq(this_0, this.cf3_1);
                tmp$ret$0 = onValue(tmp_1, tmp_2, Query$_get_valueEvents_$slambda$lambda_g10dbq_0(this_0));
                break l$ret$1;
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e = $p;
                  throw e;
                } else {
                  var e_0 = $p;
                  throw DatabaseException_init_$Create$(e_0);
                }
              }
            }
             while (false);
            tmp_0.ef3_1 = tmp$ret$0;
            this.n9_1 = 1;
            suspendResult = awaitClose(this.df3_1, Query$_get_valueEvents_$slambda$lambda_g10dbq_1(this.df3_1, this.ef3_1), this);
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
        var e_1 = $p;
        if (this.o9_1 === 2) {
          throw e_1;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).gf3 = function ($this$callbackFlow, completion) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this.cf3_1, completion);
    i.df3_1 = $this$callbackFlow;
    return i;
  };
  function Query$_get_valueEvents_$slambda_5e8cap_0(this$0, resultContinuation) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.ff3($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Query(nativeQuery) {
    this.jf2_1 = nativeQuery;
    this.kf2_1 = this.jf2_1.if3_1;
  }
  protoOf(Query).lf2 = function (path) {
    return Query_init_$Create$(query(get_js_0(this), orderByChild(path)), this.kf2_1);
  };
  protoOf(Query).mf2 = function () {
    return callbackFlow(Query$_get_valueEvents_$slambda_5e8cap_0(this, null));
  };
  protoOf(Query).nf2 = function (value, key) {
    var tmp = get_js_0(this);
    return Query_init_$Create$(query(tmp, equalTo(value, key == null ? undefined : key)), this.kf2_1);
  };
  protoOf(Query).of2 = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.nf2(value, key) : $super.nf2.call(this, value, key);
  };
  protoOf(Query).toString = function () {
    return toString(get_js_0(this));
  };
  function NativeDatabaseReference(js, database) {
    NativeQuery.call(this, js, database);
    this.if2_1 = js;
  }
  protoOf(NativeDatabaseReference).jf3 = function () {
    return this.if2_1;
  };
  protoOf(NativeDatabaseReference).v = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.<get-key>.<anonymous>' call
        tmp$ret$2 = this.if2_1.key;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw DatabaseException_init_$Create$(e_0);
        }
      }
    }
    return tmp$ret$2;
  };
  function get_js(_this__u8e3s4) {
    return _this__u8e3s4.rf2_1;
  }
  function NativeQuery(js, database) {
    this.hf3_1 = js;
    this.if3_1 = database;
  }
  protoOf(NativeQuery).jf3 = function () {
    return this.hf3_1;
  };
  function get_js_0(_this__u8e3s4) {
    return _this__u8e3s4.jf2_1.jf3();
  }
  function DatabaseException_init_$Init$(error, $this) {
    var tmp0_elvis_lhs = error.code;
    var tmp = '' + (tmp0_elvis_lhs == null ? 'UNKNOWN' : tmp0_elvis_lhs) + ': ' + error.message;
    // Inline function 'kotlin.js.unsafeCast' call
    DatabaseException.call($this, tmp, error);
    return $this;
  }
  function DatabaseException_init_$Create$(error) {
    var tmp = DatabaseException_init_$Init$(error, objectCreate(protoOf(DatabaseException)));
    captureStack(tmp, DatabaseException_init_$Create$);
    return tmp;
  }
  function DatabaseException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, DatabaseException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DataSnapshot;
  _.$_$.b = get_database;
  _.$_$.c = get_js;
  _.$_$.d = DatabaseException_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-database.js.map
