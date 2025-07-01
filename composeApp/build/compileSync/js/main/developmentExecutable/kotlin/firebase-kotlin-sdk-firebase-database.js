(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/database', './kotlin-kotlin-stdlib.js', './firebase-kotlin-sdk-firebase-common-internal.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/database'), require('./kotlin-kotlin-stdlib.js'), require('./firebase-kotlin-sdk-firebase-common-internal.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['firebase/database'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'firebase/database' was not found. Please, check whether 'firebase/database' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-common-internal'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'firebase-kotlin-sdk-firebase-common-internal' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-common-internal' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-database'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'firebase-kotlin-sdk-firebase-database'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-database'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-database'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-database'], globalThis['firebase/database'], globalThis['kotlin-kotlin-stdlib'], globalThis['firebase-kotlin-sdk-firebase-common-internal'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, $module$firebase_database_g0xk0h, kotlin_kotlin, kotlin_dev_gitlive_firebase_common_internal, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ref = $module$firebase_database_g0xk0h.ref;
  var enableLogging = $module$firebase_database_g0xk0h.enableLogging;
  var connectDatabaseEmulator = $module$firebase_database_g0xk0h.connectDatabaseEmulator;
  var goOffline = $module$firebase_database_g0xk0h.goOffline;
  var goOnline = $module$firebase_database_g0xk0h.goOnline;
  var getDatabase = $module$firebase_database_g0xk0h.getDatabase;
  var onValue = $module$firebase_database_g0xk0h.onValue;
  var onChildAdded = $module$firebase_database_g0xk0h.onChildAdded;
  var onChildChanged = $module$firebase_database_g0xk0h.onChildChanged;
  var onChildMoved = $module$firebase_database_g0xk0h.onChildMoved;
  var onChildRemoved = $module$firebase_database_g0xk0h.onChildRemoved;
  var orderByKey = $module$firebase_database_g0xk0h.orderByKey;
  var query = $module$firebase_database_g0xk0h.query;
  var orderByValue = $module$firebase_database_g0xk0h.orderByValue;
  var orderByChild = $module$firebase_database_g0xk0h.orderByChild;
  var startAt = $module$firebase_database_g0xk0h.startAt;
  var endAt = $module$firebase_database_g0xk0h.endAt;
  var limitToFirst = $module$firebase_database_g0xk0h.limitToFirst;
  var limitToLast = $module$firebase_database_g0xk0h.limitToLast;
  var equalTo = $module$firebase_database_g0xk0h.equalTo;
  var remove = $module$firebase_database_g0xk0h.remove;
  var set = $module$firebase_database_g0xk0h.set;
  var update = $module$firebase_database_g0xk0h.update;
  var runTransaction = $module$firebase_database_g0xk0h.runTransaction;
  var push = $module$firebase_database_g0xk0h.push;
  var child = $module$firebase_database_g0xk0h.child;
  var onDisconnect = $module$firebase_database_g0xk0h.onDisconnect;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var Builder = kotlin_dev_gitlive_firebase_common_internal.$_$.c;
  var buildEncodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.k;
  var encode = kotlin_dev_gitlive_firebase_common_internal.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var Collection = kotlin_kotlin.$_$.d7;
  var isInterface = kotlin_kotlin.$_$.sh;
  var KtMap = kotlin_kotlin.$_$.p7;
  var toString = kotlin_kotlin.$_$.oi;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var FirebaseEncoder = kotlin_dev_gitlive_firebase_common_internal.$_$.d;
  var ValueWithSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.g;
  var Companion_getInstance = kotlin_kotlin.$_$.o6;
  var getKClass = kotlin_kotlin.$_$.g;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.h6;
  var arrayOf = kotlin_kotlin.$_$.cp;
  var createKType = kotlin_kotlin.$_$.d;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j4;
  var createFailure = kotlin_kotlin.$_$.ip;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.k4;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var FirebaseListSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.e;
  var KtSet = kotlin_kotlin.$_$.c8;
  var KtList = kotlin_kotlin.$_$.m7;
  var FirebaseMapSerializer = kotlin_dev_gitlive_firebase_common_internal.$_$.f;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.n4;
  var asNativeMap = kotlin_dev_gitlive_firebase_common_internal.$_$.i;
  var asEncodedObject = kotlin_dev_gitlive_firebase_common_internal.$_$.h;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Enum = kotlin_kotlin.$_$.zn;
  var hashCode = kotlin_kotlin.$_$.bh;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var equals = kotlin_kotlin.$_$.sg;
  var Exception = kotlin_kotlin.$_$.bo;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Builder_0 = kotlin_dev_gitlive_firebase_common_internal.$_$.a;
  var buildDecodeSettings = kotlin_dev_gitlive_firebase_common_internal.$_$.j;
  var decode = kotlin_dev_gitlive_firebase_common_internal.$_$.l;
  var objectCreate = kotlin_kotlin.$_$.ji;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sp;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var json = kotlin_kotlin.$_$.zh;
  var EncodeDecodeSettingsBuilderImpl = kotlin_dev_gitlive_firebase_common_internal.$_$.b;
  var get_js = kotlin_dev_gitlive_firebase_common_internal.$_$.n;
  var captureStack = kotlin_kotlin.$_$.jg;
  var RuntimeException = kotlin_kotlin.$_$.mo;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.j3;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var FunctionAdapter = kotlin_kotlin.$_$.eg;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var produceIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var SelectImplementation = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var asDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c3;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  //endregion
  //region block: pre-declaration
  initMetadataForCoroutine($setValueCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($updateChildrenCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Query, 'Query');
  initMetadataForClass(DatabaseReference, 'DatabaseReference', VOID, Query, VOID, [3, 1, 2, 0]);
  initMetadataForCoroutine($setValueCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($setValueCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($updateChildrenCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(OnDisconnect, 'OnDisconnect', VOID, VOID, VOID, [0, 3, 1, 2]);
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForClass(ChildEvent, 'ChildEvent');
  initMetadataForClass(FirebaseDatabase, 'FirebaseDatabase');
  initMetadataForClass(DataSnapshot, 'DataSnapshot');
  initMetadataForLambda(Query$_get_valueEvents_$slambda_5e8cap, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(Query$childEvents$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($removeValueCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($setValueEncodedCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($updateEncodedChildrenCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($runTransactionCOROUTINE$8, CoroutineImpl);
  initMetadataForClass(NativeQuery, 'NativeQuery');
  initMetadataForClass(NativeDatabaseReference, 'NativeDatabaseReference', VOID, NativeQuery, VOID, [0, 1, 3]);
  initMetadataForCoroutine($removeValueCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($cancelCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($setEncodedValueCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($updateEncodedChildrenCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(NativeOnDisconnect, 'NativeOnDisconnect', VOID, VOID, VOID, [0, 1]);
  initMetadataForClass(DatabaseException, 'DatabaseException', VOID, RuntimeException);
  initMetadataForLambda(awaitWhileOnline$slambda$o$collect$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($collectCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForLambda(awaitWhileOnline$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(awaitWhileOnline$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(awaitWhileOnline$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function DatabaseReference$setValue$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function DatabaseReference$updateChildren$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function DatabaseReference$runTransaction$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function $setValueCOROUTINE$0(_this__u8e3s4, strategy, value, encodeDefaults, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.strategy_1 = strategy;
    this.value_1 = value;
    this.encodeDefaults_1 = encodeDefaults;
  }
  protoOf($setValueCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.strategy1__1 = this.strategy_1;
            var tmp_2 = this;
            tmp_2.value2__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var strategy = this.strategy1__1;
            var value = this.value2__1;
            var this_0 = new Builder();
            this_0.set_encodeDefaults_c5evsg_k$(this.encodeDefaults_1);
            suspendResult = this.this0__1.setValueEncoded_bdmv9e_k$(encode(strategy, value, buildEncodeSettings(this_0)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $updateChildrenCOROUTINE$1(_this__u8e3s4, update, encodeDefaults, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.update_1 = update;
    this.encodeDefaults_1 = encodeDefaults;
  }
  protoOf($updateChildrenCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.update1__1 = this.update_1;
            this.set_state_rjd8d0_k$(1);
            var value = this.update1__1;
            var tmp_2;
            if (isInterface(value, KtMap)) {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = value.get_keys_wop4xp_k$();
                var tmp_3;
                if (isInterface(this_0, Collection)) {
                  tmp_3 = this_0.isEmpty_y1axqb_k$();
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator = this_0.iterator_jk1svi_k$();
                while (tmp0_iterator.hasNext_bitz1p_k$()) {
                  var element = tmp0_iterator.next_20eer_k$();
                  if (!(!(element == null) ? typeof element === 'string' : false)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_2 = tmp$ret$0;
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' is a Map containing non-String keys. Must be of the form Map<String, Any?>');
            }

            var this_1 = new Builder();
            this_1.set_encodeDefaults_c5evsg_k$(this.encodeDefaults_1);
            var encodeSettings = buildEncodeSettings(this_1);
            var tmp_4;
            if (value == null) {
              tmp_4 = null;
            } else {
              var this_2 = new FirebaseEncoder(encodeSettings);
              var tmp_5;
              if (value instanceof ValueWithSerializer) {
                var tmp_6 = value.get_value_j01efc_k$();
                tmp_5 = !(tmp_6 == null) ? isInterface(tmp_6, KtMap) : false;
              } else {
                tmp_5 = false;
              }
              if (tmp_5) {
                var it = value instanceof ValueWithSerializer ? value : THROW_CCE();
                this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
              } else {
                var tmp_7;
                try {
                  Companion_getInstance();
                  var this_3 = serializer(createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), true))]), false));
                  var value_0 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                  tmp_7 = _Result___init__impl__xyqfz8(value_0);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var e = $p;
                    Companion_getInstance();
                    tmp_8 = _Result___init__impl__xyqfz8(createFailure(e));
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                var this_4 = tmp_7;
                var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                var tmp_9;
                if (exception == null) {
                  var tmp_10 = _Result___get_value__impl__bjfvqg(this_4);
                  tmp_9 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                } else {
                  var tmp_11;
                  if (isInterface(value, KtMap)) {
                    tmp_11 = new FirebaseMapSerializer();
                  } else {
                    if (isInterface(value, KtList)) {
                      tmp_11 = new FirebaseListSerializer();
                    } else {
                      if (isInterface(value, KtSet)) {
                        tmp_11 = new FirebaseListSerializer();
                      } else {
                        tmp_11 = serializer_0(getKClassFromExpression(value));
                      }
                    }
                  }
                  var tmp_12 = tmp_11;
                  tmp_9 = isInterface(tmp_12, SerializationStrategy) ? tmp_12 : THROW_CCE();
                }
                this_2.encodeSerializableValue_3uuzip_k$(tmp_9, value);
              }
              tmp_4 = this_2.get_value_j01efc_k$();
            }

            var tmp0_elvis_lhs = tmp_4;
            var tmp_13;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' was encoded as null. Must be of the form Map<String, Any?>');
            } else {
              tmp_13 = tmp0_elvis_lhs;
            }

            var encoded = tmp_13;
            var tmp1_safe_receiver = asNativeMap(encoded);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : asEncodedObject(tmp1_safe_receiver);
            var tmp_14;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' was encoded as ' + toString(getKClassFromExpression(encoded)) + '. Must be of the form Map<String, Any?>');
            } else {
              tmp_14 = tmp2_elvis_lhs;
            }

            suspendResult = this.this0__1.updateEncodedChildren_k0bwn4_k$(tmp_14, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function DatabaseReference(nativeReference) {
    Query.call(this, nativeReference);
    this.nativeReference_1 = nativeReference;
    this.key_1 = this.nativeReference_1.get_key_18j28a_k$();
  }
  protoOf(DatabaseReference).get_nativeReference_wa2584_k$ = function () {
    return this.nativeReference_1;
  };
  protoOf(DatabaseReference).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(DatabaseReference).push_2204a_k$ = function () {
    return new DatabaseReference(this.nativeReference_1.push_2204a_k$());
  };
  protoOf(DatabaseReference).child_23d9su_k$ = function (path) {
    return new DatabaseReference(this.nativeReference_1.child_23d9su_k$(path));
  };
  protoOf(DatabaseReference).onDisconnect_70f605_k$ = function () {
    return new OnDisconnect(this.nativeReference_1.onDisconnect_70f605_k$());
  };
  protoOf(DatabaseReference).setValue_tz2rwe_k$ = function (strategy, value, encodeDefaults, $completion) {
    var tmp = new $setValueCOROUTINE$0(this, strategy, value, encodeDefaults, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DatabaseReference).setValue_54m4jh_k$ = function (strategy, value, buildSettings, $completion) {
    // Inline function 'dev.gitlive.firebase.internal.encode' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    buildSettings(this_0);
    var tmp$ret$1 = encode(strategy, value, buildEncodeSettings(this_0));
    return this.setValueEncoded_bdmv9e_k$(tmp$ret$1, $completion);
  };
  protoOf(DatabaseReference).setValueEncoded_bdmv9e_k$ = function (encodedValue, $completion) {
    return this.nativeReference_1.setValueEncoded_fm23zr_k$(encodedValue, $completion);
  };
  protoOf(DatabaseReference).updateChildren_xb6ec8_k$ = function (update, encodeDefaults, $completion) {
    var tmp = new $updateChildrenCOROUTINE$1(this, update, encodeDefaults, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DatabaseReference).updateChildren_ukihgd_k$ = function (update, buildSettings, $completion) {
    // Inline function 'dev.gitlive.firebase.internal.encodeAsObject' call
    var tmp;
    if (isInterface(update, KtMap)) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = update.get_keys_wop4xp_k$();
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'dev.gitlive.firebase.internal.encodeAsObject.<anonymous>' call
          if (!(!(element == null) ? typeof element === 'string' : false)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' is a Map containing non-String keys. Must be of the form Map<String, Any?>');
    }
    // Inline function 'dev.gitlive.firebase.internal.encode' call
    // Inline function 'dev.gitlive.firebase.internal.encode' call
    // Inline function 'kotlin.apply' call
    var this_1 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    buildSettings(this_1);
    var encodeSettings = buildEncodeSettings(this_1);
    var tmp_1;
    if (update == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.encode.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_2 = new FirebaseEncoder(encodeSettings);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.encode.<anonymous>.<anonymous>' call
      var tmp_2;
      if (update instanceof ValueWithSerializer) {
        var tmp_3 = update.get_value_j01efc_k$();
        tmp_2 = !(tmp_3 == null) ? isInterface(tmp_3, KtMap) : false;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var it = update instanceof ValueWithSerializer ? update : THROW_CCE();
        this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
      } else {
        // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer' call
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.runCatching' call
        var tmp_4;
        try {
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), true))]), false));
          var value = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          tmp_4 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_5;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_4 = tmp_5;
        }
        var this_4 = tmp_4;
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
        var tmp_6;
        if (exception == null) {
          var tmp_7 = _Result___get_value__impl__bjfvqg(this_4);
          tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        } else {
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          var tmp_8;
          if (isInterface(update, KtMap)) {
            tmp_8 = new FirebaseMapSerializer();
          } else {
            if (isInterface(update, KtList)) {
              tmp_8 = new FirebaseListSerializer();
            } else {
              if (isInterface(update, KtSet)) {
                tmp_8 = new FirebaseListSerializer();
              } else {
                tmp_8 = serializer_0(getKClassFromExpression(update));
              }
            }
          }
          var tmp_9 = tmp_8;
          tmp_6 = isInterface(tmp_9, SerializationStrategy) ? tmp_9 : THROW_CCE();
        }
        var tmp$ret$12 = tmp_6;
        this_2.encodeSerializableValue_3uuzip_k$(tmp$ret$12, update);
      }
      tmp_1 = this_2.get_value_j01efc_k$();
    }
    var tmp0_elvis_lhs = tmp_1;
    var tmp_10;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' was encoded as null. Must be of the form Map<String, Any?>');
    } else {
      tmp_10 = tmp0_elvis_lhs;
    }
    var encoded = tmp_10;
    var tmp1_safe_receiver = asNativeMap(encoded);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : asEncodedObject(tmp1_safe_receiver);
    var tmp_11;
    if (tmp2_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' was encoded as ' + toString(getKClassFromExpression(encoded)) + '. Must be of the form Map<String, Any?>');
    } else {
      tmp_11 = tmp2_elvis_lhs;
    }
    var tmp$ret$18 = tmp_11;
    return this.updateEncodedChildren_k0bwn4_k$(tmp$ret$18, $completion);
  };
  protoOf(DatabaseReference).updateEncodedChildren_k0bwn4_k$ = function (encodedUpdate, $completion) {
    return this.nativeReference_1.updateEncodedChildren_dct7n3_k$(encodedUpdate, $completion);
  };
  protoOf(DatabaseReference).removeValue_ure1be_k$ = function ($completion) {
    return this.nativeReference_1.removeValue_ure1be_k$($completion);
  };
  protoOf(DatabaseReference).runTransaction_ozw16a_k$ = function (strategy, buildSettings, transactionUpdate, $completion) {
    return this.nativeReference_1.runTransaction_ozw16a_k$(strategy, buildSettings, transactionUpdate, $completion);
  };
  protoOf(DatabaseReference).runTransaction$default_9yplsk_k$ = function (strategy, buildSettings, transactionUpdate, $completion, $super) {
    var tmp;
    if (buildSettings === VOID) {
      tmp = DatabaseReference$runTransaction$lambda;
    } else {
      tmp = buildSettings;
    }
    buildSettings = tmp;
    return $super === VOID ? this.runTransaction_ozw16a_k$(strategy, buildSettings, transactionUpdate, $completion) : $super.runTransaction_ozw16a_k$.call(this, strategy, buildSettings, transactionUpdate, $completion);
  };
  function OnDisconnect$setValue$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function OnDisconnect$updateChildren$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function $setValueCOROUTINE$2(_this__u8e3s4, strategy, value, encodeDefaults, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.strategy_1 = strategy;
    this.value_1 = value;
    this.encodeDefaults_1 = encodeDefaults;
  }
  protoOf($setValueCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.strategy1__1 = this.strategy_1;
            var tmp_2 = this;
            tmp_2.value2__1 = this.value_1;
            var tmp_3 = this;
            tmp_3.this3__1 = this.this0__1;
            var tmp_4 = this;
            var strategy = this.strategy1__1;
            var value = this.value2__1;
            var this_0 = new Builder();
            this_0.set_encodeDefaults_c5evsg_k$(this.encodeDefaults_1);
            tmp_4.value4__1 = encode(strategy, value, buildEncodeSettings(this_0));
            this.set_state_rjd8d0_k$(1);
            var value_0 = this.value4__1;
            var this_1 = new Builder();
            var encodeSettings = buildEncodeSettings(this_1);
            var tmp_5;
            if (value_0 == null) {
              tmp_5 = null;
            } else {
              var this_2 = new FirebaseEncoder(encodeSettings);
              var tmp_6;
              if (value_0 instanceof ValueWithSerializer) {
                var tmp_7 = value_0.get_value_j01efc_k$();
                tmp_6 = tmp_7 == null ? true : !(tmp_7 == null);
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                var it = value_0 instanceof ValueWithSerializer ? value_0 : THROW_CCE();
                this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
              } else {
                var tmp_8;
                try {
                  Companion_getInstance();
                  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false));
                  var value_1 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                  tmp_8 = _Result___init__impl__xyqfz8(value_1);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    var e = $p;
                    Companion_getInstance();
                    tmp_9 = _Result___init__impl__xyqfz8(createFailure(e));
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                var this_4 = tmp_8;
                var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                var tmp_10;
                if (exception == null) {
                  var tmp_11 = _Result___get_value__impl__bjfvqg(this_4);
                  tmp_10 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
                } else {
                  var tmp_12;
                  if (isInterface(value_0, KtMap)) {
                    tmp_12 = new FirebaseMapSerializer();
                  } else {
                    if (isInterface(value_0, KtList)) {
                      tmp_12 = new FirebaseListSerializer();
                    } else {
                      if (isInterface(value_0, KtSet)) {
                        tmp_12 = new FirebaseListSerializer();
                      } else {
                        tmp_12 = serializer_0(getKClassFromExpression(value_0));
                      }
                    }
                  }
                  var tmp_13 = tmp_12;
                  tmp_10 = isInterface(tmp_13, SerializationStrategy) ? tmp_13 : THROW_CCE();
                }
                this_2.encodeSerializableValue_3uuzip_k$(tmp_10, value_0);
              }
              tmp_5 = this_2.get_value_j01efc_k$();
            }

            suspendResult = this.this3__1.setEncodedValue_334gv8_k$(tmp_5, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $setValueCOROUTINE$3(_this__u8e3s4, strategy, value, buildSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.strategy_1 = strategy;
    this.value_1 = value;
    this.buildSettings_1 = buildSettings;
  }
  protoOf($setValueCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            var strategy = this.strategy_1;
            var value = this.value_1;
            var this_0 = new Builder();
            this.buildSettings_1(this_0);
            tmp_1.value1__1 = encode(strategy, value, buildEncodeSettings(this_0));
            this.set_state_rjd8d0_k$(1);
            var value_0 = this.value1__1;
            var this_1 = new Builder();
            var encodeSettings = buildEncodeSettings(this_1);
            var tmp_2;
            if (value_0 == null) {
              tmp_2 = null;
            } else {
              var this_2 = new FirebaseEncoder(encodeSettings);
              var tmp_3;
              if (value_0 instanceof ValueWithSerializer) {
                var tmp_4 = value_0.get_value_j01efc_k$();
                tmp_3 = tmp_4 == null ? true : !(tmp_4 == null);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                var it = value_0 instanceof ValueWithSerializer ? value_0 : THROW_CCE();
                this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
              } else {
                var tmp_5;
                try {
                  Companion_getInstance();
                  var this_3 = serializer(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false));
                  var value_1 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                  tmp_5 = _Result___init__impl__xyqfz8(value_1);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    var e = $p;
                    Companion_getInstance();
                    tmp_6 = _Result___init__impl__xyqfz8(createFailure(e));
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                var this_4 = tmp_5;
                var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                var tmp_7;
                if (exception == null) {
                  var tmp_8 = _Result___get_value__impl__bjfvqg(this_4);
                  tmp_7 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                } else {
                  var tmp_9;
                  if (isInterface(value_0, KtMap)) {
                    tmp_9 = new FirebaseMapSerializer();
                  } else {
                    if (isInterface(value_0, KtList)) {
                      tmp_9 = new FirebaseListSerializer();
                    } else {
                      if (isInterface(value_0, KtSet)) {
                        tmp_9 = new FirebaseListSerializer();
                      } else {
                        tmp_9 = serializer_0(getKClassFromExpression(value_0));
                      }
                    }
                  }
                  var tmp_10 = tmp_9;
                  tmp_7 = isInterface(tmp_10, SerializationStrategy) ? tmp_10 : THROW_CCE();
                }
                this_2.encodeSerializableValue_3uuzip_k$(tmp_7, value_0);
              }
              tmp_2 = this_2.get_value_j01efc_k$();
            }

            suspendResult = this.this0__1.setEncodedValue_334gv8_k$(tmp_2, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $updateChildrenCOROUTINE$4(_this__u8e3s4, update, encodeDefaults, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.update_1 = update;
    this.encodeDefaults_1 = encodeDefaults;
  }
  protoOf($updateChildrenCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.update1__1 = this.update_1;
            this.set_state_rjd8d0_k$(1);
            var value = this.update1__1;
            var tmp_2;
            if (isInterface(value, KtMap)) {
              var tmp$ret$0;
              l$ret$1: do {
                var this_0 = value.get_keys_wop4xp_k$();
                var tmp_3;
                if (isInterface(this_0, Collection)) {
                  tmp_3 = this_0.isEmpty_y1axqb_k$();
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator = this_0.iterator_jk1svi_k$();
                while (tmp0_iterator.hasNext_bitz1p_k$()) {
                  var element = tmp0_iterator.next_20eer_k$();
                  if (!(!(element == null) ? typeof element === 'string' : false)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_2 = tmp$ret$0;
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' is a Map containing non-String keys. Must be of the form Map<String, Any?>');
            }

            var this_1 = new Builder();
            this_1.set_encodeDefaults_c5evsg_k$(this.encodeDefaults_1);
            var encodeSettings = buildEncodeSettings(this_1);
            var tmp_4;
            if (value == null) {
              tmp_4 = null;
            } else {
              var this_2 = new FirebaseEncoder(encodeSettings);
              var tmp_5;
              if (value instanceof ValueWithSerializer) {
                var tmp_6 = value.get_value_j01efc_k$();
                tmp_5 = !(tmp_6 == null) ? isInterface(tmp_6, KtMap) : false;
              } else {
                tmp_5 = false;
              }
              if (tmp_5) {
                var it = value instanceof ValueWithSerializer ? value : THROW_CCE();
                this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
              } else {
                var tmp_7;
                try {
                  Companion_getInstance();
                  var this_3 = serializer(createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), true))]), false));
                  var value_0 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
                  tmp_7 = _Result___init__impl__xyqfz8(value_0);
                } catch ($p) {
                  var tmp_8;
                  if ($p instanceof Error) {
                    var e = $p;
                    Companion_getInstance();
                    tmp_8 = _Result___init__impl__xyqfz8(createFailure(e));
                  } else {
                    throw $p;
                  }
                  tmp_7 = tmp_8;
                }
                var this_4 = tmp_7;
                var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
                var tmp_9;
                if (exception == null) {
                  var tmp_10 = _Result___get_value__impl__bjfvqg(this_4);
                  tmp_9 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                } else {
                  var tmp_11;
                  if (isInterface(value, KtMap)) {
                    tmp_11 = new FirebaseMapSerializer();
                  } else {
                    if (isInterface(value, KtList)) {
                      tmp_11 = new FirebaseListSerializer();
                    } else {
                      if (isInterface(value, KtSet)) {
                        tmp_11 = new FirebaseListSerializer();
                      } else {
                        tmp_11 = serializer_0(getKClassFromExpression(value));
                      }
                    }
                  }
                  var tmp_12 = tmp_11;
                  tmp_9 = isInterface(tmp_12, SerializationStrategy) ? tmp_12 : THROW_CCE();
                }
                this_2.encodeSerializableValue_3uuzip_k$(tmp_9, value);
              }
              tmp_4 = this_2.get_value_j01efc_k$();
            }

            var tmp0_elvis_lhs = tmp_4;
            var tmp_13;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' was encoded as null. Must be of the form Map<String, Any?>');
            } else {
              tmp_13 = tmp0_elvis_lhs;
            }

            var encoded = tmp_13;
            var tmp1_safe_receiver = asNativeMap(encoded);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : asEncodedObject(tmp1_safe_receiver);
            var tmp_14;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$(toString(value) + ' was encoded as ' + toString(getKClassFromExpression(encoded)) + '. Must be of the form Map<String, Any?>');
            } else {
              tmp_14 = tmp2_elvis_lhs;
            }

            suspendResult = this.this0__1.updateEncodedChildren_k0bwn4_k$(tmp_14, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function OnDisconnect(native) {
    this.native_1 = native;
  }
  protoOf(OnDisconnect).get_native_pj6ms7_k$ = function () {
    return this.native_1;
  };
  protoOf(OnDisconnect).removeValue_ure1be_k$ = function ($completion) {
    return this.native_1.removeValue_ure1be_k$($completion);
  };
  protoOf(OnDisconnect).cancel_7jv2vx_k$ = function ($completion) {
    return this.native_1.cancel_7jv2vx_k$($completion);
  };
  protoOf(OnDisconnect).setValue_tz2rwe_k$ = function (strategy, value, encodeDefaults, $completion) {
    var tmp = new $setValueCOROUTINE$2(this, strategy, value, encodeDefaults, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OnDisconnect).setValue_54m4jh_k$ = function (strategy, value, buildSettings, $completion) {
    var tmp = new $setValueCOROUTINE$3(this, strategy, value, buildSettings, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OnDisconnect).setEncodedValue_334gv8_k$ = function (encodedValue, $completion) {
    return this.native_1.setEncodedValue_dwxro1_k$(encodedValue, $completion);
  };
  protoOf(OnDisconnect).updateChildren_ukihgd_k$ = function (update, buildSettings, $completion) {
    // Inline function 'dev.gitlive.firebase.internal.encodeAsObject' call
    var tmp;
    if (isInterface(update, KtMap)) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = update.get_keys_wop4xp_k$();
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'dev.gitlive.firebase.internal.encodeAsObject.<anonymous>' call
          if (!(!(element == null) ? typeof element === 'string' : false)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' is a Map containing non-String keys. Must be of the form Map<String, Any?>');
    }
    // Inline function 'dev.gitlive.firebase.internal.encode' call
    // Inline function 'dev.gitlive.firebase.internal.encode' call
    // Inline function 'kotlin.apply' call
    var this_1 = new Builder();
    // Inline function 'kotlin.contracts.contract' call
    buildSettings(this_1);
    var encodeSettings = buildEncodeSettings(this_1);
    var tmp_1;
    if (update == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.encode.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_2 = new FirebaseEncoder(encodeSettings);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.internal.encode.<anonymous>.<anonymous>' call
      var tmp_2;
      if (update instanceof ValueWithSerializer) {
        var tmp_3 = update.get_value_j01efc_k$();
        tmp_2 = !(tmp_3 == null) ? isInterface(tmp_3, KtMap) : false;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var it = update instanceof ValueWithSerializer ? update : THROW_CCE();
        this_2.encodeSerializableValue_3uuzip_k$(it.get_serializer_u29zhh_k$(), it.get_value_j01efc_k$());
      } else {
        // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer' call
        // Inline function 'kotlin.getOrElse' call
        // Inline function 'kotlin.runCatching' call
        var tmp_4;
        try {
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          // Inline function 'kotlinx.serialization.serializer' call
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_3 = serializer(createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), true))]), false));
          var value = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
          tmp_4 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_5;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_4 = tmp_5;
        }
        var this_4 = tmp_4;
        // Inline function 'kotlin.contracts.contract' call
        var exception = Result__exceptionOrNull_impl_p6xea9(this_4);
        var tmp_6;
        if (exception == null) {
          var tmp_7 = _Result___get_value__impl__bjfvqg(this_4);
          tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        } else {
          // Inline function 'dev.gitlive.firebase.internal.firebaseSerializer.<anonymous>' call
          var tmp_8;
          if (isInterface(update, KtMap)) {
            tmp_8 = new FirebaseMapSerializer();
          } else {
            if (isInterface(update, KtList)) {
              tmp_8 = new FirebaseListSerializer();
            } else {
              if (isInterface(update, KtSet)) {
                tmp_8 = new FirebaseListSerializer();
              } else {
                tmp_8 = serializer_0(getKClassFromExpression(update));
              }
            }
          }
          var tmp_9 = tmp_8;
          tmp_6 = isInterface(tmp_9, SerializationStrategy) ? tmp_9 : THROW_CCE();
        }
        var tmp$ret$12 = tmp_6;
        this_2.encodeSerializableValue_3uuzip_k$(tmp$ret$12, update);
      }
      tmp_1 = this_2.get_value_j01efc_k$();
    }
    var tmp0_elvis_lhs = tmp_1;
    var tmp_10;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' was encoded as null. Must be of the form Map<String, Any?>');
    } else {
      tmp_10 = tmp0_elvis_lhs;
    }
    var encoded = tmp_10;
    var tmp1_safe_receiver = asNativeMap(encoded);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : asEncodedObject(tmp1_safe_receiver);
    var tmp_11;
    if (tmp2_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(toString(update) + ' was encoded as ' + toString(getKClassFromExpression(encoded)) + '. Must be of the form Map<String, Any?>');
    } else {
      tmp_11 = tmp2_elvis_lhs;
    }
    var tmp$ret$18 = tmp_11;
    return this.updateEncodedChildren_k0bwn4_k$(tmp$ret$18, $completion);
  };
  protoOf(OnDisconnect).updateChildren_xb6ec8_k$ = function (update, encodeDefaults, $completion) {
    var tmp = new $updateChildrenCOROUTINE$4(this, update, encodeDefaults, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OnDisconnect).updateEncodedChildren_k0bwn4_k$ = function (encodedUpdate, $completion) {
    return this.native_1.updateEncodedChildren_dct7n3_k$(encodedUpdate, $completion);
  };
  var Type_ADDED_instance;
  var Type_CHANGED_instance;
  var Type_MOVED_instance;
  var Type_REMOVED_instance;
  function values() {
    return [Type_ADDED_getInstance(), Type_CHANGED_getInstance(), Type_MOVED_getInstance(), Type_REMOVED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ADDED':
        return Type_ADDED_getInstance();
      case 'CHANGED':
        return Type_CHANGED_getInstance();
      case 'MOVED':
        return Type_MOVED_getInstance();
      case 'REMOVED':
        return Type_REMOVED_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_ADDED_instance = new Type('ADDED', 0);
    Type_CHANGED_instance = new Type('CHANGED', 1);
    Type_MOVED_instance = new Type('MOVED', 2);
    Type_REMOVED_instance = new Type('REMOVED', 3);
  }
  var $ENTRIES;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Type_ADDED_getInstance() {
    Type_initEntries();
    return Type_ADDED_instance;
  }
  function Type_CHANGED_getInstance() {
    Type_initEntries();
    return Type_CHANGED_instance;
  }
  function Type_MOVED_getInstance() {
    Type_initEntries();
    return Type_MOVED_instance;
  }
  function Type_REMOVED_getInstance() {
    Type_initEntries();
    return Type_REMOVED_instance;
  }
  function ChildEvent(snapshot, type, previousChildName) {
    this.snapshot_1 = snapshot;
    this.type_1 = type;
    this.previousChildName_1 = previousChildName;
  }
  protoOf(ChildEvent).get_snapshot_r3bwc3_k$ = function () {
    return this.snapshot_1;
  };
  protoOf(ChildEvent).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(ChildEvent).get_previousChildName_khm7dz_k$ = function () {
    return this.previousChildName_1;
  };
  protoOf(ChildEvent).component1_7eebsc_k$ = function () {
    return this.snapshot_1;
  };
  protoOf(ChildEvent).component2_7eebsb_k$ = function () {
    return this.type_1;
  };
  protoOf(ChildEvent).component3_7eebsa_k$ = function () {
    return this.previousChildName_1;
  };
  protoOf(ChildEvent).copy_x5co3k_k$ = function (snapshot, type, previousChildName) {
    return new ChildEvent(snapshot, type, previousChildName);
  };
  protoOf(ChildEvent).copy$default_ix09hz_k$ = function (snapshot, type, previousChildName, $super) {
    snapshot = snapshot === VOID ? this.snapshot_1 : snapshot;
    type = type === VOID ? this.type_1 : type;
    previousChildName = previousChildName === VOID ? this.previousChildName_1 : previousChildName;
    return $super === VOID ? this.copy_x5co3k_k$(snapshot, type, previousChildName) : $super.copy_x5co3k_k$.call(this, snapshot, type, previousChildName);
  };
  protoOf(ChildEvent).toString = function () {
    return 'ChildEvent(snapshot=' + toString(this.snapshot_1) + ', type=' + this.type_1.toString() + ', previousChildName=' + this.previousChildName_1 + ')';
  };
  protoOf(ChildEvent).hashCode = function () {
    var result = hashCode(this.snapshot_1);
    result = imul(result, 31) + this.type_1.hashCode() | 0;
    result = imul(result, 31) + (this.previousChildName_1 == null ? 0 : getStringHashCode(this.previousChildName_1)) | 0;
    return result;
  };
  protoOf(ChildEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildEvent))
      return false;
    var tmp0_other_with_cast = other instanceof ChildEvent ? other : THROW_CCE();
    if (!equals(this.snapshot_1, tmp0_other_with_cast.snapshot_1))
      return false;
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    if (!(this.previousChildName_1 == tmp0_other_with_cast.previousChildName_1))
      return false;
    return true;
  };
  function FirebaseDatabase(js) {
    this.js_1 = js;
  }
  protoOf(FirebaseDatabase).get_js_gk6fbv_k$ = function () {
    return this.js_1;
  };
  protoOf(FirebaseDatabase).reference_8wmp8v_k$ = function (path) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.FirebaseDatabase.reference.<anonymous>' call
        tmp$ret$2 = new DatabaseReference(new NativeDatabaseReference(ref(this.js_1, path), this.js_1));
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
  protoOf(FirebaseDatabase).reference_fatak5_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.FirebaseDatabase.reference.<anonymous>' call
        tmp$ret$2 = new DatabaseReference(new NativeDatabaseReference(ref(this.js_1), this.js_1));
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
  protoOf(FirebaseDatabase).setPersistenceEnabled_n9ofnz_k$ = function (enabled) {
  };
  protoOf(FirebaseDatabase).setPersistenceCacheSizeBytes_2eocmx_k$ = function (cacheSizeInBytes) {
  };
  protoOf(FirebaseDatabase).setLoggingEnabled_b2qjdb_k$ = function (enabled) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        enableLogging(enabled);
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
    return Unit_getInstance();
  };
  protoOf(FirebaseDatabase).useEmulator_zgpl6e_k$ = function (host, port) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        connectDatabaseEmulator(this.js_1, host, port);
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
    return Unit_getInstance();
  };
  protoOf(FirebaseDatabase).goOffline_5emd4l_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        goOffline(this.js_1);
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
    return Unit_getInstance();
  };
  protoOf(FirebaseDatabase).goOnline_vmp9qj_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        goOnline(this.js_1);
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
    return Unit_getInstance();
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
  function DataSnapshot$value$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function DataSnapshot$children$lambda($it, $$this$rethrow) {
    return function (snapshot) {
      $it.add_utx5q5_k$(new DataSnapshot(snapshot, $$this$rethrow.database_1));
      return false;
    };
  }
  function DataSnapshot(js, database) {
    this.js_1 = js;
    this.database_1 = database;
    var tmp = this;
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$(this.js_1.size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.children.<anonymous>.<anonymous>' call
        this.js_1.forEach(DataSnapshot$children$lambda(this_0, this));
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
    tmp.children_1 = this_0;
  }
  protoOf(DataSnapshot).get_js_gk6fbv_k$ = function () {
    return this.js_1;
  };
  protoOf(DataSnapshot).get_database_27janw_k$ = function () {
    return this.database_1;
  };
  protoOf(DataSnapshot).get_value_j01efc_k$ = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.get_hasChildren_hui79s_k$()) {
      // Inline function 'dev.gitlive.firebase.database.DataSnapshot.<get-value>.<anonymous>' call
      var message = 'DataSnapshot.value can only be used for primitive values (snapshots without children)';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.js_1.val();
  };
  protoOf(DataSnapshot).value_ppg9s0_k$ = function (strategy, buildSettings) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.value.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.internal.decode' call
        var value = get_js_0(this).val();
        // Inline function 'kotlin.apply' call
        var this_0 = new Builder_0();
        // Inline function 'kotlin.contracts.contract' call
        buildSettings(this_0);
        tmp$ret$4 = decode(strategy, value, buildDecodeSettings(this_0));
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
    return tmp$ret$4;
  };
  protoOf(DataSnapshot).get_exists_d34qcl_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.<get-exists>.<anonymous>' call
        tmp$ret$2 = this.js_1.exists();
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
  protoOf(DataSnapshot).get_key_18j28a_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.DataSnapshot.<get-key>.<anonymous>' call
        tmp$ret$2 = this.js_1.key;
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
  protoOf(DataSnapshot).child_23d9su_k$ = function (path) {
    return new DataSnapshot(this.js_1.child(path), this.database_1);
  };
  protoOf(DataSnapshot).get_hasChildren_hui79s_k$ = function () {
    return this.js_1.hasChildren();
  };
  protoOf(DataSnapshot).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(DataSnapshot).get_ref_18ix1y_k$ = function () {
    return new DatabaseReference(new NativeDatabaseReference(this.js_1.ref, this.database_1));
  };
  function Query$_get_valueEvents_$slambda$lambda_g10dbq($$this$rethrow, this$0) {
    return function (it) {
      $$this$rethrow.trySend_62dpg8_k$(new DataSnapshot(it, this$0.database_1));
      return Unit_getInstance();
    };
  }
  function Query$_get_valueEvents_$slambda$lambda_g10dbq_0($$this$rethrow) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.database.Query.<get-valueEvents>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      $$this$rethrow.close_ukldxa_k$(DatabaseException_init_$Create$(it));
      return Unit_getInstance();
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
      return Unit_getInstance();
    };
  }
  function Query$childEvents$slambda$lambda($$this$rethrow, this$0, $type) {
    return function (snapshot, previousChildName) {
      $$this$rethrow.trySend_62dpg8_k$(new ChildEvent(new DataSnapshot(snapshot, this$0.database_1), $type, previousChildName));
      return Unit_getInstance();
    };
  }
  function Query$childEvents$slambda$lambda_0($$this$rethrow) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.database.Query.childEvents.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      $$this$rethrow.close_ukldxa_k$(DatabaseException_init_$Create$(it));
      return Unit_getInstance();
    };
  }
  function Query$childEvents$slambda$lambda_1($this_callbackFlow, $unsubscribes) {
    return function () {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      $l$block: {
        // Inline function 'dev.gitlive.firebase.database.rethrow' call
        try {
          // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = $unsubscribes.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'dev.gitlive.firebase.database.Query.childEvents.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            element();
          }
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
      return Unit_getInstance();
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
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).invoke_h9jvb5_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_2hebgb_k$($this$callbackFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_h9jvb5_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var this_0 = this.$this$callbackFlow_1;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              try {
                var tmp_1 = get_js_1(this.this$0__1);
                var tmp_2 = Query$_get_valueEvents_$slambda$lambda_g10dbq(this_0, this.this$0__1);
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
            tmp_0.unsubscribe0__1 = tmp$ret$0;
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, Query$_get_valueEvents_$slambda$lambda_g10dbq_1(this.$this$callbackFlow_1, this.unsubscribe0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).create_2hebgb_k$ = function ($this$callbackFlow, completion) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this.this$0__1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(Query$_get_valueEvents_$slambda_5e8cap).create_wyq9v6_k$ = function (value, completion) {
    return this.create_2hebgb_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function Query$_get_valueEvents_$slambda_5e8cap_0(this$0, resultContinuation) {
    var i = new Query$_get_valueEvents_$slambda_5e8cap(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_h9jvb5_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Query$childEvents$slambda($types, this$0, resultContinuation) {
    this.$types_1 = $types;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Query$childEvents$slambda).invoke_ov1rv5_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_6bqpw5_k$($this$callbackFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Query$childEvents$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ov1rv5_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Query$childEvents$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var this_0 = this.$this$callbackFlow_1;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              try {
                var this_1 = this.$types_1;
                var destination = ArrayList_init_$Create$(this_1.length);
                var inductionVariable = 0;
                var last = this_1.length;
                while (inductionVariable < last) {
                  var item = this_1[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  var callback = Query$childEvents$slambda$lambda(this_0, this.this$0__1, item);
                  var cancelCallback = Query$childEvents$slambda$lambda_0(this_0);
                  var tmp_1;
                  switch (item.get_ordinal_ip24qg_k$()) {
                    case 0:
                      tmp_1 = onChildAdded(get_js_1(this.this$0__1), callback, cancelCallback);
                      break;
                    case 1:
                      tmp_1 = onChildChanged(get_js_1(this.this$0__1), callback, cancelCallback);
                      break;
                    case 2:
                      tmp_1 = onChildMoved(get_js_1(this.this$0__1), callback, cancelCallback);
                      break;
                    case 3:
                      tmp_1 = onChildRemoved(get_js_1(this.this$0__1), callback, cancelCallback);
                      break;
                    default:
                      noWhenBranchMatchedException();
                      break;
                  }
                  destination.add_utx5q5_k$(tmp_1);
                }
                tmp$ret$0 = destination;
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
            tmp_0.unsubscribes0__1 = tmp$ret$0;
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, Query$childEvents$slambda$lambda_1(this.$this$callbackFlow_1, this.unsubscribes0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  protoOf(Query$childEvents$slambda).create_6bqpw5_k$ = function ($this$callbackFlow, completion) {
    var i = new Query$childEvents$slambda(this.$types_1, this.this$0__1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(Query$childEvents$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_6bqpw5_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function Query$childEvents$slambda_0($types, this$0, resultContinuation) {
    var i = new Query$childEvents$slambda($types, this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_ov1rv5_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Query(nativeQuery) {
    this.nativeQuery_1 = nativeQuery;
    this.database_1 = this.nativeQuery_1.database_1;
  }
  protoOf(Query).get_nativeQuery_a9d20f_k$ = function () {
    return this.nativeQuery_1;
  };
  protoOf(Query).get_database_27janw_k$ = function () {
    return this.database_1;
  };
  protoOf(Query).orderByKey_c2h0pm_k$ = function () {
    return Query_init_$Create$(query(get_js_1(this), orderByKey()), this.database_1);
  };
  protoOf(Query).orderByValue_k4y1ik_k$ = function () {
    return Query_init_$Create$(query(get_js_1(this), orderByValue()), this.database_1);
  };
  protoOf(Query).orderByChild_k5k1fn_k$ = function (path) {
    return Query_init_$Create$(query(get_js_1(this), orderByChild(path)), this.database_1);
  };
  protoOf(Query).get_valueEvents_g9q9vj_k$ = function () {
    return callbackFlow(Query$_get_valueEvents_$slambda_5e8cap_0(this, null));
  };
  protoOf(Query).childEvents_1bjo80_k$ = function (types) {
    return callbackFlow(Query$childEvents$slambda_0(types, this, null));
  };
  protoOf(Query).childEvents$default_b4cr8y_k$ = function (types, $super) {
    var tmp;
    if (types === VOID) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [Type_ADDED_getInstance(), Type_CHANGED_getInstance(), Type_MOVED_getInstance(), Type_REMOVED_getInstance()];
    } else {
      tmp = types;
    }
    types = tmp;
    return $super === VOID ? this.childEvents_1bjo80_k$(types) : $super.childEvents_1bjo80_k$.call(this, types);
  };
  protoOf(Query).startAt_voubz2_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, startAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).startAt$default_4gv8gc_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.startAt_voubz2_k$(value, key) : $super.startAt_voubz2_k$.call(this, value, key);
  };
  protoOf(Query).startAt_pnjjvu_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, startAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).startAt$default_2zbn1k_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.startAt_pnjjvu_k$(value, key) : $super.startAt_pnjjvu_k$.call(this, value, key);
  };
  protoOf(Query).startAt_i3wxop_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, startAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).startAt$default_ji8g2f_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.startAt_i3wxop_k$(value, key) : $super.startAt_i3wxop_k$.call(this, value, key);
  };
  protoOf(Query).endAt_kl37wl_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, endAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).endAt$default_5o7s19_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.endAt_kl37wl_k$(value, key) : $super.endAt_kl37wl_k$.call(this, value, key);
  };
  protoOf(Query).endAt_62qysv_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, endAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).endAt$default_xyo1up_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.endAt_62qysv_k$(value, key) : $super.endAt_62qysv_k$.call(this, value, key);
  };
  protoOf(Query).endAt_euflzk_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, endAt(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).endAt$default_90ujmm_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.endAt_euflzk_k$(value, key) : $super.endAt_euflzk_k$.call(this, value, key);
  };
  protoOf(Query).limitToFirst_z2ssim_k$ = function (limit) {
    return Query_init_$Create$(query(get_js_1(this), limitToFirst(limit)), this.database_1);
  };
  protoOf(Query).limitToLast_73xab8_k$ = function (limit) {
    return Query_init_$Create$(query(get_js_1(this), limitToLast(limit)), this.database_1);
  };
  protoOf(Query).equalTo_jl50ec_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, equalTo(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).equalTo$default_hgto8i_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.equalTo_jl50ec_k$(value, key) : $super.equalTo_jl50ec_k$.call(this, value, key);
  };
  protoOf(Query).equalTo_bfey28_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, equalTo(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).equalTo$default_mb3a0y_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.equalTo_bfey28_k$(value, key) : $super.equalTo_bfey28_k$.call(this, value, key);
  };
  protoOf(Query).equalTo_5cq5ld_k$ = function (value, key) {
    var tmp = get_js_1(this);
    return Query_init_$Create$(query(tmp, equalTo(value, key == null ? undefined : key)), this.database_1);
  };
  protoOf(Query).equalTo$default_xoj70d_k$ = function (value, key, $super) {
    key = key === VOID ? null : key;
    return $super === VOID ? this.equalTo_5cq5ld_k$(value, key) : $super.equalTo_5cq5ld_k$.call(this, value, key);
  };
  protoOf(Query).toString = function () {
    return toString(get_js_1(this));
  };
  function NativeDatabaseReference$runTransaction$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function NativeDatabaseReference$runTransaction$lambda_0($strategy, $buildSettings, $transactionUpdate) {
    return function (currentData) {
      // Inline function 'dev.gitlive.firebase.internal.reencodeTransformation' call
      var strategy = $strategy;
      var value = currentData == null ? json([]) : currentData;
      // Inline function 'kotlin.apply' call
      var this_0 = new EncodeDecodeSettingsBuilderImpl();
      // Inline function 'kotlin.contracts.contract' call
      $buildSettings(this_0);
      var encodeDecodeSettingsBuilder = this_0;
      var oldValue = decode(strategy, value, buildDecodeSettings(encodeDecodeSettingsBuilder));
      return encode(strategy, $transactionUpdate(oldValue), buildEncodeSettings(encodeDecodeSettingsBuilder));
    };
  }
  function $removeValueCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($removeValueCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(remove(this.$this$rethrow2__1.js_2), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $setValueEncodedCOROUTINE$6(_this__u8e3s4, encodedValue, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.encodedValue_1 = encodedValue;
  }
  protoOf($setValueEncodedCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(set(this.$this$rethrow2__1.js_2, this.encodedValue_1), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updateEncodedChildrenCOROUTINE$7(_this__u8e3s4, encodedUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.encodedUpdate_1 = encodedUpdate;
  }
  protoOf($updateEncodedChildrenCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(update(this.$this$rethrow2__1.js_2, get_js(this.encodedUpdate_1)), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $runTransactionCOROUTINE$8(_this__u8e3s4, strategy, buildSettings, transactionUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.strategy_1 = strategy;
    this.buildSettings_1 = buildSettings;
    this.transactionUpdate_1 = transactionUpdate;
  }
  protoOf($runTransactionCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitWhileOnline(runTransaction(this._this__u8e3s4__1.js_2, NativeDatabaseReference$runTransaction$lambda_0(this.strategy_1, this.buildSettings_1, this.transactionUpdate_1)), this._this__u8e3s4__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.snapshot;
            return new DataSnapshot(ARGUMENT_0, this._this__u8e3s4__1.database_1);
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function NativeDatabaseReference(js, database) {
    NativeQuery.call(this, js, database);
    this.js_2 = js;
  }
  protoOf(NativeDatabaseReference).get_js_kntnvy_k$ = function () {
    return this.js_2;
  };
  protoOf(NativeDatabaseReference).get_key_18j28a_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.<get-key>.<anonymous>' call
        tmp$ret$2 = this.js_2.key;
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
  protoOf(NativeDatabaseReference).push_2204a_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.push.<anonymous>' call
        tmp$ret$2 = new NativeDatabaseReference(push(this.js_2), this.database_1);
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
  protoOf(NativeDatabaseReference).child_23d9su_k$ = function (path) {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.child.<anonymous>' call
        tmp$ret$2 = new NativeDatabaseReference(child(this.js_2, path), this.database_1);
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
  protoOf(NativeDatabaseReference).onDisconnect_70f605_k$ = function () {
    // Inline function 'dev.gitlive.firebase.database.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.database.NativeDatabaseReference.onDisconnect.<anonymous>' call
        tmp$ret$2 = new NativeOnDisconnect(onDisconnect(this.js_2), this.database_1);
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
  protoOf(NativeDatabaseReference).removeValue_ure1be_k$ = function ($completion) {
    var tmp = new $removeValueCOROUTINE$5(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeDatabaseReference).setValueEncoded_fm23zr_k$ = function (encodedValue, $completion) {
    var tmp = new $setValueEncodedCOROUTINE$6(this, encodedValue, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeDatabaseReference).updateEncodedChildren_dct7n3_k$ = function (encodedUpdate, $completion) {
    var tmp = new $updateEncodedChildrenCOROUTINE$7(this, encodedUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeDatabaseReference).runTransaction_ozw16a_k$ = function (strategy, buildSettings, transactionUpdate, $completion) {
    var tmp = new $runTransactionCOROUTINE$8(this, strategy, buildSettings, transactionUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeDatabaseReference).runTransaction$default_ou15tg_k$ = function (strategy, buildSettings, transactionUpdate, $completion, $super) {
    var tmp;
    if (buildSettings === VOID) {
      tmp = NativeDatabaseReference$runTransaction$lambda;
    } else {
      tmp = buildSettings;
    }
    buildSettings = tmp;
    return $super === VOID ? this.runTransaction_ozw16a_k$(strategy, buildSettings, transactionUpdate, $completion) : $super.runTransaction_ozw16a_k$.call(this, strategy, buildSettings, transactionUpdate, $completion);
  };
  function $removeValueCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($removeValueCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(this.$this$rethrow2__1.js_1.remove(), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $cancelCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($cancelCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(this.$this$rethrow2__1.js_1.cancel(), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $setEncodedValueCOROUTINE$11(_this__u8e3s4, encodedValue, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.encodedValue_1 = encodedValue;
  }
  protoOf($setEncodedValueCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(this.$this$rethrow2__1.js_1.set(this.encodedValue_1), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updateEncodedChildrenCOROUTINE$12(_this__u8e3s4, encodedUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.encodedUpdate_1 = encodedUpdate;
  }
  protoOf($updateEncodedChildrenCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = awaitWhileOnline(this.$this$rethrow2__1.js_1.update(get_js(this.encodedUpdate_1)), this.$this$rethrow2__1.database_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw DatabaseException_init_$Create$(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function NativeOnDisconnect(js, database) {
    this.js_1 = js;
    this.database_1 = database;
  }
  protoOf(NativeOnDisconnect).get_js_kntnvy_k$ = function () {
    return this.js_1;
  };
  protoOf(NativeOnDisconnect).get_database_27janw_k$ = function () {
    return this.database_1;
  };
  protoOf(NativeOnDisconnect).removeValue_ure1be_k$ = function ($completion) {
    var tmp = new $removeValueCOROUTINE$9(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeOnDisconnect).cancel_7jv2vx_k$ = function ($completion) {
    var tmp = new $cancelCOROUTINE$10(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeOnDisconnect).setEncodedValue_dwxro1_k$ = function (encodedValue, $completion) {
    var tmp = new $setEncodedValueCOROUTINE$11(this, encodedValue, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NativeOnDisconnect).updateEncodedChildren_dct7n3_k$ = function (encodedUpdate, $completion) {
    var tmp = new $updateEncodedChildrenCOROUTINE$12(this, encodedUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function rethrow(_this__u8e3s4, function_0) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.database.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.database.rethrow.<anonymous>' call
        tmp$ret$1 = function_0(_this__u8e3s4);
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
    return tmp$ret$1;
  }
  function get_js_0(_this__u8e3s4) {
    return _this__u8e3s4.js_1;
  }
  function NativeQuery(js, database) {
    this.js_1 = js;
    this.database_1 = database;
  }
  protoOf(NativeQuery).get_js_kntnvy_k$ = function () {
    return this.js_1;
  };
  protoOf(NativeQuery).get_database_27janw_k$ = function () {
    return this.database_1;
  };
  function get_js_1(_this__u8e3s4) {
    return _this__u8e3s4.nativeQuery_1.get_js_kntnvy_k$();
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
  function rethrow_0(function_0) {
    try {
      return function_0();
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
  function awaitWhileOnline$slambda$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).invoke_e0ttvm_k$ = function (value, $completion) {
    var tmp = this.create_wyq9v6_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_e0ttvm_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.$this$transform1__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value2__1 = this.value_1;
            var this_0 = this.value2__1;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              try {
                var value = get_js_0(this_0).val();
                var this_1 = new Builder_0();
                var decodeSettings = buildDecodeSettings(this_1);
                var this_2 = serializer(createKType(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), arrayOf([]), false));
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
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.$this$transform1__1.emit_t92u1f_k$(this.value2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$20__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    var i = new awaitWhileOnline$slambda$o$collect$slambda(this.$$this$unsafeFlow_1, completion);
    i.value_1 = value;
    return i;
  };
  function awaitWhileOnline$slambda$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new awaitWhileOnline$slambda$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_e0ttvm_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = awaitWhileOnline$slambda$o$collect$slambda_0(this.$this$unsafeFlow0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
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
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function _no_name_provided__qut3iv($this) {
    this.$this_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).collect_ooju95_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ooju95_k$(collector, $completion);
  };
  function awaitWhileOnline$slambda$slambda($notConnected, resultContinuation) {
    this.$notConnected_1 = $notConnected;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$slambda).invoke_ea8vn4_k$ = function (it, $completion) {
    var tmp = this.create_zam77m_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitWhileOnline$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ea8vn4_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var this_0 = this.it_1;
          this.$notConnected_1.cancel$default_880p35_k$();
          return this_0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$slambda).create_zam77m_k$ = function (it, completion) {
    var i = new awaitWhileOnline$slambda$slambda(this.$notConnected_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(awaitWhileOnline$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_zam77m_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), completion);
  };
  function awaitWhileOnline$slambda$slambda_0($notConnected, resultContinuation) {
    var i = new awaitWhileOnline$slambda$slambda($notConnected, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_ea8vn4_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitWhileOnline$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda$slambda_1).invoke_nf6u02_k$ = function (it, $completion) {
    var tmp = this.create_woov90_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nf6u02_k$(p1 instanceof DataSnapshot ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          throw new DatabaseException('Database not connected', null);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).create_woov90_k$ = function (it, completion) {
    var i = new awaitWhileOnline$slambda$slambda_1(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(awaitWhileOnline$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_woov90_k$(value instanceof DataSnapshot ? value : THROW_CCE(), completion);
  };
  function awaitWhileOnline$slambda$slambda_2(resultContinuation) {
    var i = new awaitWhileOnline$slambda$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_nf6u02_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitWhileOnline$slambda($database, $this_awaitWhileOnline, resultContinuation) {
    this.$database_1 = $database;
    this.$this_awaitWhileOnline_1 = $this_awaitWhileOnline;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitWhileOnline$slambda).invoke_x2i4op_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitWhileOnline$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_x2i4op_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitWhileOnline$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var this_0 = (new FirebaseDatabase(this.$database_1)).reference_8wmp8v_k$('.info/connected').get_valueEvents_g9q9vj_k$();
            tmp_0.notConnected0__1 = produceIn(new _no_name_provided__qut3iv(this_0), this.$this$coroutineScope_1);
            var tmp_1 = this;
            tmp_1.this1__1 = new SelectImplementation(this.get_context_h02k06_k$());
            var tmp_2 = this;
            tmp_2.$this$run2__1 = this.this1__1;
            var $this$select = this.$this$run2__1;
            var tmp_3 = asDeferred(this.$this_awaitWhileOnline_1).get_onAwait_l48qpe_k$();
            $this$select.invoke_8p69io_k$(tmp_3, awaitWhileOnline$slambda$slambda_0(this.notConnected0__1, null));
            var tmp_4 = this.notConnected0__1.get_onReceive_mimw11_k$();
            $this$select.invoke_8p69io_k$(tmp_4, awaitWhileOnline$slambda$slambda_2(null));
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$this$run2__1.doSelect_om1v0v_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitWhileOnline$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new awaitWhileOnline$slambda(this.$database_1, this.$this_awaitWhileOnline_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(awaitWhileOnline$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitWhileOnline$slambda_0($database, $this_awaitWhileOnline, resultContinuation) {
    var i = new awaitWhileOnline$slambda($database, $this_awaitWhileOnline, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_x2i4op_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DataSnapshot;
  _.$_$.b = get_database;
  _.$_$.c = get_js_0;
  _.$_$.d = DatabaseException_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-database.js.map
