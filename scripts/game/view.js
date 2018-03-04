/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/view.js
Version    :Version 03
Description:Contains the functions that serve information to the browser for the user/requestor
*/

//Function  :GenerateTable
//Purpose   :create the game boards that the players will use
//Parameters:int numRows, int numCOlumns, playerID
//Returns   :table element
function displayBoard(board) {
    var html = '';
    for (var i = -1; i < grid.length; i++) {
        if (i == -1) {
            html += '<tr><th></th>';
        }
        else {
            html += '</tr><tr><th>' + (i + 1) + '</th>';
        }
        for (var j = 0; j < grid.length; j++) {
            if (i == -1) {
                html += '<th>' + String.fromCharCode(65 + j); + '</th></tr>';
            }
            else {
                html += grid[j][i];
            }
        }
    }
    return html;
}

//Function  :GenerateForm
//Purpose   :Create and append the controls to board.html
//Parameters:none
//Returns   :none
function GenerateForm() {

}
