/*
Name       :Brendon King
Class      :CS 2550
Title      :main.js
Version    :Version 01
Description:Contains the generic code for the functionality of the site.
*/

//Function  :myMove()
//Purpose   :move an element on a diagonal
//Parameters:none
//Returns   :none
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 450) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}