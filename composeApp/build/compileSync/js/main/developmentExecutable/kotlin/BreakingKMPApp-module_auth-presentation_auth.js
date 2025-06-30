(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './projects-core-koin-core.js', './kotlin-kotlin-stdlib.js', './firebase-kotlin-sdk-firebase-auth.js', './BreakingKMPApp-module_auth-domain_auth.js', './firebase-kotlin-sdk-firebase-app.js', './BreakingKMPApp-module_main-domain_main.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./projects-core-koin-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./firebase-kotlin-sdk-firebase-auth.js'), require('./BreakingKMPApp-module_auth-domain_auth.js'), require('./firebase-kotlin-sdk-firebase-app.js'), require('./BreakingKMPApp-module_main-domain_main.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'firebase-kotlin-sdk-firebase-auth' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-auth' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-domain_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'BreakingKMPApp-module_auth-domain_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-domain_auth' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_main-domain_main'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'BreakingKMPApp-module_main-domain_main' was not found. Please, check whether 'BreakingKMPApp-module_main-domain_main' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-presentation_auth'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BreakingKMPApp-module_auth-presentation_auth'.");
    }
    globalThis['BreakingKMPApp-module_auth-presentation_auth'] = factory(typeof globalThis['BreakingKMPApp-module_auth-presentation_auth'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_auth-presentation_auth'], globalThis['projects-core-koin-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['firebase-kotlin-sdk-firebase-auth'], globalThis['BreakingKMPApp-module_auth-domain_auth'], globalThis['firebase-kotlin-sdk-firebase-app'], globalThis['BreakingKMPApp-module_main-domain_main'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_io_insert_koin_koin_core, kotlin_kotlin, kotlin_dev_gitlive_firebase_auth, kotlin_BreakingKMPApp_module_auth_domain_auth, kotlin_dev_gitlive_firebase_app, kotlin_BreakingKMPApp_module_main_domain_main, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
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
  var Kind_Factory_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var AuthUseCase = kotlin_BreakingKMPApp_module_auth_domain_auth.$_$.c;
  var FactoryInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.h;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var Firebase_getInstance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var get_auth = kotlin_dev_gitlive_firebase_auth.$_$.b;
  var Auth = kotlin_BreakingKMPApp_module_auth_domain_auth.$_$.b;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var Result = kotlin_kotlin.$_$.lo;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.k4;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g2;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.m4;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.k;
  var get_viewModelScope = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  //endregion
  //region block: pre-declaration
  initMetadataForCoroutine($logInCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($signInCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($sendResetEmailCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(AuthViewModel, 'AuthViewModel', VOID, ViewModel, VOID, [4, 0, 5, 3]);
  //endregion
  function get_authPresentationModule() {
    _init_properties_authPresentationDi_kt__v969q1();
    return authPresentationModule;
  }
  var authPresentationModule;
  function authPresentationModule$lambda($this$module) {
    _init_properties_authPresentationDi_kt__v969q1();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = authPresentationModule$lambda$lambda;
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
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_0 = authPresentationModule$lambda$lambda_0;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_0 = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Factory_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(AuthUseCase), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new FactoryInstanceFactory(def_0);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_0);
    new KoinDefinition($this$module, factory_0);
    // Inline function 'org.koin.compose.viewmodel.dsl.viewModel' call
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_1 = authPresentationModule$lambda$lambda_1;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_1 = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_1 = Kind_Factory_getInstance();
    var secondaryTypes_1 = emptyList();
    var def_1 = new BeanDefinition(scopeQualifier_1, getKClass(AuthViewModel), null, definition_1, kind_1, secondaryTypes_1);
    var factory_1 = new FactoryInstanceFactory(def_1);
    $this$module.indexPrimaryType_bfm8x4_k$(factory_1);
    new KoinDefinition($this$module, factory_1);
    return Unit_getInstance();
  }
  function authPresentationModule$lambda$lambda($this$single, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    return get_auth(Firebase_getInstance());
  }
  function authPresentationModule$lambda$lambda_0($this$factory, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp = $this$factory.get_80ko8d_k$(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_0 = $this$factory.get_80ko8d_k$(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_1 = $this$factory.get_80ko8d_k$(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$3 = $this$factory.get_80ko8d_k$(getKClass(Auth), null, null);
    return new AuthUseCase(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function authPresentationModule$lambda$lambda_1($this$viewModel, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp = $this$viewModel.get_80ko8d_k$(getKClass(AuthUseCase), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_0 = $this$viewModel.get_80ko8d_k$(getKClass(MainUseCase), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$2 = $this$viewModel.get_80ko8d_k$(getKClass(FirebaseAuth), null, null);
    return new AuthViewModel(tmp, tmp_0, tmp$ret$2);
  }
  var properties_initialized_authPresentationDi_kt_qp6c3b;
  function _init_properties_authPresentationDi_kt__v969q1() {
    if (!properties_initialized_authPresentationDi_kt_qp6c3b) {
      properties_initialized_authPresentationDi_kt_qp6c3b = true;
      authPresentationModule = module_0(VOID, authPresentationModule$lambda);
    }
  }
  function _get_authUseCase__fiiwv6($this) {
    return $this.authUseCase_1;
  }
  function _get_mainUseCase__5bjlsd($this) {
    return $this.mainUseCase_1;
  }
  function _get__authState__js7url($this) {
    return $this._authState_1;
  }
  function $logInCOROUTINE$0(_this__u8e3s4, email, password, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($logInCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.authUseCase_1.get_logIn_ius9k0_k$().logIn_ab6h1n_k$(this.email_1, this.password_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.value_1;
            suspendResult = new Result(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var result = suspendResult.value_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              this.onSuccess_1();
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(result);
              this.onError_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $signInCOROUTINE$1(_this__u8e3s4, email, password, name, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
    this.name_1 = name;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($signInCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.authUseCase_1.get_signIn_jhh497_k$().signIn_uzowos_k$(this.email_1, this.password_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            this.unboxed0__1 = suspendResult.value_1;
            suspendResult = new Result(this.unboxed0__1);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.result1__1 = suspendResult.value_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.result1__1)) {
              this.onSuccess_1();
              this.set_state_rjd8d0_k$(3);
              suspendResult = this._this__u8e3s4__1.mainUseCase_1.get_createNewPupil_4xjgz_k$().createNewPupil_w26sp9_k$(this.email_1, this.name_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(this.result1__1);
              this.onError_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $sendResetEmailCOROUTINE$2(_this__u8e3s4, email, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.onSuccess_1 = onSuccess;
    this.onError_1 = onError;
  }
  protoOf($sendResetEmailCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.authUseCase_1.get_resetPassword_1ma4nz_k$().resetPassword_x6mrea_k$(this.email_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.value_1;
            suspendResult = new Result(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var result = suspendResult.value_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              this.onSuccess_1();
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(result);
              this.onError_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function AuthViewModel(authUseCase, mainUseCase, auth) {
    ViewModel_init_$Init$(this);
    this.authUseCase_1 = authUseCase;
    this.mainUseCase_1 = mainUseCase;
    this._authState_1 = stateIn(auth.get_authStateChanged_qc3kvo_k$(), get_viewModelScope(this), Companion_getInstance_0().get_Eagerly_3vw7yc_k$(), auth.get_currentUser_nu6naz_k$());
    this.authState_1 = this._authState_1;
  }
  protoOf(AuthViewModel).get_authState_whp4ww_k$ = function () {
    return this.authState_1;
  };
  protoOf(AuthViewModel).logIn_pcqhpg_k$ = function (email, password, onSuccess, onError, $completion) {
    var tmp = new $logInCOROUTINE$0(this, email, password, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AuthViewModel).logOut_6dkxw3_k$ = function ($completion) {
    return this.authUseCase_1.get_logOut_g9fx4j_k$().logOut_6dkxw3_k$($completion);
  };
  protoOf(AuthViewModel).signIn_bu903_k$ = function (email, password, name, onSuccess, onError, $completion) {
    var tmp = new $signInCOROUTINE$1(this, email, password, name, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AuthViewModel).sendResetEmail_3rxf40_k$ = function (email, onSuccess, onError, $completion) {
    var tmp = new $sendResetEmailCOROUTINE$2(this, email, onSuccess, onError, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_authPresentationModule;
  _.$_$.b = AuthViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_auth-presentation_auth.js.map
