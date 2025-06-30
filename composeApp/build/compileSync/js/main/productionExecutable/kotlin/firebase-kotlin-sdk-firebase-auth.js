(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/auth', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-app.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/auth'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-app.js'));
  else {
    if (typeof globalThis['firebase/auth'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-auth'. Its dependency 'firebase/auth' was not found. Please, check whether 'firebase/auth' is loaded prior to 'firebase-kotlin-sdk-firebase-auth'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-auth'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-auth'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'firebase-kotlin-sdk-firebase-auth'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-auth'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'firebase-kotlin-sdk-firebase-auth'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-auth'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-auth'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-auth'], globalThis['firebase/auth'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-app']);
  }
}(function (_, $module$firebase_auth_2je36k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_app) {
  'use strict';
  //region block: imports
  var createUserWithEmailAndPassword = $module$firebase_auth_2je36k.createUserWithEmailAndPassword;
  var sendPasswordResetEmail = $module$firebase_auth_2je36k.sendPasswordResetEmail;
  var signInWithEmailAndPassword = $module$firebase_auth_2je36k.signInWithEmailAndPassword;
  var signOut = $module$firebase_auth_2je36k.signOut;
  var getAuth = $module$firebase_auth_2je36k.getAuth;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var protoOf = kotlin_kotlin.$_$.ff;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.oe;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var VOID = kotlin_kotlin.$_$.j;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var Exception = kotlin_kotlin.$_$.dk;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var to = kotlin_kotlin.$_$.dm;
  var json = kotlin_kotlin.$_$.ue;
  var toString = kotlin_kotlin.$_$.jf;
  var FirebaseNetworkException = kotlin_dev_gitlive_firebase_app.$_$.b;
  var println = kotlin_kotlin.$_$.ad;
  var captureStack = kotlin_kotlin.$_$.fd;
  var FirebaseException = kotlin_dev_gitlive_firebase_app.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(FirebaseAuth$_get_authStateChanged_$slambda_447979, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($createUserWithEmailAndPasswordCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($sendPasswordResetEmailCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($signInWithEmailAndPasswordCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($signOutCOROUTINE$11, CoroutineImpl);
  initMetadataForClass(FirebaseAuth, 'FirebaseAuth', VOID, VOID, VOID, [1, 2, 0]);
  initMetadataForClass(AuthResult, 'AuthResult');
  initMetadataForClass(FirebaseAuthException, 'FirebaseAuthException', VOID, FirebaseException);
  initMetadataForClass(FirebaseAuthInvalidUserException, 'FirebaseAuthInvalidUserException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthRecentLoginRequiredException, 'FirebaseAuthRecentLoginRequiredException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthWebException, 'FirebaseAuthWebException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthInvalidCredentialsException, 'FirebaseAuthInvalidCredentialsException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthWeakPasswordException, 'FirebaseAuthWeakPasswordException', VOID, FirebaseAuthInvalidCredentialsException);
  initMetadataForClass(FirebaseAuthMultiFactorException, 'FirebaseAuthMultiFactorException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthUserCollisionException, 'FirebaseAuthUserCollisionException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthEmailException, 'FirebaseAuthEmailException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseUser, 'FirebaseUser', VOID, VOID, VOID, [0, 1, 2]);
  //endregion
  function FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8($this_callbackFlow) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.<get-authStateChanged>.<anonymous>.<anonymous>.<anonymous>' call
        tmp = new FirebaseUser(it);
      }
      $this_callbackFlow.a1o(tmp);
      return Unit_instance;
    };
  }
  function FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8_0($unsubscribe) {
    return function () {
      $unsubscribe();
      return Unit_instance;
    };
  }
  function FirebaseAuth$_get_authStateChanged_$slambda_447979(this$0, resultContinuation) {
    this.toi_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).woi = function ($this$callbackFlow, $completion) {
    var tmp = this.xoi($this$callbackFlow, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).ma = function (p1, $completion) {
    return this.woi((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            var tmp_0 = this;
            tmp_0.voi_1 = this.toi_1.yoi_1.onAuthStateChanged(FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8(this.uoi_1));
            this.s9_1 = 1;
            suspendResult = awaitClose(this.uoi_1, FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8_0(this.voi_1), this);
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
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).xoi = function ($this$callbackFlow, completion) {
    var i = new FirebaseAuth$_get_authStateChanged_$slambda_447979(this.toi_1, completion);
    i.uoi_1 = $this$callbackFlow;
    return i;
  };
  function FirebaseAuth$_get_authStateChanged_$slambda_447979_0(this$0, resultContinuation) {
    var i = new FirebaseAuth$_get_authStateChanged_$slambda_447979(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.woi($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $createUserWithEmailAndPasswordCOROUTINE$2(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hoj_1 = _this__u8e3s4;
    this.ioj_1 = email;
    this.joj_1 = password;
  }
  protoOf($createUserWithEmailAndPasswordCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.koj_1 = this.hoj_1;
            this.loj_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            var tmp_1 = this;
            tmp_1.moj_1 = this.koj_1;
            this.s9_1 = 2;
            suspendResult = await_0(createUserWithEmailAndPassword(this.moj_1.yoi_1, this.ioj_1, this.joj_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.loj_1 = new AuthResult(ARGUMENT);
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.loj_1;
          case 4:
            this.t9_1 = 5;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException$accessor$skzgst(e_0);
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
  function $sendPasswordResetEmailCOROUTINE$4(_this__u8e3s4, email, actionCodeSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.voj_1 = _this__u8e3s4;
    this.woj_1 = email;
    this.xoj_1 = actionCodeSettings;
  }
  protoOf($sendPasswordResetEmailCOROUTINE$4).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.yoj_1 = this.voj_1;
            this.zoj_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            var tmp_1 = this;
            tmp_1.aok_1 = this.yoj_1;
            this.s9_1 = 2;
            var tmp0_safe_receiver = this.xoj_1;
            suspendResult = await_0(sendPasswordResetEmail(this.aok_1.yoi_1, this.woj_1, tmp0_safe_receiver == null ? null : toJson(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.zoj_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.zoj_1;
          case 4:
            this.t9_1 = 5;
            var tmp_3 = this.v9_1;
            if (tmp_3 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException$accessor$skzgst(e_0);
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
  function $signInWithEmailAndPasswordCOROUTINE$6(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jok_1 = _this__u8e3s4;
    this.kok_1 = email;
    this.lok_1 = password;
  }
  protoOf($signInWithEmailAndPasswordCOROUTINE$6).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.mok_1 = this.jok_1;
            this.nok_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            var tmp_1 = this;
            tmp_1.ook_1 = this.mok_1;
            this.s9_1 = 2;
            suspendResult = await_0(signInWithEmailAndPassword(this.ook_1.yoi_1, this.kok_1, this.lok_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.nok_1 = new AuthResult(ARGUMENT);
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.nok_1;
          case 4:
            this.t9_1 = 5;
            var tmp_2 = this.v9_1;
            if (tmp_2 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException$accessor$skzgst(e_0);
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
  function $signOutCOROUTINE$11(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xok_1 = _this__u8e3s4;
  }
  protoOf($signOutCOROUTINE$11).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            var tmp_0 = this;
            tmp_0.yok_1 = this.xok_1;
            this.zok_1 = Unit_instance;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            var tmp_1 = this;
            tmp_1.aol_1 = this.yok_1;
            this.s9_1 = 2;
            suspendResult = await_0(signOut(this.aol_1.yoi_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.zok_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.zok_1;
          case 4:
            this.t9_1 = 5;
            var tmp_3 = this.v9_1;
            if (tmp_3 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException$accessor$skzgst(e_0);
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
  function FirebaseAuth(js) {
    this.yoi_1 = js;
  }
  protoOf(FirebaseAuth).bol = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.<get-currentUser>.<anonymous>' call
        var tmp0_safe_receiver = this.yoi_1.currentUser;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.<get-currentUser>.<anonymous>.<anonymous>' call
          tmp = new FirebaseUser(tmp0_safe_receiver);
        }
        tmp$ret$4 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw errorToException$accessor$skzgst(e_0);
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(FirebaseAuth).col = function () {
    return callbackFlow(FirebaseAuth$_get_authStateChanged_$slambda_447979_0(this, null));
  };
  protoOf(FirebaseAuth).dol = function (email, password, $completion) {
    var tmp = new $createUserWithEmailAndPasswordCOROUTINE$2(this, email, password, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FirebaseAuth).eol = function (email, actionCodeSettings, $completion) {
    var tmp = new $sendPasswordResetEmailCOROUTINE$4(this, email, actionCodeSettings, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FirebaseAuth).fol = function (email, actionCodeSettings, $completion, $super) {
    actionCodeSettings = actionCodeSettings === VOID ? null : actionCodeSettings;
    return $super === VOID ? this.eol(email, actionCodeSettings, $completion) : $super.eol.call(this, email, actionCodeSettings, $completion);
  };
  protoOf(FirebaseAuth).gol = function (email, password, $completion) {
    var tmp = new $signInWithEmailAndPasswordCOROUTINE$6(this, email, password, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(FirebaseAuth).hol = function ($completion) {
    var tmp = new $signOutCOROUTINE$11(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function get_auth(_this__u8e3s4) {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.<get-auth>.<anonymous>' call
        tmp$ret$2 = new FirebaseAuth(getAuth());
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw errorToException$accessor$skzgst(e_0);
        }
      }
    }
    return tmp$ret$2;
  }
  function AuthResult(js) {
    this.iol_1 = js;
  }
  protoOf(AuthResult).aj1 = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-user>.<anonymous>' call
        var tmp0_safe_receiver = this.iol_1.user;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-user>.<anonymous>.<anonymous>' call
          tmp = new FirebaseUser(tmp0_safe_receiver);
        }
        tmp$ret$4 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw errorToException$accessor$skzgst(e_0);
        }
      }
    }
    return tmp$ret$4;
  };
  function toJson(_this__u8e3s4) {
    var tmp = to('url', _this__u8e3s4.jol_1);
    var tmp0_safe_receiver = _this__u8e3s4.kol_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.auth.toJson.<anonymous>' call
      tmp_0 = json([to('installApp', tmp0_safe_receiver.pol_1), to('minimumVersion', tmp0_safe_receiver.qol_1), to('packageName', tmp0_safe_receiver.ool_1)]);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1 = to('android', tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = _this__u8e3s4.lol_1;
    var tmp_2 = to('dynamicLinkDomain', tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs);
    var tmp_3 = to('handleCodeInApp', _this__u8e3s4.mol_1);
    var tmp_4;
    if (_this__u8e3s4.nol_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.auth.toJson.<anonymous>' call
      tmp_4 = json([to('bundleId', _this__u8e3s4.nol_1)]);
    }
    var tmp4_elvis_lhs = tmp_4;
    return json([tmp, tmp_1, tmp_2, tmp_3, to('ios', tmp4_elvis_lhs == null ? undefined : tmp4_elvis_lhs)]);
  }
  function errorToException(cause) {
    var tmp0_safe_receiver = cause.code;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver.toLowerCase();
    }
    var code = tmp;
    var tmp_0;
    switch (code) {
      case 'auth/invalid-user-token':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthInvalidUserException(code, cause);
        break;
      case 'auth/requires-recent-login':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthRecentLoginRequiredException(code, cause);
        break;
      case 'auth/user-disabled':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthInvalidUserException(code, cause);
        break;
      case 'auth/user-token-expired':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthInvalidUserException(code, cause);
        break;
      case 'auth/web-storage-unsupported':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthWebException(code, cause);
        break;
      case 'auth/network-request-failed':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseNetworkException(code, cause);
        break;
      case 'auth/timeout':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseNetworkException(code, cause);
        break;
      case 'auth/weak-password':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthWeakPasswordException(code, cause);
        break;
      case 'auth/invalid-credential':
      case 'auth/invalid-verification-code':
      case 'auth/missing-verification-code':
      case 'auth/invalid-verification-id':
      case 'auth/missing-verification-id':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthInvalidCredentialsException(code, cause);
        break;
      case 'auth/maximum-second-factor-count-exceeded':
      case 'auth/second-factor-already-in-use':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthMultiFactorException(code, cause);
        break;
      case 'auth/credential-already-in-use':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthUserCollisionException(code, cause);
        break;
      case 'auth/email-already-in-use':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthUserCollisionException(code, cause);
        break;
      case 'auth/invalid-email':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthEmailException(code, cause);
        break;
      default:
        println('Unknown error code in ' + JSON.stringify(cause));
        // Inline function 'kotlin.js.unsafeCast' call

        tmp_0 = new FirebaseAuthException(code, cause);
        break;
    }
    return tmp_0;
  }
  function FirebaseAuthInvalidUserException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthInvalidUserException);
  }
  function FirebaseAuthRecentLoginRequiredException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthRecentLoginRequiredException);
  }
  function FirebaseAuthWebException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthWebException);
  }
  function FirebaseAuthWeakPasswordException(code, cause) {
    FirebaseAuthInvalidCredentialsException.call(this, code, cause);
    captureStack(this, FirebaseAuthWeakPasswordException);
  }
  function FirebaseAuthInvalidCredentialsException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthInvalidCredentialsException);
  }
  function FirebaseAuthMultiFactorException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthMultiFactorException);
  }
  function FirebaseAuthUserCollisionException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthUserCollisionException);
  }
  function FirebaseAuthEmailException(code, cause) {
    FirebaseAuthException.call(this, code, cause);
    captureStack(this, FirebaseAuthEmailException);
  }
  function FirebaseAuthException(code, cause) {
    FirebaseException.call(this, code, cause);
    captureStack(this, FirebaseAuthException);
  }
  function errorToException$accessor$skzgst(cause) {
    return errorToException(cause);
  }
  function FirebaseUser(js) {
    this.rol_1 = js;
  }
  protoOf(FirebaseUser).sol = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-email>.<anonymous>' call
        tmp$ret$2 = this.rol_1.email;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw errorToException$accessor$skzgst(e_0);
        }
      }
    }
    return tmp$ret$2;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FirebaseAuth;
  _.$_$.b = get_auth;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-auth.js.map
