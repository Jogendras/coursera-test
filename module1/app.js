(function() {
    'use strict';

    angular.module('assignment', [])

    .controller('assignmentController', function($scope) {


        $scope.checkitem = function() {

            $scope.showmsg = "";

            if (angular.isUndefined($scope.items)) {

                $scope.showmsg = "Please enter data first";

            } else {

                var strlength = checkString($scope.items);

                if (strlength <= 3) {
                    $scope.showmsg = 'Enjoy!';
                } else {
                    $scope.showmsg = 'Too much!';
                }


            }

        }


    });

    function checkString(string) {

        var strarr = string.split(',');

        var total = 0;

        angular.forEach(strarr, function(val) {

            if (val.trim() != "") {
                total = total + 1;
            }


        });

        return total;
    }

})();
