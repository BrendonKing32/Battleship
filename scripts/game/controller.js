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

    //initialize grid Player 1
    game.Player1Board;

    //initialize grid Player 2
    game.Player2Board;
    

}

//Function  :ThrowAlert()
//Purpose   :Simple warning for unimplemented elements
//Parameters:user interaction with unavailable element
//Returns   :none
function ThrowAlert() {
  window.alert("OPTION UNAVAILABLE!");
}
