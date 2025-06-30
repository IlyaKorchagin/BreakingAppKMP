(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'PlatformPermission-apppermissions'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'PlatformPermission-apppermissions'.");
    }
    globalThis['PlatformPermission-apppermissions'] = factory(typeof globalThis['PlatformPermission-apppermissions'] === 'undefined' ? {} : globalThis['PlatformPermission-apppermissions'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.g6;
  var Enum = kotlin_kotlin.$_$.bk;
  var protoOf = kotlin_kotlin.$_$.ff;
  var initMetadataForClass = kotlin_kotlin.$_$.yd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.ee;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Permission, 'Permission', VOID, Enum);
  initMetadataForObject(PermissionX, 'PermissionX');
  //endregion
  var platformpermission_apppermissions_generated_resources_Res_drawable$stable;
  var platformpermission_apppermissions_generated_resources_Res_string$stable;
  var platformpermission_apppermissions_generated_resources_Res_array$stable;
  var platformpermission_apppermissions_generated_resources_Res_plurals$stable;
  var platformpermission_apppermissions_generated_resources_Res_font$stable;
  var platformpermission_apppermissions_generated_resources_Res$stable;
  var Permission_Gallery_instance;
  var Permission_GeolocationOnAppUsing_instance;
  var Permission_Notification_instance;
  var Permission_entriesInitialized;
  function Permission_initEntries() {
    if (Permission_entriesInitialized)
      return Unit_instance;
    Permission_entriesInitialized = true;
    Permission_Gallery_instance = new Permission('Gallery', 0);
    Permission_GeolocationOnAppUsing_instance = new Permission('GeolocationOnAppUsing', 1);
    Permission_Notification_instance = new Permission('Notification', 2);
  }
  function Permission(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Permission_Gallery_getInstance() {
    Permission_initEntries();
    return Permission_Gallery_instance;
  }
  var team_platforma_apppermissions_PermissionX$stable;
  function PermissionX() {
  }
  protoOf(PermissionX).kpd = function (result) {
    result(Permission_Gallery_getInstance(), true);
  };
  var PermissionX_instance;
  function PermissionX_getInstance() {
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
  PermissionX_instance = new PermissionX();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PermissionX_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=PlatformPermission-apppermissions.js.map
