/*
Name       :Brendon King
Class      :CS 2550
Title      :login.js
Version    :Version 01
Description:Contains the code for login
*/

//Function  :handleLogin()
//Purpose   :requests information from the CS 2550 Server and returns the information
//Parameters:none
//Returns   :none
function handleLogin() {
    var ajax = new XMLHttpRequest();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var data = 'userName=' + username + '&password=' + password;
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            var response = JSON.parse(ajax.responseText);
            if (response.result == 'valid') {
                var timestamp = 'User: ' + username + '' + response.timestamp;
                localStorage.setItem('cs2550timestamp', timestamp);
                window.location = 'board.html';
            }
            else {
                window.alert("INVALID LOGIN CREDENTIALS!");
            }
        }
    }
}