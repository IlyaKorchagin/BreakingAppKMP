(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.yb;
  var Unit_instance = kotlin_kotlin.$_$.x5;
  var protoOf = kotlin_kotlin.$_$.he;
  var THROW_CCE = kotlin_kotlin.$_$.ej;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.qd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ib;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var initMetadataForLambda = kotlin_kotlin.$_$.fd;
  var VOID = kotlin_kotlin.$_$.i;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var Long = kotlin_kotlin.$_$.wi;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var initMetadataForClass = kotlin_kotlin.$_$.ad;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var isNaN_0 = kotlin_kotlin.$_$.ck;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var equals = kotlin_kotlin.$_$.qc;
  var FunctionAdapter = kotlin_kotlin.$_$.dc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var hashCode = kotlin_kotlin.$_$.zc;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var lastOrNull = kotlin_kotlin.$_$.g9;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cd;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.yj;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var KMutableProperty1 = kotlin_kotlin.$_$.lf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xc;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bd;
  var initMetadataForObject = kotlin_kotlin.$_$.gd;
  var getNumberHashCode = kotlin_kotlin.$_$.wc;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [Node, CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForClass(Ripple, 'Ripple', VOID, VOID, [Indication]);
  initMetadataForClass(CommonRipple, 'CommonRipple', VOID, Ripple);
  initMetadataForLambda(CommonRippleIndicationInstance$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleIndicationInstance, 'RippleIndicationInstance');
  initMetadataForClass(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', VOID, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForCompanion(Companion);
  initMetadataForObject(DebugRippleTheme, 'DebugRippleTheme');
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.oi7_1 = $rippleAnimation;
    this.pi7_1 = this$0;
    this.qi7_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(CommonRippleNode$addRipple$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.n9_1 = 2;
            suspendResult = this.oi7_1.ei8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.si7_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 5;
            this.pi7_1.di9_1.g2(this.qi7_1);
            invalidateDraw(this.pi7_1);
            return Unit_instance;
          case 4:
            this.o9_1 = 5;
            var t = this.q9_1;
            this.pi7_1.di9_1.g2(this.qi7_1);
            invalidateDraw(this.pi7_1);
            throw t;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CommonRippleNode$addRipple$slambda).f1x = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.oi7_1, this.pi7_1, this.qi7_1, completion);
    i.ri7_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.di9_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).ei9 = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.di9_1;
    var k = this_0.uz_1;
    var v = this_0.vz_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.tz_1;
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
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.material.ripple.CommonRippleNode.addRipple.<anonymous>' call
                  var tmp = k[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = v[index];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).qfi();
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
    var origin = this.ti9_1 ? interaction.cdk_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.ti9_1);
    this.di9_1.e10(interaction, rippleAnimation);
    var tmp_1 = this.n7c();
    launch(tmp_1, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).dia = function (interaction) {
    var tmp0_safe_receiver = this.di9_1.n2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qfi();
    }
  };
  protoOf(CommonRippleNode).eia = function (_this__u8e3s4) {
    var alpha = this.wi9_1().iia_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.di9_1;
      var k = this_0.uz_1;
      var v = this_0.vz_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = this_0.tz_1;
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
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>' call
                    var tmp = k[index];
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    // Inline function 'kotlin.with' call
                    // Inline function 'kotlin.contracts.contract' call
                    ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).kia(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.jia(), alpha));
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
    }
  };
  protoOf(CommonRippleNode).u7c = function () {
    this.di9_1.i2();
  };
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).oia = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1768051227);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance)P(2!1,3:c#ui.unit.Dp)60@2195L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1768051227, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance (CommonRipple.kt:59)');
    }
    sourceInformationMarkerStart($composer_0, -1865672267, 'CC(remember):CommonRipple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(interactionSource) || ($changed & 6) === 4) | (($changed & 458752 ^ 196608) > 131072 && $composer_0.h2l(this) || ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp1_group;
  };
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.yia_1.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.w();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.xia_1.w().iia_1;
      if (!(alpha === 0.0)) {
        ripple.kia(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.iib_1 = $rippleAnimation;
    this.jib_1 = this$0;
    this.kib_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.n9_1 = 2;
            suspendResult = this.iib_1.ei8(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.mib_1 = suspendResult;
            this.o9_1 = 5;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 5;
            this.jib_1.yia_1.g2(this.kib_1);
            return Unit_instance;
          case 4:
            this.o9_1 = 5;
            var t = this.q9_1;
            this.jib_1.yia_1.g2(this.kib_1);
            throw t;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).f1x = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.iib_1, this.jib_1, this.kib_1, completion);
    i.lib_1 = $this$launch;
    return i;
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.uia_1 = bounded;
    this.via_1 = radius;
    this.wia_1 = color;
    this.xia_1 = rippleAlpha;
    this.yia_1 = mutableStateMapOf();
    var tmp = this;
    tmp.zia_1 = NaN;
  }
  protoOf(CommonRippleIndicationInstance).xc7 = function (_this__u8e3s4) {
    var tmp = this;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.via_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(_this__u8e3s4, this.uia_1, _this__u8e3s4.h5a());
    } else {
      tmp_0 = _this__u8e3s4.h5b(this.via_1);
    }
    tmp.zia_1 = tmp_0;
    var color = this.wia_1.w().r63_1;
    _this__u8e3s4.n7h();
    this.pib(_this__u8e3s4, this.via_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).qib = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.yia_1.u().g();
    while (tmp0_iterator.h()) {
      var element = tmp0_iterator.i();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.w();
      ripple.qfi();
    }
    var origin = this.uia_1 ? interaction.cdk_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.zia_1, this.uia_1);
    // Inline function 'kotlin.collections.set' call
    this.yia_1.f2(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).dia = function (interaction) {
    var tmp0_safe_receiver = this.yia_1.n2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qfi();
    }
  };
  protoOf(CommonRippleIndicationInstance).x2t = function () {
  };
  protoOf(CommonRippleIndicationInstance).z2t = function () {
    this.yia_1.i2();
  };
  protoOf(CommonRippleIndicationInstance).y2t = function () {
    this.yia_1.i2();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.aic_1 = this$0;
    this.bic_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).pc6 = function (interaction, $completion) {
    var tmp = this.qc6(interaction, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).ha = function (p1, $completion) {
    return this.pc6((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_subject = this.cic_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.aic_1.bia_1) {
              handlePressInteraction(this.aic_1, this.cic_1);
            } else {
              var this_0 = this.aic_1.cia_1;
              var element = this.cic_1;
              this_0.e(element);
            }
          } else {
            updateStateLayer(this.aic_1, this.cic_1, this.bic_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).qc6 = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.aic_1, this.bic_1, completion);
    i.cic_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.pc6(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.ei9(pressInteraction, $this.aia_1, $this.zi9_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.dia(pressInteraction.ddk_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.dia(pressInteraction.edk_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.yi9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.ti9_1, $this.wi9_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.ripple.RippleNode.updateStateLayer.<anonymous>' call
      invalidateDraw($this);
      $this.yi9_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.iic(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.jic_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1r = function (value, $completion) {
    return this.jic_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.jic_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.sic_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleNode$onAttach$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = this.sic_1.si9_1.wc7();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.sic_1, this.tic_1, null);
            suspendResult = tmp_0.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleNode$onAttach$slambda).f1x = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.sic_1, completion);
    i.tic_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.si9_1 = interactionSource;
    this.ti9_1 = bounded;
    this.ui9_1 = radius;
    this.vi9_1 = color;
    this.wi9_1 = rippleAlpha;
    this.xi9_1 = false;
    this.yi9_1 = null;
    this.zi9_1 = 0.0;
    this.aia_1 = Companion_getInstance_0().x5a_1;
    this.bia_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.cia_1 = new MutableObjectList();
  }
  protoOf(RippleNode).o7c = function () {
    return this.xi9_1;
  };
  protoOf(RippleNode).jia = function () {
    return this.vi9_1.x64();
  };
  protoOf(RippleNode).u8m = function (size) {
    this.bia_1 = true;
    var density = requireDensity(this);
    this.aia_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.ui9_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.ti9_1, this.aia_1);
    } else {
      tmp_0 = density.h5b(this.ui9_1);
    }
    tmp.zi9_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.cia_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.bz_1;
    var inductionVariable = 0;
    var last = this_1.cz_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
        var tmp_1 = content[i];
        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.cia_1.i2();
  };
  protoOf(RippleNode).s7c = function () {
    var tmp = this.n7c();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).y7d = function (_this__u8e3s4) {
    _this__u8e3s4.n7h();
    var tmp0_safe_receiver = this.yi9_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.uic(_this__u8e3s4, this.zi9_1, this.jia());
    }
    this.eia(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.did_1 = this$0;
    this.eid_1 = $targetAlpha;
    this.fid_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(StateLayer$handleInteraction$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.did_1.fic_1.wag(this.eid_1, this.fid_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda).f1x = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.did_1, this.eid_1, this.fid_1, completion);
    i.gid_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.pid_1 = this$0;
    this.qid_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.pid_1.fic_1.wag(0.0, this.qid_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).f1x = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.pid_1, this.qid_1, completion);
    i.rid_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.dic_1 = bounded;
    this.eic_1 = rippleAlpha;
    this.fic_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.gic_1 = ArrayList_init_$Create$();
    this.hic_1 = null;
  }
  protoOf(StateLayer).iic = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.gic_1.e(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.gic_1.o2(interaction.adk_1);
      } else {
        if (interaction instanceof Focus) {
          this.gic_1.e(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.gic_1.o2(interaction.zdj_1);
          } else {
            if (interaction instanceof Start) {
              this.gic_1.e(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.gic_1.o2(interaction.xdj_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.gic_1.o2(interaction.ydj_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.gic_1);
    if (!equals(this.hic_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.eic_1();
        var tmp;
        if (interaction instanceof Enter) {
          tmp = rippleAlpha.hia_1;
        } else {
          if (interaction instanceof Focus) {
            tmp = rippleAlpha.gia_1;
          } else {
            if (interaction instanceof Start) {
              tmp = rippleAlpha.fia_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.hic_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.hic_1 = newInteraction;
    }
  };
  protoOf(StateLayer).uic = function (_this__u8e3s4, radius, color) {
    var alpha = this.fic_1.w();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.dic_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var right = _Size___get_width__impl__58y75t(_this__u8e3s4.h5a());
        var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.h5a());
        var clipOp = Companion_getInstance_1().b62_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _this__u8e3s4.y6c();
        var previousSize = $this$with.h5a();
        $this$with.h5p().r61();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
          $this$with.s6c().y61(0.0, 0.0, right, bottom, clipOp);
          // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
          _this__u8e3s4.h6d(modulatedColor, radius);
        }finally {
          $this$with.h5p().s61();
          $this$with.r6c(previousSize);
        }
      } else {
        _this__u8e3s4.h6d(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function rememberRipple(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1635163520, 'C(rememberRipple)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)147@7571L27,148@7610L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance_2().z5b_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_3().p60_1;
    if (isTraceInProgress()) {
      traceEventStart(1635163520, $changed, -1, 'androidx.compose.material.ripple.rememberRipple (Ripple.kt:146)');
    }
    var colorState = rememberUpdatedState(new Color(color_0), $composer_0, 14 & $changed >> 6);
    sourceInformationMarkerStart($composer_0, 487972074, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.i2w(bounded_0) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.j2w(_Dp___get_value__impl__geb1vb(radius_0)) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple.<anonymous>' call
      var value = new CommonRipple(bounded_0, radius_0, colorState);
      $composer_0.j2x(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.aie_1 = $instance;
    this.bie_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).pc6 = function (interaction, $completion) {
    var tmp = this.qc6(interaction, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).ha = function (p1, $completion) {
    return this.pc6((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_subject = this.cie_1;
          if (tmp0_subject instanceof Press) {
            this.aie_1.qib(this.cie_1, this.bie_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.aie_1.dia(this.cie_1.ddk_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.aie_1.dia(this.cie_1.edk_1);
              } else {
                this.aie_1.rib(this.cie_1, this.bie_1);
              }
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).qc6 = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda(this.aie_1, this.bie_1, completion);
    i.cie_1 = interaction;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.pc6(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.die_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x1r = function (value, $completion) {
    return this.die_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.die_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation) {
    this.mie_1 = $interactionSource;
    this.nie_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda).e1x = function ($this$LaunchedEffect, $completion) {
    var tmp = this.f1x($this$LaunchedEffect, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = this.mie_1.wc7();
            var tmp_1 = Ripple$rememberUpdatedInstance$slambda$slambda_0(this.nie_1, this.oie_1, null);
            suspendResult = tmp_0.z1p(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).f1x = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda(this.mie_1, this.nie_1, completion);
    i.oie_1 = $this$LaunchedEffect;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.e1x($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.pia_1 = bounded;
    this.qia_1 = radius;
    this.ria_1 = color;
  }
  protoOf(Ripple).bc6 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(988743187);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)197@9514L7,198@9542L221,207@9856L13,207@9829L41,209@9895L155,217@10104L491,217@10060L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(988743187, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance (Ripple.kt:196)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.p2x(this_0);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.c2v(-9793426);
    sourceInformation($composer_0, '203@9725L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = this.ria_1.w().r63_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this.ria_1.w().r63_1;
    } else {
      tmp = theme.pie($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.e2v();
    var color = rememberUpdatedState(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState(theme.qie($composer_0, 0), $composer_0, 0);
    var instance = this.oia(interactionSource, this.pia_1, this.qia_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    sourceInformationMarkerStart($composer_0, -9776216, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.h2l(interactionSource) || ($changed & 6) === 4) | $composer_0.h2w(instance));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.y2w();
    var tmp_0;
    if (invalid || it === Companion_getInstance().n2o_1) {
      // Inline function 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance.<anonymous>' call
      var value = Ripple$rememberUpdatedInstance$slambda_0(interactionSource, instance, null);
      $composer_0.j2x(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(instance, interactionSource, tmp2_group, $composer_0, 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return instance;
  };
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.pia_1 === other.pia_1))
      return false;
    if (!equals(this.qia_1, other.qia_1))
      return false;
    if (!equals(this.ria_1, other.ria_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = getBooleanHashCode(this.pia_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.qia_1) | 0;
    result = imul(31, result) + hashCode(this.ria_1) | 0;
    return result;
  };
  function RippleIndicationInstance$stateLayer$lambda($rippleAlpha) {
    return function () {
      return $rippleAlpha.w();
    };
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.nib_1 = bounded;
    var tmp = this;
    tmp.oib_1 = new StateLayer(this.nib_1, RippleIndicationInstance$stateLayer$lambda(rippleAlpha));
  }
  protoOf(RippleIndicationInstance).rib = function (interaction, scope) {
    this.oib_1.iic(interaction, scope);
  };
  protoOf(RippleIndicationInstance).pib = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.oib_1;
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.nib_1, _this__u8e3s4.h5a());
    } else {
      tmp = _this__u8e3s4.h5b(radius);
    }
    var targetRadius = tmp;
    $this$with.uic(_this__u8e3s4, targetRadius, color);
  };
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.zie_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.zie_1.yi7_1.wag(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.zie_1, completion);
    i.aif_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.jif_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.jif_1.zi7_1.wag(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).f1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.jif_1, completion);
    i.kif_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.tif_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.tif_1.ai8_1.wag(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).f1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.tif_1, completion);
    i.uif_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.dig_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).e1x = function ($this$launch, $completion) {
    var tmp = this.f1x($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).ha = function (p1, $completion) {
    return this.e1x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.dig_1.yi7_1.wag(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).f1x = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.dig_1, completion);
    i.eig_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.e1x($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var this_0 = $this.ci8_1;
    finishedFadingIn$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.ci8_1;
    finishedFadingIn$factory_0();
    return this_0.w();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var this_0 = $this.di8_1;
    finishRequested$factory();
    this_0.n1v(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.di8_1;
    finishRequested$factory_0();
    return this_0.w();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.fih_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).we8 = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeIn$slambda).ha = function (p1, $completion) {
    return this.we8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          launch(this.gih_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.fih_1, null));
          launch(this.gih_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.fih_1, null));
          return launch(this.gih_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.fih_1, null));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.fih_1, completion);
    i.gih_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.we8($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.pih_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).we8 = function ($this$coroutineScope, $completion) {
    var tmp = this.f1x($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation$fadeOut$slambda).ha = function (p1, $completion) {
    return this.we8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return launch(this.qih_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.pih_1, null));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).f1x = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.pih_1, completion);
    i.qih_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.we8($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zih_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = fadeIn(this.zih_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.zih_1, true);
            this.n9_1 = 2;
            suspendResult = this.zih_1.bi8_1.r17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 3;
            suspendResult = fadeOut(this.zih_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nig_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.nig_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wig_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).v9 = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.wig_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function RippleAnimation(origin, radius, bounded) {
    this.ti7_1 = origin;
    this.ui7_1 = radius;
    this.vi7_1 = bounded;
    this.wi7_1 = null;
    this.xi7_1 = null;
    this.yi7_1 = Animatable(0.0);
    this.zi7_1 = Animatable(0.0);
    this.ai8_1 = Animatable(0.0);
    this.bi8_1 = CompletableDeferred(null);
    this.ci8_1 = mutableStateOf(false);
    this.di8_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).ei8 = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.v9();
  };
  protoOf(RippleAnimation).qfi = function () {
    _set_finishRequested__u52oy2(this, true);
    this.bi8_1.p1b(Unit_instance);
  };
  protoOf(RippleAnimation).kia = function (_this__u8e3s4, color) {
    if (this.wi7_1 == null) {
      this.wi7_1 = getRippleStartRadius(_this__u8e3s4.h5a());
    }
    var tmp = this.ti7_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.ti7_1 = _this__u8e3s4.k6d();
    }
    var tmp_0 = this.xi7_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      this.xi7_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.h5a()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.h5a()) / 2.0);
    }
    var tmp_1;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_1 = 1.0;
    } else {
      tmp_1 = this.yi7_1.w();
    }
    var alpha = tmp_1;
    var radius = lerp(ensureNotNull(this.wi7_1), this.ui7_1, this.zi7_1.w());
    var tmp_2 = this.ti7_1;
    var tmp_3 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_2 == null ? null : new Offset(tmp_2)).v59_1);
    var tmp_4 = this.xi7_1;
    var tmp_5 = lerp(tmp_3, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).v59_1), this.ai8_1.w());
    var tmp_6 = this.ti7_1;
    var tmp_7 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).v59_1);
    var tmp_8 = this.xi7_1;
    var centerOffset = Offset_0(tmp_5, lerp(tmp_7, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).v59_1), this.ai8_1.w()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.vi7_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(_this__u8e3s4.h5a());
      var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.h5a());
      var clipOp = Companion_getInstance_1().b62_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _this__u8e3s4.y6c();
      var previousSize = $this$with.h5a();
      $this$with.h5p().r61();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.s6c().y61(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
        _this__u8e3s4.h6d(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.h5p().s61();
        $this$with.r6c(previousSize);
      }
    } else {
      _this__u8e3s4.h6d(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.h5b(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'kotlin.math.max' call
    var a = _Size___get_width__impl__58y75t(size);
    var b = _Size___get_height__impl__a04p02(size);
    return Math.max(a, b) * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
  }
  protoOf(Companion).aii = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme && contentLuminance < 0.5) {
      tmp = Companion_getInstance_3().h60_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).bii = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    return Companion_instance;
  }
  function DebugRippleTheme() {
  }
  protoOf(DebugRippleTheme).pie = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(2042140174);
    sourceInformation($composer_0, 'C(defaultColor):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2042140174, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor (RippleTheme.kt:239)');
    }
    var tmp0 = Companion_instance.aii(Companion_getInstance_3().d60_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  protoOf(DebugRippleTheme).qie = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.c2v(-1629816343);
    sourceInformation($composer_0, 'C(rippleAlpha):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1629816343, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha (RippleTheme.kt:243)');
    }
    var tmp0 = Companion_instance.bii(Companion_getInstance_3().d60_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.e2v();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.fia_1 = draggedAlpha;
    this.gia_1 = focusedAlpha;
    this.hia_1 = hoveredAlpha;
    this.iia_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.fia_1 === other.fia_1))
      return false;
    if (!(this.gia_1 === other.gia_1))
      return false;
    if (!(this.hia_1 === other.hia_1))
      return false;
    if (!(this.iia_1 === other.iia_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.fia_1);
    result = imul(31, result) + getNumberHashCode(this.gia_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hia_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.iia_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.fia_1 + ', focusedAlpha=' + this.gia_1 + ', ' + ('hoveredAlpha=' + this.hia_1 + ', pressedAlpha=' + this.iia_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_instance;
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).u7g = onMeasureResultChanged;
  protoOf(RippleNode).t8m = onPlaced;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  DebugRippleTheme_instance = new DebugRippleTheme();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleAlpha;
  _.$_$.c = createRippleModifierNode;
  _.$_$.d = rememberRipple;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
