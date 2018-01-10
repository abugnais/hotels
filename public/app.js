$.fn.datepicker.defaults.format = "yyyy-mm-dd";

var app = angular.module('hotels', []);

app.controller('search', ['$scope', '$http','$q', function ($scope, $http, $q) {
    $scope.hotels = [];
    $scope.params = {};

    $scope.submit = function () {
        $http.get('/hotels/search').then(function (result) {
            $scope.hotels = result.data.offers.Hotel;
            $scope.$applyAsync();
        });
    };
}]);