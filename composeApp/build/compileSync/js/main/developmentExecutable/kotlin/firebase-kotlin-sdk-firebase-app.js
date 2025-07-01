(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/app', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/app'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['firebase/app'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-app'. Its dependency 'firebase/app' was not found. Please, check whether 'firebase/app' is loaded prior to 'firebase-kotlin-sdk-firebase-app'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-app'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-app'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-app'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-app'], globalThis['firebase/app'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$firebase_app_vzvknn, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var deleteApp = $module$firebase_app_vzvknn.deleteApp;
  var initializeApp = $module$firebase_app_vzvknn.initializeApp;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var VOID = kotlin_kotlin.$_$.j;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var to = kotlin_kotlin.$_$.fq;
  var json = kotlin_kotlin.$_$.zh;
  var Exception = kotlin_kotlin.$_$.bo;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h2;
  var captureStack = kotlin_kotlin.$_$.jg;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Firebase, 'Firebase');
  initMetadataForClass(FirebaseOptions, 'FirebaseOptions');
  initMetadataForClass(FirebaseApp, 'FirebaseApp', VOID, VOID, VOID, [0]);
  initMetadataForClass(FirebaseException, 'FirebaseException', VOID, Exception);
  initMetadataForClass(FirebaseNetworkException, 'FirebaseNetworkException', VOID, FirebaseException);
  //endregion
  function Firebase() {
    Firebase_instance = this;
  }
  var Firebase_instance;
  function Firebase_getInstance() {
    if (Firebase_instance == null)
      new Firebase();
    return Firebase_instance;
  }
  function FirebaseOptions(applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain) {
    databaseUrl = databaseUrl === VOID ? null : databaseUrl;
    gaTrackingId = gaTrackingId === VOID ? null : gaTrackingId;
    storageBucket = storageBucket === VOID ? null : storageBucket;
    projectId = projectId === VOID ? null : projectId;
    gcmSenderId = gcmSenderId === VOID ? null : gcmSenderId;
    authDomain = authDomain === VOID ? null : authDomain;
    this.applicationId_1 = applicationId;
    this.apiKey_1 = apiKey;
    this.databaseUrl_1 = databaseUrl;
    this.gaTrackingId_1 = gaTrackingId;
    this.storageBucket_1 = storageBucket;
    this.projectId_1 = projectId;
    this.gcmSenderId_1 = gcmSenderId;
    this.authDomain_1 = authDomain;
  }
  protoOf(FirebaseOptions).get_applicationId_hxvogu_k$ = function () {
    return this.applicationId_1;
  };
  protoOf(FirebaseOptions).get_apiKey_b2j20e_k$ = function () {
    return this.apiKey_1;
  };
  protoOf(FirebaseOptions).get_databaseUrl_reba8b_k$ = function () {
    return this.databaseUrl_1;
  };
  protoOf(FirebaseOptions).get_gaTrackingId_m74451_k$ = function () {
    return this.gaTrackingId_1;
  };
  protoOf(FirebaseOptions).get_storageBucket_izqal8_k$ = function () {
    return this.storageBucket_1;
  };
  protoOf(FirebaseOptions).get_projectId_6a8jo5_k$ = function () {
    return this.projectId_1;
  };
  protoOf(FirebaseOptions).get_gcmSenderId_inx14_k$ = function () {
    return this.gcmSenderId_1;
  };
  protoOf(FirebaseOptions).get_authDomain_5mufpx_k$ = function () {
    return this.authDomain_1;
  };
  protoOf(FirebaseOptions).component1_7eebsc_k$ = function () {
    return this.applicationId_1;
  };
  protoOf(FirebaseOptions).component2_7eebsb_k$ = function () {
    return this.apiKey_1;
  };
  protoOf(FirebaseOptions).component3_7eebsa_k$ = function () {
    return this.databaseUrl_1;
  };
  protoOf(FirebaseOptions).component4_7eebs9_k$ = function () {
    return this.gaTrackingId_1;
  };
  protoOf(FirebaseOptions).component5_7eebs8_k$ = function () {
    return this.storageBucket_1;
  };
  protoOf(FirebaseOptions).component6_7eebs7_k$ = function () {
    return this.projectId_1;
  };
  protoOf(FirebaseOptions).component7_7eebs6_k$ = function () {
    return this.gcmSenderId_1;
  };
  protoOf(FirebaseOptions).component8_7eebs5_k$ = function () {
    return this.authDomain_1;
  };
  protoOf(FirebaseOptions).copy_no2mgl_k$ = function (applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain) {
    return new FirebaseOptions(applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain);
  };
  protoOf(FirebaseOptions).copy$default_gkl9z3_k$ = function (applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain, $super) {
    applicationId = applicationId === VOID ? this.applicationId_1 : applicationId;
    apiKey = apiKey === VOID ? this.apiKey_1 : apiKey;
    databaseUrl = databaseUrl === VOID ? this.databaseUrl_1 : databaseUrl;
    gaTrackingId = gaTrackingId === VOID ? this.gaTrackingId_1 : gaTrackingId;
    storageBucket = storageBucket === VOID ? this.storageBucket_1 : storageBucket;
    projectId = projectId === VOID ? this.projectId_1 : projectId;
    gcmSenderId = gcmSenderId === VOID ? this.gcmSenderId_1 : gcmSenderId;
    authDomain = authDomain === VOID ? this.authDomain_1 : authDomain;
    return $super === VOID ? this.copy_no2mgl_k$(applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain) : $super.copy_no2mgl_k$.call(this, applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain);
  };
  protoOf(FirebaseOptions).toString = function () {
    return 'FirebaseOptions(applicationId=' + this.applicationId_1 + ', apiKey=' + this.apiKey_1 + ', databaseUrl=' + this.databaseUrl_1 + ', gaTrackingId=' + this.gaTrackingId_1 + ', storageBucket=' + this.storageBucket_1 + ', projectId=' + this.projectId_1 + ', gcmSenderId=' + this.gcmSenderId_1 + ', authDomain=' + this.authDomain_1 + ')';
  };
  protoOf(FirebaseOptions).hashCode = function () {
    var result = getStringHashCode(this.applicationId_1);
    result = imul(result, 31) + getStringHashCode(this.apiKey_1) | 0;
    result = imul(result, 31) + (this.databaseUrl_1 == null ? 0 : getStringHashCode(this.databaseUrl_1)) | 0;
    result = imul(result, 31) + (this.gaTrackingId_1 == null ? 0 : getStringHashCode(this.gaTrackingId_1)) | 0;
    result = imul(result, 31) + (this.storageBucket_1 == null ? 0 : getStringHashCode(this.storageBucket_1)) | 0;
    result = imul(result, 31) + (this.projectId_1 == null ? 0 : getStringHashCode(this.projectId_1)) | 0;
    result = imul(result, 31) + (this.gcmSenderId_1 == null ? 0 : getStringHashCode(this.gcmSenderId_1)) | 0;
    result = imul(result, 31) + (this.authDomain_1 == null ? 0 : getStringHashCode(this.authDomain_1)) | 0;
    return result;
  };
  protoOf(FirebaseOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FirebaseOptions))
      return false;
    var tmp0_other_with_cast = other instanceof FirebaseOptions ? other : THROW_CCE();
    if (!(this.applicationId_1 === tmp0_other_with_cast.applicationId_1))
      return false;
    if (!(this.apiKey_1 === tmp0_other_with_cast.apiKey_1))
      return false;
    if (!(this.databaseUrl_1 == tmp0_other_with_cast.databaseUrl_1))
      return false;
    if (!(this.gaTrackingId_1 == tmp0_other_with_cast.gaTrackingId_1))
      return false;
    if (!(this.storageBucket_1 == tmp0_other_with_cast.storageBucket_1))
      return false;
    if (!(this.projectId_1 == tmp0_other_with_cast.projectId_1))
      return false;
    if (!(this.gcmSenderId_1 == tmp0_other_with_cast.gcmSenderId_1))
      return false;
    if (!(this.authDomain_1 == tmp0_other_with_cast.authDomain_1))
      return false;
    return true;
  };
  function FirebaseApp(js) {
    this.js_1 = js;
  }
  protoOf(FirebaseApp).get_js_ujypqd_k$ = function () {
    return this.js_1;
  };
  protoOf(FirebaseApp).get_name_woqyms_k$ = function () {
    return this.js_1.name;
  };
  protoOf(FirebaseApp).get_options_jecmyz_k$ = function () {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.FirebaseApp.<get-options>.<anonymous>' call
    var $this$run = this.js_1.options;
    return new FirebaseOptions($this$run.appId, $this$run.apiKey, $this$run.databaseURL, $this$run.gaTrackingId, $this$run.storageBucket, $this$run.projectId, $this$run.messagingSenderId, $this$run.authDomain);
  };
  protoOf(FirebaseApp).delete_4td7nw_k$ = function ($completion) {
    deleteApp(this.js_1);
    return Unit_getInstance();
  };
  function initialize(_this__u8e3s4, context, options) {
    context = context === VOID ? null : context;
    return new FirebaseApp(initializeApp(toJson(options)));
  }
  function toJson(_this__u8e3s4) {
    var tmp = to('apiKey', _this__u8e3s4.get_apiKey_b2j20e_k$());
    var tmp_0 = to('appId', _this__u8e3s4.get_applicationId_hxvogu_k$());
    var tmp0_elvis_lhs = _this__u8e3s4.get_databaseUrl_reba8b_k$();
    var tmp_1 = to('databaseURL', tmp0_elvis_lhs == null ? undefined : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = _this__u8e3s4.get_storageBucket_izqal8_k$();
    var tmp_2 = to('storageBucket', tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = _this__u8e3s4.get_projectId_6a8jo5_k$();
    var tmp_3 = to('projectId', tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = _this__u8e3s4.get_gaTrackingId_m74451_k$();
    var tmp_4 = to('gaTrackingId', tmp3_elvis_lhs == null ? undefined : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = _this__u8e3s4.get_gcmSenderId_inx14_k$();
    var tmp_5 = to('messagingSenderId', tmp4_elvis_lhs == null ? undefined : tmp4_elvis_lhs);
    var tmp5_elvis_lhs = _this__u8e3s4.get_authDomain_5mufpx_k$();
    return json([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, to('authDomain', tmp5_elvis_lhs == null ? undefined : tmp5_elvis_lhs)]);
  }
  function FirebaseException(code, cause) {
    Exception_init_$Init$('' + code + ': ' + cause.message, cause, this);
    captureStack(this, FirebaseException);
  }
  function FirebaseNetworkException(code, cause) {
    FirebaseException.call(this, code, cause);
    captureStack(this, FirebaseNetworkException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FirebaseException;
  _.$_$.b = FirebaseNetworkException;
  _.$_$.c = FirebaseOptions;
  _.$_$.d = initialize;
  _.$_$.e = Firebase_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-app.js.map
