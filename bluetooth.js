
function stringToArrayBuffer(str) {
    // assuming 8 bit bytes
    var ret = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret.buffer;
}

angular.module('bleApp', [])
    .controller('BluetoothController', ['$scope', function ($scope) {
        var ctrl = this;
        ctrl.status = 'Disconnected';
        ctrl.pushedData = '';

        var BLService;
        var BLDevice;

        ctrl.send = function () {
            BLService.getCharacteristic('8a21ad2c-279d-41d1-94bf-6916ecbb3695').then(function (characteristic) {
                return characteristic.writeValue(stringToArrayBuffer(ctrl.dataToWrite));
            }).catch(ctrl.handleError);
        };

        ctrl.receiveService = function (service) {
            BLService = service;
            service.getCharacteristic('38149ecc-adb2-4ff3-89d5-6083d52c5e9f').then(function (characteristic) {
                return characteristic.startNotifications();
            })
                .then(function (characteristic) {
                    characteristic.addEventListener('characteristicvaluechanged',
                        function (event) {
                            var value = event.target.value;
                            $scope.$apply(function () {
                                ctrl.pushedData = value.getUint8(0);
                            });
                        });
                }).catch(ctrl.handleError);
        };

        ctrl.receiveServer = function (server) {
            ctrl.setStatus('Connected to : ' + server.device.name);
            server.getPrimaryService('39ead0db-0bbf-449a-9af9-24001ea09aa3').then(ctrl.receiveService).catch(ctrl.handleError);
        };

        ctrl.receiveDevice = function (device) {
            ctrl.setStatus('Connecting device : ' + device.name);
            device.addEventListener('gattserverdisconnected', ctrl.onDisconnected);
            BLDevice = device;
            device.gatt.connect().then(ctrl.receiveServer).catch(ctrl.handleError);
        };

        ctrl.onDisconnected = function (event) {
            ctrl.status = 'Disconnected';
        };

        ctrl.handleError = function (error) {
            ctrl.setStatus('Error occured : ' + error);
        };

        ctrl.setStatus = function (status) {
            $scope.$apply(function () {
                ctrl.status = status;
            });
        };

        ctrl.disconnectDevice = function () {
            if (BLDevice.gatt.connected) {
                BLDevice.gatt.disconnect();
            }
        };

        ctrl.connectDevice = function () {
            ctrl.status = 'Scanning';
            navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['39ead0db-0bbf-449a-9af9-24001ea09aa3']
            }).then(ctrl.receiveDevice).catch(ctrl.handleError);
        };

        ctrl.connect2 = function () {
            console.log('Connecting');
            ctrl.status = 'Connecting';
            // Step 1: Scan for a device with 0xffe5 service
            var myCharacteristic = navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: ['39ead0db-0bbf-449a-9af9-24001ea09aa3']
            })
                .then(function (device) {
                    // Step 2: Connect to it
                    return device.gatt.connect();
                })
                .then(function (server) {
                    // Step 3: Get the Service

                    $scope.$apply(function () {
                        ctrl.status = 'Connected';
                    });
                    console.log('Seems connected !');

                    return server.getPrimaryService('39ead0db-0bbf-449a-9af9-24001ea09aa3');
                })
                .then(function (service) {
                    // Step 4: get the Characteristic
                    return service.getCharacteristic('38149ecc-adb2-4ff3-89d5-6083d52c5e9f');
                })
                .then(function (characteristic) {
                    return characteristic.startNotifications();
                    //console.log(characteristic.readValue());
                })
                .then(function (characteristic) {
                    characteristic.addEventListener('characteristicvaluechanged',
                        function (event) {

                            var value = event.target.value;
                            //ctrl.datadenis = 'deeddee';
                            $scope.$apply(function () {
                                ctrl.pushedData = value.getUint8(0);
                            });

                            console.log('Received ' + value.getUint8(0));

                        });
                    console.log('Notifications have been started.');
                })
                /*.then(function (characteristic) {
                    // Step 5: Write to the characteristic
                    var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
                    return characteristic.writeValue(data);
                })*/
                .catch(function (error) {
                    // And of course: error handling!
                    console.error('Connection failed!', error);
                });
            //var myValue = myCharacteristic.readValue();
            //console.log(myValue.getUint8(0));
        };
    }]);