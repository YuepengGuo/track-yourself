/* Define methods to use as controllers */

/*
 Combining "all" with "last"

module.exports.waterDisplayLastCtrl = function ($scope, Water) {
	$scope.waterRecord = Water.get({});
};
*/

module.exports.waterInputCtrl = function($scope, $location, Water) {

  $scope.waterRecord = new Water({});

  $scope.waterEntered = function() {
    $scope.waterRecord.$save(function(intake, respHeaders) {
      console.log(respHeaders);
      $location.path('/water/all');
    });
  };

};

module.exports.waterDisplayAllCtrl = function($scope, Water) {
  $scope.waterRecords = Water.getAll({});
};

module.exports.waterGraphControl = function ($scope, Water) {
	$scope.waterRecords = Water.getAllGraph({});
};
  
