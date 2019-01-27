(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Bluetooth stepper controller\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button size=\"full\" (click)=\"scan()\" [disabled]=\"isScanButtonDisabled\">Scan and connect</ion-button>\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"primary\">Device</ion-label>\n      <ion-input placeholder=\"Perform scan first\" [readonly]=\"true\" [(ngModel)]=\"deviceName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\">Status</ion-label>\n      <ion-input placeholder=\"Unknown\" [readonly]=\"true\" [(ngModel)]=\"deviceStatus\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button size=\"full\" (click)=\"disconnect()\" [disabled]=\"isDisconnectButtonDisabled\">Disconnect</ion-button>\n  <h1>Motor control</h1>\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"primary\">Motor step position</ion-label>\n      <ion-input placeholder=\"Unknown\" [readonly]=\"true\" [(ngModel)]=\"motorStepPosition\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"primary\">Motor course step position</ion-label>\n      <ion-input placeholder=\"Unknown\" [readonly]=\"true\" [(ngModel)]=\"motorCourseStepPosition\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Step mode</ion-label>\n      <ion-select value=\"1\" okText=\"Ok\" cancelText=\"Cancel\" [(ngModel)]=\"stepFactor\" [disabled]=\"areControlsDisabled\">\n        <ion-select-option value=\"1\">Step by step</ion-select-option>\n        <ion-select-option value=\"10\">10 steps</ion-select-option>\n        <ion-select-option value=\"360\">Revolution per revolution</ion-select-option>\n        <ion-select-option value=\"3600\">10 revolutions</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button size=\"full\" (click)=\"stepForward()\" [disabled]=\"areControlsDisabled\">\n      <ion-icon name=\"arrow-dropup-circle\"></ion-icon>Forward</ion-button>\n    <ion-button size=\"full\" (click)=\"stepBackward()\" [disabled]=\"areControlsDisabled\">\n      <ion-icon name=\"arrow-dropdown-circle\"></ion-icon>Backward</ion-button>\n    <ion-button size=\"full\" (click)=\"resetStep()\" [disabled]=\"areControlsDisabled\">Set zero position</ion-button>\n    <ion-button size=\"full\" (click)=\"setCourseStep()\" [disabled]=\"areControlsDisabled\">Set course position</ion-button>\n    <ion-button size=\"full\" color=\"warning\" (click)=\"makecourse()\" [disabled]=\"areControlsDisabled\">MAKE COURSE</ion-button>\n    <ion-button size=\"full\" color=\"danger\" (click)=\"stopMotor()\" [disabled]=\"areControlsDisabled\">STOP</ion-button>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
        this.isScanButtonDisabled = false;
        this.isDisconnectButtonDisabled = true;
        this.areControlsDisabled = true;
        this.bleDevice = null;
        this.bleServer = null;
        this.bleService = null;
        this.commandCharacteristic = null;
        this.deviceName = '';
        this.deviceStatus = '';
        this.data = '';
        this.stepFactor = 1;
    }
    HomePage.prototype.handleError = function (error) {
        console.log(error);
    };
    HomePage.prototype.stringToArrayBuffer = function (str) {
        // assuming 8 bit bytes
        var ret = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            ret[i] = str.charCodeAt(i);
        }
        return ret.buffer;
    };
    HomePage.prototype.makecourse = function () {
        var buffer = new ArrayBuffer(1);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 6);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.stepForward = function () {
        var buffer = new ArrayBuffer(3);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 1);
        dataView.setInt16(1, this.stepFactor);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.stepBackward = function () {
        var buffer = new ArrayBuffer(3);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 2);
        dataView.setInt16(1, this.stepFactor);
        console.log(dataView);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.resetStep = function () {
        var buffer = new ArrayBuffer(1);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 3);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.setCourseStep = function () {
        var buffer = new ArrayBuffer(1);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 4);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.stopMotor = function () {
        var buffer = new ArrayBuffer(1);
        var dataView = new DataView(buffer);
        dataView.setInt8(0, 5);
        this.commandCharacteristic.writeValue(dataView);
    };
    HomePage.prototype.setConnected = function () {
        this.deviceStatus = 'Connected';
        this.isDisconnectButtonDisabled = false;
        this.areControlsDisabled = false;
    };
    HomePage.prototype.receiveService = function (service) {
        this.setConnected();
        this.bleService = service;
        var that = this;
        this.bleService.getCharacteristic('38149ecc-adb2-4ff3-89d5-6083d52c5e9f').then(function (characteristic) {
            return characteristic.startNotifications();
        })
            .then(function (characteristic) {
            characteristic.addEventListener('characteristicvaluechanged', function (event) {
                var charac = event.target;
                that.motorStepPosition = charac.value.getInt32(0, true);
                that.motorCourseStepPosition = charac.value.getInt32(4, true);
            });
        }).catch(function (error) {
            that.handleError(error);
        });
        this.bleService.getCharacteristic('8a21ad2c-279d-41d1-94bf-6916ecbb3695').then(function (characteristic) {
            that.commandCharacteristic = characteristic;
        }).catch(function (error) {
            that.handleError(error);
        });
    };
    HomePage.prototype.connect = function () {
        this.deviceStatus = 'Connecting...';
        var that = this;
        this.bleServer.getPrimaryService('39ead0db-0bbf-449a-9af9-24001ea09aa3').then(function (service) {
            that.receiveService(service);
        }).catch(function (error) {
            that.handleError(error);
        });
    };
    HomePage.prototype.setDisconnected = function (event) {
        this.deviceStatus = 'Disconnected';
        this.isDisconnectButtonDisabled = true;
        this.areControlsDisabled = true;
    };
    HomePage.prototype.disconnect = function () {
        this.deviceStatus = 'Disconnecting...';
        if (this.bleDevice.gatt.connected) {
            this.bleDevice.gatt.disconnect();
            this.setDisconnected(this);
        }
    };
    HomePage.prototype.receiveServer = function (server) {
        this.bleServer = server;
        this.connect();
    };
    HomePage.prototype.receiveDevice = function (device) {
        this.bleDevice = device;
        this.deviceName = this.bleDevice.name;
        this.isScanButtonDisabled = false;
        var that = this;
        this.bleDevice.addEventListener('gattserverdisconnected', that.setDisconnected);
        this.bleDevice.gatt.connect().then(function (server) {
            that.receiveServer(server);
        }).catch(function (error) {
            that.handleError(error);
        });
    };
    HomePage.prototype.scan = function () {
        if (this.isScanButtonDisabled == false) {
            this.isScanButtonDisabled = true;
            var that = this;
            window.navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['39ead0db-0bbf-449a-9af9-24001ea09aa3']
            }).then(function (device) {
                that.receiveDevice(device);
            }).catch(function (error) {
                that.handleError(error);
            });
        }
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map