/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/model.js
Version    :Version 03
Description:Contains the functions that control game play and manage the data
*/

//Function  :newGame()
//Purpose   :constructor method for the game object
//Parameters:none
//Returns   :game object
function newGame() {
    return initializeGame();
}

// Objects

//Function  :Game()
//Purpose   :constructor method for the game.  Initializes all other letiables
//Parameters:grid, computerGrid, playerFleet, computerFleet
//Returns   :none
function Game(grid, computerGrid, playerFleet, computerFleet) {
    this.grid = grid;
    this.computerGrid = computerGrid;
    this.playerFleet = playerFleet;
    this.computerFleet = computerFleet;
    this.computerGuesses = [];
    this.computerRow = -1;
    this.computerCol = -1;
}

//Function  :PlayerFleet()
//Purpose   :constructor method for the player ships
//Parameters:none
//Returns   :none
function PlayerFleet() {
    this.placedCount = 0;
    this.playerCarrier;
    this.playerBattleship;
    this.playerCruiser;
    this.playerSub;
    this.playerDestroyer;
    this.shipsSunk = 0;
}

//Function  :ComputerFleet
//Purpose   :constructor method for the computer ships
//Parameters:none
//Returns   :none
function ComputerFleet() {
    this.computerCarrier;
    this.computerBattleship;
    this.computerCruiser;
    this.computerSub;
    this.computerDestroyer;
    this.shipsSunk = 0;
}

//Function  :Ship()
//Purpose   :constructor method for individual ships
//Parameters:size, location
//Returns   :none
function Ship(size, location) {
    this.shipSize = size;
    this.shipLocation = location;
    this.sunk = false;
    this.hits = 0;
}

// Functions

//Function  :initializeGame()
//Purpose   :initializes game letiables and overwrites old data
//Parameters:none
//Returns   :game
function initializeGame() {
    let grid = createGridArray(10, 10);
    let computerGrid = createGridArray(10, 10);
    let playerFleet = new PlayerFleet();
    let computerFleet = new ComputerFleet();

    // Generates Player ships
    playerFleet.playerCarrier = new Ship(5, []);
    playerFleet.playerBattleship = new Ship(4, []);
    playerFleet.playerCruiser = new Ship(3, []);
    playerFleet.playerSub = new Ship(3, []);
    playerFleet.playerDestroyer = new Ship(2, []);

    // Generates Computer ships
    computerFleet.computerCarrier = new Ship(5, []);
    computerFleet.computerBattleship = new Ship(4, []);
    computerFleet.computerCruiser = new Ship(3, []);
    computerFleet.computerSub = new Ship(3, []);
    computerFleet.computerDestroyer = new Ship(2, []);

    let game = new Game(grid, computerGrid, playerFleet, computerFleet);
    return game;
}

//Function  :createGridArray()
//Purpose   :initialize grid objects for interaction
//Parameters:x, y integers (for size)
//Returns   :grid object
function createGridArray(x, y) {
    let grid = new Array();
    for (let i = 0; i < x; i++) {
        grid[i] = new Array();
        for (let j = 0; j < y; j++) {
            grid[i][j] = '';
        }
    }
    return grid;
}

//Function  :placeShip()
//Purpose   :updates the location of the player ships with information from the view
//Parameters:playerFleet array
//Returns   :updated playerFleet array
function placeShip(playerFleet) {
    let soundError = new Audio("media/audio/error.wav");
    let ship = document.getElementById('input-ship').value;
    let row = parseInt(document.getElementById('input-row').value) - 1;
    let col = parseInt(document.getElementById('input-col').value) - 1;

    //check values
    if (col > 9 || row > 9) {
        soundError.play();
        window.alert("You cannot place a ship out of bounds!");
        return false;
    }
    let direction = document.getElementById('input-direction').value;
    let location = [];
    if (playerFleet[ship].shipLocation.length > 0) {
        soundError.play();
        window.alert("That ship has been placed!");
        return false;
    }
    if (direction == 'horizontal') {
        for (let i = 0; i < playerFleet[ship].shipSize; i++) {
            if (col + playerFleet[ship].shipSize > 10) {
                soundError.play();
                window.alert("You cannot place a ship out of bounds!");
                return false;
            }
            location.push({ 'x': col + i, 'y': row });
        }
    }
    else if (direction == 'vertical') {
        for (let i = 0; i < playerFleet[ship].shipSize; i++) {
            if (row + playerFleet[ship].shipSize > 10) {
                soundError.play();
                window.alert("You cannot place a ship out of bounds!");
                return false;
            }
            location.push({ 'x': col, 'y': row + i });
        }
    }
    playerFleet[ship].shipLocation = location;
    playerFleet.placedCount++;
    return playerFleet;
}

//Function  :markShipHit()
//Purpose   :update ship damage once received from the view and controller
//Parameters:ship, ships
//Returns   :updated ship object
function markShipHit(ship, ships) {
    if (ships[ship].hits < ships[ship].shipSize) {
        if (ships[ship].hits == ships[ship].shipSize - 1) {
            ships[ship].hits++;
            ships[ship].sunk = true;
            ships.shipsSunk++;
            return ships;
        }
        else {
            ships[ship].hits++;
            return ships;
        }
    }
    return ships;
}

//Function  :markGridHit()
//Purpose   :updates the grid object with information after receiving it from the view and controller
//Parameters:row, col, grid
//Returns   :updated grid
function markGridHit(row, col, grid) {
    grid[col][row] = '<td class="hit"><b>HIT</b></td>';
    return grid;
}

//Function  :markGridMiss()
//Purpose   :updates the grid object with information after receiving it from the view and controller
//Parameters:row, col, grid
//Returns   :updated grid
function markGridMiss(row, col, grid) {
    grid[col][row] = '<td class="miss"><b>MISS</b></td>';
    return grid;
}
