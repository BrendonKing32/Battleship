/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/models.js
Version    :Version 03
Description:Contains the functions that control game play and manage the data
*/

//Board Variables for gamestate (Board variables will be stored in game object)
var boardP1 = [
    ["   ", " A ", " B ", " C ", " D ", " E ", " F ", " G ", " H ", " I ", " J "],
    [" 1 ", "   ", "   ", " x ", "   ", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "   "],
    [" 2 ", "   ", "   ", "   ", "   ", "   ", "   ", " x ", "   ", "[ ]", "   "],
    [" 3 ", "   ", "   ", "[ ]", "[ ]", "[ ]", "   ", "   ", "   ", "[ ]", "   "],
    [" 4 ", "   ", "   ", "   ", "   ", " x ", "   ", " x ", "   ", "[ ]", "   "],
    [" 5 ", " x ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", " x "],
    [" 6 ", "   ", "   ", "   ", "   ", "   ", "   ", "[ ]", "   ", "   ", "   "],
    [" 7 ", "   ", "   ", "   ", "   ", "   ", " x ", "[x]", " x ", "   ", "   "],
    [" 8 ", " x ", "   ", "   ", "   ", "   ", "   ", "[ ]", "   ", "   ", "   "],
    [" 9 ", "   ", "   ", " x ", "   ", "   ", "   ", "[ ]", "   ", "   ", "   "],
    ["10 ", "   ", "   ", "   ", "   ", " x ", "   ", "   ", "   ", "[ ]", "[ ]"]];
var boardP2 = [
    ["   ", " A ", " B ", " C ", " D ", " E ", " F ", " G ", " H ", " I ", " J "],
    [" 1 ", "   ", "   ", "   ", " x ", " x ", " x ", "   ", "   ", "   ", "   "],
    [" 2 ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", " x ", "   "],
    [" 3 ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "],
    [" 4 ", "   ", "   ", "   ", "   ", " x ", "   ", " x ", "   ", "   ", "   "],
    [" 5 ", "   ", "   ", "   ", " x ", "   ", "   ", "   ", "   ", "   ", "   "],
    [" 6 ", "   ", "   ", " x ", "   ", " x ", " x ", "   ", "   ", "[x]", "[x]"],
    [" 7 ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "],
    [" 8 ", "   ", "   ", "   ", "   ", "   ", "[x]", "   ", "   ", "   ", "   "],
    [" 9 ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", " x ", "   ", "   "],
    ["10 ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   ", "   "]];

//Function  :Game()
//Purpose   :Constructor (prototype) for game object, intitializes ships and gameboard
//Parameters:none
//Returns   :none
function Game() {
    
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
//Parameters:int playerID, string name, int health, array location, bool isVertical
//Returns   :Ship Object
function Ship(health, location) {
    this.name = name;
    this.health = health;
    this.location = location;
    this.isVertical = isVertical;
    this.isDestroyed = false;
    this.numHits = 0;
}

//Function  :InitializeGame()
//Purpose   :Initializes "fresh" ships and gameboards to use.
//Parameters:none
//Returns   :game Object
function InitializeGame() {
    var board1 = CreateGrid(10, 10);
    var board2 = CreateGrid(10, 10);
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
    var game = new Game()
}

//Function  :CreateGrid()  
//Purpose   :
//Paramaters:
//Returns   :
function CreateGrid(x, y) {
    var board = new Array();
    for (var i = 0; i < x; i++) {
        board[i] = new Array();
        for (var j = 0; j < y; j++) {
            board[i][j] = '';
        }
    }
    return board;
}

//Function  :GetCellContentP1()
//Purpose   :Getter function for BoardP1
//Parameters:int numRow, int numCol
//Returns   :boardP1[numRow][numCol]
function GetCellContentP1(numRow, numCol) {
    return boardP1[numRow][numCol];
}

//Function  :GetCellContentP2()
//Purpose   :Getter function for Board2
//Parameters:int numRow, int numCol
//Returns   :boardP2[numRow][numCol]
function GetCellContentP2(numRow, numCol) {
    return boardP2[numRow][numCol];
}


