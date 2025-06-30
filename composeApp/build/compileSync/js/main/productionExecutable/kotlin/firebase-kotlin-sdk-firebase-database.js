(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/database', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-common-internal.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/database'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-common-internal.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
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
    if (typeof globalThis['firebase-kotlin-sdk-firebase-common-internal'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'firebase-kotlin-sdk-firebase-common-internal' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-common-internal' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-database'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-database'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase/database'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, $module$firebase_database_g0xk0h, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_common_internal, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var ref = $module$firebase_database_g0xk0h.ref;
  var getDatabase = $module$firebase_database_g0xk0h.getDatabase;
  var onValue = $module$firebase_database_g0xk0h.onValue;
  var orderByChild = $module$firebase_database_g0xk0h.orderByChild;
  var query = $module$firebase_database_g0xk0h.query;
  var equalTo = $module$firebase_database_g0xk0h.equalTo;
  var set = $module$firebase_database_g0xk0h.set;
  var push = $module$firebase_database_g0xk0h.push;
  var child = $module$firebase_database_g0xk0h.child;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception = kotlin_kotlin.$_$.dk;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.oe;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var toString = kotlin_kotlin.$_$.jf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var captureStack = kotlin_kotlin.$_$.fd;
  var RuntimeException = kotlin_kotlin.$_$.ok;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.e3;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Builder = kotlin_dev_gitlive_firebase_common_internal.$_$.a;
  var buildDecodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.g;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.u5;
  var arrayOf = kotlin_kotlin.$_$.dl;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var decode = kotlin_dev_gitlive_firebase_common_internal.$_$.i;
  var equals = kotlin_kotlin.$_$.od;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var produceIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var SelectImplementation = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var asDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Query, 'Query');
  initMetadataForClass(DatabaseReference, 'DatabaseReference', VOID, Query, VOID, [3, 1, 2, 0]);
  initMetadataForClass(FirebaseDatabase, 'FirebaseDatabase');
  initMetadataForClass(DataSnapshot, 'DataSnapshot');
  initMetadataForLambda(Query$_get_valueEvents_$slambda_5e8cap, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($setValueEncodedCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(NativeQuery, 'NativeQuery');
  initMetadataForClass(NativeDatabaseReference, 'NativeDatabaseReference', VOID, NativeQuery, VOID, [0, 1, 3]);
  initMetadataForClass(DatabaseException, 'DatabaseException', VOID, RuntimeException);
  initMetadataForLambda(awaitWhileOnline$slambda$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(awaitWhileOnline$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(awaitWhileOnline$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(awaitWhileOnline$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function DatabaseReference(nativeReference) {
    Query.call(this, nativeReference);
    this.ei5_1 = nativeReference;
    this.fi5_1 = this.ei5_1.b1();
  }
  protoOf(DatabaseReference).ji5 = function () {
    return new DatabaseReference(this.ei5_1.ji5());
  };
  protoOf(DatabaseReference).ki5 = function (path) {
    return new DatabaseReference(this.ei5_1.ki5(path));
  };
  protoOf(DatabaseReference).li5 = function (encodedValue, $completion) {
    return this.ei5_1.mi5(encodedValue, $completion);
  };
  function FirebaseDatabase(js) {
    this.ti5_1 = js;
  }
  protoOf(FirebaseDatabase).ui5 = function (path) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.FirebaseDatabase.reference.<anonymous>' call
        tmp$ret$2 = new DatabaseReference(new NativeDatabaseReference(ref(this.ti5_1, path), this.ti5_1));
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
      $it.e(new DataSnapshot(snapshot, $$this$rethrow.wi5_1));
      return false;
    };
  }
  function DataSnapshot(js, database) {
    this.vi5_1 = js;
    this.wi5_1 = database;
    var tmp = this;
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$(this.vi5_1.size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>.<anonymous>' call
        this.vi5_1.forEach(DataSnapshot$children$lambda(this_0, this));
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
    tmp.xi5_1 = this_0;
  }
  protoOf(DataSnapshot).b1 = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.<get-key>.<anonymous>' call
        tmp$ret$2 = this.vi5_1.key;
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
  function Query$_get_valueEvents_$slambda$lambda_g10dbq($$this$rethrow, this$0) {
    return function (it) {
      $$this$rethrow.a1o(new DataSnapshot(it, this$0.oi5_1));
      return Unit_instance;
    };
  }
  function Query$_get_valueEvents_$slambda$lambda_g10dbq_0($$this$rethrow) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.database.Query.<get-valueEvents>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      $$this$rethrow.i1o(DatabaseException_init_$Create$(it));
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
    this.gi6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).ji6 = function ($this$callbackFlow, $completion) {
    var tmp = this.ki6($this$callbackFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).ma = function (p1, $completion) {
    return this.ji6((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = this.hi6_1;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              try {
                var tmp_1 = get_js_0(this.gi6_1);
                var tmp_2 = Query$_get_valueEvents_$slambda$lambda_g10dbq(this_0, this.gi6_1);
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
            tmp_0.ii6_1 = tmp$ret$0;
            this.s9_1 = 1;
            suspendResult = awaitClose(this.hi6_1, Query$_get_valueEvents_$slambda$lambda_g10dbq_1(this.hi6_1, this.ii6_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.t9_1 === 2) {
          throw e_1;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).ki6 = function ($this$callbackFlow, completion) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this.gi6_1, completion);
    i.hi6_1 = $this$callbackFlow;
    return i;
  };
  function Query$_get_valueEvents_$slambda_5e8cap_0(this$0, resultContinuation) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.ji6($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Query(nativeQuery) {
    this.ni5_1 = nativeQuery;
    this.oi5_1 = this.ni5_1.mi6_1;
  }
  protoOf(Query).pi5 = function (path) {
    return Query_init_$Create$(query(get_js_0(this), orderByChild(path)), this.oi5_1);
  };
  protoOf(Query).qi5 = function () {
    return callbackFlow(Query$_get_valueEvents_$slambda_5e8cap_0(this, null));
  };
  protoOf(Query).ri5 = function (value, key) {
    var tmp = get_js_0(this);
    return Query_init_$Create$(query(tmp, equalTo(value, key == null ? undefined : key)), this.oi5_1);
  };
  protoOf(Query).si5 = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.ri5(value, key) : $super.ri5.call(this, value, key);
  };
  protoOf(Query).toString = function () {
    return toString(get_js_0(this));
  };
  function $setValueEncodedCOROUTINE$6(_this__u8e3s4, encodedValue, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vi6_1 = _this__u8e3s4;
    this.wi6_1 = encodedValue;
  }
  protoOf($setValueEncodedCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.xi6_1 = this.vi6_1;
            this.yi6_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            var tmp_1 = this;
            tmp_1.zi6_1 = this.xi6_1;
            this.s9_1 = 2;
            suspendResult = awaitWhileOnline(set(this.zi6_1.ii5_1, this.wi6_1), this.zi6_1.mi6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.yi6_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.yi6_1;
          case 4:
            this.t9_1 = 5;
            var tmp_3 = this.v9_1;
            if (tmp_3 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.t9_1 === 5) {
          throw e_1;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_1;
        }
      }
     while (true);
  };
  function NativeDatabaseReference(js, database) {
    NativeQuery.call(this, js, database);
    this.ii5_1 = js;
  }
  protoOf(NativeDatabaseReference).ai7 = function () {
    return this.ii5_1;
  };
  protoOf(NativeDatabaseReference).b1 = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.<get-key>.<anonymous>' call
        tmp$ret$2 = this.ii5_1.key;
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
  protoOf(NativeDatabaseReference).ji5 = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.push.<anonymous>' call
        tmp$ret$2 = new NativeDatabaseReference(push(this.ii5_1), this.mi6_1);
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
  protoOf(NativeDatabaseReference).ki5 = function (path) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.child.<anonymous>' call
        tmp$ret$2 = new NativeDatabaseReference(child(this.ii5_1, path), this.mi6_1);
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
  protoOf(NativeDatabaseReference).mi5 = function (encodedValue, $completion) {
    var tmp = new $setValueEncodedCOROUTINE$6(this, encodedValue, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function get_js(_this__u8e3s4) {
    return _this__u8e3s4.vi5_1;
  }
  function NativeQuery(js, database) {
    this.li6_1 = js;
    this.mi6_1 = database;
  }
  protoOf(NativeQuery).ai7 = function () {
    return this.li6_1;
  };
  function get_js_0(_this__u8e3s4) {
    return _this__u8e3s4.ni5_1.ai7();
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
  function awaitWhileOnline(_this__u8e3s4, database, $completion) {
    return coroutineScope(awaitWhileOnline$slambda_0(database, _this__u8e3s4, null), $completion);
  }
  function awaitWhileOnline$slambda$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.ji7_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).g2c = function (value, $completion) {
    var tmp = this.h2c(value, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).ma = function (p1, $completion) {
    return this.g2c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.mi7_1 = this.ji7_1;
            var tmp_1 = this;
            tmp_1.ni7_1 = this.ki7_1;
            var this_0 = this.ni7_1;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              try {
                var value = get_js(this_0).val();
                var this_1 = new Builder();
                var decodeSettings = buildDecodeSettings(this_1);
                var this_2 = serializer(createKType(PrimitiveClasses_getInstance().oc(), arrayOf([]), false));
                var strategy = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
                tmp$ret$0 = decode(isInterface(strategy, DeserializationStrategy) ? strategy : THROW_CCE(), value, decodeSettings);
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
            if (!tmp$ret$0) {
              this.s9_1 = 3;
              suspendResult = this.mi7_1.y1r(this.ni7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 2;
              continue $sm;
            }

          case 2:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 4;
            continue $sm;
          case 3:
            this.li7_1 = suspendResult;
            this.s9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.t9_1 === 5) {
          throw e_1;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).h2c = function (value, completion) {
    var i = new awaitWhileOnline$slambda$o$collect$slambda(this.ji7_1, completion);
    i.ki7_1 = value;
    return i;
  };
  function awaitWhileOnline$slambda$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new awaitWhileOnline$slambda$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.g2c(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wi7_1 = _this__u8e3s4;
    this.xi7_1 = collector;
  }
  protoOf($collectCOROUTINE$13).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.yi7_1 = this.xi7_1;
            this.s9_1 = 1;
            var tmp_1 = awaitWhileOnline$slambda$o$collect$slambda_0(this.yi7_1, null);
            suspendResult = this.wi7_1.zi7_1.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ai8_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.ai8_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.ai8_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function _no_name_provided__qut3iv($this) {
    this.zi7_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).z1r = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(_no_name_provided__qut3iv).t1q = function (collector, $completion) {
    return this.z1r(collector, $completion);
  };
  function awaitWhileOnline$slambda$slambda($notConnected, resultContinuation) {
    this.ji8_1 = $notConnected;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$slambda).li8 = function (it, $completion) {
    var tmp = this.l21(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(awaitWhileOnline$slambda$slambda).ma = function (p1, $completion) {
    return this.li8((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var this_0 = this.ki8_1;
          this.ji8_1.m1o();
          return this_0;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$slambda).l21 = function (it, completion) {
    var i = new awaitWhileOnline$slambda$slambda(this.ji8_1, completion);
    i.ki8_1 = it;
    return i;
  };
  function awaitWhileOnline$slambda$slambda_0($notConnected, resultContinuation) {
    var i = new awaitWhileOnline$slambda$slambda($notConnected, resultContinuation);
    var l = function (it, $completion) {
      return i.li8(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitWhileOnline$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$slambda_1).vi8 = function (it, $completion) {
    var tmp = this.wi8(it, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).ma = function (p1, $completion) {
    return this.vi8(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          throw new DatabaseException('Database not connected', null);
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).wi8 = function (it, completion) {
    var i = new awaitWhileOnline$slambda$slambda_1(completion);
    i.ui8_1 = it;
    return i;
  };
  function awaitWhileOnline$slambda$slambda_2(resultContinuation) {
    var i = new awaitWhileOnline$slambda$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.vi8(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitWhileOnline$slambda($database, $this_awaitWhileOnline, resultContinuation) {
    this.fi9_1 = $database;
    this.gi9_1 = $this_awaitWhileOnline;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda).k2l = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(awaitWhileOnline$slambda).ma = function (p1, $completion) {
    return this.k2l((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            var this_0 = (new FirebaseDatabase(this.fi9_1)).ui5('.info/connected').qi5();
            tmp_0.ii9_1 = produceIn(new _no_name_provided__qut3iv(this_0), this.hi9_1);
            var tmp_1 = this;
            tmp_1.ji9_1 = new SelectImplementation(this.y9());
            var tmp_2 = this;
            tmp_2.ki9_1 = this.ji9_1;
            var $this$select = this.ki9_1;
            var tmp_3 = asDeferred(this.gi9_1).z17();
            $this$select.j27(tmp_3, awaitWhileOnline$slambda$slambda_0(this.ii9_1, null));
            var tmp_4 = this.ii9_1.f1o();
            $this$select.j27(tmp_4, awaitWhileOnline$slambda$slambda_2(null));
            this.s9_1 = 1;
            suspendResult = this.ki9_1.k27(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new awaitWhileOnline$slambda(this.fi9_1, this.gi9_1, completion);
    i.hi9_1 = $this$coroutineScope;
    return i;
  };
  function awaitWhileOnline$slambda_0($database, $this_awaitWhileOnline, resultContinuation) {
    var i = new awaitWhileOnline$slambda($database, $this_awaitWhileOnline, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.k2l($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
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
