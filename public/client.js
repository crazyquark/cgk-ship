var trackingApp = angular.module('trackingApp', []);

function mainController($scope, $http) {
    $scope.availableCarriers = [
        {
            name: '--autodetect--',
            value: null,
        },
        {
            name: 'UPS',
            value: 'ups',
        },
        {
            name: 'TNT',
            value: 'tnt',
        },
        {
            name: 'DHL',
            value: 'dhl',
        },
    ];

    $scope.carrier = $scope.availableCarriers[0];

    $scope.track = function (form) {
        if (!form.$valid) {
            return;
        }

        if ($scope.trackingNumber) {
            var trackingUrl = '/api/track?trackingID=' + $scope.trackingNumber;

            if ($scope.carrier.value !== null) {
                trackingUrl += '&carrier=' + $scope.carrier.value;
            }

            $http.get(trackingUrl).then(function (res) {
                var data = res.data;

                console.log(data);

                if (data.error) {
                    swal('No go', 'There was an error: ' + JSON.stringify(data.error), 'error');
                } else {
                    swal('Here\'s your data:', JSON.stringify(data), 'success') ;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
}