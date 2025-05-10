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
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var Long = kotlin_kotlin.$_$.wi;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var charArrayOf = kotlin_kotlin.$_$.ic;
  var protoOf = kotlin_kotlin.$_$.he;
  var toString = kotlin_kotlin.$_$.le;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var toShort = kotlin_kotlin.$_$.ke;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var toLong = kotlin_kotlin.$_$.je;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var objectCreate = kotlin_kotlin.$_$.ge;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var arrayCopy = kotlin_kotlin.$_$.w6;
  var toByte = kotlin_kotlin.$_$.ie;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var charSequenceGet = kotlin_kotlin.$_$.kc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m3;
  var charArray = kotlin_kotlin.$_$.jc;
  var numberToChar = kotlin_kotlin.$_$.be;
  var concatToString = kotlin_kotlin.$_$.gg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.hc;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.a2;
  var Exception = kotlin_kotlin.$_$.si;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source');
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.vf4(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.vf4.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink');
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource');
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
    if (startIndex.b1(new Long(0, 0)) < 0 || endIndex.b1(size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex.b1(endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset.b1(new Long(0, 0)) < 0 || offset.b1(size) > 0 || size.b3(offset).b1(byteCount) < 0 || byteCount.b1(new Long(0, 0)) < 0) {
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
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.j().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.kf3_1 = null;
    this.lf3_1 = null;
    this.mf3_1 = new Long(0, 0);
  }
  protoOf(Buffer).j = function () {
    return this.mf3_1;
  };
  protoOf(Buffer).nf3 = function () {
    return this;
  };
  protoOf(Buffer).of3 = function () {
    return this.j().equals(new Long(0, 0));
  };
  protoOf(Buffer).pf3 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.Buffer.require.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.j().b1(byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.j().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).qf3 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.Buffer.request.<anonymous>' call
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.j().b1(byteCount) >= 0;
  };
  protoOf(Buffer).rf3 = function () {
    var tmp0_elvis_lhs = this.kf3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.zf3();
    if (segmentSize === 0) {
      this.af4();
      return this.rf3();
    }
    var v = segment.bf4();
    this.mf3_1 = this.mf3_1.b3(new Long(1, 0));
    if (segmentSize === 1) {
      this.af4();
    }
    return v;
  };
  protoOf(Buffer).cf4 = function () {
    var tmp0_elvis_lhs = this.kf3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.zf3();
    if (segmentSize < 2) {
      this.pf3(new Long(2, 0));
      if (segmentSize === 0) {
        this.af4();
        return this.cf4();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.rf3() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.rf3() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.df4();
    this.mf3_1 = this.mf3_1.b3(new Long(2, 0));
    if (segmentSize === 2) {
      this.af4();
    }
    return v;
  };
  protoOf(Buffer).ef4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).ff4 = function (out, startIndex, endIndex) {
    checkBounds(this.j(), startIndex, endIndex);
    if (startIndex.equals(endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = endIndex.b3(startIndex);
    out.mf3_1 = out.mf3_1.a3(remainingByteCount);
    var s = this.kf3_1;
    while (currentOffset.b1(toLong(ensureNotNull(s).uf3_1 - s.tf3_1 | 0)) >= 0) {
      currentOffset = currentOffset.b3(toLong(s.uf3_1 - s.tf3_1 | 0));
      s = s.xf3_1;
    }
    while (remainingByteCount.b1(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).gf4();
      copy.tf3_1 = copy.tf3_1 + currentOffset.g1() | 0;
      var tmp = copy;
      // Inline function 'kotlin.comparisons.minOf' call
      var a = copy.tf3_1 + remainingByteCount.g1() | 0;
      var b = copy.uf3_1;
      tmp.uf3_1 = Math.min(a, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.kf3_1 == null) {
        out.kf3_1 = copy;
        out.lf3_1 = copy;
      } else if (false) {
        out.lf3_1 = ensureNotNull(out.lf3_1).hf4(copy).if4();
        if (ensureNotNull(out.lf3_1).yf3_1 == null) {
          out.kf3_1 = out.lf3_1;
        }
      } else {
        out.lf3_1 = ensureNotNull(out.lf3_1).hf4(copy);
      }
      remainingByteCount = remainingByteCount.b3(toLong(copy.uf3_1 - copy.tf3_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.xf3_1;
    }
  };
  protoOf(Buffer).jf4 = function () {
    var result = this.j();
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.lf3_1);
    if (tail.uf3_1 < 8192 && tail.wf3_1) {
      result = result.b3(toLong(tail.uf3_1 - tail.tf3_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).i2 = function () {
    return this.kf4(this.j());
  };
  protoOf(Buffer).kf4 = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.b1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.kf3_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      // Inline function 'kotlinx.io.minOf' call
      var a = remainingByteCount;
      var b = head.uf3_1 - head.tf3_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (a.b1(b_0) <= 0 ? a : b_0).g1();
      this.mf3_1 = this.mf3_1.b3(toLong(toSkip));
      remainingByteCount = remainingByteCount.b3(toLong(toSkip));
      head.tf3_1 = head.tf3_1 + toSkip | 0;
      if (head.tf3_1 === head.uf3_1) {
        this.af4();
      }
    }
  };
  protoOf(Buffer).lf4 = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var tmp0_elvis_lhs = this.kf3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = endIndex - startIndex | 0;
    var b = s.zf3();
    var toCopy = Math.min(a, b);
    s.mf4(sink, startIndex, startIndex + toCopy | 0);
    this.mf3_1 = this.mf3_1.b3(toLong(toCopy));
    if (isEmpty(s)) {
      this.af4();
    }
    return toCopy;
  };
  protoOf(Buffer).nf4 = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.j().equals(new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = byteCount.b1(this.j()) > 0 ? this.j() : byteCount;
    sink.of4(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).pf4 = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.j().b1(byteCount) < 0) {
      sink.of4(this, this.j());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.j().toString() + ' bytes were written.');
    }
    sink.of4(this, byteCount);
  };
  protoOf(Buffer).qf4 = function (sink) {
    var byteCount = this.j();
    if (byteCount.b1(new Long(0, 0)) > 0) {
      sink.of4(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).s2v = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).rf4 = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      // Inline function 'kotlinx.io.Buffer.writableSegment.<anonymous>' call
      var message = 'unexpected capacity';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.lf3_1 == null) {
      var result = SegmentPool_instance.uf4();
      this.kf3_1 = result;
      this.lf3_1 = result;
      return result;
    }
    var t = ensureNotNull(this.lf3_1);
    if ((t.uf3_1 + minimumCapacity | 0) > 8192 || !t.wf3_1) {
      var newTail = t.hf4(SegmentPool_instance.uf4());
      this.lf3_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).vf4 = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.rf4(1);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = endIndex - currentOffset | 0;
      var b = tail.wf4();
      var toCopy = Math.min(a, b);
      tail.xf4(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.mf3_1;
    var other = endIndex - startIndex | 0;
    tmp.mf3_1 = this_0.a3(toLong(other));
  };
  protoOf(Buffer).of4 = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(source === this)) {
      // Inline function 'kotlinx.io.Buffer.write.<anonymous>' call
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.mf3_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount.b1(new Long(0, 0)) > 0) {
      if (remainingByteCount.b1(toLong(ensureNotNull(source.kf3_1).zf3())) < 0) {
        var tail = this.lf3_1;
        var tmp;
        if (!(tail == null) && tail.wf3_1) {
          // Inline function 'kotlin.Long.minus' call
          // Inline function 'kotlin.Long.plus' call
          var this_0 = remainingByteCount;
          var other = tail.uf3_1;
          var this_1 = this_0.a3(toLong(other));
          var other_0 = tail.zf4() ? 0 : tail.tf3_1;
          tmp = this_1.b3(toLong(other_0)).b1(new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.kf3_1).bf5(tail, remainingByteCount.g1());
          source.mf3_1 = source.mf3_1.b3(remainingByteCount);
          this.mf3_1 = this.mf3_1.a3(remainingByteCount);
          return Unit_instance;
        } else {
          source.kf3_1 = ensureNotNull(source.kf3_1).af5(remainingByteCount.g1());
        }
      }
      var segmentToMove = ensureNotNull(source.kf3_1);
      var movedByteCount = toLong(segmentToMove.zf3());
      source.kf3_1 = segmentToMove.cf5();
      if (source.kf3_1 == null) {
        source.lf3_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.kf3_1 == null) {
        this.kf3_1 = segmentToMove;
        this.lf3_1 = segmentToMove;
      } else if (true) {
        this.lf3_1 = ensureNotNull(this.lf3_1).hf4(segmentToMove).if4();
        if (ensureNotNull(this.lf3_1).yf3_1 == null) {
          this.kf3_1 = this.lf3_1;
        }
      } else {
        this.lf3_1 = ensureNotNull(this.lf3_1).hf4(segmentToMove);
      }
      source.mf3_1 = source.mf3_1.b3(movedByteCount);
      this.mf3_1 = this.mf3_1.a3(movedByteCount);
      remainingByteCount = remainingByteCount.b3(movedByteCount);
    }
  };
  protoOf(Buffer).df5 = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.nf4(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.a3(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).ef5 = function (byte) {
    this.rf4(1).ff5(byte);
    this.mf3_1 = this.mf3_1.a3(new Long(1, 0));
  };
  protoOf(Buffer).gf5 = function (short) {
    this.rf4(2).hf5(short);
    this.mf3_1 = this.mf3_1.a3(new Long(2, 0));
  };
  protoOf(Buffer).l4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.j().equals(new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.j();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(maxPrintableBytes);
    var len = (a.b1(b) <= 0 ? a : b).g1();
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.j().b1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.kf3_1;
    while (!(curr == null)) {
      // Inline function 'kotlinx.io.Buffer.toString.<anonymous>' call
      var ctx = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.zf3()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = ctx.if5(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.q8(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.q8(tmp_1[tmp$ret$3]);
      }
      curr = curr.xf3_1;
    }
    if (this.j().b1(toLong(maxPrintableBytes)) > 0) {
      builder.q8(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.j().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).af4 = function () {
    var oldHead = ensureNotNull(this.kf3_1);
    var nextHead = oldHead.xf3_1;
    this.kf3_1 = nextHead;
    if (nextHead == null) {
      this.lf3_1 = null;
    } else {
      nextHead.yf3_1 = null;
    }
    oldHead.xf3_1 = null;
    SegmentPool_instance.jf5(oldHead);
  };
  protoOf(Buffer).kf5 = function () {
    var oldTail = ensureNotNull(this.lf3_1);
    var newTail = oldTail.yf3_1;
    this.lf3_1 = newTail;
    if (newTail == null) {
      this.kf3_1 = null;
    } else {
      newTail.xf3_1 = null;
    }
    oldTail.yf3_1 = null;
    SegmentPool_instance.jf5(oldTail);
  };
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.lf5_1 = upstream;
    this.mf5_1 = this.lf5_1.nf3();
    this.nf5_1 = this.mf5_1.kf3_1;
    var tmp = this;
    var tmp0_safe_receiver = this.mf5_1.kf3_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tf3_1;
    tmp.of5_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.pf5_1 = false;
    this.qf5_1 = new Long(0, 0);
  }
  protoOf(PeekSource).nf4 = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.pf5_1) {
      // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.nf5_1 == null || (this.nf5_1 === this.mf5_1.kf3_1 && this.of5_1 === ensureNotNull(this.mf5_1.kf3_1).tf3_1))) {
      // Inline function 'kotlinx.io.PeekSource.readAtMostTo.<anonymous>' call
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$3 = this.qf5_1.a3(toLong(1));
    if (!this.lf5_1.qf3(tmp$ret$3))
      return new Long(-1, -1);
    if (this.nf5_1 == null && !(this.mf5_1.kf3_1 == null)) {
      this.nf5_1 = this.mf5_1.kf3_1;
      this.of5_1 = ensureNotNull(this.mf5_1.kf3_1).tf3_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.mf5_1.j().b3(this.qf5_1);
    var toCopy = byteCount.b1(b) <= 0 ? byteCount : b;
    this.mf5_1.ff4(sink, this.qf5_1, this.qf5_1.a3(toCopy));
    this.qf5_1 = this.qf5_1.a3(toCopy);
    return toCopy;
  };
  protoOf(PeekSource).l4 = function () {
    this.pf5_1 = true;
  };
  function RealSource(source) {
    this.rf5_1 = source;
    this.sf5_1 = false;
    this.tf5_1 = new Buffer();
  }
  protoOf(RealSource).nf3 = function () {
    return this.tf5_1;
  };
  protoOf(RealSource).nf4 = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sf5_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.RealSource.readAtMostTo.<anonymous>' call
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.tf5_1.j().equals(new Long(0, 0))) {
      var read = this.rf5_1.nf4(this.tf5_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.tf5_1.j();
    var toRead = byteCount.b1(b) <= 0 ? byteCount : b;
    return this.tf5_1.nf4(sink, toRead);
  };
  protoOf(RealSource).of3 = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sf5_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.tf5_1.of3() && this.rf5_1.nf4(this.tf5_1, new Long(8192, 0)).equals(new Long(-1, -1));
  };
  protoOf(RealSource).pf3 = function (byteCount) {
    if (!this.qf3(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).qf3 = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sf5_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.RealSource.request.<anonymous>' call
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.tf5_1.j().b1(byteCount) < 0) {
      if (this.rf5_1.nf4(this.tf5_1, new Long(8192, 0)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).lf4 = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    if (this.tf5_1.j().equals(new Long(0, 0))) {
      var read = this.rf5_1.nf4(this.tf5_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    // Inline function 'kotlinx.io.minOf' call
    var a = endIndex - startIndex | 0;
    var b = this.tf5_1.j();
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = toLong(a);
    var toRead = (a_0.b1(b) <= 0 ? a_0 : b).g1();
    return this.tf5_1.lf4(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).pf4 = function (sink, byteCount) {
    try {
      this.pf3(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.of4(this.tf5_1, this.tf5_1.j());
        throw e;
      } else {
        throw $p;
      }
    }
    this.tf5_1.pf4(sink, byteCount);
  };
  protoOf(RealSource).qf4 = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!this.rf5_1.nf4(this.tf5_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
      var emitByteCount = this.tf5_1.jf4();
      if (emitByteCount.b1(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.a3(emitByteCount);
        sink.of4(this.tf5_1, emitByteCount);
      }
    }
    if (this.tf5_1.j().b1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.a3(this.tf5_1.j());
      sink.of4(this.tf5_1, this.tf5_1.j());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).cf4 = function () {
    this.pf3(new Long(2, 0));
    return this.tf5_1.cf4();
  };
  protoOf(RealSource).s2v = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sf5_1) {
      // Inline function 'kotlinx.io.RealSource.checkNotClosed.<anonymous>' call
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).l4 = function () {
    if (this.sf5_1)
      return Unit_instance;
    this.sf5_1 = true;
    this.rf5_1.l4();
    this.tf5_1.i2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.rf5_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.sf3_1 = new Int8Array(8192);
    $this.wf3_1 = true;
    $this.vf3_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.sf3_1 = data;
    $this.tf3_1 = pos;
    $this.uf3_1 = limit;
    $this.vf3_1 = shareToken;
    $this.wf3_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.uf5_1 = 8192;
    this.vf5_1 = 1024;
  }
  protoOf(Companion).wf5 = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).zf4 = function () {
    var tmp1_safe_receiver = this.vf3_1;
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xf5();
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Segment).gf4 = function () {
    var tmp0_elvis_lhs = this.vf3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.yf5();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
      this.vf3_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.tf3_1;
    var tmp_1 = this.uf3_1;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.io.Segment.sharedCopy.<anonymous>' call
    t.zf5();
    return Segment_init_$Create$_0(this.sf3_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).cf5 = function () {
    var result = this.xf3_1;
    if (!(this.yf3_1 == null)) {
      ensureNotNull(this.yf3_1).xf3_1 = this.xf3_1;
    }
    if (!(this.xf3_1 == null)) {
      ensureNotNull(this.xf3_1).yf3_1 = this.yf3_1;
    }
    this.xf3_1 = null;
    this.yf3_1 = null;
    return result;
  };
  protoOf(Segment).hf4 = function (segment) {
    segment.yf3_1 = this;
    segment.xf3_1 = this.xf3_1;
    if (!(this.xf3_1 == null)) {
      ensureNotNull(this.xf3_1).yf3_1 = segment;
    }
    this.xf3_1 = segment;
    return segment;
  };
  protoOf(Segment).af5 = function (byteCount) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(byteCount > 0 && byteCount <= (this.uf3_1 - this.tf3_1 | 0))) {
      // Inline function 'kotlinx.io.Segment.split.<anonymous>' call
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.gf4();
    } else {
      prefix = SegmentPool_instance.uf4();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.sf3_1;
      var destination = prefix.sf3_1;
      var startIndex = this.tf3_1;
      var endIndex = this.tf3_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
    }
    prefix.uf3_1 = prefix.tf3_1 + byteCount | 0;
    this.tf3_1 = this.tf3_1 + byteCount | 0;
    if (!(this.yf3_1 == null)) {
      ensureNotNull(this.yf3_1).hf4(prefix);
    } else {
      prefix.xf3_1 = this;
      this.yf3_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).if4 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.yf3_1 == null)) {
      // Inline function 'kotlinx.io.Segment.compact.<anonymous>' call
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.yf3_1).wf3_1)
      return this;
    var byteCount = this.uf3_1 - this.tf3_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.yf3_1).uf3_1 | 0) + (ensureNotNull(this.yf3_1).zf4() ? 0 : ensureNotNull(this.yf3_1).tf3_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.yf3_1;
    this.bf5(ensureNotNull(predecessor), byteCount);
    var successor = this.cf5();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(successor == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    SegmentPool_instance.jf5(this);
    return predecessor;
  };
  protoOf(Segment).ff5 = function (byte) {
    var _unary__edvuaz = this.uf3_1;
    this.uf3_1 = _unary__edvuaz + 1 | 0;
    this.sf3_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).hf5 = function (short) {
    var data = this.sf3_1;
    var limit = this.uf3_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.uf3_1 = limit;
  };
  protoOf(Segment).bf4 = function () {
    var _unary__edvuaz = this.tf3_1;
    this.tf3_1 = _unary__edvuaz + 1 | 0;
    return this.sf3_1[_unary__edvuaz];
  };
  protoOf(Segment).df4 = function () {
    var data = this.sf3_1;
    var pos = this.tf3_1;
    // Inline function 'kotlinx.io.and' call
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.tf3_1 = pos;
    return s;
  };
  protoOf(Segment).bf5 = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!sink.wf3_1) {
      // Inline function 'kotlinx.io.Segment.writeTo.<anonymous>' call
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.uf3_1 + byteCount | 0) > 8192) {
      if (sink.zf4())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.uf3_1 + byteCount | 0) - sink.tf3_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = sink.sf3_1;
      var destination = sink.sf3_1;
      var startIndex = sink.tf3_1;
      var endIndex = sink.uf3_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, 0, startIndex, endIndex);
      sink.uf3_1 = sink.uf3_1 - sink.tf3_1 | 0;
      sink.tf3_1 = 0;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = this.sf3_1;
    var destination_0 = sink.sf3_1;
    var destinationOffset = sink.uf3_1;
    var startIndex_0 = this.tf3_1;
    var endIndex_0 = this.tf3_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, destination_0, destinationOffset, startIndex_0, endIndex_0);
    sink.uf3_1 = sink.uf3_1 + byteCount | 0;
    this.tf3_1 = this.tf3_1 + byteCount | 0;
  };
  protoOf(Segment).mf4 = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.sf3_1;
    var startIndex = this.tf3_1;
    var endIndex = this.tf3_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, startIndex, endIndex);
    this.tf3_1 = this.tf3_1 + len | 0;
  };
  protoOf(Segment).xf4 = function (src, srcStartOffset, srcEndOffset) {
    // Inline function 'kotlin.collections.copyInto' call
    var destination = this.sf3_1;
    var destinationOffset = this.uf3_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, destinationOffset, srcStartOffset, srcEndOffset);
    this.uf3_1 = this.uf3_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).zf3 = function () {
    return this.uf3_1 - this.tf3_1 | 0;
  };
  protoOf(Segment).wf4 = function () {
    return this.sf3_1.length - this.uf3_1 | 0;
  };
  protoOf(Segment).af6 = function (readOnly) {
    return this.sf3_1;
  };
  protoOf(Segment).bf6 = function (index) {
    return this.sf3_1[this.tf3_1 + index | 0];
  };
  protoOf(Segment).cf6 = function (index, value) {
    this.sf3_1[this.uf3_1 + index | 0] = value;
  };
  protoOf(Segment).df6 = function (index, b0, b1) {
    var d = this.sf3_1;
    var l = this.uf3_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).ef6 = function (index, b0, b1, b2) {
    var d = this.sf3_1;
    var l = this.uf3_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).ff6 = function (index, b0, b1, b2, b3) {
    var d = this.sf3_1;
    var l = this.uf3_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.tf3_1 = 0;
    this.uf3_1 = 0;
    this.vf3_1 = null;
    this.wf3_1 = false;
    this.xf3_1 = null;
    this.yf3_1 = null;
  }
  function SegmentCopyTracker() {
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.zf3() === 0;
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).xf5 = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).zf5 = function () {
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
      while (_this__u8e3s4.nf3().j().b1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.qf3(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        fetchSize = fetchSize.c3(toLong(2));
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_this__u8e3s4.nf3().j().b1(new Long(2147483647, 0)) < 0)) {
        // Inline function 'kotlinx.io.readByteArrayImpl.<anonymous>' call
        var message = "Can't create an array of size " + _this__u8e3s4.nf3().j().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = _this__u8e3s4.nf3().j().g1();
    } else {
      _this__u8e3s4.pf3(toLong(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.nf3(), array);
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
      var bytesRead = _this__u8e3s4.lf4(sink, offset, endIndex);
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
    if (!(byteCount_0.b1(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.io.checkByteCount.<anonymous>' call
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function readString(_this__u8e3s4) {
    _this__u8e3s4.qf3(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.nf3(), _this__u8e3s4.nf3().j());
  }
  function readString_0(_this__u8e3s4, byteCount) {
    _this__u8e3s4.pf3(byteCount);
    return commonReadUtf8(_this__u8e3s4.nf3(), byteCount);
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount.equals(new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.kf3_1;
    while (!(curr == null)) {
      // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>' call
      get_SegmentReadContextImpl();
      if (toLong(curr.zf3()).b1(byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        // Inline function 'kotlinx.io.commonReadUtf8.<anonymous>.<anonymous>' call
        var data = curr.af6(true);
        var pos = curr.tf3_1;
        // Inline function 'kotlin.math.min' call
        var a = curr.uf3_1;
        var b = pos + byteCount.g1() | 0;
        var tmp$ret$0 = Math.min(a, b);
        result = commonToUtf8String(data, pos, tmp$ret$0);
        _this__u8e3s4.kf4(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.g1()));
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
    var this_0 = _this__u8e3s4.nf3();
    var i = startIndex;
    while (i < endIndex) {
      // Inline function 'kotlin.code' call
      var p0 = i;
      var this_1 = charSequenceGet(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.rf4(1);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.wf4() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.jf6(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            // Inline function 'kotlin.code' call
            var p0_0 = i;
            var this_2 = charSequenceGet(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.jf6(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.uf3_1 = tail.uf3_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.wf4() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.wf4();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.uf3_1 = tail.uf3_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_0.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.kf5();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.rf4(2);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().if6(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.uf3_1 = tail_0.uf3_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_1.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.wf4() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.wf4();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.uf3_1 = tail_0.uf3_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_2.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.kf5();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.rf4(3);
          // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
          get_SegmentWriteContextImpl().hf6(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.uf3_1 = tail_1.uf3_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_3.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.wf4() : false)) {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.wf4();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.uf3_1 = tail_1.uf3_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_4.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.kf5();
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
          this_0.ef5(63);
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.rf4(4);
            // Inline function 'kotlinx.io.commonWriteUtf8.<anonymous>' call
            get_SegmentWriteContextImpl().gf6(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.uf3_1 = tail_2.uf3_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_6.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.wf4() : false)) {
              // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail.<anonymous>' call
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.wf4();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.uf3_1 = tail_2.uf3_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_7.mf3_1 = this_0.mf3_1.a3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.kf5();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.ef4();
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
  protoOf(SegmentReadContextImpl$1).if5 = function (segment, offset) {
    return segment.bf6(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).jf6 = function (segment, offset, value) {
    segment.cf6(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).if6 = function (segment, offset, b0, b1) {
    segment.df6(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).hf6 = function (segment, offset, b0, b1, b2) {
    segment.ef6(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).gf6 = function (segment, offset, b0, b1, b2, b3) {
    segment.ff6(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).if5 = function (segment, offset) {
    return get_SegmentReadContextImpl().if5(segment, offset);
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
    this.sf4_1 = 0;
    this.tf4_1 = 0;
  }
  protoOf(SegmentPool).uf4 = function () {
    return Companion_instance.wf5();
  };
  protoOf(SegmentPool).jf5 = function (segment) {
  };
  protoOf(SegmentPool).yf5 = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).yf4 = write$default;
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
