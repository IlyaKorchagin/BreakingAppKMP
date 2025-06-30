(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './coil-root-coil-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./coil-root-coil-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'coil-root-coil'.");
    }
    if (typeof globalThis['coil-root-coil-core'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil'. Its dependency 'coil-root-coil-core' was not found. Please, check whether 'coil-root-coil-core' is loaded prior to 'coil-root-coil'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'coil-root-coil'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'coil-root-coil'.");
    }
    globalThis['coil-root-coil'] = factory(typeof globalThis['coil-root-coil'] === 'undefined' ? {} : globalThis['coil-root-coil'], globalThis['kotlin-kotlin-stdlib'], globalThis['coil-root-coil-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_io_coil_kt_coil3_coil_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var isInterface = kotlin_kotlin.$_$.oe;
  var ImageLoader = kotlin_io_coil_kt_coil3_coil_core.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var equals = kotlin_kotlin.$_$.od;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var hashCode = kotlin_kotlin.$_$.xd;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var Builder_init_$Create$ = kotlin_io_coil_kt_coil3_coil_core.$_$.c1;
  var Key = kotlin_io_coil_kt_coil3_coil_core.$_$.q;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForObject(SingletonImageLoader, 'SingletonImageLoader');
  initMetadataForClass(sam$coil3_SingletonImageLoader_Factory$0, 'sam$coil3_SingletonImageLoader_Factory$0', VOID, VOID, [Factory, FunctionAdapter]);
  //endregion
  function get_DefaultSingletonImageLoaderFactory() {
    _init_properties_SingletonImageLoader_kt__bjc86b();
    return DefaultSingletonImageLoaderFactory;
  }
  var DefaultSingletonImageLoaderFactory;
  function get_DefaultSingletonImageLoaderKey() {
    _init_properties_SingletonImageLoader_kt__bjc86b();
    return DefaultSingletonImageLoaderKey;
  }
  var DefaultSingletonImageLoaderKey;
  function newImageLoader($this, context) {
    var imageLoader = null;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var this_0 = $this.nl6_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'coil3.SingletonImageLoader.newImageLoader.<anonymous>' call
        var tmp;
        if (!(cur == null) ? isInterface(cur, ImageLoader) : false) {
          tmp = cur;
        } else {
          if (!(imageLoader == null)) {
            tmp = imageLoader;
          } else {
            // Inline function 'kotlin.also' call
            var tmp0_safe_receiver = (!(cur == null) ? isInterface(cur, Factory) : false) ? cur : null;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ol6(context);
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var tmp2_safe_receiver = applicationImageLoaderFactory(context);
              tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ol6(context);
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }
            var tmp3_elvis_lhs = tmp_0;
            var this_1 = tmp3_elvis_lhs == null ? get_DefaultSingletonImageLoaderFactory().ol6(context) : tmp3_elvis_lhs;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'coil3.SingletonImageLoader.newImageLoader.<anonymous>.<anonymous>' call
            imageLoader = this_1;
            tmp = this_1;
          }
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = upd;
          break $l$block;
        }
      }
    }
    var tmp_1 = tmp$ret$2;
    return (!(tmp_1 == null) ? isInterface(tmp_1, ImageLoader) : false) ? tmp_1 : THROW_CCE();
  }
  function Factory() {
  }
  function SingletonImageLoader() {
    SingletonImageLoader_instance = this;
    this.nl6_1 = atomic$ref$1(null);
  }
  protoOf(SingletonImageLoader).pl6 = function (context) {
    var tmp = this.nl6_1.kotlinx$atomicfu$value;
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, ImageLoader) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? newImageLoader(this, context) : tmp0_elvis_lhs;
  };
  var SingletonImageLoader_instance;
  function SingletonImageLoader_getInstance() {
    if (SingletonImageLoader_instance == null)
      new SingletonImageLoader();
    return SingletonImageLoader_instance;
  }
  function sam$coil3_SingletonImageLoader_Factory$0(function_0) {
    this.ql6_1 = function_0;
  }
  protoOf(sam$coil3_SingletonImageLoader_Factory$0).ol6 = function (context) {
    return this.ql6_1(context);
  };
  protoOf(sam$coil3_SingletonImageLoader_Factory$0).x3 = function () {
    return this.ql6_1;
  };
  protoOf(sam$coil3_SingletonImageLoader_Factory$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Factory) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.x3(), other.x3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$coil3_SingletonImageLoader_Factory$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function DefaultSingletonImageLoaderFactory$lambda(context) {
    _init_properties_SingletonImageLoader_kt__bjc86b();
    // Inline function 'kotlin.apply' call
    var this_0 = Builder_init_$Create$(context);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'coil3.DefaultSingletonImageLoaderFactory.<anonymous>.<anonymous>' call
    this_0.qke_1.hkc(get_DefaultSingletonImageLoaderKey(), Unit_instance);
    return this_0.a2u();
  }
  var properties_initialized_SingletonImageLoader_kt_6s3swr;
  function _init_properties_SingletonImageLoader_kt__bjc86b() {
    if (!properties_initialized_SingletonImageLoader_kt_6s3swr) {
      properties_initialized_SingletonImageLoader_kt_6s3swr = true;
      var tmp = DefaultSingletonImageLoaderFactory$lambda;
      DefaultSingletonImageLoaderFactory = new sam$coil3_SingletonImageLoader_Factory$0(tmp);
      DefaultSingletonImageLoaderKey = new Key(Unit_instance);
    }
  }
  function applicationImageLoaderFactory(_this__u8e3s4) {
    return null;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SingletonImageLoader_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=coil-root-coil.js.map
