(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './projects-core-koin-core.js', './BreakingKMPApp-module_auth-data_auth.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./projects-core-koin-core.js'), require('./BreakingKMPApp-module_auth-data_auth.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-domain_auth'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'BreakingKMPApp-module_auth-domain_auth'.");
    }
    if (typeof globalThis['projects-core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-domain_auth'. Its dependency 'projects-core-koin-core' was not found. Please, check whether 'projects-core-koin-core' is loaded prior to 'BreakingKMPApp-module_auth-domain_auth'.");
    }
    if (typeof globalThis['BreakingKMPApp-module_auth-data_auth'] === 'undefined') {
      throw new Error("Error loading module 'BreakingKMPApp-module_auth-domain_auth'. Its dependency 'BreakingKMPApp-module_auth-data_auth' was not found. Please, check whether 'BreakingKMPApp-module_auth-data_auth' is loaded prior to 'BreakingKMPApp-module_auth-domain_auth'.");
    }
    globalThis['BreakingKMPApp-module_auth-domain_auth'] = factory(typeof globalThis['BreakingKMPApp-module_auth-domain_auth'] === 'undefined' ? {} : globalThis['BreakingKMPApp-module_auth-domain_auth'], globalThis['kotlin-kotlin-stdlib'], globalThis['projects-core-koin-core'], globalThis['BreakingKMPApp-module_auth-data_auth']);
  }
}(function (_, kotlin_kotlin, kotlin_io_insert_koin_koin_core, kotlin_BreakingKMPApp_module_auth_data_auth) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var toString = kotlin_kotlin.$_$.jf;
  var protoOf = kotlin_kotlin.$_$.ff;
  var hashCode = kotlin_kotlin.$_$.xd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.od;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.o8;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var AuthRepository = kotlin_BreakingKMPApp_module_auth_data_auth.$_$.b;
  var VOID = kotlin_kotlin.$_$.j;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var Result = kotlin_kotlin.$_$.nk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AuthUseCase, 'AuthUseCase');
  initMetadataForClass(Auth, 'Auth', VOID, VOID, VOID, [2, 0, 1]);
  //endregion
  function AuthUseCase(logIn, logOut, signIn, resetPassword) {
    this.gon_1 = logIn;
    this.hon_1 = logOut;
    this.ion_1 = signIn;
    this.jon_1 = resetPassword;
  }
  protoOf(AuthUseCase).toString = function () {
    return 'AuthUseCase(logIn=' + toString(this.gon_1) + ', logOut=' + toString(this.hon_1) + ', signIn=' + toString(this.ion_1) + ', resetPassword=' + toString(this.jon_1) + ')';
  };
  protoOf(AuthUseCase).hashCode = function () {
    var result = hashCode(this.gon_1);
    result = imul(result, 31) + hashCode(this.hon_1) | 0;
    result = imul(result, 31) + hashCode(this.ion_1) | 0;
    result = imul(result, 31) + hashCode(this.jon_1) | 0;
    return result;
  };
  protoOf(AuthUseCase).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AuthUseCase))
      return false;
    var tmp0_other_with_cast = other instanceof AuthUseCase ? other : THROW_CCE();
    if (!equals(this.gon_1, tmp0_other_with_cast.gon_1))
      return false;
    if (!equals(this.hon_1, tmp0_other_with_cast.hon_1))
      return false;
    if (!equals(this.ion_1, tmp0_other_with_cast.ion_1))
      return false;
    if (!equals(this.jon_1, tmp0_other_with_cast.jon_1))
      return false;
    return true;
  };
  function get_authDomainModule() {
    _init_properties_authDomainDi_kt__kr38i7();
    return authDomainModule;
  }
  var authDomainModule;
  function authDomainModule$lambda($this$module) {
    _init_properties_authDomainDi_kt__kr38i7();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = authDomainModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance().zr_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(AuthUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.ft(factory);
    if (false || $this$module.ys_1) {
      $this$module.it(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function authDomainModule$lambda$lambda($this$single, it) {
    _init_properties_authDomainDi_kt__kr38i7();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.gu(getKClass(AuthRepository), null, null);
    var tmp = new Auth(tmp$ret$0);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$single.gu(getKClass(AuthRepository), null, null);
    var tmp_0 = new Auth(tmp$ret$1);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$2 = $this$single.gu(getKClass(AuthRepository), null, null);
    var tmp_1 = new Auth(tmp$ret$2);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$3 = $this$single.gu(getKClass(AuthRepository), null, null);
    return new AuthUseCase(tmp, tmp_0, tmp_1, new Auth(tmp$ret$3));
  }
  var properties_initialized_authDomainDi_kt_m9csj7;
  function _init_properties_authDomainDi_kt__kr38i7() {
    if (!properties_initialized_authDomainDi_kt_m9csj7) {
      properties_initialized_authDomainDi_kt_m9csj7 = true;
      authDomainModule = module_0(VOID, authDomainModule$lambda);
    }
  }
  function Auth(repository) {
    this.kon_1 = repository;
  }
  protoOf(Auth).lon = function (email, password, $completion) {
    var tmp = this.kon_1.tol(email, password, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Auth).mon = function ($completion) {
    return this.kon_1.hol($completion);
  };
  protoOf(Auth).uol = function (email, password, $completion) {
    var tmp = this.kon_1.uol(email, password, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Auth).non = function (email, $completion) {
    var tmp = this.kon_1.vol(email, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_authDomainModule;
  _.$_$.b = Auth;
  _.$_$.c = AuthUseCase;
  //endregion
  return _;
}));

//# sourceMappingURL=BreakingKMPApp-module_auth-domain_auth.js.map
