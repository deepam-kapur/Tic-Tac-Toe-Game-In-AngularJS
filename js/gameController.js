var app = angular.module('ticTacToeApp', []);
app.controller('tieTacToeController', function ($scope) {
    $scope.game = [];
    $scope.countNumberingCell = 0;
    $scope.isStart = false;
    $scope.result = false;
    $scope.winningLine = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        transform: "rotate(0deg)"
    };
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

    $scope.getkeys = function (event) {
        if ($scope.isStart && !$scope.result) {
            if (event.keyCode >= 49 && event.keyCode <= 57) {
                var number = event.keyCode - 48;
                $scope.addCircleOrCross($scope.game[parseInt((number-1) / 3)][((number - 1) % 3)]);
            }
        }
    };

    $scope.resetGame = function () {
        $scope.isStart = false;
        $scope.isLeftTurn = true;
        $scope.result = false;
        $scope.game = [];
        $scope.game.push(angular.copy(emptyRow));
        $scope.game.push(angular.copy(emptyRow));
        $scope.game.push(angular.copy(emptyRow));
    };
    $scope.resetGame();

    $scope.addCircleOrCross = function (ele) {
        if (ele.cellValue.trim() == "" && !$scope.result) {
            if ($scope.isLeftTurn) {
                ele.cellValue = $scope.leftValue;
            }
            else {
                ele.cellValue = $scope.rightValue;
            }
            $scope.result = checkResult(ele.cellValue);
            if ($scope.result) {
                return;
            }
            $scope.isLeftTurn = !$scope.isLeftTurn;
        }
    };

    function checkResult(value) {
        var isRowFailed, isColumnFailed, isDiagonalFailed = false, isCrossDiagonalFailed = false;
        var numberRowWinLine = 0;
        for (var i = 0; i < $scope.game.length; i++) {
            isRowFailed = false, isColumnFailed = false;
            for (var j = 0; j < $scope.game[i].length; j++) {
                if ($scope.game[i][j].cellValue != value) {
                    isRowFailed = true;
                }
                else if ($scope.game[i][j].cellValue == value && value != "") {
                    numberRowWinLine = i + 1;
                }
                if ($scope.game[j][i].cellValue != value) {
                    isColumnFailed = true;
                }
                else if ($scope.game[j][i].cellValue == value && value != "") {
                    numberColWinLine = i + 1;
                }
            }
            if (!isRowFailed || !isColumnFailed) {
                break;
            }
            if ($scope.game[i][i].cellValue != value) {
                isDiagonalFailed = true;
            }
            if ($scope.game[i][$scope.game.length - (i + 1)].cellValue != value) {
                isCrossDiagonalFailed = true;
            }
        }
        if (!isRowFailed) {
            var top = (20.6 * numberRowWinLine) + (8.4 * (numberRowWinLine - 1));
            $scope.winningLine = {
                top: top + "%",
                left: "5%",
                width: "90%",
                height: "2px",
                transform: "rotate(0deg)"
            };
            return true;
        }
        else if (!isColumnFailed) {
            var left = (18.8 * numberColWinLine) + (12.2 * (numberColWinLine - 1));
            $scope.winningLine = {
                top: "5%",
                left: left + "%",
                width: "2px",
                height: "90%",
                transform: "rotate(0deg)"
            };
            return true;
        }
        else if (!isDiagonalFailed) {
            $scope.winningLine = {
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                transform: "rotate(28deg)"
            };
            return true;
        }
        else if (!isCrossDiagonalFailed) {
            $scope.winningLine = {
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                transform: "rotate(152deg)"
            };
            return true;
        }
        else {
            return false;
        }
    }
});