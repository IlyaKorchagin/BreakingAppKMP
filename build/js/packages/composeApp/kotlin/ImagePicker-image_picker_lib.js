(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ImagePicker-image_picker_lib'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ImagePicker-image_picker_lib'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ImagePicker-image_picker_lib'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ImagePicker-image_picker_lib'.");
    }
    globalThis['ImagePicker-image_picker_lib'] = factory(typeof globalThis['ImagePicker-image_picker_lib'] === 'undefined' ? {} : globalThis['ImagePicker-image_picker_lib'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var numberToInt = kotlin_kotlin.$_$.bf;
  var to = kotlin_kotlin.$_$.dm;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(MediaPicker, 'MediaPicker');
  //endregion
  var imagepicker_image_picker_lib_generated_resources_Res_drawable$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_string$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_array$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_plurals$stable;
  var imagepicker_image_picker_lib_generated_resources_Res_font$stable;
  var imagepicker_image_picker_lib_generated_resources_Res$stable;
  var team_platforma_kotlinmultiplatformsharedmodule_SelectedMedia$stable;
  var team_platforma_kotlinmultiplatformsharedmodule_MediaPicker$stable;
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
      MediaPicker_getInstance().lpd_1.a1y(false);
      $selectionResult(bytes);
      return Unit_instance;
    };
  }
  function MediaPicker$pickSingleImage$lambda$lambda($reader, $selectionResult) {
    return function (it) {
      var tmp = MediaPicker_getInstance();
      var tmp_0 = $reader.result;
      var tmp_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      compressImage(tmp, tmp_1, MediaPicker$pickSingleImage$lambda$lambda$lambda($selectionResult));
      return Unit_instance;
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
      MediaPicker_getInstance().lpd_1.a1y(true);
      var reader = new FileReader();
      reader.onload = MediaPicker$pickSingleImage$lambda$lambda(reader, $selectionResult);
      reader.readAsDataURL(singleFile);
      return Unit_instance;
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
      return Unit_instance;
    };
  }
  function MediaPicker$compressImage$lambda$lambda($compressBytes) {
    return function (blob) {
      var tmp;
      if (!(blob == null)) {
        var fileReader = new FileReader();
        fileReader.onloadend = MediaPicker$compressImage$lambda$lambda$lambda(fileReader, $compressBytes);
        fileReader.readAsArrayBuffer(blob);
        tmp = Unit_instance;
      }
      return Unit_instance;
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
      var newWidth = _destruct__k2r9zo.lb();
      var newHeight = _destruct__k2r9zo.mb();
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage($image, 0.0, 0.0, newWidth, newHeight);
      canvas.toBlob(MediaPicker$compressImage$lambda$lambda($compressBytes), 'image/jpeg', 1.0);
      return Unit_instance;
    };
  }
  function MediaPicker() {
    MediaPicker_instance = this;
    this.lpd_1 = MutableStateFlow(false);
    this.mpd_1 = this.lpd_1;
  }
  protoOf(MediaPicker).npd = function (selectionResult) {
    var tmp = document.createElement('input');
    var input = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = false;
    input.click();
    input.addEventListener('change', MediaPicker$pickSingleImage$lambda(input, selectionResult));
  };
  var MediaPicker_instance;
  function MediaPicker_getInstance() {
    if (MediaPicker_instance == null)
      new MediaPicker();
    return MediaPicker_instance;
  }
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

//# sourceMappingURL=ImagePicker-image_picker_lib.js.map
