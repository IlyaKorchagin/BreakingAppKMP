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
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var VOID = kotlin_kotlin.$_$.i;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var to = kotlin_kotlin.$_$.sk;
  var json = kotlin_kotlin.$_$.wd;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Firebase, 'Firebase');
  initMetadataForClass(FirebaseOptions, 'FirebaseOptions');
  initMetadataForClass(FirebaseApp, 'FirebaseApp', VOID, VOID, VOID, [0]);
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
    this.df1_1 = applicationId;
    this.ef1_1 = apiKey;
    this.ff1_1 = databaseUrl;
    this.gf1_1 = gaTrackingId;
    this.hf1_1 = storageBucket;
    this.if1_1 = projectId;
    this.jf1_1 = gcmSenderId;
    this.kf1_1 = authDomain;
  }
  protoOf(FirebaseOptions).toString = function () {
    return 'FirebaseOptions(applicationId=' + this.df1_1 + ', apiKey=' + this.ef1_1 + ', databaseUrl=' + this.ff1_1 + ', gaTrackingId=' + this.gf1_1 + ', storageBucket=' + this.hf1_1 + ', projectId=' + this.if1_1 + ', gcmSenderId=' + this.jf1_1 + ', authDomain=' + this.kf1_1 + ')';
  };
  protoOf(FirebaseOptions).hashCode = function () {
    var result = getStringHashCode(this.df1_1);
    result = imul(result, 31) + getStringHashCode(this.ef1_1) | 0;
    result = imul(result, 31) + (this.ff1_1 == null ? 0 : getStringHashCode(this.ff1_1)) | 0;
    result = imul(result, 31) + (this.gf1_1 == null ? 0 : getStringHashCode(this.gf1_1)) | 0;
    result = imul(result, 31) + (this.hf1_1 == null ? 0 : getStringHashCode(this.hf1_1)) | 0;
    result = imul(result, 31) + (this.if1_1 == null ? 0 : getStringHashCode(this.if1_1)) | 0;
    result = imul(result, 31) + (this.jf1_1 == null ? 0 : getStringHashCode(this.jf1_1)) | 0;
    result = imul(result, 31) + (this.kf1_1 == null ? 0 : getStringHashCode(this.kf1_1)) | 0;
    return result;
  };
  protoOf(FirebaseOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FirebaseOptions))
      return false;
    var tmp0_other_with_cast = other instanceof FirebaseOptions ? other : THROW_CCE();
    if (!(this.df1_1 === tmp0_other_with_cast.df1_1))
      return false;
    if (!(this.ef1_1 === tmp0_other_with_cast.ef1_1))
      return false;
    if (!(this.ff1_1 == tmp0_other_with_cast.ff1_1))
      return false;
    if (!(this.gf1_1 == tmp0_other_with_cast.gf1_1))
      return false;
    if (!(this.hf1_1 == tmp0_other_with_cast.hf1_1))
      return false;
    if (!(this.if1_1 == tmp0_other_with_cast.if1_1))
      return false;
    if (!(this.jf1_1 == tmp0_other_with_cast.jf1_1))
      return false;
    if (!(this.kf1_1 == tmp0_other_with_cast.kf1_1))
      return false;
    return true;
  };
  function FirebaseApp(js) {
    this.lf1_1 = js;
  }
  function initialize(_this__u8e3s4, context, options) {
    context = context === VOID ? null : context;
    return new FirebaseApp(initializeApp(toJson(options)));
  }
  function toJson(_this__u8e3s4) {
    var tmp = to('apiKey', _this__u8e3s4.ef1_1);
    var tmp_0 = to('appId', _this__u8e3s4.df1_1);
    var tmp0_elvis_lhs = _this__u8e3s4.ff1_1;
    var tmp_1 = to('databaseURL', tmp0_elvis_lhs == null ? undefined : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = _this__u8e3s4.hf1_1;
    var tmp_2 = to('storageBucket', tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = _this__u8e3s4.if1_1;
    var tmp_3 = to('projectId', tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = _this__u8e3s4.gf1_1;
    var tmp_4 = to('gaTrackingId', tmp3_elvis_lhs == null ? undefined : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = _this__u8e3s4.jf1_1;
    var tmp_5 = to('messagingSenderId', tmp4_elvis_lhs == null ? undefined : tmp4_elvis_lhs);
    var tmp5_elvis_lhs = _this__u8e3s4.kf1_1;
    return json([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, to('authDomain', tmp5_elvis_lhs == null ? undefined : tmp5_elvis_lhs)]);
  }
  //region block: init
  Firebase_instance = new Firebase();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FirebaseOptions;
  _.$_$.b = initialize;
  _.$_$.c = Firebase_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-app.js.map
