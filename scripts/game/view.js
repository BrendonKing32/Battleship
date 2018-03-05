/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/view.js
Version    :Version 03
Description:Contains the functions that serve information to the browser for the user/requestor
*/

//Function  :displayBoard
//Purpose   :create the game boards that the players will use
//Parameters:int numRows, int numColumns, playerID
//Returns   :table element
function displayBoard(board) {
    var html = '';
    for (var i = -1; i < board.length; i++) {
        if (i == -1) {
            html += '<tr style="background:gray"><th></th>';
        }
        else { 
            html += '</tr><tr><th style="background:grey">' + (i + 1) + '</th>';
        }
        for (var j = 0; j < board.length; j++) {
            if (i == -1) {
                html += '<th style="background:grey">' + String.fromCharCode(65 + j); + '</th></tr>';
                
            }
            else {
                html += board[j][i];                 
            }
        }
    }
    return html;
}
