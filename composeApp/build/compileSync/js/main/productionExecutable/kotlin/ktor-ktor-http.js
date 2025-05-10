(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-http'.");
    }
    globalThis['ktor-ktor-http'] = factory(typeof globalThis['ktor-ktor-http'] === 'undefined' ? {} : globalThis['ktor-ktor-http'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-utils']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.i;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.i;
  var encode = kotlin_io_ktor_ktor_io.$_$.m;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var takeWhile = kotlin_io_ktor_ktor_io.$_$.v;
  var charArray = kotlin_kotlin.$_$.jc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var concatToString = kotlin_kotlin.$_$.fg;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var toString = kotlin_kotlin.$_$.le;
  var Char = kotlin_kotlin.$_$.mi;
  var isSurrogate = kotlin_kotlin.$_$.yg;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.k3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.mc;
  var toString_0 = kotlin_kotlin.$_$.n3;
  var toByte = kotlin_kotlin.$_$.ie;
  var decodeToString = kotlin_kotlin.$_$.kg;
  var Exception = kotlin_kotlin.$_$.si;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.hc;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.i3;
  var numberToChar = kotlin_kotlin.$_$.be;
  var canRead = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.l3;
  var plus = kotlin_kotlin.$_$.z9;
  var plus_0 = kotlin_kotlin.$_$.aa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var toSet = kotlin_kotlin.$_$.cb;
  var setOf = kotlin_kotlin.$_$.la;
  var plus_1 = kotlin_kotlin.$_$.x9;
  var listOf = kotlin_kotlin.$_$.n9;
  var emptyList = kotlin_kotlin.$_$.a8;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var equals = kotlin_kotlin.$_$.og;
  var Collection = kotlin_kotlin.$_$.h6;
  var isInterface = kotlin_kotlin.$_$.qd;
  var isBlank = kotlin_kotlin.$_$.vg;
  var last = kotlin_kotlin.$_$.i9;
  var indexOf = kotlin_kotlin.$_$.ug;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var isCharSequence = kotlin_kotlin.$_$.md;
  var trim = kotlin_kotlin.$_$.gi;
  var contains = kotlin_kotlin.$_$.ig;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var plus_2 = kotlin_kotlin.$_$.ba;
  var equals_0 = kotlin_kotlin.$_$.qc;
  var getStringHashCode = kotlin_kotlin.$_$.yc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var forName = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.ti;
  var get_name = kotlin_io_ktor_ktor_io.$_$.o;
  var get_lastIndex = kotlin_kotlin.$_$.c9;
  var first = kotlin_kotlin.$_$.qg;
  var last_0 = kotlin_kotlin.$_$.bh;
  var get_lastIndex_0 = kotlin_kotlin.$_$.ah;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.q;
  var emptySet = kotlin_kotlin.$_$.c8;
  var get = kotlin_io_ktor_ktor_utils.$_$.p;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.o;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var emptyMap = kotlin_kotlin.$_$.b8;
  var toDoubleOrNull = kotlin_kotlin.$_$.th;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.l;
  var lazy = kotlin_kotlin.$_$.ek;
  var to = kotlin_kotlin.$_$.sk;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var asList = kotlin_kotlin.$_$.y6;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.h3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var toLong = kotlin_kotlin.$_$.ai;
  var mapCapacity = kotlin_kotlin.$_$.o9;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Comparable = kotlin_kotlin.$_$.oi;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var isWhitespace = kotlin_kotlin.$_$.zg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var startsWith = kotlin_kotlin.$_$.kh;
  var charArrayOf = kotlin_kotlin.$_$.ic;
  var split = kotlin_kotlin.$_$.hh;
  var toMutableList = kotlin_kotlin.$_$.ab;
  var first_0 = kotlin_kotlin.$_$.k8;
  var joinToString = kotlin_kotlin.$_$.y8;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.w;
  var indexOfAny = kotlin_kotlin.$_$.sg;
  var dropLast = kotlin_kotlin.$_$.z7;
  var IllegalStateException = kotlin_kotlin.$_$.ui;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var indexOf_0 = kotlin_kotlin.$_$.tg;
  var toInt = kotlin_kotlin.$_$.xh;
  var listOf_0 = kotlin_kotlin.$_$.m9;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.x;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.u;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith_0 = kotlin_kotlin.$_$.jh;
  var addAll = kotlin_kotlin.$_$.v6;
  var joinTo = kotlin_kotlin.$_$.z8;
  var toString_1 = kotlin_kotlin.$_$.rk;
  var lazy_0 = kotlin_kotlin.$_$.fk;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.nf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.w;
  var toLong_0 = kotlin_kotlin.$_$.je;
  var take = kotlin_kotlin.$_$.ph;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(URLDecodeException, 'URLDecodeException', VOID, Exception);
  initMetadataForCompanion(Companion);
  initMetadataForObject(Application, 'Application');
  initMetadataForObject(Text, 'Text');
  initMetadataForClass(HeaderValueWithParameters, 'HeaderValueWithParameters');
  initMetadataForClass(ContentType, 'ContentType', VOID, HeaderValueWithParameters);
  initMetadataForClass(BadContentTypeFormatException, 'BadContentTypeFormatException', VOID, Exception);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HeadersBuilder, 'HeadersBuilder', HeadersBuilder, StringValuesBuilderImpl);
  initMetadataForObject(EmptyHeaders, 'EmptyHeaders', VOID, VOID, [StringValues]);
  initMetadataForClass(HeadersImpl, 'HeadersImpl', HeadersImpl, StringValuesImpl, [StringValues, StringValuesImpl]);
  initMetadataForClass(HeaderValueParam, 'HeaderValueParam');
  initMetadataForClass(HeaderValue, 'HeaderValue');
  initMetadataForObject(HttpHeaders, 'HttpHeaders');
  initMetadataForClass(IllegalHeaderNameException, 'IllegalHeaderNameException', VOID, IllegalArgumentException);
  initMetadataForClass(IllegalHeaderValueException, 'IllegalHeaderValueException', VOID, IllegalArgumentException);
  initMetadataForClass(UnsafeHeaderException, 'UnsafeHeaderException', VOID, IllegalArgumentException);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpMethod, 'HttpMethod');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(HttpProtocolVersion, 'HttpProtocolVersion');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(HttpStatusCode, 'HttpStatusCode', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_5);
  initMetadataForInterface(Parameters, 'Parameters', VOID, VOID, [StringValues]);
  initMetadataForObject(EmptyParameters, 'EmptyParameters', VOID, VOID, [Parameters]);
  initMetadataForClass(ParametersBuilderImpl, 'ParametersBuilderImpl', ParametersBuilderImpl, StringValuesBuilderImpl);
  initMetadataForClass(ParametersImpl, 'ParametersImpl', ParametersImpl, StringValuesImpl, [Parameters, StringValuesImpl]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(URLBuilder, 'URLBuilder', URLBuilder);
  initMetadataForClass(URLParserException, 'URLParserException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(URLProtocol, 'URLProtocol');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(Url_0, 'Url');
  initMetadataForClass(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder');
  initMetadataForClass(OutgoingContent, 'OutgoingContent');
  initMetadataForClass(NoContent, 'NoContent', VOID, OutgoingContent);
  initMetadataForClass(ReadChannelContent, 'ReadChannelContent', VOID, OutgoingContent);
  initMetadataForClass(WriteChannelContent, 'WriteChannelContent', VOID, OutgoingContent, VOID, [1]);
  initMetadataForClass(ByteArrayContent, 'ByteArrayContent', VOID, OutgoingContent);
  initMetadataForClass(ProtocolUpgrade, 'ProtocolUpgrade', VOID, OutgoingContent, VOID, [4]);
  initMetadataForClass(ContentWrapper, 'ContentWrapper', VOID, OutgoingContent);
  initMetadataForObject(NullBody, 'NullBody');
  initMetadataForClass(TextContent, 'TextContent', VOID, ByteArrayContent);
  //endregion
  function get_URL_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    _init_properties_Codecs_kt__fudxxf();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    _init_properties_Codecs_kt__fudxxf();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  var ATTRIBUTE_CHARACTERS;
  function get_SPECIAL_SYMBOLS() {
    _init_properties_Codecs_kt__fudxxf();
    return SPECIAL_SYMBOLS;
  }
  var SPECIAL_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLParameter.<anonymous>' call
    var content = encode(Charsets_getInstance().pfd_1.tfd(), _this__u8e3s4);
    forEach_0(content, encodeURLParameter$lambda(this_0, spaceToPlus));
    return this_0.toString();
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var content = encode(charset.tfd(), _this__u8e3s4);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, this_0, encodeFull));
    return this_0.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().pfd_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPathPart(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLPath(_this__u8e3s4, true);
  }
  function forEach_0(_this__u8e3s4, block) {
    _init_properties_Codecs_kt__fudxxf();
    takeWhile(_this__u8e3s4, forEach$lambda(block));
  }
  function percentEncode(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    var code = _this__u8e3s4 & 255;
    var array = charArray(3);
    array[0] = _Char___init__impl__6a9atx(37);
    array[1] = hexDigitToChar(code >> 4);
    array[2] = hexDigitToChar(code & 15);
    return concatToString(array);
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (ch === _Char___init__impl__6a9atx(37) || (plusIsSpace && ch === _Char___init__impl__6a9atx(43))) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 && end === _this__u8e3s4.length) {
      tmp = toString(_this__u8e3s4);
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.substring(start, end);
    }
    return tmp;
  }
  function encodeURLPath(_this__u8e3s4, encodeSlash, encodeEncoded) {
    encodeSlash = encodeSlash === VOID ? false : encodeSlash;
    encodeEncoded = encodeEncoded === VOID ? true : encodeEncoded;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLPath.<anonymous>' call
    var charset = Charsets_getInstance().pfd_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if (!encodeSlash && current === _Char___init__impl__6a9atx(47) || get_URL_ALPHABET_CHARS().p(new Char(current)) || get_VALID_PATH_PART().p(new Char(current))) {
        this_0.q8(current);
        index = index + 1 | 0;
        continue $l$loop_0;
      }
      if (!encodeEncoded && current === _Char___init__impl__6a9atx(37) && (index + 2 | 0) < _this__u8e3s4.length && get_HEX_ALPHABET().p(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) && get_HEX_ALPHABET().p(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)))) {
        this_0.q8(current);
        this_0.q8(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        this_0.q8(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.tfd(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(this_0));
      index = index + symbolSize | 0;
    }
    return this_0.toString();
  }
  function hexDigitToChar(digit) {
    _init_properties_Codecs_kt__fudxxf();
    return (0 <= digit ? digit <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    _init_properties_Codecs_kt__fudxxf();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.bd(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace && c === _Char___init__impl__6a9atx(43)) {
        sb.q8(_Char___init__impl__6a9atx(32));
        index = index + 1 | 0;
      } else if (c === _Char___init__impl__6a9atx(37)) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end && charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(37)) {
          if ((index + 2 | 0) >= end) {
            // Inline function 'kotlin.text.substring' call
            var startIndex = index;
            var endIndex = charSequenceLength(_this__u8e3s4);
            var tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + toString(_this__u8e3s4) + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 || digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + toString_0(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + toString_0(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + toString(_this__u8e3s4) + ', at ' + index);
          }
          var tmp = bytes;
          var _unary__edvuaz = count;
          count = _unary__edvuaz + 1 | 0;
          tmp[_unary__edvuaz] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.p8(decodeToString(bytes, 0, 0 + count | 0));
      } else {
        sb.q8(c);
        index = index + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    _init_properties_Codecs_kt__fudxxf();
    return (_Char___init__impl__6a9atx(48) <= c2 ? c2 <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= c2 ? c2 <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= c2 ? c2 <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    _init_properties_Codecs_kt__fudxxf();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($$this$buildString, $spaceToPlus) {
    return function (it) {
      if (get_URL_ALPHABET().p(it) || get_SPECIAL_SYMBOLS().p(it))
        $$this$buildString.q8(numberToChar(it));
      else if ($spaceToPlus && it === 32)
        $$this$buildString.q8(_Char___init__impl__6a9atx(43));
      else
        $$this$buildString.p8(percentEncode(it));
      return Unit_instance;
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $$this$buildString, $encodeFull) {
    return function (it) {
      if (it === 32)
        if ($spaceToPlus)
          $$this$buildString.q8(_Char___init__impl__6a9atx(43));
        else
          $$this$buildString.p8('%20');
      else if (get_URL_ALPHABET().p(it) || (!$encodeFull && get_URL_PROTOCOL_PART().p(it)))
        $$this$buildString.q8(numberToChar(it));
      else
        $$this$buildString.p8(percentEncode(it));
      return Unit_instance;
    };
  }
  function forEach$lambda($block) {
    return function (buffer) {
      while (canRead(buffer)) {
        $block(buffer.rf3());
      }
      return true;
    };
  }
  function encodeURLPath$lambda($$this$buildString) {
    return function (it) {
      $$this$buildString.p8(percentEncode(it));
      return Unit_instance;
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function _init_properties_Codecs_kt__fudxxf() {
    if (!properties_initialized_Codecs_kt_hkj9s1) {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      // Inline function 'kotlin.collections.map' call
      var this_0 = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_1 = item.o1_1;
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
        var tmp$ret$1 = toByte(tmp$ret$0);
        destination.e(tmp$ret$1);
      }
      URL_ALPHABET = toSet(destination);
      URL_ALPHABET_CHARS = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      HEX_ALPHABET = toSet(plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))));
      // Inline function 'kotlin.collections.map' call
      var this_2 = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_0 = this_2.g();
      while (tmp0_iterator_0.h()) {
        var item_0 = tmp0_iterator_0.i();
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_3 = item_0.o1_1;
        var tmp$ret$0_0 = Char__toInt_impl_vasixd(this_3);
        var tmp$ret$1_0 = toByte(tmp$ret$0_0);
        destination_0.e(tmp$ret$1_0);
      }
      URL_PROTOCOL_PART = destination_0;
      VALID_PATH_PART = setOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      ATTRIBUTE_CHARACTERS = plus_1(get_URL_ALPHABET_CHARS(), setOf([new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(94)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(96)), new Char(_Char___init__impl__6a9atx(124)), new Char(_Char___init__impl__6a9atx(126))]));
      // Inline function 'kotlin.collections.map' call
      var this_4 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
      var tmp0_iterator_1 = this_4.g();
      while (tmp0_iterator_1.h()) {
        var item_1 = tmp0_iterator_1.i();
        // Inline function 'io.ktor.http.SPECIAL_SYMBOLS.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_5 = item_1.o1_1;
        var tmp$ret$0_1 = Char__toInt_impl_vasixd(this_5);
        var tmp$ret$1_1 = toByte(tmp$ret$0_1);
        destination_1.e(tmp$ret$1_1);
      }
      SPECIAL_SYMBOLS = destination_1;
    }
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    parameters = parameters === VOID ? emptyList() : parameters;
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, objectCreate(protoOf(ContentType)));
  }
  function hasParameter($this, name, value) {
    var tmp;
    switch ($this.kfk_1.j()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call

        var it = $this.kfk_1.o(0);
        tmp = (equals(it.lfk_1, name, true) && equals(it.mfk_1, value, true));
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_0 = $this.kfk_1;
          var tmp_0;
          if (isInterface(this_0, Collection)) {
            tmp_0 = this_0.q();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = this_0.g();
          while (tmp0_iterator.h()) {
            var element = tmp0_iterator.i();
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            if (equals(element.lfk_1, name, true) && equals(element.mfk_1, value, true)) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.ofk_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion).yn = function (value) {
    if (isBlank(value))
      return this.ofk_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var parts = headerValue.pfk_1;
    var parameters = headerValue.qfk_1;
    var slash = indexOf(parts, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString(trim(isCharSequence(parts) ? parts : THROW_CCE())) === '*')
        return Companion_getInstance().ofk_1;
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = parts.substring(0, slash);
    var type = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(type) === 0) {
      throw new BadContentTypeFormatException(value);
    }
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    var startIndex = slash + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var this_1 = parts.substring(startIndex);
    var subtype = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
    if (contains(type, _Char___init__impl__6a9atx(32)) || contains(subtype, _Char___init__impl__6a9atx(32))) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(subtype) === 0) {
      tmp = true;
    } else {
      tmp = contains(subtype, _Char___init__impl__6a9atx(47));
    }
    if (tmp) {
      throw new BadContentTypeFormatException(value);
    }
    return ContentType_init_$Create$(type, subtype, parameters);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    this.sfk_1 = ContentType_init_$Create$('application', '*');
    this.tfk_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.ufk_1 = ContentType_init_$Create$('application', 'cbor');
    this.vfk_1 = ContentType_init_$Create$('application', 'json');
    this.wfk_1 = ContentType_init_$Create$('application', 'hal+json');
    this.xfk_1 = ContentType_init_$Create$('application', 'javascript');
    this.yfk_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.zfk_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.afl_1 = ContentType_init_$Create$('application', 'soap+xml');
    this.bfl_1 = ContentType_init_$Create$('application', 'xml');
    this.cfl_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.dfl_1 = ContentType_init_$Create$('application', 'zip');
    this.efl_1 = ContentType_init_$Create$('application', 'gzip');
    this.ffl_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.gfl_1 = ContentType_init_$Create$('application', 'pdf');
    this.hfl_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.ifl_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.jfl_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.kfl_1 = ContentType_init_$Create$('application', 'protobuf');
    this.lfl_1 = ContentType_init_$Create$('application', 'wasm');
    this.mfl_1 = ContentType_init_$Create$('application', 'problem+json');
    this.nfl_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    this.ofl_1 = ContentType_init_$Create$('text', '*');
    this.pfl_1 = ContentType_init_$Create$('text', 'plain');
    this.qfl_1 = ContentType_init_$Create$('text', 'css');
    this.rfl_1 = ContentType_init_$Create$('text', 'csv');
    this.sfl_1 = ContentType_init_$Create$('text', 'html');
    this.tfl_1 = ContentType_init_$Create$('text', 'javascript');
    this.ufl_1 = ContentType_init_$Create$('text', 'vcard');
    this.vfl_1 = ContentType_init_$Create$('text', 'xml');
    this.wfl_1 = ContentType_init_$Create$('text', 'event-stream');
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance();
    parameters = parameters === VOID ? emptyList() : parameters;
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.zfl_1 = contentType;
    this.afm_1 = contentSubtype;
  }
  protoOf(ContentType).bfm = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.zfl_1, this.afm_1, this.jfk_1, plus_2(this.kfk_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals(this.zfl_1, other.zfl_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.afm_1, other.afm_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(this.kfk_1, other.kfk_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.zfl_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.afm_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.kfk_1)) | 0;
    return result;
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.cfm('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.charset.<anonymous>' call
      var tmp_0;
      try {
        tmp_0 = forName(Charsets_getInstance(), tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          var exception = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.bfm('charset', get_name(charset));
  }
  function get_HeaderFieldValueSeparators() {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    parameters = parameters === VOID ? emptyList() : parameters;
    this.jfk_1 = content;
    this.kfk_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).cfm = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.kfk_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.kfk_1.o(index);
        if (equals(parameter.lfk_1, name, true)) {
          return parameter.mfk_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.kfk_1.q()) {
      tmp = this.jfk_1;
    } else {
      var tmp_0 = this.jfk_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator = this.kfk_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp_1 = sum;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        sum = tmp_1 + ((element.lfk_1.length + element.mfk_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      this_0.p8(this.jfk_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.kfk_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.kfk_1.o(index);
          this_0.p8('; ');
          this_0.p8(element_0.lfk_1);
          this_0.p8('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var this_1 = element_0.mfk_1;
          if (needQuotes$accessor$vynnj(this_1))
            this_0.p8(quote(this_1));
          else
            this_0.p8(this_1);
        }
         while (!(index === last));
      tmp = this_0.toString();
    }
    return tmp;
  };
  function needQuotes(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (get_HeaderFieldValueSeparators().p(new Char(element)))
        return true;
    }
    return false;
  }
  function quote(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.quote.<anonymous>' call
    quoteTo(_this__u8e3s4, this_0);
    return this_0.toString();
  }
  function isQuoted(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!(first(_this__u8e3s4) === _Char___init__impl__6a9atx(34)) || !(last_0(_this__u8e3s4) === _Char___init__impl__6a9atx(34))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var index = indexOf(_this__u8e3s4, _Char___init__impl__6a9atx(34), startIndex);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (charSequenceGet(_this__u8e3s4, slashIndex) === _Char___init__impl__6a9atx(92)) {
        slashesCount = slashesCount + 1 | 0;
        slashIndex = slashIndex - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    out.p8('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var ch = element;
      if (ch === _Char___init__impl__6a9atx(92))
        out.p8('\\\\');
      else if (ch === _Char___init__impl__6a9atx(10))
        out.p8('\\n');
      else if (ch === _Char___init__impl__6a9atx(13))
        out.p8('\\r');
      else if (ch === _Char___init__impl__6a9atx(9))
        out.p8('\\t');
      else if (ch === _Char___init__impl__6a9atx(34))
        out.p8('\\"');
      else
        out.q8(ch);
    }
    out.p8('"');
  }
  function needQuotes$accessor$vynnj(_this__u8e3s4) {
    _init_properties_HeaderValueWithParameters_kt__z6luvy();
    return needQuotes(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function _init_properties_HeaderValueWithParameters_kt__z6luvy() {
    if (!properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.dfm_1 = EmptyHeaders_instance;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function HeadersBuilder(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(HeadersBuilder).c2o = function () {
    return new HeadersImpl(this.nfg_1);
  };
  protoOf(HeadersBuilder).ofg = function (name) {
    protoOf(StringValuesBuilderImpl).ofg.call(this, name);
    HttpHeaders_getInstance().cfq(name);
  };
  protoOf(HeadersBuilder).rfg = function (value) {
    protoOf(StringValuesBuilderImpl).rfg.call(this, value);
    HttpHeaders_getInstance().dfq(value);
  };
  function EmptyHeaders() {
  }
  protoOf(EmptyHeaders).hfg = function () {
    return true;
  };
  protoOf(EmptyHeaders).ifg = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).jfg = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).kfg = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + toString(this.kfg());
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(HeadersImpl).toString = function () {
    return 'Headers ' + toString(this.kfg());
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.lfk_1 = name;
    this.mfk_1 = value;
    this.nfk_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals(other.lfk_1, this.lfk_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.mfk_1, this.mfk_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.lfk_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.mfk_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.lfk_1 + ', value=' + this.mfk_1 + ', escapeValue=' + this.nfk_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.pfk_1 = value;
    this.qfk_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.qfk_1.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        if (element.lfk_1 === 'q') {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mfk_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
      if (0.0 <= tmp2_safe_receiver ? tmp2_safe_receiver <= 1.0 : false) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.rfk_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.pfk_1 + ', params=' + toString(this.qfk_1) + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.pfk_1);
    result = imul(result, 31) + hashCode(this.qfk_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.pfk_1 === tmp0_other_with_cast.pfk_1))
      return false;
    if (!equals_0(this.qfk_1, tmp0_other_with_cast.qfk_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(44)) {
        var tmp_0 = items.w();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.e(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59)) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.w();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.e(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.ln() ? _this__u8e3s4.w() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = _this__u8e3s4.substring(start, end);
    return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
        var _destruct__k2r9zo = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = _destruct__k2r9zo.gb();
        var paramValue = _destruct__k2r9zo.hb();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44)) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        position = position + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (charSequenceGet(value, start) === _Char___init__impl__6a9atx(34)) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (tmp0_subject === _Char___init__impl__6a9atx(59) || tmp0_subject === _Char___init__impl__6a9atx(44))
        return to(position, subtrim(value, start, position));
      else {
        position = position + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (currentChar === _Char___init__impl__6a9atx(34) && nextIsSemicolonOrEnd(value, position)) {
        return to(position + 1 | 0, builder.toString());
      } else if (currentChar === _Char___init__impl__6a9atx(92) && position < (get_lastIndex_0(value) - 2 | 0)) {
        builder.q8(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.q8(currentChar);
      position = position + 1 | 0;
    }
    var tmp = position;
    // Inline function 'kotlin.text.plus' call
    var this_0 = _Char___init__impl__6a9atx(34);
    var other = builder.toString();
    var tmp$ret$0 = toString_0(this_0) + other;
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length && charSequenceGet(_this__u8e3s4, position) === _Char___init__impl__6a9atx(32)) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length || charSequenceGet(_this__u8e3s4, position) === _Char___init__impl__6a9atx(59);
  }
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0) {
      return Unit_instance;
    }
    $parameters.w().e(HeaderValueParam_init_$Create$(name, value));
  }
  function parseHeaderValue$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function parseHeaderValueItem$lambda() {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.gfm_1 = 'Accept';
    this.hfm_1 = 'Accept-Charset';
    this.ifm_1 = 'Accept-Encoding';
    this.jfm_1 = 'Accept-Language';
    this.kfm_1 = 'Accept-Ranges';
    this.lfm_1 = 'Age';
    this.mfm_1 = 'Allow';
    this.nfm_1 = 'ALPN';
    this.ofm_1 = 'Authentication-Info';
    this.pfm_1 = 'Authorization';
    this.qfm_1 = 'Cache-Control';
    this.rfm_1 = 'Connection';
    this.sfm_1 = 'Content-Disposition';
    this.tfm_1 = 'Content-Encoding';
    this.ufm_1 = 'Content-Language';
    this.vfm_1 = 'Content-Length';
    this.wfm_1 = 'Content-Location';
    this.xfm_1 = 'Content-Range';
    this.yfm_1 = 'Content-Type';
    this.zfm_1 = 'Cookie';
    this.afn_1 = 'DASL';
    this.bfn_1 = 'Date';
    this.cfn_1 = 'DAV';
    this.dfn_1 = 'Depth';
    this.efn_1 = 'Destination';
    this.ffn_1 = 'ETag';
    this.gfn_1 = 'Expect';
    this.hfn_1 = 'Expires';
    this.ifn_1 = 'From';
    this.jfn_1 = 'Forwarded';
    this.kfn_1 = 'Host';
    this.lfn_1 = 'HTTP2-Settings';
    this.mfn_1 = 'If';
    this.nfn_1 = 'If-Match';
    this.ofn_1 = 'If-Modified-Since';
    this.pfn_1 = 'If-None-Match';
    this.qfn_1 = 'If-Range';
    this.rfn_1 = 'If-Schedule-Tag-Match';
    this.sfn_1 = 'If-Unmodified-Since';
    this.tfn_1 = 'Last-Modified';
    this.ufn_1 = 'Location';
    this.vfn_1 = 'Lock-Token';
    this.wfn_1 = 'Link';
    this.xfn_1 = 'Max-Forwards';
    this.yfn_1 = 'MIME-Version';
    this.zfn_1 = 'Ordering-Type';
    this.afo_1 = 'Origin';
    this.bfo_1 = 'Overwrite';
    this.cfo_1 = 'Position';
    this.dfo_1 = 'Pragma';
    this.efo_1 = 'Prefer';
    this.ffo_1 = 'Preference-Applied';
    this.gfo_1 = 'Proxy-Authenticate';
    this.hfo_1 = 'Proxy-Authentication-Info';
    this.ifo_1 = 'Proxy-Authorization';
    this.jfo_1 = 'Public-Key-Pins';
    this.kfo_1 = 'Public-Key-Pins-Report-Only';
    this.lfo_1 = 'Range';
    this.mfo_1 = 'Referer';
    this.nfo_1 = 'Retry-After';
    this.ofo_1 = 'Schedule-Reply';
    this.pfo_1 = 'Schedule-Tag';
    this.qfo_1 = 'Sec-WebSocket-Accept';
    this.rfo_1 = 'Sec-WebSocket-Extensions';
    this.sfo_1 = 'Sec-WebSocket-Key';
    this.tfo_1 = 'Sec-WebSocket-Protocol';
    this.ufo_1 = 'Sec-WebSocket-Version';
    this.vfo_1 = 'Server';
    this.wfo_1 = 'Set-Cookie';
    this.xfo_1 = 'SLUG';
    this.yfo_1 = 'Strict-Transport-Security';
    this.zfo_1 = 'TE';
    this.afp_1 = 'Timeout';
    this.bfp_1 = 'Trailer';
    this.cfp_1 = 'Transfer-Encoding';
    this.dfp_1 = 'Upgrade';
    this.efp_1 = 'User-Agent';
    this.ffp_1 = 'Vary';
    this.gfp_1 = 'Via';
    this.hfp_1 = 'Warning';
    this.ifp_1 = 'WWW-Authenticate';
    this.jfp_1 = 'Access-Control-Allow-Origin';
    this.kfp_1 = 'Access-Control-Allow-Methods';
    this.lfp_1 = 'Access-Control-Allow-Credentials';
    this.mfp_1 = 'Access-Control-Allow-Headers';
    this.nfp_1 = 'Access-Control-Request-Method';
    this.ofp_1 = 'Access-Control-Request-Headers';
    this.pfp_1 = 'Access-Control-Expose-Headers';
    this.qfp_1 = 'Access-Control-Max-Age';
    this.rfp_1 = 'X-Http-Method-Override';
    this.sfp_1 = 'X-Forwarded-Host';
    this.tfp_1 = 'X-Forwarded-Server';
    this.ufp_1 = 'X-Forwarded-Proto';
    this.vfp_1 = 'X-Forwarded-For';
    this.wfp_1 = 'X-Forwarded-Port';
    this.xfp_1 = 'X-Request-ID';
    this.yfp_1 = 'X-Correlation-ID';
    this.zfp_1 = 'X-Total-Count';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.afq_1 = [this.cfp_1, this.dfp_1];
    this.bfq_1 = asList(this.afq_1);
  }
  protoOf(HttpHeaders).cfq = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(name)) {
      var item = charSequenceGet(name, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderName.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 || isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, tmp1);
      }
    }
  };
  protoOf(HttpHeaders).dfq = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(value)) {
      var item = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderValue.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0 && !(item === _Char___init__impl__6a9atx(9))) {
        throw new IllegalHeaderValueException(value, tmp1);
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains('"(),/:;<=>?@[\\]{}', ch);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + toString_0(charSequenceGet(headerName, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(headerName, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderNameException);
    this.efq_1 = headerName;
    this.ffq_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + toString_0(charSequenceGet(headerValue, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(headerValue, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.gfq_1 = headerValue;
    this.hfq_1 = position;
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ifq().v48(HttpHeaders_getInstance().vfm_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_0(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ifq().v48(HttpHeaders_getInstance().yfm_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance().yn(tmp0_safe_receiver);
    }
    return tmp;
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ifq().v48(HttpHeaders_getInstance().yfm_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance().yn(tmp0_safe_receiver);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.jfq_1 = new HttpMethod('GET');
    this.kfq_1 = new HttpMethod('POST');
    this.lfq_1 = new HttpMethod('PUT');
    this.mfq_1 = new HttpMethod('PATCH');
    this.nfq_1 = new HttpMethod('DELETE');
    this.ofq_1 = new HttpMethod('HEAD');
    this.pfq_1 = new HttpMethod('OPTIONS');
    this.qfq_1 = listOf([this.jfq_1, this.kfq_1, this.lfq_1, this.mfq_1, this.nfq_1, this.ofq_1, this.pfq_1]);
  }
  protoOf(Companion_2).yn = function (method) {
    return method === this.jfq_1.rfq_1 ? this.jfq_1 : method === this.kfq_1.rfq_1 ? this.kfq_1 : method === this.lfq_1.rfq_1 ? this.lfq_1 : method === this.mfq_1.rfq_1 ? this.mfq_1 : method === this.nfq_1.rfq_1 ? this.nfq_1 : method === this.ofq_1.rfq_1 ? this.ofq_1 : method === this.pfq_1.rfq_1 ? this.pfq_1 : new HttpMethod(method);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_2();
    this.rfq_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return 'HttpMethod(value=' + this.rfq_1 + ')';
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.rfq_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.rfq_1 === tmp0_other_with_cast.rfq_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.sfq_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.tfq_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.ufq_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.vfq_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.wfq_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_3();
    this.xfq_1 = name;
    this.yfq_1 = major;
    this.zfq_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.xfq_1 + '/' + this.yfq_1 + '.' + this.zfq_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.xfq_1);
    result = imul(result, 31) + this.yfq_1 | 0;
    result = imul(result, 31) + this.zfq_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.xfq_1 === tmp0_other_with_cast.xfq_1))
      return false;
    if (!(this.yfq_1 === tmp0_other_with_cast.yfq_1))
      return false;
    if (!(this.zfq_1 === tmp0_other_with_cast.zfq_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.afr_1 = new HttpStatusCode(100, 'Continue');
    this.bfr_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.cfr_1 = new HttpStatusCode(102, 'Processing');
    this.dfr_1 = new HttpStatusCode(200, 'OK');
    this.efr_1 = new HttpStatusCode(201, 'Created');
    this.ffr_1 = new HttpStatusCode(202, 'Accepted');
    this.gfr_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.hfr_1 = new HttpStatusCode(204, 'No Content');
    this.ifr_1 = new HttpStatusCode(205, 'Reset Content');
    this.jfr_1 = new HttpStatusCode(206, 'Partial Content');
    this.kfr_1 = new HttpStatusCode(207, 'Multi-Status');
    this.lfr_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.mfr_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.nfr_1 = new HttpStatusCode(302, 'Found');
    this.ofr_1 = new HttpStatusCode(303, 'See Other');
    this.pfr_1 = new HttpStatusCode(304, 'Not Modified');
    this.qfr_1 = new HttpStatusCode(305, 'Use Proxy');
    this.rfr_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.sfr_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.tfr_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.ufr_1 = new HttpStatusCode(400, 'Bad Request');
    this.vfr_1 = new HttpStatusCode(401, 'Unauthorized');
    this.wfr_1 = new HttpStatusCode(402, 'Payment Required');
    this.xfr_1 = new HttpStatusCode(403, 'Forbidden');
    this.yfr_1 = new HttpStatusCode(404, 'Not Found');
    this.zfr_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.afs_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.bfs_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.cfs_1 = new HttpStatusCode(408, 'Request Timeout');
    this.dfs_1 = new HttpStatusCode(409, 'Conflict');
    this.efs_1 = new HttpStatusCode(410, 'Gone');
    this.ffs_1 = new HttpStatusCode(411, 'Length Required');
    this.gfs_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.hfs_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.ifs_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.jfs_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.kfs_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.lfs_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.mfs_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.nfs_1 = new HttpStatusCode(423, 'Locked');
    this.ofs_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.pfs_1 = new HttpStatusCode(425, 'Too Early');
    this.qfs_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.rfs_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.sfs_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.tfs_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.ufs_1 = new HttpStatusCode(501, 'Not Implemented');
    this.vfs_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.wfs_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.xfs_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.yfs_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.zfs_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.aft_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.bft_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.bft_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      var tmp$ret$0 = element.dft_1;
      destination.f2(tmp$ret$0, element);
    }
    tmp.cft_1 = destination;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_4();
    this.dft_1 = value;
    this.eft_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.dft_1 + ' ' + this.eft_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.dft_1 === this.dft_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.dft_1;
  };
  protoOf(HttpStatusCode).fft = function (other) {
    return this.dft_1 - other.dft_1 | 0;
  };
  protoOf(HttpStatusCode).d = function (other) {
    return this.fft(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_4().afr_1, Companion_getInstance_4().bfr_1, Companion_getInstance_4().cfr_1, Companion_getInstance_4().dfr_1, Companion_getInstance_4().efr_1, Companion_getInstance_4().ffr_1, Companion_getInstance_4().gfr_1, Companion_getInstance_4().hfr_1, Companion_getInstance_4().ifr_1, Companion_getInstance_4().jfr_1, Companion_getInstance_4().kfr_1, Companion_getInstance_4().lfr_1, Companion_getInstance_4().mfr_1, Companion_getInstance_4().nfr_1, Companion_getInstance_4().ofr_1, Companion_getInstance_4().pfr_1, Companion_getInstance_4().qfr_1, Companion_getInstance_4().rfr_1, Companion_getInstance_4().sfr_1, Companion_getInstance_4().tfr_1, Companion_getInstance_4().ufr_1, Companion_getInstance_4().vfr_1, Companion_getInstance_4().wfr_1, Companion_getInstance_4().xfr_1, Companion_getInstance_4().yfr_1, Companion_getInstance_4().zfr_1, Companion_getInstance_4().afs_1, Companion_getInstance_4().bfs_1, Companion_getInstance_4().cfs_1, Companion_getInstance_4().dfs_1, Companion_getInstance_4().efs_1, Companion_getInstance_4().ffs_1, Companion_getInstance_4().gfs_1, Companion_getInstance_4().hfs_1, Companion_getInstance_4().ifs_1, Companion_getInstance_4().jfs_1, Companion_getInstance_4().kfs_1, Companion_getInstance_4().lfs_1, Companion_getInstance_4().mfs_1, Companion_getInstance_4().nfs_1, Companion_getInstance_4().ofs_1, Companion_getInstance_4().pfs_1, Companion_getInstance_4().qfs_1, Companion_getInstance_4().rfs_1, Companion_getInstance_4().sfs_1, Companion_getInstance_4().tfs_1, Companion_getInstance_4().ufs_1, Companion_getInstance_4().vfs_1, Companion_getInstance_4().wfs_1, Companion_getInstance_4().xfs_1, Companion_getInstance_4().yfs_1, Companion_getInstance_4().zfs_1, Companion_getInstance_4().aft_1]);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.gft_1 = EmptyParameters_instance;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  function EmptyParameters() {
  }
  protoOf(EmptyParameters).hfg = function () {
    return true;
  };
  protoOf(EmptyParameters).ifg = function (name) {
    return null;
  };
  protoOf(EmptyParameters).jfg = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).kfg = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).q = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + toString(this.kfg());
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.q();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    return EmptyParameters_instance;
  }
  function ParametersBuilder(size) {
    size = size === VOID ? 8 : size;
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilderImpl(size) {
    size = size === VOID ? 8 : size;
    StringValuesBuilderImpl.call(this, true, size);
  }
  protoOf(ParametersBuilderImpl).c2o = function () {
    return new ParametersImpl(this.nfg_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + toString(this.kfg());
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_5().gft_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_5();
      // Inline function 'kotlin.apply' call
      var this_0 = ParametersBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(this_0, query, startIndex, limit, decode);
      tmp = this_0.c2o();
    }
    return tmp;
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_instance;
        }
        var tmp0_subject = charSequenceGet(query, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(38)) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          count = count + 1 | 0;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(61)) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_instance;
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent(query, spaceNameIndex, spaceEndIndex);
        } else {
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = query.substring(spaceNameIndex, spaceEndIndex);
        }
        var name = tmp;
        _this__u8e3s4.pfg(name, emptyList());
      }
      return Unit_instance;
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent(query, spaceNameIndex_0, spaceEqualIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = query.substring(spaceNameIndex_0, spaceEqualIndex);
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent(query, spaceValueIndex, spaceEndIndex_0, true);
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = query.substring(spaceValueIndex, spaceEndIndex_0);
      }
      var value = tmp_1;
      _this__u8e3s4.sfg(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end && isWhitespace(charSequenceGet(query, spaceIndex))) {
      spaceIndex = spaceIndex + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start && isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0))) {
      spaceIndex = spaceIndex - 1 | 0;
    }
    return spaceIndex;
  }
  function applyOrigin($this) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = $this.jft_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = true;
    } else {
      tmp = $this.vft().tft_1 === 'file';
    }
    if (tmp)
      return Unit_instance;
    $this.jft_1 = Companion_getInstance_6().pfu_1.wft_1;
    if ($this.mft_1 == null)
      $this.mft_1 = Companion_getInstance_6().pfu_1.hfu_1;
    if ($this.lft_1 === 0) {
      $this.qfu(Companion_getInstance_6().pfu_1.xft_1);
    }
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.pfu_1 = Url(get_origin(this));
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_6();
    protocol = protocol === VOID ? null : protocol;
    host = host === VOID ? '' : host;
    port = port === VOID ? 0 : port;
    user = user === VOID ? null : user;
    password = password === VOID ? null : password;
    pathSegments = pathSegments === VOID ? emptyList() : pathSegments;
    parameters = parameters === VOID ? Companion_getInstance_5().gft_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.jft_1 = host;
    this.kft_1 = trailingQuery;
    this.lft_1 = port;
    this.mft_1 = protocol;
    var tmp = this;
    tmp.nft_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.oft_1 = password == null ? null : encodeURLParameter(password);
    this.pft_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      var tmp$ret$0 = encodeURLPathPart(item);
      destination.e(tmp$ret$0);
    }
    tmp_1.qft_1 = destination;
    this.rft_1 = encodeParameters(parameters);
    this.sft_1 = new UrlDecodedParametersBuilder(this.rft_1);
  }
  protoOf(URLBuilder).qfu = function (value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= value ? value <= 65535 : false)) {
      // Inline function 'io.ktor.http.URLBuilder.<set-port>.<anonymous>' call
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.lft_1 = value;
  };
  protoOf(URLBuilder).rfu = function (value) {
    this.mft_1 = value;
  };
  protoOf(URLBuilder).vft = function () {
    var tmp0_elvis_lhs = this.mft_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_7().sfu_1 : tmp0_elvis_lhs;
  };
  protoOf(URLBuilder).yfu = function (value) {
    var tmp = this;
    tmp.nft_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).zfu = function () {
    var tmp0_safe_receiver = this.nft_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).afv = function () {
    var tmp0_safe_receiver = this.oft_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).bfv = function () {
    return decodeURLQueryComponent(this.pft_1);
  };
  protoOf(URLBuilder).cfv = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.qft_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      var tmp$ret$0 = decodeURLPart(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(URLBuilder).dfv = function (value) {
    this.rft_1 = value;
    this.sft_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).efv = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).c2o = function () {
    applyOrigin(this);
    return new Url_0(this.mft_1, this.jft_1, this.lft_1, this.cfv(), this.sft_1.c2o(), this.bfv(), this.zfu(), this.afv(), this.kft_1, this.efv());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    this_0.p8(get_encodedUserAndPassword(_this__u8e3s4));
    this_0.p8(_this__u8e3s4.jft_1);
    if (!(_this__u8e3s4.lft_1 === 0) && !(_this__u8e3s4.lft_1 === _this__u8e3s4.vft().uft_1)) {
      this_0.p8(':');
      this_0.p8(_this__u8e3s4.lft_1.toString());
    }
    return this_0.toString();
  }
  function appendTo(_this__u8e3s4, out) {
    out.f(_this__u8e3s4.vft().tft_1);
    switch (_this__u8e3s4.vft().tft_1) {
      case 'file':
        appendFile(out, _this__u8e3s4.jft_1, get_encodedPath(_this__u8e3s4));
        return out;
      case 'mailto':
        appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.jft_1);
        return out;
      case 'about':
        appendAbout(out, _this__u8e3s4.jft_1);
        return out;
    }
    out.f('://');
    out.f(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.rft_1, _this__u8e3s4.kft_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.pft_1;
    if (charSequenceLength(this_0) > 0) {
      out.q8(_Char___init__impl__6a9atx(35));
      out.f(_this__u8e3s4.pft_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(this_0, _this__u8e3s4.nft_1, _this__u8e3s4.oft_1);
    return this_0.toString();
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.f('://');
    _this__u8e3s4.f(host);
    if (!startsWith(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.q8(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.f(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.qft_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.qft_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.f(':');
    _this__u8e3s4.f(encodedUser);
    _this__u8e3s4.f(host);
  }
  function appendAbout(_this__u8e3s4, host) {
    _this__u8e3s4.f(':');
    _this__u8e3s4.f(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.q())
      return '';
    if (_this__u8e3s4.j() === 1) {
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0(_this__u8e3s4);
      if (charSequenceLength(this_0) === 0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString(_this__u8e3s4, '/');
  }
  function get_ROOT_PATH() {
    _init_properties_URLParser_kt__sf11to();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        throw new URLParserException(urlString, cause);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    _init_properties_URLParser_kt__sf11to();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var it = charSequenceGet(urlString, index);
          if (!isWhitespace(it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var it_0 = charSequenceGet(urlString, index_0);
          if (!isWhitespace(it_0)) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = startIndex;
      var endIndex_0 = startIndex + schemeLength | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var scheme = urlString.substring(startIndex_0, endIndex_0);
      _this__u8e3s4.rfu(Companion_getInstance_7().ffv(scheme));
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.vft().tft_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.vft().tft_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slashCount === 0)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.vft().tft_1 === 'about') {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slashCount === 0)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp = _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = startIndex;
      // Inline function 'kotlin.js.asDynamic' call
      tmp.jft_1 = urlString.substring(startIndex_1, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        // Inline function 'kotlin.takeIf' call
        var this_0 = indexOfAny(urlString, toCharArray('@/\\?#'), startIndex);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
        if (this_0 > 0) {
          tmp_0 = this_0;
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex && charSequenceGet(urlString, delimiter) === _Char___init__impl__6a9atx(64)) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_1 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var startIndex_2 = startIndex;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_1.nft_1 = urlString.substring(startIndex_2, passwordIndex);
            var tmp_2 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var startIndex_3 = passwordIndex + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_2.oft_1 = urlString.substring(startIndex_3, delimiter);
          } else {
            var tmp_3 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var startIndex_4 = startIndex;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_3.nft_1 = urlString.substring(startIndex_4, delimiter);
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.qft_1 = charSequenceGet(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_4 = _this__u8e3s4;
    var tmp_5;
    if (slashCount === 0) {
      tmp_5 = dropLast(_this__u8e3s4.qft_1, 1);
    } else {
      tmp_5 = emptyList();
    }
    tmp_4.qft_1 = tmp_5;
    // Inline function 'kotlin.takeIf' call
    var this_1 = indexOfAny(urlString, toCharArray('?#'), startIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_6;
    // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
    if (this_1 > 0) {
      tmp_6 = this_1;
    } else {
      tmp_6 = null;
    }
    var tmp1_elvis_lhs = tmp_6;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_5 = startIndex;
      // Inline function 'kotlin.js.asDynamic' call
      var rawPath = urlString.substring(startIndex_5, pathEnd);
      var tmp_7;
      var tmp_8;
      if (_this__u8e3s4.qft_1.j() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = first_0(_this__u8e3s4.qft_1);
        tmp_8 = charSequenceLength(this_2) === 0;
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp_7 = emptyList();
      } else {
        tmp_7 = _this__u8e3s4.qft_1;
      }
      var basePath = tmp_7;
      var rawChunks = rawPath === '/' ? get_ROOT_PATH() : split(rawPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.qft_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex && charSequenceGet(urlString, startIndex) === _Char___init__impl__6a9atx(63)) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false)) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (char === _Char___init__impl__6a9atx(58)) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if (char === _Char___init__impl__6a9atx(47) || char === _Char___init__impl__6a9atx(63) || char === _Char___init__impl__6a9atx(35))
        return -1;
      if (incorrectSchemePosition === -1 && !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) && !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) && !(char === _Char___init__impl__6a9atx(46)) && !(char === _Char___init__impl__6a9atx(43)) && !(char === _Char___init__impl__6a9atx(45))) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    _init_properties_URLParser_kt__sf11to();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex && charSequenceGet(urlString, startIndex + result | 0) === char) {
      result = result + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    _init_properties_URLParser_kt__sf11to();
    switch (slashCount) {
      case 2:
        var nextSlash = indexOf(urlString, _Char___init__impl__6a9atx(47), startIndex);
        if (nextSlash === -1 || nextSlash === endIndex) {
          var tmp = _this__u8e3s4;
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp.jft_1 = urlString.substring(startIndex, endIndex);
          return Unit_instance;
        }

        var tmp_0 = _this__u8e3s4;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp_0.jft_1 = urlString.substring(startIndex, nextSlash);
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$5 = urlString.substring(nextSlash, endIndex);
        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        break;
      case 3:
        _this__u8e3s4.jft_1 = '';
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$7 = urlString.substring(startIndex, endIndex);
        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var delimiter = indexOf_0(urlString, '@', startIndex);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = urlString.substring(startIndex, delimiter);
    _this__u8e3s4.yfu(decodeURLPart(tmp$ret$1));
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var startIndex_0 = delimiter + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jft_1 = urlString.substring(startIndex_0, endIndex);
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0_subject = charSequenceGet(_this__u8e3s4, index);
        if (tmp0_subject === _Char___init__impl__6a9atx(91))
          skip = true;
        else if (tmp0_subject === _Char___init__impl__6a9atx(93))
          skip = false;
        else if (tmp0_subject === _Char___init__impl__6a9atx(58))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOfColonInHostPort(urlString, startIndex, endIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.fillHost.<anonymous>' call
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.jft_1 = urlString.substring(startIndex, colonIndex);
    var tmp_1;
    if ((colonIndex + 1 | 0) < endIndex) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = colonIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$5 = urlString.substring(startIndex_0, endIndex);
      tmp_1 = toInt(tmp$ret$5);
    } else {
      tmp_1 = 0;
    }
    _this__u8e3s4.qfu(tmp_1);
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.kft_1 = true;
      return endIndex;
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = indexOf(urlString, _Char___init__impl__6a9atx(35), startIndex + 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.parseQuery.<anonymous>' call
    if (this_0 > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    // Inline function 'kotlin.text.substring' call
    var startIndex_0 = startIndex + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = urlString.substring(startIndex_0, fragmentStart);
    var rawParameters = parseQueryString(tmp$ret$3, VOID, VOID, false);
    rawParameters.lfg(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex && charSequenceGet(urlString, startIndex) === _Char___init__impl__6a9atx(35)) {
      var tmp = _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = startIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp.pft_1 = urlString.substring(startIndex_0, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.rft_1.pfg(key, values);
      return Unit_instance;
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function _init_properties_URLParser_kt__sf11to() {
    if (!properties_initialized_URLParser_kt_hd1g6a) {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.sfu_1 = new URLProtocol('http', 80);
    this.tfu_1 = new URLProtocol('https', 443);
    this.ufu_1 = new URLProtocol('ws', 80);
    this.vfu_1 = new URLProtocol('wss', 443);
    this.wfu_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([this.sfu_1, this.tfu_1, this.ufu_1, this.vfu_1, this.wfu_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      var tmp$ret$0 = element.tft_1;
      destination.f2(tmp$ret$0, element);
    }
    tmp.xfu_1 = destination;
  }
  protoOf(Companion_7).ffv = function (name) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var it = toLowerCasePreservingASCIIRules(name);
    var tmp0_elvis_lhs = Companion_getInstance_7().xfu_1.n2(it);
    return tmp0_elvis_lhs == null ? new URLProtocol(it, 0) : tmp0_elvis_lhs;
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_7();
    this.tft_1 = name;
    this.uft_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var indexedObject = this.tft_1;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(indexedObject)) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
        if (!isLowerCase(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$1) {
      // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
      var message = 'All characters should be lower case';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(URLProtocol).toString = function () {
    return 'URLProtocol(name=' + this.tft_1 + ', defaultPort=' + this.uft_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.tft_1);
    result = imul(result, 31) + this.uft_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.tft_1 === tmp0_other_with_cast.tft_1))
      return false;
    if (!(this.uft_1 === tmp0_other_with_cast.uft_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.tft_1 === 'https' || _this__u8e3s4.tft_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.mft_1 = url.mft_1;
    _this__u8e3s4.jft_1 = url.jft_1;
    _this__u8e3s4.qfu(url.lft_1);
    _this__u8e3s4.qft_1 = url.qft_1;
    _this__u8e3s4.nft_1 = url.nft_1;
    _this__u8e3s4.oft_1 = url.oft_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    appendAll(this_0, url.rft_1);
    _this__u8e3s4.dfv(this_0);
    _this__u8e3s4.pft_1 = url.pft_1;
    _this__u8e3s4.kft_1 = url.kft_1;
    return _this__u8e3s4;
  }
  function get_hostWithPortIfSpecified(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.xft_1;
    return tmp0_subject === 0 || tmp0_subject === _this__u8e3s4.ifu_1.uft_1 ? _this__u8e3s4.wft_1 : get_hostWithPort(_this__u8e3s4);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_instance;
    }
    _this__u8e3s4.p8(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.q8(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.p8(encodedPassword);
    }
    _this__u8e3s4.p8('@');
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).c2o();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(encodedPath)) {
      tmp = !startsWith_0(encodedPath, '/');
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.q8(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.f(encodedPath);
    if (!encodedQueryParameters.q() || trailingQuery) {
      _this__u8e3s4.f('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = encodedQueryParameters.kfg();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.v();
      // Inline function 'kotlin.collections.component2' call
      var value = element.w();
      var tmp_0;
      if (value.q()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.g();
        while (tmp0_iterator_0.h()) {
          var item = tmp0_iterator_0.i();
          // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>.<anonymous>' call
          var tmp$ret$3 = to(key, item);
          destination_0.e(tmp$ret$3);
        }
        tmp_0 = destination_0;
      }
      var list = tmp_0;
      addAll(destination, list);
    }
    var tmp_1 = destination;
    joinTo(tmp_1, _this__u8e3s4, '&', VOID, VOID, VOID, VOID, appendUrlFullPath$lambda);
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.wft_1 + ':' + _this__u8e3s4.gfv();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(new URLBuilder(), urlString);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.eb_1;
    var tmp;
    if (it.fb_1 == null) {
      tmp = key;
    } else {
      var value = toString_1(it.fb_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function Url$segments$delegate$lambda($pathSegments) {
    return function () {
      var tmp;
      if ($pathSegments.q()) {
        return emptyList();
      }
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0($pathSegments);
      if (charSequenceLength(this_0) === 0) {
        tmp_1 = $pathSegments.j() > 1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = 1;
      } else {
        tmp_0 = 0;
      }
      var start = tmp_0;
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      var this_1 = last($pathSegments);
      if (charSequenceLength(this_1) === 0) {
        tmp_2 = get_lastIndex($pathSegments);
      } else {
        tmp_2 = get_lastIndex($pathSegments) + 1 | 0;
      }
      var end = tmp_2;
      return $pathSegments.e2(start, end);
    };
  }
  function Url$encodedPath$delegate$lambda($pathSegments, this$0) {
    return function () {
      var tmp;
      if ($pathSegments.q()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(47), this$0.ifu_1.tft_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.dfu_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.dfu_1.substring(pathStartIndex);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(pathStartIndex, pathEndIndex);
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.dfu_1.substring(queryStart);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(queryStart, queryEnd);
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(47), this$0.ifu_1.tft_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.dfu_1.substring(pathStart);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(pathStart, queryEnd);
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.afu_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.afu_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var usernameStart = this$0.ifu_1.tft_1.length + 3 | 0;
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.dfu_1, tmp$ret$1, usernameStart);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(usernameStart, usernameEnd);
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.bfu_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.bfu_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var passwordStart = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(58), this$0.ifu_1.tft_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(64));
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(passwordStart, passwordEnd);
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.dfu_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.dfu_1.substring(fragmentStart);
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    this.wft_1 = host;
    this.xft_1 = specifiedPort;
    this.yft_1 = parameters;
    this.zft_1 = fragment;
    this.afu_1 = user;
    this.bfu_1 = password;
    this.cfu_1 = trailingQuery;
    this.dfu_1 = urlString;
    // Inline function 'kotlin.require' call
    var containsArg = this.xft_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= containsArg ? containsArg <= 65535 : false)) {
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + this.xft_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.efu_1 = pathSegments;
    this.ffu_1 = pathSegments;
    var tmp = this;
    tmp.gfu_1 = lazy_0(Url$segments$delegate$lambda(pathSegments));
    this.hfu_1 = protocol;
    var tmp_0 = this;
    var tmp0_elvis_lhs = this.hfu_1;
    tmp_0.ifu_1 = tmp0_elvis_lhs == null ? Companion_getInstance_7().sfu_1 : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.jfu_1 = lazy_0(Url$encodedPath$delegate$lambda(pathSegments, this));
    var tmp_2 = this;
    tmp_2.kfu_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.lfu_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.mfu_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.nfu_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.ofu_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_0).gfv = function () {
    // Inline function 'kotlin.takeUnless' call
    var this_0 = this.xft_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    if (!(this_0 === 0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.ifu_1.uft_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_0).hfv = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mfu_1;
    encodedUser$factory();
    return this_0.w();
  };
  protoOf(Url_0).ifv = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.nfu_1;
    encodedPassword$factory();
    return this_0.w();
  };
  protoOf(Url_0).toString = function () {
    return this.dfu_1;
  };
  protoOf(Url_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_0))
      THROW_CCE();
    return this.dfu_1 === other.dfu_1;
  };
  protoOf(Url_0).hashCode = function () {
    return getStringHashCode(this.dfu_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    this_0.p8(get_encodedUserAndPassword_0(_this__u8e3s4));
    this_0.p8(get_hostWithPortIfSpecified(_this__u8e3s4));
    return this_0.toString();
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(this_0, _this__u8e3s4.hfv(), _this__u8e3s4.ifv());
    return this_0.toString();
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.hfv();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.ifv();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.jfv_1 = encodedParametersBuilder;
    this.kfv_1 = this.jfv_1.hfg();
  }
  protoOf(UrlDecodedParametersBuilder).c2o = function () {
    return decodeParameters(this.jfv_1);
  };
  protoOf(UrlDecodedParametersBuilder).hfg = function () {
    return this.kfv_1;
  };
  protoOf(UrlDecodedParametersBuilder).ifg = function (name) {
    var tmp0_safe_receiver = this.jfv_1.ifg(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.g();
      while (tmp0_iterator.h()) {
        var item = tmp0_iterator.i();
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).jfg = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.jfv_1.jfg();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      var tmp$ret$0 = decodeURLQueryComponent(item);
      destination.e(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(UrlDecodedParametersBuilder).q = function () {
    return this.jfv_1.q();
  };
  protoOf(UrlDecodedParametersBuilder).kfg = function () {
    return decodeParameters(this.jfv_1).kfg();
  };
  protoOf(UrlDecodedParametersBuilder).sfg = function (name, value) {
    return this.jfv_1.sfg(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).pfg = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.g();
    while (tmp0_iterator.h()) {
      var item = tmp0_iterator.i();
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      var tmp$ret$0 = encodeURLParameterValue(item);
      destination.e(tmp$ret$0);
    }
    return this.jfv_1.pfg(tmp, destination);
  };
  protoOf(UrlDecodedParametersBuilder).i2 = function () {
    return this.jfv_1.i2();
  };
  function encodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeParameters.<anonymous>' call
    appendAllEncoded(this_0, parameters);
    return this_0;
  }
  function decodeParameters(parameters) {
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.decodeParameters.<anonymous>' call
    appendAllDecoded(this_0, parameters);
    return this_0.c2o();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.jfg().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.ifg(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.g();
      while (tmp0_iterator_0.h()) {
        var item = tmp0_iterator_0.i();
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        var tmp$ret$0 = encodeURLParameterValue(item);
        destination.e(tmp$ret$0);
      }
      _this__u8e3s4.pfg(tmp, destination);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.jfg().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.ifg(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.g();
      while (tmp0_iterator_0.h()) {
        var item = tmp0_iterator_0.i();
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.e(tmp$ret$0);
      }
      _this__u8e3s4.pfg(tmp, destination);
    }
  }
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
  }
  function ByteArrayContent() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function ContentWrapper() {
  }
  protoOf(ContentWrapper).wfv = function () {
    return this.vfv_1;
  };
  function OutgoingContent() {
    this.lfv_1 = null;
  }
  protoOf(OutgoingContent).mfv = function () {
    return null;
  };
  protoOf(OutgoingContent).nfv = function () {
    return null;
  };
  protoOf(OutgoingContent).ifq = function () {
    return Companion_getInstance_1().dfm_1;
  };
  function NullBody() {
  }
  var NullBody_instance;
  function NullBody_getInstance() {
    return NullBody_instance;
  }
  function TextContent(text, contentType, status) {
    status = status === VOID ? null : status;
    ByteArrayContent.call(this);
    this.yfv_1 = text;
    this.zfv_1 = contentType;
    this.afw_1 = status;
    var tmp = this;
    var tmp0_elvis_lhs = charset(this.zfv_1);
    tmp.bfw_1 = toByteArray(this.yfv_1, tmp0_elvis_lhs == null ? Charsets_getInstance().pfd_1 : tmp0_elvis_lhs);
  }
  protoOf(TextContent).mfv = function () {
    return this.zfv_1;
  };
  protoOf(TextContent).nfv = function () {
    return toLong_0(this.bfw_1.length);
  };
  protoOf(TextContent).tfv = function () {
    return this.bfw_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.zfv_1.toString() + '] "' + take(this.yfv_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    return PlatformUtils_getInstance().zff_1 ? locationOrigin() : 'http://localhost';
  }
  function locationOrigin() {
    return function () {
      var tmpLocation = null;
      if (typeof window !== 'undefined') {
        tmpLocation = window.location;
      } else if (typeof self !== 'undefined') {
        tmpLocation = self.location;
      }
      var origin = '';
      if (tmpLocation) {
        origin = tmpLocation.origin;
      }
      return origin && origin != 'null' ? origin : 'http://localhost';
    }();
  }
  //region block: post-declaration
  protoOf(EmptyHeaders).v48 = get;
  protoOf(EmptyHeaders).lfg = forEach;
  protoOf(EmptyParameters).lfg = forEach;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion_0();
  EmptyHeaders_instance = new EmptyHeaders();
  EmptyParameters_instance = new EmptyParameters();
  Companion_instance_8 = new Companion_8();
  NullBody_instance = new NullBody();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NullBody_instance;
  _.$_$.b = Application_getInstance;
  _.$_$.c = Text_getInstance;
  _.$_$.d = Companion_getInstance_1;
  _.$_$.e = HttpHeaders_getInstance;
  _.$_$.f = Companion_getInstance_2;
  _.$_$.g = Companion_getInstance_3;
  _.$_$.h = Companion_getInstance_4;
  _.$_$.i = NullBody;
  _.$_$.j = ByteArrayContent;
  _.$_$.k = ContentWrapper;
  _.$_$.l = NoContent;
  _.$_$.m = ProtocolUpgrade;
  _.$_$.n = ReadChannelContent;
  _.$_$.o = WriteChannelContent;
  _.$_$.p = OutgoingContent;
  _.$_$.q = TextContent;
  _.$_$.r = HeadersBuilder;
  _.$_$.s = HttpStatusCode;
  _.$_$.t = URLBuilder;
  _.$_$.u = UnsafeHeaderException;
  _.$_$.v = get_authority;
  _.$_$.w = get_authority_0;
  _.$_$.x = charset_0;
  _.$_$.y = charset;
  _.$_$.z = contentLength;
  _.$_$.a1 = contentType;
  _.$_$.b1 = isSecure;
  _.$_$.c1 = takeFrom_0;
  _.$_$.d1 = takeFrom;
  _.$_$.e1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http.js.map
