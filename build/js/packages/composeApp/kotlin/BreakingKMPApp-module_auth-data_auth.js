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
  var emptyList = kotlin_kotlin.$_$.o8;
  var FirebaseAuth = kotlin_dev_gitlive_firebase_auth.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var bind = kotlin_io_insert_koin_koin_core.$_$.l;
  var Firebase_instance = kotlin_dev_gitlive_firebase_app.$_$.e;
  var get_auth = kotlin_dev_gitlive_firebase_auth.$_$.b;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var Companion_instance = kotlin_kotlin.$_$.b6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.il;
  var Exception = kotlin_kotlin.$_$.dk;
  var Result = kotlin_kotlin.$_$.nk;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
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
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition_0 = authDataRepositoryModule$lambda$lambda_0;
    var scopeQualifier_0 = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind_0 = Kind_Singleton_getInstance();
    var secondaryTypes_0 = emptyList();
    var def_0 = new BeanDefinition(scopeQualifier_0, getKClass(AuthRepositoryImpl), null, definition_0, kind_0, secondaryTypes_0);
    var factory_0 = new SingleInstanceFactory(def_0);
    $this$module.ft(factory_0);
    if (false || $this$module.ys_1) {
      $this$module.it(factory_0);
    }
    var tmp$ret$5 = new KoinDefinition($this$module, factory_0);
    bind(tmp$ret$5, getKClass(AuthRepository));
    return Unit_instance;
  }
  function authDataRepositoryModule$lambda$lambda($this$single, it) {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    return get_auth(Firebase_instance);
  }
  function authDataRepositoryModule$lambda$lambda_0($this$single, it) {
    _init_properties_AuthDataKoinModule_kt__dymywp();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.gu(getKClass(FirebaseAuth), null, null);
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
  function $loginUserCOROUTINE$0(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eom_1 = _this__u8e3s4;
    this.fom_1 = email;
    this.gom_1 = password;
  }
  protoOf($loginUserCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.eom_1.iom_1.gol(this.fom_1, this.gom_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            ARGUMENT.aj1();
            var tmp_0 = this;
            tmp_0.hom_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Exception) {
              var e = this.v9_1;
              var tmp_2 = this;
              tmp_2.hom_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return new Result(this.hom_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $signInCOROUTINE$1(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rom_1 = _this__u8e3s4;
    this.som_1 = email;
    this.tom_1 = password;
  }
  protoOf($signInCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.rom_1.iom_1.dol(this.som_1, this.tom_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            ARGUMENT.aj1();
            var tmp_0 = this;
            tmp_0.uom_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Exception) {
              var e = this.v9_1;
              var tmp_2 = this;
              tmp_2.uom_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return new Result(this.uom_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function $sendPasswordResetEmailCOROUTINE$2(_this__u8e3s4, email, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.don_1 = _this__u8e3s4;
    this.eon_1 = email;
  }
  protoOf($sendPasswordResetEmailCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 3;
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.don_1.iom_1.fol(this.eon_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.fon_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.t9_1 = 3;
            this.s9_1 = 4;
            continue $sm;
          case 2:
            this.t9_1 = 3;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Exception) {
              var e = this.v9_1;
              var tmp_2 = this;
              tmp_2.fon_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.s9_1 = 4;
              continue $sm;
            } else {
              throw this.v9_1;
            }

          case 3:
            throw this.v9_1;
          case 4:
            this.t9_1 = 3;
            return new Result(this.fon_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.t9_1 === 3) {
          throw e_0;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_0;
        }
      }
     while (true);
  };
  function AuthRepositoryImpl(auth) {
    this.iom_1 = auth;
  }
  protoOf(AuthRepositoryImpl).tol = function (email, password, $completion) {
    var tmp = new $loginUserCOROUTINE$0(this, email, password, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    var tmp_0 = tmp.aa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AuthRepositoryImpl).uol = function (email, password, $completion) {
    var tmp = new $signInCOROUTINE$1(this, email, password, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    var tmp_0 = tmp.aa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AuthRepositoryImpl).hol = function ($completion) {
    return this.iom_1.hol($completion);
  };
  protoOf(AuthRepositoryImpl).vol = function (email, $completion) {
    var tmp = new $sendPasswordResetEmailCOROUTINE$2(this, email, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    var tmp_0 = tmp.aa();
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
