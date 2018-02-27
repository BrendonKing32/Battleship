/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/controller.js
Version    :Version 01
Description:Contains the functions that control user input.
*/

window.onload = main();

//Method    :main()
//Purpose   :
//Parameters:
//Returns   :
function main() {
    //initialize game variable
    var game = new Game();
    var PlayerBoard = document.getElementById('Player1Board');
    var ComputerBoard = document.getElementById('Player2Board');

    //initialize boards
    game.playerBoard = InitializeBoard(game.playerBoard);
    game.computerBoard = InitializeBoard(game.computerBoard);

    //populate computer boards
    //game.computerBoard = 
    

}

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function InitializeBoard(board) {
    for (var h = 0; h < board.length; h++) {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; i < board.length; i++) {
                board[i][h] = '<td></td>';
            }
        }
    }
    return board;
}

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function AddShipsToBoard(ships, grid, player) {
    for (var key in ships) {
        for (var a in ships[key].shipLocation) {
            var location = ships[key].shipLocation[a];
            if (player == true) {
                grid[location.x][location.y] = '<td class="ship" id="' + key + '"></td>';
            }
            else {
                grid[location.x][location.y] = '<td class="hidden-ship" id="' + key + '"></td>';
            }
        }
    }
    return grid;
}

//Function  :ConfirmShipPlacement()
//Purpose   :confirm placement of player ships and commit them to array
//Parameters:board, playerFleet
//Returns   :board
function ConfirmShipPlacement(board, playerFleet) {
    var confirmButton = document.getElementById('placement-button');
    confirmButton.onclick = function () {
        var updatedShips = placeShip(playerFleet);
        board = AddShipsToBoard(updatedShips, board, true);
        playerBoard.innerHTML = displayBoard(board);
        return board;
    }
    return board;
}

//Function  :ThrowAlert()
//Purpose   :Simple warning for unimplemented elements
//Parameters:user interaction with unavailable element
//Returns   :none
function ThrowAlert() {
  window.alert("OPTION UNAVAILABLE!");
}
