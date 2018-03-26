/*
Name       :Brendon King
Class      :CS 2550
Title      :login.js
Version    :Version 01
Description:Contains the code for login
*/

window.onload = main;

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function main() {

    //handlers
    var confirmLoginButton = document.getElementById('confirm-login')
    confirmLoginButton.onclick = function () {
        handleLogin();
    }

    var cancelOperationButton = document.getElementById('cancel-operation');
    cancelOperationButton.onclick = function () {
        window.close();
    }
}

//Function  :
//Purpose   :
//Parameters:
//Returns   :
function handleLogin() {
    var ajax = new XMLHttpRequest();
    var loginURL = 'http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php';
    var debug = document.getElementById('debug');
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var data = 'userName=' + username + '&password=' + password;
    ajax.open('POST', loginURL, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send(data);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            var response = JSON.parse(ajax.responseText);
            if (response.result == "valid") {
                var timestamp = 'User: ' + username + '' + response.timestamp;
                localStorage.setItem('cs2550timestamp', timestamp);
                window.close();
            }
            else {
                window.alert("INVALID RESPONSE FROM SERVER!");
            }
        }
    }
}


