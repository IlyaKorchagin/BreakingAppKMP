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
  var VOID = kotlin_kotlin.$_$.j;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.i;
  var encode = kotlin_io_ktor_ktor_io.$_$.m;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var takeWhile = kotlin_io_ktor_ktor_io.$_$.v;
  var charArray = kotlin_kotlin.$_$.hd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var concatToString = kotlin_kotlin.$_$.fh;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var toString = kotlin_kotlin.$_$.jf;
  var Char = kotlin_kotlin.$_$.xj;
  var isSurrogate = kotlin_kotlin.$_$.yh;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.s3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.r3;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var charSequenceSubSequence = kotlin_kotlin.$_$.kd;
  var toString_0 = kotlin_kotlin.$_$.v3;
  var toByte = kotlin_kotlin.$_$.gf;
  var decodeToString = kotlin_kotlin.$_$.kh;
  var Exception = kotlin_kotlin.$_$.dk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b2;
  var captureStack = kotlin_kotlin.$_$.fd;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.q3;
  var numberToChar = kotlin_kotlin.$_$.ze;
  var canRead = kotlin_io_ktor_ktor_io.$_$.r;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.t3;
  var plus = kotlin_kotlin.$_$.pa;
  var plus_0 = kotlin_kotlin.$_$.qa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var toSet = kotlin_kotlin.$_$.yb;
  var setOf = kotlin_kotlin.$_$.cb;
  var plus_1 = kotlin_kotlin.$_$.na;
  var listOf = kotlin_kotlin.$_$.da;
  var emptyList = kotlin_kotlin.$_$.o8;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var equals = kotlin_kotlin.$_$.oh;
  var Collection = kotlin_kotlin.$_$.q6;
  var isInterface = kotlin_kotlin.$_$.oe;
  var isBlank = kotlin_kotlin.$_$.vh;
  var last = kotlin_kotlin.$_$.x9;
  var indexOf = kotlin_kotlin.$_$.uh;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var isCharSequence = kotlin_kotlin.$_$.ke;
  var trim = kotlin_kotlin.$_$.nj;
  var contains = kotlin_kotlin.$_$.ih;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var plus_2 = kotlin_kotlin.$_$.ra;
  var equals_0 = kotlin_kotlin.$_$.od;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var hashCode = kotlin_kotlin.$_$.xd;
  var forName = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.ek;
  var get_name = kotlin_io_ktor_ktor_io.$_$.o;
  var get_lastIndex = kotlin_kotlin.$_$.r9;
  var first = kotlin_kotlin.$_$.qh;
  var last_0 = kotlin_kotlin.$_$.bi;
  var get_lastIndex_0 = kotlin_kotlin.$_$.ai;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.q;
  var emptySet = kotlin_kotlin.$_$.q8;
  var get = kotlin_io_ktor_ktor_utils.$_$.p;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.o;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.s;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.r;
  var emptyMap = kotlin_kotlin.$_$.p8;
  var toDoubleOrNull = kotlin_kotlin.$_$.yi;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.m;
  var lazy = kotlin_kotlin.$_$.pl;
  var to = kotlin_kotlin.$_$.dm;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var asList = kotlin_kotlin.$_$.j7;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.o3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.j2;
  var toLong = kotlin_kotlin.$_$.fj;
  var mapCapacity = kotlin_kotlin.$_$.ea;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Comparable = kotlin_kotlin.$_$.zj;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var isWhitespace = kotlin_kotlin.$_$.zh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var startsWith = kotlin_kotlin.$_$.ni;
  var charArrayOf = kotlin_kotlin.$_$.gd;
  var split = kotlin_kotlin.$_$.ki;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var first_0 = kotlin_kotlin.$_$.y8;
  var joinToString = kotlin_kotlin.$_$.n9;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.w;
  var indexOfAny = kotlin_kotlin.$_$.sh;
  var dropLast = kotlin_kotlin.$_$.m8;
  var IllegalStateException = kotlin_kotlin.$_$.fk;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var indexOf_0 = kotlin_kotlin.$_$.th;
  var toInt = kotlin_kotlin.$_$.cj;
  var listOf_0 = kotlin_kotlin.$_$.ca;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.x;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.u;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith_0 = kotlin_kotlin.$_$.mi;
  var addAll = kotlin_kotlin.$_$.g7;
  var joinTo = kotlin_kotlin.$_$.o9;
  var toString_1 = kotlin_kotlin.$_$.cm;
  var lazy_0 = kotlin_kotlin.$_$.ql;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.ng;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.w;
  var toLong_0 = kotlin_kotlin.$_$.hf;
  var take = kotlin_kotlin.$_$.ui;
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
    var content = encode(Charsets_getInstance().qij_1.uij(), _this__u8e3s4);
    forEach_0(content, encodeURLParameter$lambda(this_0, spaceToPlus));
    return this_0.toString();
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    encodeFull = encodeFull === VOID ? false : encodeFull;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
    _init_properties_Codecs_kt__fudxxf();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var content = encode(charset.uij(), _this__u8e3s4);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, this_0, encodeFull));
    return this_0.toString();
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? _this__u8e3s4.length : end;
    plusIsSpace = plusIsSpace === VOID ? false : plusIsSpace;
    charset = charset === VOID ? Charsets_getInstance().qij_1 : charset;
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
    var charset = Charsets_getInstance().qij_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if (!encodeSlash && current === _Char___init__impl__6a9atx(47) || get_URL_ALPHABET_CHARS().v(new Char(current)) || get_VALID_PATH_PART().v(new Char(current))) {
        this_0.w8(current);
        index = index + 1 | 0;
        continue $l$loop_0;
      }
      if (!encodeEncoded && current === _Char___init__impl__6a9atx(37) && (index + 2 | 0) < _this__u8e3s4.length && get_HEX_ALPHABET().v(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) && get_HEX_ALPHABET().v(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)))) {
        this_0.w8(current);
        this_0.w8(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        this_0.w8(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.uij(), _this__u8e3s4, index, index + symbolSize | 0);
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
      sb.gd(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace && c === _Char___init__impl__6a9atx(43)) {
        sb.w8(_Char___init__impl__6a9atx(32));
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
        sb.v8(decodeToString(bytes, 0, 0 + count | 0));
      } else {
        sb.w8(c);
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
      if (get_URL_ALPHABET().v(it) || get_SPECIAL_SYMBOLS().v(it))
        $$this$buildString.w8(numberToChar(it));
      else if ($spaceToPlus && it === 32)
        $$this$buildString.w8(_Char___init__impl__6a9atx(43));
      else
        $$this$buildString.v8(percentEncode(it));
      return Unit_instance;
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $$this$buildString, $encodeFull) {
    return function (it) {
      if (it === 32)
        if ($spaceToPlus)
          $$this$buildString.w8(_Char___init__impl__6a9atx(43));
        else
          $$this$buildString.v8('%20');
      else if (get_URL_ALPHABET().v(it) || (!$encodeFull && get_URL_PROTOCOL_PART().v(it)))
        $$this$buildString.w8(numberToChar(it));
      else
        $$this$buildString.v8(percentEncode(it));
      return Unit_instance;
    };
  }
  function forEach$lambda($block) {
    return function (buffer) {
      while (canRead(buffer)) {
        $block(buffer.si9());
      }
      return true;
    };
  }
  function encodeURLPath$lambda($$this$buildString) {
    return function (it) {
      $$this$buildString.v8(percentEncode(it));
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
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var item = tmp0_iterator.o();
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_1 = item.u1_1;
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
      var tmp0_iterator_0 = this_2.m();
      while (tmp0_iterator_0.n()) {
        var item_0 = tmp0_iterator_0.o();
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_3 = item_0.u1_1;
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
      var tmp0_iterator_1 = this_4.m();
      while (tmp0_iterator_1.n()) {
        var item_1 = tmp0_iterator_1.o();
        // Inline function 'io.ktor.http.SPECIAL_SYMBOLS.<anonymous>' call
        // Inline function 'kotlin.code' call
        var this_5 = item_1.u1_1;
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
    switch ($this.liq_1.p()) {
      case 0:
        tmp = false;
        break;
      case 1:
        // Inline function 'kotlin.let' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call

        var it = $this.liq_1.u(0);
        tmp = (equals(it.miq_1, name, true) && equals(it.niq_1, value, true));
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var this_0 = $this.liq_1;
          var tmp_0;
          if (isInterface(this_0, Collection)) {
            tmp_0 = this_0.j();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = this_0.m();
          while (tmp0_iterator.n()) {
            var element = tmp0_iterator.o();
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            if (equals(element.miq_1, name, true) && equals(element.niq_1, value, true)) {
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
    this.piq_1 = ContentType_init_$Create$('*', '*');
  }
  protoOf(Companion).co = function (value) {
    if (isBlank(value))
      return this.piq_1;
    // Inline function 'io.ktor.http.Companion.parse' call
    var headerValue = last(parseHeaderValue(value));
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var parts = headerValue.qiq_1;
    var parameters = headerValue.riq_1;
    var slash = indexOf(parts, _Char___init__impl__6a9atx(47));
    if (slash === -1) {
      // Inline function 'kotlin.text.trim' call
      if (toString(trim(isCharSequence(parts) ? parts : THROW_CCE())) === '*')
        return Companion_getInstance().piq_1;
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
    this.tiq_1 = ContentType_init_$Create$('application', '*');
    this.uiq_1 = ContentType_init_$Create$('application', 'atom+xml');
    this.viq_1 = ContentType_init_$Create$('application', 'cbor');
    this.wiq_1 = ContentType_init_$Create$('application', 'json');
    this.xiq_1 = ContentType_init_$Create$('application', 'hal+json');
    this.yiq_1 = ContentType_init_$Create$('application', 'javascript');
    this.ziq_1 = ContentType_init_$Create$('application', 'octet-stream');
    this.air_1 = ContentType_init_$Create$('application', 'rss+xml');
    this.bir_1 = ContentType_init_$Create$('application', 'soap+xml');
    this.cir_1 = ContentType_init_$Create$('application', 'xml');
    this.dir_1 = ContentType_init_$Create$('application', 'xml-dtd');
    this.eir_1 = ContentType_init_$Create$('application', 'zip');
    this.fir_1 = ContentType_init_$Create$('application', 'gzip');
    this.gir_1 = ContentType_init_$Create$('application', 'x-www-form-urlencoded');
    this.hir_1 = ContentType_init_$Create$('application', 'pdf');
    this.iir_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    this.jir_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.kir_1 = ContentType_init_$Create$('application', 'vnd.openxmlformats-officedocument.presentationml.presentation');
    this.lir_1 = ContentType_init_$Create$('application', 'protobuf');
    this.mir_1 = ContentType_init_$Create$('application', 'wasm');
    this.nir_1 = ContentType_init_$Create$('application', 'problem+json');
    this.oir_1 = ContentType_init_$Create$('application', 'problem+xml');
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    this.pir_1 = ContentType_init_$Create$('text', '*');
    this.qir_1 = ContentType_init_$Create$('text', 'plain');
    this.rir_1 = ContentType_init_$Create$('text', 'css');
    this.sir_1 = ContentType_init_$Create$('text', 'csv');
    this.tir_1 = ContentType_init_$Create$('text', 'html');
    this.uir_1 = ContentType_init_$Create$('text', 'javascript');
    this.vir_1 = ContentType_init_$Create$('text', 'vcard');
    this.wir_1 = ContentType_init_$Create$('text', 'xml');
    this.xir_1 = ContentType_init_$Create$('text', 'event-stream');
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
    this.ais_1 = contentType;
    this.bis_1 = contentSubtype;
  }
  protoOf(ContentType).cis = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.ais_1, this.bis_1, this.kiq_1, plus_2(this.liq_1, HeaderValueParam_init_$Create$(name, value)));
  };
  protoOf(ContentType).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals(this.ais_1, other.ais_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.bis_1, other.bis_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(this.liq_1, other.liq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContentType).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.ais_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.bis_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.liq_1)) | 0;
    return result;
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.dis('charset');
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
    return _this__u8e3s4.cis('charset', get_name(charset));
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
    this.kiq_1 = content;
    this.liq_1 = parameters;
  }
  protoOf(HeaderValueWithParameters).dis = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.liq_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.liq_1.u(index);
        if (equals(parameter.miq_1, name, true)) {
          return parameter.niq_1;
        }
      }
       while (!(index === last));
    return null;
  };
  protoOf(HeaderValueWithParameters).toString = function () {
    var tmp;
    if (this.liq_1.j()) {
      tmp = this.kiq_1;
    } else {
      var tmp_0 = this.kiq_1.length;
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator = this.liq_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        var tmp_1 = sum;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        sum = tmp_1 + ((element.miq_1.length + element.niq_1.length | 0) + 3 | 0) | 0;
      }
      var size = tmp_0 + sum | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      this_0.v8(this.kiq_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.liq_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.liq_1.u(index);
          this_0.v8('; ');
          this_0.v8(element_0.miq_1);
          this_0.v8('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var this_1 = element_0.niq_1;
          if (needQuotes$accessor$vynnj(this_1))
            this_0.v8(quote(this_1));
          else
            this_0.v8(this_1);
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
      if (get_HeaderFieldValueSeparators().v(new Char(element)))
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
    out.v8('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var ch = element;
      if (ch === _Char___init__impl__6a9atx(92))
        out.v8('\\\\');
      else if (ch === _Char___init__impl__6a9atx(10))
        out.v8('\\n');
      else if (ch === _Char___init__impl__6a9atx(13))
        out.v8('\\r');
      else if (ch === _Char___init__impl__6a9atx(9))
        out.v8('\\t');
      else if (ch === _Char___init__impl__6a9atx(34))
        out.v8('\\"');
      else
        out.w8(ch);
    }
    out.v8('"');
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
    this.eis_1 = EmptyHeaders_instance;
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
  protoOf(HeadersBuilder).a2u = function () {
    return new HeadersImpl(this.oim_1);
  };
  protoOf(HeadersBuilder).pim = function (name) {
    protoOf(StringValuesBuilderImpl).pim.call(this, name);
    HttpHeaders_getInstance().diw(name);
  };
  protoOf(HeadersBuilder).sim = function (value) {
    protoOf(StringValuesBuilderImpl).sim.call(this, value);
    HttpHeaders_getInstance().eiw(value);
  };
  function EmptyHeaders() {
  }
  protoOf(EmptyHeaders).iim = function () {
    return true;
  };
  protoOf(EmptyHeaders).jim = function (name) {
    return null;
  };
  protoOf(EmptyHeaders).kim = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).lim = function () {
    return emptySet();
  };
  protoOf(EmptyHeaders).toString = function () {
    return 'Headers ' + toString(this.lim());
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
    return 'Headers ' + toString(this.lim());
  };
  function HeaderValueParam_init_$Init$(name, value, $this) {
    HeaderValueParam.call($this, name, value, false);
    return $this;
  }
  function HeaderValueParam_init_$Create$(name, value) {
    return HeaderValueParam_init_$Init$(name, value, objectCreate(protoOf(HeaderValueParam)));
  }
  function HeaderValueParam(name, value, escapeValue) {
    this.miq_1 = name;
    this.niq_1 = value;
    this.oiq_1 = escapeValue;
  }
  protoOf(HeaderValueParam).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals(other.miq_1, this.miq_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.niq_1, this.niq_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HeaderValueParam).hashCode = function () {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.miq_1.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.niq_1.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  protoOf(HeaderValueParam).toString = function () {
    return 'HeaderValueParam(name=' + this.miq_1 + ', value=' + this.niq_1 + ', escapeValue=' + this.oiq_1 + ')';
  };
  function HeaderValue(value, params) {
    params = params === VOID ? emptyList() : params;
    this.qiq_1 = value;
    this.riq_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.riq_1.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        if (element.miq_1 === 'q') {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.niq_1;
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
    tmp.siq_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  protoOf(HeaderValue).toString = function () {
    return 'HeaderValue(value=' + this.qiq_1 + ', params=' + toString(this.riq_1) + ')';
  };
  protoOf(HeaderValue).hashCode = function () {
    var result = getStringHashCode(this.qiq_1);
    result = imul(result, 31) + hashCode(this.riq_1) | 0;
    return result;
  };
  protoOf(HeaderValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.qiq_1 === tmp0_other_with_cast.qiq_1))
      return false;
    if (!equals_0(this.riq_1, tmp0_other_with_cast.riq_1))
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
        var tmp_0 = items.c1();
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
    var tmp_2 = items.c1();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.e(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.on() ? _this__u8e3s4.c1() : emptyList();
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
        var paramEnd = _destruct__k2r9zo.lb();
        var paramValue = _destruct__k2r9zo.mb();
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
        builder.w8(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.w8(currentChar);
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
    $parameters.c1().e(HeaderValueParam_init_$Create$(name, value));
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
    this.his_1 = 'Accept';
    this.iis_1 = 'Accept-Charset';
    this.jis_1 = 'Accept-Encoding';
    this.kis_1 = 'Accept-Language';
    this.lis_1 = 'Accept-Ranges';
    this.mis_1 = 'Age';
    this.nis_1 = 'Allow';
    this.ois_1 = 'ALPN';
    this.pis_1 = 'Authentication-Info';
    this.qis_1 = 'Authorization';
    this.ris_1 = 'Cache-Control';
    this.sis_1 = 'Connection';
    this.tis_1 = 'Content-Disposition';
    this.uis_1 = 'Content-Encoding';
    this.vis_1 = 'Content-Language';
    this.wis_1 = 'Content-Length';
    this.xis_1 = 'Content-Location';
    this.yis_1 = 'Content-Range';
    this.zis_1 = 'Content-Type';
    this.ait_1 = 'Cookie';
    this.bit_1 = 'DASL';
    this.cit_1 = 'Date';
    this.dit_1 = 'DAV';
    this.eit_1 = 'Depth';
    this.fit_1 = 'Destination';
    this.git_1 = 'ETag';
    this.hit_1 = 'Expect';
    this.iit_1 = 'Expires';
    this.jit_1 = 'From';
    this.kit_1 = 'Forwarded';
    this.lit_1 = 'Host';
    this.mit_1 = 'HTTP2-Settings';
    this.nit_1 = 'If';
    this.oit_1 = 'If-Match';
    this.pit_1 = 'If-Modified-Since';
    this.qit_1 = 'If-None-Match';
    this.rit_1 = 'If-Range';
    this.sit_1 = 'If-Schedule-Tag-Match';
    this.tit_1 = 'If-Unmodified-Since';
    this.uit_1 = 'Last-Modified';
    this.vit_1 = 'Location';
    this.wit_1 = 'Lock-Token';
    this.xit_1 = 'Link';
    this.yit_1 = 'Max-Forwards';
    this.zit_1 = 'MIME-Version';
    this.aiu_1 = 'Ordering-Type';
    this.biu_1 = 'Origin';
    this.ciu_1 = 'Overwrite';
    this.diu_1 = 'Position';
    this.eiu_1 = 'Pragma';
    this.fiu_1 = 'Prefer';
    this.giu_1 = 'Preference-Applied';
    this.hiu_1 = 'Proxy-Authenticate';
    this.iiu_1 = 'Proxy-Authentication-Info';
    this.jiu_1 = 'Proxy-Authorization';
    this.kiu_1 = 'Public-Key-Pins';
    this.liu_1 = 'Public-Key-Pins-Report-Only';
    this.miu_1 = 'Range';
    this.niu_1 = 'Referer';
    this.oiu_1 = 'Retry-After';
    this.piu_1 = 'Schedule-Reply';
    this.qiu_1 = 'Schedule-Tag';
    this.riu_1 = 'Sec-WebSocket-Accept';
    this.siu_1 = 'Sec-WebSocket-Extensions';
    this.tiu_1 = 'Sec-WebSocket-Key';
    this.uiu_1 = 'Sec-WebSocket-Protocol';
    this.viu_1 = 'Sec-WebSocket-Version';
    this.wiu_1 = 'Server';
    this.xiu_1 = 'Set-Cookie';
    this.yiu_1 = 'SLUG';
    this.ziu_1 = 'Strict-Transport-Security';
    this.aiv_1 = 'TE';
    this.biv_1 = 'Timeout';
    this.civ_1 = 'Trailer';
    this.div_1 = 'Transfer-Encoding';
    this.eiv_1 = 'Upgrade';
    this.fiv_1 = 'User-Agent';
    this.giv_1 = 'Vary';
    this.hiv_1 = 'Via';
    this.iiv_1 = 'Warning';
    this.jiv_1 = 'WWW-Authenticate';
    this.kiv_1 = 'Access-Control-Allow-Origin';
    this.liv_1 = 'Access-Control-Allow-Methods';
    this.miv_1 = 'Access-Control-Allow-Credentials';
    this.niv_1 = 'Access-Control-Allow-Headers';
    this.oiv_1 = 'Access-Control-Request-Method';
    this.piv_1 = 'Access-Control-Request-Headers';
    this.qiv_1 = 'Access-Control-Expose-Headers';
    this.riv_1 = 'Access-Control-Max-Age';
    this.siv_1 = 'X-Http-Method-Override';
    this.tiv_1 = 'X-Forwarded-Host';
    this.uiv_1 = 'X-Forwarded-Server';
    this.viv_1 = 'X-Forwarded-Proto';
    this.wiv_1 = 'X-Forwarded-For';
    this.xiv_1 = 'X-Forwarded-Port';
    this.yiv_1 = 'X-Request-ID';
    this.ziv_1 = 'X-Correlation-ID';
    this.aiw_1 = 'X-Total-Count';
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.biw_1 = [this.div_1, this.eiv_1];
    this.ciw_1 = asList(this.biw_1);
  }
  protoOf(HttpHeaders).diw = function (name) {
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
  protoOf(HttpHeaders).eiw = function (value) {
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
    this.fiw_1 = headerName;
    this.giw_1 = position;
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + toString_0(charSequenceGet(headerValue, position)) + "'";
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(headerValue, position);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    captureStack(this, IllegalHeaderValueException);
    this.hiw_1 = headerValue;
    this.iiw_1 = position;
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.jiw().i4f(HttpHeaders_getInstance().wis_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_0(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.jiw().i4f(HttpHeaders_getInstance().zis_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance().co(tmp0_safe_receiver);
    }
    return tmp;
  }
  function contentType_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.jiw().i4f(HttpHeaders_getInstance().zis_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp = Companion_getInstance().co(tmp0_safe_receiver);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.kiw_1 = new HttpMethod('GET');
    this.liw_1 = new HttpMethod('POST');
    this.miw_1 = new HttpMethod('PUT');
    this.niw_1 = new HttpMethod('PATCH');
    this.oiw_1 = new HttpMethod('DELETE');
    this.piw_1 = new HttpMethod('HEAD');
    this.qiw_1 = new HttpMethod('OPTIONS');
    this.riw_1 = listOf([this.kiw_1, this.liw_1, this.miw_1, this.niw_1, this.oiw_1, this.piw_1, this.qiw_1]);
  }
  protoOf(Companion_2).co = function (method) {
    return method === this.kiw_1.siw_1 ? this.kiw_1 : method === this.liw_1.siw_1 ? this.liw_1 : method === this.miw_1.siw_1 ? this.miw_1 : method === this.niw_1.siw_1 ? this.niw_1 : method === this.oiw_1.siw_1 ? this.oiw_1 : method === this.piw_1.siw_1 ? this.piw_1 : method === this.qiw_1.siw_1 ? this.qiw_1 : new HttpMethod(method);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_2();
    this.siw_1 = value;
  }
  protoOf(HttpMethod).toString = function () {
    return 'HttpMethod(value=' + this.siw_1 + ')';
  };
  protoOf(HttpMethod).hashCode = function () {
    return getStringHashCode(this.siw_1);
  };
  protoOf(HttpMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.siw_1 === tmp0_other_with_cast.siw_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.tiw_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.uiw_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.viw_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.wiw_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.xiw_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_3();
    this.yiw_1 = name;
    this.ziw_1 = major;
    this.aix_1 = minor;
  }
  protoOf(HttpProtocolVersion).toString = function () {
    return this.yiw_1 + '/' + this.ziw_1 + '.' + this.aix_1;
  };
  protoOf(HttpProtocolVersion).hashCode = function () {
    var result = getStringHashCode(this.yiw_1);
    result = imul(result, 31) + this.ziw_1 | 0;
    result = imul(result, 31) + this.aix_1 | 0;
    return result;
  };
  protoOf(HttpProtocolVersion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.yiw_1 === tmp0_other_with_cast.yiw_1))
      return false;
    if (!(this.ziw_1 === tmp0_other_with_cast.ziw_1))
      return false;
    if (!(this.aix_1 === tmp0_other_with_cast.aix_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.bix_1 = new HttpStatusCode(100, 'Continue');
    this.cix_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.dix_1 = new HttpStatusCode(102, 'Processing');
    this.eix_1 = new HttpStatusCode(200, 'OK');
    this.fix_1 = new HttpStatusCode(201, 'Created');
    this.gix_1 = new HttpStatusCode(202, 'Accepted');
    this.hix_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.iix_1 = new HttpStatusCode(204, 'No Content');
    this.jix_1 = new HttpStatusCode(205, 'Reset Content');
    this.kix_1 = new HttpStatusCode(206, 'Partial Content');
    this.lix_1 = new HttpStatusCode(207, 'Multi-Status');
    this.mix_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.nix_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.oix_1 = new HttpStatusCode(302, 'Found');
    this.pix_1 = new HttpStatusCode(303, 'See Other');
    this.qix_1 = new HttpStatusCode(304, 'Not Modified');
    this.rix_1 = new HttpStatusCode(305, 'Use Proxy');
    this.six_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.tix_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.uix_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.vix_1 = new HttpStatusCode(400, 'Bad Request');
    this.wix_1 = new HttpStatusCode(401, 'Unauthorized');
    this.xix_1 = new HttpStatusCode(402, 'Payment Required');
    this.yix_1 = new HttpStatusCode(403, 'Forbidden');
    this.zix_1 = new HttpStatusCode(404, 'Not Found');
    this.aiy_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.biy_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.ciy_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.diy_1 = new HttpStatusCode(408, 'Request Timeout');
    this.eiy_1 = new HttpStatusCode(409, 'Conflict');
    this.fiy_1 = new HttpStatusCode(410, 'Gone');
    this.giy_1 = new HttpStatusCode(411, 'Length Required');
    this.hiy_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.iiy_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.jiy_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.kiy_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.liy_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.miy_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.niy_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.oiy_1 = new HttpStatusCode(423, 'Locked');
    this.piy_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.qiy_1 = new HttpStatusCode(425, 'Too Early');
    this.riy_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.siy_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.tiy_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.uiy_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.viy_1 = new HttpStatusCode(501, 'Not Implemented');
    this.wiy_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.xiy_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.yiy_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.ziy_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.aiz_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.biz_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.ciz_1 = allStatusCodes();
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.ciz_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      var tmp$ret$0 = element.eiz_1;
      destination.k2(tmp$ret$0, element);
    }
    tmp.diz_1 = destination;
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_4();
    this.eiz_1 = value;
    this.fiz_1 = description;
  }
  protoOf(HttpStatusCode).toString = function () {
    return '' + this.eiz_1 + ' ' + this.fiz_1;
  };
  protoOf(HttpStatusCode).equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.eiz_1 === this.eiz_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HttpStatusCode).hashCode = function () {
    return this.eiz_1;
  };
  protoOf(HttpStatusCode).giz = function (other) {
    return this.eiz_1 - other.eiz_1 | 0;
  };
  protoOf(HttpStatusCode).d = function (other) {
    return this.giz(other instanceof HttpStatusCode ? other : THROW_CCE());
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_4().bix_1, Companion_getInstance_4().cix_1, Companion_getInstance_4().dix_1, Companion_getInstance_4().eix_1, Companion_getInstance_4().fix_1, Companion_getInstance_4().gix_1, Companion_getInstance_4().hix_1, Companion_getInstance_4().iix_1, Companion_getInstance_4().jix_1, Companion_getInstance_4().kix_1, Companion_getInstance_4().lix_1, Companion_getInstance_4().mix_1, Companion_getInstance_4().nix_1, Companion_getInstance_4().oix_1, Companion_getInstance_4().pix_1, Companion_getInstance_4().qix_1, Companion_getInstance_4().rix_1, Companion_getInstance_4().six_1, Companion_getInstance_4().tix_1, Companion_getInstance_4().uix_1, Companion_getInstance_4().vix_1, Companion_getInstance_4().wix_1, Companion_getInstance_4().xix_1, Companion_getInstance_4().yix_1, Companion_getInstance_4().zix_1, Companion_getInstance_4().aiy_1, Companion_getInstance_4().biy_1, Companion_getInstance_4().ciy_1, Companion_getInstance_4().diy_1, Companion_getInstance_4().eiy_1, Companion_getInstance_4().fiy_1, Companion_getInstance_4().giy_1, Companion_getInstance_4().hiy_1, Companion_getInstance_4().iiy_1, Companion_getInstance_4().jiy_1, Companion_getInstance_4().kiy_1, Companion_getInstance_4().liy_1, Companion_getInstance_4().miy_1, Companion_getInstance_4().niy_1, Companion_getInstance_4().oiy_1, Companion_getInstance_4().piy_1, Companion_getInstance_4().qiy_1, Companion_getInstance_4().riy_1, Companion_getInstance_4().siy_1, Companion_getInstance_4().tiy_1, Companion_getInstance_4().uiy_1, Companion_getInstance_4().viy_1, Companion_getInstance_4().wiy_1, Companion_getInstance_4().xiy_1, Companion_getInstance_4().yiy_1, Companion_getInstance_4().ziy_1, Companion_getInstance_4().aiz_1, Companion_getInstance_4().biz_1]);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.hiz_1 = EmptyParameters_instance;
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
  protoOf(EmptyParameters).iim = function () {
    return true;
  };
  protoOf(EmptyParameters).jim = function (name) {
    return null;
  };
  protoOf(EmptyParameters).kim = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).lim = function () {
    return emptySet();
  };
  protoOf(EmptyParameters).j = function () {
    return true;
  };
  protoOf(EmptyParameters).toString = function () {
    return 'Parameters ' + toString(this.lim());
  };
  protoOf(EmptyParameters).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.j();
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
  protoOf(ParametersBuilderImpl).a2u = function () {
    return new ParametersImpl(this.oim_1);
  };
  function ParametersImpl(values) {
    values = values === VOID ? emptyMap() : values;
    StringValuesImpl.call(this, true, values);
  }
  protoOf(ParametersImpl).toString = function () {
    return 'Parameters ' + toString(this.lim());
  };
  function parseQueryString(query, startIndex, limit, decode) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    limit = limit === VOID ? 1000 : limit;
    decode = decode === VOID ? true : decode;
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_5().hiz_1;
    } else {
      // Inline function 'io.ktor.http.Companion.build' call
      Companion_getInstance_5();
      // Inline function 'kotlin.apply' call
      var this_0 = ParametersBuilder();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(this_0, query, startIndex, limit, decode);
      tmp = this_0.a2u();
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
        _this__u8e3s4.qim(name, emptyList());
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
      _this__u8e3s4.tim(name_0, value);
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
    var this_0 = $this.kiz_1;
    if (charSequenceLength(this_0) > 0) {
      tmp = true;
    } else {
      tmp = $this.wiz().uiz_1 === 'file';
    }
    if (tmp)
      return Unit_instance;
    $this.kiz_1 = Companion_getInstance_6().qj0_1.xiz_1;
    if ($this.niz_1 == null)
      $this.niz_1 = Companion_getInstance_6().qj0_1.ij0_1;
    if ($this.miz_1 === 0) {
      $this.rj0(Companion_getInstance_6().qj0_1.yiz_1);
    }
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.qj0_1 = Url(get_origin(this));
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
    parameters = parameters === VOID ? Companion_getInstance_5().hiz_1 : parameters;
    fragment = fragment === VOID ? '' : fragment;
    trailingQuery = trailingQuery === VOID ? false : trailingQuery;
    this.kiz_1 = host;
    this.liz_1 = trailingQuery;
    this.miz_1 = port;
    this.niz_1 = protocol;
    var tmp = this;
    tmp.oiz_1 = user == null ? null : encodeURLParameter(user);
    var tmp_0 = this;
    tmp_0.piz_1 = password == null ? null : encodeURLParameter(password);
    this.qiz_1 = encodeURLQueryComponent(fragment);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      var tmp$ret$0 = encodeURLPathPart(item);
      destination.e(tmp$ret$0);
    }
    tmp_1.riz_1 = destination;
    this.siz_1 = encodeParameters(parameters);
    this.tiz_1 = new UrlDecodedParametersBuilder(this.siz_1);
  }
  protoOf(URLBuilder).rj0 = function (value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= value ? value <= 65535 : false)) {
      // Inline function 'io.ktor.http.URLBuilder.<set-port>.<anonymous>' call
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.miz_1 = value;
  };
  protoOf(URLBuilder).sj0 = function (value) {
    this.niz_1 = value;
  };
  protoOf(URLBuilder).wiz = function () {
    var tmp0_elvis_lhs = this.niz_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_7().tj0_1 : tmp0_elvis_lhs;
  };
  protoOf(URLBuilder).zj0 = function (value) {
    var tmp = this;
    tmp.oiz_1 = value == null ? null : encodeURLParameter(value);
  };
  protoOf(URLBuilder).aj1 = function () {
    var tmp0_safe_receiver = this.oiz_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).bj1 = function () {
    var tmp0_safe_receiver = this.piz_1;
    return tmp0_safe_receiver == null ? null : decodeURLPart(tmp0_safe_receiver);
  };
  protoOf(URLBuilder).cj1 = function () {
    return decodeURLQueryComponent(this.qiz_1);
  };
  protoOf(URLBuilder).dj1 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.riz_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      var tmp$ret$0 = decodeURLPart(item);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(URLBuilder).ej1 = function (value) {
    this.siz_1 = value;
    this.tiz_1 = new UrlDecodedParametersBuilder(value);
  };
  protoOf(URLBuilder).fj1 = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).toString = function () {
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  protoOf(URLBuilder).a2u = function () {
    applyOrigin(this);
    return new Url_0(this.niz_1, this.kiz_1, this.miz_1, this.dj1(), this.tiz_1.a2u(), this.cj1(), this.aj1(), this.bj1(), this.liz_1, this.fj1());
  };
  function get_authority(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    this_0.v8(get_encodedUserAndPassword(_this__u8e3s4));
    this_0.v8(_this__u8e3s4.kiz_1);
    if (!(_this__u8e3s4.miz_1 === 0) && !(_this__u8e3s4.miz_1 === _this__u8e3s4.wiz().viz_1)) {
      this_0.v8(':');
      this_0.v8(_this__u8e3s4.miz_1.toString());
    }
    return this_0.toString();
  }
  function appendTo(_this__u8e3s4, out) {
    out.f(_this__u8e3s4.wiz().uiz_1);
    switch (_this__u8e3s4.wiz().uiz_1) {
      case 'file':
        appendFile(out, _this__u8e3s4.kiz_1, get_encodedPath(_this__u8e3s4));
        return out;
      case 'mailto':
        appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.kiz_1);
        return out;
      case 'about':
        appendAbout(out, _this__u8e3s4.kiz_1);
        return out;
    }
    out.f('://');
    out.f(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.siz_1, _this__u8e3s4.liz_1);
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.qiz_1;
    if (charSequenceLength(this_0) > 0) {
      out.w8(_Char___init__impl__6a9atx(35));
      out.f(_this__u8e3s4.qiz_1);
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
    appendUserAndPassword(this_0, _this__u8e3s4.oiz_1, _this__u8e3s4.piz_1);
    return this_0.toString();
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.f('://');
    _this__u8e3s4.f(host);
    if (!startsWith(encodedPath, _Char___init__impl__6a9atx(47))) {
      _this__u8e3s4.w8(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.f(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    _this__u8e3s4.riz_1 = isBlank(value) ? emptyList() : value === '/' ? get_ROOT_PATH() : toMutableList(split(value, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.riz_1);
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
    if (_this__u8e3s4.j())
      return '';
    if (_this__u8e3s4.p() === 1) {
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
      _this__u8e3s4.sj0(Companion_getInstance_7().gj1(scheme));
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.wiz().uiz_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.wiz().uiz_1 === 'mailto') {
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
    if (_this__u8e3s4.wiz().uiz_1 === 'about') {
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
      tmp.kiz_1 = urlString.substring(startIndex_1, endIndex);
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
            tmp_1.oiz_1 = urlString.substring(startIndex_2, passwordIndex);
            var tmp_2 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var startIndex_3 = passwordIndex + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_2.piz_1 = urlString.substring(startIndex_3, delimiter);
          } else {
            var tmp_3 = _this__u8e3s4;
            // Inline function 'kotlin.text.substring' call
            var startIndex_4 = startIndex;
            // Inline function 'kotlin.js.asDynamic' call
            tmp_3.oiz_1 = urlString.substring(startIndex_4, delimiter);
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
      _this__u8e3s4.riz_1 = charSequenceGet(urlString, endIndex - 1 | 0) === _Char___init__impl__6a9atx(47) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_4 = _this__u8e3s4;
    var tmp_5;
    if (slashCount === 0) {
      tmp_5 = dropLast(_this__u8e3s4.riz_1, 1);
    } else {
      tmp_5 = emptyList();
    }
    tmp_4.riz_1 = tmp_5;
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
      if (_this__u8e3s4.riz_1.p() === 1) {
        // Inline function 'kotlin.text.isEmpty' call
        var this_2 = first_0(_this__u8e3s4.riz_1);
        tmp_8 = charSequenceLength(this_2) === 0;
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp_7 = emptyList();
      } else {
        tmp_7 = _this__u8e3s4.riz_1;
      }
      var basePath = tmp_7;
      var rawChunks = rawPath === '/' ? get_ROOT_PATH() : split(rawPath, charArrayOf([_Char___init__impl__6a9atx(47)]));
      var relativePath = plus_0(slashCount === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.riz_1 = plus_0(basePath, relativePath);
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
          tmp.kiz_1 = urlString.substring(startIndex, endIndex);
          return Unit_instance;
        }

        var tmp_0 = _this__u8e3s4;
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp_0.kiz_1 = urlString.substring(startIndex, nextSlash);
        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$5 = urlString.substring(nextSlash, endIndex);
        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        break;
      case 3:
        _this__u8e3s4.kiz_1 = '';
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
    _this__u8e3s4.zj0(decodeURLPart(tmp$ret$1));
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var startIndex_0 = delimiter + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kiz_1 = urlString.substring(startIndex_0, endIndex);
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
    tmp_0.kiz_1 = urlString.substring(startIndex, colonIndex);
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
    _this__u8e3s4.rj0(tmp_1);
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.liz_1 = true;
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
    rawParameters.mim(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    _init_properties_URLParser_kt__sf11to();
    if (startIndex < endIndex && charSequenceGet(urlString, startIndex) === _Char___init__impl__6a9atx(35)) {
      var tmp = _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = startIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp.qiz_1 = urlString.substring(startIndex_0, endIndex);
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.siz_1.qim(key, values);
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
    this.tj0_1 = new URLProtocol('http', 80);
    this.uj0_1 = new URLProtocol('https', 443);
    this.vj0_1 = new URLProtocol('ws', 80);
    this.wj0_1 = new URLProtocol('wss', 443);
    this.xj0_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([this.tj0_1, this.uj0_1, this.vj0_1, this.wj0_1, this.xj0_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      var tmp$ret$0 = element.uiz_1;
      destination.k2(tmp$ret$0, element);
    }
    tmp.yj0_1 = destination;
  }
  protoOf(Companion_7).gj1 = function (name) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var it = toLowerCasePreservingASCIIRules(name);
    var tmp0_elvis_lhs = Companion_getInstance_7().yj0_1.s2(it);
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
    this.uiz_1 = name;
    this.viz_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var indexedObject = this.uiz_1;
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
    return 'URLProtocol(name=' + this.uiz_1 + ', defaultPort=' + this.viz_1 + ')';
  };
  protoOf(URLProtocol).hashCode = function () {
    var result = getStringHashCode(this.uiz_1);
    result = imul(result, 31) + this.viz_1 | 0;
    return result;
  };
  protoOf(URLProtocol).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.uiz_1 === tmp0_other_with_cast.uiz_1))
      return false;
    if (!(this.viz_1 === tmp0_other_with_cast.viz_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.uiz_1 === 'https' || _this__u8e3s4.uiz_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.niz_1 = url.niz_1;
    _this__u8e3s4.kiz_1 = url.kiz_1;
    _this__u8e3s4.rj0(url.miz_1);
    _this__u8e3s4.riz_1 = url.riz_1;
    _this__u8e3s4.oiz_1 = url.oiz_1;
    _this__u8e3s4.piz_1 = url.piz_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ParametersBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.takeFrom.<anonymous>' call
    appendAll(this_0, url.siz_1);
    _this__u8e3s4.ej1(this_0);
    _this__u8e3s4.qiz_1 = url.qiz_1;
    _this__u8e3s4.liz_1 = url.liz_1;
    return _this__u8e3s4;
  }
  function get_hostWithPortIfSpecified(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.yiz_1;
    return tmp0_subject === 0 || tmp0_subject === _this__u8e3s4.jj0_1.viz_1 ? _this__u8e3s4.xiz_1 : get_hostWithPort(_this__u8e3s4);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_instance;
    }
    _this__u8e3s4.v8(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.w8(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.v8(encodedPassword);
    }
    _this__u8e3s4.v8('@');
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).a2u();
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
      _this__u8e3s4.w8(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.f(encodedPath);
    if (!encodedQueryParameters.j() || trailingQuery) {
      _this__u8e3s4.f('?');
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = encodedQueryParameters.lim();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.c1();
      var tmp_0;
      if (value.j()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.m();
        while (tmp0_iterator_0.n()) {
          var item = tmp0_iterator_0.o();
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
    return _this__u8e3s4.xiz_1 + ':' + _this__u8e3s4.hj1();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(new URLBuilder(), urlString);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.jb_1;
    var tmp;
    if (it.kb_1 == null) {
      tmp = key;
    } else {
      var value = toString_1(it.kb_1);
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
      if ($pathSegments.j()) {
        return emptyList();
      }
      var tmp_0;
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = first_0($pathSegments);
      if (charSequenceLength(this_0) === 0) {
        tmp_1 = $pathSegments.p() > 1;
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
      return $pathSegments.j2(start, end);
    };
  }
  function Url$encodedPath$delegate$lambda($pathSegments, this$0) {
    return function () {
      var tmp;
      if ($pathSegments.j()) {
        return '';
      }
      var pathStartIndex = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(47), this$0.jj0_1.uiz_1.length + 3 | 0);
      var tmp_0;
      if (pathStartIndex === -1) {
        return '';
      }
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var pathEndIndex = indexOfAny(this$0.ej0_1, tmp$ret$0, pathStartIndex);
      var tmp_1;
      if (pathEndIndex === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.ej0_1.substring(pathStartIndex);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(pathStartIndex, pathEndIndex);
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var queryStart = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(63)) + 1 | 0;
      var tmp;
      if (queryStart === 0) {
        return '';
      }
      var queryEnd = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(35), queryStart);
      var tmp_0;
      if (queryEnd === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.ej0_1.substring(queryStart);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(queryStart, queryEnd);
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var pathStart = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(47), this$0.jj0_1.uiz_1.length + 3 | 0);
      var tmp;
      if (pathStart === -1) {
        return '';
      }
      var queryEnd = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(35), pathStart);
      var tmp_0;
      if (queryEnd === -1) {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        return this$0.ej0_1.substring(pathStart);
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(pathStart, queryEnd);
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.bj0_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.bj0_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var usernameStart = this$0.jj0_1.uiz_1.length + 3 | 0;
      // Inline function 'kotlin.charArrayOf' call
      var tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var usernameEnd = indexOfAny(this$0.ej0_1, tmp$ret$1, usernameStart);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(usernameStart, usernameEnd);
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.cj0_1 == null) {
        return null;
      }
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = this$0.cj0_1;
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      var passwordStart = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(58), this$0.jj0_1.uiz_1.length + 3 | 0) + 1 | 0;
      var passwordEnd = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(64));
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(passwordStart, passwordEnd);
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var fragmentStart = indexOf(this$0.ej0_1, _Char___init__impl__6a9atx(35)) + 1 | 0;
      var tmp;
      if (fragmentStart === 0) {
        return '';
      }
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      return this$0.ej0_1.substring(fragmentStart);
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    this.xiz_1 = host;
    this.yiz_1 = specifiedPort;
    this.ziz_1 = parameters;
    this.aj0_1 = fragment;
    this.bj0_1 = user;
    this.cj0_1 = password;
    this.dj0_1 = trailingQuery;
    this.ej0_1 = urlString;
    // Inline function 'kotlin.require' call
    var containsArg = this.yiz_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= containsArg ? containsArg <= 65535 : false)) {
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      var message = 'Port must be between 0 and 65535, or 0 if not set. Provided: ' + this.yiz_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.fj0_1 = pathSegments;
    this.gj0_1 = pathSegments;
    var tmp = this;
    tmp.hj0_1 = lazy_0(Url$segments$delegate$lambda(pathSegments));
    this.ij0_1 = protocol;
    var tmp_0 = this;
    var tmp0_elvis_lhs = this.ij0_1;
    tmp_0.jj0_1 = tmp0_elvis_lhs == null ? Companion_getInstance_7().tj0_1 : tmp0_elvis_lhs;
    var tmp_1 = this;
    tmp_1.kj0_1 = lazy_0(Url$encodedPath$delegate$lambda(pathSegments, this));
    var tmp_2 = this;
    tmp_2.lj0_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.mj0_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.nj0_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.oj0_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.pj0_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  protoOf(Url_0).hj1 = function () {
    // Inline function 'kotlin.takeUnless' call
    var this_0 = this.yiz_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    if (!(this_0 === 0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? this.jj0_1.viz_1 : tmp0_elvis_lhs;
  };
  protoOf(Url_0).ij1 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.nj0_1;
    encodedUser$factory();
    return this_0.c1();
  };
  protoOf(Url_0).jj1 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.oj0_1;
    encodedPassword$factory();
    return this_0.c1();
  };
  protoOf(Url_0).toString = function () {
    return this.ej0_1;
  };
  protoOf(Url_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Url_0))
      THROW_CCE();
    return this.ej0_1 === other.ej0_1;
  };
  protoOf(Url_0).hashCode = function () {
    return getStringHashCode(this.ej0_1);
  };
  function get_authority_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    this_0.v8(get_encodedUserAndPassword_0(_this__u8e3s4));
    this_0.v8(get_hostWithPortIfSpecified(_this__u8e3s4));
    return this_0.toString();
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(this_0, _this__u8e3s4.ij1(), _this__u8e3s4.jj1());
    return this_0.toString();
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.ij1();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.jj1();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.kj1_1 = encodedParametersBuilder;
    this.lj1_1 = this.kj1_1.iim();
  }
  protoOf(UrlDecodedParametersBuilder).a2u = function () {
    return decodeParameters(this.kj1_1);
  };
  protoOf(UrlDecodedParametersBuilder).iim = function () {
    return this.lj1_1;
  };
  protoOf(UrlDecodedParametersBuilder).jim = function (name) {
    var tmp0_safe_receiver = this.kj1_1.jim(encodeURLParameter(name));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.m();
      while (tmp0_iterator.n()) {
        var item = tmp0_iterator.o();
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    return tmp;
  };
  protoOf(UrlDecodedParametersBuilder).kim = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.kj1_1.kim();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      var tmp$ret$0 = decodeURLQueryComponent(item);
      destination.e(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(UrlDecodedParametersBuilder).j = function () {
    return this.kj1_1.j();
  };
  protoOf(UrlDecodedParametersBuilder).lim = function () {
    return decodeParameters(this.kj1_1).lim();
  };
  protoOf(UrlDecodedParametersBuilder).tim = function (name, value) {
    return this.kj1_1.tim(encodeURLParameter(name), encodeURLParameterValue(value));
  };
  protoOf(UrlDecodedParametersBuilder).qim = function (name, values) {
    var tmp = encodeURLParameter(name);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      var tmp$ret$0 = encodeURLParameterValue(item);
      destination.e(tmp$ret$0);
    }
    return this.kj1_1.qim(tmp, destination);
  };
  protoOf(UrlDecodedParametersBuilder).n2 = function () {
    return this.kj1_1.n2();
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
    return this_0.a2u();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.kim().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.jim(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.m();
      while (tmp0_iterator_0.n()) {
        var item = tmp0_iterator_0.o();
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        var tmp$ret$0 = encodeURLParameterValue(item);
        destination.e(tmp$ret$0);
      }
      _this__u8e3s4.qim(tmp, destination);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = parameters.kim().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.jim(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent(element);
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.m();
      while (tmp0_iterator_0.n()) {
        var item = tmp0_iterator_0.o();
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        var tmp$ret$0 = decodeURLQueryComponent(item, VOID, VOID, true);
        destination.e(tmp$ret$0);
      }
      _this__u8e3s4.qim(tmp, destination);
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
  protoOf(ContentWrapper).xj1 = function () {
    return this.wj1_1;
  };
  function OutgoingContent() {
    this.mj1_1 = null;
  }
  protoOf(OutgoingContent).nj1 = function () {
    return null;
  };
  protoOf(OutgoingContent).oj1 = function () {
    return null;
  };
  protoOf(OutgoingContent).jiw = function () {
    return Companion_getInstance_1().eis_1;
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
    this.zj1_1 = text;
    this.aj2_1 = contentType;
    this.bj2_1 = status;
    var tmp = this;
    var tmp0_elvis_lhs = charset(this.aj2_1);
    tmp.cj2_1 = toByteArray(this.zj1_1, tmp0_elvis_lhs == null ? Charsets_getInstance().qij_1 : tmp0_elvis_lhs);
  }
  protoOf(TextContent).nj1 = function () {
    return this.aj2_1;
  };
  protoOf(TextContent).oj1 = function () {
    return toLong_0(this.cj2_1.length);
  };
  protoOf(TextContent).uj1 = function () {
    return this.cj2_1;
  };
  protoOf(TextContent).toString = function () {
    return 'TextContent[' + this.aj2_1.toString() + '] "' + take(this.zj1_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    return PlatformUtils_getInstance().aim_1 ? locationOrigin() : 'http://localhost';
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
  protoOf(EmptyHeaders).i4f = get;
  protoOf(EmptyHeaders).mim = forEach;
  protoOf(EmptyParameters).mim = forEach;
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
