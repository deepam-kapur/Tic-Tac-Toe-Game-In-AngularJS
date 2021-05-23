var app = angular.module('ticTacToeApp', []);
app.controller('tieTacToeController', function ($scope) {
    $scope.game = [];
    $scope.isStart = false;
    var emptyRow = [{
        cellValue: ""
    }, {
        cellValue: ""
    }, {
        cellValue: ""
    }];
    var circle = "circle-svg";
    var cross = "cross-svg";

    $scope.isLeftTurn = true;
    $scope.leftValue = circle;
    $scope.rightValue = cross;

    $scope.resetGame = function () {
        $scope.isStart = false;
        $scope.game = [];
        $scope.game.push(angular.copy(emptyRow));
        $scope.game.push(angular.copy(emptyRow));
        $scope.game.push(angular.copy(emptyRow));
    };
    $scope.resetGame();

    $scope.addCircleOrCross = function (ele) {
        if (ele.cellValue.trim() == "") {
            if ($scope.isLeftTurn) {
                ele.cellValue = $scope.leftValue;
            }
            else {
                ele.cellValue = $scope.rightValue;
            }
            $scope.isLeftTurn = !$scope.isLeftTurn;
        }
    };

    function checkResult(){
        
    }
});