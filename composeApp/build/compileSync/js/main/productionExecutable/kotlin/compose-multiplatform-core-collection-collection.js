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
  var toRawBits = kotlin_kotlin.$_$.qk;
  var toLong = kotlin_kotlin.$_$.je;
  var Long = kotlin_kotlin.$_$.wi;
  var protoOf = kotlin_kotlin.$_$.he;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var countTrailingZeroBits = kotlin_kotlin.$_$.wj;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var VOID = kotlin_kotlin.$_$.i;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var longArray = kotlin_kotlin.$_$.yd;
  var fill = kotlin_kotlin.$_$.e8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var ulongCompare = kotlin_kotlin.$_$.uk;
  var get_lastIndex = kotlin_kotlin.$_$.b9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var until = kotlin_kotlin.$_$.if;
  var copyOf = kotlin_kotlin.$_$.x7;
  var arrayCopy = kotlin_kotlin.$_$.w6;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var hashCode = kotlin_kotlin.$_$.zc;
  var equals = kotlin_kotlin.$_$.qc;
  var fill_0 = kotlin_kotlin.$_$.f8;
  var toString = kotlin_kotlin.$_$.rk;
  var copyOf_0 = kotlin_kotlin.$_$.w7;
  var longArrayOf = kotlin_kotlin.$_$.xd;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var SequenceScope = kotlin_kotlin.$_$.pf;
  var numberRangeToNumber = kotlin_kotlin.$_$.zd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var iterator = kotlin_kotlin.$_$.wf;
  var KtSet = kotlin_kotlin.$_$.u6;
  var KtMutableSet = kotlin_kotlin.$_$.t6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var copyOf_1 = kotlin_kotlin.$_$.q7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.o1;
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
    var tmp$ret$0 = v1.j3(32).n3(v2.m3(new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  var EmptyFloatSet;
  function get_EmptyFloatArray() {
    _init_properties_FloatSet_kt__ctp8je();
    return EmptyFloatArray;
  }
  var EmptyFloatArray;
  function FloatSet() {
    this.mu_1 = get_EmptyGroup();
    this.nu_1 = get_EmptyFloatArray();
    this.ou_1 = 0;
    this.pu_1 = 0;
  }
  protoOf(FloatSet).qu = function () {
    return this.ou_1;
  };
  protoOf(FloatSet).ru = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(getNumberHashCode(element), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ou_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.mu_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.nu_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(FloatSet).su = function (separator, prefix, postfix, limit, truncated) {
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
      var k = this.nu_1;
      $l$block_0: {
        // Inline function 'androidx.collection.FloatSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.mu_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.m3(this_1.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                    this_0.gd(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.k3(8);
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
  protoOf(FloatSet).tu = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.su(separator, prefix, postfix, limit, truncated) : $super.su.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(FloatSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.nu_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.mu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.hashCode.<anonymous>' call
                  var element = k[index];
                  hash = hash + getNumberHashCode(element) | 0;
                }
                slot = slot.k3(8);
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
    if (!(other.pu_1 === this.pu_1)) {
      return false;
    }
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.nu_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.mu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.ru(element)) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    return this.tu(VOID, '[', ']');
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
    $this.ou_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.nu_1 = new Float32Array(newCapacity);
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
    tmp.mu_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.mu_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.yu_1 = loadedCapacity($this.qu()) - $this.pu_1 | 0;
  }
  function MutableFloatSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    FloatSet.call(this);
    this.yu_1 = 0;
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
    $this.cv_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.av_1 = new Int32Array(newCapacity);
    $this.bv_1 = new Int32Array(newCapacity);
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
    tmp.zu_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.zu_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.jv_1 = loadedCapacity($this.qu()) - $this.dv_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.cv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.zu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if ($this.av_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.jv_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.zu_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.dv_1 = $this.dv_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.jv_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.zu_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.jv_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.zu_1;
    var capacity = $this.cv_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.cv_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.zu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.jv_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).lv = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.av_1[index] = key;
    this.bv_1[index] = value;
  };
  protoOf(MutableIntIntMap).kv = function () {
    var tmp;
    if (this.cv_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.dv_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.cv_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.cv_1));
    }
  };
  protoOf(MutableIntIntMap).nv = function () {
    var metadata = this.zu_1;
    var capacity = this.cv_1;
    var keys = this.av_1;
    var values = this.bv_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntIntMap).mv = function (newCapacity) {
    var previousMetadata = this.zu_1;
    var previousKeys = this.av_1;
    var previousValues = this.bv_1;
    var previousCapacity = this.cv_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.zu_1;
    var newKeys = this.av_1;
    var newValues = this.bv_1;
    var capacity = this.cv_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.zu_1 = get_EmptyGroup();
    this.av_1 = get_EmptyIntArray();
    this.bv_1 = get_EmptyIntArray();
    this.cv_1 = 0;
    this.dv_1 = 0;
  }
  protoOf(IntIntMap).qu = function () {
    return this.cv_1;
  };
  protoOf(IntIntMap).j = function () {
    return this.dv_1;
  };
  protoOf(IntIntMap).q = function () {
    return this.dv_1 === 0;
  };
  protoOf(IntIntMap).o = function (key) {
    var index = this.pv(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.bv_1[index];
  };
  protoOf(IntIntMap).ov = function (key) {
    return this.pv(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.av_1;
    var v = this.bv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.zu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
                }
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.av_1;
    var v = this.bv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.zu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  var key = k[index];
                  if (!(v[index] === other.o(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.av_1;
    var v = this.bv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.zu_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var key = k[index];
                  var value = v[index];
                  s.ed(key);
                  s.p8('=');
                  s.ed(value);
                  i = i + 1 | 0;
                  if (i < this.dv_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).pv = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.cv_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.zu_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (this.av_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    tmp.qv_1 = tmp_0;
    this.rv_1 = 0;
  }
  protoOf(IntList).o = function (index) {
    if (!(0 <= index ? index < this.rv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.qv_1[index];
  };
  protoOf(IntList).su = function (separator, prefix, postfix, limit, truncated) {
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
      var content = this.qv_1;
      var inductionVariable = 0;
      var last = this.rv_1;
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
          this_0.ed(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).sv = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.su(separator, prefix, postfix, limit, truncated) : $super.su.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.qv_1;
    var inductionVariable = 0;
    var last = this.rv_1;
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
      tmp = !(other.rv_1 === this.rv_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.qv_1;
    var otherContent = other.qv_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.rv_1);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
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
    return this.sv(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).vv = function (element) {
    this.w5(this.rv_1 + 1 | 0);
    this.qv_1[this.rv_1] = element;
    this.rv_1 = this.rv_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).w5 = function (capacity) {
    var oldContent = this.qv_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.qv_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).s2 = function (index) {
    if (!(0 <= index ? index < this.rv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.qv_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.rv_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.rv_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, startIndex, endIndex);
    }
    this.rv_1 = this.rv_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).wv = function (index, element) {
    if (!(0 <= index ? index < this.rv_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.qv_1;
    var old = content[index];
    content[index] = element;
    return old;
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
    $this.aw_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.yv_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.zv_1 = fillArrayVal(Array(newCapacity), null);
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
    tmp.xv_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.xv_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.hw_1 = loadedCapacity($this.qu()) - $this.bw_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.aw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.xv_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if ($this.yv_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.hw_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.xv_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.bw_1 = $this.bw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.hw_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.xv_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.hw_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.xv_1;
    var capacity = $this.aw_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.aw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.xv_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.hw_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).iw = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.yv_1[index] = key;
    this.zv_1[index] = value;
  };
  protoOf(MutableIntObjectMap).jw = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.aw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.xv_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.yv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.kw(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).kw = function (index) {
    this.bw_1 = this.bw_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.xv_1;
    var capacity = this.aw_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    var oldValue = this.zv_1[index];
    this.zv_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableIntObjectMap).kv = function () {
    var tmp;
    if (this.aw_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.bw_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.aw_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.aw_1));
    }
  };
  protoOf(MutableIntObjectMap).nv = function () {
    var metadata = this.xv_1;
    var capacity = this.aw_1;
    var keys = this.yv_1;
    var values = this.zv_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntObjectMap).mv = function (newCapacity) {
    var previousMetadata = this.xv_1;
    var previousKeys = this.yv_1;
    var previousValues = this.zv_1;
    var previousCapacity = this.aw_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.xv_1;
    var newKeys = this.yv_1;
    var newValues = this.zv_1;
    var capacity = this.aw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntObjectMap() {
    this.xv_1 = get_EmptyGroup();
    this.yv_1 = get_EmptyIntArray();
    this.zv_1 = get_EMPTY_OBJECTS();
    this.aw_1 = 0;
    this.bw_1 = 0;
  }
  protoOf(IntObjectMap).qu = function () {
    return this.aw_1;
  };
  protoOf(IntObjectMap).j = function () {
    return this.bw_1;
  };
  protoOf(IntObjectMap).q = function () {
    return this.bw_1 === 0;
  };
  protoOf(IntObjectMap).o = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.aw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.xv_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.yv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
      var tmp_1 = this.zv_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).ov = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.aw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.xv_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.yv_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    var k = this.yv_1;
    var v = this.zv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.xv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.yv_1;
    var v = this.zv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.xv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.o(key) == null) || !other.ov(key)) {
                      return false;
                    }
                  } else if (!equals(value, other.o(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.yv_1;
    var v = this.zv_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.xv_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.ed(key);
                  s.p8('=');
                  s.o8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.bw_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableIntObjectMapOf(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.mutableIntObjectMapOf.<anonymous>' call
    this_0.iw(key1, value1);
    this_0.iw(key2, value2);
    this_0.iw(key3, value3);
    return this_0;
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
    this.lw_1 = get_EmptyGroup();
    this.mw_1 = get_EmptyIntArray();
    this.nw_1 = 0;
    this.ow_1 = 0;
  }
  protoOf(IntSet).qu = function () {
    return this.nw_1;
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
      var probeMask = this.nw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.lw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.mw_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).su = function (separator, prefix, postfix, limit, truncated) {
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
      var k = this.mw_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.lw_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.m3(this_1.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                    this_0.ed(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.k3(8);
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
  protoOf(IntSet).pw = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.su(separator, prefix, postfix, limit, truncated) : $super.su.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.mw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.lw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
                }
                slot = slot.k3(8);
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
    if (!(other.ow_1 === this.ow_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.mw_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.lw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.bl(element)) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    return this.pw(VOID, '[', ']');
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
    $this.nw_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.mw_1 = new Int32Array(newCapacity);
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
    tmp.lw_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.lw_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.uw_1 = loadedCapacity($this.qu()) - $this.ow_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.nw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.lw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if ($this.mw_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.uw_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.lw_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.ow_1 = $this.ow_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.uw_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.lw_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.uw_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.lw_1;
    var capacity = $this.nw_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.nw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.lw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.uw_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).vv = function (element) {
    var oldSize = this.ow_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.mw_1[index] = element;
    return !(this.ow_1 === oldSize);
  };
  protoOf(MutableIntSet).kv = function () {
    var tmp;
    if (this.nw_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ow_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.nw_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.nw_1));
    }
  };
  protoOf(MutableIntSet).nv = function () {
    var metadata = this.lw_1;
    var capacity = this.nw_1;
    var elements = this.mw_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableIntSet).mv = function (newCapacity) {
    var previousMetadata = this.lw_1;
    var previousElements = this.mw_1;
    var previousCapacity = this.nw_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.lw_1;
    var newElements = this.mw_1;
    var capacity = this.nw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
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
    $this.yw_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.ww_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.xw_1 = fillArrayVal(Array(newCapacity), null);
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
    tmp.vw_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.vw_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.fx_1 = loadedCapacity($this.qu()) - $this.zw_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.yw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.vw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if ($this.ww_1[index].equals(key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.fx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.vw_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.zw_1 = $this.zw_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.fx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.vw_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fx_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.vw_1;
    var capacity = $this.yw_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.yw_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.vw_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.fx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongObjectMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).gx = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.ww_1[index] = key;
    this.xw_1[index] = value;
  };
  protoOf(MutableLongObjectMap).i2 = function () {
    this.zw_1 = 0;
    if (!(this.vw_1 === get_EmptyGroup())) {
      fill(this.vw_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.vw_1;
      var offset = this.yw_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    }
    fill_0(this.xw_1, null, 0, this.yw_1);
    initializeGrowth_3(this);
  };
  protoOf(MutableLongObjectMap).kv = function () {
    var tmp;
    if (this.yw_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.zw_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.yw_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.yw_1));
    }
  };
  protoOf(MutableLongObjectMap).nv = function () {
    var metadata = this.vw_1;
    var capacity = this.yw_1;
    var keys = this.ww_1;
    var values = this.xw_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableLongObjectMap).mv = function (newCapacity) {
    var previousMetadata = this.vw_1;
    var previousKeys = this.ww_1;
    var previousValues = this.xw_1;
    var previousCapacity = this.yw_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.vw_1;
    var newKeys = this.ww_1;
    var newValues = this.xw_1;
    var capacity = this.yw_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function LongObjectMap() {
    this.vw_1 = get_EmptyGroup();
    this.ww_1 = get_EmptyLongArray();
    this.xw_1 = get_EMPTY_OBJECTS();
    this.yw_1 = 0;
    this.zw_1 = 0;
  }
  protoOf(LongObjectMap).qu = function () {
    return this.yw_1;
  };
  protoOf(LongObjectMap).j = function () {
    return this.zw_1;
  };
  protoOf(LongObjectMap).q = function () {
    return this.zw_1 === 0;
  };
  protoOf(LongObjectMap).hx = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.vw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.ww_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
      var tmp_1 = this.xw_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(LongObjectMap).ix = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yw_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.vw_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.ww_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    var k = this.ww_1;
    var v = this.xw_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.vw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.ww_1;
    var v = this.xw_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.vw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongObjectMap.equals.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.hx(key) == null) || !other.ix(key)) {
                      return false;
                    }
                  } else if (!equals(value, other.hx(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.ww_1;
    var v = this.xw_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.vw_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongObjectMap.toString.<anonymous>' call
                  var key = k[index];
                  var tmp = v[index];
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.fd(key);
                  s.p8('=');
                  s.o8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.zw_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function LongSet() {
    this.jx_1 = get_EmptyGroup();
    this.kx_1 = get_EmptyLongArray();
    this.lx_1 = 0;
    this.mx_1 = 0;
  }
  protoOf(LongSet).qu = function () {
    return this.lx_1;
  };
  protoOf(LongSet).nx = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.jx_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.kx_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongSet).su = function (separator, prefix, postfix, limit, truncated) {
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
      var k = this.kx_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.jx_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.m3(this_1.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                    this_0.fd(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.k3(8);
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
  protoOf(LongSet).ox = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.su(separator, prefix, postfix, limit, truncated) : $super.su.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.kx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.hashCode.<anonymous>' call
                  hash = hash + k[index].hashCode() | 0;
                }
                slot = slot.k3(8);
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
    if (!(other.mx_1 === this.mx_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.kx_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.nx(element)) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    return this.ox(VOID, '[', ']');
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
    $this.lx_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    $this.kx_1 = longArray(newCapacity);
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
    tmp.jx_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.jx_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.tx_1 = loadedCapacity($this.qu()) - $this.mx_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.mx_1 = $this.mx_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.jx_1;
    var capacity = $this.lx_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
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
    var probeMask = $this.lx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.jx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$4);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if ($this.kx_1[index].equals(element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.tx_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.jx_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.mx_1 = $this.mx_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.tx_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.jx_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.tx_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.jx_1;
    var capacity = $this.lx_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.lx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.jx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.tx_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongSet.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).ux = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.kx_1[index] = element;
  };
  protoOf(MutableLongSet).vx = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lx_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.jx_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$4);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (this.kx_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
  protoOf(MutableLongSet).kv = function () {
    var tmp;
    if (this.lx_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.mx_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.lx_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.lx_1));
    }
  };
  protoOf(MutableLongSet).nv = function () {
    var metadata = this.jx_1;
    var capacity = this.lx_1;
    var elements = this.kx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = new Long(0, 0);
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableLongSet).mv = function (newCapacity) {
    var previousMetadata = this.jx_1;
    var previousElements = this.kx_1;
    var previousCapacity = this.lx_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.jx_1;
    var newElements = this.kx_1;
    var capacity = this.lx_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
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
    $this.zx_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.xx_1 = fillArrayVal(Array(newCapacity), null);
    $this.yx_1 = new Float32Array(newCapacity);
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
    tmp.wx_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.wx_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.gy_1 = loadedCapacity($this.qu()) - $this.ay_1 | 0;
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
    var probeMask = $this.zx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.wx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals($this.xx_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.gy_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.wx_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.ay_1 = $this.ay_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.gy_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.wx_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.gy_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.wx_1;
    var capacity = $this.zx_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.zx_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.wx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.gy_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectFloatMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectFloatMap).hy = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.xx_1[index] = key;
    this.yx_1[index] = value;
  };
  protoOf(MutableObjectFloatMap).iy = function (from) {
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = from.xx_1;
    var v = from.yx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = from.wx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.MutableObjectFloatMap.putAll.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  this.hy(key, value);
                }
                slot = slot.k3(8);
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
  protoOf(MutableObjectFloatMap).i2 = function () {
    this.ay_1 = 0;
    if (!(this.wx_1 === get_EmptyGroup())) {
      fill(this.wx_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.wx_1;
      var offset = this.zx_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    }
    fill_0(this.xx_1, null, 0, this.zx_1);
    initializeGrowth_5(this);
  };
  protoOf(MutableObjectFloatMap).kv = function () {
    var tmp;
    if (this.zx_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ay_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.zx_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.zx_1));
    }
  };
  protoOf(MutableObjectFloatMap).nv = function () {
    var metadata = this.wx_1;
    var capacity = this.zx_1;
    var keys = this.xx_1;
    var values = this.yx_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_5(this);
  };
  protoOf(MutableObjectFloatMap).mv = function (newCapacity) {
    var previousMetadata = this.wx_1;
    var previousKeys = this.xx_1;
    var previousValues = this.yx_1;
    var previousCapacity = this.zx_1;
    initializeStorage_5(this, newCapacity);
    var newMetadata = this.wx_1;
    var newKeys = this.xx_1;
    var newValues = this.yx_1;
    var capacity = this.zx_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ObjectFloatMap() {
    this.wx_1 = get_EmptyGroup();
    this.xx_1 = get_EMPTY_OBJECTS();
    this.yx_1 = get_EmptyFloatArray();
    this.zx_1 = 0;
    this.ay_1 = 0;
  }
  protoOf(ObjectFloatMap).qu = function () {
    return this.zx_1;
  };
  protoOf(ObjectFloatMap).j = function () {
    return this.ay_1;
  };
  protoOf(ObjectFloatMap).q = function () {
    return this.ay_1 === 0;
  };
  protoOf(ObjectFloatMap).n2 = function (key) {
    var index = this.ky(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.yx_1[index];
  };
  protoOf(ObjectFloatMap).jy = function (key, defaultValue) {
    var index = this.ky(key);
    if (index >= 0) {
      return this.yx_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectFloatMap).l2 = function (key) {
    return this.ky(key) >= 0;
  };
  protoOf(ObjectFloatMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.xx_1;
    var v = this.yx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.wx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ObjectFloatMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.xx_1;
    var v = this.yx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.wx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectFloatMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.n2(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.xx_1;
    var v = this.yx_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.wx_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectFloatMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.o8(key === this ? '(this)' : key);
                  s.p8('=');
                  s.gd(value);
                  i = i + 1 | 0;
                  if (i < this.ay_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectFloatMap).ky = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.zx_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.wx_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals(this.xx_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    $this.oy_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.my_1 = fillArrayVal(Array(newCapacity), null);
    $this.ny_1 = new Int32Array(newCapacity);
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
    tmp.ly_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.ly_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.vy_1 = loadedCapacity($this.qu()) - $this.py_1 | 0;
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
    var probeMask = $this.oy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ly_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals($this.my_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5($this, hash1);
    var tmp_0;
    if ($this.vy_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ly_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_5($this, hash1);
    }
    $this.py_1 = $this.py_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.vy_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ly_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.vy_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.ly_1;
    var capacity = $this.oy_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.oy_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.ly_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.vy_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).wy = function (key, value) {
    var index = findIndex_0(this, key);
    if (index < 0)
      index = ~index;
    this.my_1[index] = key;
    this.ny_1[index] = value;
  };
  protoOf(MutableObjectIntMap).xy = function (key, value, default_0) {
    var index = findIndex_0(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.ny_1[index];
    }
    this.my_1[index] = key;
    this.ny_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).yy = function (index) {
    this.py_1 = this.py_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.ly_1;
    var capacity = this.oy_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.my_1[index] = null;
  };
  protoOf(MutableObjectIntMap).kv = function () {
    var tmp;
    if (this.oy_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.py_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.oy_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.oy_1));
    }
  };
  protoOf(MutableObjectIntMap).nv = function () {
    var metadata = this.ly_1;
    var capacity = this.oy_1;
    var keys = this.my_1;
    var values = this.ny_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_6(this);
  };
  protoOf(MutableObjectIntMap).mv = function (newCapacity) {
    var previousMetadata = this.ly_1;
    var previousKeys = this.my_1;
    var previousValues = this.ny_1;
    var previousCapacity = this.oy_1;
    initializeStorage_6(this, newCapacity);
    var newMetadata = this.ly_1;
    var newKeys = this.my_1;
    var newValues = this.ny_1;
    var capacity = this.oy_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ObjectIntMap() {
    this.ly_1 = get_EmptyGroup();
    this.my_1 = get_EMPTY_OBJECTS();
    this.ny_1 = get_EmptyIntArray();
    this.oy_1 = 0;
    this.py_1 = 0;
  }
  protoOf(ObjectIntMap).qu = function () {
    return this.oy_1;
  };
  protoOf(ObjectIntMap).j = function () {
    return this.py_1;
  };
  protoOf(ObjectIntMap).q = function () {
    return this.py_1 === 0;
  };
  protoOf(ObjectIntMap).zy = function () {
    return !(this.py_1 === 0);
  };
  protoOf(ObjectIntMap).n2 = function (key) {
    var index = this.ky(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.ny_1[index];
  };
  protoOf(ObjectIntMap).az = function (key, defaultValue) {
    var index = this.ky(key);
    if (index >= 0) {
      return this.ny_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.my_1;
    var v = this.ny_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ly_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.my_1;
    var v = this.ny_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ly_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!(v[index] === o.n2(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.my_1;
    var v = this.ny_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.ly_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.o8(key === this ? '(this)' : key);
                  s.p8('=');
                  s.ed(value);
                  i = i + 1 | 0;
                  if (i < this.py_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).ky = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.oy_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.ly_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals(this.my_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    tmp.bz_1 = tmp_0;
    this.cz_1 = 0;
  }
  protoOf(ObjectList).j = function () {
    return this.cz_1;
  };
  protoOf(ObjectList).p = function (element) {
    return this.r(element) >= 0;
  };
  protoOf(ObjectList).r = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.bz_1;
      var inductionVariable = 0;
      var last = this.cz_1;
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
      var content_0 = this.bz_1;
      var inductionVariable_0 = 0;
      var last_0 = this.cz_1;
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
  protoOf(ObjectList).q = function () {
    return this.cz_1 === 0;
  };
  protoOf(ObjectList).zy = function () {
    return !(this.cz_1 === 0);
  };
  protoOf(ObjectList).dz = function (separator, prefix, postfix, limit, truncated, transform) {
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
      var content = this.bz_1;
      var inductionVariable = 0;
      var last = this.cz_1;
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
            this_0.o8(element);
          } else {
            this_0.f(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).ez = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.dz(separator, prefix, postfix, limit, truncated, transform) : $super.dz.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.bz_1;
    var inductionVariable = 0;
    var last = this.cz_1;
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
      tmp = !(other.cz_1 === this.cz_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.bz_1;
    var otherContent = other.bz_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.cz_1);
    var inductionVariable = progression.c1_1;
    var last = progression.d1_1;
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
    return this.ez(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.hz_1 = null;
  }
  protoOf(MutableObjectList).e = function (element) {
    this.w5(this.cz_1 + 1 | 0);
    this.bz_1[this.cz_1] = element;
    this.cz_1 = this.cz_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).i2 = function () {
    fill_0(this.bz_1, null, 0, this.cz_1);
    this.cz_1 = 0;
  };
  protoOf(MutableObjectList).w5 = function (capacity) {
    var oldContent = this.bz_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.bz_1 = copyOf_0(oldContent, newSize);
    }
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
    $this.lz_1 = newCapacity;
    initializeMetadata_7($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.jz_1 = fillArrayVal(Array(newCapacity), null);
    $this.kz_1 = longArray(newCapacity);
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
    tmp.iz_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.iz_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_7($this);
  }
  function initializeGrowth_7($this) {
    $this.sz_1 = loadedCapacity($this.qu()) - $this.mz_1 | 0;
  }
  function MutableObjectLongMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectLongMap.call(this);
    this.sz_1 = 0;
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
    this.iz_1 = get_EmptyGroup();
    this.jz_1 = get_EMPTY_OBJECTS();
    this.kz_1 = get_EmptyLongArray();
    this.lz_1 = 0;
    this.mz_1 = 0;
  }
  protoOf(ObjectLongMap).qu = function () {
    return this.lz_1;
  };
  protoOf(ObjectLongMap).j = function () {
    return this.mz_1;
  };
  protoOf(ObjectLongMap).q = function () {
    return this.mz_1 === 0;
  };
  protoOf(ObjectLongMap).n2 = function (key) {
    var index = this.ky(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString(key) + ' in the map');
    }
    return this.kz_1[index];
  };
  protoOf(ObjectLongMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.jz_1;
    var v = this.kz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.iz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ObjectLongMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.jz_1;
    var v = this.kz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.iz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectLongMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!v[index].equals(o.n2(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectLongMap.forEach' call
    var k = this.jz_1;
    var v = this.kz_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectLongMap.forEachIndexed' call
      var m = this.iz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectLongMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ObjectLongMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var value = v[index];
                  s.o8(key === this ? '(this)' : key);
                  s.p8('=');
                  s.fd(value);
                  i = i + 1 | 0;
                  if (i < this.mz_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectLongMap).ky = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.lz_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.iz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals(this.jz_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    $this.wz_1 = newCapacity;
    initializeMetadata_8($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_0.uz_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_2.vz_1 = tmp_3;
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
      this_0[i] = this_0[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
      tmp_0 = this_0;
    }
    tmp.tz_1 = tmp_0;
    initializeGrowth_8($this);
  }
  function initializeGrowth_8($this) {
    $this.d10_1 = loadedCapacity($this.qu()) - $this.xz_1 | 0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.wz_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.tz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.d10_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var tmp$ret$0 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    initializeStorage_8(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).e10 = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.f10(key);
    var index_0 = index < 0 ? ~index : index;
    this.uz_1[index_0] = key;
    this.vz_1[index_0] = value;
  };
  protoOf(MutableScatterMap).g2 = function (key) {
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
      var probeMask = this.wz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.tz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$5);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (equals(this.uz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.kw(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).kw = function (index) {
    this.xz_1 = this.xz_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.tz_1;
    var capacity = this.wz_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.uz_1[index] = null;
    var oldValue = this.vz_1[index];
    this.vz_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).i2 = function () {
    this.xz_1 = 0;
    if (!(this.tz_1 === get_EmptyGroup())) {
      fill(this.tz_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.tz_1;
      var offset = this.wz_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    }
    fill_0(this.vz_1, null, 0, this.wz_1);
    fill_0(this.uz_1, null, 0, this.wz_1);
    initializeGrowth_8(this);
  };
  protoOf(MutableScatterMap).f10 = function (key) {
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
    var probeMask = this.wz_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = this.tz_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals(this.uz_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6(this, hash1);
    var tmp_0;
    if (this.d10_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.tz_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.kv();
      index_0 = findFirstAvailableSlot_6(this, hash1);
    }
    this.xz_1 = this.xz_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.d10_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.tz_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.d10_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.tz_1;
    var capacity = this.wz_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).kv = function () {
    var tmp;
    if (this.wz_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.xz_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.wz_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.wz_1));
    }
  };
  protoOf(MutableScatterMap).nv = function () {
    var metadata = this.tz_1;
    var capacity = this.wz_1;
    var keys = this.uz_1;
    var values = this.vz_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
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
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
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
  protoOf(MutableScatterMap).mv = function (newCapacity) {
    var previousMetadata = this.tz_1;
    var previousKeys = this.uz_1;
    var previousValues = this.vz_1;
    var previousCapacity = this.wz_1;
    initializeStorage_8(this, newCapacity);
    var newMetadata = this.tz_1;
    var newKeys = this.uz_1;
    var newValues = this.vz_1;
    var capacity = this.wz_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function ScatterMap() {
    this.tz_1 = get_EmptyGroup();
    this.uz_1 = get_EMPTY_OBJECTS();
    this.vz_1 = get_EMPTY_OBJECTS();
    this.wz_1 = 0;
    this.xz_1 = 0;
  }
  protoOf(ScatterMap).qu = function () {
    return this.wz_1;
  };
  protoOf(ScatterMap).j = function () {
    return this.xz_1;
  };
  protoOf(ScatterMap).q = function () {
    return this.xz_1 === 0;
  };
  protoOf(ScatterMap).zy = function () {
    return !(this.xz_1 === 0);
  };
  protoOf(ScatterMap).n2 = function (key) {
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
      var probeMask = this.wz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.tz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$5);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (equals(this.uz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
      var tmp_1 = this.vz_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).l2 = function (key) {
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
      var probeMask = this.wz_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.tz_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$5);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (equals(this.uz_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
    var k = this.uz_1;
    var v = this.vz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.tz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.uz_1;
    var v = this.vz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.tz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.n2(key) == null) || !o.l2(key)) {
                      return false;
                    }
                  } else if (!equals(value, o.n2(key))) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().q8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.uz_1;
    var v = this.vz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.tz_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var tmp = k[index];
                  var key = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.o8(key === this ? '(this)' : key);
                  s.p8('=');
                  s.o8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.xz_1) {
                    s.q8(_Char___init__impl__6a9atx(44)).q8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.k3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.q8(_Char___init__impl__6a9atx(125)).toString();
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
    this.o10_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).f11 = function ($this$iterator, $completion) {
    var tmp = this.g11($this$iterator, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).ha = function (p1, $completion) {
    return this.f11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            var tmp_0 = this;
            tmp_0.q10_1 = this.o10_1;
            this.r10_1 = this.q10_1.i11_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_1 = this;
            tmp_1.t10_1 = this.q10_1;
            this.u10_1 = this.t10_1.h11_1;
            this.v10_1 = this.u10_1.length - 2 | 0;
            this.w10_1 = numberRangeToNumber(0, this.v10_1).g();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!this.w10_1.h()) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.x10_1 = this.w10_1.i();
            this.y10_1 = this.u10_1[this.x10_1];
            var this_0 = this.y10_1;
            if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.z10_1 = 8 - (~(this.x10_1 - this.v10_1 | 0) >>> 31 | 0) | 0;
              this.a11_1 = until(0, this.z10_1).g();
              this.n9_1 = 3;
              continue $sm;
            } else {
              this.n9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.a11_1.h()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.b11_1 = this.a11_1.i();
            if (this.y10_1.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
              this.c11_1 = (this.x10_1 << 3) + this.b11_1 | 0;
              var tmp_2 = this;
              tmp_2.d11_1 = this.c11_1;
              var tmp_3 = this;
              var tmp_4 = this.r10_1[this.d11_1];
              tmp_3.e11_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.n9_1 = 4;
              suspendResult = this.p10_1.wh(this.e11_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.y10_1 = this.y10_1.k3(8);
            this.n9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.z10_1 === 8)) {
              this.s10_1 = Unit_instance;
              this.n9_1 = 10;
              continue $sm;
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 7:
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.n9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 11) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).g11 = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.o10_1, completion);
    i.p10_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.f11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.l11_1 = $outer;
  }
  protoOf(SetWrapper).j = function () {
    return this.l11_1.k11_1;
  };
  protoOf(SetWrapper).a2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.l11_1.p(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).p = function (element) {
    return this.l11_1.p(element);
  };
  protoOf(SetWrapper).q = function () {
    return this.l11_1.q();
  };
  protoOf(SetWrapper).g = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.l11_1, null));
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
    this.h11_1 = get_EmptyGroup();
    this.i11_1 = get_EMPTY_OBJECTS();
    this.j11_1 = 0;
    this.k11_1 = 0;
  }
  protoOf(ScatterSet).qu = function () {
    return this.j11_1;
  };
  protoOf(ScatterSet).j = function () {
    return this.k11_1;
  };
  protoOf(ScatterSet).q = function () {
    return this.k11_1 === 0;
  };
  protoOf(ScatterSet).zy = function () {
    return !(this.k11_1 === 0);
  };
  protoOf(ScatterSet).p = function (element) {
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
      var probeMask = this.j11_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.h11_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$5);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (equals(this.i11_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).dz = function (separator, prefix, postfix, limit, truncated, transform) {
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
      var elements = this.i11_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.h11_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.m3(this_1.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                      this_0.o8(element);
                    } else {
                      this_0.f(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.k3(8);
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
  protoOf(ScatterSet).m11 = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.dz(separator, prefix, postfix, limit, truncated, transform) : $super.dz.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.j11_1;
    hash = imul(31, hash) + this.k11_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.i11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.h11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
                slot = slot.k3(8);
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
    if (!(other.j() === this.j())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.i11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.h11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var tmp = elements[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.p(element)) {
                    return false;
                  }
                }
                slot = slot.k3(8);
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
    return this.m11(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).n11 = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.w11_1 = this$0;
    this.x11_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).f11 = function ($this$iterator, $completion) {
    var tmp = this.g11($this$iterator, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).ha = function (p1, $completion) {
    return this.f11(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.a12_1 = this.w11_1.l12_1;
            this.b12_1 = this.a12_1.h11_1;
            this.c12_1 = this.b12_1.length - 2 | 0;
            this.d12_1 = numberRangeToNumber(0, this.c12_1).g();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!this.d12_1.h()) {
              this.n9_1 = 9;
              continue $sm;
            }

            this.e12_1 = this.d12_1.i();
            this.f12_1 = this.b12_1[this.e12_1];
            var this_0 = this.f12_1;
            if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.g12_1 = 8 - (~(this.e12_1 - this.c12_1 | 0) >>> 31 | 0) | 0;
              this.h12_1 = until(0, this.g12_1).g();
              this.n9_1 = 3;
              continue $sm;
            } else {
              this.n9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.h12_1.h()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.i12_1 = this.h12_1.i();
            if (this.f12_1.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
              this.j12_1 = (this.e12_1 << 3) + this.i12_1 | 0;
              var tmp_1 = this;
              tmp_1.k12_1 = this.j12_1;
              this.w11_1.m12_1 = this.k12_1;
              this.n9_1 = 4;
              var tmp_2 = this.x11_1.i11_1[this.k12_1];
              suspendResult = this.y11_1.wh((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.f12_1 = this.f12_1.k3(8);
            this.n9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.g12_1 === 8)) {
              this.z11_1 = Unit_instance;
              this.n9_1 = 10;
              continue $sm;
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 7:
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.n9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 11) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).g11 = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.w11_1, this.x11_1, completion);
    i.y11_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.f11($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.l12_1 = this$0;
    this.m12_1 = -1;
    var tmp = this;
    tmp.n12_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this, this$0, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).h = function () {
    return this.n12_1.h();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).i = function () {
    return this.n12_1.i();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).o4 = function () {
    if (!(this.m12_1 === -1)) {
      this.l12_1.t12(this.m12_1);
      this.m12_1 = -1;
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
    $this.j11_1 = newCapacity;
    initializeMetadata_9($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = fillArrayVal(Array(newCapacity), null);
    }
    tmp_0.i11_1 = tmp_1;
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
    tmp.h11_1 = tmp_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var data = $this.h11_1;
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    initializeGrowth_9($this);
  }
  function initializeGrowth_9($this) {
    $this.s12_1 = loadedCapacity($this.qu()) - $this.k11_1 | 0;
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
    var probeMask = $this.j11_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.h11_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
      var x = g.o3(tmp$ret$5);
      var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
        if (equals($this.i11_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.m3(this_1.b3(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_7($this, hash1);
    var tmp_0;
    if ($this.s12_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.h11_1[offset_0 >> 3].k3((offset_0 & 7) << 3).m3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.kv();
      index_0 = findFirstAvailableSlot_7($this, hash1);
    }
    $this.k11_1 = $this.k11_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.s12_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.h11_1[offset_1 >> 3].k3((offset_1 & 7) << 3).m3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.s12_1 = tmp_2 - tmp_3 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = $this.h11_1;
    var capacity = $this.j11_1;
    var offset_2 = index_0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = toLong(hash2);
    var i_0 = offset_2 >> 3;
    var b_0 = (offset_2 & 7) << 3;
    data[i_0] = data[i_0].m3((new Long(255, 0)).j3(b_0).i3()).n3(value.j3(b_0));
    var cloneIndex = ((offset_2 - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[offset_2 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_7($this, hash1) {
    var probeMask = $this.j11_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      // Inline function 'androidx.collection.group' call
      var metadata = $this.h11_1;
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.m3(g.i3().j3(7)).m3(new Long(-2139062144, -2139062144));
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
    this.v12_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).e = function (element) {
    return this.v12_1.e(element);
  };
  protoOf(MutableSetWrapper).n = function (elements) {
    return this.v12_1.w12(elements);
  };
  protoOf(MutableSetWrapper).i2 = function () {
    this.v12_1.i2();
  };
  protoOf(MutableSetWrapper).g = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.v12_1);
  };
  protoOf(MutableSetWrapper).o2 = function (element) {
    return this.v12_1.o2(element);
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.s12_1 = 0;
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
    var oldSize = this.j();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.i11_1[index] = element;
    return !(this.j() === oldSize);
  };
  protoOf(MutableScatterSet).x12 = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.i11_1[index] = element;
  };
  protoOf(MutableScatterSet).w12 = function (elements) {
    var oldSize = this.j();
    this.y12(elements);
    return !(oldSize === this.j());
  };
  protoOf(MutableScatterSet).z12 = function (elements) {
    var oldSize = this.j();
    this.a13(elements);
    return !(oldSize === this.j());
  };
  protoOf(MutableScatterSet).y12 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.x12(element);
    }
  };
  protoOf(MutableScatterSet).a13 = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.i11_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.h11_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.m3(this_0.i3().j3(7)).m3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var tmp = elements_0[index];
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.x12(element);
                }
                slot = slot.k3(8);
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
  protoOf(MutableScatterSet).o2 = function (element) {
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
      var probeMask = this.j11_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        // Inline function 'androidx.collection.group' call
        var metadata = this.h11_1;
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = metadata[i].l3(b).n3(metadata[i + 1 | 0].j3(64 - b | 0).m3(toLong(b).h3().k3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).c3(toLong(hash2));
        var x = g.o3(tmp$ret$5);
        var m = x.b3(new Long(16843009, 16843009)).m3(x.i3()).m3(new Long(-2139062144, -2139062144));
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
          if (equals(this.i11_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.m3(this_1.b3(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.m3(g.i3().j3(6)).m3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
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
      this.t12(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).t12 = function (index) {
    this.k11_1 = this.k11_1 - 1 | 0;
    // Inline function 'androidx.collection.writeMetadata' call
    var data = this.h11_1;
    var capacity = this.j11_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
    data[cloneIndex >> 3] = data[index >> 3];
    this.i11_1[index] = null;
  };
  protoOf(MutableScatterSet).i2 = function () {
    this.k11_1 = 0;
    if (!(this.h11_1 === get_EmptyGroup())) {
      fill(this.h11_1, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var data = this.h11_1;
      var offset = this.j11_1;
      var value = new Long(255, 0);
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      data[i] = data[i].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
    }
    fill_0(this.i11_1, null, 0, this.j11_1);
    initializeGrowth_9(this);
  };
  protoOf(MutableScatterSet).kv = function () {
    var tmp;
    if (this.j11_1 > 8) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_0 = this.k11_1;
      var this_1 = _ULong___init__impl__c78o9k(toLong(this_0));
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).c3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.times' call
      // Inline function 'kotlin.toULong' call
      var this_3 = this.j11_1;
      var this_4 = _ULong___init__impl__c78o9k(toLong(this_3));
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).c3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(this_2), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nv();
    } else {
      this.mv(nextCapacity(this.j11_1));
    }
  };
  protoOf(MutableScatterSet).nv = function () {
    var metadata = this.h11_1;
    var capacity = this.j11_1;
    var elements = this.i11_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = metadata[i].m3(new Long(-2139062144, -2139062144));
        metadata[i] = maskedGroup.i3().a3(maskedGroup.l3(7)).m3(new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = (new Long(0, -16777216)).n3(metadata[lastIndex - 1 | 0].m3(new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = metadata[offset >> 3].k3((offset & 7) << 3).m3(new Long(255, 0));
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
        metadata[i_0] = metadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
        metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = metadata[targetIndex >> 3].k3((targetIndex & 7) << 3).m3(new Long(255, 0));
      if (m.equals(new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = toLong(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = metadata[i_1].m3((new Long(255, 0)).j3(b_0).i3()).n3(value_0.j3(b_0));
        // Inline function 'androidx.collection.writeRawMetadata' call
        var offset_1 = index;
        var value_1 = new Long(128, 0);
        var i_2 = offset_1 >> 3;
        var b_1 = (offset_1 & 7) << 3;
        metadata[i_2] = metadata[i_2].m3((new Long(255, 0)).j3(b_1).i3()).n3(value_1.j3(b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = toLong(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = metadata[i_3].m3((new Long(255, 0)).j3(b_2).i3()).n3(value_2.j3(b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = (new Long(0, -2147483648)).n3(metadata[0].m3(new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_9(this);
  };
  protoOf(MutableScatterSet).mv = function (newCapacity) {
    var previousMetadata = this.h11_1;
    var previousElements = this.i11_1;
    var previousCapacity = this.j11_1;
    initializeStorage_9(this, newCapacity);
    var newMetadata = this.h11_1;
    var newElements = this.i11_1;
    var capacity = this.j11_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].k3((i & 7) << 3).m3(new Long(255, 0)).b1(new Long(128, 0)) < 0) {
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
          newMetadata[i_0] = newMetadata[i_0].m3((new Long(255, 0)).j3(b).i3()).n3(value.j3(b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).b13 = function () {
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
    this_0.x12(element1);
    this_0.x12(element2);
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
    this.d13_1 = $this_valueIterator;
    this.c13_1 = 0;
  }
  protoOf(valueIterator$1).h = function () {
    return this.c13_1 < this.d13_1.hr();
  };
  protoOf(valueIterator$1).i = function () {
    var tmp1 = this.c13_1;
    this.c13_1 = tmp1 + 1 | 0;
    return this.d13_1.i13(tmp1);
  };
  function get_DELETED_0() {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    return DELETED_0;
  }
  var DELETED_0;
  function commonGet(_this__u8e3s4, key) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    // Inline function 'androidx.collection.internalGet' call
    var i = binarySearch_0(_this__u8e3s4.f13_1, _this__u8e3s4.h13_1, key);
    var tmp;
    if (i < 0 || _this__u8e3s4.g13_1[i] === _get_DELETED_$accessor$42ybbw_534t2l()) {
      tmp = null;
    } else {
      var tmp_0 = _this__u8e3s4.g13_1[i];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function gc(_this__u8e3s4) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    var n = _this__u8e3s4.h13_1;
    var o = 0;
    var keys = _this__u8e3s4.f13_1;
    var values = _this__u8e3s4.g13_1;
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
    _this__u8e3s4.e13_1 = false;
    _this__u8e3s4.h13_1 = o;
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
      if (midVal.b1(value) < 0) {
        lo = mid + 1 | 0;
      } else if (midVal.b1(value) > 0) {
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
    this.j13_1 = false;
    this.m13_1 = 0;
    if (initialCapacity === 0) {
      this.k13_1 = get_EMPTY_LONGS();
      this.l13_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.k13_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.l13_1 = fillArrayVal(Array(idealCapacity), null);
    }
  }
  protoOf(LongSparseArray).hx = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch(this.k13_1, this.m13_1, key);
    var tmp;
    if (i < 0 || this.l13_1[i] === _get_DELETED_$accessor$gkqe1m_u3mq5h()) {
      tmp = null;
    } else {
      tmp = this.l13_1[i];
    }
    var tmp_0 = tmp;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(LongSparseArray).n13 = function (key) {
    var i = binarySearch(this.k13_1, this.m13_1, key);
    var tmp;
    if (i >= 0) {
      var tmp_0;
      if (!(this.l13_1[i] === _get_DELETED_$accessor$gkqe1m_u3mq5h())) {
        this.l13_1[i] = _get_DELETED_$accessor$gkqe1m_u3mq5h();
        this.j13_1 = true;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LongSparseArray).o13 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch(this.k13_1, this.m13_1, key);
      if (index >= 0) {
        this.l13_1[index] = value;
      } else {
        index = ~index;
        if (index < this.m13_1 && this.l13_1[index] === _get_DELETED_$accessor$gkqe1m_u3mq5h()) {
          this.k13_1[index] = key;
          this.l13_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.j13_1 && this.m13_1 >= this.k13_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.m13_1;
          var newSize = 0;
          var keys = this.k13_1;
          var values = this.l13_1;
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
          this.j13_1 = false;
          this.m13_1 = newSize;
          index = ~binarySearch(this.k13_1, this.m13_1, key);
        }
        if (this.m13_1 >= this.k13_1.length) {
          var newSize_0 = idealLongArraySize(this.m13_1 + 1 | 0);
          this.k13_1 = copyOf_1(this.k13_1, newSize_0);
          this.l13_1 = copyOf_0(this.l13_1, newSize_0);
        }
        if (!((this.m13_1 - index | 0) === 0)) {
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.k13_1;
          var destination = this.k13_1;
          var destinationOffset = index + 1 | 0;
          var startIndex = index;
          var endIndex = this.m13_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
          // Inline function 'kotlin.collections.copyInto' call
          var this_1 = this.l13_1;
          var destination_0 = this.l13_1;
          var destinationOffset_0 = index + 1 | 0;
          var startIndex_0 = index;
          var endIndex_0 = this.m13_1;
          arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
        }
        this.k13_1[index] = key;
        this.l13_1[index] = value;
        this.m13_1 = this.m13_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).hr = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.j13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.m13_1;
      var newSize = 0;
      var keys = this.k13_1;
      var values = this.l13_1;
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
      this.j13_1 = false;
      this.m13_1 = newSize;
    }
    return this.m13_1;
  };
  protoOf(LongSparseArray).q = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.hr() === 0;
  };
  protoOf(LongSparseArray).p13 = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.m13_1 : false)) {
      // Inline function 'androidx.collection.commonKeyAt.<anonymous>' call
      var tmp$ret$0 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (this.j13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.m13_1;
      var newSize = 0;
      var keys = this.k13_1;
      var values = this.l13_1;
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
      this.j13_1 = false;
      this.m13_1 = newSize;
    }
    return this.k13_1[index];
  };
  protoOf(LongSparseArray).i13 = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.m13_1 : false)) {
      // Inline function 'androidx.collection.commonValueAt.<anonymous>' call
      var tmp$ret$0 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (this.j13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.m13_1;
      var newSize = 0;
      var keys = this.k13_1;
      var values = this.l13_1;
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
      this.j13_1 = false;
      this.m13_1 = newSize;
    }
    var tmp = this.l13_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(LongSparseArray).q13 = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.j13_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.m13_1;
      var newSize = 0;
      var keys = this.k13_1;
      var values = this.l13_1;
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
      this.j13_1 = false;
      this.m13_1 = newSize;
    }
    return binarySearch(this.k13_1, this.m13_1, key);
  };
  protoOf(LongSparseArray).ix = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.q13(key) >= 0;
  };
  protoOf(LongSparseArray).i2 = function () {
    var n = this.m13_1;
    var values = this.l13_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.m13_1 = 0;
    this.j13_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.hr() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.m13_1, 28);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.commonToString.<anonymous>' call
      this_0.q8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.m13_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.p8(', ');
          }
          var key = this.p13(i);
          this_0.fd(key);
          this_0.q8(_Char___init__impl__6a9atx(61));
          var value = this.i13(i);
          if (!(value === this_0)) {
            this_0.o8(value);
          } else {
            this_0.p8('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.q8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  function SparseArrayCompat(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.e13_1 = false;
    this.h13_1 = 0;
    if (initialCapacity === 0) {
      this.f13_1 = get_EMPTY_INTS();
      this.g13_1 = get_EMPTY_OBJECTS();
    } else {
      var capacity = idealIntArraySize(initialCapacity);
      this.f13_1 = new Int32Array(capacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.g13_1 = fillArrayVal(Array(capacity), null);
    }
  }
  protoOf(SparseArrayCompat).o = function (key) {
    return commonGet(this, key);
  };
  protoOf(SparseArrayCompat).r13 = function (index) {
    var tmp;
    if (!(this.g13_1[index] === _get_DELETED_$accessor$42ybbw_534t2l())) {
      this.g13_1[index] = _get_DELETED_$accessor$42ybbw_534t2l();
      this.e13_1 = true;
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SparseArrayCompat).s13 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonReplace' call
      var index = this.t13(key);
      if (index >= 0) {
        var tmp = this.g13_1[index];
        var oldValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        this.g13_1[index] = value;
        tmp$ret$0 = oldValue;
        break $l$block;
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).u13 = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var i = binarySearch_0(this.f13_1, this.h13_1, key);
      if (i >= 0) {
        this.g13_1[i] = value;
      } else {
        i = ~i;
        if (i < this.h13_1 && this.g13_1[i] === _get_DELETED_$accessor$42ybbw_534t2l()) {
          this.f13_1[i] = key;
          this.g13_1[i] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.e13_1 && this.h13_1 >= this.f13_1.length) {
          gc$accessor$42ybbw(this);
          i = ~binarySearch_0(this.f13_1, this.h13_1, key);
        }
        if (this.h13_1 >= this.f13_1.length) {
          var n = idealIntArraySize(this.h13_1 + 1 | 0);
          this.f13_1 = copyOf(this.f13_1, n);
          this.g13_1 = copyOf_0(this.g13_1, n);
        }
        if (!((this.h13_1 - i | 0) === 0)) {
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.f13_1;
          var destination = this.f13_1;
          var destinationOffset = i + 1 | 0;
          var startIndex = i;
          var endIndex = this.h13_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
          // Inline function 'kotlin.collections.copyInto' call
          var this_1 = this.g13_1;
          var destination_0 = this.g13_1;
          var destinationOffset_0 = i + 1 | 0;
          var startIndex_0 = i;
          var endIndex_0 = this.h13_1;
          arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
        }
        this.f13_1[i] = key;
        this.g13_1[i] = value;
        this.h13_1 = this.h13_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).hr = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.e13_1) {
      gc$accessor$42ybbw(this);
    }
    return this.h13_1;
  };
  protoOf(SparseArrayCompat).p13 = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    if (this.e13_1) {
      gc$accessor$42ybbw(this);
    }
    return this.f13_1[index];
  };
  protoOf(SparseArrayCompat).i13 = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    if (this.e13_1) {
      gc$accessor$42ybbw(this);
    }
    var tmp = this.g13_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SparseArrayCompat).t13 = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.e13_1) {
      gc$accessor$42ybbw(this);
    }
    return binarySearch_0(this.f13_1, this.h13_1, key);
  };
  protoOf(SparseArrayCompat).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.hr() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      var buffer = StringBuilder_init_$Create$_0(imul(this.h13_1, 28));
      buffer.q8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.h13_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            buffer.p8(', ');
          }
          var key = this.p13(i);
          buffer.ed(key);
          buffer.q8(_Char___init__impl__6a9atx(61));
          var value = this.i13(i);
          if (!(value === this)) {
            buffer.o8(value);
          } else {
            buffer.p8('(this Map)');
          }
        }
         while (inductionVariable < last);
      buffer.q8(_Char___init__impl__6a9atx(125));
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
  _.$_$.q = mutableObjectIntMapOf;
  _.$_$.r = mutableObjectListOf;
  _.$_$.s = mutableObjectLongMapOf;
  _.$_$.t = mutableScatterMapOf;
  _.$_$.u = mutableScatterSetOf_0;
  _.$_$.v = mutableScatterSetOf;
  _.$_$.w = valueIterator;
  _.$_$.x = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.y = _FloatFloatPair___get_packedValue__impl__5lczxp;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
