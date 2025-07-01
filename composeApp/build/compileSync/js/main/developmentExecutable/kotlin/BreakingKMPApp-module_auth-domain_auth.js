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
  var protoOf = kotlin_kotlin.$_$.ki;
  var VOID = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.oi;
  var hashCode = kotlin_kotlin.$_$.bh;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var Companion_getInstance = kotlin_io_insert_koin_koin_core.$_$.c;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.b;
  var emptyList = kotlin_kotlin.$_$.ea;
  var getKClass = kotlin_kotlin.$_$.g;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.i;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var AuthRepository = kotlin_BreakingKMPApp_module_auth_data_auth.$_$.b;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var Result = kotlin_kotlin.$_$.lo;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AuthUseCase, 'AuthUseCase');
  initMetadataForClass(Auth, 'Auth', VOID, VOID, VOID, [2, 0, 1]);
  //endregion
  function AuthUseCase(logIn, logOut, signIn, resetPassword) {
    this.logIn_1 = logIn;
    this.logOut_1 = logOut;
    this.signIn_1 = signIn;
    this.resetPassword_1 = resetPassword;
  }
  protoOf(AuthUseCase).get_logIn_ius9k0_k$ = function () {
    return this.logIn_1;
  };
  protoOf(AuthUseCase).get_logOut_g9fx4j_k$ = function () {
    return this.logOut_1;
  };
  protoOf(AuthUseCase).get_signIn_jhh497_k$ = function () {
    return this.signIn_1;
  };
  protoOf(AuthUseCase).get_resetPassword_1ma4nz_k$ = function () {
    return this.resetPassword_1;
  };
  protoOf(AuthUseCase).component1_7eebsc_k$ = function () {
    return this.logIn_1;
  };
  protoOf(AuthUseCase).component2_7eebsb_k$ = function () {
    return this.logOut_1;
  };
  protoOf(AuthUseCase).component3_7eebsa_k$ = function () {
    return this.signIn_1;
  };
  protoOf(AuthUseCase).component4_7eebs9_k$ = function () {
    return this.resetPassword_1;
  };
  protoOf(AuthUseCase).copy_1pxacn_k$ = function (logIn, logOut, signIn, resetPassword) {
    return new AuthUseCase(logIn, logOut, signIn, resetPassword);
  };
  protoOf(AuthUseCase).copy$default_i55tn_k$ = function (logIn, logOut, signIn, resetPassword, $super) {
    logIn = logIn === VOID ? this.logIn_1 : logIn;
    logOut = logOut === VOID ? this.logOut_1 : logOut;
    signIn = signIn === VOID ? this.signIn_1 : signIn;
    resetPassword = resetPassword === VOID ? this.resetPassword_1 : resetPassword;
    return $super === VOID ? this.copy_1pxacn_k$(logIn, logOut, signIn, resetPassword) : $super.copy_1pxacn_k$.call(this, logIn, logOut, signIn, resetPassword);
  };
  protoOf(AuthUseCase).toString = function () {
    return 'AuthUseCase(logIn=' + toString(this.logIn_1) + ', logOut=' + toString(this.logOut_1) + ', signIn=' + toString(this.signIn_1) + ', resetPassword=' + toString(this.resetPassword_1) + ')';
  };
  protoOf(AuthUseCase).hashCode = function () {
    var result = hashCode(this.logIn_1);
    result = imul(result, 31) + hashCode(this.logOut_1) | 0;
    result = imul(result, 31) + hashCode(this.signIn_1) | 0;
    result = imul(result, 31) + hashCode(this.resetPassword_1) | 0;
    return result;
  };
  protoOf(AuthUseCase).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AuthUseCase))
      return false;
    var tmp0_other_with_cast = other instanceof AuthUseCase ? other : THROW_CCE();
    if (!equals(this.logIn_1, tmp0_other_with_cast.logIn_1))
      return false;
    if (!equals(this.logOut_1, tmp0_other_with_cast.logOut_1))
      return false;
    if (!equals(this.signIn_1, tmp0_other_with_cast.signIn_1))
      return false;
    if (!equals(this.resetPassword_1, tmp0_other_with_cast.resetPassword_1))
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
    var scopeQualifier = Companion_getInstance().get_rootScopeQualifier_ohxkho_k$();
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(AuthUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.indexPrimaryType_bfm8x4_k$(factory);
    if (false || $this$module.get__createdAtStart_5di9ug_k$()) {
      $this$module.prepareForCreationAtStart_txiz47_k$(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_getInstance();
  }
  function authDomainModule$lambda$lambda($this$single, it) {
    _init_properties_authDomainDi_kt__kr38i7();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.get_80ko8d_k$(getKClass(AuthRepository), null, null);
    var tmp = new Auth(tmp$ret$0);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$1 = $this$single.get_80ko8d_k$(getKClass(AuthRepository), null, null);
    var tmp_0 = new Auth(tmp$ret$1);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$2 = $this$single.get_80ko8d_k$(getKClass(AuthRepository), null, null);
    var tmp_1 = new Auth(tmp$ret$2);
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$3 = $this$single.get_80ko8d_k$(getKClass(AuthRepository), null, null);
    return new AuthUseCase(tmp, tmp_0, tmp_1, new Auth(tmp$ret$3));
  }
  var properties_initialized_authDomainDi_kt_m9csj7;
  function _init_properties_authDomainDi_kt__kr38i7() {
    if (!properties_initialized_authDomainDi_kt_m9csj7) {
      properties_initialized_authDomainDi_kt_m9csj7 = true;
      authDomainModule = module_0(VOID, authDomainModule$lambda);
    }
  }
  function _get_repository__phhg8v($this) {
    return $this.repository_1;
  }
  function Auth(repository) {
    this.repository_1 = repository;
  }
  protoOf(Auth).logIn_ab6h1n_k$ = function (email, password, $completion) {
    var tmp = this.repository_1.loginUser_y2d21i_k$(email, password, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Auth).logOut_6dkxw3_k$ = function ($completion) {
    return this.repository_1.signOut_t9fplm_k$($completion);
  };
  protoOf(Auth).signIn_uzowos_k$ = function (email, password, $completion) {
    var tmp = this.repository_1.signIn_uzowos_k$(email, password, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Auth).resetPassword_x6mrea_k$ = function (email, $completion) {
    var tmp = this.repository_1.sendPasswordResetEmail_izao5o_k$(email, $completion);
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
