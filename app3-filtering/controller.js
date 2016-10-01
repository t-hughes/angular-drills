angular.module('appThree').controller('mainController', function($scope, mainService){

  $scope.myData = mainService.getMyData();

});
