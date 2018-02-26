/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/models.js
Version    :Version 03
Description:Contains the functions that control game play and manage the data
*/

//Function  :NewGame()
//Purpose   :Constructor (prototype) for game object, intitializes ships and gameboard
//Parameters:none
//Returns   :none
function NewGame() {
    var game = initializeGame();
    return game;
}

//Function  :Game()
//Purpose   :Constructor function for Game object
//Parameters:
//Returns   :
function Game(playerBoard, computerBoard, playerFleet, computerFleet) {
    this.playerBoard = playerBoard;
    this.computerBoard = computerBoard;
    this.playerFleet = playerFleet;
    this.computerFleet = computerFleet;
    this.computerGuesses = new Array();
    this.computerRow = -1;
    this.computerCol = -1;
}

//Function  :PlayerFleet()
//Purpose   :
//Parameters:
//Returns   :
function PlayerFleet() {
    this.placedCount = 0;
    this.Battleship;
    this.Carrier;
    this.Submarine;
    this.Destroyer;
    this.PatrolBoat;
    this.shipsDestroyed = 0;
}

//Function  :ComputerFleet()
//Purpose   :
//Parameters:
//Returns   :
function ComputerFleet() {
    this.Battleship;
    this.Carrier;
    this.Submarine;
    this.Destroyer;
    this.PatrolBoat;
    this.shipsDestroyed = 0;
}

//Function  :Constructor (prototype) for ship objects
//Purpose   :Create ships for the players to interact with/set variables
//Parameters:int health, array location
//Returns   :Ship Object
function Ship(size, location) {
    this.size = size;
    this.location = location;
    this.isDestroyed = false;
    this.numHits = 0;
}

//Function  :InitializeGame()
//Purpose   :Initializes "fresh" ships and gameboards to use.
//Parameters:none
//Returns   :game Object
function InitializeGame() {
    var playerBoard = CreateBoard(10, 10);
    var computerBoard = CreateBoard(10, 10);
    var playerFleet = new PlayerFleet();
    var computerFleet = new ComputerFleet();

    //Initialize player ships
    playerFleet.Carrier = new Ship(5, []);
    playerFleet.Battleship = new Ship(4, []);
    playerFleet.Submarine = new Ship(3, []);
    playerFleet.Destroyer = new Ship(3, []);
    playerFleet.PatrolBoat = new Ship(2, []);

    //Initialize computer ships
    computerFleet.Carrier = new Ship(5, []);
    computerFleet.Battleship = new Ship(4, []);
    computerFleet.Submarine = new Ship(3, []);
    computerFleet.Destroyer = new Ship(3, []);
    computerFleet.PatrolBoat = new Ship(2, []);
    var game = new Game(playerBoard, computerBoard, playerFleet, computerFleet);
}

//Function  :CreateBoard()  
//Purpose   :
//Paramaters:
//Returns   :
function CreateBoard(x, y) {
    var board = new Array();
    for (var i = 0; i < x; i++) {
        board[i] = new Array();
        for (var j = 0; j < y; j++) {
            board[i][j] = '';
        }
    }
    return board;
}

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function PlaceShip(playerFleet) {
    var ship = document.getElementById('ship').value;
    var row = parseInt(document.getElementById('row').value - 1);
    var col = parseInt(document.getElementById('col').value - 1);
    if (col > 9 || row > 9) {
        window.alert("INVALID LOCATION!");
        return false;
    }
    var direction = document.getElementById('direction').value;
    var location = [];
    if (playerFleet[ship].shipLocation.length > 0) {
        window.alert("SHIP HAS ALREADY BEEN PLACED!");
        return false;
    }
    if (direction == 'horizontal') {
        for (var i = 0; i < playerFleet[ship].size; i++) {
            if (col + playerFleet[ship].size > 10) {
                window.alert("INVALID LOCATION!");
                return false;
            }
            location.push({ 'x': col + i, 'y': row });
        }
    }
    else if (direction == 'vertical') {
        for (var i = 0; i < playerFleet[ship].size; i++) {
            if (row + playerFleet[ship].size > 10) {
                window.alert("INVALID LOCATION!");
                return false;
            }
            location.push({ 'x': col, 'y': row + i });
        }
    }
    playerFleet[ship].shipLocation = location;
    playerFleet.placedCount++;
    return playerFleet;

}

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function MarkHit(ship, ships) {

}

//Function  :markGridHit()
//Purpose   :mark the grid as a hit on selection
//Parameters:int row, int col, object grid
//Returns   :updated object grid
function markGridHit(row, col, grid) {
    grid[col][row] = '<td class="hit"><b>HIT</b></td>';
    return grid;
}

//Function  :markGridMiss()
//Purpose   :mark the grid as missed on selection
//Parameters:int row, int col, object grid
//Returns   :updated object grid
function markGridMiss(row, col, grid) {
    grid[col][row] = '<td class="miss"><b>MISS</b></td>';
    return grid;
}


