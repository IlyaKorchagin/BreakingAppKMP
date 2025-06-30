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
  var CoroutineImpl = kotlin_kotlin.$_$.wc;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var protoOf = kotlin_kotlin.$_$.ff;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.gc;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var initMetadataForLambda = kotlin_kotlin.$_$.de;
  var VOID = kotlin_kotlin.$_$.j;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var Long = kotlin_kotlin.$_$.hk;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var isNaN_0 = kotlin_kotlin.$_$.nl;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var equals = kotlin_kotlin.$_$.od;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var hashCode = kotlin_kotlin.$_$.xd;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var lastOrNull = kotlin_kotlin.$_$.v9;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b4;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c4;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r4;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ae;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var getNumberHashCode = kotlin_kotlin.$_$.ud;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
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
    this.blf_1 = $rippleAnimation;
    this.clf_1 = this$0;
    this.dlf_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(CommonRippleNode$addRipple$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            suspendResult = this.blf_1.rlf(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.flf_1 = suspendResult;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 5;
            this.clf_1.qlg_1.l2(this.dlf_1);
            invalidateDraw(this.clf_1);
            return Unit_instance;
          case 4:
            this.t9_1 = 5;
            var t = this.v9_1;
            this.clf_1.qlg_1.l2(this.dlf_1);
            invalidateDraw(this.clf_1);
            throw t;
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CommonRippleNode$addRipple$slambda).b20 = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.blf_1, this.clf_1, this.dlf_1, completion);
    i.elf_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.qlg_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).rlg = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.qlg_1;
    var k = this_0.a10_1;
    var v = this_0.b10_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.zz_1;
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
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  // Inline function 'androidx.compose.material.ripple.CommonRippleNode.addRipple.<anonymous>' call
                  var tmp = k[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = v[index];
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).rio();
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
    var origin = this.glh_1 ? interaction.vf2_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.glh_1);
    this.qlg_1.k10(interaction, rippleAnimation);
    var tmp_1 = this.c7r();
    launch(tmp_1, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).qlh = function (interaction) {
    var tmp0_safe_receiver = this.qlg_1.s2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rio();
    }
  };
  protoOf(CommonRippleNode).rlh = function (_this__u8e3s4) {
    var alpha = this.jlh_1().vlh_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.qlg_1;
      var k = this_0.a10_1;
      var v = this_0.b10_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = this_0.zz_1;
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
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>' call
                    var tmp = k[index];
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    // Inline function 'kotlin.with' call
                    // Inline function 'kotlin.contracts.contract' call
                    ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).xlh(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.wlh(), alpha));
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
    }
  };
  protoOf(CommonRippleNode).j7r = function () {
    this.qlg_1.n2();
  };
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).bli = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-1768051227);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance)P(2!1,3:c#ui.unit.Dp)60@2195L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1768051227, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance (CommonRipple.kt:59)');
    }
    sourceInformationMarkerStart($composer_0, -1865672267, 'CC(remember):CommonRipple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(interactionSource) || ($changed & 6) === 4) | (($changed & 458752 ^ 196608) > 131072 && $composer_0.f2r(this) || ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
      $composer_0.h33(value);
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
    $composer_0.c31();
    return tmp1_group;
  };
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.lli_1.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.c1();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.kli_1.c1().vlh_1;
      if (!(alpha === 0.0)) {
        ripple.xlh(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.vli_1 = $rippleAnimation;
    this.wli_1 = this$0;
    this.xli_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 5;
            this.s9_1 = 1;
            continue $sm;
          case 1:
            this.t9_1 = 4;
            this.s9_1 = 2;
            suspendResult = this.vli_1.rlf(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zli_1 = suspendResult;
            this.t9_1 = 5;
            this.s9_1 = 3;
            continue $sm;
          case 3:
            this.t9_1 = 5;
            this.wli_1.lli_1.l2(this.xli_1);
            return Unit_instance;
          case 4:
            this.t9_1 = 5;
            var t = this.v9_1;
            this.wli_1.lli_1.l2(this.xli_1);
            throw t;
          case 5:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 5) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).b20 = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.vli_1, this.wli_1, this.xli_1, completion);
    i.yli_1 = $this$launch;
    return i;
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.hli_1 = bounded;
    this.ili_1 = radius;
    this.jli_1 = color;
    this.kli_1 = rippleAlpha;
    this.lli_1 = mutableStateMapOf();
    var tmp = this;
    tmp.mli_1 = NaN;
  }
  protoOf(CommonRippleIndicationInstance).xda = function (_this__u8e3s4) {
    var tmp = this;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.ili_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(_this__u8e3s4, this.hli_1, _this__u8e3s4.z5g());
    } else {
      tmp_0 = _this__u8e3s4.e5i(this.ili_1);
    }
    tmp.mli_1 = tmp_0;
    var color = this.jli_1.c1().p6b_1;
    _this__u8e3s4.s7s();
    this.clj(_this__u8e3s4, this.ili_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).dlj = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.lli_1.a1().m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.c1();
      ripple.rio();
    }
    var origin = this.hli_1 ? interaction.vf2_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.mli_1, this.hli_1);
    // Inline function 'kotlin.collections.set' call
    this.lli_1.k2(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).qlh = function (interaction) {
    var tmp0_safe_receiver = this.lli_1.s2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rio();
    }
  };
  protoOf(CommonRippleIndicationInstance).v2z = function () {
  };
  protoOf(CommonRippleIndicationInstance).x2z = function () {
    this.lli_1.n2();
  };
  protoOf(CommonRippleIndicationInstance).w2z = function () {
    this.lli_1.n2();
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
    this.nlj_1 = this$0;
    this.olj_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).pd9 = function (interaction, $completion) {
    var tmp = this.qd9(interaction, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).ma = function (p1, $completion) {
    return this.pd9((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp0_subject = this.plj_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.nlj_1.olh_1) {
              handlePressInteraction(this.nlj_1, this.plj_1);
            } else {
              var this_0 = this.nlj_1.plh_1;
              var element = this.plj_1;
              this_0.e(element);
            }
          } else {
            updateStateLayer(this.nlj_1, this.plj_1, this.olj_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).qd9 = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.nlj_1, this.olj_1, completion);
    i.plj_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.pd9(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.rlg(pressInteraction, $this.nlh_1, $this.mlh_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.qlh(pressInteraction.wf2_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.qlh(pressInteraction.xf2_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.llh_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.glh_1, $this.jlh_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material.ripple.RippleNode.updateStateLayer.<anonymous>' call
      invalidateDraw($this);
      $this.llh_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.vlj(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.wlj_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).y1r = function (value, $completion) {
    return this.wlj_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x3 = function () {
    return this.wlj_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.flk_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleNode$onAttach$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.flk_1.flh_1.wda();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.flk_1, this.glk_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleNode$onAttach$slambda).b20 = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.flk_1, completion);
    i.glk_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.flh_1 = interactionSource;
    this.glh_1 = bounded;
    this.hlh_1 = radius;
    this.ilh_1 = color;
    this.jlh_1 = rippleAlpha;
    this.klh_1 = false;
    this.llh_1 = null;
    this.mlh_1 = 0.0;
    this.nlh_1 = Companion_getInstance_0().s5h_1;
    this.olh_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.plh_1 = new MutableObjectList();
  }
  protoOf(RippleNode).d7r = function () {
    return this.klh_1;
  };
  protoOf(RippleNode).wlh = function () {
    return this.ilh_1.v6c();
  };
  protoOf(RippleNode).g98 = function (size) {
    this.olh_1 = true;
    var density = requireDensity(this);
    this.nlh_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.hlh_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.glh_1, this.nlh_1);
    } else {
      tmp_0 = density.e5i(this.hlh_1);
    }
    tmp.mlh_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.plh_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.hz_1;
    var inductionVariable = 0;
    var last = this_1.iz_1;
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
    this.plh_1.n2();
  };
  protoOf(RippleNode).h7r = function () {
    var tmp = this.c7r();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).q7s = function (_this__u8e3s4) {
    _this__u8e3s4.s7s();
    var tmp0_safe_receiver = this.llh_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.hlk(_this__u8e3s4, this.mlh_1, this.wlh());
    }
    this.rlh(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.qlk_1 = this$0;
    this.rlk_1 = $targetAlpha;
    this.slk_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StateLayer$handleInteraction$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.qlk_1.slj_1.sb4(this.rlk_1, this.slk_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda).b20 = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.qlk_1, this.rlk_1, this.slk_1, completion);
    i.tlk_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.cll_1 = this$0;
    this.dll_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.cll_1.slj_1.sb4(0.0, this.dll_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).b20 = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.cll_1, this.dll_1, completion);
    i.ell_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.qlj_1 = bounded;
    this.rlj_1 = rippleAlpha;
    this.slj_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tlj_1 = ArrayList_init_$Create$();
    this.ulj_1 = null;
  }
  protoOf(StateLayer).vlj = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.tlj_1.e(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.tlj_1.t2(interaction.tf2_1);
      } else {
        if (interaction instanceof Focus) {
          this.tlj_1.e(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.tlj_1.t2(interaction.uf1_1);
          } else {
            if (interaction instanceof Start) {
              this.tlj_1.e(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.tlj_1.t2(interaction.sf1_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.tlj_1.t2(interaction.tf1_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.tlj_1);
    if (!equals(this.ulj_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.rlj_1();
        var tmp;
        if (interaction instanceof Enter) {
          tmp = rippleAlpha.ulh_1;
        } else {
          if (interaction instanceof Focus) {
            tmp = rippleAlpha.tlh_1;
          } else {
            if (interaction instanceof Start) {
              tmp = rippleAlpha.slh_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.ulj_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.ulj_1 = newInteraction;
    }
  };
  protoOf(StateLayer).hlk = function (_this__u8e3s4, radius, color) {
    var alpha = this.slj_1.c1();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.qlj_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var right = _Size___get_width__impl__58y75t(_this__u8e3s4.z5g());
        var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z5g());
        var clipOp = Companion_getInstance_1().y69_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _this__u8e3s4.v6k();
        var previousSize = $this$with.z5g();
        $this$with.q5w().n69();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
          $this$with.p6k().v69(0.0, 0.0, right, bottom, clipOp);
          // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
          _this__u8e3s4.g6l(modulatedColor, radius);
        }finally {
          $this$with.q5w().o69();
          $this$with.o6k(previousSize);
        }
      } else {
        _this__u8e3s4.g6l(modulatedColor, radius);
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
      radius_0 = Companion_getInstance_2().x5i_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_3().l68_1;
    if (isTraceInProgress()) {
      traceEventStart(1635163520, $changed, -1, 'androidx.compose.material.ripple.rememberRipple (Ripple.kt:146)');
    }
    var colorState = rememberUpdatedState(new Color(color_0), $composer_0, 14 & $changed >> 6);
    sourceInformationMarkerStart($composer_0, 487972074, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.g32(bounded_0) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.h32(_Dp___get_value__impl__geb1vb(radius_0)) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple.<anonymous>' call
      var value = new CommonRipple(bounded_0, radius_0, colorState);
      $composer_0.h33(value);
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
    this.nll_1 = $instance;
    this.oll_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).pd9 = function (interaction, $completion) {
    var tmp = this.qd9(interaction, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).ma = function (p1, $completion) {
    return this.pd9((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          var tmp0_subject = this.pll_1;
          if (tmp0_subject instanceof Press) {
            this.nll_1.dlj(this.pll_1, this.oll_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.nll_1.qlh(this.pll_1.wf2_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.nll_1.qlh(this.pll_1.xf2_1);
              } else {
                this.nll_1.elj(this.pll_1, this.oll_1);
              }
            }
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).qd9 = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda(this.nll_1, this.oll_1, completion);
    i.pll_1 = interaction;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.pd9(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.qll_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).y1r = function (value, $completion) {
    return this.qll_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).x3 = function () {
    return this.qll_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation) {
    this.zll_1 = $interactionSource;
    this.alm_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda).a20 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.b20($this$LaunchedEffect, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            var tmp_0 = this.zll_1.wda();
            var tmp_1 = Ripple$rememberUpdatedInstance$slambda$slambda_0(this.alm_1, this.blm_1, null);
            suspendResult = tmp_0.t1q(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).b20 = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda(this.zll_1, this.alm_1, completion);
    i.blm_1 = $this$LaunchedEffect;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.a20($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.cli_1 = bounded;
    this.dli_1 = radius;
    this.eli_1 = color;
  }
  protoOf(Ripple).bd9 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(988743187);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)197@9514L7,198@9542L221,207@9856L13,207@9829L41,209@9895L155,217@10104L491,217@10060L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(988743187, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance (Ripple.kt:196)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.n33(this_0);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.a31(-9793426);
    sourceInformation($composer_0, '203@9725L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = this.eli_1.c1().p6b_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this.eli_1.c1().p6b_1;
    } else {
      tmp = theme.clm($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.c31();
    var color = rememberUpdatedState(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState(theme.dlm($composer_0, 0), $composer_0, 0);
    var instance = this.bli(interactionSource, this.cli_1, this.dli_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    sourceInformationMarkerStart($composer_0, -9776216, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.f2r(interactionSource) || ($changed & 6) === 4) | $composer_0.f32(instance));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.w32();
    var tmp_0;
    if (invalid || it === Companion_getInstance().l2u_1) {
      // Inline function 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance.<anonymous>' call
      var value = Ripple$rememberUpdatedInstance$slambda_0(interactionSource, instance, null);
      $composer_0.h33(value);
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
    $composer_0.c31();
    return instance;
  };
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.cli_1 === other.cli_1))
      return false;
    if (!equals(this.dli_1, other.dli_1))
      return false;
    if (!equals(this.eli_1, other.eli_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = getBooleanHashCode(this.cli_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.dli_1) | 0;
    result = imul(31, result) + hashCode(this.eli_1) | 0;
    return result;
  };
  function RippleIndicationInstance$stateLayer$lambda($rippleAlpha) {
    return function () {
      return $rippleAlpha.c1();
    };
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.alj_1 = bounded;
    var tmp = this;
    tmp.blj_1 = new StateLayer(this.alj_1, RippleIndicationInstance$stateLayer$lambda(rippleAlpha));
  }
  protoOf(RippleIndicationInstance).elj = function (interaction, scope) {
    this.blj_1.vlj(interaction, scope);
  };
  protoOf(RippleIndicationInstance).clj = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = this.blj_1;
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.alj_1, _this__u8e3s4.z5g());
    } else {
      tmp = _this__u8e3s4.e5i(radius);
    }
    var targetRadius = tmp;
    $this$with.hlk(_this__u8e3s4, targetRadius, color);
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
    this.mlm_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.mlm_1.llf_1.sb4(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.mlm_1, completion);
    i.nlm_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.wlm_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.wlm_1.mlf_1.sb4(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).b20 = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.wlm_1, completion);
    i.xlm_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.gln_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.gln_1.nlf_1.sb4(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).b20 = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.gln_1, completion);
    i.hln_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.qln_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).a20 = function ($this$launch, $completion) {
    var tmp = this.b20($this$launch, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).ma = function (p1, $completion) {
    return this.a20((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = this.qln_1.llf_1.sb4(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).b20 = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.qln_1, completion);
    i.rln_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.a20($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var this_0 = $this.plf_1;
    finishedFadingIn$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.plf_1;
    finishedFadingIn$factory_0();
    return this_0.c1();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var this_0 = $this.qlf_1;
    finishRequested$factory();
    this_0.a1y(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.qlf_1;
    finishRequested$factory_0();
    return this_0.c1();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.slo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).ogb = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeIn$slambda).ma = function (p1, $completion) {
    return this.ogb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          launch(this.tlo_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.slo_1, null));
          launch(this.tlo_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.slo_1, null));
          return launch(this.tlo_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.slo_1, null));
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.slo_1, completion);
    i.tlo_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.ogb($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.clp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).ogb = function ($this$coroutineScope, $completion) {
    var tmp = this.b20($this$coroutineScope, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation$fadeOut$slambda).ma = function (p1, $completion) {
    return this.ogb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        if (tmp === 0) {
          this.t9_1 = 1;
          return launch(this.dlp_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.clp_1, null));
        } else if (tmp === 1) {
          throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).b20 = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.clp_1, completion);
    i.dlp_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.ogb($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mlp_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 4;
            this.s9_1 = 1;
            suspendResult = fadeIn(this.mlp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.mlp_1, true);
            this.s9_1 = 2;
            suspendResult = this.mlp_1.olf_1.y17(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9_1 = 3;
            suspendResult = fadeOut(this.mlp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 4) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.alo_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.alo_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jlo_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).aa = function () {
    var suspendResult = this.u9_1;
    $sm: do
      try {
        var tmp = this.s9_1;
        switch (tmp) {
          case 0:
            this.t9_1 = 2;
            this.s9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.jlo_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.v9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.t9_1 === 2) {
          throw e;
        } else {
          this.s9_1 = this.t9_1;
          this.v9_1 = e;
        }
      }
     while (true);
  };
  function RippleAnimation(origin, radius, bounded) {
    this.glf_1 = origin;
    this.hlf_1 = radius;
    this.ilf_1 = bounded;
    this.jlf_1 = null;
    this.klf_1 = null;
    this.llf_1 = Animatable(0.0);
    this.mlf_1 = Animatable(0.0);
    this.nlf_1 = Animatable(0.0);
    this.olf_1 = CompletableDeferred(null);
    this.plf_1 = mutableStateOf(false);
    this.qlf_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).rlf = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.u9_1 = Unit_instance;
    tmp.v9_1 = null;
    return tmp.aa();
  };
  protoOf(RippleAnimation).rio = function () {
    _set_finishRequested__u52oy2(this, true);
    this.olf_1.x1b(Unit_instance);
  };
  protoOf(RippleAnimation).xlh = function (_this__u8e3s4, color) {
    if (this.jlf_1 == null) {
      this.jlf_1 = getRippleStartRadius(_this__u8e3s4.z5g());
    }
    var tmp = this.glf_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.glf_1 = _this__u8e3s4.l6l();
    }
    var tmp_0 = this.klf_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      this.klf_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.z5g()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.z5g()) / 2.0);
    }
    var tmp_1;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_1 = 1.0;
    } else {
      tmp_1 = this.llf_1.c1();
    }
    var alpha = tmp_1;
    var radius = lerp(ensureNotNull(this.jlf_1), this.hlf_1, this.mlf_1.c1());
    var tmp_2 = this.glf_1;
    var tmp_3 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_2 == null ? null : new Offset(tmp_2)).n5g_1);
    var tmp_4 = this.klf_1;
    var tmp_5 = lerp(tmp_3, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).n5g_1), this.nlf_1.c1());
    var tmp_6 = this.glf_1;
    var tmp_7 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).n5g_1);
    var tmp_8 = this.klf_1;
    var centerOffset = Offset_0(tmp_5, lerp(tmp_7, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).n5g_1), this.nlf_1.c1()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.ilf_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(_this__u8e3s4.z5g());
      var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z5g());
      var clipOp = Companion_getInstance_1().y69_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _this__u8e3s4.v6k();
      var previousSize = $this$with.z5g();
      $this$with.q5w().n69();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.p6k().v69(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
        _this__u8e3s4.g6l(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.q5w().o69();
        $this$with.o6k(previousSize);
      }
    } else {
      _this__u8e3s4.g6l(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.e5i(get_BoundedRippleExtraRadius());
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
  protoOf(Companion).nlp = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme && contentLuminance < 0.5) {
      tmp = Companion_getInstance_3().d68_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).olp = function (contentColor, lightTheme) {
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
  protoOf(DebugRippleTheme).clm = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(2042140174);
    sourceInformation($composer_0, 'C(defaultColor):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2042140174, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor (RippleTheme.kt:239)');
    }
    var tmp0 = Companion_instance.nlp(Companion_getInstance_3().z67_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  protoOf(DebugRippleTheme).dlm = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a31(-1629816343);
    sourceInformation($composer_0, 'C(rippleAlpha):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1629816343, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha (RippleTheme.kt:243)');
    }
    var tmp0 = Companion_instance.olp(Companion_getInstance_3().z67_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.c31();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.slh_1 = draggedAlpha;
    this.tlh_1 = focusedAlpha;
    this.ulh_1 = hoveredAlpha;
    this.vlh_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.slh_1 === other.slh_1))
      return false;
    if (!(this.tlh_1 === other.tlh_1))
      return false;
    if (!(this.ulh_1 === other.ulh_1))
      return false;
    if (!(this.vlh_1 === other.vlh_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.slh_1);
    result = imul(31, result) + getNumberHashCode(this.tlh_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.ulh_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.vlh_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.slh_1 + ', focusedAlpha=' + this.tlh_1 + ', ' + ('hoveredAlpha=' + this.ulh_1 + ', pressedAlpha=' + this.vlh_1 + ')');
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
  protoOf(RippleNode).w7w = onMeasureResultChanged;
  protoOf(RippleNode).f98 = onPlaced;
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
