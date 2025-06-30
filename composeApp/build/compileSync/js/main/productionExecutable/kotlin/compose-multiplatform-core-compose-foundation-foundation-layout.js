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
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var VOID = kotlin_kotlin.$_$.j;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var equals = kotlin_kotlin.$_$.od;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.h6;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.j6;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.ff;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var coerceIn = kotlin_kotlin.$_$.dg;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var HorizontalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var toString_0 = kotlin_kotlin.$_$.cm;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.ja;
  var roundToInt = kotlin_kotlin.$_$.pf;
  var get_lastIndex = kotlin_kotlin.$_$.p9;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b4;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var isSatisfiedBy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var fillArrayVal = kotlin_kotlin.$_$.qd;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.ea;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.oe;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var coerceAtMost = kotlin_kotlin.$_$.yf;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var toLong = kotlin_kotlin.$_$.hf;
  var coerceAtLeast = kotlin_kotlin.$_$.vf;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var Long = kotlin_kotlin.$_$.hk;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.uf;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.m2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ek;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var get_sign = kotlin_kotlin.$_$.rf;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Enum = kotlin_kotlin.$_$.bk;
  var coerceAtMost_0 = kotlin_kotlin.$_$.ag;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s5;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.w8;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var minIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var minIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var maxIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var maxIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var ModifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AlignmentLineOffsetDpElement, 'AlignmentLineOffsetDpElement', VOID, ModifierNodeElement);
  initMetadataForClass(AlignmentLineOffsetDpNode, 'AlignmentLineOffsetDpNode', VOID, Node, [LayoutModifierNode, Node]);
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  initMetadataForClass(Arrangement$Absolute$Left$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Center$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Right$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceBetween$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceAround$1, VOID, VOID, VOID, [Horizontal]);
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForObject(Absolute, 'Absolute');
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
    return $super === VOID ? this.cbz(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.cbz.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).v5h_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.ibz(_this__u8e3s4, weight, fill) : $super.ibz.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope');
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForClass(OffsetElement, 'OffsetElement', VOID, ModifierNodeElement);
  initMetadataForClass(OffsetNode, 'OffsetNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(OffsetPxElement, 'OffsetPxElement', VOID, ModifierNodeElement);
  initMetadataForClass(OffsetPxNode, 'OffsetPxNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.ibz(_this__u8e3s4, weight, fill) : $super.ibz.call(this, _this__u8e3s4, weight, fill);
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
  initMetadataForObject(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks');
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
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode, Node]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ExcludeInsets, 'ExcludeInsets');
  initMetadataForClass(InsetsPaddingValues, 'InsetsPaddingValues');
  initMetadataForClass(LimitInsets, 'LimitInsets');
  initMetadataForClass(UnionInsets, 'UnionInsets');
  initMetadataForClass(ConsumedInsetsModifier, 'ConsumedInsetsModifier', VOID, VOID, [ModifierLocalConsumer]);
  initMetadataForClass(InsetsPaddingModifier, 'InsetsPaddingModifier', VOID, VOID, [LayoutModifier, ModifierLocalConsumer, ModifierLocalProvider]);
  //endregion
  function paddingFromBaseline(_this__u8e3s4, top, bottom) {
    top = top === VOID ? Companion_getInstance().x5i_1 : top;
    bottom = bottom === VOID ? Companion_getInstance().x5i_1 : bottom;
    var tmp;
    if (!equals(top, Companion_getInstance().x5i_1)) {
      tmp = paddingFrom(Companion_instance, get_FirstBaseline(), top);
    } else {
      tmp = Companion_instance;
    }
    var tmp_0 = _this__u8e3s4.i7q(tmp);
    var tmp_1;
    if (!equals(bottom, Companion_getInstance().x5i_1)) {
      tmp_1 = paddingFrom(Companion_instance, get_LastBaseline(), VOID, bottom);
    } else {
      tmp_1 = Companion_instance;
    }
    return tmp_0.i7q(tmp_1);
  }
  function paddingFrom(_this__u8e3s4, alignmentLine, before, after) {
    before = before === VOID ? Companion_getInstance().x5i_1 : before;
    after = after === VOID ? Companion_getInstance().x5i_1 : after;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = paddingFrom$lambda(alignmentLine, before, after);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i7q(new AlignmentLineOffsetDpElement(alignmentLine, before, after, tmp$ret$0));
  }
  function AlignmentLineOffsetDpElement(alignmentLine, before, after, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.tbu_1 = alignmentLine;
    this.ubu_1 = before;
    this.vbu_1 = after;
    this.wbu_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((_Dp___get_value__impl__geb1vb(this.ubu_1) >= 0.0 || equals(this.ubu_1, Companion_getInstance().x5i_1)) && (_Dp___get_value__impl__geb1vb(this.vbu_1) >= 0.0 || equals(this.vbu_1, Companion_getInstance().x5i_1)))) {
      // Inline function 'androidx.compose.foundation.layout.AlignmentLineOffsetDpElement.<anonymous>' call
      var message = 'Padding from alignment line must be a non-negative number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AlignmentLineOffsetDpElement).k39 = function () {
    return new AlignmentLineOffsetDpNode(this.tbu_1, this.ubu_1, this.vbu_1);
  };
  protoOf(AlignmentLineOffsetDpElement).xbu = function (node) {
    node.lbv_1 = this.tbu_1;
    node.mbv_1 = this.ubu_1;
    node.nbv_1 = this.vbu_1;
  };
  protoOf(AlignmentLineOffsetDpElement).v7t = function (node) {
    return this.xbu(node instanceof AlignmentLineOffsetDpNode ? node : THROW_CCE());
  };
  protoOf(AlignmentLineOffsetDpElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof AlignmentLineOffsetDpElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.tbu_1, otherModifier.tbu_1) && equals(this.ubu_1, otherModifier.ubu_1) && equals(this.vbu_1, otherModifier.vbu_1);
  };
  protoOf(AlignmentLineOffsetDpElement).hashCode = function () {
    var result = hashCode(this.tbu_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.ubu_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.vbu_1) | 0;
    return result;
  };
  function AlignmentLineOffsetDpNode(alignmentLine, before, after) {
    Node.call(this);
    this.lbv_1 = alignmentLine;
    this.mbv_1 = before;
    this.nbv_1 = after;
  }
  protoOf(AlignmentLineOffsetDpNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    return alignmentLineOffsetMeasure(_this__u8e3s4, this.lbv_1, this.mbv_1, this.nbv_1, measurable, constraints);
  };
  function alignmentLineOffsetMeasure(_this__u8e3s4, alignmentLine, before, after, measurable, constraints) {
    var placeable = measurable.k7y(get_horizontal(alignmentLine) ? Constraints__copy$default_impl_f452rp(constraints, VOID, VOID, 0) : Constraints__copy$default_impl_f452rp(constraints, 0));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.alignmentLineOffsetMeasure.<anonymous>' call
    var it = placeable.r93(alignmentLine);
    var linePosition = !(it === -2147483648) ? it : 0;
    var axis = get_horizontal(alignmentLine) ? placeable.m7y_1 : placeable.l7y_1;
    var axisMax = get_horizontal(alignmentLine) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var paddingBefore = coerceIn((!equals(before, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(before) : 0) - linePosition | 0, 0, axisMax - axis | 0);
    var paddingAfter = coerceIn(((!equals(after, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(after) : 0) - axis | 0) + linePosition | 0, 0, (axisMax - axis | 0) - paddingBefore | 0);
    var tmp;
    if (get_horizontal(alignmentLine)) {
      tmp = placeable.l7y_1;
    } else {
      // Inline function 'kotlin.math.max' call
      var a = (paddingBefore + placeable.l7y_1 | 0) + paddingAfter | 0;
      var b = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      tmp = Math.max(a, b);
    }
    var width = tmp;
    var tmp_0;
    if (get_horizontal(alignmentLine)) {
      // Inline function 'kotlin.math.max' call
      var a_0 = (paddingBefore + placeable.m7y_1 | 0) + paddingAfter | 0;
      var b_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      tmp_0 = Math.max(a_0, b_0);
    } else {
      tmp_0 = placeable.m7y_1;
    }
    var height = tmp_0;
    return _this__u8e3s4.q7y(width, height, VOID, alignmentLineOffsetMeasure$lambda(alignmentLine, before, paddingBefore, width, paddingAfter, placeable, height));
  }
  function get_horizontal(_this__u8e3s4) {
    return _this__u8e3s4 instanceof HorizontalAlignmentLine;
  }
  function paddingFrom$lambda($alignmentLine, $before, $after) {
    return function ($this$null) {
      $this$null.obv_1 = 'paddingFrom';
      $this$null.qbv_1.sbv('alignmentLine', $alignmentLine);
      $this$null.qbv_1.sbv('before', new Dp($before));
      $this$null.qbv_1.sbv('after', new Dp($after));
      return Unit_instance;
    };
  }
  function alignmentLineOffsetMeasure$lambda($alignmentLine, $before, $paddingBefore, $width, $paddingAfter, $placeable, $height) {
    return function ($this$layout) {
      var x = get_horizontal($alignmentLine) ? 0 : !equals($before, Companion_getInstance().x5i_1) ? $paddingBefore : ($width - $paddingAfter | 0) - $placeable.l7y_1 | 0;
      var y = !get_horizontal($alignmentLine) ? 0 : !equals($before, Companion_getInstance().x5i_1) ? $paddingBefore : ($height - $paddingAfter | 0) - $placeable.m7y_1 | 0;
      $this$layout.i7y($placeable, x, y);
      return Unit_instance;
    };
  }
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().cbw(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().ebw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().fbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().gbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().hbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().ibw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Horizontal() {
  }
  function Vertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.kbw_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.lbw_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.mbw_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.nbw_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.obw_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.pbw_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  protoOf(Absolute).qbw = function (space) {
    return new SpacedAligned(space, false, null);
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.rbw_1 = space;
    this.sbw_1 = rtlMirror;
    this.tbw_1 = alignment;
    this.ubw_1 = this.rbw_1;
  }
  protoOf(SpacedAligned).dbw = function () {
    return this.ubw_1;
  };
  protoOf(SpacedAligned).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_instance;
    var spacePx = _this__u8e3s4.f5i(this.rbw_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.sbw_1 && layoutDirection.equals(LayoutDirection_Rtl_getInstance());
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
    if (!(this.tbw_1 == null) && occupied < totalSize) {
      var groupPosition = this.tbw_1(totalSize - occupied | 0, layoutDirection);
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
  protoOf(SpacedAligned).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.tbv(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.sbw_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + Dp__toString_impl_kcddez(this.rbw_1) + ', ' + toString_0(this.tbw_1) + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.rbw_1);
    result = imul(result, 31) + getBooleanHashCode(this.sbw_1) | 0;
    result = imul(result, 31) + (this.tbw_1 == null ? 0 : hashCode(this.tbw_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.rbw_1, tmp0_other_with_cast.rbw_1))
      return false;
    if (!(this.sbw_1 === tmp0_other_with_cast.sbw_1))
      return false;
    if (!equals(this.tbw_1, tmp0_other_with_cast.tbw_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().cbw(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().fbw(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().fbw(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().cbw(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().cbw(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().fbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.vbw_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).dbw = function () {
    return this.vbw_1;
  };
  protoOf(Arrangement$Center$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ebw(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ebw(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ebw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.wbw_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).dbw = function () {
    return this.wbw_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().hbw(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().hbw(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().hbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.xbw_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).dbw = function () {
    return this.xbw_1;
  };
  protoOf(Arrangement$SpaceBetween$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().gbw(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().gbw(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().gbw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ybw_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).dbw = function () {
    return this.ybw_1;
  };
  protoOf(Arrangement$SpaceAround$1).tbv = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ibw(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ibw(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).jbw = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ibw(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance_0().y7p_1.c7q(0, size, layoutDirection);
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.ubv_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.vbv_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.wbv_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.xbv_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.ybv_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.zbv_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.abw_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.bbw_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).qbw = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).fbw = function (totalSize, size, outPosition, reverseInput) {
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
  protoOf(Arrangement).cbw = function (size, outPosition, reverseInput) {
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
  protoOf(Arrangement).ebw = function (totalSize, size, outPosition, reverseInput) {
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
  protoOf(Arrangement).hbw = function (totalSize, size, outPosition, reverseInput) {
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
  protoOf(Arrangement).gbw = function (totalSize, size, outPosition, reverseInput) {
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
  protoOf(Arrangement).ibw = function (totalSize, size, outPosition, reverseInput) {
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
    return _this__u8e3s4.i7q(new AspectRatioElement(ratio, matchHeightConstraintsFirst, tmp$ret$0));
  }
  function AspectRatioElement(aspectRatio, matchHeightConstraintsFirst, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.abx_1 = aspectRatio;
    this.bbx_1 = matchHeightConstraintsFirst;
    this.cbx_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.abx_1 > 0)) {
      // Inline function 'androidx.compose.foundation.layout.AspectRatioElement.<anonymous>' call
      var message = 'aspectRatio ' + this.abx_1 + ' must be > 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AspectRatioElement).k39 = function () {
    return new AspectRatioNode(this.abx_1, this.bbx_1);
  };
  protoOf(AspectRatioElement).dbx = function (node) {
    node.rbx_1 = this.abx_1;
    node.sbx_1 = this.bbx_1;
  };
  protoOf(AspectRatioElement).v7t = function (node) {
    return this.dbx(node instanceof AspectRatioNode ? node : THROW_CCE());
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
    return this.abx_1 === otherModifier.abx_1 && this.bbx_1 === other.bbx_1;
  };
  protoOf(AspectRatioElement).hashCode = function () {
    return imul(getNumberHashCode(this.abx_1), 31) + getBooleanHashCode(this.bbx_1) | 0;
  };
  function findSize(_this__u8e3s4, $this) {
    if (!$this.sbx_1) {
      // Inline function 'kotlin.also' call
      var this_0 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it = this_0.o5j_1;
      if (!equals(it, Companion_getInstance_1().n5j_1))
        return it;
      this_0.o5j_1;
      // Inline function 'kotlin.also' call
      var this_1 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_0 = this_1.o5j_1;
      if (!equals(it_0, Companion_getInstance_1().n5j_1))
        return it_0;
      this_1.o5j_1;
      // Inline function 'kotlin.also' call
      var this_2 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_1 = this_2.o5j_1;
      if (!equals(it_1, Companion_getInstance_1().n5j_1))
        return it_1;
      this_2.o5j_1;
      // Inline function 'kotlin.also' call
      var this_3 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_2 = this_3.o5j_1;
      if (!equals(it_2, Companion_getInstance_1().n5j_1))
        return it_2;
      this_3.o5j_1;
      // Inline function 'kotlin.also' call
      var this_4 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_3 = this_4.o5j_1;
      if (!equals(it_3, Companion_getInstance_1().n5j_1))
        return it_3;
      this_4.o5j_1;
      // Inline function 'kotlin.also' call
      var this_5 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_4 = this_5.o5j_1;
      if (!equals(it_4, Companion_getInstance_1().n5j_1))
        return it_4;
      this_5.o5j_1;
      // Inline function 'kotlin.also' call
      var this_6 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_5 = this_6.o5j_1;
      if (!equals(it_5, Companion_getInstance_1().n5j_1))
        return it_5;
      this_6.o5j_1;
      // Inline function 'kotlin.also' call
      var this_7 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_6 = this_7.o5j_1;
      if (!equals(it_6, Companion_getInstance_1().n5j_1))
        return it_6;
      this_7.o5j_1;
    } else {
      // Inline function 'kotlin.also' call
      var this_8 = new IntSize(tryMaxHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_7 = this_8.o5j_1;
      if (!equals(it_7, Companion_getInstance_1().n5j_1))
        return it_7;
      this_8.o5j_1;
      // Inline function 'kotlin.also' call
      var this_9 = new IntSize(tryMaxWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_8 = this_9.o5j_1;
      if (!equals(it_8, Companion_getInstance_1().n5j_1))
        return it_8;
      this_9.o5j_1;
      // Inline function 'kotlin.also' call
      var this_10 = new IntSize(tryMinHeight$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_9 = this_10.o5j_1;
      if (!equals(it_9, Companion_getInstance_1().n5j_1))
        return it_9;
      this_10.o5j_1;
      // Inline function 'kotlin.also' call
      var this_11 = new IntSize(tryMinWidth$default(_this__u8e3s4, $this));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_10 = this_11.o5j_1;
      if (!equals(it_10, Companion_getInstance_1().n5j_1))
        return it_10;
      this_11.o5j_1;
      // Inline function 'kotlin.also' call
      var this_12 = new IntSize(tryMaxHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_11 = this_12.o5j_1;
      if (!equals(it_11, Companion_getInstance_1().n5j_1))
        return it_11;
      this_12.o5j_1;
      // Inline function 'kotlin.also' call
      var this_13 = new IntSize(tryMaxWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_12 = this_13.o5j_1;
      if (!equals(it_12, Companion_getInstance_1().n5j_1))
        return it_12;
      this_13.o5j_1;
      // Inline function 'kotlin.also' call
      var this_14 = new IntSize(tryMinHeight(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_13 = this_14.o5j_1;
      if (!equals(it_13, Companion_getInstance_1().n5j_1))
        return it_13;
      this_14.o5j_1;
      // Inline function 'kotlin.also' call
      var this_15 = new IntSize(tryMinWidth(_this__u8e3s4, $this, false));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.AspectRatioNode.findSize.<anonymous>' call
      var it_14 = this_15.o5j_1;
      if (!equals(it_14, Companion_getInstance_1().n5j_1))
        return it_14;
      this_15.o5j_1;
    }
    return Companion_getInstance_1().n5j_1;
  }
  function tryMaxWidth(_this__u8e3s4, $this, enforceConstraints) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4);
    if (!(maxWidth === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = maxWidth / $this.rbx_1;
      var height = roundToInt(this_0);
      if (height > 0) {
        var size = IntSize_0(maxWidth, height);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_1().n5j_1;
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
      var this_0 = maxHeight * $this.rbx_1;
      var width = roundToInt(this_0);
      if (width > 0) {
        var size = IntSize_0(width, maxHeight);
        if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
          return size;
        }
      }
    }
    return Companion_getInstance_1().n5j_1;
  }
  function tryMaxHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMaxHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinWidth(_this__u8e3s4, $this, enforceConstraints) {
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minWidth / $this.rbx_1;
    var height = roundToInt(this_0);
    if (height > 0) {
      var size = IntSize_0(minWidth, height);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_1().n5j_1;
  }
  function tryMinWidth$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinWidth(_this__u8e3s4, $this, enforceConstraints);
  }
  function tryMinHeight(_this__u8e3s4, $this, enforceConstraints) {
    var minHeight = _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = minHeight * $this.rbx_1;
    var width = roundToInt(this_0);
    if (width > 0) {
      var size = IntSize_0(width, minHeight);
      if (!enforceConstraints || isSatisfiedBy(_this__u8e3s4, size)) {
        return size;
      }
    }
    return Companion_getInstance_1().n5j_1;
  }
  function tryMinHeight$default(_this__u8e3s4, $this, enforceConstraints, $super) {
    enforceConstraints = enforceConstraints === VOID ? true : enforceConstraints;
    return tryMinHeight(_this__u8e3s4, $this, enforceConstraints);
  }
  function AspectRatioNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.i7y($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AspectRatioNode(aspectRatio, matchHeightConstraintsFirst) {
    Node.call(this);
    this.rbx_1 = aspectRatio;
    this.sbx_1 = matchHeightConstraintsFirst;
  }
  protoOf(AspectRatioNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var size = findSize(constraints, this);
    var tmp;
    if (!equals(size, Companion_getInstance_1().n5j_1)) {
      tmp = Companion_instance_0.y5h(_IntSize___get_width__impl__d9yl4o(size), _IntSize___get_height__impl__prv63b(size));
    } else {
      tmp = constraints;
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.k7y(wrappedConstraints);
    var tmp_0 = placeable.l7y_1;
    var tmp_1 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp_0, tmp_1, VOID, AspectRatioNode$measure$lambda(placeable));
  };
  protoOf(AspectRatioNode).r7y = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!(height === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = height * this.rbx_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.s7y(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).t7y = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!(height === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = height * this.rbx_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.u7y(height);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).v7y = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!(width === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = width / this.rbx_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.w7y(width);
    }
    return tmp;
  };
  protoOf(AspectRatioNode).x7y = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!(width === 2147483647)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = width / this.rbx_1;
      tmp = roundToInt(this_0);
    } else {
      tmp = measurable.y7y(width);
    }
    return tmp;
  };
  function aspectRatio$lambda($ratio, $matchHeightConstraintsFirst) {
    return function ($this$null) {
      $this$null.obv_1 = 'aspectRatio';
      $this$null.qbv_1.sbv('ratio', $ratio);
      $this$null.qbv_1.sbv('matchHeightConstraintsFirst', $matchHeightConstraintsFirst);
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
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().m7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().n7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().o7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().p7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().q7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().r7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().s7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().t7p_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance_0().u7p_1);
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.r6k(), $boxWidth, $boxHeight, this$0.tbx_1);
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
        var measurable = $measurables.u(tmp1);
        placeInBox($this$layout, item, measurable, $this_measure.r6k(), $boxWidth._v, $boxHeight._v, this$0.tbx_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.tbx_1 = alignment;
    this.ubx_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.j()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.q7y(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.ubx_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.p() === 1) {
      var measurable = measurables.u(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.k7y(contentConstraints);
        // Inline function 'kotlin.math.max' call
        var a = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        var b = placeable.l7y_1;
        boxWidth = Math.max(a, b);
        // Inline function 'kotlin.math.max' call
        var a_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        var b_0 = placeable.m7y_1;
        boxHeight = Math.max(a_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.k7y(Companion_instance_0.y5h(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.q7y(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.p();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.u(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.k7y(contentConstraints);
          placeables[index] = placeable_0;
          // Inline function 'kotlin.math.max' call
          var a_1 = boxWidth_0._v;
          var b_1 = placeable_0.l7y_1;
          boxWidth_0._v = Math.max(a_1, b_1);
          // Inline function 'kotlin.math.max' call
          var a_2 = boxHeight_0._v;
          var b_2 = placeable_0.m7y_1;
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
      var last_0 = measurables.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.u(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.k7y(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.q7y(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString(this.tbx_1) + ', propagateMinConstraints=' + this.ubx_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.tbx_1);
    result = imul(result, 31) + getBooleanHashCode(this.ubx_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.tbx_1, tmp0_other_with_cast.tbx_1))
      return false;
    if (!(this.ubx_1 === tmp0_other_with_cast.ubx_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jby_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iby_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.h7q(IntSize_0(placeable.l7y_1, placeable.m7y_1), IntSize_0(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.b97(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.iby_1 = alignment;
    this.jby_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).u94 = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.k93();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v33(-211209833);
    sourceInformation($composer_0, 'C(Box)237@9098L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.f2r(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.u30()) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:236)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var measurePolicy = get_EmptyBoxMeasurePolicy();
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.u32();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_2().s9e_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.v30();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.o31();
      if ($composer_2.j31()) {
        $composer_2.p31(factory);
      } else {
        $composer_2.s31();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().x9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().a9f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
        $this$with.h33(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
      }
      $composer_2.u31();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.c2u();
    }
    var tmp0_safe_receiver = $composer_0.w33();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n38(Box$lambda(modifier, $changed));
    }
  }
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_cache1() : get_cache2();
    var tmp0_elvis_lhs = cache.s2(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.obv_1 = 'align';
      $this$null.pbv_1 = $alignment;
      return Unit_instance;
    };
  }
  function BoxScopeInstance() {
  }
  protoOf(BoxScopeInstance).kby = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i7q(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.mby_1 = alignment;
    this.nby_1 = matchParentSize;
    this.oby_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).k39 = function () {
    return new BoxChildDataNode(this.mby_1, this.nby_1);
  };
  protoOf(BoxChildDataElement).pby = function (node) {
    node.iby_1 = this.mby_1;
    node.jby_1 = this.nby_1;
  };
  protoOf(BoxChildDataElement).v7t = function (node) {
    return this.pby(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.mby_1);
    result = imul(31, result) + getBooleanHashCode(this.nby_1) | 0;
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
    return equals(this.mby_1, otherModifier.mby_1) && this.nby_1 === otherModifier.nby_1;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.qby_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g96 = function (_this__u8e3s4, measurables, constraints) {
    return this.qby_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).x3 = function () {
    return this.qby_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function cacheFor$_anonymous_$putAlignment_u13yrc($this_apply, $propagateMinConstraints, it) {
    $this_apply.k2(it, new BoxMeasurePolicy(it, $propagateMinConstraints));
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.v5h_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.v5h_1);
    return $this$MeasurePolicy.q7y(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
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
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance_0().m7p_1, false);
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
    var childCrossAlignment = parentData == null ? null : parentData.tby_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.vby(crossAxisLayoutSize - placeable.l7y_1 | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.xby_1.c7q(0, crossAxisLayoutSize - placeable.l7y_1 | 0, layoutDirection) : tmp2_elvis_lhs;
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
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.r6k());
        $this$layout.z96(item, crossAxisPosition, $mainAxisPositions[tmp1]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.wby_1 = verticalArrangement;
    this.xby_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).yby = function (_this__u8e3s4) {
    return _this__u8e3s4.m7y_1;
  };
  protoOf(ColumnMeasurePolicy).zby = function (_this__u8e3s4) {
    return _this__u8e3s4.l7y_1;
  };
  protoOf(ColumnMeasurePolicy).abz = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.wby_1.jbw(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).bbz = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.q7y(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).cbz = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.f5i(this.wby_1.dbw());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.p();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.p());
  };
  protoOf(ColumnMeasurePolicy).h96 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.ebz(measurables, height, _this__u8e3s4.f5i(this.wby_1.dbw()));
  };
  protoOf(ColumnMeasurePolicy).i96 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.fbz(measurables, width, _this__u8e3s4.f5i(this.wby_1.dbw()));
  };
  protoOf(ColumnMeasurePolicy).j96 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.gbz(measurables, height, _this__u8e3s4.f5i(this.wby_1.dbw()));
  };
  protoOf(ColumnMeasurePolicy).k96 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.hbz(measurables, width, _this__u8e3s4.f5i(this.wby_1.dbw()));
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString(this.wby_1) + ', horizontalAlignment=' + toString(this.xby_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.wby_1);
    result = imul(result, 31) + hashCode(this.xby_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.wby_1, tmp0_other_with_cast.wby_1))
      return false;
    if (!equals(this.xby_1, tmp0_other_with_cast.xby_1))
      return false;
    return true;
  };
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance_0.c5i(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  function ColumnScope() {
  }
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:106)');
    }
    $composer_0.a31(-1789957655);
    sourceInformation($composer_0, '109@5034L227');
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().wbv_1) && equals(horizontalAlignment, Companion_getInstance_0().y7p_1)) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1789953197, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.f2r(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().l2u_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy.<anonymous>' call
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.h33(value);
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
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function ColumnScopeInstance() {
  }
  protoOf(ColumnScopeInstance).ibz = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.i7q(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  protoOf(ColumnScopeInstance).kbz = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.i7q(new HorizontalAlignElement(alignment));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().wbv_1, Companion_getInstance_0().y7p_1);
    }
  }
  function offset_0(_this__u8e3s4, x, y) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    return _this__u8e3s4.i7q(new OffsetElement(x, y, true, offset$lambda(x, y)));
  }
  function OffsetElement(x, y, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.mbz_1 = x;
    this.nbz_1 = y;
    this.obz_1 = rtlAware;
    this.pbz_1 = inspectorInfo;
  }
  protoOf(OffsetElement).k39 = function () {
    return new OffsetNode(this.mbz_1, this.nbz_1, this.obz_1);
  };
  protoOf(OffsetElement).qbz = function (node) {
    node.ec0_1 = this.mbz_1;
    node.fc0_1 = this.nbz_1;
    node.gc0_1 = this.obz_1;
  };
  protoOf(OffsetElement).v7t = function (node) {
    return this.qbz(node instanceof OffsetNode ? node : THROW_CCE());
  };
  protoOf(OffsetElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.mbz_1, otherModifierElement.mbz_1) && equals(this.nbz_1, otherModifierElement.nbz_1) && this.obz_1 === otherModifierElement.obz_1;
  };
  protoOf(OffsetElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.mbz_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.nbz_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.obz_1) | 0;
    return result;
  };
  protoOf(OffsetElement).toString = function () {
    return 'OffsetModifierElement(x=' + Dp__toString_impl_kcddez(this.mbz_1) + ', y=' + Dp__toString_impl_kcddez(this.nbz_1) + ', rtlAware=' + this.obz_1 + ')';
  };
  function OffsetNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.gc0_1) {
        $this$layout.i7y($placeable, $this_measure.f5i(this$0.ec0_1), $this_measure.f5i(this$0.fc0_1));
        tmp = Unit_instance;
      } else {
        $this$layout.z96($placeable, $this_measure.f5i(this$0.ec0_1), $this_measure.f5i(this$0.fc0_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function OffsetNode(x, y, rtlAware) {
    Node.call(this);
    this.ec0_1 = x;
    this.fc0_1 = y;
    this.gc0_1 = rtlAware;
  }
  protoOf(OffsetNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.k7y(constraints);
    var tmp = placeable.l7y_1;
    var tmp_0 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp, tmp_0, VOID, OffsetNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function offset_1(_this__u8e3s4, offset) {
    return _this__u8e3s4.i7q(new OffsetPxElement(offset, true, offset$lambda_0(offset)));
  }
  function OffsetPxElement(offset, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.ic0_1 = offset;
    this.jc0_1 = rtlAware;
    this.kc0_1 = inspectorInfo;
  }
  protoOf(OffsetPxElement).k39 = function () {
    return new OffsetPxNode(this.ic0_1, this.jc0_1);
  };
  protoOf(OffsetPxElement).lc0 = function (node) {
    node.zc0_1 = this.ic0_1;
    node.ac1_1 = this.jc0_1;
  };
  protoOf(OffsetPxElement).v7t = function (node) {
    return this.lc0(node instanceof OffsetPxNode ? node : THROW_CCE());
  };
  protoOf(OffsetPxElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetPxElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.ic0_1 === otherModifier.ic0_1 && this.jc0_1 === otherModifier.jc0_1;
  };
  protoOf(OffsetPxElement).toString = function () {
    return 'OffsetPxModifier(offset=' + toString(this.ic0_1) + ', rtlAware=' + this.jc0_1 + ')';
  };
  protoOf(OffsetPxElement).hashCode = function () {
    var result = hashCode(this.ic0_1);
    result = imul(31, result) + getBooleanHashCode(this.jc0_1) | 0;
    return result;
  };
  function OffsetPxNode$measure$lambda(this$0, $this_measure, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.zc0_1($this_measure).c5j_1;
      var tmp;
      if (this$0.ac1_1) {
        $this$layout.f97($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      } else {
        $this$layout.d8b($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function OffsetPxNode(offset, rtlAware) {
    Node.call(this);
    this.zc0_1 = offset;
    this.ac1_1 = rtlAware;
  }
  protoOf(OffsetPxNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.k7y(constraints);
    var tmp = placeable.l7y_1;
    var tmp_0 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp, tmp_0, VOID, OffsetPxNode$measure$lambda(this, _this__u8e3s4, placeable));
  };
  function offset$lambda($x, $y) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'offset';
      $this$$receiver.qbv_1.sbv('x', new Dp($x));
      $this$$receiver.qbv_1.sbv('y', new Dp($y));
      return Unit_instance;
    };
  }
  function offset$lambda_0($offset) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'offset';
      $this$$receiver.qbv_1.sbv('offset', $offset);
      return Unit_instance;
    };
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
    return _this__u8e3s4.i7q(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.cc1(layoutDirection);
    } else {
      tmp = _this__u8e3s4.bc1(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.bc1(layoutDirection);
    } else {
      tmp = _this__u8e3s4.cc1(layoutDirection);
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
    return _this__u8e3s4.i7q(new PaddingElement(start, top, end, bottom, true, padding$lambda_0(start, top, end, bottom)));
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.i7q(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.i7q(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
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
    this.dc1_1 = start;
    this.ec1_1 = top;
    this.fc1_1 = end;
    this.gc1_1 = bottom;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.dc1_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message = 'Start padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.ec1_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.fc1_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_1 = 'End padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Dp___get_value__impl__geb1vb(this.gc1_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  protoOf(PaddingValuesImpl).cc1 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.dc1_1 : this.fc1_1;
  };
  protoOf(PaddingValuesImpl).hc1 = function () {
    return this.ec1_1;
  };
  protoOf(PaddingValuesImpl).bc1 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.fc1_1 : this.dc1_1;
  };
  protoOf(PaddingValuesImpl).ic1 = function () {
    return this.gc1_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.dc1_1, other.dc1_1) && equals(this.ec1_1, other.ec1_1) && equals(this.fc1_1, other.fc1_1) && equals(this.gc1_1, other.gc1_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.dc1_1), 31) + Dp__hashCode_impl_sxkrra(this.ec1_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.fc1_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.gc1_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.dc1_1) + ', top=' + Dp__toString_impl_kcddez(this.ec1_1) + ', end=' + Dp__toString_impl_kcddez(this.fc1_1) + ', bottom=' + Dp__toString_impl_kcddez(this.gc1_1) + ')';
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
    this.kc1_1 = start;
    this.lc1_1 = top;
    this.mc1_1 = end;
    this.nc1_1 = bottom;
    this.oc1_1 = rtlAware;
    this.pc1_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((_Dp___get_value__impl__geb1vb(this.kc1_1) >= 0.0 || equals(this.kc1_1, Companion_getInstance().x5i_1)) && (_Dp___get_value__impl__geb1vb(this.lc1_1) >= 0.0 || equals(this.lc1_1, Companion_getInstance().x5i_1)) && (_Dp___get_value__impl__geb1vb(this.mc1_1) >= 0.0 || equals(this.mc1_1, Companion_getInstance().x5i_1)) && (_Dp___get_value__impl__geb1vb(this.nc1_1) >= 0.0 || equals(this.nc1_1, Companion_getInstance().x5i_1)))) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).k39 = function () {
    return new PaddingNode(this.kc1_1, this.lc1_1, this.mc1_1, this.nc1_1, this.oc1_1);
  };
  protoOf(PaddingElement).qc1 = function (node) {
    node.ec2_1 = this.kc1_1;
    node.fc2_1 = this.lc1_1;
    node.gc2_1 = this.mc1_1;
    node.hc2_1 = this.nc1_1;
    node.ic2_1 = this.oc1_1;
  };
  protoOf(PaddingElement).v7t = function (node) {
    return this.qc1(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.kc1_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.lc1_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.mc1_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.nc1_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.oc1_1) | 0;
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
    return equals(this.kc1_1, otherModifierElement.kc1_1) && equals(this.lc1_1, otherModifierElement.lc1_1) && equals(this.mc1_1, otherModifierElement.mc1_1) && equals(this.nc1_1, otherModifierElement.nc1_1) && this.oc1_1 === otherModifierElement.oc1_1;
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.kc2_1 = paddingValues;
    this.lc2_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).k39 = function () {
    return new PaddingValuesModifier(this.kc2_1);
  };
  protoOf(PaddingValuesElement).mc2 = function (node) {
    node.ac3_1 = this.kc2_1;
  };
  protoOf(PaddingValuesElement).v7t = function (node) {
    return this.mc2(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.kc2_1);
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
    return equals(this.kc2_1, otherElement.kc2_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.ic2_1) {
        $this$layout.i7y($placeable, $this_measure.f5i(this$0.ec2_1), $this_measure.f5i(this$0.fc2_1));
        tmp = Unit_instance;
      } else {
        $this$layout.z96($placeable, $this_measure.f5i(this$0.ec2_1), $this_measure.f5i(this$0.fc2_1));
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
    this.ec2_1 = start;
    this.fc2_1 = top;
    this.gc2_1 = end;
    this.hc2_1 = bottom;
    this.ic2_1 = rtlAware;
  }
  protoOf(PaddingNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.f5i(this.ec2_1) + _this__u8e3s4.f5i(this.gc2_1) | 0;
    var vertical = _this__u8e3s4.f5i(this.fc2_1) + _this__u8e3s4.f5i(this.hc2_1) | 0;
    var placeable = measurable.k7y(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.l7y_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.m7y_1 + vertical | 0);
    return _this__u8e3s4.q7y(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.z96($placeable, $this_measure.f5i(this$0.ac3_1.cc1($this_measure.r6k())), $this_measure.f5i(this$0.ac3_1.hc1()));
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.ac3_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).j7y = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.ac3_1.cc1(_this__u8e3s4.r6k());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.ac3_1.hc1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.ac3_1.bc1(_this__u8e3s4.r6k());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.ac3_1.ic1();
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
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.f5i(this.ac3_1.cc1(_this__u8e3s4.r6k())) + _this__u8e3s4.f5i(this.ac3_1.bc1(_this__u8e3s4.r6k())) | 0;
    var vertical = _this__u8e3s4.f5i(this.ac3_1.hc1()) + _this__u8e3s4.f5i(this.ac3_1.ic1()) | 0;
    var placeable = measurable.k7y(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.l7y_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.m7y_1 + vertical | 0);
    return _this__u8e3s4.q7y(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'padding';
      $this$$receiver.qbv_1.sbv('horizontal', new Dp($horizontal));
      $this$$receiver.qbv_1.sbv('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function padding$lambda_0($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'padding';
      $this$$receiver.qbv_1.sbv('start', new Dp($start));
      $this$$receiver.qbv_1.sbv('top', new Dp($top));
      $this$$receiver.qbv_1.sbv('end', new Dp($end));
      $this$$receiver.qbv_1.sbv('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'padding';
      $this$$receiver.qbv_1.sbv('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_2($all) {
    return function ($this$$receiver) {
      $this$$receiver.obv_1 = 'padding';
      $this$$receiver.pbv_1 = new Dp($all);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.tby_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.vby(crossAxisLayoutSize - placeable.m7y_1 | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.cc3_1.e7q(0, crossAxisLayoutSize - placeable.m7y_1 | 0) : tmp2_elvis_lhs;
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
        $this$layout.z96(item, $mainAxisPositions[tmp1], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.bc3_1 = horizontalArrangement;
    this.cc3_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).yby = function (_this__u8e3s4) {
    return _this__u8e3s4.l7y_1;
  };
  protoOf(RowMeasurePolicy).zby = function (_this__u8e3s4) {
    return _this__u8e3s4.m7y_1;
  };
  protoOf(RowMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.f5i(this.bc3_1.dbw());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.p();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.p());
  };
  protoOf(RowMeasurePolicy).abz = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.bc3_1.tbv(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.r6k(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).bbz = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.q7y(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).cbz = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).h96 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.dc3(measurables, height, _this__u8e3s4.f5i(this.bc3_1.dbw()));
  };
  protoOf(RowMeasurePolicy).i96 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.ec3(measurables, width, _this__u8e3s4.f5i(this.bc3_1.dbw()));
  };
  protoOf(RowMeasurePolicy).j96 = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_instance.fc3(measurables, height, _this__u8e3s4.f5i(this.bc3_1.dbw()));
  };
  protoOf(RowMeasurePolicy).k96 = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_instance.gc3(measurables, width, _this__u8e3s4.f5i(this.bc3_1.dbw()));
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString(this.bc3_1) + ', verticalAlignment=' + toString(this.cc3_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.bc3_1);
    result = imul(result, 31) + hashCode(this.cc3_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.bc3_1, tmp0_other_with_cast.bc3_1))
      return false;
    if (!equals(this.cc3_1, tmp0_other_with_cast.cc3_1))
      return false;
    return true;
  };
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance_0.b5i(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
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
    $composer_0.a31(-1828507469);
    sourceInformation($composer_0, '125@5803L224');
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().ubv_1) && equals(verticalAlignment, Companion_getInstance_0().v7p_1)) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1828503104, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.f2r(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().l2u_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy.<anonymous>' call
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.h33(value);
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
    $composer_0.c31();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function RowScopeInstance() {
  }
  protoOf(RowScopeInstance).ibz = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.i7q(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().ubv_1, Companion_getInstance_0().v7p_1);
    }
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.rby_1 = weight;
    this.sby_1 = fill;
    this.tby_1 = crossAxisAlignment;
    this.uby_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.rby_1 + ', fill=' + this.sby_1 + ', crossAxisAlignment=' + toString_0(this.tby_1) + ', flowLayoutData=' + toString_0(this.uby_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.rby_1);
    result = imul(result, 31) + getBooleanHashCode(this.sby_1) | 0;
    result = imul(result, 31) + (this.tby_1 == null ? 0 : hashCode(this.tby_1)) | 0;
    result = imul(result, 31) + (this.uby_1 == null ? 0 : this.uby_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.rby_1, tmp0_other_with_cast.rby_1))
      return false;
    if (!(this.sby_1 === tmp0_other_with_cast.sby_1))
      return false;
    if (!equals(this.tby_1, tmp0_other_with_cast.tby_1))
      return false;
    if (!equals(this.uby_1, tmp0_other_with_cast.uby_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.k93();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.ic3_1 = CenterCrossAxisAlignment_getInstance();
    this.jc3_1 = StartCrossAxisAlignment_getInstance();
    this.kc3_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).lc3 = function (horizontal) {
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
  protoOf(CenterCrossAxisAlignment).vby = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  protoOf(StartCrossAxisAlignment).vby = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  protoOf(EndCrossAxisAlignment).vby = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
    this.oc3_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).vby = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.oc3_1.c7q(0, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + toString(this.oc3_1) + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.oc3_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalCrossAxisAlignment ? other : THROW_CCE();
    if (!equals(this.oc3_1, tmp0_other_with_cast.oc3_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_4();
  }
  protoOf(CrossAxisAlignment).mc3 = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).nc3 = function (placeable) {
    return null;
  };
  function IntrinsicMeasureBlocks() {
  }
  protoOf(IntrinsicMeasureBlocks).dc3 = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinWidth.<anonymous>' call
          var size = item.s7y(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            // Inline function 'kotlin.math.max' call
            var a = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(a, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.p() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).ebz = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.p() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'kotlin.math.min' call
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var w = 2147483647;
            var a_0 = item.y7y(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var b = item.s7y(mainAxisSpace);
            crossAxisMax = Math.max(a_1, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.max' call
        var a_2 = availableHeight - fixedSpace | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_2, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.u(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            // Inline function 'kotlin.math.max' call
            var a_3 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinWidth.<anonymous>' call
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var h = tmp_0;
            var b_0 = item_0.s7y(h);
            crossAxisMax = Math.max(a_3, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).ec3 = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.p() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'kotlin.math.min' call
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var h = 2147483647;
            var a_0 = item.u7y(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var b = item.w7y(mainAxisSpace);
            crossAxisMax = Math.max(a_1, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.max' call
        var a_2 = availableWidth - fixedSpace | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_2, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.u(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            // Inline function 'kotlin.math.max' call
            var a_3 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMinHeight.<anonymous>' call
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var w = tmp_0;
            var b_0 = item_0.w7y(w);
            crossAxisMax = Math.max(a_3, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).fbz = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMinHeight.<anonymous>' call
          var size = item.w7y(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            // Inline function 'kotlin.math.max' call
            var a = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(a, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.p() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).fc3 = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxWidth.<anonymous>' call
          var size = item.u7y(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            // Inline function 'kotlin.math.max' call
            var a = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(a, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.p() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).gbz = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.p() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            // Inline function 'kotlin.math.min' call
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var w = 2147483647;
            var a_0 = item.y7y(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var b = item.u7y(mainAxisSpace);
            crossAxisMax = Math.max(a_1, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.max' call
        var a_2 = availableHeight - fixedSpace | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_2, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.u(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            // Inline function 'kotlin.math.max' call
            var a_3 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxWidth.<anonymous>' call
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var h = tmp_0;
            var b_0 = item_0.u7y(h);
            crossAxisMax = Math.max(a_3, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).gc3 = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.p() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            // Inline function 'kotlin.math.min' call
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var h = 2147483647;
            var a_0 = item.u7y(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var b = item.y7y(mainAxisSpace);
            crossAxisMax = Math.max(a_1, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.max' call
        var a_2 = availableWidth - fixedSpace | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = Math.max(a_2, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.p() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.u(index_0);
          // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            // Inline function 'kotlin.math.max' call
            var a_3 = crossAxisMax;
            // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.HorizontalMaxHeight.<anonymous>' call
            var tmp_0;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              tmp_0 = roundToInt(this_1);
            } else {
              tmp_0 = 2147483647;
            }
            var w = tmp_0;
            var b_0 = item_0.y7y(w);
            crossAxisMax = Math.max(a_3, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).hbz = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.j()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.p() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.u(index);
          // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
          var weight = get_weight(get_rowColumnParentData_0(item));
          // Inline function 'androidx.compose.foundation.layout.IntrinsicMeasureBlocks.VerticalMaxHeight.<anonymous>' call
          var size = item.y7y(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            // Inline function 'kotlin.math.max' call
            var a = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_0 = size / weight;
            var b = roundToInt(this_0);
            weightUnitSpace = Math.max(a, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      tmp$ret$0 = (roundToInt(this_1) + fixedSpace | 0) + imul(measurables.p() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    return IntrinsicMeasureBlocks_instance;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.rby_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.k93();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mc3();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.sby_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.tby_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.qc3_1 = weight;
    this.rc3_1 = fill;
  }
  protoOf(LayoutWeightElement).k39 = function () {
    return new LayoutWeightNode(this.qc3_1, this.rc3_1);
  };
  protoOf(LayoutWeightElement).sc3 = function (node) {
    node.gc4_1 = this.qc3_1;
    node.hc4_1 = this.rc3_1;
  };
  protoOf(LayoutWeightElement).v7t = function (node) {
    return this.sc3(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.qc3_1);
    result = imul(31, result) + getBooleanHashCode(this.rc3_1) | 0;
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
    return this.qc3_1 === otherModifier.qc3_1 && this.rc3_1 === otherModifier.rc3_1;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.jc4_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).k39 = function () {
    return new HorizontalAlignNode(this.jc4_1);
  };
  protoOf(HorizontalAlignElement).kc4 = function (node) {
    node.yc4_1 = this.jc4_1;
  };
  protoOf(HorizontalAlignElement).v7t = function (node) {
    return this.kc4(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.jc4_1);
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
    return equals(this.jc4_1, otherModifier.jc4_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.gc4_1 = weight;
    this.hc4_1 = fill;
  }
  protoOf(LayoutWeightNode).u94 = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    this_0.rby_1 = this.gc4_1;
    this_0.sby_1 = this.hc4_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.yc4_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).u94 = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    this_0.tby_1 = Companion_getInstance_4().lc3(this.yc4_1);
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
        var child = measurables.u(i);
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
            var tmp2_safe_receiver = parentData == null ? null : parentData.uby_1;
            var tmp_0;
            if (tmp2_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp2_safe_receiver.zc4_1 * crossAxisMax;
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
            tmp_1 = child.k7y(_this__u8e3s4.dbz(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp5_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.yby(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.zby(placeable);
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
      var arrangementSpacingTotal = arrangementSpacingPx.h3(toLong(other));
      var remainingToTarget = coerceAtLeast_0(numberToLong(targetSpace - fixedSpace | 0).g3(arrangementSpacingTotal), new Long(0, 0));
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = remainingToTarget.v3() / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.u(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          try {
            // Inline function 'kotlin.Long.minus' call
            var this_1 = remainder;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            var other_1 = roundToInt(weightedSize);
            remainder = this_1.g3(toLong(other_1));
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
            var child_0 = measurables.u(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp9_safe_receiver = parentData_0 == null ? null : parentData_0.uby_1;
              var tmp_7;
              if (tmp9_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_2 = tmp9_safe_receiver.zc4_1 * crossAxisMax;
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
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.g3(toLong(remainderUnit));
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
              childConstraints = _this__u8e3s4.cbz(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            } catch ($p) {
              if ($p instanceof IllegalArgumentException) {
                var e_0 = $p;
                throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/300280216 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'weight ' + weight_0 + 'weightedSize ' + weightedSize_0 + 'crossAxisDesiredSize ' + crossAxisDesiredSize_0 + 'remainderUnit ' + remainderUnit + 'childMainAxisSize ' + childMainAxisSize, e_0);
              } else {
                throw $p;
              }
            }
            var placeable_0 = child_0.k7y(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.yby(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.zby(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceIn(numberToLong(weightedSpace).f3(arrangementSpacingTotal).m1(), 0, mainAxisMax - fixedSpace | 0);
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
          var alignmentLinePosition = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.nc3(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.zby(placeable_1);
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
    _this__u8e3s4.abz(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.bbz(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
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
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function Companion_0() {
  }
  protoOf(Companion_0).ac5 = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).bc5 = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).cc5 = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.ec5_1 = direction;
    this.fc5_1 = fraction;
    this.gc5_1 = inspectorName;
  }
  protoOf(FillElement).k39 = function () {
    return new FillNode(this.ec5_1, this.fc5_1);
  };
  protoOf(FillElement).hc5 = function (node) {
    node.vc5_1 = this.ec5_1;
    node.wc5_1 = this.fc5_1;
  };
  protoOf(FillElement).v7t = function (node) {
    return this.hc5(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.ec5_1.equals(other.ec5_1))
      return false;
    if (!(this.fc5_1 === other.fc5_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.ec5_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.fc5_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.c7q(0, _IntSize___get_width__impl__d9yl4o(size.o5j_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.e7q(0, _IntSize___get_height__impl__prv63b(size.o5j_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.h7q(Companion_getInstance_1().n5j_1, size.o5j_1, layoutDirection));
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).xc5 = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).yc5 = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).zc5 = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.bc6_1 = direction;
    this.cc6_1 = unbounded;
    this.dc6_1 = alignmentCallback;
    this.ec6_1 = align;
    this.fc6_1 = inspectorName;
  }
  protoOf(WrapContentElement).k39 = function () {
    return new WrapContentNode(this.bc6_1, this.cc6_1, this.dc6_1);
  };
  protoOf(WrapContentElement).gc6 = function (node) {
    node.uc6_1 = this.bc6_1;
    node.vc6_1 = this.cc6_1;
    node.wc6_1 = this.dc6_1;
  };
  protoOf(WrapContentElement).v7t = function (node) {
    return this.gc6(node instanceof WrapContentNode ? node : THROW_CCE());
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
    if (!this.bc6_1.equals(other.bc6_1))
      return false;
    if (!(this.cc6_1 === other.cc6_1))
      return false;
    if (!equals(this.ec6_1, other.ec6_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.bc6_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.cc6_1) | 0;
    result = imul(31, result) + hashCode(this.ec6_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.i7y($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.vc5_1 = direction;
    this.wc5_1 = fraction;
  }
  protoOf(FillNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.vc5_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.wc5_1;
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
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.vc5_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.wc5_1;
      var tmp$ret$3 = roundToInt(this_1);
      var height = coerceIn(tmp$ret$3, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.k7y(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.l7y_1;
    var tmp_0 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
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
      var position = this$0.wc6_1(new IntSize(IntSize_0($wrapperWidth - $placeable.l7y_1 | 0, $wrapperHeight - $placeable.m7y_1 | 0)), $this_measure.r6k()).c5j_1;
      $this$layout.b97($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.uc6_1 = direction;
    this.vc6_1 = unbounded;
    this.wc6_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.uc6_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.uc6_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.uc6_1.equals(Direction_Vertical_getInstance()) && this.vc6_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.uc6_1.equals(Direction_Horizontal_getInstance()) && this.vc6_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.k7y(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.l7y_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.m7y_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.q7y(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
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
    return _this__u8e3s4.i7q(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().x5i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().x5i_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i7q(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_0().w7p_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_0().w7p_1) && !unbounded) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance_0().v7p_1) && !unbounded) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_instance_3.yc5(align, unbounded);
    }
    return _this__u8e3s4.i7q(tmp);
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance().x5i_1 : min;
    max = max === VOID ? Companion_getInstance().x5i_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i7q(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i7q(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_2.cc5(fraction));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance().x5i_1 : min;
    max = max === VOID ? Companion_getInstance().x5i_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.i7q(new SizeElement(min, VOID, max, VOID, true, tmp$ret$0));
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
    return _this__u8e3s4.i7q(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i7q(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_2.ac5(fraction));
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
    return _this__u8e3s4.i7q(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function wrapContentSize(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_0().q7p_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_0().q7p_1) && !unbounded) {
      tmp = get_WrapContentSizeCenter();
    } else if (equals(align, Companion_getInstance_0().m7p_1) && !unbounded) {
      tmp = get_WrapContentSizeTopStart();
    } else {
      tmp = Companion_instance_3.zc5(align, unbounded);
    }
    return _this__u8e3s4.i7q(tmp);
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance().x5i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().x5i_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance().x5i_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance().x5i_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.yc6_1 = minWidth;
    this.zc6_1 = minHeight;
    this.ac7_1 = maxWidth;
    this.bc7_1 = maxHeight;
    this.cc7_1 = enforceIncoming;
    this.dc7_1 = inspectorInfo;
  }
  protoOf(SizeElement).k39 = function () {
    return new SizeNode(this.yc6_1, this.zc6_1, this.ac7_1, this.bc7_1, this.cc7_1);
  };
  protoOf(SizeElement).ec7 = function (node) {
    node.sc7_1 = this.yc6_1;
    node.tc7_1 = this.zc6_1;
    node.uc7_1 = this.ac7_1;
    node.vc7_1 = this.bc7_1;
    node.wc7_1 = this.cc7_1;
  };
  protoOf(SizeElement).v7t = function (node) {
    return this.ec7(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.yc6_1, other.yc6_1))
      return false;
    if (!equals(this.zc6_1, other.zc6_1))
      return false;
    if (!equals(this.ac7_1, other.ac7_1))
      return false;
    if (!equals(this.bc7_1, other.bc7_1))
      return false;
    if (!(this.cc7_1 === other.cc7_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.yc6_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.zc6_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.ac7_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bc7_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.cc7_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().x5i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().x5i_1 : minHeight;
    ModifierNodeElement.call(this);
    this.yc7_1 = minWidth;
    this.zc7_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).k39 = function () {
    return new UnspecifiedConstraintsNode(this.yc7_1, this.zc7_1);
  };
  protoOf(UnspecifiedConstraintsElement).ac8 = function (node) {
    node.oc8_1 = this.yc7_1;
    node.pc8_1 = this.zc7_1;
  };
  protoOf(UnspecifiedConstraintsElement).v7t = function (node) {
    return this.ac8(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.yc7_1, other.yc7_1) && equals(this.zc7_1, other.zc7_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.yc7_1), 31) + Dp__hashCode_impl_sxkrra(this.zc7_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.uc7_1, Companion_getInstance().x5i_1)) {
      tmp = coerceAtLeast(_this__u8e3s4.f5i($this.uc7_1), 0);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.vc7_1, Companion_getInstance().x5i_1)) {
      tmp_0 = coerceAtLeast(_this__u8e3s4.f5i($this.vc7_1), 0);
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.sc7_1, Companion_getInstance().x5i_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.f5i($this.sc7_1), maxWidth), 0);
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.tc7_1, Companion_getInstance().x5i_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.f5i($this.tc7_1), maxHeight), 0);
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.i7y($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance().x5i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().x5i_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance().x5i_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance().x5i_1 : maxHeight;
    Node.call(this);
    this.sc7_1 = minWidth;
    this.tc7_1 = minHeight;
    this.uc7_1 = maxWidth;
    this.vc7_1 = maxHeight;
    this.wc7_1 = enforceIncoming;
  }
  protoOf(SizeNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.wc7_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.sc7_1, Companion_getInstance().x5i_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost_0(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.uc7_1, Companion_getInstance().x5i_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.tc7_1, Companion_getInstance().x5i_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost_0(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.vc7_1, Companion_getInstance().x5i_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.k7y(wrappedConstraints);
    var tmp_4 = placeable.l7y_1;
    var tmp_5 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).r7y = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.s7y(height));
    }
    return tmp;
  };
  protoOf(SizeNode).v7y = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.w7y(width));
    }
    return tmp;
  };
  protoOf(SizeNode).t7y = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.u7y(height));
    }
    return tmp;
  };
  protoOf(SizeNode).x7y = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.y7y(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.i7y($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance().x5i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance().x5i_1 : minHeight;
    Node.call(this);
    this.oc8_1 = minWidth;
    this.pc8_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).j7y = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.oc8_1, Companion_getInstance().x5i_1) && _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0) {
      tmp = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.f5i(this.oc8_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.pc8_1, Companion_getInstance().x5i_1) && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0) {
      tmp_2 = coerceAtLeast(coerceAtMost_0(_this__u8e3s4.f5i(this.pc8_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.k7y(wrappedConstraints);
    var tmp_3 = placeable.l7y_1;
    var tmp_4 = placeable.m7y_1;
    return _this__u8e3s4.q7y(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).r7y = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.s7y(height), !equals(this.oc8_1, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(this.oc8_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).t7y = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast(measurable.u7y(height), !equals(this.oc8_1, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(this.oc8_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).v7y = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.w7y(width), !equals(this.pc8_1, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(this.pc8_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).x7y = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast(measurable.y7y(width), !equals(this.pc8_1, Companion_getInstance().x5i_1) ? _this__u8e3s4.f5i(this.pc8_1) : 0);
  };
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.i7q(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function requiredSize(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredSize$lambda(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.i7q(new SizeElement(width, height, width, height, false, tmp0_inspectorInfo));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.i7q(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_instance_2.bc5(fraction));
  }
  function wrapContentWidth(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance_0().z7p_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance_0().z7p_1) && !unbounded) {
      tmp = get_WrapContentWidthCenter();
    } else if (equals(align, Companion_getInstance_0().y7p_1) && !unbounded) {
      tmp = get_WrapContentWidthStart();
    } else {
      tmp = Companion_instance_3.xc5(align, unbounded);
    }
    return _this__u8e3s4.i7q(tmp);
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.obv_1 = 'size';
      $this$null.pbv_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.obv_1 = 'heightIn';
      $this$null.qbv_1.sbv('min', new Dp($min));
      $this$null.qbv_1.sbv('max', new Dp($max));
      return Unit_instance;
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.obv_1 = 'widthIn';
      $this$null.qbv_1.sbv('min', new Dp($min));
      $this$null.qbv_1.sbv('max', new Dp($max));
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.obv_1 = 'height';
      $this$null.pbv_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.obv_1 = 'width';
      $this$null.pbv_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function size$lambda_0($width, $height) {
    return function ($this$null) {
      $this$null.obv_1 = 'size';
      $this$null.qbv_1.sbv('width', new Dp($width));
      $this$null.qbv_1.sbv('height', new Dp($height));
      return Unit_instance;
    };
  }
  function requiredSize$lambda($width, $height) {
    return function ($this$null) {
      $this$null.obv_1 = 'requiredSize';
      $this$null.qbv_1.sbv('width', new Dp($width));
      $this$null.qbv_1.sbv('height', new Dp($height));
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
      FillWholeMaxWidth = Companion_instance_2.ac5(1.0);
      FillWholeMaxHeight = Companion_instance_2.bc5(1.0);
      FillWholeMaxSize = Companion_instance_2.cc5(1.0);
      WrapContentWidthCenter = Companion_instance_3.xc5(Companion_getInstance_0().z7p_1, false);
      WrapContentWidthStart = Companion_instance_3.xc5(Companion_getInstance_0().y7p_1, false);
      WrapContentHeightCenter = Companion_instance_3.yc5(Companion_getInstance_0().w7p_1, false);
      WrapContentHeightTop = Companion_instance_3.yc5(Companion_getInstance_0().v7p_1, false);
      WrapContentSizeCenter = Companion_instance_3.zc5(Companion_getInstance_0().q7p_1, false);
      WrapContentSizeTopStart = Companion_instance_3.zc5(Companion_getInstance_0().m7p_1, false);
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
      modifier_0 = Companion_instance;
    var compositeKeyHash = get_currentCompositeKeyHash($composer_1, 0);
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.u32();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_2().s9e_1;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.v30();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.o31();
    if ($composer_2.j31()) {
      $composer_2.p31(factory);
    } else {
      $composer_2.s31();
    }
    // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance_2().x9e_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().w9e_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().u9e_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_2().a9f_1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    if ($this$with.j31() || !equals($this$with.w32(), compositeKeyHash)) {
      $this$with.h33(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).z31(compositeKeyHash, block);
    }
    $composer_2.u31();
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
  protoOf(SpacerMeasurePolicy).g96 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.q7y(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
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
    this.qc8_1 = leftVal;
    this.rc8_1 = topVal;
    this.sc8_1 = rightVal;
    this.tc8_1 = bottomVal;
  }
  protoOf(FixedIntInsets).uc8 = function (density, layoutDirection) {
    return this.qc8_1;
  };
  protoOf(FixedIntInsets).vc8 = function (density) {
    return this.rc8_1;
  };
  protoOf(FixedIntInsets).wc8 = function (density, layoutDirection) {
    return this.sc8_1;
  };
  protoOf(FixedIntInsets).xc8 = function (density) {
    return this.tc8_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.qc8_1 + ', top=' + this.rc8_1 + ', right=' + this.sc8_1 + ', bottom=' + this.tc8_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.qc8_1 === other.qc8_1 && this.rc8_1 === other.rc8_1 && this.sc8_1 === other.sc8_1 && this.tc8_1 === other.tc8_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.qc8_1;
    result = imul(31, result) + this.rc8_1 | 0;
    result = imul(31, result) + this.sc8_1 | 0;
    result = imul(31, result) + this.tc8_1 | 0;
    return result;
  };
  function exclude(_this__u8e3s4, insets) {
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function asPaddingValues(_this__u8e3s4, density) {
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
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
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().cc9_1)) === _get_value__a43j40(Companion_getInstance_8().cc9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Start');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().gc9_1)) === _get_value__a43j40(Companion_getInstance_8().gc9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Left');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().ec9_1)) === _get_value__a43j40(Companion_getInstance_8().ec9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Top');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().dc9_1)) === _get_value__a43j40(Companion_getInstance_8().dc9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'End');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().hc9_1)) === _get_value__a43j40(Companion_getInstance_8().hc9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Right');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_8().fc9_1)) === _get_value__a43j40(Companion_getInstance_8().fc9_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.yc8_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.zc8_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.ac9_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.bc9_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.cc9_1 = WindowInsetsSides__plus_impl_9q9m59(this.yc8_1, this.bc9_1);
    this.dc9_1 = WindowInsetsSides__plus_impl_9q9m59(this.zc8_1, this.ac9_1);
    this.ec9_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.fc9_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.gc9_1 = WindowInsetsSides__plus_impl_9q9m59(this.yc8_1, this.ac9_1);
    this.hc9_1 = WindowInsetsSides__plus_impl_9q9m59(this.zc8_1, this.bc9_1);
    this.ic9_1 = WindowInsetsSides__plus_impl_9q9m59(this.gc9_1, this.hc9_1);
    this.jc9_1 = WindowInsetsSides__plus_impl_9q9m59(this.ec9_1, this.fc9_1);
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
      $this_buildString.w8(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.v8(text);
  }
  function asPaddingValues_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1485016250, 'C(asPaddingValues)244@9228L7:WindowInsets.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1485016250, $changed, -1, 'androidx.compose.foundation.layout.asPaddingValues (WindowInsets.kt:244)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = new InsetsPaddingValues(_this__u8e3s4, tmp0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function ExcludeInsets(included, excluded) {
    this.kc9_1 = included;
    this.lc9_1 = excluded;
  }
  protoOf(ExcludeInsets).uc8 = function (density, layoutDirection) {
    return coerceAtLeast(this.kc9_1.uc8(density, layoutDirection) - this.lc9_1.uc8(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).vc8 = function (density) {
    return coerceAtLeast(this.kc9_1.vc8(density) - this.lc9_1.vc8(density) | 0, 0);
  };
  protoOf(ExcludeInsets).wc8 = function (density, layoutDirection) {
    return coerceAtLeast(this.kc9_1.wc8(density, layoutDirection) - this.lc9_1.wc8(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).xc8 = function (density) {
    return coerceAtLeast(this.kc9_1.xc8(density) - this.lc9_1.xc8(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + toString(this.kc9_1) + ' - ' + toString(this.lc9_1) + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.kc9_1, this.kc9_1) && equals(other.lc9_1, this.lc9_1);
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.kc9_1)) + hashCode(this.lc9_1) | 0;
  };
  function InsetsPaddingValues(insets, density) {
    this.mc9_1 = insets;
    this.nc9_1 = density;
  }
  protoOf(InsetsPaddingValues).cc1 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateLeftPadding.<anonymous>' call
    var $this$with = this.nc9_1;
    return $this$with.l5i(this.mc9_1.uc8($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).hc1 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateTopPadding.<anonymous>' call
    var $this$with = this.nc9_1;
    return $this$with.l5i(this.mc9_1.vc8($this$with));
  };
  protoOf(InsetsPaddingValues).bc1 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateRightPadding.<anonymous>' call
    var $this$with = this.nc9_1;
    return $this$with.l5i(this.mc9_1.wc8($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).ic1 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateBottomPadding.<anonymous>' call
    var $this$with = this.nc9_1;
    return $this$with.l5i(this.mc9_1.xc8($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + toString(this.mc9_1) + ', density=' + toString(this.nc9_1) + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.mc9_1, other.mc9_1) && equals(this.nc9_1, other.nc9_1);
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.mc9_1);
    result = imul(31, result) + hashCode(this.nc9_1) | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.oc9_1 = insets;
    this.pc9_1 = sides;
  }
  protoOf(LimitInsets).uc8 = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_8().yc8_1;
    } else {
      tmp = Companion_getInstance_8().ac9_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.pc9_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.oc9_1.uc8(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).vc8 = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.pc9_1, Companion_getInstance_8().ec9_1) ? this.oc9_1.vc8(density) : 0;
  };
  protoOf(LimitInsets).wc8 = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_8().zc8_1;
    } else {
      tmp = Companion_getInstance_8().bc9_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.pc9_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.oc9_1.wc8(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).xc8 = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.pc9_1, Companion_getInstance_8().fc9_1) ? this.oc9_1.xc8(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.oc9_1, other.oc9_1) && this.pc9_1 === other.pc9_1;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.oc9_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.pc9_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + toString(this.oc9_1) + ' only ' + WindowInsetsSides__toString_impl_h23h9x(this.pc9_1) + ')';
  };
  function union(_this__u8e3s4, insets) {
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function UnionInsets(first, second) {
    this.qc9_1 = first;
    this.rc9_1 = second;
  }
  protoOf(UnionInsets).uc8 = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.qc9_1.uc8(density, layoutDirection);
    var b = this.rc9_1.uc8(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).vc8 = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.qc9_1.vc8(density);
    var b = this.rc9_1.vc8(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).wc8 = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.qc9_1.wc8(density, layoutDirection);
    var b = this.rc9_1.wc8(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).xc8 = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.qc9_1.xc8(density);
    var b = this.rc9_1.xc8(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.qc9_1) + imul(hashCode(this.rc9_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.qc9_1, this.qc9_1) && equals(other.rc9_1, this.rc9_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString(this.qc9_1) + ' \u222A ' + toString(this.rc9_1) + ')';
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
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
  function ConsumedInsetsModifier(block) {
    this.sc9_1 = block;
    this.tc9_1 = null;
  }
  protoOf(ConsumedInsetsModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ConsumedInsetsModifier)) {
      return false;
    }
    return other.sc9_1 === this.sc9_1;
  };
  protoOf(ConsumedInsetsModifier).hashCode = function () {
    return hashCode(this.sc9_1);
  };
  protoOf(ConsumedInsetsModifier).c9f = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.z87(get_ModifierLocalConsumedWindowInsets());
    if (!equals(consumed, this.tc9_1)) {
      this.tc9_1 = consumed;
      this.sc9_1(consumed);
    }
    return Unit_instance;
  };
  function _set_unconsumedInsets__kb2lgg($this, _set____db54di) {
    var this_0 = $this.vc9_1;
    unconsumedInsets$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_unconsumedInsets__8s1nmc($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.vc9_1;
    unconsumedInsets$factory_0();
    return this_0.c1();
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    var this_0 = $this.wc9_1;
    consumedInsets$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_consumedInsets__s4tdcd($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.wc9_1;
    consumedInsets$factory_0();
    return this_0.c1();
  }
  function InsetsPaddingModifier$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.z96($placeable, $left, $top);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifier(insets) {
    this.uc9_1 = insets;
    this.vc9_1 = mutableStateOf(this.uc9_1);
    this.wc9_1 = mutableStateOf(this.uc9_1);
  }
  protoOf(InsetsPaddingModifier).j7y = function (_this__u8e3s4, measurable, constraints) {
    var left = _get_unconsumedInsets__8s1nmc(this).uc8(_this__u8e3s4, _this__u8e3s4.r6k());
    var top = _get_unconsumedInsets__8s1nmc(this).vc8(_this__u8e3s4);
    var right = _get_unconsumedInsets__8s1nmc(this).wc8(_this__u8e3s4, _this__u8e3s4.r6k());
    var bottom = _get_unconsumedInsets__8s1nmc(this).xc8(_this__u8e3s4);
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.k7y(childConstraints);
    var width = constrainWidth(constraints, placeable.l7y_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.m7y_1 + vertical | 0);
    return _this__u8e3s4.q7y(width, height, VOID, InsetsPaddingModifier$measure$lambda(placeable, left, top));
  };
  protoOf(InsetsPaddingModifier).c9f = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.z87(get_ModifierLocalConsumedWindowInsets());
    _set_unconsumedInsets__kb2lgg(this, exclude(this.uc9_1, consumed));
    _set_consumedInsets__2lpxax(this, union(consumed, this.uc9_1));
  };
  protoOf(InsetsPaddingModifier).b1 = function () {
    return get_ModifierLocalConsumedWindowInsets();
  };
  protoOf(InsetsPaddingModifier).c1 = function () {
    return _get_consumedInsets__s4tdcd(this);
  };
  protoOf(InsetsPaddingModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifier)) {
      return false;
    }
    return equals(other.uc9_1, this.uc9_1);
  };
  protoOf(InsetsPaddingModifier).hashCode = function () {
    return hashCode(this.uc9_1);
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets(0, 0, 0, 0);
  }
  function onConsumedWindowInsetsChanged$lambda($block) {
    return function ($this$null) {
      $this$null.obv_1 = 'onConsumedWindowInsetsChanged';
      $this$null.qbv_1.sbv('block', $block);
      return Unit_instance;
    };
  }
  function onConsumedWindowInsetsChanged$lambda_0($block) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a31(-1608161351);
      sourceInformation($composer_0, 'C125@4856L61:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1608161351, $changed, -1, 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous> (WindowInsetsPadding.kt:125)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, 16130585, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.f2r($block);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().l2u_1) {
        // Inline function 'androidx.compose.foundation.layout.onConsumedWindowInsetsChanged.<anonymous>.<anonymous>' call
        var value = new ConsumedInsetsModifier($block);
        $composer_0.h33(value);
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
      $composer_0.c31();
      return tmp1_group;
    };
  }
  function windowInsetsPadding$lambda($insets) {
    return function ($this$null) {
      $this$null.obv_1 = 'windowInsetsPadding';
      $this$null.qbv_1.sbv('insets', $insets);
      return Unit_instance;
    };
  }
  function windowInsetsPadding$lambda_0($insets) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.a31(-1415685722);
      sourceInformation($composer_0, 'C61@2466L50:WindowInsetsPadding.kt#2w3rfo');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1415685722, $changed, -1, 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous> (WindowInsetsPadding.kt:61)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, -324934766, 'CC(remember):WindowInsetsPadding.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.f2r($insets);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.w32();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().l2u_1) {
        // Inline function 'androidx.compose.foundation.layout.windowInsetsPadding.<anonymous>.<anonymous>' call
        var value = new InsetsPaddingModifier($insets);
        $composer_0.h33(value);
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
      $composer_0.c31();
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
  function get_safeDrawing(_this__u8e3s4) {
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
  protoOf(AlignmentLineOffsetDpNode).r7y = minIntrinsicWidth;
  protoOf(AlignmentLineOffsetDpNode).v7y = minIntrinsicHeight;
  protoOf(AlignmentLineOffsetDpNode).t7y = maxIntrinsicWidth;
  protoOf(AlignmentLineOffsetDpNode).x7y = maxIntrinsicHeight;
  protoOf(Arrangement$Absolute$Left$1).dbw = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).dbw = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).dbw = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).dbw = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).dbw = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).dbw = get_spacing;
  protoOf(Arrangement$Start$1).dbw = get_spacing;
  protoOf(Arrangement$End$1).dbw = get_spacing;
  protoOf(Arrangement$Top$1).dbw = get_spacing_0;
  protoOf(Arrangement$Bottom$1).dbw = get_spacing_0;
  protoOf(BoxMeasurePolicy).h96 = minIntrinsicWidth_0;
  protoOf(BoxMeasurePolicy).i96 = minIntrinsicHeight_0;
  protoOf(BoxMeasurePolicy).j96 = maxIntrinsicWidth_0;
  protoOf(BoxMeasurePolicy).k96 = maxIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h96 = minIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i96 = minIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).j96 = maxIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).k96 = maxIntrinsicHeight_0;
  protoOf(ColumnMeasurePolicy).dbz = createConstraints$default;
  protoOf(ColumnScopeInstance).jbz = weight$default;
  protoOf(OffsetNode).r7y = minIntrinsicWidth;
  protoOf(OffsetNode).v7y = minIntrinsicHeight;
  protoOf(OffsetNode).t7y = maxIntrinsicWidth;
  protoOf(OffsetNode).x7y = maxIntrinsicHeight;
  protoOf(OffsetPxNode).r7y = minIntrinsicWidth;
  protoOf(OffsetPxNode).v7y = minIntrinsicHeight;
  protoOf(OffsetPxNode).t7y = maxIntrinsicWidth;
  protoOf(OffsetPxNode).x7y = maxIntrinsicHeight;
  protoOf(PaddingNode).r7y = minIntrinsicWidth;
  protoOf(PaddingNode).v7y = minIntrinsicHeight;
  protoOf(PaddingNode).t7y = maxIntrinsicWidth;
  protoOf(PaddingNode).x7y = maxIntrinsicHeight;
  protoOf(PaddingValuesModifier).r7y = minIntrinsicWidth;
  protoOf(PaddingValuesModifier).v7y = minIntrinsicHeight;
  protoOf(PaddingValuesModifier).t7y = maxIntrinsicWidth;
  protoOf(PaddingValuesModifier).x7y = maxIntrinsicHeight;
  protoOf(RowMeasurePolicy).dbz = createConstraints$default;
  protoOf(RowScopeInstance).hc3 = weight$default_0;
  protoOf(FillNode).r7y = minIntrinsicWidth;
  protoOf(FillNode).v7y = minIntrinsicHeight;
  protoOf(FillNode).t7y = maxIntrinsicWidth;
  protoOf(FillNode).x7y = maxIntrinsicHeight;
  protoOf(WrapContentNode).r7y = minIntrinsicWidth;
  protoOf(WrapContentNode).v7y = minIntrinsicHeight;
  protoOf(WrapContentNode).t7y = maxIntrinsicWidth;
  protoOf(WrapContentNode).x7y = maxIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).h96 = minIntrinsicWidth_0;
  protoOf(SpacerMeasurePolicy).i96 = minIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).j96 = maxIntrinsicWidth_0;
  protoOf(SpacerMeasurePolicy).k96 = maxIntrinsicHeight_0;
  protoOf(ConsumedInsetsModifier).m7q = foldIn;
  protoOf(ConsumedInsetsModifier).n7q = all;
  protoOf(ConsumedInsetsModifier).i7q = then;
  protoOf(InsetsPaddingModifier).r7y = minIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).v7y = minIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).t7y = maxIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).x7y = maxIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).m7q = foldIn;
  protoOf(InsetsPaddingModifier).n7q = all;
  protoOf(InsetsPaddingModifier).i7q = then;
  //endregion
  //region block: init
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  IntrinsicMeasureBlocks_instance = new IntrinsicMeasureBlocks();
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
  _.$_$.h = asPaddingValues_0;
  _.$_$.i = aspectRatio;
  _.$_$.j = calculateEndPadding;
  _.$_$.k = calculateStartPadding;
  _.$_$.l = columnMeasurePolicy;
  _.$_$.m = defaultMinSize;
  _.$_$.n = exclude;
  _.$_$.o = fillMaxHeight;
  _.$_$.p = fillMaxSize;
  _.$_$.q = fillMaxWidth;
  _.$_$.r = heightIn;
  _.$_$.s = height;
  _.$_$.t = maybeCachedBoxMeasurePolicy;
  _.$_$.u = offset_0;
  _.$_$.v = offset_1;
  _.$_$.w = onConsumedWindowInsetsChanged;
  _.$_$.x = only;
  _.$_$.y = paddingFromBaseline;
  _.$_$.z = padding_2;
  _.$_$.a1 = padding_1;
  _.$_$.b1 = padding_0;
  _.$_$.c1 = padding;
  _.$_$.d1 = requiredSize;
  _.$_$.e1 = rowMeasurePolicy;
  _.$_$.f1 = get_safeDrawing;
  _.$_$.g1 = size_0;
  _.$_$.h1 = size;
  _.$_$.i1 = get_systemBars;
  _.$_$.j1 = widthIn;
  _.$_$.k1 = width;
  _.$_$.l1 = windowInsetsPadding;
  _.$_$.m1 = wrapContentHeight;
  _.$_$.n1 = wrapContentSize;
  _.$_$.o1 = wrapContentWidth;
  _.$_$.p1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.q1 = Absolute_getInstance;
  _.$_$.r1 = Arrangement_getInstance;
  _.$_$.s1 = BoxScopeInstance_instance;
  _.$_$.t1 = ColumnScopeInstance_instance;
  _.$_$.u1 = RowScopeInstance_instance;
  _.$_$.v1 = Companion_instance_4;
  _.$_$.w1 = Companion_getInstance_8;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
