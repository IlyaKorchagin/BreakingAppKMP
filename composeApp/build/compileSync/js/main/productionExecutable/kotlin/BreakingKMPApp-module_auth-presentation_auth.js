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
  var emptyList = kotlin_kotlin.$_$.o8;
  var FirebaseAuth = kotlin_dev_gitlive_firebase_auth.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var Kind_Factory_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var AuthUseCase = kotlin_BreakingKMPApp_module_auth_domain_auth.$_$.c;
  var FactoryInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.h;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var get_auth = kotlin_dev_gitlive_firebase_auth.$_$.b;
  var Auth = kotlin_BreakingKMPApp_module_auth_domain_auth.$_$.b;
  var MainUseCase = kotlin_BreakingKMPApp_module_main_domain_main.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var Result = kotlin_kotlin.$_$.nk;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.x3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.c2;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var get_viewModelScope = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
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
    var scopeQualifier = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(FirebaseAuth), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.ft(factory);
    if (false || $this$module.ys_1) {
      $this$module.it(factory);
    }
    new KoinDefinition($this$module, factory);
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_0 = authPresentationModule$lambda$lambda_0;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_0 = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Factory_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(AuthUseCase), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new FactoryInstanceFactory(def_0);
    $this$module.ft(factory_0);
    new KoinDefinition($this$module, factory_0);
    // Inline function 'org.koin.compose.viewmodel.dsl.viewModel' call
    // Inline function 'org.koin.core.module.Module.factory' call
    // Inline function 'org.koin.core.module.Module.factory' call
    var definition_1 = authPresentationModule$lambda$lambda_1;
    // Inline function 'org.koin.core.module._factoryInstanceFactory' call
    var scopeQualifier_1 = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_1 = Kind_Factory_getInstance();
    var secondaryTypes_1 = emptyList();
    var def_1 = new BeanDefinition(scopeQualifier_1, getKClass(AuthViewModel), null, definition_1, kind_1, secondaryTypes_1);
    var factory_1 = new FactoryInstanceFactory(def_1);
    $this$module.ft(factory_1);
    new KoinDefinition($this$module, factory_1);
    return Unit_instance;
  }
  function authPresentationModule$lambda$lambda($this$single, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    return get_auth(Firebase_instance);
  }
  function authPresentationModule$lambda$lambda_0($this$factory, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp = $this$factory.gu(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_0 = $this$factory.gu(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_1 = $this$factory.gu(getKClass(Auth), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$3 = $this$factory.gu(getKClass(Auth), null, null);
    return new AuthUseCase(tmp, tmp_0, tmp_1, tmp$ret$3);
  }
  function authPresentationModule$lambda$lambda_1($this$viewModel, it) {
    _init_properties_authPresentationDi_kt__v969q1();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp = $this$viewModel.gu(getKClass(AuthUseCase), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp_0 = $this$viewModel.gu(getKClass(MainUseCase), null, null);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$2 = $this$viewModel.gu(getKClass(FirebaseAuth), null, null);
    return new AuthViewModel(tmp, tmp_0, tmp$ret$2);
  }
  var properties_initialized_authPresentationDi_kt_qp6c3b;
  function _init_properties_authPresentationDi_kt__v969q1() {
    if (!properties_initialized_authPresentationDi_kt_qp6c3b) {
      properties_initialized_authPresentationDi_kt_qp6c3b = true;
      authPresentationModule = module_0(VOID, authPresentationModule$lambda);
    }
  }
  function $logInCOROUTINE$0(_this__u8e3s4, email, password, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.won_1 = _this__u8e3s4;
    this.xon_1 = email;
    this.yon_1 = password;
    this.zon_1 = onSuccess;
    this.aoo_1 = onError;
  }
  protoOf($logInCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = this.won_1.coo_1.gon_1.lon(this.xon_1, this.yon_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.s9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.pn_1;
            suspendResult = new Result(unboxed);
            this.s9_1 = 2;
            continue $sm;
          case 2:
            var result = suspendResult.pn_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              this.zon_1();
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(result);
              this.aoo_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
            }

            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $signInCOROUTINE$1(_this__u8e3s4, email, password, name, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ooo_1 = _this__u8e3s4;
    this.poo_1 = email;
    this.qoo_1 = password;
    this.roo_1 = name;
    this.soo_1 = onSuccess;
    this.too_1 = onError;
  }
  protoOf($signInCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            suspendResult = this.ooo_1.coo_1.ion_1.uol(this.poo_1, this.qoo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.s9_1 = 2;
            continue $sm;
          case 1:
            this.uoo_1 = suspendResult.pn_1;
            suspendResult = new Result(this.uoo_1);
            this.s9_1 = 2;
            continue $sm;
          case 2:
            this.voo_1 = suspendResult.pn_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.voo_1)) {
              this.soo_1();
              this.s9_1 = 3;
              suspendResult = this.ooo_1.doo_1.lnv_1.lnm(this.poo_1, this.roo_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(this.voo_1);
              this.too_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
              this.s9_1 = 4;
              continue $sm;
            }

          case 3:
            this.s9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $sendResetEmailCOROUTINE$2(_this__u8e3s4, email, onSuccess, onError, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eop_1 = _this__u8e3s4;
    this.fop_1 = email;
    this.gop_1 = onSuccess;
    this.hop_1 = onError;
  }
  protoOf($sendResetEmailCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.s9_1 = 1;
            suspendResult = this.eop_1.coo_1.jon_1.non(this.fop_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.s9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.pn_1;
            suspendResult = new Result(unboxed);
            this.s9_1 = 2;
            continue $sm;
          case 2:
            var result = suspendResult.pn_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              this.gop_1();
            } else {
              var tmp0_elvis_lhs = Result__exceptionOrNull_impl_p6xea9(result);
              this.hop_1(tmp0_elvis_lhs == null ? Exception_init_$Create$('Unknown error') : tmp0_elvis_lhs);
            }

            return Unit_instance;
          case 3:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 3) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function AuthViewModel(authUseCase, mainUseCase, auth) {
    ViewModel_init_$Init$(this);
    this.coo_1 = authUseCase;
    this.doo_1 = mainUseCase;
    this.eoo_1 = stateIn(auth.col(), get_viewModelScope(this), Companion_getInstance_0().x1v_1, auth.bol());
    this.foo_1 = this.eoo_1;
  }
  protoOf(AuthViewModel).iop = function (email, password, onSuccess, onError, $completion) {
    var tmp = new $logInCOROUTINE$0(this, email, password, onSuccess, onError, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AuthViewModel).mon = function ($completion) {
    return this.coo_1.hon_1.mon($completion);
  };
  protoOf(AuthViewModel).jop = function (email, password, name, onSuccess, onError, $completion) {
    var tmp = new $signInCOROUTINE$1(this, email, password, name, onSuccess, onError, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(AuthViewModel).kop = function (email, onSuccess, onError, $completion) {
    var tmp = new $sendResetEmailCOROUTINE$2(this, email, onSuccess, onError, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_authPresentationModule;
  _.$_$.b = AuthViewModel;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_auth-presentation_auth.js.map
