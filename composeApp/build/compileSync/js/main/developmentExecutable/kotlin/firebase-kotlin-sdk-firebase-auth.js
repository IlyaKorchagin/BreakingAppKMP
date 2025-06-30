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
  var imul = Math.imul;
  var applyActionCode = $module$firebase_auth_2je36k.applyActionCode;
  var confirmPasswordReset = $module$firebase_auth_2je36k.confirmPasswordReset;
  var createUserWithEmailAndPassword = $module$firebase_auth_2je36k.createUserWithEmailAndPassword;
  var fetchSignInMethodsForEmail = $module$firebase_auth_2je36k.fetchSignInMethodsForEmail;
  var sendPasswordResetEmail = $module$firebase_auth_2je36k.sendPasswordResetEmail;
  var sendSignInLinkToEmail = $module$firebase_auth_2je36k.sendSignInLinkToEmail;
  var signInWithEmailAndPassword = $module$firebase_auth_2je36k.signInWithEmailAndPassword;
  var signInWithCustomToken = $module$firebase_auth_2je36k.signInWithCustomToken;
  var signInAnonymously = $module$firebase_auth_2je36k.signInAnonymously;
  var signInWithCredential = $module$firebase_auth_2je36k.signInWithCredential;
  var signInWithEmailLink = $module$firebase_auth_2je36k.signInWithEmailLink;
  var signOut = $module$firebase_auth_2je36k.signOut;
  var updateCurrentUser = $module$firebase_auth_2je36k.updateCurrentUser;
  var verifyPasswordResetCode = $module$firebase_auth_2je36k.verifyPasswordResetCode;
  var checkActionCode = $module$firebase_auth_2je36k.checkActionCode;
  var isSignInWithEmailLink = $module$firebase_auth_2je36k.isSignInWithEmailLink;
  var connectAuthEmulator = $module$firebase_auth_2je36k.connectAuthEmulator;
  var getAuth = $module$firebase_auth_2je36k.getAuth;
  var getIdTokenResult = $module$firebase_auth_2je36k.getIdTokenResult;
  var linkWithCredential = $module$firebase_auth_2je36k.linkWithCredential;
  var reauthenticateWithCredential = $module$firebase_auth_2je36k.reauthenticateWithCredential;
  var sendEmailVerification = $module$firebase_auth_2je36k.sendEmailVerification;
  var unlink = $module$firebase_auth_2je36k.unlink;
  var updateEmail = $module$firebase_auth_2je36k.updateEmail;
  var updatePassword = $module$firebase_auth_2je36k.updatePassword;
  var updatePhoneNumber = $module$firebase_auth_2je36k.updatePhoneNumber;
  var updateProfile = $module$firebase_auth_2je36k.updateProfile;
  var verifyBeforeUpdateEmail = $module$firebase_auth_2je36k.verifyBeforeUpdateEmail;
  var multiFactor = $module$firebase_auth_2je36k.multiFactor;
  var VOID = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.ki;
  var toString = kotlin_kotlin.$_$.eq;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var getBooleanHashCode = kotlin_kotlin.$_$.wg;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.sh;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Exception = kotlin_kotlin.$_$.bo;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var asList = kotlin_kotlin.$_$.m8;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n3;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var to = kotlin_kotlin.$_$.fq;
  var json = kotlin_kotlin.$_$.zh;
  var mapCapacity = kotlin_kotlin.$_$.zb;
  var coerceAtLeast = kotlin_kotlin.$_$.cj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.oi;
  var FirebaseNetworkException = kotlin_dev_gitlive_firebase_app.$_$.b;
  var println = kotlin_kotlin.$_$.dg;
  var captureStack = kotlin_kotlin.$_$.jg;
  var FirebaseException = kotlin_dev_gitlive_firebase_app.$_$.a;
  var isArray = kotlin_kotlin.$_$.kh;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var toMap = kotlin_kotlin.$_$.ke;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var listOf = kotlin_kotlin.$_$.yb;
  var copyToArray = kotlin_kotlin.$_$.aa;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ActionCodeSettings, 'ActionCodeSettings');
  initMetadataForClass(ActionCodeResult, 'ActionCodeResult');
  initMetadataForObject(SignInWithEmailLink, 'SignInWithEmailLink', VOID, ActionCodeResult);
  initMetadataForClass(PasswordReset, 'PasswordReset', VOID, ActionCodeResult);
  initMetadataForClass(VerifyEmail, 'VerifyEmail', VOID, ActionCodeResult);
  initMetadataForClass(RecoverEmail, 'RecoverEmail', VOID, ActionCodeResult);
  initMetadataForClass(VerifyBeforeChangeEmail, 'VerifyBeforeChangeEmail', VOID, ActionCodeResult);
  initMetadataForClass(RevertSecondFactorAddition, 'RevertSecondFactorAddition', VOID, ActionCodeResult);
  initMetadataForClass(AndroidPackageName, 'AndroidPackageName');
  initMetadataForLambda(FirebaseAuth$_get_authStateChanged_$slambda_447979, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($applyActionCodeCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($confirmPasswordResetCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($createUserWithEmailAndPasswordCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($fetchSignInMethodsForEmailCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($sendPasswordResetEmailCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($sendSignInLinkToEmailCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($signInWithEmailAndPasswordCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($signInWithCustomTokenCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($signInAnonymouslyCOROUTINE$8, CoroutineImpl);
  initMetadataForCoroutine($signInWithCredentialCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($signInWithEmailLinkCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($signOutCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($updateCurrentUserCOROUTINE$12, CoroutineImpl);
  initMetadataForCoroutine($verifyPasswordResetCodeCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($checkActionCodeCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(FirebaseAuth, 'FirebaseAuth', VOID, VOID, VOID, [1, 2, 0]);
  initMetadataForClass(AuthResult, 'AuthResult');
  initMetadataForClass(AdditionalUserInfo, 'AdditionalUserInfo');
  initMetadataForClass(FirebaseAuthException, 'FirebaseAuthException', VOID, FirebaseException);
  initMetadataForClass(FirebaseAuthInvalidUserException, 'FirebaseAuthInvalidUserException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthRecentLoginRequiredException, 'FirebaseAuthRecentLoginRequiredException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthWebException, 'FirebaseAuthWebException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthInvalidCredentialsException, 'FirebaseAuthInvalidCredentialsException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthWeakPasswordException, 'FirebaseAuthWeakPasswordException', VOID, FirebaseAuthInvalidCredentialsException);
  initMetadataForClass(FirebaseAuthMultiFactorException, 'FirebaseAuthMultiFactorException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthUserCollisionException, 'FirebaseAuthUserCollisionException', VOID, FirebaseAuthException);
  initMetadataForClass(FirebaseAuthEmailException, 'FirebaseAuthEmailException', VOID, FirebaseAuthException);
  initMetadataForClass(AuthTokenResult, 'AuthTokenResult');
  initMetadataForClass(AuthCredential, 'AuthCredential');
  initMetadataForClass(PhoneAuthCredential, 'PhoneAuthCredential', VOID, AuthCredential);
  initMetadataForClass(MultiFactorInfo, 'MultiFactorInfo');
  initMetadataForCoroutine($enrollCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($getSessionCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($unenrollCOROUTINE$17, CoroutineImpl);
  initMetadataForCoroutine($unenrollCOROUTINE$18, CoroutineImpl);
  initMetadataForClass(MultiFactor, 'MultiFactor', VOID, VOID, VOID, [2, 0, 1]);
  initMetadataForClass(MultiFactorAssertion, 'MultiFactorAssertion');
  initMetadataForClass(MultiFactorSession, 'MultiFactorSession');
  initMetadataForCoroutine($deleteCOROUTINE$19, CoroutineImpl);
  initMetadataForCoroutine($reloadCOROUTINE$20, CoroutineImpl);
  initMetadataForCoroutine($getIdTokenCOROUTINE$21, CoroutineImpl);
  initMetadataForCoroutine($getIdTokenResultCOROUTINE$22, CoroutineImpl);
  initMetadataForCoroutine($linkWithCredentialCOROUTINE$23, CoroutineImpl);
  initMetadataForCoroutine($reauthenticateCOROUTINE$24, CoroutineImpl);
  initMetadataForCoroutine($reauthenticateAndRetrieveDataCOROUTINE$25, CoroutineImpl);
  initMetadataForCoroutine($sendEmailVerificationCOROUTINE$26, CoroutineImpl);
  initMetadataForCoroutine($unlinkCOROUTINE$27, CoroutineImpl);
  initMetadataForCoroutine($updateEmailCOROUTINE$28, CoroutineImpl);
  initMetadataForCoroutine($updatePasswordCOROUTINE$29, CoroutineImpl);
  initMetadataForCoroutine($updatePhoneNumberCOROUTINE$30, CoroutineImpl);
  initMetadataForCoroutine($updateProfileCOROUTINE$31, CoroutineImpl);
  initMetadataForCoroutine($verifyBeforeUpdateEmailCOROUTINE$32, CoroutineImpl);
  initMetadataForClass(FirebaseUser, 'FirebaseUser', VOID, VOID, VOID, [0, 1, 2]);
  initMetadataForClass(UserMetaData, 'UserMetaData');
  initMetadataForClass(UserInfo, 'UserInfo');
  //endregion
  function ActionCodeSettings(url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId) {
    androidPackageName = androidPackageName === VOID ? null : androidPackageName;
    dynamicLinkDomain = dynamicLinkDomain === VOID ? null : dynamicLinkDomain;
    canHandleCodeInApp = canHandleCodeInApp === VOID ? false : canHandleCodeInApp;
    iOSBundleId = iOSBundleId === VOID ? null : iOSBundleId;
    this.url_1 = url;
    this.androidPackageName_1 = androidPackageName;
    this.dynamicLinkDomain_1 = dynamicLinkDomain;
    this.canHandleCodeInApp_1 = canHandleCodeInApp;
    this.iOSBundleId_1 = iOSBundleId;
  }
  protoOf(ActionCodeSettings).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(ActionCodeSettings).get_androidPackageName_pevt7_k$ = function () {
    return this.androidPackageName_1;
  };
  protoOf(ActionCodeSettings).get_dynamicLinkDomain_h0va98_k$ = function () {
    return this.dynamicLinkDomain_1;
  };
  protoOf(ActionCodeSettings).get_canHandleCodeInApp_r5rr34_k$ = function () {
    return this.canHandleCodeInApp_1;
  };
  protoOf(ActionCodeSettings).get_iOSBundleId_uwwb9d_k$ = function () {
    return this.iOSBundleId_1;
  };
  protoOf(ActionCodeSettings).component1_7eebsc_k$ = function () {
    return this.url_1;
  };
  protoOf(ActionCodeSettings).component2_7eebsb_k$ = function () {
    return this.androidPackageName_1;
  };
  protoOf(ActionCodeSettings).component3_7eebsa_k$ = function () {
    return this.dynamicLinkDomain_1;
  };
  protoOf(ActionCodeSettings).component4_7eebs9_k$ = function () {
    return this.canHandleCodeInApp_1;
  };
  protoOf(ActionCodeSettings).component5_7eebs8_k$ = function () {
    return this.iOSBundleId_1;
  };
  protoOf(ActionCodeSettings).copy_yqbwvv_k$ = function (url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId) {
    return new ActionCodeSettings(url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId);
  };
  protoOf(ActionCodeSettings).copy$default_1265ty_k$ = function (url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId, $super) {
    url = url === VOID ? this.url_1 : url;
    androidPackageName = androidPackageName === VOID ? this.androidPackageName_1 : androidPackageName;
    dynamicLinkDomain = dynamicLinkDomain === VOID ? this.dynamicLinkDomain_1 : dynamicLinkDomain;
    canHandleCodeInApp = canHandleCodeInApp === VOID ? this.canHandleCodeInApp_1 : canHandleCodeInApp;
    iOSBundleId = iOSBundleId === VOID ? this.iOSBundleId_1 : iOSBundleId;
    return $super === VOID ? this.copy_yqbwvv_k$(url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId) : $super.copy_yqbwvv_k$.call(this, url, androidPackageName, dynamicLinkDomain, canHandleCodeInApp, iOSBundleId);
  };
  protoOf(ActionCodeSettings).toString = function () {
    return 'ActionCodeSettings(url=' + this.url_1 + ', androidPackageName=' + toString(this.androidPackageName_1) + ', dynamicLinkDomain=' + this.dynamicLinkDomain_1 + ', canHandleCodeInApp=' + this.canHandleCodeInApp_1 + ', iOSBundleId=' + this.iOSBundleId_1 + ')';
  };
  protoOf(ActionCodeSettings).hashCode = function () {
    var result = getStringHashCode(this.url_1);
    result = imul(result, 31) + (this.androidPackageName_1 == null ? 0 : this.androidPackageName_1.hashCode()) | 0;
    result = imul(result, 31) + (this.dynamicLinkDomain_1 == null ? 0 : getStringHashCode(this.dynamicLinkDomain_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.canHandleCodeInApp_1) | 0;
    result = imul(result, 31) + (this.iOSBundleId_1 == null ? 0 : getStringHashCode(this.iOSBundleId_1)) | 0;
    return result;
  };
  protoOf(ActionCodeSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActionCodeSettings))
      return false;
    var tmp0_other_with_cast = other instanceof ActionCodeSettings ? other : THROW_CCE();
    if (!(this.url_1 === tmp0_other_with_cast.url_1))
      return false;
    if (!equals(this.androidPackageName_1, tmp0_other_with_cast.androidPackageName_1))
      return false;
    if (!(this.dynamicLinkDomain_1 == tmp0_other_with_cast.dynamicLinkDomain_1))
      return false;
    if (!(this.canHandleCodeInApp_1 === tmp0_other_with_cast.canHandleCodeInApp_1))
      return false;
    if (!(this.iOSBundleId_1 == tmp0_other_with_cast.iOSBundleId_1))
      return false;
    return true;
  };
  function SignInWithEmailLink() {
    SignInWithEmailLink_instance = this;
    ActionCodeResult.call(this);
  }
  protoOf(SignInWithEmailLink).toString = function () {
    return 'SignInWithEmailLink';
  };
  protoOf(SignInWithEmailLink).hashCode = function () {
    return 1389352520;
  };
  protoOf(SignInWithEmailLink).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignInWithEmailLink))
      return false;
    other instanceof SignInWithEmailLink || THROW_CCE();
    return true;
  };
  var SignInWithEmailLink_instance;
  function SignInWithEmailLink_getInstance() {
    if (SignInWithEmailLink_instance == null)
      new SignInWithEmailLink();
    return SignInWithEmailLink_instance;
  }
  function PasswordReset(email) {
    ActionCodeResult.call(this);
    this.email_1 = email;
  }
  protoOf(PasswordReset).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  function VerifyEmail(email) {
    ActionCodeResult.call(this);
    this.email_1 = email;
  }
  protoOf(VerifyEmail).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  function RecoverEmail(email, previousEmail) {
    ActionCodeResult.call(this);
    this.email_1 = email;
    this.previousEmail_1 = previousEmail;
  }
  protoOf(RecoverEmail).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(RecoverEmail).get_previousEmail_60spxg_k$ = function () {
    return this.previousEmail_1;
  };
  function VerifyBeforeChangeEmail(email, previousEmail) {
    ActionCodeResult.call(this);
    this.email_1 = email;
    this.previousEmail_1 = previousEmail;
  }
  protoOf(VerifyBeforeChangeEmail).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(VerifyBeforeChangeEmail).get_previousEmail_60spxg_k$ = function () {
    return this.previousEmail_1;
  };
  function RevertSecondFactorAddition(email, multiFactorInfo) {
    ActionCodeResult.call(this);
    this.email_1 = email;
    this.multiFactorInfo_1 = multiFactorInfo;
  }
  protoOf(RevertSecondFactorAddition).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(RevertSecondFactorAddition).get_multiFactorInfo_7ps7gt_k$ = function () {
    return this.multiFactorInfo_1;
  };
  function ActionCodeResult() {
  }
  function AndroidPackageName(packageName, installIfNotAvailable, minimumVersion) {
    installIfNotAvailable = installIfNotAvailable === VOID ? true : installIfNotAvailable;
    minimumVersion = minimumVersion === VOID ? null : minimumVersion;
    this.packageName_1 = packageName;
    this.installIfNotAvailable_1 = installIfNotAvailable;
    this.minimumVersion_1 = minimumVersion;
  }
  protoOf(AndroidPackageName).get_packageName_sx93t4_k$ = function () {
    return this.packageName_1;
  };
  protoOf(AndroidPackageName).get_installIfNotAvailable_j7qtz9_k$ = function () {
    return this.installIfNotAvailable_1;
  };
  protoOf(AndroidPackageName).get_minimumVersion_mihuyb_k$ = function () {
    return this.minimumVersion_1;
  };
  protoOf(AndroidPackageName).component1_7eebsc_k$ = function () {
    return this.packageName_1;
  };
  protoOf(AndroidPackageName).component2_7eebsb_k$ = function () {
    return this.installIfNotAvailable_1;
  };
  protoOf(AndroidPackageName).component3_7eebsa_k$ = function () {
    return this.minimumVersion_1;
  };
  protoOf(AndroidPackageName).copy_cxd42h_k$ = function (packageName, installIfNotAvailable, minimumVersion) {
    return new AndroidPackageName(packageName, installIfNotAvailable, minimumVersion);
  };
  protoOf(AndroidPackageName).copy$default_kl63ei_k$ = function (packageName, installIfNotAvailable, minimumVersion, $super) {
    packageName = packageName === VOID ? this.packageName_1 : packageName;
    installIfNotAvailable = installIfNotAvailable === VOID ? this.installIfNotAvailable_1 : installIfNotAvailable;
    minimumVersion = minimumVersion === VOID ? this.minimumVersion_1 : minimumVersion;
    return $super === VOID ? this.copy_cxd42h_k$(packageName, installIfNotAvailable, minimumVersion) : $super.copy_cxd42h_k$.call(this, packageName, installIfNotAvailable, minimumVersion);
  };
  protoOf(AndroidPackageName).toString = function () {
    return 'AndroidPackageName(packageName=' + this.packageName_1 + ', installIfNotAvailable=' + this.installIfNotAvailable_1 + ', minimumVersion=' + this.minimumVersion_1 + ')';
  };
  protoOf(AndroidPackageName).hashCode = function () {
    var result = getStringHashCode(this.packageName_1);
    result = imul(result, 31) + getBooleanHashCode(this.installIfNotAvailable_1) | 0;
    result = imul(result, 31) + (this.minimumVersion_1 == null ? 0 : getStringHashCode(this.minimumVersion_1)) | 0;
    return result;
  };
  protoOf(AndroidPackageName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AndroidPackageName))
      return false;
    var tmp0_other_with_cast = other instanceof AndroidPackageName ? other : THROW_CCE();
    if (!(this.packageName_1 === tmp0_other_with_cast.packageName_1))
      return false;
    if (!(this.installIfNotAvailable_1 === tmp0_other_with_cast.installIfNotAvailable_1))
      return false;
    if (!(this.minimumVersion_1 == tmp0_other_with_cast.minimumVersion_1))
      return false;
    return true;
  };
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
      $this_callbackFlow.trySend_62dpg8_k$(tmp);
      return Unit_getInstance();
    };
  }
  function FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8_0($unsubscribe) {
    return function () {
      $unsubscribe();
      return Unit_getInstance();
    };
  }
  function FirebaseAuth$_get_idTokenChanged_$slambda$lambda_njykff($this_callbackFlow) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.<get-idTokenChanged>.<anonymous>.<anonymous>.<anonymous>' call
        tmp = new FirebaseUser(it);
      }
      $this_callbackFlow.trySend_62dpg8_k$(tmp);
      return Unit_getInstance();
    };
  }
  function FirebaseAuth$_get_idTokenChanged_$slambda$lambda_njykff_0($unsubscribe) {
    return function () {
      $unsubscribe();
      return Unit_getInstance();
    };
  }
  function FirebaseAuth$_get_authStateChanged_$slambda_447979(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).invoke_vr2ell_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_xzhw4j_k$($this$callbackFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_vr2ell_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.unsubscribe0__1 = this.this$0__1.js_1.onAuthStateChanged(FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8(this.$this$callbackFlow_1));
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, FirebaseAuth$_get_authStateChanged_$slambda$lambda_vybye8_0(this.unsubscribe0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).create_xzhw4j_k$ = function ($this$callbackFlow, completion) {
    var i = new FirebaseAuth$_get_authStateChanged_$slambda_447979(this.this$0__1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(FirebaseAuth$_get_authStateChanged_$slambda_447979).create_wyq9v6_k$ = function (value, completion) {
    return this.create_xzhw4j_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function FirebaseAuth$_get_authStateChanged_$slambda_447979_0(this$0, resultContinuation) {
    var i = new FirebaseAuth$_get_authStateChanged_$slambda_447979(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_vr2ell_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw).invoke_vr2ell_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_xzhw4j_k$($this$callbackFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_vr2ell_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.unsubscribe0__1 = this.this$0__1.js_1.onIdTokenChanged(FirebaseAuth$_get_idTokenChanged_$slambda$lambda_njykff(this.$this$callbackFlow_1));
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, FirebaseAuth$_get_idTokenChanged_$slambda$lambda_njykff_0(this.unsubscribe0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw).create_xzhw4j_k$ = function ($this$callbackFlow, completion) {
    var i = new FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw(this.this$0__1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw).create_wyq9v6_k$ = function (value, completion) {
    return this.create_xzhw4j_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw_0(this$0, resultContinuation) {
    var i = new FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_vr2ell_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $applyActionCodeCOROUTINE$0(_this__u8e3s4, code, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.code_1 = code;
  }
  protoOf($applyActionCodeCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(applyActionCode(this.$this$rethrow2__1.js_1, this.code_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $confirmPasswordResetCOROUTINE$1(_this__u8e3s4, code, newPassword, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.code_1 = code;
    this.newPassword_1 = newPassword;
  }
  protoOf($confirmPasswordResetCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(confirmPasswordReset(this.$this$rethrow2__1.js_1, this.code_1, this.newPassword_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $createUserWithEmailAndPasswordCOROUTINE$2(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
  }
  protoOf($createUserWithEmailAndPasswordCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(createUserWithEmailAndPassword(this.$this$rethrow2__1.js_1, this.email_1, this.password_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $fetchSignInMethodsForEmailCOROUTINE$3(_this__u8e3s4, email, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
  }
  protoOf($fetchSignInMethodsForEmailCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(fetchSignInMethodsForEmail(this.$this$rethrow2__1.js_1, this.email_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = asList(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $sendPasswordResetEmailCOROUTINE$4(_this__u8e3s4, email, actionCodeSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.actionCodeSettings_1 = actionCodeSettings;
  }
  protoOf($sendPasswordResetEmailCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            var tmp0_safe_receiver = this.actionCodeSettings_1;
            suspendResult = await_0(sendPasswordResetEmail(this.$this$rethrow2__1.js_1, this.email_1, tmp0_safe_receiver == null ? null : toJson(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $sendSignInLinkToEmailCOROUTINE$5(_this__u8e3s4, email, actionCodeSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.actionCodeSettings_1 = actionCodeSettings;
  }
  protoOf($sendSignInLinkToEmailCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(sendSignInLinkToEmail(this.$this$rethrow2__1.js_1, this.email_1, toJson(this.actionCodeSettings_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signInWithEmailAndPasswordCOROUTINE$6(_this__u8e3s4, email, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.password_1 = password;
  }
  protoOf($signInWithEmailAndPasswordCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signInWithEmailAndPassword(this.$this$rethrow2__1.js_1, this.email_1, this.password_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signInWithCustomTokenCOROUTINE$7(_this__u8e3s4, token, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.token_1 = token;
  }
  protoOf($signInWithCustomTokenCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signInWithCustomToken(this.$this$rethrow2__1.js_1, this.token_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signInAnonymouslyCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($signInAnonymouslyCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signInAnonymously(this.$this$rethrow2__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signInWithCredentialCOROUTINE$9(_this__u8e3s4, authCredential, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.authCredential_1 = authCredential;
  }
  protoOf($signInWithCredentialCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signInWithCredential(this.$this$rethrow2__1.js_1, this.authCredential_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signInWithEmailLinkCOROUTINE$10(_this__u8e3s4, email, link, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
    this.link_1 = link;
  }
  protoOf($signInWithEmailLinkCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signInWithEmailLink(this.$this$rethrow2__1.js_1, this.email_1, this.link_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $signOutCOROUTINE$11(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($signOutCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(signOut(this.$this$rethrow2__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updateCurrentUserCOROUTINE$12(_this__u8e3s4, user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.user_1 = user;
  }
  protoOf($updateCurrentUserCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(updateCurrentUser(this.$this$rethrow2__1.js_1, this.user_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $verifyPasswordResetCodeCOROUTINE$13(_this__u8e3s4, code, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.code_1 = code;
  }
  protoOf($verifyPasswordResetCodeCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(verifyPasswordResetCode(this.$this$rethrow2__1.js_1, this.code_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $checkActionCodeCOROUTINE$14(_this__u8e3s4, code, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.code_1 = code;
  }
  protoOf($checkActionCodeCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(checkActionCode(this.$this$rethrow2__1.js_1, this.code_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var result = suspendResult;
            var tmp_2 = this;
            var tmp_3;
            switch (result.operation) {
              case 'EMAIL_SIGNIN':
                tmp_3 = SignInWithEmailLink_getInstance();
                break;
              case 'VERIFY_EMAIL':
                tmp_3 = new VerifyEmail(ensureNotNull(result.data.email));
                break;
              case 'PASSWORD_RESET':
                tmp_3 = new PasswordReset(ensureNotNull(result.data.email));
                break;
              case 'RECOVER_EMAIL':
                tmp_3 = new RecoverEmail(ensureNotNull(result.data.email), ensureNotNull(result.data.previousEmail));
                break;
              case 'VERIFY_AND_CHANGE_EMAIL':
                tmp_3 = new VerifyBeforeChangeEmail(ensureNotNull(result.data.email), ensureNotNull(result.data.previousEmail));
                break;
              case 'REVERT_SECOND_FACTOR_ADDITION':
                var tmp_4 = ensureNotNull(result.data.email);
                var tmp1_safe_receiver = result.data.multiFactorInfo;
                var tmp_5;
                if (tmp1_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  tmp_5 = new MultiFactorInfo(tmp1_safe_receiver);
                }

                tmp_3 = new RevertSecondFactorAddition(tmp_4, tmp_5);
                break;
              default:
                throw UnsupportedOperationException_init_$Create$(result.operation);
            }

            var tmp_6 = tmp_3;
            return tmp_6 instanceof ActionCodeResult ? tmp_6 : THROW_CCE();
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_7 = this.get_exception_x0n6w6_k$();
            if (tmp_7 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function FirebaseAuth(js) {
    this.js_1 = js;
  }
  protoOf(FirebaseAuth).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(FirebaseAuth).get_currentUser_nu6naz_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.<get-currentUser>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.currentUser;
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
  protoOf(FirebaseAuth).get_authStateChanged_qc3kvo_k$ = function () {
    return callbackFlow(FirebaseAuth$_get_authStateChanged_$slambda_447979_0(this, null));
  };
  protoOf(FirebaseAuth).get_idTokenChanged_b91mwv_k$ = function () {
    return callbackFlow(FirebaseAuth$_get_idTokenChanged_$slambda_g6y7sw_0(this, null));
  };
  protoOf(FirebaseAuth).set_languageCode_aeqzbc_k$ = function (value) {
    this.js_1.languageCode = value;
  };
  protoOf(FirebaseAuth).get_languageCode_u2605u_k$ = function () {
    var tmp0_elvis_lhs = this.js_1.languageCode;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(FirebaseAuth).applyActionCode_com7bm_k$ = function (code, $completion) {
    var tmp = new $applyActionCodeCOROUTINE$0(this, code, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).confirmPasswordReset_m0hbnn_k$ = function (code, newPassword, $completion) {
    var tmp = new $confirmPasswordResetCOROUTINE$1(this, code, newPassword, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).createUserWithEmailAndPassword_vs43mf_k$ = function (email, password, $completion) {
    var tmp = new $createUserWithEmailAndPasswordCOROUTINE$2(this, email, password, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).fetchSignInMethodsForEmail_k4owok_k$ = function (email, $completion) {
    var tmp = new $fetchSignInMethodsForEmailCOROUTINE$3(this, email, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).sendPasswordResetEmail_19ef82_k$ = function (email, actionCodeSettings, $completion) {
    var tmp = new $sendPasswordResetEmailCOROUTINE$4(this, email, actionCodeSettings, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).sendPasswordResetEmail$default_ndplmq_k$ = function (email, actionCodeSettings, $completion, $super) {
    actionCodeSettings = actionCodeSettings === VOID ? null : actionCodeSettings;
    return $super === VOID ? this.sendPasswordResetEmail_19ef82_k$(email, actionCodeSettings, $completion) : $super.sendPasswordResetEmail_19ef82_k$.call(this, email, actionCodeSettings, $completion);
  };
  protoOf(FirebaseAuth).sendSignInLinkToEmail_h8vdk6_k$ = function (email, actionCodeSettings, $completion) {
    var tmp = new $sendSignInLinkToEmailCOROUTINE$5(this, email, actionCodeSettings, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).isSignInWithEmailLink_9gfwye_k$ = function (link) {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseAuth.isSignInWithEmailLink.<anonymous>' call
        tmp$ret$2 = isSignInWithEmailLink(this.js_1, link);
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
  protoOf(FirebaseAuth).signInWithEmailAndPassword_q2ahrm_k$ = function (email, password, $completion) {
    var tmp = new $signInWithEmailAndPasswordCOROUTINE$6(this, email, password, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).signInWithCustomToken_iu9cum_k$ = function (token, $completion) {
    var tmp = new $signInWithCustomTokenCOROUTINE$7(this, token, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).signInAnonymously_woxphw_k$ = function ($completion) {
    var tmp = new $signInAnonymouslyCOROUTINE$8(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).signInWithCredential_79zje6_k$ = function (authCredential, $completion) {
    var tmp = new $signInWithCredentialCOROUTINE$9(this, authCredential, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).signInWithEmailLink_ybmcsi_k$ = function (email, link, $completion) {
    var tmp = new $signInWithEmailLinkCOROUTINE$10(this, email, link, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).signOut_t9fplm_k$ = function ($completion) {
    var tmp = new $signOutCOROUTINE$11(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).updateCurrentUser_txbp04_k$ = function (user, $completion) {
    var tmp = new $updateCurrentUserCOROUTINE$12(this, user, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).verifyPasswordResetCode_p0vqp_k$ = function (code, $completion) {
    var tmp = new $verifyPasswordResetCodeCOROUTINE$13(this, code, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).checkActionCode_a9gj3g_k$ = function (code, $completion) {
    var tmp = new $checkActionCodeCOROUTINE$14(this, code, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseAuth).useEmulator_zgpl6e_k$ = function (host, port) {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        connectAuthEmulator(this.js_1, 'http://' + host + ':' + port);
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
    return Unit_getInstance();
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
    this.js_1 = js;
  }
  protoOf(AuthResult).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(AuthResult).get_user_wovspg_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-user>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.user;
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
  protoOf(AuthResult).get_credential_vh51cw_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-credential>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.credential;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-credential>.<anonymous>.<anonymous>' call
          tmp = new AuthCredential(tmp0_safe_receiver);
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
  protoOf(AuthResult).get_additionalUserInfo_86ooif_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-additionalUserInfo>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.additionalUserInfo;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.AuthResult.<get-additionalUserInfo>.<anonymous>.<anonymous>' call
          tmp = new AdditionalUserInfo(tmp0_safe_receiver);
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
  function rethrow(_this__u8e3s4, function_0) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        tmp$ret$1 = function_0(_this__u8e3s4);
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
    return tmp$ret$1;
  }
  function toJson(_this__u8e3s4) {
    var tmp = to('url', _this__u8e3s4.get_url_18iuii_k$());
    var tmp0_safe_receiver = _this__u8e3s4.get_androidPackageName_pevt7_k$();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.auth.toJson.<anonymous>' call
      tmp_0 = json([to('installApp', tmp0_safe_receiver.get_installIfNotAvailable_j7qtz9_k$()), to('minimumVersion', tmp0_safe_receiver.get_minimumVersion_mihuyb_k$()), to('packageName', tmp0_safe_receiver.get_packageName_sx93t4_k$())]);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1 = to('android', tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = _this__u8e3s4.get_dynamicLinkDomain_h0va98_k$();
    var tmp_2 = to('dynamicLinkDomain', tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs);
    var tmp_3 = to('handleCodeInApp', _this__u8e3s4.get_canHandleCodeInApp_r5rr34_k$());
    var tmp_4;
    if (_this__u8e3s4.get_iOSBundleId_uwwb9d_k$() == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.auth.toJson.<anonymous>' call
      tmp_4 = json([to('bundleId', _this__u8e3s4.get_iOSBundleId_uwwb9d_k$())]);
    }
    var tmp4_elvis_lhs = tmp_4;
    return json([tmp, tmp_1, tmp_2, tmp_3, to('ios', tmp4_elvis_lhs == null ? undefined : tmp4_elvis_lhs)]);
  }
  function AdditionalUserInfo(js) {
    this.js_1 = js;
  }
  protoOf(AdditionalUserInfo).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(AdditionalUserInfo).get_providerId_gs3zwr_k$ = function () {
    return this.js_1.providerId;
  };
  protoOf(AdditionalUserInfo).get_username_ytz5i7_k$ = function () {
    return this.js_1.username;
  };
  protoOf(AdditionalUserInfo).get_profile_3uo4e8_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'dev.gitlive.firebase.auth.AdditionalUserInfo.<get-profile>.<anonymous>' call
          var tmp0_elvis_lhs = this.js_1.profile;
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = null;
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var profile = tmp;
          var tmp_0 = Object.entries;
          var entries = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : THROW_CCE();
          // Inline function 'kotlin.collections.associate' call
          var this_0 = entries(profile);
          var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
          // Inline function 'kotlin.collections.associateTo' call
          var destination = LinkedHashMap_init_$Create$(capacity);
          var inductionVariable = 0;
          var last = this_0.length;
          while (inductionVariable < last) {
            var element = this_0[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'dev.gitlive.firebase.auth.AdditionalUserInfo.<get-profile>.<anonymous>.<anonymous>' call
            var tmp_1 = element[0];
            var pair = to((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE(), element[1]);
            destination.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
          }
          tmp$ret$0 = destination;
        }
        tmp$ret$5 = tmp$ret$0;
        break $l$block_0;
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
    return tmp$ret$5;
  };
  protoOf(AdditionalUserInfo).get_isNewUser_tfy6ag_k$ = function () {
    return this.js_1.newUser;
  };
  function rethrow_0(function_0) {
    try {
      return function_0();
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
  function errorToException(cause) {
    var tmp0_safe_receiver = cause.code;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
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
  function AuthTokenResult(js) {
    this.js_1 = js;
  }
  protoOf(AuthTokenResult).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(AuthTokenResult).get_claims_byamyo_k$ = function () {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp = Object.keys(this.js_1.claims);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'dev.gitlive.firebase.auth.AuthTokenResult.<get-claims>.<anonymous>' call
      var tmp0_safe_receiver = this.js_1.claims[element];
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.auth.AuthTokenResult.<get-claims>.<anonymous>.<anonymous>' call
        tmp_0 = to(element, tmp0_safe_receiver);
      }
      var tmp0_safe_receiver_0 = tmp_0;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver_0);
      }
    }
    return toMap(destination);
  };
  protoOf(AuthTokenResult).get_signInProvider_x2h44_k$ = function () {
    return this.js_1.signInProvider;
  };
  protoOf(AuthTokenResult).get_token_iz6pxs_k$ = function () {
    return this.js_1.token;
  };
  function errorToException$accessor$skzgst(cause) {
    return errorToException(cause);
  }
  function AuthCredential(js) {
    this.js_1 = js;
  }
  protoOf(AuthCredential).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(AuthCredential).get_providerId_gs3zwr_k$ = function () {
    return this.js_1.providerId;
  };
  function PhoneAuthCredential(js) {
    AuthCredential.call(this, js);
  }
  function MultiFactorInfo(js) {
    this.js_1 = js;
  }
  protoOf(MultiFactorInfo).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(MultiFactorInfo).get_displayName_sscnb0_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactorInfo.<get-displayName>.<anonymous>' call
        tmp$ret$2 = this.js_1.displayName;
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
  protoOf(MultiFactorInfo).get_enrollmentTime_y3gj5y_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactorInfo.<get-enrollmentTime>.<anonymous>' call
        tmp$ret$2 = (new Date(this.js_1.enrollmentTime)).getTime() / 1000.0;
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
  protoOf(MultiFactorInfo).get_factorId_nch9il_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactorInfo.<get-factorId>.<anonymous>' call
        tmp$ret$2 = this.js_1.factorId;
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
  protoOf(MultiFactorInfo).get_uid_18iuqh_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactorInfo.<get-uid>.<anonymous>' call
        tmp$ret$2 = this.js_1.uid;
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
  function $enrollCOROUTINE$15(_this__u8e3s4, multiFactorAssertion, displayName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.multiFactorAssertion_1 = multiFactorAssertion;
    this.displayName_1 = displayName;
  }
  protoOf($enrollCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.enroll(this.multiFactorAssertion_1.js_1, this.displayName_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $getSessionCOROUTINE$16(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getSessionCOROUTINE$16).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.getSession(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new MultiFactorSession(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $unenrollCOROUTINE$17(_this__u8e3s4, multiFactorInfo, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.multiFactorInfo_1 = multiFactorInfo;
  }
  protoOf($unenrollCOROUTINE$17).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.unenroll(this.multiFactorInfo_1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $unenrollCOROUTINE$18(_this__u8e3s4, factorUid, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.factorUid_1 = factorUid;
  }
  protoOf($unenrollCOROUTINE$18).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.unenroll(this.factorUid_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function MultiFactor(js) {
    this.js_1 = js;
  }
  protoOf(MultiFactor).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(MultiFactor).get_enrolledFactors_lwzw4q_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactor.<get-enrolledFactors>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = this.js_1.enrolledFactors;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(this_0.length);
        var inductionVariable = 0;
        var last = this_0.length;
        while (inductionVariable < last) {
          var item = this_0[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.auth.MultiFactor.<get-enrolledFactors>.<anonymous>.<anonymous>' call
          var tmp$ret$0 = new MultiFactorInfo(item);
          destination.add_utx5q5_k$(tmp$ret$0);
        }
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
    return destination;
  };
  protoOf(MultiFactor).enroll_teug14_k$ = function (multiFactorAssertion, displayName, $completion) {
    var tmp = new $enrollCOROUTINE$15(this, multiFactorAssertion, displayName, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MultiFactor).getSession_i1xul_k$ = function ($completion) {
    var tmp = new $getSessionCOROUTINE$16(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MultiFactor).unenroll_wf0oyo_k$ = function (multiFactorInfo, $completion) {
    var tmp = new $unenrollCOROUTINE$17(this, multiFactorInfo, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MultiFactor).unenroll_sm3s2s_k$ = function (factorUid, $completion) {
    var tmp = new $unenrollCOROUTINE$18(this, factorUid, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function MultiFactorAssertion(js) {
    this.js_1 = js;
  }
  protoOf(MultiFactorAssertion).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(MultiFactorAssertion).get_factorId_nch9il_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.MultiFactorAssertion.<get-factorId>.<anonymous>' call
        tmp$ret$2 = this.js_1.factorId;
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
  function MultiFactorSession(js) {
    this.js_1 = js;
  }
  protoOf(MultiFactorSession).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  function $deleteCOROUTINE$19(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($deleteCOROUTINE$19).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.delete(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $reloadCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($reloadCOROUTINE$20).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.reload(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $getIdTokenCOROUTINE$21(_this__u8e3s4, forceRefresh, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.forceRefresh_1 = forceRefresh;
  }
  protoOf($getIdTokenCOROUTINE$21).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.$this$rethrow2__1.js_1.getIdToken(this.forceRefresh_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $getIdTokenResultCOROUTINE$22(_this__u8e3s4, forceRefresh, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.forceRefresh_1 = forceRefresh;
  }
  protoOf($getIdTokenResultCOROUTINE$22).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(getIdTokenResult(this.$this$rethrow2__1.js_1, this.forceRefresh_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthTokenResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $linkWithCredentialCOROUTINE$23(_this__u8e3s4, credential, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.credential_1 = credential;
  }
  protoOf($linkWithCredentialCOROUTINE$23).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(linkWithCredential(this.$this$rethrow2__1.js_1, this.credential_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $reauthenticateCOROUTINE$24(_this__u8e3s4, credential, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.credential_1 = credential;
  }
  protoOf($reauthenticateCOROUTINE$24).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(reauthenticateWithCredential(this.$this$rethrow2__1.js_1, this.credential_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $reauthenticateAndRetrieveDataCOROUTINE$25(_this__u8e3s4, credential, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.credential_1 = credential;
  }
  protoOf($reauthenticateAndRetrieveDataCOROUTINE$25).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(reauthenticateWithCredential(this.$this$rethrow2__1.js_1, this.credential_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new AuthResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $sendEmailVerificationCOROUTINE$26(_this__u8e3s4, actionCodeSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.actionCodeSettings_1 = actionCodeSettings;
  }
  protoOf($sendEmailVerificationCOROUTINE$26).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            var tmp0_safe_receiver = this.actionCodeSettings_1;
            suspendResult = await_0(sendEmailVerification(this.$this$rethrow2__1.js_1, tmp0_safe_receiver == null ? null : toJson(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $unlinkCOROUTINE$27(_this__u8e3s4, provider, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.provider_1 = provider;
  }
  protoOf($unlinkCOROUTINE$27).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(unlink(this.$this$rethrow2__1.js_1, this.provider_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$01__1 = new FirebaseUser(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updateEmailCOROUTINE$28(_this__u8e3s4, email, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.email_1 = email;
  }
  protoOf($updateEmailCOROUTINE$28).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(updateEmail(this.$this$rethrow2__1.js_1, this.email_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updatePasswordCOROUTINE$29(_this__u8e3s4, password, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.password_1 = password;
  }
  protoOf($updatePasswordCOROUTINE$29).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(updatePassword(this.$this$rethrow2__1.js_1, this.password_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updatePhoneNumberCOROUTINE$30(_this__u8e3s4, credential, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.credential_1 = credential;
  }
  protoOf($updatePhoneNumberCOROUTINE$30).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(updatePhoneNumber(this.$this$rethrow2__1.js_1, this.credential_1.get_js_nsc52g_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $updateProfileCOROUTINE$31(_this__u8e3s4, displayName, photoUrl, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.displayName_1 = displayName;
    this.photoUrl_1 = photoUrl;
  }
  protoOf($updateProfileCOROUTINE$31).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.request3__1 = listOf([to('displayName', this.displayName_1), to('photoURL', this.photoUrl_1)]);
            this.set_state_rjd8d0_k$(2);
            var this_0 = this.request3__1;
            suspendResult = await_0(updateProfile(this.$this$rethrow2__1.js_1, json(copyToArray(this_0).slice())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function $verifyBeforeUpdateEmailCOROUTINE$32(_this__u8e3s4, newEmail, actionCodeSettings, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.newEmail_1 = newEmail;
    this.actionCodeSettings_1 = actionCodeSettings;
  }
  protoOf($verifyBeforeUpdateEmailCOROUTINE$32).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1;
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this;
            tmp_1.$this$rethrow2__1 = this.this0__1;
            this.set_state_rjd8d0_k$(2);
            var tmp0_safe_receiver = this.actionCodeSettings_1;
            suspendResult = await_0(verifyBeforeUpdateEmail(this.$this$rethrow2__1.js_1, this.newEmail_1, tmp0_safe_receiver == null ? null : toJson(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_2 = this;
            tmp_2.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$01__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException$accessor$skzgst(e_0);
            }

          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  function FirebaseUser(js) {
    this.js_1 = js;
  }
  protoOf(FirebaseUser).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(FirebaseUser).get_uid_18iuqh_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-uid>.<anonymous>' call
        tmp$ret$2 = this.js_1.uid;
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
  protoOf(FirebaseUser).get_displayName_sscnb0_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-displayName>.<anonymous>' call
        tmp$ret$2 = this.js_1.displayName;
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
  protoOf(FirebaseUser).get_email_iqwbqr_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-email>.<anonymous>' call
        tmp$ret$2 = this.js_1.email;
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
  protoOf(FirebaseUser).get_phoneNumber_5u28eq_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-phoneNumber>.<anonymous>' call
        tmp$ret$2 = this.js_1.phoneNumber;
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
  protoOf(FirebaseUser).get_photoURL_i5i27a_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-photoURL>.<anonymous>' call
        tmp$ret$2 = this.js_1.photoURL;
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
  protoOf(FirebaseUser).get_isAnonymous_19zn5y_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-isAnonymous>.<anonymous>' call
        tmp$ret$2 = this.js_1.isAnonymous;
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
  protoOf(FirebaseUser).get_isEmailVerified_axpf9t_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-isEmailVerified>.<anonymous>' call
        tmp$ret$2 = this.js_1.emailVerified;
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
  protoOf(FirebaseUser).get_metaData_vroqag_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-metaData>.<anonymous>' call
        tmp$ret$2 = new UserMetaData(this.js_1.metadata);
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
  protoOf(FirebaseUser).get_multiFactor_353tdr_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-multiFactor>.<anonymous>' call
        tmp$ret$2 = new MultiFactor(multiFactor(this.js_1));
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
  protoOf(FirebaseUser).get_providerData_2e8b5o_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-providerData>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = this.js_1.providerData;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(this_0.length);
        var inductionVariable = 0;
        var last = this_0.length;
        while (inductionVariable < last) {
          var item = this_0[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-providerData>.<anonymous>.<anonymous>' call
          var tmp$ret$0 = new UserInfo(item);
          destination.add_utx5q5_k$(tmp$ret$0);
        }
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
    return destination;
  };
  protoOf(FirebaseUser).get_providerId_gs3zwr_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.FirebaseUser.<get-providerId>.<anonymous>' call
        tmp$ret$2 = this.js_1.providerId;
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
  protoOf(FirebaseUser).delete_4td7nw_k$ = function ($completion) {
    var tmp = new $deleteCOROUTINE$19(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).reload_1pf34y_k$ = function ($completion) {
    var tmp = new $reloadCOROUTINE$20(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).getIdToken_ha5gf1_k$ = function (forceRefresh, $completion) {
    var tmp = new $getIdTokenCOROUTINE$21(this, forceRefresh, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).getIdTokenResult_7dik47_k$ = function (forceRefresh, $completion) {
    var tmp = new $getIdTokenResultCOROUTINE$22(this, forceRefresh, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).linkWithCredential_17zmje_k$ = function (credential, $completion) {
    var tmp = new $linkWithCredentialCOROUTINE$23(this, credential, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).reauthenticate_oxs2k4_k$ = function (credential, $completion) {
    var tmp = new $reauthenticateCOROUTINE$24(this, credential, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).reauthenticateAndRetrieveData_vk4w2k_k$ = function (credential, $completion) {
    var tmp = new $reauthenticateAndRetrieveDataCOROUTINE$25(this, credential, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).sendEmailVerification_knjagd_k$ = function (actionCodeSettings, $completion) {
    var tmp = new $sendEmailVerificationCOROUTINE$26(this, actionCodeSettings, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).sendEmailVerification$default_vm8k80_k$ = function (actionCodeSettings, $completion, $super) {
    actionCodeSettings = actionCodeSettings === VOID ? null : actionCodeSettings;
    return $super === VOID ? this.sendEmailVerification_knjagd_k$(actionCodeSettings, $completion) : $super.sendEmailVerification_knjagd_k$.call(this, actionCodeSettings, $completion);
  };
  protoOf(FirebaseUser).unlink_kgdt1b_k$ = function (provider, $completion) {
    var tmp = new $unlinkCOROUTINE$27(this, provider, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).updateEmail_r2ir5c_k$ = function (email, $completion) {
    var tmp = new $updateEmailCOROUTINE$28(this, email, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).updatePassword_jdcdnj_k$ = function (password, $completion) {
    var tmp = new $updatePasswordCOROUTINE$29(this, password, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).updatePhoneNumber_wb0yu4_k$ = function (credential, $completion) {
    var tmp = new $updatePhoneNumberCOROUTINE$30(this, credential, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).updateProfile_qtg8ud_k$ = function (displayName, photoUrl, $completion) {
    var tmp = new $updateProfileCOROUTINE$31(this, displayName, photoUrl, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).updateProfile$default_soavd1_k$ = function (displayName, photoUrl, $completion, $super) {
    displayName = displayName === VOID ? this.get_displayName_sscnb0_k$() : displayName;
    photoUrl = photoUrl === VOID ? this.get_photoURL_i5i27a_k$() : photoUrl;
    return $super === VOID ? this.updateProfile_qtg8ud_k$(displayName, photoUrl, $completion) : $super.updateProfile_qtg8ud_k$.call(this, displayName, photoUrl, $completion);
  };
  protoOf(FirebaseUser).verifyBeforeUpdateEmail_kqp2xp_k$ = function (newEmail, actionCodeSettings, $completion) {
    var tmp = new $verifyBeforeUpdateEmailCOROUTINE$32(this, newEmail, actionCodeSettings, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FirebaseUser).verifyBeforeUpdateEmail$default_6cd39y_k$ = function (newEmail, actionCodeSettings, $completion, $super) {
    actionCodeSettings = actionCodeSettings === VOID ? null : actionCodeSettings;
    return $super === VOID ? this.verifyBeforeUpdateEmail_kqp2xp_k$(newEmail, actionCodeSettings, $completion) : $super.verifyBeforeUpdateEmail_kqp2xp_k$.call(this, newEmail, actionCodeSettings, $completion);
  };
  function UserMetaData(js) {
    this.js_1 = js;
  }
  protoOf(UserMetaData).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(UserMetaData).get_creationTime_uru4d1_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserMetaData.<get-creationTime>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.creationTime;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.UserMetaData.<get-creationTime>.<anonymous>.<anonymous>' call
          tmp = (new Date(tmp0_safe_receiver)).getTime() / 1000.0;
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
  protoOf(UserMetaData).get_lastSignInTime_7ib3la_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$4;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserMetaData.<get-lastSignInTime>.<anonymous>' call
        var tmp0_safe_receiver = this.js_1.lastSignInTime;
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'dev.gitlive.firebase.auth.UserMetaData.<get-lastSignInTime>.<anonymous>.<anonymous>' call
          tmp = (new Date(tmp0_safe_receiver)).getTime() / 1000.0;
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
  function UserInfo(js) {
    this.js_1 = js;
  }
  protoOf(UserInfo).get_js_nsc52g_k$ = function () {
    return this.js_1;
  };
  protoOf(UserInfo).get_displayName_sscnb0_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-displayName>.<anonymous>' call
        tmp$ret$2 = this.js_1.displayName;
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
  protoOf(UserInfo).get_email_iqwbqr_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-email>.<anonymous>' call
        tmp$ret$2 = this.js_1.email;
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
  protoOf(UserInfo).get_phoneNumber_5u28eq_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-phoneNumber>.<anonymous>' call
        tmp$ret$2 = this.js_1.phoneNumber;
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
  protoOf(UserInfo).get_photoURL_i5i27a_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-photoURL>.<anonymous>' call
        tmp$ret$2 = this.js_1.photoURL;
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
  protoOf(UserInfo).get_providerId_gs3zwr_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-providerId>.<anonymous>' call
        tmp$ret$2 = this.js_1.providerId;
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
  protoOf(UserInfo).get_uid_18iuqh_k$ = function () {
    // Inline function 'dev.gitlive.firebase.auth.rethrow' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.auth.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.auth.rethrow.<anonymous>' call
        // Inline function 'dev.gitlive.firebase.auth.UserInfo.<get-uid>.<anonymous>' call
        tmp$ret$2 = this.js_1.uid;
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
