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
    //Init Boards
    var BoardP1 = [];
    var BoardP2 = [];

    //Init Ship Variables Player 1
    var CarrierP1 = new Ship(1, "Carrier", 5, [], false);
    var BattleshipP1 = new Ship(1, "Battleship", 4, [], false);
    var DestroyerP1 = new Ship(1, "Destroyer", 3, [], false);
    var SubmarineP1 = new Ship(1, "Submarine", 3, [], false);
    var PatrolBoatP1 = new Ship(1, "Patrol Boat", 2, [], false);

    //Init Ship Variables Player 2
    var CarrierP2 = new Ship(2, "Carrier", 5, [], false);
    var BattleshipP2 = new Ship(2, "Battleship", 4, [], false);
    var DestroyerP2 = new Ship(2, "Destroyer", 3, [], false);
    var SubmarineP2 = new Ship(2, "Submarine", 3, [], false);
    var PatrolBoatP2 = new Ship(2, "Patrol Boat", 2, [], false);
}    
//Function  :Constructor (prototype) for ship objects
//Purpose   :Create ships for the players to interact with/set variables
//Parameters:int playerID, string name, int health, array location, bool isVertical
//Returns   :Ship Object
function Ship(playerID, name, health, location, isVertical) {
    this.playerID = playerID;
    this.name = name;
    this.health = health;
    this.location = location;
    this.isVertical = isVertical;
    this.isDestroyed = false;
    this.numHits = 0;
}

//Function  :StartGame()
//Purpose   :Initializes "fresh" ships and gameboards to use.
//Parameters:none
//Returns   :game Object
function StartGame() {
    var game = new Game();
    return game;
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


