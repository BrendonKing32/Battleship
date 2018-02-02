/*
Name       :Brendon King
Class      :CS 2550
Title      :board.js
Version    :Version 01
Description:Contains the functions necessary to create game board and set up battleship.
*/
function GenerateTable() {

    // get the reference for the column
    var body = document.getElementsByClassName('column')[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells
    for (var i = 0; i < 10; i++) {
        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < 10; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <div>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
    tbl.setAttribute("align", "center");
}
