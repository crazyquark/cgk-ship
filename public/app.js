var trackingApp = angular.module('trackingApp', []);

function mainController($scope, $http) {
    $scope.track = function (form) {
        if (!form.$valid) {
            return;
        }

        if ($scope.trackingNumber) {
            $http.get('/api/track?trackingID=' + $scope.trackingNumber).then(function (res) {
                var data = res.data;

                if (data.error) {
                    swal('No go', 'There was an error: ' + data.error, 'error');
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
}