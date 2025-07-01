(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ImagePicker-image_picker_lib'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ImagePicker-image_picker_lib'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'ImagePicker-image_picker_lib'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'ImagePicker-image_picker_lib'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ImagePicker-image_picker_lib'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ImagePicker-image_picker_lib'.");
    }
    globalThis['ImagePicker-image_picker_lib'] = factory(typeof globalThis['ImagePicker-image_picker_lib'] === 'undefined' ? {} : globalThis['ImagePicker-image_picker_lib'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.uj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var lazy = kotlin_kotlin.$_$.rp;
  var toString = kotlin_kotlin.$_$.oi;
  var getStringHashCode = kotlin_kotlin.$_$.ah;
  var hashCode = kotlin_kotlin.$_$.bh;
  var THROW_CCE = kotlin_kotlin.$_$.no;
  var equals = kotlin_kotlin.$_$.sg;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var Enum = kotlin_kotlin.$_$.zn;
  var filterNotNull = kotlin_kotlin.$_$.ma;
  var numberToInt = kotlin_kotlin.$_$.gi;
  var to = kotlin_kotlin.$_$.fq;
  var CoroutineImpl = kotlin_kotlin.$_$.uf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t2;
  var isInterface = kotlin_kotlin.$_$.sh;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.df;
  var initMetadataForLambda = kotlin_kotlin.$_$.hh;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var emptyList = kotlin_kotlin.$_$.ea;
  var startsWith = kotlin_kotlin.$_$.dm;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.ng;
  var charSequenceGet = kotlin_kotlin.$_$.mg;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h4;
  var toByte = kotlin_kotlin.$_$.li;
  var substringAfter = kotlin_kotlin.$_$.im;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.g2;
  var isBlank = kotlin_kotlin.$_$.jl;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Exception_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.eh;
  var SuspendFunction1 = kotlin_kotlin.$_$.wf;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectedMedia, 'SelectedMedia');
  initMetadataForClass(MediaType, 'MediaType', VOID, Enum);
  initMetadataForLambda(MediaPicker$pickMedia$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(MediaPicker, 'MediaPicker');
  initMetadataForCoroutine($getFileFromUirCOROUTINE$0, CoroutineImpl);
  //endregion
  var imagepicker_image_picker_lib_generated_resources_Res_drawable$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_string$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_array$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_plurals$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_font$stable;
  var imagepicker_image_picker_lib_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/imagepicker.image_picker_lib.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/imagepicker.image_picker_lib.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allDrawableResources$delegate;
    allDrawableResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringResources$delegate;
    allStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringArrayResources$delegate;
    allStringArrayResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allPluralStringResources$delegate;
    allPluralStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allFontResources$delegate;
    allFontResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allDrawableResources$factory() {
    return getPropertyCallableRef('allDrawableResources', 1, KProperty1, function (receiver) {
      return get_allDrawableResources(receiver);
    }, null);
  }
  function allStringResources$factory() {
    return getPropertyCallableRef('allStringResources', 1, KProperty1, function (receiver) {
      return get_allStringResources(receiver);
    }, null);
  }
  function allStringArrayResources$factory() {
    return getPropertyCallableRef('allStringArrayResources', 1, KProperty1, function (receiver) {
      return get_allStringArrayResources(receiver);
    }, null);
  }
  function allPluralStringResources$factory() {
    return getPropertyCallableRef('allPluralStringResources', 1, KProperty1, function (receiver) {
      return get_allPluralStringResources(receiver);
    }, null);
  }
  function allFontResources$factory() {
    return getPropertyCallableRef('allFontResources', 1, KProperty1, function (receiver) {
      return get_allFontResources(receiver);
    }, null);
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
  }
  var team_platforma_kotlinmultiplatformsharedmodule_SelectedMedia$stable;
  function SelectedMedia(uri, byteArray, type) {
    this.uri_1 = uri;
    this.byteArray_1 = byteArray;
    this.type_1 = type;
  }
  protoOf(SelectedMedia).get_uri_18iuil_k$ = function () {
    return this.uri_1;
  };
  protoOf(SelectedMedia).get_byteArray_pv7794_k$ = function () {
    return this.byteArray_1;
  };
  protoOf(SelectedMedia).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(SelectedMedia).component1_7eebsc_k$ = function () {
    return this.uri_1;
  };
  protoOf(SelectedMedia).component2_7eebsb_k$ = function () {
    return this.byteArray_1;
  };
  protoOf(SelectedMedia).component3_7eebsa_k$ = function () {
    return this.type_1;
  };
  protoOf(SelectedMedia).copy_fr9zau_k$ = function (uri, byteArray, type) {
    return new SelectedMedia(uri, byteArray, type);
  };
  protoOf(SelectedMedia).copy$default_7yepb0_k$ = function (uri, byteArray, type, $super) {
    uri = uri === VOID ? this.uri_1 : uri;
    byteArray = byteArray === VOID ? this.byteArray_1 : byteArray;
    type = type === VOID ? this.type_1 : type;
    return $super === VOID ? this.copy_fr9zau_k$(uri, byteArray, type) : $super.copy_fr9zau_k$.call(this, uri, byteArray, type);
  };
  protoOf(SelectedMedia).toString = function () {
    return 'SelectedMedia(uri=' + this.uri_1 + ', byteArray=' + toString(this.byteArray_1) + ', type=' + this.type_1.toString() + ')';
  };
  protoOf(SelectedMedia).hashCode = function () {
    var result = getStringHashCode(this.uri_1);
    result = imul(result, 31) + (this.byteArray_1 == null ? 0 : hashCode(this.byteArray_1)) | 0;
    result = imul(result, 31) + this.type_1.hashCode() | 0;
    return result;
  };
  protoOf(SelectedMedia).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectedMedia))
      return false;
    var tmp0_other_with_cast = other instanceof SelectedMedia ? other : THROW_CCE();
    if (!(this.uri_1 === tmp0_other_with_cast.uri_1))
      return false;
    if (!equals(this.byteArray_1, tmp0_other_with_cast.byteArray_1))
      return false;
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  var MediaType_Image_instance;
  var MediaType_Video_instance;
  var MediaType_Unknown_instance;
  function values() {
    return [MediaType_Image_getInstance(), MediaType_Video_getInstance(), MediaType_Unknown_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Image':
        return MediaType_Image_getInstance();
      case 'Video':
        return MediaType_Video_getInstance();
      case 'Unknown':
        return MediaType_Unknown_getInstance();
      default:
        MediaType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var MediaType_entriesInitialized;
  function MediaType_initEntries() {
    if (MediaType_entriesInitialized)
      return Unit_getInstance();
    MediaType_entriesInitialized = true;
    MediaType_Image_instance = new MediaType('Image', 0);
    MediaType_Video_instance = new MediaType('Video', 1);
    MediaType_Unknown_instance = new MediaType('Unknown', 2);
  }
  var $ENTRIES;
  function MediaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MediaType_Image_getInstance() {
    MediaType_initEntries();
    return MediaType_Image_instance;
  }
  function MediaType_Video_getInstance() {
    MediaType_initEntries();
    return MediaType_Video_instance;
  }
  function MediaType_Unknown_getInstance() {
    MediaType_initEntries();
    return MediaType_Unknown_instance;
  }
  var team_platforma_kotlinmultiplatformsharedmodule_MediaPicker$stable;
  function MediaPicker$pickMedia$lambda$lambda$slambda$lambda($mediaFiles, $i, $uri, $type, $processedFiles, $files, $result) {
    return function (bytes) {
      $mediaFiles.set_82063s_k$($i, new SelectedMedia($uri, bytes, $type));
      var _unary__edvuaz = $processedFiles._v;
      $processedFiles._v = _unary__edvuaz + 1 | 0;
      var tmp;
      if ($processedFiles._v === $files.length) {
        MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(false);
        tmp = $result(filterNotNull($mediaFiles));
      }
      return Unit_getInstance();
    };
  }
  function _get__isDataLoading__leneym($this) {
    return $this._isDataLoading_1;
  }
  function compressImage($this, dataUri, compressBytes) {
    var image = new Image();
    image.src = dataUri;
    image.onload = MediaPicker$compressImage$lambda(image, compressBytes);
  }
  function resizeDimensions($this, originalWidth, originalHeight, maxWidth, maxHeight) {
    var width = originalWidth;
    var height = originalHeight;
    if (width > maxWidth || height > maxHeight) {
      var aspectRatio = width / height;
      if (aspectRatio > 1) {
        width = maxWidth;
        height = numberToInt(maxWidth / aspectRatio);
      } else {
        height = maxHeight;
        width = numberToInt(maxHeight * aspectRatio);
      }
    }
    return to(width, height);
  }
  function MediaPicker$pickSingleImage$lambda$lambda$lambda($selectionResult) {
    return function (bytes) {
      MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(false);
      $selectionResult(bytes);
      return Unit_getInstance();
    };
  }
  function MediaPicker$pickSingleImage$lambda$lambda($reader, $selectionResult) {
    return function (it) {
      var tmp = MediaPicker_getInstance();
      var tmp_0 = $reader.result;
      var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      compressImage(tmp, tmp_1, MediaPicker$pickSingleImage$lambda$lambda$lambda($selectionResult));
      return Unit_getInstance();
    };
  }
  function MediaPicker$pickSingleImage$lambda($input, $selectionResult) {
    return function (_unused_var__etf5q3) {
      var files = $input.files;
      var tmp;
      if (files == null) {
        tmp = null;
      } else {
        // Inline function 'org.w3c.files.get' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = files[0];
      }
      var tmp_0 = tmp;
      var singleFile = tmp_0 instanceof File ? tmp_0 : THROW_CCE();
      MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(true);
      var reader = new FileReader();
      reader.onload = MediaPicker$pickSingleImage$lambda$lambda(reader, $selectionResult);
      reader.readAsDataURL(singleFile);
      return Unit_getInstance();
    };
  }
  function MediaPicker$pickMedia$lambda$lambda$lambda($mediaFiles, $i, $reader, $type, $processedFiles, $files, $result) {
    return function (bytes) {
      var tmp = $reader.result;
      var tmp0_uri = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      $mediaFiles.set_82063s_k$($i, new SelectedMedia(tmp0_uri, bytes, $type));
      var _unary__edvuaz = $processedFiles._v;
      $processedFiles._v = _unary__edvuaz + 1 | 0;
      var tmp_0;
      if ($processedFiles._v === $files.length) {
        MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(false);
        tmp_0 = $result(filterNotNull($mediaFiles));
      }
      return Unit_getInstance();
    };
  }
  function MediaPicker$pickMedia$lambda$lambda$slambda($uri, $mediaFiles, $i, $type, $processedFiles, $files, $result, resultContinuation) {
    this.$uri_1 = $uri;
    this.$mediaFiles_1 = $mediaFiles;
    this.$i_1 = $i;
    this.$type_1 = $type;
    this.$processedFiles_1 = $processedFiles;
    this.$files_1 = $files;
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MediaPicker$pickMedia$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MediaPicker$pickMedia$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MediaPicker$pickMedia$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getFileFromUir(this.$uri_1, MediaPicker$pickMedia$lambda$lambda$slambda$lambda(this.$mediaFiles_1, this.$i_1, this.$uri_1, this.$type_1, this.$processedFiles_1, this.$files_1, this.$result_1), this);
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
  protoOf(MediaPicker$pickMedia$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MediaPicker$pickMedia$lambda$lambda$slambda(this.$uri_1, this.$mediaFiles_1, this.$i_1, this.$type_1, this.$processedFiles_1, this.$files_1, this.$result_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MediaPicker$pickMedia$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MediaPicker$pickMedia$lambda$lambda$slambda_0($uri, $mediaFiles, $i, $type, $processedFiles, $files, $result, resultContinuation) {
    var i = new MediaPicker$pickMedia$lambda$lambda$slambda($uri, $mediaFiles, $i, $type, $processedFiles, $files, $result, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MediaPicker$pickMedia$lambda$lambda($type, $reader, $mediaFiles, $i, $processedFiles, $files, $result) {
    return function (it) {
      var tmp;
      if ($type.equals(MediaType_Image_getInstance())) {
        var tmp_0 = MediaPicker_getInstance();
        var tmp_1 = $reader.result;
        var tmp_2 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
        compressImage(tmp_0, tmp_2, MediaPicker$pickMedia$lambda$lambda$lambda($mediaFiles, $i, $reader, $type, $processedFiles, $files, $result));
        tmp = Unit_getInstance();
      } else if ($type.equals(MediaType_Video_getInstance())) {
        var tmp_3 = $reader.result;
        var uri = (!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE();
        var coroutineScope = CoroutineScope_0(Dispatchers_getInstance().get_Main_wo5vz6_k$());
        tmp = launch(coroutineScope, VOID, VOID, MediaPicker$pickMedia$lambda$lambda$slambda_0(uri, $mediaFiles, $i, $type, $processedFiles, $files, $result, null));
      } else {
        tmp = Unit_getInstance();
      }
      return tmp;
    };
  }
  function MediaPicker$pickMedia$lambda($input, $result) {
    return function (_unused_var__etf5q3) {
      var files = $input.files;
      if (files == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = files.length;
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'team.platforma.kotlinmultiplatformsharedmodule.MediaPicker.pickMedia.<anonymous>.<anonymous>.<anonymous>' call
            list.add_utx5q5_k$(null);
          }
           while (inductionVariable < size);
        var mediaFiles = list;
        MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(true);
        if (!(files == null) && files.length > 0) {
          var processedFiles = {_v: 0};
          var inductionVariable_0 = 0;
          var last = files.length;
          if (inductionVariable_0 < last)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'org.w3c.files.get' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp = files[i];
              var file = tmp instanceof File ? tmp : THROW_CCE();
              var type = startsWith(file.type, 'image/') ? MediaType_Image_getInstance() : startsWith(file.type, 'video/') ? MediaType_Video_getInstance() : MediaType_Unknown_getInstance();
              var reader = new FileReader();
              reader.onload = MediaPicker$pickMedia$lambda$lambda(type, reader, mediaFiles, i, processedFiles, files, $result);
              reader.readAsDataURL(file);
            }
             while (inductionVariable_0 < last);
        } else {
          MediaPicker_getInstance()._isDataLoading_1.set_value_v1vabv_k$(false);
          $result(emptyList());
        }
      }
      return Unit_getInstance();
    };
  }
  function MediaPicker$compressImage$lambda$lambda$lambda($fileReader, $compressBytes) {
    return function (it) {
      var tmp = $fileReader.result;
      var arrayBuffer = tmp instanceof ArrayBuffer ? tmp : THROW_CCE();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var byteArray = new Int8Array(arrayBuffer);
      $compressBytes(byteArray);
      return Unit_getInstance();
    };
  }
  function MediaPicker$compressImage$lambda$lambda($compressBytes) {
    return function (blob) {
      var tmp;
      if (!(blob == null)) {
        var fileReader = new FileReader();
        fileReader.onloadend = MediaPicker$compressImage$lambda$lambda$lambda(fileReader, $compressBytes);
        fileReader.readAsArrayBuffer(blob);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function MediaPicker$compressImage$lambda($image, $compressBytes) {
    return function (it) {
      var tmp = document.createElement('canvas');
      var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
      var tmp_0 = canvas.getContext('2d');
      var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
      var maxWidth = 1024;
      var maxHeight = 1024;
      var _destruct__k2r9zo = resizeDimensions(MediaPicker_getInstance(), $image.width, $image.height, maxWidth, maxHeight);
      var newWidth = _destruct__k2r9zo.component1_7eebsc_k$();
      var newHeight = _destruct__k2r9zo.component2_7eebsb_k$();
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage($image, 0.0, 0.0, newWidth, newHeight);
      canvas.toBlob(MediaPicker$compressImage$lambda$lambda($compressBytes), 'image/jpeg', 1.0);
      return Unit_getInstance();
    };
  }
  function MediaPicker() {
    MediaPicker_instance = this;
    this._isDataLoading_1 = MutableStateFlow(false);
    this.isDataLoading_1 = this._isDataLoading_1;
  }
  protoOf(MediaPicker).pickSingleImage_n9qdx5_k$ = function (selectionResult) {
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = false;
    input.click();
    input.addEventListener('change', MediaPicker$pickSingleImage$lambda(input, selectionResult));
  };
  protoOf(MediaPicker).pickMedia_p2c2c1_k$ = function (result) {
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = 'image/*,video/*';
    input.multiple = true;
    input.click();
    input.addEventListener('change', MediaPicker$pickMedia$lambda(input, result));
  };
  protoOf(MediaPicker).get_isDataLoading_rkfhbz_k$ = function () {
    return this.isDataLoading_1;
  };
  var MediaPicker_instance;
  function MediaPicker_getInstance() {
    if (MediaPicker_instance == null)
      new MediaPicker();
    return MediaPicker_instance;
  }
  function getFileFromUir(uri, resolveByteArray, $completion) {
    var tmp = new $getFileFromUirCOROUTINE$0(uri, resolveByteArray, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function decodeBase64(base64) {
    return new Promise(decodeBase64$lambda(base64));
  }
  function decodeBase64$lambda($base64) {
    return function (resolve, reject) {
      var tmp;
      try {
        var tmp_0 = window.atob($base64);
        var binaryString = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
        var byteArray = new Uint8Array(binaryString.length);
        var inductionVariable = 0;
        var last = charSequenceLength(binaryString) - 1 | 0;
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.code' call
            var this_0 = charSequenceGet(binaryString, i);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
            // Inline function 'kotlin.js.asDynamic' call
            byteArray[i] = toByte(tmp$ret$0);
          }
           while (inductionVariable <= last);
        tmp = resolve(byteArray);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          tmp_1 = reject(e);
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function $getFileFromUirCOROUTINE$0(uri, resolveByteArray, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uri_1 = uri;
    this.resolveByteArray_1 = resolveByteArray;
  }
  protoOf($getFileFromUirCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            this.base64Data0__1 = substringAfter(this.uri_1, 'base64,', '');
            if (isBlank(this.base64Data0__1))
              throw Exception_init_$Create$('Invalid Base64 data');
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(decodeBase64(this.base64Data0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var binary = suspendResult;
            var tmp_0 = 0;
            var tmp_1 = binary.length;
            var tmp_2 = new Int8Array(tmp_1);
            while (tmp_0 < tmp_1) {
              var tmp_3 = tmp_0;
              tmp_2[tmp_3] = binary[tmp_3];
              tmp_0 = tmp_0 + 1 | 0;
            }

            var bytes = tmp_2;
            this.resolveByteArray_1(bytes);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(4);
            return Unit_getInstance();
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              throw Exception_init_$Create$_0('Failed to decode Base64 data: ' + e.message, e);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  //region block: init
  imagepicker_image_picker_lib_generated_resources_Res_drawable$stable = 0;
  imagepicker_image_picker_lib_generated_resources_Res_string$stable = 0;
  imagepicker_image_picker_lib_generated_resources_Res_array$stable = 0;
  imagepicker_image_picker_lib_generated_resources_Res_plurals$stable = 0;
  imagepicker_image_picker_lib_generated_resources_Res_font$stable = 0;
  imagepicker_image_picker_lib_generated_resources_Res$stable = 0;
  team_platforma_kotlinmultiplatformsharedmodule_SelectedMedia$stable = 8;
  team_platforma_kotlinmultiplatformsharedmodule_MediaPicker$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MediaPicker_getInstance;
  //endregion
  return _;
}));
