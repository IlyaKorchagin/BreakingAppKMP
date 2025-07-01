(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-core-core-uri'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-core-core-uri'.");
    }
    globalThis['compose-multiplatform-core-core-core-uri'] = factory(typeof globalThis['compose-multiplatform-core-core-core-uri'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-core-core-uri'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a4;
  var indexOf = kotlin_kotlin.$_$.il;
  var toCharArray = kotlin_kotlin.$_$.rm;
  var charSequenceGet = kotlin_kotlin.$_$.mg;
  var ensureNotNull = kotlin_kotlin.$_$.jp;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t1;
  var encodeToByteArray = kotlin_kotlin.$_$.yk;
  var protoOf = kotlin_kotlin.$_$.ki;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var toString = kotlin_kotlin.$_$.oi;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.q1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dh;
  var emptyList = kotlin_kotlin.$_$.ea;
  var getOrNull = kotlin_kotlin.$_$.fl;
  var Char = kotlin_kotlin.$_$.vn;
  var equals = kotlin_kotlin.$_$.sg;
  var charArrayOf = kotlin_kotlin.$_$.kg;
  var split = kotlin_kotlin.$_$.bm;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var lazy = kotlin_kotlin.$_$.rp;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var emptySet = kotlin_kotlin.$_$.ga;
  var toSet = kotlin_kotlin.$_$.pe;
  var KProperty1 = kotlin_kotlin.$_$.uj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h4;
  var toString_0 = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k2;
  var toByte = kotlin_kotlin.$_$.li;
  var decodeToString = kotlin_kotlin.$_$.xk;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var Exception = kotlin_kotlin.$_$.bo;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.f2;
  var captureStack = kotlin_kotlin.$_$.jg;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(InternalUri, 'InternalUri');
  initMetadataForClass(Uri, 'Uri');
  initMetadataForObject(UriUtils, 'UriUtils');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ActualUri, 'ActualUri', VOID, Uri);
  initMetadataForObject(UriCodec, 'UriCodec');
  initMetadataForClass(URISyntaxException, 'URISyntaxException', VOID, Exception);
  //endregion
  function isAllowed($this, c, allow) {
    return (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false) || (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) || !(indexOf("_-!.~'()*", c) === -1) || (!(allow == null) && !(indexOf(allow, c) === -1));
  }
  function _get_HEX_DIGITS__ouctnl($this) {
    return $this.HEX_DIGITS_1;
  }
  function InternalUri() {
    InternalUri_instance = this;
    this.HEX_DIGITS_1 = toCharArray('0123456789ABCDEF');
  }
  protoOf(InternalUri).encode_z49t0d_k$ = function (s, allow) {
    var encoded = null;
    var oldLength = s.length;
    var current = 0;
    while (current < oldLength) {
      var nextToEncode = current;
      while (nextToEncode < oldLength && isAllowed(this, charSequenceGet(s, nextToEncode), allow)) {
        nextToEncode = nextToEncode + 1 | 0;
      }
      if (nextToEncode === oldLength) {
        if (current === 0) {
          return s;
        } else {
          ensureNotNull(encoded).append_xdc1zw_k$(s, current, oldLength);
          return encoded.toString();
        }
      }
      if (encoded == null) {
        encoded = StringBuilder_init_$Create$();
      }
      if (nextToEncode > current) {
        encoded.append_xdc1zw_k$(s, current, nextToEncode);
      }
      current = nextToEncode;
      var nextAllowed = current + 1 | 0;
      while (nextAllowed < oldLength && !isAllowed(this, charSequenceGet(s, nextAllowed), allow)) {
        nextAllowed = nextAllowed + 1 | 0;
      }
      var bytes = encodeToByteArray(s, current, nextAllowed);
      var bytesLength = bytes.length;
      var inductionVariable = 0;
      if (inductionVariable < bytesLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          encoded.append_am5a4z_k$(_Char___init__impl__6a9atx(37));
          encoded.append_am5a4z_k$(this.HEX_DIGITS_1[(bytes[i] & 240) >> 4]);
          encoded.append_am5a4z_k$(this.HEX_DIGITS_1[bytes[i] & 15]);
        }
         while (inductionVariable < bytesLength);
      current = nextAllowed;
    }
    var tmp3_safe_receiver = encoded;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    return tmp4_elvis_lhs == null ? s : tmp4_elvis_lhs;
  };
  protoOf(InternalUri).encode$default_mldl96_k$ = function (s, allow, $super) {
    allow = allow === VOID ? null : allow;
    return $super === VOID ? this.encode_z49t0d_k$(s, allow) : $super.encode_z49t0d_k$.call(this, s, allow);
  };
  protoOf(InternalUri).decode_gmof1w_k$ = function (s) {
    return UriCodec_getInstance().decode_hm9h1w_k$(s, false, false);
  };
  protoOf(InternalUri).parsePath_9kgyju_k$ = function (uriString, ssi) {
    var length = uriString.length;
    var pathStart;
    if (length > (ssi + 2 | 0) && charSequenceGet(uriString, ssi + 1 | 0) === _Char___init__impl__6a9atx(47) && charSequenceGet(uriString, ssi + 2 | 0) === _Char___init__impl__6a9atx(47)) {
      pathStart = ssi + 3 | 0;
      LOOP: while (pathStart < length) {
        var tmp0_subject = charSequenceGet(uriString, pathStart);
        if (tmp0_subject === _Char___init__impl__6a9atx(63) ? true : tmp0_subject === _Char___init__impl__6a9atx(35))
          return '';
        else if (tmp0_subject === _Char___init__impl__6a9atx(47) ? true : tmp0_subject === _Char___init__impl__6a9atx(92))
          break LOOP;
        pathStart = pathStart + 1 | 0;
      }
    } else {
      pathStart = ssi + 1 | 0;
    }
    var pathEnd = pathStart;
    LOOP_0: while (pathEnd < length) {
      var tmp2_subject = charSequenceGet(uriString, pathEnd);
      if (tmp2_subject === _Char___init__impl__6a9atx(63) ? true : tmp2_subject === _Char___init__impl__6a9atx(35))
        break LOOP_0;
      pathEnd = pathEnd + 1 | 0;
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex = pathStart;
    var endIndex = pathEnd;
    // Inline function 'kotlin.js.asDynamic' call
    return uriString.substring(startIndex, endIndex);
  };
  var InternalUri_instance;
  function InternalUri_getInstance() {
    if (InternalUri_instance == null)
      new InternalUri();
    return InternalUri_instance;
  }
  function Uri() {
  }
  protoOf(Uri).getQueryParameters_43opsy_k$ = function (key) {
    var message = 'Abstract implementation';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Uri).getQueryParameterNames_ip5h67_k$ = function () {
    var message = 'Abstract implementation';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function UriUtils() {
    UriUtils_instance = this;
  }
  protoOf(UriUtils).encode_z49t0d_k$ = function (s, allow) {
    return InternalUri_getInstance().encode_z49t0d_k$(s, allow);
  };
  protoOf(UriUtils).encode$default_wfiqom_k$ = function (s, allow, $super) {
    allow = allow === VOID ? null : allow;
    return $super === VOID ? this.encode_z49t0d_k$(s, allow) : $super.encode_z49t0d_k$.call(this, s, allow);
  };
  protoOf(UriUtils).decode_gmof1w_k$ = function (s) {
    return InternalUri_getInstance().decode_gmof1w_k$(s);
  };
  protoOf(UriUtils).parse_pc1q8p_k$ = function (uriString) {
    return new ActualUri(uriString);
  };
  var UriUtils_instance;
  function UriUtils_getInstance() {
    if (UriUtils_instance == null)
      new UriUtils();
    return UriUtils_instance;
  }
  function _get_QUERY_PATTERN__287ch4($this) {
    return $this.QUERY_PATTERN_1;
  }
  function _get_FRAGMENT_PATTERN__n4mxd6($this) {
    return $this.FRAGMENT_PATTERN_1;
  }
  function _get_uriString__5epoks($this) {
    return $this.uriString_1;
  }
  function Companion() {
    Companion_instance = this;
    this.QUERY_PATTERN_1 = Regex_init_$Create$('^[^?#]+\\?([^#]*).*');
    this.FRAGMENT_PATTERN_1 = Regex_init_$Create$('#(.+)');
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _get__query__44rau6($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this._query$delegate_1;
    _query$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get__fragment__v30tj6($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this._fragment$delegate_1;
    _fragment$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_schemeSeparatorIndex__ogocx3($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.schemeSeparatorIndex$delegate_1;
    schemeSeparatorIndex$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get__pathSegments__1cu4t($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this._pathSegments$delegate_1;
    _pathSegments$factory();
    return this_0.get_value_j01efc_k$();
  }
  function isHierarchical($this) {
    if (_get_schemeSeparatorIndex__ogocx3($this) === -1)
      return true;
    if ($this.uriString_1.length === (_get_schemeSeparatorIndex__ogocx3($this) + 1 | 0))
      return false;
    return charSequenceGet($this.uriString_1, _get_schemeSeparatorIndex__ogocx3($this) + 1 | 0) === _Char___init__impl__6a9atx(47);
  }
  function ActualUri$_query$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = Companion_getInstance().QUERY_PATTERN_1.find$default_xakyli_k$(this$0.uriString_1);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_c1px32_k$(1);
      return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    };
  }
  function ActualUri$_fragment$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = Companion_getInstance().FRAGMENT_PATTERN_1.find$default_xakyli_k$(this$0.uriString_1);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_groups_dy12vx_k$();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_c1px32_k$(1);
      return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
    };
  }
  function ActualUri$schemeSeparatorIndex$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.uriString_1, _Char___init__impl__6a9atx(58));
    };
  }
  function ActualUri$_pathSegments$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_schemeSeparatorIndex__ogocx3(this$0);
      var tmp;
      if (ssi > -1) {
        if ((ssi + 1 | 0) === this$0.uriString_1.length)
          return emptyList();
        var tmp_0;
        var tmp_1 = getOrNull(this$0.uriString_1, ssi + 1 | 0);
        if (!equals(tmp_1 == null ? null : new Char(tmp_1), new Char(_Char___init__impl__6a9atx(47)))) {
          return emptyList();
        }
        tmp = tmp_0;
      }
      var path = InternalUri_getInstance().parsePath_9kgyju_k$(this$0.uriString_1, ssi);
      // Inline function 'kotlin.collections.map' call
      var this_0 = split(path, charArrayOf([_Char___init__impl__6a9atx(47)]));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.core.uri.ActualUri._pathSegments$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0 = ensureNotNull(InternalUri_getInstance().decode_gmof1w_k$(item));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return destination;
    };
  }
  function ActualUri(uriString) {
    Companion_getInstance();
    Uri.call(this);
    this.uriString_1 = uriString;
    var tmp = this;
    tmp._query$delegate_1 = lazy(ActualUri$_query$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0._fragment$delegate_1 = lazy(ActualUri$_fragment$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.schemeSeparatorIndex$delegate_1 = lazy(ActualUri$schemeSeparatorIndex$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2._pathSegments$delegate_1 = lazy(ActualUri$_pathSegments$delegate$lambda(this));
  }
  protoOf(ActualUri).getFragment_72llty_k$ = function () {
    return _get__fragment__v30tj6(this);
  };
  protoOf(ActualUri).getQuery_wh6ec2_k$ = function () {
    return _get__query__44rau6(this);
  };
  protoOf(ActualUri).getPathSegments_oqw8kb_k$ = function () {
    return _get__pathSegments__1cu4t(this);
  };
  protoOf(ActualUri).getQueryParameters_43opsy_k$ = function (key) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isHierarchical(this)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = _get__query__44rau6(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    var encodedKey = InternalUri_getInstance().encode$default_mldl96_k$(key);
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = split(query, charArrayOf([_Char___init__impl__6a9atx(38)]));
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'androidx.core.uri.ActualUri.getQueryParameters.<anonymous>' call
      var i = indexOf(element, _Char___init__impl__6a9atx(61));
      var tmp_0;
      if (i === -1) {
        tmp_0 = element === encodedKey ? '' : null;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        if (element.substring(0, i) === encodedKey) {
          var tmp_1 = InternalUri_getInstance();
          // Inline function 'kotlin.text.substring' call
          var startIndex = i + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$4 = element.substring(startIndex);
          tmp_0 = tmp_1.decode_gmof1w_k$(tmp$ret$4);
        } else {
          tmp_0 = null;
        }
      }
      var tmp0_safe_receiver = tmp_0;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return destination;
  };
  protoOf(ActualUri).getQueryParameterNames_ip5h67_k$ = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!isHierarchical(this)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = _get__query__44rau6(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptySet();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(query, charArrayOf([_Char___init__impl__6a9atx(38)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.core.uri.ActualUri.getQueryParameterNames.<anonymous>' call
        var index = indexOf(item, _Char___init__impl__6a9atx(61));
        var tmp_0;
        if (index === -1) {
          tmp$ret$1 = item;
          break $l$block;
        } else {
          var tmp_1 = InternalUri_getInstance();
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = item.substring(0, index);
          tmp_0 = ensureNotNull(tmp_1.decode_gmof1w_k$(tmp$ret$3));
        }
        tmp$ret$1 = tmp_0;
      }
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    return toSet(destination);
  };
  protoOf(ActualUri).toString = function () {
    return this.uriString_1;
  };
  function _query$factory() {
    return getPropertyCallableRef('_query', 1, KProperty1, function (receiver) {
      return _get__query__44rau6(receiver);
    }, null);
  }
  function _fragment$factory() {
    return getPropertyCallableRef('_fragment', 1, KProperty1, function (receiver) {
      return _get__fragment__v30tj6(receiver);
    }, null);
  }
  function schemeSeparatorIndex$factory() {
    return getPropertyCallableRef('schemeSeparatorIndex', 1, KProperty1, function (receiver) {
      return _get_schemeSeparatorIndex__ogocx3(receiver);
    }, null);
  }
  function _pathSegments$factory() {
    return getPropertyCallableRef('_pathSegments', 1, KProperty1, function (receiver) {
      return _get__pathSegments__1cu4t(receiver);
    }, null);
  }
  function hexCharToValue($this, c) {
    if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(c);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      return tmp - Char__toInt_impl_vasixd(this_0) | 0;
    }
    if (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      return tmp_0 - Char__toInt_impl_vasixd(this_1) | 0;
    }
    if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      return tmp_1 - Char__toInt_impl_vasixd(this_2) | 0;
    }
    return -1;
  }
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new URISyntaxException(uri, 'Unexpected character' + nameString + ': ' + toString_0(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new URISyntaxException(uri, 'Unexpected end of string' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function _get_INVALID_INPUT_CHARACTER__nvstol($this) {
    return $this.INVALID_INPUT_CHARACTER_1;
  }
  function appendDecoded($this, builder, s, convertPlus, throwOnFailure) {
    var tmp = 0;
    var tmp_0 = s.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var byteBuffer = tmp_1;
    var byteBufferPosition = {_v: 0};
    var i = 0;
    while (i < s.length) {
      var c = charSequenceGet(s, i);
      i = i + 1 | 0;
      var tmp1_subject = c;
      if (tmp1_subject === _Char___init__impl__6a9atx(43)) {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.append_am5a4z_k$(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (tmp1_subject === _Char___init__impl__6a9atx(37)) {
        var hexValue = 0;
        var j = 0;
        $l$loop: while (j < 2) {
          try {
            c = getNextCharacter($this, s, i, s.length, null);
          } catch ($p) {
            if ($p instanceof URISyntaxException) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
                builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
                return Unit_getInstance();
              }
            } else {
              throw $p;
            }
          }
          i = i + 1 | 0;
          var newDigit = hexCharToValue($this, c);
          if (newDigit < 0) {
            if (throwOnFailure) {
              throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException($this, s, null, c, i - 1 | 0));
            } else {
              appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
              builder.append_am5a4z_k$(_Char___init__impl__6a9atx(65533));
              break $l$loop;
            }
          }
          hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          j = j + 1 | 0;
        }
        appendDecoded$put(byteBuffer, byteBufferPosition, hexValue);
      } else {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.append_am5a4z_k$(c);
      }
    }
    appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
  }
  function appendDecoded$put(byteBuffer, byteBufferPosition, byte) {
    var tmp0 = byteBufferPosition._v;
    byteBufferPosition._v = tmp0 + 1 | 0;
    byteBuffer[tmp0] = byte;
  }
  function appendDecoded$flush(byteBufferPosition, $builder, byteBuffer, $throwOnFailure) {
    if (byteBufferPosition._v === 0) {
      return Unit_getInstance();
    }
    $builder.append_22ad7x_k$(decodeToString(byteBuffer, VOID, byteBufferPosition._v, $throwOnFailure));
    byteBufferPosition._v = 0;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.INVALID_INPUT_CHARACTER_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).decode_hm9h1w_k$ = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    appendDecoded(this, builder, s, convertPlus, throwOnFailure);
    return builder.toString();
  };
  protoOf(UriCodec).decode$default_wcj4n_k$ = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.decode_hm9h1w_k$(s, convertPlus, throwOnFailure) : $super.decode_hm9h1w_k$.call(this, s, convertPlus, throwOnFailure);
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function URISyntaxException(input, reason, index) {
    Exception_init_$Init$(reason + ' at index ' + index + ': ' + input, this);
    captureStack(this, URISyntaxException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UriUtils_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-core-core-uri.js.map
