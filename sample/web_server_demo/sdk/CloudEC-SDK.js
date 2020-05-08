/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloudEC_SERVERCONFIG = {
        LOG_PATH: "./terminal_sdk_log/",
        LOG_LEVEL: 3,
        LOG_FILE_COUNT: 5,
        LOG_FILE_SIZE: 10240,
        ENTERPRISE_DOMAIN: "localhost.cloudec.huaweicloud.com",
        ENTERPRISE_DOMAIN_PORT: "7684",
        IS_TLS_SUPPORT: 0,
        IS_WSS: 1,
        CONF_CONTROL_PROTOCOL: 1,
        IS_SUPPORT_IM: 0,
        IS_SUPPORT_SVC_CONFERENCE: 1,
        UI_PLUGIN_APP_DISPLAY_NAME: "eSDK-Desktop",
        UI_PLUGIN_LANGUAGE: 0,
        UI_PLUGIN_RESOURCES_PATH: "",
        UI_PLUGIN_USER_FILES_PATH: "",
        UI_PLUGIN_HAS_FRAME_INFO: 1,
        UI_PLUGIN_FRAME_INFO_X: 100,
        UI_PLUGIN_FRAME_INFO_Y: 50,
        UI_PLUGIN_FRAME_INFO_WIDTH: 1038,
        UI_PLUGIN_FRAME_INFO_HEIGHT: 620,
        UI_PLUGIN_HAS_PARENT_INFO: 1,
        UI_PLUGIN_PARENT_INFO_X_OFFSET_RATE: 20,
        UI_PLUGIN_PARENT_INFO_Y_OFFSET_RATE: 15,
        UI_PLUGIN_PARENT_INFO_IS_NEED_ATTACH: 1,
        UI_PLUGIN_FRAME_INFO_MIN_WIDTH: 480,
        UI_PLUGIN_FRAME_INFO_MIN_HEIGHT: 352,
        UI_PLUGIN_HIDE_TOP_TOOL_BAR: 0,
        UI_PLUGIN_HIDE_BOTTOM_TOOL_BAR: 0,
        UI_PLUGIN_HIDE_INVITE_BUTTON: 1,
        UI_PLUGIN_HIDE_ATTENDEES_BUTTON: 1,
        UI_PLUGIN_HIDE_SHARE_BUTTON: 1,
        UI_PLUGIN_HIDE_SHARE_CONF_LINK: 1,
        UI_PLUGIN_HIDE_AUDIO_VIDEO_SETTING_BUTTON: 1,
        UI_PLUGIN_HIDE_CLOSE_BUTTON: 0,
        UI_PLUGIN_HIDE_MAXSIZE_MINISIZE_BUTTON: 0,
        UI_PLUGIN_HIDE_LEAVE_BUTTON: 0,
        UI_PLUGIN_HIDE_CONF_TIME: 0,
        UI_PLUGIN_HIDE_CONF_CHAIRMAN_PWD: 0,
        UI_PLUGIN_HIDE_CONF_GUEST_PWD: 0,
        UI_PLUGIN_HIDE_SHARE_TYPE_SELECTION: 1,
        UI_PLUGIN_DATA_HIDE_INVITE_BUTTON: 1,
        UI_PLUGIN_DATA_HIDE_ATTENDEES_BUTTON: 1,
        UI_PLUGIN_DATA_HIDE_REQUEST_REMOTE_CONTROL_BUTTON: 1,
        PAGE_TITLE: "High-Level-API"
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_cloudec__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_cloudec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__logic_cloudec__);
/* eslint-disable */

window.cloudEC = new __WEBPACK_IMPORTED_MODULE_0__logic_cloudec___default.a();
/* eslint-enable */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkClientAdapt_1, serverConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CloudEC = (function () {
        function CloudEC() {
        }
        CloudEC.prototype.createClient = function (listeners) {
            var tsdkClientAdapt = new tsdkClientAdapt_1.default();
            if (typeof (listeners) === "undefined") {
                return tsdkClientAdapt;
            }
            if (typeof (listeners.onForceUnReg) != "undefined") {
                tsdkClientAdapt.on('ForceUnReg', listeners.onForceUnReg);
            }
            if (typeof (listeners.onChatRecvMsg) != "undefined") {
                tsdkClientAdapt.on('ChatRecvMsg', listeners.onChatRecvMsg);
            }
            if (typeof (listeners.onUpdateAttendeeList) != "undefined") {
                tsdkClientAdapt.on('UpdateAttendeeList', listeners.onUpdateAttendeeList);
            }
            if (typeof (listeners.onSpeakerIdentify) != "undefined") {
                tsdkClientAdapt.on('SpeakerIdentify', listeners.onSpeakerIdentify);
            }
            if (typeof (listeners.onSharedInComing) != "undefined") {
                tsdkClientAdapt.on('SharedInComing', listeners.onSharedInComing);
            }
            if (typeof (listeners.onConfIncoming) != "undefined") {
                tsdkClientAdapt.on('ConfIncoming', listeners.onConfIncoming);
            }
            if (typeof (listeners.onConfConnected) != "undefined") {
                tsdkClientAdapt.on('ConfConnected', listeners.onConfConnected);
            }
            if (typeof (listeners.onLeaveConference) != "undefined") {
                tsdkClientAdapt.on('LeaveConference', listeners.onLeaveConference);
            }
            if (typeof (listeners.onEndConference) != "undefined") {
                tsdkClientAdapt.on('EndConference', listeners.onEndConference);
            }
            if (typeof (listeners.onAsOnSharingState) != "undefined") {
                tsdkClientAdapt.on('AsOnSharingState', listeners.onAsOnSharingState);
            }
            if (typeof (listeners.onAsOnPrivilege) != "undefined") {
                tsdkClientAdapt.on('AsOnPrivilege', listeners.onAsOnPrivilege);
            }
            if (typeof (listeners.onWbDocNew) != "undefined") {
                tsdkClientAdapt.on('WbDocNew', listeners.onWbDocNew);
            }
            if (typeof (listeners.onWbDocDel) != "undefined") {
                tsdkClientAdapt.on('WbDocDel', listeners.onWbDocDel);
            }
            if (typeof (listeners.onError) != "undefined") {
                tsdkClientAdapt.onError(listeners.onError);
            }
            if (typeof (listeners.onCallIncomming) != "undefined") {
                tsdkClientAdapt.on('CallIncomming', listeners.onCallIncomming);
            }
            if (typeof (listeners.onCallRingBack) != "undefined") {
                tsdkClientAdapt.on('CallRingBack', listeners.onCallRingBack);
            }
            if (typeof (listeners.onCallConnected) != "undefined") {
                tsdkClientAdapt.on('CallConnected', listeners.onCallConnected);
            }
            if (typeof (listeners.onCallEnded) != "undefined") {
                tsdkClientAdapt.on('CallEnded', listeners.onCallEnded);
            }
            if (typeof (listeners.onAddVideoRequest) != "undefined") {
                tsdkClientAdapt.on('AddVideoRequest', listeners.onAddVideoRequest);
            }
            if (typeof (listeners.onDelVideoRequest) != "undefined") {
                tsdkClientAdapt.on('DelVideoRequest', listeners.onDelVideoRequest);
            }
            if (typeof (listeners.onCallModifyVideoResult) != "undefined") {
                tsdkClientAdapt.on('CallModifyVideoResult', listeners.onCallModifyVideoResult);
            }
            if (typeof (listeners.onNewServiceRight) != "undefined") {
                tsdkClientAdapt.on('NewServiceRight', listeners.onNewServiceRight);
            }
            if (typeof (listeners.onSetIptServiceResult) != "undefined") {
                tsdkClientAdapt.on('SetIptServiceResult', listeners.onSetIptServiceResult);
            }
            if (typeof (listeners.onCallBldTransferRecvSucRsp) != "undefined") {
                tsdkClientAdapt.on('CallBldTransferRecvSucRsp', listeners.onCallBldTransferRecvSucRsp);
            }
            if (typeof (listeners.onCallBldTransferResult) != "undefined") {
                tsdkClientAdapt.on('CallBldTransferResult', listeners.onCallBldTransferResult);
            }
            if (typeof (listeners.onEvtGetDataconfParamResult) != "undefined") {
                tsdkClientAdapt.on('OnEvtGetDataconfParamResult', listeners.onEvtGetDataconfParamResult);
            }
            if (typeof (listeners.onPluginEvtClickHangupCall) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickHangupCall', listeners.onPluginEvtClickHangupCall);
            }
            if (typeof (listeners.onPluginEvtClickLeaveConf) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickLeaveConf', listeners.onPluginEvtClickLeaveConf);
            }
            if (typeof (listeners.onPluginEvtClickEndConf) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickEndConf', listeners.onPluginEvtClickEndConf);
            }
            if (typeof (listeners.onPluginEvtClickMuteMic) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickMuteMic', listeners.onPluginEvtClickMuteMic);
            }
            if (typeof (listeners.onPluginEvtClickMuteSpeaker) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickMuteSpeaker', listeners.onPluginEvtClickMuteSpeaker);
            }
            if (typeof (listeners.onPluginEvtClickMuteCamera) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickMuteCamera', listeners.onPluginEvtClickMuteCamera);
            }
            if (typeof (listeners.onPluginEvtClickAddMember) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickAddMember', listeners.onPluginEvtClickAddMember);
            }
            if (typeof (listeners.onPluginEvtSetWindowSize) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtSetWindowSize', listeners.onPluginEvtSetWindowSize);
            }
            if (typeof (listeners.onPluginEvtClickShowMemberList) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickShowMemberList', listeners.onPluginEvtClickShowMemberList);
            }
            if (typeof (listeners.onPluginEvtConfCtrlOperation) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtConfCtrlOperation', listeners.onPluginEvtConfCtrlOperation);
            }
            if (typeof (listeners.onPluginEvtClickStopShare) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickStopShare', listeners.onPluginEvtClickStopShare);
            }
            if (typeof (listeners.onPluginEvtClickStartShare) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickStartShare', listeners.onPluginEvtClickStartShare);
            }
            if (typeof (listeners.onPluginEvtClickRequestRemoteControl) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickRequestRemoteControl', listeners.onPluginEvtClickRequestRemoteControl);
            }
            if (typeof (listeners.onPluginEvtClickReleaseRemoteControl) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickReleaseRemoteControl', listeners.onPluginEvtClickReleaseRemoteControl);
            }
            if (typeof (listeners.onEvtCallRtpCreated) != "undefined") {
                tsdkClientAdapt.on('OnEvtCallRtpCreated', listeners.onEvtCallRtpCreated);
            }
            if (typeof (listeners.onEvtConfctrlOperationResult) != "undefined") {
                tsdkClientAdapt.on('OnEvtConfctrlOperationResult', listeners.onEvtConfctrlOperationResult);
            }
            if (typeof (listeners.onPluginEvtClickDevicesSetting) != "undefined") {
                tsdkClientAdapt.on('OnPluginEvtClickDevicesSetting', listeners.onPluginEvtClickDevicesSetting);
            }
            if (typeof (listeners.onEvtModifyPasswordResult) != "undefined") {
                tsdkClientAdapt.on('OnEvtModifyPasswordResult', listeners.onEvtModifyPasswordResult);
            }
            if (typeof (listeners.onEvtStatisticInfo) != "undefined") {
                tsdkClientAdapt.on('OnEvtStatisticInfo', listeners.onEvtStatisticInfo);
            }
            if (typeof (listeners.onEvtSvcWatchInfoInd) != "undefined") {
                tsdkClientAdapt.on('OnEvtSvcWatchInfoInd', listeners.onEvtSvcWatchInfoInd);
            }
            if (typeof (listeners.onEvtJoinDataConfResult) != "undefined") {
                tsdkClientAdapt.on('OnEvtJoinDataConfResult', listeners.onEvtJoinDataConfResult);
            }
            if (typeof (listeners.OnEvtGetTempUserResult) != "undefined") {
                tsdkClientAdapt.on('OnEvtGetTempUserResult', listeners.OnEvtGetTempUserResult);
            }
            if (typeof (listeners.OnEvtRequestConfRightFailed) != "undefined") {
                tsdkClientAdapt.on('OnEvtRequestConfRightFailed', listeners.OnEvtRequestConfRightFailed);
            }
            if (typeof (listeners.OnEvtMediaErrorInfo) != "undefined") {
                tsdkClientAdapt.on('OnEvtMediaErrorInfo', listeners.OnEvtMediaErrorInfo);
            }
            if (typeof (listeners.OnEndConferenceResult) != "undefined") {
                tsdkClientAdapt.on('OnEndConferenceResult', listeners.OnEndConferenceResult);
            }
            if (typeof (listeners.OnEvtLogoutFailed) != "undefined") {
                tsdkClientAdapt.on('OnEvtLogoutFailed', listeners.OnEvtLogoutFailed);
            }
            if (typeof (listeners.OnEvtConfSetShareOwnerFailed) != "undefined") {
                tsdkClientAdapt.on('OnEvtConfSetShareOwnerFailed', listeners.OnEvtConfSetShareOwnerFailed);
            }
            if (typeof (listeners.OnEvtConfStartShareFailed) != "undefined") {
                tsdkClientAdapt.on('OnEvtConfStartShareFailed', listeners.OnEvtConfStartShareFailed);
            }
            if (typeof (listeners.OnEvtNoStream) != "undefined") {
                tsdkClientAdapt.on('OnEvtNoStream', listeners.OnEvtNoStream);
            }
            return tsdkClientAdapt;
        };
        CloudEC.prototype.configure = function (options) {
            if (typeof (options) === "undefined") {
                return;
            }
            if (typeof (options.logLevel) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.LOG_LEVEL = options.logLevel;
            }
            if (typeof (options.logPath) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.LOG_PATH = options.logPath;
            }
            if (typeof (options.logFileCount) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.LOG_FILE_COUNT = options.logFileCount;
            }
            if (typeof (options.logFileSize) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.LOG_FILE_SIZE = options.logFileSize;
            }
            if (typeof (options.domain) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.ENTERPRISE_DOMAIN = options.domain;
            }
            if (typeof (options.isTlsSupport) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.IS_TLS_SUPPORT = options.isTlsSupport;
            }
            if (typeof (options.isWSS) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.IS_WSS = options.isWSS;
            }
            if (typeof (options.confCtrlProtocol) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.CONF_CONTROL_PROTOCOL = options.confCtrlProtocol;
            }
            if (typeof (options.IsSupportIm) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.IS_SUPPORT_IM = options.IsSupportIm;
            }
            if (typeof (options.IsSupportSvcConference) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.IS_SUPPORT_SVC_CONFERENCE = options.IsSupportSvcConference;
            }
            if (typeof (options.uiPluginAppDisplayName) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_APP_DISPLAY_NAME = options.uiPluginAppDisplayName;
            }
            if (typeof (options.uiPluginlLanguage) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_LANGUAGE = options.uiPluginlLanguage;
            }
            if (typeof (options.uiPluginResourcesPath) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_RESOURCES_PATH = options.uiPluginResourcesPath;
            }
            if (typeof (options.uiPluginUserFilesPath) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_USER_FILES_PATH = options.uiPluginUserFilesPath;
            }
            if (typeof (options.uiPluginHasFrameInfo) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HAS_FRAME_INFO = options.uiPluginHasFrameInfo;
            }
            if (typeof (options.uiPluginFrameInfoX) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_X = options.uiPluginFrameInfoX;
            }
            if (typeof (options.uiPluginFrameInfoY) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_Y = options.uiPluginFrameInfoY;
            }
            if (typeof (options.uiPluginFrameInfoWidth) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_WIDTH = options.uiPluginFrameInfoWidth;
            }
            if (typeof (options.uiPluginFrameInfoHeight) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_HEIGHT = options.uiPluginFrameInfoHeight;
            }
            if (typeof (options.uiPluginHasParentInfo) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HAS_PARENT_INFO = options.uiPluginHasParentInfo;
            }
            if (typeof (options.uiPluginParentInfoXOffsetRate) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_X_OFFSET_RATE = options.uiPluginParentInfoXOffsetRate;
            }
            if (typeof (options.uiPluginParentInfoYOffsetRate) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_Y_OFFSET_RATE = options.uiPluginParentInfoYOffsetRate;
            }
            if (typeof (options.uiPluginFrameInfoMinWidth) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_MIN_WIDTH = options.uiPluginFrameInfoMinWidth;
            }
            if (typeof (options.uiPluginFrameInfoMinHeight) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_MIN_HEIGHT = options.uiPluginFrameInfoMinHeight;
            }
            if (typeof (options.uiPluginParentInfoIsNeedAttach) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_IS_NEED_ATTACH = options.uiPluginParentInfoIsNeedAttach;
            }
            if (typeof (options.uiPluginHideTopToolBar) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_TOP_TOOL_BAR = options.uiPluginHideTopToolBar;
            }
            if (typeof (options.uiPluginHideBottomToolBar) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_BOTTOM_TOOL_BAR = options.uiPluginHideBottomToolBar;
            }
            if (typeof (options.uiPluginHideInviteButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_INVITE_BUTTON = options.uiPluginHideInviteButton;
            }
            if (typeof (options.uiPluginHideAttendeesButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_ATTENDEES_BUTTON = options.uiPluginHideAttendeesButton;
            }
            if (typeof (options.uiPluginHideShareButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_BUTTON = options.uiPluginHideShareButton;
            }
            if (typeof (options.uiPluginHideShareConfLink) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_CONF_LINK = options.uiPluginHideShareConfLink;
            }
            if (typeof (options.uiPluginHideAudioVideoSettingButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_AUDIO_VIDEO_SETTING_BUTTON = options.uiPluginHideAudioVideoSettingButton;
            }
            if (typeof (options.uiPluginHideCloseButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CLOSE_BUTTON = options.uiPluginHideCloseButton;
            }
            if (typeof (options.uiPluginHideMaxsizeMinisizeButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_MAXSIZE_MINISIZE_BUTTON = options.uiPluginHideMaxsizeMinisizeButton;
            }
            if (typeof (options.uiPluginHideLeaveButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_LEAVE_BUTTON = options.uiPluginHideLeaveButton;
            }
            if (typeof (options.uiPluginHideConfTime) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_TIME = options.uiPluginHideConfTime;
            }
            if (typeof (options.uiPluginHideConfChairmanPwd) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_CHAIRMAN_PWD = options.uiPluginHideConfChairmanPwd;
            }
            if (typeof (options.uiPluginHideConfGuestPwd) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_GUEST_PWD = options.uiPluginHideConfGuestPwd;
            }
            if (typeof (options.uiPluginHideShareTypeSelection) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_TYPE_SELECTION = options.uiPluginHideShareTypeSelection;
            }
            if (typeof (options.uiPluginDataHideInviteButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_INVITE_BUTTON = options.uiPluginDataHideInviteButton;
            }
            if (typeof (options.uiPluginDataHideAttendeesButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_ATTENDEES_BUTTON = options.uiPluginDataHideAttendeesButton;
            }
            if (typeof (options.uiPluginDataHideRequestRemotecontrolButton) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_REQUEST_REMOTE_CONTROL_BUTTON = options.uiPluginDataHideRequestRemotecontrolButton;
            }
            if (typeof (options.pageTitle) != "undefined") {
                serverConfig_1.CloudEC_SERVERCONFIG.PAGE_TITLE = options.pageTitle;
            }
        };
        return CloudEC;
    }());
    exports.default = CloudEC;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, serverConfig_1, util, enum_1, errorCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkClientAdapt = (function () {
        function TsdkClientAdapt() {
            var _this = this;
            this._loginStatus = false;
            this._callStatus = false;
            this._confStatus = false;
            this.playHandle = -1;
            this.attendeeList = new Array();
            this.loginSuccessInfo = {
                confEnvType: 0,
                leftDaysOfPassword: 0,
                isFirstLogin: 0,
                isFreeUser: 0,
                uuid: ""
            };
            this.baseinfo = {
                userAccount: "",
                sipAccount: "",
                shortNumber: "",
                loginTime: "",
                loginSuccessInfo: this.loginSuccessInfo,
            };
            this.confinfo = {
                subject: "",
                callId: "",
                mediaType: 0,
                confHandle: 0,
                confId: "",
                hostKey: "",
                createor: "",
                isAllMute: 0,
                lockState: 0,
            };
            this.callInfo = {
                callNo: "",
                callId: "",
                callState: 0,
                isVideo: 0,
                dtmfNo: "",
                callName: ""
            };
            this.tsdkJsInitParam = {
                invokeMode: 1,
                svrAddr: serverConfig_1.CloudEC_SERVERCONFIG.ENTERPRISE_DOMAIN,
                svrPort: serverConfig_1.CloudEC_SERVERCONFIG.ENTERPRISE_DOMAIN_PORT,
                ssl: serverConfig_1.CloudEC_SERVERCONFIG.IS_WSS
            };
            this.queryContactInfoSeq = 1;
            this.queryDeptInfoSeq = 1;
            this.listeners = {
                OnEvtAuthFailed: function (ret) {
                    _this.notify("OnEvtAuthFailed", ret);
                },
                OnEvtAuthRefreshFailed: function (ret) {
                },
                OnEvtLoginSuccess: function (ret) {
                    _this._loginStatus = true;
                },
                OnEvtLoginFailed: function (ret) {
                },
                OnEvtLogoutSuccess: function (ret) {
                    _this._loginStatus = false;
                    _this.baseinfo = {
                        userAccount: "",
                        sipAccount: "",
                        shortNumber: "",
                        loginTime: "",
                        loginSuccessInfo: {
                            confEnvType: 0,
                            leftDaysOfPassword: 0,
                            isFirstLogin: 0,
                            isFreeUser: 0,
                            uuid: ""
                        },
                    };
                },
                OnEvtLogoutFailed: function (ret) {
                    _this.notify("OnEvtLogoutFailed", ret);
                },
                OnEvtForceLogout: function (ret) {
                    var evt = { result: true, info: "force logout" };
                    var ForceLogout = {
                        serviceAccountType: ret.param.serviceAccountType,
                        reason: ret.param.forceLogoutInfo.reason,
                    };
                    evt.info = ForceLogout;
                    _this.notify("ForceUnReg", evt);
                    _this.baseinfo = {
                        userAccount: "",
                        sipAccount: "",
                        shortNumber: "",
                        loginTime: "",
                        loginSuccessInfo: {
                            confEnvType: 0,
                            leftDaysOfPassword: 0,
                            isFirstLogin: 0,
                            isFreeUser: 0,
                            uuid: ""
                        },
                    };
                },
                OnEvtGetTempUserResult: function (ret) {
                    _this.notify("OnEvtGetTempUserResult", ret);
                },
                OnEvtCallOutgoing: function (ret) {
                    _this._callStatus = true;
                    _this.callInfo = {
                        callNo: ret.param.callInfo.peerNumber,
                        callId: ret.param.callInfo.callId,
                        callState: ret.param.callInfo.callState,
                        isVideo: ret.param.callInfo.isVideoCall,
                        callName: ret.param.callInfo.peerDisplayName
                    };
                },
                OnEvtCallIncoming: function (ret) {
                    var evt = { result: true, info: "callIncoming" };
                    _this.callInfo = {
                        callNo: ret.param.callInfo.peerNumber,
                        callId: ret.param.callInfo.callId,
                        callState: ret.param.callInfo.callState,
                        isVideo: ret.param.callInfo.isVideoCall,
                        callName: ret.param.callInfo.peerDisplayName
                    };
                    evt.info = _this.callInfo;
                    if (_this.playHandle < 0) {
                        _this.tsdkClient.startPlayMedia(0, "./resources/audio/callRing/In.wav", function (data) {
                            if (data.result == 0) {
                                _this.playHandle = data.param.playHandle;
                            }
                        });
                    }
                    _this.notify("CallIncomming", evt);
                },
                OnEvtCallRingback: function (ret) {
                    var evt = { result: true, info: "callRingback" };
                    if (_this.playHandle < 0) {
                        _this.tsdkClient.startPlayMedia(0, "./resources/audio/callRing/ring.wav", function (data) {
                            if (data.result == 0) {
                                _this.playHandle = data.param.playHandle;
                            }
                        });
                    }
                    evt.info = ret.param;
                    _this.notify("CallRingBack", evt);
                },
                OnEvtCallRtpCreated: function (ret) {
                    var evt = { result: true, info: "callRtpCreated" };
                    if (_this.playHandle >= 0) {
                        _this.tsdkClient.stopPlayMedia(_this.playHandle, function (data) {
                            if (data.result == 0) {
                                _this.playHandle = -1;
                            }
                        });
                    }
                    evt.info = ret.param;
                    _this.notify("OnEvtCallRtpCreated", evt);
                },
                OnEvtCallConnected: function (ret) {
                    _this._callStatus = true;
                    if (_this.playHandle >= 0) {
                        _this.tsdkClient.stopPlayMedia(_this.playHandle, function (data) {
                            if (data.result == 0) {
                                _this.playHandle = -1;
                            }
                        });
                    }
                    _this.notify("CallConnected", ret);
                },
                OnEvtCallEnded: function (ret) {
                    _this._callStatus = false;
                    if (_this.playHandle >= 0) {
                        _this.tsdkClient.stopPlayMedia(_this.playHandle, function (data) {
                            if (data.result == 0) {
                                _this.playHandle = -1;
                            }
                        });
                    }
                    _this.notify("CallEnded", ret);
                },
                OnEvtCallDestroy: function (ret) {
                    _this._callStatus = false;
                    if (_this.playHandle >= 0) {
                        _this.tsdkClient.stopPlayMedia(_this.playHandle, function (data) {
                            if (data.result == 0) {
                                _this.playHandle = -1;
                            }
                        });
                    }
                },
                OnEvtOpenVideoReq: function (ret) {
                    var evt = { result: true, info: "open video request!" };
                    _this.notify("AddVideoRequest", evt);
                },
                OnEvtCloseVideoInd: function (ret) {
                    var evt = { result: true, info: "Audio and video conversion succeed!" };
                    _this.callInfo.isVideo = 0;
                    _this.notify("CallModifyVideoResult", evt);
                },
                OnEvtOpenVideoInd: function (ret) {
                    var evt = { result: true, info: "Audio and video conversion succeed!" };
                    _this.callInfo.isVideo = 1;
                    _this.notify("CallModifyVideoResult", evt);
                },
                OnEvtIptServiceInfo: function (ret) {
                    var evt = { result: true, info: ret };
                    var newServiceRight = {
                        dnd: { register: ret.param.serviceInfo.dnd.isEnable, hasRight: ret.param.serviceInfo.dnd.hasRight },
                        callWait: { register: ret.param.serviceInfo.callWait.isEnable, hasRight: ret.param.serviceInfo.callWait.hasRight },
                        cfu: { register: ret.param.serviceInfo.cfu.isEnable, hasRight: ret.param.serviceInfo.cfu.hasRight },
                        cfb: { register: ret.param.serviceInfo.cfb.isEnable, hasRight: ret.param.serviceInfo.cfb.hasRight },
                        cfn: { register: ret.param.serviceInfo.cfn.isEnable, hasRight: ret.param.serviceInfo.cfn.hasRight },
                        cfo: { register: ret.param.serviceInfo.cfo.isEnable, hasRight: ret.param.serviceInfo.cfo.hasRight },
                    };
                    evt = {
                        result: true,
                        info: newServiceRight
                    };
                    _this.notify("NewServiceRight", evt);
                },
                OnEvtStatisticInfo: function (ret) {
                    var evt = { result: true, info: ret };
                    _this.notify("OnEvtStatisticInfo", evt);
                },
                OnEvtMediaErrorInfo: function (ret) {
                    _this.notify("OnEvtMediaErrorInfo", ret);
                },
                OnEvtNoStream: function (ret) {
                    _this.notify("OnEvtNoStream", ret);
                },
                OnEvtSetIptServiceResult: function (ret) {
                    var evt;
                    if (ret.param.setServiceResult.reasonCode == 0) {
                        evt = { result: true, info: "set ipt successful!" };
                    }
                    else {
                        evt = { result: false, info: "failed to set ipt!" };
                    }
                    _this.notify("SetIptServiceResult", evt);
                },
                OnEvtBldTransferFailed: function (ret) {
                    var evt = { result: false, info: "blind transfer failed!" };
                    _this.notify("CallBldTransferResult", evt);
                },
                OnEvtBldTransferSuccess: function (ret) {
                    var evt = { result: true, info: "blind transfer success!" };
                    _this.notify("CallBldTransferResult", evt);
                },
                OnEvtJoinConfResult: function (ret) {
                    var evt = { result: true, info: ret };
                    if (_this.playHandle >= 0) {
                        _this.tsdkClient.stopPlayMedia(_this.playHandle, function (data) {
                            if (data.result == 0) {
                                _this.playHandle = -1;
                            }
                        });
                    }
                    if (ret.param.result == 0) {
                        _this._confStatus = true;
                        _this.confinfo.callId = ret.param.info.callId;
                    }
                    else {
                        evt.result = false;
                    }
                    _this.notify('ConfConnected', evt);
                },
                OnEvtGetDataconfParamResult: function (ret) {
                    var evt = { result: true, info: "" };
                    var dataConfResult = {
                        confHandle: ret.param.handle
                    };
                    evt.info = dataConfResult;
                    if (0 != ret.param.result) {
                        evt.result = false;
                    }
                    _this.notify('OnEvtGetDataconfParamResult', evt);
                },
                OnEvtConfctrlOperationResult: function (ret) {
                    var evt = { result: false, info: "OnEvtConfctrlOperationResult" };
                    var operationResult = {
                        operationType: ret.param.resultInfo.operationType,
                        reasonCode: ret.param.resultInfo.reasonCode,
                        description: ret.param.resultInfo.description,
                    };
                    evt.info = operationResult;
                    if (ret.param.result == 0) {
                        evt.result = true;
                    }
                    _this.notify('OnEvtConfctrlOperationResult', evt);
                },
                OnEvtInfoAndStatusUpdate: function (ret) {
                    var confState = ret.param.confStatus;
                    var handle = ret.param.handle;
                    var callId = _this.confinfo.callId;
                    if (handle == 0) {
                        console.log("conf handle is 0.");
                    }
                    _this.confinfo = {
                        subject: confState.subject,
                        mediaType: confState.confMediaType,
                        confHandle: handle,
                        confId: confState.confId,
                        createor: confState.scheduserName,
                        isAllMute: confState.isAllMute,
                        lockState: confState.isLock,
                        callId: callId
                    };
                    var attendeeList = confState.attendeeList;
                    var attendeeListTemp = new Array();
                    for (var i = 0; attendeeList != null && i < attendeeList.length; i++) {
                        var attendee = {
                            participantId: attendeeList[i].statusInfo.participantId,
                            name: attendeeList[i].baseInfo.displayName,
                            number: attendeeList[i].baseInfo.number,
                            isMute: attendeeList[i].statusInfo.isMute,
                            isDeaf: attendeeList[i].statusInfo.isMute,
                            raiseHandState: attendeeList[i].statusInfo.isHandup,
                            role: attendeeList[i].baseInfo.role,
                            joinState: attendeeList[i].statusInfo.state,
                            isSelf: attendeeList[i].statusInfo.isSelf,
                            isDataconfMember: attendeeList[i].statusInfo.isJoinDataconf,
                            dataconfUserId: attendeeList[i].statusInfo.dataUserId,
                            dataconfMemberType: attendeeList[i].statusInfo.isPresent,
                            sharingPermit: attendeeList[i].statusInfo.isShareOwner,
                            isBroadcast: attendeeList[i].statusInfo.isBroadcast,
                            isAnonymous: attendeeList[i].statusInfo.isAnonymous,
                            isPresent: attendeeList[i].statusInfo.isPresent,
                            hasCamera: attendeeList[i].statusInfo.hasCamera,
                        };
                        attendeeListTemp.push(attendee);
                    }
                    _this.attendeeList = attendeeListTemp;
                    _this.notify('UpdateAttendeeList', { result: true, info: "UpdateAttendeeList" });
                },
                OnEvtSpeakerInd: function (ret) {
                    var evt = { result: false, info: "No speaker" };
                    if (ret.param.confSpeakers.speakerNum != 0) {
                        var speakerArr = new Array();
                        var speakerTemp = ret.param.confSpeakers.speakers;
                        for (var i = 0; i < speakerTemp.length; i++) {
                            var speaker = {
                                number: speakerTemp[i].baseInfo.displayName != "" ? speakerTemp[i].baseInfo.displayName : speakerTemp[i].baseInfo.number,
                                isSpeaking: speakerTemp[i].isSpeaking,
                                speakingVolume: speakerTemp[i].baseInfo.speakingVolume != undefined ? speakerTemp[i].baseInfo.speakingVolume : 0
                            };
                            speakerArr.push(speaker);
                        }
                        speakerArr.sort(function (x, y) {
                            return y.speakingVolume - x.speakingVolume;
                        });
                        evt.result = true;
                        evt.info = speakerArr;
                    }
                    _this.notify('SpeakerIdentify', evt);
                },
                OnEvtRequestConfRightFailed: function (ret) {
                    _this.notify("OnEvtRequestConfRightFailed", ret);
                },
                OnEvtConfIncomingInd: function (ret) {
                    _this.confinfo.confHandle = ret.param.handle;
                    if (ret.param.handle == 0) {
                        console.log("conf handle is 0.");
                    }
                    _this.confinfo.callId = ret.param.callId;
                    _this.confinfo.mediaType = ret.param.confIncomingInfo.confMediaType;
                    _this.confinfo.subject = ret.param.confIncomingInfo.subject;
                    var confIncomingInfo = {
                        "confId": ret.param.confIncomingInfo.confId,
                        "confMediaType": ret.param.confIncomingInfo.confMediaType,
                        "groupUri": ret.param.confIncomingInfo.groupUri,
                        "isHdConf": ret.param.confIncomingInfo.isHdConf,
                        "number": ret.param.confIncomingInfo.number,
                        "subject": ret.param.confIncomingInfo.subject
                    };
                    _this.notify('ConfIncoming', { result: true, info: confIncomingInfo });
                },
                OnEvtConfEndInd: function (ret) {
                    _this._confStatus = false;
                    var endConferenceReason = {
                        reasonCode: ret.param.reasonCode
                    };
                    var evt = { result: true, info: endConferenceReason };
                    _this.notify('EndConference', evt);
                },
                OnEvtConfEndResult: function (ret) {
                    if (ret.param.result == 0) {
                        _this._confStatus = false;
                        _this.confinfo = {
                            subject: "",
                            mediaType: 0,
                            confHandle: 0,
                            confId: "",
                            hostKey: "",
                            createor: "",
                            isAllMute: 0,
                            lockState: 0,
                        };
                        console.log("set conf handle is 0.");
                    }
                    _this.notify('OnEndConferenceResult', ret);
                },
                OnEvtJoinDataConfResult: function (ret) {
                    var evt = { result: true, info: "Join the data conference successfully!" };
                    if (ret.param.result != 0) {
                        evt = { result: false, info: ret.param };
                    }
                    _this.notify('OnEvtJoinDataConfResult', evt);
                },
                onAsOnSharingState: function (ret) {
                },
                OnEvtAsScreenDataUpdate: function (ret) {
                },
                OnEvtAsOwnerChange: function (ret) {
                    var evt = { result: true, info: "ower change" };
                    if (ret.param.owner) {
                        var owner = ret.param.owner;
                        console.log("OnEvtAsOwnerChange, actionType:" + ret.param.actionType + "isSelf:" + owner.statusInfo.isSelf);
                        if (ret.param.actionType == 1 && owner.statusInfo.isSelf == 1) {
                            _this.tsdkClient.appShareStart(0, _this.confinfo.confHandle, function (ret) { });
                        }
                        else if (ret.param.actionType == 3 && owner.statusInfo.isSelf == 1) {
                            evt.info = "You have a sharing invitation";
                            _this.notify('SharedInComing', evt);
                        }
                        else if (ret.param.actionType == 0 && owner.statusInfo.isSelf == 1) {
                            _this.tsdkClient.appShareStop(_this.confinfo.confHandle, function (ret) { });
                        }
                    }
                    else if (ret.param.actionType == 0) {
                        console.log("Sharing has not started or has been released");
                    }
                },
                OnEvtAsStateChange: function (ret) {
                    var evt = { result: true, info: "" };
                    var asStateInfo = ret.param.asStateInfo;
                    if (asStateInfo.state == 2) {
                        evt.info = {
                            state: asStateInfo.state,
                            description: "The shared side starts sharing"
                        };
                    }
                    else if (asStateInfo.state == 0) {
                        evt.info = {
                            state: asStateInfo.state,
                            description: "The screen sharing has ended"
                        };
                    }
                    else if (asStateInfo.state == 1) {
                        evt.info = {
                            state: asStateInfo.state,
                            description: "Watch the viewing side"
                        };
                    }
                    _this.notify('AsOnSharingState', evt);
                },
                OnEvtConfSetShareOwnerFailed: function (ret) {
                    _this.notify('OnEvtConfSetShareOwnerFailed', ret);
                },
                OnEvtConfStartShareFailed: function (ret) {
                    _this.notify('OnEvtConfStartShareFailed', ret);
                },
                OnEvtRecvChatMsg: function (ret) {
                    var evt = { result: true, info: "Received new message" };
                    var chatMsgInfo = ret.param.chatMsgInfo;
                    var time = util.formatDate(chatMsgInfo.time);
                    var chatMsgContent;
                    try {
                        chatMsgContent = decodeURIComponent(window.atob(chatMsgInfo.chatMsg));
                        var chatMsg = {
                            fromUserName: chatMsgInfo.senderNumber,
                            msgContent: chatMsgContent,
                            msgType: chatMsgInfo.chatType,
                            sequenceNmuber: 0,
                            time: time
                        };
                        evt.info = chatMsg;
                    }
                    catch (error) {
                        evt.result = false;
                        evt.info = "Wrong message encoding format.";
                        console.error("Wrong message encoding format. Error info: " + error.message);
                    }
                    _this.notify('ChatRecvMsg', evt);
                },
                OnEvtPresenterGiveInd: function (ret) {
                },
                OnEvtAsPrivilegeChange: function (ret) {
                    var evt = { result: true, info: "" };
                    var asPrivilegeInfo = ret.param.asPrivilegeInfo;
                    var privilegeInfo = {
                        attendee: asPrivilegeInfo.attendee.baseInfo.number,
                        name: asPrivilegeInfo.attendee.baseInfo.displayName,
                        sharePrivilegeType: asPrivilegeInfo.privilegeType,
                        shareAction: asPrivilegeInfo.action,
                    };
                    evt.info = privilegeInfo;
                    _this.notify('AsOnPrivilege', evt);
                },
                OnEvtSvcWatchInfoInd: function (ret) {
                    var evt = { result: true, info: ret };
                    _this.notify("OnEvtSvcWatchInfoInd", evt);
                },
                OnPluginEvtFrameHwndInfoUpdate: function (ret) {
                },
                OnPluginEvtWindowFocus: function (ret) {
                },
                OnPluginEvtSetWindowSize: function (ret) {
                    var evt = { result: true, info: "" };
                    var wndSizeInfo = {
                        height: 0,
                        leftTopX: 0,
                        leftTopY: 0,
                        moveEnable: 0,
                        nativewndSize: 0,
                        width: 0
                    };
                    if (ret.param.wndSizeInfo) {
                        wndSizeInfo.height = ret.param.wndSizeInfo.height;
                        wndSizeInfo.width = ret.param.wndSizeInfo.width;
                        wndSizeInfo.leftTopX = ret.param.wndSizeInfo.leftTopX;
                        wndSizeInfo.leftTopY = ret.param.wndSizeInfo.leftTopY;
                        wndSizeInfo.moveEnable = ret.param.wndSizeInfo.moveEnable;
                        wndSizeInfo.nativewndSize = ret.param.wndSizeInfo.nativewndSize;
                    }
                    else {
                    }
                    var hangupSetWindowSizeNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                        wndSizeInfo: wndSizeInfo
                    };
                    evt.info = hangupSetWindowSizeNotify;
                    _this.notify('OnPluginEvtSetWindowSize', evt);
                },
                OnPluginEvtQueryUserinfo: function (ret) {
                },
                OnPluginEvtCpuRateInfo: function (ret) {
                },
                OnPluginEvtClickHangupCall: function (ret) {
                    var evt = { result: true, info: "" };
                    var hangupCallNotify = {
                        callId: ret.param.callId,
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = hangupCallNotify;
                    _this.notify('OnPluginEvtClickHangupCall', evt);
                },
                OnPluginEvtClickMuteMic: function (ret) {
                    var evt = { result: true, info: "" };
                    var micBtnStateInfo = {
                        isMute: 0,
                        micIndex: 0,
                    };
                    if (ret.param.micBtnStateInfo) {
                        micBtnStateInfo.isMute = ret.param.micBtnStateInfo.isMute;
                        micBtnStateInfo.micIndex = ret.param.micBtnStateInfo.micIndex;
                        if (_this._confStatus) {
                            var flag = _this.attendeeList.find(function (value) {
                                return 1 == value.isSelf;
                            });
                            if (flag != undefined) {
                                _this.muteAttendee(flag.number, (ret.param.micBtnStateInfo.isMute == 1 ? false : true));
                            }
                        }
                    }
                    else {
                    }
                    var hangupMuteMicNotify = {
                        callId: ret.param.callId,
                        furtherProcessType: 0,
                        micBtnStateInfo: micBtnStateInfo
                    };
                    evt.info = hangupMuteMicNotify;
                    _this.notify('OnPluginEvtClickMuteMic', evt);
                },
                OnPluginEvtClickMuteSpeaker: function (ret) {
                    var evt = { result: true, info: "" };
                    var speakerBtnStateInfo = {
                        isMute: 0,
                        speakerIndex: 0,
                    };
                    if (ret.param.speakerBtnStateInfo) {
                        speakerBtnStateInfo.isMute = ret.param.speakerBtnStateInfo.isMute;
                        speakerBtnStateInfo.speakerIndex = ret.param.speakerBtnStateInfo.speakerIndex;
                    }
                    else {
                    }
                    var hangupMuteSpeakeNotify = {
                        callId: ret.param.callId,
                        furtherProcessType: ret.param.furtherProcessType,
                        speakerBtnStateInfo: speakerBtnStateInfo
                    };
                    evt.info = hangupMuteSpeakeNotify;
                    _this.notify('OnPluginEvtClickMuteSpeaker', evt);
                },
                OnPluginEvtClickMuteCamera: function (ret) {
                    var evt = { result: true, info: "" };
                    var cameraBtnStateInfo = {
                        isMute: 0,
                        cameraIndex: 0,
                    };
                    if (ret.param.cameraBtnStateInfo) {
                        cameraBtnStateInfo.isMute = ret.param.cameraBtnStateInfo.isMute;
                        cameraBtnStateInfo.cameraIndex = ret.param.cameraBtnStateInfo.cameraIndex;
                    }
                    else {
                    }
                    var hangupMuteCameraNotify = {
                        callId: ret.param.callId,
                        furtherProcessType: ret.param.furtherProcessType,
                        cameraBtnStateInfo: cameraBtnStateInfo
                    };
                    evt.info = hangupMuteCameraNotify;
                    _this.notify('OnPluginEvtClickMuteCamera', evt);
                },
                OnPluginEvtClickAddMember: function (ret) {
                    var evt = { result: true, info: "" };
                    var videoType = 2;
                    var coordinatesAndSizeInfo = {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0
                    };
                    if (ret.param.coordinatesAndSizeInfo) {
                        coordinatesAndSizeInfo.height = ret.param.coordinatesAndSizeInfo.height;
                        coordinatesAndSizeInfo.width = ret.param.coordinatesAndSizeInfo.width;
                        coordinatesAndSizeInfo.x = ret.param.coordinatesAndSizeInfo.x;
                        coordinatesAndSizeInfo.y = ret.param.coordinatesAndSizeInfo.y;
                    }
                    else {
                    }
                    if (_this.confinfo.confHandle != 0) {
                        videoType = (_this.confinfo.mediaType == 3 || _this.confinfo.mediaType == 2) ? 2 : 1;
                    }
                    else {
                        videoType = 0;
                    }
                    var hangupClickMemberNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                        coordinatesAndSizeInfo: coordinatesAndSizeInfo,
                        videoType: videoType,
                    };
                    evt.info = hangupClickMemberNotify;
                    _this.notify('OnPluginEvtClickAddMember', evt);
                },
                OnPluginEvtClickShowMemberList: function (ret) {
                    var evt = { result: true, info: "" };
                    var videoType = 2;
                    var coordinatesAndSizeInfo = {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0
                    };
                    if (_this.confinfo.confHandle != 0) {
                        videoType = (_this.confinfo.mediaType == 3 || _this.confinfo.mediaType == 2) ? 2 : 1;
                    }
                    else {
                        videoType = 0;
                    }
                    if (ret.param.coordinatesAndSizeInfo) {
                        coordinatesAndSizeInfo.height = ret.param.coordinatesAndSizeInfo.height;
                        coordinatesAndSizeInfo.width = ret.param.coordinatesAndSizeInfo.width;
                        coordinatesAndSizeInfo.x = ret.param.coordinatesAndSizeInfo.x;
                        coordinatesAndSizeInfo.y = ret.param.coordinatesAndSizeInfo.y;
                    }
                    else {
                    }
                    var hangupClickMemberNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                        coordinatesAndSizeInfo: coordinatesAndSizeInfo,
                        videoType: videoType,
                    };
                    evt.info = hangupClickMemberNotify;
                    _this.notify('OnPluginEvtClickShowMemberList', evt);
                },
                OnPluginEvtClickTransAudio: function (ret) {
                },
                OnPluginEvtClickSendIm: function (ret) {
                },
                OnPluginEvtClickDevicesSetting: function (ret) {
                    var evt = { result: true, info: "" };
                    var clickDevicesSettingNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = clickDevicesSettingNotify;
                    _this.notify('OnPluginEvtClickDevicesSetting', evt);
                },
                OnPluginEvtConfCtrlOperation: function (ret) {
                    var evt = { result: true, info: "" };
                    var confCtrlOperation = {
                        hwnd: 0,
                        isSelf: 0,
                        operationType: 0,
                        postponeTime: 0,
                        userNum: ""
                    };
                    if (ret.param.confCtrlOperation) {
                        confCtrlOperation.hwnd = ret.param.confCtrlOperation.hwnd;
                        confCtrlOperation.isSelf = ret.param.confCtrlOperation.isSelf;
                        confCtrlOperation.operationType = ret.param.confCtrlOperation.operationType;
                        confCtrlOperation.postponeTime = ret.param.confCtrlOperation.postponeTime;
                        confCtrlOperation.userNum = ret.param.confCtrlOperation.userNum;
                    }
                    else {
                    }
                    var hangupConfCtrlOperationNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                        confCtrlOperation: confCtrlOperation
                    };
                    evt.info = hangupConfCtrlOperationNotify;
                    _this.notify('OnPluginEvtConfCtrlOperation', evt);
                },
                OnPluginEvtClickSetLayout: function (ret) {
                },
                OnPluginEvtClickPageSwitch: function (ret) {
                },
                OnPluginEvtClickWatchAttendee: function (ret) {
                },
                OnPluginEvtClickChairmanOperation: function (ret) {
                },
                OnPluginEvtClickConfRecording: function (ret) {
                },
                OnPluginEvtClickSetShareQuality: function (ret) {
                },
                OnPluginEvtClickShowRemoteControl: function (ret) {
                },
                OnPluginEvtClickRequestRemoteControl: function (ret) {
                    var evt = { result: true, info: "" };
                    var clickRequestRemoteControlNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = clickRequestRemoteControlNotify;
                    _this.notify('OnPluginEvtClickRequestRemoteControl', evt);
                },
                OnPluginEvtClickReleaseRemoteControl: function (ret) {
                    var evt = { result: true, info: "" };
                    var ClickReleaseRemoteControlNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = ClickReleaseRemoteControlNotify;
                    _this.notify('OnPluginEvtClickReleaseRemoteControl', evt);
                },
                OnPluginEvtClickStartShare: function (ret) {
                    var evt = { result: true, info: "" };
                    var videoType = 2;
                    if (_this.confinfo.confHandle != 0) {
                        videoType = (_this.confinfo.mediaType == 3 || _this.confinfo.mediaType == 2) ? 2 : 1;
                    }
                    else {
                        videoType = 0;
                    }
                    var clickStartShareNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                        videoType: videoType,
                    };
                    evt.info = clickStartShareNotify;
                    _this.notify('OnPluginEvtClickStartShare', evt);
                },
                OnPluginEvtClickStopShare: function (ret) {
                    var evt = { result: true, info: "" };
                    var clickStopShareNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = clickStopShareNotify;
                    _this.notify('OnPluginEvtClickStopShare', evt);
                },
                OnPluginEvtClickLeaveConf: function (ret) {
                    var evt = { result: true, info: "" };
                    var hangupCallNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = hangupCallNotify;
                    _this.notify('OnPluginEvtClickLeaveConf', evt);
                },
                OnPluginEvtClickEndConf: function (ret) {
                    var evt = { result: true, info: "" };
                    var hangupCallNotify = {
                        furtherProcessType: ret.param.furtherProcessType,
                    };
                    evt.info = hangupCallNotify;
                    _this.notify('OnPluginEvtClickEndConf', evt);
                },
                OnEvtModifyPasswordResult: function (ret) {
                    var evt = { result: false, info: "password change failed!" };
                    if (ret.param != null) {
                        var modifyPasswordResult = {
                            userId: ret.param.userId,
                            reasonCode: ret.param.reasonCode,
                            reasonDescription: ret.param.reasonDescription
                        };
                        evt = {
                            result: true,
                            info: modifyPasswordResult
                        };
                    }
                    _this.notify('OnEvtModifyPasswordResult', evt);
                },
                OnError: function (ret) {
                    _this.notify("error", ret);
                },
            };
            terminalSDK.createTsdkClient(this.tsdkJsInitParam, this.listeners, function (data) {
                _this.tsdkClient = data;
            });
        }
        TsdkClientAdapt.prototype.initConfig = function (proxyParam) {
            var callbacks = function () { };
            var configParam = {
                logParam: {
                    level: serverConfig_1.CloudEC_SERVERCONFIG.LOG_LEVEL,
                    maxSizeKb: serverConfig_1.CloudEC_SERVERCONFIG.LOG_FILE_SIZE,
                    fileCount: serverConfig_1.CloudEC_SERVERCONFIG.LOG_FILE_COUNT,
                    path: serverConfig_1.CloudEC_SERVERCONFIG.LOG_PATH
                },
                proxyParam: proxyParam,
                confCtrlParam: {
                    protocol: serverConfig_1.CloudEC_SERVERCONFIG.CONF_CONTROL_PROTOCOL,
                },
                serviceSecurityParam: {
                    isApplyConfigPriority: serverConfig_1.CloudEC_SERVERCONFIG.IS_TLS_SUPPORT,
                    sipTransportMode: serverConfig_1.CloudEC_SERVERCONFIG.IS_TLS_SUPPORT,
                    mediaSrtpMode: 0,
                    securityTunnelMode: 0,
                }
            };
            this.tsdkClient.setConfigParam(configParam, callbacks);
            var tsdkAppInfoParam = {
                clientType: 0,
                productName: "eSDK-Desktop",
                supportAudioAndVideoCall: 1,
                supportAudioAndVideoConf: 1,
                supportDataConf: 1,
                supportCtd: 0,
                supportIm: serverConfig_1.CloudEC_SERVERCONFIG.IS_SUPPORT_IM,
                supportRichMediaMessage: 0,
                supportEnterpriseAddressBook: 0,
                useUiPlugin: 1,
                isWsInvokeMode: 1,
                supportSvcConfCaps: serverConfig_1.CloudEC_SERVERCONFIG.IS_SUPPORT_SVC_CONFERENCE,
            };
            this.tsdkClient.init(tsdkAppInfoParam, callbacks);
            var baseInfoParam = {
                baseInfoParam: {
                    appDisplayName: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_APP_DISPLAY_NAME,
                    language: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_LANGUAGE,
                    pluginVersion: 0,
                    resourcesPath: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_RESOURCES_PATH,
                    userFilesPath: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_USER_FILES_PATH
                }
            };
            this.tsdkClient.setConfigParam(baseInfoParam, callbacks);
            var parentExeName = this.getExplorerInfo();
            var pageTitle = serverConfig_1.CloudEC_SERVERCONFIG.PAGE_TITLE;
            if (util.isUndefined(pageTitle) || util.isNull(pageTitle)) {
                pageTitle = document.title;
            }
            var frameParam = {
                frameParam: {
                    hasFrameInfo: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HAS_FRAME_INFO,
                    frameInfo: {
                        leftTopX: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_X,
                        leftTopY: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_Y,
                        width: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_WIDTH,
                        height: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_HEIGHT,
                        minWidth: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_MIN_WIDTH,
                        minHeight: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_MIN_HEIGHT
                    },
                    hasParentWnd: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HAS_PARENT_INFO,
                    parentInfo: {
                        processName: parentExeName,
                        title: pageTitle,
                        xOffset: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_X,
                        yOffset: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_FRAME_INFO_Y,
                        xOffsetRate: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_X_OFFSET_RATE,
                        yOffsetRate: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_Y_OFFSET_RATE,
                        isNeedAttach: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_PARENT_INFO_IS_NEED_ATTACH
                    }
                },
            };
            var frameParamStr = JSON.stringify(frameParam);
            console.log(frameParamStr);
            this.tsdkClient.setConfigParam(frameParam, callbacks);
            var visibleInfo = {
                visibleInfo: {
                    mainWindowVisibleInfo: {
                        hideTopToolBar: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_TOP_TOOL_BAR,
                        hideBottomToolBar: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_BOTTOM_TOOL_BAR,
                        hideInviteButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_INVITE_BUTTON,
                        hideAttendeesButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_ATTENDEES_BUTTON,
                        hideShareButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_BUTTON,
                        hideShareConfLink: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_CONF_LINK,
                        hideAudioVideoSettingButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_AUDIO_VIDEO_SETTING_BUTTON,
                        hideCloseButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CLOSE_BUTTON,
                        hideMaxsizeMinisizeButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_MAXSIZE_MINISIZE_BUTTON,
                        hideLeaveButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_LEAVE_BUTTON,
                        hideConfTime: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_TIME,
                        hideConfChairmanPwd: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_CHAIRMAN_PWD,
                        hideConfGuestPwd: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_CONF_GUEST_PWD,
                        hideShareTypeSelection: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_HIDE_SHARE_TYPE_SELECTION
                    },
                    dataWindowVisibleInfo: {
                        hideInviteButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_INVITE_BUTTON,
                        hideAttendeesButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_ATTENDEES_BUTTON,
                        hideRequestRemoteControlButton: serverConfig_1.CloudEC_SERVERCONFIG.UI_PLUGIN_DATA_HIDE_REQUEST_REMOTE_CONTROL_BUTTON
                    }
                }
            };
            this.tsdkClient.setConfigParam(visibleInfo, callbacks);
        };
        TsdkClientAdapt.prototype.login = function (authType, authParam, serverInfo, callback) {
            var _this = this;
            var callbacks = function () { };
            var err = { cmdId: 100000000, errorCode: 33554434, errorInfo: "[TSDK_E_LOGIN_ERR_AUTH_FAILED]:authentication failure." };
            var evt = { result: false, info: err };
            var proxyParam = { proxyUri: "", proxyPort: 0, userName: "", password: "" };
            if (serverInfo.extensions != undefined && serverInfo.extensions != "") {
                var proxyParamTemp = JSON.parse(serverInfo.extensions);
                proxyParam = {
                    proxyUri: proxyParamTemp.proxyAddress,
                    proxyPort: parseInt(proxyParamTemp.proxyPort),
                    userName: proxyParamTemp.proxyAccount,
                    password: proxyParamTemp.proxyPassword
                };
            }
            this.initConfig(proxyParam);
            var tsdkLoginParam = {
                userId: 1,
                authType: authType,
                userName: authParam.account,
                password: authParam.passwd,
                userTicket: authParam.passwd,
                serverType: 0,
                serverVersion: "V6R6C00",
                serverAddr: serverInfo.serverAddress,
                serverPort: serverInfo.serverPort,
                appId: authParam.appId,
                appKey: authParam.appKey,
                appAccount: authParam.appAccount,
            };
            var loginCallback = { OnEvtVoipAccountStatus: {}, OnEvtAuthFailed: {}, OnEvtLoginFailed: {}, OnEvtLoginSuccess: {} };
            loginCallback.OnEvtVoipAccountStatus = function (data) {
                var userAccount = authParam.account;
                var sipAccount = data.param.voipAccountInfo.number;
                var shortNumber = "";
                var milltime = new Date().getTime();
                var mydate = util.formatDateYYYYMMDDHHMM(milltime);
                var loginTime = mydate.date + " " + mydate.time;
                var userInfo = { userAccount: userAccount, sipAccount: sipAccount, shortNumber: shortNumber, loginTime: loginTime, loginSuccessInfo: {
                        confEnvType: 0,
                        leftDaysOfPassword: 0,
                        isFirstLogin: 0,
                        isFreeUser: 0,
                        uuid: ""
                    }, };
                _this.baseinfo = userInfo;
            };
            loginCallback.OnEvtAuthFailed = function (data) {
                evt.result = false;
                err = {
                    cmdId: 100000000,
                    errorCode: data.param.reasonCode,
                    errorInfo: data.param.reasonDescription
                };
                evt.info = err;
                callback(evt);
            };
            loginCallback.OnEvtLoginFailed = function (data) {
                evt.result = false;
                err = {
                    cmdId: 100000000,
                    errorCode: data.param.loginFailedInfo.reasonCode,
                    errorInfo: data.param.loginFailedInfo.reasonDescription
                };
                evt.info = err;
                callback(evt);
            };
            loginCallback.OnEvtLoginSuccess = function (data) {
                _this._loginStatus = true;
                var loginSuccessInfo = {
                    confEnvType: 0,
                    leftDaysOfPassword: 0,
                    isFirstLogin: 0,
                    isFreeUser: 0,
                    uuid: ""
                };
                if (data.param.loginSuccessInfo != undefined && null != data.param.loginSuccessInfo) {
                    loginSuccessInfo = {
                        confEnvType: data.param.loginSuccessInfo.confEnvType,
                        leftDaysOfPassword: data.param.loginSuccessInfo.leftDaysOfPassword,
                        isFirstLogin: data.param.loginSuccessInfo.isFirstLogin,
                        isFreeUser: data.param.loginSuccessInfo.isFreeUser,
                        uuid: data.param.loginSuccessInfo.uuid
                    };
                }
                _this.baseinfo.loginSuccessInfo = loginSuccessInfo;
                evt.result = true;
                evt.info = _this.baseinfo;
                callback(evt);
            },
                this.registerLCallbacks(loginCallback);
            this.tsdkClient.login(tsdkLoginParam, function (data) {
            });
            authParam.passwd = "";
        };
        TsdkClientAdapt.prototype.setDisplayName = function (displayName) {
            var callbacks = function () { };
            var err = { cmdId: 900000000, errorCode: 16777218, errorInfo: "[TSDK_E_MANAGER_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(displayName)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            var displayInfo = {
                displayInfo: {
                    displayName: displayName
                },
            };
            this.tsdkClient.setConfigParam(displayInfo, callbacks);
        };
        TsdkClientAdapt.prototype.modifyPassword = function (modifyPassword, callback) {
            var callbacks = function () { };
            var err = { cmdId: 100000000, errorCode: 33554434, errorInfo: "[TSDK_E_LOGIN_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(modifyPassword.newPassword) || !util.isString(modifyPassword.oldPassword)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            this.tsdkClient.modifyPassword(modifyPassword, callbacks);
        };
        TsdkClientAdapt.prototype.logout = function () {
            this.isServiceSocketException();
            var callback = function () { };
            this.tsdkClient.logout(callback);
        };
        TsdkClientAdapt.prototype.getCallHandler = function () {
            var result;
            result = this.isCall();
            return result;
        };
        TsdkClientAdapt.prototype.makeCall = function (calleeNumber, isVideo, callback) {
            this.tsdkClient.startCall(calleeNumber, isVideo, callback);
        };
        TsdkClientAdapt.prototype.answerCall = function (accept, isVideo) {
            var _this = this;
            var callback = function () { };
            var isVideoCall = isVideo ? 1 : 0;
            if (this.playHandle >= 0) {
                this.tsdkClient.stopPlayMedia(this.playHandle, function (data) {
                    if (data.result == 0) {
                        _this.playHandle = -1;
                    }
                });
            }
            if (accept) {
                this.tsdkClient.acceptCall(this.callInfo.callId, isVideoCall, callback);
            }
            else {
                this.tsdkClient.endCall(this.callInfo.callId, callback);
                this.callInfo = {
                    callNo: "",
                    callId: "",
                    callState: 0,
                    isVideo: 0,
                    dtmfNo: "",
                    callName: ""
                };
            }
        };
        TsdkClientAdapt.prototype.hangup = function () {
            var _this = this;
            var callback = function () { };
            if (this.playHandle >= 0) {
                this.tsdkClient.stopPlayMedia(this.playHandle, function (data) {
                    if (data.result == 0) {
                        _this.playHandle = -1;
                    }
                });
            }
            this.tsdkClient.endCall(this.callInfo.callId, callback);
            this.callInfo = {
                callNo: "",
                callId: "",
                callState: 0,
                isVideo: 0,
                dtmfNo: "",
                callName: ""
            };
        };
        TsdkClientAdapt.prototype.sendDTMF = function (dtmfNo) {
            var callback = function () { };
            this.tsdkClient.sendDtmf(this.callInfo.callId, parseInt(dtmfNo), callback);
        };
        TsdkClientAdapt.prototype.switchAudioCall = function (toAudioCall) {
            var callback = function () { };
            if (!toAudioCall) {
                this.tsdkClient.addVideo(this.callInfo.callId, callback);
            }
            else {
                this.tsdkClient.delVideo(this.callInfo.callId, callback);
            }
        };
        TsdkClientAdapt.prototype.answerSwitch = function (accept) {
            var callback = function () { };
            var isAccept = accept ? 1 : 0;
            this.tsdkClient.replyAddVideo(isAccept, this.callInfo.callId, callback);
        };
        TsdkClientAdapt.prototype.setIPTService = function (type, number) {
            var callback = function () { };
            var isEnable = 0;
            var tsdkType = 0;
            switch (type) {
                case 1:
                    tsdkType = 1;
                    isEnable = 1;
                    break;
                case 2:
                    tsdkType = 1;
                    isEnable = 0;
                    break;
                case 3:
                    tsdkType = 2;
                    isEnable = 1;
                    break;
                case 4:
                    tsdkType = 2;
                    isEnable = 0;
                    break;
                case 25:
                    tsdkType = 3;
                    isEnable = 1;
                    break;
                case 26:
                    tsdkType = 3;
                    isEnable = 0;
                    break;
                case 27:
                    tsdkType = 4;
                    isEnable = 1;
                    break;
                case 28:
                    tsdkType = 4;
                    isEnable = 0;
                    break;
                case 29:
                    tsdkType = 5;
                    isEnable = 1;
                    break;
                case 30:
                    tsdkType = 5;
                    isEnable = 0;
                    break;
                case 31:
                    tsdkType = 6;
                    isEnable = 1;
                    break;
                case 32:
                    tsdkType = 6;
                    isEnable = 0;
                    break;
                default:
            }
            this.tsdkClient.setIptService(tsdkType, isEnable, number, callback);
        };
        TsdkClientAdapt.prototype.blindTransfer = function (transToNumber) {
            var callback = function () { };
            this.tsdkClient.blindTransfer(this.callInfo.callId, transToNumber, callback);
        };
        TsdkClientAdapt.prototype.startPlayMedia = function (loops, playFile, callback) {
            var err = { cmdId: 200000000, errorCode: 50331650, errorInfo: "[TSDK_E_CALL_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            this.tsdkClient.startPlayMedia(loops, playFile, function (data) {
                if (data.result == 0) {
                    evt.result = true;
                    evt.info = {
                        playHandle: data.param.playHandle,
                    };
                    callback(evt);
                }
                else {
                    evt.info = { cmdId: 200000000, errorCode: 50331649, errorInfo: "[TSDK_E_CALL_ERR_GENERAL_ERROR]:general error." };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.stopPlayMedia = function (handle) {
            var err = { cmdId: 200000000, errorCode: 50331650, errorInfo: "[TSDK_E_CALL_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            var callback = function () { };
            this.tsdkClient.stopPlayMedia(handle, function (data) {
                if (data.result == 0) {
                    evt.result = true;
                    evt.info = "Stop playing the file successfully";
                }
                else {
                    evt.info = { cmdId: 200000000, errorCode: 50331649, errorInfo: "[TSDK_E_CALL_ERR_GENERAL_ERROR]:general error." };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.micMute = function (bMute) {
            var callback = function () { };
            var isMuteMic = bMute ? 1 : 0;
            this.tsdkClient.muteMic(this.callInfo.callId, isMuteMic, callback);
            this.tsdkClient.uiPluginSetButtonState(0, isMuteMic, callback);
        };
        TsdkClientAdapt.prototype.videoMute = function (bMute) {
            var callback = function () { };
            var videoCtrlInfo = {
                operation: bMute ? 8 : 4,
                object: 6,
                isSync: 1,
            };
            this.tsdkClient.videoControl(videoCtrlInfo, this.confinfo.callId, function (ret) { });
            this.tsdkClient.uiPluginSetButtonState(1, bMute ? 1 : 0, callback);
        };
        TsdkClientAdapt.prototype.speakerMute = function (bMute) {
            var callback = function () { };
            var isMuteSpeaker = bMute ? 1 : 0;
            this.tsdkClient.muteSpeaker(this.confinfo.callId, isMuteSpeaker, callback);
            this.tsdkClient.uiPluginSetButtonState(2, bMute ? 0 : 1, callback);
        };
        TsdkClientAdapt.prototype.getCallStatisticInfo = function (callback) {
            var callId;
            if (this.confinfo.confHandle != 0) {
                callId = this.confinfo.callId;
            }
            else {
                callId = this.callInfo.callId;
            }
            this.tsdkClient.getCallStatisticInfo(callId, function (data) {
                callback(data.param.statisticInfo);
            });
        };
        TsdkClientAdapt.prototype.getMediaDevice = function (deviceType, callback) {
            var evt = { result: false, info: "" };
            this.tsdkClient.getDevices(deviceType, function (data) {
                var deviceArr = data.param.deviceInfo;
                deviceArr = JSON.parse(JSON.stringify(deviceArr).replace(/deviceName/g, 'name'));
                evt = {
                    result: true, info: deviceArr
                };
                callback(evt);
            });
        };
        TsdkClientAdapt.prototype.setMediaDevice = function (deviceType, index) {
            var callback = function () { };
            if (deviceType == enum_1.MEDIADEVICE_TYPE.MICROPHONE) {
                this.tsdkClient.setMicIndex(index, callback);
            }
            if (deviceType == enum_1.MEDIADEVICE_TYPE.SPEAKER) {
                this.tsdkClient.setSpeakIndex(index, callback);
            }
            if (deviceType == enum_1.MEDIADEVICE_TYPE.CAMERA) {
                this.tsdkClient.setVideoIndex(index, callback);
            }
        };
        TsdkClientAdapt.prototype.setVoiceVol = function (deviceType, value) {
            var callback = function () { };
            if (deviceType == enum_1.MEDIADEVICE_TYPE.MICROPHONE) {
                this.tsdkClient.setMicVolume(value, callback);
            }
            if (deviceType == enum_1.MEDIADEVICE_TYPE.SPEAKER) {
                this.tsdkClient.setSpeakVolume(value, callback);
            }
        };
        TsdkClientAdapt.prototype.getVoiceVol = function (deviceType, callback) {
            var err = { cmdId: 200000000, errorCode: 50331650, errorInfo: "[TSDK_E_CALL_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (deviceType == enum_1.MEDIADEVICE_TYPE.MICROPHONE) {
                this.tsdkClient.getMicVolume(function (data) {
                    evt = {
                        result: true,
                        info: data.param.volume
                    };
                    callback(evt);
                });
            }
            if (deviceType == enum_1.MEDIADEVICE_TYPE.SPEAKER) {
                this.tsdkClient.getSpeakVolume(function (data) {
                    evt = {
                        result: true,
                        info: data.param.volume
                    };
                    callback(evt);
                });
            }
        };
        TsdkClientAdapt.prototype.getConfHandler = function () {
            var result;
            result = this._confStatus;
            return result;
        };
        TsdkClientAdapt.prototype.getMyConfList = function (pageIndex, pageSize, callback) {
            if (util.isUndefined(pageIndex) || !util.isInteger(pageIndex)) {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("page_index"));
                return;
            }
            if (util.isUndefined(pageSize) || !util.isInteger(pageSize)) {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("page_size"));
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var queryReq = {
                pageIndex: pageIndex,
                confRight: 2,
                pageSize: pageSize,
                isIncludeEnd: 0,
            };
            var getMyConfListCallback = { OnEvtQueryConfListResult: {} };
            getMyConfListCallback.OnEvtQueryConfListResult = function (data) {
                var conf_list = [];
                if (data.param.result == 0) {
                    var confInfoList = data.param.confInfoList.confInfoList;
                    for (var m in confInfoList) {
                        var date = new Date();
                        var offset = date.getTimezoneOffset() * 60 * 1000;
                        var sdate = new Date(confInfoList[m].startTime.replace(" ", "T"));
                        var l_sdate = new Date(sdate.valueOf() - offset);
                        var l_start_time = l_sdate.toLocaleString();
                        var edate = new Date(confInfoList[m].endTime.replace(" ", "T"));
                        var l_edate = new Date(edate.valueOf() - offset);
                        var l_end_time = l_edate.toLocaleString();
                        var obj = {
                            accessNumber: confInfoList[m].accessNumber,
                            chairmanPasswd: confInfoList[m].chairmanPwd,
                            generalPasswd: confInfoList[m].guestPwd,
                            conferenceID: confInfoList[m].confId,
                            state: confInfoList[m].confState,
                            topic: confInfoList[m].subject,
                            startTime: l_start_time,
                            endTime: l_end_time,
                            mediaType: confInfoList[m].confMediaType,
                            scheduserName: confInfoList[m].scheduserName,
                            attendeeAmount: confInfoList[m].size,
                            chairJoinUri: confInfoList[m].chairJoinUri,
                            guestJoinUri: confInfoList[m].guestJoinUri,
                        };
                        conf_list[m] = obj;
                        confInfoList[m].chairmanPwd = "";
                        confInfoList[m].guestPwd = "";
                    }
                    callback({ result: true, info: conf_list });
                }
                else {
                    callback({ result: false, info: data });
                }
            };
            this.registerLCallbacks(getMyConfListCallback);
            this.tsdkClient.queryConferenceList(queryReq, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "getMyConfList", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.getMyConfInfo = function (confId, callback) {
            this.isLogin();
            if (util.isUndefined(confId) || !util.isString(confId)) {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("conf_id"));
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var queryReq = {
                pageIndex: 1,
                subConfId: "",
                pageSize: 20,
                confId: confId,
            };
            var getMyConfInfoCallback = { OnEvtQueryConfDetailResult: {} };
            getMyConfInfoCallback.OnEvtQueryConfDetailResult = function (data) {
                if (data.param.result == 0) {
                    var confInfo = data.param.confDetailInfo.confInfo;
                    var date = new Date();
                    var offset = date.getTimezoneOffset() * 60 * 1000;
                    var sdate = new Date(confInfo.startTime.replace(" ", "T"));
                    var l_sdate = new Date(sdate.valueOf() - offset);
                    var l_start_time = l_sdate.toLocaleString();
                    var edate = new Date(confInfo.endTime.replace(" ", "T"));
                    var l_edate = new Date(edate.valueOf() - offset);
                    var l_end_time = l_edate.toLocaleString();
                    var conf_info = {
                        conferenceID: confInfo.confId,
                        accessNumber: confInfo.accessNumber,
                        chairmanPasswd: confInfo.chairmanPwd,
                        generalPasswd: confInfo.guestPwd,
                        state: confInfo.confState,
                        topic: confInfo.subject,
                        startTime: l_start_time,
                        endTime: l_end_time,
                        mediaType: confInfo.confMediaType,
                        scheduserName: confInfo.scheduserName,
                        attendeeAmount: data.param.confDetailInfo.attendeeNum,
                        chairJoinUri: data.param.confDetailInfo.confInfo.chairJoinUri,
                        guestJoinUri: data.param.confDetailInfo.confInfo.guestJoinUri,
                    };
                    callback({ result: true, info: conf_info });
                    confInfo.chairmanPwd = "";
                    confInfo.guestPwd = "";
                }
                else {
                    callback({ result: true, info: data });
                }
            };
            this.registerLCallbacks(getMyConfInfoCallback);
            this.tsdkClient.queryConferenceDetail(queryReq, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "getMyConfInfo", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.bookConference = function (bookConferenceParam, callback) {
            this.isLogin();
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (this._confStatus && bookConferenceParam.confType == 0) {
                var evt_1 = { result: false, info: "Already in the meeting!" };
                TsdkClientAdapt.notifyErr(evt_1);
                return;
            }
            var ret = this.isValidBookConferenceParam(bookConferenceParam);
            if (ret.result === false) {
                TsdkClientAdapt.notifyErr(ret);
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err_1 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err_1);
                return;
            }
            if (util.isUndefined(bookConferenceParam.topic) || bookConferenceParam.topic.length === 0) {
                bookConferenceParam.topic = "CloudEC_Meeting";
            }
            var bookConferenceCallback = { OnEvtBookConfResult: {} };
            bookConferenceCallback.OnEvtBookConfResult = function (data) {
                var bookConfData;
                if (data.param.result == 0) {
                    var dataResult = data.param;
                    var confBaseInfo = dataResult.confBaseInfo;
                    var date = new Date();
                    var offset = date.getTimezoneOffset() * 60 * 1000;
                    var sdate = new Date(confBaseInfo.startTime.replace(" ", "T"));
                    var l_sdate = new Date(sdate.valueOf() - offset);
                    var l_start_time = l_sdate.toLocaleString();
                    var edate = new Date(confBaseInfo.endTime.replace(" ", "T"));
                    var l_edate = new Date(edate.valueOf() - offset);
                    var l_end_time = l_edate.toLocaleString();
                    var conf_info = {
                        conferenceID: confBaseInfo.confId,
                        accessNumber: confBaseInfo.accessNumber,
                        chairmanPasswd: confBaseInfo.chairmanPwd,
                        generalPasswd: confBaseInfo.guestPwd,
                        state: confBaseInfo.confState,
                        topic: confBaseInfo.subject,
                        startTime: l_start_time,
                        endTime: l_end_time,
                        mediaType: confBaseInfo.confMediaType,
                        scheduserName: confBaseInfo.scheduserName,
                        attendeeAmount: confBaseInfo.size,
                        chairJoinUri: confBaseInfo.chairJoinUri,
                        guestJoinUri: confBaseInfo.guestJoinUri,
                    };
                    bookConfData = {
                        result: true,
                        info: conf_info
                    };
                }
                else {
                    var evt_2 = { result: false, info: { cmdId: 300000000, errorCode: data.param.reasonCode, errorInfo: data.param.reasonDescription } };
                    bookConfData = evt_2;
                }
                callback(bookConfData);
            };
            var attendees = bookConferenceParam.attendees;
            var startTime = bookConferenceParam.startTime;
            var startTimeStr = "";
            if (startTime != null) {
                startTimeStr = startTime.year + "-" + startTime.month + "-" + startTime.date + " " + startTime.hours + ":" + startTime.minutes;
            }
            var configedAttendees = new Array();
            if (bookConferenceParam.confType == 0) {
                var tsdkAttendeeBaseInfo = {
                    displayName: "",
                    sms: "",
                    number: this.baseinfo.sipAccount,
                    role: 1,
                    email: "",
                    accountId: this.baseinfo.sipAccount,
                };
                configedAttendees.push(tsdkAttendeeBaseInfo);
            }
            for (var i = 0; !util.isUndefined(attendees) && i < attendees.length; i++) {
                if (attendees[i].number != null && attendees[i].number != "") {
                    var tsdkAttendeeBaseInfo = {
                        displayName: attendees[i].name ? attendees[i].name : attendees[i].number,
                        sms: attendees[i].smsPhone,
                        number: attendees[i].number,
                        role: attendees[i].role,
                        email: attendees[i].email,
                        accountId: "",
                    };
                    configedAttendees.push(tsdkAttendeeBaseInfo);
                }
            }
            var bookConfInfo = {
                welcomePrompt: bookConferenceParam.welcomePrompt,
                isMultiStreamConf: bookConferenceParam.isMultiStreamConf ? bookConferenceParam.isMultiStreamConf : 1,
                language: bookConferenceParam.language,
                isHdConf: bookConferenceParam.isHdConf ? bookConferenceParam.isHdConf : 0,
                isAutoInvite: bookConferenceParam.isAutoInvite ? bookConferenceParam.isAutoInvite : 0,
                isAutoMute: bookConferenceParam.isAutoMute,
                attendeeNum: configedAttendees.length,
                confType: bookConferenceParam.confType,
                recordMode: bookConferenceParam.recordMode,
                isAutoRecord: bookConferenceParam.autoRecord,
                enterPrompt: bookConferenceParam.enterPrompt,
                groupUri: bookConferenceParam.groupUri,
                attendeeList: configedAttendees,
                startTime: startTimeStr,
                confEncryptMode: bookConferenceParam.confEncryptMode,
                duration: bookConferenceParam.duration,
                confMediaType: bookConferenceParam.isVideo,
                reminder: bookConferenceParam.reminder,
                size: configedAttendees.length,
                leavePrompt: bookConferenceParam.leavePrompt,
                isAutoProlong: bookConferenceParam.isAutoProlong,
                subject: bookConferenceParam.topic,
            };
            this.registerLCallbacks(bookConferenceCallback);
            this.tsdkClient.bookConference(bookConfInfo, function (ret) {
                if (ret.result == 0) {
                    evt.result = true;
                    evt.info = "Create a meeting successfully";
                }
                else {
                    evt.result = false;
                    evt.info = ret;
                    callback(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.joinInstanceConf = function (instanceConfParam, callback) {
            this.isLogin();
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (this._confStatus) {
                var evt_3 = { result: false, info: "Already in the meeting!" };
                TsdkClientAdapt.notifyErr(evt_3);
                return;
            }
            var validret = this.isValideInstanceConfParam(instanceConfParam);
            if (validret.result === false) {
                TsdkClientAdapt.notifyErr(validret);
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err_2 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err_2);
                return;
            }
            if (this._callStatus || this._callStatus) {
                callback(errorCode_1.EC_SDK_ERROR.ALREADY_IN_CONF());
                return;
            }
            if (util.isUndefined(instanceConfParam.topic) || instanceConfParam.topic.length === 0) {
                instanceConfParam.topic = "CloudEC_Meeting";
            }
            var attendees = instanceConfParam.attendees;
            var configedAttendees = new Array();
            var tsdkAttendeeBaseInfo = {
                displayName: "",
                sms: "",
                number: this.baseinfo.sipAccount,
                role: 1,
                email: "",
                accountId: this.baseinfo.sipAccount,
            };
            configedAttendees.push(tsdkAttendeeBaseInfo);
            for (var i = 0; !util.isUndefined(attendees) && i < attendees.length; i++) {
                if (attendees[i].number != null && attendees[i].number != "") {
                    var tsdkAttendeeBaseInfo_1 = {
                        displayName: attendees[i].name ? attendees[i].name : attendees[i].number,
                        sms: attendees[i].smsPhone,
                        number: attendees[i].number,
                        role: attendees[i].role,
                        email: attendees[i].email,
                        accountId: "",
                    };
                    configedAttendees.push(tsdkAttendeeBaseInfo_1);
                }
            }
            var bookConfInfo = {
                welcomePrompt: instanceConfParam.welcomePrompt,
                isMultiStreamConf: instanceConfParam.isMultiStreamConf ? instanceConfParam.isMultiStreamConf : 1,
                language: instanceConfParam.language,
                isHdConf: instanceConfParam.isHdConf ? instanceConfParam.isHdConf : 0,
                isAutoInvite: 0,
                isAutoMute: instanceConfParam.isAutoMute,
                confType: 0,
                recordMode: instanceConfParam.recordMode,
                isAutoRecord: instanceConfParam.autoRecord,
                enterPrompt: instanceConfParam.enterPrompt,
                groupUri: instanceConfParam.groupUri,
                attendeeList: configedAttendees,
                attendeeNum: configedAttendees.length,
                startTime: "",
                confEncryptMode: instanceConfParam.confEncryptMode,
                duration: 120,
                confMediaType: instanceConfParam.isVideo,
                reminder: instanceConfParam.reminder,
                size: configedAttendees.length,
                leavePrompt: instanceConfParam.leavePrompt,
                isAutoProlong: instanceConfParam.isAutoProlong,
                subject: instanceConfParam.topic,
            };
            var bookConferenceCallback = { OnEvtBookConfResult: {} };
            bookConferenceCallback.OnEvtBookConfResult = function (data) {
                var bookConfData;
                if (data.param.result == 0) {
                    var dataResult = data.param;
                    var confBaseInfo = dataResult.confBaseInfo;
                    var date = new Date();
                    var offset = date.getTimezoneOffset() * 60 * 1000;
                    var sdate = new Date(confBaseInfo.startTime.replace(" ", "T"));
                    var l_sdate = new Date(sdate.valueOf() - offset);
                    var l_start_time = l_sdate.toLocaleString();
                    var edate = new Date(confBaseInfo.endTime.replace(" ", "T"));
                    var l_edate = new Date(edate.valueOf() - offset);
                    var l_end_time = l_edate.toLocaleString();
                    var conf_info = {
                        conferenceID: confBaseInfo.confId,
                        accessNumber: confBaseInfo.accessNumber,
                        chairmanPasswd: confBaseInfo.chairmanPwd,
                        generalPasswd: confBaseInfo.guestPwd,
                        state: confBaseInfo.confState,
                        topic: confBaseInfo.subject,
                        startTime: l_start_time,
                        endTime: l_end_time,
                        mediaType: confBaseInfo.confMediaType,
                        scheduserName: confBaseInfo.scheduserName,
                        attendeeAmount: confBaseInfo.size,
                        chairJoinUri: confBaseInfo.chairJoinUri,
                        guestJoinUri: confBaseInfo.guestJoinUri,
                    };
                    bookConfData = {
                        result: true,
                        info: conf_info
                    };
                }
                else {
                    var evt_4 = { result: false, info: { cmdId: 300000000, errorCode: data.param.reasonCode, errorInfo: data.param.reasonDescription } };
                    bookConfData = evt_4;
                }
                callback(bookConfData);
            };
            this.registerLCallbacks(bookConferenceCallback);
            this.tsdkClient.bookConference(bookConfInfo, function (ret) {
                if (ret.result == 0) {
                    evt.result = true;
                    evt.info = "Create a meeting successfully";
                }
                else {
                    evt.result = false;
                    evt.info = ret;
                    callback(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.joinConference = function (joinConfParam, callback) {
            this.isLogin();
            if (this._confStatus) {
                var evt_5 = { result: false, info: "Already in the meeting!" };
                TsdkClientAdapt.notifyErr(evt_5);
                return;
            }
            var err = { cmdId: 300000000, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: true, info: "" };
            var mediaType = 1;
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err_3 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err_3);
                return;
            }
            if (util.isUndefined(joinConfParam) || "" == joinConfParam.conferenceId
                || "" == joinConfParam.accessNumber) {
                err.errorInfo = "Parameter can not be empty";
                evt.result = false;
                evt.info = err;
                callback(evt);
                return;
            }
            var confJoinParam = {
                accessNumber: joinConfParam.accessNumber,
                confPassword: joinConfParam.confPasswd,
                confId: joinConfParam.conferenceId,
            };
            this.tsdkClient.joinConference(this.baseinfo.sipAccount, mediaType, confJoinParam, function (ret) {
                if (ret.result != 0) {
                    evt = { result: false, info: "Access reserved conference failed,please check input conference info！" };
                }
                callback(evt);
            });
            joinConfParam.confPasswd = "";
        };
        TsdkClientAdapt.prototype.addAttendee = function (attendees) {
            if (util.isUndefined(attendees) || attendees.length === 0) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendees");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            for (var i = 0; i < attendees.length; i++) {
                if (!util.isValidAttendeeParam(attendees[i])) {
                    var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendees");
                    TsdkClientAdapt.notifyErr(err);
                    return;
                }
            }
            var attendeeList = new Array();
            for (var i = 0; i < attendees.length; i++) {
                var attendee = attendees[i];
                var tsdkAttendeeBaseInfo = {
                    displayName: attendee.name,
                    sms: attendee.smsPhone,
                    number: attendee.number,
                    role: attendee.role,
                    email: attendee.email,
                    accountId: "",
                };
                attendeeList.push(tsdkAttendeeBaseInfo);
            }
            var addAttendeesInfo = {
                attendeeNum: attendeeList.length,
                attendeeList: attendeeList,
            };
            this.tsdkClient.addAttendee(this.confinfo.confHandle, addAttendeesInfo, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "addAttendee", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.delAttendee = function (attendee) {
            if (util.isUndefined(attendee) || util.isNull(attendee)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.removeAttendee(this.confinfo.confHandle, attendee, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "delAttendee", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.muteConference = function (mute) {
            this.tsdkClient.muteConference(this.confinfo.confHandle, mute ? 1 : 0, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "muteConference", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.muteAttendee = function (attendee, mute) {
            if (util.isUndefined(attendee) || util.isNull(attendee)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.muteAttendee(this.confinfo.confHandle, attendee, mute ? 1 : 0, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "muteAttendee", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.requestChairman = function (chairmanPwd) {
            if (util.isUndefined(chairmanPwd)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("chairmanPwd");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.requestChairman(this.confinfo.confHandle, chairmanPwd, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "requestChairman", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
            chairmanPwd = "";
        };
        TsdkClientAdapt.prototype.releaseChairman = function () {
            this.tsdkClient.releaseChairman(this.confinfo.confHandle, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "releaseChairman", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.handup = function (attendee) {
            if (util.isUndefined(attendee) || util.isNull(attendee)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var flag = this.attendeeList.find(function (value) {
                return attendee === value.number;
            });
            if (flag != undefined) {
                this.tsdkClient.setHandup(this.confinfo.confHandle, flag.raiseHandState == 1 ? 0 : 1, attendee, function (ret) {
                    var evt = { result: false, info: "" };
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "handup", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
            else {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
            }
        };
        TsdkClientAdapt.prototype.setConfMode = function (mode) {
            if (!util.isIntegerRange(mode, 0, 2)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("mode");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.setVideoMode(this.confinfo.confHandle, mode, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "setConfMode", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.setConfMixedPicture = function (imageType, attendees) {
            if (!util.isIntegerRange(imageType, 0, 9) || imageType == 5 || imageType == 7 || imageType == 8) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("imageType");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var configedAttendees = new Array();
            for (var i = 0; !util.isUndefined(attendees) && i < attendees.length; i++) {
                var TsdkAttendeeBaseInfo = {
                    displayName: attendees[i].name ? attendees[i].name : attendees[i].number,
                    sms: attendees[i].smsPhone,
                    number: attendees[i].number,
                    role: attendees[i].role,
                    email: attendees[i].email,
                    accountId: "",
                };
                configedAttendees[i] = TsdkAttendeeBaseInfo;
            }
            var mixedPictureParams = {
                attendeeNum: configedAttendees.length,
                attendeeList: configedAttendees,
                imageType: imageType,
            };
            this.tsdkClient.setMixedPicture(this.confinfo.confHandle, mixedPictureParams, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "setConfMixedPicture", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.broadcastAttendee = function (isBroad, attendee) {
            if (util.isUndefined(attendee)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            if (util.isUndefined(isBroad) || !util.isBinaryNumber(isBroad)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("isBroad");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.broadcastAttendee(this.confinfo.confHandle, attendee, isBroad, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "broadcastAttendee", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.watchAttendee = function (attendee) {
            if (util.isUndefined(attendee)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendee");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var watchAttendeeInfo = {
                watchAttendeeNum: 1,
                watchAttendeeList: [{ number: attendee }],
            };
            if (serverConfig_1.CloudEC_SERVERCONFIG.IS_SUPPORT_SVC_CONFERENCE == 1) {
                this.tsdkClient.uiPluginWatchSvcAttendee(attendee, function (ret) {
                    var evt = { result: false, info: "" };
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "watchAttendee", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
            else {
                this.tsdkClient.watchAttendee(this.confinfo.confHandle, watchAttendeeInfo, function (ret) {
                    var evt = { result: false, info: "" };
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "watchAttendee", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
        };
        TsdkClientAdapt.prototype.getAttendeeList = function (callback) {
            var evt = { result: true, info: "" };
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            if (this.attendeeList == null) {
                this.attendeeList = new Array();
            }
            evt.info = this.attendeeList;
            callback(evt);
        };
        TsdkClientAdapt.prototype.leaveConf = function () {
            var _this = this;
            if (this.confinfo.confHandle == 0) {
                console.log("conf handle is 0.");
            }
            this.tsdkClient.leaveConference(this.confinfo.confHandle, function (ret) {
                var evt = { result: true, info: "The meeting has already left!" };
                if (ret.result != 0) {
                    evt = { result: false, info: "The meeting does not exist！" };
                }
                else {
                    _this.confinfo = {
                        subject: "",
                        mediaType: 0,
                        confHandle: 0,
                        confId: "",
                        hostKey: "",
                        createor: "",
                        isAllMute: 0,
                        lockState: 0,
                    };
                    console.log("set conf handle is 0.");
                }
                _this._confStatus = false;
                _this.notify('LeaveConference', evt);
            });
        };
        TsdkClientAdapt.prototype.endConf = function () {
            if (this.confinfo.confHandle == 0) {
                console.log("conf handle is 0.");
            }
            this.tsdkClient.endConference(this.confinfo.confHandle, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "endConf", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.joinDataConference = function () {
            this.tsdkClient.joinDataConference(this.confinfo.confHandle, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "joinDataConference", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.answerConference = function (accept) {
            var evt = { result: false, info: "" };
            if (accept) {
                this.tsdkClient.acceptConference(this.confinfo.confHandle, ((this.confinfo.mediaType) == 0 || (this.confinfo.mediaType) == 2) ? 0 : 1, function (ret) {
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "answerConference", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
            else {
                this.tsdkClient.rejectConference(this.confinfo.confHandle, function (ret) {
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "answerConference", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
        };
        TsdkClientAdapt.prototype.sendMessage = function (messageParam) {
            var err = { cmdId: 400000000, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (util.isUndefined(messageParam)) {
                var errorInfo = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("messageParam");
                TsdkClientAdapt.notifyErr(errorInfo);
                return;
            }
            if (util.isUndefined(messageParam.msgType) || util.isUndefined(messageParam.msgContent) || !util.isInteger(messageParam.receiveID)) {
                var errorInfo = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("msgType ,msgContent or receiveID");
                TsdkClientAdapt.notifyErr(errorInfo);
                return;
            }
            var msgContent = encodeURIComponent(messageParam.msgContent);
            var chatMsgInfo = {
                chatMsg: msgContent,
                chatType: messageParam.msgType,
                chatMsgLen: msgContent.length,
                senderDisplayName: this.baseinfo.userAccount,
            };
            this.tsdkClient.sendChatMsgInConference(this.confinfo.confHandle, chatMsgInfo, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "sendMessage", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.joinAnonymousConf = function (anonymousConfParam, serverInfo, callback) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (this._confStatus) {
                var evt_6 = { result: false, info: "Already in the meeting!" };
                TsdkClientAdapt.notifyErr(evt_6);
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err_4 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err_4);
                return;
            }
            if (util.isUndefined(serverInfo) || "" == serverInfo.serverAddress || (typeof serverInfo.serverPort) != 'number') {
                err.errorInfo = "serverAddress or serverPort is incorrect";
                evt.info = err;
                callback(evt);
                return;
            }
            if (util.isUndefined(anonymousConfParam) || "" == anonymousConfParam.confId) {
                err.errorInfo = "anonymous conf parameters can not be empty";
                evt.result = false;
                evt.info = err;
                callback(evt);
                return;
            }
            var proxyParam = { proxyUri: "", proxyPort: 0, userName: "", password: "" };
            if (serverInfo.extensions != undefined && serverInfo.extensions != "") {
                var proxyParamTemp = JSON.parse(serverInfo.extensions);
                proxyParam = {
                    proxyUri: proxyParamTemp.proxyAddress,
                    proxyPort: parseInt(proxyParamTemp.proxyPort),
                    userName: proxyParamTemp.proxyAccount,
                    password: proxyParamTemp.proxyPassword
                };
            }
            this.initConfig(proxyParam);
            var tsdkConfAnonymousJoinParam = {
                displayName: anonymousConfParam.displayName,
                confPassword: anonymousConfParam.confPasswd,
                userId: 1,
                serverPort: serverInfo.serverPort,
                serverAddr: serverInfo.serverAddress,
                confId: anonymousConfParam.confId,
            };
            this.tsdkClient.joinConferenceByAnonymous(tsdkConfAnonymousJoinParam, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "joinAnonymousConf", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.transfer2Conf = function (confParam) {
            var configedAttendees = new Array();
            var callType = this.callInfo.isVideo;
            if (this._confStatus) {
                var evt = { result: false, info: "Already in the meeting!" };
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            var tsdkAttendeeBaseInfoTemp = {
                displayName: "",
                sms: "",
                number: this.baseinfo.sipAccount,
                role: 1,
                email: "",
                accountId: "",
            };
            configedAttendees.push(tsdkAttendeeBaseInfoTemp);
            tsdkAttendeeBaseInfoTemp = {
                displayName: "",
                sms: "",
                number: this.callInfo.callNo,
                role: 0,
                email: "",
                accountId: "",
            };
            configedAttendees.push(tsdkAttendeeBaseInfoTemp);
            if (!util.isUndefined(confParam) && !util.isUndefined(confParam.attendees)) {
                var attendees = confParam.attendees;
                for (var i = 0; i < attendees.length; i++) {
                    if (attendees[i].number != null && attendees[i].number != "") {
                        var tsdkAttendeeBaseInfo = {
                            displayName: attendees[i].name ? attendees[i].name : attendees[i].number,
                            sms: attendees[i].smsPhone,
                            number: attendees[i].number,
                            role: attendees[i].role,
                            email: attendees[i].email,
                            accountId: "",
                        };
                        configedAttendees.push(tsdkAttendeeBaseInfo);
                    }
                }
            }
            else {
                confParam = {
                    topic: "",
                    isVideo: callType,
                    language: 1,
                    autoRecord: 0,
                    isHdConf: 0,
                    attendees: configedAttendees,
                    welcomePrompt: 0,
                    isMultiStreamConf: 1,
                    isAutoMute: 0,
                    recordMode: 0,
                    enterPrompt: 0,
                    groupUri: "",
                    confEncryptMode: 0,
                    reminder: 0,
                    leavePrompt: 0,
                    isAutoProlong: 0,
                    extensions: "",
                };
            }
            var bookConfInfo = {
                welcomePrompt: confParam.welcomePrompt,
                isMultiStreamConf: confParam.isMultiStreamConf ? confParam.isMultiStreamConf : 1,
                language: confParam.language ? confParam.language : 1,
                isHdConf: confParam.isHdConf,
                isAutoMute: confParam.isAutoMute,
                isAutoInvite: 0,
                attendeeNum: configedAttendees.length,
                confType: 0,
                recordMode: confParam.recordMode,
                isAutoRecord: confParam.autoRecord ? confParam.autoRecord : 0,
                enterPrompt: confParam.enterPrompt,
                groupUri: "",
                attendeeList: configedAttendees,
                startTime: "",
                confEncryptMode: confParam.confEncryptMode,
                duration: 120,
                confMediaType: confParam.isVideo ? confParam.isVideo : callType,
                reminder: confParam.reminder,
                size: 0,
                leavePrompt: 0,
                isAutoProlong: confParam.isAutoProlong,
                subject: confParam.topic ? confParam.topic : "",
            };
            this.tsdkClient.p2pTransferToConference(this.callInfo.callId, bookConfInfo, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "transfer2Conf", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.setPresenter = function (attendee) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(attendee)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            this.tsdkClient.setPresenter(this.confinfo.confHandle, attendee, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "setPresenter", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.requestPresenter = function () {
            this.tsdkClient.requestPresenter(this.confinfo.confHandle, function (ret) {
                if (ret.result != 0) {
                    var evt = { result: false, info: "" };
                    evt.info = { cmdId: ret.rsp, interfaceName: "requestPresenter", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.startScreenSharing = function (attendee, extensions) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(attendee)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            this.tsdkClient.appShareSetOwner(1, this.confinfo.confHandle, attendee, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "startScreenSharing", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.stopScreenSharing = function (attendee) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(attendee)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            this.tsdkClient.appShareStop(this.confinfo.confHandle, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "stopScreenSharing", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
            this.tsdkClient.appShareSetOwner(0, this.confinfo.confHandle, attendee, function (ret) {
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "stopScreenSharing", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.requestRemoteCtrl = function (privilege) {
            if (!util.isIntegerRange(privilege, 1, 2)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("privilege");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.appShareRequestPrivilege(this.confinfo.confHandle, privilege == 2 ? 1 : 0, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "requestRemoteCtrl", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.setRemoteCtrl = function (privilege, action, attendee) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(attendee)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            if (!util.isIntegerRange(privilege, 1, 2)) {
                var err_5 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("privilege");
                TsdkClientAdapt.notifyErr(err_5);
                return;
            }
            if (!util.isIntegerRange(action, 0, 4)) {
                var err_6 = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("action");
                TsdkClientAdapt.notifyErr(err_6);
                return;
            }
            this.tsdkClient.appShareSetPrivilege(action, this.confinfo.confHandle, privilege == 2 ? 1 : 0, attendee, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "setRemoteCtrl", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.answerRemoteCtrl = function (attendee, accept) {
            var err = { cmdId: 0, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter error." };
            var evt = { result: false, info: err };
            if (!util.isString(attendee)) {
                TsdkClientAdapt.notifyErr(evt);
                return;
            }
            if (accept) {
                this.tsdkClient.appShareSetPrivilege(1, this.confinfo.confHandle, 0, attendee, function (ret) {
                    var evt = { result: false, info: "" };
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "answerRemoteCtrl", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
            else {
                this.tsdkClient.appShareSetPrivilege(4, this.confinfo.confHandle, 0, attendee, function (ret) {
                    var evt = { result: false, info: "" };
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "answerRemoteCtrl", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
        };
        TsdkClientAdapt.prototype.answerScreenSharing = function (accept) {
            var evt = { result: false, info: "" };
            if (accept) {
                this.tsdkClient.appShareStart(0, this.confinfo.confHandle, function (ret) {
                    if (ret.result != 0) {
                        evt.info = { cmdId: ret.rsp, interfaceName: "answerScreenSharing", errorCode: ret.result };
                        TsdkClientAdapt.notifyErr(evt);
                    }
                });
            }
            else {
                for (var i = 0; i < this.attendeeList.length; i++) {
                    var member = this.attendeeList[i];
                    if (member.isSelf == 1) {
                        this.tsdkClient.appShareSetOwner(0, this.confinfo.confHandle, member.number, function (ret) {
                            if (ret.result != 0) {
                                evt.info = { cmdId: ret.rsp, interfaceName: "answerScreenSharing", errorCode: ret.result };
                                TsdkClientAdapt.notifyErr(evt);
                            }
                        });
                    }
                }
            }
        };
        TsdkClientAdapt.prototype.getShareStatisticInfo = function (callback) {
            this.tsdkClient.getShareStatisticInfo(this.confinfo.confHandle, function (data) {
                callback(data.param.shareStatisticInfo);
            });
        };
        TsdkClientAdapt.prototype.renameSelf = function (nickname) {
            if (util.isUndefined(nickname) || util.isNull(nickname)) {
                var err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("nickname");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            this.tsdkClient.renameSelf(this.confinfo.confHandle, nickname, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "renameSelf", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.allowAttendeeUnmute = function (allowUnmute) {
            this.tsdkClient.allowAttendeeUnmute(this.confinfo.confHandle, allowUnmute ? 1 : 0, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "allowAttendeeUnmute", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.isValideInstanceConfParam = function (param) {
            if (util.isUndefined(param)) {
                return errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("instanceConfParam");
            }
            if (!util.isUndefined(param.isVideo) && !util.isInteger(param.isVideo) && (param.isVideo < 0 || param.isVideo > 3)) {
                return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("isVideo");
            }
            if (!util.isUndefined(param.autoRecord) && !util.isBinaryNumber(param.autoRecord)) {
                return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("auto_record");
            }
            if (!util.isUndefined(param.attendees)) {
                if (!util.isArray(param.attendees)) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("attendees");
                }
                for (var i = 0; i < param.attendees.length; i++) {
                    if (!util.isValidAttendeeParam(param.attendees[i])) {
                        return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendees");
                    }
                }
            }
            return { result: true, info: "" };
        };
        TsdkClientAdapt.prototype.isValidBookConferenceParam = function (param) {
            if (util.isUndefined(param)) {
                return errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("bookConferenceParam");
            }
            if (!util.isInteger(param.duration) ||
                !util.isString(param.topic)) {
                return errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("duration or topic");
            }
            if (!util.isUndefined(param.autoRecord) && !util.isBinaryNumber(param.autoRecord)) {
                return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("auto_record");
            }
            if (!util.isUndefined(param.isVideo) && !util.isInteger(param.isVideo) && (param.isVideo < 0 || param.isVideo > 3)) {
                return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("isVideo");
            }
            var startTime = param.startTime;
            if (startTime != null) {
                if (!util.isInteger(startTime.year) ||
                    !util.isInteger(startTime.month) ||
                    !util.isInteger(startTime.date) ||
                    !util.isInteger(startTime.hours) ||
                    !util.isInteger(startTime.minutes)) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_TYPE_ERROR("startTime");
                }
                if (startTime.month < 1 || startTime.month > 12) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_RANGE_ERROR("month", "0", "12");
                }
                if (startTime.date < 1 || startTime.date > 31) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_RANGE_ERROR("date", "1", "31");
                }
                if (startTime.hours < 0 || startTime.hours > 24) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_RANGE_ERROR("hours", "0", "24");
                }
                if (startTime.minutes < 0 || startTime.minutes > 60) {
                    return errorCode_1.EC_SDK_ERROR.PARAM_RANGE_ERROR("minutes", "0", "60");
                }
            }
            if (util.isUndefined(param.attendees) || !util.isArray(param.attendees) || param.attendees.length === 0) {
                return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendees");
            }
            for (var i = 0; i < param.attendees.length; i++) {
                if (!util.isValidAttendeeParam(param.attendees[i])) {
                    return errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("attendees");
                }
            }
            return { result: true, info: "" };
        };
        TsdkClientAdapt.prototype.searchUserInfo = function (queryParam, callback) {
            if (util.isUndefined(queryParam) || !util.isBinaryNumber(queryParam.searchType)
                || util.isUndefined(queryParam.pageIndex) || !util.isInteger(queryParam.pageIndex)) {
                var err = errorCode_1.EC_SDK_ERROR.EADDR_PARAM_INVALID_ERROR("queryParam");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err = errorCode_1.EC_SDK_ERROR.EADDR_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var searchParam = {
                searchKeyword: queryParam.condition,
                seqNo: this.queryContactInfoSeq++,
                pageIndex: queryParam.pageIndex,
                isExactSearch: queryParam.searchType,
                departmentId: "",
            };
            var searchContactsCallback = { OnEvtSearchContactsResult: {} };
            searchContactsCallback.OnEvtSearchContactsResult = function (data) {
                if (data.param.result == 0) {
                    var contactInfoArray = data.param.searchContactResult.contactInfo ? data.param.searchContactResult.contactInfo : new Array();
                    var contactArray = new Array();
                    for (var i = 0; i < contactInfoArray.length; i++) {
                        var contInfo = {
                            name: contactInfoArray[i].personName,
                            staffNo: contactInfoArray[i].staffNo,
                            gender: contactInfoArray[i].gender,
                            ucAccount: contactInfoArray[i].staffAccount,
                            deptName: contactInfoArray[i].departmentName,
                            position: contactInfoArray[i].title,
                            mobile: contactInfoArray[i].mobile,
                            homePhone: contactInfoArray[i].homePhone,
                            officePhone: contactInfoArray[i].officePhone,
                            officePhone2: contactInfoArray[i].officePhone2,
                            otherPhone: contactInfoArray[i].otherPhone,
                            otherPhone2: contactInfoArray[i].otherPhone2,
                            espaceNumber: contactInfoArray[i].terminal != "" ? contactInfoArray[i].terminal : contactInfoArray[i].terminal2,
                            fax: "",
                            zipCode: contactInfoArray[i].zipCode,
                            email: contactInfoArray[i].email,
                            address: contactInfoArray[i].address,
                            signature: contactInfoArray[i].signature,
                            website: "",
                            headId: "1"
                        };
                        contactArray.push(contInfo);
                    }
                    callback({ result: true, info: contactArray });
                }
                else {
                    var err = { cmdId: 600000000, errorCode: 100663297, errorInfo: "[TSDK_E_EADDR_ERR_GENERAL_ERROR]:general error." };
                    var evt = { result: false, info: err };
                    callback(evt);
                }
            };
            this.registerLCallbacks(searchContactsCallback);
            this.tsdkClient.searchContacts(searchParam, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "searchUserInfo", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.searchDeptInfo = function (deptId, callback) {
            if (util.isUndefined(deptId)) {
                var err = errorCode_1.EC_SDK_ERROR.EADDR_PARAM_INVALID_ERROR("deptId");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            if (util.isUndefined(callback) || !util.isFunction(callback)) {
                var err = errorCode_1.EC_SDK_ERROR.EADDR_PARAM_INVALID_ERROR("callback");
                TsdkClientAdapt.notifyErr(err);
                return;
            }
            var searchParam = {
                seqNo: this.queryDeptInfoSeq++,
                departmentId: deptId,
            };
            var searchDepartmentCallback = { OnEvtSearchDeptResult: {} };
            searchDepartmentCallback.OnEvtSearchDeptResult = function (data) {
                if (data.param.result == 0) {
                    var departmentInfoArray = data.param.searchDeptResult.departmentInfo ? data.param.searchDeptResult.departmentInfo : new Array();
                    var deptArray = new Array();
                    for (var i = 0; i < departmentInfoArray.length; i++) {
                        var deptInfo = {
                            index: i + 1,
                            deptId: departmentInfoArray[i].departmentId,
                            parentId: departmentInfoArray[i].parentId,
                            deptName: departmentInfoArray[i].departmentName,
                        };
                        deptArray.push(deptInfo);
                    }
                    callback({ result: true, info: deptArray });
                }
                else {
                }
            };
            this.registerLCallbacks(searchDepartmentCallback);
            this.tsdkClient.searchDepartment(searchParam, function (ret) {
                var evt = { result: false, info: "" };
                if (ret.result != 0) {
                    evt.info = { cmdId: ret.rsp, interfaceName: "searchDeptInfo", errorCode: ret.result };
                    TsdkClientAdapt.notifyErr(evt);
                }
            });
        };
        TsdkClientAdapt.prototype.uiPluginSetButtonState = function (button, isOff, callbacks) {
            this.tsdkClient.uiPluginSetButtonState(button, isOff, callbacks);
        };
        TsdkClientAdapt.prototype.uiPluginShowSmallWindow = function (callback) {
            this.tsdkClient.uiPluginShowSmallWindow(callback);
        };
        TsdkClientAdapt.prototype.uiPluginShowAnnotationTool = function (callback) {
            this.tsdkClient.uiPluginShowAnnotationTool(callback);
        };
        TsdkClientAdapt.prototype.uiPluginSetWindowTitle = function (title, callback) {
            var wndTitle = {
                confId: this.confinfo.confId,
                title: title,
            };
            this.tsdkClient.uiPluginSetWindowTitle(wndTitle, callback);
        };
        TsdkClientAdapt.prototype.resetNativeWndSize = function (nativeWndParam) {
            return __awaiter(this, void 0, void 0, function () {
                var err, wndSizeParam;
                return __generator(this, function (_a) {
                    if (util.isUndefined(nativeWndParam) || !util.isIntegerRange(nativeWndParam.width, 0, 4096)
                        || !util.isIntegerRange(nativeWndParam.height, 0, 2048) || !util.isIntegerRange(nativeWndParam.xOffsetRate, 0, 100)
                        || !util.isIntegerRange(nativeWndParam.yOffsetRate, 0, 100)) {
                        err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("nativeWndParam");
                        TsdkClientAdapt.notifyErr(err);
                        return [2];
                    }
                    wndSizeParam = {
                        frameHwnd: 0,
                        hasWndSize: (nativeWndParam.width != 0 || nativeWndParam.height != 0) ? 1 : 0,
                        width: nativeWndParam.width,
                        height: nativeWndParam.height,
                        hasRelativePos: (nativeWndParam.xOffsetRate != 0 || nativeWndParam.yOffsetRate != 0) ? 1 : 0,
                        yOffsetRate: nativeWndParam.xOffsetRate,
                        xOffsetRate: nativeWndParam.yOffsetRate,
                    };
                    this.tsdkClient.uiPluginSetWindowSizeRelativePos(wndSizeParam, function (data) { });
                    return [2];
                });
            });
        };
        TsdkClientAdapt.prototype.uiPluginSetWindowSizeRelativePos = function (wndSizeRelPosParam, callbacks) {
            return __awaiter(this, void 0, void 0, function () {
                var err, wndSizeParam;
                return __generator(this, function (_a) {
                    if (util.isUndefined(wndSizeRelPosParam) || !util.isIntegerRange(wndSizeRelPosParam.width, 0, 4096)
                        || !util.isIntegerRange(wndSizeRelPosParam.height, 0, 2048) || !util.isIntegerRange(wndSizeRelPosParam.xOffsetRate, 0, 100)
                        || !util.isIntegerRange(wndSizeRelPosParam.yOffsetRate, 0, 100)) {
                        err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("nativeWndParam");
                        TsdkClientAdapt.notifyErr(err);
                        return [2];
                    }
                    wndSizeParam = {
                        frameHwnd: 0,
                        hasWndSize: (wndSizeRelPosParam.width != 0 || wndSizeRelPosParam.height != 0) ? 1 : 0,
                        width: wndSizeRelPosParam.width,
                        height: wndSizeRelPosParam.height,
                        hasRelativePos: (wndSizeRelPosParam.xOffsetRate != 0 || wndSizeRelPosParam.yOffsetRate != 0) ? 1 : 0,
                        yOffsetRate: wndSizeRelPosParam.xOffsetRate,
                        xOffsetRate: wndSizeRelPosParam.yOffsetRate,
                    };
                    this.tsdkClient.uiPluginSetWindowSizeRelativePos(wndSizeParam, function (data) { });
                    return [2];
                });
            });
        };
        TsdkClientAdapt.prototype.uiPluginSetWindowSizeAbsolutePos = function (wndSizeAbsPosParam, callbacks) {
            return __awaiter(this, void 0, void 0, function () {
                var err, wndSizeParam;
                return __generator(this, function (_a) {
                    if (util.isUndefined(wndSizeAbsPosParam) || !util.isIntegerRange(wndSizeAbsPosParam.width, 0, 4096)
                        || !util.isIntegerRange(wndSizeAbsPosParam.height, 0, 2048)) {
                        err = errorCode_1.EC_SDK_ERROR.CONF_PARAM_INVALID_ERROR("wndSizeAbsPosParam");
                        TsdkClientAdapt.notifyErr(err);
                        return [2];
                    }
                    wndSizeParam = {
                        frameHwnd: 0,
                        hasWndSize: (wndSizeAbsPosParam.width != 0 || wndSizeAbsPosParam.height != 0) ? 1 : 0,
                        width: wndSizeAbsPosParam.width,
                        height: wndSizeAbsPosParam.height,
                        hasAbsolutePos: (wndSizeAbsPosParam.leftTopX >= 0 || wndSizeAbsPosParam.leftTopY >= 0) ? 1 : 0,
                        leftTopX: wndSizeAbsPosParam.leftTopX,
                        leftTopY: wndSizeAbsPosParam.leftTopY,
                    };
                    this.tsdkClient.uiPluginSetWindowSizeAbsolutePos(wndSizeParam, function (data) { });
                    return [2];
                });
            });
        };
        TsdkClientAdapt.prototype.uiPluginShowVideoWindow = function (callback) {
            this.tsdkClient.uiPluginShowVideoWindow(callback);
        };
        TsdkClientAdapt.prototype.uiPluginShowShareSelectwnd = function (callback) {
            this.tsdkClient.uiPluginShowShareSelectwnd(callback);
        };
        TsdkClientAdapt.prototype.getVersion = function (callback) {
            this.tsdkClient.getVersion(function (data) {
                if (data.result == 0) {
                    var sdkVersion = {
                        name: "CloudLinkMeeting_JS_SDK",
                        version: data.param.versionInfo
                    };
                    callback(sdkVersion);
                }
            });
        };
        TsdkClientAdapt.prototype.on = function (event, action) {
            var _listener = TsdkClientAdapt._listeners[event];
            if (!_listener) {
                TsdkClientAdapt._listeners[event] = [];
            }
            TsdkClientAdapt._listeners[event].push(action);
        };
        TsdkClientAdapt.prototype.notify = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _listener = TsdkClientAdapt._listeners[event];
            if (!_listener)
                return;
            var length = _listener.length;
            for (var i = 0; i < length; i++) {
                var callback = _listener[i];
                callback.apply(void 0, args);
            }
        };
        TsdkClientAdapt.prototype.onError = function (action) {
            this.on("error", action);
        };
        TsdkClientAdapt.notifyErr = function (errorInfo) {
            var _listener = TsdkClientAdapt._listeners["error"];
            if (!_listener)
                return;
            var length = _listener.length;
            for (var i = 0; i < length; i++) {
                var callback = _listener[i];
                callback(errorInfo);
            }
        };
        TsdkClientAdapt.prototype.isCall = function () {
            if (!this.isLogin()) {
                return false;
            }
            if (this._callStatus) {
                return this._callStatus;
            }
            else {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.OBJECT_NOT_EXISTS("call"));
                return this._callStatus;
            }
        };
        TsdkClientAdapt.prototype.isLogin = function () {
            this.isServiceSocketException();
            if (this._loginStatus) {
                return this._loginStatus;
            }
            else {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.LOGIN_STATUS_ERROR());
                throw "login status error, please login first";
            }
        };
        TsdkClientAdapt.prototype.isServiceSocketException = function () {
            if (terminalSDK.getServiceSocketStatus()) {
                TsdkClientAdapt.notifyErr(errorCode_1.EC_SDK_ERROR.CONNECTION_RESET());
                throw errorCode_1.EC_SDK_ERROR.CONNECTION_RESET().info.errorInfo;
            }
        };
        TsdkClientAdapt.prototype.getExplorerInfo = function () {
            var explorer = window.navigator.userAgent.toLowerCase();
            var exeName = "";
            if (explorer.indexOf("chrome") >= 0) {
                exeName = "chrome.exe";
            }
            else if (explorer.indexOf("firefox") >= 0) {
                exeName = "firefox.exe";
            }
            else if (explorer.indexOf("trident") >= 0 && explorer.indexOf("rv")) {
                exeName = "iexplore.exe";
            }
            else if (explorer.indexOf("msie") >= 0) {
                exeName = "iexplore.exe";
            }
            return exeName;
        };
        TsdkClientAdapt.prototype.registerLCallbacks = function (callback) {
            if (typeof (callback.OnEvtAuthFailed) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtAuthFailed', callback.OnEvtAuthFailed);
            }
            if (typeof (callback.OnEvtLoginFailed) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtLoginFailed', callback.OnEvtLoginFailed);
            }
            if (typeof (callback.OnEvtLoginSuccess) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtLoginSuccess', callback.OnEvtLoginSuccess);
            }
            if (typeof (callback.OnEvtVoipAccountStatus) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtVoipAccountStatus', callback.OnEvtVoipAccountStatus);
            }
            if (typeof (callback.OnEvtQueryConfListResult) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtQueryConfListResult', callback.OnEvtQueryConfListResult);
            }
            if (typeof (callback.OnEvtQueryConfDetailResult) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtQueryConfDetailResult', callback.OnEvtQueryConfDetailResult);
            }
            if (typeof (callback.OnEvtBookConfResult) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtBookConfResult', callback.OnEvtBookConfResult);
            }
            if (typeof (callback.OnEvtSearchDeptResult) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtSearchDeptResult', callback.OnEvtSearchDeptResult);
            }
            if (typeof (callback.OnEvtSearchContactsResult) != "undefined") {
                this.tsdkClient.onAdapt('OnEvtSearchContactsResult', callback.OnEvtSearchContactsResult);
            }
        };
        TsdkClientAdapt._listeners = {};
        return TsdkClientAdapt;
    }());
    exports.default = TsdkClientAdapt;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = (function () {
        function Logger() {
        }
        Logger.getCurrentTime = function () {
            var date = new Date();
            var separator1 = "-";
            var separator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var currentDate;
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 1 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            currentDate = date.getFullYear() + separator1 + month + separator1 + strDate + " " + date.getHours() + separator2 + date.getMinutes() + separator2 + date.getSeconds();
            return "[" + currentDate + "]";
        };
        Logger.error = function (moduleName, args) {
            console.error(this.getCurrentTime() + "[" + moduleName + "]" + "[error]", args);
        };
        Logger.warn = function (moduleName, args) {
            console.warn(this.getCurrentTime() + "[" + moduleName + "]" + "[warn]", args);
        };
        Logger.info = function (moduleName, args) {
            console.info(this.getCurrentTime() + "[" + moduleName + "]" + "[info]", args);
        };
        Logger.debug = function (moduleName, args) {
            console.debug(this.getCurrentTime() + "[" + moduleName + "]" + "[debug]", args);
        };
        Logger.Instance = new Logger();
        return Logger;
    }());
    exports.default = Logger;
    exports.isInteger = function (obj) {
        return typeof obj === 'number' && obj % 1 === 0;
    };
    exports.isNumber = function (obj) {
        return typeof obj === 'number';
    };
    exports.isIntegerRange = function (obj, start, end) {
        if (!obj) {
            return true;
        }
        return exports.isInteger(obj) && obj >= start && obj <= end;
    };
    exports.formatDateYYYYMMDDHHMM = function (time, separator) {
        if (separator === void 0) { separator = "/"; }
        var date = new Date(time * 1.0);
        var year = date.getFullYear();
        var month = exports.formatNum(date.getMonth() + 1);
        var day = exports.formatNum(date.getDate());
        var hour = exports.formatNum(date.getHours());
        var minute = exports.formatNum(date.getMinutes());
        return {
            date: year + separator + month + separator + day,
            time: hour + ":" + minute
        };
    };
    exports.formatDate = function (time) {
        var date = new Date(parseInt(time) * 1000);
        var year = date.getFullYear();
        var month = exports.formatNum(date.getMonth() + 1);
        var day = exports.formatNum(date.getDate());
        var hour = exports.formatNum(date.getHours());
        var minute = exports.formatNum(date.getMinutes());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    };
    exports.isString = function (param) {
        if (typeof param === 'string') {
            return true;
        }
        else {
            return false;
        }
    };
    exports.isValidAttendeeParam = function (param) {
        if (exports.isUndefined(param)) {
            return false;
        }
        if ((!exports.isUndefined(param.email) && !exports.isString(param.email)) ||
            (!exports.isUndefined(param.name) && !exports.isString(param.name)) ||
            (!exports.isUndefined(param.smsPhone) && !exports.isString(param.smsPhone)) ||
            (!exports.isUndefined(param.number) && !exports.isString(param.number))) {
            return false;
        }
        return true;
    };
    exports.isBinaryNumber = function (param) {
        return (typeof param === 'number' && (param === 0 || param === 1));
    };
    exports.isUndefined = function (param) {
        return param == undefined || param == null || param == NaN;
    };
    exports.isNull = function (param) {
        return param === "";
    };
    exports.isArray = function (param) {
        return (param instanceof Array);
    };
    exports.isBoolean = function (param) {
        return (typeof param === 'boolean');
    };
    exports.isFunction = function (param) {
        return (typeof param === 'function');
    };
    exports.UTCTimeStr = function (time) {
        var year = time.getUTCFullYear();
        var month = time.getUTCMonth();
        var date = time.getUTCDate();
        var hour = time.getUTCHours();
        var minute = time.getUTCMinutes();
        var utcTime = year + "-" + month + "-" + date + " " + hour + ":" + minute;
        return utcTime;
    };
    exports.formatNum = function (num, pow) {
        if (pow === void 0) { pow = 2; }
        var temp = Math.pow(10, pow);
        var tempStr = num + temp + "";
        return tempStr.substring(1);
    };
    function replaceAll(s1, s2, s3) {
        var reg = new RegExp(s2, "gm");
        return s1.replace(reg, s3);
    }
    exports.hidePhone = function (phone) {
        var phoneS;
        if (phone.length >= 8) {
            phoneS = replaceAll(phone, "(.\\d{2})\\d{1,4}(\\d{4})", "$1****$2");
        }
        else {
            phoneS = replaceAll(phone, "(.\\d{1})\\d{0,4}(\\d{1})", "$1****$2");
        }
        return phoneS;
    };
    exports.hideName = function (name) {
        var reg = /(.{2}).+/g;
        var nameS;
        if (name.length >= 2) {
            nameS = name.replace(reg, "$1****");
        }
        else {
            nameS = name.replace(name, "******");
        }
        return nameS;
    };
    exports.hideEmail = function (email) {
        var reg = /(.{0,1}).+(.{1}@.+)/g;
        var emailS = email.replace(reg, "$1****$2");
        return emailS;
    };
    exports.hidePassword = function (password) {
        var passwordS = password.replace(password, "******");
        return passwordS;
    };
    exports.hideIPAddress = function (IPAddress) {
        var pattern = /(\d+\.\d+\.\d+\.)\d+/;
        var IPAddressS = IPAddress.replace(pattern, '$1\*');
        return IPAddressS;
    };
    var emailArr = ["account", "email", "requesterAccount", "responderAccount", "ownerAccount", "updateMemberAccount", "staffAccount"];
    var nameArr = ["signature", "birthday", "sender", "origin", "target", "name", "groupName", "groupNameEn", "originName", "peerDisplayName", "codecName", "localAddr", "remoteAddr", "codecName", "subject", "scheduserAccount", "scheduserName", "displayName", "accountId", "userName", "shortUserName", "shortConfName", "reviciverNumber", "senderNumber", "senderDisplayName", "chatMsg", "documentName", "wbDelDisplayName", "sharingDisplayName", "departmentName", "iconId", "requesterName", "responderName", "manifesto", "updateMemberName", "terminal", "hostKey", "shortConfName", "shortUserName", "userName", "userUri"];
    var passwordArr = ["password", "token", "securityTunnelInfo", "umServerLoginToken", "content", "chairmanPwd", "guestPwd", "contactInfo", "hostKey", "cryptKey", "userInfoList", "umServerLoginToken", "confName", "cryptKey"];
    var phoneArr = ["number", "peerNumber", "accessNumber", "sms"];
    var IPAddressArr = ["lastLoginAddr"];
    var PersonalInfArr = ["atUserList"];
    function replacer(key, value) {
        if (emailArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var email = exports.hideEmail(value);
            return email;
        }
        if (nameArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var name_1 = exports.hideName(value);
            return name_1;
        }
        if (passwordArr.indexOf(key) != -1 && !exports.isNull(value) && (exports.isString(value) || exports.isNumber(value))) {
            var valueStr = value + "";
            var password = exports.hidePassword(valueStr);
            valueStr = "";
            return password;
        }
        if (phoneArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var phone = exports.hidePhone(value);
            return phone;
        }
        if (IPAddressArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var ipAddress = exports.hideIPAddress(value);
            return ipAddress;
        }
        if (PersonalInfArr.indexOf(key) != -1 && !exports.isNull(value)) {
            return "******";
        }
        return value;
    }
    exports.replaceLogInfo = function (dataInfo) {
        var dataInfoEncryption = JSON.stringify(dataInfo, replacer, "   ");
        return dataInfoEncryption;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MEDIADEVICE_TYPE;
    (function (MEDIADEVICE_TYPE) {
        MEDIADEVICE_TYPE[MEDIADEVICE_TYPE["MICROPHONE"] = 0] = "MICROPHONE";
        MEDIADEVICE_TYPE[MEDIADEVICE_TYPE["SPEAKER"] = 1] = "SPEAKER";
        MEDIADEVICE_TYPE[MEDIADEVICE_TYPE["CAMERA"] = 2] = "CAMERA";
    })(MEDIADEVICE_TYPE = exports.MEDIADEVICE_TYPE || (exports.MEDIADEVICE_TYPE = {}));
    var CLOUDEC_SDK_LOG_LEVEL;
    (function (CLOUDEC_SDK_LOG_LEVEL) {
        CLOUDEC_SDK_LOG_LEVEL[CLOUDEC_SDK_LOG_LEVEL["LOG_ERROR"] = 0] = "LOG_ERROR";
        CLOUDEC_SDK_LOG_LEVEL[CLOUDEC_SDK_LOG_LEVEL["LOG_WARNING"] = 1] = "LOG_WARNING";
        CLOUDEC_SDK_LOG_LEVEL[CLOUDEC_SDK_LOG_LEVEL["LOG_INFO"] = 2] = "LOG_INFO";
        CLOUDEC_SDK_LOG_LEVEL[CLOUDEC_SDK_LOG_LEVEL["LOG_DEBUG"] = 3] = "LOG_DEBUG";
    })(CLOUDEC_SDK_LOG_LEVEL = exports.CLOUDEC_SDK_LOG_LEVEL || (exports.CLOUDEC_SDK_LOG_LEVEL = {}));
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SDK_ERROR_CODE = {
        LOGIN_ERR_NO_INPUT: {
            ERROR_ID: "",
            DISCRIPTION: "auth parameter is null",
            ACTION: "please input auth info"
        },
        LOGIN_ERR_GENERAL: {
            ERROR_ID: 1,
            DISCRIPTION: "LOGIN_ERR_BEGIN",
            ACTION: "How to fix it"
        }
    };
    exports.UPORTAL_LOGIN_ERROR = {
        LOGIN_ERR_BEGIN: 0,
        LOGIN_ERR_GENERAL: 1,
        LOGIN_ERR_PARAM_ERROR: 2,
        LOGIN_ERR_TIMEOUT: 3,
        LOGIN_ERR_MEM_ERROR: 4,
        LOGIN_ERR_XML_ERROR: 5,
        LOGIN_ERR_PARSE_PTKT_ERROR: 6,
        LOGIN_ERR_DNS_ERROR: 7,
        LOGIN_ERR_REQUEST_FAILED: 8,
        LOGIN_ERR_AUTH_FAILED: 9,
        LOGIN_ERR_SN_FAILED: 10,
        LOGIN_ERR_SERVICE_ERROR: 11,
        LOGIN_ERR_ACCOUNT_LOCKED: 12,
        LOGIN_ERR_TIMER_ERROR: 13,
        LOGIN_ERR_WRONG_SERVERTYPE: 14,
        LOGIN_ERR_WRONG_SERVERVERSION: 15,
        LOGIN_ERR_INVALID_URL: 16,
        LOGIN_ERR_SEARCH_SERVER_FAIL: 17,
        LOGIN_ERR_START_REFRESH_FAIL: 18
    };
    exports.EADDR_ERROR = {
        EADDR_TOKEN_INVALIED: 7
    };
    exports.ESERVER_LOGIN_ERROR = {
        IM_E_LOGING_RESULT_TIMEOUT: -100,
        IM_E_LOGING_RESULT_SERVERNOTALLOW: -2,
        IM_E_LOGING_RESULT_INTERNAL_ERROR: -1,
        IM_E_LOGING_RESULT_SUCCESS: 0,
        IM_E_LOGING_RESULT_FAILED: 1,
        IM_E_LOGING_RESULT_PASSWORD_ERROR: 2,
        IM_E_LOGING_RESULT_ACCOUNT_NOT_EXIST: 3,
        IM_E_LOGING_RESULT_ALREADY_LOGIN: 4,
        IM_E_LOGING_RESULT_ACCOUNT_LOCKED: 5,
        IM_E_LOGING_RESULT_NEED_NEW_VERSION: 6,
        IM_E_LOGING_RESULT_NOT_ACTIVE: 7,
        IM_E_LOGING_RESULT_ACCOUNT_SUSPEND: 8,
        IM_E_LOGING_RESULT_ACCOUNT_EXPIRE: 9,
        IM_E_LOGING_RESULT_DECRYPT_FAILED: 10,
        IM_E_LOGING_RESULT_CERT_DOWNLOAD_FAILED: 11,
        IM_E_LOGING_RESULT_CERT_VALIDATE_FAILED: 12,
        IM_E_LOGING_RESULT_DNS_ERROR: 13,
        IM_E_LOGING_RESULT_SYSTEM_ERROR: 14,
        IM_E_LOGING_RESULT_TICKET_EXPIRE: 15,
        IM_E_LOGING_RESULT_TICKET_NOT_EXIST: 16,
        IM_E_LOGING_RESULT_TICKET_SUSPEND: 17,
        IM_E_LOGING_RESULT_TICKET_ERROR: 18,
        IM_E_LOGING_RESULT_TICKET_FLUID_EXCEED: 19,
        IM_E_LOGING_RESULT_TICKET_FLUID_ERROR: 20,
        IM_E_LOGING_RESULT_TICKET_REDIRECT_ERROR: 21
    };
    exports.EC_SDK_ERROR = {
        CONNECTION_RESET: function () {
            return { result: false, info: { cmdId: undefined, errorCode: 32505856, errorInfo: " The service connection has been reset. Please refresh." } };
        },
        OBJECT_NOT_EXISTS: function (name) {
            return { result: false, info: { cmdId: undefined, errorCode: 32505857, errorInfo: name + " object does not exists" } };
        },
        LOGIN_STATUS_ERROR: function () {
            return { result: false, info: { cmdId: undefined, errorCode: 32505858, errorInfo: "login status error, please login first" } };
        },
        ALREADY_IN_CONF: function () {
            return { result: false, info: { cmdId: undefined, errorCode: 32505859, errorInfo: "already in conference or call" } };
        },
        PARAM_TYPE_ERROR: function (name) {
            return { result: false, info: { cmdId: undefined, errorCode: 32505860, errorInfo: "param " + name + " type error" } };
        },
        PARAM_RANGE_ERROR: function (name, minValue, maxValue) {
            return { result: false, info: { cmdId: undefined, errorCode: 32505861, errorInfo: name + " less than " + minValue + " or bigger than " + maxValue } };
        },
        CONF_PARAM_INVALID_ERROR: function (name) {
            return { result: false, info: { cmdId: 300000000, errorCode: 67108866, errorInfo: "[TSDK_E_CONF_ERR_PARAM_ERROR]:parameter " + name + " is invalid" } };
        },
        EADDR_PARAM_INVALID_ERROR: function (name) {
            return { result: false, info: { cmdId: 600000000, errorCode: 100663298, errorInfo: "[TSDK_E_EADDR_ERR_PARAM_ERROR]:parameter " + name + " is invalid." } };
        },
        IM_PARAM_INVALID_ERROR: function (name) {
            return { result: false, info: { cmdId: 500000000, errorCode: 117440514, errorInfo: "[TSDK_E_IM_ERR_PARAM_ERROR]:parameter " + name + " is invalid." } };
        },
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(23);
var hide = __webpack_require__(14);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(20);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(53)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = (function () {
        function Logger() {
        }
        Logger.getCurrentTime = function () {
            var date = new Date();
            var separator1 = "-";
            var separator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var currentDate;
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 1 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            currentDate = date.getFullYear() + separator1 + month + separator1 + strDate + " " + date.getHours() + separator2 + date.getMinutes() + separator2 + date.getSeconds();
            return "[" + currentDate + "]";
        };
        Logger.error = function (moduleName, args) {
            console.error(this.getCurrentTime() + "[" + moduleName + "]" + "[error]", args);
        };
        Logger.warn = function (moduleName, args) {
            console.warn(this.getCurrentTime() + "[" + moduleName + "]" + "[warn]", args);
        };
        Logger.info = function (moduleName, args) {
            console.info(this.getCurrentTime() + "[" + moduleName + "]" + "[info]", args);
        };
        Logger.debug = function (moduleName, args) {
            console.debug(this.getCurrentTime() + "[" + moduleName + "]" + "[debug]", args);
        };
        Logger.Instance = new Logger();
        return Logger;
    }());
    exports.default = Logger;
    exports.isInteger = function (obj) {
        return typeof obj === 'number' && obj % 1 === 0;
    };
    exports.isNumber = function (obj) {
        return typeof obj === 'number';
    };
    exports.formatDateYYYYMMDDHHMM = function (time, separator) {
        if (separator === void 0) { separator = "/"; }
        var date = new Date(time * 1.0);
        var year = date.getFullYear();
        var month = exports.formatNum(date.getMonth() + 1);
        var day = exports.formatNum(date.getDate());
        var hour = exports.formatNum(date.getHours());
        var minute = exports.formatNum(date.getMinutes());
        return {
            date: year + separator + month + separator + day,
            time: hour + ":" + minute
        };
    };
    exports.formatDate = function (time) {
        var date = new Date(parseInt(time) * 1000);
        var year = date.getFullYear();
        var month = exports.formatNum(date.getMonth() + 1);
        var day = exports.formatNum(date.getDate());
        var hour = exports.formatNum(date.getHours());
        var minute = exports.formatNum(date.getMinutes());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    };
    exports.isString = function (param) {
        if (typeof param === 'string') {
            return true;
        }
        else {
            return false;
        }
    };
    exports.isBinaryNumber = function (param) {
        return (typeof param === 'number' && (param === 0 || param === 1));
    };
    exports.isUndefined = function (param) {
        return param == undefined || param == null || param == NaN;
    };
    exports.isNull = function (param) {
        return param === "";
    };
    exports.isArray = function (param) {
        return (param instanceof Array);
    };
    exports.isBoolean = function (param) {
        return (typeof param === 'boolean');
    };
    exports.isFunction = function (param) {
        return (typeof param === 'function');
    };
    exports.UTCTimeStr = function (time) {
        var year = time.getUTCFullYear();
        var month = time.getUTCMonth();
        var date = time.getUTCDate();
        var hour = time.getUTCHours();
        var minute = time.getUTCMinutes();
        var utcTime = year + "-" + month + "-" + date + " " + hour + ":" + minute;
        return utcTime;
    };
    exports.formatNum = function (num, pow) {
        if (pow === void 0) { pow = 2; }
        var temp = Math.pow(10, pow);
        var tempStr = num + temp + "";
        return tempStr.substring(1);
    };
    function replaceAll(s1, s2, s3) {
        var reg = new RegExp(s2, "gm");
        return s1.replace(reg, s3);
    }
    exports.hidePhone = function (phone) {
        var phoneS;
        if (phone.length >= 8) {
            phoneS = replaceAll(phone, "(.\\d{2})\\d{1,4}(\\d{4})", "$1****$2");
        }
        else {
            phoneS = replaceAll(phone, "(.\\d{1})\\d{0,4}(\\d{1})", "$1****$2");
        }
        return phoneS;
    };
    exports.hideName = function (name) {
        var reg = /(.{2}).+/g;
        var nameS;
        if (name.length >= 2) {
            nameS = name.replace(reg, "$1****");
        }
        else {
            nameS = name.replace(name, "******");
        }
        return nameS;
    };
    exports.hideEmail = function (email) {
        var reg = /(.{0,1}).+(.{1}@.+)/g;
        var emailS = email.replace(reg, "$1****$2");
        return emailS;
    };
    exports.hidePassword = function (password) {
        var passwordS = password.replace(password, "******");
        return passwordS;
    };
    exports.hideIPAddress = function (IPAddress) {
        var pattern = /(\d+\.\d+\.\d+\.)\d+/;
        var IPAddressS = IPAddress.replace(pattern, '$1\*');
        return IPAddressS;
    };
    var emailArr = ["email"];
    var nameArr = ["account", "requesterAccount", "responderAccount", "ownerAccount", "updateMemberAccount", "staffAccount", "signature", "birthday", "sender", "origin", "target", "name", "groupName", "groupNameEn", "originName", "peerDisplayName", "codecName", "localAddr", "remoteAddr", "codecName", "subject", "scheduserAccount", "scheduserName", "displayName", "accountId", "userName", "shortUserName", "shortConfName", "reviciverNumber", "senderNumber", "senderDisplayName", "chatMsg", "documentName", "wbDelDisplayName", "sharingDisplayName", "departmentName", "iconId", "requesterName", "responderName", "manifesto", "updateMemberName", "terminal", "hostKey", "shortConfName", "shortUserName", "userName", "userUri"];
    var passwordArr = ["password", "token", "securityTunnelInfo", "umServerLoginToken", "content", "chairmanPwd", "guestPwd", "contactInfo", "hostKey", "cryptKey", "userInfoList", "umServerLoginToken", "confName", "cryptKey"];
    var phoneArr = ["number", "peerNumber", "accessNumber", "sms", "participantId"];
    var IPAddressArr = ["lastLoginAddr"];
    var PersonalInfArr = ["atUserList"];
    function replacer(key, value) {
        if (emailArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var email = exports.hideEmail(value);
            return email;
        }
        if (nameArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var name_1 = exports.hideName(value);
            return name_1;
        }
        if (passwordArr.indexOf(key) != -1 && !exports.isNull(value) && (exports.isString(value) || exports.isNumber(value))) {
            var valueStr = value + "";
            var password = exports.hidePassword(valueStr);
            valueStr = "";
            return password;
        }
        if (phoneArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var phone = exports.hidePhone(value);
            return phone;
        }
        if (IPAddressArr.indexOf(key) != -1 && !exports.isNull(value) && exports.isString(value)) {
            var ipAddress = exports.hideIPAddress(value);
            return ipAddress;
        }
        if (PersonalInfArr.indexOf(key) != -1 && !exports.isNull(value)) {
            return "******";
        }
        return value;
    }
    exports.replaceLogInfo = function (dataInfo) {
        var dataInfoEncryption = JSON.stringify(dataInfo, replacer, "   ");
        return dataInfoEncryption;
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(94);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloudEC_CONFIG = {
        INVOKE_MODE: 1
    };
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var has = __webpack_require__(13);
var SRC = __webpack_require__(35)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(23).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(25);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(51);
var createDesc = __webpack_require__(34);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(94);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(11);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(23);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(20);
var IObject = __webpack_require__(50);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var asc = __webpack_require__(86);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(36);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(63);
  var $buffer = __webpack_require__(92);
  var ctx = __webpack_require__(20);
  var anInstance = __webpack_require__(42);
  var propertyDesc = __webpack_require__(34);
  var hide = __webpack_require__(14);
  var redefineAll = __webpack_require__(44);
  var toInteger = __webpack_require__(26);
  var toLength = __webpack_require__(9);
  var toIndex = __webpack_require__(120);
  var toAbsoluteIndex = __webpack_require__(38);
  var toPrimitive = __webpack_require__(24);
  var has = __webpack_require__(13);
  var classof = __webpack_require__(52);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(10);
  var isArrayIter = __webpack_require__(83);
  var create = __webpack_require__(39);
  var getPrototypeOf = __webpack_require__(19);
  var gOPN = __webpack_require__(40).f;
  var getIterFn = __webpack_require__(85);
  var uid = __webpack_require__(35);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(28);
  var createArrayIncludes = __webpack_require__(54);
  var speciesConstructor = __webpack_require__(61);
  var ArrayIterators = __webpack_require__(88);
  var Iterators = __webpack_require__(48);
  var $iterDetect = __webpack_require__(58);
  var setSpecies = __webpack_require__(41);
  var arrayFill = __webpack_require__(87);
  var arrayCopyWithin = __webpack_require__(110);
  var $DP = __webpack_require__(8);
  var $GOPD = __webpack_require__(18);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(115);
var $export = __webpack_require__(0);
var shared = __webpack_require__(53)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(118))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(13);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(337), __webpack_require__(338), __webpack_require__(339), __webpack_require__(6), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkServiceSocket_1, tsdkFFI_1, tsdkManager_1, util_1, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkManagerWrapper = (function () {
        function TsdkManagerWrapper() {
            this.onWebsocketReady = new Function();
            this.onWebsocketClose = new Function();
            this.count = 5;
            if (TsdkManagerWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkManagerWrapper.getInstance() instead of new.");
            }
            TsdkManagerWrapper._instance = this;
        }
        TsdkManagerWrapper.getInstance = function () {
            return TsdkManagerWrapper._instance;
        };
        TsdkManagerWrapper.prototype.build = function (invokeMode, svrAddr, svrPort, ssl, ffiLibraryFunc, ffiCallbackFunc, libraryPath) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var promise;
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkManagerWrapper", "step in TsdkManagerWrapper to build");
                    config_1.CloudEC_CONFIG.INVOKE_MODE = invokeMode;
                    if (invokeMode == 1) {
                        if (TsdkManagerWrapper.tsdkServiceSocket && TsdkManagerWrapper.tsdkServiceSocket.websocket.readyState === 1) {
                            util_1.default.info("TsdkManagerWrapper", "websocket is connecting");
                            return [2];
                        }
                        promise = new Promise(function (resolve, reject) {
                            _this.onWebsocketReady = function () {
                                resolve();
                                util_1.default.info("TsdkManagerWrapper", "The tsdkServiceSocket websocket is ready!");
                                TsdkManagerWrapper.serviceSocketState = 1;
                            };
                            _this.onWebsocketClose = function () {
                                resolve();
                                util_1.default.info("TsdkManagerWrapper", "The tsdkServiceSocket websocket is close!");
                                TsdkManagerWrapper.serviceSocketState = 0;
                            };
                        });
                        TsdkManagerWrapper.tsdkServiceSocket = new tsdkServiceSocket_1.default({
                            svrAddr: svrAddr,
                            svrPort: svrPort,
                            ready: this.onWebsocketReady,
                            close: this.onWebsocketClose,
                            ssl: ssl,
                        });
                        TsdkManagerWrapper.tsdkManager = new tsdkManager_1.default({
                            socket: TsdkManagerWrapper.tsdkServiceSocket
                        });
                        return [2, promise];
                    }
                    else {
                        if (TsdkManagerWrapper.tsdkFFI) {
                            util_1.default.info("TsdkManagerWrapper", "ffi is loaded");
                            return [2];
                        }
                        try {
                            TsdkManagerWrapper.tsdkFFI = new tsdkFFI_1.default({
                                ffiLibraryFunc: ffiLibraryFunc,
                                ffiCallbackFunc: ffiCallbackFunc,
                                libraryPath: libraryPath,
                            });
                        }
                        catch (error) {
                            util_1.default.info("TsdkManagerWrapper", "new TsdkFFI failed.");
                            throw error;
                        }
                        TsdkManagerWrapper.tsdkManager = new tsdkManager_1.default({
                            ffi: TsdkManagerWrapper.tsdkFFI
                        });
                    }
                    return [2];
                });
            });
        };
        TsdkManagerWrapper.prototype.uniSockClose = function () {
            TsdkManagerWrapper._instance.count = 0;
            TsdkManagerWrapper.tsdkServiceSocket.websocket.close();
        };
        TsdkManagerWrapper.prototype.setConfigParam = function (configParam) {
            util_1.default.info("TsdkManagerWrapper", "setConfigParam");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkManagerWrapper.tsdkManager.setConfigParam(configParam, callback);
            return promise;
        };
        ;
        TsdkManagerWrapper.prototype.init = function (appInfo) {
            util_1.default.info("TsdkManagerWrapper", "init");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkManagerWrapper.tsdkManager.init(appInfo, callback);
            return promise;
        };
        ;
        TsdkManagerWrapper.prototype.uninit = function () {
            util_1.default.info("TsdkManagerWrapper", "uninit");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkManagerWrapper.tsdkManager.uninit(callback);
            return promise;
        };
        ;
        TsdkManagerWrapper.prototype.getVersion = function () {
            util_1.default.info("TsdkManagerWrapper", "getVersion");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkManagerWrapper.tsdkManager.getVersion(callback);
            return promise;
        };
        ;
        TsdkManagerWrapper._instance = new TsdkManagerWrapper();
        TsdkManagerWrapper.serviceSocketState = 0;
        return TsdkManagerWrapper;
    }());
    exports.default = TsdkManagerWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(96);
var enumBugKeys = __webpack_require__(70);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(70);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(71).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(96);
var hiddenKeys = __webpack_require__(70).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(108);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(9);
var getIterFn = __webpack_require__(85);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observer = (function () {
        function Observer() {
        }
        Observer.subscribe = function (topic, func) {
            if (!Observer.topics[topic]) {
                Observer.topics[topic] = [];
            }
            var token = ++Observer.subUid;
            Observer.topics[topic].push({ token: token, func: func });
            util_1.default.info("observer", 'subscribe topic = ' + JSON.stringify(topic) + ', subUid = ' + token);
            return token;
        };
        Observer.unsubscribe = function (token) {
            for (var m in Observer.topics) {
                if (Observer.topics[m]) {
                    for (var i = 0; i < Observer.topics[m].length; ++i) {
                        if (Observer.topics[m][i].token === token) {
                            Observer.topics[m].splice(i, 1);
                            return true;
                        }
                    }
                }
            }
            return false;
        };
        Observer.unsubsribleAll = function () {
            for (var m in Observer.topics) {
                if (Observer.topics[m]) {
                    for (var i = 0; i < Observer.topics[m].length; ++i) {
                        Observer.topics[m].splice(i, 1);
                    }
                }
            }
        };
        Observer.publish = function (topic) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!Observer.topics[topic]) {
                return false;
            }
            for (var i = 0; i < Observer.topics[topic].length; i++) {
                (_a = Observer.topics[topic][i]).func.apply(_a, args);
            }
            return true;
            var _a;
        };
        Observer.topics = {};
        Observer.subUid = -1;
        return Observer;
    }());
    exports.default = Observer;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(25);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(73);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(21);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(14);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(3);
var defined = __webpack_require__(25);
var wks = __webpack_require__(5);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(11);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var redefineAll = __webpack_require__(44);
var meta = __webpack_require__(31);
var forOf = __webpack_require__(43);
var anInstance = __webpack_require__(42);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(58);
var setToStringTag = __webpack_require__(46);
var inheritIfRequired = __webpack_require__(74);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var uid = __webpack_require__(35);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(36) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var ctx = __webpack_require__(20);
var forOf = __webpack_require__(43);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(23);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(95);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(53)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(20)(Function.call, __webpack_require__(18).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(72).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(25);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(14);
var has = __webpack_require__(13);
var Iterators = __webpack_require__(48);
var $iterCreate = __webpack_require__(80);
var setToStringTag = __webpack_require__(46);
var getPrototypeOf = __webpack_require__(19);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(46);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(57);
var defined = __webpack_require__(25);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(48);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(34);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(52);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(48);
module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(221);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(32);
var step = __webpack_require__(111);
var Iterators = __webpack_require__(48);
var toIObject = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(79)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(101);
var html = __webpack_require__(71);
var cel = __webpack_require__(67);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(21)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(89).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(21)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(11);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(36);
var $typed = __webpack_require__(63);
var hide = __webpack_require__(14);
var redefineAll = __webpack_require__(44);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(42);
var toInteger = __webpack_require__(26);
var toLength = __webpack_require__(9);
var toIndex = __webpack_require__(120);
var gOPN = __webpack_require__(40).f;
var dP = __webpack_require__(8).f;
var arrayFill = __webpack_require__(87);
var setToStringTag = __webpack_require__(46);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(17);
var arrayIndexOf = __webpack_require__(54)(false);
var IE_PROTO = __webpack_require__(69)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17);
var gOPN = __webpack_require__(40).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(51);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(50);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(11);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(101);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(47).trim;
var ws = __webpack_require__(73);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(47).trim;

module.exports = 1 / $parseFloat(__webpack_require__(73) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(21);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(76);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(11);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(50);
var toLength = __webpack_require__(9);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(59)
});


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(91);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(49);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(62)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(8).f;
var create = __webpack_require__(39);
var redefineAll = __webpack_require__(44);
var ctx = __webpack_require__(20);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var $iterDefine = __webpack_require__(79);
var step = __webpack_require__(111);
var setSpecies = __webpack_require__(41);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(31).fastKey;
var validate = __webpack_require__(49);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(116);
var validate = __webpack_require__(49);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(62)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(28)(0);
var redefine = __webpack_require__(15);
var meta = __webpack_require__(31);
var assign = __webpack_require__(99);
var weak = __webpack_require__(119);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(49);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(62)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(44);
var getWeak = __webpack_require__(31).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var createArrayMethod = __webpack_require__(28);
var $has = __webpack_require__(13);
var validate = __webpack_require__(49);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(26);
var toLength = __webpack_require__(9);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(40);
var gOPS = __webpack_require__(55);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(56);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(9);
var ctx = __webpack_require__(20);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(9);
var repeat = __webpack_require__(75);
var defined = __webpack_require__(25);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(37);
var toIObject = __webpack_require__(17);
var isEnum = __webpack_require__(51).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(52);
var from = __webpack_require__(126);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(43);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
module.exports = __webpack_require__(331);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(130);

__webpack_require__(327);

__webpack_require__(328);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(88);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(112);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(115);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
module.exports = __webpack_require__(23);


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(15);
var META = __webpack_require__(31).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(53);
var setToStringTag = __webpack_require__(46);
var uid = __webpack_require__(35);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(95);
var wksDefine = __webpack_require__(68);
var enumKeys = __webpack_require__(132);
var isArray = __webpack_require__(56);
var anObject = __webpack_require__(1);
var toIObject = __webpack_require__(17);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(34);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(98);
var $GOPD = __webpack_require__(18);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(51).f = $propertyIsEnumerable;
  __webpack_require__(55).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(51);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(97) });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(17);
var $getOwnPropertyDescriptor = __webpack_require__(18).f;

__webpack_require__(27)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(10);
var $getPrototypeOf = __webpack_require__(19);

__webpack_require__(27)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(37);

__webpack_require__(27)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(27)('getOwnPropertyNames', function () {
  return __webpack_require__(98).f;
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(31).onFreeze;

__webpack_require__(27)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(31).onFreeze;

__webpack_require__(27)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(31).onFreeze;

__webpack_require__(27)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(27)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(99) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(148) });


/***/ }),
/* 148 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(52);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(15)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(100) });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(19);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(8).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(102);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(103);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(13);
var cof = __webpack_require__(21);
var inheritIfRequired = __webpack_require__(74);
var toPrimitive = __webpack_require__(24);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(40).f;
var gOPD = __webpack_require__(18).f;
var dP = __webpack_require__(8).f;
var $trim = __webpack_require__(47).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(39)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(15)(global, NUMBER, $Number);
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(26);
var aNumberValue = __webpack_require__(104);
var repeat = __webpack_require__(75);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(104);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(105) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(105);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(103);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(102);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(106);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(76);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(77);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(107) });


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(106) });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(76) });


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(77);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(38);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var toLength = __webpack_require__(9);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(47)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(79)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(81);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(81);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(82)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(75)
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(81);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(82)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(16)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(16)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(16)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(16)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(16)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(16)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(16)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(16)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(16)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(16)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(16)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(16)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(16)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(24);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(210);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(15)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(213));


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(24);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(56) });


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(20);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var call = __webpack_require__(108);
var isArrayIter = __webpack_require__(83);
var toLength = __webpack_require__(9);
var createProperty = __webpack_require__(84);
var getIterFn = __webpack_require__(85);

$export($export.S + $export.F * !__webpack_require__(58)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(84);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(50) != Object || !__webpack_require__(22)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(71);
var cof = __webpack_require__(21);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var toObject = __webpack_require__(10);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(22)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(28)(0);
var STRICT = __webpack_require__(22)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(56);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(28)(1);

$export($export.P + $export.F * !__webpack_require__(22)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(28)(2);

$export($export.P + $export.F * !__webpack_require__(22)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(28)(3);

$export($export.P + $export.F * !__webpack_require__(22)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(28)(4);

$export($export.P + $export.F * !__webpack_require__(22)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(109);

$export($export.P + $export.F * !__webpack_require__(22)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(109);

$export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(54)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(17);
var toInteger = __webpack_require__(26);
var toLength = __webpack_require__(9);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(110) });

__webpack_require__(32)('copyWithin');


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(87) });

__webpack_require__(32)('fill');


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(28)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(28)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('Array');


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(74);
var dP = __webpack_require__(8).f;
var gOPN = __webpack_require__(40).f;
var isRegExp = __webpack_require__(57);
var $flags = __webpack_require__(59);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(15)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(112);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(15)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(60)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(60)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(60)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(60)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(57);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var global = __webpack_require__(2);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(52);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(11);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(89).set;
var microtask = __webpack_require__(90)();
var newPromiseCapabilityModule = __webpack_require__(91);
var perform = __webpack_require__(113);
var promiseResolve = __webpack_require__(114);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(44)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(46)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(23)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(58)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(119);
var validate = __webpack_require__(49);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(62)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(63);
var buffer = __webpack_require__(92);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(61);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(63).ABV, {
  DataView: __webpack_require__(92).DataView
});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(39);
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(100);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(8);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(24);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(18).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(80)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(19);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(18);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(19);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(121) });


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(8);
var gOPD = __webpack_require__(18);
var getPrototypeOf = __webpack_require__(19);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(34);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(72);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(54)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(32)('includes');


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(122);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var aFunction = __webpack_require__(11);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(32)('flatMap');


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(122);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(9);
var toInteger = __webpack_require__(26);
var arraySpeciesCreate = __webpack_require__(86);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(32)('flatten');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(78)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(123);

$export($export.P, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(123);

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(47)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(47)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(25);
var toLength = __webpack_require__(9);
var isRegExp = __webpack_require__(57);
var getFlags = __webpack_require__(59);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(80)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68)('asyncIterator');


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68)('observable');


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(121);
var toIObject = __webpack_require__(17);
var gOPD = __webpack_require__(18);
var createProperty = __webpack_require__(84);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(124)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(124)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(11);
var $defineProperty = __webpack_require__(8);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var aFunction = __webpack_require__(11);
var $defineProperty = __webpack_require__(8);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(19);
var getOwnPropertyDescriptor = __webpack_require__(18).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(19);
var getOwnPropertyDescriptor = __webpack_require__(18).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(125)('Map') });


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(125)('Set') });


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(65)('Map');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(65)('Set');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(65)('WeakMap');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(65)('WeakSet');


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(66)('Map');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(66)('Set');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(66)('WeakMap');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(66)('WeakSet');


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(21);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(127);
var fround = __webpack_require__(107);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(127) });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(23);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(114);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(91);
var perform = __webpack_require__(113);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(19);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(117);
var from = __webpack_require__(126);
var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(19);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(19);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(30);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(11);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(90)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(21)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(23);
var microtask = __webpack_require__(90)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(11);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(42);
var redefineAll = __webpack_require__(44);
var hide = __webpack_require__(14);
var forOf = __webpack_require__(43);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(41)('Observable');


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var navigator = global.navigator;
var slice = [].slice;
var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(89);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(88);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(15);
var global = __webpack_require__(2);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(48);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(329);
module.exports = __webpack_require__(23).RegExp.escape;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(330)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_terminalSDK__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_terminalSDK___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__logic_terminalSDK__);
/* eslint-disable */

window.terminalSDK = new __WEBPACK_IMPORTED_MODULE_0__logic_terminalSDK___default.a();
/* eslint-enable */

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(333), __webpack_require__(6), __webpack_require__(356), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkClient_1, util_1, tsdkServiceDaemonSocket_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TerminalSDK = (function () {
        function TerminalSDK() {
            this.serviceDaemonFirst = 1;
            this.serviceSocketStatus = 0;
        }
        TerminalSDK.prototype.onDaemonReady = function () {
            util_1.default.info("TerminalSDK", "TSDK Service Daemon is Ready");
        };
        TerminalSDK.prototype.onDaemonClose = function () {
            util_1.default.error("TerminalSDK", "TSDK Service Daemon is Closed,please restart it");
        };
        TerminalSDK.prototype.createTsdkClient = function (tsdkJsInitParam, listeners, callbacks) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkClient;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(tsdkJsInitParam.invokeMode == 1)) return [3, 2];
                            return [4, this.createServiceDaemon(tsdkJsInitParam, listeners)];
                        case 1:
                            tsdkClient = _a.sent();
                            return [3, 2];
                        case 2:
                            callbacks(tsdkClient);
                            return [2];
                    }
                });
            });
        };
        TerminalSDK.prototype.createServiceDaemon = function (tsdkJsInitParam, listeners) {
            var _this = this;
            var tsdkServiceDaemon;
            var tsdkClient;
            tsdkServiceDaemon = new tsdkServiceDaemonSocket_1.default({ ready: this.onDaemonReady, close: this.onDaemonClose,
                svrAddr: tsdkJsInitParam.svrAddr, ssl: tsdkJsInitParam.ssl });
            var callbacks = {
                OnEvtServiceStartUp: {},
                OnEvtServiceShutDown: {},
                OnEvtServiceRecover: {}
            };
            var promise = new Promise(function (resolve, reject) {
                callbacks.OnEvtServiceStartUp = function () {
                    util_1.default.info("TerminalSDK", "TSDK Service StartUp");
                    if (_this.serviceDaemonFirst == 1 || tsdkManagerWrapper_1.default.serviceSocketState == 0) {
                        tsdkClient = _this.createService(tsdkJsInitParam, listeners);
                        _this.serviceDaemonFirst = 0;
                    }
                    else {
                        util_1.default.info("TerminalSDK", "TSDK Service websocket is connecting");
                    }
                    resolve(tsdkClient);
                },
                    callbacks.OnEvtServiceShutDown = function () {
                        util_1.default.error("TerminalSDK", "TSDK Service shutdown,please restart it");
                    },
                    callbacks.OnEvtServiceRecover = function () {
                        util_1.default.info("TerminalSDK", "TSDK Service recover");
                        if (_this.serviceDaemonFirst == 1 || tsdkManagerWrapper_1.default.serviceSocketState == 0) {
                            tsdkClient = _this.createService(tsdkJsInitParam, listeners);
                        }
                        else {
                            _this.serviceSocketStatus = 1;
                            util_1.default.info("TerminalSDK", "TSDK Service websocket is connecting");
                        }
                        resolve(tsdkClient);
                    };
            });
            tsdkServiceDaemon.setSeviceDaemonCallBack(callbacks);
            return promise;
        };
        TerminalSDK.prototype.getServiceSocketStatus = function () {
            return this.serviceSocketStatus;
        };
        TerminalSDK.prototype.createService = function (tsdkJsInitParam, listeners) {
            var tsdkClient;
            try {
                tsdkClient = new tsdkClient_1.default(tsdkJsInitParam);
            }
            catch (error) {
                util_1.default.info("TerminalSDK", "new TsdkClient is failed. err info : " + error.msg);
                return null;
            }
            if (typeof (listeners) === "undefined") {
                return tsdkClient;
            }
            if (typeof (listeners.OnEvtAuthSuccess) != "undefined") {
                tsdkClient.on('OnEvtAuthSuccess', listeners.OnEvtAuthSuccess);
            }
            if (typeof (listeners.OnEvtAuthFailed) != "undefined") {
                tsdkClient.on('OnEvtAuthFailed', listeners.OnEvtAuthFailed);
            }
            if (typeof (listeners.OnEvtAuthRefreshFailed) != "undefined") {
                tsdkClient.on('OnEvtAuthRefreshFailed', listeners.OnEvtAuthRefreshFailed);
            }
            if (typeof (listeners.OnEvtLoginSuccess) != "undefined") {
                tsdkClient.on('OnEvtLoginSuccess', listeners.OnEvtLoginSuccess);
            }
            if (typeof (listeners.OnEvtLoginFailed) != "undefined") {
                tsdkClient.on('OnEvtLoginFailed', listeners.OnEvtLoginFailed);
            }
            if (typeof (listeners.OnEvtLogoutSuccess) != "undefined") {
                tsdkClient.on('OnEvtLogoutSuccess', listeners.OnEvtLogoutSuccess);
            }
            if (typeof (listeners.OnEvtLogoutFailed) != "undefined") {
                tsdkClient.on('OnEvtLogoutFailed', listeners.OnEvtLogoutFailed);
            }
            if (typeof (listeners.OnEvtForceLogout) != "undefined") {
                tsdkClient.on('OnEvtForceLogout', listeners.OnEvtForceLogout);
            }
            if (typeof (listeners.OnEvtVoipAccountStatus) != "undefined") {
                tsdkClient.on('OnEvtVoipAccountStatus', listeners.OnEvtVoipAccountStatus);
            }
            if (typeof (listeners.OnEvtImAccountStatus) != "undefined") {
                tsdkClient.on('OnEvtImAccountStatus', listeners.OnEvtImAccountStatus);
            }
            if (typeof (listeners.OnEvtFirewallDetectFailed) != "undefined") {
                tsdkClient.on('OnEvtFirewallDetectFailed', listeners.OnEvtFirewallDetectFailed);
            }
            if (typeof (listeners.OnEvtBuildStgTunnelFailed) != "undefined") {
                tsdkClient.on('OnEvtBuildStgTunnelFailed', listeners.OnEvtBuildStgTunnelFailed);
            }
            if (typeof (listeners.OnEvtSecurityTunnelInfoInd) != "undefined") {
                tsdkClient.on('OnEvtSecurityTunnelInfoInd', listeners.OnEvtSecurityTunnelInfoInd);
            }
            if (typeof (listeners.OnEvtGetTempUserResult) != "undefined") {
                tsdkClient.on('OnEvtGetTempUserResult', listeners.OnEvtGetTempUserResult);
            }
            if (typeof (listeners.OnEvtModifyPasswordResult) != "undefined") {
                tsdkClient.on('OnEvtModifyPasswordResult', listeners.OnEvtModifyPasswordResult);
            }
            if (typeof (listeners.OnEvtLoginResumingInd) != "undefined") {
                tsdkClient.on('OnEvtLoginResumingInd', listeners.OnEvtLoginResumingInd);
            }
            if (typeof (listeners.OnEvtLoginResumeResult) != "undefined") {
                tsdkClient.on('OnEvtLoginResumeResult', listeners.OnEvtLoginResumeResult);
            }
            if (typeof (listeners.OnEvtCallStartResult) != "undefined") {
                tsdkClient.on('OnEvtCallStartResult', listeners.OnEvtCallStartResult);
            }
            if (typeof (listeners.OnEvtCallIncoming) != "undefined") {
                tsdkClient.on('OnEvtCallIncoming', listeners.OnEvtCallIncoming);
            }
            if (typeof (listeners.OnEvtCallOutgoing) != "undefined") {
                tsdkClient.on('OnEvtCallOutgoing', listeners.OnEvtCallOutgoing);
            }
            if (typeof (listeners.OnEvtCallRingback) != "undefined") {
                tsdkClient.on('OnEvtCallRingback', listeners.OnEvtCallRingback);
            }
            if (typeof (listeners.OnEvtCallRtpCreated) != "undefined") {
                tsdkClient.on('OnEvtCallRtpCreated', listeners.OnEvtCallRtpCreated);
            }
            if (typeof (listeners.OnEvtCallConnected) != "undefined") {
                tsdkClient.on('OnEvtCallConnected', listeners.OnEvtCallConnected);
            }
            if (typeof (listeners.OnEvtCallEnded) != "undefined") {
                tsdkClient.on('OnEvtCallEnded', listeners.OnEvtCallEnded);
            }
            if (typeof (listeners.OnEvtCallDestroy) != "undefined") {
                tsdkClient.on('OnEvtCallDestroy', listeners.OnEvtCallDestroy);
            }
            if (typeof (listeners.OnEvtOpenVideoReq) != "undefined") {
                tsdkClient.on('OnEvtOpenVideoReq', listeners.OnEvtOpenVideoReq);
            }
            if (typeof (listeners.OnEvtRefuseOpenVideoInd) != "undefined") {
                tsdkClient.on('OnEvtRefuseOpenVideoInd', listeners.OnEvtRefuseOpenVideoInd);
            }
            if (typeof (listeners.OnEvtCloseVideoInd) != "undefined") {
                tsdkClient.on('OnEvtCloseVideoInd', listeners.OnEvtCloseVideoInd);
            }
            if (typeof (listeners.OnEvtOpenVideoInd) != "undefined") {
                tsdkClient.on('OnEvtOpenVideoInd', listeners.OnEvtOpenVideoInd);
            }
            if (typeof (listeners.OnEvtRefreshViewInd) != "undefined") {
                tsdkClient.on('OnEvtRefreshViewInd', listeners.OnEvtRefreshViewInd);
            }
            if (typeof (listeners.OnEvtCallRouteChange) != "undefined") {
                tsdkClient.on('OnEvtCallRouteChange', listeners.OnEvtCallRouteChange);
            }
            if (typeof (listeners.OnEvtPlayMediaEnd) != "undefined") {
                tsdkClient.on('OnEvtPlayMediaEnd', listeners.OnEvtPlayMediaEnd);
            }
            if (typeof (listeners.OnEvtSessionModified) != "undefined") {
                tsdkClient.on('OnEvtSessionModified', listeners.OnEvtSessionModified);
            }
            if (typeof (listeners.OnEvtSessionCodec) != "undefined") {
                tsdkClient.on('OnEvtSessionCodec', listeners.OnEvtSessionCodec);
            }
            if (typeof (listeners.OnEvtHoldSuccess) != "undefined") {
                tsdkClient.on('OnEvtHoldSuccess', listeners.OnEvtHoldSuccess);
            }
            if (typeof (listeners.OnEvtHoldFailed) != "undefined") {
                tsdkClient.on('OnEvtHoldFailed', listeners.OnEvtHoldFailed);
            }
            if (typeof (listeners.OnEvtUnholdSuccess) != "undefined") {
                tsdkClient.on('OnEvtUnholdSuccess', listeners.OnEvtUnholdSuccess);
            }
            if (typeof (listeners.OnEvtUnholdFailed) != "undefined") {
                tsdkClient.on('OnEvtUnholdFailed', listeners.OnEvtUnholdFailed);
            }
            if (typeof (listeners.OnEvtEndcallFailed) != "undefined") {
                tsdkClient.on('OnEvtEndcallFailed', listeners.OnEvtEndcallFailed);
            }
            if (typeof (listeners.OnEvtDivertFailed) != "undefined") {
                tsdkClient.on('OnEvtDivertFailed', listeners.OnEvtDivertFailed);
            }
            if (typeof (listeners.OnEvtBldTransferSuccess) != "undefined") {
                tsdkClient.on('OnEvtBldTransferSuccess', listeners.OnEvtBldTransferSuccess);
            }
            if (typeof (listeners.OnEvtBldTransferFailed) != "undefined") {
                tsdkClient.on('OnEvtBldTransferFailed', listeners.OnEvtBldTransferFailed);
            }
            if (typeof (listeners.OnEvtSetIptServiceResult) != "undefined") {
                tsdkClient.on('OnEvtSetIptServiceResult', listeners.OnEvtSetIptServiceResult);
            }
            if (typeof (listeners.OnEvtIptServiceInfo) != "undefined") {
                tsdkClient.on('OnEvtIptServiceInfo', listeners.OnEvtIptServiceInfo);
            }
            if (typeof (listeners.OnEvtStatisticInfo) != "undefined") {
                tsdkClient.on('OnEvtStatisticInfo', listeners.OnEvtStatisticInfo);
            }
            if (typeof (listeners.OnEvtMediaErrorInfo) != "undefined") {
                tsdkClient.on('OnEvtMediaErrorInfo', listeners.OnEvtMediaErrorInfo);
            }
            if (typeof (listeners.OnEvtNoStream) != "undefined") {
                tsdkClient.on('OnEvtNoStream', listeners.OnEvtNoStream);
            }
            if (typeof (listeners.OnEvtBookConfResult) != "undefined") {
                tsdkClient.on('OnEvtBookConfResult', listeners.OnEvtBookConfResult);
            }
            if (typeof (listeners.OnEvtQueryConfListResult) != "undefined") {
                tsdkClient.on('OnEvtQueryConfListResult', listeners.OnEvtQueryConfListResult);
            }
            if (typeof (listeners.OnEvtQueryConfDetailResult) != "undefined") {
                tsdkClient.on('OnEvtQueryConfDetailResult', listeners.OnEvtQueryConfDetailResult);
            }
            if (typeof (listeners.OnEvtJoinConfResult) != "undefined") {
                tsdkClient.on('OnEvtJoinConfResult', listeners.OnEvtJoinConfResult);
            }
            if (typeof (listeners.OnEvtGetDataconfParamResult) != "undefined") {
                tsdkClient.on('OnEvtGetDataconfParamResult', listeners.OnEvtGetDataconfParamResult);
            }
            if (typeof (listeners.OnEvtConfctrlOperationResult) != "undefined") {
                tsdkClient.on('OnEvtConfctrlOperationResult', listeners.OnEvtConfctrlOperationResult);
            }
            if (typeof (listeners.OnEvtInfoAndStatusUpdate) != "undefined") {
                tsdkClient.on('OnEvtInfoAndStatusUpdate', listeners.OnEvtInfoAndStatusUpdate);
            }
            if (typeof (listeners.OnEvtSpeakerInd) != "undefined") {
                tsdkClient.on('OnEvtSpeakerInd', listeners.OnEvtSpeakerInd);
            }
            if (typeof (listeners.OnEvtRequestConfRightFailed) != "undefined") {
                tsdkClient.on('OnEvtRequestConfRightFailed', listeners.OnEvtRequestConfRightFailed);
            }
            if (typeof (listeners.OnEvtConfIncomingInd) != "undefined") {
                tsdkClient.on('OnEvtConfIncomingInd', listeners.OnEvtConfIncomingInd);
            }
            if (typeof (listeners.OnEvtConfEndInd) != "undefined") {
                tsdkClient.on('OnEvtConfEndInd', listeners.OnEvtConfEndInd);
            }
            if (typeof (listeners.OnEvtJoinDataConfResult) != "undefined") {
                tsdkClient.on('OnEvtJoinDataConfResult', listeners.OnEvtJoinDataConfResult);
            }
            if (typeof (listeners.OnEvtAsScreenDataUpdate) != "undefined") {
                tsdkClient.on('OnEvtAsScreenDataUpdate', listeners.OnEvtAsScreenDataUpdate);
            }
            if (typeof (listeners.OnEvtAsOwnerChange) != "undefined") {
                tsdkClient.on('OnEvtAsOwnerChange', listeners.OnEvtAsOwnerChange);
            }
            if (typeof (listeners.OnEvtAsStateChange) != "undefined") {
                tsdkClient.on('OnEvtAsStateChange', listeners.OnEvtAsStateChange);
            }
            if (typeof (listeners.OnEvtRecvChatMsg) != "undefined") {
                tsdkClient.on('OnEvtRecvChatMsg', listeners.OnEvtRecvChatMsg);
            }
            if (typeof (listeners.OnEvtPresenterGiveInd) != "undefined") {
                tsdkClient.on('OnEvtPresenterGiveInd', listeners.OnEvtPresenterGiveInd);
            }
            if (typeof (listeners.OnEvtTransToConfResult) != "undefined") {
                tsdkClient.on('OnEvtTransToConfResult', listeners.OnEvtTransToConfResult);
            }
            if (typeof (listeners.OnEvtDsDocLoadStart) != "undefined") {
                tsdkClient.on('OnEvtDsDocLoadStart', listeners.OnEvtDsDocLoadStart);
            }
            if (typeof (listeners.OnEvtDsDocNew) != "undefined") {
                tsdkClient.on('OnEvtDsDocNew', listeners.OnEvtDsDocNew);
            }
            if (typeof (listeners.OnEvtDsDocPageLoaded) != "undefined") {
                tsdkClient.on('OnEvtDsDocPageLoaded', listeners.OnEvtDsDocPageLoaded);
            }
            if (typeof (listeners.OnEvtDsDocPageNew) != "undefined") {
                tsdkClient.on('OnEvtDsDocPageNew', listeners.OnEvtDsDocPageNew);
            }
            if (typeof (listeners.OnEvtDsDocLoadFinish) != "undefined") {
                tsdkClient.on('OnEvtDsDocLoadFinish', listeners.OnEvtDsDocLoadFinish);
            }
            if (typeof (listeners.OnEvtDsDocPageDel) != "undefined") {
                tsdkClient.on('OnEvtDsDocPageDel', listeners.OnEvtDsDocPageDel);
            }
            if (typeof (listeners.OnEvtDsDocDel) != "undefined") {
                tsdkClient.on('OnEvtDsDocDel', listeners.OnEvtDsDocDel);
            }
            if (typeof (listeners.OnEvtDsDocCurrentPage) != "undefined") {
                tsdkClient.on('OnEvtDsDocCurrentPage', listeners.OnEvtDsDocCurrentPage);
            }
            if (typeof (listeners.OnEvtDsDocCurrentPageInd) != "undefined") {
                tsdkClient.on('OnEvtDsDocCurrentPageInd', listeners.OnEvtDsDocCurrentPageInd);
            }
            if (typeof (listeners.OnEvtDsDocDrawDataNotify) != "undefined") {
                tsdkClient.on('OnEvtDsDocDrawDataNotify', listeners.OnEvtDsDocDrawDataNotify);
            }
            if (typeof (listeners.OnEvtDsDocPageDataDownload) != "undefined") {
                tsdkClient.on('OnEvtDsDocPageDataDownload', listeners.OnEvtDsDocPageDataDownload);
            }
            if (typeof (listeners.OnEvtWbDocNew) != "undefined") {
                tsdkClient.on('OnEvtWbDocNew', listeners.OnEvtWbDocNew);
            }
            if (typeof (listeners.OnEvtWbDocDel) != "undefined") {
                tsdkClient.on('OnEvtWbDocDel', listeners.OnEvtWbDocDel);
            }
            if (typeof (listeners.OnEvtWbPageNew) != "undefined") {
                tsdkClient.on('OnEvtWbPageNew', listeners.OnEvtWbPageNew);
            }
            if (typeof (listeners.OnEvtWbPageDel) != "undefined") {
                tsdkClient.on('OnEvtWbPageDel', listeners.OnEvtWbPageDel);
            }
            if (typeof (listeners.OnEvtWbDocCurrentPage) != "undefined") {
                tsdkClient.on('OnEvtWbDocCurrentPage', listeners.OnEvtWbDocCurrentPage);
            }
            if (typeof (listeners.OnEvtWbDocCurrentPageInd) != "undefined") {
                tsdkClient.on('OnEvtWbDocCurrentPageInd', listeners.OnEvtWbDocCurrentPageInd);
            }
            if (typeof (listeners.OnEvtWbDocDrawDataNotify) != "undefined") {
                tsdkClient.on('OnEvtWbDocDrawDataNotify', listeners.OnEvtWbDocDrawDataNotify);
            }
            if (typeof (listeners.OnEvtShareStatusUpdateInd) != "undefined") {
                tsdkClient.on('OnEvtShareStatusUpdateInd', listeners.OnEvtShareStatusUpdateInd);
            }
            if (typeof (listeners.OnEvtAsScreenKeyframe) != "undefined") {
                tsdkClient.on('OnEvtAsScreenKeyframe', listeners.OnEvtAsScreenKeyframe);
            }
            if (typeof (listeners.OnEvtAsScreenFirstKeyframe) != "undefined") {
                tsdkClient.on('OnEvtAsScreenFirstKeyframe', listeners.OnEvtAsScreenFirstKeyframe);
            }
            if (typeof (listeners.OnEvtDataComponentLoadInd) != "undefined") {
                tsdkClient.on('OnEvtDataComponentLoadInd', listeners.OnEvtDataComponentLoadInd);
            }
            if (typeof (listeners.OnEvtConfBaseInfoInd) != "undefined") {
                tsdkClient.on('OnEvtConfBaseInfoInd', listeners.OnEvtConfBaseInfoInd);
            }
            if (typeof (listeners.OnEvtAsPrivilegeChange) != "undefined") {
                tsdkClient.on('OnEvtAsPrivilegeChange', listeners.OnEvtAsPrivilegeChange);
            }
            if (typeof (listeners.OnEvtSvcWatchInfoInd) != "undefined") {
                tsdkClient.on('OnEvtSvcWatchInfoInd', listeners.OnEvtSvcWatchInfoInd);
            }
            if (typeof (listeners.OnEvtConfResumingInd) != "undefined") {
                tsdkClient.on('OnEvtConfResumingInd', listeners.OnEvtConfResumingInd);
            }
            if (typeof (listeners.OnEvtConfResumeResult) != "undefined") {
                tsdkClient.on('OnEvtConfResumeResult', listeners.OnEvtConfResumeResult);
            }
            if (typeof (listeners.OnEvtConfEndResult) != "undefined") {
                tsdkClient.on('OnEvtConfEndResult', listeners.OnEvtConfEndResult);
            }
            if (typeof (listeners.OnEvtConfSetShareOwnerFailed) != "undefined") {
                tsdkClient.on('OnEvtConfSetShareOwnerFailed', listeners.OnEvtConfSetShareOwnerFailed);
            }
            if (typeof (listeners.OnEvtConfStartShareFailed) != "undefined") {
                tsdkClient.on('OnEvtConfStartShareFailed', listeners.OnEvtConfStartShareFailed);
            }
            if (typeof (listeners.OnEvtCtdStartCallResult) != "undefined") {
                tsdkClient.on('OnEvtCtdStartCallResult', listeners.OnEvtCtdStartCallResult);
            }
            if (typeof (listeners.OnEvtCtdEndCallResult) != "undefined") {
                tsdkClient.on('OnEvtCtdEndCallResult', listeners.OnEvtCtdEndCallResult);
            }
            if (typeof (listeners.OnEvtCtdCallStatusNotify) != "undefined") {
                tsdkClient.on('OnEvtCtdCallStatusNotify', listeners.OnEvtCtdCallStatusNotify);
            }
            if (typeof (listeners.OnEvtSearchContactsResult) != "undefined") {
                tsdkClient.on('OnEvtSearchContactsResult', listeners.OnEvtSearchContactsResult);
            }
            if (typeof (listeners.OnEvtSearchDeptResult) != "undefined") {
                tsdkClient.on('OnEvtSearchDeptResult', listeners.OnEvtSearchDeptResult);
            }
            if (typeof (listeners.OnEvtGetIconResult) != "undefined") {
                tsdkClient.on('OnEvtGetIconResult', listeners.OnEvtGetIconResult);
            }
            if (typeof (listeners.OnPluginEvtFrameHwndInfoUpdate) != "undefined") {
                tsdkClient.on('OnPluginEvtFrameHwndInfoUpdate', listeners.OnPluginEvtFrameHwndInfoUpdate);
            }
            if (typeof (listeners.OnPluginEvtWindowFocus) != "undefined") {
                tsdkClient.on('OnPluginEvtWindowFocus', listeners.OnPluginEvtWindowFocus);
            }
            if (typeof (listeners.OnPluginEvtSetWindowSize) != "undefined") {
                tsdkClient.on('OnPluginEvtSetWindowSize', listeners.OnPluginEvtSetWindowSize);
            }
            if (typeof (listeners.OnPluginEvtQueryUserinfo) != "undefined") {
                tsdkClient.on('OnPluginEvtQueryUserinfo', listeners.OnPluginEvtQueryUserinfo);
            }
            if (typeof (listeners.OnPluginEvtCpuRateInfo) != "undefined") {
                tsdkClient.on('OnPluginEvtCpuRateInfo', listeners.OnPluginEvtCpuRateInfo);
            }
            if (typeof (listeners.OnPluginEvtClickHangupCall) != "undefined") {
                tsdkClient.on('OnPluginEvtClickHangupCall', listeners.OnPluginEvtClickHangupCall);
            }
            if (typeof (listeners.OnPluginEvtClickMuteMic) != "undefined") {
                tsdkClient.on('OnPluginEvtClickMuteMic', listeners.OnPluginEvtClickMuteMic);
            }
            if (typeof (listeners.OnPluginEvtClickMuteSpeaker) != "undefined") {
                tsdkClient.on('OnPluginEvtClickMuteSpeaker', listeners.OnPluginEvtClickMuteSpeaker);
            }
            if (typeof (listeners.OnPluginEvtClickMuteCamera) != "undefined") {
                tsdkClient.on('OnPluginEvtClickMuteCamera', listeners.OnPluginEvtClickMuteCamera);
            }
            if (typeof (listeners.OnPluginEvtClickAddMember) != "undefined") {
                tsdkClient.on('OnPluginEvtClickAddMember', listeners.OnPluginEvtClickAddMember);
            }
            if (typeof (listeners.OnPluginEvtClickShowMemberList) != "undefined") {
                tsdkClient.on('OnPluginEvtClickShowMemberList', listeners.OnPluginEvtClickShowMemberList);
            }
            if (typeof (listeners.OnPluginEvtClickTransAudio) != "undefined") {
                tsdkClient.on('OnPluginEvtClickTransAudio', listeners.OnPluginEvtClickTransAudio);
            }
            if (typeof (listeners.OnPluginEvtClickSendIm) != "undefined") {
                tsdkClient.on('OnPluginEvtClickSendIm', listeners.OnPluginEvtClickSendIm);
            }
            if (typeof (listeners.OnPluginEvtClickDevicesSetting) != "undefined") {
                tsdkClient.on('OnPluginEvtClickDevicesSetting', listeners.OnPluginEvtClickDevicesSetting);
            }
            if (typeof (listeners.OnPluginEvtConfCtrlOperation) != "undefined") {
                tsdkClient.on('OnPluginEvtConfCtrlOperation', listeners.OnPluginEvtConfCtrlOperation);
            }
            if (typeof (listeners.OnPluginEvtClickSetLayout) != "undefined") {
                tsdkClient.on('OnPluginEvtClickSetLayout', listeners.OnPluginEvtClickSetLayout);
            }
            if (typeof (listeners.OnPluginEvtClickPageSwitch) != "undefined") {
                tsdkClient.on('OnPluginEvtClickPageSwitch', listeners.OnPluginEvtClickPageSwitch);
            }
            if (typeof (listeners.OnPluginEvtClickWatchAttendee) != "undefined") {
                tsdkClient.on('OnPluginEvtClickWatchAttendee', listeners.OnPluginEvtClickWatchAttendee);
            }
            if (typeof (listeners.OnPluginEvtClickChairmanOperation) != "undefined") {
                tsdkClient.on('OnPluginEvtClickChairmanOperation', listeners.OnPluginEvtClickChairmanOperation);
            }
            if (typeof (listeners.OnPluginEvtClickConfRecording) != "undefined") {
                tsdkClient.on('OnPluginEvtClickConfRecording', listeners.OnPluginEvtClickConfRecording);
            }
            if (typeof (listeners.OnPluginEvtClickSetShareQuality) != "undefined") {
                tsdkClient.on('OnPluginEvtClickSetShareQuality', listeners.OnPluginEvtClickSetShareQuality);
            }
            if (typeof (listeners.OnPluginEvtClickShowRemoteControl) != "undefined") {
                tsdkClient.on('OnPluginEvtClickShowRemoteControl', listeners.OnPluginEvtClickShowRemoteControl);
            }
            if (typeof (listeners.OnPluginEvtClickRequestRemoteControl) != "undefined") {
                tsdkClient.on('OnPluginEvtClickRequestRemoteControl', listeners.OnPluginEvtClickRequestRemoteControl);
            }
            if (typeof (listeners.OnPluginEvtClickReleaseRemoteControl) != "undefined") {
                tsdkClient.on('OnPluginEvtClickReleaseRemoteControl', listeners.OnPluginEvtClickReleaseRemoteControl);
            }
            if (typeof (listeners.OnPluginEvtClickStartShare) != "undefined") {
                tsdkClient.on('OnPluginEvtClickStartShare', listeners.OnPluginEvtClickStartShare);
            }
            if (typeof (listeners.OnPluginEvtClickStopShare) != "undefined") {
                tsdkClient.on('OnPluginEvtClickStopShare', listeners.OnPluginEvtClickStopShare);
            }
            if (typeof (listeners.OnPluginEvtClickLeaveConf) != "undefined") {
                tsdkClient.on('OnPluginEvtClickLeaveConf', listeners.OnPluginEvtClickLeaveConf);
            }
            if (typeof (listeners.OnPluginEvtClickEndConf) != "undefined") {
                tsdkClient.on('OnPluginEvtClickEndConf', listeners.OnPluginEvtClickEndConf);
            }
            if (typeof (listeners.OnError) != "undefined") {
                tsdkClient.onError(listeners.OnError);
            }
            return tsdkClient;
        };
        return TerminalSDK;
    }());
    exports.default = TerminalSDK;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(340), __webpack_require__(341), __webpack_require__(334), __webpack_require__(344), __webpack_require__(347), __webpack_require__(350), __webpack_require__(353)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkManagerService_1, tsdkLoginService_1, tsdkCallService_1, tsdkConfService_1, tsdkCtdService_1, tsdkEaddrService_1, tsdkUiPluginService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkClient = (function () {
        function TsdkClient(tsdkJsInitParam) {
            try {
                this.managerService = new tsdkManagerService_1.default(tsdkJsInitParam.invokeMode, tsdkJsInitParam.svrAddr, tsdkJsInitParam.svrPort, tsdkJsInitParam.ssl, tsdkJsInitParam.ffiLibraryFunc, tsdkJsInitParam.ffiCallbackFunc, tsdkJsInitParam.libraryPath);
            }
            catch (error) {
                throw error;
            }
            this.loginService = new tsdkLoginService_1.default();
            this.callService = new tsdkCallService_1.default();
            this.confService = new tsdkConfService_1.default();
            this.ctdService = new tsdkCtdService_1.default();
            this.eaddrService = new tsdkEaddrService_1.default();
            this.uiPluginService = new tsdkUiPluginService_1.default();
            this.registerLoginEvent();
            this.registerConfEvent();
            this.registerCallEvent();
            this.registerCtdEvent();
            this.registerEaddrEvent();
            this.registerUiPluginEvent();
        }
        TsdkClient.prototype.setConfigParam = function (configParam, callback) {
            this.managerService.setConfigParam(configParam, callback);
        };
        TsdkClient.prototype.init = function (tsdkAppInfoParam, callback) {
            this.managerService.init(tsdkAppInfoParam, callback);
        };
        TsdkClient.prototype.uninit = function (callback) {
            this.managerService.uninit(callback);
            observer_1.default.unsubsribleAll();
        };
        TsdkClient.prototype.getVersion = function (callback) {
            this.managerService.getVersion(callback);
        };
        TsdkClient.prototype.login = function (loginParam, callback) {
            this.loginService.login(loginParam, callback);
        };
        TsdkClient.prototype.logout = function (callback) {
            this.loginService.logout(callback);
        };
        TsdkClient.prototype.setPushService = function (pushServiceInfo, callback) {
            this.loginService.setPushService(pushServiceInfo, callback);
        };
        TsdkClient.prototype.modifyPassword = function (modifyPassword, callback) {
            this.loginService.modifyPassword(modifyPassword, callback);
        };
        TsdkClient.prototype.startCall = function (calleeNumber, isVideo, callback) {
            this.callService.startCall(calleeNumber, isVideo, callback);
        };
        TsdkClient.prototype.acceptCall = function (callId, isVideo, callback) {
            this.callService.acceptCall(callId, isVideo, callback);
        };
        TsdkClient.prototype.endCall = function (callId, callback) {
            this.callService.endCall(callId, callback);
        };
        TsdkClient.prototype.sendDtmf = function (callId, tone, callback) {
            this.callService.sendDtmf(callId, tone, callback);
        };
        TsdkClient.prototype.setVideoWindow = function (count, callId, window, callback) {
            this.callService.setVideoWindow(count, callId, window, callback);
        };
        TsdkClient.prototype.addVideo = function (callId, callback) {
            this.callService.addVideo(callId, callback);
        };
        TsdkClient.prototype.delVideo = function (callId, callback) {
            this.callService.delVideo(callId, callback);
        };
        TsdkClient.prototype.replyAddVideo = function (isAccept, callId, callback) {
            this.callService.replyAddVideo(isAccept, callId, callback);
        };
        TsdkClient.prototype.videoControl = function (videoControl, callId, callback) {
            this.callService.videoControl(videoControl, callId, callback);
        };
        TsdkClient.prototype.setVideoOrient = function (callId, videoOrient, index, callback) {
            this.callService.setVideoOrient(callId, videoOrient, index, callback);
        };
        TsdkClient.prototype.muteMic = function (callId, isMute, callback) {
            this.callService.muteMic(callId, isMute, callback);
        };
        TsdkClient.prototype.startPlayMedia = function (loops, playFile, callback) {
            this.callService.startPlayMedia(loops, playFile, callback);
        };
        TsdkClient.prototype.stopPlayMedia = function (playHandle, callback) {
            this.callService.stopPlayMedia(playHandle, callback);
        };
        TsdkClient.prototype.getDevices = function (deviceType, callback) {
            this.callService.getDevices(deviceType, callback);
        };
        TsdkClient.prototype.setMicIndex = function (index, callback) {
            this.callService.setMicIndex(index, callback);
        };
        TsdkClient.prototype.getMicIndex = function (callback) {
            this.callService.getMicIndex(callback);
        };
        TsdkClient.prototype.setSpeakIndex = function (index, callback) {
            this.callService.setSpeakIndex(index, callback);
        };
        TsdkClient.prototype.getSpeakIndex = function (callback) {
            this.callService.getSpeakIndex(callback);
        };
        TsdkClient.prototype.setVideoIndex = function (index, callback) {
            this.callService.setVideoIndex(index, callback);
        };
        TsdkClient.prototype.getVideoIndex = function (callback) {
            this.callService.getVideoIndex(callback);
        };
        TsdkClient.prototype.setSpeakVolume = function (volume, callback) {
            this.callService.setSpeakVolume(volume, callback);
        };
        TsdkClient.prototype.getSpeakVolume = function (callback) {
            this.callService.getSpeakVolume(callback);
        };
        TsdkClient.prototype.openVideoPreview = function (index, handle, callback) {
            this.callService.openVideoPreview(index, handle, callback);
        };
        TsdkClient.prototype.closeVideoPreview = function (callback) {
            this.callService.closeVideoPreview(callback);
        };
        TsdkClient.prototype.setMobileAudioRoute = function (route, callback) {
            this.callService.setMobileAudioRoute(route, callback);
        };
        TsdkClient.prototype.getMobileAudioRoute = function (callback) {
            this.callService.getMobileAudioRoute(callback);
        };
        TsdkClient.prototype.holdCall = function (callId, callback) {
            this.callService.holdCall(callId, callback);
        };
        TsdkClient.prototype.unholdCall = function (callId, callback) {
            this.callService.unholdCall(callId, callback);
        };
        TsdkClient.prototype.divertCall = function (callId, divertNumber, callback) {
            this.callService.divertCall(callId, divertNumber, callback);
        };
        TsdkClient.prototype.blindTransfer = function (callId, transtoNumber, callback) {
            this.callService.blindTransfer(callId, transtoNumber, callback);
        };
        TsdkClient.prototype.setIptService = function (type, isEnable, number, callback) {
            this.callService.setIptService(type, isEnable, number, callback);
        };
        TsdkClient.prototype.setVideoRender = function (callId, videoRender, callback) {
            this.callService.setVideoRender(callId, videoRender, callback);
        };
        TsdkClient.prototype.setCaptureRotation = function (callId, cameraIndex, captureRotation, callback) {
            this.callService.setCaptureRotation(callId, cameraIndex, captureRotation, callback);
        };
        TsdkClient.prototype.setDisplayRotation = function (callId, displayRotation, windowType, callback) {
            this.callService.setDisplayRotation(callId, displayRotation, windowType, callback);
        };
        TsdkClient.prototype.setCameraPicture = function (callId, fileName, callback) {
            this.callService.setCameraPicture(callId, fileName, callback);
        };
        TsdkClient.prototype.muteSpeaker = function (callId, isMute, callback) {
            this.callService.muteSpeaker(callId, isMute, callback);
        };
        TsdkClient.prototype.setMicVolume = function (volume, callback) {
            this.callService.setMicVolume(volume, callback);
        };
        TsdkClient.prototype.getMicVolume = function (callback) {
            this.callService.getMicVolume(callback);
        };
        TsdkClient.prototype.setSvcVideoWindow = function (count, callId, window, callback) {
            this.callService.setSvcVideoWindow(count, callId, window, callback);
        };
        TsdkClient.prototype.getCallStatisticInfo = function (callId, callback) {
            this.callService.getCallStatisticInfo(callId, callback);
        };
        TsdkClient.prototype.setCameraInfo = function (cameraInfo, callback) {
            this.callService.setCameraInfo(cameraInfo, callback);
        };
        TsdkClient.prototype.getHardwareAccelerateCap = function (callback) {
            this.callService.getHardwareAccelerateCap(callback);
        };
        TsdkClient.prototype.removeSvcVideoWindow = function (count, callId, window, callback) {
            this.callService.removeSvcVideoWindow(count, callId, window, callback);
        };
        TsdkClient.prototype.bookConference = function (bookConfInfo, callback) {
            this.confService.bookConference(bookConfInfo, callback);
        };
        TsdkClient.prototype.queryConferenceList = function (queryReq, callback) {
            this.confService.queryConferenceList(queryReq, callback);
        };
        TsdkClient.prototype.queryConferenceDetail = function (queryReq, callback) {
            this.confService.queryConferenceDetail(queryReq, callback);
        };
        TsdkClient.prototype.joinConference = function (joinNumber, isVideoJoin, confJoinParam, callback) {
            this.confService.joinConference(joinNumber, isVideoJoin, confJoinParam, callback);
        };
        TsdkClient.prototype.acceptConference = function (confHandle, joinVideoConf, callback) {
            this.confService.acceptConference(confHandle, joinVideoConf, callback);
        };
        TsdkClient.prototype.rejectConference = function (confHandle, callback) {
            this.confService.rejectConference(confHandle, callback);
        };
        TsdkClient.prototype.leaveConference = function (confHandle, callback) {
            this.confService.leaveConference(confHandle, callback);
        };
        TsdkClient.prototype.endConference = function (confHandle, callback) {
            this.confService.endConference(confHandle, callback);
        };
        TsdkClient.prototype.upgradeConference = function (confHandle, upgradeParam, callback) {
            this.confService.upgradeConference(confHandle, upgradeParam, callback);
        };
        TsdkClient.prototype.muteConference = function (confHandle, isMute, callback) {
            this.confService.muteConference(confHandle, isMute, callback);
        };
        TsdkClient.prototype.lockConference = function (confHandle, isLock, callback) {
            this.confService.lockConference(confHandle, isLock, callback);
        };
        TsdkClient.prototype.addAttendee = function (confHandle, addAttendeesInfo, callback) {
            this.confService.addAttendee(confHandle, addAttendeesInfo, callback);
        };
        TsdkClient.prototype.redialAttendee = function (confHandle, attendee, callback) {
            this.confService.redialAttendee(confHandle, attendee, callback);
        };
        TsdkClient.prototype.hangUpAttendee = function (confHandle, attendee, callback) {
            this.confService.hangUpAttendee(confHandle, attendee, callback);
        };
        TsdkClient.prototype.removeAttendee = function (confHandle, attendee, callback) {
            this.confService.removeAttendee(confHandle, attendee, callback);
        };
        TsdkClient.prototype.muteAttendee = function (confHandle, attendee, isMute, callback) {
            this.confService.muteAttendee(confHandle, attendee, isMute, callback);
        };
        TsdkClient.prototype.setHandup = function (confHandle, isHandup, attendee, callback) {
            this.confService.setHandup(confHandle, isHandup, attendee, callback);
        };
        TsdkClient.prototype.setVideoMode = function (confHandle, mode, callback) {
            this.confService.setVideoMode(confHandle, mode, callback);
        };
        TsdkClient.prototype.watchAttendee = function (confHandle, watchAttendeeInfo, callback) {
            this.confService.watchAttendee(confHandle, watchAttendeeInfo, callback);
        };
        TsdkClient.prototype.broadcastAttendee = function (confHandle, attendee, isBroadcast, callback) {
            this.confService.broadcastAttendee(confHandle, attendee, isBroadcast, callback);
        };
        TsdkClient.prototype.requestChairman = function (confHandle, password, callback) {
            this.confService.requestChairman(confHandle, password, callback);
        };
        TsdkClient.prototype.releaseChairman = function (confHandle, callback) {
            this.confService.releaseChairman(confHandle, callback);
        };
        TsdkClient.prototype.postponeConference = function (confHandle, time, callback) {
            this.confService.postponeConference(confHandle, time, callback);
        };
        TsdkClient.prototype.joinDataConference = function (confHandle, callback) {
            this.confService.joinDataConference(confHandle, callback);
        };
        TsdkClient.prototype.setPresenter = function (confHandle, attendee, callback) {
            this.confService.setPresenter(confHandle, attendee, callback);
        };
        TsdkClient.prototype.requestPresenter = function (confHandle, callback) {
            this.confService.requestPresenter(confHandle, callback);
        };
        TsdkClient.prototype.appShareSetOwner = function (action, confHandle, attendee, callback) {
            this.confService.appShareSetOwner(action, confHandle, attendee, callback);
        };
        TsdkClient.prototype.appShareStart = function (shareType, confHandle, callback) {
            this.confService.appShareStart(shareType, confHandle, callback);
        };
        TsdkClient.prototype.appShareStop = function (confHandle, callback) {
            this.confService.appShareStop(confHandle, callback);
        };
        TsdkClient.prototype.appShareGetScreenData = function (confHandle, callback) {
            this.confService.appShareGetScreenData(confHandle, callback);
        };
        TsdkClient.prototype.appShareRequestPrivilege = function (confHandle, privilegeType, callback) {
            this.confService.appShareRequestPrivilege(confHandle, privilegeType, callback);
        };
        TsdkClient.prototype.appShareSetPrivilege = function (action, confHandle, privilegeType, attendee, callback) {
            this.confService.appShareSetPrivilege(action, confHandle, privilegeType, attendee, callback);
        };
        TsdkClient.prototype.appShareInputWindowMsg = function (wparam, lparam, dataContent, dataLen, msgType, confHandle, callback) {
            this.confService.appShareInputWindowMsg(wparam, lparam, dataContent, dataLen, msgType, confHandle, callback);
        };
        TsdkClient.prototype.appShareBeginAnnotation = function (confHandle, callback) {
            this.confService.appShareBeginAnnotation(confHandle, callback);
        };
        TsdkClient.prototype.appShareEndAnnotation = function (confHandle, callback) {
            this.confService.appShareEndAnnotation(confHandle, callback);
        };
        TsdkClient.prototype.appShareGetAppList = function (confHandle, callback) {
            this.confService.appShareGetAppList(confHandle, callback);
        };
        TsdkClient.prototype.appShareSetApp = function (appWindow, action, confHandle, callback) {
            this.confService.appShareSetApp(appWindow, action, confHandle, callback);
        };
        TsdkClient.prototype.appShareSetParam = function (confHandle, asParam, callback) {
            this.confService.appShareSetParam(confHandle, asParam, callback);
        };
        TsdkClient.prototype.appShareGetParam = function (confHandle, callback) {
            this.confService.appShareGetParam(confHandle, callback);
        };
        TsdkClient.prototype.whiteboardNewDocument = function (confHandle, callback) {
            this.confService.whiteboardNewDocument(confHandle, callback);
        };
        TsdkClient.prototype.whiteboardDeleteDocument = function (confHandle, documentId, callback) {
            this.confService.whiteboardDeleteDocument(confHandle, documentId, callback);
        };
        TsdkClient.prototype.whiteboardNewPage = function (width, confHandle, documentId, height, callback) {
            this.confService.whiteboardNewPage(width, confHandle, documentId, height, callback);
        };
        TsdkClient.prototype.whiteboardDeletePage = function (confHandle, pageId, documentId, callback) {
            this.confService.whiteboardDeletePage(confHandle, pageId, documentId, callback);
        };
        TsdkClient.prototype.docShareOpenDocument = function (confHandle, option, fileName, callback) {
            this.confService.docShareOpenDocument(confHandle, option, fileName, callback);
        };
        TsdkClient.prototype.docShareCloseDocument = function (confHandle, documentId, callback) {
            this.confService.docShareCloseDocument(confHandle, documentId, callback);
        };
        TsdkClient.prototype.docShareSetCurrentPage = function (confHandle, pageInfo, isSync, callback) {
            this.confService.docShareSetCurrentPage(confHandle, pageInfo, isSync, callback);
        };
        TsdkClient.prototype.docShareSetCanvasSize = function (confHandle, componentId, isRedraw, size, callback) {
            this.confService.docShareSetCanvasSize(confHandle, componentId, isRedraw, size, callback);
        };
        TsdkClient.prototype.docShareGetSurfaceBmp = function (confHandle, componentId, callback) {
            this.confService.docShareGetSurfaceBmp(confHandle, componentId, callback);
        };
        TsdkClient.prototype.docShareGetSynDocumentInfo = function (confHandle, componentId, callback) {
            this.confService.docShareGetSynDocumentInfo(confHandle, componentId, callback);
        };
        TsdkClient.prototype.docShareSetBackgroundColor = function (confHandle, componentId, backgroundColor, callback) {
            this.confService.docShareSetBackgroundColor(confHandle, componentId, backgroundColor, callback);
        };
        TsdkClient.prototype.docShareSetDisplayMode = function (confHandle, displayMode, componentId, callback) {
            this.confService.docShareSetDisplayMode(confHandle, displayMode, componentId, callback);
        };
        TsdkClient.prototype.annotationCreateStart = function (point, pageInfo, mainType, subType, confHandle, componentId, callback) {
            this.confService.annotationCreateStart(point, pageInfo, mainType, subType, confHandle, componentId, callback);
        };
        TsdkClient.prototype.annotationCreateUpdate = function (params, callback) {
            this.confService.annotationCreateUpdate(params, callback);
        };
        TsdkClient.prototype.annotationCreateDone = function (confHandle, componentId, isCancel, callback) {
            this.confService.annotationCreateDone(confHandle, componentId, isCancel, callback);
        };
        TsdkClient.prototype.annotationSelectStart = function (confHandle, point, componentId, pageInfo, callback) {
            this.confService.annotationSelectStart(confHandle, point, componentId, pageInfo, callback);
        };
        TsdkClient.prototype.annotationSelectUpdate = function (confHandle, componentId, point, callback) {
            this.confService.annotationSelectUpdate(confHandle, componentId, point, callback);
        };
        TsdkClient.prototype.annotationSelectDone = function (attendee, confHandle, selectMode, componentId, point, callback) {
            this.confService.annotationSelectDone(attendee, confHandle, selectMode, componentId, point, callback);
        };
        TsdkClient.prototype.annotationLaserPointerStart = function (confHandle, laserPointerInfo, componentId, callback) {
            this.confService.annotationLaserPointerStart(confHandle, laserPointerInfo, componentId, callback);
        };
        TsdkClient.prototype.annotationLaserPointerMoveto = function (confHandle, componentId, point, callback) {
            this.confService.annotationLaserPointerMoveto(confHandle, componentId, point, callback);
        };
        TsdkClient.prototype.annotationLaserPointerStop = function (confHandle, componentId, callback) {
            this.confService.annotationLaserPointerStop(confHandle, componentId, callback);
        };
        TsdkClient.prototype.annotationTextCreate = function (textInfo, confHandle, componentId, pageInfo, callback) {
            this.confService.annotationTextCreate(textInfo, confHandle, componentId, pageInfo, callback);
        };
        TsdkClient.prototype.annotationTextUpdate = function (annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId, callback) {
            this.confService.annotationTextUpdate(annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId, callback);
        };
        TsdkClient.prototype.annotationTextGetInfo = function (confHandle, annotationId, componentId, pageInfo, callback) {
            this.confService.annotationTextGetInfo(confHandle, annotationId, componentId, pageInfo, callback);
        };
        TsdkClient.prototype.annotationEditStart = function (count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId, callback) {
            this.confService.annotationEditStart(count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId, callback);
        };
        TsdkClient.prototype.annotationEditUpdate = function (confHandle, componentId, currentPoint, callback) {
            this.confService.annotationEditUpdate(confHandle, componentId, currentPoint, callback);
        };
        TsdkClient.prototype.annotationEditDone = function (confHandle, componentId, isCancel, callback) {
            this.confService.annotationEditDone(confHandle, componentId, isCancel, callback);
        };
        TsdkClient.prototype.annotationHitTestPoint = function (confHandle, hitTestPointInfo, callback) {
            this.confService.annotationHitTestPoint(confHandle, hitTestPointInfo, callback);
        };
        TsdkClient.prototype.annotationHitTestRect = function (confHandle, hitTestRectInfo, callback) {
            this.confService.annotationHitTestRect(confHandle, hitTestRectInfo, callback);
        };
        TsdkClient.prototype.annotationHitTestLine = function (confHandle, hitTestLineInfo, callback) {
            this.confService.annotationHitTestLine(confHandle, hitTestLineInfo, callback);
        };
        TsdkClient.prototype.annotationSetSelect = function (confHandle, isRedraw, selectInfo, callback) {
            this.confService.annotationSetSelect(confHandle, isRedraw, selectInfo, callback);
        };
        TsdkClient.prototype.annotationDeleteAnnotation = function (confHandle, deleteInfo, callback) {
            this.confService.annotationDeleteAnnotation(confHandle, deleteInfo, callback);
        };
        TsdkClient.prototype.annotationGetAnnotationInfo = function (confHandle, annotationId, componentId, pageInfo, callback) {
            this.confService.annotationGetAnnotationInfo(confHandle, annotationId, componentId, pageInfo, callback);
        };
        TsdkClient.prototype.annotationSetPen = function (newPenInfo, confHandle, componentId, penType, callback) {
            this.confService.annotationSetPen(newPenInfo, confHandle, componentId, penType, callback);
        };
        TsdkClient.prototype.annotationSetBrush = function (confHandle, componentId, newBrushInfo, callback) {
            this.confService.annotationSetBrush(confHandle, componentId, newBrushInfo, callback);
        };
        TsdkClient.prototype.sendChatMsgInConference = function (confHandle, chatMsgInfo, callback) {
            this.confService.sendChatMsgInConference(confHandle, chatMsgInfo, callback);
        };
        TsdkClient.prototype.sendHeartBeat = function (confHandle, callback) {
            this.confService.sendHeartBeat(confHandle, callback);
        };
        TsdkClient.prototype.p2pTransferToConference = function (callId, bookConfInfo, callback) {
            this.confService.p2pTransferToConference(callId, bookConfInfo, callback);
        };
        TsdkClient.prototype.joinConferenceByAnonymous = function (confJoinParam, callback) {
            this.confService.joinConferenceByAnonymous(confJoinParam, callback);
        };
        TsdkClient.prototype.setCurrentSharingComponent = function (confHandle, componentId, callback) {
            this.confService.setCurrentSharingComponent(confHandle, componentId, callback);
        };
        TsdkClient.prototype.docShareSetZoomMode = function (zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId, callback) {
            this.confService.docShareSetZoomMode(zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId, callback);
        };
        TsdkClient.prototype.setRecordBroadcast = function (confHandle, recordBroadcast, callback) {
            this.confService.setRecordBroadcast(confHandle, recordBroadcast, callback);
        };
        TsdkClient.prototype.setLiveBroadcast = function (confHandle, liveBroadcast, callback) {
            this.confService.setLiveBroadcast(confHandle, liveBroadcast, callback);
        };
        TsdkClient.prototype.setMixedPicture = function (confHandle, mixedPictureParams, callback) {
            this.confService.setMixedPicture(confHandle, mixedPictureParams, callback);
        };
        TsdkClient.prototype.getShareStatisticInfo = function (confHandle, callback) {
            this.confService.getShareStatisticInfo(confHandle, callback);
        };
        TsdkClient.prototype.renameSelf = function (confHandle, nickname, callback) {
            this.confService.renameSelf(confHandle, nickname, callback);
        };
        TsdkClient.prototype.allowAttendeeUnmute = function (confHandle, allowUnmute, callback) {
            this.confService.allowAttendeeUnmute(confHandle, allowUnmute, callback);
        };
        TsdkClient.prototype.ctdStartCall = function (ctdParam, callback) {
            this.ctdService.ctdStartCall(ctdParam, callback);
        };
        TsdkClient.prototype.ctdEndCall = function (callId, callback) {
            this.ctdService.ctdEndCall(callId, callback);
        };
        TsdkClient.prototype.setSystemIcon = function (iconId, callback) {
            this.eaddrService.setSystemIcon(iconId, callback);
        };
        TsdkClient.prototype.setUserDefIcon = function (iconInfo, callback) {
            this.eaddrService.setUserDefIcon(iconInfo, callback);
        };
        TsdkClient.prototype.getUserIcon = function (iconParam, callback) {
            this.eaddrService.getUserIcon(iconParam, callback);
        };
        TsdkClient.prototype.searchContacts = function (searchParam, callback) {
            this.eaddrService.searchContacts(searchParam, callback);
        };
        TsdkClient.prototype.searchDepartment = function (searchParam, callback) {
            this.eaddrService.searchDepartment(searchParam, callback);
        };
        TsdkClient.prototype.uiPluginSetButtonState = function (button, isOff, callback) {
            this.uiPluginService.uiPluginSetButtonState(button, isOff, callback);
        };
        TsdkClient.prototype.uiPluginShowSmallWindow = function (callback) {
            this.uiPluginService.uiPluginShowSmallWindow(callback);
        };
        TsdkClient.prototype.uiPluginShowAnnotationTool = function (callback) {
            this.uiPluginService.uiPluginShowAnnotationTool(callback);
        };
        TsdkClient.prototype.uiPluginSetWindowTitle = function (windowTitle, callback) {
            this.uiPluginService.uiPluginSetWindowTitle(windowTitle, callback);
        };
        TsdkClient.prototype.uiPluginSetWindowSizeRelativePos = function (wndSizeParam, callback) {
            this.uiPluginService.uiPluginSetWindowSizeRelativePos(wndSizeParam, callback);
        };
        TsdkClient.prototype.uiPluginSetWindowSizeAbsolutePos = function (wndSizeParam, callback) {
            this.uiPluginService.uiPluginSetWindowSizeAbsolutePos(wndSizeParam, callback);
        };
        TsdkClient.prototype.uiPluginShowVideoWindow = function (callback) {
            this.uiPluginService.uiPluginShowVideoWindow(callback);
        };
        TsdkClient.prototype.uiPluginWatchSvcAttendee = function (number, callback) {
            this.uiPluginService.uiPluginWatchSvcAttendee(number, callback);
        };
        TsdkClient.prototype.uiPluginShowShareSelectwnd = function (callback) {
            this.uiPluginService.uiPluginShowShareSelectwnd(callback);
        };
        TsdkClient.prototype.on = function (event, action) {
            util_1.default.info("tsdkclient", "register event = " + event);
            var _listener = TsdkClient._listeners[event];
            if (!_listener) {
                TsdkClient._listeners[event] = [];
            }
            TsdkClient._listeners[event].push(action);
        };
        TsdkClient.prototype.onAdapt = function (event, action) {
            util_1.default.info("tsdkclient", "onAdapt register event = " + event);
            var _listener = TsdkClient._listeners[event];
            if (!_listener) {
                TsdkClient._listeners[event] = [];
                TsdkClient._listeners[event].push(action);
            }
            else {
                TsdkClient._listeners[event] = [action];
            }
        };
        TsdkClient.prototype.notify = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var _listener = TsdkClient._listeners[event];
            if (!_listener) {
                return;
            }
            var length = _listener.length;
            for (var i = 0; i < length; i++) {
                var callback = _listener[i];
                callback.apply(void 0, args);
            }
        };
        TsdkClient.prototype.onError = function (action) {
            this.on("error", action);
        };
        TsdkClient.notifyErr = function (errorInfo) {
            var _listener = TsdkClient._listeners["error"];
            if (!_listener) {
                return;
            }
            var length = _listener.length;
            for (var i = 0; i < length; i++) {
                var callback = _listener[i];
                callback(errorInfo);
            }
        };
        TsdkClient.prototype.registerLoginEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnEvtAuthSuccess', function (ret) {
                _this.notify("OnEvtAuthSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtAuthFailed', function (ret) {
                _this.notify("OnEvtAuthFailed", ret);
            });
            observer_1.default.subscribe('OnEvtAuthRefreshFailed', function (ret) {
                _this.notify("OnEvtAuthRefreshFailed", ret);
            });
            observer_1.default.subscribe('OnEvtLoginSuccess', function (ret) {
                _this.notify("OnEvtLoginSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtLoginFailed', function (ret) {
                _this.notify("OnEvtLoginFailed", ret);
            });
            observer_1.default.subscribe('OnEvtLogoutSuccess', function (ret) {
                _this.notify("OnEvtLogoutSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtLogoutFailed', function (ret) {
                _this.notify("OnEvtLogoutFailed", ret);
            });
            observer_1.default.subscribe('OnEvtForceLogout', function (ret) {
                _this.notify("OnEvtForceLogout", ret);
            });
            observer_1.default.subscribe('OnEvtVoipAccountStatus', function (ret) {
                _this.notify("OnEvtVoipAccountStatus", ret);
            });
            observer_1.default.subscribe('OnEvtImAccountStatus', function (ret) {
                _this.notify("OnEvtImAccountStatus", ret);
            });
            observer_1.default.subscribe('OnEvtFirewallDetectFailed', function (ret) {
                _this.notify("OnEvtFirewallDetectFailed", ret);
            });
            observer_1.default.subscribe('OnEvtBuildStgTunnelFailed', function (ret) {
                _this.notify("OnEvtBuildStgTunnelFailed", ret);
            });
            observer_1.default.subscribe('OnEvtSecurityTunnelInfoInd', function (ret) {
                _this.notify("OnEvtSecurityTunnelInfoInd", ret);
            });
            observer_1.default.subscribe('OnEvtGetTempUserResult', function (ret) {
                _this.notify("OnEvtGetTempUserResult", ret);
            });
            observer_1.default.subscribe('OnEvtModifyPasswordResult', function (ret) {
                _this.notify("OnEvtModifyPasswordResult", ret);
            });
            observer_1.default.subscribe('OnEvtLoginResumingInd', function (ret) {
                _this.notify("OnEvtLoginResumingInd", ret);
            });
            observer_1.default.subscribe('OnEvtLoginResumeResult', function (ret) {
                _this.notify("OnEvtLoginResumeResult", ret);
            });
        };
        ;
        TsdkClient.prototype.registerCallEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnEvtCallStartResult', function (ret) {
                _this.notify("OnEvtCallStartResult", ret);
            });
            observer_1.default.subscribe('OnEvtCallIncoming', function (ret) {
                _this.notify("OnEvtCallIncoming", ret);
            });
            observer_1.default.subscribe('OnEvtCallOutgoing', function (ret) {
                _this.notify("OnEvtCallOutgoing", ret);
            });
            observer_1.default.subscribe('OnEvtCallRingback', function (ret) {
                _this.notify("OnEvtCallRingback", ret);
            });
            observer_1.default.subscribe('OnEvtCallRtpCreated', function (ret) {
                _this.notify("OnEvtCallRtpCreated", ret);
            });
            observer_1.default.subscribe('OnEvtCallConnected', function (ret) {
                _this.notify("OnEvtCallConnected", ret);
            });
            observer_1.default.subscribe('OnEvtCallEnded', function (ret) {
                _this.notify("OnEvtCallEnded", ret);
            });
            observer_1.default.subscribe('OnEvtCallDestroy', function (ret) {
                _this.notify("OnEvtCallDestroy", ret);
            });
            observer_1.default.subscribe('OnEvtOpenVideoReq', function (ret) {
                _this.notify("OnEvtOpenVideoReq", ret);
            });
            observer_1.default.subscribe('OnEvtRefuseOpenVideoInd', function (ret) {
                _this.notify("OnEvtRefuseOpenVideoInd", ret);
            });
            observer_1.default.subscribe('OnEvtCloseVideoInd', function (ret) {
                _this.notify("OnEvtCloseVideoInd", ret);
            });
            observer_1.default.subscribe('OnEvtOpenVideoInd', function (ret) {
                _this.notify("OnEvtOpenVideoInd", ret);
            });
            observer_1.default.subscribe('OnEvtRefreshViewInd', function (ret) {
                _this.notify("OnEvtRefreshViewInd", ret);
            });
            observer_1.default.subscribe('OnEvtCallRouteChange', function (ret) {
                _this.notify("OnEvtCallRouteChange", ret);
            });
            observer_1.default.subscribe('OnEvtPlayMediaEnd', function (ret) {
                _this.notify("OnEvtPlayMediaEnd", ret);
            });
            observer_1.default.subscribe('OnEvtSessionModified', function (ret) {
                _this.notify("OnEvtSessionModified", ret);
            });
            observer_1.default.subscribe('OnEvtSessionCodec', function (ret) {
                _this.notify("OnEvtSessionCodec", ret);
            });
            observer_1.default.subscribe('OnEvtHoldSuccess', function (ret) {
                _this.notify("OnEvtHoldSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtHoldFailed', function (ret) {
                _this.notify("OnEvtHoldFailed", ret);
            });
            observer_1.default.subscribe('OnEvtUnholdSuccess', function (ret) {
                _this.notify("OnEvtUnholdSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtUnholdFailed', function (ret) {
                _this.notify("OnEvtUnholdFailed", ret);
            });
            observer_1.default.subscribe('OnEvtEndcallFailed', function (ret) {
                _this.notify("OnEvtEndcallFailed", ret);
            });
            observer_1.default.subscribe('OnEvtDivertFailed', function (ret) {
                _this.notify("OnEvtDivertFailed", ret);
            });
            observer_1.default.subscribe('OnEvtBldTransferSuccess', function (ret) {
                _this.notify("OnEvtBldTransferSuccess", ret);
            });
            observer_1.default.subscribe('OnEvtBldTransferFailed', function (ret) {
                _this.notify("OnEvtBldTransferFailed", ret);
            });
            observer_1.default.subscribe('OnEvtSetIptServiceResult', function (ret) {
                _this.notify("OnEvtSetIptServiceResult", ret);
            });
            observer_1.default.subscribe('OnEvtIptServiceInfo', function (ret) {
                _this.notify("OnEvtIptServiceInfo", ret);
            });
            observer_1.default.subscribe('OnEvtStatisticInfo', function (ret) {
                _this.notify("OnEvtStatisticInfo", ret);
            });
            observer_1.default.subscribe('OnEvtMediaErrorInfo', function (ret) {
                _this.notify("OnEvtMediaErrorInfo", ret);
            });
            observer_1.default.subscribe('OnEvtNoStream', function (ret) {
                _this.notify("OnEvtNoStream", ret);
            });
        };
        ;
        TsdkClient.prototype.registerConfEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnEvtBookConfResult', function (ret) {
                _this.notify("OnEvtBookConfResult", ret);
            });
            observer_1.default.subscribe('OnEvtQueryConfListResult', function (ret) {
                _this.notify("OnEvtQueryConfListResult", ret);
            });
            observer_1.default.subscribe('OnEvtQueryConfDetailResult', function (ret) {
                _this.notify("OnEvtQueryConfDetailResult", ret);
            });
            observer_1.default.subscribe('OnEvtJoinConfResult', function (ret) {
                _this.notify("OnEvtJoinConfResult", ret);
            });
            observer_1.default.subscribe('OnEvtGetDataconfParamResult', function (ret) {
                _this.notify("OnEvtGetDataconfParamResult", ret);
            });
            observer_1.default.subscribe('OnEvtConfctrlOperationResult', function (ret) {
                _this.notify("OnEvtConfctrlOperationResult", ret);
            });
            observer_1.default.subscribe('OnEvtInfoAndStatusUpdate', function (ret) {
                _this.notify("OnEvtInfoAndStatusUpdate", ret);
            });
            observer_1.default.subscribe('OnEvtSpeakerInd', function (ret) {
                _this.notify("OnEvtSpeakerInd", ret);
            });
            observer_1.default.subscribe('OnEvtRequestConfRightFailed', function (ret) {
                _this.notify("OnEvtRequestConfRightFailed", ret);
            });
            observer_1.default.subscribe('OnEvtConfIncomingInd', function (ret) {
                _this.notify("OnEvtConfIncomingInd", ret);
            });
            observer_1.default.subscribe('OnEvtConfEndInd', function (ret) {
                _this.notify("OnEvtConfEndInd", ret);
            });
            observer_1.default.subscribe('OnEvtJoinDataConfResult', function (ret) {
                _this.notify("OnEvtJoinDataConfResult", ret);
            });
            observer_1.default.subscribe('OnEvtAsScreenDataUpdate', function (ret) {
                _this.notify("OnEvtAsScreenDataUpdate", ret);
            });
            observer_1.default.subscribe('OnEvtAsOwnerChange', function (ret) {
                _this.notify("OnEvtAsOwnerChange", ret);
            });
            observer_1.default.subscribe('OnEvtAsStateChange', function (ret) {
                _this.notify("OnEvtAsStateChange", ret);
            });
            observer_1.default.subscribe('OnEvtRecvChatMsg', function (ret) {
                _this.notify("OnEvtRecvChatMsg", ret);
            });
            observer_1.default.subscribe('OnEvtPresenterGiveInd', function (ret) {
                _this.notify("OnEvtPresenterGiveInd", ret);
            });
            observer_1.default.subscribe('OnEvtTransToConfResult', function (ret) {
                _this.notify("OnEvtTransToConfResult", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocLoadStart', function (ret) {
                _this.notify("OnEvtDsDocLoadStart", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocNew', function (ret) {
                _this.notify("OnEvtDsDocNew", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocPageLoaded', function (ret) {
                _this.notify("OnEvtDsDocPageLoaded", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocPageNew', function (ret) {
                _this.notify("OnEvtDsDocPageNew", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocLoadFinish', function (ret) {
                _this.notify("OnEvtDsDocLoadFinish", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocPageDel', function (ret) {
                _this.notify("OnEvtDsDocPageDel", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocDel', function (ret) {
                _this.notify("OnEvtDsDocDel", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocCurrentPage', function (ret) {
                _this.notify("OnEvtDsDocCurrentPage", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocCurrentPageInd', function (ret) {
                _this.notify("OnEvtDsDocCurrentPageInd", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocDrawDataNotify', function (ret) {
                _this.notify("OnEvtDsDocDrawDataNotify", ret);
            });
            observer_1.default.subscribe('OnEvtDsDocPageDataDownload', function (ret) {
                _this.notify("OnEvtDsDocPageDataDownload", ret);
            });
            observer_1.default.subscribe('OnEvtWbDocNew', function (ret) {
                _this.notify("OnEvtWbDocNew", ret);
            });
            observer_1.default.subscribe('OnEvtWbDocDel', function (ret) {
                _this.notify("OnEvtWbDocDel", ret);
            });
            observer_1.default.subscribe('OnEvtWbPageNew', function (ret) {
                _this.notify("OnEvtWbPageNew", ret);
            });
            observer_1.default.subscribe('OnEvtWbPageDel', function (ret) {
                _this.notify("OnEvtWbPageDel", ret);
            });
            observer_1.default.subscribe('OnEvtWbDocCurrentPage', function (ret) {
                _this.notify("OnEvtWbDocCurrentPage", ret);
            });
            observer_1.default.subscribe('OnEvtWbDocCurrentPageInd', function (ret) {
                _this.notify("OnEvtWbDocCurrentPageInd", ret);
            });
            observer_1.default.subscribe('OnEvtWbDocDrawDataNotify', function (ret) {
                _this.notify("OnEvtWbDocDrawDataNotify", ret);
            });
            observer_1.default.subscribe('OnEvtShareStatusUpdateInd', function (ret) {
                _this.notify("OnEvtShareStatusUpdateInd", ret);
            });
            observer_1.default.subscribe('OnEvtAsScreenKeyframe', function (ret) {
                _this.notify("OnEvtAsScreenKeyframe", ret);
            });
            observer_1.default.subscribe('OnEvtAsScreenFirstKeyframe', function (ret) {
                _this.notify("OnEvtAsScreenFirstKeyframe", ret);
            });
            observer_1.default.subscribe('OnEvtDataComponentLoadInd', function (ret) {
                _this.notify("OnEvtDataComponentLoadInd", ret);
            });
            observer_1.default.subscribe('OnEvtConfBaseInfoInd', function (ret) {
                _this.notify("OnEvtConfBaseInfoInd", ret);
            });
            observer_1.default.subscribe('OnEvtAsPrivilegeChange', function (ret) {
                _this.notify("OnEvtAsPrivilegeChange", ret);
            });
            observer_1.default.subscribe('OnEvtSvcWatchInfoInd', function (ret) {
                _this.notify("OnEvtSvcWatchInfoInd", ret);
            });
            observer_1.default.subscribe('OnEvtConfResumingInd', function (ret) {
                _this.notify("OnEvtConfResumingInd", ret);
            });
            observer_1.default.subscribe('OnEvtConfResumeResult', function (ret) {
                _this.notify("OnEvtConfResumeResult", ret);
            });
            observer_1.default.subscribe('OnEvtConfEndResult', function (ret) {
                _this.notify("OnEvtConfEndResult", ret);
            });
            observer_1.default.subscribe('OnEvtConfSetShareOwnerFailed', function (ret) {
                _this.notify("OnEvtConfSetShareOwnerFailed", ret);
            });
            observer_1.default.subscribe('OnEvtConfStartShareFailed', function (ret) {
                _this.notify("OnEvtConfStartShareFailed", ret);
            });
        };
        ;
        TsdkClient.prototype.registerCtdEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnEvtCtdStartCallResult', function (ret) {
                _this.notify("OnEvtCtdStartCallResult", ret);
            });
            observer_1.default.subscribe('OnEvtCtdEndCallResult', function (ret) {
                _this.notify("OnEvtCtdEndCallResult", ret);
            });
            observer_1.default.subscribe('OnEvtCtdCallStatusNotify', function (ret) {
                _this.notify("OnEvtCtdCallStatusNotify", ret);
            });
        };
        ;
        TsdkClient.prototype.registerEaddrEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnEvtSearchContactsResult', function (ret) {
                _this.notify("OnEvtSearchContactsResult", ret);
            });
            observer_1.default.subscribe('OnEvtSearchDeptResult', function (ret) {
                _this.notify("OnEvtSearchDeptResult", ret);
            });
            observer_1.default.subscribe('OnEvtGetIconResult', function (ret) {
                _this.notify("OnEvtGetIconResult", ret);
            });
        };
        ;
        TsdkClient.prototype.registerUiPluginEvent = function () {
            var _this = this;
            observer_1.default.subscribe('OnPluginEvtFrameHwndInfoUpdate', function (ret) {
                _this.notify("OnPluginEvtFrameHwndInfoUpdate", ret);
            });
            observer_1.default.subscribe('OnPluginEvtWindowFocus', function (ret) {
                _this.notify("OnPluginEvtWindowFocus", ret);
            });
            observer_1.default.subscribe('OnPluginEvtSetWindowSize', function (ret) {
                _this.notify("OnPluginEvtSetWindowSize", ret);
            });
            observer_1.default.subscribe('OnPluginEvtQueryUserinfo', function (ret) {
                _this.notify("OnPluginEvtQueryUserinfo", ret);
            });
            observer_1.default.subscribe('OnPluginEvtCpuRateInfo', function (ret) {
                _this.notify("OnPluginEvtCpuRateInfo", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickHangupCall', function (ret) {
                _this.notify("OnPluginEvtClickHangupCall", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickMuteMic', function (ret) {
                _this.notify("OnPluginEvtClickMuteMic", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickMuteSpeaker', function (ret) {
                _this.notify("OnPluginEvtClickMuteSpeaker", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickMuteCamera', function (ret) {
                _this.notify("OnPluginEvtClickMuteCamera", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickAddMember', function (ret) {
                _this.notify("OnPluginEvtClickAddMember", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickShowMemberList', function (ret) {
                _this.notify("OnPluginEvtClickShowMemberList", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickTransAudio', function (ret) {
                _this.notify("OnPluginEvtClickTransAudio", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickSendIm', function (ret) {
                _this.notify("OnPluginEvtClickSendIm", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickDevicesSetting', function (ret) {
                _this.notify("OnPluginEvtClickDevicesSetting", ret);
            });
            observer_1.default.subscribe('OnPluginEvtConfCtrlOperation', function (ret) {
                _this.notify("OnPluginEvtConfCtrlOperation", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickSetLayout', function (ret) {
                _this.notify("OnPluginEvtClickSetLayout", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickPageSwitch', function (ret) {
                _this.notify("OnPluginEvtClickPageSwitch", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickWatchAttendee', function (ret) {
                _this.notify("OnPluginEvtClickWatchAttendee", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickChairmanOperation', function (ret) {
                _this.notify("OnPluginEvtClickChairmanOperation", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickConfRecording', function (ret) {
                _this.notify("OnPluginEvtClickConfRecording", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickSetShareQuality', function (ret) {
                _this.notify("OnPluginEvtClickSetShareQuality", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickShowRemoteControl', function (ret) {
                _this.notify("OnPluginEvtClickShowRemoteControl", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickRequestRemoteControl', function (ret) {
                _this.notify("OnPluginEvtClickRequestRemoteControl", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickReleaseRemoteControl', function (ret) {
                _this.notify("OnPluginEvtClickReleaseRemoteControl", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickStartShare', function (ret) {
                _this.notify("OnPluginEvtClickStartShare", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickStopShare', function (ret) {
                _this.notify("OnPluginEvtClickStopShare", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickLeaveConf', function (ret) {
                _this.notify("OnPluginEvtClickLeaveConf", ret);
            });
            observer_1.default.subscribe('OnPluginEvtClickEndConf', function (ret) {
                _this.notify("OnPluginEvtClickEndConf", ret);
            });
        };
        ;
        TsdkClient._listeners = {};
        return TsdkClient;
    }());
    exports.default = TsdkClient;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(335)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkCallWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CallService = (function () {
        function CallService() {
            this.wrapper = tsdkCallWrapper_1.default.getInstance();
            this.wrapper.build();
            CallService.registerCallEvent();
        }
        CallService.prototype.startCall = function (calleeNumber, isVideo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.startCall(calleeNumber, isVideo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.acceptCall = function (callId, isVideo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.acceptCall(callId, isVideo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.endCall = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.endCall(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.sendDtmf = function (callId, tone, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.sendDtmf(callId, tone)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setVideoWindow = function (count, callId, window, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setVideoWindow(count, callId, window)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.addVideo = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.addVideo(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.delVideo = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.delVideo(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.replyAddVideo = function (isAccept, callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.replyAddVideo(isAccept, callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.videoControl = function (videoControl, callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.videoControl(videoControl, callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setVideoOrient = function (callId, videoOrient, index, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setVideoOrient(callId, videoOrient, index)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.muteMic = function (callId, isMute, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.muteMic(callId, isMute)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.startPlayMedia = function (loops, playFile, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.startPlayMedia(loops, playFile)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.stopPlayMedia = function (playHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.stopPlayMedia(playHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getDevices = function (deviceType, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getDevices(deviceType)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setMicIndex = function (index, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setMicIndex(index)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getMicIndex = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getMicIndex()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setSpeakIndex = function (index, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setSpeakIndex(index)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getSpeakIndex = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getSpeakIndex()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setVideoIndex = function (index, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setVideoIndex(index)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getVideoIndex = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getVideoIndex()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setSpeakVolume = function (volume, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setSpeakVolume(volume)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getSpeakVolume = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getSpeakVolume()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.openVideoPreview = function (index, handle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.openVideoPreview(index, handle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.closeVideoPreview = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.closeVideoPreview()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setMobileAudioRoute = function (route, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setMobileAudioRoute(route)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getMobileAudioRoute = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getMobileAudioRoute()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.holdCall = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.holdCall(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.unholdCall = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.unholdCall(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.divertCall = function (callId, divertNumber, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.divertCall(callId, divertNumber)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.blindTransfer = function (callId, transtoNumber, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.blindTransfer(callId, transtoNumber)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setIptService = function (type, isEnable, number, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setIptService(type, isEnable, number)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setVideoRender = function (callId, videoRender, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setVideoRender(callId, videoRender)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setCaptureRotation = function (callId, cameraIndex, captureRotation, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setCaptureRotation(callId, cameraIndex, captureRotation)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setDisplayRotation = function (callId, displayRotation, windowType, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setDisplayRotation(callId, displayRotation, windowType)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setCameraPicture = function (callId, fileName, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setCameraPicture(callId, fileName)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.muteSpeaker = function (callId, isMute, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.muteSpeaker(callId, isMute)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setMicVolume = function (volume, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setMicVolume(volume)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getMicVolume = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getMicVolume()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setSvcVideoWindow = function (count, callId, window, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setSvcVideoWindow(count, callId, window)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getCallStatisticInfo = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getCallStatisticInfo(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.setCameraInfo = function (cameraInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setCameraInfo(cameraInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.getHardwareAccelerateCap = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getHardwareAccelerateCap()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.prototype.removeSvcVideoWindow = function (count, callId, window, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.removeSvcVideoWindow(count, callId, window)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CallService.registerCallEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("CallService", "registerCallEvent");
                    wrapper = tsdkCallWrapper_1.default.getInstance();
                    wrapper.registerCallEvent({
                        OnEvtCallStartResult: CallService.handleOnEvtCallStartResult,
                        OnEvtCallIncoming: CallService.handleOnEvtCallIncoming,
                        OnEvtCallOutgoing: CallService.handleOnEvtCallOutgoing,
                        OnEvtCallRingback: CallService.handleOnEvtCallRingback,
                        OnEvtCallRtpCreated: CallService.handleOnEvtCallRtpCreated,
                        OnEvtCallConnected: CallService.handleOnEvtCallConnected,
                        OnEvtCallEnded: CallService.handleOnEvtCallEnded,
                        OnEvtCallDestroy: CallService.handleOnEvtCallDestroy,
                        OnEvtOpenVideoReq: CallService.handleOnEvtOpenVideoReq,
                        OnEvtRefuseOpenVideoInd: CallService.handleOnEvtRefuseOpenVideoInd,
                        OnEvtCloseVideoInd: CallService.handleOnEvtCloseVideoInd,
                        OnEvtOpenVideoInd: CallService.handleOnEvtOpenVideoInd,
                        OnEvtRefreshViewInd: CallService.handleOnEvtRefreshViewInd,
                        OnEvtCallRouteChange: CallService.handleOnEvtCallRouteChange,
                        OnEvtPlayMediaEnd: CallService.handleOnEvtPlayMediaEnd,
                        OnEvtSessionModified: CallService.handleOnEvtSessionModified,
                        OnEvtSessionCodec: CallService.handleOnEvtSessionCodec,
                        OnEvtHoldSuccess: CallService.handleOnEvtHoldSuccess,
                        OnEvtHoldFailed: CallService.handleOnEvtHoldFailed,
                        OnEvtUnholdSuccess: CallService.handleOnEvtUnholdSuccess,
                        OnEvtUnholdFailed: CallService.handleOnEvtUnholdFailed,
                        OnEvtEndcallFailed: CallService.handleOnEvtEndcallFailed,
                        OnEvtDivertFailed: CallService.handleOnEvtDivertFailed,
                        OnEvtBldTransferSuccess: CallService.handleOnEvtBldTransferSuccess,
                        OnEvtBldTransferFailed: CallService.handleOnEvtBldTransferFailed,
                        OnEvtSetIptServiceResult: CallService.handleOnEvtSetIptServiceResult,
                        OnEvtIptServiceInfo: CallService.handleOnEvtIptServiceInfo,
                        OnEvtStatisticInfo: CallService.handleOnEvtStatisticInfo,
                        OnEvtMediaErrorInfo: CallService.handleOnEvtMediaErrorInfo,
                        OnEvtNoStream: CallService.handleOnEvtNoStream,
                    });
                    return [2];
                });
            });
        };
        ;
        CallService.handleOnEvtCallStartResult = function (data) {
            observer_1.default.publish('OnEvtCallStartResult', data);
        };
        CallService.handleOnEvtCallIncoming = function (data) {
            observer_1.default.publish('OnEvtCallIncoming', data);
        };
        CallService.handleOnEvtCallOutgoing = function (data) {
            observer_1.default.publish('OnEvtCallOutgoing', data);
        };
        CallService.handleOnEvtCallRingback = function (data) {
            observer_1.default.publish('OnEvtCallRingback', data);
        };
        CallService.handleOnEvtCallRtpCreated = function (data) {
            observer_1.default.publish('OnEvtCallRtpCreated', data);
        };
        CallService.handleOnEvtCallConnected = function (data) {
            observer_1.default.publish('OnEvtCallConnected', data);
        };
        CallService.handleOnEvtCallEnded = function (data) {
            observer_1.default.publish('OnEvtCallEnded', data);
        };
        CallService.handleOnEvtCallDestroy = function (data) {
            observer_1.default.publish('OnEvtCallDestroy', data);
        };
        CallService.handleOnEvtOpenVideoReq = function (data) {
            observer_1.default.publish('OnEvtOpenVideoReq', data);
        };
        CallService.handleOnEvtRefuseOpenVideoInd = function (data) {
            observer_1.default.publish('OnEvtRefuseOpenVideoInd', data);
        };
        CallService.handleOnEvtCloseVideoInd = function (data) {
            observer_1.default.publish('OnEvtCloseVideoInd', data);
        };
        CallService.handleOnEvtOpenVideoInd = function (data) {
            observer_1.default.publish('OnEvtOpenVideoInd', data);
        };
        CallService.handleOnEvtRefreshViewInd = function (data) {
            observer_1.default.publish('OnEvtRefreshViewInd', data);
        };
        CallService.handleOnEvtCallRouteChange = function (data) {
            observer_1.default.publish('OnEvtCallRouteChange', data);
        };
        CallService.handleOnEvtPlayMediaEnd = function (data) {
            observer_1.default.publish('OnEvtPlayMediaEnd', data);
        };
        CallService.handleOnEvtSessionModified = function (data) {
            observer_1.default.publish('OnEvtSessionModified', data);
        };
        CallService.handleOnEvtSessionCodec = function (data) {
            observer_1.default.publish('OnEvtSessionCodec', data);
        };
        CallService.handleOnEvtHoldSuccess = function (data) {
            observer_1.default.publish('OnEvtHoldSuccess', data);
        };
        CallService.handleOnEvtHoldFailed = function (data) {
            observer_1.default.publish('OnEvtHoldFailed', data);
        };
        CallService.handleOnEvtUnholdSuccess = function (data) {
            observer_1.default.publish('OnEvtUnholdSuccess', data);
        };
        CallService.handleOnEvtUnholdFailed = function (data) {
            observer_1.default.publish('OnEvtUnholdFailed', data);
        };
        CallService.handleOnEvtEndcallFailed = function (data) {
            observer_1.default.publish('OnEvtEndcallFailed', data);
        };
        CallService.handleOnEvtDivertFailed = function (data) {
            observer_1.default.publish('OnEvtDivertFailed', data);
        };
        CallService.handleOnEvtBldTransferSuccess = function (data) {
            observer_1.default.publish('OnEvtBldTransferSuccess', data);
        };
        CallService.handleOnEvtBldTransferFailed = function (data) {
            observer_1.default.publish('OnEvtBldTransferFailed', data);
        };
        CallService.handleOnEvtSetIptServiceResult = function (data) {
            observer_1.default.publish('OnEvtSetIptServiceResult', data);
        };
        CallService.handleOnEvtIptServiceInfo = function (data) {
            observer_1.default.publish('OnEvtIptServiceInfo', data);
        };
        CallService.handleOnEvtStatisticInfo = function (data) {
            observer_1.default.publish('OnEvtStatisticInfo', data);
        };
        CallService.handleOnEvtMediaErrorInfo = function (data) {
            observer_1.default.publish('OnEvtMediaErrorInfo', data);
        };
        CallService.handleOnEvtNoStream = function (data) {
            observer_1.default.publish('OnEvtNoStream', data);
        };
        return CallService;
    }());
    exports.default = CallService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(336), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkCall_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkCallWrapper = (function () {
        function TsdkCallWrapper() {
            if (TsdkCallWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkCallWrapper.getInstance() instead of new.");
            }
            TsdkCallWrapper._instance = this;
        }
        TsdkCallWrapper.getInstance = function () {
            return TsdkCallWrapper._instance;
        };
        TsdkCallWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkCallWrapper", "step in TsdkCallWrapper to build");
                    if (!TsdkCallWrapper.tsdkCall) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkCallWrapper.tsdkCall = new tsdkCall_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkCallWrapper.tsdkCall = new tsdkCall_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkCallWrapper.prototype.startCall = function (calleeNumber, isVideo) {
            util_1.default.info("TsdkCallWrapper", "startCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.startCall(calleeNumber, isVideo, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.acceptCall = function (callId, isVideo) {
            util_1.default.info("TsdkCallWrapper", "acceptCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.acceptCall(callId, isVideo, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.endCall = function (callId) {
            util_1.default.info("TsdkCallWrapper", "endCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.endCall(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.sendDtmf = function (callId, tone) {
            util_1.default.info("TsdkCallWrapper", "sendDtmf");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.sendDtmf(callId, tone, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setVideoWindow = function (count, callId, window) {
            util_1.default.info("TsdkCallWrapper", "setVideoWindow");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setVideoWindow(count, callId, window, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.addVideo = function (callId) {
            util_1.default.info("TsdkCallWrapper", "addVideo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.addVideo(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.delVideo = function (callId) {
            util_1.default.info("TsdkCallWrapper", "delVideo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.delVideo(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.replyAddVideo = function (isAccept, callId) {
            util_1.default.info("TsdkCallWrapper", "replyAddVideo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.replyAddVideo(isAccept, callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.videoControl = function (videoControl, callId) {
            util_1.default.info("TsdkCallWrapper", "videoControl");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.videoControl(videoControl, callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setVideoOrient = function (callId, videoOrient, index) {
            util_1.default.info("TsdkCallWrapper", "setVideoOrient");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setVideoOrient(callId, videoOrient, index, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.muteMic = function (callId, isMute) {
            util_1.default.info("TsdkCallWrapper", "muteMic");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.muteMic(callId, isMute, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.startPlayMedia = function (loops, playFile) {
            util_1.default.info("TsdkCallWrapper", "startPlayMedia");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.startPlayMedia(loops, playFile, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.stopPlayMedia = function (playHandle) {
            util_1.default.info("TsdkCallWrapper", "stopPlayMedia");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.stopPlayMedia(playHandle, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getDevices = function (deviceType) {
            util_1.default.info("TsdkCallWrapper", "getDevices");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getDevices(deviceType, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setMicIndex = function (index) {
            util_1.default.info("TsdkCallWrapper", "setMicIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setMicIndex(index, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getMicIndex = function () {
            util_1.default.info("TsdkCallWrapper", "getMicIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getMicIndex(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setSpeakIndex = function (index) {
            util_1.default.info("TsdkCallWrapper", "setSpeakIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setSpeakIndex(index, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getSpeakIndex = function () {
            util_1.default.info("TsdkCallWrapper", "getSpeakIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getSpeakIndex(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setVideoIndex = function (index) {
            util_1.default.info("TsdkCallWrapper", "setVideoIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setVideoIndex(index, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getVideoIndex = function () {
            util_1.default.info("TsdkCallWrapper", "getVideoIndex");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getVideoIndex(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setSpeakVolume = function (volume) {
            util_1.default.info("TsdkCallWrapper", "setSpeakVolume");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setSpeakVolume(volume, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getSpeakVolume = function () {
            util_1.default.info("TsdkCallWrapper", "getSpeakVolume");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getSpeakVolume(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.openVideoPreview = function (index, handle) {
            util_1.default.info("TsdkCallWrapper", "openVideoPreview");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.openVideoPreview(index, handle, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.closeVideoPreview = function () {
            util_1.default.info("TsdkCallWrapper", "closeVideoPreview");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.closeVideoPreview(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setMobileAudioRoute = function (route) {
            util_1.default.info("TsdkCallWrapper", "setMobileAudioRoute");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setMobileAudioRoute(route, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getMobileAudioRoute = function () {
            util_1.default.info("TsdkCallWrapper", "getMobileAudioRoute");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getMobileAudioRoute(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.holdCall = function (callId) {
            util_1.default.info("TsdkCallWrapper", "holdCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.holdCall(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.unholdCall = function (callId) {
            util_1.default.info("TsdkCallWrapper", "unholdCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.unholdCall(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.divertCall = function (callId, divertNumber) {
            util_1.default.info("TsdkCallWrapper", "divertCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.divertCall(callId, divertNumber, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.blindTransfer = function (callId, transtoNumber) {
            util_1.default.info("TsdkCallWrapper", "blindTransfer");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.blindTransfer(callId, transtoNumber, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setIptService = function (type, isEnable, number) {
            util_1.default.info("TsdkCallWrapper", "setIptService");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setIptService(type, isEnable, number, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setVideoRender = function (callId, videoRender) {
            util_1.default.info("TsdkCallWrapper", "setVideoRender");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setVideoRender(callId, videoRender, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setCaptureRotation = function (callId, cameraIndex, captureRotation) {
            util_1.default.info("TsdkCallWrapper", "setCaptureRotation");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setCaptureRotation(callId, cameraIndex, captureRotation, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setDisplayRotation = function (callId, displayRotation, windowType) {
            util_1.default.info("TsdkCallWrapper", "setDisplayRotation");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setDisplayRotation(callId, displayRotation, windowType, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setCameraPicture = function (callId, fileName) {
            util_1.default.info("TsdkCallWrapper", "setCameraPicture");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setCameraPicture(callId, fileName, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.muteSpeaker = function (callId, isMute) {
            util_1.default.info("TsdkCallWrapper", "muteSpeaker");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.muteSpeaker(callId, isMute, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setMicVolume = function (volume) {
            util_1.default.info("TsdkCallWrapper", "setMicVolume");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setMicVolume(volume, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getMicVolume = function () {
            util_1.default.info("TsdkCallWrapper", "getMicVolume");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getMicVolume(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setSvcVideoWindow = function (count, callId, window) {
            util_1.default.info("TsdkCallWrapper", "setSvcVideoWindow");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setSvcVideoWindow(count, callId, window, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getCallStatisticInfo = function (callId) {
            util_1.default.info("TsdkCallWrapper", "getCallStatisticInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getCallStatisticInfo(callId, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.setCameraInfo = function (cameraInfo) {
            util_1.default.info("TsdkCallWrapper", "setCameraInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.setCameraInfo(cameraInfo, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.getHardwareAccelerateCap = function () {
            util_1.default.info("TsdkCallWrapper", "getHardwareAccelerateCap");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.getHardwareAccelerateCap(callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.removeSvcVideoWindow = function (count, callId, window) {
            util_1.default.info("TsdkCallWrapper", "removeSvcVideoWindow");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCallWrapper.tsdkCall.removeSvcVideoWindow(count, callId, window, callback);
            return promise;
        };
        ;
        TsdkCallWrapper.prototype.registerCallEvent = function (callbacks) {
            TsdkCallWrapper.tsdkCall.setBasicCallEvent(callbacks);
        };
        TsdkCallWrapper._instance = new TsdkCallWrapper();
        return TsdkCallWrapper;
    }());
    exports.default = TsdkCallWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkCall = (function () {
        function TsdkCall(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkCall.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkCall.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkCall.prototype.startCall = function (calleeNumber, isVideo, callbacks) {
            this.callbackResponse(callbacks, 2001);
            var data = {
                "cmd": 0x107d1,
                "description": "tsdk_start_call",
                "param": {
                    "calleeNumber": calleeNumber, "isVideo": isVideo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.acceptCall = function (callId, isVideo, callbacks) {
            this.callbackResponse(callbacks, 2002);
            var data = {
                "cmd": 0x107d2,
                "description": "tsdk_accept_call",
                "param": {
                    "callId": callId, "isVideo": isVideo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.endCall = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2003);
            var data = {
                "cmd": 0x107d3,
                "description": "tsdk_end_call",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.sendDtmf = function (callId, tone, callbacks) {
            this.callbackResponse(callbacks, 2004);
            var data = {
                "cmd": 0x107d4,
                "description": "tsdk_send_dtmf",
                "param": {
                    "callId": callId, "tone": tone
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setVideoWindow = function (count, callId, window, callbacks) {
            this.callbackResponse(callbacks, 2005);
            var data = {
                "cmd": 0x107d5,
                "description": "tsdk_set_video_window",
                "param": {
                    "count": count, "callId": callId, "window": window
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.addVideo = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2006);
            var data = {
                "cmd": 0x107d6,
                "description": "tsdk_add_video",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.delVideo = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2007);
            var data = {
                "cmd": 0x107d7,
                "description": "tsdk_del_video",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.replyAddVideo = function (isAccept, callId, callbacks) {
            this.callbackResponse(callbacks, 2008);
            var data = {
                "cmd": 0x107d8,
                "description": "tsdk_reply_add_video",
                "param": {
                    "isAccept": isAccept, "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.videoControl = function (videoControl, callId, callbacks) {
            this.callbackResponse(callbacks, 2009);
            var data = {
                "cmd": 0x107d9,
                "description": "tsdk_video_control",
                "param": {
                    "videoControl": videoControl, "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setVideoOrient = function (callId, videoOrient, index, callbacks) {
            this.callbackResponse(callbacks, 2010);
            var data = {
                "cmd": 0x107da,
                "description": "tsdk_set_video_orient",
                "param": {
                    "callId": callId, "videoOrient": videoOrient, "index": index
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.muteMic = function (callId, isMute, callbacks) {
            this.callbackResponse(callbacks, 2011);
            var data = {
                "cmd": 0x107db,
                "description": "tsdk_mute_mic",
                "param": {
                    "callId": callId, "isMute": isMute
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.startPlayMedia = function (loops, playFile, callbacks) {
            this.callbackResponse(callbacks, 2012);
            var data = {
                "cmd": 0x107dc,
                "description": "tsdk_start_play_media",
                "param": {
                    "loops": loops, "playFile": playFile
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.stopPlayMedia = function (playHandle, callbacks) {
            this.callbackResponse(callbacks, 2013);
            var data = {
                "cmd": 0x107dd,
                "description": "tsdk_stop_play_media",
                "param": {
                    "playHandle": playHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getDevices = function (deviceType, callbacks) {
            this.callbackResponse(callbacks, 2014);
            var data = {
                "cmd": 0x107de,
                "description": "tsdk_get_devices",
                "param": {
                    "deviceType": deviceType
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setMicIndex = function (index, callbacks) {
            this.callbackResponse(callbacks, 2015);
            var data = {
                "cmd": 0x107df,
                "description": "tsdk_set_mic_index",
                "param": {
                    "index": index
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getMicIndex = function (callbacks) {
            this.callbackResponse(callbacks, 2016);
            var data = {
                "cmd": 0x107e0,
                "description": "tsdk_get_mic_index"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setSpeakIndex = function (index, callbacks) {
            this.callbackResponse(callbacks, 2017);
            var data = {
                "cmd": 0x107e1,
                "description": "tsdk_set_speak_index",
                "param": {
                    "index": index
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getSpeakIndex = function (callbacks) {
            this.callbackResponse(callbacks, 2018);
            var data = {
                "cmd": 0x107e2,
                "description": "tsdk_get_speak_index"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setVideoIndex = function (index, callbacks) {
            this.callbackResponse(callbacks, 2019);
            var data = {
                "cmd": 0x107e3,
                "description": "tsdk_set_video_index",
                "param": {
                    "index": index
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getVideoIndex = function (callbacks) {
            this.callbackResponse(callbacks, 2020);
            var data = {
                "cmd": 0x107e4,
                "description": "tsdk_get_video_index"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setSpeakVolume = function (volume, callbacks) {
            this.callbackResponse(callbacks, 2021);
            var data = {
                "cmd": 0x107e5,
                "description": "tsdk_set_speak_volume",
                "param": {
                    "volume": volume
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getSpeakVolume = function (callbacks) {
            this.callbackResponse(callbacks, 2022);
            var data = {
                "cmd": 0x107e6,
                "description": "tsdk_get_speak_volume"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.openVideoPreview = function (index, handle, callbacks) {
            this.callbackResponse(callbacks, 2023);
            var data = {
                "cmd": 0x107e7,
                "description": "tsdk_open_video_preview",
                "param": {
                    "index": index, "handle": handle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.closeVideoPreview = function (callbacks) {
            this.callbackResponse(callbacks, 2024);
            var data = {
                "cmd": 0x107e8,
                "description": "tsdk_close_video_preview"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setMobileAudioRoute = function (route, callbacks) {
            this.callbackResponse(callbacks, 2025);
            var data = {
                "cmd": 0x107e9,
                "description": "tsdk_set_mobile_audio_route",
                "param": {
                    "route": route
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getMobileAudioRoute = function (callbacks) {
            this.callbackResponse(callbacks, 2026);
            var data = {
                "cmd": 0x107ea,
                "description": "tsdk_get_mobile_audio_route"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.holdCall = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2027);
            var data = {
                "cmd": 0x107eb,
                "description": "tsdk_hold_call",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.unholdCall = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2028);
            var data = {
                "cmd": 0x107ec,
                "description": "tsdk_unhold_call",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.divertCall = function (callId, divertNumber, callbacks) {
            this.callbackResponse(callbacks, 2029);
            var data = {
                "cmd": 0x107ed,
                "description": "tsdk_divert_call",
                "param": {
                    "callId": callId, "divertNumber": divertNumber
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.blindTransfer = function (callId, transtoNumber, callbacks) {
            this.callbackResponse(callbacks, 2030);
            var data = {
                "cmd": 0x107ee,
                "description": "tsdk_blind_transfer",
                "param": {
                    "callId": callId, "transtoNumber": transtoNumber
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setIptService = function (type, isEnable, number, callbacks) {
            this.callbackResponse(callbacks, 2031);
            var data = {
                "cmd": 0x107ef,
                "description": "tsdk_set_ipt_service",
                "param": {
                    "type": type, "isEnable": isEnable, "number": number
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setVideoRender = function (callId, videoRender, callbacks) {
            this.callbackResponse(callbacks, 2032);
            var data = {
                "cmd": 0x107f0,
                "description": "tsdk_set_video_render",
                "param": {
                    "callId": callId, "videoRender": videoRender
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setCaptureRotation = function (callId, cameraIndex, captureRotation, callbacks) {
            this.callbackResponse(callbacks, 2033);
            var data = {
                "cmd": 0x107f1,
                "description": "tsdk_set_capture_rotation",
                "param": {
                    "callId": callId, "cameraIndex": cameraIndex, "captureRotation": captureRotation
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setDisplayRotation = function (callId, displayRotation, windowType, callbacks) {
            this.callbackResponse(callbacks, 2034);
            var data = {
                "cmd": 0x107f2,
                "description": "tsdk_set_display_rotation",
                "param": {
                    "callId": callId, "displayRotation": displayRotation, "windowType": windowType
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setCameraPicture = function (callId, fileName, callbacks) {
            this.callbackResponse(callbacks, 2035);
            var data = {
                "cmd": 0x107f3,
                "description": "tsdk_set_camera_picture",
                "param": {
                    "callId": callId, "fileName": fileName
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.muteSpeaker = function (callId, isMute, callbacks) {
            this.callbackResponse(callbacks, 2036);
            var data = {
                "cmd": 0x107f4,
                "description": "tsdk_mute_speaker",
                "param": {
                    "callId": callId, "isMute": isMute
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setMicVolume = function (volume, callbacks) {
            this.callbackResponse(callbacks, 2037);
            var data = {
                "cmd": 0x107f5,
                "description": "tsdk_set_mic_volume",
                "param": {
                    "volume": volume
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getMicVolume = function (callbacks) {
            this.callbackResponse(callbacks, 2038);
            var data = {
                "cmd": 0x107f6,
                "description": "tsdk_get_mic_volume"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setSvcVideoWindow = function (count, callId, window, callbacks) {
            this.callbackResponse(callbacks, 2039);
            var data = {
                "cmd": 0x107f7,
                "description": "tsdk_set_svc_video_window",
                "param": {
                    "count": count, "callId": callId, "window": window
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getCallStatisticInfo = function (callId, callbacks) {
            this.callbackResponse(callbacks, 2040);
            var data = {
                "cmd": 0x107f8,
                "description": "tsdk_get_call_statistic_info",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setCameraInfo = function (cameraInfo, callbacks) {
            this.callbackResponse(callbacks, 2041);
            var data = {
                "cmd": 0x107f9,
                "description": "tsdk_set_camera_info",
                "param": {
                    "cameraInfo": cameraInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.getHardwareAccelerateCap = function (callbacks) {
            this.callbackResponse(callbacks, 2042);
            var data = {
                "cmd": 0x107fa,
                "description": "tsdk_get_hardware_accelerate_cap"
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.removeSvcVideoWindow = function (count, callId, window, callbacks) {
            this.callbackResponse(callbacks, 2043);
            var data = {
                "cmd": 0x107fb,
                "description": "tsdk_remove_svc_video_window",
                "param": {
                    "count": count, "callId": callId, "window": window
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCall.prototype.setBasicCallEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtCallStartResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2001] = callbacks.OnEvtCallStartResult;
            }
            if (callbacks && typeof callbacks.OnEvtCallIncoming == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2002] = callbacks.OnEvtCallIncoming;
            }
            if (callbacks && typeof callbacks.OnEvtCallOutgoing == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2003] = callbacks.OnEvtCallOutgoing;
            }
            if (callbacks && typeof callbacks.OnEvtCallRingback == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2004] = callbacks.OnEvtCallRingback;
            }
            if (callbacks && typeof callbacks.OnEvtCallRtpCreated == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2005] = callbacks.OnEvtCallRtpCreated;
            }
            if (callbacks && typeof callbacks.OnEvtCallConnected == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2006] = callbacks.OnEvtCallConnected;
            }
            if (callbacks && typeof callbacks.OnEvtCallEnded == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2007] = callbacks.OnEvtCallEnded;
            }
            if (callbacks && typeof callbacks.OnEvtCallDestroy == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2008] = callbacks.OnEvtCallDestroy;
            }
            if (callbacks && typeof callbacks.OnEvtOpenVideoReq == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2009] = callbacks.OnEvtOpenVideoReq;
            }
            if (callbacks && typeof callbacks.OnEvtRefuseOpenVideoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2010] = callbacks.OnEvtRefuseOpenVideoInd;
            }
            if (callbacks && typeof callbacks.OnEvtCloseVideoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2011] = callbacks.OnEvtCloseVideoInd;
            }
            if (callbacks && typeof callbacks.OnEvtOpenVideoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2012] = callbacks.OnEvtOpenVideoInd;
            }
            if (callbacks && typeof callbacks.OnEvtRefreshViewInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2013] = callbacks.OnEvtRefreshViewInd;
            }
            if (callbacks && typeof callbacks.OnEvtCallRouteChange == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2014] = callbacks.OnEvtCallRouteChange;
            }
            if (callbacks && typeof callbacks.OnEvtPlayMediaEnd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2015] = callbacks.OnEvtPlayMediaEnd;
            }
            if (callbacks && typeof callbacks.OnEvtSessionModified == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2016] = callbacks.OnEvtSessionModified;
            }
            if (callbacks && typeof callbacks.OnEvtSessionCodec == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2017] = callbacks.OnEvtSessionCodec;
            }
            if (callbacks && typeof callbacks.OnEvtHoldSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2018] = callbacks.OnEvtHoldSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtHoldFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2019] = callbacks.OnEvtHoldFailed;
            }
            if (callbacks && typeof callbacks.OnEvtUnholdSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2020] = callbacks.OnEvtUnholdSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtUnholdFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2021] = callbacks.OnEvtUnholdFailed;
            }
            if (callbacks && typeof callbacks.OnEvtEndcallFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2022] = callbacks.OnEvtEndcallFailed;
            }
            if (callbacks && typeof callbacks.OnEvtDivertFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2023] = callbacks.OnEvtDivertFailed;
            }
            if (callbacks && typeof callbacks.OnEvtBldTransferSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2024] = callbacks.OnEvtBldTransferSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtBldTransferFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2025] = callbacks.OnEvtBldTransferFailed;
            }
            if (callbacks && typeof callbacks.OnEvtSetIptServiceResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2026] = callbacks.OnEvtSetIptServiceResult;
            }
            if (callbacks && typeof callbacks.OnEvtIptServiceInfo == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2027] = callbacks.OnEvtIptServiceInfo;
            }
            if (callbacks && typeof callbacks.OnEvtStatisticInfo == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2028] = callbacks.OnEvtStatisticInfo;
            }
            if (callbacks && typeof callbacks.OnEvtMediaErrorInfo == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2029] = callbacks.OnEvtMediaErrorInfo;
            }
            if (callbacks && typeof callbacks.OnEvtNoStream == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[2030] = callbacks.OnEvtNoStream;
            }
        };
        ;
        return TsdkCall;
    }());
    exports.default = TsdkCall;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, Util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkServiceSocket = (function () {
        function TsdkServiceSocket(opts) {
            var _this = this;
            this.websocket = {};
            this.notifyFuncs = [];
            this.rspFuncs = [];
            this.sendData = function (data) {
                _this.websocket.send(data);
            };
            var serviceAddr = opts.svrAddr || "127.0.0.1";
            var servicePort = opts.svrPort || "7684";
            var pcol = "ws://";
            if (opts.ssl === 1) {
                pcol = "wss://";
            }
            this.websocket = new WebSocket(pcol + serviceAddr + ":" + servicePort, "tsdk_ws_ec_service_protocol");
            this.websocket.onopen = opts.ready;
            this.websocket.onclose = opts.close;
            this.websocket.onmessage = function (msg) {
                var data = JSON.parse(msg.data);
                if (data.notify != 2028) {
                    var logInfo = Util.replaceLogInfo(data);
                    util_1.default.debug("tsdkServiceSocket", logInfo);
                }
                if (data.notify > 0) {
                    var notifyIdx = data.notify;
                    if (typeof _this.notifyFuncs[notifyIdx] == "function") {
                        _this.notifyFuncs[notifyIdx](data);
                    }
                }
                if (data.rsp > 0) {
                    var rspIdx = data.rsp & 0xffff;
                    if (typeof _this.rspFuncs[rspIdx] == "function") {
                        _this.rspFuncs[rspIdx](data);
                    }
                }
            };
        }
        ;
        TsdkServiceSocket.prototype.closeChannel = function () {
            util_1.default.error("tsdkServiceSocket", "tsdk_ws_ec_service_protocol close");
            this.websocket.close();
        };
        return TsdkServiceSocket;
    }());
    exports.default = TsdkServiceSocket;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, Util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkFFI = (function () {
        function TsdkFFI(opts) {
            var _this = this;
            this.notifyFuncs = [];
            this.rspFuncs = [];
            this.sendData = function (data) {
                if (_this.ffiAdaptLib != undefined) {
                    var ret = _this.ffiAdaptLib.tsdk_ffi_send_cmd(data);
                    if (ret != 0) {
                        util_1.default.error("tsdkFFI", "tsdk_ffi_send_cmd is return: " + ret);
                    }
                }
            };
            var ffiLibraryFunc = opts.ffiLibraryFunc;
            var ffiCallbackFunc = opts.ffiCallbackFunc;
            var libraryPath = opts.libraryPath || './';
            try {
                this.ffiAdaptLib = ffiLibraryFunc('tsdk_ffi_adapt.dll', {
                    'tsdk_ffi_init': ["int", ['string', 'pointer']],
                    'tsdk_ffi_send_cmd': ["int", ['string']]
                });
            }
            catch (error) {
                util_1.default.error("tsdkFFI", "ffi.Library is return failed");
                util_1.default.error("tsdkFFI", error.message);
                throw error;
            }
            this.ffiCallback = ffiCallbackFunc("void", ['string'], function (msg) {
                var data = JSON.parse(msg);
                var logInfo = Util.replaceLogInfo(data);
                util_1.default.debug("tsdkFFI", logInfo);
                if (data.notify > 0) {
                    var notifyIdx = data.notify;
                    if (typeof _this.notifyFuncs[notifyIdx] == "function") {
                        _this.notifyFuncs[notifyIdx](data);
                    }
                }
                if (data.rsp > 0) {
                    var rspIdx = data.rsp & 0xffff;
                    if (typeof _this.rspFuncs[rspIdx] == "function") {
                        _this.rspFuncs[rspIdx](data);
                    }
                }
            });
            var ret = this.ffiAdaptLib.tsdk_ffi_init(libraryPath, this.ffiCallback);
            if (ret != 0) {
                util_1.default.error("tsdkFFI", "tsdk_ffi_init is return: " + ret);
            }
            else {
                util_1.default.info("tsdkFFI", "tsdk_ffi_init is success.");
            }
        }
        ;
        return TsdkFFI;
    }());
    exports.default = TsdkFFI;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkManager = (function () {
        function TsdkManager(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkManager.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkManager.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkManager.prototype.setConfigParam = function (params, callbacks) {
            this.callbackResponse(callbacks, 1);
            var data = {
                "cmd": 0x10001,
                "description": "tsdk_set_config_param",
                "param": params
            };
            this.sendData(data);
        };
        ;
        TsdkManager.prototype.init = function (appInfo, callbacks) {
            this.callbackResponse(callbacks, 2);
            var data = {
                "cmd": 0x10002,
                "description": "tsdk_init",
                "param": {
                    "appInfo": appInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkManager.prototype.uninit = function (callbacks) {
            this.callbackResponse(callbacks, 3);
            var data = {
                "cmd": 0x10003,
                "description": "tsdk_uninit"
            };
            this.sendData(data);
        };
        ;
        TsdkManager.prototype.getVersion = function (callbacks) {
            this.callbackResponse(callbacks, 4);
            var data = {
                "cmd": 0x10004,
                "description": "tsdk_get_version"
            };
            this.sendData(data);
        };
        ;
        return TsdkManager;
    }());
    exports.default = TsdkManager;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManagerService = (function () {
        function ManagerService(invokeMode, svrAddr, svrPort, ssl, ffiLibraryFunc, ffiCallbackFunc, libraryPath) {
            this.wrapper = tsdkManagerWrapper_1.default.getInstance();
            try {
                this.wrapper.build(invokeMode, svrAddr, svrPort, ssl, ffiLibraryFunc, ffiCallbackFunc, libraryPath);
            }
            catch (error) {
                throw error;
            }
        }
        ManagerService.prototype.setConfigParam = function (configParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setConfigParam(configParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ManagerService.prototype.init = function (appInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.init(appInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ManagerService.prototype.uninit = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uninit()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ManagerService.prototype.getVersion = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getVersion()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        return ManagerService;
    }());
    exports.default = ManagerService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(342)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkLoginWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoginService = (function () {
        function LoginService() {
            this.wrapper = tsdkLoginWrapper_1.default.getInstance();
            this.wrapper.build();
            LoginService.registerLoginEvent();
        }
        LoginService.prototype.login = function (loginParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.login(loginParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        LoginService.prototype.logout = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.logout()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        LoginService.prototype.setPushService = function (pushServiceInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setPushService(pushServiceInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        LoginService.prototype.modifyPassword = function (modifyPassword, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.modifyPassword(modifyPassword)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        LoginService.registerLoginEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("LoginService", "registerLoginEvent");
                    wrapper = tsdkLoginWrapper_1.default.getInstance();
                    wrapper.registerLoginEvent({
                        OnEvtAuthSuccess: LoginService.handleOnEvtAuthSuccess,
                        OnEvtAuthFailed: LoginService.handleOnEvtAuthFailed,
                        OnEvtAuthRefreshFailed: LoginService.handleOnEvtAuthRefreshFailed,
                        OnEvtLoginSuccess: LoginService.handleOnEvtLoginSuccess,
                        OnEvtLoginFailed: LoginService.handleOnEvtLoginFailed,
                        OnEvtLogoutSuccess: LoginService.handleOnEvtLogoutSuccess,
                        OnEvtLogoutFailed: LoginService.handleOnEvtLogoutFailed,
                        OnEvtForceLogout: LoginService.handleOnEvtForceLogout,
                        OnEvtVoipAccountStatus: LoginService.handleOnEvtVoipAccountStatus,
                        OnEvtImAccountStatus: LoginService.handleOnEvtImAccountStatus,
                        OnEvtFirewallDetectFailed: LoginService.handleOnEvtFirewallDetectFailed,
                        OnEvtBuildStgTunnelFailed: LoginService.handleOnEvtBuildStgTunnelFailed,
                        OnEvtSecurityTunnelInfoInd: LoginService.handleOnEvtSecurityTunnelInfoInd,
                        OnEvtGetTempUserResult: LoginService.handleOnEvtGetTempUserResult,
                        OnEvtModifyPasswordResult: LoginService.handleOnEvtModifyPasswordResult,
                        OnEvtLoginResumingInd: LoginService.handleOnEvtLoginResumingInd,
                        OnEvtLoginResumeResult: LoginService.handleOnEvtLoginResumeResult,
                    });
                    return [2];
                });
            });
        };
        ;
        LoginService.handleOnEvtAuthSuccess = function (data) {
            observer_1.default.publish('OnEvtAuthSuccess', data);
        };
        LoginService.handleOnEvtAuthFailed = function (data) {
            observer_1.default.publish('OnEvtAuthFailed', data);
        };
        LoginService.handleOnEvtAuthRefreshFailed = function (data) {
            observer_1.default.publish('OnEvtAuthRefreshFailed', data);
        };
        LoginService.handleOnEvtLoginSuccess = function (data) {
            observer_1.default.publish('OnEvtLoginSuccess', data);
        };
        LoginService.handleOnEvtLoginFailed = function (data) {
            observer_1.default.publish('OnEvtLoginFailed', data);
        };
        LoginService.handleOnEvtLogoutSuccess = function (data) {
            observer_1.default.publish('OnEvtLogoutSuccess', data);
        };
        LoginService.handleOnEvtLogoutFailed = function (data) {
            observer_1.default.publish('OnEvtLogoutFailed', data);
        };
        LoginService.handleOnEvtForceLogout = function (data) {
            observer_1.default.publish('OnEvtForceLogout', data);
        };
        LoginService.handleOnEvtVoipAccountStatus = function (data) {
            observer_1.default.publish('OnEvtVoipAccountStatus', data);
        };
        LoginService.handleOnEvtImAccountStatus = function (data) {
            observer_1.default.publish('OnEvtImAccountStatus', data);
        };
        LoginService.handleOnEvtFirewallDetectFailed = function (data) {
            observer_1.default.publish('OnEvtFirewallDetectFailed', data);
        };
        LoginService.handleOnEvtBuildStgTunnelFailed = function (data) {
            observer_1.default.publish('OnEvtBuildStgTunnelFailed', data);
        };
        LoginService.handleOnEvtSecurityTunnelInfoInd = function (data) {
            observer_1.default.publish('OnEvtSecurityTunnelInfoInd', data);
        };
        LoginService.handleOnEvtGetTempUserResult = function (data) {
            observer_1.default.publish('OnEvtGetTempUserResult', data);
        };
        LoginService.handleOnEvtModifyPasswordResult = function (data) {
            observer_1.default.publish('OnEvtModifyPasswordResult', data);
        };
        LoginService.handleOnEvtLoginResumingInd = function (data) {
            observer_1.default.publish('OnEvtLoginResumingInd', data);
        };
        LoginService.handleOnEvtLoginResumeResult = function (data) {
            observer_1.default.publish('OnEvtLoginResumeResult', data);
        };
        return LoginService;
    }());
    exports.default = LoginService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(343), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkLogin_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkLoginWrapper = (function () {
        function TsdkLoginWrapper() {
            if (TsdkLoginWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkLoginWrapper.getInstance() instead of new.");
            }
            TsdkLoginWrapper._instance = this;
        }
        TsdkLoginWrapper.getInstance = function () {
            return TsdkLoginWrapper._instance;
        };
        TsdkLoginWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkLoginWrapper", "step in TsdkLoginWrapper to build");
                    if (!TsdkLoginWrapper.tsdkLogin) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkLoginWrapper.tsdkLogin = new tsdkLogin_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkLoginWrapper.tsdkLogin = new tsdkLogin_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkLoginWrapper.prototype.login = function (loginParam) {
            util_1.default.info("TsdkLoginWrapper", "login");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkLoginWrapper.tsdkLogin.login(loginParam, callback);
            return promise;
        };
        ;
        TsdkLoginWrapper.prototype.logout = function () {
            util_1.default.info("TsdkLoginWrapper", "logout");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkLoginWrapper.tsdkLogin.logout(callback);
            return promise;
        };
        ;
        TsdkLoginWrapper.prototype.setPushService = function (pushServiceInfo) {
            util_1.default.info("TsdkLoginWrapper", "setPushService");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkLoginWrapper.tsdkLogin.setPushService(pushServiceInfo, callback);
            return promise;
        };
        ;
        TsdkLoginWrapper.prototype.modifyPassword = function (modifyPassword) {
            util_1.default.info("TsdkLoginWrapper", "modifyPassword");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkLoginWrapper.tsdkLogin.modifyPassword(modifyPassword, callback);
            return promise;
        };
        ;
        TsdkLoginWrapper.prototype.registerLoginEvent = function (callbacks) {
            TsdkLoginWrapper.tsdkLogin.setBasicLoginEvent(callbacks);
        };
        TsdkLoginWrapper._instance = new TsdkLoginWrapper();
        return TsdkLoginWrapper;
    }());
    exports.default = TsdkLoginWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkLogin = (function () {
        function TsdkLogin(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkLogin.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkLogin.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkLogin.prototype.login = function (loginParam, callbacks) {
            this.callbackResponse(callbacks, 1001);
            var data = {
                "cmd": 0x103e9,
                "description": "tsdk_login",
                "param": {
                    "loginParam": loginParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkLogin.prototype.logout = function (callbacks) {
            this.callbackResponse(callbacks, 1002);
            var data = {
                "cmd": 0x103ea,
                "description": "tsdk_logout"
            };
            this.sendData(data);
        };
        ;
        TsdkLogin.prototype.setPushService = function (pushServiceInfo, callbacks) {
            this.callbackResponse(callbacks, 1003);
            var data = {
                "cmd": 0x103eb,
                "description": "tsdk_set_push_service",
                "param": {
                    "pushServiceInfo": pushServiceInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkLogin.prototype.modifyPassword = function (modifyPassword, callbacks) {
            this.callbackResponse(callbacks, 1004);
            var data = {
                "cmd": 0x103ec,
                "description": "tsdk_modify_password",
                "param": {
                    "modifyPassword": modifyPassword
                }
            };
            this.sendData(data);
        };
        ;
        TsdkLogin.prototype.setBasicLoginEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtAuthSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1001] = callbacks.OnEvtAuthSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtAuthFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1002] = callbacks.OnEvtAuthFailed;
            }
            if (callbacks && typeof callbacks.OnEvtAuthRefreshFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1003] = callbacks.OnEvtAuthRefreshFailed;
            }
            if (callbacks && typeof callbacks.OnEvtLoginSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1004] = callbacks.OnEvtLoginSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtLoginFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1005] = callbacks.OnEvtLoginFailed;
            }
            if (callbacks && typeof callbacks.OnEvtLogoutSuccess == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1006] = callbacks.OnEvtLogoutSuccess;
            }
            if (callbacks && typeof callbacks.OnEvtLogoutFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1007] = callbacks.OnEvtLogoutFailed;
            }
            if (callbacks && typeof callbacks.OnEvtForceLogout == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1008] = callbacks.OnEvtForceLogout;
            }
            if (callbacks && typeof callbacks.OnEvtVoipAccountStatus == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1009] = callbacks.OnEvtVoipAccountStatus;
            }
            if (callbacks && typeof callbacks.OnEvtImAccountStatus == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1010] = callbacks.OnEvtImAccountStatus;
            }
            if (callbacks && typeof callbacks.OnEvtFirewallDetectFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1011] = callbacks.OnEvtFirewallDetectFailed;
            }
            if (callbacks && typeof callbacks.OnEvtBuildStgTunnelFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1012] = callbacks.OnEvtBuildStgTunnelFailed;
            }
            if (callbacks && typeof callbacks.OnEvtSecurityTunnelInfoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1013] = callbacks.OnEvtSecurityTunnelInfoInd;
            }
            if (callbacks && typeof callbacks.OnEvtGetTempUserResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1014] = callbacks.OnEvtGetTempUserResult;
            }
            if (callbacks && typeof callbacks.OnEvtModifyPasswordResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1015] = callbacks.OnEvtModifyPasswordResult;
            }
            if (callbacks && typeof callbacks.OnEvtLoginResumingInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1016] = callbacks.OnEvtLoginResumingInd;
            }
            if (callbacks && typeof callbacks.OnEvtLoginResumeResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[1017] = callbacks.OnEvtLoginResumeResult;
            }
        };
        ;
        return TsdkLogin;
    }());
    exports.default = TsdkLogin;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(345)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkConfWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfService = (function () {
        function ConfService() {
            this.wrapper = tsdkConfWrapper_1.default.getInstance();
            this.wrapper.build();
            ConfService.registerConfEvent();
        }
        ConfService.prototype.bookConference = function (bookConfInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.bookConference(bookConfInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.queryConferenceList = function (queryReq, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.queryConferenceList(queryReq)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.queryConferenceDetail = function (queryReq, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.queryConferenceDetail(queryReq)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.joinConference = function (joinNumber, isVideoJoin, confJoinParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.joinConference(joinNumber, isVideoJoin, confJoinParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.acceptConference = function (confHandle, joinVideoConf, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.acceptConference(confHandle, joinVideoConf)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.rejectConference = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.rejectConference(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.leaveConference = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.leaveConference(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.endConference = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.endConference(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.upgradeConference = function (confHandle, upgradeParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.upgradeConference(confHandle, upgradeParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.muteConference = function (confHandle, isMute, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.muteConference(confHandle, isMute)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.lockConference = function (confHandle, isLock, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.lockConference(confHandle, isLock)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.addAttendee = function (confHandle, addAttendeesInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.addAttendee(confHandle, addAttendeesInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.redialAttendee = function (confHandle, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.redialAttendee(confHandle, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.hangUpAttendee = function (confHandle, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.hangUpAttendee(confHandle, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.removeAttendee = function (confHandle, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.removeAttendee(confHandle, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.muteAttendee = function (confHandle, attendee, isMute, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.muteAttendee(confHandle, attendee, isMute)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setHandup = function (confHandle, isHandup, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setHandup(confHandle, isHandup, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setVideoMode = function (confHandle, mode, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setVideoMode(confHandle, mode)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.watchAttendee = function (confHandle, watchAttendeeInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.watchAttendee(confHandle, watchAttendeeInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.broadcastAttendee = function (confHandle, attendee, isBroadcast, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.broadcastAttendee(confHandle, attendee, isBroadcast)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.requestChairman = function (confHandle, password, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.requestChairman(confHandle, password)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.releaseChairman = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.releaseChairman(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.postponeConference = function (confHandle, time, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.postponeConference(confHandle, time)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.joinDataConference = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.joinDataConference(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setPresenter = function (confHandle, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setPresenter(confHandle, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.requestPresenter = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.requestPresenter(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareSetOwner = function (action, confHandle, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareSetOwner(action, confHandle, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareStart = function (shareType, confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareStart(shareType, confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareStop = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareStop(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareGetScreenData = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareGetScreenData(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareRequestPrivilege = function (confHandle, privilegeType, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareRequestPrivilege(confHandle, privilegeType)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareSetPrivilege = function (action, confHandle, privilegeType, attendee, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareSetPrivilege(action, confHandle, privilegeType, attendee)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareInputWindowMsg = function (wparam, lparam, dataContent, dataLen, msgType, confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareInputWindowMsg(wparam, lparam, dataContent, dataLen, msgType, confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareBeginAnnotation = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareBeginAnnotation(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareEndAnnotation = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareEndAnnotation(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareGetAppList = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareGetAppList(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareSetApp = function (appWindow, action, confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareSetApp(appWindow, action, confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareSetParam = function (confHandle, asParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareSetParam(confHandle, asParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.appShareGetParam = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.appShareGetParam(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.whiteboardNewDocument = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.whiteboardNewDocument(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.whiteboardDeleteDocument = function (confHandle, documentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.whiteboardDeleteDocument(confHandle, documentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.whiteboardNewPage = function (width, confHandle, documentId, height, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.whiteboardNewPage(width, confHandle, documentId, height)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.whiteboardDeletePage = function (confHandle, pageId, documentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.whiteboardDeletePage(confHandle, pageId, documentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareOpenDocument = function (confHandle, option, fileName, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareOpenDocument(confHandle, option, fileName)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareCloseDocument = function (confHandle, documentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareCloseDocument(confHandle, documentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareSetCurrentPage = function (confHandle, pageInfo, isSync, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareSetCurrentPage(confHandle, pageInfo, isSync)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareSetCanvasSize = function (confHandle, componentId, isRedraw, size, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareSetCanvasSize(confHandle, componentId, isRedraw, size)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareGetSurfaceBmp = function (confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareGetSurfaceBmp(confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareGetSynDocumentInfo = function (confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareGetSynDocumentInfo(confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareSetBackgroundColor = function (confHandle, componentId, backgroundColor, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareSetBackgroundColor(confHandle, componentId, backgroundColor)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareSetDisplayMode = function (confHandle, displayMode, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareSetDisplayMode(confHandle, displayMode, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationCreateStart = function (point, pageInfo, mainType, subType, confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationCreateStart(point, pageInfo, mainType, subType, confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationCreateUpdate = function (params, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationCreateUpdate(params)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationCreateDone = function (confHandle, componentId, isCancel, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationCreateDone(confHandle, componentId, isCancel)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSelectStart = function (confHandle, point, componentId, pageInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSelectStart(confHandle, point, componentId, pageInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSelectUpdate = function (confHandle, componentId, point, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSelectUpdate(confHandle, componentId, point)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSelectDone = function (attendee, confHandle, selectMode, componentId, point, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSelectDone(attendee, confHandle, selectMode, componentId, point)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationLaserPointerStart = function (confHandle, laserPointerInfo, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationLaserPointerStart(confHandle, laserPointerInfo, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationLaserPointerMoveto = function (confHandle, componentId, point, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationLaserPointerMoveto(confHandle, componentId, point)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationLaserPointerStop = function (confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationLaserPointerStop(confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationTextCreate = function (textInfo, confHandle, componentId, pageInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationTextCreate(textInfo, confHandle, componentId, pageInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationTextUpdate = function (annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationTextUpdate(annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationTextGetInfo = function (confHandle, annotationId, componentId, pageInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationTextGetInfo(confHandle, annotationId, componentId, pageInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationEditStart = function (count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationEditStart(count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationEditUpdate = function (confHandle, componentId, currentPoint, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationEditUpdate(confHandle, componentId, currentPoint)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationEditDone = function (confHandle, componentId, isCancel, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationEditDone(confHandle, componentId, isCancel)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationHitTestPoint = function (confHandle, hitTestPointInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationHitTestPoint(confHandle, hitTestPointInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationHitTestRect = function (confHandle, hitTestRectInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationHitTestRect(confHandle, hitTestRectInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationHitTestLine = function (confHandle, hitTestLineInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationHitTestLine(confHandle, hitTestLineInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSetSelect = function (confHandle, isRedraw, selectInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSetSelect(confHandle, isRedraw, selectInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationDeleteAnnotation = function (confHandle, deleteInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationDeleteAnnotation(confHandle, deleteInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationGetAnnotationInfo = function (confHandle, annotationId, componentId, pageInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationGetAnnotationInfo(confHandle, annotationId, componentId, pageInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSetPen = function (newPenInfo, confHandle, componentId, penType, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSetPen(newPenInfo, confHandle, componentId, penType)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.annotationSetBrush = function (confHandle, componentId, newBrushInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.annotationSetBrush(confHandle, componentId, newBrushInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.sendChatMsgInConference = function (confHandle, chatMsgInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.sendChatMsgInConference(confHandle, chatMsgInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.sendHeartBeat = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.sendHeartBeat(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.p2pTransferToConference = function (callId, bookConfInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.p2pTransferToConference(callId, bookConfInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.joinConferenceByAnonymous = function (confJoinParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.joinConferenceByAnonymous(confJoinParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setCurrentSharingComponent = function (confHandle, componentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setCurrentSharingComponent(confHandle, componentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.docShareSetZoomMode = function (zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.docShareSetZoomMode(zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setRecordBroadcast = function (confHandle, recordBroadcast, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setRecordBroadcast(confHandle, recordBroadcast)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setLiveBroadcast = function (confHandle, liveBroadcast, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setLiveBroadcast(confHandle, liveBroadcast)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.setMixedPicture = function (confHandle, mixedPictureParams, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setMixedPicture(confHandle, mixedPictureParams)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.getShareStatisticInfo = function (confHandle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getShareStatisticInfo(confHandle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.renameSelf = function (confHandle, nickname, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.renameSelf(confHandle, nickname)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.prototype.allowAttendeeUnmute = function (confHandle, allowUnmute, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.allowAttendeeUnmute(confHandle, allowUnmute)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        ConfService.registerConfEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("ConfService", "registerConfEvent");
                    wrapper = tsdkConfWrapper_1.default.getInstance();
                    wrapper.registerConfEvent({
                        OnEvtBookConfResult: ConfService.handleOnEvtBookConfResult,
                        OnEvtQueryConfListResult: ConfService.handleOnEvtQueryConfListResult,
                        OnEvtQueryConfDetailResult: ConfService.handleOnEvtQueryConfDetailResult,
                        OnEvtJoinConfResult: ConfService.handleOnEvtJoinConfResult,
                        OnEvtGetDataconfParamResult: ConfService.handleOnEvtGetDataconfParamResult,
                        OnEvtConfctrlOperationResult: ConfService.handleOnEvtConfctrlOperationResult,
                        OnEvtInfoAndStatusUpdate: ConfService.handleOnEvtInfoAndStatusUpdate,
                        OnEvtSpeakerInd: ConfService.handleOnEvtSpeakerInd,
                        OnEvtRequestConfRightFailed: ConfService.handleOnEvtRequestConfRightFailed,
                        OnEvtConfIncomingInd: ConfService.handleOnEvtConfIncomingInd,
                        OnEvtConfEndInd: ConfService.handleOnEvtConfEndInd,
                        OnEvtJoinDataConfResult: ConfService.handleOnEvtJoinDataConfResult,
                        OnEvtAsScreenDataUpdate: ConfService.handleOnEvtAsScreenDataUpdate,
                        OnEvtAsOwnerChange: ConfService.handleOnEvtAsOwnerChange,
                        OnEvtAsStateChange: ConfService.handleOnEvtAsStateChange,
                        OnEvtRecvChatMsg: ConfService.handleOnEvtRecvChatMsg,
                        OnEvtPresenterGiveInd: ConfService.handleOnEvtPresenterGiveInd,
                        OnEvtTransToConfResult: ConfService.handleOnEvtTransToConfResult,
                        OnEvtDsDocLoadStart: ConfService.handleOnEvtDsDocLoadStart,
                        OnEvtDsDocNew: ConfService.handleOnEvtDsDocNew,
                        OnEvtDsDocPageLoaded: ConfService.handleOnEvtDsDocPageLoaded,
                        OnEvtDsDocPageNew: ConfService.handleOnEvtDsDocPageNew,
                        OnEvtDsDocLoadFinish: ConfService.handleOnEvtDsDocLoadFinish,
                        OnEvtDsDocPageDel: ConfService.handleOnEvtDsDocPageDel,
                        OnEvtDsDocDel: ConfService.handleOnEvtDsDocDel,
                        OnEvtDsDocCurrentPage: ConfService.handleOnEvtDsDocCurrentPage,
                        OnEvtDsDocCurrentPageInd: ConfService.handleOnEvtDsDocCurrentPageInd,
                        OnEvtDsDocDrawDataNotify: ConfService.handleOnEvtDsDocDrawDataNotify,
                        OnEvtDsDocPageDataDownload: ConfService.handleOnEvtDsDocPageDataDownload,
                        OnEvtWbDocNew: ConfService.handleOnEvtWbDocNew,
                        OnEvtWbDocDel: ConfService.handleOnEvtWbDocDel,
                        OnEvtWbPageNew: ConfService.handleOnEvtWbPageNew,
                        OnEvtWbPageDel: ConfService.handleOnEvtWbPageDel,
                        OnEvtWbDocCurrentPage: ConfService.handleOnEvtWbDocCurrentPage,
                        OnEvtWbDocCurrentPageInd: ConfService.handleOnEvtWbDocCurrentPageInd,
                        OnEvtWbDocDrawDataNotify: ConfService.handleOnEvtWbDocDrawDataNotify,
                        OnEvtShareStatusUpdateInd: ConfService.handleOnEvtShareStatusUpdateInd,
                        OnEvtAsScreenKeyframe: ConfService.handleOnEvtAsScreenKeyframe,
                        OnEvtAsScreenFirstKeyframe: ConfService.handleOnEvtAsScreenFirstKeyframe,
                        OnEvtDataComponentLoadInd: ConfService.handleOnEvtDataComponentLoadInd,
                        OnEvtConfBaseInfoInd: ConfService.handleOnEvtConfBaseInfoInd,
                        OnEvtAsPrivilegeChange: ConfService.handleOnEvtAsPrivilegeChange,
                        OnEvtSvcWatchInfoInd: ConfService.handleOnEvtSvcWatchInfoInd,
                        OnEvtConfResumingInd: ConfService.handleOnEvtConfResumingInd,
                        OnEvtConfResumeResult: ConfService.handleOnEvtConfResumeResult,
                        OnEvtConfEndResult: ConfService.handleOnEvtConfEndResult,
                        OnEvtConfSetShareOwnerFailed: ConfService.handleOnEvtConfSetShareOwnerFailed,
                        OnEvtConfStartShareFailed: ConfService.handleOnEvtConfStartShareFailed,
                    });
                    return [2];
                });
            });
        };
        ;
        ConfService.handleOnEvtBookConfResult = function (data) {
            observer_1.default.publish('OnEvtBookConfResult', data);
        };
        ConfService.handleOnEvtQueryConfListResult = function (data) {
            observer_1.default.publish('OnEvtQueryConfListResult', data);
        };
        ConfService.handleOnEvtQueryConfDetailResult = function (data) {
            observer_1.default.publish('OnEvtQueryConfDetailResult', data);
        };
        ConfService.handleOnEvtJoinConfResult = function (data) {
            observer_1.default.publish('OnEvtJoinConfResult', data);
        };
        ConfService.handleOnEvtGetDataconfParamResult = function (data) {
            observer_1.default.publish('OnEvtGetDataconfParamResult', data);
        };
        ConfService.handleOnEvtConfctrlOperationResult = function (data) {
            observer_1.default.publish('OnEvtConfctrlOperationResult', data);
        };
        ConfService.handleOnEvtInfoAndStatusUpdate = function (data) {
            observer_1.default.publish('OnEvtInfoAndStatusUpdate', data);
        };
        ConfService.handleOnEvtSpeakerInd = function (data) {
            observer_1.default.publish('OnEvtSpeakerInd', data);
        };
        ConfService.handleOnEvtRequestConfRightFailed = function (data) {
            observer_1.default.publish('OnEvtRequestConfRightFailed', data);
        };
        ConfService.handleOnEvtConfIncomingInd = function (data) {
            observer_1.default.publish('OnEvtConfIncomingInd', data);
        };
        ConfService.handleOnEvtConfEndInd = function (data) {
            observer_1.default.publish('OnEvtConfEndInd', data);
        };
        ConfService.handleOnEvtJoinDataConfResult = function (data) {
            observer_1.default.publish('OnEvtJoinDataConfResult', data);
        };
        ConfService.handleOnEvtAsScreenDataUpdate = function (data) {
            observer_1.default.publish('OnEvtAsScreenDataUpdate', data);
        };
        ConfService.handleOnEvtAsOwnerChange = function (data) {
            observer_1.default.publish('OnEvtAsOwnerChange', data);
        };
        ConfService.handleOnEvtAsStateChange = function (data) {
            observer_1.default.publish('OnEvtAsStateChange', data);
        };
        ConfService.handleOnEvtRecvChatMsg = function (data) {
            observer_1.default.publish('OnEvtRecvChatMsg', data);
        };
        ConfService.handleOnEvtPresenterGiveInd = function (data) {
            observer_1.default.publish('OnEvtPresenterGiveInd', data);
        };
        ConfService.handleOnEvtTransToConfResult = function (data) {
            observer_1.default.publish('OnEvtTransToConfResult', data);
        };
        ConfService.handleOnEvtDsDocLoadStart = function (data) {
            observer_1.default.publish('OnEvtDsDocLoadStart', data);
        };
        ConfService.handleOnEvtDsDocNew = function (data) {
            observer_1.default.publish('OnEvtDsDocNew', data);
        };
        ConfService.handleOnEvtDsDocPageLoaded = function (data) {
            observer_1.default.publish('OnEvtDsDocPageLoaded', data);
        };
        ConfService.handleOnEvtDsDocPageNew = function (data) {
            observer_1.default.publish('OnEvtDsDocPageNew', data);
        };
        ConfService.handleOnEvtDsDocLoadFinish = function (data) {
            observer_1.default.publish('OnEvtDsDocLoadFinish', data);
        };
        ConfService.handleOnEvtDsDocPageDel = function (data) {
            observer_1.default.publish('OnEvtDsDocPageDel', data);
        };
        ConfService.handleOnEvtDsDocDel = function (data) {
            observer_1.default.publish('OnEvtDsDocDel', data);
        };
        ConfService.handleOnEvtDsDocCurrentPage = function (data) {
            observer_1.default.publish('OnEvtDsDocCurrentPage', data);
        };
        ConfService.handleOnEvtDsDocCurrentPageInd = function (data) {
            observer_1.default.publish('OnEvtDsDocCurrentPageInd', data);
        };
        ConfService.handleOnEvtDsDocDrawDataNotify = function (data) {
            observer_1.default.publish('OnEvtDsDocDrawDataNotify', data);
        };
        ConfService.handleOnEvtDsDocPageDataDownload = function (data) {
            observer_1.default.publish('OnEvtDsDocPageDataDownload', data);
        };
        ConfService.handleOnEvtWbDocNew = function (data) {
            observer_1.default.publish('OnEvtWbDocNew', data);
        };
        ConfService.handleOnEvtWbDocDel = function (data) {
            observer_1.default.publish('OnEvtWbDocDel', data);
        };
        ConfService.handleOnEvtWbPageNew = function (data) {
            observer_1.default.publish('OnEvtWbPageNew', data);
        };
        ConfService.handleOnEvtWbPageDel = function (data) {
            observer_1.default.publish('OnEvtWbPageDel', data);
        };
        ConfService.handleOnEvtWbDocCurrentPage = function (data) {
            observer_1.default.publish('OnEvtWbDocCurrentPage', data);
        };
        ConfService.handleOnEvtWbDocCurrentPageInd = function (data) {
            observer_1.default.publish('OnEvtWbDocCurrentPageInd', data);
        };
        ConfService.handleOnEvtWbDocDrawDataNotify = function (data) {
            observer_1.default.publish('OnEvtWbDocDrawDataNotify', data);
        };
        ConfService.handleOnEvtShareStatusUpdateInd = function (data) {
            observer_1.default.publish('OnEvtShareStatusUpdateInd', data);
        };
        ConfService.handleOnEvtAsScreenKeyframe = function (data) {
            observer_1.default.publish('OnEvtAsScreenKeyframe', data);
        };
        ConfService.handleOnEvtAsScreenFirstKeyframe = function (data) {
            observer_1.default.publish('OnEvtAsScreenFirstKeyframe', data);
        };
        ConfService.handleOnEvtDataComponentLoadInd = function (data) {
            observer_1.default.publish('OnEvtDataComponentLoadInd', data);
        };
        ConfService.handleOnEvtConfBaseInfoInd = function (data) {
            observer_1.default.publish('OnEvtConfBaseInfoInd', data);
        };
        ConfService.handleOnEvtAsPrivilegeChange = function (data) {
            observer_1.default.publish('OnEvtAsPrivilegeChange', data);
        };
        ConfService.handleOnEvtSvcWatchInfoInd = function (data) {
            observer_1.default.publish('OnEvtSvcWatchInfoInd', data);
        };
        ConfService.handleOnEvtConfResumingInd = function (data) {
            observer_1.default.publish('OnEvtConfResumingInd', data);
        };
        ConfService.handleOnEvtConfResumeResult = function (data) {
            observer_1.default.publish('OnEvtConfResumeResult', data);
        };
        ConfService.handleOnEvtConfEndResult = function (data) {
            observer_1.default.publish('OnEvtConfEndResult', data);
        };
        ConfService.handleOnEvtConfSetShareOwnerFailed = function (data) {
            observer_1.default.publish('OnEvtConfSetShareOwnerFailed', data);
        };
        ConfService.handleOnEvtConfStartShareFailed = function (data) {
            observer_1.default.publish('OnEvtConfStartShareFailed', data);
        };
        return ConfService;
    }());
    exports.default = ConfService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(346), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkConf_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkConfWrapper = (function () {
        function TsdkConfWrapper() {
            if (TsdkConfWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkConfWrapper.getInstance() instead of new.");
            }
            TsdkConfWrapper._instance = this;
        }
        TsdkConfWrapper.getInstance = function () {
            return TsdkConfWrapper._instance;
        };
        TsdkConfWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkConfWrapper", "step in TsdkConfWrapper to build");
                    if (!TsdkConfWrapper.tsdkConf) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkConfWrapper.tsdkConf = new tsdkConf_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkConfWrapper.tsdkConf = new tsdkConf_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkConfWrapper.prototype.bookConference = function (bookConfInfo) {
            util_1.default.info("TsdkConfWrapper", "bookConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.bookConference(bookConfInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.queryConferenceList = function (queryReq) {
            util_1.default.info("TsdkConfWrapper", "queryConferenceList");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.queryConferenceList(queryReq, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.queryConferenceDetail = function (queryReq) {
            util_1.default.info("TsdkConfWrapper", "queryConferenceDetail");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.queryConferenceDetail(queryReq, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.joinConference = function (joinNumber, isVideoJoin, confJoinParam) {
            util_1.default.info("TsdkConfWrapper", "joinConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.joinConference(joinNumber, isVideoJoin, confJoinParam, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.acceptConference = function (confHandle, joinVideoConf) {
            util_1.default.info("TsdkConfWrapper", "acceptConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.acceptConference(confHandle, joinVideoConf, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.rejectConference = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "rejectConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.rejectConference(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.leaveConference = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "leaveConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.leaveConference(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.endConference = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "endConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.endConference(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.upgradeConference = function (confHandle, upgradeParam) {
            util_1.default.info("TsdkConfWrapper", "upgradeConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.upgradeConference(confHandle, upgradeParam, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.muteConference = function (confHandle, isMute) {
            util_1.default.info("TsdkConfWrapper", "muteConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.muteConference(confHandle, isMute, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.lockConference = function (confHandle, isLock) {
            util_1.default.info("TsdkConfWrapper", "lockConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.lockConference(confHandle, isLock, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.addAttendee = function (confHandle, addAttendeesInfo) {
            util_1.default.info("TsdkConfWrapper", "addAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.addAttendee(confHandle, addAttendeesInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.redialAttendee = function (confHandle, attendee) {
            util_1.default.info("TsdkConfWrapper", "redialAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.redialAttendee(confHandle, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.hangUpAttendee = function (confHandle, attendee) {
            util_1.default.info("TsdkConfWrapper", "hangUpAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.hangUpAttendee(confHandle, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.removeAttendee = function (confHandle, attendee) {
            util_1.default.info("TsdkConfWrapper", "removeAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.removeAttendee(confHandle, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.muteAttendee = function (confHandle, attendee, isMute) {
            util_1.default.info("TsdkConfWrapper", "muteAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.muteAttendee(confHandle, attendee, isMute, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setHandup = function (confHandle, isHandup, attendee) {
            util_1.default.info("TsdkConfWrapper", "setHandup");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setHandup(confHandle, isHandup, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setVideoMode = function (confHandle, mode) {
            util_1.default.info("TsdkConfWrapper", "setVideoMode");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setVideoMode(confHandle, mode, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.watchAttendee = function (confHandle, watchAttendeeInfo) {
            util_1.default.info("TsdkConfWrapper", "watchAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.watchAttendee(confHandle, watchAttendeeInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.broadcastAttendee = function (confHandle, attendee, isBroadcast) {
            util_1.default.info("TsdkConfWrapper", "broadcastAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.broadcastAttendee(confHandle, attendee, isBroadcast, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.requestChairman = function (confHandle, password) {
            util_1.default.info("TsdkConfWrapper", "requestChairman");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.requestChairman(confHandle, password, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.releaseChairman = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "releaseChairman");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.releaseChairman(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.postponeConference = function (confHandle, time) {
            util_1.default.info("TsdkConfWrapper", "postponeConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.postponeConference(confHandle, time, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.joinDataConference = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "joinDataConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.joinDataConference(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setPresenter = function (confHandle, attendee) {
            util_1.default.info("TsdkConfWrapper", "setPresenter");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setPresenter(confHandle, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.requestPresenter = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "requestPresenter");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.requestPresenter(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareSetOwner = function (action, confHandle, attendee) {
            util_1.default.info("TsdkConfWrapper", "appShareSetOwner");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareSetOwner(action, confHandle, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareStart = function (shareType, confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareStart");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareStart(shareType, confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareStop = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareStop");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareStop(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareGetScreenData = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareGetScreenData");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareGetScreenData(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareRequestPrivilege = function (confHandle, privilegeType) {
            util_1.default.info("TsdkConfWrapper", "appShareRequestPrivilege");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareRequestPrivilege(confHandle, privilegeType, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareSetPrivilege = function (action, confHandle, privilegeType, attendee) {
            util_1.default.info("TsdkConfWrapper", "appShareSetPrivilege");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareSetPrivilege(action, confHandle, privilegeType, attendee, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareInputWindowMsg = function (wparam, lparam, dataContent, dataLen, msgType, confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareInputWindowMsg");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareInputWindowMsg(wparam, lparam, dataContent, dataLen, msgType, confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareBeginAnnotation = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareBeginAnnotation");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareBeginAnnotation(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareEndAnnotation = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareEndAnnotation");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareEndAnnotation(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareGetAppList = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareGetAppList");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareGetAppList(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareSetApp = function (appWindow, action, confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareSetApp");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareSetApp(appWindow, action, confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareSetParam = function (confHandle, asParam) {
            util_1.default.info("TsdkConfWrapper", "appShareSetParam");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareSetParam(confHandle, asParam, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.appShareGetParam = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "appShareGetParam");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.appShareGetParam(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.whiteboardNewDocument = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "whiteboardNewDocument");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.whiteboardNewDocument(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.whiteboardDeleteDocument = function (confHandle, documentId) {
            util_1.default.info("TsdkConfWrapper", "whiteboardDeleteDocument");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.whiteboardDeleteDocument(confHandle, documentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.whiteboardNewPage = function (width, confHandle, documentId, height) {
            util_1.default.info("TsdkConfWrapper", "whiteboardNewPage");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.whiteboardNewPage(width, confHandle, documentId, height, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.whiteboardDeletePage = function (confHandle, pageId, documentId) {
            util_1.default.info("TsdkConfWrapper", "whiteboardDeletePage");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.whiteboardDeletePage(confHandle, pageId, documentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareOpenDocument = function (confHandle, option, fileName) {
            util_1.default.info("TsdkConfWrapper", "docShareOpenDocument");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareOpenDocument(confHandle, option, fileName, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareCloseDocument = function (confHandle, documentId) {
            util_1.default.info("TsdkConfWrapper", "docShareCloseDocument");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareCloseDocument(confHandle, documentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareSetCurrentPage = function (confHandle, pageInfo, isSync) {
            util_1.default.info("TsdkConfWrapper", "docShareSetCurrentPage");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareSetCurrentPage(confHandle, pageInfo, isSync, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareSetCanvasSize = function (confHandle, componentId, isRedraw, size) {
            util_1.default.info("TsdkConfWrapper", "docShareSetCanvasSize");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareSetCanvasSize(confHandle, componentId, isRedraw, size, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareGetSurfaceBmp = function (confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "docShareGetSurfaceBmp");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareGetSurfaceBmp(confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareGetSynDocumentInfo = function (confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "docShareGetSynDocumentInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareGetSynDocumentInfo(confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareSetBackgroundColor = function (confHandle, componentId, backgroundColor) {
            util_1.default.info("TsdkConfWrapper", "docShareSetBackgroundColor");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareSetBackgroundColor(confHandle, componentId, backgroundColor, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareSetDisplayMode = function (confHandle, displayMode, componentId) {
            util_1.default.info("TsdkConfWrapper", "docShareSetDisplayMode");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareSetDisplayMode(confHandle, displayMode, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationCreateStart = function (point, pageInfo, mainType, subType, confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "annotationCreateStart");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationCreateStart(point, pageInfo, mainType, subType, confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationCreateUpdate = function (params) {
            util_1.default.info("TsdkConfWrapper", "annotationCreateUpdate");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationCreateUpdate(params, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationCreateDone = function (confHandle, componentId, isCancel) {
            util_1.default.info("TsdkConfWrapper", "annotationCreateDone");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationCreateDone(confHandle, componentId, isCancel, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSelectStart = function (confHandle, point, componentId, pageInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationSelectStart");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSelectStart(confHandle, point, componentId, pageInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSelectUpdate = function (confHandle, componentId, point) {
            util_1.default.info("TsdkConfWrapper", "annotationSelectUpdate");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSelectUpdate(confHandle, componentId, point, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSelectDone = function (attendee, confHandle, selectMode, componentId, point) {
            util_1.default.info("TsdkConfWrapper", "annotationSelectDone");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSelectDone(attendee, confHandle, selectMode, componentId, point, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationLaserPointerStart = function (confHandle, laserPointerInfo, componentId) {
            util_1.default.info("TsdkConfWrapper", "annotationLaserPointerStart");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationLaserPointerStart(confHandle, laserPointerInfo, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationLaserPointerMoveto = function (confHandle, componentId, point) {
            util_1.default.info("TsdkConfWrapper", "annotationLaserPointerMoveto");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationLaserPointerMoveto(confHandle, componentId, point, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationLaserPointerStop = function (confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "annotationLaserPointerStop");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationLaserPointerStop(confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationTextCreate = function (textInfo, confHandle, componentId, pageInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationTextCreate");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationTextCreate(textInfo, confHandle, componentId, pageInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationTextUpdate = function (annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "annotationTextUpdate");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationTextUpdate(annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationTextGetInfo = function (confHandle, annotationId, componentId, pageInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationTextGetInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationTextGetInfo(confHandle, annotationId, componentId, pageInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationEditStart = function (count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId) {
            util_1.default.info("TsdkConfWrapper", "annotationEditStart");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationEditStart(count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationEditUpdate = function (confHandle, componentId, currentPoint) {
            util_1.default.info("TsdkConfWrapper", "annotationEditUpdate");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationEditUpdate(confHandle, componentId, currentPoint, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationEditDone = function (confHandle, componentId, isCancel) {
            util_1.default.info("TsdkConfWrapper", "annotationEditDone");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationEditDone(confHandle, componentId, isCancel, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationHitTestPoint = function (confHandle, hitTestPointInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationHitTestPoint");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationHitTestPoint(confHandle, hitTestPointInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationHitTestRect = function (confHandle, hitTestRectInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationHitTestRect");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationHitTestRect(confHandle, hitTestRectInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationHitTestLine = function (confHandle, hitTestLineInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationHitTestLine");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationHitTestLine(confHandle, hitTestLineInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSetSelect = function (confHandle, isRedraw, selectInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationSetSelect");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSetSelect(confHandle, isRedraw, selectInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationDeleteAnnotation = function (confHandle, deleteInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationDeleteAnnotation");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationDeleteAnnotation(confHandle, deleteInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationGetAnnotationInfo = function (confHandle, annotationId, componentId, pageInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationGetAnnotationInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationGetAnnotationInfo(confHandle, annotationId, componentId, pageInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSetPen = function (newPenInfo, confHandle, componentId, penType) {
            util_1.default.info("TsdkConfWrapper", "annotationSetPen");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSetPen(newPenInfo, confHandle, componentId, penType, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.annotationSetBrush = function (confHandle, componentId, newBrushInfo) {
            util_1.default.info("TsdkConfWrapper", "annotationSetBrush");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.annotationSetBrush(confHandle, componentId, newBrushInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.sendChatMsgInConference = function (confHandle, chatMsgInfo) {
            util_1.default.info("TsdkConfWrapper", "sendChatMsgInConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.sendChatMsgInConference(confHandle, chatMsgInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.sendHeartBeat = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "sendHeartBeat");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.sendHeartBeat(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.p2pTransferToConference = function (callId, bookConfInfo) {
            util_1.default.info("TsdkConfWrapper", "p2pTransferToConference");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.p2pTransferToConference(callId, bookConfInfo, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.joinConferenceByAnonymous = function (confJoinParam) {
            util_1.default.info("TsdkConfWrapper", "joinConferenceByAnonymous");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.joinConferenceByAnonymous(confJoinParam, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setCurrentSharingComponent = function (confHandle, componentId) {
            util_1.default.info("TsdkConfWrapper", "setCurrentSharingComponent");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setCurrentSharingComponent(confHandle, componentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.docShareSetZoomMode = function (zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId) {
            util_1.default.info("TsdkConfWrapper", "docShareSetZoomMode");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.docShareSetZoomMode(zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setRecordBroadcast = function (confHandle, recordBroadcast) {
            util_1.default.info("TsdkConfWrapper", "setRecordBroadcast");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setRecordBroadcast(confHandle, recordBroadcast, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setLiveBroadcast = function (confHandle, liveBroadcast) {
            util_1.default.info("TsdkConfWrapper", "setLiveBroadcast");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setLiveBroadcast(confHandle, liveBroadcast, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.setMixedPicture = function (confHandle, mixedPictureParams) {
            util_1.default.info("TsdkConfWrapper", "setMixedPicture");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.setMixedPicture(confHandle, mixedPictureParams, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.getShareStatisticInfo = function (confHandle) {
            util_1.default.info("TsdkConfWrapper", "getShareStatisticInfo");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.getShareStatisticInfo(confHandle, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.renameSelf = function (confHandle, nickname) {
            util_1.default.info("TsdkConfWrapper", "renameSelf");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.renameSelf(confHandle, nickname, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.allowAttendeeUnmute = function (confHandle, allowUnmute) {
            util_1.default.info("TsdkConfWrapper", "allowAttendeeUnmute");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkConfWrapper.tsdkConf.allowAttendeeUnmute(confHandle, allowUnmute, callback);
            return promise;
        };
        ;
        TsdkConfWrapper.prototype.registerConfEvent = function (callbacks) {
            TsdkConfWrapper.tsdkConf.setBasicConfEvent(callbacks);
        };
        TsdkConfWrapper._instance = new TsdkConfWrapper();
        return TsdkConfWrapper;
    }());
    exports.default = TsdkConfWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkConf = (function () {
        function TsdkConf(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkConf.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkConf.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkConf.prototype.bookConference = function (bookConfInfo, callbacks) {
            this.callbackResponse(callbacks, 3001);
            var data = {
                "cmd": 0x10bb9,
                "description": "tsdk_book_conference",
                "param": {
                    "bookConfInfo": bookConfInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.queryConferenceList = function (queryReq, callbacks) {
            this.callbackResponse(callbacks, 3002);
            var data = {
                "cmd": 0x10bba,
                "description": "tsdk_query_conference_list",
                "param": {
                    "queryReq": queryReq
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.queryConferenceDetail = function (queryReq, callbacks) {
            this.callbackResponse(callbacks, 3003);
            var data = {
                "cmd": 0x10bbb,
                "description": "tsdk_query_conference_detail",
                "param": {
                    "queryReq": queryReq
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.joinConference = function (joinNumber, isVideoJoin, confJoinParam, callbacks) {
            this.callbackResponse(callbacks, 3004);
            var data = {
                "cmd": 0x10bbc,
                "description": "tsdk_join_conference",
                "param": {
                    "joinNumber": joinNumber, "isVideoJoin": isVideoJoin, "confJoinParam": confJoinParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.acceptConference = function (confHandle, joinVideoConf, callbacks) {
            this.callbackResponse(callbacks, 3005);
            var data = {
                "cmd": 0x10bbd,
                "description": "tsdk_accept_conference",
                "param": {
                    "confHandle": confHandle, "joinVideoConf": joinVideoConf
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.rejectConference = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3006);
            var data = {
                "cmd": 0x10bbe,
                "description": "tsdk_reject_conference",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.leaveConference = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3007);
            var data = {
                "cmd": 0x10bbf,
                "description": "tsdk_leave_conference",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.endConference = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3008);
            var data = {
                "cmd": 0x10bc0,
                "description": "tsdk_end_conference",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.upgradeConference = function (confHandle, upgradeParam, callbacks) {
            this.callbackResponse(callbacks, 3009);
            var data = {
                "cmd": 0x10bc1,
                "description": "tsdk_upgrade_conference",
                "param": {
                    "confHandle": confHandle, "upgradeParam": upgradeParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.muteConference = function (confHandle, isMute, callbacks) {
            this.callbackResponse(callbacks, 3010);
            var data = {
                "cmd": 0x10bc2,
                "description": "tsdk_mute_conference",
                "param": {
                    "confHandle": confHandle, "isMute": isMute
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.lockConference = function (confHandle, isLock, callbacks) {
            this.callbackResponse(callbacks, 3011);
            var data = {
                "cmd": 0x10bc3,
                "description": "tsdk_lock_conference",
                "param": {
                    "confHandle": confHandle, "isLock": isLock
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.addAttendee = function (confHandle, addAttendeesInfo, callbacks) {
            this.callbackResponse(callbacks, 3012);
            var data = {
                "cmd": 0x10bc4,
                "description": "tsdk_add_attendee",
                "param": {
                    "confHandle": confHandle, "addAttendeesInfo": addAttendeesInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.redialAttendee = function (confHandle, attendee, callbacks) {
            this.callbackResponse(callbacks, 3013);
            var data = {
                "cmd": 0x10bc5,
                "description": "tsdk_redial_attendee",
                "param": {
                    "confHandle": confHandle, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.hangUpAttendee = function (confHandle, attendee, callbacks) {
            this.callbackResponse(callbacks, 3014);
            var data = {
                "cmd": 0x10bc6,
                "description": "tsdk_hang_up_attendee",
                "param": {
                    "confHandle": confHandle, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.removeAttendee = function (confHandle, attendee, callbacks) {
            this.callbackResponse(callbacks, 3015);
            var data = {
                "cmd": 0x10bc7,
                "description": "tsdk_remove_attendee",
                "param": {
                    "confHandle": confHandle, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.muteAttendee = function (confHandle, attendee, isMute, callbacks) {
            this.callbackResponse(callbacks, 3016);
            var data = {
                "cmd": 0x10bc8,
                "description": "tsdk_mute_attendee",
                "param": {
                    "confHandle": confHandle, "attendee": attendee, "isMute": isMute
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setHandup = function (confHandle, isHandup, attendee, callbacks) {
            this.callbackResponse(callbacks, 3017);
            var data = {
                "cmd": 0x10bc9,
                "description": "tsdk_set_handup",
                "param": {
                    "confHandle": confHandle, "isHandup": isHandup, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setVideoMode = function (confHandle, mode, callbacks) {
            this.callbackResponse(callbacks, 3018);
            var data = {
                "cmd": 0x10bca,
                "description": "tsdk_set_video_mode",
                "param": {
                    "confHandle": confHandle, "mode": mode
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.watchAttendee = function (confHandle, watchAttendeeInfo, callbacks) {
            this.callbackResponse(callbacks, 3019);
            var data = {
                "cmd": 0x10bcb,
                "description": "tsdk_watch_attendee",
                "param": {
                    "confHandle": confHandle, "watchAttendeeInfo": watchAttendeeInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.broadcastAttendee = function (confHandle, attendee, isBroadcast, callbacks) {
            this.callbackResponse(callbacks, 3020);
            var data = {
                "cmd": 0x10bcc,
                "description": "tsdk_broadcast_attendee",
                "param": {
                    "confHandle": confHandle, "attendee": attendee, "isBroadcast": isBroadcast
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.requestChairman = function (confHandle, password, callbacks) {
            this.callbackResponse(callbacks, 3021);
            var data = {
                "cmd": 0x10bcd,
                "description": "tsdk_request_chairman",
                "param": {
                    "confHandle": confHandle, "password": password
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.releaseChairman = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3022);
            var data = {
                "cmd": 0x10bce,
                "description": "tsdk_release_chairman",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.postponeConference = function (confHandle, time, callbacks) {
            this.callbackResponse(callbacks, 3023);
            var data = {
                "cmd": 0x10bcf,
                "description": "tsdk_postpone_conference",
                "param": {
                    "confHandle": confHandle, "time": time
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.joinDataConference = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3024);
            var data = {
                "cmd": 0x10bd0,
                "description": "tsdk_join_data_conference",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setPresenter = function (confHandle, attendee, callbacks) {
            this.callbackResponse(callbacks, 3025);
            var data = {
                "cmd": 0x10bd1,
                "description": "tsdk_set_presenter",
                "param": {
                    "confHandle": confHandle, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.requestPresenter = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3026);
            var data = {
                "cmd": 0x10bd2,
                "description": "tsdk_request_presenter",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareSetOwner = function (action, confHandle, attendee, callbacks) {
            this.callbackResponse(callbacks, 3027);
            var data = {
                "cmd": 0x10bd3,
                "description": "tsdk_app_share_set_owner",
                "param": {
                    "action": action, "confHandle": confHandle, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareStart = function (shareType, confHandle, callbacks) {
            this.callbackResponse(callbacks, 3028);
            var data = {
                "cmd": 0x10bd4,
                "description": "tsdk_app_share_start",
                "param": {
                    "shareType": shareType, "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareStop = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3029);
            var data = {
                "cmd": 0x10bd5,
                "description": "tsdk_app_share_stop",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareGetScreenData = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3030);
            var data = {
                "cmd": 0x10bd6,
                "description": "tsdk_app_share_get_screen_data",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareRequestPrivilege = function (confHandle, privilegeType, callbacks) {
            this.callbackResponse(callbacks, 3031);
            var data = {
                "cmd": 0x10bd7,
                "description": "tsdk_app_share_request_privilege",
                "param": {
                    "confHandle": confHandle, "privilegeType": privilegeType
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareSetPrivilege = function (action, confHandle, privilegeType, attendee, callbacks) {
            this.callbackResponse(callbacks, 3032);
            var data = {
                "cmd": 0x10bd8,
                "description": "tsdk_app_share_set_privilege",
                "param": {
                    "action": action, "confHandle": confHandle, "privilegeType": privilegeType, "attendee": attendee
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareInputWindowMsg = function (wparam, lparam, dataContent, dataLen, msgType, confHandle, callbacks) {
            this.callbackResponse(callbacks, 3033);
            var data = {
                "cmd": 0x10bd9,
                "description": "tsdk_app_share_input_window_msg",
                "param": {
                    "wparam": wparam, "lparam": lparam, "dataContent": dataContent, "dataLen": dataLen, "msgType": msgType, "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareBeginAnnotation = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3034);
            var data = {
                "cmd": 0x10bda,
                "description": "tsdk_app_share_begin_annotation",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareEndAnnotation = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3035);
            var data = {
                "cmd": 0x10bdb,
                "description": "tsdk_app_share_end_annotation",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareGetAppList = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3036);
            var data = {
                "cmd": 0x10bdc,
                "description": "tsdk_app_share_get_app_list",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareSetApp = function (appWindow, action, confHandle, callbacks) {
            this.callbackResponse(callbacks, 3037);
            var data = {
                "cmd": 0x10bdd,
                "description": "tsdk_app_share_set_app",
                "param": {
                    "appWindow": appWindow, "action": action, "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareSetParam = function (confHandle, asParam, callbacks) {
            this.callbackResponse(callbacks, 3038);
            var data = {
                "cmd": 0x10bde,
                "description": "tsdk_app_share_set_param",
                "param": {
                    "confHandle": confHandle, "asParam": asParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.appShareGetParam = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3039);
            var data = {
                "cmd": 0x10bdf,
                "description": "tsdk_app_share_get_param",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.whiteboardNewDocument = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3040);
            var data = {
                "cmd": 0x10be0,
                "description": "tsdk_whiteboard_new_document",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.whiteboardDeleteDocument = function (confHandle, documentId, callbacks) {
            this.callbackResponse(callbacks, 3041);
            var data = {
                "cmd": 0x10be1,
                "description": "tsdk_whiteboard_delete_document",
                "param": {
                    "confHandle": confHandle, "documentId": documentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.whiteboardNewPage = function (width, confHandle, documentId, height, callbacks) {
            this.callbackResponse(callbacks, 3042);
            var data = {
                "cmd": 0x10be2,
                "description": "tsdk_whiteboard_new_page",
                "param": {
                    "width": width, "confHandle": confHandle, "documentId": documentId, "height": height
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.whiteboardDeletePage = function (confHandle, pageId, documentId, callbacks) {
            this.callbackResponse(callbacks, 3043);
            var data = {
                "cmd": 0x10be3,
                "description": "tsdk_whiteboard_delete_page",
                "param": {
                    "confHandle": confHandle, "pageId": pageId, "documentId": documentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareOpenDocument = function (confHandle, option, fileName, callbacks) {
            this.callbackResponse(callbacks, 3044);
            var data = {
                "cmd": 0x10be4,
                "description": "tsdk_doc_share_open_document",
                "param": {
                    "confHandle": confHandle, "option": option, "fileName": fileName
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareCloseDocument = function (confHandle, documentId, callbacks) {
            this.callbackResponse(callbacks, 3045);
            var data = {
                "cmd": 0x10be5,
                "description": "tsdk_doc_share_close_document",
                "param": {
                    "confHandle": confHandle, "documentId": documentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareSetCurrentPage = function (confHandle, pageInfo, isSync, callbacks) {
            this.callbackResponse(callbacks, 3046);
            var data = {
                "cmd": 0x10be6,
                "description": "tsdk_doc_share_set_current_page",
                "param": {
                    "confHandle": confHandle, "pageInfo": pageInfo, "isSync": isSync
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareSetCanvasSize = function (confHandle, componentId, isRedraw, size, callbacks) {
            this.callbackResponse(callbacks, 3047);
            var data = {
                "cmd": 0x10be7,
                "description": "tsdk_doc_share_set_canvas_size",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "isRedraw": isRedraw, "size": size
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareGetSurfaceBmp = function (confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3048);
            var data = {
                "cmd": 0x10be8,
                "description": "tsdk_doc_share_get_surface_bmp",
                "param": {
                    "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareGetSynDocumentInfo = function (confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3049);
            var data = {
                "cmd": 0x10be9,
                "description": "tsdk_doc_share_get_syn_document_info",
                "param": {
                    "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareSetBackgroundColor = function (confHandle, componentId, backgroundColor, callbacks) {
            this.callbackResponse(callbacks, 3050);
            var data = {
                "cmd": 0x10bea,
                "description": "tsdk_doc_share_set_background_color",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "backgroundColor": backgroundColor
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareSetDisplayMode = function (confHandle, displayMode, componentId, callbacks) {
            this.callbackResponse(callbacks, 3051);
            var data = {
                "cmd": 0x10beb,
                "description": "tsdk_doc_share_set_display_mode",
                "param": {
                    "confHandle": confHandle, "displayMode": displayMode, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationCreateStart = function (point, pageInfo, mainType, subType, confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3052);
            var data = {
                "cmd": 0x10bec,
                "description": "tsdk_annotation_create_start",
                "param": {
                    "point": point, "pageInfo": pageInfo, "mainType": mainType, "subType": subType, "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationCreateUpdate = function (params, callbacks) {
            this.callbackResponse(callbacks, 3053);
            var data = {
                "cmd": 0x10bed,
                "description": "tsdk_annotation_create_update",
                "param": params
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationCreateDone = function (confHandle, componentId, isCancel, callbacks) {
            this.callbackResponse(callbacks, 3054);
            var data = {
                "cmd": 0x10bee,
                "description": "tsdk_annotation_create_done",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "isCancel": isCancel
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSelectStart = function (confHandle, point, componentId, pageInfo, callbacks) {
            this.callbackResponse(callbacks, 3055);
            var data = {
                "cmd": 0x10bef,
                "description": "tsdk_annotation_select_start",
                "param": {
                    "confHandle": confHandle, "point": point, "componentId": componentId, "pageInfo": pageInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSelectUpdate = function (confHandle, componentId, point, callbacks) {
            this.callbackResponse(callbacks, 3056);
            var data = {
                "cmd": 0x10bf0,
                "description": "tsdk_annotation_select_update",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "point": point
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSelectDone = function (attendee, confHandle, selectMode, componentId, point, callbacks) {
            this.callbackResponse(callbacks, 3057);
            var data = {
                "cmd": 0x10bf1,
                "description": "tsdk_annotation_select_done",
                "param": {
                    "attendee": attendee, "confHandle": confHandle, "selectMode": selectMode, "componentId": componentId, "point": point
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationLaserPointerStart = function (confHandle, laserPointerInfo, componentId, callbacks) {
            this.callbackResponse(callbacks, 3058);
            var data = {
                "cmd": 0x10bf2,
                "description": "tsdk_annotation_laser_pointer_start",
                "param": {
                    "confHandle": confHandle, "laserPointerInfo": laserPointerInfo, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationLaserPointerMoveto = function (confHandle, componentId, point, callbacks) {
            this.callbackResponse(callbacks, 3059);
            var data = {
                "cmd": 0x10bf3,
                "description": "tsdk_annotation_laser_pointer_moveto",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "point": point
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationLaserPointerStop = function (confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3060);
            var data = {
                "cmd": 0x10bf4,
                "description": "tsdk_annotation_laser_pointer_stop",
                "param": {
                    "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationTextCreate = function (textInfo, confHandle, componentId, pageInfo, callbacks) {
            this.callbackResponse(callbacks, 3061);
            var data = {
                "cmd": 0x10bf5,
                "description": "tsdk_annotation_text_create",
                "param": {
                    "textInfo": textInfo, "confHandle": confHandle, "componentId": componentId, "pageInfo": pageInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationTextUpdate = function (annotationId, isRedraw, pageInfo, textInfo, confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3062);
            var data = {
                "cmd": 0x10bf6,
                "description": "tsdk_annotation_text_update",
                "param": {
                    "annotationId": annotationId, "isRedraw": isRedraw, "pageInfo": pageInfo, "textInfo": textInfo, "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationTextGetInfo = function (confHandle, annotationId, componentId, pageInfo, callbacks) {
            this.callbackResponse(callbacks, 3063);
            var data = {
                "cmd": 0x10bf7,
                "description": "tsdk_annotation_text_get_info",
                "param": {
                    "confHandle": confHandle, "annotationId": annotationId, "componentId": componentId, "pageInfo": pageInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationEditStart = function (count, refAnnotationId, pageInfo, hitTestCode, annotationIdList, confHandle, startPoint, componentId, callbacks) {
            this.callbackResponse(callbacks, 3064);
            var data = {
                "cmd": 0x10bf8,
                "description": "tsdk_annotation_edit_start",
                "param": {
                    "count": count, "refAnnotationId": refAnnotationId, "pageInfo": pageInfo, "hitTestCode": hitTestCode, "annotationIdList": annotationIdList, "confHandle": confHandle, "startPoint": startPoint, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationEditUpdate = function (confHandle, componentId, currentPoint, callbacks) {
            this.callbackResponse(callbacks, 3065);
            var data = {
                "cmd": 0x10bf9,
                "description": "tsdk_annotation_edit_update",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "currentPoint": currentPoint
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationEditDone = function (confHandle, componentId, isCancel, callbacks) {
            this.callbackResponse(callbacks, 3066);
            var data = {
                "cmd": 0x10bfa,
                "description": "tsdk_annotation_edit_done",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "isCancel": isCancel
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationHitTestPoint = function (confHandle, hitTestPointInfo, callbacks) {
            this.callbackResponse(callbacks, 3067);
            var data = {
                "cmd": 0x10bfb,
                "description": "tsdk_annotation_hit_test_point",
                "param": {
                    "confHandle": confHandle, "hitTestPointInfo": hitTestPointInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationHitTestRect = function (confHandle, hitTestRectInfo, callbacks) {
            this.callbackResponse(callbacks, 3068);
            var data = {
                "cmd": 0x10bfc,
                "description": "tsdk_annotation_hit_test_rect",
                "param": {
                    "confHandle": confHandle, "hitTestRectInfo": hitTestRectInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationHitTestLine = function (confHandle, hitTestLineInfo, callbacks) {
            this.callbackResponse(callbacks, 3069);
            var data = {
                "cmd": 0x10bfd,
                "description": "tsdk_annotation_hit_test_line",
                "param": {
                    "confHandle": confHandle, "hitTestLineInfo": hitTestLineInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSetSelect = function (confHandle, isRedraw, selectInfo, callbacks) {
            this.callbackResponse(callbacks, 3070);
            var data = {
                "cmd": 0x10bfe,
                "description": "tsdk_annotation_set_select",
                "param": {
                    "confHandle": confHandle, "isRedraw": isRedraw, "selectInfo": selectInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationDeleteAnnotation = function (confHandle, deleteInfo, callbacks) {
            this.callbackResponse(callbacks, 3071);
            var data = {
                "cmd": 0x10bff,
                "description": "tsdk_annotation_delete_annotation",
                "param": {
                    "confHandle": confHandle, "deleteInfo": deleteInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationGetAnnotationInfo = function (confHandle, annotationId, componentId, pageInfo, callbacks) {
            this.callbackResponse(callbacks, 3072);
            var data = {
                "cmd": 0x10c00,
                "description": "tsdk_annotation_get_annotation_info",
                "param": {
                    "confHandle": confHandle, "annotationId": annotationId, "componentId": componentId, "pageInfo": pageInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSetPen = function (newPenInfo, confHandle, componentId, penType, callbacks) {
            this.callbackResponse(callbacks, 3073);
            var data = {
                "cmd": 0x10c01,
                "description": "tsdk_annotation_set_pen",
                "param": {
                    "newPenInfo": newPenInfo, "confHandle": confHandle, "componentId": componentId, "penType": penType
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.annotationSetBrush = function (confHandle, componentId, newBrushInfo, callbacks) {
            this.callbackResponse(callbacks, 3074);
            var data = {
                "cmd": 0x10c02,
                "description": "tsdk_annotation_set_brush",
                "param": {
                    "confHandle": confHandle, "componentId": componentId, "newBrushInfo": newBrushInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.sendChatMsgInConference = function (confHandle, chatMsgInfo, callbacks) {
            this.callbackResponse(callbacks, 3075);
            var data = {
                "cmd": 0x10c03,
                "description": "tsdk_send_chat_msg_in_conference",
                "param": {
                    "confHandle": confHandle, "chatMsgInfo": chatMsgInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.sendHeartBeat = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3076);
            var data = {
                "cmd": 0x10c04,
                "description": "tsdk_send_heart_beat",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.p2pTransferToConference = function (callId, bookConfInfo, callbacks) {
            this.callbackResponse(callbacks, 3077);
            var data = {
                "cmd": 0x10c05,
                "description": "tsdk_p2p_transfer_to_conference",
                "param": {
                    "callId": callId, "bookConfInfo": bookConfInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.joinConferenceByAnonymous = function (confJoinParam, callbacks) {
            this.callbackResponse(callbacks, 3078);
            var data = {
                "cmd": 0x10c06,
                "description": "tsdk_join_conference_by_anonymous",
                "param": {
                    "confJoinParam": confJoinParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setCurrentSharingComponent = function (confHandle, componentId, callbacks) {
            this.callbackResponse(callbacks, 3079);
            var data = {
                "cmd": 0x10c07,
                "description": "tsdk_set_current_sharing_component",
                "param": {
                    "confHandle": confHandle, "componentId": componentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.docShareSetZoomMode = function (zoomMode, isRedraw, zoomPercent, isSync, confHandle, componentId, documentId, callbacks) {
            this.callbackResponse(callbacks, 3080);
            var data = {
                "cmd": 0x10c08,
                "description": "tsdk_doc_share_set_zoom_mode",
                "param": {
                    "zoomMode": zoomMode, "isRedraw": isRedraw, "zoomPercent": zoomPercent, "isSync": isSync, "confHandle": confHandle, "componentId": componentId, "documentId": documentId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setRecordBroadcast = function (confHandle, recordBroadcast, callbacks) {
            this.callbackResponse(callbacks, 3081);
            var data = {
                "cmd": 0x10c09,
                "description": "tsdk_set_record_broadcast",
                "param": {
                    "confHandle": confHandle, "recordBroadcast": recordBroadcast
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setLiveBroadcast = function (confHandle, liveBroadcast, callbacks) {
            this.callbackResponse(callbacks, 3082);
            var data = {
                "cmd": 0x10c0a,
                "description": "tsdk_set_live_broadcast",
                "param": {
                    "confHandle": confHandle, "liveBroadcast": liveBroadcast
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setMixedPicture = function (confHandle, mixedPictureParams, callbacks) {
            this.callbackResponse(callbacks, 3083);
            var data = {
                "cmd": 0x10c0b,
                "description": "tsdk_set_mixed_picture",
                "param": {
                    "confHandle": confHandle, "mixedPictureParams": mixedPictureParams
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.getShareStatisticInfo = function (confHandle, callbacks) {
            this.callbackResponse(callbacks, 3084);
            var data = {
                "cmd": 0x10c0c,
                "description": "tsdk_get_share_statistic_info",
                "param": {
                    "confHandle": confHandle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.renameSelf = function (confHandle, nickname, callbacks) {
            this.callbackResponse(callbacks, 3085);
            var data = {
                "cmd": 0x10c0d,
                "description": "tsdk_rename_self",
                "param": {
                    "confHandle": confHandle, "nickname": nickname
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.allowAttendeeUnmute = function (confHandle, allowUnmute, callbacks) {
            this.callbackResponse(callbacks, 3086);
            var data = {
                "cmd": 0x10c0e,
                "description": "tsdk_allow_attendee_unmute",
                "param": {
                    "confHandle": confHandle, "allowUnmute": allowUnmute
                }
            };
            this.sendData(data);
        };
        ;
        TsdkConf.prototype.setBasicConfEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtBookConfResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3001] = callbacks.OnEvtBookConfResult;
            }
            if (callbacks && typeof callbacks.OnEvtQueryConfListResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3002] = callbacks.OnEvtQueryConfListResult;
            }
            if (callbacks && typeof callbacks.OnEvtQueryConfDetailResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3003] = callbacks.OnEvtQueryConfDetailResult;
            }
            if (callbacks && typeof callbacks.OnEvtJoinConfResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3004] = callbacks.OnEvtJoinConfResult;
            }
            if (callbacks && typeof callbacks.OnEvtGetDataconfParamResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3005] = callbacks.OnEvtGetDataconfParamResult;
            }
            if (callbacks && typeof callbacks.OnEvtConfctrlOperationResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3006] = callbacks.OnEvtConfctrlOperationResult;
            }
            if (callbacks && typeof callbacks.OnEvtInfoAndStatusUpdate == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3007] = callbacks.OnEvtInfoAndStatusUpdate;
            }
            if (callbacks && typeof callbacks.OnEvtSpeakerInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3008] = callbacks.OnEvtSpeakerInd;
            }
            if (callbacks && typeof callbacks.OnEvtRequestConfRightFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3009] = callbacks.OnEvtRequestConfRightFailed;
            }
            if (callbacks && typeof callbacks.OnEvtConfIncomingInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3010] = callbacks.OnEvtConfIncomingInd;
            }
            if (callbacks && typeof callbacks.OnEvtConfEndInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3011] = callbacks.OnEvtConfEndInd;
            }
            if (callbacks && typeof callbacks.OnEvtJoinDataConfResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3012] = callbacks.OnEvtJoinDataConfResult;
            }
            if (callbacks && typeof callbacks.OnEvtAsScreenDataUpdate == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3013] = callbacks.OnEvtAsScreenDataUpdate;
            }
            if (callbacks && typeof callbacks.OnEvtAsOwnerChange == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3014] = callbacks.OnEvtAsOwnerChange;
            }
            if (callbacks && typeof callbacks.OnEvtAsStateChange == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3015] = callbacks.OnEvtAsStateChange;
            }
            if (callbacks && typeof callbacks.OnEvtRecvChatMsg == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3016] = callbacks.OnEvtRecvChatMsg;
            }
            if (callbacks && typeof callbacks.OnEvtPresenterGiveInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3017] = callbacks.OnEvtPresenterGiveInd;
            }
            if (callbacks && typeof callbacks.OnEvtTransToConfResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3018] = callbacks.OnEvtTransToConfResult;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocLoadStart == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3019] = callbacks.OnEvtDsDocLoadStart;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocNew == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3020] = callbacks.OnEvtDsDocNew;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocPageLoaded == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3021] = callbacks.OnEvtDsDocPageLoaded;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocPageNew == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3022] = callbacks.OnEvtDsDocPageNew;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocLoadFinish == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3023] = callbacks.OnEvtDsDocLoadFinish;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocPageDel == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3024] = callbacks.OnEvtDsDocPageDel;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocDel == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3025] = callbacks.OnEvtDsDocDel;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocCurrentPage == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3026] = callbacks.OnEvtDsDocCurrentPage;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocCurrentPageInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3027] = callbacks.OnEvtDsDocCurrentPageInd;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocDrawDataNotify == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3028] = callbacks.OnEvtDsDocDrawDataNotify;
            }
            if (callbacks && typeof callbacks.OnEvtDsDocPageDataDownload == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3029] = callbacks.OnEvtDsDocPageDataDownload;
            }
            if (callbacks && typeof callbacks.OnEvtWbDocNew == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3030] = callbacks.OnEvtWbDocNew;
            }
            if (callbacks && typeof callbacks.OnEvtWbDocDel == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3031] = callbacks.OnEvtWbDocDel;
            }
            if (callbacks && typeof callbacks.OnEvtWbPageNew == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3032] = callbacks.OnEvtWbPageNew;
            }
            if (callbacks && typeof callbacks.OnEvtWbPageDel == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3033] = callbacks.OnEvtWbPageDel;
            }
            if (callbacks && typeof callbacks.OnEvtWbDocCurrentPage == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3034] = callbacks.OnEvtWbDocCurrentPage;
            }
            if (callbacks && typeof callbacks.OnEvtWbDocCurrentPageInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3035] = callbacks.OnEvtWbDocCurrentPageInd;
            }
            if (callbacks && typeof callbacks.OnEvtWbDocDrawDataNotify == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3036] = callbacks.OnEvtWbDocDrawDataNotify;
            }
            if (callbacks && typeof callbacks.OnEvtShareStatusUpdateInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3037] = callbacks.OnEvtShareStatusUpdateInd;
            }
            if (callbacks && typeof callbacks.OnEvtAsScreenKeyframe == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3038] = callbacks.OnEvtAsScreenKeyframe;
            }
            if (callbacks && typeof callbacks.OnEvtAsScreenFirstKeyframe == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3039] = callbacks.OnEvtAsScreenFirstKeyframe;
            }
            if (callbacks && typeof callbacks.OnEvtDataComponentLoadInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3040] = callbacks.OnEvtDataComponentLoadInd;
            }
            if (callbacks && typeof callbacks.OnEvtConfBaseInfoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3041] = callbacks.OnEvtConfBaseInfoInd;
            }
            if (callbacks && typeof callbacks.OnEvtAsPrivilegeChange == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3042] = callbacks.OnEvtAsPrivilegeChange;
            }
            if (callbacks && typeof callbacks.OnEvtSvcWatchInfoInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3043] = callbacks.OnEvtSvcWatchInfoInd;
            }
            if (callbacks && typeof callbacks.OnEvtConfResumingInd == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3044] = callbacks.OnEvtConfResumingInd;
            }
            if (callbacks && typeof callbacks.OnEvtConfResumeResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3045] = callbacks.OnEvtConfResumeResult;
            }
            if (callbacks && typeof callbacks.OnEvtConfEndResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3046] = callbacks.OnEvtConfEndResult;
            }
            if (callbacks && typeof callbacks.OnEvtConfSetShareOwnerFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3047] = callbacks.OnEvtConfSetShareOwnerFailed;
            }
            if (callbacks && typeof callbacks.OnEvtConfStartShareFailed == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[3048] = callbacks.OnEvtConfStartShareFailed;
            }
        };
        ;
        return TsdkConf;
    }());
    exports.default = TsdkConf;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(348)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkCtdWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CtdService = (function () {
        function CtdService() {
            this.wrapper = tsdkCtdWrapper_1.default.getInstance();
            this.wrapper.build();
            CtdService.registerCtdEvent();
        }
        CtdService.prototype.ctdStartCall = function (ctdParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.ctdStartCall(ctdParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CtdService.prototype.ctdEndCall = function (callId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.ctdEndCall(callId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        CtdService.registerCtdEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("CtdService", "registerCtdEvent");
                    wrapper = tsdkCtdWrapper_1.default.getInstance();
                    wrapper.registerCtdEvent({
                        OnEvtCtdStartCallResult: CtdService.handleOnEvtCtdStartCallResult,
                        OnEvtCtdEndCallResult: CtdService.handleOnEvtCtdEndCallResult,
                        OnEvtCtdCallStatusNotify: CtdService.handleOnEvtCtdCallStatusNotify,
                    });
                    return [2];
                });
            });
        };
        ;
        CtdService.handleOnEvtCtdStartCallResult = function (data) {
            observer_1.default.publish('OnEvtCtdStartCallResult', data);
        };
        CtdService.handleOnEvtCtdEndCallResult = function (data) {
            observer_1.default.publish('OnEvtCtdEndCallResult', data);
        };
        CtdService.handleOnEvtCtdCallStatusNotify = function (data) {
            observer_1.default.publish('OnEvtCtdCallStatusNotify', data);
        };
        return CtdService;
    }());
    exports.default = CtdService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(349), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkCtd_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkCtdWrapper = (function () {
        function TsdkCtdWrapper() {
            if (TsdkCtdWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkCtdWrapper.getInstance() instead of new.");
            }
            TsdkCtdWrapper._instance = this;
        }
        TsdkCtdWrapper.getInstance = function () {
            return TsdkCtdWrapper._instance;
        };
        TsdkCtdWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkCtdWrapper", "step in TsdkCtdWrapper to build");
                    if (!TsdkCtdWrapper.tsdkCtd) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkCtdWrapper.tsdkCtd = new tsdkCtd_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkCtdWrapper.tsdkCtd = new tsdkCtd_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkCtdWrapper.prototype.ctdStartCall = function (ctdParam) {
            util_1.default.info("TsdkCtdWrapper", "ctdStartCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCtdWrapper.tsdkCtd.ctdStartCall(ctdParam, callback);
            return promise;
        };
        ;
        TsdkCtdWrapper.prototype.ctdEndCall = function (callId) {
            util_1.default.info("TsdkCtdWrapper", "ctdEndCall");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkCtdWrapper.tsdkCtd.ctdEndCall(callId, callback);
            return promise;
        };
        ;
        TsdkCtdWrapper.prototype.registerCtdEvent = function (callbacks) {
            TsdkCtdWrapper.tsdkCtd.setBasicCtdEvent(callbacks);
        };
        TsdkCtdWrapper._instance = new TsdkCtdWrapper();
        return TsdkCtdWrapper;
    }());
    exports.default = TsdkCtdWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkCtd = (function () {
        function TsdkCtd(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkCtd.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkCtd.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkCtd.prototype.ctdStartCall = function (ctdParam, callbacks) {
            this.callbackResponse(callbacks, 4001);
            var data = {
                "cmd": 0x10fa1,
                "description": "tsdk_ctd_start_call",
                "param": {
                    "ctdParam": ctdParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCtd.prototype.ctdEndCall = function (callId, callbacks) {
            this.callbackResponse(callbacks, 4002);
            var data = {
                "cmd": 0x10fa2,
                "description": "tsdk_ctd_end_call",
                "param": {
                    "callId": callId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkCtd.prototype.setBasicCtdEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtCtdStartCallResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[4001] = callbacks.OnEvtCtdStartCallResult;
            }
            if (callbacks && typeof callbacks.OnEvtCtdEndCallResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[4002] = callbacks.OnEvtCtdEndCallResult;
            }
            if (callbacks && typeof callbacks.OnEvtCtdCallStatusNotify == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[4003] = callbacks.OnEvtCtdCallStatusNotify;
            }
        };
        ;
        return TsdkCtd;
    }());
    exports.default = TsdkCtd;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(351)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkEaddrWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EaddrService = (function () {
        function EaddrService() {
            this.wrapper = tsdkEaddrWrapper_1.default.getInstance();
            this.wrapper.build();
            EaddrService.registerEaddrEvent();
        }
        EaddrService.prototype.setSystemIcon = function (iconId, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setSystemIcon(iconId)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        EaddrService.prototype.setUserDefIcon = function (iconInfo, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.setUserDefIcon(iconInfo)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        EaddrService.prototype.getUserIcon = function (iconParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.getUserIcon(iconParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        EaddrService.prototype.searchContacts = function (searchParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.searchContacts(searchParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        EaddrService.prototype.searchDepartment = function (searchParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.searchDepartment(searchParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        EaddrService.registerEaddrEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("EaddrService", "registerEaddrEvent");
                    wrapper = tsdkEaddrWrapper_1.default.getInstance();
                    wrapper.registerEaddrEvent({
                        OnEvtSearchContactsResult: EaddrService.handleOnEvtSearchContactsResult,
                        OnEvtSearchDeptResult: EaddrService.handleOnEvtSearchDeptResult,
                        OnEvtGetIconResult: EaddrService.handleOnEvtGetIconResult,
                    });
                    return [2];
                });
            });
        };
        ;
        EaddrService.handleOnEvtSearchContactsResult = function (data) {
            observer_1.default.publish('OnEvtSearchContactsResult', data);
        };
        EaddrService.handleOnEvtSearchDeptResult = function (data) {
            observer_1.default.publish('OnEvtSearchDeptResult', data);
        };
        EaddrService.handleOnEvtGetIconResult = function (data) {
            observer_1.default.publish('OnEvtGetIconResult', data);
        };
        return EaddrService;
    }());
    exports.default = EaddrService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(352), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkEaddr_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkEaddrWrapper = (function () {
        function TsdkEaddrWrapper() {
            if (TsdkEaddrWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkEaddrWrapper.getInstance() instead of new.");
            }
            TsdkEaddrWrapper._instance = this;
        }
        TsdkEaddrWrapper.getInstance = function () {
            return TsdkEaddrWrapper._instance;
        };
        TsdkEaddrWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkEaddrWrapper", "step in TsdkEaddrWrapper to build");
                    if (!TsdkEaddrWrapper.tsdkEaddr) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkEaddrWrapper.tsdkEaddr = new tsdkEaddr_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkEaddrWrapper.tsdkEaddr = new tsdkEaddr_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkEaddrWrapper.prototype.setSystemIcon = function (iconId) {
            util_1.default.info("TsdkEaddrWrapper", "setSystemIcon");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkEaddrWrapper.tsdkEaddr.setSystemIcon(iconId, callback);
            return promise;
        };
        ;
        TsdkEaddrWrapper.prototype.setUserDefIcon = function (iconInfo) {
            util_1.default.info("TsdkEaddrWrapper", "setUserDefIcon");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkEaddrWrapper.tsdkEaddr.setUserDefIcon(iconInfo, callback);
            return promise;
        };
        ;
        TsdkEaddrWrapper.prototype.getUserIcon = function (iconParam) {
            util_1.default.info("TsdkEaddrWrapper", "getUserIcon");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkEaddrWrapper.tsdkEaddr.getUserIcon(iconParam, callback);
            return promise;
        };
        ;
        TsdkEaddrWrapper.prototype.searchContacts = function (searchParam) {
            util_1.default.info("TsdkEaddrWrapper", "searchContacts");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkEaddrWrapper.tsdkEaddr.searchContacts(searchParam, callback);
            return promise;
        };
        ;
        TsdkEaddrWrapper.prototype.searchDepartment = function (searchParam) {
            util_1.default.info("TsdkEaddrWrapper", "searchDepartment");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkEaddrWrapper.tsdkEaddr.searchDepartment(searchParam, callback);
            return promise;
        };
        ;
        TsdkEaddrWrapper.prototype.registerEaddrEvent = function (callbacks) {
            TsdkEaddrWrapper.tsdkEaddr.setBasicEaddrEvent(callbacks);
        };
        TsdkEaddrWrapper._instance = new TsdkEaddrWrapper();
        return TsdkEaddrWrapper;
    }());
    exports.default = TsdkEaddrWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkEaddr = (function () {
        function TsdkEaddr(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkEaddr.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkEaddr.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkEaddr.prototype.setSystemIcon = function (iconId, callbacks) {
            this.callbackResponse(callbacks, 5001);
            var data = {
                "cmd": 0x11389,
                "description": "tsdk_set_system_icon",
                "param": {
                    "iconId": iconId
                }
            };
            this.sendData(data);
        };
        ;
        TsdkEaddr.prototype.setUserDefIcon = function (iconInfo, callbacks) {
            this.callbackResponse(callbacks, 5002);
            var data = {
                "cmd": 0x1138a,
                "description": "tsdk_set_user_def_icon",
                "param": {
                    "iconInfo": iconInfo
                }
            };
            this.sendData(data);
        };
        ;
        TsdkEaddr.prototype.getUserIcon = function (iconParam, callbacks) {
            this.callbackResponse(callbacks, 5003);
            var data = {
                "cmd": 0x1138b,
                "description": "tsdk_get_user_icon",
                "param": {
                    "iconParam": iconParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkEaddr.prototype.searchContacts = function (searchParam, callbacks) {
            this.callbackResponse(callbacks, 5004);
            var data = {
                "cmd": 0x1138c,
                "description": "tsdk_search_contacts",
                "param": {
                    "searchParam": searchParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkEaddr.prototype.searchDepartment = function (searchParam, callbacks) {
            this.callbackResponse(callbacks, 5005);
            var data = {
                "cmd": 0x1138d,
                "description": "tsdk_search_department",
                "param": {
                    "searchParam": searchParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkEaddr.prototype.setBasicEaddrEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtSearchContactsResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[5001] = callbacks.OnEvtSearchContactsResult;
            }
            if (callbacks && typeof callbacks.OnEvtSearchDeptResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[5002] = callbacks.OnEvtSearchDeptResult;
            }
            if (callbacks && typeof callbacks.OnEvtGetIconResult == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[5003] = callbacks.OnEvtGetIconResult;
            }
        };
        ;
        return TsdkEaddr;
    }());
    exports.default = TsdkEaddr;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(45), __webpack_require__(354)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, observer_1, tsdkUiPluginWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UiPluginService = (function () {
        function UiPluginService() {
            this.wrapper = tsdkUiPluginWrapper_1.default.getInstance();
            this.wrapper.build();
            UiPluginService.registerUiPluginEvent();
        }
        UiPluginService.prototype.uiPluginSetButtonState = function (button, isOff, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginSetButtonState(button, isOff)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginShowSmallWindow = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginShowSmallWindow()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginShowAnnotationTool = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginShowAnnotationTool()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginSetWindowTitle = function (windowTitle, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginSetWindowTitle(windowTitle)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginSetWindowSizeRelativePos = function (wndSizeParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginSetWindowSizeRelativePos(wndSizeParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginSetWindowSizeAbsolutePos = function (wndSizeParam, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginSetWindowSizeAbsolutePos(wndSizeParam)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginShowVideoWindow = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginShowVideoWindow()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginWatchSvcAttendee = function (number, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginWatchSvcAttendee(number)];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.prototype.uiPluginShowShareSelectwnd = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var tsdkData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.wrapper.uiPluginShowShareSelectwnd()];
                        case 1:
                            tsdkData = _a.sent();
                            callback(tsdkData);
                            return [2];
                    }
                });
            });
        };
        UiPluginService.registerUiPluginEvent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wrapper;
                return __generator(this, function (_a) {
                    util_1.default.debug("UiPluginService", "registerUiPluginEvent");
                    wrapper = tsdkUiPluginWrapper_1.default.getInstance();
                    wrapper.registerUiPluginEvent({
                        OnPluginEvtFrameHwndInfoUpdate: UiPluginService.handleOnPluginEvtFrameHwndInfoUpdate,
                        OnPluginEvtWindowFocus: UiPluginService.handleOnPluginEvtWindowFocus,
                        OnPluginEvtSetWindowSize: UiPluginService.handleOnPluginEvtSetWindowSize,
                        OnPluginEvtQueryUserinfo: UiPluginService.handleOnPluginEvtQueryUserinfo,
                        OnPluginEvtCpuRateInfo: UiPluginService.handleOnPluginEvtCpuRateInfo,
                        OnPluginEvtClickHangupCall: UiPluginService.handleOnPluginEvtClickHangupCall,
                        OnPluginEvtClickMuteMic: UiPluginService.handleOnPluginEvtClickMuteMic,
                        OnPluginEvtClickMuteSpeaker: UiPluginService.handleOnPluginEvtClickMuteSpeaker,
                        OnPluginEvtClickMuteCamera: UiPluginService.handleOnPluginEvtClickMuteCamera,
                        OnPluginEvtClickAddMember: UiPluginService.handleOnPluginEvtClickAddMember,
                        OnPluginEvtClickShowMemberList: UiPluginService.handleOnPluginEvtClickShowMemberList,
                        OnPluginEvtClickTransAudio: UiPluginService.handleOnPluginEvtClickTransAudio,
                        OnPluginEvtClickSendIm: UiPluginService.handleOnPluginEvtClickSendIm,
                        OnPluginEvtClickDevicesSetting: UiPluginService.handleOnPluginEvtClickDevicesSetting,
                        OnPluginEvtConfCtrlOperation: UiPluginService.handleOnPluginEvtConfCtrlOperation,
                        OnPluginEvtClickSetLayout: UiPluginService.handleOnPluginEvtClickSetLayout,
                        OnPluginEvtClickPageSwitch: UiPluginService.handleOnPluginEvtClickPageSwitch,
                        OnPluginEvtClickWatchAttendee: UiPluginService.handleOnPluginEvtClickWatchAttendee,
                        OnPluginEvtClickChairmanOperation: UiPluginService.handleOnPluginEvtClickChairmanOperation,
                        OnPluginEvtClickConfRecording: UiPluginService.handleOnPluginEvtClickConfRecording,
                        OnPluginEvtClickSetShareQuality: UiPluginService.handleOnPluginEvtClickSetShareQuality,
                        OnPluginEvtClickShowRemoteControl: UiPluginService.handleOnPluginEvtClickShowRemoteControl,
                        OnPluginEvtClickRequestRemoteControl: UiPluginService.handleOnPluginEvtClickRequestRemoteControl,
                        OnPluginEvtClickReleaseRemoteControl: UiPluginService.handleOnPluginEvtClickReleaseRemoteControl,
                        OnPluginEvtClickStartShare: UiPluginService.handleOnPluginEvtClickStartShare,
                        OnPluginEvtClickStopShare: UiPluginService.handleOnPluginEvtClickStopShare,
                        OnPluginEvtClickLeaveConf: UiPluginService.handleOnPluginEvtClickLeaveConf,
                        OnPluginEvtClickEndConf: UiPluginService.handleOnPluginEvtClickEndConf,
                    });
                    return [2];
                });
            });
        };
        ;
        UiPluginService.handleOnPluginEvtFrameHwndInfoUpdate = function (data) {
            observer_1.default.publish('OnPluginEvtFrameHwndInfoUpdate', data);
        };
        UiPluginService.handleOnPluginEvtWindowFocus = function (data) {
            observer_1.default.publish('OnPluginEvtWindowFocus', data);
        };
        UiPluginService.handleOnPluginEvtSetWindowSize = function (data) {
            observer_1.default.publish('OnPluginEvtSetWindowSize', data);
        };
        UiPluginService.handleOnPluginEvtQueryUserinfo = function (data) {
            observer_1.default.publish('OnPluginEvtQueryUserinfo', data);
        };
        UiPluginService.handleOnPluginEvtCpuRateInfo = function (data) {
            observer_1.default.publish('OnPluginEvtCpuRateInfo', data);
        };
        UiPluginService.handleOnPluginEvtClickHangupCall = function (data) {
            observer_1.default.publish('OnPluginEvtClickHangupCall', data);
        };
        UiPluginService.handleOnPluginEvtClickMuteMic = function (data) {
            observer_1.default.publish('OnPluginEvtClickMuteMic', data);
        };
        UiPluginService.handleOnPluginEvtClickMuteSpeaker = function (data) {
            observer_1.default.publish('OnPluginEvtClickMuteSpeaker', data);
        };
        UiPluginService.handleOnPluginEvtClickMuteCamera = function (data) {
            observer_1.default.publish('OnPluginEvtClickMuteCamera', data);
        };
        UiPluginService.handleOnPluginEvtClickAddMember = function (data) {
            observer_1.default.publish('OnPluginEvtClickAddMember', data);
        };
        UiPluginService.handleOnPluginEvtClickShowMemberList = function (data) {
            observer_1.default.publish('OnPluginEvtClickShowMemberList', data);
        };
        UiPluginService.handleOnPluginEvtClickTransAudio = function (data) {
            observer_1.default.publish('OnPluginEvtClickTransAudio', data);
        };
        UiPluginService.handleOnPluginEvtClickSendIm = function (data) {
            observer_1.default.publish('OnPluginEvtClickSendIm', data);
        };
        UiPluginService.handleOnPluginEvtClickDevicesSetting = function (data) {
            observer_1.default.publish('OnPluginEvtClickDevicesSetting', data);
        };
        UiPluginService.handleOnPluginEvtConfCtrlOperation = function (data) {
            observer_1.default.publish('OnPluginEvtConfCtrlOperation', data);
        };
        UiPluginService.handleOnPluginEvtClickSetLayout = function (data) {
            observer_1.default.publish('OnPluginEvtClickSetLayout', data);
        };
        UiPluginService.handleOnPluginEvtClickPageSwitch = function (data) {
            observer_1.default.publish('OnPluginEvtClickPageSwitch', data);
        };
        UiPluginService.handleOnPluginEvtClickWatchAttendee = function (data) {
            observer_1.default.publish('OnPluginEvtClickWatchAttendee', data);
        };
        UiPluginService.handleOnPluginEvtClickChairmanOperation = function (data) {
            observer_1.default.publish('OnPluginEvtClickChairmanOperation', data);
        };
        UiPluginService.handleOnPluginEvtClickConfRecording = function (data) {
            observer_1.default.publish('OnPluginEvtClickConfRecording', data);
        };
        UiPluginService.handleOnPluginEvtClickSetShareQuality = function (data) {
            observer_1.default.publish('OnPluginEvtClickSetShareQuality', data);
        };
        UiPluginService.handleOnPluginEvtClickShowRemoteControl = function (data) {
            observer_1.default.publish('OnPluginEvtClickShowRemoteControl', data);
        };
        UiPluginService.handleOnPluginEvtClickRequestRemoteControl = function (data) {
            observer_1.default.publish('OnPluginEvtClickRequestRemoteControl', data);
        };
        UiPluginService.handleOnPluginEvtClickReleaseRemoteControl = function (data) {
            observer_1.default.publish('OnPluginEvtClickReleaseRemoteControl', data);
        };
        UiPluginService.handleOnPluginEvtClickStartShare = function (data) {
            observer_1.default.publish('OnPluginEvtClickStartShare', data);
        };
        UiPluginService.handleOnPluginEvtClickStopShare = function (data) {
            observer_1.default.publish('OnPluginEvtClickStopShare', data);
        };
        UiPluginService.handleOnPluginEvtClickLeaveConf = function (data) {
            observer_1.default.publish('OnPluginEvtClickLeaveConf', data);
        };
        UiPluginService.handleOnPluginEvtClickEndConf = function (data) {
            observer_1.default.publish('OnPluginEvtClickEndConf', data);
        };
        return UiPluginService;
    }());
    exports.default = UiPluginService;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(355), __webpack_require__(6), __webpack_require__(12), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tsdkUiPlugin_1, util_1, config_1, tsdkManagerWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkUiPluginWrapper = (function () {
        function TsdkUiPluginWrapper() {
            if (TsdkUiPluginWrapper._instance) {
                throw new Error("Error: Instantiation failed: Use TsdkUiPluginWrapper.getInstance() instead of new.");
            }
            TsdkUiPluginWrapper._instance = this;
        }
        TsdkUiPluginWrapper.getInstance = function () {
            return TsdkUiPluginWrapper._instance;
        };
        TsdkUiPluginWrapper.prototype.build = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    util_1.default.info("TsdkUiPluginWrapper", "step in TsdkUiPluginWrapper to build");
                    if (!TsdkUiPluginWrapper.tsdkUiPlugin) {
                        if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                            TsdkUiPluginWrapper.tsdkUiPlugin = new tsdkUiPlugin_1.default({
                                socket: tsdkManagerWrapper_1.default.tsdkServiceSocket
                            });
                        }
                        else {
                            TsdkUiPluginWrapper.tsdkUiPlugin = new tsdkUiPlugin_1.default({
                                ffi: tsdkManagerWrapper_1.default.tsdkFFI
                            });
                        }
                    }
                    return [2];
                });
            });
        };
        TsdkUiPluginWrapper.prototype.uiPluginSetButtonState = function (button, isOff) {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginSetButtonState");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginSetButtonState(button, isOff, callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginShowSmallWindow = function () {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginShowSmallWindow");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginShowSmallWindow(callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginShowAnnotationTool = function () {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginShowAnnotationTool");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginShowAnnotationTool(callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginSetWindowTitle = function (windowTitle) {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginSetWindowTitle");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginSetWindowTitle(windowTitle, callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginSetWindowSizeRelativePos = function (wndSizeParam) {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginSetWindowSizeRelativePos");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginSetWindowSizeRelativePos(wndSizeParam, callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginSetWindowSizeAbsolutePos = function (wndSizeParam) {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginSetWindowSizeAbsolutePos");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginSetWindowSizeAbsolutePos(wndSizeParam, callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginShowVideoWindow = function () {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginShowVideoWindow");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginShowVideoWindow(callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginWatchSvcAttendee = function (number) {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginWatchSvcAttendee");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginWatchSvcAttendee(number, callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.uiPluginShowShareSelectwnd = function () {
            util_1.default.info("TsdkUiPluginWrapper", "uiPluginShowShareSelectwnd");
            var callback = { response: {} };
            var promise = new Promise(function (resolve, reject) {
                callback.response = function (data) {
                    resolve(data);
                };
            });
            TsdkUiPluginWrapper.tsdkUiPlugin.uiPluginShowShareSelectwnd(callback);
            return promise;
        };
        ;
        TsdkUiPluginWrapper.prototype.registerUiPluginEvent = function (callbacks) {
            TsdkUiPluginWrapper.tsdkUiPlugin.setBasicUiPluginEvent(callbacks);
        };
        TsdkUiPluginWrapper._instance = new TsdkUiPluginWrapper();
        return TsdkUiPluginWrapper;
    }());
    exports.default = TsdkUiPluginWrapper;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkUiPlugin = (function () {
        function TsdkUiPlugin(opts) {
            if (config_1.CloudEC_CONFIG.INVOKE_MODE == 1) {
                if (opts.socket) {
                    this.tsdkInvokeTunnel = opts.socket;
                }
            }
            else {
                if (opts.ffi) {
                    this.tsdkInvokeTunnel = opts.ffi;
                }
            }
        }
        ;
        TsdkUiPlugin.prototype.sendData = function (data) {
            var sendStr = JSON.stringify(data);
            if (this.tsdkInvokeTunnel) {
                this.tsdkInvokeTunnel.sendData(sendStr);
            }
        };
        ;
        TsdkUiPlugin.prototype.callbackResponse = function (callbacks, rsp) {
            if (callbacks && typeof callbacks.response == "function") {
                this.tsdkInvokeTunnel.rspFuncs[rsp] = callbacks.response;
            }
        };
        ;
        TsdkUiPlugin.prototype.uiPluginSetButtonState = function (button, isOff, callbacks) {
            this.callbackResponse(callbacks, 10001);
            var data = {
                "cmd": 0x12711,
                "description": "tsdk_ui_plugin_set_button_state",
                "param": {
                    "button": button, "isOff": isOff
                }
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginShowSmallWindow = function (callbacks) {
            this.callbackResponse(callbacks, 10002);
            var data = {
                "cmd": 0x12712,
                "description": "tsdk_ui_plugin_show_small_window"
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginShowAnnotationTool = function (callbacks) {
            this.callbackResponse(callbacks, 10003);
            var data = {
                "cmd": 0x12713,
                "description": "tsdk_ui_plugin_show_annotation_tool"
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginSetWindowTitle = function (windowTitle, callbacks) {
            this.callbackResponse(callbacks, 10004);
            var data = {
                "cmd": 0x12714,
                "description": "tsdk_ui_plugin_set_window_title",
                "param": {
                    "windowTitle": windowTitle
                }
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginSetWindowSizeRelativePos = function (wndSizeParam, callbacks) {
            this.callbackResponse(callbacks, 10005);
            var data = {
                "cmd": 0x12715,
                "description": "tsdk_ui_plugin_set_window_size_relative_pos",
                "param": {
                    "wndSizeParam": wndSizeParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginSetWindowSizeAbsolutePos = function (wndSizeParam, callbacks) {
            this.callbackResponse(callbacks, 10006);
            var data = {
                "cmd": 0x12716,
                "description": "tsdk_ui_plugin_set_window_size_absolute_pos",
                "param": {
                    "wndSizeParam": wndSizeParam
                }
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginShowVideoWindow = function (callbacks) {
            this.callbackResponse(callbacks, 10007);
            var data = {
                "cmd": 0x12717,
                "description": "tsdk_ui_plugin_show_video_window"
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginWatchSvcAttendee = function (number, callbacks) {
            this.callbackResponse(callbacks, 10008);
            var data = {
                "cmd": 0x12718,
                "description": "tsdk_ui_plugin_watch_svc_attendee",
                "param": {
                    "number": number
                }
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.uiPluginShowShareSelectwnd = function (callbacks) {
            this.callbackResponse(callbacks, 10009);
            var data = {
                "cmd": 0x12719,
                "description": "tsdk_ui_plugin_show_share_selectwnd"
            };
            this.sendData(data);
        };
        ;
        TsdkUiPlugin.prototype.setBasicUiPluginEvent = function (callbacks) {
            if (callbacks && typeof callbacks.OnPluginEvtFrameHwndInfoUpdate == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10001] = callbacks.OnPluginEvtFrameHwndInfoUpdate;
            }
            if (callbacks && typeof callbacks.OnPluginEvtWindowFocus == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10002] = callbacks.OnPluginEvtWindowFocus;
            }
            if (callbacks && typeof callbacks.OnPluginEvtSetWindowSize == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10003] = callbacks.OnPluginEvtSetWindowSize;
            }
            if (callbacks && typeof callbacks.OnPluginEvtQueryUserinfo == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10004] = callbacks.OnPluginEvtQueryUserinfo;
            }
            if (callbacks && typeof callbacks.OnPluginEvtCpuRateInfo == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10005] = callbacks.OnPluginEvtCpuRateInfo;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickHangupCall == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10006] = callbacks.OnPluginEvtClickHangupCall;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickMuteMic == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10007] = callbacks.OnPluginEvtClickMuteMic;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickMuteSpeaker == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10008] = callbacks.OnPluginEvtClickMuteSpeaker;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickMuteCamera == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10009] = callbacks.OnPluginEvtClickMuteCamera;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickAddMember == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10010] = callbacks.OnPluginEvtClickAddMember;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickShowMemberList == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10011] = callbacks.OnPluginEvtClickShowMemberList;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickTransAudio == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10012] = callbacks.OnPluginEvtClickTransAudio;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickSendIm == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10013] = callbacks.OnPluginEvtClickSendIm;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickDevicesSetting == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10014] = callbacks.OnPluginEvtClickDevicesSetting;
            }
            if (callbacks && typeof callbacks.OnPluginEvtConfCtrlOperation == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10015] = callbacks.OnPluginEvtConfCtrlOperation;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickSetLayout == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10016] = callbacks.OnPluginEvtClickSetLayout;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickPageSwitch == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10017] = callbacks.OnPluginEvtClickPageSwitch;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickWatchAttendee == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10018] = callbacks.OnPluginEvtClickWatchAttendee;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickChairmanOperation == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10019] = callbacks.OnPluginEvtClickChairmanOperation;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickConfRecording == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10020] = callbacks.OnPluginEvtClickConfRecording;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickSetShareQuality == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10021] = callbacks.OnPluginEvtClickSetShareQuality;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickShowRemoteControl == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10022] = callbacks.OnPluginEvtClickShowRemoteControl;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickRequestRemoteControl == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10023] = callbacks.OnPluginEvtClickRequestRemoteControl;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickReleaseRemoteControl == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10024] = callbacks.OnPluginEvtClickReleaseRemoteControl;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickStartShare == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10025] = callbacks.OnPluginEvtClickStartShare;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickStopShare == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10026] = callbacks.OnPluginEvtClickStopShare;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickLeaveConf == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10027] = callbacks.OnPluginEvtClickLeaveConf;
            }
            if (callbacks && typeof callbacks.OnPluginEvtClickEndConf == "function") {
                this.tsdkInvokeTunnel.notifyFuncs[10028] = callbacks.OnPluginEvtClickEndConf;
            }
        };
        ;
        return TsdkUiPlugin;
    }());
    exports.default = TsdkUiPlugin;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, util_1, Util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TsdkServiceDaemonSocket = (function () {
        function TsdkServiceDaemonSocket(opts) {
            var _this = this;
            this.websocket = {};
            this.notifyFuncs = [];
            this.rspFuncs = [];
            this.sendData = function (data) {
                _this.websocket.send(data);
            };
            var serviceAddr = opts.svrAddr || "127.0.0.1";
            var servicePort = opts.svrPort || "7682";
            var pcol = "ws://";
            if (opts.ssl === 1) {
                pcol = "wss://";
            }
            this.websocket = new WebSocket(pcol + serviceAddr + ":" + servicePort, "tsdk_ws_ec_service_deamon_protocol");
            this.websocket.onopen = opts.ready;
            this.websocket.onclose = opts.close;
            this.websocket.onmessage = function (msg) {
                var data = JSON.parse(msg.data);
                var logInfo = Util.replaceLogInfo(data);
                util_1.default.debug("tsdkServiceDaemonSocket", logInfo);
                if (data.notify > 0) {
                    var notifyIdx = data.notify;
                    if (typeof _this.notifyFuncs[notifyIdx] == "function") {
                        _this.notifyFuncs[notifyIdx](data);
                    }
                }
                if (data.rsp > 0) {
                    var rspIdx = data.rsp & 0xffff;
                    if (typeof _this.rspFuncs[rspIdx] == "function") {
                        _this.rspFuncs[rspIdx](data);
                    }
                }
            };
        }
        ;
        TsdkServiceDaemonSocket.prototype.setSeviceDaemonCallBack = function (callbacks) {
            if (callbacks && typeof callbacks.OnEvtServiceStartUp == "function") {
                this.notifyFuncs[1] = callbacks.OnEvtServiceStartUp;
            }
            if (callbacks && typeof callbacks.OnEvtServiceShutDown == "function") {
                this.notifyFuncs[2] = callbacks.OnEvtServiceShutDown;
            }
            if (callbacks && typeof callbacks.OnEvtServiceRecover == "function") {
                this.notifyFuncs[3] = callbacks.OnEvtServiceRecover;
            }
        };
        ;
        return TsdkServiceDaemonSocket;
    }());
    exports.default = TsdkServiceDaemonSocket;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);


/***/ })
/******/ ]);
//# sourceMappingURL=CloudEC-SDK.js.map