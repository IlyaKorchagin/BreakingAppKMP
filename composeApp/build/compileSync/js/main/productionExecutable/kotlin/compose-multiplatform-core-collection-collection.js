(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    globalThis['compose-multiplatform-core-collection-collection'] = factory(typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var toRawBits = kotlin_kotlin.$_$.bm;
  var toLong = kotlin_kotlin.$_$.hf;
  var Long = kotlin_kotlin.$_$.hk;
  var protoOf = kotlin_kotlin.$_$.ff;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var countTrailingZeroBits = kotlin_kotlin.$_$.hl;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var longArray = kotlin_kotlin.$_$.we;
  var fill = kotlin_kotlin.$_$.s8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s4;
  var ulongCompare = kotlin_kotlin.$_$.fm;
  var get_lastIndex = kotlin_kotlin.$_$.q9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var until = kotlin_kotlin.$_$.ig;
  var arrayCopy = kotlin_kotlin.$_$.h7;
  var copyOf = kotlin_kotlin.$_$.j8;
  var sort = kotlin_kotlin.$_$.jb;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var hashCode = kotlin_kotlin.$_$.xd;
  var equals = kotlin_kotlin.$_$.od;
  var fill_0 = kotlin_kotlin.$_$.t8;
  var toString = kotlin_kotlin.$_$.cm;
  var copyOf_0 = kotlin_kotlin.$_$.i8;
  var longArrayOf = kotlin_kotlin.$_$.ve;
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var SequenceScope = kotlin_kotlin.$_$.pg;
  var numberRangeToNumber = kotlin_kotlin.$_$.xe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var iterator = kotlin_kotlin.$_$.wg;
  var KtSet = kotlin_kotlin.$_$.f7;
  var KtMutableSet = kotlin_kotlin.$_$.d7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.x2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var copyOf_1 = kotlin_kotlin.$_$.c8;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FloatSet, 'FloatSet');
  initMetadataForClass(MutableFloatSet, 'MutableFloatSet', MutableFloatSet, FloatSet);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(LongObjectMap, 'LongObjectMap');
  initMetadataForClass(MutableLongObjectMap, 'MutableLongObjectMap', MutableLongObjectMap, LongObjectMap);
  initMetadataForClass(LongSet, 'LongSet');
  initMetadataForClass(MutableLongSet, 'MutableLongSet', MutableLongSet, LongSet);
  initMetadataForClass(ObjectFloatMap, 'ObjectFloatMap');
  initMetadataForClass(MutableObjectFloatMap, 'MutableObjectFloatMap', MutableObjectFloatMap, ObjectFloatMap);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ObjectLongMap, 'ObjectLongMap');
  initMetadataForClass(MutableObjectLongMap, 'MutableObjectLongMap', MutableObjectLongMap, ObjectLongMap);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForLambda(ScatterSet$SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForLambda(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableScatterSet$MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtMutableSet]);
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForClass(valueIterator$1);
  initMetadataForClass(LongSparseArray, 'LongSparseArray', LongSparseArray);
  initMetadataForClass(SparseArrayCompat, 'SparseArrayCompat', SparseArrayCompat);
  //endregion
  function _FloatFloatPair___init__impl__2q1dd3(packedValue) {
    return packedValue;
  }
  function _FloatFloatPair___get_packedValue__impl__5lczxp($this) {
    return $this;
  }
  function _FloatFloatPair___init__impl__2q1dd3_0(first, second) {
    // Inline function 'androidx.collection.packFloats' call
    var v1 = toLong(toRawBits(first));
    var v2 = toLong(toRawBits(second));
    var tmp$ret$0 = v1.o3(32).s3(v2.r3(new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  var EmptyFloatSet;
  function get_EmptyFloatArray() {
    _init_properties_FloatSet_kt__ctp8je();
    return EmptyFloatArray;
  }
  var EmptyFloatArray;
  function FloatSet() {
    this.ru_1 = get_EmptyGroup();
    this.su_1 = get_EmptyFloatArray();
    this.tu_1 = 0;
    this.uu_1 = 0;
  }
  protoOf(FloatSet).vu = function () {
    return this.tu_1;
  };
  protoOf(FloatSet).wl = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(getNumberHashCode(element), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.tu_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.ru_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.su_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(FloatSet).wu = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.FloatSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.su_1;
      $l$block_0: {
        // Inline function 'androidx.collection.FloatSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.ru_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.r3(this_1.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.ld(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.p3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(FloatSet).xu = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.wu(separator, prefix, postfix, limit, truncated) : $super.wu.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(FloatSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.su_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ru_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.hashCode.<anonymous>' call
                  var element = k[index];
                  hash = hash + getNumberHashCode(element) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(FloatSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof FloatSet)) {
      return false;
    }
    if (!(other.uu_1 === this.uu_1)) {
      return false;
    }
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.su_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ru_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.wl(element)) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(FloatSet).toString = function () {
    return this.xu(VOID, '[', ']');
  };
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.tu_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.su_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableFloatSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ru_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.ru_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.cv_1 = loadedCapacity($this.vu()) - $this.uu_1 | 0;
  }
  function MutableFloatSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    FloatSet.call(this);
    this.cv_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableFloatSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  var properties_initialized_FloatSet_kt_ocjrs8;
  function _init_properties_FloatSet_kt__ctp8je() {
    if (!properties_initialized_FloatSet_kt_ocjrs8) {
      properties_initialized_FloatSet_kt_ocjrs8 = true;
      EmptyFloatSet = new MutableFloatSet(0);
      EmptyFloatArray = new Float32Array(0);
    }
  }
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.gv_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.ev_1 = new Int32Array(newCapacity);
    $this.fv_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.dv_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.dv_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.nv_1 = loadedCapacity($this.vu()) - $this.hv_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.gv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.dv_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.ev_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.nv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.dv_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.hv_1 = $this.hv_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.nv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.dv_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.nv_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.dv_1;
    var capacity = $this.gv_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.gv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.dv_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.nv_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).pv = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.ev_1[index] = key;
    this.fv_1[index] = value;
  };
  protoOf(MutableIntIntMap).ov = function () {
    var tmp;
    if (this.gv_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.hv_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.gv_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.gv_1));
    }
  };
  protoOf(MutableIntIntMap).rv = function () {
    var metadata = this.dv_1;
    var capacity = this.gv_1;
    var keys = this.ev_1;
    var values = this.fv_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntIntMap).qv = function (newCapacity) {
    var previousMetadata = this.dv_1;
    var previousKeys = this.ev_1;
    var previousValues = this.fv_1;
    var previousCapacity = this.gv_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.dv_1;
    var newKeys = this.ev_1;
    var newValues = this.fv_1;
    var capacity = this.gv_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.dv_1 = get_EmptyGroup();
    this.ev_1 = get_EmptyIntArray();
    this.fv_1 = get_EmptyIntArray();
    this.gv_1 = 0;
    this.hv_1 = 0;
  }
  protoOf(IntIntMap).vu = function () {
    return this.gv_1;
  };
  protoOf(IntIntMap).p = function () {
    return this.hv_1;
  };
  protoOf(IntIntMap).j = function () {
    return this.hv_1 === 0;
  };
  protoOf(IntIntMap).u = function (key) {
    var index = this.tv(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.fv_1[index];
  };
  protoOf(IntIntMap).sv = function (key) {
    return this.tv(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ev_1;
    var v = this.fv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.dv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ev_1;
    var v = this.fv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.dv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  var key = k[index];
                  if (!(v[index] === other.u(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.ev_1;
    var v = this.fv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.dv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var key = k[index];
                  var value = v[index];
                  s.jd(key);
                  s.v8('=');
                  s.jd(value);
                  i = i + 1 | 0;
                  if (i < this.hv_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).tv = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.gv_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.dv_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.ev_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.uv_1 = tmp_0;
    this.vv_1 = 0;
  }
  protoOf(IntList).u = function (index) {
    if (!(0 <= index ? index < this.vv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.uv_1[index];
  };
  protoOf(IntList).wu = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.IntList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.uv_1;
      var inductionVariable = 0;
      var last = this.vv_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.IntList.joinToString.<anonymous>.<anonymous>' call
          var element = content[i];
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          this_0.jd(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).wv = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.wu(separator, prefix, postfix, limit, truncated) : $super.wu.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.uv_1;
    var inductionVariable = 0;
    var last = this.vv_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.IntList.hashCode.<anonymous>' call
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.vv_1 === this.vv_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.uv_1;
    var otherContent = other.uv_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.vv_1);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.wv(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).zv = function (element) {
    this.c6(this.vv_1 + 1 | 0);
    this.uv_1[this.vv_1] = element;
    this.vv_1 = this.vv_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).aw = function (index, element) {
    if (!(0 <= index ? index <= this.vv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    this.c6(this.vv_1 + 1 | 0);
    var content = this.uv_1;
    if (!(index === this.vv_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      var endIndex = this.vv_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, destinationOffset, index, endIndex);
    }
    content[index] = element;
    this.vv_1 = this.vv_1 + 1 | 0;
  };
  protoOf(MutableIntList).c6 = function (capacity) {
    var oldContent = this.uv_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.uv_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).x2 = function (index) {
    if (!(0 <= index ? index < this.vv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.uv_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.vv_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.vv_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, startIndex, endIndex);
    }
    this.vv_1 = this.vv_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).bw = function (index, element) {
    if (!(0 <= index ? index < this.vv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.uv_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  protoOf(MutableIntList).cw = function () {
    if (this.vv_1 === 0)
      return Unit_instance;
    sort(this.uv_1, 0, this.vv_1);
  };
  var EmptyIntObjectMap;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.gw_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.ew_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.fw_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.dw_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.dw_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.nw_1 = loadedCapacity($this.vu()) - $this.hw_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.gw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.dw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.ew_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.nw_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.dw_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.hw_1 = $this.hw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.nw_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.dw_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.nw_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.dw_1;
    var capacity = $this.gw_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.gw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.dw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.nw_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).ow = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.ew_1[index] = key;
    this.fw_1[index] = value;
  };
  protoOf(MutableIntObjectMap).pw = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.dw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ew_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.qw(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).qw = function (index) {
    this.hw_1 = this.hw_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.dw_1;
    var capacity = this.gw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    var oldValue = this.fw_1[index];
    this.fw_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).ov = function () {
    var tmp;
    if (this.gw_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.hw_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.gw_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.gw_1));
    }
  };
  protoOf(MutableIntObjectMap).rv = function () {
    var metadata = this.dw_1;
    var capacity = this.gw_1;
    var keys = this.ew_1;
    var values = this.fw_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntObjectMap).qv = function (newCapacity) {
    var previousMetadata = this.dw_1;
    var previousKeys = this.ew_1;
    var previousValues = this.fw_1;
    var previousCapacity = this.gw_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.dw_1;
    var newKeys = this.ew_1;
    var newValues = this.fw_1;
    var capacity = this.gw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntObjectMap() {
    this.dw_1 = get_EmptyGroup();
    this.ew_1 = get_EmptyIntArray();
    this.fw_1 = get_EMPTY_OBJECTS();
    this.gw_1 = 0;
    this.hw_1 = 0;
  }
  protoOf(IntObjectMap).vu = function () {
    return this.gw_1;
  };
  protoOf(IntObjectMap).p = function () {
    return this.hw_1;
  };
  protoOf(IntObjectMap).j = function () {
    return this.hw_1 === 0;
  };
  protoOf(IntObjectMap).u = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.dw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ew_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.fw_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).sv = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.dw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ew_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.ew_1;
    var v = this.fw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.dw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.hashCode.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var tmp_0 = hash;
                  var tmp_1 = key;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.ew_1;
    var v = this.fw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.dw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.u(key) == null) || !other.sv(key)) {
                      return false;
                    }
                  } else if (!equals(value, other.u(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.ew_1;
    var v = this.fw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.dw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.jd(key);
                  s.v8('=');
                  s.u8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.hw_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableIntObjectMapOf(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.mutableIntObjectMapOf.<anonymous>' call
    this_0.ow(key1, value1);
    this_0.ow(key2, value2);
    this_0.ow(key3, value3);
    return this_0;
  }
  function mutableIntObjectMapOf_0() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return new MutableIntObjectMap();
  }
  var properties_initialized_IntObjectMap_kt_hqy7tc;
  function _init_properties_IntObjectMap_kt__bzh4pa() {
    if (!properties_initialized_IntObjectMap_kt_hqy7tc) {
      properties_initialized_IntObjectMap_kt_hqy7tc = true;
      EmptyIntObjectMap = new MutableIntObjectMap(0);
    }
  }
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.rw_1 = get_EmptyGroup();
    this.sw_1 = get_EmptyIntArray();
    this.tw_1 = 0;
    this.uw_1 = 0;
  }
  protoOf(IntSet).vu = function () {
    return this.tw_1;
  };
  protoOf(IntSet).bl = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.tw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.rw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.sw_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).wu = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.sw_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.rw_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.r3(this_1.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.jd(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.p3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).vw = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.wu(separator, prefix, postfix, limit, truncated) : $super.wu.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.sw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.rw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.uw_1 === this.uw_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.sw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.rw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.bl(element)) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.vw(VOID, '[', ']');
  };
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.tw_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.sw_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.rw_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.rw_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.ax_1 = loadedCapacity($this.vu()) - $this.uw_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.tw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.rw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.sw_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.ax_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.rw_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.uw_1 = $this.uw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ax_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.rw_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ax_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.rw_1;
    var capacity = $this.tw_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.tw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.rw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.ax_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).zv = function (element) {
    var oldSize = this.uw_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.sw_1[index] = element;
    return !(this.uw_1 === oldSize);
  };
  protoOf(MutableIntSet).ov = function () {
    var tmp;
    if (this.tw_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.uw_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.tw_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.tw_1));
    }
  };
  protoOf(MutableIntSet).rv = function () {
    var metadata = this.rw_1;
    var capacity = this.tw_1;
    var elements = this.sw_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableIntSet).qv = function (newCapacity) {
    var previousMetadata = this.rw_1;
    var previousElements = this.sw_1;
    var previousCapacity = this.tw_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.rw_1;
    var newElements = this.sw_1;
    var capacity = this.tw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ex_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.cx_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.dx_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableLongObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.bx_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.bx_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.lx_1 = loadedCapacity($this.vu()) - $this.fx_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ex_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.bx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.cx_1[index].equals(key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.lx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.bx_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.fx_1 = $this.fx_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.lx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.bx_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.lx_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.bx_1;
    var capacity = $this.ex_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.ex_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.bx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongObjectMap.call(this);
    this.lx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongObjectMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).mx = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.cx_1[index] = key;
    this.dx_1[index] = value;
  };
  protoOf(MutableLongObjectMap).n2 = function () {
    this.fx_1 = 0;
    if (!(this.bx_1 === get_EmptyGroup())) {
      fill(this.bx_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.bx_1;
      var offset = this.ex_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    }
    fill_0(this.dx_1, null, 0, this.ex_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableLongObjectMap).ov = function () {
    var tmp;
    if (this.ex_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.fx_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.ex_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.ex_1));
    }
  };
  protoOf(MutableLongObjectMap).rv = function () {
    var metadata = this.bx_1;
    var capacity = this.ex_1;
    var keys = this.cx_1;
    var values = this.dx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = new Long(0, 0);
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableLongObjectMap).qv = function (newCapacity) {
    var previousMetadata = this.bx_1;
    var previousKeys = this.cx_1;
    var previousValues = this.dx_1;
    var previousCapacity = this.ex_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.bx_1;
    var newKeys = this.cx_1;
    var newValues = this.dx_1;
    var capacity = this.ex_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$3);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function LongObjectMap() {
    this.bx_1 = get_EmptyGroup();
    this.cx_1 = get_EmptyLongArray();
    this.dx_1 = get_EMPTY_OBJECTS();
    this.ex_1 = 0;
    this.fx_1 = 0;
  }
  protoOf(LongObjectMap).vu = function () {
    return this.ex_1;
  };
  protoOf(LongObjectMap).p = function () {
    return this.fx_1;
  };
  protoOf(LongObjectMap).j = function () {
    return this.fx_1 === 0;
  };
  protoOf(LongObjectMap).nx = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ex_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.bx_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.cx_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.dx_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(LongObjectMap).ox = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ex_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.bx_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.cx_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.cx_1;
    var v = this.dx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.bx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongObjectMap.hashCode.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  var tmp_1 = key.hashCode();
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = value == null ? null : hashCode(value);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(LongObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongObjectMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.cx_1;
    var v = this.dx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.bx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongObjectMap.equals.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.nx(key) == null) || !other.ox(key)) {
                      return false;
                    }
                  } else if (!equals(value, other.nx(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(LongObjectMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.cx_1;
    var v = this.dx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.bx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongObjectMap.toString.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.kd(key);
                  s.v8('=');
                  s.u8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.fx_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function LongSet() {
    this.px_1 = get_EmptyGroup();
    this.qx_1 = get_EmptyLongArray();
    this.rx_1 = 0;
    this.sx_1 = 0;
  }
  protoOf(LongSet).vu = function () {
    return this.rx_1;
  };
  protoOf(LongSet).tx = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.px_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.qx_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongSet).wu = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.LongSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.qx_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.px_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.r3(this_1.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.kd(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.p3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongSet).ux = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.wu(separator, prefix, postfix, limit, truncated) : $super.wu.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.px_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.hashCode.<anonymous>' call
                  hash = hash + k[index].hashCode() | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(LongSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongSet)) {
      return false;
    }
    if (!(other.sx_1 === this.sx_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.px_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.tx(element)) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(LongSet).toString = function () {
    return this.ux(VOID, '[', ']');
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.rx_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    $this.qx_1 = longArray(newCapacity);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableLongSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.px_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.px_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.zx_1 = loadedCapacity($this.vu()) - $this.sx_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.sx_1 = $this.sx_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.px_1;
    var capacity = $this.rx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
  }
  function findAbsoluteInsertIndex_2($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.rx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.px_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$4);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.qx_1[index].equals(element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.zx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.px_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.sx_1 = $this.sx_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.zx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.px_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.zx_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.px_1;
    var capacity = $this.rx_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.rx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.px_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongSet.call(this);
    this.zx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).ay = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.qx_1[index] = element;
  };
  protoOf(MutableLongSet).by = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.px_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$4);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.qx_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  protoOf(MutableLongSet).ov = function () {
    var tmp;
    if (this.rx_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.sx_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.rx_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.rx_1));
    }
  };
  protoOf(MutableLongSet).rv = function () {
    var metadata = this.px_1;
    var capacity = this.rx_1;
    var elements = this.qx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = new Long(0, 0);
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableLongSet).qv = function (newCapacity) {
    var previousMetadata = this.px_1;
    var previousElements = this.qx_1;
    var previousCapacity = this.rx_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.px_1;
    var newElements = this.qx_1;
    var capacity = this.rx_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$3);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  var properties_initialized_LongSet_kt_r3x9iu;
  function _init_properties_LongSet_kt__wt9fxo() {
    if (!properties_initialized_LongSet_kt_r3x9iu) {
      properties_initialized_LongSet_kt_r3x9iu = true;
      EmptyLongSet = new MutableLongSet(0);
      EmptyLongArray = longArray(0);
    }
  }
  function get_DELETED() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return DELETED;
  }
  var DELETED;
  function _get_DELETED_$accessor$gkqe1m_u3mq5h() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return get_DELETED();
  }
  var properties_initialized_LongSparseArray_kt_xmlmcz;
  function _init_properties_LongSparseArray_kt__ucg8tx() {
    if (!properties_initialized_LongSparseArray_kt_xmlmcz) {
      properties_initialized_LongSparseArray_kt_xmlmcz = true;
      DELETED = new Object();
    }
  }
  function initializeStorage_5($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.fy_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.dy_1 = fillArrayVal(Array(newCapacity), null);
    $this.ey_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata_5($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableObjectFloatMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.cy_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.cy_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.my_1 = loadedCapacity($this.vu()) - $this.gy_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.fy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.cy_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.dy_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.my_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.cy_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.gy_1 = $this.gy_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.my_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.cy_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.my_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.cy_1;
    var capacity = $this.fy_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.fy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.cy_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectFloatMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectFloatMap.call(this);
    this.my_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectFloatMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectFloatMap).ny = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.dy_1[index] = key;
    this.ey_1[index] = value;
  };
  protoOf(MutableObjectFloatMap).oy = function (from) {
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = from.dy_1;
    var v = from.ey_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = from.cy_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.MutableObjectFloatMap.putAll.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  this.ny(key, value);
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(MutableObjectFloatMap).n2 = function () {
    this.gy_1 = 0;
    if (!(this.cy_1 === get_EmptyGroup())) {
      fill(this.cy_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.cy_1;
      var offset = this.fy_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    }
    fill_0(this.dy_1, null, 0, this.fy_1);
    initializeGrowth_5(this);
  };
  protoOf(MutableObjectFloatMap).ov = function () {
    var tmp;
    if (this.fy_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.gy_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.fy_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.fy_1));
    }
  };
  protoOf(MutableObjectFloatMap).rv = function () {
    var metadata = this.cy_1;
    var capacity = this.fy_1;
    var keys = this.dy_1;
    var values = this.ey_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$1, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0.0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_5(this);
  };
  protoOf(MutableObjectFloatMap).qv = function (newCapacity) {
    var previousMetadata = this.cy_1;
    var previousKeys = this.dy_1;
    var previousValues = this.ey_1;
    var previousCapacity = this.fy_1;
    initializeStorage_5(this, newCapacity);
    var newMetadata = this.cy_1;
    var newKeys = this.dy_1;
    var newValues = this.ey_1;
    var capacity = this.fy_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ObjectFloatMap() {
    this.cy_1 = get_EmptyGroup();
    this.dy_1 = get_EMPTY_OBJECTS();
    this.ey_1 = get_EmptyFloatArray();
    this.fy_1 = 0;
    this.gy_1 = 0;
  }
  protoOf(ObjectFloatMap).vu = function () {
    return this.fy_1;
  };
  protoOf(ObjectFloatMap).p = function () {
    return this.gy_1;
  };
  protoOf(ObjectFloatMap).j = function () {
    return this.gy_1 === 0;
  };
  protoOf(ObjectFloatMap).s2 = function (key) {
    var index = this.qy(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.ey_1[index];
  };
  protoOf(ObjectFloatMap).py = function (key, defaultValue) {
    var index = this.qy(key);
    if (index >= 0) {
      return this.ey_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectFloatMap).q2 = function (key) {
    return this.qy(key) >= 0;
  };
  protoOf(ObjectFloatMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.dy_1;
    var v = this.ey_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.cy_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectFloatMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ getNumberHashCode(value)) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectFloatMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectFloatMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    var o = other instanceof ObjectFloatMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.dy_1;
    var v = this.ey_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.cy_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectFloatMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.s2(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectFloatMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.dy_1;
    var v = this.ey_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.cy_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectFloatMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.u8(key === this ? '(this)' : key);
                  s.v8('=');
                  s.ld(value);
                  i = i + 1 | 0;
                  if (i < this.gy_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectFloatMap).qy = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.fy_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.cy_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.dy_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return EmptyObjectIntMap;
  }
  var EmptyObjectIntMap;
  function initializeStorage_6($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.uy_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.sy_1 = fillArrayVal(Array(newCapacity), null);
    $this.ty_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_6($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ry_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.ry_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.bz_1 = loadedCapacity($this.vu()) - $this.vy_1 | 0;
  }
  function findIndex_0($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.uy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ry_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.sy_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5($this, hash1);
    var tmp_0;
    if ($this.bz_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ry_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_5($this, hash1);
    }
    $this.vy_1 = $this.vy_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.bz_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ry_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.bz_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.ry_1;
    var capacity = $this.uy_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.uy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ry_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.bz_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).cz = function (key, value) {
    var index = findIndex_0(this, key);
    if (index < 0)
      index = ~index;
    this.sy_1[index] = key;
    this.ty_1[index] = value;
  };
  protoOf(MutableObjectIntMap).dz = function (key, value, default_0) {
    var index = findIndex_0(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.ty_1[index];
    }
    this.sy_1[index] = key;
    this.ty_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).ez = function (index) {
    this.vy_1 = this.vy_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.ry_1;
    var capacity = this.uy_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.sy_1[index] = null;
  };
  protoOf(MutableObjectIntMap).ov = function () {
    var tmp;
    if (this.uy_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.vy_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.uy_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.uy_1));
    }
  };
  protoOf(MutableObjectIntMap).rv = function () {
    var metadata = this.ry_1;
    var capacity = this.uy_1;
    var keys = this.sy_1;
    var values = this.ty_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$1, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_5(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_6(this);
  };
  protoOf(MutableObjectIntMap).qv = function (newCapacity) {
    var previousMetadata = this.ry_1;
    var previousKeys = this.sy_1;
    var previousValues = this.ty_1;
    var previousCapacity = this.uy_1;
    initializeStorage_6(this, newCapacity);
    var newMetadata = this.ry_1;
    var newKeys = this.sy_1;
    var newValues = this.ty_1;
    var capacity = this.uy_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_5(this, tmp$ret$4);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ObjectIntMap() {
    this.ry_1 = get_EmptyGroup();
    this.sy_1 = get_EMPTY_OBJECTS();
    this.ty_1 = get_EmptyIntArray();
    this.uy_1 = 0;
    this.vy_1 = 0;
  }
  protoOf(ObjectIntMap).vu = function () {
    return this.uy_1;
  };
  protoOf(ObjectIntMap).p = function () {
    return this.vy_1;
  };
  protoOf(ObjectIntMap).j = function () {
    return this.vy_1 === 0;
  };
  protoOf(ObjectIntMap).fz = function () {
    return !(this.vy_1 === 0);
  };
  protoOf(ObjectIntMap).s2 = function (key) {
    var index = this.qy(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.ty_1[index];
  };
  protoOf(ObjectIntMap).gz = function (key, defaultValue) {
    var index = this.qy(key);
    if (index >= 0) {
      return this.ty_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.sy_1;
    var v = this.ty_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ry_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.sy_1;
    var v = this.ty_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ry_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.s2(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.sy_1;
    var v = this.ty_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ry_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.u8(key === this ? '(this)' : key);
                  s.v8('=');
                  s.jd(value);
                  i = i + 1 | 0;
                  if (i < this.vy_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).qy = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.uy_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.ry_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.sy_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function mutableObjectIntMapOf() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return new MutableObjectIntMap();
  }
  function emptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    var tmp = get_EmptyObjectIntMap();
    return tmp instanceof ObjectIntMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ObjectIntMap_kt_ycqxma;
  function _init_properties_ObjectIntMap_kt__tjeyss() {
    if (!properties_initialized_ObjectIntMap_kt_ycqxma) {
      properties_initialized_ObjectIntMap_kt_ycqxma = true;
      EmptyObjectIntMap = new MutableObjectIntMap(0);
    }
  }
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = fillArrayVal(Array(initialCapacity), null);
    }
    tmp.hz_1 = tmp_0;
    this.iz_1 = 0;
  }
  protoOf(ObjectList).p = function () {
    return this.iz_1;
  };
  protoOf(ObjectList).v = function (element) {
    return this.x(element) >= 0;
  };
  protoOf(ObjectList).x = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.hz_1;
      var inductionVariable = 0;
      var last = this.iz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          var tmp = content[i];
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.hz_1;
      var inductionVariable_0 = 0;
      var last_0 = this.iz_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          var tmp_0 = content_0[i_0];
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).j = function () {
    return this.iz_1 === 0;
  };
  protoOf(ObjectList).fz = function () {
    return !(this.iz_1 === 0);
  };
  protoOf(ObjectList).jz = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.hz_1;
      var inductionVariable = 0;
      var last = this.iz_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>.<anonymous>' call
          var tmp = content[i];
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          if (transform == null) {
            this_0.u8(element);
          } else {
            this_0.f(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).kz = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.jz(separator, prefix, postfix, limit, truncated, transform) : $super.jz.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.hz_1;
    var inductionVariable = 0;
    var last = this.iz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.ObjectList.hashCode.<anonymous>' call
        var tmp = content[i];
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$0) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.iz_1 === this.iz_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.hz_1;
    var otherContent = other.hz_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.iz_1);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.kz(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.nz_1 = null;
  }
  protoOf(MutableObjectList).e = function (element) {
    this.c6(this.iz_1 + 1 | 0);
    this.hz_1[this.iz_1] = element;
    this.iz_1 = this.iz_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).n2 = function () {
    fill_0(this.hz_1, null, 0, this.iz_1);
    this.iz_1 = 0;
  };
  protoOf(MutableObjectList).c6 = function (capacity) {
    var oldContent = this.hz_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.hz_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableObjectList).t2 = function (element) {
    var index = this.x(element);
    if (index >= 0) {
      this.x2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).x2 = function (index) {
    if (!(0 <= index ? index < this.iz_1 : false)) {
      // Inline function 'androidx.collection.ObjectList.lastIndex' call
      var tmp$ret$0 = this.iz_1 - 1 | 0;
      throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    var content = this.hz_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.iz_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.iz_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.iz_1 = this.iz_1 - 1 | 0;
    content[this.iz_1] = null;
    return (element == null ? true : !(element == null)) ? element : THROW_CCE();
  };
  function mutableObjectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.e(element1);
    return list;
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = fillArrayVal(Array(0), null);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  var EmptyObjectLongMap;
  function initializeStorage_7($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.rz_1 = newCapacity;
    initializeMetadata_7($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.pz_1 = fillArrayVal(Array(newCapacity), null);
    $this.qz_1 = longArray(newCapacity);
  }
  function initializeMetadata_7($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableObjectLongMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.oz_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.oz_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_7($this);
  }
  function initializeGrowth_7($this) {
    $this.yz_1 = loadedCapacity($this.vu()) - $this.sz_1 | 0;
  }
  function MutableObjectLongMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectLongMap.call(this);
    this.yz_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectLongMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_7(this, unloadedCapacity(initialCapacity));
  }
  function ObjectLongMap() {
    this.oz_1 = get_EmptyGroup();
    this.pz_1 = get_EMPTY_OBJECTS();
    this.qz_1 = get_EmptyLongArray();
    this.rz_1 = 0;
    this.sz_1 = 0;
  }
  protoOf(ObjectLongMap).vu = function () {
    return this.rz_1;
  };
  protoOf(ObjectLongMap).p = function () {
    return this.sz_1;
  };
  protoOf(ObjectLongMap).j = function () {
    return this.sz_1 === 0;
  };
  protoOf(ObjectLongMap).s2 = function (key) {
    var index = this.qy(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.qz_1[index];
  };
  protoOf(ObjectLongMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.pz_1;
    var v = this.qz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectLongMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index].hashCode()) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ObjectLongMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectLongMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    var o = other instanceof ObjectLongMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.pz_1;
    var v = this.qz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectLongMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!v[index].equals(o.s2(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ObjectLongMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.pz_1;
    var v = this.qz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.oz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectLongMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.u8(key === this ? '(this)' : key);
                  s.v8('=');
                  s.kd(value);
                  i = i + 1 | 0;
                  if (i < this.sz_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectLongMap).qy = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.rz_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.oz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.pz_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function mutableObjectLongMapOf() {
    _init_properties_ObjectLongMap_kt__vrjyfj();
    return new MutableObjectLongMap();
  }
  var properties_initialized_ObjectLongMap_kt_gtq5v3;
  function _init_properties_ObjectLongMap_kt__vrjyfj() {
    if (!properties_initialized_ObjectLongMap_kt_gtq5v3) {
      properties_initialized_ObjectLongMap_kt_gtq5v3 = true;
      EmptyObjectLongMap = new MutableObjectLongMap(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_8($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.c10_1 = newCapacity;
    initializeMetadata_8($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_0.a10_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_2.b10_1 = tmp_3;
  }
  function initializeMetadata_8($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = this_0[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
      tmp_0 = this_0;
    }
    tmp.zz_1 = tmp_0;
    initializeGrowth_8($this);
  }
  function initializeGrowth_8($this) {
    $this.j10_1 = loadedCapacity($this.vu()) - $this.d10_1 | 0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.c10_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.zz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.j10_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_8(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).k10 = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.l10(key);
    var index_0 = index < 0 ? ~index : index;
    this.a10_1[index_0] = key;
    this.b10_1[index_0] = value;
  };
  protoOf(MutableScatterMap).l2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.c10_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.zz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$5);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.a10_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.qw(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).qw = function (index) {
    this.d10_1 = this.d10_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.zz_1;
    var capacity = this.c10_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.a10_1[index] = null;
    var oldValue = this.b10_1[index];
    this.b10_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).n2 = function () {
    this.d10_1 = 0;
    if (!(this.zz_1 === get_EmptyGroup())) {
      fill(this.zz_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.zz_1;
      var offset = this.c10_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    }
    fill_0(this.b10_1, null, 0, this.c10_1);
    fill_0(this.a10_1, null, 0, this.c10_1);
    initializeGrowth_8(this);
  };
  protoOf(MutableScatterMap).l10 = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.c10_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.zz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.a10_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6(this, hash1);
    var tmp_0;
    if (this.j10_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.zz_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.ov();
      index_0 = findFirstAvailableSlot_6(this, hash1);
    }
    this.d10_1 = this.d10_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.j10_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.zz_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.j10_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.zz_1;
    var capacity = this.c10_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).ov = function () {
    var tmp;
    if (this.c10_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.d10_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.c10_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.c10_1));
    }
  };
  protoOf(MutableScatterMap).rv = function () {
    var metadata = this.zz_1;
    var capacity = this.c10_1;
    var keys = this.a10_1;
    var values = this.b10_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$1, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_6(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_8(this);
  };
  protoOf(MutableScatterMap).qv = function (newCapacity) {
    var previousMetadata = this.zz_1;
    var previousKeys = this.a10_1;
    var previousValues = this.b10_1;
    var previousCapacity = this.c10_1;
    initializeStorage_8(this, newCapacity);
    var newMetadata = this.zz_1;
    var newKeys = this.a10_1;
    var newValues = this.b10_1;
    var capacity = this.c10_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_6(this, tmp$ret$4);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ScatterMap() {
    this.zz_1 = get_EmptyGroup();
    this.a10_1 = get_EMPTY_OBJECTS();
    this.b10_1 = get_EMPTY_OBJECTS();
    this.c10_1 = 0;
    this.d10_1 = 0;
  }
  protoOf(ScatterMap).vu = function () {
    return this.c10_1;
  };
  protoOf(ScatterMap).p = function () {
    return this.d10_1;
  };
  protoOf(ScatterMap).j = function () {
    return this.d10_1 === 0;
  };
  protoOf(ScatterMap).fz = function () {
    return !(this.d10_1 === 0);
  };
  protoOf(ScatterMap).s2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.c10_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.zz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$5);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.a10_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.b10_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).q2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.c10_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.zz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$5);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.a10_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.a10_1;
    var v = this.b10_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.zz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = key == null ? null : hashCode(key);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.a10_1;
    var v = this.b10_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.zz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.s2(key) == null) || !o.q2(key)) {
                      return false;
                    }
                  } else if (!equals(value, o.s2(key))) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.j()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().w8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.a10_1;
    var v = this.b10_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.zz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.u8(key === this ? '(this)' : key);
                  s.v8('=');
                  s.u8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.d10_1) {
                    s.w8(_Char___init__impl__6a9atx(44)).w8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.w8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.u10_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).l11 = function ($this$iterator, $completion) {
    var tmp = this.m11($this$iterator, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).ma = function (p1, $completion) {
    return this.l11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 11;
            var tmp_0 = this;
            tmp_0.w10_1 = this.u10_1;
            this.x10_1 = this.w10_1.o11_1;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.z10_1 = this.w10_1;
            this.a11_1 = this.z10_1.n11_1;
            this.b11_1 = this.a11_1.length - 2 | 0;
            this.c11_1 = numberRangeToNumber(0, this.b11_1).m();
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!this.c11_1.n()) {
              this.s9_1 = 9;
              continue $sm;
            }

            this.d11_1 = this.c11_1.o();
            this.e11_1 = this.a11_1[this.d11_1];
            var this_0 = this.e11_1;
            if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.f11_1 = 8 - (~(this.d11_1 - this.b11_1 | 0) >>> 31 | 0) | 0;
              this.g11_1 = until(0, this.f11_1).m();
              this.s9_1 = 3;
              continue $sm;
            } else {
              this.s9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.g11_1.n()) {
              this.s9_1 = 6;
              continue $sm;
            }

            this.h11_1 = this.g11_1.o();
            if (this.e11_1.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
              this.i11_1 = (this.d11_1 << 3) + this.h11_1 | 0;
              var tmp_2 = this;
              tmp_2.j11_1 = this.i11_1;
              var tmp_3 = this;
              var tmp_4 = this.x10_1[this.j11_1];
              tmp_3.k11_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.s9_1 = 4;
              suspendResult = this.v10_1.wh(this.k11_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 4:
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.e11_1 = this.e11_1.p3(8);
            this.s9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.f11_1 === 8)) {
              this.y10_1 = Unit_instance;
              this.s9_1 = 10;
              continue $sm;
            } else {
              this.s9_1 = 7;
              continue $sm;
            }

          case 7:
            this.s9_1 = 8;
            continue $sm;
          case 8:
            this.s9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 11) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).m11 = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.u10_1, completion);
    i.v10_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.l11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.r11_1 = $outer;
  }
  protoOf(SetWrapper).p = function () {
    return this.r11_1.q11_1;
  };
  protoOf(SetWrapper).g2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.r11_1.v(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).v = function (element) {
    return this.r11_1.v(element);
  };
  protoOf(SetWrapper).j = function () {
    return this.r11_1.j();
  };
  protoOf(SetWrapper).m = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.r11_1, null));
  };
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.n11_1 = get_EmptyGroup();
    this.o11_1 = get_EMPTY_OBJECTS();
    this.p11_1 = 0;
    this.q11_1 = 0;
  }
  protoOf(ScatterSet).vu = function () {
    return this.p11_1;
  };
  protoOf(ScatterSet).p = function () {
    return this.q11_1;
  };
  protoOf(ScatterSet).j = function () {
    return this.q11_1 === 0;
  };
  protoOf(ScatterSet).fz = function () {
    return !(this.q11_1 === 0);
  };
  protoOf(ScatterSet).v = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.p11_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.n11_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$5);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.o11_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).jz = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.o11_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.n11_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.r3(this_1.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var tmp = elements[index_0];
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    if (transform == null) {
                      this_0.u8(element);
                    } else {
                      this_0.f(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.p3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).s11 = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.jz(separator, prefix, postfix, limit, truncated, transform) : $super.jz.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.p11_1;
    hash = imul(31, hash) + this.q11_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.o11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.n11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!equals(element, this)) {
                    var tmp_0 = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.p() === this.p())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.o11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.n11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.v(element)) {
                    return false;
                  }
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.s11(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).t11 = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.c12_1 = this$0;
    this.d12_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).l11 = function ($this$iterator, $completion) {
    var tmp = this.m11($this$iterator, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).ma = function (p1, $completion) {
    return this.l11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 11;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.g12_1 = this.c12_1.r12_1;
            this.h12_1 = this.g12_1.n11_1;
            this.i12_1 = this.h12_1.length - 2 | 0;
            this.j12_1 = numberRangeToNumber(0, this.i12_1).m();
            this.s9_1 = 2;
            continue $sm;
          case 2:
            if (!this.j12_1.n()) {
              this.s9_1 = 9;
              continue $sm;
            }

            this.k12_1 = this.j12_1.o();
            this.l12_1 = this.h12_1[this.k12_1];
            var this_0 = this.l12_1;
            if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.m12_1 = 8 - (~(this.k12_1 - this.i12_1 | 0) >>> 31 | 0) | 0;
              this.n12_1 = until(0, this.m12_1).m();
              this.s9_1 = 3;
              continue $sm;
            } else {
              this.s9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.n12_1.n()) {
              this.s9_1 = 6;
              continue $sm;
            }

            this.o12_1 = this.n12_1.o();
            if (this.l12_1.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
              this.p12_1 = (this.k12_1 << 3) + this.o12_1 | 0;
              var tmp_1 = this;
              tmp_1.q12_1 = this.p12_1;
              this.c12_1.s12_1 = this.q12_1;
              this.s9_1 = 4;
              var tmp_2 = this.d12_1.o11_1[this.q12_1];
              suspendResult = this.e12_1.wh((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s9_1 = 5;
              continue $sm;
            }

          case 4:
            this.s9_1 = 5;
            continue $sm;
          case 5:
            this.l12_1 = this.l12_1.p3(8);
            this.s9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.m12_1 === 8)) {
              this.f12_1 = Unit_instance;
              this.s9_1 = 10;
              continue $sm;
            } else {
              this.s9_1 = 7;
              continue $sm;
            }

          case 7:
            this.s9_1 = 8;
            continue $sm;
          case 8:
            this.s9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.s9_1 = 1;
              continue $sm;
            }

            this.s9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 11) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).m11 = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.c12_1, this.d12_1, completion);
    i.e12_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.l11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.r12_1 = this$0;
    this.s12_1 = -1;
    var tmp = this;
    tmp.t12_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this, this$0, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).n = function () {
    return this.t12_1.n();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).o = function () {
    return this.t12_1.o();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).t4 = function () {
    if (!(this.s12_1 === -1)) {
      this.r12_1.z12(this.s12_1);
      this.s12_1 = -1;
    }
  };
  function initializeStorage_9($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.p11_1 = newCapacity;
    initializeMetadata_9($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_0.o11_1 = tmp_1;
  }
  function initializeMetadata_9($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.n11_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.n11_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    initializeGrowth_9($this);
  }
  function initializeGrowth_9($this) {
    $this.y12_1 = loadedCapacity($this.vu()) - $this.q11_1 | 0;
  }
  function findAbsoluteInsertIndex_3($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.p11_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.n11_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
      var x = g.t3(tmp$ret$5);
      var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.o11_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.r3(this_1.g3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_7($this, hash1);
    var tmp_0;
    if ($this.y12_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.n11_1[offset_0 >> 3].p3((offset_0 & 7) << 3).r3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.ov();
      index_0 = findFirstAvailableSlot_7($this, hash1);
    }
    $this.q11_1 = $this.q11_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.y12_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.n11_1[offset_1 >> 3].p3((offset_1 & 7) << 3).r3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.y12_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.n11_1;
    var capacity = $this.p11_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].r3((new Long(255, 0)).o3(b_0).n3()).s3(value.o3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_7($this, hash1) {
    var probeMask = $this.p11_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.n11_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.r3(g.n3().o3(7)).r3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableSetWrapper($outer) {
    this.b13_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).e = function (element) {
    return this.b13_1.e(element);
  };
  protoOf(MutableSetWrapper).t = function (elements) {
    return this.b13_1.c13(elements);
  };
  protoOf(MutableSetWrapper).n2 = function () {
    this.b13_1.n2();
  };
  protoOf(MutableSetWrapper).m = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.b13_1);
  };
  protoOf(MutableSetWrapper).t2 = function (element) {
    return this.b13_1.t2(element);
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.y12_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_9(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).e = function (element) {
    var oldSize = this.p();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.o11_1[index] = element;
    return !(this.p() === oldSize);
  };
  protoOf(MutableScatterSet).d13 = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.o11_1[index] = element;
  };
  protoOf(MutableScatterSet).c13 = function (elements) {
    var oldSize = this.p();
    this.e13(elements);
    return !(oldSize === this.p());
  };
  protoOf(MutableScatterSet).f13 = function (elements) {
    var oldSize = this.p();
    this.g13(elements);
    return !(oldSize === this.p());
  };
  protoOf(MutableScatterSet).e13 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.d13(element);
    }
  };
  protoOf(MutableScatterSet).g13 = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.o11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.n11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.r3(this_0.n3().o3(7)).r3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var tmp = elements_0[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.d13(element);
                }
                slot = slot.p3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(MutableScatterSet).t2 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.p11_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.n11_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].q3(b).s3(metadata[i + 1 | 0].o3(64 - b | 0).r3(toLong(b).m3().p3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).h3(toLong(hash2));
        var x = g.t3(tmp$ret$5);
        var m = x.g3(new Long(16843009, 16843009)).r3(x.n3()).r3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.o11_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.r3(this_1.g3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.r3(g.n3().o3(6)).r3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.z12(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).z12 = function (index) {
    this.q11_1 = this.q11_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.n11_1;
    var capacity = this.p11_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.o11_1[index] = null;
  };
  protoOf(MutableScatterSet).n2 = function () {
    this.q11_1 = 0;
    if (!(this.n11_1 === get_EmptyGroup())) {
      fill(this.n11_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.n11_1;
      var offset = this.p11_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
    }
    fill_0(this.o11_1, null, 0, this.p11_1);
    initializeGrowth_9(this);
  };
  protoOf(MutableScatterSet).ov = function () {
    var tmp;
    if (this.p11_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.q11_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).h3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.p11_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.rv();
    } else {
      this.qv(nextCapacity(this.p11_1));
    }
  };
  protoOf(MutableScatterSet).rv = function () {
    var metadata = this.n11_1;
    var capacity = this.p11_1;
    var elements = this.o11_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].r3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.n3().f3(maskedGroup.q3(7)).r3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).s3(metadata[lastIndex - 1 | 0].r3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].p3((offset & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!m.equals(new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$1, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_7(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_0 = index;
        var value = toLong(hash2);
        var i_0 = offset_0 >> 3;
        var b = (offset_0 & 7) << 3;
        metadata[i_0] = metadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].p3((targetIndex & 7) << 3).r3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].r3((new Long(255, 0)).o3(b_0).n3()).s3(value_0.o3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].r3((new Long(255, 0)).o3(b_1).n3()).s3(value_1.o3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].r3((new Long(255, 0)).o3(b_2).n3()).s3(value_2.o3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).s3(metadata[0].r3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_9(this);
  };
  protoOf(MutableScatterSet).qv = function (newCapacity) {
    var previousMetadata = this.n11_1;
    var previousElements = this.o11_1;
    var previousCapacity = this.p11_1;
    initializeStorage_9(this, newCapacity);
    var newMetadata = this.n11_1;
    var newElements = this.o11_1;
    var capacity = this.p11_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].p3((i & 7) << 3).r3(new Long(255, 0)).h1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_7(this, tmp$ret$4);
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = toLong(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = newMetadata[i_0].r3((new Long(255, 0)).o3(b).n3()).s3(value.o3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).h13 = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.mutableScatterSetOf.<anonymous>' call
    this_0.d13(element1);
    this_0.d13(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  function valueIterator(_this__u8e3s4) {
    return new valueIterator$1(_this__u8e3s4);
  }
  function valueIterator$1($this_valueIterator) {
    this.j13_1 = $this_valueIterator;
    this.i13_1 = 0;
  }
  protoOf(valueIterator$1).n = function () {
    return this.i13_1 < this.j13_1.lr();
  };
  protoOf(valueIterator$1).o = function () {
    var tmp1 = this.i13_1;
    this.i13_1 = tmp1 + 1 | 0;
    return this.j13_1.o13(tmp1);
  };
  function get_DELETED_0() {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    return DELETED_0;
  }
  var DELETED_0;
  function commonGet(_this__u8e3s4, key) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    // Inline function 'androidx.collection.internalGet' call
    var i = binarySearch_0(_this__u8e3s4.l13_1, _this__u8e3s4.n13_1, key);
    var tmp;
    if (i < 0 || _this__u8e3s4.m13_1[i] === _get_DELETED_$accessor$42ybbw_534t2l()) {
      tmp = null;
    } else {
      var tmp_0 = _this__u8e3s4.m13_1[i];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function gc(_this__u8e3s4) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    var n = _this__u8e3s4.n13_1;
    var o = 0;
    var keys = _this__u8e3s4.l13_1;
    var values = _this__u8e3s4.m13_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value = values[i];
        if (!(value === _get_DELETED_$accessor$42ybbw_534t2l())) {
          if (!(i === o)) {
            keys[o] = keys[i];
            values[o] = value;
            values[i] = null;
          }
          o = o + 1 | 0;
        }
      }
       while (inductionVariable < n);
    _this__u8e3s4.k13_1 = false;
    _this__u8e3s4.n13_1 = o;
  }
  function gc$accessor$42ybbw(_this__u8e3s4) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    return gc(_this__u8e3s4);
  }
  function _get_DELETED_$accessor$42ybbw_534t2l() {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    return get_DELETED_0();
  }
  var properties_initialized_SparseArrayCompat_kt_h7ddor;
  function _init_properties_SparseArrayCompat_kt__9he7pl() {
    if (!properties_initialized_SparseArrayCompat_kt_h7ddor) {
      properties_initialized_SparseArrayCompat_kt_h7ddor = true;
      DELETED_0 = new Object();
    }
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_LONGS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_LONGS;
  }
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function idealLongArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 8)) / 8 | 0;
  }
  function idealByteArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var inductionVariable = 4;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (need <= ((1 << i) - 12 | 0)) {
          return (1 << i) - 12 | 0;
        }
      }
       while (inductionVariable <= 31);
    return need;
  }
  function binarySearch(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal.h1(value) < 0) {
        lo = mid + 1 | 0;
      } else if (midVal.h1(value) > 0) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  function idealIntArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 4)) / 4 | 0;
  }
  function binarySearch_0(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$(message);
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function LongSparseArray(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.p13_1 = false;
    this.s13_1 = 0;
    if (initialCapacity === 0) {
      this.q13_1 = get_EMPTY_LONGS();
      this.r13_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.q13_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.r13_1 = fillArrayVal(Array(idealCapacity), null);
    }
  }
  protoOf(LongSparseArray).nx = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch(this.q13_1, this.s13_1, key);
    var tmp;
    if (i < 0 || this.r13_1[i] === _get_DELETED_$accessor$gkqe1m_u3mq5h()) {
      tmp = null;
    } else {
      tmp = this.r13_1[i];
    }
    var tmp_0 = tmp;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(LongSparseArray).t13 = function (key) {
    var i = binarySearch(this.q13_1, this.s13_1, key);
    var tmp;
    if (i >= 0) {
      var tmp_0;
      if (!(this.r13_1[i] === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
        this.r13_1[i] = _get_DELETED_$accessor$gkqe1m_u3mq5h();
        this.p13_1 = true;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LongSparseArray).u13 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch(this.q13_1, this.s13_1, key);
      if (index >= 0) {
        this.r13_1[index] = value;
      } else {
        index = ~index;
        if (index < this.s13_1 && this.r13_1[index] === _get_DELETED_$accessor$gkqe1m_u3mq5h()) {
          this.q13_1[index] = key;
          this.r13_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.p13_1 && this.s13_1 >= this.q13_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.s13_1;
          var newSize = 0;
          var keys = this.q13_1;
          var values = this.r13_1;
          var inductionVariable = 0;
          if (inductionVariable < n)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var value_0 = values[i];
              if (!(value_0 === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
                if (!(i === newSize)) {
                  keys[newSize] = keys[i];
                  values[newSize] = value_0;
                  values[i] = null;
                }
                newSize = newSize + 1 | 0;
              }
            }
             while (inductionVariable < n);
          this.p13_1 = false;
          this.s13_1 = newSize;
          index = ~binarySearch(this.q13_1, this.s13_1, key);
        }
        if (this.s13_1 >= this.q13_1.length) {
          var newSize_0 = idealLongArraySize(this.s13_1 + 1 | 0);
          this.q13_1 = copyOf_1(this.q13_1, newSize_0);
          this.r13_1 = copyOf_0(this.r13_1, newSize_0);
        }
        if (!((this.s13_1 - index | 0) === 0)) {
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.q13_1;
          var destination = this.q13_1;
          var destinationOffset = index + 1 | 0;
          var startIndex = index;
          var endIndex = this.s13_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
          // Inline function 'kotlin.collections.copyInto' call
          var this_1 = this.r13_1;
          var destination_0 = this.r13_1;
          var destinationOffset_0 = index + 1 | 0;
          var startIndex_0 = index;
          var endIndex_0 = this.s13_1;
          arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
        }
        this.q13_1[index] = key;
        this.r13_1[index] = value;
        this.s13_1 = this.s13_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).lr = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.p13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.s13_1;
      var newSize = 0;
      var keys = this.q13_1;
      var values = this.r13_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.p13_1 = false;
      this.s13_1 = newSize;
    }
    return this.s13_1;
  };
  protoOf(LongSparseArray).j = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.lr() === 0;
  };
  protoOf(LongSparseArray).v13 = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.s13_1 : false)) {
      // Inline function 'androidx.collection.commonKeyAt.<anonymous>' call
      var tmp$ret$0 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (this.p13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.s13_1;
      var newSize = 0;
      var keys = this.q13_1;
      var values = this.r13_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.p13_1 = false;
      this.s13_1 = newSize;
    }
    return this.q13_1[index];
  };
  protoOf(LongSparseArray).o13 = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.s13_1 : false)) {
      // Inline function 'androidx.collection.commonValueAt.<anonymous>' call
      var tmp$ret$0 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (this.p13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.s13_1;
      var newSize = 0;
      var keys = this.q13_1;
      var values = this.r13_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.p13_1 = false;
      this.s13_1 = newSize;
    }
    var tmp = this.r13_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(LongSparseArray).w13 = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.p13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.s13_1;
      var newSize = 0;
      var keys = this.q13_1;
      var values = this.r13_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.p13_1 = false;
      this.s13_1 = newSize;
    }
    return binarySearch(this.q13_1, this.s13_1, key);
  };
  protoOf(LongSparseArray).ox = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.w13(key) >= 0;
  };
  protoOf(LongSparseArray).n2 = function () {
    var n = this.s13_1;
    var values = this.r13_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.s13_1 = 0;
    this.p13_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.lr() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.s13_1, 28);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.commonToString.<anonymous>' call
      this_0.w8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.s13_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.v8(', ');
          }
          var key = this.v13(i);
          this_0.kd(key);
          this_0.w8(_Char___init__impl__6a9atx(61));
          var value = this.o13(i);
          if (!(value === this_0)) {
            this_0.u8(value);
          } else {
            this_0.v8('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.w8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  function SparseArrayCompat(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.k13_1 = false;
    this.n13_1 = 0;
    if (initialCapacity === 0) {
      this.l13_1 = get_EMPTY_INTS();
      this.m13_1 = get_EMPTY_OBJECTS();
    } else {
      var capacity = idealIntArraySize(initialCapacity);
      this.l13_1 = new Int32Array(capacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.m13_1 = fillArrayVal(Array(capacity), null);
    }
  }
  protoOf(SparseArrayCompat).u = function (key) {
    return commonGet(this, key);
  };
  protoOf(SparseArrayCompat).x13 = function (index) {
    var tmp;
    if (!(this.m13_1[index] === _get_DELETED_$accessor$42ybbw_534t2l())) {
      this.m13_1[index] = _get_DELETED_$accessor$42ybbw_534t2l();
      this.k13_1 = true;
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SparseArrayCompat).y13 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonReplace' call
      var index = this.z13(key);
      if (index >= 0) {
        var tmp = this.m13_1[index];
        var oldValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        this.m13_1[index] = value;
        tmp$ret$0 = oldValue;
        break $l$block;
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).a14 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var i = binarySearch_0(this.l13_1, this.n13_1, key);
      if (i >= 0) {
        this.m13_1[i] = value;
      } else {
        i = ~i;
        if (i < this.n13_1 && this.m13_1[i] === _get_DELETED_$accessor$42ybbw_534t2l()) {
          this.l13_1[i] = key;
          this.m13_1[i] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.k13_1 && this.n13_1 >= this.l13_1.length) {
          gc$accessor$42ybbw(this);
          i = ~binarySearch_0(this.l13_1, this.n13_1, key);
        }
        if (this.n13_1 >= this.l13_1.length) {
          var n = idealIntArraySize(this.n13_1 + 1 | 0);
          this.l13_1 = copyOf(this.l13_1, n);
          this.m13_1 = copyOf_0(this.m13_1, n);
        }
        if (!((this.n13_1 - i | 0) === 0)) {
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.l13_1;
          var destination = this.l13_1;
          var destinationOffset = i + 1 | 0;
          var startIndex = i;
          var endIndex = this.n13_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
          // Inline function 'kotlin.collections.copyInto' call
          var this_1 = this.m13_1;
          var destination_0 = this.m13_1;
          var destinationOffset_0 = i + 1 | 0;
          var startIndex_0 = i;
          var endIndex_0 = this.n13_1;
          arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
        }
        this.l13_1[i] = key;
        this.m13_1[i] = value;
        this.n13_1 = this.n13_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).lr = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.k13_1) {
      gc$accessor$42ybbw(this);
    }
    return this.n13_1;
  };
  protoOf(SparseArrayCompat).v13 = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    if (this.k13_1) {
      gc$accessor$42ybbw(this);
    }
    return this.l13_1[index];
  };
  protoOf(SparseArrayCompat).o13 = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    if (this.k13_1) {
      gc$accessor$42ybbw(this);
    }
    var tmp = this.m13_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SparseArrayCompat).z13 = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.k13_1) {
      gc$accessor$42ybbw(this);
    }
    return binarySearch_0(this.l13_1, this.n13_1, key);
  };
  protoOf(SparseArrayCompat).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.lr() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      var buffer = StringBuilder_init_$Create$_0(imul(this.n13_1, 28));
      buffer.w8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.n13_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            buffer.v8(', ');
          }
          var key = this.v13(i);
          buffer.jd(key);
          buffer.w8(_Char___init__impl__6a9atx(61));
          var value = this.o13(i);
          if (!(value === this)) {
            buffer.u8(value);
          } else {
            buffer.v8('(this Map)');
          }
        }
         while (inductionVariable < last);
      buffer.w8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = buffer.toString();
    }
    return tmp$ret$0;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LongSparseArray;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableIntList;
  _.$_$.d = MutableIntObjectMap;
  _.$_$.e = MutableIntSet;
  _.$_$.f = MutableLongObjectMap;
  _.$_$.g = MutableLongSet;
  _.$_$.h = MutableObjectFloatMap;
  _.$_$.i = MutableObjectIntMap;
  _.$_$.j = MutableObjectList;
  _.$_$.k = MutableScatterMap;
  _.$_$.l = MutableScatterSet;
  _.$_$.m = ScatterSet;
  _.$_$.n = SparseArrayCompat;
  _.$_$.o = emptyObjectIntMap;
  _.$_$.p = mutableIntObjectMapOf;
  _.$_$.q = mutableIntObjectMapOf_0;
  _.$_$.r = mutableObjectIntMapOf;
  _.$_$.s = mutableObjectListOf;
  _.$_$.t = mutableObjectLongMapOf;
  _.$_$.u = mutableScatterMapOf;
  _.$_$.v = mutableScatterSetOf_0;
  _.$_$.w = mutableScatterSetOf;
  _.$_$.x = valueIterator;
  _.$_$.y = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.z = _FloatFloatPair___get_packedValue__impl__5lczxp;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
