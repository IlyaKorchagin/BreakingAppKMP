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
  var initializeApp = $module$firebase_app_vzvknn.initializeApp;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var VOID = kotlin_kotlin.$_$.j;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var to = kotlin_kotlin.$_$.dm;
  var json = kotlin_kotlin.$_$.ue;
  var Exception = kotlin_kotlin.$_$.dk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.d2;
  var captureStack = kotlin_kotlin.$_$.fd;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Firebase, 'Firebase');
  initMetadataForClass(FirebaseOptions, 'FirebaseOptions');
  initMetadataForClass(FirebaseApp, 'FirebaseApp', VOID, VOID, VOID, [0]);
  initMetadataForClass(FirebaseException, 'FirebaseException', VOID, Exception);
  initMetadataForClass(FirebaseNetworkException, 'FirebaseNetworkException', VOID, FirebaseException);
  //endregion
  function Firebase() {
  }
  var Firebase_instance;
  function Firebase_getInstance() {
    return Firebase_instance;
  }
  function FirebaseOptions(applicationId, apiKey, databaseUrl, gaTrackingId, storageBucket, projectId, gcmSenderId, authDomain) {
    databaseUrl = databaseUrl === VOID ? null : databaseUrl;
    gaTrackingId = gaTrackingId === VOID ? null : gaTrackingId;
    storageBucket = storageBucket === VOID ? null : storageBucket;
    projectId = projectId === VOID ? null : projectId;
    gcmSenderId = gcmSenderId === VOID ? null : gcmSenderId;
    authDomain = authDomain === VOID ? null : authDomain;
    this.ai3_1 = applicationId;
    this.bi3_1 = apiKey;
    this.ci3_1 = databaseUrl;
    this.di3_1 = gaTrackingId;
    this.ei3_1 = storageBucket;
    this.fi3_1 = projectId;
    this.gi3_1 = gcmSenderId;
    this.hi3_1 = authDomain;
  }
  protoOf(FirebaseOptions).toString = function () {
    return 'FirebaseOptions(applicationId=' + this.ai3_1 + ', apiKey=' + this.bi3_1 + ', databaseUrl=' + this.ci3_1 + ', gaTrackingId=' + this.di3_1 + ', storageBucket=' + this.ei3_1 + ', projectId=' + this.fi3_1 + ', gcmSenderId=' + this.gi3_1 + ', authDomain=' + this.hi3_1 + ')';
  };
  protoOf(FirebaseOptions).hashCode = function () {
    var result = getStringHashCode(this.ai3_1);
    result = imul(result, 31) + getStringHashCode(this.bi3_1) | 0;
    result = imul(result, 31) + (this.ci3_1 == null ? 0 : getStringHashCode(this.ci3_1)) | 0;
    result = imul(result, 31) + (this.di3_1 == null ? 0 : getStringHashCode(this.di3_1)) | 0;
    result = imul(result, 31) + (this.ei3_1 == null ? 0 : getStringHashCode(this.ei3_1)) | 0;
    result = imul(result, 31) + (this.fi3_1 == null ? 0 : getStringHashCode(this.fi3_1)) | 0;
    result = imul(result, 31) + (this.gi3_1 == null ? 0 : getStringHashCode(this.gi3_1)) | 0;
    result = imul(result, 31) + (this.hi3_1 == null ? 0 : getStringHashCode(this.hi3_1)) | 0;
    return result;
  };
  protoOf(FirebaseOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FirebaseOptions))
      return false;
    var tmp0_other_with_cast = other instanceof FirebaseOptions ? other : THROW_CCE();
    if (!(this.ai3_1 === tmp0_other_with_cast.ai3_1))
      return false;
    if (!(this.bi3_1 === tmp0_other_with_cast.bi3_1))
      return false;
    if (!(this.ci3_1 == tmp0_other_with_cast.ci3_1))
      return false;
    if (!(this.di3_1 == tmp0_other_with_cast.di3_1))
      return false;
    if (!(this.ei3_1 == tmp0_other_with_cast.ei3_1))
      return false;
    if (!(this.fi3_1 == tmp0_other_with_cast.fi3_1))
      return false;
    if (!(this.gi3_1 == tmp0_other_with_cast.gi3_1))
      return false;
    if (!(this.hi3_1 == tmp0_other_with_cast.hi3_1))
      return false;
    return true;
  };
  function FirebaseApp(js) {
    this.ii3_1 = js;
  }
  function initialize(_this__u8e3s4, context, options) {
    context = context === VOID ? null : context;
    return new FirebaseApp(initializeApp(toJson(options)));
  }
  function toJson(_this__u8e3s4) {
    var tmp = to('apiKey', _this__u8e3s4.bi3_1);
    var tmp_0 = to('appId', _this__u8e3s4.ai3_1);
    var tmp0_elvis_lhs = _this__u8e3s4.ci3_1;
    var tmp_1 = to('databaseURL', tmp0_elvis_lhs == null ? undefined : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = _this__u8e3s4.ei3_1;
    var tmp_2 = to('storageBucket', tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = _this__u8e3s4.fi3_1;
    var tmp_3 = to('projectId', tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = _this__u8e3s4.di3_1;
    var tmp_4 = to('gaTrackingId', tmp3_elvis_lhs == null ? undefined : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = _this__u8e3s4.gi3_1;
    var tmp_5 = to('messagingSenderId', tmp4_elvis_lhs == null ? undefined : tmp4_elvis_lhs);
    var tmp5_elvis_lhs = _this__u8e3s4.hi3_1;
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
  //region block: init
  Firebase_instance = new Firebase();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FirebaseException;
  _.$_$.b = FirebaseNetworkException;
  _.$_$.c = FirebaseOptions;
  _.$_$.d = initialize;
  _.$_$.e = Firebase_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-app.js.map
