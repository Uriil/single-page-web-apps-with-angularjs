(function(){
    'use strict'

    var lunchModule = angular.module('LunchCheck', []);

    lunchModule.controller('lunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.add = function() {
            if($scope.menu) {
                var items = $scope.menu.split(',');
                if(items.length <= 3) {
                    $scope.result = "Enjoy!";
                }
                else {
                    $scope.result = "Too much!"; 
                }
            }
            else {
                $scope.result = "Please enter data first";
            }
        }

    }
})();