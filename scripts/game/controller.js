/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/controller.js
Version    :Version 01
Description:Contains the functions that control user input.
*/

window.onload = main();

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function main() {
    // Initialize game Model and load computer ships
    var game = newGame();
    var playerGrid = document.getElementById('playerGrid');
    var computerGrid = document.getElementById('computerGrid');
    //game.computerFleet = loadComputerConfig(game.computerFleet);

    // Initialize player grid
    game.grid = initializeGrid(game.grid);
    playerBoard.innerHTML = displayBoard(game.grid);

    // Initialize computer grid
    game.computerGrid = initializeGrid(game.computerGrid);
    game.computerGrid = addShipsToGrid(game.computerFleet, game.computerGrid, false);
    computerBoard.innerHTML = displayBoard(game.computerGrid);

    // Handle the placement of the player's ships on the player grid
    game.grid = handleShipPlacement(game.grid, game.playerFleet);

    // Save and Load game data

    // Handle game play and turns
    var startGameButton = document.getElementById('start-game');
    startGameButton.onclick = function () {
        if (game.playerFleet.placedCount == 5) {
            if (game.computerFleet.shipsSunk === 5 || game.playerFleet.shipsSunk === 5) {
                startGameButton.innerHTML = 'Start Game';
                main();
            }
            else {
                computerAttack();
                startGameButton.style.visibility = 'hidden';
                playerAttack();
            }
        }
        else {
        }
    }

    // Controller functions

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function playerAttack() {
        if (game.computerFleet.shipsSunk !== 5) {
            var cells = document.getElementsByTagName('td');
            for (var i = 0; i < cells.length; i++) {
                cells[i].onclick = function () {
                    var message = document.getElementById('message');
                    var newMessage = '<br>';
                    var col = this.cellIndex;
                    var row = this.parentNode.rowIndex;
                    var cell = computerGrid.rows[row].cells[col];
                    if (cell.className === 'hidden-ship') {
                        newMessage = String.fromCharCode(65 + (col - 1)) + ' ' + row + ' was a ' + 'hit!';
                        game.computerFleet = markShipHit(cell.id, game.computerFleet);
                        game.computerGrid = markGridHit(row - 1, col - 1, game.computerGrid);
                        computerGrid.innerHTML = displayGrid(game.computerGrid);
                        if (game.computerFleet[cell.id].sunk === true) {
                            if (game.computerFleet.shipsSunk === 5) {
                                newMessage = 'You win!!';
                                document.getElementById('start-game').style.visibility = 'visible';
                                document.getElementById('start-game').innerHTML = 'New Game';
                                playerAttack();
                            }
                            else {
                                newMessage = cell.id + ' was sunk!';
                            }
                        }
                    }
                    else {
                        if (cell.className !== 'hit') {
                            newMessage = String.fromCharCode(65 + (col - 1)) + ' ' + row + ' was a ' + 'miss!';
                            game.computerGrid = markGridMiss(row - 1, col - 1, game.computerGrid);
                            computerGrid.innerHTML = displayGrid(game.computerGrid);
                        }
                    }
                    message.innerHTML = newMessage;

                    setTimeout(computerAttack, 1000);
                    playerAttack();
                }
            }
        }
        else {
            newMessage = 'You win!!';
            document.getElementById('start-game').style.visibility = 'visible';
            document.getElementById('start-game').innerHTML = 'New Game';
        }
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function computerAttack() {
        if (game.playerFleet.shipsSunk !== 5) {
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
            row = point[0];
            col = point[1];
            game.computerGuesses.push(point);
            var cell = playerGrid.rows[row].cells[col];
            var message = document.getElementById('message');
            var newMessage = '<br>';
            if (cell.className === 'ship') {
                newMessage = 'The computer hit ' + cell.id;
                game.playerFleet = markShipHit(cell.id, game.playerFleet);
                game.grid = markGridHit(row - 1, col - 1, game.grid);
                playerGrid.innerHTML = displayGrid(game.grid);
                if (game.playerFleet[cell.id].sunk === true) {
                    if (game.playerFleet.shipsSunk == 5) {
                        document.getElementById('start-game').style.visibility = 'visible';
                        document.getElementById('start-game').innerHTML = 'New Game';
                        newMessage = 'The computer wins...';
                    }
                    else {
                        newMessage = cell.id + ' was sunk!';
                    }
                }
                // Make the next guess adjacent or close to the previous guess if it's a hit
                var origRow = row;
                row++;
                if (row > 9) {
                    row--;
                }
                cell = playerGrid.rows[row].cells[col];
                if (cell.className === 'ship') {
                    game.computerRow = row;
                    game.computerCol = col;
                }
                else {
                    row--;
                    if (row < 0) {
                        row++;
                    }
                    cell = playerGrid.rows[row].cells[col];
                    if (cell.className === 'ship') {
                        game.computerRow = row;
                        game.computerCol = col;
                    }
                    else {
                        row--;
                        if (row < 0) {
                            row = row + 1;
                        }
                        cell = playerGrid.rows[row].cells[col];
                        if (cell.className === 'ship') {
                            game.computerRow = row;
                            game.computerCol = col;
                        }
                        else {
                            row = origRow;
                            col++;
                            if (col > 9) {
                                col = col - 1;
                            }
                            cell = playerGrid.rows[row].cells[col];
                            if (cell.className === 'ship') {
                                game.computerRow = row;
                                game.computerCol = col;
                            }
                            else {
                                col = col - 1;
                                if (col < 0) {
                                    col = col + 1;
                                }
                                cell = playerGrid.rows[row].cells[col];
                                if (cell.className === 'ship') {
                                    game.computerRow = row;
                                    game.computerCol = col;
                                }
                                else {
                                    col--;
                                    if (col < 0) {
                                        col = col + 1;
                                    }
                                    cell = playerGrid.rows[row].cells[col];
                                    if (cell.className === 'ship') {
                                        game.computerRow = row;
                                        game.computerCol = col;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else {
                if (cell.className !== 'hit') {
                    newMessage = 'The computer missed!';
                    game.grid = markGridMiss(row - 1, col - 1, game.grid);
                    playerGrid.innerHTML = displayGrid(game.grid);
                }
            }
            message.innerHTML = newMessage;
        }
        else {
            document.getElementById('start-game').style.visibility = 'visible';
            document.getElementById('message').innerHTML = 'The computer wins...';
            document.getElementById('start-game').innerHTML = 'New Game';
        }
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function generatePoint() {
        var row = Math.floor((Math.random() * 10) + 1);
        var col = Math.floor((Math.random() * 10) + 1);
        if (game.computerRow > -1) {
            row = game.computerRow;
            game.computerRow = -1;
        }
        if (game.computerCol > -1) {
            col = game.computerCol;
            game.computerCol = -1;
        }
        var point = [row, col];
        return point;
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function initializeGrid(grid) {
        for (var h = 0; h < grid.length; h++) {
            for (var i = 0; i < grid.length; i++) {
                for (var j = 0; i < grid.length; i++) {
                    grid[i][h] = '<td></td>';
                }
            }
        }
        return grid;
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function addShipsToGrid(ships, grid, player) {
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

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function handleShipPlacement(grid, playerFleet) {
        var placementButton = document.getElementById('placement-button');
        placementButton.onclick = function () {
            var updatedShips = placeShip(playerFleet);
            grid = addShipsToGrid(updatedShips, grid, true);
            playerBoard.innerHTML = displayBoard(grid);
            return grid;
        }
        return grid;
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function comparePoints(computerGuesses, point) {
        if (computerGuesses.length == 0) {
            return false;
        }
        for (var i = 0; i < computerGuesses.length; i++) {
            if (computerGuesses[i][0] === point[0] && computerGuesses[i][1] === point[1]) {
                return true;
            }
        }
        return false;
    }

    //Function  :
    //Purpose   :
    //Parameters:
    //Returns   :
    function returnCellContent() {
        var cells = document.getElementsByTagName('td');

        for (var i = 0; i < cells.length; i++) {

            var cell = cells[i];

            cells[i].onclick = markGridMiss;
        }
    }
}

