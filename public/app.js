var trackingApp = angular.module('trackingApp', []);

function mainController($scope, $http) {
    $scope.track = function (form) {
        if (!form.$valid) {
            return;
        }

        if ($scope.trackingNumber) {
            $http.get('/api/track?trackingID=' + $scope.trackingNumber).then(function (res) {
                if (res.error) {
                    
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
}