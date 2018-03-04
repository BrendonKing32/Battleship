/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/controller.js
Version    :Version 01
Description:Contains the functions that control user input.
*/

window.onload = main();

//Method    :main()
//Purpose   :initialize the game on window load
//Parameters:none
//Returns   :game
function main() {
    //initialize game variable
    var game = new Game();
    var PlayerBoard = document.getElementById('Player1Board');
    var ComputerBoard = document.getElementById('Player2Board');

    //initialize boards
    game.playerBoard = InitializeBoard(game.playerBoard);
    game.computerBoard = InitializeBoard(game.computerBoard);

    //handle ship placement
    game.playerBoard = ConfirmShipPlacement(game.playerBoard, game.playerFleet);

    // TODO: implement save functionality

    //handle turns
    var startGameButton = document.getElementById('start-game');
    startGameButton.onclick = function () {
        if (game.playerFleet.placedCount == 5) {
            if (game.computerFleet.shipsDestroyed === 5 || game.playerFleet.shipsDestroyed === 5) {
                window.alert("START GAME!");
                main();
            }
            else {
                computerAttack();
                startGameButton.style.visibility = 'hidden';
                playerAttack();
                document.getElementById('debug').innerHTML = 'It is your turn! Select a cell by clicking on the board';
            }
        }
        else {
            document.getElementById('debug').innerHTML = 'You must place all ships before beginning game';
        }
    }

    //controller functions

    //Function  :PlayerAttack()
    //Purpose   :
    //Parameters:
    //Returns   :
    function PlayerAttack() {

    }

    //Function  :ComputerAttack()
    //Purpose   :
    //Parameters:
    //Returns   :
    function ComputerAttack() {
        document.getElementById('debug').innerHTML = 'It is your turn! Select a cell by clicking on the board!';
        if (game.playerFleet.shipsDestroyed !== 5 || game.computerFleet.shipsDestroyed !== 5) {
            var point = generatePoint();
            var row = point[0];
            var col = point[1];
            var samePoint = false;
            if (comparePoints(game.computerGuesses, point)) {
                samePoint = true;
                do {
                    point = generatePoint();
                    if (comparePoints(game.computerGuesses, point)) {
                        point = generatePoint();
                    }
                    else {
                        samePoint = false;
                    }
                }
                while (samePoint);
            }
        }
        row = point[0];
        col = point[0];
        game.computerGuesses.push(point);
        var cell = playerGrid.rows[row].cells[col];
        if (cell.className === 'ship') {
            game.playerShips = markShipHit(cell.id, game.playerFleet);
            game.board = markBoardHit(row - 1, col - 1, game.playerBoard);
            playerBoard.innerHTML = displayGrid(game.board);
            if (game.playerFleet[cell.id].sunk === true) {
                if (game.playerFleet.shipsDestroyed == 5) {
                    document.getElementById('start-game').style.visibility = 'visible';
                    document.getElementById('start-game').innerHTML = 'New Game';
                    window.alert("The computer won!");
                }
            }
            var origRow = row;
            row++;
            if (row > 9) {
                row--;
            }
            cell = playerBoard.rows[row].cells[col];
            if (cell.className === 'ship') {
                game.computerRow = row;
                game.computerCol = col;
            }
            else {
                row--;
                if (row < 0) {
                    row++;
                }
                cell = playerBoard.rows[row].cells[col];
                if (cell.className === 'ship') {
                    game.computerRow = row;
                    game.computerCol = col;
                }
                else {
                    row--;
                    if (row < 0) {
                        row = row + 1;
                    }
                    cell = playerBoard.rows[row].cells[col];
                    if (cell.c)
                }
            }
        }
    }

    //Function  :InitializeBoard()
    //Purpose   :initialize an HTML board for the program to utilize
    //Parameters:board
    //Returns   :board
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

    //Function  :AddShipsToBoard
    //Purpose   :manages the placement of ships on the game board
    //Parameters:ships, board, player
    //Returns   :grid
    function AddShipsToBoard(ships, board, player) {
        for (var key in ships) {
            for (var a in ships[key].shipLocation) {
                var location = ships[key].shipLocation[a];
                if (player == true) {
                    board[location.x][location.y] = '<td class="ship" id="' + key + '"></td>';
                }
                else {
                    board[location.x][location.y] = '<td class="hidden-ship" id="' + key + '"></td>';
                }
            }
        }
        return board;
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
}

//Function  :ThrowAlert()
//Purpose   :Simple warning for unimplemented elements
//Parameters:user interaction with unavailable element
//Returns   :none
function ThrowAlert() {
    window.alert("OPTION UNAVAILABLE!");
}