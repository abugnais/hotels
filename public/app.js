$.fn.datepicker.defaults.format = "yyyy-mm-dd";

var app = angular.module('hotels', []);

var transformer = function (hotel) {
    return {
        url: decodeURIComponent(hotel.hotelUrls.hotelInfositeUrl),
        name: hotel.hotelInfo.hotelName,
        address: hotel.destination.shortName + ", " + hotel.destination.country,
        imageUrl: hotel.hotelInfo.hotelImageUrl,
        startDate: hotel.offerDateRange.travelStartDate.join("-"),
        endDate: hotel.offerDateRange.travelEndDate.join("-"),
        coordinates: [hotel.hotelInfo.hotelLatitude, hotel.hotelInfo.hotelLongitude],
        starRating: parseFloat(hotel.hotelInfo.hotelStarRating),
        guestRating: parseFloat(hotel.hotelInfo.hotelGuestReviewRating),
        locationUrl: 'http://maps.google.com/maps?q=' + hotel.hotelInfo.hotelLatitude + ',' + hotel.hotelInfo.hotelLongitude
    };
};

app.controller('search', ['$scope', '$http', function ($scope, $http) {
    $scope.hotels = null;
    $scope.error = null;

    $scope.submit = function (params) {
        $http({
            method: 'GET',
            url: '/hotels/search',
            params: params
        }).then(function (result) {
            $scope.hotels = result.data.offers.Hotel ? result.data.offers.Hotel.map(transformer) : [];
            $scope.error = null;
        }, function (error) {
            $scope.error = error;
            $scope.hotels = null;
        });
    };
}]);