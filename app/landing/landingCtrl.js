(function() {
  function landingCtrl($scope, landingSvc) {
    $scope.state = "";
    $scope.city = "";
    $scope.data = function() {
      // var city = $scope.city;
      // var state = $scope.state;
      landingSvc.getWeather($scope.city, $scope.state)
        .then(function(response) {
          $scope.weatherData = response.data.query.results.channel;
          console.log($scope.weatherData);
        })
        .catch(function(error) {
          console.log(error);
        })
    }

  }

  angular.module("landing").controller("landingCtrl", ["$scope", "landingSvc", landingCtrl]);
})();
