/*
Name       :Brendon King
Class      :CS 2550
Title      :main.js
Version    :Version 01
Description:Contains the generic code for the functionality of the site.
*/

//Function  :myMove()
//Purpose   :move an element on a diagonal and play sound at the end.
//Parameters:none
//Returns   :none
function myMove() {
    var sound = new Audio('media/game/audio/victory.wav');
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 450) {
            clearInterval(id);
            sound.play();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

//Function  :returnCellCoord()
//Purpose   :handle onclick events of 
//Parameters:none
//Returns   :none
function returnCellCoord() {
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        var row = this.cellIndex;
        var col = parentNode.col
    }
}