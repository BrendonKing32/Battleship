/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/models.js
Version    :Version 03
Description:Contains the functions that control game play and manage the data
*/

//Board Variables
var boardP1 = [
    ["   "," A "," B "," C "," D "," E "," F "," G "," H "," I "," J "],
    [" 1 ","   ","   "," x ","   ","[ ]","[ ]","[ ]","[ ]","[ ]","   "],
    [" 2 ","   ","   ","   ","   ","   ","   "," x ","   ","[ ]","   "],
    [" 3 ","   ","   ","[ ]","[ ]","[ ]","   ","   ","   ","[ ]","   "],
    [" 4 ","   ","   ","   ","   "," x ","   "," x ","   ","[ ]","   "],
    [" 5 "," x ","   ","   ","   ","   ","   ","   ","   ","   "," x "],
    [" 6 ","   ","   ","   ","   ","   ","   ","[ ]","   ","   ","   "],
    [" 7 ","   ","   ","   ","   ","   "," x ","[x]"," x ","   ","   "],
    [" 8 "," x ","   ","   ","   ","   ","   ","[ ]","   ","   ","   "],
    [" 9 ","   ","   "," x ","   ","   ","   ","[ ]","   ","   ","   "],
    ["10 ","   ","   ","   ","   "," x ","   ","   ","   ","[ ]","[ ]"]];
var boardP2 = [
    ["   "," A "," B "," C "," D "," E "," F "," G "," H "," I "," J "],
    [" 1 ","   ","   ","   "," x "," x "," x ","   ","   ","   ","   "],
    [" 2 ","   ","   ","   ","   ","   ","   ","   ","   "," x ","   "],
    [" 3 ","   ","   ","   ","   ","   ","   ","   ","   ","   ","   "],
    [" 4 ","   ","   ","   ","   "," x ","   "," x ","   ","   ","   "],
    [" 5 ","   ","   ","   "," x ","   ","   ","   ","   ","   ","   "],
    [" 6 ","   ","   "," x ","   "," x "," x ","   ","   ","[x]","[x]"],
    [" 7 ","   ","   ","   ","   ","   ","   ","   ","   ","   ","   "],
    [" 8 ","   ","   ","   ","   ","   ","[x]","   ","   ","   ","   "],
    [" 9 ","   ","   ","   ","   ","   ","   ","   "," x ","   ","   "],
    ["10 ","   ","   ","   ","   ","   ","   ","   ","   ","   ","   "]];

//Ship Variables for Player 1
var CarrierP1;
var BattleshipP1;
var SubmarineP1;
var DestroyerP1;
var PatrolBoatP1;

//Ship Variables for Player 2
var CarrierP2;
var BattleshipP2;
var SubmarineP2;
var DestroyerP2;
var PatrolBoatP2;



//Method    :GetCell()
//Purpose   :
//Parameters:
//Returns   :
function GetCellContentP1(numRow,numCol) {
    return boardP1 [numRow][numCol];
}

//Method    :
//Purpose   :
//Parameters:
//Returns   :
function GetCellContentP2 (numRow, numCol) {
    return boardP2 [numRow][numCol];
}
//Method    :
//Purpose   :
//Parameters:
//Returns   :
