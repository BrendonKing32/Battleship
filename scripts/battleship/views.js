/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/board.js
Version    :Version 01
Description:Contains the functions necessary to create game board and set up battleship.
*/

//Method    :GenerateTable
//Purpose   :create the game boards that the players will use
//Parameters:int numRows, int numCOlumns
//Returns   :none
function GenerateTable(numRows, numColumns) {
    var body = document.getElementsByClassName('column')[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < numColumns; j++) {
            if (i == 0 && j >= 1) {
              var cell = document.createElement("td");
              var cellText = document.createTextNode((j));
            }

            else if (i >= 1 && j == 0) {
              var cell = document.createElement("td");
              var cellText = document.createTextNode(((i + 9).toString(36)).toUpperCase());
              cell.setAttribute("style", "background:#616366");
            }
            else {
              var cell = document.createElement("td");
              var cellText = document.createTextNode("");
              cell.setAttribute("style", "background:lightgray");
            }
            if (i == 0) {
                cell.setAttribute("style", "background:#616366");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    // TODO: Justify text node contents into center of cell
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
    tbl.setAttribute("align", "center");
}

//Method    :GenerateControls
//Purpose   :Create and append the controls to gameboard.html
//Parameters:none
//Returns   :none
function GenerateControls() {
    
}
