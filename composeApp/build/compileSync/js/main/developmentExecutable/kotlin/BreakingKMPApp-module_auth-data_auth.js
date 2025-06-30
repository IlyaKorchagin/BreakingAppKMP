(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './firebase-kotlin-sdk-firebase-auth.js', './firebase-kotlin-sdk-firebase-app.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./firebase-kotlin-sdk-firebase-auth.js'), require('./firebase-kotlin-sdk-firebase-app.js'));
  else {
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-data_auth'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_auth-data_auth'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-data_auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_auth-data_auth'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-data_auth'. Its dependency 'firebase-kotlin-sdk-firebase-auth' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-auth' is loaded prior to 'BreakingKMPApp-module_auth-data_auth'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-data_auth'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'BreakingKMPApp-module_auth-data_auth'.");
    }
    globalThis['BreakingKMPApp-module_auth-data_auth'] = factory(typeof globalThis['BreakingKMPApp-module_auth-data_auth'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_auth-data_auth'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['firebase-kotlin-sdk-firebase-auth'], globalThis['firebase-kotlin-sdk-firebase-app']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_dev_gitlive_firebase_auth, kotlin_dev_gitlive_firebase_app) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.ea;
  var FirebaseAuth = kotlin_dev_gitlive_firebase_auth.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var bind = kotlin_io_insert_koin_koin_core.$_$.l;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var Firebase_getInstance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var get_auth = kotlin_dev_gitlive_firebase_auth.$_$.b;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.o6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j4;
  var createFailure = kotlin_kotlin.$_$.ip;
  var Exception = kotlin_kotlin.$_$.bo;
  var Result = kotlin_kotlin.$_$.lo;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(AuthRepository, 'AuthRepository', VOID, VOID, VOID, [2, 0, 1]);
  initMetadataForCoroutine($loginUserCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($signInCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($sendPasswordResetEmailCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(AuthRepositoryImpl, 'AuthRepositoryImpl', VOID, VOID, [AuthRepository], [2, 0, 1]);
  //endregion
  function get_authDataRepositoryModule() {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    return authDataRepositoryModule;
  }
  var authDataRepositoryModule;
  function authDataRepositoryModule$lambda($this$module) {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = authDataRepositoryModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(FirebaseAuth), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = authDataRepositoryModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(AuthRepositoryImpl), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_0);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory_0);
    }
    var tmp$ret$5 = new KoinDefinition($this$module, factory_0);
    bind(tmp$ret$5, getKClass(AuthRepository));
    return Unit_getInstance();
  }
  function authDataRepositoryModule$lambda$lambda($this$single, it) {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    return get_auth(Firebase_getInstance());
  }
  function authDataRepositoryModule$lambda$lambda_0($this$single, it) {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(FirebaseAuth), null, null);
    return new AuthRepositoryImpl(tmp$ret$0);
  }
  var properties_initialized_AuthDataKoinModule_kt_9ejirt;
  function _init_properties_AuthDataKoinModule_kt__dymywp() {
    if (!properties_initialized_AuthDataKoinModule_kt_9ejirt) {
      properties_initialized_AuthDataKoinModule_kt_9ejirt = true;
      authDataRepositoryModule = module_0(VOID, authDataRepositoryModule$lambda);
    }
  }
  function AuthRepository() {
  }
  function _get_auth__d3zq1v($this) {
    return $this.auth_1;
  }
  function $loginUserCOROUTINE$0(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
  }
  protoOf($loginUserCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.auth_1.signInWithEmailAndPassword_q2ahrm_k$(this.email_1, this.password_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            ARGUMENT.get_user_wovspg_k$();
            var tmp_0 = this;
            Companion_getInstance_0();
            tmp_0.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              Companion_getInstance_0();
              tmp_2.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return new Result(this.TRY_RESULT0__1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $signInCOROUTINE$1(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
  }
  protoOf($signInCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.auth_1.createUserWithEmailAndPassword_vs43mf_k$(this.email_1, this.password_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            ARGUMENT.get_user_wovspg_k$();
            var tmp_0 = this;
            Companion_getInstance_0();
            tmp_0.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              Companion_getInstance_0();
              tmp_2.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return new Result(this.TRY_RESULT0__1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $sendPasswordResetEmailCOROUTINE$2(_this__u8e3s4, email, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
  }
  protoOf($sendPasswordResetEmailCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.auth_1.sendPasswordResetEmail$default_ndplmq_k$(this.email_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            Companion_getInstance_0();
            tmp_0.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              Companion_getInstance_0();
              tmp_2.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return new Result(this.TRY_RESULT0__1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function AuthRepositoryImpl(auth) {
    this.auth_1 = auth;
  }
  protoOf(AuthRepositoryImpl).loginUser_y2d21i_k$ = function (email, password, $completion) {
    var tmp = new $loginUserCOROUTINE$0(this, email, password, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AuthRepositoryImpl).signIn_uzowos_k$ = function (email, password, $completion) {
    var tmp = new $signInCOROUTINE$1(this, email, password, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AuthRepositoryImpl).signOut_t9fplm_k$ = function ($completion) {
    return this.auth_1.signOut_t9fplm_k$($completion);
  };
  protoOf(AuthRepositoryImpl).sendPasswordResetEmail_izao5o_k$ = function (email, $completion) {
    var tmp = new $sendPasswordResetEmailCOROUTINE$2(this, email, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    var tmp_0 = tmp.doResume_5yljmg_k$();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_authDataRepositoryModule;
  _.$_$.b = AuthRepository;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_auth-data_auth.js.map
