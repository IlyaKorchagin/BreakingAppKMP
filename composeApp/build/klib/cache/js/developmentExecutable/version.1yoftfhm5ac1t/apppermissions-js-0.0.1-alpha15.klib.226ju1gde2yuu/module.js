(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'PlatformPermission-apppermissions'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'PlatformPermission-apppermissions'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'PlatformPermission-apppermissions'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'PlatformPermission-apppermissions'.");
    }
    globalThis['PlatformPermission-apppermissions'] = factory(typeof globalThis['PlatformPermission-apppermissions'] === 'undefined' ? {} : globalThis['PlatformPermission-apppermissions'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ki;
  var initMetadataForObject = kotlin_kotlin.$_$.ih;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.g;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.uj;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zg;
  var lazy = kotlin_kotlin.$_$.rp;
  var THROW_IAE = kotlin_kotlin.$_$.oo;
  var enumEntries = kotlin_kotlin.$_$.cg;
  var Unit_getInstance = kotlin_kotlin.$_$.t6;
  var Enum = kotlin_kotlin.$_$.zn;
  var initMetadataForClass = kotlin_kotlin.$_$.ch;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sp;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(Permission, 'Permission', VOID, Enum);
  initMetadataForClass(Settings, 'Settings', VOID, Enum);
  initMetadataForObject(PermissionX, 'PermissionX');
  //endregion
  var platformpermission_apppermissions_generated_resources_Res_drawable$stable;
  var platformpermission_apppermissions_generated_resources_Res_string$stable;
  var platformpermission_apppermissions_generated_resources_Res_array$stable;
  var platformpermission_apppermissions_generated_resources_Res_plurals$stable;
  var platformpermission_apppermissions_generated_resources_Res_font$stable;
  var platformpermission_apppermissions_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/platformpermission.apppermissions.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/platformpermission.apppermissions.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allDrawableResources$delegate;
    allDrawableResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringResources$delegate;
    allStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allStringArrayResources$delegate;
    allStringArrayResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allPluralStringResources$delegate;
    allPluralStringResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.getValue' call
    var this_0 = allFontResources$delegate;
    allFontResources$factory();
    return this_0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function allDrawableResources$factory() {
    return getPropertyCallableRef('allDrawableResources', 1, KProperty1, function (receiver) {
      return get_allDrawableResources(receiver);
    }, null);
  }
  function allStringResources$factory() {
    return getPropertyCallableRef('allStringResources', 1, KProperty1, function (receiver) {
      return get_allStringResources(receiver);
    }, null);
  }
  function allStringArrayResources$factory() {
    return getPropertyCallableRef('allStringArrayResources', 1, KProperty1, function (receiver) {
      return get_allStringArrayResources(receiver);
    }, null);
  }
  function allPluralStringResources$factory() {
    return getPropertyCallableRef('allPluralStringResources', 1, KProperty1, function (receiver) {
      return get_allPluralStringResources(receiver);
    }, null);
  }
  function allFontResources$factory() {
    return getPropertyCallableRef('allFontResources', 1, KProperty1, function (receiver) {
      return get_allFontResources(receiver);
    }, null);
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
  }
  var Permission_Gallery_instance;
  var Permission_GeolocationOnAppUsing_instance;
  var Permission_Notification_instance;
  function values() {
    return [Permission_Gallery_getInstance(), Permission_GeolocationOnAppUsing_getInstance(), Permission_Notification_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Gallery':
        return Permission_Gallery_getInstance();
      case 'GeolocationOnAppUsing':
        return Permission_GeolocationOnAppUsing_getInstance();
      case 'Notification':
        return Permission_Notification_getInstance();
      default:
        Permission_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Permission_entriesInitialized;
  function Permission_initEntries() {
    if (Permission_entriesInitialized)
      return Unit_getInstance();
    Permission_entriesInitialized = true;
    Permission_Gallery_instance = new Permission('Gallery', 0);
    Permission_GeolocationOnAppUsing_instance = new Permission('GeolocationOnAppUsing', 1);
    Permission_Notification_instance = new Permission('Notification', 2);
  }
  var $ENTRIES;
  function Permission(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Permission_Gallery_getInstance() {
    Permission_initEntries();
    return Permission_Gallery_instance;
  }
  function Permission_GeolocationOnAppUsing_getInstance() {
    Permission_initEntries();
    return Permission_GeolocationOnAppUsing_instance;
  }
  function Permission_Notification_getInstance() {
    Permission_initEntries();
    return Permission_Notification_instance;
  }
  var Settings_WiFiSettings_instance;
  var Settings_MobileSettings_instance;
  var Settings_AirplaneModeSettings_instance;
  function values_0() {
    return [Settings_WiFiSettings_getInstance(), Settings_MobileSettings_getInstance(), Settings_AirplaneModeSettings_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'WiFiSettings':
        return Settings_WiFiSettings_getInstance();
      case 'MobileSettings':
        return Settings_MobileSettings_getInstance();
      case 'AirplaneModeSettings':
        return Settings_AirplaneModeSettings_getInstance();
      default:
        Settings_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Settings_entriesInitialized;
  function Settings_initEntries() {
    if (Settings_entriesInitialized)
      return Unit_getInstance();
    Settings_entriesInitialized = true;
    Settings_WiFiSettings_instance = new Settings('WiFiSettings', 0);
    Settings_MobileSettings_instance = new Settings('MobileSettings', 1);
    Settings_AirplaneModeSettings_instance = new Settings('AirplaneModeSettings', 2);
  }
  var $ENTRIES_0;
  function Settings(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Settings_WiFiSettings_getInstance() {
    Settings_initEntries();
    return Settings_WiFiSettings_instance;
  }
  function Settings_MobileSettings_getInstance() {
    Settings_initEntries();
    return Settings_MobileSettings_instance;
  }
  function Settings_AirplaneModeSettings_getInstance() {
    Settings_initEntries();
    return Settings_AirplaneModeSettings_instance;
  }
  var team_platforma_apppermissions_PermissionX$stable;
  function requestMultiply$requestNextPermission(permissions, $result, resultMap, index) {
    if (index < permissions.get_size_woubt6_k$()) {
      var tmp = permissions.get_c1px32_k$(index);
      tmp(PermissionX$requestMultiply$requestNextPermission$lambda(resultMap, index, permissions, $result));
    } else {
      $result(resultMap);
    }
  }
  function PermissionX$gallery$ref($boundThis) {
    var l = function (p0) {
      $boundThis.gallery_bijouz_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'gallery';
    return l;
  }
  function PermissionX$geolocationOnAppUsing$ref($boundThis) {
    var l = function (p0) {
      $boundThis.geolocationOnAppUsing_rh7hln_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'geolocationOnAppUsing';
    return l;
  }
  function PermissionX$notification$ref($boundThis) {
    var l = function (p0) {
      $boundThis.notification_ry3wf2_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'notification';
    return l;
  }
  function PermissionX$requestMultiply$requestNextPermission$lambda($resultMap, $index, $permissions, $result) {
    return function (permission, granted) {
      $resultMap.put_4fpzoq_k$(permission, granted);
      requestMultiply$requestNextPermission($permissions, $result, $resultMap, $index + 1 | 0);
      return Unit_getInstance();
    };
  }
  function PermissionX() {
    PermissionX_instance = this;
  }
  protoOf(PermissionX).gallery_bijouz_k$ = function (result) {
    result(Permission_Gallery_getInstance(), true);
  };
  protoOf(PermissionX).geolocationOnAppUsing_rh7hln_k$ = function (result) {
    result(Permission_GeolocationOnAppUsing_getInstance(), true);
  };
  protoOf(PermissionX).notification_ry3wf2_k$ = function (result) {
    result(Permission_Notification_getInstance(), true);
  };
  protoOf(PermissionX).requestMultiply_4hiz8r_k$ = function (permissionList, result) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var permissions = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = permissionList.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'team.platforma.apppermissions.PermissionX.requestMultiply.<anonymous>' call
      switch (element.get_ordinal_ip24qg_k$()) {
        case 0:
          permissions.add_utx5q5_k$(PermissionX$gallery$ref(PermissionX_getInstance()));
          break;
        case 1:
          permissions.add_utx5q5_k$(PermissionX$geolocationOnAppUsing$ref(PermissionX_getInstance()));
          break;
        case 2:
          permissions.add_utx5q5_k$(PermissionX$notification$ref(PermissionX_getInstance()));
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var resultMap = LinkedHashMap_init_$Create$();
    requestMultiply$requestNextPermission(permissions, result, resultMap, 0);
  };
  protoOf(PermissionX).openAppSettings_ix5fxm_k$ = function () {
  };
  protoOf(PermissionX).openPhoneSettings_aiugmt_k$ = function (settings) {
  };
  protoOf(PermissionX).startOpenVpn_zi4f5k_k$ = function () {
  };
  var PermissionX_instance;
  function PermissionX_getInstance() {
    if (PermissionX_instance == null)
      new PermissionX();
    return PermissionX_instance;
  }
  //region block: init
  platformpermission_apppermissions_generated_resources_Res_drawable$stable = 0;
  platformpermission_apppermissions_generated_resources_Res_string$stable = 0;
  platformpermission_apppermissions_generated_resources_Res_array$stable = 0;
  platformpermission_apppermissions_generated_resources_Res_plurals$stable = 0;
  platformpermission_apppermissions_generated_resources_Res_font$stable = 0;
  platformpermission_apppermissions_generated_resources_Res$stable = 0;
  team_platforma_apppermissions_PermissionX$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PermissionX_getInstance;
  //endregion
  return _;
}));
