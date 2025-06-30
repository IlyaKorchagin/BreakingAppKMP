(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var ChronoField = $module$_js_joda_core_gcv2k.ChronoField;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  var toString = kotlin_kotlin.$_$.jf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var objectCreate = kotlin_kotlin.$_$.ef;
  var captureStack = kotlin_kotlin.$_$.fd;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.j2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ek;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.b3;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.z2;
  var RuntimeException = kotlin_kotlin.$_$.ok;
  var VOID = kotlin_kotlin.$_$.j;
  var getStringHashCode = kotlin_kotlin.$_$.wd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n3;
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zd;
  var ensureNotNull = kotlin_kotlin.$_$.jl;
  var toLong = kotlin_kotlin.$_$.hf;
  var Long = kotlin_kotlin.$_$.hk;
  var ArithmeticException = kotlin_kotlin.$_$.uj;
  var THROW_CCE = kotlin_kotlin.$_$.pk;
  var KMutableProperty1 = kotlin_kotlin.$_$.lg;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vd;
  var KMutableProperty0 = kotlin_kotlin.$_$.kg;
  var Enum = kotlin_kotlin.$_$.bk;
  var initMetadataForInterface = kotlin_kotlin.$_$.ce;
  var toString_0 = kotlin_kotlin.$_$.v3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var isInterface = kotlin_kotlin.$_$.oe;
  var isArray = kotlin_kotlin.$_$.ge;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var hashCode = kotlin_kotlin.$_$.xd;
  var listOf = kotlin_kotlin.$_$.da;
  var get_indices = kotlin_kotlin.$_$.l9;
  var charSequenceLength = kotlin_kotlin.$_$.jd;
  var joinToString = kotlin_kotlin.$_$.n9;
  var equals = kotlin_kotlin.$_$.od;
  var getBooleanHashCode = kotlin_kotlin.$_$.sd;
  var KProperty0 = kotlin_kotlin.$_$.mg;
  var lazy = kotlin_kotlin.$_$.ql;
  var padStart = kotlin_kotlin.$_$.ci;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var getOrNull = kotlin_kotlin.$_$.e9;
  var listOf_0 = kotlin_kotlin.$_$.ca;
  var emptyList = kotlin_kotlin.$_$.o8;
  var toString_1 = kotlin_kotlin.$_$.cm;
  var charSequenceGet = kotlin_kotlin.$_$.id;
  var get_lastIndex = kotlin_kotlin.$_$.ai;
  var toSet = kotlin_kotlin.$_$.yb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q7;
  var distinct = kotlin_kotlin.$_$.l8;
  var to = kotlin_kotlin.$_$.dm;
  var single = kotlin_kotlin.$_$.eb;
  var Collection = kotlin_kotlin.$_$.q6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.kd;
  var numberRangeToNumber = kotlin_kotlin.$_$.xe;
  var mutableListOf = kotlin_kotlin.$_$.ja;
  var removeLastOrNull = kotlin_kotlin.$_$.xa;
  var sortWith = kotlin_kotlin.$_$.gb;
  var FunctionAdapter = kotlin_kotlin.$_$.bd;
  var Comparator = kotlin_kotlin.$_$.ak;
  var compareValues = kotlin_kotlin.$_$.cc;
  var Exception = kotlin_kotlin.$_$.dk;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.b2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p1;
  var joinTo = kotlin_kotlin.$_$.o9;
  var plus = kotlin_kotlin.$_$.qa;
  var toMutableList = kotlin_kotlin.$_$.wb;
  var addAll = kotlin_kotlin.$_$.g7;
  var firstOrNull = kotlin_kotlin.$_$.v8;
  var drop = kotlin_kotlin.$_$.n8;
  var repeat = kotlin_kotlin.$_$.fi;
  var sortedWith = kotlin_kotlin.$_$.ib;
  var binarySearch = kotlin_kotlin.$_$.n7;
  var startsWith = kotlin_kotlin.$_$.oi;
  var checkCountOverflow = kotlin_kotlin.$_$.o7;
  var compareTo = kotlin_kotlin.$_$.ld;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var removePrefix = kotlin_kotlin.$_$.di;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i3;
  var Comparable = kotlin_kotlin.$_$.zj;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.q3;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var enumEntries = kotlin_kotlin.$_$.zc;
  var numberToLong = kotlin_kotlin.$_$.cf;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.g2;
  var numberToInt = kotlin_kotlin.$_$.bf;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.r1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(System, 'System');
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalTimeZoneException, 'IllegalTimeZoneException', IllegalTimeZoneException_init_$Create$, IllegalArgumentException);
  function set_fractionOfSecond(value) {
    this.elr(value == null ? null : value.hlx(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.flr();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.TimeFieldContainer.<get-fractionOfSecond>.<anonymous>' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [TimeFieldContainer, UtcOffsetFieldContainer]);
  initMetadataForCompanion(Companion);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = this.wlt();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>.<anonymous>' call
      item(this_0);
      var tmp$ret$1 = this_0.rlt().a2u();
      destination.e(tmp$ret$1);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.wlt();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendAlternativeParsingImpl.<anonymous>' call
    mainFormat(this_1);
    var main = this_1.rlt().a2u();
    this.rlt().ult(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.rlt();
    // Inline function 'kotlin.also' call
    var this_0 = this.wlt();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.format.AbstractDateTimeFormatBuilder.appendOptionalImpl.<anonymous>' call
    format(this_0);
    tmp.ult(new OptionalFormatStructure(onZero, this_0.rlt().a2u()));
  }
  function chars(value) {
    return this.rlt().ult(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.rlt().a2u().zlu_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.blu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.blu.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.clu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.clu.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.cls(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.cls.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.zlt(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.zlt(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.zlt(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.zlt(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.zlt(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.zlt(format.flv_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.flu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.flu.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.glu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.glu.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.hlu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.hlu.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.alu(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.alu(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.alu(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.alu(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.alu(format.klx_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.slt(structure);
  }
  function addFormatStructureForTime(structure) {
    this.slt(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.jlu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.jlu.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.klu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.klu.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.mlu(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.mlu.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.vlt(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.vlt(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.vlt(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.vlt(format.elz_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithUtcOffset, WithTime, WithDate]);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective');
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Builder_2, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective');
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Builder_3, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(OffsetFields$sign$1);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AssignableString, 'AssignableString');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.nm0(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.s3p() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor');
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure');
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure');
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate');
  initMetadataForObject(Truth, 'Truth');
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter');
  initMetadataForClass(SignedFormatter, 'SignedFormatter');
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter');
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter');
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure');
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure');
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure');
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure');
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure');
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForObject(ExpectedInt, 'ExpectedInt');
  initMetadataForClass(TooManyDigits, 'TooManyDigits');
  initMetadataForClass(TooFewDigits, 'TooFewDigits');
  initMetadataForClass(WrongConstant, 'WrongConstant');
  initMetadataForClass(Conflicting, 'Conflicting');
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation');
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(SignParser, 'SignParser');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForObject(InstantIso8601Serializer, 'InstantIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UtcOffsetSerializer, 'UtcOffsetSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(TimeZoneSerializer, 'TimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject(Formats_1, 'Formats');
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject(Formats_2, 'Formats');
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(TimeZone, 'TimeZone', VOID, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject(Formats_3, 'Formats');
  initMetadataForClass(UtcOffset, 'UtcOffset', VOID, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
  }
  protoOf(System).qlp = function () {
    return Companion_getInstance_9().qlp();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.z2_1 + 1 | 0;
  }
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      // Inline function 'kotlinx.datetime.DayOfWeek.<anonymous>' call
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().u(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function getIsoDateFormat() {
    return Formats_getInstance_0().wlp();
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().xlp_1;
  }
  function getIsoTimeFormat() {
    return Formats_instance_2.wlp();
  }
  function getIsoUtcOffsetFormat() {
    return Formats_instance_3.wlp();
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.ylp_1 = date;
    this.zlp_1 = time;
    this.alq_1 = offset;
    this.blq_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).clq = function (_set____db54di) {
    this.ylp_1.flq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).hlq = function () {
    return this.ylp_1.flq_1;
  };
  protoOf(DateTimeComponentsContents).ilq = function (_set____db54di) {
    this.ylp_1.glq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).jlq = function () {
    return this.ylp_1.glq_1;
  };
  protoOf(DateTimeComponentsContents).klq = function (_set____db54di) {
    this.ylp_1.elq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).llq = function () {
    return this.ylp_1.elq_1;
  };
  protoOf(DateTimeComponentsContents).mlq = function (_set____db54di) {
    this.ylp_1.dlq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).nlq = function () {
    return this.ylp_1.dlq_1;
  };
  protoOf(DateTimeComponentsContents).olq = function (_set____db54di) {
    this.zlp_1.rlq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).vlq = function () {
    return this.zlp_1.rlq_1;
  };
  protoOf(DateTimeComponentsContents).wlq = function (value) {
    this.zlp_1.wlq(value);
  };
  protoOf(DateTimeComponentsContents).xlq = function () {
    return this.zlp_1.xlq();
  };
  protoOf(DateTimeComponentsContents).ylq = function (_set____db54di) {
    this.zlp_1.plq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).zlq = function () {
    return this.zlp_1.plq_1;
  };
  protoOf(DateTimeComponentsContents).alr = function (_set____db54di) {
    this.zlp_1.qlq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).blr = function () {
    return this.zlp_1.qlq_1;
  };
  protoOf(DateTimeComponentsContents).clr = function (_set____db54di) {
    this.zlp_1.slq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).dlr = function () {
    return this.zlp_1.slq_1;
  };
  protoOf(DateTimeComponentsContents).elr = function (_set____db54di) {
    this.zlp_1.ulq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).flr = function () {
    return this.zlp_1.ulq_1;
  };
  protoOf(DateTimeComponentsContents).glr = function (_set____db54di) {
    this.zlp_1.tlq_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).hlr = function () {
    return this.zlp_1.tlq_1;
  };
  protoOf(DateTimeComponentsContents).ilr = function (_set____db54di) {
    this.alq_1.jlr_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).nlr = function () {
    return this.alq_1.jlr_1;
  };
  protoOf(DateTimeComponentsContents).olr = function (_set____db54di) {
    this.alq_1.llr_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).plr = function () {
    return this.alq_1.llr_1;
  };
  protoOf(DateTimeComponentsContents).qlr = function (_set____db54di) {
    this.alq_1.mlr_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).rlr = function () {
    return this.alq_1.mlr_1;
  };
  protoOf(DateTimeComponentsContents).slr = function (_set____db54di) {
    this.alq_1.klr_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).tlr = function () {
    return this.alq_1.klr_1;
  };
  protoOf(DateTimeComponentsContents).ulr = function () {
    return new DateTimeComponentsContents(this.ylp_1.ulr(), this.zlp_1.ulr(), this.alq_1.ulr(), this.blq_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.ylp_1.equals(this.ylp_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.zlp_1.equals(this.zlp_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.alq_1.equals(this.alq_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.blq_1 == this.blq_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.ylp_1.hashCode() ^ this.zlp_1.hashCode() ^ this.alq_1.hashCode();
    var tmp0_safe_receiver = this.blq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.vlr(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.wlr();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.xlr();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.ylr();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.zlr(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.als();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.bls(Formats_instance_3.wlp());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.cls(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.fls(Companion_getInstance_0().els_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.gls();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.wlr();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.xlr();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.hls(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.kls(Companion_getInstance_1().jls_1);
    $this$alternativeParsing.hls(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.ylr();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.hls('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.hls('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.bls(Formats_instance_3.lls());
    return Unit_instance;
  }
  function Companion() {
  }
  protoOf(Companion).mls = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.a2u());
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance;
    tmp.nls_1 = tmp_0.mls(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance;
    tmp_1.ols_1 = tmp_2.mls(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.pls_1 = contents;
    this.qls_1 = year$factory(this.pls_1.ylp_1);
    this.rls_1 = new TwoDigitNumber(monthNumber$factory(this.pls_1.ylp_1));
    this.sls_1 = new TwoDigitNumber(dayOfMonth$factory(this.pls_1.ylp_1));
    this.tls_1 = new TwoDigitNumber(hour$factory(this.pls_1.zlp_1));
    this.uls_1 = new TwoDigitNumber(hourOfAmPm$factory(this.pls_1.zlp_1));
    this.vls_1 = amPm$factory(this.pls_1.zlp_1);
    this.wls_1 = new TwoDigitNumber(minute$factory(this.pls_1.zlp_1));
    this.xls_1 = new TwoDigitNumber(second$factory(this.pls_1.zlp_1));
    this.yls_1 = isNegative$factory(this.pls_1.alq_1);
    this.zls_1 = new TwoDigitNumber(totalHoursAbs$factory(this.pls_1.alq_1));
    this.alt_1 = new TwoDigitNumber(minutesOfHour$factory(this.pls_1.alq_1));
    this.blt_1 = new TwoDigitNumber(secondsOfMinute$factory(this.pls_1.alq_1));
    this.clt_1 = timeZoneId$factory_0(this.pls_1);
  }
  protoOf(DateTimeComponents).mlq = function (_set____db54di) {
    var this_0 = this.qls_1;
    year$factory_0();
    this_0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).nlq = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.qls_1;
    year$factory_1();
    return this_0.get();
  };
  protoOf(DateTimeComponents).flr = function () {
    return this.pls_1.zlp_1.ulq_1;
  };
  protoOf(DateTimeComponents).dlt = function () {
    return this.pls_1.alq_1.dlt();
  };
  protoOf(DateTimeComponents).elt = function () {
    return this.pls_1.zlp_1.elt();
  };
  protoOf(DateTimeComponents).flt = function () {
    var offset = this.dlt();
    var time = this.elt();
    var truncatedDate = this.pls_1.ylp_1.ulr();
    truncatedDate.dlq_1 = requireParsedField(truncatedDate.dlq_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.nlq()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.glt().ilt());
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = epochDays.h3(toLong(86400));
      var other = time.klt();
      var this_1 = this_0.f3(toLong(other));
      var other_0 = offset.mlt();
      var tmp$ret$2 = this_1.g3(toLong(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    if (totalSeconds.h1(Companion_getInstance_9().tlp_1.olt()) < 0 || totalSeconds.h1(Companion_getInstance_9().ulp_1.olt()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_9();
    var tmp0_elvis_lhs = this.flr();
    return tmp_1.plt(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.qlt_1 = actualBuilder;
  }
  protoOf(Builder).rlt = function () {
    return this.qlt_1;
  };
  protoOf(Builder).slt = function (structure) {
    this.qlt_1.ult(structure);
  };
  protoOf(Builder).vlt = function (structure) {
    this.qlt_1.ult(structure);
  };
  protoOf(Builder).wlt = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.olu_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).plu = function () {
    return this.olu_1;
  };
  protoOf(DateTimeComponentsFormat).qlu = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).rlu = function (intermediate) {
    return this.qlu(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).slu = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.ulu_1 = reference;
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.blq_1;
    }, function (receiver, value) {
      receiver.blq_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.dlq_1;
    }, function (value) {
      $b0.dlq_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.elq_1;
    }, function (value) {
      $b0.elq_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.flq_1;
    }, function (value) {
      $b0.flq_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.plq_1;
    }, function (value) {
      $b0.plq_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.qlq_1;
    }, function (value) {
      $b0.qlq_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.rlq_1;
    }, function (value) {
      $b0.rlq_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.slq_1;
    }, function (value) {
      $b0.slq_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.tlq_1;
    }, function (value) {
      $b0.tlq_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.jlr_1;
    }, function (value) {
      $b0.jlr_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.klr_1;
    }, function (value) {
      $b0.klr_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.llr_1;
    }, function (value) {
      $b0.llr_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.mlr_1;
    }, function (value) {
      $b0.mlr_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.blq_1;
    }, function (value) {
      $b0.blq_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.nlq();
    }, function (receiver, value) {
      return receiver.mlq(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.nlq();
    }, function (receiver, value) {
      return receiver.mlq(value);
    });
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(timeZoneId$factory()));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).tlu = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.plu().ylu()), input, this.slu());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.rlu(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_2(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_instance;
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  function WithDate() {
  }
  function WithTime() {
  }
  function WithUtcOffset() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.hls(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.ylt(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.xlt(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_DATE$delegate;
    ISO_DATE$factory();
    return this_0.c1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_DATE_BASIC$delegate;
    ISO_DATE_BASIC$factory();
    return this_0.c1();
  }
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function IncompleteLocalDate(year, monthNumber, dayOfMonth, isoDayOfWeek) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    dayOfMonth = dayOfMonth === VOID ? null : dayOfMonth;
    isoDayOfWeek = isoDayOfWeek === VOID ? null : isoDayOfWeek;
    this.dlq_1 = year;
    this.elq_1 = monthNumber;
    this.flq_1 = dayOfMonth;
    this.glq_1 = isoDayOfWeek;
  }
  protoOf(IncompleteLocalDate).mlq = function (_set____db54di) {
    this.dlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).nlq = function () {
    return this.dlq_1;
  };
  protoOf(IncompleteLocalDate).klq = function (_set____db54di) {
    this.elq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).llq = function () {
    return this.elq_1;
  };
  protoOf(IncompleteLocalDate).clq = function (_set____db54di) {
    this.flq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).hlq = function () {
    return this.flq_1;
  };
  protoOf(IncompleteLocalDate).ilq = function (_set____db54di) {
    this.glq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).jlq = function () {
    return this.glq_1;
  };
  protoOf(IncompleteLocalDate).glt = function () {
    var date = LocalDate_init_$Create$(requireParsedField(this.dlq_1, 'year'), requireParsedField(this.elq_1, 'monthNumber'), requireParsedField(this.flq_1, 'dayOfMonth'));
    var tmp0_safe_receiver = this.glq_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.alv()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.alv().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).ulr = function () {
    return new IncompleteLocalDate(this.dlq_1, this.elq_1, this.flq_1, this.glq_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteLocalDate) {
      tmp_2 = this.dlq_1 == other.dlq_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.elq_1 == other.elq_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.flq_1 == other.flq_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.glq_1 == other.glq_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.dlq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.elq_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.flq_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.glq_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    return tmp_1 + imul(tmp$ret$3, 31) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.dlq_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.elq_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.flq_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.glq_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.dls_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.els_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_0();
    this.blv_1 = names;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.blv_1.p() === 12)) {
      // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.blv_1);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.blv_1.u(ix);
        // Inline function 'kotlin.contracts.contract' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!(this.blv_1.u(ix) === this.blv_1.u(ix2))) {
              // Inline function 'kotlinx.datetime.format.MonthNames.<anonymous>.<anonymous>' call
              var message_1 = "Month names must be unique, but '" + this.blv_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.blv_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.blv_1, other.blv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.blv_1);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.ils_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.jls_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_1();
    this.clv_1 = names;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.clv_1.p() === 7)) {
      // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.clv_1);
    var inductionVariable = progression.i1_1;
    var last = progression.j1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>' call
        var ix = element;
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.clv_1.u(ix);
        // Inline function 'kotlin.contracts.contract' call
        if (!(charSequenceLength(this_0) > 0)) {
          // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!(this.clv_1.u(ix) === this.clv_1.u(ix2))) {
              // Inline function 'kotlinx.datetime.format.DayOfWeekNames.<anonymous>.<anonymous>' call
              var message_1 = "Day-of-week names must be unique, but '" + this.clv_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.clv_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.clv_1, other.clv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.clv_1);
  };
  function Companion_2() {
  }
  protoOf(Companion_2).dlv = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.a2u());
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function Builder_0(actualBuilder) {
    this.elv_1 = actualBuilder;
  }
  protoOf(Builder_0).rlt = function () {
    return this.elv_1;
  };
  protoOf(Builder_0).zlt = function (structure) {
    return this.elv_1.ult(structure);
  };
  protoOf(Builder_0).wlt = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.flv_1 = actualFormat;
  }
  protoOf(LocalDateFormat).plu = function () {
    return this.flv_1;
  };
  protoOf(LocalDateFormat).glv = function (intermediate) {
    return intermediate.glt();
  };
  protoOf(LocalDateFormat).rlu = function (intermediate) {
    return this.glv(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).slu = function () {
    return get_emptyIncompleteLocalDate();
  };
  function requireParsedField(field, name) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithDateBuilder() {
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = DateFields_getInstance().hlv_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.qlv_1 = padding;
    this.rlv_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.qlv_1.equals(other.qlv_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.rlv_1 === other.rlv_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.qlv_1.hashCode(), 31) + getBooleanHashCode(this.rlv_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().ilv_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.dlw_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.dlw_1.equals(other.dlw_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.dlw_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().ilv_1, names.blv_1, 'monthName');
    this.llw_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.llw_1.blv_1, other.llw_1.blv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.llw_1.blv_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().jlv_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.tlw_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.tlw_1.equals(other.tlw_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.tlw_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().klv_1, names.clv_1, 'dayOfWeekName');
    this.xlw_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.xlw_1.clv_1, other.xlw_1.clv_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.xlw_1.clv_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.hlv_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.ilv_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.jlv_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.klv_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_2;
    return tmp.dlv(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.gls();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.dlu();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.elu();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_2;
    return tmp.dlv(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.gls();
    $this$build.dlu();
    $this$build.elu();
    return Unit_instance;
  }
  function ISO_DATE$factory() {
    return getPropertyCallableRef('ISO_DATE', 0, KProperty0, function () {
      return get_ISO_DATE();
    }, null);
  }
  function ISO_DATE_BASIC$factory() {
    return getPropertyCallableRef('ISO_DATE_BASIC', 0, KProperty0, function () {
      return get_ISO_DATE_BASIC();
    }, null);
  }
  function year$factory_2() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.nlq();
    }, function (receiver, value) {
      return receiver.mlq(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.llq();
    }, function (receiver, value) {
      return receiver.klq(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.hlq();
    }, function (receiver, value) {
      return receiver.clq(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.jlq();
    }, function (receiver, value) {
      return receiver.ilq(value);
    });
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function get_ISO_DATETIME() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_DATETIME$delegate;
    ISO_DATETIME$factory();
    return this_0.c1();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function Companion_3() {
  }
  protoOf(Companion_3).ylw = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.a2u());
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Builder_1(actualBuilder) {
    this.zlw_1 = actualBuilder;
  }
  protoOf(Builder_1).rlt = function () {
    return this.zlw_1;
  };
  protoOf(Builder_1).slt = function (structure) {
    this.zlw_1.ult(structure);
  };
  protoOf(Builder_1).wlt = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.alx_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).plu = function () {
    return this.alx_1;
  };
  protoOf(LocalDateTimeFormat).blx = function (intermediate) {
    return intermediate.elx();
  };
  protoOf(LocalDateTimeFormat).rlu = function (intermediate) {
    return this.blx(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).slu = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.clx_1 = date;
    this.dlx_1 = time;
  }
  protoOf(IncompleteLocalDateTime).clq = function (_set____db54di) {
    this.clx_1.flq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).hlq = function () {
    return this.clx_1.flq_1;
  };
  protoOf(IncompleteLocalDateTime).ilq = function (_set____db54di) {
    this.clx_1.glq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).jlq = function () {
    return this.clx_1.glq_1;
  };
  protoOf(IncompleteLocalDateTime).klq = function (_set____db54di) {
    this.clx_1.elq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).llq = function () {
    return this.clx_1.elq_1;
  };
  protoOf(IncompleteLocalDateTime).mlq = function (_set____db54di) {
    this.clx_1.dlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).nlq = function () {
    return this.clx_1.dlq_1;
  };
  protoOf(IncompleteLocalDateTime).olq = function (_set____db54di) {
    this.dlx_1.rlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).vlq = function () {
    return this.dlx_1.rlq_1;
  };
  protoOf(IncompleteLocalDateTime).wlq = function (value) {
    this.dlx_1.wlq(value);
  };
  protoOf(IncompleteLocalDateTime).xlq = function () {
    return this.dlx_1.xlq();
  };
  protoOf(IncompleteLocalDateTime).ylq = function (_set____db54di) {
    this.dlx_1.plq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).zlq = function () {
    return this.dlx_1.plq_1;
  };
  protoOf(IncompleteLocalDateTime).alr = function (_set____db54di) {
    this.dlx_1.qlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).blr = function () {
    return this.dlx_1.qlq_1;
  };
  protoOf(IncompleteLocalDateTime).clr = function (_set____db54di) {
    this.dlx_1.slq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).dlr = function () {
    return this.dlx_1.slq_1;
  };
  protoOf(IncompleteLocalDateTime).elr = function (_set____db54di) {
    this.dlx_1.ulq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).flr = function () {
    return this.dlx_1.ulq_1;
  };
  protoOf(IncompleteLocalDateTime).glr = function (_set____db54di) {
    this.dlx_1.tlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).hlr = function () {
    return this.dlx_1.tlq_1;
  };
  protoOf(IncompleteLocalDateTime).elx = function () {
    return LocalDateTime_init_$Create$(this.clx_1.glt(), this.dlx_1.elt());
  };
  protoOf(IncompleteLocalDateTime).ulr = function () {
    return new IncompleteLocalDateTime(this.clx_1.ulr(), this.dlx_1.ulr());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_3;
    return tmp.ylw(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.vlr(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.ilu(get_ISO_TIME());
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function ISO_DATETIME$factory() {
    return getPropertyCallableRef('ISO_DATETIME', 0, KProperty0, function () {
      return get_ISO_DATETIME();
    }, null);
  }
  var properties_initialized_LocalDateTimeFormat_kt_67ys6r;
  function _init_properties_LocalDateTimeFormat_kt__aloigl() {
    if (!properties_initialized_LocalDateTimeFormat_kt_67ys6r) {
      properties_initialized_LocalDateTimeFormat_kt_67ys6r = true;
      ISO_DATETIME$delegate = lazy(ISO_DATETIME$delegate$lambda);
      emptyIncompleteLocalDateTime = new IncompleteLocalDateTime();
    }
  }
  function get_ISO_TIME() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_TIME$delegate;
    ISO_TIME$factory();
    return this_0.c1();
  }
  var ISO_TIME$delegate;
  function get_emptyIncompleteLocalTime() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return emptyIncompleteLocalTime;
  }
  var emptyIncompleteLocalTime;
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.plq_1 = hour;
    this.qlq_1 = hourOfAmPm;
    this.rlq_1 = amPm;
    this.slq_1 = minute;
    this.tlq_1 = second;
    this.ulq_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).ylq = function (_set____db54di) {
    this.plq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).zlq = function () {
    return this.plq_1;
  };
  protoOf(IncompleteLocalTime).alr = function (_set____db54di) {
    this.qlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).blr = function () {
    return this.qlq_1;
  };
  protoOf(IncompleteLocalTime).olq = function (_set____db54di) {
    this.rlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).vlq = function () {
    return this.rlq_1;
  };
  protoOf(IncompleteLocalTime).clr = function (_set____db54di) {
    this.slq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).dlr = function () {
    return this.slq_1;
  };
  protoOf(IncompleteLocalTime).glr = function (_set____db54di) {
    this.tlq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).hlr = function () {
    return this.tlq_1;
  };
  protoOf(IncompleteLocalTime).elr = function (_set____db54di) {
    this.ulq_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).flr = function () {
    return this.ulq_1;
  };
  protoOf(IncompleteLocalTime).elt = function () {
    var tmp0_safe_receiver = this.plq_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
      var tmp0_safe_receiver_0 = this.qlq_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.rlq_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver_0 = this.qlq_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>' call
        var tmp0_safe_receiver_1 = this.rlq_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toLocalTime.<anonymous>.<anonymous>.<anonymous>' call
          tmp_2 = (tmp1_safe_receiver_0 === 12 ? 0 : tmp1_safe_receiver_0) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.slq_1, 'minute');
    var tmp4_elvis_lhs = this.tlq_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.ulq_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).ulr = function () {
    return new IncompleteLocalTime(this.plq_1, this.qlq_1, this.rlq_1, this.slq_1, this.tlq_1, this.ulq_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.plq_1 == other.plq_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.qlq_1 == other.qlq_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.rlq_1, other.rlq_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.slq_1 == other.slq_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.tlq_1 == other.tlq_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.ulq_1 == other.ulq_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.plq_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.qlq_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.rlq_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.slq_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.tlq_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.ulq_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.plq_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.slq_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.tlq_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.ulq_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteLocalTime.toString.<anonymous>.<anonymous>' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_instance;
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_4() {
  }
  protoOf(Companion_4).ilx = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.a2u());
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Builder_2(actualBuilder) {
    this.jlx_1 = actualBuilder;
  }
  protoOf(Builder_2).rlt = function () {
    return this.jlx_1;
  };
  protoOf(Builder_2).alu = function (structure) {
    this.jlx_1.ult(structure);
  };
  protoOf(Builder_2).wlt = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.klx_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).plu = function () {
    return this.klx_1;
  };
  protoOf(LocalTimeFormat).llx = function (intermediate) {
    return intermediate.elt();
  };
  protoOf(LocalTimeFormat).rlu = function (intermediate) {
    return this.llx(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).slu = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().mlx_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.wlx_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.wlx_1.equals(other.wlx_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.wlx_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().nlx_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.bly_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.bly_1.equals(other.bly_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.bly_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().olx_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.gly_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.gly_1.equals(other.gly_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.gly_1.hashCode();
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.hly_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.ily_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_5();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_5().hly_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().plx_1, minDigits, maxDigits, zerosToAdd);
    this.nly_1 = minDigits;
    this.oly_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.nly_1 === other.nly_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.oly_1 === other.oly_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.nly_1) + this.oly_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.mlx_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.nlx_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.olx_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.plx_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.qlx_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.rlx_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
  }
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_instance_4;
    return tmp.ilx(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.wlr();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.xlr();
    var tmp = [ISO_TIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_TIME$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(58));
    $this$alternativeParsing.ylr();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.zlr(1, 9);
    return Unit_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  function ISO_TIME$factory() {
    return getPropertyCallableRef('ISO_TIME', 0, KProperty0, function () {
      return get_ISO_TIME();
    }, null);
  }
  function hour$factory_0() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.zlq();
    }, function (receiver, value) {
      return receiver.ylq(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.dlr();
    }, function (receiver, value) {
      return receiver.clr(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.hlr();
    }, function (receiver, value) {
      return receiver.glr(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.xlq();
    }, function (receiver, value) {
      return receiver.wlq(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.vlq();
    }, function (receiver, value) {
      return receiver.olq(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.blr();
    }, function (receiver, value) {
      return receiver.alr(value);
    });
  }
  var properties_initialized_LocalTimeFormat_kt_l1b0w1;
  function _init_properties_LocalTimeFormat_kt__5i3lfh() {
    if (!properties_initialized_LocalTimeFormat_kt_l1b0w1) {
      properties_initialized_LocalTimeFormat_kt_l1b0w1 = true;
      ISO_TIME$delegate = lazy(ISO_TIME$delegate$lambda);
      emptyIncompleteLocalTime = new IncompleteLocalTime();
    }
  }
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_OFFSET$delegate;
    ISO_OFFSET$factory();
    return this_0.c1();
  }
  var ISO_OFFSET$delegate;
  function get_ISO_OFFSET_BASIC() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    // Inline function 'kotlin.getValue' call
    var this_0 = ISO_OFFSET_BASIC$delegate;
    ISO_OFFSET_BASIC$factory();
    return this_0.c1();
  }
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    // Inline function 'kotlin.getValue' call
    var this_0 = FOUR_DIGIT_OFFSET$delegate;
    FOUR_DIGIT_OFFSET$factory();
    return this_0.c1();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(isNegative, totalHoursAbs, minutesOfHour, secondsOfMinute) {
    isNegative = isNegative === VOID ? null : isNegative;
    totalHoursAbs = totalHoursAbs === VOID ? null : totalHoursAbs;
    minutesOfHour = minutesOfHour === VOID ? null : minutesOfHour;
    secondsOfMinute = secondsOfMinute === VOID ? null : secondsOfMinute;
    this.jlr_1 = isNegative;
    this.klr_1 = totalHoursAbs;
    this.llr_1 = minutesOfHour;
    this.mlr_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).ilr = function (_set____db54di) {
    this.jlr_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).nlr = function () {
    return this.jlr_1;
  };
  protoOf(IncompleteUtcOffset).slr = function (_set____db54di) {
    this.klr_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).tlr = function () {
    return this.klr_1;
  };
  protoOf(IncompleteUtcOffset).olr = function (_set____db54di) {
    this.llr_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).plr = function () {
    return this.llr_1;
  };
  protoOf(IncompleteUtcOffset).qlr = function (_set____db54di) {
    this.mlr_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).rlr = function () {
    return this.mlr_1;
  };
  protoOf(IncompleteUtcOffset).dlt = function () {
    var sign = this.jlr_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.klr_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.llr_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.mlr_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toUtcOffset.<anonymous>' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.jlr_1 == other.jlr_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.klr_1 == other.klr_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.llr_1 == other.llr_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.mlr_1 == other.mlr_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.jlr_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.klr_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.llr_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.mlr_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).ulr = function () {
    return new IncompleteUtcOffset(this.jlr_1, this.klr_1, this.llr_1, this.mlr_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.jlr_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.format.IncompleteUtcOffset.toString.<anonymous>' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.klr_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.llr_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.mlr_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().uly_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.blz_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.blz_1.equals(other.blz_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.blz_1.hashCode();
  };
  function Companion_6() {
  }
  protoOf(Companion_6).clz = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.a2u());
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function Builder_3(actualBuilder) {
    this.dlz_1 = actualBuilder;
  }
  protoOf(Builder_3).rlt = function () {
    return this.dlz_1;
  };
  protoOf(Builder_3).vlt = function (structure) {
    this.dlz_1.ult(structure);
  };
  protoOf(Builder_3).wlt = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.elz_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).plu = function () {
    return this.elz_1;
  };
  protoOf(UtcOffsetFormat).flz = function (intermediate) {
    return intermediate.dlt();
  };
  protoOf(UtcOffsetFormat).rlu = function (intermediate) {
    return this.flz(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).slu = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.glz_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).nlr = function () {
    return this.glz_1;
  };
  protoOf(OffsetFields$sign$1).hlz = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.tlr();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.plr();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.rlr();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).ilz = function (obj) {
    return this.hlz((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.tly_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.tly_1;
    tmp_0.uly_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.tly_1;
    tmp_1.vly_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.tly_1;
    tmp_2.wly_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().vly_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.nlz_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.nlz_1.equals(other.nlz_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.nlz_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().wly_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.slz_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.slz_1.equals(other.slz_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.slz_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_6;
    return tmp.clz(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.hls('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.als();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.llu();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.nlu();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_6;
    return tmp.clz(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.hls('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.als();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.llu();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.nlu();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_6;
    return tmp.clz(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.als();
    $this$build.llu();
    return Unit_instance;
  }
  function ISO_OFFSET$factory() {
    return getPropertyCallableRef('ISO_OFFSET', 0, KProperty0, function () {
      return get_ISO_OFFSET();
    }, null);
  }
  function ISO_OFFSET_BASIC$factory() {
    return getPropertyCallableRef('ISO_OFFSET_BASIC', 0, KProperty0, function () {
      return get_ISO_OFFSET_BASIC();
    }, null);
  }
  function FOUR_DIGIT_OFFSET$factory() {
    return getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, KProperty0, function () {
      return get_FOUR_DIGIT_OFFSET();
    }, null);
  }
  function totalHoursAbs$factory_0() {
    return getPropertyCallableRef('totalHoursAbs', 1, KMutableProperty1, function (receiver) {
      return receiver.tlr();
    }, function (receiver, value) {
      return receiver.slr(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.plr();
    }, function (receiver, value) {
      return receiver.olr(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.rlr();
    }, function (receiver, value) {
      return receiver.qlr(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.nlr();
    }, function (receiver, value) {
      return receiver.ilr(value);
    });
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.tlt_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).a2u = function () {
    return new ConcatenatedFormatStructure(this.tlt_1);
  };
  protoOf(AppendableFormatStructure).ult = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.tlt_1.e(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = format.zlu_1.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'kotlinx.datetime.internal.format.AppendableFormatStructure.add.<anonymous>' call
          this.tlt_1.e(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.tlz(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.slv_1 = field;
    this.tlv_1 = minDigits;
    this.ulv_1 = maxDigits;
    this.vlv_1 = spacePadding;
    this.wlv_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.tlv_1 == null || this.tlv_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.tlv_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.ulv_1 == null || this.tlv_1 == null || this.ulv_1 >= this.tlv_1)) {
      // Inline function 'kotlinx.datetime.internal.format.SignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.ulv_1 + ') is less than the minimum number of digits (' + this.tlv_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).xlv = function () {
    return this.slv_1;
  };
  protoOf(SignedIntFieldFormatDirective).ylv = function () {
    var tmp = Accessor$getterNotNull$ref(this.slv_1.ulz());
    var tmp0_elvis_lhs = this.tlv_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.wlv_1);
    return !(this.vlv_1 == null) ? new SpacePaddedFormatter(formatter, this.vlv_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).ylu = function () {
    return SignedIntParser(this.tlv_1, this.ulv_1, this.vlv_1, this.slv_1.ulz(), this.slv_1.s3p(), this.wlv_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.tlz(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.elw_1 = field;
    this.flw_1 = minDigits;
    this.glw_1 = spacePadding;
    this.hlw_1 = this.elw_1.bm0_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.flw_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The minimum number of digits (' + this.flw_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.hlw_1 >= this.flw_1)) {
      // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.hlw_1 + ') is less than the minimum number of digits (' + this.flw_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.glw_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.glw_1 > this.flw_1)) {
        // Inline function 'kotlinx.datetime.internal.format.UnsignedIntFieldFormatDirective.<anonymous>' call
        var message_1 = 'The space padding (' + this.glw_1 + ') should be more than the minimum number of digits (' + this.flw_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).xlv = function () {
    return this.elw_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).ylv = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.elw_1.vlz_1), this.flw_1);
    return !(this.glw_1 == null) ? new SpacePaddedFormatter(formatter, this.glw_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).ylu = function () {
    return spaceAndZeroPaddedUnsignedInt(this.flw_1, this.hlw_1, this.glw_1, this.elw_1.vlz_1, this.elw_1.ylz_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.getStringValue.<anonymous>' call
    var it = $this.mlw_1.vlz_1.tlz(target);
    var tmp0_elvis_lhs = getOrNull($this.nlw_1, it - $this.mlw_1.wlz_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.mlw_1.ylz_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.cm0_1 = $outer;
  }
  protoOf(AssignableString).dm0 = function (container, newValue) {
    var tmp0_safe_receiver = this.cm0_1.mlw_1.vlz_1.em0(container, this.cm0_1.nlw_1.x(newValue) + this.cm0_1.mlw_1.wlz_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.internal.format.AssignableString.trySetWithoutReassigning.<anonymous>' call
      tmp = this.cm0_1.nlw_1.u(tmp0_safe_receiver - this.cm0_1.mlw_1.wlz_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).em0 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.dm0(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).s3p = function () {
    return this.cm0_1.olw_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.mlw_1 = field;
    this.nlw_1 = values;
    this.olw_1 = name;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.nlw_1.p() === ((this.mlw_1.xlz_1 - this.mlw_1.wlz_1 | 0) + 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.NamedUnsignedIntFieldFormatDirective.<anonymous>' call
      var message = 'The number of values (' + this.nlw_1.p() + ') in ' + toString(this.nlw_1) + ' does not match the range of the field (' + ((this.mlw_1.xlz_1 - this.mlw_1.wlz_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).xlv = function () {
    return this.mlw_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).ylv = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).ylu = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.nlw_1, new AssignableString(this), 'one of ' + toString(this.nlw_1) + ' for ' + this.olw_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.tlz(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.ply_1 = field;
    this.qly_1 = minDigits;
    this.rly_1 = maxDigits;
    this.sly_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).xlv = function () {
    return this.ply_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).ylv = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.ply_1.ulz()), this.qly_1, this.rly_1, this.sly_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).ylu = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.qly_1, this.rly_1, this.ply_1.ulz(), this.ply_1.s3p())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.s3p() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.fm0_1 = accessor;
    this.gm0_1 = name;
    this.hm0_1 = defaultValue;
    this.im0_1 = sign;
  }
  protoOf(GenericFieldSpec).ulz = function () {
    return this.fm0_1;
  };
  protoOf(GenericFieldSpec).s3p = function () {
    return this.gm0_1;
  };
  protoOf(GenericFieldSpec).jm0 = function () {
    return this.hm0_1;
  };
  protoOf(GenericFieldSpec).km0 = function () {
    return this.im0_1;
  };
  function PropertyAccessor(property) {
    this.lm0_1 = property;
  }
  protoOf(PropertyAccessor).s3p = function () {
    return this.lm0_1.callableName;
  };
  protoOf(PropertyAccessor).mm0 = function (container, newValue) {
    var oldValue = this.lm0_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.lm0_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).em0 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.mm0(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).nm0 = function (container) {
    return this.lm0_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.s3p() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.vlz_1 = accessor;
    this.wlz_1 = minValue;
    this.xlz_1 = maxValue;
    this.ylz_1 = name;
    this.zlz_1 = defaultValue;
    this.am0_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.xlz_1 < 10) {
      tmp_0 = 1;
    } else if (this.xlz_1 < 100) {
      tmp_0 = 2;
    } else if (this.xlz_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.xlz_1 + ' is too large');
    }
    tmp.bm0_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).ulz = function () {
    return this.vlz_1;
  };
  protoOf(UnsignedFieldSpec).s3p = function () {
    return this.ylz_1;
  };
  protoOf(UnsignedFieldSpec).jm0 = function () {
    return this.zlz_1;
  };
  protoOf(UnsignedFieldSpec).km0 = function () {
    return this.am0_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.s3p() + ' (default value is ' + toString_1(this.jm0()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.wlu_1 = protoOf(ConcatenatedFormatStructure).ylv.call(this);
    this.xlu_1 = protoOf(ConcatenatedFormatStructure).ylu.call(this);
  }
  protoOf(CachedFormatStructure).ylv = function () {
    return this.wlu_1;
  };
  protoOf(CachedFormatStructure).ylu = function () {
    return this.xlu_1;
  };
  function BasicFormatStructure(directive) {
    this.om0_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.om0_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.om0_1, other.om0_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.om0_1);
  };
  protoOf(BasicFormatStructure).ylu = function () {
    return this.om0_1.ylu();
  };
  protoOf(BasicFormatStructure).ylv = function () {
    return this.om0_1.ylv();
  };
  function ConstantFormatStructure(string) {
    this.pm0_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.pm0_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.pm0_1 === other.pm0_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.pm0_1);
  };
  protoOf(ConstantFormatStructure).ylu = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.pm0_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>' call
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.pm0_1, 0))) {
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var this_2 = this.pm0_1;
          var inductionVariable = 0;
          var last = this_2.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it = charSequenceGet(this_2, index);
              if (!isAsciiDigit(it)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$4 = this_2.substring(0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$4 = this_2;
        }
        this_1.e(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var this_3 = this.pm0_1;
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(this_3) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
              var it_0 = charSequenceGet(this_3, index_0);
              if (!isAsciiDigit(it_0)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$8 = this_3.substring(index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$8 = '';
        }
        tmp_0 = tmp$ret$8;
      } else {
        tmp_0 = this.pm0_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charSequenceGet(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$13;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_1 = charSequenceGet(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  // Inline function 'kotlin.text.substring' call
                  var endIndex = index_1 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$13 = suffix.substring(0, endIndex);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$13 = '';
          }
          this_1.e(new PlainStringParserOperation(tmp$ret$13));
          var tmp$ret$17;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                // Inline function 'kotlinx.datetime.internal.format.ConstantFormatStructure.parser.<anonymous>.<anonymous>' call
                var it_2 = charSequenceGet(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  // Inline function 'kotlin.text.substring' call
                  var startIndex = index_2 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$17 = suffix.substring(startIndex);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$17 = suffix;
          }
          this_1.e(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.e(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.b6();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).ylv = function () {
    return new ConstantStringFormatterStructure(this.pm0_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.sm0_1.m();
    $l$loop: while (tmp0_iterator.n()) {
      var check = tmp0_iterator.o();
      if (check.nlr().nm0(value) === true)
        seenNonZero = true;
      else if (check.ilz(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.sm0_1.m();
      while (tmp0_iterator.n()) {
        var field = tmp0_iterator.o();
        var wasNegative = field.nlr().nm0(value) === true;
        field.nlr().em0(value, !(isNegative === wasNegative));
      }
      return Unit_instance;
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.qm0_1 = format;
    this.rm0_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = basicFormats(this.qm0_1);
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.fieldSigns.<anonymous>' call
      var tmp0_safe_receiver = element.xlv().km0();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    tmp.sm0_1 = toSet(destination);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.sm0_1.j()) {
      // Inline function 'kotlinx.datetime.internal.format.SignedFormatStructure.<anonymous>' call
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.qm0_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.qm0_1, other.qm0_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.rm0_1 === other.rm0_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.qm0_1)) + getBooleanHashCode(this.rm0_1) | 0;
  };
  protoOf(SignedFormatStructure).ylu = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.rm0_1, 'sign for ' + toString(this.sm0_1))), emptyList()), this.qm0_1.ylu()]));
  };
  protoOf(SignedFormatStructure).ylv = function () {
    var innerFormat = this.qm0_1.ylv();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.rm0_1);
  };
  function Companion_7() {
  }
  protoOf(Companion_7).tm0 = function (field) {
    var default_0 = field.jm0();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(default_0 == null)) {
      // Inline function 'kotlinx.datetime.internal.format.Companion.fromField.<anonymous>' call
      var message = "The field '" + field.s3p() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.ulz(), default_0);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.um0_1 = accessor;
    this.vm0_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.ym0_1.m();
      while (tmp0_iterator.n()) {
        var field = tmp0_iterator.o();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        field.um0_1.em0(it, field.vm0_1);
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.nm0(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.zm0(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.am1(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.wm0_1 = onZero;
    this.xm0_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.xm0_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$0 = item.xlv();
      destination.e(tmp$ret$0);
    }
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.m();
    while (tmp0_iterator_0.n()) {
      var item_0 = tmp0_iterator_0.o();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.fields.<anonymous>' call
      var tmp$ret$3 = Companion_instance_7.tm0(item_0);
      destination_0.e(tmp$ret$3);
    }
    tmp.ym0_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.wm0_1 + ', ' + toString(this.xm0_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.wm0_1 === other.wm0_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.xm0_1, other.xm0_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.wm0_1)) + hashCode(this.xm0_1) | 0;
  };
  protoOf(OptionalFormatStructure).ylu = function () {
    var tmp = emptyList();
    var tmp_0 = this.xm0_1.ylu();
    var tmp_1 = (new ConstantFormatStructure(this.wm0_1)).ylu();
    var tmp_2;
    if (this.ym0_1.j()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).ylv = function () {
    var formatter = this.xm0_1.ylv();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.ym0_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.datetime.internal.format.OptionalFormatStructure.formatter.<anonymous>' call
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp$ret$1 = new ComparisonPredicate(item.vm0_1, Accessor$getter$ref(item.um0_1));
      destination.e(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp;
    if (predicate instanceof Truth) {
      tmp = new ConstantStringFormatterStructure(this.wm0_1);
    } else {
      var tmp_0 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.wm0_1));
      tmp = new ConditionalFormatter(listOf([tmp_0, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.bm1_1 = mainFormat;
    this.cm1_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.cm1_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.bm1_1, other.bm1_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.cm1_1, other.cm1_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.bm1_1)) + hashCode(this.cm1_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).ylu = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.format.AlternativesParsingFormatStructure.parser.<anonymous>' call
    this_0.e(this.bm1_1.ylu());
    var tmp0_iterator = this.cm1_1.m();
    while (tmp0_iterator.n()) {
      var format = tmp0_iterator.o();
      this_0.e(format.ylu());
    }
    var tmp$ret$2 = this_0.b6();
    return new ParserStructure(tmp, tmp$ret$2);
  };
  protoOf(AlternativesParsingFormatStructure).ylv = function () {
    return this.bm1_1.ylv();
  };
  function ConcatenatedFormatStructure(formats) {
    this.zlu_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.zlu_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.zlu_1, other.zlu_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.zlu_1);
  };
  protoOf(ConcatenatedFormatStructure).ylu = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.zlu_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.parser.<anonymous>' call
      var tmp$ret$0 = item.ylu();
      destination.e(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).ylv = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.zlu_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.datetime.internal.format.ConcatenatedFormatStructure.formatter.<anonymous>' call
      var tmp$ret$0 = item.ylv();
      destination.e(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.p() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>' call
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.b6();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.e(format.om0_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = format.zlu_1.m();
        while (tmp0_iterator.n()) {
          var element = tmp0_iterator.o();
          // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.qm0_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.bm1_1);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = format.cm1_1.m();
              while (tmp0_iterator_0.n()) {
                var element_0 = tmp0_iterator_0.o();
                // Inline function 'kotlinx.datetime.internal.format.basicFormats.<anonymous>$rec.<anonymous>' call
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.xm0_1);
              }
            }
          }
        }
      }
    }
  }
  function conjunctionPredicate(predicates) {
    return predicates.j() ? Truth_instance : predicates.p() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.dm1_1 = expectedValue;
    this.em1_1 = getter;
  }
  protoOf(ComparisonPredicate).zm0 = function (value) {
    return equals(this.em1_1(value), this.dm1_1);
  };
  function Truth() {
  }
  protoOf(Truth).am1 = function (value) {
    return true;
  };
  protoOf(Truth).zm0 = function (value) {
    return this.am1((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.fm1_1 = predicates;
  }
  protoOf(ConjunctionPredicate).zm0 = function (value) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = this.fm1_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var element = tmp0_iterator.o();
        // Inline function 'kotlinx.datetime.internal.format.ConjunctionPredicate.test.<anonymous>' call
        if (!element.zm0(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.gm1_1 = formatter;
    this.hm1_1 = padding;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.im1_1 = formatter;
    this.jm1_1 = allSubFormatsNegative;
    this.km1_1 = alwaysOutputSign;
  }
  function ConditionalFormatter(formatters) {
    this.lm1_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.mm1_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.nm1_1 = number;
    this.om1_1 = zeroPadding;
    this.pm1_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.om1_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.om1_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.om1_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.SignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.om1_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.qm1_1 = number;
    this.rm1_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.rm1_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.rm1_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.rm1_1 <= 9)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.UnsignedIntFormatterStructure.<anonymous>' call
      var message_0 = 'The minimum number of digits (' + this.rm1_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function StringFormatterStructure(string) {
    this.sm1_1 = string;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.tm1_1 = number;
    this.um1_1 = minDigits;
    this.vm1_1 = maxDigits;
    this.wm1_1 = zerosToAdd;
    // Inline function 'kotlin.require' call
    var containsArg = this.um1_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message = 'The minimum number of digits (' + this.um1_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var containsLower = this.um1_1;
    var containsArg_0 = this.vm1_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.formatter.DecimalFractionFormatterStructure.<anonymous>' call
      var message_0 = 'The maximum number of digits (' + this.vm1_1 + ') is not in range ' + this.um1_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.xm1_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.am2_1 = minLength;
    this.bm2_1 = maxLength;
    this.cm2_1 = setter;
    // Inline function 'kotlin.require' call
    var containsArg = this.am2_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message = 'Invalid minimum length ' + this.am2_1 + ' for field ' + this.em2_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var containsLower = this.am2_1;
    var containsArg_0 = this.bm2_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.FractionPartConsumer.<anonymous>' call
      var message_0 = 'Invalid maximum length ' + this.bm2_1 + ' for field ' + this.em2_1 + ': expected ' + this.am2_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).fm2 = function (storage, input, start, end) {
    return (end - start | 0) < this.am2_1 ? new TooFewDigits(this.am2_1) : (end - start | 0) > this.bm2_1 ? new TooManyDigits(this.bm2_1) : setWithoutReassigning(this.cm2_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.im2_1 = expected;
  }
  protoOf(ConstantNumberConsumer).fm2 = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.im2_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.im2_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.dm2_1 = length;
    this.em2_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.dm2_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).jm2 = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.km2_1 = maxDigits;
  }
  protoOf(TooManyDigits).jm2 = function () {
    return 'expected at most ' + this.km2_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.lm2_1 = minDigits;
  }
  protoOf(TooFewDigits).jm2 = function () {
    return 'expected at least ' + this.lm2_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.mm2_1 = expected;
  }
  protoOf(WrongConstant).jm2 = function () {
    return "expected '" + this.mm2_1 + "'";
  };
  function Conflicting(conflicting) {
    this.nm2_1 = conflicting;
  }
  protoOf(Conflicting).jm2 = function () {
    return "attempted to overwrite the existing value '" + toString(this.nm2_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.em0(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.qm2_1 = minLength;
    this.rm2_1 = maxLength;
    this.sm2_1 = setter;
    this.tm2_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).bl(this.a()))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.UnsignedIntConsumer.<anonymous>' call
      var message = 'Invalid length for field ' + this.em2_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).fm2 = function (storage, input, start, end) {
    var tmp;
    if (!(this.rm2_1 == null) && (end - start | 0) > this.rm2_1) {
      tmp = new TooManyDigits(this.rm2_1);
    } else if (!(this.qm2_1 == null) && (end - start | 0) < this.qm2_1) {
      tmp = new TooFewDigits(this.qm2_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.sm2_1, storage, this.tm2_1 ? -result | 0 : result);
    }
    return tmp;
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.um2_1 = position;
    this.vm2_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_8() {
  }
  protoOf(Companion_8).wm2 = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_8).xm2 = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.ym2_1.ulr();
      var inputPosition = state.am3_1;
      var parserStructure = state.zm2_1;
      // Inline function 'kotlin.run' call
      var this_0 = new Parser($this);
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse.<anonymous>' call
        this_0.bm3_1;
        var inductionVariable = 0;
        var last = parserStructure.cm3_1.p() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_1 = parserStructure.cm3_1.u(ix).em3(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_1);
            var tmp_0;
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_1);
              tmp_0 = Unit_instance;
            } else {
              if (tmp0_subject instanceof ParseError) {
                // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
                var it = _ParseResult___get_value__impl__86mnxf(this_1);
                errors.e(it);
                break $l$block;
              } else {
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_1));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.dm3_1.j()) {
          if (false || inputPosition === charSequenceLength(input)) {
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            return output;
          } else {
            // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
            var tmp_1 = inputPosition;
            var it_0 = new ParseError(tmp_1, Parser$match$lambda);
            errors.e(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.dm3_1.p() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.e(new ParserState(output, parserStructure.dm3_1.u(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.p() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_2 = Parser$match$lambda_0;
      var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp_2);
      sortWith(errors, tmp$ret$4);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).fm3.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.ym2_1 = output;
    this.zm2_1 = parserStructure;
    this.am3_1 = inputPosition;
  }
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.bm3_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.gm3_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).xe = function (a, b) {
    return this.gm3_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).x3 = function () {
    return this.gm3_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.x3());
  };
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp = b.um2_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.match.<anonymous>' call
    var tmp$ret$1 = a.um2_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.bm3_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.bm3_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.bm3_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.bm3_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.cm3_1 = operations;
    this.dm3_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.cm3_1, ', ') + '(' + joinToString(this.dm3_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.j()) {
      var iterator = _this__u8e3s4.w(_this__u8e3s4.p());
      while (iterator.d5()) {
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.<anonymous>' call
        var parser = iterator.f5();
        var acc = accumulator;
        accumulator = concat$append(parser, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.p() === 1) {
      return 'Position ' + errors.u(0).um2_1 + ': ' + errors.u(0).vm2_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$(imul(averageMessageLength, errors.p()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.dm3_1.j()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.cm3_1, other.cm3_1), other.dm3_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.dm3_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.n()) {
        var item = tmp0_iterator.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.concat.append.<anonymous>' call
        var tmp$ret$0 = concat$append(item, other);
        destination.e(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.cm3_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.cm3_1.m();
    while (tmp0_iterator.n()) {
      var op = tmp0_iterator.o();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.t(op.hm3_1);
        } else {
          currentNumberSpan = toMutableList(op.hm3_1);
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.e(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.e(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.e(op);
        }
      }
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = _this__u8e3s4.dm3_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_0.m();
    while (tmp0_iterator_0.n()) {
      var element = tmp0_iterator_0.o();
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.cm3_1.j()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_1 = simplified.dm3_1;
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0;
        if (this_1.j()) {
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
          tmp_0 = listOf_0(simplified);
        } else {
          tmp_0 = this_1;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf_0(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    if (destination.j()) {
      // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
      tmp_1 = listOf_0(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.j();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var tmp0_iterator_1 = mergedTails.m();
        while (tmp0_iterator_1.n()) {
          var element_0 = tmp0_iterator_1.o();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var tmp0_safe_receiver = firstOrNull(element_0.cm3_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>.<anonymous>' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.e(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var tmp0_iterator_2 = mergedTails.m();
        while (tmp0_iterator_2.n()) {
          var item = tmp0_iterator_2.o();
          // Inline function 'kotlinx.datetime.internal.format.parser.concat.simplify.<anonymous>' call
          var firstOperation = firstOrNull(item.cm3_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.hm3_1))), drop(item.cm3_1, 1)), item.dm3_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.dm3_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.cm3_1), item.dm3_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.e(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.um2_1 + ": '" + it.vm2_1() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.e(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.e(new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.e(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.<anonymous>' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf([new ParserStructure(listOf_0(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf([new ParserStructure(listOf_0(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.km3_1 = children;
    this.lm3_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.mm3_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).xe = function (a, b) {
    return this.mm3_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.xe(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).x3 = function () {
    return this.mm3_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.x3());
  };
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.km3_1.m();
    while (tmp0_iterator.n()) {
      var child = tmp0_iterator.o().mb();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.km3_1.m();
    while (tmp2_iterator.n()) {
      var tmp3_loop_parameter = tmp2_iterator.o();
      var key = tmp3_loop_parameter.lb();
      var child_0 = tmp3_loop_parameter.mb();
      if (!child_0.lm3_1 && child_0.km3_1.p() === 1) {
        var tmp4_container = single(child_0.km3_1);
        var grandChildKey = tmp4_container.lb();
        var grandChild = tmp4_container.mb();
        newChildren.e(to(key + grandChildKey, grandChild));
      } else {
        newChildren.e(to(key, child_0));
      }
    }
    trie.km3_1.n2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.km3_1.t(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
      var tmp$ret$0 = it.jb_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      // Inline function 'kotlin.text.substring' call
      var this_0 = $input;
      var startIndex = $startIndex;
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(this_0, startIndex, endIndex));
      return 'Expected ' + this$0.om3_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp = a.jb_1;
    // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.reduceTrie.<anonymous>' call
    var tmp$ret$1 = b.jb_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.nm3_1 = setter;
    this.om3_1 = whatThisExpects;
    this.pm3_1 = new TrieNode();
    var tmp0_iterator = strings.m();
    while (tmp0_iterator.n()) {
      var string = tmp0_iterator.o();
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(charSequenceLength(string) > 0)) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message = 'Found an empty string in ' + this.om3_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.pm3_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var this_0 = node.km3_1;
        var key = toString_0(char);
        var toIndex = this_0.p();
        var searchResult = binarySearch(this_0, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_1 = new TrieNode();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
          node.km3_1.w2((-searchResult | 0) - 1 | 0, to(toString_0(char), this_1));
          tmp = this_1;
        } else {
          tmp = node.km3_1.u(searchResult).kb_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!node.lm3_1) {
        // Inline function 'kotlinx.datetime.internal.format.parser.StringSetParserOperation.<anonymous>' call
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.lm3_1 = true;
    }
    _init_$reduceTrie(this.pm3_1);
  }
  protoOf(StringSetParserOperation).em3 = function (storage, input, startIndex) {
    var node = this.pm3_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.lm3_1)
        lastMatch = index._v;
      var tmp0_iterator = node.km3_1.m();
      while (tmp0_iterator.n()) {
        var tmp1_loop_parameter = tmp0_iterator.o();
        var key = tmp1_loop_parameter.lb();
        var child = tmp1_loop_parameter.mb();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.nm3_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_8;
      tmp = tmp_0.xm2(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.hm3_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.n()) {
      var item = tmp0_iterator.o();
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<get-whatThisExpects>.<anonymous>' call
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.em2_1);
      destination.e(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.jm3_1) {
      tmp = 'a number with at least ' + $this.im3_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.im3_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.hm3_1.u($i).em2_1 + ': ' + $error.jm2();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.hm3_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator = this.hm3_1.m();
    while (tmp0_iterator.n()) {
      var element = tmp0_iterator.o();
      var tmp_0 = sum;
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.minLength.<anonymous>' call
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.im3_1 = sum;
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.hm3_1;
      var tmp_2;
      if (isInterface(this_0, Collection)) {
        tmp_2 = this_0.j();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var tmp0_iterator_0 = this_0.m();
      while (tmp0_iterator_0.n()) {
        var element_0 = tmp0_iterator_0.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.isFlexible.<anonymous>' call
        if (element_0.a() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.jm3_1 = tmp$ret$2;
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var this_1 = this.hm3_1;
      var tmp_3;
      if (isInterface(this_1, Collection)) {
        tmp_3 = this_1.j();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var tmp0_iterator_1 = this_1.m();
      while (tmp0_iterator_1.n()) {
        var element_1 = tmp0_iterator_1.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        var tmp0_elvis_lhs_0 = element_1.a();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$4) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$7;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var this_2 = this.hm3_1;
      var tmp_4;
      if (isInterface(this_2, Collection)) {
        tmp_4 = this_2.j();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$7 = 0;
        break $l$block_3;
      }
      var count = 0;
      var tmp0_iterator_2 = this_2.m();
      while (tmp0_iterator_2.n()) {
        var element_2 = tmp0_iterator_2.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
        if (element_2.a() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$7 = count;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp$ret$7 <= 1)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_3 = this.hm3_1;
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator_3 = this_3.m();
      while (tmp0_iterator_3.n()) {
        var element_3 = tmp0_iterator_3.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        if (element_3.a() == null) {
          destination.e(element_3);
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var tmp0_iterator_4 = destination.m();
      while (tmp0_iterator_4.n()) {
        var item = tmp0_iterator_4.o();
        // Inline function 'kotlinx.datetime.internal.format.parser.NumberSpanParserOperation.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item.em2_1;
        destination_0.e(tmp$ret$12);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).em3 = function (storage, input, startIndex) {
    if ((startIndex + this.im3_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_8;
      return tmp.xm2(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.im3_1) {
      var tmp_0 = Companion_instance_8;
      return tmp_0.xm2(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.hm3_1.p() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.hm3_1.u(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.im3_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.hm3_1.u(i).fm2(storage, input, index, index + length | 0);
        if (!(error == null)) {
          // Inline function 'kotlin.text.substring' call
          var startIndex_0 = index;
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, startIndex_0, endIndex));
          var tmp_1 = Companion_instance_8;
          var tmp_2 = index;
          return tmp_1.xm2(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_8.wm2(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.qm3_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      // Inline function 'kotlin.text.substring' call
      var this_0 = $input;
      var startIndex = $startIndex;
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(this_0, startIndex, endIndex));
      return 'Expected ' + this$0.qm3_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.qm3_1 = string;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.qm3_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(charSequenceLength(this_0) > 0)) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isAsciiDigit(charSequenceGet(this.qm3_1, 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_0 = "String '" + this.qm3_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isAsciiDigit(charSequenceGet(this.qm3_1, this.qm3_1.length - 1 | 0))) {
      // Inline function 'kotlinx.datetime.internal.format.parser.PlainStringParserOperation.<anonymous>' call
      var message_1 = "String '" + this.qm3_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).em3 = function (storage, input, startIndex) {
    if ((startIndex + this.qm3_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_8;
      return tmp.xm2(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.qm3_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.qm3_1, i))) {
          var tmp_0 = Companion_instance_8;
          return tmp_0.xm2(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_8.wm2(startIndex + this.qm3_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.qm3_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.tm3_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.rm3_1 = isNegativeSetter;
    this.sm3_1 = withPlusSign;
    this.tm3_1 = whatThisExpects;
  }
  protoOf(SignParser).em3 = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_8.wm2(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.rm3_1(storage, true);
      return Companion_instance_8.wm2(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.sm3_1) {
      this.rm3_1(storage, false);
      return Companion_instance_8.wm2(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_8;
    return tmp.xm2(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.tm3_1;
  };
  function UnconditionalModification(operation) {
    this.um3_1 = operation;
  }
  protoOf(UnconditionalModification).em3 = function (storage, input, startIndex) {
    this.um3_1(storage);
    return Companion_instance_8.wm2(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.em0(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_8.wm2(nextIndex);
    } else {
      var tmp_0 = Companion_instance_8;
      tmp = tmp_0.xm2(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.format.parser.spaceAndZeroPaddedUnsignedInt.numberOfRequiredLengths.<anonymous>' call
    if ($withMinus) {
      this_0.e(new PlainStringParserOperation('-'));
    }
    this_0.e(new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$3 = this_0.b6();
    return new ParserStructure(tmp$ret$3, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.s3p() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.flx_1 = fractionalPart;
    this.glx_1 = digits;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.glx_1 >= 0)) {
      // Inline function 'kotlinx.datetime.internal.DecimalFraction.<anonymous>' call
      var message = 'Digits must be non-negative, but was ' + this.glx_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).hlx = function (newDigits) {
    return newDigits === this.glx_1 ? this.flx_1 : newDigits > this.glx_1 ? imul(this.flx_1, get_POWERS_OF_TEN()[newDigits - this.glx_1 | 0]) : this.flx_1 / get_POWERS_OF_TEN()[this.glx_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).vm3 = function (other) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.glx_1;
    var b = other.glx_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.compareTo.<anonymous>' call
    var maxPrecision = Math.max(a, b);
    return compareTo(this.hlx(maxPrecision), other.hlx(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.vm3(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.vm3(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.datetime.internal.DecimalFraction.toString.<anonymous>' call
    var denominator = get_POWERS_OF_TEN()[this.glx_1];
    this_0.jd(this.flx_1 / denominator | 0);
    this_0.w8(_Char___init__impl__6a9atx(46));
    this_0.v8(removePrefix((denominator + (this.flx_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.wm3_1 = PrimitiveSerialDescriptor('kotlinx.datetime.Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).m4i = function () {
    return this.wm3_1;
  };
  protoOf(InstantIso8601Serializer).o4i = function (decoder) {
    return Companion_getInstance_9().xm3(decoder.j4m());
  };
  protoOf(InstantIso8601Serializer).ym3 = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(InstantIso8601Serializer).n4i = function (encoder, value) {
    return this.ym3(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.zm3_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).m4i = function () {
    return this.zm3_1;
  };
  protoOf(LocalDateIso8601Serializer).o4i = function (decoder) {
    return Companion_getInstance_10().cm4(decoder.j4m());
  };
  protoOf(LocalDateIso8601Serializer).dm4 = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).n4i = function (encoder, value) {
    return this.dm4(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.em4_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).m4i = function () {
    return this.em4_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).o4i = function (decoder) {
    return Companion_getInstance_11().hm4(decoder.j4m());
  };
  protoOf(LocalDateTimeIso8601Serializer).im4 = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).n4i = function (encoder, value) {
    return this.im4(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.jm4_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).m4i = function () {
    return this.jm4_1;
  };
  protoOf(LocalTimeIso8601Serializer).o4i = function (decoder) {
    return Companion_getInstance_12().mm4(decoder.j4m());
  };
  protoOf(LocalTimeIso8601Serializer).nm4 = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).n4i = function (encoder, value) {
    return this.nm4(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.om4_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).m4i = function () {
    return this.om4_1;
  };
  protoOf(UtcOffsetSerializer).o4i = function (decoder) {
    return Companion_getInstance_15().qm4(decoder.j4m());
  };
  protoOf(UtcOffsetSerializer).rm4 = function (encoder, value) {
    encoder.f4l(value.toString());
  };
  protoOf(UtcOffsetSerializer).n4i = function (encoder, value) {
    return this.rm4(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.sm4_1 = PrimitiveSerialDescriptor('kotlinx.datetime.TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).m4i = function () {
    return this.sm4_1;
  };
  protoOf(TimeZoneSerializer).o4i = function (decoder) {
    return Companion_getInstance_13().um4(decoder.j4m());
  };
  protoOf(TimeZoneSerializer).vm4 = function (encoder, value) {
    encoder.f4l(value.e2y());
  };
  protoOf(TimeZoneSerializer).n4i = function (encoder, value) {
    return this.vm4(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.xm4_1 = PrimitiveSerialDescriptor('kotlinx.datetime.FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).m4i = function () {
    return this.xm4_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).o4i = function (decoder) {
    var zone = Companion_getInstance_13().um4(decoder.j4m());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone.toString() + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).ym4 = function (encoder, value) {
    encoder.f4l(value.e2y());
  };
  protoOf(FixedOffsetTimeZoneSerializer).n4i = function (encoder, value) {
    return this.ym4(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_instance;
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_PAST.<anonymous>' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).w3(), 999999999);
    tmp.rlp_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.Companion.DISTANT_FUTURE.<anonymous>' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).w3(), 0);
    tmp_0.slp_1 = new Instant_0(tmp$ret$3);
    this.tlp_1 = new Instant_0(Instant.MIN);
    this.ulp_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_9).qlp = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_9).zm4 = function (input, format) {
    var tmp;
    try {
      tmp = format.tlu(input).flt();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse an instant from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_9).xm3 = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().nls_1 : format;
    return $super === VOID ? this.zm4(input, format) : $super.zm4.call(this, input, format);
  };
  protoOf(Companion_9).plt = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.fromEpochSeconds.<anonymous>' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.w3(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.h1(new Long(0, 0)) > 0 ? this.ulp_1 : this.tlp_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Instant_0(value) {
    Companion_getInstance_9();
    this.nlt_1 = value;
  }
  protoOf(Instant_0).olt = function () {
    return numberToLong(this.nlt_1.epochSecond());
  };
  protoOf(Instant_0).am5 = function (other) {
    return this.nlt_1.compareTo(other.nlt_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.am5(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.nlt_1 === other.nlt_1 || this.nlt_1.equals(other.nlt_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.nlt_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.nlt_1.toString();
  };
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.am4_1 = new LocalDate_0(LocalDate.MIN);
    this.bm4_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_10).bm5 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().wlp()) {
      var tmp_0;
      try {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.contracts.contract' call
        var p0 = LocalDate.parse(toString(input));
        tmp_0 = new LocalDate_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.tlu(input);
    }
    return tmp;
  };
  protoOf(Companion_10).cm4 = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.bm5(input, format) : $super.bm5.call(this, input, format);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.vlp_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).wlp = function () {
    return get_ISO_DATE();
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalDate.<init>.<anonymous>' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_10();
    this.hlt_1 = value;
  }
  protoOf(LocalDate_0).nlq = function () {
    return this.hlt_1.year();
  };
  protoOf(LocalDate_0).llq = function () {
    return this.hlt_1.monthValue();
  };
  protoOf(LocalDate_0).hlq = function () {
    return this.hlt_1.dayOfMonth();
  };
  protoOf(LocalDate_0).alv = function () {
    return toDayOfWeek(this.hlt_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.hlt_1 === other.hlt_1 || this.hlt_1.equals(other.hlt_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.hlt_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.hlt_1.toString();
  };
  protoOf(LocalDate_0).cm5 = function (other) {
    return this.hlt_1.compareTo(other.hlt_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.cm5(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).ilt = function () {
    return numberToInt(this.hlt_1.toEpochDay());
  };
  function LocalDateTime_init_$Init$(date, time, $this) {
    // Inline function 'kotlinx.datetime.jsTry' call
    // Inline function 'kotlinx.datetime.LocalDateTime.<init>.<anonymous>' call
    var tmp$ret$1 = LocalDateTime.of(date.hlt_1, time.jlt_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$(date, time) {
    return LocalDateTime_init_$Init$(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.fm4_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.gm4_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_11).dm5 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().xlp_1) {
      var tmp_0;
      try {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.contracts.contract' call
        var p0 = LocalDateTime.parse(toString(input));
        tmp_0 = new LocalDateTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.tlu(input);
    }
    return tmp;
  };
  protoOf(Companion_11).hm4 = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.dm5(input, format) : $super.dm5.call(this, input, format);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.xlp_1 = get_ISO_DATETIME();
  }
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_11();
    this.em5_1 = value;
  }
  protoOf(LocalDateTime_0).nlq = function () {
    return this.em5_1.year();
  };
  protoOf(LocalDateTime_0).llq = function () {
    return this.em5_1.monthValue();
  };
  protoOf(LocalDateTime_0).hlq = function () {
    return this.em5_1.dayOfMonth();
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.em5_1 === other.em5_1 || this.em5_1.equals(other.em5_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.em5_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.em5_1.toString();
  };
  protoOf(LocalDateTime_0).fm5 = function (other) {
    return this.em5_1.compareTo(other.em5_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.fm5(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.LocalTime.<init>.<anonymous>' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.km4_1 = new LocalTime_0(LocalTime.MIN);
    this.lm4_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_12).gm5 = function (input, format) {
    var tmp;
    if (format === Formats_instance_2.wlp()) {
      var tmp_0;
      try {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.Companion.parse.<anonymous>' call
        // Inline function 'kotlin.contracts.contract' call
        var p0 = LocalTime.parse(toString(input));
        tmp_0 = new LocalTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.tlu(input);
    }
    return tmp;
  };
  protoOf(Companion_12).mm4 = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.gm5(input, format) : $super.gm5.call(this, input, format);
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Formats_2() {
  }
  protoOf(Formats_2).wlp = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    return Formats_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_12();
    this.jlt_1 = value;
  }
  protoOf(LocalTime_0).klt = function () {
    return this.jlt_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.jlt_1 === other.jlt_1 || this.jlt_1.equals(other.jlt_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.jlt_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.jlt_1.toString();
  };
  protoOf(LocalTime_0).hm5 = function (other) {
    return this.jlt_1.compareTo(other.jlt_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.hm5(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.tm4_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_13).im5 = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_13).um4 = function (zoneId) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.Companion.of.<anonymous>' call
      var tmp$ret$1 = ZoneId.of(zoneId);
      tmp = ofZone(this, tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_13();
    this.wm4_1 = zoneId;
  }
  protoOf(TimeZone).e2y = function () {
    return this.wm4_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.wm4_1 === other.wm4_1 || this.wm4_1.equals(other.wm4_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.wm4_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.wm4_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.toLocalDateTime.<anonymous>' call
      // Inline function 'kotlin.contracts.contract' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.nlt_1, timeZone.wm4_1);
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.llt_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_14() {
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.km5_1 = offset;
  }
  function get_isoFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    // Inline function 'kotlin.getValue' call
    var this_0 = isoFormat$delegate;
    isoFormat$factory();
    return this_0.c1();
  }
  var isoFormat$delegate;
  function get_isoBasicFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    // Inline function 'kotlin.getValue' call
    var this_0 = isoBasicFormat$delegate;
    isoBasicFormat$factory();
    return this_0.c1();
  }
  var isoBasicFormat$delegate;
  function get_fourDigitsFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    // Inline function 'kotlin.getValue' call
    var this_0 = fourDigitsFormat$delegate;
    fourDigitsFormat$factory();
    return this_0.c1();
  }
  var fourDigitsFormat$delegate;
  function Companion_15() {
    Companion_instance_15 = this;
    this.pm4_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_15).lm5 = function (input, format) {
    return format === Formats_instance_3.wlp() ? parseWithFormat(input, get_isoFormat()) : format === Formats_instance_3.mm5() ? parseWithFormat(input, get_isoBasicFormat()) : format === Formats_instance_3.lls() ? parseWithFormat(input, get_fourDigitsFormat()) : format.tlu(input);
  };
  protoOf(Companion_15).qm4 = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.lm5(input, format) : $super.lm5.call(this, input, format);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Formats_3() {
  }
  protoOf(Formats_3).wlp = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).mm5 = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).lls = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    return Formats_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_15();
    this.llt_1 = zoneOffset;
  }
  protoOf(UtcOffset).mlt = function () {
    return this.llt_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.llt_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.llt_1 === other.llt_1 || this.llt_1.equals(other.llt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.llt_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlinx.datetime.UtcOffset.<anonymous>' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function parseWithFormat(input, format) {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlinx.datetime.parseWithFormat.<anonymous>' call
      tmp = format.parse(toString(input)).get(ChronoField.OFFSET_SECONDS);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return UtcOffset_0(VOID, VOID, tmp);
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  function isoFormat$factory() {
    return getPropertyCallableRef('isoFormat', 0, KProperty0, function () {
      return get_isoFormat();
    }, null);
  }
  function isoBasicFormat$factory() {
    return getPropertyCallableRef('isoBasicFormat', 0, KProperty0, function () {
      return get_isoBasicFormat();
    }, null);
  }
  function fourDigitsFormat$factory() {
    return getPropertyCallableRef('fourDigitsFormat', 0, KProperty0, function () {
      return get_fourDigitsFormat();
    }, null);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.m3();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.h3(b);
    if (!total.i3(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.f3(b);
    if (a.t3(sum).h1(new Long(0, 0)) < 0 && a.t3(b).h1(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).xlt = appendAlternativeParsingImpl;
  protoOf(Builder).ylt = appendOptionalImpl;
  protoOf(Builder).hls = chars;
  protoOf(Builder).a2u = build;
  protoOf(Builder).zlt = addFormatStructureForDate;
  protoOf(Builder).alu = addFormatStructureForTime;
  protoOf(Builder).blu = year;
  protoOf(Builder).gls = year$default;
  protoOf(Builder).clu = monthNumber;
  protoOf(Builder).dlu = monthNumber$default;
  protoOf(Builder).fls = monthName;
  protoOf(Builder).cls = dayOfMonth;
  protoOf(Builder).elu = dayOfMonth$default;
  protoOf(Builder).kls = dayOfWeek;
  protoOf(Builder).vlr = date;
  protoOf(Builder).flu = hour;
  protoOf(Builder).wlr = hour$default;
  protoOf(Builder).glu = minute;
  protoOf(Builder).xlr = minute$default;
  protoOf(Builder).hlu = second;
  protoOf(Builder).ylr = second$default;
  protoOf(Builder).zlr = secondFraction;
  protoOf(Builder).ilu = time;
  protoOf(Builder).jlu = offsetHours;
  protoOf(Builder).als = offsetHours$default;
  protoOf(Builder).klu = offsetMinutesOfHour;
  protoOf(Builder).llu = offsetMinutesOfHour$default;
  protoOf(Builder).mlu = offsetSecondsOfMinute;
  protoOf(Builder).nlu = offsetSecondsOfMinute$default;
  protoOf(Builder).bls = offset;
  protoOf(Builder_0).xlt = appendAlternativeParsingImpl;
  protoOf(Builder_0).ylt = appendOptionalImpl;
  protoOf(Builder_0).hls = chars;
  protoOf(Builder_0).a2u = build;
  protoOf(Builder_0).blu = year;
  protoOf(Builder_0).gls = year$default;
  protoOf(Builder_0).clu = monthNumber;
  protoOf(Builder_0).dlu = monthNumber$default;
  protoOf(Builder_0).cls = dayOfMonth;
  protoOf(Builder_0).elu = dayOfMonth$default;
  protoOf(Builder_1).xlt = appendAlternativeParsingImpl;
  protoOf(Builder_1).ylt = appendOptionalImpl;
  protoOf(Builder_1).hls = chars;
  protoOf(Builder_1).a2u = build;
  protoOf(Builder_1).zlt = addFormatStructureForDate;
  protoOf(Builder_1).alu = addFormatStructureForTime;
  protoOf(Builder_1).blu = year;
  protoOf(Builder_1).gls = year$default;
  protoOf(Builder_1).clu = monthNumber;
  protoOf(Builder_1).dlu = monthNumber$default;
  protoOf(Builder_1).cls = dayOfMonth;
  protoOf(Builder_1).elu = dayOfMonth$default;
  protoOf(Builder_1).vlr = date;
  protoOf(Builder_1).flu = hour;
  protoOf(Builder_1).wlr = hour$default;
  protoOf(Builder_1).glu = minute;
  protoOf(Builder_1).xlr = minute$default;
  protoOf(Builder_1).hlu = second;
  protoOf(Builder_1).ylr = second$default;
  protoOf(Builder_1).zlr = secondFraction;
  protoOf(Builder_1).ilu = time;
  protoOf(IncompleteLocalTime).wlq = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).xlq = get_fractionOfSecond;
  protoOf(Builder_2).xlt = appendAlternativeParsingImpl;
  protoOf(Builder_2).ylt = appendOptionalImpl;
  protoOf(Builder_2).hls = chars;
  protoOf(Builder_2).a2u = build;
  protoOf(Builder_2).flu = hour;
  protoOf(Builder_2).wlr = hour$default;
  protoOf(Builder_2).glu = minute;
  protoOf(Builder_2).xlr = minute$default;
  protoOf(Builder_2).hlu = second;
  protoOf(Builder_2).ylr = second$default;
  protoOf(Builder_2).zlr = secondFraction;
  protoOf(Builder_3).xlt = appendAlternativeParsingImpl;
  protoOf(Builder_3).ylt = appendOptionalImpl;
  protoOf(Builder_3).hls = chars;
  protoOf(Builder_3).a2u = build;
  protoOf(Builder_3).jlu = offsetHours;
  protoOf(Builder_3).als = offsetHours$default;
  protoOf(Builder_3).klu = offsetMinutesOfHour;
  protoOf(Builder_3).llu = offsetMinutesOfHour$default;
  protoOf(Builder_3).mlu = offsetSecondsOfMinute;
  protoOf(Builder_3).nlu = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).tlz = getterNotNull;
  //endregion
  //region block: init
  System_instance = new System();
  Companion_instance = new Companion();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Truth_instance = new Truth();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_8 = new Companion_8();
  Formats_instance_2 = new Formats_2();
  Companion_instance_14 = new Companion_14();
  Formats_instance_3 = new Formats_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LocalDate_init_$Create$;
  _.$_$.b = System_instance;
  _.$_$.c = Companion_getInstance_13;
  _.$_$.d = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
