(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'okio-parent-okio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'okio-parent-okio'.");
    }
    globalThis['okio-parent-okio'] = factory(typeof globalThis['okio-parent-okio'] === 'undefined' ? {} : globalThis['okio-parent-okio'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.he;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var toString = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var arrayCopy = kotlin_kotlin.$_$.w6;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var Long = kotlin_kotlin.$_$.wi;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.h3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var toByte = kotlin_kotlin.$_$.ie;
  var copyOf = kotlin_kotlin.$_$.t7;
  var VOID = kotlin_kotlin.$_$.i;
  var charArray = kotlin_kotlin.$_$.jc;
  var numberToChar = kotlin_kotlin.$_$.be;
  var concatToString = kotlin_kotlin.$_$.gg;
  var toLong = kotlin_kotlin.$_$.je;
  var charArrayOf = kotlin_kotlin.$_$.ic;
  var equals = kotlin_kotlin.$_$.qc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var removeLastOrNull = kotlin_kotlin.$_$.ga;
  var last = kotlin_kotlin.$_$.i9;
  var concatToString_0 = kotlin_kotlin.$_$.fg;
  var copyOfRange = kotlin_kotlin.$_$.o7;
  var contentHashCode = kotlin_kotlin.$_$.j7;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var replace = kotlin_kotlin.$_$.eh;
  var Comparable = kotlin_kotlin.$_$.oi;
  var copyOfRange_0 = kotlin_kotlin.$_$.n7;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.r1;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var isArray = kotlin_kotlin.$_$.id;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.vi;
  var IndexOutOfBoundsException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var captureStack = kotlin_kotlin.$_$.hc;
  var Exception = kotlin_kotlin.$_$.si;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.a2;
  var Char = kotlin_kotlin.$_$.mi;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment', Segment_init_$Create$);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(FileSystem, 'FileSystem');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForClass(SegmentedByteString, 'SegmentedByteString', VOID, ByteString);
  initMetadataForClass(UnsafeCursor, 'UnsafeCursor', UnsafeCursor);
  initMetadataForClass(Buffer, 'Buffer', Buffer);
  initMetadataForClass(ArrayIndexOutOfBoundsException, 'ArrayIndexOutOfBoundsException', VOID, IndexOutOfBoundsException);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForClass(FileNotFoundException, 'FileNotFoundException', VOID, IOException);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Path, 'Path', VOID, VOID, [Comparable]);
  initMetadataForClass(RealBufferedSink, 'RealBufferedSink');
  initMetadataForClass(RealBufferedSource, 'RealBufferedSource');
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function buffer(_this__u8e3s4) {
    return new RealBufferedSource(_this__u8e3s4);
  }
  function buffer_0(_this__u8e3s4) {
    return new RealBufferedSink(_this__u8e3s4);
  }
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.zh0_1 = new Int8Array(8192);
    $this.dh1_1 = true;
    $this.ch1_1 = false;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shared, owner, $this) {
    Segment.call($this);
    $this.zh0_1 = data;
    $this.ah1_1 = pos;
    $this.bh1_1 = limit;
    $this.ch1_1 = shared;
    $this.dh1_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shared, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shared, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.gh1_1 = 8192;
    this.hh1_1 = 1024;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).ih1 = function () {
    this.ch1_1 = true;
    return Segment_init_$Create$_0(this.zh0_1, this.ah1_1, this.bh1_1, true, false);
  };
  protoOf(Segment).p2m = function () {
    var result = !(this.eh1_1 === this) ? this.eh1_1 : null;
    ensureNotNull(this.fh1_1).eh1_1 = this.eh1_1;
    ensureNotNull(this.eh1_1).fh1_1 = this.fh1_1;
    this.eh1_1 = null;
    this.fh1_1 = null;
    return result;
  };
  protoOf(Segment).jh1 = function (segment) {
    segment.fh1_1 = this;
    segment.eh1_1 = this.eh1_1;
    ensureNotNull(this.eh1_1).fh1_1 = segment;
    this.eh1_1 = segment;
    return segment;
  };
  protoOf(Segment).kh1 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount > 0 && byteCount <= (this.bh1_1 - this.ah1_1 | 0))) {
      // Inline function 'okio.Segment.split.<anonymous>' call
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.ih1();
    } else {
      prefix = SegmentPool_instance.uf4();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.zh0_1;
      var destination = prefix.zh0_1;
      var startIndex = this.ah1_1;
      var endIndex = this.ah1_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
    }
    prefix.bh1_1 = prefix.ah1_1 + byteCount | 0;
    this.ah1_1 = this.ah1_1 + byteCount | 0;
    ensureNotNull(this.fh1_1).jh1(prefix);
    return prefix;
  };
  protoOf(Segment).nh1 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.fh1_1 === this)) {
      // Inline function 'okio.Segment.compact.<anonymous>' call
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.fh1_1).dh1_1)
      return Unit_instance;
    var byteCount = this.bh1_1 - this.ah1_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.fh1_1).bh1_1 | 0) + (ensureNotNull(this.fh1_1).ch1_1 ? 0 : ensureNotNull(this.fh1_1).ah1_1) | 0;
    if (byteCount > availableByteCount)
      return Unit_instance;
    this.oh1(ensureNotNull(this.fh1_1), byteCount);
    this.p2m();
    SegmentPool_instance.ph1(this);
  };
  protoOf(Segment).oh1 = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!sink.dh1_1) {
      // Inline function 'okio.Segment.writeTo.<anonymous>' call
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.bh1_1 + byteCount | 0) > 8192) {
      if (sink.ch1_1)
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.bh1_1 + byteCount | 0) - sink.ah1_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = sink.zh0_1;
      var destination = sink.zh0_1;
      var startIndex = sink.ah1_1;
      var endIndex = sink.bh1_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
      sink.bh1_1 = sink.bh1_1 - sink.ah1_1 | 0;
      sink.ah1_1 = 0;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = this.zh0_1;
    var destination_0 = sink.zh0_1;
    var destinationOffset = sink.bh1_1;
    var startIndex_0 = this.ah1_1;
    var endIndex_0 = this.ah1_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
    sink.bh1_1 = sink.bh1_1 + byteCount | 0;
    this.ah1_1 = this.ah1_1 + byteCount | 0;
  };
  function Segment() {
    this.ah1_1 = 0;
    this.bh1_1 = 0;
    this.ch1_1 = false;
    this.dh1_1 = false;
    this.eh1_1 = null;
    this.fh1_1 = null;
  }
  var DEFAULT__new_UnsafeCursor;
  function get_DEFAULT__ByteString_size() {
    _init_properties_Util_kt__laey5a();
    return DEFAULT__ByteString_size;
  }
  var DEFAULT__ByteString_size;
  function resolveDefaultParameter(_this__u8e3s4, position) {
    _init_properties_Util_kt__laey5a();
    if (position === get_DEFAULT__ByteString_size())
      return _this__u8e3s4.j();
    return position;
  }
  function arrayRangeEquals(a, aOffset, b, bOffset, byteCount) {
    _init_properties_Util_kt__laey5a();
    var inductionVariable = 0;
    if (inductionVariable < byteCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(a[i + aOffset | 0] === b[i + bOffset | 0]))
          return false;
      }
       while (inductionVariable < byteCount);
    return true;
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties_Util_kt__laey5a();
    if (offset.n3(byteCount).b1(new Long(0, 0)) < 0 || offset.b1(size) > 0 || size.b3(offset).b1(byteCount) < 0) {
      throw new ArrayIndexOutOfBoundsException('size=' + size.toString() + ' offset=' + offset.toString() + ' byteCount=' + byteCount.toString());
    }
  }
  var properties_initialized_Util_kt_13atj0;
  function _init_properties_Util_kt__laey5a() {
    if (!properties_initialized_Util_kt_13atj0) {
      properties_initialized_Util_kt_13atj0 = true;
      DEFAULT__new_UnsafeCursor = new UnsafeCursor();
      DEFAULT__ByteString_size = -1234567890;
    }
  }
  function commonAsUtf8ToByteArray(_this__u8e3s4) {
    var bytes = new Int8Array(imul(4, _this__u8e3s4.length));
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b0 = charSequenceGet(_this__u8e3s4, index);
        if (Char__compareTo_impl_ypi4mb(b0, _Char___init__impl__6a9atx(128)) >= 0) {
          var size = index;
          // Inline function 'okio.processUtf8Bytes' call
          var endIndex = _this__u8e3s4.length;
          var index_0 = index;
          while (index_0 < endIndex) {
            var c = charSequenceGet(_this__u8e3s4, index_0);
            if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(128)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$0 = Char__toInt_impl_vasixd(c);
              var tmp0 = size;
              size = tmp0 + 1 | 0;
              bytes[tmp0] = toByte(tmp$ret$0);
              index_0 = index_0 + 1 | 0;
              while (index_0 < endIndex && Char__compareTo_impl_ypi4mb(charSequenceGet(_this__u8e3s4, index_0), _Char___init__impl__6a9atx(128)) < 0) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                // Inline function 'kotlin.code' call
                var tmp1 = index_0;
                index_0 = tmp1 + 1 | 0;
                var this_0 = charSequenceGet(_this__u8e3s4, tmp1);
                var tmp$ret$1 = Char__toInt_impl_vasixd(this_0);
                var tmp0_0 = size;
                size = tmp0_0 + 1 | 0;
                bytes[tmp0_0] = toByte(tmp$ret$1);
              }
            } else if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(2048)) < 0) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$2 = Char__toInt_impl_vasixd(c);
              var tmp0_1 = size;
              size = tmp0_1 + 1 | 0;
              bytes[tmp0_1] = toByte(tmp$ret$2 >> 6 | 192);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$3 = Char__toInt_impl_vasixd(c);
              var tmp0_2 = size;
              size = tmp0_2 + 1 | 0;
              bytes[tmp0_2] = toByte(tmp$ret$3 & 63 | 128);
              index_0 = index_0 + 1 | 0;
            } else if (!(_Char___init__impl__6a9atx(55296) <= c ? c <= _Char___init__impl__6a9atx(57343) : false)) {
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$4 = Char__toInt_impl_vasixd(c);
              var tmp0_3 = size;
              size = tmp0_3 + 1 | 0;
              bytes[tmp0_3] = toByte(tmp$ret$4 >> 12 | 224);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$5 = Char__toInt_impl_vasixd(c);
              var tmp0_4 = size;
              size = tmp0_4 + 1 | 0;
              bytes[tmp0_4] = toByte(tmp$ret$5 >> 6 & 63 | 128);
              // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
              // Inline function 'kotlin.code' call
              var tmp$ret$6 = Char__toInt_impl_vasixd(c);
              var tmp0_5 = size;
              size = tmp0_5 + 1 | 0;
              bytes[tmp0_5] = toByte(tmp$ret$6 & 63 | 128);
              index_0 = index_0 + 1 | 0;
            } else {
              var tmp;
              if (Char__compareTo_impl_ypi4mb(c, _Char___init__impl__6a9atx(56319)) > 0 || endIndex <= (index_0 + 1 | 0)) {
                tmp = true;
              } else {
                var containsArg = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                tmp = !(_Char___init__impl__6a9atx(56320) <= containsArg ? containsArg <= _Char___init__impl__6a9atx(57343) : false);
              }
              if (tmp) {
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp0_6 = size;
                size = tmp0_6 + 1 | 0;
                bytes[tmp0_6] = 63;
                index_0 = index_0 + 1 | 0;
              } else {
                // Inline function 'kotlin.code' call
                var tmp_0 = Char__toInt_impl_vasixd(c) << 10;
                // Inline function 'kotlin.code' call
                var this_1 = charSequenceGet(_this__u8e3s4, index_0 + 1 | 0);
                var codePoint = (tmp_0 + Char__toInt_impl_vasixd(this_1) | 0) + -56613888 | 0;
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp0_7 = size;
                size = tmp0_7 + 1 | 0;
                bytes[tmp0_7] = toByte(codePoint >> 18 | 240);
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp0_8 = size;
                size = tmp0_8 + 1 | 0;
                bytes[tmp0_8] = toByte(codePoint >> 12 & 63 | 128);
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp0_9 = size;
                size = tmp0_9 + 1 | 0;
                bytes[tmp0_9] = toByte(codePoint >> 6 & 63 | 128);
                // Inline function 'okio.internal.commonAsUtf8ToByteArray.<anonymous>' call
                var tmp0_10 = size;
                size = tmp0_10 + 1 | 0;
                bytes[tmp0_10] = toByte(codePoint & 63 | 128);
                index_0 = index_0 + 2 | 0;
              }
            }
          }
          return copyOf(bytes, size);
        }
        // Inline function 'kotlin.code' call
        var tmp$ret$9 = Char__toInt_impl_vasixd(b0);
        bytes[index] = toByte(tmp$ret$9);
      }
       while (inductionVariable < last);
    return copyOf(bytes, _this__u8e3s4.length);
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw new ArrayIndexOutOfBoundsException('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'okio.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
        var tmp0 = length;
        length = tmp0 + 1 | 0;
        chars[tmp0] = numberToChar(b0);
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0_0 = length;
          length = tmp0_0 + 1 | 0;
          chars[tmp0_0] = numberToChar(_this__u8e3s4[tmp1]);
        }
      } else {
        // Inline function 'okio.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var beginIndex_0 = index;
            if (endIndex <= (beginIndex_0 + 1 | 0)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp0_1 = length;
              length = tmp0_1 + 1 | 0;
              chars[tmp0_1] = numberToChar(65533);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[beginIndex_0];
            var b1 = _this__u8e3s4[beginIndex_0 + 1 | 0];
            // Inline function 'okio.isUtf8Continuation' call
            // Inline function 'okio.and' call
            if (!((b1 & 192) === 128)) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp0_2 = length;
              length = tmp0_2 + 1 | 0;
              chars[tmp0_2] = numberToChar(65533);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp0_3 = length;
              length = tmp0_3 + 1 | 0;
              chars[tmp0_3] = numberToChar(65533);
            } else {
              // Inline function 'okio.processUtf16Chars.<anonymous>' call
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp0_4 = length;
              length = tmp0_4 + 1 | 0;
              chars[tmp0_4] = numberToChar(codePoint);
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          // Inline function 'okio.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var beginIndex_1 = index;
              if (endIndex <= (beginIndex_1 + 2 | 0)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_5 = length;
                length = tmp0_5 + 1 | 0;
                chars[tmp0_5] = numberToChar(65533);
                var tmp_1;
                if (endIndex <= (beginIndex_1 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'okio.isUtf8Continuation' call
                  // Inline function 'okio.and' call
                  tmp_1 = !((_this__u8e3s4[beginIndex_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$7 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$7 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[beginIndex_1];
              var b1_0 = _this__u8e3s4[beginIndex_1 + 1 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b1_0 & 192) === 128)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_6 = length;
                length = tmp0_6 + 1 | 0;
                chars[tmp0_6] = numberToChar(65533);
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[beginIndex_1 + 2 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b2 & 192) === 128)) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_7 = length;
                length = tmp0_7 + 1 | 0;
                chars[tmp0_7] = numberToChar(65533);
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_8 = length;
                length = tmp0_8 + 1 | 0;
                chars[tmp0_8] = numberToChar(65533);
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_9 = length;
                length = tmp0_9 + 1 | 0;
                chars[tmp0_9] = numberToChar(65533);
              } else {
                // Inline function 'okio.processUtf16Chars.<anonymous>' call
                // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                var tmp0_10 = length;
                length = tmp0_10 + 1 | 0;
                chars[tmp0_10] = numberToChar(codePoint_0);
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            // Inline function 'okio.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var beginIndex_2 = index;
                if (endIndex <= (beginIndex_2 + 3 | 0)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_11 = length;
                    length = tmp0_11 + 1 | 0;
                    chars[tmp0_11] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_12 = length;
                    length = tmp0_12 + 1 | 0;
                    chars[tmp0_12] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_13 = length;
                    length = tmp0_13 + 1 | 0;
                    chars[tmp0_13] = _Char___init__impl__6a9atx(65533);
                  }
                  var tmp_3;
                  if (endIndex <= (beginIndex_2 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'okio.isUtf8Continuation' call
                    // Inline function 'okio.and' call
                    tmp_3 = !((_this__u8e3s4[beginIndex_2 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$15 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (beginIndex_2 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'okio.isUtf8Continuation' call
                      // Inline function 'okio.and' call
                      tmp_4 = !((_this__u8e3s4[beginIndex_2 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$15 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$15 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[beginIndex_2];
                var b1_1 = _this__u8e3s4[beginIndex_2 + 1 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b1_1 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_14 = length;
                    length = tmp0_14 + 1 | 0;
                    chars[tmp0_14] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_15 = length;
                    length = tmp0_15 + 1 | 0;
                    chars[tmp0_15] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_16 = length;
                    length = tmp0_16 + 1 | 0;
                    chars[tmp0_16] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[beginIndex_2 + 2 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b2_0 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_17 = length;
                    length = tmp0_17 + 1 | 0;
                    chars[tmp0_17] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_18 = length;
                    length = tmp0_18 + 1 | 0;
                    chars[tmp0_18] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_19 = length;
                    length = tmp0_19 + 1 | 0;
                    chars[tmp0_19] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[beginIndex_2 + 3 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b3 & 192) === 128)) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_20 = length;
                    length = tmp0_20 + 1 | 0;
                    chars[tmp0_20] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_21 = length;
                    length = tmp0_21 + 1 | 0;
                    chars[tmp0_21] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_22 = length;
                    length = tmp0_22 + 1 | 0;
                    chars[tmp0_22] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_23 = length;
                    length = tmp0_23 + 1 | 0;
                    chars[tmp0_23] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_24 = length;
                    length = tmp0_24 + 1 | 0;
                    chars[tmp0_24] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_25 = length;
                    length = tmp0_25 + 1 | 0;
                    chars[tmp0_25] = _Char___init__impl__6a9atx(65533);
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_26 = length;
                    length = tmp0_26 + 1 | 0;
                    chars[tmp0_26] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_27 = length;
                    length = tmp0_27 + 1 | 0;
                    chars[tmp0_27] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_28 = length;
                    length = tmp0_28 + 1 | 0;
                    chars[tmp0_28] = _Char___init__impl__6a9atx(65533);
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_29 = length;
                    length = tmp0_29 + 1 | 0;
                    chars[tmp0_29] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_30 = length;
                    length = tmp0_30 + 1 | 0;
                    chars[tmp0_30] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_31 = length;
                    length = tmp0_31 + 1 | 0;
                    chars[tmp0_31] = _Char___init__impl__6a9atx(65533);
                  }
                } else {
                  // Inline function 'okio.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === 65533)) {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_32 = length;
                    length = tmp0_32 + 1 | 0;
                    chars[tmp0_32] = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_33 = length;
                    length = tmp0_33 + 1 | 0;
                    chars[tmp0_33] = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
                    var tmp0_34 = length;
                    length = tmp0_34 + 1 | 0;
                    chars[tmp0_34] = _Char___init__impl__6a9atx(65533);
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              // Inline function 'okio.internal.commonToUtf8String.<anonymous>' call
              var tmp0_35 = length;
              length = tmp0_35 + 1 | 0;
              chars[tmp0_35] = _Char___init__impl__6a9atx(65533);
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_HEX_DIGIT_BYTES() {
    _init_properties_Buffer_kt__ndcom8();
    return HEX_DIGIT_BYTES;
  }
  var HEX_DIGIT_BYTES;
  function readUtf8Line(_this__u8e3s4, newline) {
    _init_properties_Buffer_kt__ndcom8();
    var tmp;
    var tmp_0;
    if (newline.b1(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0 = newline.b3(toLong(1));
      tmp_0 = _this__u8e3s4.hx(tmp$ret$0) === 13;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var result = _this__u8e3s4.vh1(newline.b3(new Long(1, 0)));
      _this__u8e3s4.kf4(new Long(2, 0));
      tmp = result;
    } else {
      var result_0 = _this__u8e3s4.vh1(newline);
      _this__u8e3s4.kf4(new Long(1, 0));
      tmp = result_0;
    }
    return tmp;
  }
  var properties_initialized_Buffer_kt_xv4xxe;
  function _init_properties_Buffer_kt__ndcom8() {
    if (!properties_initialized_Buffer_kt_xv4xxe) {
      properties_initialized_Buffer_kt_xv4xxe = true;
      HEX_DIGIT_BYTES = asUtf8ToByteArray('0123456789abcdef');
    }
  }
  function get_HEX_DIGIT_CHARS() {
    _init_properties_ByteString_kt__sqjq7b();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function commonWrite(_this__u8e3s4, buffer, offset, byteCount) {
    _init_properties_ByteString_kt__sqjq7b();
    buffer.wh1(_this__u8e3s4.qh1_1, offset, byteCount);
  }
  function codePointIndexToCharIndex(s, codePointCount) {
    _init_properties_ByteString_kt__sqjq7b();
    var charCount = 0;
    var j = 0;
    // Inline function 'okio.processUtf8CodePoints' call
    var endIndex = s.length;
    var index = 0;
    while (index < endIndex) {
      var b0 = s[index];
      if (b0 >= 0) {
        // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
        var tmp0 = j;
        j = tmp0 + 1 | 0;
        if (tmp0 === codePointCount) {
          return charCount;
        }
        var tmp;
        var tmp_0;
        var tmp_1;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(10);
        if (!(b0 === Char__toInt_impl_vasixd(this_0))) {
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(13);
          tmp_1 = !(b0 === Char__toInt_impl_vasixd(this_1));
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          // Inline function 'okio.isIsoControl' call
          tmp_0 = (0 <= b0 ? b0 <= 31 : false) || (127 <= b0 ? b0 <= 159 : false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = true;
        } else {
          tmp = b0 === 65533;
        }
        if (tmp) {
          return -1;
        }
        charCount = charCount + (b0 < 65536 ? 1 : 2) | 0;
        index = index + 1 | 0;
        while (index < endIndex && s[index] >= 0) {
          // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var c = s[tmp1];
          var tmp0_0 = j;
          j = tmp0_0 + 1 | 0;
          if (tmp0_0 === codePointCount) {
            return charCount;
          }
          var tmp_2;
          var tmp_3;
          var tmp_4;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(10);
          if (!(c === Char__toInt_impl_vasixd(this_2))) {
            // Inline function 'kotlin.code' call
            var this_3 = _Char___init__impl__6a9atx(13);
            tmp_4 = !(c === Char__toInt_impl_vasixd(this_3));
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            // Inline function 'okio.isIsoControl' call
            tmp_3 = (0 <= c ? c <= 31 : false) || (127 <= c ? c <= 159 : false);
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp_2 = true;
          } else {
            tmp_2 = c === 65533;
          }
          if (tmp_2) {
            return -1;
          }
          charCount = charCount + (c < 65536 ? 1 : 2) | 0;
        }
      } else {
        // Inline function 'okio.shr' call
        if (b0 >> 5 === -2) {
          var tmp_5 = index;
          var tmp$ret$10;
          $l$block_0: {
            // Inline function 'okio.process2Utf8Bytes' call
            var beginIndex = index;
            if (endIndex <= (beginIndex + 1 | 0)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_1 = j;
              j = tmp0_1 + 1 | 0;
              if (tmp0_1 === codePointCount) {
                return charCount;
              }
              var tmp_6;
              var tmp_7;
              var tmp_8;
              // Inline function 'kotlin.code' call
              var this_4 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_4))) {
                // Inline function 'kotlin.code' call
                var this_5 = _Char___init__impl__6a9atx(13);
                tmp_8 = !(65533 === Char__toInt_impl_vasixd(this_5));
              } else {
                tmp_8 = false;
              }
              if (tmp_8) {
                // Inline function 'okio.isIsoControl' call
                tmp_7 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp_6 = true;
              } else {
                tmp_6 = 65533 === 65533;
              }
              if (tmp_6) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var b0_0 = s[beginIndex];
            var b1 = s[beginIndex + 1 | 0];
            // Inline function 'okio.isUtf8Continuation' call
            // Inline function 'okio.and' call
            if (!((b1 & 192) === 128)) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_2 = j;
              j = tmp0_2 + 1 | 0;
              if (tmp0_2 === codePointCount) {
                return charCount;
              }
              var tmp_9;
              var tmp_10;
              var tmp_11;
              // Inline function 'kotlin.code' call
              var this_6 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_6))) {
                // Inline function 'kotlin.code' call
                var this_7 = _Char___init__impl__6a9atx(13);
                tmp_11 = !(65533 === Char__toInt_impl_vasixd(this_7));
              } else {
                tmp_11 = false;
              }
              if (tmp_11) {
                // Inline function 'okio.isIsoControl' call
                tmp_10 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_10 = false;
              }
              if (tmp_10) {
                tmp_9 = true;
              } else {
                tmp_9 = 65533 === 65533;
              }
              if (tmp_9) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              tmp$ret$10 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_3 = j;
              j = tmp0_3 + 1 | 0;
              if (tmp0_3 === codePointCount) {
                return charCount;
              }
              var tmp_12;
              var tmp_13;
              var tmp_14;
              // Inline function 'kotlin.code' call
              var this_8 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_8))) {
                // Inline function 'kotlin.code' call
                var this_9 = _Char___init__impl__6a9atx(13);
                tmp_14 = !(65533 === Char__toInt_impl_vasixd(this_9));
              } else {
                tmp_14 = false;
              }
              if (tmp_14) {
                // Inline function 'okio.isIsoControl' call
                tmp_13 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_13 = false;
              }
              if (tmp_13) {
                tmp_12 = true;
              } else {
                tmp_12 = 65533 === 65533;
              }
              if (tmp_12) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
            } else {
              // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_4 = j;
              j = tmp0_4 + 1 | 0;
              if (tmp0_4 === codePointCount) {
                return charCount;
              }
              var tmp_15;
              var tmp_16;
              var tmp_17;
              // Inline function 'kotlin.code' call
              var this_10 = _Char___init__impl__6a9atx(10);
              if (!(codePoint === Char__toInt_impl_vasixd(this_10))) {
                // Inline function 'kotlin.code' call
                var this_11 = _Char___init__impl__6a9atx(13);
                tmp_17 = !(codePoint === Char__toInt_impl_vasixd(this_11));
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                // Inline function 'okio.isIsoControl' call
                tmp_16 = (0 <= codePoint ? codePoint <= 31 : false) || (127 <= codePoint ? codePoint <= 159 : false);
              } else {
                tmp_16 = false;
              }
              if (tmp_16) {
                tmp_15 = true;
              } else {
                tmp_15 = codePoint === 65533;
              }
              if (tmp_15) {
                return -1;
              }
              charCount = charCount + (codePoint < 65536 ? 1 : 2) | 0;
            }
            tmp$ret$10 = 2;
          }
          index = tmp_5 + tmp$ret$10 | 0;
        } else {
          // Inline function 'okio.shr' call
          if (b0 >> 4 === -2) {
            var tmp_18 = index;
            var tmp$ret$28;
            $l$block_4: {
              // Inline function 'okio.process3Utf8Bytes' call
              var beginIndex_0 = index;
              if (endIndex <= (beginIndex_0 + 2 | 0)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_5 = j;
                j = tmp0_5 + 1 | 0;
                if (tmp0_5 === codePointCount) {
                  return charCount;
                }
                var tmp_19;
                var tmp_20;
                var tmp_21;
                // Inline function 'kotlin.code' call
                var this_12 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_12))) {
                  // Inline function 'kotlin.code' call
                  var this_13 = _Char___init__impl__6a9atx(13);
                  tmp_21 = !(65533 === Char__toInt_impl_vasixd(this_13));
                } else {
                  tmp_21 = false;
                }
                if (tmp_21) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_20 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_20 = false;
                }
                if (tmp_20) {
                  tmp_19 = true;
                } else {
                  tmp_19 = 65533 === 65533;
                }
                if (tmp_19) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                var tmp_22;
                if (endIndex <= (beginIndex_0 + 1 | 0)) {
                  tmp_22 = true;
                } else {
                  // Inline function 'okio.isUtf8Continuation' call
                  // Inline function 'okio.and' call
                  tmp_22 = !((s[beginIndex_0 + 1 | 0] & 192) === 128);
                }
                if (tmp_22) {
                  tmp$ret$28 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$28 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = s[beginIndex_0];
              var b1_0 = s[beginIndex_0 + 1 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b1_0 & 192) === 128)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_6 = j;
                j = tmp0_6 + 1 | 0;
                if (tmp0_6 === codePointCount) {
                  return charCount;
                }
                var tmp_23;
                var tmp_24;
                var tmp_25;
                // Inline function 'kotlin.code' call
                var this_14 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_14))) {
                  // Inline function 'kotlin.code' call
                  var this_15 = _Char___init__impl__6a9atx(13);
                  tmp_25 = !(65533 === Char__toInt_impl_vasixd(this_15));
                } else {
                  tmp_25 = false;
                }
                if (tmp_25) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_24 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_24 = false;
                }
                if (tmp_24) {
                  tmp_23 = true;
                } else {
                  tmp_23 = 65533 === 65533;
                }
                if (tmp_23) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 1;
                break $l$block_4;
              }
              var b2 = s[beginIndex_0 + 2 | 0];
              // Inline function 'okio.isUtf8Continuation' call
              // Inline function 'okio.and' call
              if (!((b2 & 192) === 128)) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_7 = j;
                j = tmp0_7 + 1 | 0;
                if (tmp0_7 === codePointCount) {
                  return charCount;
                }
                var tmp_26;
                var tmp_27;
                var tmp_28;
                // Inline function 'kotlin.code' call
                var this_16 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_16))) {
                  // Inline function 'kotlin.code' call
                  var this_17 = _Char___init__impl__6a9atx(13);
                  tmp_28 = !(65533 === Char__toInt_impl_vasixd(this_17));
                } else {
                  tmp_28 = false;
                }
                if (tmp_28) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_27 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_27 = false;
                }
                if (tmp_27) {
                  tmp_26 = true;
                } else {
                  tmp_26 = 65533 === 65533;
                }
                if (tmp_26) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                tmp$ret$28 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_8 = j;
                j = tmp0_8 + 1 | 0;
                if (tmp0_8 === codePointCount) {
                  return charCount;
                }
                var tmp_29;
                var tmp_30;
                var tmp_31;
                // Inline function 'kotlin.code' call
                var this_18 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_18))) {
                  // Inline function 'kotlin.code' call
                  var this_19 = _Char___init__impl__6a9atx(13);
                  tmp_31 = !(65533 === Char__toInt_impl_vasixd(this_19));
                } else {
                  tmp_31 = false;
                }
                if (tmp_31) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_30 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_30 = false;
                }
                if (tmp_30) {
                  tmp_29 = true;
                } else {
                  tmp_29 = 65533 === 65533;
                }
                if (tmp_29) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_9 = j;
                j = tmp0_9 + 1 | 0;
                if (tmp0_9 === codePointCount) {
                  return charCount;
                }
                var tmp_32;
                var tmp_33;
                var tmp_34;
                // Inline function 'kotlin.code' call
                var this_20 = _Char___init__impl__6a9atx(10);
                if (!(65533 === Char__toInt_impl_vasixd(this_20))) {
                  // Inline function 'kotlin.code' call
                  var this_21 = _Char___init__impl__6a9atx(13);
                  tmp_34 = !(65533 === Char__toInt_impl_vasixd(this_21));
                } else {
                  tmp_34 = false;
                }
                if (tmp_34) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_33 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                } else {
                  tmp_33 = false;
                }
                if (tmp_33) {
                  tmp_32 = true;
                } else {
                  tmp_32 = 65533 === 65533;
                }
                if (tmp_32) {
                  return -1;
                }
                charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              } else {
                // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                var tmp0_10 = j;
                j = tmp0_10 + 1 | 0;
                if (tmp0_10 === codePointCount) {
                  return charCount;
                }
                var tmp_35;
                var tmp_36;
                var tmp_37;
                // Inline function 'kotlin.code' call
                var this_22 = _Char___init__impl__6a9atx(10);
                if (!(codePoint_0 === Char__toInt_impl_vasixd(this_22))) {
                  // Inline function 'kotlin.code' call
                  var this_23 = _Char___init__impl__6a9atx(13);
                  tmp_37 = !(codePoint_0 === Char__toInt_impl_vasixd(this_23));
                } else {
                  tmp_37 = false;
                }
                if (tmp_37) {
                  // Inline function 'okio.isIsoControl' call
                  tmp_36 = (0 <= codePoint_0 ? codePoint_0 <= 31 : false) || (127 <= codePoint_0 ? codePoint_0 <= 159 : false);
                } else {
                  tmp_36 = false;
                }
                if (tmp_36) {
                  tmp_35 = true;
                } else {
                  tmp_35 = codePoint_0 === 65533;
                }
                if (tmp_35) {
                  return -1;
                }
                charCount = charCount + (codePoint_0 < 65536 ? 1 : 2) | 0;
              }
              tmp$ret$28 = 3;
            }
            index = tmp_18 + tmp$ret$28 | 0;
          } else {
            // Inline function 'okio.shr' call
            if (b0 >> 3 === -2) {
              var tmp_38 = index;
              var tmp$ret$54;
              $l$block_10: {
                // Inline function 'okio.process4Utf8Bytes' call
                var beginIndex_1 = index;
                if (endIndex <= (beginIndex_1 + 3 | 0)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_11 = j;
                  j = tmp0_11 + 1 | 0;
                  if (tmp0_11 === codePointCount) {
                    return charCount;
                  }
                  var tmp_39;
                  var tmp_40;
                  var tmp_41;
                  // Inline function 'kotlin.code' call
                  var this_24 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_24))) {
                    // Inline function 'kotlin.code' call
                    var this_25 = _Char___init__impl__6a9atx(13);
                    tmp_41 = !(65533 === Char__toInt_impl_vasixd(this_25));
                  } else {
                    tmp_41 = false;
                  }
                  if (tmp_41) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_40 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_40 = false;
                  }
                  if (tmp_40) {
                    tmp_39 = true;
                  } else {
                    tmp_39 = 65533 === 65533;
                  }
                  if (tmp_39) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  var tmp_42;
                  if (endIndex <= (beginIndex_1 + 1 | 0)) {
                    tmp_42 = true;
                  } else {
                    // Inline function 'okio.isUtf8Continuation' call
                    // Inline function 'okio.and' call
                    tmp_42 = !((s[beginIndex_1 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_42) {
                    tmp$ret$54 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_43;
                    if (endIndex <= (beginIndex_1 + 2 | 0)) {
                      tmp_43 = true;
                    } else {
                      // Inline function 'okio.isUtf8Continuation' call
                      // Inline function 'okio.and' call
                      tmp_43 = !((s[beginIndex_1 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_43) {
                      tmp$ret$54 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$54 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = s[beginIndex_1];
                var b1_1 = s[beginIndex_1 + 1 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b1_1 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_12 = j;
                  j = tmp0_12 + 1 | 0;
                  if (tmp0_12 === codePointCount) {
                    return charCount;
                  }
                  var tmp_44;
                  var tmp_45;
                  var tmp_46;
                  // Inline function 'kotlin.code' call
                  var this_26 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_26))) {
                    // Inline function 'kotlin.code' call
                    var this_27 = _Char___init__impl__6a9atx(13);
                    tmp_46 = !(65533 === Char__toInt_impl_vasixd(this_27));
                  } else {
                    tmp_46 = false;
                  }
                  if (tmp_46) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_45 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_45 = false;
                  }
                  if (tmp_45) {
                    tmp_44 = true;
                  } else {
                    tmp_44 = 65533 === 65533;
                  }
                  if (tmp_44) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 1;
                  break $l$block_10;
                }
                var b2_0 = s[beginIndex_1 + 2 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b2_0 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_13 = j;
                  j = tmp0_13 + 1 | 0;
                  if (tmp0_13 === codePointCount) {
                    return charCount;
                  }
                  var tmp_47;
                  var tmp_48;
                  var tmp_49;
                  // Inline function 'kotlin.code' call
                  var this_28 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_28))) {
                    // Inline function 'kotlin.code' call
                    var this_29 = _Char___init__impl__6a9atx(13);
                    tmp_49 = !(65533 === Char__toInt_impl_vasixd(this_29));
                  } else {
                    tmp_49 = false;
                  }
                  if (tmp_49) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_48 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_48 = false;
                  }
                  if (tmp_48) {
                    tmp_47 = true;
                  } else {
                    tmp_47 = 65533 === 65533;
                  }
                  if (tmp_47) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 2;
                  break $l$block_10;
                }
                var b3 = s[beginIndex_1 + 3 | 0];
                // Inline function 'okio.isUtf8Continuation' call
                // Inline function 'okio.and' call
                if (!((b3 & 192) === 128)) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_14 = j;
                  j = tmp0_14 + 1 | 0;
                  if (tmp0_14 === codePointCount) {
                    return charCount;
                  }
                  var tmp_50;
                  var tmp_51;
                  var tmp_52;
                  // Inline function 'kotlin.code' call
                  var this_30 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_30))) {
                    // Inline function 'kotlin.code' call
                    var this_31 = _Char___init__impl__6a9atx(13);
                    tmp_52 = !(65533 === Char__toInt_impl_vasixd(this_31));
                  } else {
                    tmp_52 = false;
                  }
                  if (tmp_52) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_51 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_51 = false;
                  }
                  if (tmp_51) {
                    tmp_50 = true;
                  } else {
                    tmp_50 = 65533 === 65533;
                  }
                  if (tmp_50) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                  tmp$ret$54 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_15 = j;
                  j = tmp0_15 + 1 | 0;
                  if (tmp0_15 === codePointCount) {
                    return charCount;
                  }
                  var tmp_53;
                  var tmp_54;
                  var tmp_55;
                  // Inline function 'kotlin.code' call
                  var this_32 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_32))) {
                    // Inline function 'kotlin.code' call
                    var this_33 = _Char___init__impl__6a9atx(13);
                    tmp_55 = !(65533 === Char__toInt_impl_vasixd(this_33));
                  } else {
                    tmp_55 = false;
                  }
                  if (tmp_55) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_54 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_54 = false;
                  }
                  if (tmp_54) {
                    tmp_53 = true;
                  } else {
                    tmp_53 = 65533 === 65533;
                  }
                  if (tmp_53) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_16 = j;
                  j = tmp0_16 + 1 | 0;
                  if (tmp0_16 === codePointCount) {
                    return charCount;
                  }
                  var tmp_56;
                  var tmp_57;
                  var tmp_58;
                  // Inline function 'kotlin.code' call
                  var this_34 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_34))) {
                    // Inline function 'kotlin.code' call
                    var this_35 = _Char___init__impl__6a9atx(13);
                    tmp_58 = !(65533 === Char__toInt_impl_vasixd(this_35));
                  } else {
                    tmp_58 = false;
                  }
                  if (tmp_58) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_57 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_57 = false;
                  }
                  if (tmp_57) {
                    tmp_56 = true;
                  } else {
                    tmp_56 = 65533 === 65533;
                  }
                  if (tmp_56) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else if (codePoint_1 < 65536) {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_17 = j;
                  j = tmp0_17 + 1 | 0;
                  if (tmp0_17 === codePointCount) {
                    return charCount;
                  }
                  var tmp_59;
                  var tmp_60;
                  var tmp_61;
                  // Inline function 'kotlin.code' call
                  var this_36 = _Char___init__impl__6a9atx(10);
                  if (!(65533 === Char__toInt_impl_vasixd(this_36))) {
                    // Inline function 'kotlin.code' call
                    var this_37 = _Char___init__impl__6a9atx(13);
                    tmp_61 = !(65533 === Char__toInt_impl_vasixd(this_37));
                  } else {
                    tmp_61 = false;
                  }
                  if (tmp_61) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_60 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
                  } else {
                    tmp_60 = false;
                  }
                  if (tmp_60) {
                    tmp_59 = true;
                  } else {
                    tmp_59 = 65533 === 65533;
                  }
                  if (tmp_59) {
                    return -1;
                  }
                  charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
                } else {
                  // Inline function 'okio.processUtf8CodePoints.<anonymous>' call
                  // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
                  var tmp0_18 = j;
                  j = tmp0_18 + 1 | 0;
                  if (tmp0_18 === codePointCount) {
                    return charCount;
                  }
                  var tmp_62;
                  var tmp_63;
                  var tmp_64;
                  // Inline function 'kotlin.code' call
                  var this_38 = _Char___init__impl__6a9atx(10);
                  if (!(codePoint_1 === Char__toInt_impl_vasixd(this_38))) {
                    // Inline function 'kotlin.code' call
                    var this_39 = _Char___init__impl__6a9atx(13);
                    tmp_64 = !(codePoint_1 === Char__toInt_impl_vasixd(this_39));
                  } else {
                    tmp_64 = false;
                  }
                  if (tmp_64) {
                    // Inline function 'okio.isIsoControl' call
                    tmp_63 = (0 <= codePoint_1 ? codePoint_1 <= 31 : false) || (127 <= codePoint_1 ? codePoint_1 <= 159 : false);
                  } else {
                    tmp_63 = false;
                  }
                  if (tmp_63) {
                    tmp_62 = true;
                  } else {
                    tmp_62 = codePoint_1 === 65533;
                  }
                  if (tmp_62) {
                    return -1;
                  }
                  charCount = charCount + (codePoint_1 < 65536 ? 1 : 2) | 0;
                }
                tmp$ret$54 = 4;
              }
              index = tmp_38 + tmp$ret$54 | 0;
            } else {
              // Inline function 'okio.internal.codePointIndexToCharIndex.<anonymous>' call
              var tmp0_19 = j;
              j = tmp0_19 + 1 | 0;
              if (tmp0_19 === codePointCount) {
                return charCount;
              }
              var tmp_65;
              var tmp_66;
              var tmp_67;
              // Inline function 'kotlin.code' call
              var this_40 = _Char___init__impl__6a9atx(10);
              if (!(65533 === Char__toInt_impl_vasixd(this_40))) {
                // Inline function 'kotlin.code' call
                var this_41 = _Char___init__impl__6a9atx(13);
                tmp_67 = !(65533 === Char__toInt_impl_vasixd(this_41));
              } else {
                tmp_67 = false;
              }
              if (tmp_67) {
                // Inline function 'okio.isIsoControl' call
                tmp_66 = (0 <= 65533 ? 65533 <= 31 : false) || (127 <= 65533 ? 65533 <= 159 : false);
              } else {
                tmp_66 = false;
              }
              if (tmp_66) {
                tmp_65 = true;
              } else {
                tmp_65 = 65533 === 65533;
              }
              if (tmp_65) {
                return -1;
              }
              charCount = charCount + (65533 < 65536 ? 1 : 2) | 0;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return charCount;
  }
  function codePointIndexToCharIndex$accessor$1yfvj6b(s, codePointCount) {
    _init_properties_ByteString_kt__sqjq7b();
    return codePointIndexToCharIndex(s, codePointCount);
  }
  var properties_initialized_ByteString_kt_8ybv8b;
  function _init_properties_ByteString_kt__sqjq7b() {
    if (!properties_initialized_ByteString_kt_8ybv8b) {
      properties_initialized_ByteString_kt_8ybv8b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function commonMetadata(_this__u8e3s4, path) {
    var tmp0_elvis_lhs = _this__u8e3s4.xh1(path);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new FileNotFoundException('no such file: ' + path.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_SLASH() {
    _init_properties_Path_kt__cy3pvf();
    return SLASH;
  }
  var SLASH;
  function get_BACKSLASH() {
    _init_properties_Path_kt__cy3pvf();
    return BACKSLASH;
  }
  var BACKSLASH;
  function get_ANY_SLASH() {
    _init_properties_Path_kt__cy3pvf();
    return ANY_SLASH;
  }
  var ANY_SLASH;
  function get_DOT() {
    _init_properties_Path_kt__cy3pvf();
    return DOT;
  }
  var DOT;
  function get_DOT_DOT() {
    _init_properties_Path_kt__cy3pvf();
    return DOT_DOT;
  }
  var DOT_DOT;
  function commonToPath(_this__u8e3s4, normalize) {
    _init_properties_Path_kt__cy3pvf();
    return toPath((new Buffer()).yh1(_this__u8e3s4), normalize);
  }
  function get_indexOfLastSlash(_this__u8e3s4) {
    _init_properties_Path_kt__cy3pvf();
    var lastSlash = _this__u8e3s4.zh1_1.ah2(_get_SLASH_$accessor$1r83mlj_21oo1q());
    if (!(lastSlash === -1))
      return lastSlash;
    return _this__u8e3s4.zh1_1.ah2(_get_BACKSLASH_$accessor$1r83mlj_9mc3r9());
  }
  function toSlash(_this__u8e3s4) {
    _init_properties_Path_kt__cy3pvf();
    var tmp;
    switch (_this__u8e3s4) {
      case '/':
        tmp = _get_SLASH_$accessor$1r83mlj_21oo1q();
        break;
      case '\\':
        tmp = _get_BACKSLASH_$accessor$1r83mlj_9mc3r9();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('not a directory separator: ' + _this__u8e3s4);
    }
    return tmp;
  }
  function toPath(_this__u8e3s4, normalize) {
    _init_properties_Path_kt__cy3pvf();
    var slash = null;
    var result = new Buffer();
    var leadingSlashCount = 0;
    while (_this__u8e3s4.bh2(new Long(0, 0), _get_SLASH_$accessor$1r83mlj_21oo1q()) || _this__u8e3s4.bh2(new Long(0, 0), _get_BACKSLASH_$accessor$1r83mlj_9mc3r9())) {
      var byte = _this__u8e3s4.rf3();
      var tmp0_elvis_lhs = slash;
      slash = tmp0_elvis_lhs == null ? toSlash_0(byte) : tmp0_elvis_lhs;
      leadingSlashCount = leadingSlashCount + 1 | 0;
    }
    var windowsUncPath = leadingSlashCount >= 2 && equals(slash, _get_BACKSLASH_$accessor$1r83mlj_9mc3r9());
    if (windowsUncPath) {
      result.fh2(ensureNotNull(slash));
      result.fh2(slash);
    } else if (leadingSlashCount > 0) {
      result.fh2(ensureNotNull(slash));
    } else {
      var limit = _this__u8e3s4.ch2(get_ANY_SLASH());
      var tmp3_elvis_lhs = slash;
      var tmp;
      if (tmp3_elvis_lhs == null) {
        tmp = limit.equals(new Long(-1, -1)) ? toSlash$accessor$1r83mlj(Companion_getInstance_2().dh2_1) : toSlash_0(_this__u8e3s4.hx(limit));
      } else {
        tmp = tmp3_elvis_lhs;
      }
      slash = tmp;
      if (startsWithVolumeLetterAndColon(_this__u8e3s4, slash)) {
        if (limit.equals(new Long(2, 0))) {
          result.eh2(_this__u8e3s4, new Long(3, 0));
        } else {
          result.eh2(_this__u8e3s4, new Long(2, 0));
        }
      }
    }
    var absolute = result.uh1_1.b1(new Long(0, 0)) > 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var canonicalParts = ArrayList_init_$Create$();
    while (!_this__u8e3s4.of3()) {
      var limit_0 = _this__u8e3s4.ch2(get_ANY_SLASH());
      var part;
      if (limit_0.equals(new Long(-1, -1))) {
        part = _this__u8e3s4.hh2();
      } else {
        part = _this__u8e3s4.gh2(limit_0);
        _this__u8e3s4.rf3();
      }
      if (part.equals(_get_DOT_DOT_$accessor$1r83mlj_3dr2dk())) {
        if (!absolute || !canonicalParts.q())
          if (!normalize || (!absolute && (canonicalParts.q() || last(canonicalParts).equals(_get_DOT_DOT_$accessor$1r83mlj_3dr2dk())))) {
            canonicalParts.e(part);
          } else if (!windowsUncPath || canonicalParts.j() !== 1) {
            removeLastOrNull(canonicalParts);
          }
      } else if (!part.equals(_get_DOT_$accessor$1r83mlj_23eb7y()) && !part.equals(Companion_getInstance_1().ih2_1)) {
        canonicalParts.e(part);
      }
    }
    var inductionVariable = 0;
    var last_0 = canonicalParts.j();
    if (inductionVariable < last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          result.fh2(slash);
        }
        result.fh2(canonicalParts.o(i));
      }
       while (inductionVariable < last_0);
    if (result.uh1_1.equals(new Long(0, 0))) {
      result.fh2(_get_DOT_$accessor$1r83mlj_23eb7y());
    }
    return new Path(result.hh2());
  }
  function toSlash_0(_this__u8e3s4) {
    _init_properties_Path_kt__cy3pvf();
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(47);
    if (_this__u8e3s4 === Char__toInt_impl_vasixd(this_0)) {
      tmp = _get_SLASH_$accessor$1r83mlj_21oo1q();
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(92);
      if (_this__u8e3s4 === Char__toInt_impl_vasixd(this_1)) {
        tmp = _get_BACKSLASH_$accessor$1r83mlj_9mc3r9();
      } else {
        throw IllegalArgumentException_init_$Create$('not a directory separator: ' + _this__u8e3s4);
      }
    }
    return tmp;
  }
  function startsWithVolumeLetterAndColon(_this__u8e3s4, slash) {
    _init_properties_Path_kt__cy3pvf();
    if (!slash.equals(_get_BACKSLASH_$accessor$1r83mlj_9mc3r9()))
      return false;
    if (_this__u8e3s4.uh1_1.b1(new Long(2, 0)) < 0)
      return false;
    if (!(_this__u8e3s4.hx(new Long(1, 0)) === 58))
      return false;
    var b = numberToChar(_this__u8e3s4.hx(new Long(0, 0)));
    return (_Char___init__impl__6a9atx(97) <= b ? b <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(65) <= b ? b <= _Char___init__impl__6a9atx(90) : false);
  }
  function _get_SLASH_$accessor$1r83mlj_21oo1q() {
    _init_properties_Path_kt__cy3pvf();
    return get_SLASH();
  }
  function _get_indexOfLastSlash_$accessor$1r83mlj_ivcd2h(_this__u8e3s4) {
    _init_properties_Path_kt__cy3pvf();
    return get_indexOfLastSlash(_this__u8e3s4);
  }
  function _get_BACKSLASH_$accessor$1r83mlj_9mc3r9() {
    _init_properties_Path_kt__cy3pvf();
    return get_BACKSLASH();
  }
  function _get_DOT_$accessor$1r83mlj_23eb7y() {
    _init_properties_Path_kt__cy3pvf();
    return get_DOT();
  }
  function toSlash$accessor$1r83mlj(_this__u8e3s4) {
    _init_properties_Path_kt__cy3pvf();
    return toSlash(_this__u8e3s4);
  }
  function _get_DOT_DOT_$accessor$1r83mlj_3dr2dk() {
    _init_properties_Path_kt__cy3pvf();
    return get_DOT_DOT();
  }
  var properties_initialized_Path_kt_a3g6iv;
  function _init_properties_Path_kt__cy3pvf() {
    if (!properties_initialized_Path_kt_a3g6iv) {
      properties_initialized_Path_kt_a3g6iv = true;
      SLASH = Companion_getInstance_1().jh2('/');
      BACKSLASH = Companion_getInstance_1().jh2('\\');
      ANY_SLASH = Companion_getInstance_1().jh2('/\\');
      DOT = Companion_getInstance_1().jh2('.');
      DOT_DOT = Companion_getInstance_1().jh2('..');
    }
  }
  function segment(_this__u8e3s4, pos) {
    var i = binarySearch(_this__u8e3s4.oh2_1, pos + 1 | 0, 0, _this__u8e3s4.nh2_1.length);
    return i >= 0 ? i : ~i;
  }
  function binarySearch(_this__u8e3s4, value, fromIndex, toIndex) {
    var left = fromIndex;
    var right = toIndex - 1 | 0;
    while (left <= right) {
      var mid = (left + right | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value)
        left = mid + 1 | 0;
      else if (midVal > value)
        right = mid - 1 | 0;
      else
        return mid;
    }
    return (-left | 0) - 1 | 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.ph2_1 = Companion_getInstance_2().qh2(get_tmpdir());
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function FileSystem() {
    Companion_getInstance_0();
  }
  protoOf(FileSystem).rh2 = function (path) {
    return commonMetadata(this, path);
  };
  protoOf(FileSystem).vh2 = function (path, mustExist, $super) {
    mustExist = mustExist === VOID ? false : mustExist;
    var tmp;
    if ($super === VOID) {
      this.uh2(path, mustExist);
      tmp = Unit_instance;
    } else {
      tmp = $super.uh2.call(this, path, mustExist);
    }
    return tmp;
  };
  function get_tmpdir() {
    var tmp0_safe_receiver = get_os();
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tmpdir();
    var tmp1_elvis_lhs = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
    return tmp1_elvis_lhs == null ? '/tmp' : tmp1_elvis_lhs;
  }
  function get_PLATFORM_DIRECTORY_SEPARATOR() {
    var tmp0_safe_receiver = get_path();
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sep;
    var tmp1_elvis_lhs = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : null;
    return tmp1_elvis_lhs == null ? '/' : tmp1_elvis_lhs;
  }
  function get_os() {
    var tmp;
    try {
      tmp = require('os');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var t = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_path() {
    var tmp;
    try {
      tmp = require('path');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var t = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.byteArrayOf' call
    var tmp$ret$0 = new Int8Array([]);
    tmp.ih2_1 = new ByteString(tmp$ret$0);
  }
  protoOf(Companion_1).jh2 = function (_this__u8e3s4) {
    // Inline function 'okio.internal.commonEncodeUtf8' call
    var byteString = new ByteString(asUtf8ToByteArray(_this__u8e3s4));
    byteString.wh2(_this__u8e3s4);
    return byteString;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ByteString(data) {
    Companion_getInstance_1();
    this.qh1_1 = data;
    this.rh1_1 = 0;
    this.sh1_1 = null;
  }
  protoOf(ByteString).xh2 = function (value) {
  };
  protoOf(ByteString).wh2 = function (value) {
  };
  protoOf(ByteString).yh2 = function () {
    // Inline function 'okio.internal.commonUtf8' call
    var result = this.sh1_1;
    if (result == null) {
      result = toUtf8String(this.zh2());
      this.wh2(result);
    }
    return result;
  };
  protoOf(ByteString).ah3 = function () {
    // Inline function 'okio.internal.commonHex' call
    var result = charArray(imul(this.qh1_1.length, 2));
    var c = 0;
    var indexedObject = this.qh1_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var b = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1 = c;
      c = tmp1 + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'okio.shr' call
      result[tmp1] = tmp[b >> 4 & 15];
      var tmp2 = c;
      c = tmp2 + 1 | 0;
      var tmp_0 = get_HEX_DIGIT_CHARS();
      // Inline function 'okio.and' call
      result[tmp2] = tmp_0[b & 15];
    }
    return concatToString_0(result);
  };
  protoOf(ByteString).bh3 = function (beginIndex, endIndex) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonSubstring' call
      var endIndex_0 = resolveDefaultParameter(this, endIndex);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(beginIndex >= 0)) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message = 'beginIndex < 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(endIndex_0 <= this.qh1_1.length)) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message_0 = 'endIndex > length(' + this.qh1_1.length + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var subLen = endIndex_0 - beginIndex | 0;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(subLen >= 0)) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message_1 = 'endIndex < beginIndex';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      if (beginIndex === 0 && endIndex_0 === this.qh1_1.length) {
        tmp$ret$3 = this;
        break $l$block;
      }
      tmp$ret$3 = new ByteString(copyOfRange(this.qh1_1, beginIndex, endIndex_0));
    }
    return tmp$ret$3;
  };
  protoOf(ByteString).ch3 = function (beginIndex, endIndex, $super) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? get_DEFAULT__ByteString_size() : endIndex;
    return $super === VOID ? this.bh3(beginIndex, endIndex) : $super.bh3.call(this, beginIndex, endIndex);
  };
  protoOf(ByteString).dh3 = function (pos) {
    if (pos >= this.j() || pos < 0)
      throw new ArrayIndexOutOfBoundsException('size=' + this.j() + ' pos=' + pos);
    // Inline function 'okio.internal.commonGetByte' call
    return this.qh1_1[pos];
  };
  protoOf(ByteString).o = function (index) {
    return this.dh3(index);
  };
  protoOf(ByteString).j = function () {
    return this.eh3();
  };
  protoOf(ByteString).eh3 = function () {
    // Inline function 'okio.internal.commonGetSize' call
    return this.qh1_1.length;
  };
  protoOf(ByteString).zh2 = function () {
    // Inline function 'okio.internal.commonInternalArray' call
    return this.qh1_1;
  };
  protoOf(ByteString).fh3 = function (buffer, offset, byteCount) {
    return commonWrite(this, buffer, offset, byteCount);
  };
  protoOf(ByteString).gh3 = function (offset, other, otherOffset, byteCount) {
    // Inline function 'okio.internal.commonRangeEquals' call
    return offset >= 0 && offset <= (this.qh1_1.length - byteCount | 0) && otherOffset >= 0 && otherOffset <= (other.length - byteCount | 0) && arrayRangeEquals(this.qh1_1, offset, other, otherOffset, byteCount);
  };
  protoOf(ByteString).hh3 = function (other, fromIndex) {
    return this.ih3(other.zh2(), fromIndex);
  };
  protoOf(ByteString).jh3 = function (other, fromIndex, $super) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    return $super === VOID ? this.hh3(other, fromIndex) : $super.hh3.call(this, other, fromIndex);
  };
  protoOf(ByteString).ih3 = function (other, fromIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonIndexOf' call
      var limit = this.qh1_1.length - other.length | 0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var inductionVariable = Math.max(fromIndex, 0);
      if (inductionVariable <= limit)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (arrayRangeEquals(this.qh1_1, i, other, 0, other.length)) {
            tmp$ret$1 = i;
            break $l$block;
          }
        }
         while (!(i === limit));
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  protoOf(ByteString).kh3 = function (other, fromIndex) {
    // Inline function 'okio.internal.commonLastIndexOf' call
    return this.lh3(other.zh2(), fromIndex);
  };
  protoOf(ByteString).ah2 = function (other, fromIndex, $super) {
    fromIndex = fromIndex === VOID ? get_DEFAULT__ByteString_size() : fromIndex;
    return $super === VOID ? this.kh3(other, fromIndex) : $super.kh3.call(this, other, fromIndex);
  };
  protoOf(ByteString).lh3 = function (other, fromIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonLastIndexOf' call
      var fromIndex_0 = resolveDefaultParameter(this, fromIndex);
      var limit = this.qh1_1.length - other.length | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var inductionVariable = Math.min(fromIndex_0, limit);
      if (0 <= inductionVariable)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (arrayRangeEquals(this.qh1_1, i, other, 0, other.length)) {
            tmp$ret$1 = i;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  protoOf(ByteString).equals = function (other) {
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = (other.j() === this.qh1_1.length && other.gh3(0, this.qh1_1, 0, this.qh1_1.length));
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ByteString).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.rh1_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      var this_0 = contentHashCode(this.qh1_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'okio.internal.commonHashCode.<anonymous>' call
      this.xh2(this_0);
      tmp$ret$0 = this_0;
    }
    return tmp$ret$0;
  };
  protoOf(ByteString).mh3 = function (other) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonCompareTo' call
      var sizeA = this.j();
      var sizeB = other.j();
      var i = 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var size = Math.min(sizeA, sizeB);
      $l$loop: while (i < size) {
        // Inline function 'okio.and' call
        var byteA = this.o(i) & 255;
        // Inline function 'okio.and' call
        var byteB = other.o(i) & 255;
        if (byteA === byteB) {
          i = i + 1 | 0;
          continue $l$loop;
        }
        tmp$ret$3 = byteA < byteB ? -1 : 1;
        break $l$block_0;
      }
      if (sizeA === sizeB) {
        tmp$ret$3 = 0;
        break $l$block_0;
      }
      tmp$ret$3 = sizeA < sizeB ? -1 : 1;
    }
    return tmp$ret$3;
  };
  protoOf(ByteString).d = function (other) {
    return this.mh3(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'okio.internal.commonToString' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (this.qh1_1.length === 0) {
        tmp$ret$1 = '[size=0]';
        break $l$block_1;
      }
      var i = codePointIndexToCharIndex$accessor$1yfvj6b(this.qh1_1, 64);
      if (i === -1) {
        var tmp;
        if (this.qh1_1.length <= 64) {
          tmp = '[hex=' + this.ah3() + ']';
        } else {
          var tmp_0 = this.qh1_1.length;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'okio.internal.commonSubstring' call
            var endIndex = resolveDefaultParameter(this, 64);
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(0 >= 0)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message = 'beginIndex < 0';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(endIndex <= this.qh1_1.length)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message_0 = 'endIndex > length(' + this.qh1_1.length + ')';
              throw IllegalArgumentException_init_$Create$(toString(message_0));
            }
            var subLen = endIndex - 0 | 0;
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(subLen >= 0)) {
              // Inline function 'okio.internal.commonSubstring.<anonymous>' call
              var message_1 = 'endIndex < beginIndex';
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
            if (0 === 0 && endIndex === this.qh1_1.length) {
              tmp$ret$5 = this;
              break $l$block_0;
            }
            tmp$ret$5 = new ByteString(copyOfRange(this.qh1_1, 0, endIndex));
          }
          tmp = '[size=' + tmp_0 + ' hex=' + tmp$ret$5.ah3() + '\u2026]';
        }
        tmp$ret$1 = tmp;
        break $l$block_1;
      }
      var text = this.yh2();
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = text.substring(0, i);
      var safeText = replace(replace(replace(tmp$ret$7, '\\', '\\\\'), '\n', '\\n'), '\r', '\\r');
      var tmp_1;
      if (i < text.length) {
        tmp_1 = '[size=' + this.qh1_1.length + ' text=' + safeText + '\u2026]';
      } else {
        tmp_1 = '[text=' + safeText + ']';
      }
      tmp$ret$1 = tmp_1;
    }
    return tmp$ret$1;
  };
  function toByteString($this) {
    return new ByteString($this.nh3());
  }
  function SegmentedByteString(segments, directory) {
    ByteString.call(this, Companion_getInstance_1().ih2_1.qh1_1);
    this.nh2_1 = segments;
    this.oh2_1 = directory;
  }
  protoOf(SegmentedByteString).ah3 = function () {
    return toByteString(this).ah3();
  };
  protoOf(SegmentedByteString).bh3 = function (beginIndex, endIndex) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'okio.internal.commonSubstring' call
      var endIndex_0 = resolveDefaultParameter(this, endIndex);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(beginIndex >= 0)) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message = 'beginIndex=' + beginIndex + ' < 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(endIndex_0 <= this.j())) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message_0 = 'endIndex=' + endIndex_0 + ' > length(' + this.j() + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var subLen = endIndex_0 - beginIndex | 0;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(subLen >= 0)) {
        // Inline function 'okio.internal.commonSubstring.<anonymous>' call
        var message_1 = 'endIndex=' + endIndex_0 + ' < beginIndex=' + beginIndex;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      if (beginIndex === 0 && endIndex_0 === this.j()) {
        tmp$ret$3 = this;
        break $l$block_0;
      } else if (beginIndex === endIndex_0) {
        tmp$ret$3 = Companion_getInstance_1().ih2_1;
        break $l$block_0;
      }
      var beginSegment = segment(this, beginIndex);
      var endSegment = segment(this, endIndex_0 - 1 | 0);
      var newSegments = copyOfRange_0(this.nh2_1, beginSegment, endSegment + 1 | 0);
      var newDirectory = new Int32Array(imul(newSegments.length, 2));
      var index = 0;
      var inductionVariable = beginSegment;
      if (inductionVariable <= endSegment)
        do {
          var s = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = index;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = this.oh2_1[s] - beginIndex | 0;
          newDirectory[tmp] = Math.min(a, subLen);
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          newDirectory[tmp1 + newSegments.length | 0] = this.oh2_1[s + this.nh2_1.length | 0];
        }
         while (!(s === endSegment));
      var segmentOffset = beginSegment === 0 ? 0 : this.oh2_1[beginSegment - 1 | 0];
      var tmp3_index0 = newSegments.length;
      newDirectory[tmp3_index0] = newDirectory[tmp3_index0] + (beginIndex - segmentOffset | 0) | 0;
      tmp$ret$3 = new SegmentedByteString(newSegments, newDirectory);
    }
    return tmp$ret$3;
  };
  protoOf(SegmentedByteString).dh3 = function (pos) {
    // Inline function 'okio.internal.commonInternalGet' call
    checkOffsetAndCount(toLong(this.oh2_1[this.nh2_1.length - 1 | 0]), toLong(pos), new Long(1, 0));
    var segment_0 = segment(this, pos);
    var segmentOffset = segment_0 === 0 ? 0 : this.oh2_1[segment_0 - 1 | 0];
    var segmentPos = this.oh2_1[segment_0 + this.nh2_1.length | 0];
    return this.nh2_1[segment_0][(pos - segmentOffset | 0) + segmentPos | 0];
  };
  protoOf(SegmentedByteString).eh3 = function () {
    // Inline function 'okio.internal.commonGetSize' call
    return this.oh2_1[this.nh2_1.length - 1 | 0];
  };
  protoOf(SegmentedByteString).nh3 = function () {
    // Inline function 'okio.internal.commonToByteArray' call
    var result = new Int8Array(this.j());
    var resultPos = 0;
    // Inline function 'okio.internal.forEachSegment' call
    var segmentCount = this.nh2_1.length;
    var s = 0;
    var pos = 0;
    while (s < segmentCount) {
      var segmentPos = this.oh2_1[segmentCount + s | 0];
      var nextSegmentOffset = this.oh2_1[s];
      // Inline function 'okio.internal.commonToByteArray.<anonymous>' call
      var byteCount = nextSegmentOffset - pos | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.nh2_1[s];
      var destinationOffset = resultPos;
      var endIndex = segmentPos + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, result, destinationOffset, segmentPos, endIndex);
      resultPos = resultPos + byteCount | 0;
      pos = nextSegmentOffset;
      s = s + 1 | 0;
    }
    return result;
  };
  protoOf(SegmentedByteString).fh3 = function (buffer, offset, byteCount) {
    // Inline function 'okio.internal.forEachSegment' call
    var endIndex = offset + byteCount | 0;
    var s = segment(this, offset);
    var pos = offset;
    while (pos < endIndex) {
      var segmentOffset = s === 0 ? 0 : this.oh2_1[s - 1 | 0];
      var segmentSize = this.oh2_1[s] - segmentOffset | 0;
      var segmentPos = this.oh2_1[this.nh2_1.length + s | 0];
      // Inline function 'kotlin.comparisons.minOf' call
      var b = segmentOffset + segmentSize | 0;
      var byteCount_0 = Math.min(endIndex, b) - pos | 0;
      var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var data = this.nh2_1[s];
      var segment_0 = Segment_init_$Create$_0(data, offset_0, offset_0 + byteCount_0 | 0, true, false);
      if (buffer.th1_1 == null) {
        segment_0.fh1_1 = segment_0;
        segment_0.eh1_1 = segment_0.fh1_1;
        buffer.th1_1 = segment_0.eh1_1;
      } else {
        ensureNotNull(ensureNotNull(buffer.th1_1).fh1_1).jh1(segment_0);
      }
      pos = pos + byteCount_0 | 0;
      s = s + 1 | 0;
    }
    var tmp = buffer;
    // Inline function 'kotlin.Long.plus' call
    tmp.uh1_1 = buffer.uh1_1.a3(toLong(byteCount));
    return Unit_instance;
  };
  protoOf(SegmentedByteString).oh3 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 || offset > (this.j() - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var endIndex = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < endIndex) {
        var segmentOffset = s === 0 ? 0 : this.oh2_1[s - 1 | 0];
        var segmentSize = this.oh2_1[s] - segmentOffset | 0;
        var segmentPos = this.oh2_1[this.nh2_1.length + s | 0];
        // Inline function 'kotlin.comparisons.minOf' call
        var b = segmentOffset + segmentSize | 0;
        var byteCount_0 = Math.min(endIndex, b) - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var data = this.nh2_1[s];
        if (!other.gh3(otherOffset_0, data, offset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        s = s + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).gh3 = function (offset, other, otherOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset < 0 || offset > (this.j() - byteCount | 0) || otherOffset < 0 || otherOffset > (other.length - byteCount | 0)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var otherOffset_0 = otherOffset;
      // Inline function 'okio.internal.forEachSegment' call
      var endIndex = offset + byteCount | 0;
      var s = segment(this, offset);
      var pos = offset;
      while (pos < endIndex) {
        var segmentOffset = s === 0 ? 0 : this.oh2_1[s - 1 | 0];
        var segmentSize = this.oh2_1[s] - segmentOffset | 0;
        var segmentPos = this.oh2_1[this.nh2_1.length + s | 0];
        // Inline function 'kotlin.comparisons.minOf' call
        var b = segmentOffset + segmentSize | 0;
        var byteCount_0 = Math.min(endIndex, b) - pos | 0;
        var offset_0 = segmentPos + (pos - segmentOffset | 0) | 0;
        // Inline function 'okio.internal.commonRangeEquals.<anonymous>' call
        var data = this.nh2_1[s];
        if (!arrayRangeEquals(data, offset_0, other, otherOffset_0, byteCount_0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        otherOffset_0 = otherOffset_0 + byteCount_0 | 0;
        pos = pos + byteCount_0 | 0;
        s = s + 1 | 0;
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).ih3 = function (other, fromIndex) {
    return toByteString(this).ih3(other, fromIndex);
  };
  protoOf(SegmentedByteString).lh3 = function (other, fromIndex) {
    return toByteString(this).lh3(other, fromIndex);
  };
  protoOf(SegmentedByteString).zh2 = function () {
    return this.nh3();
  };
  protoOf(SegmentedByteString).equals = function (other) {
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      if (other instanceof ByteString) {
        tmp = (other.j() === this.j() && this.oh3(0, other, 0, this.j()));
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(SegmentedByteString).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var result = this.rh1_1;
      if (!(result === 0)) {
        tmp$ret$0 = result;
        break $l$block;
      }
      result = 1;
      // Inline function 'okio.internal.forEachSegment' call
      var segmentCount = this.nh2_1.length;
      var s = 0;
      var pos = 0;
      while (s < segmentCount) {
        var segmentPos = this.oh2_1[segmentCount + s | 0];
        var nextSegmentOffset = this.oh2_1[s];
        // Inline function 'okio.internal.commonHashCode.<anonymous>' call
        var data = this.nh2_1[s];
        var i = segmentPos;
        var limit = segmentPos + (nextSegmentOffset - pos | 0) | 0;
        while (i < limit) {
          result = imul(31, result) + data[i] | 0;
          i = i + 1 | 0;
        }
        pos = nextSegmentOffset;
        s = s + 1 | 0;
      }
      this.xh2(result);
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  protoOf(SegmentedByteString).toString = function () {
    return toByteString(this).toString();
  };
  function UnsafeCursor() {
    this.ph3_1 = null;
    this.qh3_1 = false;
    this.rh3_1 = null;
    this.sh3_1 = new Long(-1, -1);
    this.th3_1 = null;
    this.uh3_1 = -1;
    this.vh3_1 = -1;
  }
  protoOf(UnsafeCursor).l4 = function () {
    // Inline function 'okio.internal.commonClose' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.ph3_1 == null)) {
      // Inline function 'okio.internal.commonClose.<anonymous>' call
      var message = 'not attached to a buffer';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.ph3_1 = null;
    this.rh3_1 = null;
    this.sh3_1 = new Long(-1, -1);
    this.th3_1 = null;
    this.uh3_1 = -1;
    this.vh3_1 = -1;
  };
  function Buffer() {
    this.th1_1 = null;
    this.uh1_1 = new Long(0, 0);
  }
  protoOf(Buffer).of3 = function () {
    return this.uh1_1.equals(new Long(0, 0));
  };
  protoOf(Buffer).wh3 = function (out, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCopyTo' call
      var offset_0 = offset;
      var byteCount_0 = byteCount;
      checkOffsetAndCount(this.uh1_1, offset_0, byteCount_0);
      if (byteCount_0.equals(new Long(0, 0))) {
        tmp$ret$0 = this;
        break $l$block;
      }
      out.uh1_1 = out.uh1_1.a3(byteCount_0);
      var s = this.th1_1;
      while (offset_0.b1(toLong(ensureNotNull(s).bh1_1 - s.ah1_1 | 0)) >= 0) {
        offset_0 = offset_0.b3(toLong(s.bh1_1 - s.ah1_1 | 0));
        s = s.eh1_1;
      }
      while (byteCount_0.b1(new Long(0, 0)) > 0) {
        var copy = ensureNotNull(s).ih1();
        copy.ah1_1 = copy.ah1_1 + offset_0.g1() | 0;
        var tmp = copy;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = copy.ah1_1 + byteCount_0.g1() | 0;
        var b = copy.bh1_1;
        tmp.bh1_1 = Math.min(a, b);
        if (out.th1_1 == null) {
          copy.fh1_1 = copy;
          copy.eh1_1 = copy.fh1_1;
          out.th1_1 = copy.eh1_1;
        } else {
          ensureNotNull(ensureNotNull(out.th1_1).fh1_1).jh1(copy);
        }
        byteCount_0 = byteCount_0.b3(toLong(copy.bh1_1 - copy.ah1_1 | 0));
        offset_0 = new Long(0, 0);
        s = s.eh1_1;
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).hx = function (pos) {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'okio.internal.commonGet' call
      checkOffsetAndCount(this.uh1_1, pos, new Long(1, 0));
      // Inline function 'okio.internal.seek' call
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var offset = new Long(-1, -1);
        tmp$ret$0 = ensureNotNull(null).zh0_1[numberToLong(null.ah1_1).a3(pos).b3(offset).g1()];
        break $l$block_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      if (this.uh1_1.b3(pos).b1(pos) < 0) {
        var offset_0 = this.uh1_1;
        while (offset_0.b1(pos) > 0) {
          s = ensureNotNull(s.fh1_1);
          offset_0 = offset_0.b3(toLong(s.bh1_1 - s.ah1_1 | 0));
        }
        var s_0 = s;
        var offset_1 = offset_0;
        tmp$ret$0 = ensureNotNull(s_0).zh0_1[numberToLong(s_0.ah1_1).a3(pos).b3(offset_1).g1()];
        break $l$block_1;
      } else {
        var offset_2 = new Long(0, 0);
        $l$loop: while (true) {
          // Inline function 'kotlin.Long.plus' call
          var this_0 = offset_2;
          var other = s.bh1_1 - s.ah1_1 | 0;
          var nextOffset = this_0.a3(toLong(other));
          if (nextOffset.b1(pos) > 0)
            break $l$loop;
          s = ensureNotNull(s.eh1_1);
          offset_2 = nextOffset;
        }
        var s_1 = s;
        var offset_3 = offset_2;
        tmp$ret$0 = ensureNotNull(s_1).zh0_1[numberToLong(s_1.ah1_1).a3(pos).b3(offset_3).g1()];
        break $l$block_1;
      }
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).xh3 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonCompleteSegmentByteCount' call
      var result = this.uh1_1;
      if (result.equals(new Long(0, 0))) {
        tmp$ret$0 = new Long(0, 0);
        break $l$block;
      }
      var tail = ensureNotNull(ensureNotNull(this.th1_1).fh1_1);
      if (tail.bh1_1 < 8192 && tail.dh1_1) {
        result = result.b3(toLong(tail.bh1_1 - tail.ah1_1 | 0));
      }
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).rf3 = function () {
    // Inline function 'okio.internal.commonReadByte' call
    if (this.uh1_1.equals(new Long(0, 0)))
      throw EOFException_init_$Create$();
    var segment = ensureNotNull(this.th1_1);
    var pos = segment.ah1_1;
    var limit = segment.bh1_1;
    var data = segment.zh0_1;
    var tmp0 = pos;
    pos = tmp0 + 1 | 0;
    var b = data[tmp0];
    this.uh1_1 = this.uh1_1.b3(new Long(1, 0));
    if (pos === limit) {
      this.th1_1 = segment.p2m();
      SegmentPool_instance.ph1(segment);
    } else {
      segment.ah1_1 = pos;
    }
    return b;
  };
  protoOf(Buffer).hh2 = function () {
    // Inline function 'okio.internal.commonReadByteString' call
    return this.gh2(this.uh1_1);
  };
  protoOf(Buffer).gh2 = function (byteCount) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadByteString' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(byteCount.b1(new Long(0, 0)) >= 0 && byteCount.b1(new Long(2147483647, 0)) <= 0)) {
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        var message = 'byteCount: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.uh1_1.b1(byteCount) < 0)
        throw EOFException_init_$Create$();
      if (byteCount.b1(new Long(4096, 0)) >= 0) {
        // Inline function 'kotlin.also' call
        var this_0 = this.zh3(byteCount.g1());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'okio.internal.commonReadByteString.<anonymous>' call
        this.kf4(byteCount);
        tmp$ret$2 = this_0;
        break $l$block_0;
      } else {
        tmp$ret$2 = new ByteString(this.yh3(byteCount));
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(Buffer).vh1 = function (byteCount) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(byteCount.b1(new Long(0, 0)) >= 0 && byteCount.b1(new Long(2147483647, 0)) <= 0)) {
        // Inline function 'okio.internal.commonReadUtf8.<anonymous>' call
        var message = 'byteCount: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.uh1_1.b1(byteCount) < 0)
        throw EOFException_init_$Create$();
      if (byteCount.equals(new Long(0, 0))) {
        tmp$ret$1 = '';
        break $l$block_0;
      }
      var s = ensureNotNull(this.th1_1);
      if (numberToLong(s.ah1_1).a3(byteCount).b1(toLong(s.bh1_1)) > 0) {
        tmp$ret$1 = commonToUtf8String(this.yh3(byteCount));
        break $l$block_0;
      }
      var result = commonToUtf8String(s.zh0_1, s.ah1_1, s.ah1_1 + byteCount.g1() | 0);
      s.ah1_1 = s.ah1_1 + byteCount.g1() | 0;
      this.uh1_1 = this.uh1_1.b3(byteCount);
      if (s.ah1_1 === s.bh1_1) {
        this.th1_1 = s.p2m();
        SegmentPool_instance.ph1(s);
      }
      tmp$ret$1 = result;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).ah4 = function () {
    return this.bh4(new Long(-1, 2147483647));
  };
  protoOf(Buffer).bh4 = function (limit) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(limit.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        var message = 'limit < 0: ' + limit.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var scanLength = limit.equals(new Long(-1, 2147483647)) ? new Long(-1, 2147483647) : limit.a3(new Long(1, 0));
      var newline = this.ch4(10, new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$1 = readUtf8Line(this, newline);
        break $l$block_0;
      }
      var tmp;
      var tmp_0;
      if (scanLength.b1(this.uh1_1) < 0) {
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$2 = scanLength.b3(toLong(1));
        tmp_0 = this.hx(tmp$ret$2) === 13;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = this.hx(scanLength) === 10;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = readUtf8Line(this, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_1 = new Long(0, 0);
      // Inline function 'okio.minOf' call
      var b = this.uh1_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = toLong(32);
      var tmp$ret$4 = a.b1(b) <= 0 ? a : b;
      this.wh3(data, tmp_1, tmp$ret$4);
      // Inline function 'kotlin.comparisons.minOf' call
      var a_0 = this.uh1_1;
      var tmp$ret$5 = a_0.b1(limit) <= 0 ? a_0 : limit;
      throw new EOFException('\\n not found: limit=' + tmp$ret$5.toString() + ' content=' + data.hh2().ah3() + '\u2026');
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).dh4 = function () {
    // Inline function 'okio.internal.commonReadByteArray' call
    return this.yh3(this.uh1_1);
  };
  protoOf(Buffer).yh3 = function (byteCount) {
    // Inline function 'okio.internal.commonReadByteArray' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0 && byteCount.b1(new Long(2147483647, 0)) <= 0)) {
      // Inline function 'okio.internal.commonReadByteArray.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.uh1_1.b1(byteCount) < 0)
      throw EOFException_init_$Create$();
    var result = new Int8Array(byteCount.g1());
    this.eh4(result);
    return result;
  };
  protoOf(Buffer).eh4 = function (sink) {
    var offset = 0;
    while (offset < sink.length) {
      var read = this.fh4(sink, offset, sink.length - offset | 0);
      if (read === -1)
        throw EOFException_init_$Create$();
      offset = offset + read | 0;
    }
    return Unit_instance;
  };
  protoOf(Buffer).fh4 = function (sink, offset, byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      checkOffsetAndCount(toLong(sink.length), toLong(offset), toLong(byteCount));
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = -1;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = s.bh1_1 - s.ah1_1 | 0;
      var toCopy = Math.min(byteCount, b);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = s.zh0_1;
      var startIndex = s.ah1_1;
      var endIndex = s.ah1_1 + toCopy | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, sink, offset, startIndex, endIndex);
      s.ah1_1 = s.ah1_1 + toCopy | 0;
      this.uh1_1 = this.uh1_1.b3(toLong(toCopy));
      if (s.ah1_1 === s.bh1_1) {
        this.th1_1 = s.p2m();
        SegmentPool_instance.ph1(s);
      }
      tmp$ret$0 = toCopy;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).i2 = function () {
    // Inline function 'okio.internal.commonClear' call
    this.kf4(this.uh1_1);
    return Unit_instance;
  };
  protoOf(Buffer).kf4 = function (byteCount) {
    var byteCount_0 = byteCount;
    while (byteCount_0.b1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      // Inline function 'okio.minOf' call
      var a = byteCount_0;
      var b = head.bh1_1 - head.ah1_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (a.b1(b_0) <= 0 ? a : b_0).g1();
      this.uh1_1 = this.uh1_1.b3(toLong(toSkip));
      byteCount_0 = byteCount_0.b3(toLong(toSkip));
      head.ah1_1 = head.ah1_1 + toSkip | 0;
      if (head.ah1_1 === head.bh1_1) {
        this.th1_1 = head.p2m();
        SegmentPool_instance.ph1(head);
      }
    }
    return Unit_instance;
  };
  protoOf(Buffer).fh2 = function (byteString) {
    // Inline function 'okio.internal.commonWrite' call
    var byteCount = byteString.j();
    byteString.fh3(this, 0, byteCount);
    return this;
  };
  protoOf(Buffer).gh4 = function (minimumCapacity) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonWritableSegment' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
        // Inline function 'okio.internal.commonWritableSegment.<anonymous>' call
        var message = 'unexpected capacity';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.th1_1 == null) {
        var result = SegmentPool_instance.uf4();
        this.th1_1 = result;
        result.fh1_1 = result;
        result.eh1_1 = result;
        tmp$ret$1 = result;
        break $l$block;
      }
      var tail = ensureNotNull(this.th1_1).fh1_1;
      if ((ensureNotNull(tail).bh1_1 + minimumCapacity | 0) > 8192 || !tail.dh1_1) {
        tail = tail.jh1(SegmentPool_instance.uf4());
      }
      tmp$ret$1 = tail;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).yh1 = function (string) {
    return this.hh4(string, 0, string.length);
  };
  protoOf(Buffer).hh4 = function (string, beginIndex, endIndex) {
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(beginIndex >= 0)) {
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      var message = 'beginIndex < 0: ' + beginIndex;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(endIndex >= beginIndex)) {
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      var message_0 = 'endIndex < beginIndex: ' + endIndex + ' < ' + beginIndex;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(endIndex <= string.length)) {
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      var message_1 = 'endIndex > string.length: ' + endIndex + ' > ' + string.length;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var i = beginIndex;
    while (i < endIndex) {
      // Inline function 'kotlin.code' call
      var this_0 = charSequenceGet(string, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < 128) {
        var tail = this.gh4(1);
        var data = tail.zh0_1;
        var segmentOffset = tail.bh1_1 - i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = 8192 - segmentOffset | 0;
        var runLimit = Math.min(endIndex, b);
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        data[segmentOffset + tmp0 | 0] = toByte(c);
        $l$loop: while (i < runLimit) {
          // Inline function 'kotlin.code' call
          var this_1 = charSequenceGet(string, i);
          c = Char__toInt_impl_vasixd(this_1);
          if (c >= 128)
            break $l$loop;
          var tmp1 = i;
          i = tmp1 + 1 | 0;
          data[segmentOffset + tmp1 | 0] = toByte(c);
        }
        var runSize = (i + segmentOffset | 0) - tail.bh1_1 | 0;
        tail.bh1_1 = tail.bh1_1 + runSize | 0;
        this.uh1_1 = this.uh1_1.a3(toLong(runSize));
      } else if (c < 2048) {
        var tail_0 = this.gh4(2);
        tail_0.zh0_1[tail_0.bh1_1] = toByte(c >> 6 | 192);
        tail_0.zh0_1[tail_0.bh1_1 + 1 | 0] = toByte(c & 63 | 128);
        tail_0.bh1_1 = tail_0.bh1_1 + 2 | 0;
        this.uh1_1 = this.uh1_1.a3(new Long(2, 0));
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        var tail_1 = this.gh4(3);
        tail_1.zh0_1[tail_1.bh1_1] = toByte(c >> 12 | 224);
        tail_1.zh0_1[tail_1.bh1_1 + 1 | 0] = toByte(c >> 6 & 63 | 128);
        tail_1.zh0_1[tail_1.bh1_1 + 2 | 0] = toByte(c & 63 | 128);
        tail_1.bh1_1 = tail_1.bh1_1 + 3 | 0;
        this.uh1_1 = this.uh1_1.a3(new Long(3, 0));
        i = i + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          // Inline function 'kotlin.code' call
          var this_2 = charSequenceGet(string, i + 1 | 0);
          tmp = Char__toInt_impl_vasixd(this_2);
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(63);
          var tmp$ret$7 = Char__toInt_impl_vasixd(this_3);
          this.ih4(tmp$ret$7);
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          var tail_2 = this.gh4(4);
          tail_2.zh0_1[tail_2.bh1_1] = toByte(codePoint >> 18 | 240);
          tail_2.zh0_1[tail_2.bh1_1 + 1 | 0] = toByte(codePoint >> 12 & 63 | 128);
          tail_2.zh0_1[tail_2.bh1_1 + 2 | 0] = toByte(codePoint >> 6 & 63 | 128);
          tail_2.zh0_1[tail_2.bh1_1 + 3 | 0] = toByte(codePoint & 63 | 128);
          tail_2.bh1_1 = tail_2.bh1_1 + 4 | 0;
          this.uh1_1 = this.uh1_1.a3(new Long(4, 0));
          i = i + 2 | 0;
        }
      }
    }
    return this;
  };
  protoOf(Buffer).jh4 = function (source) {
    // Inline function 'okio.internal.commonWrite' call
    return this.wh1(source, 0, source.length);
  };
  protoOf(Buffer).wh1 = function (source, offset, byteCount) {
    // Inline function 'okio.internal.commonWrite' call
    var offset_0 = offset;
    checkOffsetAndCount(toLong(source.length), toLong(offset_0), toLong(byteCount));
    var limit = offset_0 + byteCount | 0;
    while (offset_0 < limit) {
      var tail = this.gh4(1);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = limit - offset_0 | 0;
      var b = 8192 - tail.bh1_1 | 0;
      var toCopy = Math.min(a, b);
      // Inline function 'kotlin.collections.copyInto' call
      var destination = tail.zh0_1;
      var destinationOffset = tail.bh1_1;
      var startIndex = offset_0;
      var endIndex = offset_0 + toCopy | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = source;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
      offset_0 = offset_0 + toCopy | 0;
      tail.bh1_1 = tail.bh1_1 + toCopy | 0;
    }
    this.uh1_1 = this.uh1_1.a3(toLong(byteCount));
    return this;
  };
  protoOf(Buffer).kh4 = function (source) {
    // Inline function 'okio.internal.commonWriteAll' call
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.lh4(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.a3(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).ih4 = function (b) {
    // Inline function 'okio.internal.commonWriteByte' call
    var tail = this.gh4(1);
    var tmp1 = tail.bh1_1;
    tail.bh1_1 = tmp1 + 1 | 0;
    tail.zh0_1[tmp1] = toByte(b);
    this.uh1_1 = this.uh1_1.a3(new Long(1, 0));
    return this;
  };
  protoOf(Buffer).mh4 = function (v) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'okio.internal.commonWriteDecimalLong' call
      var v_0 = v;
      if (v_0.equals(new Long(0, 0))) {
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(48);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        tmp$ret$1 = this.ih4(tmp$ret$0);
        break $l$block_0;
      }
      var negative = false;
      if (v_0.b1(new Long(0, 0)) < 0) {
        v_0 = v_0.h3();
        if (v_0.b1(new Long(0, 0)) < 0) {
          tmp$ret$1 = this.yh1('-9223372036854775808');
          break $l$block_0;
        }
        negative = true;
      }
      var tmp;
      if (v_0.b1(new Long(100000000, 0)) < 0) {
        var tmp_0;
        if (v_0.b1(new Long(10000, 0)) < 0) {
          var tmp_1;
          if (v_0.b1(new Long(100, 0)) < 0) {
            var tmp_2;
            if (v_0.b1(new Long(10, 0)) < 0) {
              tmp_2 = 1;
            } else {
              tmp_2 = 2;
            }
            tmp_1 = tmp_2;
          } else if (v_0.b1(new Long(1000, 0)) < 0) {
            tmp_1 = 3;
          } else {
            tmp_1 = 4;
          }
          tmp_0 = tmp_1;
        } else if (v_0.b1(new Long(1000000, 0)) < 0) {
          var tmp_3;
          if (v_0.b1(new Long(100000, 0)) < 0) {
            tmp_3 = 5;
          } else {
            tmp_3 = 6;
          }
          tmp_0 = tmp_3;
        } else if (v_0.b1(new Long(10000000, 0)) < 0) {
          tmp_0 = 7;
        } else {
          tmp_0 = 8;
        }
        tmp = tmp_0;
      } else if (v_0.b1(new Long(-727379968, 232)) < 0) {
        var tmp_4;
        if (v_0.b1(new Long(1410065408, 2)) < 0) {
          var tmp_5;
          if (v_0.b1(new Long(1000000000, 0)) < 0) {
            tmp_5 = 9;
          } else {
            tmp_5 = 10;
          }
          tmp_4 = tmp_5;
        } else if (v_0.b1(new Long(1215752192, 23)) < 0) {
          tmp_4 = 11;
        } else {
          tmp_4 = 12;
        }
        tmp = tmp_4;
      } else if (v_0.b1(new Long(-1530494976, 232830)) < 0) {
        var tmp_6;
        if (v_0.b1(new Long(1316134912, 2328)) < 0) {
          tmp_6 = 13;
        } else if (v_0.b1(new Long(276447232, 23283)) < 0) {
          tmp_6 = 14;
        } else {
          tmp_6 = 15;
        }
        tmp = tmp_6;
      } else if (v_0.b1(new Long(1569325056, 23283064)) < 0) {
        var tmp_7;
        if (v_0.b1(new Long(1874919424, 2328306)) < 0) {
          tmp_7 = 16;
        } else {
          tmp_7 = 17;
        }
        tmp = tmp_7;
      } else if (v_0.b1(new Long(-1486618624, 232830643)) < 0) {
        tmp = 18;
      } else {
        tmp = 19;
      }
      var width = tmp;
      if (negative) {
        width = width + 1 | 0;
      }
      var tail = this.gh4(width);
      var data = tail.zh0_1;
      var pos = tail.bh1_1 + width | 0;
      while (!v_0.equals(new Long(0, 0))) {
        // Inline function 'kotlin.Long.rem' call
        var digit = v_0.e3(toLong(10)).g1();
        pos = pos - 1 | 0;
        data[pos] = get_HEX_DIGIT_BYTES()[digit];
        // Inline function 'kotlin.Long.div' call
        v_0 = v_0.d3(toLong(10));
      }
      if (negative) {
        pos = pos - 1 | 0;
        data[pos] = 45;
      }
      tail.bh1_1 = tail.bh1_1 + width | 0;
      this.uh1_1 = this.uh1_1.a3(toLong(width));
      tmp$ret$1 = this;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).eh2 = function (source, byteCount) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'okio.internal.commonWrite' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(source === this)) {
        // Inline function 'okio.internal.commonWrite.<anonymous>' call
        var message = 'source == this';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      checkOffsetAndCount(source.uh1_1, new Long(0, 0), byteCount_0);
      while (byteCount_0.b1(new Long(0, 0)) > 0) {
        if (byteCount_0.b1(toLong(ensureNotNull(source.th1_1).bh1_1 - ensureNotNull(source.th1_1).ah1_1 | 0)) < 0) {
          var tail = !(this.th1_1 == null) ? ensureNotNull(this.th1_1).fh1_1 : null;
          var tmp;
          if (!(tail == null) && tail.dh1_1) {
            // Inline function 'kotlin.Long.minus' call
            // Inline function 'kotlin.Long.plus' call
            var this_0 = byteCount_0;
            var other = tail.bh1_1;
            var this_1 = this_0.a3(toLong(other));
            var other_0 = tail.ch1_1 ? 0 : tail.ah1_1;
            tmp = this_1.b3(toLong(other_0)).b1(new Long(8192, 0)) <= 0;
          } else {
            tmp = false;
          }
          if (tmp) {
            ensureNotNull(source.th1_1).oh1(tail, byteCount_0.g1());
            source.uh1_1 = source.uh1_1.b3(byteCount_0);
            this.uh1_1 = this.uh1_1.a3(byteCount_0);
            tmp$ret$3 = Unit_instance;
            break $l$block;
          } else {
            source.th1_1 = ensureNotNull(source.th1_1).kh1(byteCount_0.g1());
          }
        }
        var segmentToMove = source.th1_1;
        var movedByteCount = toLong(ensureNotNull(segmentToMove).bh1_1 - segmentToMove.ah1_1 | 0);
        source.th1_1 = segmentToMove.p2m();
        if (this.th1_1 == null) {
          this.th1_1 = segmentToMove;
          segmentToMove.fh1_1 = segmentToMove;
          segmentToMove.eh1_1 = segmentToMove.fh1_1;
        } else {
          var tail_0 = ensureNotNull(this.th1_1).fh1_1;
          tail_0 = ensureNotNull(tail_0).jh1(segmentToMove);
          tail_0.nh1();
        }
        source.uh1_1 = source.uh1_1.b3(movedByteCount);
        this.uh1_1 = this.uh1_1.a3(movedByteCount);
        byteCount_0 = byteCount_0.b3(movedByteCount);
      }
    }
    return tmp$ret$3;
  };
  protoOf(Buffer).lh4 = function (sink, byteCount) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'okio.internal.commonRead' call
      var byteCount_0 = byteCount;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(byteCount_0.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount_0.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (this.uh1_1.equals(new Long(0, 0))) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block;
      }
      if (byteCount_0.b1(this.uh1_1) > 0)
        byteCount_0 = this.uh1_1;
      sink.eh2(this, byteCount_0);
      tmp$ret$1 = byteCount_0;
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).ch4 = function (b, fromIndex, toIndex) {
    var tmp$ret$1;
    $l$block_8: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      var toIndex_0 = toIndex;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!((new Long(0, 0)).b1(fromIndex_0) <= 0 ? fromIndex_0.b1(toIndex_0) <= 0 : false)) {
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        var message = 'size=' + this.uh1_1.toString() + ' fromIndex=' + fromIndex_0.toString() + ' toIndex=' + toIndex_0.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      if (toIndex_0.b1(this.uh1_1) > 0)
        toIndex_0 = this.uh1_1;
      if (fromIndex_0.equals(toIndex_0)) {
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
      // Inline function 'okio.internal.seek' call
      var fromIndex_1 = fromIndex_0;
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var offset = new Long(-1, -1);
        var tmp_0;
        if (null == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_0 = null;
        }
        var s = tmp_0;
        var offset_0 = offset;
        while (offset_0.b1(toIndex_0) < 0) {
          var data = s.zh0_1;
          // Inline function 'kotlin.comparisons.minOf' call
          var a = toLong(s.bh1_1);
          var b_0 = numberToLong(s.ah1_1).a3(toIndex_0).b3(offset_0);
          var limit = (a.b1(b_0) <= 0 ? a : b_0).g1();
          var pos = numberToLong(s.ah1_1).a3(fromIndex_0).b3(offset_0).g1();
          while (pos < limit) {
            if (data[pos] === b) {
              tmp$ret$1 = numberToLong(pos - s.ah1_1 | 0).a3(offset_0);
              break $l$block_8;
            }
            pos = pos + 1 | 0;
          }
          offset_0 = offset_0.a3(toLong(s.bh1_1 - s.ah1_1 | 0));
          fromIndex_0 = offset_0;
          s = ensureNotNull(s.eh1_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.uh1_1.b3(fromIndex_1).b1(fromIndex_1) < 0) {
        var offset_1 = this.uh1_1;
        while (offset_1.b1(fromIndex_1) > 0) {
          s_0 = ensureNotNull(s_0.fh1_1);
          offset_1 = offset_1.b3(toLong(s_0.bh1_1 - s_0.ah1_1 | 0));
        }
        var s_1 = s_0;
        var offset_2 = offset_1;
        var tmp_1;
        if (s_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_1 = s_1;
        }
        var s_2 = tmp_1;
        var offset_3 = offset_2;
        while (offset_3.b1(toIndex_0) < 0) {
          var data_0 = s_2.zh0_1;
          // Inline function 'kotlin.comparisons.minOf' call
          var a_0 = toLong(s_2.bh1_1);
          var b_1 = numberToLong(s_2.ah1_1).a3(toIndex_0).b3(offset_3);
          var limit_0 = (a_0.b1(b_1) <= 0 ? a_0 : b_1).g1();
          var pos_0 = numberToLong(s_2.ah1_1).a3(fromIndex_0).b3(offset_3).g1();
          while (pos_0 < limit_0) {
            if (data_0[pos_0] === b) {
              tmp$ret$1 = numberToLong(pos_0 - s_2.ah1_1 | 0).a3(offset_3);
              break $l$block_8;
            }
            pos_0 = pos_0 + 1 | 0;
          }
          offset_3 = offset_3.a3(toLong(s_2.bh1_1 - s_2.ah1_1 | 0));
          fromIndex_0 = offset_3;
          s_2 = ensureNotNull(s_2.eh1_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      } else {
        var offset_4 = new Long(0, 0);
        $l$loop: while (true) {
          // Inline function 'kotlin.Long.plus' call
          var this_0 = offset_4;
          var other = s_0.bh1_1 - s_0.ah1_1 | 0;
          var nextOffset = this_0.a3(toLong(other));
          if (nextOffset.b1(fromIndex_1) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.eh1_1);
          offset_4 = nextOffset;
        }
        var s_3 = s_0;
        var offset_5 = offset_4;
        var tmp_2;
        if (s_3 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_8;
        } else {
          tmp_2 = s_3;
        }
        var s_4 = tmp_2;
        var offset_6 = offset_5;
        while (offset_6.b1(toIndex_0) < 0) {
          var data_1 = s_4.zh0_1;
          // Inline function 'kotlin.comparisons.minOf' call
          var a_1 = toLong(s_4.bh1_1);
          var b_2 = numberToLong(s_4.ah1_1).a3(toIndex_0).b3(offset_6);
          var limit_1 = (a_1.b1(b_2) <= 0 ? a_1 : b_2).g1();
          var pos_1 = numberToLong(s_4.ah1_1).a3(fromIndex_0).b3(offset_6).g1();
          while (pos_1 < limit_1) {
            if (data_1[pos_1] === b) {
              tmp$ret$1 = numberToLong(pos_1 - s_4.ah1_1 | 0).a3(offset_6);
              break $l$block_8;
            }
            pos_1 = pos_1 + 1 | 0;
          }
          offset_6 = offset_6.a3(toLong(s_4.bh1_1 - s_4.ah1_1 | 0));
          fromIndex_0 = offset_6;
          s_4 = ensureNotNull(s_4.eh1_1);
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_8;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).ch2 = function (targetBytes) {
    return this.nh4(targetBytes, new Long(0, 0));
  };
  protoOf(Buffer).nh4 = function (targetBytes, fromIndex) {
    var tmp$ret$1;
    $l$block_10: {
      // Inline function 'okio.internal.commonIndexOfElement' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(fromIndex_0.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonIndexOfElement.<anonymous>' call
        var message = 'fromIndex < 0: ' + fromIndex_0.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'okio.internal.seek' call
      var fromIndex_1 = fromIndex_0;
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var offset = new Long(-1, -1);
        var tmp_0;
        if (null == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_0 = null;
        }
        var s = tmp_0;
        var offset_0 = offset;
        if (targetBytes.j() === 2) {
          var b0 = targetBytes.o(0);
          var b1 = targetBytes.o(1);
          while (offset_0.b1(this.uh1_1) < 0) {
            var data = s.zh0_1;
            var pos = numberToLong(s.ah1_1).a3(fromIndex_0).b3(offset_0).g1();
            var limit = s.bh1_1;
            while (pos < limit) {
              var b = data[pos];
              if (b === b0 || b === b1) {
                tmp$ret$1 = numberToLong(pos - s.ah1_1 | 0).a3(offset_0);
                break $l$block_10;
              }
              pos = pos + 1 | 0;
            }
            offset_0 = offset_0.a3(toLong(s.bh1_1 - s.ah1_1 | 0));
            fromIndex_0 = offset_0;
            s = ensureNotNull(s.eh1_1);
          }
        } else {
          var targetByteArray = targetBytes.zh2();
          while (offset_0.b1(this.uh1_1) < 0) {
            var data_0 = s.zh0_1;
            var pos_0 = numberToLong(s.ah1_1).a3(fromIndex_0).b3(offset_0).g1();
            var limit_0 = s.bh1_1;
            while (pos_0 < limit_0) {
              var b_0 = data_0[pos_0];
              var inductionVariable = 0;
              var last = targetByteArray.length;
              while (inductionVariable < last) {
                var t = targetByteArray[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (b_0 === t) {
                  tmp$ret$1 = numberToLong(pos_0 - s.ah1_1 | 0).a3(offset_0);
                  break $l$block_10;
                }
              }
              pos_0 = pos_0 + 1 | 0;
            }
            offset_0 = offset_0.a3(toLong(s.bh1_1 - s.ah1_1 | 0));
            fromIndex_0 = offset_0;
            s = ensureNotNull(s.eh1_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s_0 = tmp;
      if (this.uh1_1.b3(fromIndex_1).b1(fromIndex_1) < 0) {
        var offset_1 = this.uh1_1;
        while (offset_1.b1(fromIndex_1) > 0) {
          s_0 = ensureNotNull(s_0.fh1_1);
          offset_1 = offset_1.b3(toLong(s_0.bh1_1 - s_0.ah1_1 | 0));
        }
        var s_1 = s_0;
        var offset_2 = offset_1;
        var tmp_1;
        if (s_1 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_1 = s_1;
        }
        var s_2 = tmp_1;
        var offset_3 = offset_2;
        if (targetBytes.j() === 2) {
          var b0_0 = targetBytes.o(0);
          var b1_0 = targetBytes.o(1);
          while (offset_3.b1(this.uh1_1) < 0) {
            var data_1 = s_2.zh0_1;
            var pos_1 = numberToLong(s_2.ah1_1).a3(fromIndex_0).b3(offset_3).g1();
            var limit_1 = s_2.bh1_1;
            while (pos_1 < limit_1) {
              var b_1 = data_1[pos_1];
              if (b_1 === b0_0 || b_1 === b1_0) {
                tmp$ret$1 = numberToLong(pos_1 - s_2.ah1_1 | 0).a3(offset_3);
                break $l$block_10;
              }
              pos_1 = pos_1 + 1 | 0;
            }
            offset_3 = offset_3.a3(toLong(s_2.bh1_1 - s_2.ah1_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.eh1_1);
          }
        } else {
          var targetByteArray_0 = targetBytes.zh2();
          while (offset_3.b1(this.uh1_1) < 0) {
            var data_2 = s_2.zh0_1;
            var pos_2 = numberToLong(s_2.ah1_1).a3(fromIndex_0).b3(offset_3).g1();
            var limit_2 = s_2.bh1_1;
            while (pos_2 < limit_2) {
              var b_2 = data_2[pos_2];
              var inductionVariable_0 = 0;
              var last_0 = targetByteArray_0.length;
              while (inductionVariable_0 < last_0) {
                var t_0 = targetByteArray_0[inductionVariable_0];
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                if (b_2 === t_0) {
                  tmp$ret$1 = numberToLong(pos_2 - s_2.ah1_1 | 0).a3(offset_3);
                  break $l$block_10;
                }
              }
              pos_2 = pos_2 + 1 | 0;
            }
            offset_3 = offset_3.a3(toLong(s_2.bh1_1 - s_2.ah1_1 | 0));
            fromIndex_0 = offset_3;
            s_2 = ensureNotNull(s_2.eh1_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      } else {
        var offset_4 = new Long(0, 0);
        $l$loop: while (true) {
          // Inline function 'kotlin.Long.plus' call
          var this_0 = offset_4;
          var other = s_0.bh1_1 - s_0.ah1_1 | 0;
          var nextOffset = this_0.a3(toLong(other));
          if (nextOffset.b1(fromIndex_1) > 0)
            break $l$loop;
          s_0 = ensureNotNull(s_0.eh1_1);
          offset_4 = nextOffset;
        }
        var s_3 = s_0;
        var offset_5 = offset_4;
        var tmp_2;
        if (s_3 == null) {
          tmp$ret$1 = new Long(-1, -1);
          break $l$block_10;
        } else {
          tmp_2 = s_3;
        }
        var s_4 = tmp_2;
        var offset_6 = offset_5;
        if (targetBytes.j() === 2) {
          var b0_1 = targetBytes.o(0);
          var b1_1 = targetBytes.o(1);
          while (offset_6.b1(this.uh1_1) < 0) {
            var data_3 = s_4.zh0_1;
            var pos_3 = numberToLong(s_4.ah1_1).a3(fromIndex_0).b3(offset_6).g1();
            var limit_3 = s_4.bh1_1;
            while (pos_3 < limit_3) {
              var b_3 = data_3[pos_3];
              if (b_3 === b0_1 || b_3 === b1_1) {
                tmp$ret$1 = numberToLong(pos_3 - s_4.ah1_1 | 0).a3(offset_6);
                break $l$block_10;
              }
              pos_3 = pos_3 + 1 | 0;
            }
            offset_6 = offset_6.a3(toLong(s_4.bh1_1 - s_4.ah1_1 | 0));
            fromIndex_0 = offset_6;
            s_4 = ensureNotNull(s_4.eh1_1);
          }
        } else {
          var targetByteArray_1 = targetBytes.zh2();
          while (offset_6.b1(this.uh1_1) < 0) {
            var data_4 = s_4.zh0_1;
            var pos_4 = numberToLong(s_4.ah1_1).a3(fromIndex_0).b3(offset_6).g1();
            var limit_4 = s_4.bh1_1;
            while (pos_4 < limit_4) {
              var b_4 = data_4[pos_4];
              var inductionVariable_1 = 0;
              var last_1 = targetByteArray_1.length;
              while (inductionVariable_1 < last_1) {
                var t_1 = targetByteArray_1[inductionVariable_1];
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                if (b_4 === t_1) {
                  tmp$ret$1 = numberToLong(pos_4 - s_4.ah1_1 | 0).a3(offset_6);
                  break $l$block_10;
                }
              }
              pos_4 = pos_4 + 1 | 0;
            }
            offset_6 = offset_6.a3(toLong(s_4.bh1_1 - s_4.ah1_1 | 0));
            fromIndex_0 = offset_6;
            s_4 = ensureNotNull(s_4.eh1_1);
          }
        }
        tmp$ret$1 = new Long(-1, -1);
        break $l$block_10;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Buffer).bh2 = function (offset, bytes) {
    return this.oh4(offset, bytes, 0, bytes.j());
  };
  protoOf(Buffer).oh4 = function (offset, bytes, bytesOffset, byteCount) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'okio.internal.commonRangeEquals' call
      if (offset.b1(new Long(0, 0)) < 0 || bytesOffset < 0 || byteCount < 0 || this.uh1_1.b3(offset).b1(toLong(byteCount)) < 0 || (bytes.j() - bytesOffset | 0) < byteCount) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var inductionVariable = 0;
      if (inductionVariable < byteCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.plus' call
          var tmp$ret$1 = offset.a3(toLong(i));
          if (!(this.hx(tmp$ret$1) === bytes.o(bytesOffset + i | 0))) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable < byteCount);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).l4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).equals = function (other) {
    var tmp$ret$0;
    $l$block_3: {
      // Inline function 'okio.internal.commonEquals' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      if (!(other instanceof Buffer)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (!this.uh1_1.equals(other.uh1_1)) {
        tmp$ret$0 = false;
        break $l$block_3;
      }
      if (this.uh1_1.equals(new Long(0, 0))) {
        tmp$ret$0 = true;
        break $l$block_3;
      }
      var sa = ensureNotNull(this.th1_1);
      var sb = ensureNotNull(other.th1_1);
      var posA = sa.ah1_1;
      var posB = sb.ah1_1;
      var pos = new Long(0, 0);
      var count;
      while (pos.b1(this.uh1_1) < 0) {
        // Inline function 'kotlin.comparisons.minOf' call
        var a = sa.bh1_1 - posA | 0;
        var b = sb.bh1_1 - posB | 0;
        var tmp$ret$1 = Math.min(a, b);
        count = toLong(tmp$ret$1);
        var inductionVariable = new Long(0, 0);
        if (inductionVariable.b1(count) < 0)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable.a3(new Long(1, 0));
            var tmp = sa.zh0_1;
            var tmp1 = posA;
            posA = tmp1 + 1 | 0;
            var tmp_0 = tmp[tmp1];
            var tmp_1 = sb.zh0_1;
            var tmp2 = posB;
            posB = tmp2 + 1 | 0;
            if (!(tmp_0 === tmp_1[tmp2])) {
              tmp$ret$0 = false;
              break $l$block_3;
            }
          }
           while (inductionVariable.b1(count) < 0);
        if (posA === sa.bh1_1) {
          sa = ensureNotNull(sa.eh1_1);
          posA = sa.ah1_1;
        }
        if (posB === sb.bh1_1) {
          sb = ensureNotNull(sb.eh1_1);
          posB = sb.ah1_1;
        }
        pos = pos.a3(count);
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).hashCode = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonHashCode' call
      var tmp0_elvis_lhs = this.th1_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = 0;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var s = tmp;
      var result = 1;
      do {
        var pos = s.ah1_1;
        var limit = s.bh1_1;
        while (pos < limit) {
          result = imul(31, result) + s.zh0_1[pos] | 0;
          pos = pos + 1 | 0;
        }
        s = ensureNotNull(s.eh1_1);
      }
       while (!(s === this.th1_1));
      tmp$ret$0 = result;
    }
    return tmp$ret$0;
  };
  protoOf(Buffer).toString = function () {
    return this.ph4().toString();
  };
  protoOf(Buffer).ph4 = function () {
    // Inline function 'okio.internal.commonSnapshot' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.uh1_1.b1(new Long(2147483647, 0)) <= 0)) {
      // Inline function 'okio.internal.commonSnapshot.<anonymous>' call
      var message = 'size > Int.MAX_VALUE: ' + this.uh1_1.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.zh3(this.uh1_1.g1());
  };
  protoOf(Buffer).zh3 = function (byteCount) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonSnapshot' call
      if (byteCount === 0) {
        tmp$ret$0 = Companion_getInstance_1().ih2_1;
        break $l$block;
      }
      checkOffsetAndCount(this.uh1_1, new Long(0, 0), toLong(byteCount));
      var offset = 0;
      var segmentCount = 0;
      var s = this.th1_1;
      while (offset < byteCount) {
        if (ensureNotNull(s).bh1_1 === s.ah1_1) {
          throw AssertionError_init_$Create$('s.limit == s.pos');
        }
        offset = offset + (s.bh1_1 - s.ah1_1 | 0) | 0;
        segmentCount = segmentCount + 1 | 0;
        s = s.eh1_1;
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = segmentCount;
      var segments = fillArrayVal(Array(size), null);
      var directory = new Int32Array(imul(segmentCount, 2));
      offset = 0;
      segmentCount = 0;
      s = this.th1_1;
      while (offset < byteCount) {
        segments[segmentCount] = ensureNotNull(s).zh0_1;
        offset = offset + (s.bh1_1 - s.ah1_1 | 0) | 0;
        var tmp = segmentCount;
        // Inline function 'kotlin.comparisons.minOf' call
        var a = offset;
        directory[tmp] = Math.min(a, byteCount);
        directory[segmentCount + segments.length | 0] = s.ah1_1;
        s.ch1_1 = true;
        segmentCount = segmentCount + 1 | 0;
        s = s.eh1_1;
      }
      tmp$ret$0 = new SegmentedByteString(isArray(segments) ? segments : THROW_CCE(), directory);
    }
    return tmp$ret$0;
  };
  function asUtf8ToByteArray(_this__u8e3s4) {
    return commonAsUtf8ToByteArray(_this__u8e3s4);
  }
  function ArrayIndexOutOfBoundsException(message) {
    IndexOutOfBoundsException_init_$Init$(message, this);
    captureStack(this, ArrayIndexOutOfBoundsException);
  }
  function EOFException_init_$Init$($this) {
    EOFException.call($this, null);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException_init_$Init$_0($this) {
    IOException.call($this, null, null);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$_0(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException(message, cause) {
    Exception_init_$Init$(message, cause, this);
    captureStack(this, IOException);
  }
  function toUtf8String(_this__u8e3s4) {
    return commonToUtf8String(_this__u8e3s4);
  }
  function FileNotFoundException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, FileNotFoundException);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.dh2_1 = get_PLATFORM_DIRECTORY_SEPARATOR();
  }
  protoOf(Companion_2).qh4 = function (_this__u8e3s4, normalize) {
    return commonToPath(_this__u8e3s4, normalize);
  };
  protoOf(Companion_2).qh2 = function (_this__u8e3s4, normalize, $super) {
    normalize = normalize === VOID ? false : normalize;
    return $super === VOID ? this.qh4(_this__u8e3s4, normalize) : $super.qh4.call(this, _this__u8e3s4, normalize);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Path(bytes) {
    Companion_getInstance_2();
    this.zh1_1 = bytes;
  }
  protoOf(Path).rh4 = function () {
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'okio.internal.commonVolumeLetter' call
      if (!(this.zh1_1.jh3(_get_SLASH_$accessor$1r83mlj_21oo1q()) === -1)) {
        tmp$ret$0 = null;
        break $l$block_2;
      }
      if (this.zh1_1.j() < 2) {
        tmp$ret$0 = null;
        break $l$block_2;
      }
      if (!(this.zh1_1.o(1) === 58)) {
        tmp$ret$0 = null;
        break $l$block_2;
      }
      var c = numberToChar(this.zh1_1.o(0));
      if (!(_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) && !(_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false)) {
        tmp$ret$0 = null;
        break $l$block_2;
      }
      tmp$ret$0 = c;
    }
    return tmp$ret$0;
  };
  protoOf(Path).sh4 = function () {
    // Inline function 'okio.internal.commonNameBytes' call
    var lastSlash = _get_indexOfLastSlash_$accessor$1r83mlj_ivcd2h(this);
    var tmp;
    if (!(lastSlash === -1)) {
      tmp = this.zh1_1.ch3(lastSlash + 1 | 0);
    } else {
      var tmp_0;
      var tmp_1 = this.rh4();
      if (!((tmp_1 == null ? null : new Char(tmp_1)) == null)) {
        tmp_0 = this.zh1_1.j() === 2;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = Companion_getInstance_1().ih2_1;
      } else {
        tmp = this.zh1_1;
      }
    }
    return tmp;
  };
  protoOf(Path).h3j = function () {
    // Inline function 'okio.internal.commonName' call
    return this.sh4().yh2();
  };
  protoOf(Path).th4 = function (other) {
    // Inline function 'okio.internal.commonCompareTo' call
    return this.zh1_1.mh3(other.zh1_1);
  };
  protoOf(Path).d = function (other) {
    return this.th4(other instanceof Path ? other : THROW_CCE());
  };
  protoOf(Path).equals = function (other) {
    // Inline function 'okio.internal.commonEquals' call
    var tmp;
    if (other instanceof Path) {
      tmp = other.zh1_1.equals(this.zh1_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Path).hashCode = function () {
    // Inline function 'okio.internal.commonHashCode' call
    return this.zh1_1.hashCode();
  };
  protoOf(Path).toString = function () {
    // Inline function 'okio.internal.commonToString' call
    return this.zh1_1.yh2();
  };
  function RealBufferedSink(sink) {
    this.uh4_1 = sink;
    this.vh4_1 = false;
    this.wh4_1 = new Buffer();
  }
  protoOf(RealBufferedSink).eh2 = function (source, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wh4_1.eh2(source, byteCount);
    this.xh4();
    return Unit_instance;
  };
  protoOf(RealBufferedSink).yh1 = function (string) {
    // Inline function 'okio.internal.commonWriteUtf8' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonWriteUtf8.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wh4_1.yh1(string);
    return this.xh4();
  };
  protoOf(RealBufferedSink).wh1 = function (source, offset, byteCount) {
    // Inline function 'okio.internal.commonWrite' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonWrite.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wh4_1.wh1(source, offset, byteCount);
    return this.xh4();
  };
  protoOf(RealBufferedSink).ih4 = function (b) {
    // Inline function 'okio.internal.commonWriteByte' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonWriteByte.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wh4_1.ih4(b);
    return this.xh4();
  };
  protoOf(RealBufferedSink).mh4 = function (v) {
    // Inline function 'okio.internal.commonWriteDecimalLong' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonWriteDecimalLong.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.wh4_1.mh4(v);
    return this.xh4();
  };
  protoOf(RealBufferedSink).xh4 = function () {
    // Inline function 'okio.internal.commonEmitCompleteSegments' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.vh4_1) {
      // Inline function 'okio.internal.commonEmitCompleteSegments.<anonymous>' call
      var message = 'closed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var byteCount = this.wh4_1.xh3();
    if (byteCount.b1(new Long(0, 0)) > 0) {
      this.uh4_1.eh2(this.wh4_1, byteCount);
    }
    return this;
  };
  protoOf(RealBufferedSink).l4 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonClose' call
      if (this.vh4_1) {
        tmp$ret$0 = Unit_instance;
        break $l$block;
      }
      var thrown = null;
      try {
        if (this.wh4_1.uh1_1.b1(new Long(0, 0)) > 0) {
          this.uh4_1.eh2(this.wh4_1, this.wh4_1.uh1_1);
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          thrown = e;
        } else {
          throw $p;
        }
      }
      try {
        this.uh4_1.l4();
      } catch ($p) {
        if ($p instanceof Error) {
          var e_0 = $p;
          if (thrown == null)
            thrown = e_0;
        } else {
          throw $p;
        }
      }
      this.vh4_1 = true;
      if (!(thrown == null))
        throw thrown;
    }
    return tmp$ret$0;
  };
  protoOf(RealBufferedSink).toString = function () {
    // Inline function 'okio.internal.commonToString' call
    return 'buffer(' + toString(this.uh4_1) + ')';
  };
  function RealBufferedSource(source) {
    this.yh4_1 = source;
    this.zh4_1 = false;
    this.ah5_1 = new Buffer();
  }
  protoOf(RealBufferedSource).lh4 = function (sink, byteCount) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonRead' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!this.zh4_1) {
        // Inline function 'okio.internal.commonRead.<anonymous>' call
        var message_0 = 'closed';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (this.ah5_1.uh1_1.equals(new Long(0, 0))) {
        if (byteCount.equals(new Long(0, 0))) {
          tmp$ret$2 = new Long(0, 0);
          break $l$block_0;
        }
        var read = this.yh4_1.lh4(this.ah5_1, new Long(8192, 0));
        if (read.equals(new Long(-1, -1))) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_0;
        }
      }
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.ah5_1.uh1_1;
      var toRead = byteCount.b1(b) <= 0 ? byteCount : b;
      tmp$ret$2 = this.ah5_1.lh4(sink, toRead);
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).qf3 = function (byteCount) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'okio.internal.commonRequest' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        var message = 'byteCount < 0: ' + byteCount.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!this.zh4_1) {
        // Inline function 'okio.internal.commonRequest.<anonymous>' call
        var message_0 = 'closed';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      while (this.ah5_1.uh1_1.b1(byteCount) < 0) {
        if (this.yh4_1.lh4(this.ah5_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
          tmp$ret$2 = false;
          break $l$block;
        }
      }
      tmp$ret$2 = true;
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).dh4 = function () {
    // Inline function 'okio.internal.commonReadByteArray' call
    this.ah5_1.kh4(this.yh4_1);
    return this.ah5_1.dh4();
  };
  protoOf(RealBufferedSource).ah4 = function () {
    return this.bh4(new Long(-1, 2147483647));
  };
  protoOf(RealBufferedSource).bh4 = function (limit) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonReadUtf8LineStrict' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(limit.b1(new Long(0, 0)) >= 0)) {
        // Inline function 'okio.internal.commonReadUtf8LineStrict.<anonymous>' call
        var message = 'limit < 0: ' + limit.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp;
      if (limit.equals(new Long(-1, 2147483647))) {
        tmp = new Long(-1, 2147483647);
      } else {
        // Inline function 'kotlin.Long.plus' call
        tmp = limit.a3(toLong(1));
      }
      var scanLength = tmp;
      var newline = this.ch4(10, new Long(0, 0), scanLength);
      if (!newline.equals(new Long(-1, -1))) {
        tmp$ret$2 = readUtf8Line(this.ah5_1, newline);
        break $l$block_0;
      }
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (scanLength.b1(new Long(-1, 2147483647)) < 0 && this.qf3(scanLength)) {
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$3 = scanLength.b3(toLong(1));
        tmp_2 = this.ah5_1.hx(tmp$ret$3) === 13;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = scanLength.a3(toLong(1));
        tmp_1 = this.qf3(tmp$ret$4);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = this.ah5_1.hx(scanLength) === 10;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = readUtf8Line(this.ah5_1, scanLength);
        break $l$block_0;
      }
      var data = new Buffer();
      var tmp_3 = new Long(0, 0);
      // Inline function 'okio.minOf' call
      var b = this.ah5_1.uh1_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = toLong(32);
      var tmp$ret$6 = a.b1(b) <= 0 ? a : b;
      this.ah5_1.wh3(data, tmp_3, tmp$ret$6);
      // Inline function 'kotlin.comparisons.minOf' call
      var a_0 = this.ah5_1.uh1_1;
      var tmp$ret$7 = a_0.b1(limit) <= 0 ? a_0 : limit;
      throw new EOFException('\\n not found: limit=' + tmp$ret$7.toString() + ' content=' + data.hh2().ah3() + '\u2026');
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).ch4 = function (b, fromIndex, toIndex) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'okio.internal.commonIndexOf' call
      var fromIndex_0 = fromIndex;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!this.zh4_1) {
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        var message = 'closed';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!((new Long(0, 0)).b1(fromIndex_0) <= 0 ? fromIndex_0.b1(toIndex) <= 0 : false)) {
        // Inline function 'okio.internal.commonIndexOf.<anonymous>' call
        var message_0 = 'fromIndex=' + fromIndex_0.toString() + ' toIndex=' + toIndex.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      while (fromIndex_0.b1(toIndex) < 0) {
        var result = this.ah5_1.ch4(b, fromIndex_0, toIndex);
        if (!result.equals(new Long(-1, -1))) {
          tmp$ret$2 = result;
          break $l$block_0;
        }
        var lastBufferSize = this.ah5_1.uh1_1;
        if (lastBufferSize.b1(toIndex) >= 0 || this.yh4_1.lh4(this.ah5_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
          tmp$ret$2 = new Long(-1, -1);
          break $l$block_0;
        }
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = fromIndex_0;
        fromIndex_0 = a.b1(lastBufferSize) >= 0 ? a : lastBufferSize;
      }
      tmp$ret$2 = new Long(-1, -1);
    }
    return tmp$ret$2;
  };
  protoOf(RealBufferedSource).l4 = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'okio.internal.commonClose' call
      if (this.zh4_1) {
        tmp$ret$0 = Unit_instance;
        break $l$block;
      }
      this.zh4_1 = true;
      this.yh4_1.l4();
      this.ah5_1.i2();
    }
    return tmp$ret$0;
  };
  protoOf(RealBufferedSource).toString = function () {
    // Inline function 'okio.internal.commonToString' call
    return 'buffer(' + toString(this.yh4_1) + ')';
  };
  function SegmentPool() {
    this.lh1_1 = 0;
    this.mh1_1 = 0;
  }
  protoOf(SegmentPool).uf4 = function () {
    return Segment_init_$Create$();
  };
  protoOf(SegmentPool).ph1 = function (segment) {
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_2;
  _.$_$.b = Buffer;
  _.$_$.c = FileSystem;
  _.$_$.d = IOException;
  _.$_$.e = Path;
  _.$_$.f = buffer;
  _.$_$.g = buffer_0;
  //endregion
  return _;
}));

//# sourceMappingURL=okio-parent-okio.js.map
