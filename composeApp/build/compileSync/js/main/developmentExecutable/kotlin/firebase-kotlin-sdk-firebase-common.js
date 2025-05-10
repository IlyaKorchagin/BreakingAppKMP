(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'firebase-kotlin-sdk-firebase-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'firebase-kotlin-sdk-firebase-common'.");
    }
    globalThis['firebase-kotlin-sdk-firebase-common'] = factory(typeof globalThis['firebase-kotlin-sdk-firebase-common'] === 'undefined' ? {} : globalThis['firebase-kotlin-sdk-firebase-common'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.yh;
  var initMetadataForInterface = kotlin_kotlin.$_$.ug;
  var VOID = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.xn;
  var getStringHashCode = kotlin_kotlin.$_$.og;
  var Annotation = kotlin_kotlin.$_$.bn;
  var initMetadataForClass = kotlin_kotlin.$_$.qg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Builder, 'Builder');
  initMetadataForInterface(EncodeDecodeSettings, 'EncodeDecodeSettings');
  initMetadataForInterface(EncodeSettings, 'EncodeSettings', VOID, VOID, [EncodeDecodeSettings]);
  initMetadataForInterface(Builder_0, 'Builder');
  initMetadataForInterface(EncodeDecodeSettingsBuilder, 'EncodeDecodeSettingsBuilder', VOID, VOID, [Builder, Builder_0]);
  initMetadataForInterface(DecodeSettings, 'DecodeSettings', VOID, VOID, [EncodeDecodeSettings]);
  initMetadataForClass(FirebaseClassDiscriminator, 'FirebaseClassDiscriminator', VOID, VOID, [Annotation]);
  //endregion
  function Builder() {
  }
  function EncodeSettings() {
  }
  function EncodeDecodeSettingsBuilder() {
  }
  function Builder_0() {
  }
  function DecodeSettings() {
  }
  function EncodeDecodeSettings() {
  }
  function FirebaseClassDiscriminator(discriminator) {
    this.discriminator_1 = discriminator;
  }
  protoOf(FirebaseClassDiscriminator).get_discriminator_wfz2j1_k$ = function () {
    return this.discriminator_1;
  };
  protoOf(FirebaseClassDiscriminator).equals = function (other) {
    if (!(other instanceof FirebaseClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof FirebaseClassDiscriminator ? other : THROW_CCE();
    if (!(this.discriminator_1 === tmp0_other_with_cast.discriminator_1))
      return false;
    return true;
  };
  protoOf(FirebaseClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.discriminator_1);
  };
  protoOf(FirebaseClassDiscriminator).toString = function () {
    return '@dev.gitlive.firebase.FirebaseClassDiscriminator(' + 'discriminator=' + this.discriminator_1 + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Builder_0;
  _.$_$.b = DecodeSettings;
  _.$_$.c = EncodeDecodeSettingsBuilder;
  _.$_$.d = Builder;
  _.$_$.e = EncodeSettings;
  _.$_$.f = FirebaseClassDiscriminator;
  //endregion
  return _;
}));

//# sourceMappingURL=firebase-kotlin-sdk-firebase-common.js.map
