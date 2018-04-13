README.txt

Program :Battleship
Author  :Brendon King
Version :0.1
Purpose :Explain JSON configuration within program

Due to the nature of Battleship and the purpose of the configuration file containing computer fleet configurations, that data remains hidden/invisible from the user.  For the sake of this assignment, however, the ships will be shown to the player as proof that the JSON file is working and sending information the battleship controller.  My name is parsed from the configuration file and placed underneath the title of the page as proof of successful access.  If you place a breakpoint on the end of the main function in game/controller.js and then check the "game" variable and then the computerFleet variable, you can see that the computer ships have been updated with a random coordinate from the file provided.  There are five configurations, and they are selected on startup.

There is no need to interact with the site in any way; the information is parsed the moment the page is opened for the first time.