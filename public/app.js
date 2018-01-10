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
        startRating: hotel.hotelInfo.hotelStarRating,
        guestRating: hotel.hotelInfo.hotelGuestReviewRating
    }
};

app.controller('search', ['$scope', '$http','$q', function ($scope, $http, $q) {
    $scope.submit = function (params) {
        $http({
            method: 'GET',
            url: '/hotels/search',
            params: params
        }).then(function (result) {
            $scope.hotels = result.data.offers.Hotel.map(transformer);
        });
    };
}]);