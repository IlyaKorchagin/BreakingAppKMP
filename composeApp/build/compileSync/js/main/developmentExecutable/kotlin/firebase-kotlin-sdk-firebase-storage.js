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
  var imul = Math.imul;
  var connectStorageEmulator = $module$firebase_storage_vitn9j.connectStorageEmulator;
  var ref = $module$firebase_storage_vitn9j.ref;
  var getStorage = $module$firebase_storage_vitn9j.getStorage;
  var getMetadata = $module$firebase_storage_vitn9j.getMetadata;
  var deleteObject = $module$firebase_storage_vitn9j.deleteObject;
  var getDownloadURL = $module$firebase_storage_vitn9j.getDownloadURL;
  var listAll = $module$firebase_storage_vitn9j.listAll;
  var uploadBytes = $module$firebase_storage_vitn9j.uploadBytes;
  var ref_0 = $module$firebase_storage_vitn9j.ref;
  var uploadBytesResumable = $module$firebase_storage_vitn9j.uploadBytesResumable;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var protoOf = kotlin_kotlin.$_$.ki;
  var toString = kotlin_kotlin.$_$.oi;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var hashCode = kotlin_kotlin.$_$.bh;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var initMetadataForInterface = kotlin_kotlin.$_$.gh;
  var Companion_getInstance = kotlin_kotlin.$_$.j6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration = kotlin_kotlin.$_$.nn;
  var Duration__toDouble_impl_a56y2b = kotlin_kotlin.$_$.w3;
  var Exception = kotlin_kotlin.$_$.bo;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e3;
  var NotImplementedError = kotlin_kotlin.$_$.ho;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.sh;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var to = kotlin_kotlin.$_$.fq;
  var toList = kotlin_kotlin.$_$.be;
  var copyToArray = kotlin_kotlin.$_$.aa;
  var json = kotlin_kotlin.$_$.zh;
  var FirebaseException = kotlin_dev_gitlive_firebase_app.$_$.a;
  var captureStack = kotlin_kotlin.$_$.jg;
  var println = kotlin_kotlin.$_$.dg;
  var mapCapacity = kotlin_kotlin.$_$.zb;
  var coerceAtLeast = kotlin_kotlin.$_$.cj;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var emptyMap = kotlin_kotlin.$_$.fa;
  var toMutableMap = kotlin_kotlin.$_$.ne;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FirebaseStorageMetadata, 'FirebaseStorageMetadata', FirebaseStorageMetadata);
  initMetadataForInterface(ProgressFlow, 'ProgressFlow', VOID, VOID, [Flow], [1]);
  initMetadataForClass(Progress, 'Progress');
  initMetadataForClass(Running, 'Running', VOID, Progress);
  initMetadataForClass(Paused, 'Paused', VOID, Progress);
  initMetadataForClass(FirebaseStorage, 'FirebaseStorage');
  initMetadataForClass(StorageReference$putFileResumable$1, VOID, VOID, VOID, [ProgressFlow], [1]);
  initMetadataForLambda(StorageReference$putFileResumable$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($getMetadataCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($deleteCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($getDownloadUrlCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($listAllCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($putFileCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($putDataCOROUTINE$5, CoroutineImpl);
  initMetadataForClass(StorageReference, 'StorageReference', VOID, VOID, VOID, [0, 2]);
  initMetadataForClass(Data, 'Data');
  initMetadataForClass(ListResult, 'ListResult');
  initMetadataForClass(FirebaseStorageException, 'FirebaseStorageException', VOID, FirebaseException);
  //endregion
  function FirebaseStorageMetadata(md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata) {
    md5Hash = md5Hash === VOID ? null : md5Hash;
    cacheControl = cacheControl === VOID ? null : cacheControl;
    contentDisposition = contentDisposition === VOID ? null : contentDisposition;
    contentEncoding = contentEncoding === VOID ? null : contentEncoding;
    contentLanguage = contentLanguage === VOID ? null : contentLanguage;
    contentType = contentType === VOID ? null : contentType;
    var tmp;
    if (customMetadata === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = customMetadata;
    }
    customMetadata = tmp;
    this.md5Hash_1 = md5Hash;
    this.cacheControl_1 = cacheControl;
    this.contentDisposition_1 = contentDisposition;
    this.contentEncoding_1 = contentEncoding;
    this.contentLanguage_1 = contentLanguage;
    this.contentType_1 = contentType;
    this.customMetadata_1 = customMetadata;
  }
  protoOf(FirebaseStorageMetadata).set_md5Hash_lhm2ns_k$ = function (_set____db54di) {
    this.md5Hash_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_md5Hash_fm6zlv_k$ = function () {
    return this.md5Hash_1;
  };
  protoOf(FirebaseStorageMetadata).set_cacheControl_mq94wv_k$ = function (_set____db54di) {
    this.cacheControl_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_cacheControl_hk7inw_k$ = function () {
    return this.cacheControl_1;
  };
  protoOf(FirebaseStorageMetadata).set_contentDisposition_sam7j8_k$ = function (_set____db54di) {
    this.contentDisposition_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_contentDisposition_rd8xyx_k$ = function () {
    return this.contentDisposition_1;
  };
  protoOf(FirebaseStorageMetadata).set_contentEncoding_r5w2iw_k$ = function (_set____db54di) {
    this.contentEncoding_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_contentEncoding_xxy9kt_k$ = function () {
    return this.contentEncoding_1;
  };
  protoOf(FirebaseStorageMetadata).set_contentLanguage_rnlry5_k$ = function (_set____db54di) {
    this.contentLanguage_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_contentLanguage_hwcgs8_k$ = function () {
    return this.contentLanguage_1;
  };
  protoOf(FirebaseStorageMetadata).set_contentType_7wbb1b_k$ = function (_set____db54di) {
    this.contentType_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  protoOf(FirebaseStorageMetadata).set_customMetadata_rrhenf_k$ = function (_set____db54di) {
    this.customMetadata_1 = _set____db54di;
  };
  protoOf(FirebaseStorageMetadata).get_customMetadata_kpvmt3_k$ = function () {
    return this.customMetadata_1;
  };
  protoOf(FirebaseStorageMetadata).setCustomMetadata_86i5nl_k$ = function (key, value) {
    if (value == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.customMetadata_1.put_4fpzoq_k$(key, value);
    }
  };
  protoOf(FirebaseStorageMetadata).component1_7eebsc_k$ = function () {
    return this.md5Hash_1;
  };
  protoOf(FirebaseStorageMetadata).component2_7eebsb_k$ = function () {
    return this.cacheControl_1;
  };
  protoOf(FirebaseStorageMetadata).component3_7eebsa_k$ = function () {
    return this.contentDisposition_1;
  };
  protoOf(FirebaseStorageMetadata).component4_7eebs9_k$ = function () {
    return this.contentEncoding_1;
  };
  protoOf(FirebaseStorageMetadata).component5_7eebs8_k$ = function () {
    return this.contentLanguage_1;
  };
  protoOf(FirebaseStorageMetadata).component6_7eebs7_k$ = function () {
    return this.contentType_1;
  };
  protoOf(FirebaseStorageMetadata).component7_7eebs6_k$ = function () {
    return this.customMetadata_1;
  };
  protoOf(FirebaseStorageMetadata).copy_lc5drh_k$ = function (md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata) {
    return new FirebaseStorageMetadata(md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata);
  };
  protoOf(FirebaseStorageMetadata).copy$default_hneqn0_k$ = function (md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata, $super) {
    md5Hash = md5Hash === VOID ? this.md5Hash_1 : md5Hash;
    cacheControl = cacheControl === VOID ? this.cacheControl_1 : cacheControl;
    contentDisposition = contentDisposition === VOID ? this.contentDisposition_1 : contentDisposition;
    contentEncoding = contentEncoding === VOID ? this.contentEncoding_1 : contentEncoding;
    contentLanguage = contentLanguage === VOID ? this.contentLanguage_1 : contentLanguage;
    contentType = contentType === VOID ? this.contentType_1 : contentType;
    customMetadata = customMetadata === VOID ? this.customMetadata_1 : customMetadata;
    return $super === VOID ? this.copy_lc5drh_k$(md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata) : $super.copy_lc5drh_k$.call(this, md5Hash, cacheControl, contentDisposition, contentEncoding, contentLanguage, contentType, customMetadata);
  };
  protoOf(FirebaseStorageMetadata).toString = function () {
    return 'FirebaseStorageMetadata(md5Hash=' + this.md5Hash_1 + ', cacheControl=' + this.cacheControl_1 + ', contentDisposition=' + this.contentDisposition_1 + ', contentEncoding=' + this.contentEncoding_1 + ', contentLanguage=' + this.contentLanguage_1 + ', contentType=' + this.contentType_1 + ', customMetadata=' + toString(this.customMetadata_1) + ')';
  };
  protoOf(FirebaseStorageMetadata).hashCode = function () {
    var result = this.md5Hash_1 == null ? 0 : getStringHashCode(this.md5Hash_1);
    result = imul(result, 31) + (this.cacheControl_1 == null ? 0 : getStringHashCode(this.cacheControl_1)) | 0;
    result = imul(result, 31) + (this.contentDisposition_1 == null ? 0 : getStringHashCode(this.contentDisposition_1)) | 0;
    result = imul(result, 31) + (this.contentEncoding_1 == null ? 0 : getStringHashCode(this.contentEncoding_1)) | 0;
    result = imul(result, 31) + (this.contentLanguage_1 == null ? 0 : getStringHashCode(this.contentLanguage_1)) | 0;
    result = imul(result, 31) + (this.contentType_1 == null ? 0 : getStringHashCode(this.contentType_1)) | 0;
    result = imul(result, 31) + hashCode(this.customMetadata_1) | 0;
    return result;
  };
  protoOf(FirebaseStorageMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FirebaseStorageMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof FirebaseStorageMetadata ? other : THROW_CCE();
    if (!(this.md5Hash_1 == tmp0_other_with_cast.md5Hash_1))
      return false;
    if (!(this.cacheControl_1 == tmp0_other_with_cast.cacheControl_1))
      return false;
    if (!(this.contentDisposition_1 == tmp0_other_with_cast.contentDisposition_1))
      return false;
    if (!(this.contentEncoding_1 == tmp0_other_with_cast.contentEncoding_1))
      return false;
    if (!(this.contentLanguage_1 == tmp0_other_with_cast.contentLanguage_1))
      return false;
    if (!(this.contentType_1 == tmp0_other_with_cast.contentType_1))
      return false;
    if (!equals(this.customMetadata_1, tmp0_other_with_cast.customMetadata_1))
      return false;
    return true;
  };
  function ProgressFlow() {
  }
  function Running(bytesTransferred, totalByteCount) {
    Progress.call(this, bytesTransferred, totalByteCount);
  }
  function Paused(bytesTransferred, totalByteCount) {
    Progress.call(this, bytesTransferred, totalByteCount);
  }
  function Progress(bytesTransferred, totalByteCount) {
    this.bytesTransferred_1 = bytesTransferred;
    this.totalByteCount_1 = totalByteCount;
  }
  protoOf(Progress).get_bytesTransferred_x053w_k$ = function () {
    return this.bytesTransferred_1;
  };
  protoOf(Progress).get_totalByteCount_ckmyvg_k$ = function () {
    return this.totalByteCount_1;
  };
  function storageMetadata(init) {
    var metadata = new FirebaseStorageMetadata();
    init(metadata);
    return metadata;
  }
  function FirebaseStorage(js) {
    this.js_1 = js;
    var tmp = this;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var this_0 = this.js_1.maxOperationRetryTime;
    tmp.maxOperationRetryTime_1 = toDuration(this_0, DurationUnit_MILLISECONDS_getInstance());
    var tmp_0 = this;
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var this_1 = this.js_1.maxUploadRetryTime;
    tmp_0.maxUploadRetryTime_1 = toDuration(this_1, DurationUnit_MILLISECONDS_getInstance());
  }
  protoOf(FirebaseStorage).get_js_xt67rz_k$ = function () {
    return this.js_1;
  };
  protoOf(FirebaseStorage).get_maxOperationRetryTime_kv2t1b_k$ = function () {
    return this.maxOperationRetryTime_1;
  };
  protoOf(FirebaseStorage).get_maxUploadRetryTime_rpzwwf_k$ = function () {
    return this.maxUploadRetryTime_1;
  };
  protoOf(FirebaseStorage).setMaxOperationRetryTime_dln5x_k$ = function (maxOperationRetryTime) {
    this.js_1.maxOperationRetryTime = Duration__toDouble_impl_a56y2b(maxOperationRetryTime, DurationUnit_MILLISECONDS_getInstance());
  };
  protoOf(FirebaseStorage).setMaxUploadRetryTime_pfl2lf_k$ = function (maxUploadRetryTime) {
    this.js_1.maxUploadRetryTime = Duration__toDouble_impl_a56y2b(maxUploadRetryTime, DurationUnit_MILLISECONDS_getInstance());
  };
  protoOf(FirebaseStorage).useEmulator_zgpl6e_k$ = function (host, port) {
    connectStorageEmulator(this.js_1, host, port);
  };
  protoOf(FirebaseStorage).get_reference_6sahcu_k$ = function () {
    return new StorageReference(ref(this.js_1));
  };
  protoOf(FirebaseStorage).reference_8wmp8v_k$ = function (location) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'dev.gitlive.firebase.storage.rethrow' call
      try {
        // Inline function 'dev.gitlive.firebase.storage.FirebaseStorage.reference.<anonymous>' call
        tmp$ret$1 = new StorageReference(ref(this.js_1, location));
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
  function StorageReference$putFileResumable$slambda$lambda($this_callbackFlow) {
    return function (it) {
      switch (it.state) {
        case 'paused':
          new ChannelResult($this_callbackFlow.trySend_62dpg8_k$(new Paused(it.bytesTransferred, it.totalBytes)));
          break;
        case 'running':
          new ChannelResult($this_callbackFlow.trySend_62dpg8_k$(new Running(it.bytesTransferred, it.totalBytes)));
          break;
        case 'canceled':
          cancel($this_callbackFlow);
          break;
        case 'success':
        case 'error':
          break;
        default:
          // Inline function 'kotlin.TODO' call

          var reason = 'Unknown state ' + it.state;
          throw new NotImplementedError('An operation is not implemented: ' + reason);
      }
      return Unit_getInstance();
    };
  }
  function StorageReference$putFileResumable$slambda$lambda_0($this_callbackFlow) {
    return function (it) {
      $this_callbackFlow.close_ukldxa_k$(errorToException(it));
      return Unit_getInstance();
    };
  }
  function StorageReference$putFileResumable$slambda$lambda_1($this_callbackFlow) {
    return function () {
      $this_callbackFlow.close$default_kcbl7u_k$();
      return Unit_getInstance();
    };
  }
  function StorageReference$putFileResumable$slambda$lambda_2($unsubscribe) {
    return function () {
      $unsubscribe();
      return Unit_getInstance();
    };
  }
  function StorageReference$putFileResumable$1($flow, $uploadTask) {
    this.$flow_1 = $flow;
    this.$uploadTask_1 = $uploadTask;
  }
  protoOf(StorageReference$putFileResumable$1).collect_rppmet_k$ = function (collector, $completion) {
    return emitAll(collector, this.$flow_1, $completion);
  };
  protoOf(StorageReference$putFileResumable$1).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_rppmet_k$(collector, $completion);
  };
  protoOf(StorageReference$putFileResumable$1).pause_d8d7e_k$ = function () {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.storage.<no name provided>.pause.<anonymous>' call
    this.$uploadTask_1.pause();
    return Unit_getInstance();
  };
  protoOf(StorageReference$putFileResumable$1).resume_2o15jx_k$ = function () {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.storage.<no name provided>.resume.<anonymous>' call
    this.$uploadTask_1.resume();
    return Unit_getInstance();
  };
  protoOf(StorageReference$putFileResumable$1).cancel_2l89ey_k$ = function () {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.gitlive.firebase.storage.<no name provided>.cancel.<anonymous>' call
    this.$uploadTask_1.cancel();
    return Unit_getInstance();
  };
  function StorageReference$putFileResumable$slambda($uploadTask, resultContinuation) {
    this.$uploadTask_1 = $uploadTask;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StorageReference$putFileResumable$slambda).invoke_3b9g2_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_bpo5ni_k$($this$callbackFlow, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference$putFileResumable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_3b9g2_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StorageReference$putFileResumable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var tmp_1 = StorageReference$putFileResumable$slambda$lambda(this.$this$callbackFlow_1);
            var tmp_2 = StorageReference$putFileResumable$slambda$lambda_0(this.$this$callbackFlow_1);
            tmp_0.unsubscribe0__1 = this.$uploadTask_1.on('state_changed', tmp_1, tmp_2, StorageReference$putFileResumable$slambda$lambda_1(this.$this$callbackFlow_1));
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, StorageReference$putFileResumable$slambda$lambda_2(this.unsubscribe0__1), this);
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
  protoOf(StorageReference$putFileResumable$slambda).create_bpo5ni_k$ = function ($this$callbackFlow, completion) {
    var i = new StorageReference$putFileResumable$slambda(this.$uploadTask_1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(StorageReference$putFileResumable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_bpo5ni_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function StorageReference$putFileResumable$slambda_0($uploadTask, resultContinuation) {
    var i = new StorageReference$putFileResumable$slambda($uploadTask, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_3b9g2_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $getMetadataCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getMetadataCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(getMetadata(this._this__u8e3s4__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$00__1 = toFirebaseStorageMetadata(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$00__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function $deleteCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($deleteCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(deleteObject(this._this__u8e3s4__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function $getDownloadUrlCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getDownloadUrlCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(getDownloadURL(this._this__u8e3s4__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$00__1 = toString(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$00__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function $listAllCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($listAllCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(listAll(this._this__u8e3s4__1.js_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.tmp$ret$00__1 = new ListResult(ARGUMENT);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.tmp$ret$00__1;
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function $putFileCOROUTINE$4(_this__u8e3s4, file, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.file_1 = file;
    this.metadata_1 = metadata;
  }
  protoOf($putFileCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            var tmp0_safe_receiver = this.metadata_1;
            suspendResult = await_0(uploadBytes(this._this__u8e3s4__1.js_1, this.file_1, tmp0_safe_receiver == null ? null : toStorageMetadata(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function $putDataCOROUTINE$5(_this__u8e3s4, data, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.data_1 = data;
    this.metadata_1 = metadata;
  }
  protoOf($putDataCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            var tmp0_safe_receiver = this.metadata_1;
            suspendResult = await_0(uploadBytes(this._this__u8e3s4__1.js_1, this.data_1.data_1, tmp0_safe_receiver == null ? null : toStorageMetadata(tmp0_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.tmp$ret$00__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              throw e;
            } else {
              var e_0 = this.get_exception_x0n6w6_k$();
              throw errorToException(e_0);
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
  function StorageReference(js) {
    this.js_1 = js;
  }
  protoOf(StorageReference).get_js_xt67rz_k$ = function () {
    return this.js_1;
  };
  protoOf(StorageReference).get_path_wos8ry_k$ = function () {
    return this.js_1.fullPath;
  };
  protoOf(StorageReference).get_name_woqyms_k$ = function () {
    return this.js_1.name;
  };
  protoOf(StorageReference).get_bucket_bm8h6b_k$ = function () {
    return this.js_1.bucket;
  };
  protoOf(StorageReference).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.js_1.parent;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'dev.gitlive.firebase.storage.StorageReference.<get-parent>.<anonymous>' call
      tmp = new StorageReference(tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(StorageReference).get_root_wott0r_k$ = function () {
    return new StorageReference(this.js_1.root);
  };
  protoOf(StorageReference).get_storage_twal4e_k$ = function () {
    return new FirebaseStorage(this.js_1.storage);
  };
  protoOf(StorageReference).getMetadata_9mcus3_k$ = function ($completion) {
    var tmp = new $getMetadataCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).child_23d9su_k$ = function (path) {
    return new StorageReference(ref_0(this.js_1, path));
  };
  protoOf(StorageReference).delete_4td7nw_k$ = function ($completion) {
    var tmp = new $deleteCOROUTINE$1(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).getDownloadUrl_3dcadq_k$ = function ($completion) {
    var tmp = new $getDownloadUrlCOROUTINE$2(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).listAll_6qxfki_k$ = function ($completion) {
    var tmp = new $listAllCOROUTINE$3(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).putFile_h3qqdp_k$ = function (file, metadata, $completion) {
    var tmp = new $putFileCOROUTINE$4(this, file, metadata, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).putFile$default_4g4n23_k$ = function (file, metadata, $completion, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.putFile_h3qqdp_k$(file, metadata, $completion) : $super.putFile_h3qqdp_k$.call(this, file, metadata, $completion);
  };
  protoOf(StorageReference).putData_ocka40_k$ = function (data, metadata, $completion) {
    var tmp = new $putDataCOROUTINE$5(this, data, metadata, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StorageReference).putData$default_2gk39e_k$ = function (data, metadata, $completion, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.putData_ocka40_k$(data, metadata, $completion) : $super.putData_ocka40_k$.call(this, data, metadata, $completion);
  };
  protoOf(StorageReference).putFileResumable_x4g02g_k$ = function (file, metadata) {
    // Inline function 'dev.gitlive.firebase.storage.rethrow' call
    try {
      var uploadTask = uploadBytesResumable(this.js_1, file, metadata == null ? null : toStorageMetadata(metadata));
      var flow = callbackFlow(StorageReference$putFileResumable$slambda_0(uploadTask, null));
      return new StorageReference$putFileResumable$1(flow, uploadTask);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw e;
      } else {
        var e_0 = $p;
        throw errorToException(e_0);
      }
    }
  };
  protoOf(StorageReference).putFileResumable$default_968lra_k$ = function (file, metadata, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.putFileResumable_x4g02g_k$(file, metadata) : $super.putFileResumable_x4g02g_k$.call(this, file, metadata);
  };
  function Data(data) {
    this.data_1 = data;
  }
  protoOf(Data).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function rethrow(function_0) {
    try {
      return function_0();
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
  function toFirebaseStorageMetadata(_this__u8e3s4) {
    var sdkMetadata = _this__u8e3s4;
    return storageMetadata(toFirebaseStorageMetadata$lambda(sdkMetadata));
  }
  function ListResult(js) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = js.prefixes;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'dev.gitlive.firebase.storage.ListResult.prefixes.<anonymous>' call
      var tmp$ret$0 = new StorageReference(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.prefixes_1 = destination;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_1 = js.items;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(this_1.length);
    var inductionVariable_0 = 0;
    var last_0 = this_1.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = this_1[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'dev.gitlive.firebase.storage.ListResult.items.<anonymous>' call
      var tmp$ret$3 = new StorageReference(item_0);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    tmp_0.items_1 = destination_0;
    this.pageToken_1 = js.nextPageToken;
  }
  protoOf(ListResult).get_prefixes_hx0cqx_k$ = function () {
    return this.prefixes_1;
  };
  protoOf(ListResult).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(ListResult).get_pageToken_mymi2p_k$ = function () {
    return this.pageToken_1;
  };
  function toStorageMetadata(_this__u8e3s4) {
    var tmp = to('cacheControl', _this__u8e3s4.get_cacheControl_hk7inw_k$());
    var tmp_0 = to('contentDisposition', _this__u8e3s4.get_contentDisposition_rd8xyx_k$());
    var tmp_1 = to('contentEncoding', _this__u8e3s4.get_contentEncoding_xxy9kt_k$());
    var tmp_2 = to('contentLanguage', _this__u8e3s4.get_contentLanguage_hwcgs8_k$());
    var tmp_3 = to('contentType', _this__u8e3s4.get_contentType_7git4a_k$());
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toList(_this__u8e3s4.get_customMetadata_kpvmt3_k$());
    var tmp$ret$0 = copyToArray(this_0);
    return json([tmp, tmp_0, tmp_1, tmp_2, tmp_3, to('customMetadata', json(tmp$ret$0.slice())), to('md5Hash', _this__u8e3s4.get_md5Hash_fm6zlv_k$())]);
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
  function toFirebaseStorageMetadata$lambda($sdkMetadata) {
    return function ($this$storageMetadata) {
      $this$storageMetadata.set_md5Hash_lhm2ns_k$($sdkMetadata.md5Hash);
      $this$storageMetadata.set_cacheControl_mq94wv_k$($sdkMetadata.cacheControl);
      $this$storageMetadata.set_contentDisposition_sam7j8_k$($sdkMetadata.contentDisposition);
      $this$storageMetadata.set_contentEncoding_r5w2iw_k$($sdkMetadata.contentEncoding);
      $this$storageMetadata.set_contentLanguage_rnlry5_k$($sdkMetadata.contentLanguage);
      $this$storageMetadata.set_contentType_7wbb1b_k$($sdkMetadata.contentType);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = $sdkMetadata.customMetadata;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'dev.gitlive.firebase.storage.toFirebaseStorageMetadata.<anonymous>.<anonymous>' call
        var objectKeys = Object.keys;
        // Inline function 'kotlin.collections.associateWith' call
        // Inline function 'kotlin.js.unsafeCast' call
        var this_0 = objectKeys(tmp0_safe_receiver);
        var result = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(this_0.length), 16));
        // Inline function 'kotlin.collections.associateWithTo' call
        var inductionVariable = 0;
        var last = this_0.length;
        while (inductionVariable < last) {
          var element = this_0[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'dev.gitlive.firebase.storage.toFirebaseStorageMetadata.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.orEmpty' call
          var tmp0_safe_receiver_0 = tmp0_safe_receiver[element];
          var tmp0_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toString(tmp0_safe_receiver_0);
          var tmp$ret$2 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
          result.put_4fpzoq_k$(element, tmp$ret$2);
        }
        tmp = result;
      }
      var tmp0_elvis_lhs_0 = tmp;
      var tmp$ret$7 = tmp0_elvis_lhs_0 == null ? emptyMap() : tmp0_elvis_lhs_0;
      $this$storageMetadata.set_customMetadata_rrhenf_k$(toMutableMap(tmp$ret$7));
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Data;
  _.$_$.b = get_storage;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-storage.js.map
