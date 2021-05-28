# Multiplayer Tic Tac Toe Game Project In AngularJS

Clone to test out this little project for learning purpose. You can use keys or mouse click to play your turn.

## Try the Game
Play the game on: https://deepam-kapur.github.io/Tic-Tac-Toe-Game-In-AngularJS/

## Clone the repository

    git clone https://github.com/deepam-kapur/Tic-Tac-Toe-Game-In-AngularJS.git
The completed solution is in the 'master' branch. To see it in action deploy the code to your server of choice and view index.html.

## Win Check Logic

```AngularJS
var isRowFailed, isColumnFailed, isDiagonalFailed = false, isCrossDiagonalFailed = false;

for (var i = 0; i < $scope.game.length; i++) {
            isRowFailed = false, isColumnFailed = false;
            for (var j = 0; j < $scope.game[i].length; j++) {
                if ($scope.game[i][j].cellValue != playerTurn) {
                    isRowFailed = true;
                }
                if ($scope.game[j][i].cellValue != playerTurn) {
                    isColumnFailed = true;
                }
            }
            if (!isRowFailed || !isColumnFailed) {
                break;
            }
            if ($scope.game[i][i].cellValue != playerTurn) {
                isDiagonalFailed = true;
            }
            if ($scope.game[i][$scope.game.length - (i + 1)].cellValue != playerTurn) {
                isCrossDiagonalFailed = true;
            }
        }
```

## Some Highlights
![image](https://user-images.githubusercontent.com/52624123/119675716-ea2bb880-be5a-11eb-912e-c1db7a67d6fb.png)
![image](https://user-images.githubusercontent.com/52624123/119675911-0d566800-be5b-11eb-8637-80999ade27b1.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Dependencies (CDN Used)
Bootstrap 5.0.1 & AngularJS 1.6.9
