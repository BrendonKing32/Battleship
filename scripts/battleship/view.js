/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/board.js
Version    :Version 03
Description:Contains the functions that serve information to the browser for the user/requestor
*/

//Method    :GenerateTable
//Purpose   :create the game boards that the players will use
//Parameters:int numRows, int numCOlumns, playerID
//Returns   :none
function GenerateTable(numRows, numColumns, playerID) {
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
              //parse player data into view
              if (playerID == 1) {
                  var content = GetCellContentP1(i, j);
              }
              if (playerID == 2) {
                  var content = GetCellContentP2(i, j);
              }
              if (content == "[ ]") {
                console.log(" Board: " + playerID + " row: " + i + " column: " + j + " content: SHIP");
                cell.setAttribute("style", "background:green");
              }
              else if (content == " x ") {
                console.log(" Board: " + playerID + " row: " + i + " column: " + j + " content: MISS");
                cell.setAttribute("style", "background:#000069");
              }
              else if (content == "[x]") {
                console.log(" Board: " + playerID + " row: " + i + " column: " + j + " content: HIT");
                cell.setAttribute("style", "background:red");
              }
              else {
                cell.setAttribute("style", "background:#43A6FF");
              }
              var cellText = document.createTextNode("");
              //cell.setAttribute("style", "background:lightgray");
            }
            if (i == 0) {
                cell.setAttribute("style", "background:#616366");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
    tbl.setAttribute("align", "center");
}

//Method    :GenerateForm
//Purpose   :Create and append the controls to board.html
//Parameters:none
//Returns   :none
function GenerateForm() {

}
