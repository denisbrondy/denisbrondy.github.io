
angular.module('bleApp', [])
    .controller('BluetoothController', ['$scope', function ($scope) {
        console.log('Init controller');
        var ctrl = this;
        ctrl.status = 'Disconnected';
        ctrl.datadenis = 1;

       /* $scope.test = function (event) {
            console.log('Received ');
        };*/

        ctrl.connect = function () {
            console.log('Connecting');
            ctrl.status = 'Connecting';
            // Step 1: Scan for a device with 0xffe5 service
            var myCharacteristic = navigator.bluetooth.requestDevice({
                //filters: [{ services: [0xffe5] }]
                acceptAllDevices: true,
                optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b']
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
                   
                    $scope.$apply(function() {
                        ctrl.status = 'Connected';
                    });
                    console.log('Seems connected !');

                    return server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b');
                })
                .then(function (service) {
                    // Step 4: get the Characteristic
                    return service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8');
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
                            $scope.$apply(function() {
                                ctrl.datadenis = value.getUint16(0);
                            });
                            
                            console.log('Received ' + value.getUint16(0));

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
        }
    }]);