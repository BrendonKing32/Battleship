/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/controller.js
Version    :Version 01
Description:Contains the functions that control user input.
*/

window.onload = main();

//Function  :main
//Purpose   :main constructor method for battleship
//Parameters:none
//Returns   :none
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

    // Manage Player Login
    var loginStatus = document.getElementById('login-status');
    var loginButton = document.getElementById('login-button');
    var csTimeStamp = localStorage.getItem('cs2550timestamp');
    loginButton.onclick = function () {
        displayLogin();
        window.onfocus = function () {
            loginStatus.innerHTML = csTimeStamp;
        }
    }

    
    // Clear button
    var clearButton = document.getElementById('clear-button');
    clearButton.onclick = function () {
        localStorage.clear();
        loginStatus.innerHTML = "NOT LOGGED IN!";
    }

    // Save and Load game data
    var saveButton = document.getElementById('save-game');


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
    }

    // Controller functions

    function returnCellLocation() {
        document.getElementById('debug').innerHTML = '';
        var cells = document.getElementsByTagName('td')[0];
        for (var i = 0; i < cells.length; i++) {
            cells[i] = function () {
                var col = this.cellIndex;
                var row = this.parentNode.rowIndex;
                var cell = gridTable.rows[row].cells[col];
                if (cell.className === '') {
                    game.playerGrid = markGridMiss(row - 1, col -1, game.playerGrid);
                    game.playerGrid = displayBoard(game.playerGrid);
                }
            } 
        }
    }

    //Function  :playerAttack()
    //Purpose   :handle player interaction with enemy board, update ships, and manage turns
    //Parameters:none
    //Returns   :updated grid and ship objects
    function playerAttack() {
        if (game.computerFleet.shipsSunk !== 5) {
            var cells = document.getElementsByTagName('td');
            for (var i = 0; i < cells.length; i++) {
                cells[i].onclick = function () {
                    document.getElementById('debug').innerHTML = '';
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

    //Function  :computerAttack()
    //Purpose   :manage computer turns, update ship damage, and return updated grid values
    //Parameters:none
    //Returns   :updated grid
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
            var cell = playerBoard.rows[row].cells[col];
            var message = document.getElementById('message');
            var newMessage = '<br>';
            if (cell.className === 'ship') {
                newMessage = 'The computer hit ' + cell.id;
                game.playerFleet = markShipHit(cell.id, game.playerFleet);
                game.grid = markGridHit(row - 1, col - 1, game.grid);
                playerGrid.innerHTML = displayBoard(game.grid);
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

    //Function  :generatePoint()
    //Purpose   :simple method used by AI to select cell to attack
    //Parameters:none
    //Returns   :point object
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

    //Function  :initializeGrid()
    //Purpose   :initialize player boards for further interaction using data from model
    //Parameters:grid data from model.js
    //Returns   :grid object
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
    
    //Function  :addShipsToGrid(ships, grid, player)
    //Purpose   :manage the updating of the computer fleet from congiguration files
    //Parameters:ship arrays, grid objects, player values
    //Returns   :updated computer grid
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
    
    //Function  :handleShipPlacement()
    //Purpose   :event handler for ship placement
    //Parameters:grid, array playerFleet
    //Returns   :updated player grid
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

    //Function  :loadJSON
    //Purpose   :serve JSON configuration file
    //Parameters:traceback from loadComputerConfig
    //Returns   :JSON data
    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.open('GET', callback, false);
        xobj.send();
        var response = JSON.parse(xobj.responseText);
        return response
    }

    //Function  :loadComputerConfig()
    //Purpose   :populate computer Fleet coordinates with information from JSON
    //Parameters:computerFleet array
    //Returns   :none (updates array)
    function loadComputerConfig(computerFleet) {
        var JSON = loadJSON('scripts/game/configuration/config.json');
        var shipConfig = Math.floor((Math.random() * 5) + 1);
        var i = 0;
        for (var key in computerFleet) {
            switch (key) {
                case "computerCarrier":
                    i = 0;
                    break;
                case "computerBattleship":
                    i = 1;
                    break;
                case "computerCruiser":
                    i = 2;
                    break;
                case "computerSub":
                    i = 3;
                    break;
                case "computerDestroyer":
                    i = 4;
                    break;
            }
        }
    }

    //Function  :comparePoints()
    //Purpose   :function utilized by the computer when attacking to determine status of nearby cells (whether they've been hits, misses, selected)
    //Parameters:computerGuesses array, point object from generatePoint()
    //Returns   :boolean value (true if good, false if bad)
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

    //Function  :displayLogin()
    //Purpose   :generate login page for user to interact with
    //Parameters:none
    //Returns   :none
    function displayLogin() {
        window.open('login.html', '', 'width=350,height=200');
    }
}


