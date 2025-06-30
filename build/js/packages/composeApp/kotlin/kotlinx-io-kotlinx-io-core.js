(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    globalThis['kotlinx-io-kotlinx-io-core'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Long = kotlin_kotlin.$_$.hk;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var charArrayOf = kotlin_kotlin.$_$.gd;
  var protoOf = kotlin_kotlin.$_$.ff;
  var toString = kotlin_kotlin.$_$.jf;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var toShort = kotlin_kotlin.$_$.if;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var toLong = kotlin_kotlin.$_$.hf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var AutoCloseable = kotlin_kotlin.$_$.vj;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var arrayCopy = kotlin_kotlin.$_$.h7;
  var toByte = kotlin_kotlin.$_$.gf;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u3;
  var charArray = kotlin_kotlin.$_$.hd;
  var numberToChar = kotlin_kotlin.$_$.ze;
  var concatToString = kotlin_kotlin.$_$.gh;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.fd;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.b2;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.d2;
  var Exception = kotlin_kotlin.$_$.dk;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.wia(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.wia.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment');
  initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
  initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
  initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
  initMetadataForClass(SegmentReadContextImpl$1);
  initMetadataForClass(SegmentWriteContextImpl$1);
  initMetadataForClass(BufferIterationContextImpl$1);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function get_HEX_DIGIT_CHARS() {
    _init_properties__Util_kt__g8tcl9();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function checkBounds(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    if (startIndex.h1(new Long(0, 0)) < 0 || endIndex.h1(size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex.h1(endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset.h1(new Long(0, 0)) < 0 || offset.h1(size) > 0 || size.g3(offset).h1(byteCount) < 0 || byteCount.h1(new Long(0, 0)) < 0) {
      throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
  }
  var properties_initialized__Util_kt_67kc5b;
  function _init_properties__Util_kt__g8tcl9() {
    if (!properties_initialized__Util_kt_67kc5b) {
      properties_initialized__Util_kt_67kc5b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function throwEof($this, byteCount) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.p().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.li9_1 = null;
    this.mi9_1 = null;
    this.ni9_1 = new Long(0, 0);
  }
  protoOf(Buffer).p = function () {
    return this.ni9_1;
  };
  protoOf(Buffer).oi9 = function () {
    return this;
  };
  protoOf(Buffer).pi9 = function () {
    return this.p().equals(new Long(0, 0));
  };
  protoOf(Buffer).qi9 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.Buffer.require.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.p().h1(byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.p().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).ri9 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.Buffer.request.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.p().h1(byteCount) >= 0;
  };
  protoOf(Buffer).si9 = function () {
    var tmp0_elvis_lhs = this.li9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.aia();
    if (segmentSize === 0) {
      this.bia();
      return this.si9();
    }
    var v = segment.cia();
    this.ni9_1 = this.ni9_1.g3(new Long(1, 0));
    if (segmentSize === 1) {
      this.bia();
    }
    return v;
  };
  protoOf(Buffer).dia = function () {
    var tmp0_elvis_lhs = this.li9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.aia();
    if (segmentSize < 2) {
      this.qi9(new Long(2, 0));
      if (segmentSize === 0) {
        this.bia();
        return this.dia();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.si9() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.si9() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.eia();
    this.ni9_1 = this.ni9_1.g3(new Long(2, 0));
    if (segmentSize === 2) {
      this.bia();
    }
    return v;
  };
  protoOf(Buffer).fia = function () {
    return Unit_instance;
  };
  protoOf(Buffer).gia = function (out, startIndex, endIndex) {
    checkBounds(this.p(), startIndex, endIndex);
    if (startIndex.equals(endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = endIndex.g3(startIndex);
    out.ni9_1 = out.ni9_1.f3(remainingByteCount);
    var s = this.li9_1;
    while (currentOffset.h1(toLong(ensureNotNull(s).vi9_1 - s.ui9_1 | 0)) >= 0) {
      currentOffset = currentOffset.g3(toLong(s.vi9_1 - s.ui9_1 | 0));
      s = s.yi9_1;
    }
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).hia();
      copy.ui9_1 = copy.ui9_1 + currentOffset.m1() | 0;
      var tmp = copy;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = copy.ui9_1 + remainingByteCount.m1() | 0;
      var b = copy.vi9_1;
      tmp.vi9_1 = Math.min(a, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.li9_1 == null) {
        out.li9_1 = copy;
        out.mi9_1 = copy;
      } else if (false) {
        out.mi9_1 = ensureNotNull(out.mi9_1).iia(copy).jia();
        if (ensureNotNull(out.mi9_1).zi9_1 == null) {
          out.li9_1 = out.mi9_1;
        }
      } else {
        out.mi9_1 = ensureNotNull(out.mi9_1).iia(copy);
      }
      remainingByteCount = remainingByteCount.g3(toLong(copy.vi9_1 - copy.ui9_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.yi9_1;
    }
  };
  protoOf(Buffer).kia = function () {
    var result = this.p();
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.mi9_1);
    if (tail.vi9_1 < 8192 && tail.xi9_1) {
      result = result.g3(toLong(tail.vi9_1 - tail.ui9_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).n2 = function () {
    return this.lia(this.p());
  };
  protoOf(Buffer).lia = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.li9_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      // Inline function 'kotlinx.io.minOf' call
      var a = remainingByteCount;
      var b = head.vi9_1 - head.ui9_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (a.h1(b_0) <= 0 ? a : b_0).m1();
      this.ni9_1 = this.ni9_1.g3(toLong(toSkip));
      remainingByteCount = remainingByteCount.g3(toLong(toSkip));
      head.ui9_1 = head.ui9_1 + toSkip | 0;
      if (head.ui9_1 === head.vi9_1) {
        this.bia();
      }
    }
  };
  protoOf(Buffer).mia = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var tmp0_elvis_lhs = this.li9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = endIndex - startIndex | 0;
    var b = s.aia();
    var toCopy = Math.min(a, b);
    s.nia(sink, startIndex, startIndex + toCopy | 0);
    this.ni9_1 = this.ni9_1.g3(toLong(toCopy));
    if (isEmpty(s)) {
      this.bia();
    }
    return toCopy;
  };
  protoOf(Buffer).oia = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.p().equals(new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = byteCount.h1(this.p()) > 0 ? this.p() : byteCount;
    sink.pia(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).qia = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.p().h1(byteCount) < 0) {
      sink.pia(this, this.p());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.p().toString() + ' bytes were written.');
    }
    sink.pia(this, byteCount);
  };
  protoOf(Buffer).ria = function (sink) {
    var byteCount = this.p();
    if (byteCount.h1(new Long(0, 0)) > 0) {
      sink.pia(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).q31 = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).sia = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      // Inline function 'kotlinx.io.Buffer.writableSegment.<anonymous>' call
      var message = 'unexpected capacity';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.mi9_1 == null) {
      var result = SegmentPool_instance.via();
      this.li9_1 = result;
      this.mi9_1 = result;
      return result;
    }
    var t = ensureNotNull(this.mi9_1);
    if ((t.vi9_1 + minimumCapacity | 0) > 8192 || !t.xi9_1) {
      var newTail = t.iia(SegmentPool_instance.via());
      this.mi9_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).wia = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.sia(1);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = endIndex - currentOffset | 0;
      var b = tail.xia();
      var toCopy = Math.min(a, b);
      tail.yia(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.ni9_1;
    var other = endIndex - startIndex | 0;
    tmp.ni9_1 = this_0.f3(toLong(other));
  };
  protoOf(Buffer).pia = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(source === this)) {
      // Inline function 'kotlinx.io.Buffer.write.<anonymous>' call
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.ni9_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      if (remainingByteCount.h1(toLong(ensureNotNull(source.li9_1).aia())) < 0) {
        var tail = this.mi9_1;
        var tmp;
        if (!(tail == null) && tail.xi9_1) {
          // Inline function 'kotlin.Long.minus' call
          // Inline function 'kotlin.Long.plus' call
          var this_0 = remainingByteCount;
          var other = tail.vi9_1;
          var this_1 = this_0.f3(toLong(other));
          var other_0 = tail.aib() ? 0 : tail.ui9_1;
          tmp = this_1.g3(toLong(other_0)).h1(new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.li9_1).cib(tail, remainingByteCount.m1());
          source.ni9_1 = source.ni9_1.g3(remainingByteCount);
          this.ni9_1 = this.ni9_1.f3(remainingByteCount);
          return Unit_instance;
        } else {
          source.li9_1 = ensureNotNull(source.li9_1).bib(remainingByteCount.m1());
        }
      }
      var segmentToMove = ensureNotNull(source.li9_1);
      var movedByteCount = toLong(segmentToMove.aia());
      source.li9_1 = segmentToMove.dib();
      if (source.li9_1 == null) {
        source.mi9_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.li9_1 == null) {
        this.li9_1 = segmentToMove;
        this.mi9_1 = segmentToMove;
      } else if (true) {
        this.mi9_1 = ensureNotNull(this.mi9_1).iia(segmentToMove).jia();
        if (ensureNotNull(this.mi9_1).zi9_1 == null) {
          this.li9_1 = this.mi9_1;
        }
      } else {
        this.mi9_1 = ensureNotNull(this.mi9_1).iia(segmentToMove);
      }
      source.ni9_1 = source.ni9_1.g3(movedByteCount);
      this.ni9_1 = this.ni9_1.f3(movedByteCount);
      remainingByteCount = remainingByteCount.g3(movedByteCount);
    }
  };
  protoOf(Buffer).eib = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.oia(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.f3(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).fib = function (byte) {
    this.sia(1).gib(byte);
    this.ni9_1 = this.ni9_1.f3(new Long(1, 0));
  };
  protoOf(Buffer).hib = function (short) {
    this.sia(2).iib(short);
    this.ni9_1 = this.ni9_1.f3(new Long(2, 0));
  };
  protoOf(Buffer).q4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.p().equals(new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.p();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(maxPrintableBytes);
    var len = (a.h1(b) <= 0 ? a : b).m1();
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.p().h1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.li9_1;
    while (!(curr == null)) {
      // Inline function 'kotlinx.io.Buffer.toString.<anonymous>' call
      var ctx = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.aia()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = ctx.jib(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.w8(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.w8(tmp_1[tmp$ret$3]);
      }
      curr = curr.yi9_1;
    }
    if (this.p().h1(toLong(maxPrintableBytes)) > 0) {
      builder.w8(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.p().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).bia = function () {
    var oldHead = ensureNotNull(this.li9_1);
    var nextHead = oldHead.yi9_1;
    this.li9_1 = nextHead;
    if (nextHead == null) {
      this.mi9_1 = null;
    } else {
      nextHead.zi9_1 = null;
    }
    oldHead.yi9_1 = null;
    SegmentPool_instance.kib(oldHead);
  };
  protoOf(Buffer).lib = function () {
    var oldTail = ensureNotNull(this.mi9_1);
    var newTail = oldTail.zi9_1;
    this.mi9_1 = newTail;
    if (newTail == null) {
      this.li9_1 = null;
    } else {
      newTail.yi9_1 = null;
    }
    oldTail.zi9_1 = null;
    SegmentPool_instance.kib(oldTail);
  };
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.mib_1 = upstream;
    this.nib_1 = this.mib_1.oi9();
    this.oib_1 = this.nib_1.li9_1;
    var tmp = this;
    var tmp0_safe_receiver = this.nib_1.li9_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ui9_1;
    tmp.pib_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.qib_1 = false;
    this.rib_1 = new Long(0, 0);
  }
  protoOf(PeekSource).oia = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qib_1) {
      // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.oib_1 == null || (this.oib_1 === this.nib_1.li9_1 && this.pib_1 === ensureNotNull(this.nib_1.li9_1).ui9_1))) {
      // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$3 = this.rib_1.f3(toLong(1));
    if (!this.mib_1.ri9(tmp$ret$3))
      return new Long(-1, -1);
    if (this.oib_1 == null && !(this.nib_1.li9_1 == null)) {
      this.oib_1 = this.nib_1.li9_1;
      this.pib_1 = ensureNotNull(this.nib_1.li9_1).ui9_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.nib_1.p().g3(this.rib_1);
    var toCopy = byteCount.h1(b) <= 0 ? byteCount : b;
    this.nib_1.gia(sink, this.rib_1, this.rib_1.f3(toCopy));
    this.rib_1 = this.rib_1.f3(toCopy);
    return toCopy;
  };
  protoOf(PeekSource).q4 = function () {
    this.qib_1 = true;
  };
  function RealSource(source) {
    this.sib_1 = source;
    this.tib_1 = false;
    this.uib_1 = new Buffer();
  }
  protoOf(RealSource).oi9 = function () {
    return this.uib_1;
  };
  protoOf(RealSource).oia = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.tib_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.RealSource.readAtMostTo.<anonymous>' call
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.uib_1.p().equals(new Long(0, 0))) {
      var read = this.sib_1.oia(this.uib_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.uib_1.p();
    var toRead = byteCount.h1(b) <= 0 ? byteCount : b;
    return this.uib_1.oia(sink, toRead);
  };
  protoOf(RealSource).pi9 = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.tib_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.uib_1.pi9() && this.sib_1.oia(this.uib_1, new Long(8192, 0)).equals(new Long(-1, -1));
  };
  protoOf(RealSource).qi9 = function (byteCount) {
    if (!this.ri9(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).ri9 = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.tib_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.RealSource.request.<anonymous>' call
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.uib_1.p().h1(byteCount) < 0) {
      if (this.sib_1.oia(this.uib_1, new Long(8192, 0)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).mia = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    if (this.uib_1.p().equals(new Long(0, 0))) {
      var read = this.sib_1.oia(this.uib_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    // Inline function 'kotlinx.io.minOf' call
    var a = endIndex - startIndex | 0;
    var b = this.uib_1.p();
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = toLong(a);
    var toRead = (a_0.h1(b) <= 0 ? a_0 : b).m1();
    return this.uib_1.mia(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).qia = function (sink, byteCount) {
    try {
      this.qi9(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.pia(this.uib_1, this.uib_1.p());
        throw e;
      } else {
        throw $p;
      }
    }
    this.uib_1.qia(sink, byteCount);
  };
  protoOf(RealSource).ria = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!this.sib_1.oia(this.uib_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
      var emitByteCount = this.uib_1.kia();
      if (emitByteCount.h1(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.f3(emitByteCount);
        sink.pia(this.uib_1, emitByteCount);
      }
    }
    if (this.uib_1.p().h1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.f3(this.uib_1.p());
      sink.pia(this.uib_1, this.uib_1.p());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).dia = function () {
    this.qi9(new Long(2, 0));
    return this.uib_1.dia();
  };
  protoOf(RealSource).q31 = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.tib_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).q4 = function () {
    if (this.tib_1)
      return Unit_instance;
    this.tib_1 = true;
    this.sib_1.q4();
    this.uib_1.n2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.sib_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.ti9_1 = new Int8Array(8192);
    $this.xi9_1 = true;
    $this.wi9_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.ti9_1 = data;
    $this.ui9_1 = pos;
    $this.vi9_1 = limit;
    $this.wi9_1 = shareToken;
    $this.xi9_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.vib_1 = 8192;
    this.wib_1 = 1024;
  }
  protoOf(Companion).xib = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).aib = function () {
    var tmp1_safe_receiver = this.wi9_1;
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yib();
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Segment).hia = function () {
    var tmp0_elvis_lhs = this.wi9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.zib();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
      this.wi9_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.ui9_1;
    var tmp_1 = this.vi9_1;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
    t.aic();
    return Segment_init_$Create$_0(this.ti9_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).dib = function () {
    var result = this.yi9_1;
    if (!(this.zi9_1 == null)) {
      ensureNotNull(this.zi9_1).yi9_1 = this.yi9_1;
    }
    if (!(this.yi9_1 == null)) {
      ensureNotNull(this.yi9_1).zi9_1 = this.zi9_1;
    }
    this.yi9_1 = null;
    this.zi9_1 = null;
    return result;
  };
  protoOf(Segment).iia = function (segment) {
    segment.zi9_1 = this;
    segment.yi9_1 = this.yi9_1;
    if (!(this.yi9_1 == null)) {
      ensureNotNull(this.yi9_1).zi9_1 = segment;
    }
    this.yi9_1 = segment;
    return segment;
  };
  protoOf(Segment).bib = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount > 0 && byteCount <= (this.vi9_1 - this.ui9_1 | 0))) {
      // Inline function 'kotlinx.io.Segment.split.<anonymous>' call
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.hia();
    } else {
      prefix = SegmentPool_instance.via();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.ti9_1;
      var destination = prefix.ti9_1;
      var startIndex = this.ui9_1;
      var endIndex = this.ui9_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
    }
    prefix.vi9_1 = prefix.ui9_1 + byteCount | 0;
    this.ui9_1 = this.ui9_1 + byteCount | 0;
    if (!(this.zi9_1 == null)) {
      ensureNotNull(this.zi9_1).iia(prefix);
    } else {
      prefix.yi9_1 = this;
      this.zi9_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).jia = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.zi9_1 == null)) {
      // Inline function 'kotlinx.io.Segment.compact.<anonymous>' call
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.zi9_1).xi9_1)
      return this;
    var byteCount = this.vi9_1 - this.ui9_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.zi9_1).vi9_1 | 0) + (ensureNotNull(this.zi9_1).aib() ? 0 : ensureNotNull(this.zi9_1).ui9_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.zi9_1;
    this.cib(ensureNotNull(predecessor), byteCount);
    var successor = this.dib();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(successor == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    SegmentPool_instance.kib(this);
    return predecessor;
  };
  protoOf(Segment).gib = function (byte) {
    var _unary__edvuaz = this.vi9_1;
    this.vi9_1 = _unary__edvuaz + 1 | 0;
    this.ti9_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).iib = function (short) {
    var data = this.ti9_1;
    var limit = this.vi9_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.vi9_1 = limit;
  };
  protoOf(Segment).cia = function () {
    var _unary__edvuaz = this.ui9_1;
    this.ui9_1 = _unary__edvuaz + 1 | 0;
    return this.ti9_1[_unary__edvuaz];
  };
  protoOf(Segment).eia = function () {
    var data = this.ti9_1;
    var pos = this.ui9_1;
    // Inline function 'kotlinx.io.and' call
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.ui9_1 = pos;
    return s;
  };
  protoOf(Segment).cib = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!sink.xi9_1) {
      // Inline function 'kotlinx.io.Segment.writeTo.<anonymous>' call
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.vi9_1 + byteCount | 0) > 8192) {
      if (sink.aib())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.vi9_1 + byteCount | 0) - sink.ui9_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = sink.ti9_1;
      var destination = sink.ti9_1;
      var startIndex = sink.ui9_1;
      var endIndex = sink.vi9_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
      sink.vi9_1 = sink.vi9_1 - sink.ui9_1 | 0;
      sink.ui9_1 = 0;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = this.ti9_1;
    var destination_0 = sink.ti9_1;
    var destinationOffset = sink.vi9_1;
    var startIndex_0 = this.ui9_1;
    var endIndex_0 = this.ui9_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
    sink.vi9_1 = sink.vi9_1 + byteCount | 0;
    this.ui9_1 = this.ui9_1 + byteCount | 0;
  };
  protoOf(Segment).nia = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.ti9_1;
    var startIndex = this.ui9_1;
    var endIndex = this.ui9_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, startIndex, endIndex);
    this.ui9_1 = this.ui9_1 + len | 0;
  };
  protoOf(Segment).yia = function (src, srcStartOffset, srcEndOffset) {
    // Inline function 'kotlin.collections.copyInto' call
    var destination = this.ti9_1;
    var destinationOffset = this.vi9_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, destinationOffset, srcStartOffset, srcEndOffset);
    this.vi9_1 = this.vi9_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).aia = function () {
    return this.vi9_1 - this.ui9_1 | 0;
  };
  protoOf(Segment).xia = function () {
    return this.ti9_1.length - this.vi9_1 | 0;
  };
  protoOf(Segment).bic = function (readOnly) {
    return this.ti9_1;
  };
  protoOf(Segment).cic = function (index) {
    return this.ti9_1[this.ui9_1 + index | 0];
  };
  protoOf(Segment).dic = function (index, value) {
    this.ti9_1[this.vi9_1 + index | 0] = value;
  };
  protoOf(Segment).eic = function (index, b0, b1) {
    var d = this.ti9_1;
    var l = this.vi9_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).fic = function (index, b0, b1, b2) {
    var d = this.ti9_1;
    var l = this.vi9_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).gic = function (index, b0, b1, b2, b3) {
    var d = this.ti9_1;
    var l = this.vi9_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.ui9_1 = 0;
    this.vi9_1 = 0;
    this.wi9_1 = null;
    this.xi9_1 = false;
    this.yi9_1 = null;
    this.zi9_1 = null;
  }
  function SegmentCopyTracker() {
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.aia() === 0;
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).yib = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).aic = function () {
    return Unit_instance;
  };
  var AlwaysSharedCopyTracker_instance;
  function AlwaysSharedCopyTracker_getInstance() {
    if (AlwaysSharedCopyTracker_instance == null)
      new AlwaysSharedCopyTracker();
    return AlwaysSharedCopyTracker_instance;
  }
  function Sink() {
  }
  function Source() {
  }
  function readByteArray(_this__u8e3s4) {
    return readByteArrayImpl(_this__u8e3s4, -1);
  }
  function readByteArrayImpl(_this__u8e3s4, size) {
    var arraySize = size;
    if (size === -1) {
      var fetchSize = new Long(2147483647, 0);
      while (_this__u8e3s4.oi9().p().h1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.ri9(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        fetchSize = fetchSize.h3(toLong(2));
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_this__u8e3s4.oi9().p().h1(new Long(2147483647, 0)) < 0)) {
        // Inline function 'kotlinx.io.readByteArrayImpl.<anonymous>' call
        var message = "Can't create an array of size " + _this__u8e3s4.oi9().p().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = _this__u8e3s4.oi9().p().m1();
    } else {
      _this__u8e3s4.qi9(toLong(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.oi9(), array);
    return array;
  }
  function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var offset = startIndex;
    while (offset < endIndex) {
      var bytesRead = _this__u8e3s4.mia(sink, offset, endIndex);
      if (bytesRead === -1) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
      }
      offset = offset + bytesRead | 0;
    }
  }
  function readByteArray_0(_this__u8e3s4, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    var byteCount_0 = toLong(byteCount);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount_0.h1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function readString(_this__u8e3s4) {
    _this__u8e3s4.ri9(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.oi9(), _this__u8e3s4.oi9().p());
  }
  function readString_0(_this__u8e3s4, byteCount) {
    _this__u8e3s4.qi9(byteCount);
    return commonReadUtf8(_this__u8e3s4.oi9(), byteCount);
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount.equals(new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.li9_1;
    while (!(curr == null)) {
      // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>' call
      get_SegmentReadContextImpl();
      if (toLong(curr.aia()).h1(byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>.<anonymous>' call
        var data = curr.bic(true);
        var pos = curr.ui9_1;
        // Inline function 'kotlin.math.min' call
        var a = curr.vi9_1;
        var b = pos + byteCount.m1() | 0;
        var tmp$ret$0 = Math.min(a, b);
        result = commonToUtf8String(data, pos, tmp$ret$0);
        _this__u8e3s4.lia(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.m1()));
    }
    // Inline function 'kotlin.error' call
    var message = 'Unreacheable';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function writeString(_this__u8e3s4, string, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? string.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = string.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    // Inline function 'kotlinx.io.writeToInternalBuffer' call
    // Inline function 'kotlinx.io.writeString.<anonymous>' call
    // Inline function 'kotlinx.io.commonWriteUtf8' call
    var this_0 = _this__u8e3s4.oi9();
    var i = startIndex;
    while (i < endIndex) {
      // Inline function 'kotlin.code' call
      var p0 = i;
      var this_1 = charSequenceGet(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.sia(1);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.xia() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.kic(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            // Inline function 'kotlin.code' call
            var p0_0 = i;
            var this_2 = charSequenceGet(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.kic(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.vi9_1 = tail.vi9_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.xia() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.xia();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.vi9_1 = tail.vi9_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_0.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.lib();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.sia(2);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().jic(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.vi9_1 = tail_0.vi9_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_1.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.xia() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.xia();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.vi9_1 = tail_0.vi9_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_2.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.lib();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.sia(3);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().iic(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.vi9_1 = tail_1.vi9_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_3.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.xia() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.xia();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.vi9_1 = tail_1.vi9_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_4.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.lib();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp_5;
        if ((i + 1 | 0) < endIndex) {
          // Inline function 'kotlin.code' call
          var p0_1 = i + 1 | 0;
          var this_3 = charSequenceGet(string, p0_1);
          tmp_5 = Char__toInt_impl_vasixd(this_3);
        } else {
          tmp_5 = 0;
        }
        var low = tmp_5;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          this_0.fib(63);
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.sia(4);
            // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
            get_SegmentWriteContextImpl().hic(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.vi9_1 = tail_2.vi9_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_6.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.xia() : false)) {
              // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.xia();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.vi9_1 = tail_2.vi9_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_7.ni9_1 = this_0.ni9_1.f3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.lib();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.fia();
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'kotlinx.io.internal.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = numberToChar(b0);
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp$ret$1;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            var beginIndex_0 = index;
            if (endIndex <= (beginIndex_0 + 1 | 0)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = numberToChar(65533);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[beginIndex_0];
            var b1 = _this__u8e3s4[beginIndex_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = numberToChar(65533);
              tmp$ret$1 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = numberToChar(65533);
            } else {
              // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = numberToChar(codePoint);
            }
            tmp$ret$1 = 2;
          }
          index = tmp + tmp$ret$1 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp$ret$7;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              var beginIndex_1 = index;
              if (endIndex <= (beginIndex_1 + 2 | 0)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = numberToChar(65533);
                var tmp_1;
                if (endIndex <= (beginIndex_1 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
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
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = numberToChar(65533);
                tmp$ret$7 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[beginIndex_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = numberToChar(65533);
                tmp$ret$7 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = numberToChar(65533);
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = numberToChar(65533);
              } else {
                // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = numberToChar(codePoint_0);
              }
              tmp$ret$7 = 3;
            }
            index = tmp_0 + tmp$ret$7 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp$ret$15;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                var beginIndex_2 = index;
                if (endIndex <= (beginIndex_2 + 3 | 0)) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = _Char___init__impl__6a9atx(65533);
                  }
                  var tmp_3;
                  if (endIndex <= (beginIndex_2 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
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
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
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
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[beginIndex_2 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[beginIndex_2 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = _Char___init__impl__6a9atx(65533);
                  }
                  tmp$ret$15 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = _Char___init__impl__6a9atx(65533);
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = _Char___init__impl__6a9atx(65533);
                  }
                } else if (codePoint_1 < 65536) {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(65533 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = numberToChar((65533 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = _Char___init__impl__6a9atx(65533);
                  }
                } else {
                  // Inline function 'kotlinx.io.internal.processUtf16Chars.<anonymous>' call
                  if (!(codePoint_1 === 65533)) {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  } else {
                    // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = _Char___init__impl__6a9atx(65533);
                  }
                }
                tmp$ret$15 = 4;
              }
              index = tmp_2 + tmp$ret$15 | 0;
            } else {
              // Inline function 'kotlinx.io.internal.commonToUtf8String.<anonymous>' call
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = _Char___init__impl__6a9atx(65533);
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_SegmentReadContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentReadContextImpl;
  }
  var SegmentReadContextImpl;
  function get_SegmentWriteContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentWriteContextImpl;
  }
  var SegmentWriteContextImpl;
  var BufferIterationContextImpl;
  function UnsafeBufferOperations() {
  }
  var UnsafeBufferOperations_instance;
  function UnsafeBufferOperations_getInstance() {
    return UnsafeBufferOperations_instance;
  }
  function SegmentReadContextImpl$1() {
  }
  protoOf(SegmentReadContextImpl$1).jib = function (segment, offset) {
    return segment.cic(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).kic = function (segment, offset, value) {
    segment.dic(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).jic = function (segment, offset, b0, b1) {
    segment.eic(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).iic = function (segment, offset, b0, b1, b2) {
    segment.fic(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).hic = function (segment, offset, b0, b1, b2, b3) {
    segment.gic(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).jib = function (segment, offset) {
    return get_SegmentReadContextImpl().jib(segment, offset);
  };
  var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
  function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
    if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
      properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
      SegmentReadContextImpl = new SegmentReadContextImpl$1();
      SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
      BufferIterationContextImpl = new BufferIterationContextImpl$1();
    }
  }
  function IOException_init_$Init$($this) {
    Exception_init_$Init$($this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_0(message) {
    var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_1(message, cause) {
    var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_1);
    return tmp;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function EOFException_init_$Init$($this) {
    IOException_init_$Init$($this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException_init_$Init$_0(message, $this) {
    IOException_init_$Init$_0(message, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_0(message) {
    var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_0);
    return tmp;
  }
  function EOFException() {
    captureStack(this, EOFException);
  }
  function SegmentPool() {
    this.tia_1 = 0;
    this.uia_1 = 0;
  }
  protoOf(SegmentPool).via = function () {
    return Companion_instance.xib();
  };
  protoOf(SegmentPool).kib = function (segment) {
  };
  protoOf(SegmentPool).zib = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).zia = write$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  UnsafeBufferOperations_instance = new UnsafeBufferOperations();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EOFException_init_$Create$_0;
  _.$_$.b = IOException_init_$Init$_0;
  _.$_$.c = IOException_init_$Create$_0;
  _.$_$.d = IOException_init_$Create$_1;
  _.$_$.e = Buffer;
  _.$_$.f = IOException;
  _.$_$.g = Source;
  _.$_$.h = readByteArray_0;
  _.$_$.i = readByteArray;
  _.$_$.j = readString;
  _.$_$.k = readString_0;
  _.$_$.l = readTo;
  _.$_$.m = writeString;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
