
angular.module('bleApp', [])
    .controller('BluetoothController', function ($scope) {
        console.log('Init controller');
        $scope.connect = function () {
            console.log('Connect');
            // Step 1: Scan for a device with 0xffe5 service
            navigator.bluetooth.requestDevice({
                //filters: [{ services: [0xffe5] }]
                acceptAllDevices: true
               // optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b']
                /*filters: [{
                    services: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b']
                }]*/
            })
                .then(function (device) {
                    // Step 2: Connect to it
                    return device.gatt.connect();
                })
                .then(function (server) {
                    // Step 3: Get the Service
                    return server.getPrimaryService(0xffe5);
                })
                .then(function (service) {
                    // Step 4: get the Characteristic
                    return service.getCharacteristic(0xffe9);
                })
                .then(function (characteristic) {
                    // Step 5: Write to the characteristic
                    var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
                    return characteristic.writeValue(data);
                })
                .catch(function (error) {
                    // And of course: error handling!
                    console.error('Connection failed!', error);
                });
        }
    });