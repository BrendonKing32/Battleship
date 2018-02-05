/*
Name       :Brendon King
Class      :CS 2550
Title      :board.js
Version    :Version 01
Description:Contains the functions necessary to create game board and set up battleship.
*/
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
              cell.setAttribute("backgroundColor", "#d1d3d6");
            }
            else {
              var cell = document.createElement("td");
              var cellText = document.createTextNode("");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
    tbl.setAttribute("align", "center");
}
