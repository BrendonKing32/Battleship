# Battleship Online
<h2>About</h2>
<p>CURRENT VERSION: 03</p>
<p>This project is for Computer Science 2550 (CS 2550) at Utah Valley University.  Throughout the semester it will change and grow to contain a fully functional and interactive rendition of a battleship "board" game. It is worth a significant portion of my grade, so it needs to look good and be efficient, but most importantly, WORK!</p>
<h2>TODO</h2>
<ul>
    <li>Add more information to index.html</li>
    <li>Add interactive elements to gameboard.html</li>
    <li>Work on AI</li>
    <li>Work on basic game logic</li>
    <li>Work on basic board generation</li>
    <li>Finish control boards</li>
</ul>
<h2>FIXME</h2>
<ul>
</ul>
<h2>REGARDING THE JSON CONFIGURATION</h2>
<p>Due to the nature of Battleship and the purpose of the configuration file containing computer fleet configurations, that data remains hidden/invisible from the user.  For the sake of this assignment, however, the ships will be shown to the player as proof that the JSON file is working and sending information the battleship controller.  My name is parsed from the configuration file and placed underneath the title of the page as proof of successful access.  If you place a breakpoint on the end of the main function in game/controller.js and then check the "game" variable and then the computerFleet variable, you can see that the computer ships have been updated with a random coordinate from the file provided.  There are five configurations, and they are selected on startup. </p>
<p>There is no need to interact with the site in any way; the information is parsed the moment the page is opened for the first time.</p>
