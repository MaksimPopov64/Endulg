(function () {
  'use strict';

  angular.module('CheckIfPraise',[])
  .controller('PraiseCheck', PraiseCheck);

  PraiseCheck.$inject = ['$scope']//protection from minimization

  function PraiseCheck ($scope){

    $scope.sorry = "";
    $scope.messageOutput = "";


    $scope.displayMessage = function () {
      if($scope.sorry){
        $scope.color = "color:green";
        $scope.borderColor = "border-color:green";

        if($scope.sorry.toUpperCase().indexOf('ПРОСТИТЕ')!=-1){
          $scope.color = "color:green";
          $scope.messageOutput = "Прощён";

        }else{
          $scope.color = "color:red";
          $scope.borderColor = "border-color:red";
          $scope.messageOutput = "Ты охуел";
        }
      }
      else {
        $scope.color = "color:red";
        $scope.borderColor = "border-color:red";
        $scope.messageOutput = "Прощения проси, тварь";
      }
    };

  };

})();
