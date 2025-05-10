(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var protoOf = kotlin_kotlin.$_$.he;
  var initMetadataForInterface = kotlin_kotlin.$_$.ed;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var toString = kotlin_kotlin.$_$.rk;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var hashCode = kotlin_kotlin.$_$.zc;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var equals = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var VOID = kotlin_kotlin.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var roundToInt = kotlin_kotlin.$_$.re;
  var get_lastIndex = kotlin_kotlin.$_$.a9;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var toString_0 = kotlin_kotlin.$_$.le;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var isSatisfiedBy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var fillArrayVal = kotlin_kotlin.$_$.sc;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.f6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.qd;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var coerceAtMost = kotlin_kotlin.$_$.af;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var toLong = kotlin_kotlin.$_$.je;
  var coerceAtLeast = kotlin_kotlin.$_$.xe;
  var numberToLong = kotlin_kotlin.$_$.ee;
  var Long = kotlin_kotlin.$_$.wi;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.we;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ti;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var get_sign = kotlin_kotlin.$_$.te;
  var coerceIn = kotlin_kotlin.$_$.ef;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Enum = kotlin_kotlin.$_$.qi;
  var coerceAtMost_0 = kotlin_kotlin.$_$.bf;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var charSequenceLength = kotlin_kotlin.$_$.lc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g3;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.e6;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.z5;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.y5;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.b6;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var ModifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(AspectRatioElement, 'AspectRatioElement', VOID, ModifierNodeElement);
  initMetadataForClass(AspectRatioNode, 'AspectRatioNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(BoxChildDataElement, 'BoxChildDataElement', VOID, ModifierNodeElement);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.tb4(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.tb4.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).a5b_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance');
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.yb6(_this__u8e3s4, weight, fill) : $super.yb6.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(RowScope, 'RowScope');
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData', RowColumnParentData);
  initMetadataForCompanion(Companion);
  initMetadataForClass(CrossAxisAlignment, 'CrossAxisAlignment');
  initMetadataForObject(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(StartCrossAxisAlignment, 'StartCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(EndCrossAxisAlignment, 'EndCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(LayoutWeightElement, 'LayoutWeightElement', VOID, ModifierNodeElement);
  initMetadataForClass(HorizontalAlignElement, 'HorizontalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(LayoutWeightNode, 'LayoutWeightNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForClass(HorizontalAlignNode, 'HorizontalAlignNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(LimitInsets, 'LimitInsets');
  initMetadataForClass(ExcludeInsets, 'ExcludeInsets');
  initMetadataForClass(UnionInsets, 'UnionInsets');
  initMetadataForClass(InsetsPaddingValues, 'InsetsPaddingValues');
  initMetadataForClass(InsetsPaddingModifier, 'InsetsPaddingModifier', VOID, VOID, [LayoutModifier, ModifierLocalConsumer, ModifierLocalProvider]);
  initMetadataForClass(ConsumedInsetsModifier, 'ConsumedInsetsModifier', VOID, VOID, [ModifierLocalConsumer]);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.ob1_1 = space;
    this.pb1_1 = rtlMirror;
    this.qb1_1 = alignment;
    this.rb1_1 = this.ob1_1;
  }
  protoOf(SpacedAligned).lb1 = function () {
    return this.rb1_1;
  };
  protoOf(SpacedAligned).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_instance;
    var spacePx = _this__u8e3s4.i5b(this.ob1_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.pb1_1 && layoutDirection.equals(LayoutDirection_Rtl_getInstance());
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.min' call
        var a = occupied;
        var b = totalSize - item | 0;
        outPositions[tmp1] = Math.min(a, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (totalSize - outPositions[tmp1] | 0) - item | 0;
        lastSpace = Math.min(spacePx, b_0);
        occupied = (outPositions[tmp1] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var it = sizes[i];
          // Inline function 'kotlin.math.min' call
          var a_0 = occupied;
          var b_1 = totalSize - it | 0;
          outPositions[i] = Math.min(a_0, b_1);
          // Inline function 'kotlin.math.min' call
          var b_2 = (totalSize - outPositions[i] | 0) - it | 0;
          lastSpace = Math.min(spacePx, b_2);
          occupied = (outPositions[i] + it | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.qb1_1 == null) && occupied < totalSize) {
      var groupPosition = this.qb1_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.mb1(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.pb1_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + Dp__toString_impl_kcddez(this.ob1_1) + ', ' + toString(this.qb1_1) + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.ob1_1);
    result = imul(result, 31) + getBooleanHashCode(this.pb1_1) | 0;
    result = imul(result, 31) + (this.qb1_1 == null ? 0 : hashCode(this.qb1_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.ob1_1, tmp0_other_with_cast.ob1_1))
      return false;
    if (!(this.pb1_1 === tmp0_other_with_cast.pb1_1))
      return false;
    if (!equals(this.qb1_1, tmp0_other_with_cast.qb1_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().bb2(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ab2(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ab2(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().bb2(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().bb2(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ab2(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.cb2_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).lb1 = function () {
    return this.cb2_1;
  };
  protoOf(Arrangement$Center$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().db2(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().db2(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().db2(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.eb2_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).lb1 = function () {
    return this.eb2_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().fb2(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().fb2(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().fb2(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.gb2_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).lb1 = function () {
    return this.gb2_1;
  };
  protoOf(Arrangement$SpaceBetween$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().hb2(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().hb2(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().hb2(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ib2_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).lb1 = function () {
    return this.ib2_1;
  };
  protoOf(Arrangement$SpaceAround$1).mb1 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().jb2(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().jb2(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).nb1 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().jb2(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().j7b_1.n7b(0, size, layoutDirection);
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.sb1_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.tb1_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.ub1_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.vb1_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.wb1_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.xb1_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.yb1_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.zb1_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).kb2 = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).ab2 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).bb2 = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).db2 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).fb2 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).hb2 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).jb2 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function aspectRatio(_this__u8e3s4, ratio, matchHeightConstraintsFirst) {
    matchHeightConstraintsFirst = matchHeightConstraintsFirst === VOID ? false : matchHeightConstraintsFirst;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = aspectRatio$lambda(ratio, matchHeightConstraintsFirst);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.t7b(new AspectRatioElement(ratio, matchHeightConstraintsFirst, tmp$ret$0));
  }
  function AspectRatioElement(aspectRatio, matchHeightConstraintsFirst, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.mb2_1 = aspectRatio;
    this.nb2_1 = matchHeightConstraintsFirst;
    this.ob2_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mb2_1 > 0)) {
      // Inline function 'androidx.compose.foundation.layout.AspectRatioElement.<anonymous>' call
      var message = 'aspectRatio ' + this.mb2_1 + ' must be > 0';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(AspectRatioElement).o33 = function () {
    return new AspectRatioNode(this.mb2_1, this.nb2_1);
  };
  protoOf(AspectRatioElement).pb2 = function (node) {
    node.db3_1 = this.mb2_1;
    node.eb3_1 = this.nb2_1;
  };
  protoOf(AspectRatioElement).b7f = function (node) {
    return this.pb2(node instanceof AspectRatioNode ? node : THROW_CCE());
  };
  protoOf(AspectRatioElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AspectRatioElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.mb2_1 === otherModifier.mb2_1 && this.nb2_1 === other.nb2_1;
  };
  protoOf(AspectRatioElement).hashCode = function () {
    return imul(getNumberHashCode(this.mb2_1), 31) + getBooleanHashCode(this.nb2_1) | 0;
  };
  function findSize(_this__u8e3s4, $this) {
    if (!$this.eb3_1) {
      // Inline function 'kotlin.also' call
      var this_0 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it = this_0.o5c_1;
      if (!equals(it, Companion_getInstance_0().n5c_1))
        return it;
      this_0.o5c_1;
      // Inline function 'kotlin.also' call
      var this_1 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_0 = this_1.o5c_1;
      if (!equals(it_0, Companion_getInstance_0().n5c_1))
        return it_0;
      this_1.o5c_1;
      // Inline function 'kotlin.also' call
      var this_2 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_1 = this_2.o5c_1;
      if (!equals(it_1, Companion_getInstance_0().n5c_1))
        return it_1;
      this_2.o5c_1;
      // Inline function 'kotlin.also' call
      var this_3 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_2 = this_3.o5c_1;
      if (!equals(it_2, Companion_getInstance_0().n5c_1))
        return it_2;
      this_3.o5c_1;
      // Inline function 'kotlin.also' call
      var this_4 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_3 = this_4.o5c_1;
      if (!equals(it_3, Companion_getInstance_0().n5c_1))
        return it_3;
      this_4.o5c_1;
      // Inline function 'kotlin.also' call
      var this_5 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_4 = this_5.o5c_1;
      if (!equals(it_4, Companion_getInstance_0().n5c_1))
        return it_4;
      this_5.o5c_1;
      // Inline function 'kotlin.also' call
      var this_6 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_5 = this_6.o5c_1;
      if (!equals(it_5, Companion_getInstance_0().n5c_1))
        return it_5;
      this_6.o5c_1;
      // Inline function 'kotlin.also' call
      var this_7 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_6 = this_7.o5c_1;
      if (!equals(it_6, Companion_getInstance_0().n5c_1))
        return it_6;
      this_7.o5c_1;
    } else {
      // Inline function 'kotlin.also' call
      var this_8 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_7 = this_8.o5c_1;
      if (!equals(it_7, Companion_getInstance_0().n5c_1))
        return it_7;
      this_8.o5c_1;
      // Inline function 'kotlin.also' call
      var this_9 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_8 = this_9.o5c_1;
      if (!equals(it_8, Companion_getInstance_0().n5c_1))
        return it_8;
      this_9.o5c_1;
      // Inline function 'kotlin.also' call
      var this_10 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_9 = this_10.o5c_1;
      if (!equals(it_9, Companion_getInstance_0().n5c_1))
        return it_9;
      this_10.o5c_1;
      // Inline function 'kotlin.also' call
      var this_11 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_10 = this_11.o5c_1;
      if (!equals(it_10, Companion_getInstance_0().n5c_1))
        return it_10;
      this_11.o5c_1;
      // Inline function 'kotlin.also' call
      var this_12 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_11 = this_12.o5c_1;
      if (!equals(it_11, Companion_getInstance_0().n5c_1))
        return it_11;
      this_12.o5c_1;
      // Inline function 'kotlin.also' call
      var this_13 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_12 = this_13.o5c_1;
      if (!equals(it_12, Companion_getInstance_0().n5c_1))
        return it_12;
      this_13.o5c_1;
      // Inline function 'kotlin.also' call
      var this_14 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_13 = this_14.o5c_1;
      if (!equals(it_13, Companion_getInstance_0().n5c_1))
        return it_13;
      this_14.o5c_1;
      // Inline function 'kotlin.also' call
      var this_15 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_14 = this_15.o5c_1;
      if (!equals(it_14, Companion_getInstance_0().n5c_1))
        return it_14;
      this_15.o5c_1;
    }
    return Companion_getInstance_0().n5c_1;
  }
  function tryMaxWidth(_this__u8e3s4, $this, enforceConstraints) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    if (!(maxWidth === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = maxWidth / $this.db3_1;
      var height = roundToInt(this_0);
      if (height > 0) {
        var size = IntSize_0(maxWidth, height);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_0().n5c_1;
  }
  function tryMaxWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMaxHeight(_this__u8e3s4, $this, enforceConstraints) {
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4);
    if (!(maxHeight === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = maxHeight * $this.db3_1;
      var width = roundToInt(this_0);
      if (width > 0) {
        var size = IntSize_0(width, maxHeight);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_0().n5c_1;
  }
  function tryMaxHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinWidth(_this__u8e3s4, $this, enforceConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minWidth / $this.db3_1;
    var height = roundToInt(this_0);
    if (height > 0) {
      var size = IntSize_0(minWidth, height);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_0().n5c_1;
  }
  function tryMinWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinHeight(_this__u8e3s4, $this, enforceConstraints) {
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minHeight * $this.db3_1;
    var width = roundToInt(this_0);
    if (width > 0) {
      var size = IntSize_0(width, minHeight);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_0().n5c_1;
  }
  function tryMinHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function AspectRatioNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.y7i($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AspectRatioNode(aspectRatio, matchHeightConstraintsFirst) {
    Node.call(this);
    this.db3_1 = aspectRatio;
    this.eb3_1 = matchHeightConstraintsFirst;
  }
  protoOf(AspectRatioNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    var size = findSize(constraints, this);
    var tmp;
    if (!equals(size, Companion_getInstance_0().n5c_1)) {
      tmp = Companion_instance.d5b(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
    } else {
      tmp = constraints;
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.a7j(wrappedConstraints);
    var tmp_0 = placeable.b7j_1;
    var tmp_1 = placeable.c7j_1;
    return _this__u8e3s4.g7j(tmp_0, tmp_1, VOID, AspectRatioNode$measure$lambda(placeable));
  };
  function aspectRatio$lambda($ratio, $matchHeightConstraintsFirst) {
    return function ($this$null) {
      $this$null.fb3_1 = 'aspectRatio';
      $this$null.hb3_1.jb3('ratio', $ratio);
      $this$null.hb3_1.jb3('matchHeightConstraintsFirst', $matchHeightConstraintsFirst);
      return Unit_instance;
    };
  }
  function get_cache1() {
    _init_properties_Box_kt__tvzvdl();
    return cache1;
  }
  var cache1;
  function get_cache2() {
    _init_properties_Box_kt__tvzvdl();
    return cache2;
  }
  var cache2;
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function cacheFor(propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(9);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.cacheFor.<anonymous>' call
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().x7a_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().y7a_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().z7a_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().a7b_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().b7b_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().c7b_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().d7b_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().e7b_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().f7b_1);
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.u6c(), $boxWidth, $boxHeight, this$0.kb3_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.o(tmp1);
        placeInBox($this$layout, item, measurable, $this_measure.u6c(), $boxWidth._v, $boxHeight._v, this$0.kb3_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.kb3_1 = alignment;
    this.lb3_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).p8l = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.q()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.g7j(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.lb3_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.j() === 1) {
      var measurable = measurables.o(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.a7j(contentConstraints);
        // Inline function 'kotlin.math.max' call
        var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        var b = placeable.b7j_1;
        boxWidth = Math.max(a, b);
        // Inline function 'kotlin.math.max' call
        var a_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        var b_0 = placeable.c7j_1;
        boxHeight = Math.max(a_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.a7j(Companion_instance.d5b(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.g7j(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.j();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.o(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.a7j(contentConstraints);
          placeables[index] = placeable_0;
          // Inline function 'kotlin.math.max' call
          var a_1 = boxWidth_0._v;
          var b_1 = placeable_0.b7j_1;
          boxWidth_0._v = Math.max(a_1, b_1);
          // Inline function 'kotlin.math.max' call
          var a_2 = boxHeight_0._v;
          var b_2 = placeable_0.c7j_1;
          boxHeight_0._v = Math.max(a_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.o(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.a7j(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.g7j(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString_0(this.kb3_1) + ', propagateMinConstraints=' + this.lb3_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.kb3_1);
    result = imul(result, 31) + getBooleanHashCode(this.lb3_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.kb3_1, tmp0_other_with_cast.kb3_1))
      return false;
    if (!(this.lb3_1 === tmp0_other_with_cast.lb3_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ab4_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zb3_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.s7b(IntSize_0(placeable.b7j_1, placeable.c7j_1), IntSize_0(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.g8m(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.zb3_1 = alignment;
    this.ab4_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).p8k = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.w8j();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.x2x(-211209833);
    sourceInformation($composer_0, 'C(Box)237@9098L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.h2l(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.w2u()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:236)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var measurePolicy = get_EmptyBoxMeasurePolicy();
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.w2w();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().i8t_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.x2u();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.q2v();
      if ($composer_2.l2v()) {
        $composer_2.r2v(factory);
      } else {
        $composer_2.u2v();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().n8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().q8t_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
        $this$with.j2x(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
      }
      $composer_2.w2v();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.e2o();
    }
    var tmp0_safe_receiver = $composer_0.y2x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r32(Box$lambda(modifier, $changed));
    }
  }
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_cache1() : get_cache2();
    var tmp0_elvis_lhs = cache.n2(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.fb3_1 = 'align';
      $this$null.gb3_1 = $alignment;
      return Unit_instance;
    };
  }
  function BoxScopeInstance() {
  }
  protoOf(BoxScopeInstance).bb4 = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.t7b(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.db4_1 = alignment;
    this.eb4_1 = matchParentSize;
    this.fb4_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).o33 = function () {
    return new BoxChildDataNode(this.db4_1, this.eb4_1);
  };
  protoOf(BoxChildDataElement).gb4 = function (node) {
    node.zb3_1 = this.db4_1;
    node.ab4_1 = this.eb4_1;
  };
  protoOf(BoxChildDataElement).b7f = function (node) {
    return this.gb4(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.db4_1);
    result = imul(31, result) + getBooleanHashCode(this.eb4_1) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.db4_1, otherModifier.db4_1) && this.eb4_1 === otherModifier.eb4_1;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.hb4_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).p8l = function (_this__u8e3s4, measurables, constraints) {
    return this.hb4_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).s3 = function () {
    return this.hb4_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function cacheFor$_anonymous_$putAlignment_u13yrc($this_apply, $propagateMinConstraints, it) {
    $this_apply.f2(it, new BoxMeasurePolicy(it, $propagateMinConstraints));
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.a5b_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.a5b_1);
    return $this$MeasurePolicy.g7j(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      cache1 = cacheFor(true);
      cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().x7a_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.kb4_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.mb4(crossAxisLayoutSize - placeable.b7j_1 | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.ob4_1.n7b(0, crossAxisLayoutSize - placeable.b7j_1 | 0, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.u6c());
        $this$layout.e8m(item, crossAxisPosition, $mainAxisPositions[tmp1]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.nb4_1 = verticalArrangement;
    this.ob4_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).pb4 = function (_this__u8e3s4) {
    return _this__u8e3s4.c7j_1;
  };
  protoOf(ColumnMeasurePolicy).qb4 = function (_this__u8e3s4) {
    return _this__u8e3s4.b7j_1;
  };
  protoOf(ColumnMeasurePolicy).rb4 = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.nb4_1.nb1(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).sb4 = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.g7j(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).tb4 = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).p8l = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.i5b(this.nb4_1.lb1());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.j();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.j());
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString_0(this.nb4_1) + ', horizontalAlignment=' + toString_0(this.ob4_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.nb4_1);
    result = imul(result, 31) + hashCode(this.ob4_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.nb4_1, tmp0_other_with_cast.nb4_1))
      return false;
    if (!equals(this.ob4_1, tmp0_other_with_cast.ob4_1))
      return false;
    return true;
  };
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance.f5b(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:106)');
    }
    $composer_0.c2v(-1789957655);
    sourceInformation($composer_0, '109@5034L227');
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().ub1_1) && equals(horizontalAlignment, Companion_getInstance().j7b_1)) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1789953197, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.h2l(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy.<anonymous>' call
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function ColumnScopeInstance() {
  }
  protoOf(ColumnScopeInstance).vb4 = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.t7b(new HorizontalAlignElement(alignment));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().ub1_1, Companion_getInstance().j7b_1);
    }
  }
  function PaddingValues(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_0(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_1(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function padding(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.t7b(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.xb4(layoutDirection);
    } else {
      tmp = _this__u8e3s4.wb4(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.wb4(layoutDirection);
    } else {
      tmp = _this__u8e3s4.xb4(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.t7b(new PaddingElement(start, top, end, bottom, true, padding$lambda_0(start, top, end, bottom)));
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.t7b(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.t7b(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.yb4_1 = start;
    this.zb4_1 = top;
    this.ab5_1 = end;
    this.bb5_1 = bottom;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.yb4_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message = 'Start padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.zb4_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.ab5_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_1 = 'End padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.bb5_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }
  }
  protoOf(PaddingValuesImpl).xb4 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.yb4_1 : this.ab5_1;
  };
  protoOf(PaddingValuesImpl).cb5 = function () {
    return this.zb4_1;
  };
  protoOf(PaddingValuesImpl).wb4 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.ab5_1 : this.yb4_1;
  };
  protoOf(PaddingValuesImpl).db5 = function () {
    return this.bb5_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.yb4_1, other.yb4_1) && equals(this.zb4_1, other.zb4_1) && equals(this.ab5_1, other.ab5_1) && equals(this.bb5_1, other.bb5_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.yb4_1), 31) + Dp__hashCode_impl_sxkrra(this.zb4_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.ab5_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bb5_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.yb4_1) + ', top=' + Dp__toString_impl_kcddez(this.zb4_1) + ', end=' + Dp__toString_impl_kcddez(this.ab5_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bb5_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.fb5_1 = start;
    this.gb5_1 = top;
    this.hb5_1 = end;
    this.ib5_1 = bottom;
    this.jb5_1 = rtlAware;
    this.kb5_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((_Dp___get_value__impl__geb1vb(this.fb5_1) >= 0.0 || equals(this.fb5_1, Companion_getInstance_3().z5b_1)) && (_Dp___get_value__impl__geb1vb(this.gb5_1) >= 0.0 || equals(this.gb5_1, Companion_getInstance_3().z5b_1)) && (_Dp___get_value__impl__geb1vb(this.hb5_1) >= 0.0 || equals(this.hb5_1, Companion_getInstance_3().z5b_1)) && (_Dp___get_value__impl__geb1vb(this.ib5_1) >= 0.0 || equals(this.ib5_1, Companion_getInstance_3().z5b_1)))) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(PaddingElement).o33 = function () {
    return new PaddingNode(this.fb5_1, this.gb5_1, this.hb5_1, this.ib5_1, this.jb5_1);
  };
  protoOf(PaddingElement).lb5 = function (node) {
    node.zb5_1 = this.fb5_1;
    node.ab6_1 = this.gb5_1;
    node.bb6_1 = this.hb5_1;
    node.cb6_1 = this.ib5_1;
    node.db6_1 = this.jb5_1;
  };
  protoOf(PaddingElement).b7f = function (node) {
    return this.lb5(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.fb5_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.gb5_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.hb5_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.ib5_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.jb5_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.fb5_1, otherModifierElement.fb5_1) && equals(this.gb5_1, otherModifierElement.gb5_1) && equals(this.hb5_1, otherModifierElement.hb5_1) && equals(this.ib5_1, otherModifierElement.ib5_1) && this.jb5_1 === otherModifierElement.jb5_1;
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.fb6_1 = paddingValues;
    this.gb6_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).o33 = function () {
    return new PaddingValuesModifier(this.fb6_1);
  };
  protoOf(PaddingValuesElement).hb6 = function (node) {
    node.vb6_1 = this.fb6_1;
  };
  protoOf(PaddingValuesElement).b7f = function (node) {
    return this.hb6(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.fb6_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.fb6_1, otherElement.fb6_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.db6_1) {
        $this$layout.y7i($placeable, $this_measure.i5b(this$0.zb5_1), $this_measure.i5b(this$0.ab6_1));
        tmp = Unit_instance;
      } else {
        $this$layout.e8m($placeable, $this_measure.i5b(this$0.zb5_1), $this_measure.i5b(this$0.ab6_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.zb5_1 = start;
    this.ab6_1 = top;
    this.bb6_1 = end;
    this.cb6_1 = bottom;
    this.db6_1 = rtlAware;
  }
  protoOf(PaddingNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.i5b(this.zb5_1) + _this__u8e3s4.i5b(this.bb6_1) | 0;
    var vertical = _this__u8e3s4.i5b(this.ab6_1) + _this__u8e3s4.i5b(this.cb6_1) | 0;
    var placeable = measurable.a7j(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.b7j_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.c7j_1 + vertical | 0);
    return _this__u8e3s4.g7j(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.e8m($placeable, $this_measure.i5b(this$0.vb6_1.xb4($this_measure.u6c())), $this_measure.i5b(this$0.vb6_1.cb5()));
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.vb6_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).z7i = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.vb6_1.xb4(_this__u8e3s4.u6c());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.vb6_1.cb5();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.vb6_1.wb4(_this__u8e3s4.u6c());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.vb6_1.db5();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    var horizontal = _this__u8e3s4.i5b(this.vb6_1.xb4(_this__u8e3s4.u6c())) + _this__u8e3s4.i5b(this.vb6_1.wb4(_this__u8e3s4.u6c())) | 0;
    var vertical = _this__u8e3s4.i5b(this.vb6_1.cb5()) + _this__u8e3s4.i5b(this.vb6_1.db5()) | 0;
    var placeable = measurable.a7j(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.b7j_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.c7j_1 + vertical | 0);
    return _this__u8e3s4.g7j(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.fb3_1 = 'padding';
      $this$$receiver.hb3_1.jb3('horizontal', new Dp($horizontal));
      $this$$receiver.hb3_1.jb3('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function padding$lambda_0($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.fb3_1 = 'padding';
      $this$$receiver.hb3_1.jb3('start', new Dp($start));
      $this$$receiver.hb3_1.jb3('top', new Dp($top));
      $this$$receiver.hb3_1.jb3('end', new Dp($end));
      $this$$receiver.hb3_1.jb3('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.fb3_1 = 'padding';
      $this$$receiver.hb3_1.jb3('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_2($all) {
    return function ($this$$receiver) {
      $this$$receiver.fb3_1 = 'padding';
      $this$$receiver.gb3_1 = new Dp($all);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.kb4_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.mb4(crossAxisLayoutSize - placeable.c7j_1 | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.xb6_1.p7b(0, crossAxisLayoutSize - placeable.c7j_1 | 0) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.e8m(item, $mainAxisPositions[tmp1], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.wb6_1 = horizontalArrangement;
    this.xb6_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).pb4 = function (_this__u8e3s4) {
    return _this__u8e3s4.b7j_1;
  };
  protoOf(RowMeasurePolicy).qb4 = function (_this__u8e3s4) {
    return _this__u8e3s4.c7j_1;
  };
  protoOf(RowMeasurePolicy).p8l = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.i5b(this.wb6_1.lb1());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.j();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.j());
  };
  protoOf(RowMeasurePolicy).rb4 = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.wb6_1.mb1(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.u6c(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).sb4 = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.g7j(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).tb4 = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString_0(this.wb6_1) + ', verticalAlignment=' + toString_0(this.xb6_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.wb6_1);
    result = imul(result, 31) + hashCode(this.xb6_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.wb6_1, tmp0_other_with_cast.wb6_1))
      return false;
    if (!equals(this.xb6_1, tmp0_other_with_cast.xb6_1))
      return false;
    return true;
  };
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance.e5b(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  function RowScope() {
  }
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:122)');
    }
    $composer_0.c2v(-1828507469);
    sourceInformation($composer_0, '125@5803L224');
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().sb1_1) && equals(verticalAlignment, Companion_getInstance().g7b_1)) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1828503104, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.h2l(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy.<anonymous>' call
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.e2v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function RowScopeInstance() {
  }
  protoOf(RowScopeInstance).yb6 = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return _this__u8e3s4.t7b(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().sb1_1, Companion_getInstance().g7b_1);
    }
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.ib4_1 = weight;
    this.jb4_1 = fill;
    this.kb4_1 = crossAxisAlignment;
    this.lb4_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.ib4_1 + ', fill=' + this.jb4_1 + ', crossAxisAlignment=' + toString(this.kb4_1) + ', flowLayoutData=' + toString(this.lb4_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.ib4_1);
    result = imul(result, 31) + getBooleanHashCode(this.jb4_1) | 0;
    result = imul(result, 31) + (this.kb4_1 == null ? 0 : hashCode(this.kb4_1)) | 0;
    result = imul(result, 31) + (this.lb4_1 == null ? 0 : this.lb4_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.ib4_1, tmp0_other_with_cast.ib4_1))
      return false;
    if (!(this.jb4_1 === tmp0_other_with_cast.jb4_1))
      return false;
    if (!equals(this.kb4_1, tmp0_other_with_cast.kb4_1))
      return false;
    if (!equals(this.lb4_1, tmp0_other_with_cast.lb4_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.w8j();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.ab7_1 = CenterCrossAxisAlignment_getInstance();
    this.bb7_1 = StartCrossAxisAlignment_getInstance();
    this.cb7_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).db7 = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).mb4 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).mb4 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).mb4 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.gb7_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).mb4 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.gb7_1.n7b(0, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + toString_0(this.gb7_1) + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.gb7_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.gb7_1, tmp0_other_with_cast.gb7_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_4();
  }
  protoOf(CrossAxisAlignment).eb7 = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).fb7 = function (placeable) {
    return null;
  };
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.ib4_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.w8j();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.eb7();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.jb4_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.kb4_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.ib7_1 = weight;
    this.jb7_1 = fill;
  }
  protoOf(LayoutWeightElement).o33 = function () {
    return new LayoutWeightNode(this.ib7_1, this.jb7_1);
  };
  protoOf(LayoutWeightElement).kb7 = function (node) {
    node.yb7_1 = this.ib7_1;
    node.zb7_1 = this.jb7_1;
  };
  protoOf(LayoutWeightElement).b7f = function (node) {
    return this.kb7(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.ib7_1);
    result = imul(31, result) + getBooleanHashCode(this.jb7_1) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.ib7_1 === otherModifier.ib7_1 && this.jb7_1 === otherModifier.jb7_1;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.bb8_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).o33 = function () {
    return new HorizontalAlignNode(this.bb8_1);
  };
  protoOf(HorizontalAlignElement).cb8 = function (node) {
    node.qb8_1 = this.bb8_1;
  };
  protoOf(HorizontalAlignElement).b7f = function (node) {
    return this.cb8(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.bb8_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.bb8_1, otherModifier.bb8_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.yb7_1 = weight;
    this.zb7_1 = fill;
  }
  protoOf(LayoutWeightNode).p8k = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    this_0.ib4_1 = this.yb7_1;
    this_0.jb4_1 = this.zb7_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.qb8_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).p8k = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    this_0.kb4_1 = Companion_getInstance_4().db7(this.qb8_1);
    return this_0;
  };
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = toLong(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.o(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp2_safe_receiver = parentData == null ? null : parentData.lb4_1;
            var tmp_0;
            if (tmp2_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp2_safe_receiver.rb8_1 * crossAxisMax;
              tmp_0 = roundToInt(this_0);
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp5_elvis_lhs = placeables[i];
          var tmp_1;
          if (tmp5_elvis_lhs == null) {
            var tmp_2 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_3;
            if (mainAxisMax === 2147483647) {
              tmp_3 = 2147483647;
            } else {
              tmp_3 = coerceAtLeast(remaining, 0);
            }
            var tmp_4 = tmp_3;
            tmp_1 = child.a7j(_this__u8e3s4.ub4(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp5_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.pb4(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.qb4(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'kotlin.math.min' call
          var b = coerceAtLeast(remaining - placeableMainAxisSize | 0, 0);
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (!(mainAxisMax === 2147483647)) {
        tmp_5 = mainAxisMax;
      } else {
        tmp_5 = mainAxisMin;
      }
      var targetSpace = tmp_5;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.c3(toLong(other));
      var remainingToTarget = coerceAtLeast_0(numberToLong(targetSpace - fixedSpace | 0).b3(arrangementSpacingTotal), new Long(0, 0));
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = remainingToTarget.q3() / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.o(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          try {
            // Inline function 'kotlin.Long.minus' call
            var this_1 = remainder;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var other_1 = roundToInt(weightedSize);
            remainder = this_1.b3(toLong(other_1));
          } catch ($p) {
            if ($p instanceof IllegalArgumentException) {
              var e = $p;
              throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/297974033 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'itemWeight ' + itemWeight + 'weightedSize ' + weightedSize, e);
            } else {
              throw $p;
            }
          }
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.o(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp9_safe_receiver = parentData_0 == null ? null : parentData_0.lb4_1;
              var tmp_7;
              if (tmp9_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_2 = tmp9_safe_receiver.rb8_1 * crossAxisMax;
                tmp_7 = roundToInt(this_2);
              }
              tmp_6 = tmp_7;
            }
            var crossAxisDesiredSize_0 = tmp_6;
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.b3(toLong(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'kotlin.math.max' call
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var b_0 = roundToInt(weightedSize_0) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var childConstraints;
            try {
              var tmp_8;
              if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
                tmp_8 = childMainAxisSize;
              } else {
                tmp_8 = 0;
              }
              var tmp_9 = tmp_8;
              var tmp_10 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
              childConstraints = _this__u8e3s4.tb4(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            } catch ($p) {
              if ($p instanceof IllegalArgumentException) {
                var e_0 = $p;
                throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/300280216 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'weight ' + weight_0 + 'weightedSize ' + weightedSize_0 + 'crossAxisDesiredSize ' + crossAxisDesiredSize_0 + 'remainderUnit ' + remainderUnit + 'childMainAxisSize ' + childMainAxisSize, e_0);
              } else {
                throw $p;
              }
            }
            var placeable_0 = child_0.a7j(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.pb4(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.qb4(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceIn(numberToLong(weightedSpace).a3(arrangementSpacingTotal).g1(), 0, mainAxisMax - fixedSpace | 0);
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp13_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.fb7(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.qb4(placeable_1);
            // Inline function 'kotlin.math.max' call
            var a_1 = beforeCrossAxisAlignmentLine;
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(a_1, b_1);
            // Inline function 'kotlin.math.max' call
            var a_2 = afterCrossAxisAlignmentLine;
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = placeableCrossAxisSize_1;
            }
            var b_2 = placeableCrossAxisSize_1 - tmp_11 | 0;
            afterCrossAxisAlignmentLine = Math.max(a_2, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var a_3 = coerceAtLeast(fixedSpace + weightedSpace | 0, 0);
    var mainAxisLayoutSize = Math.max(a_3, mainAxisMin);
    // Inline function 'kotlin.math.max' call
    var a_4 = crossAxisSpace;
    // Inline function 'kotlin.math.max' call
    var b_3 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    var b_4 = Math.max(crossAxisMin, b_3);
    var crossAxisLayoutSize = Math.max(a_4, b_4);
    var tmp_12 = 0;
    var tmp_13 = new Int32Array(subSize);
    while (tmp_12 < subSize) {
      tmp_13[tmp_12] = 0;
      tmp_12 = tmp_12 + 1 | 0;
    }
    var mainAxisPositions = tmp_13;
    _this__u8e3s4.rb4(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.sb4(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function Companion_0() {
  }
  protoOf(Companion_0).sb8 = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).tb8 = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).ub8 = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.wb8_1 = direction;
    this.xb8_1 = fraction;
    this.yb8_1 = inspectorName;
  }
  protoOf(FillElement).o33 = function () {
    return new FillNode(this.wb8_1, this.xb8_1);
  };
  protoOf(FillElement).zb8 = function (node) {
    node.nb9_1 = this.wb8_1;
    node.ob9_1 = this.xb8_1;
  };
  protoOf(FillElement).b7f = function (node) {
    return this.zb8(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.wb8_1.equals(other.wb8_1))
      return false;
    if (!(this.xb8_1 === other.xb8_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.wb8_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.xb8_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.n7b(0, _IntSize___get_width__impl__d9yl4o(size.o5c_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.p7b(0, _IntSize___get_height__impl__prv63b(size.o5c_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.s7b(Companion_getInstance_0().n5c_1, size.o5c_1, layoutDirection));
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).pb9 = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).qb9 = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).rb9 = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.tb9_1 = direction;
    this.ub9_1 = unbounded;
    this.vb9_1 = alignmentCallback;
    this.wb9_1 = align;
    this.xb9_1 = inspectorName;
  }
  protoOf(WrapContentElement).o33 = function () {
    return new WrapContentNode(this.tb9_1, this.ub9_1, this.vb9_1);
  };
  protoOf(WrapContentElement).yb9 = function (node) {
    node.mba_1 = this.tb9_1;
    node.nba_1 = this.ub9_1;
    node.oba_1 = this.vb9_1;
  };
  protoOf(WrapContentElement).b7f = function (node) {
    return this.yb9(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.tb9_1.equals(other.tb9_1))
      return false;
    if (!(this.ub9_1 === other.ub9_1))
      return false;
    if (!equals(this.wb9_1, other.wb9_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.tb9_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.ub9_1) | 0;
    result = imul(31, result) + hashCode(this.wb9_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.y7i($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.nb9_1 = direction;
    this.ob9_1 = fraction;
  }
  protoOf(FillNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.nb9_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.ob9_1;
      var tmp$ret$1 = roundToInt(this_0);
      var width = coerceIn(tmp$ret$1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.nb9_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.ob9_1;
      var tmp$ret$3 = roundToInt(this_1);
      var height = coerceIn(tmp$ret$3, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.a7j(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.b7j_1;
    var tmp_0 = placeable.c7j_1;
    return _this__u8e3s4.g7j(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.oba_1(new IntSize(IntSize_0($wrapperWidth - $placeable.b7j_1 | 0, $wrapperHeight - $placeable.c7j_1 | 0)), $this_measure.u6c()).e5c_1;
      $this$layout.g8m($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.mba_1 = direction;
    this.nba_1 = unbounded;
    this.oba_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.mba_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.mba_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.mba_1.equals(Direction_Vertical_getInstance()) && this.nba_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.mba_1.equals(Direction_Horizontal_getInstance()) && this.nba_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.a7j(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.b7j_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.c7j_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.g7j(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.t7b(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_3().z5b_1 : min;
    max = max === VOID ? Companion_getInstance_3().z5b_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.t7b(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.t7b(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_2.sb8(fraction));
  }
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.t7b(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.t7b(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.t7b(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_2.ub8(fraction));
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().z5b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().z5b_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().z5b_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().z5b_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.qba_1 = minWidth;
    this.rba_1 = minHeight;
    this.sba_1 = maxWidth;
    this.tba_1 = maxHeight;
    this.uba_1 = enforceIncoming;
    this.vba_1 = inspectorInfo;
  }
  protoOf(SizeElement).o33 = function () {
    return new SizeNode(this.qba_1, this.rba_1, this.sba_1, this.tba_1, this.uba_1);
  };
  protoOf(SizeElement).wba = function (node) {
    node.kbb_1 = this.qba_1;
    node.lbb_1 = this.rba_1;
    node.mbb_1 = this.sba_1;
    node.nbb_1 = this.tba_1;
    node.obb_1 = this.uba_1;
  };
  protoOf(SizeElement).b7f = function (node) {
    return this.wba(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.qba_1, other.qba_1))
      return false;
    if (!equals(this.rba_1, other.rba_1))
      return false;
    if (!equals(this.sba_1, other.sba_1))
      return false;
    if (!equals(this.tba_1, other.tba_1))
      return false;
    if (!(this.uba_1 === other.uba_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.qba_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.rba_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.sba_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.tba_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.uba_1) | 0;
    return result;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.mbb_1, Companion_getInstance_3().z5b_1)) {
      tmp = coerceAtLeast(_this__u8e3s4.i5b($this.mbb_1), 0);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.nbb_1, Companion_getInstance_3().z5b_1)) {
      tmp_0 = coerceAtLeast(_this__u8e3s4.i5b($this.nbb_1), 0);
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.kbb_1, Companion_getInstance_3().z5b_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.i5b($this.kbb_1), maxWidth), 0);
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.lbb_1, Companion_getInstance_3().z5b_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.i5b($this.lbb_1), maxHeight), 0);
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.y7i($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().z5b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().z5b_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().z5b_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().z5b_1 : maxHeight;
    Node.call(this);
    this.kbb_1 = minWidth;
    this.lbb_1 = minHeight;
    this.mbb_1 = maxWidth;
    this.nbb_1 = maxHeight;
    this.obb_1 = enforceIncoming;
  }
  protoOf(SizeNode).z7i = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.obb_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.kbb_1, Companion_getInstance_3().z5b_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost_0(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.mbb_1, Companion_getInstance_3().z5b_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.lbb_1, Companion_getInstance_3().z5b_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost_0(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.nbb_1, Companion_getInstance_3().z5b_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.a7j(wrappedConstraints);
    var tmp_4 = placeable.b7j_1;
    var tmp_5 = placeable.c7j_1;
    return _this__u8e3s4.g7j(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.t7b(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_instance_2.tb8(fraction));
  }
  function wrapContentWidth(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().k7b_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().k7b_1) && !unbounded) {
      tmp = get_WrapContentWidthCenter();
    } else if (equals(align, Companion_getInstance().j7b_1) && !unbounded) {
      tmp = get_WrapContentWidthStart();
    } else {
      tmp = Companion_instance_3.pb9(align, unbounded);
    }
    return _this__u8e3s4.t7b(tmp);
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.fb3_1 = 'size';
      $this$null.gb3_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.fb3_1 = 'heightIn';
      $this$null.hb3_1.jb3('min', new Dp($min));
      $this$null.hb3_1.jb3('max', new Dp($max));
      return Unit_instance;
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.fb3_1 = 'width';
      $this$null.gb3_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.fb3_1 = 'height';
      $this$null.gb3_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_2.sb8(1.0);
      FillWholeMaxHeight = Companion_instance_2.tb8(1.0);
      FillWholeMaxSize = Companion_instance_2.ub8(1.0);
      WrapContentWidthCenter = Companion_instance_3.pb9(Companion_getInstance().k7b_1, false);
      WrapContentWidthStart = Companion_instance_3.pb9(Companion_getInstance().j7b_1, false);
      WrapContentHeightCenter = Companion_instance_3.qb9(Companion_getInstance().h7b_1, false);
      WrapContentHeightTop = Companion_instance_3.qb9(Companion_getInstance().g7b_1, false);
      WrapContentSizeCenter = Companion_instance_3.rb9(Companion_getInstance().b7b_1, false);
      WrapContentSizeTopStart = Companion_instance_3.rb9(Companion_getInstance().x7a_1, false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -72882467, 'C(Spacer)39@1433L64:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-72882467, $changed, -1, 'androidx.compose.foundation.layout.Spacer (Spacer.kt:38)');
    }
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
    if (!((0 & 1) === 0))
      modifier_0 = Companion_instance_0;
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.w2w();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_1().i8t_1;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.x2u();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.q2v();
    if ($composer_2.l2v()) {
      $composer_2.r2v(factory);
    } else {
      $composer_2.u2v();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance_1().n8t_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().m8t_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().k8t_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_1().q8t_1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.l2v() || !equals($this$with.y2w(), compositeKeyHash)) {
      $this$with.j2x(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).b2w(compositeKeyHash, block);
    }
    $composer_2.w2v();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function SpacerMeasurePolicy() {
  }
  protoOf(SpacerMeasurePolicy).p8l = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.g7j(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    return SpacerMeasurePolicy_instance;
  }
  function Companion_2() {
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    return Companion_instance_4;
  }
  function WindowInsets(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.pbb_1 = leftVal;
    this.qbb_1 = topVal;
    this.rbb_1 = rightVal;
    this.sbb_1 = bottomVal;
  }
  protoOf(FixedIntInsets).tbb = function (density, layoutDirection) {
    return this.pbb_1;
  };
  protoOf(FixedIntInsets).ubb = function (density) {
    return this.qbb_1;
  };
  protoOf(FixedIntInsets).vbb = function (density, layoutDirection) {
    return this.rbb_1;
  };
  protoOf(FixedIntInsets).wbb = function (density) {
    return this.sbb_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.pbb_1 + ', top=' + this.qbb_1 + ', right=' + this.rbb_1 + ', bottom=' + this.sbb_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.pbb_1 === other.pbb_1 && this.qbb_1 === other.qbb_1 && this.rbb_1 === other.rbb_1 && this.sbb_1 === other.sbb_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.pbb_1;
    result = imul(31, result) + this.qbb_1 | 0;
    result = imul(31, result) + this.rbb_1 | 0;
    result = imul(31, result) + this.sbb_1 | 0;
    return result;
  };
  function only(_this__u8e3s4, sides) {
    return new LimitInsets(_this__u8e3s4, sides);
  }
  function _WindowInsetsSides___init__impl__nuufbx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function WindowInsetsSides__plus_impl_9q9m59($this, sides) {
    return _WindowInsetsSides___init__impl__nuufbx(_get_value__a43j40($this) | _get_value__a43j40(sides));
  }
  function WindowInsetsSides__hasAny_impl_v1wjnf($this, sides) {
    return !((_get_value__a43j40($this) & _get_value__a43j40(sides)) === 0);
  }
  function WindowInsetsSides__toString_impl_h23h9x($this) {
    return 'WindowInsetsSides(' + valueToString($this) + ')';
  }
  function valueToString($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WindowInsetsSides.valueToString.<anonymous>' call
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().bbc_1)) === _get_value__a43j40(Companion_getInstance_8().bbc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Start');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().fbc_1)) === _get_value__a43j40(Companion_getInstance_8().fbc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Left');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().dbc_1)) === _get_value__a43j40(Companion_getInstance_8().dbc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Top');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().cbc_1)) === _get_value__a43j40(Companion_getInstance_8().cbc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'End');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().gbc_1)) === _get_value__a43j40(Companion_getInstance_8().gbc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Right');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().ebc_1)) === _get_value__a43j40(Companion_getInstance_8().ebc_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.xbb_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.ybb_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.zbb_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.abc_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.bbc_1 = WindowInsetsSides__plus_impl_9q9m59(this.xbb_1, this.abc_1);
    this.cbc_1 = WindowInsetsSides__plus_impl_9q9m59(this.ybb_1, this.zbb_1);
    this.dbc_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.ebc_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.fbc_1 = WindowInsetsSides__plus_impl_9q9m59(this.xbb_1, this.zbb_1);
    this.gbc_1 = WindowInsetsSides__plus_impl_9q9m59(this.ybb_1, this.abc_1);
    this.hbc_1 = WindowInsetsSides__plus_impl_9q9m59(this.fbc_1, this.gbc_1);
    this.ibc_1 = WindowInsetsSides__plus_impl_9q9m59(this.dbc_1, this.ebc_1);
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function valueToString$_anonymous_$appendPlus_uyjmpe($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.q8(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.p8(text);
  }
  function LimitInsets(insets, sides) {
    this.jbc_1 = insets;
    this.kbc_1 = sides;
  }
  protoOf(LimitInsets).tbb = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_8().xbb_1;
    } else {
      tmp = Companion_getInstance_8().zbb_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.kbc_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.jbc_1.tbb(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).ubb = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.kbc_1, Companion_getInstance_8().dbc_1) ? this.jbc_1.ubb(density) : 0;
  };
  protoOf(LimitInsets).vbb = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_8().ybb_1;
    } else {
      tmp = Companion_getInstance_8().abc_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.kbc_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.jbc_1.vbb(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).wbb = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.kbc_1, Companion_getInstance_8().ebc_1) ? this.jbc_1.wbb(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.jbc_1, other.jbc_1) && this.kbc_1 === other.kbc_1;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.jbc_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.kbc_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + toString_0(this.jbc_1) + ' only ' + WindowInsetsSides__toString_impl_h23h9x(this.kbc_1) + ')';
  };
  function exclude(_this__u8e3s4, insets) {
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function union(_this__u8e3s4, insets) {
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function ExcludeInsets(included, excluded) {
    this.lbc_1 = included;
    this.mbc_1 = excluded;
  }
  protoOf(ExcludeInsets).tbb = function (density, layoutDirection) {
    return coerceAtLeast(this.lbc_1.tbb(density, layoutDirection) - this.mbc_1.tbb(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).ubb = function (density) {
    return coerceAtLeast(this.lbc_1.ubb(density) - this.mbc_1.ubb(density) | 0, 0);
  };
  protoOf(ExcludeInsets).vbb = function (density, layoutDirection) {
    return coerceAtLeast(this.lbc_1.vbb(density, layoutDirection) - this.mbc_1.vbb(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).wbb = function (density) {
    return coerceAtLeast(this.lbc_1.wbb(density) - this.mbc_1.wbb(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + toString_0(this.lbc_1) + ' - ' + toString_0(this.mbc_1) + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.lbc_1, this.lbc_1) && equals(other.mbc_1, this.mbc_1);
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.lbc_1)) + hashCode(this.mbc_1) | 0;
  };
  function UnionInsets(first, second) {
    this.nbc_1 = first;
    this.obc_1 = second;
  }
  protoOf(UnionInsets).tbb = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.nbc_1.tbb(density, layoutDirection);
    var b = this.obc_1.tbb(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).ubb = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.nbc_1.ubb(density);
    var b = this.obc_1.ubb(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).vbb = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.nbc_1.vbb(density, layoutDirection);
    var b = this.obc_1.vbb(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).wbb = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.nbc_1.wbb(density);
    var b = this.obc_1.wbb(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.nbc_1) + imul(hashCode(this.obc_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.nbc_1, this.nbc_1) && equals(other.obc_1, this.obc_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString_0(this.nbc_1) + ' \u222A ' + toString_0(this.obc_1) + ')';
  };
  function asPaddingValues(_this__u8e3s4, density) {
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
  function InsetsPaddingValues(insets, density) {
    this.pbc_1 = insets;
    this.qbc_1 = density;
  }
  protoOf(InsetsPaddingValues).xb4 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateLeftPadding.<anonymous>' call
    var $this$with = this.qbc_1;
    return $this$with.o5b(this.pbc_1.tbb($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).cb5 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateTopPadding.<anonymous>' call
    var $this$with = this.qbc_1;
    return $this$with.o5b(this.pbc_1.ubb($this$with));
  };
  protoOf(InsetsPaddingValues).wb4 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateRightPadding.<anonymous>' call
    var $this$with = this.qbc_1;
    return $this$with.o5b(this.pbc_1.vbb($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).db5 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateBottomPadding.<anonymous>' call
    var $this$with = this.qbc_1;
    return $this$with.o5b(this.pbc_1.wbb($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + toString_0(this.pbc_1) + ', density=' + toString_0(this.qbc_1) + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.pbc_1, other.pbc_1) && equals(this.qbc_1, other.qbc_1);
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.pbc_1);
    result = imul(31, result) + hashCode(this.qbc_1) | 0;
    return result;
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function windowInsetsPadding(_this__u8e3s4, insets) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, windowInsetsPadding$lambda_0(insets));
  }
  function _set_unconsumedInsets__kb2lgg($this, _set____db54di) {
    var this_0 = $this.sbc_1;
    unconsumedInsets$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_unconsumedInsets__8s1nmc($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.sbc_1;
    unconsumedInsets$factory_0();
    return this_0.w();
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    var this_0 = $this.tbc_1;
    consumedInsets$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_consumedInsets__s4tdcd($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.tbc_1;
    consumedInsets$factory_0();
    return this_0.w();
  }
  function InsetsPaddingModifier$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.e8m($placeable, $left, $top);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifier(insets) {
    this.rbc_1 = insets;
    this.sbc_1 = mutableStateOf(this.rbc_1);
    this.tbc_1 = mutableStateOf(this.rbc_1);
  }
  protoOf(InsetsPaddingModifier).z7i = function (_this__u8e3s4, measurable, constraints) {
    var left = _get_unconsumedInsets__8s1nmc(this).tbb(_this__u8e3s4, _this__u8e3s4.u6c());
    var top = _get_unconsumedInsets__8s1nmc(this).ubb(_this__u8e3s4);
    var right = _get_unconsumedInsets__8s1nmc(this).vbb(_this__u8e3s4, _this__u8e3s4.u6c());
    var bottom = _get_unconsumedInsets__8s1nmc(this).wbb(_this__u8e3s4);
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.a7j(childConstraints);
    var width = constrainWidth(constraints, placeable.b7j_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.c7j_1 + vertical | 0);
    return _this__u8e3s4.g7j(width, height, VOID, InsetsPaddingModifier$measure$lambda(placeable, left, top));
  };
  protoOf(InsetsPaddingModifier).s8t = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.y7q(get_ModifierLocalConsumedWindowInsets());
    _set_unconsumedInsets__kb2lgg(this, exclude(this.rbc_1, consumed));
    _set_consumedInsets__2lpxax(this, union(consumed, this.rbc_1));
  };
  protoOf(InsetsPaddingModifier).v = function () {
    return get_ModifierLocalConsumedWindowInsets();
  };
  protoOf(InsetsPaddingModifier).w = function () {
    return _get_consumedInsets__s4tdcd(this);
  };
  protoOf(InsetsPaddingModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifier)) {
      return false;
    }
    return equals(other.rbc_1, this.rbc_1);
  };
  protoOf(InsetsPaddingModifier).hashCode = function () {
    return hashCode(this.rbc_1);
  };
  function onConsumedWindowInsetsChanged(_this__u8e3s4, block) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = onConsumedWindowInsetsChanged$lambda(block);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, onConsumedWindowInsetsChanged$lambda_0(block));
  }
  function ConsumedInsetsModifier(block) {
    this.ubc_1 = block;
    this.vbc_1 = null;
  }
  protoOf(ConsumedInsetsModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ConsumedInsetsModifier)) {
      return false;
    }
    return other.ubc_1 === this.ubc_1;
  };
  protoOf(ConsumedInsetsModifier).hashCode = function () {
    return hashCode(this.ubc_1);
  };
  protoOf(ConsumedInsetsModifier).s8t = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.y7q(get_ModifierLocalConsumedWindowInsets());
    if (!equals(consumed, this.vbc_1)) {
      this.vbc_1 = consumed;
      this.ubc_1(consumed);
    }
    return Unit_instance;
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets(0, 0, 0, 0);
  }
  function windowInsetsPadding$lambda($insets) {
    return function ($this$null) {
      $this$null.fb3_1 = 'windowInsetsPadding';
      $this$null.hb3_1.jb3('insets', $insets);
      return Unit_instance;
    };
  }
  function windowInsetsPadding$lambda_0($insets) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.c2v(-1415685722);
      sourceInformation($composer_0, 'C61@2466L50:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1415685722, $changed, -1, 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous> (WindowInsetsPadding.kt:61)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, -324934766, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.h2l($insets);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous>.<anonymous>' call
        var value = new InsetsPaddingModifier($insets);
        $composer_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.e2v();
      return tmp1_group;
    };
  }
  function onConsumedWindowInsetsChanged$lambda($block) {
    return function ($this$null) {
      $this$null.fb3_1 = 'onConsumedWindowInsetsChanged';
      $this$null.hb3_1.jb3('block', $block);
      return Unit_instance;
    };
  }
  function onConsumedWindowInsetsChanged$lambda_0($block) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.c2v(-1608161351);
      sourceInformation($composer_0, 'C125@4856L61:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1608161351, $changed, -1, 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous> (WindowInsetsPadding.kt:125)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, 16130585, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.h2l($block);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.y2w();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().n2o_1) {
        // Inline function 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous>.<anonymous>' call
        var value = new ConsumedInsetsModifier($block);
        $composer_0.j2x(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.e2v();
      return tmp1_group;
    };
  }
  function unconsumedInsets$factory() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function unconsumedInsets$factory_0() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function consumedInsets$factory() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  function consumedInsets$factory_0() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
  }
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_systemBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).lb1 = get_spacing;
  protoOf(Arrangement$End$1).lb1 = get_spacing;
  protoOf(Arrangement$Top$1).lb1 = get_spacing_0;
  protoOf(Arrangement$Bottom$1).lb1 = get_spacing_0;
  protoOf(ColumnMeasurePolicy).ub4 = createConstraints$default;
  protoOf(RowMeasurePolicy).ub4 = createConstraints$default;
  protoOf(RowScopeInstance).zb6 = weight$default;
  protoOf(InsetsPaddingModifier).x7b = foldIn;
  protoOf(InsetsPaddingModifier).y7b = all;
  protoOf(InsetsPaddingModifier).t7b = then;
  protoOf(ConsumedInsetsModifier).x7b = foldIn;
  protoOf(ConsumedInsetsModifier).y7b = all;
  protoOf(ConsumedInsetsModifier).t7b = then;
  //endregion
  //region block: init
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  Companion_instance_2 = new Companion_0();
  Companion_instance_3 = new Companion_1();
  SpacerMeasurePolicy_instance = new SpacerMeasurePolicy();
  Companion_instance_4 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box;
  _.$_$.b = PaddingValues_1;
  _.$_$.c = PaddingValues;
  _.$_$.d = PaddingValues_0;
  _.$_$.e = Spacer;
  _.$_$.f = WindowInsets;
  _.$_$.g = asPaddingValues;
  _.$_$.h = aspectRatio;
  _.$_$.i = calculateEndPadding;
  _.$_$.j = calculateStartPadding;
  _.$_$.k = columnMeasurePolicy;
  _.$_$.l = exclude;
  _.$_$.m = fillMaxHeight;
  _.$_$.n = fillMaxSize;
  _.$_$.o = fillMaxWidth;
  _.$_$.p = heightIn;
  _.$_$.q = height;
  _.$_$.r = maybeCachedBoxMeasurePolicy;
  _.$_$.s = onConsumedWindowInsetsChanged;
  _.$_$.t = only;
  _.$_$.u = padding_2;
  _.$_$.v = padding_1;
  _.$_$.w = padding_0;
  _.$_$.x = padding;
  _.$_$.y = rowMeasurePolicy;
  _.$_$.z = size;
  _.$_$.a1 = get_systemBars;
  _.$_$.b1 = width;
  _.$_$.c1 = windowInsetsPadding;
  _.$_$.d1 = wrapContentWidth;
  _.$_$.e1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.f1 = Arrangement_getInstance;
  _.$_$.g1 = BoxScopeInstance_instance;
  _.$_$.h1 = ColumnScopeInstance_instance;
  _.$_$.i1 = RowScopeInstance_instance;
  _.$_$.j1 = Companion_instance_4;
  _.$_$.k1 = Companion_getInstance_8;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
