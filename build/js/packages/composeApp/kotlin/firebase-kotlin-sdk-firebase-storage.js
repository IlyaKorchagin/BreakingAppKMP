(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'firebase/storage', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './firebase-kotlin-sdk-firebase-app.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('firebase/storage'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./firebase-kotlin-sdk-firebase-app.js'));
  else {
    if (typeof globalThis['firebase/storage'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-storage'. Its dependency 'firebase/storage' was not found. Please, check whether 'firebase/storage' is loaded prior to 'firebase-kotlin-sdk-firebase-storage'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-storage'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-storage'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-storage'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'firebase-kotlin-sdk-firebase-storage'.");
    }
    if (typeof globalThis['firebase-kotlin-sdk-firebase-app'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-storage'. Its dependency 'firebase-kotlin-sdk-firebase-app' was not found. Please, check whether 'firebase-kotlin-sdk-firebase-app' is loaded prior to 'firebase-kotlin-sdk-firebase-storage'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-storage'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-storage'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-storage'], globalThis['firebase/storage'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['firebase-kotlin-sdk-firebase-app']);
  }
}(function (_, $module$firebase_storage_vitn9j, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_dev_gitlive_firebase_app) {
  'use strict';
  //region block: imports
  var ref = $module$firebase_storage_vitn9j.ref;
  var getStorage = $module$firebase_storage_vitn9j.getStorage;
  var getDownloadURL = $module$firebase_storage_vitn9j.getDownloadURL;
  var uploadBytes = $module$firebase_storage_vitn9j.uploadBytes;
  var ref_0 = $module$firebase_storage_vitn9j.ref;
  var Companion_getInstance = kotlin_kotlin.$_$.w5;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration = kotlin_kotlin.$_$.rj;
  var Exception = kotlin_kotlin.$_$.dk;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var toString = kotlin_kotlin.$_$.jf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.j;
  var to = kotlin_kotlin.$_$.dm;
  var toList = kotlin_kotlin.$_$.qb;
  var copyToArray = kotlin_kotlin.$_$.k8;
  var json = kotlin_kotlin.$_$.ue;
  var FirebaseException = kotlin_dev_gitlive_firebase_app.$_$.a;
  var captureStack = kotlin_kotlin.$_$.fd;
  var println = kotlin_kotlin.$_$.ad;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FirebaseStorage, 'FirebaseStorage');
  initMetadataForCoroutine($getDownloadUrlCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($putDataCOROUTINE$5, CoroutineImpl);
  initMetadataForClass(StorageReference, 'StorageReference', VOID, VOID, VOID, [0, 2]);
  initMetadataForClass(Data, 'Data');
  initMetadataForClass(FirebaseStorageException, 'FirebaseStorageException', VOID, FirebaseException);
  //endregion
  function FirebaseStorage(js) {
    this.jld_1 = js;
    var tmp = this;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var this_0 = this.jld_1.maxOperationRetryTime;
    tmp.kld_1 = toDuration(this_0, DurationUnit_MILLISECONDS_getInstance());
    var tmp_0 = this;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var this_1 = this.jld_1.maxUploadRetryTime;
    tmp_0.lld_1 = toDuration(this_1, DurationUnit_MILLISECONDS_getInstance());
  }
  protoOf(FirebaseStorage).ui5 = function (location) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.storage.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.storage.FirebaseStorage.reference.<anonymous>' call
        tmp$ret$1 = new StorageReference(ref(this.jld_1, location));
        break $l$block;
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw e;
        } else {
          var e_0 = $p;
          throw errorToException(e_0);
        }
      }
    }
    return tmp$ret$1;
  };
  function get_storage(_this__u8e3s4) {
    return new FirebaseStorage(getStorage());
  }
  function $getDownloadUrlCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uld_1 = _this__u8e3s4;
  }
  protoOf($getDownloadUrlCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            suspendResult = await_0(getDownloadURL(this.uld_1.wld_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.vld_1 = toString(ARGUMENT);
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return this.vld_1;
          case 4:
            this.t9_1 = 5;
            var tmp_0 = this.v9_1;
            if (tmp_0 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException(e_0);
            }

          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.t9_1 === 5) {
          throw e_1;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_1;
        }
      }
     while (true);
  };
  function $putDataCOROUTINE$5(_this__u8e3s4, data, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fle_1 = _this__u8e3s4;
    this.gle_1 = data;
    this.hle_1 = metadata;
  }
  protoOf($putDataCOROUTINE$5).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            var tmp0_safe_receiver = this.hle_1;
            suspendResult = await_0(uploadBytes(this.fle_1.wld_1, this.gle_1.jle_1, tmp0_safe_receiver == null ? null : toStorageMetadata(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.ile_1 = Unit_instance;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            this.t9_1 = 5;
            var tmp_1 = this.v9_1;
            if (tmp_1 instanceof Exception) {
              var e = this.v9_1;
              throw e;
            } else {
              var e_0 = this.v9_1;
              throw errorToException(e_0);
            }

          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.t9_1 === 5) {
          throw e_1;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e_1;
        }
      }
     while (true);
  };
  function StorageReference(js) {
    this.wld_1 = js;
  }
  protoOf(StorageReference).ki5 = function (path) {
    return new StorageReference(ref_0(this.wld_1, path));
  };
  protoOf(StorageReference).kle = function ($completion) {
    var tmp = new $getDownloadUrlCOROUTINE$2(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StorageReference).lle = function (data, metadata, $completion) {
    var tmp = new $putDataCOROUTINE$5(this, data, metadata, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  function Data(data) {
    this.jle_1 = data;
  }
  function toStorageMetadata(_this__u8e3s4) {
    var tmp = to('cacheControl', _this__u8e3s4.nle_1);
    var tmp_0 = to('contentDisposition', _this__u8e3s4.ole_1);
    var tmp_1 = to('contentEncoding', _this__u8e3s4.ple_1);
    var tmp_2 = to('contentLanguage', _this__u8e3s4.qle_1);
    var tmp_3 = to('contentType', _this__u8e3s4.rle_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toList(_this__u8e3s4.sle_1);
    var tmp$ret$0 = copyToArray(this_0);
    return json([tmp, tmp_0, tmp_1, tmp_2, tmp_3, to('customMetadata', json(tmp$ret$0.slice())), to('md5Hash', _this__u8e3s4.mle_1)]);
  }
  function FirebaseStorageException(code, cause) {
    FirebaseException.call(this, code, cause);
    captureStack(this, FirebaseStorageException);
  }
  function errorToException(error) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_elvis_lhs = error == null ? null : error.code;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = error == null ? null : error.message;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp;
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.storage.errorToException.<anonymous>' call
    var code = toString(tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs).toLowerCase();
    var tmp_0;
    println('Unknown error code in ' + JSON.stringify(error));
    tmp_0 = new FirebaseStorageException(code, error instanceof Error ? error : THROW_CCE());
    return tmp_0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Data;
  _.$_$.b = get_storage;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-storage.js.map
