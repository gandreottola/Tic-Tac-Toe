# Tic-Tac-Toe
A simple browser game that lets you play on one device. The players switch
between X and O, giving the user an option to play by themselves or with
someone else. In order for player to win, they must get three X's
or 0's in a row, either horizontally, vertically or diagonally. If no X or O
are in a row of three then both players tie.

## DEVELOPMENT PROCESS
At the start, I started to think visually on what the user interface should
look like. I drew up a wireframe that shows the outline of how the browser
layout should look. Then I started to think from a user point of view, to see
if I was a user of this game what kind of functionalities would I want to see.
So I began to write out some user stories to determine on how the game should
function on a user view point. Once the planning on how the web page
should work and look was done, I began to write the html to show the basic
layout of the page.

Once the html layout was done, I started to add the api authentication for
signing up, siging in, siging out and changing password. When I finished with
the authentication, I started to write code for the game logic for player
switching, determining wins or ties and not being to click on occupied spaces or
when the game is over. That took me some time to figure out but at the end,
I was able to get it to work. Once that was completed, I realized I should've
started making the api for create new game, update game, and displaying games
played before working on the game logic. The reason why I shoudld've started
to work with game api first is because when game logic was done, I had to go
back through each line of code to add the game api. Making sure the game logic
was working and communicating properly with game api. I feel working with game
api first before game logic is a more methodical approach than starting
with game logic then working game api. After api's and game logic was set up,
that's when I started to style the page to make it look more presentable.

This project was a big learning curve for me because this was my first time
ever making something from scratch in code. So I was able to learn a lot by
pushing through all the bugs I had to fix, although it took many hours to
figure out on how to fix those bugs. At the end, I was able to get all the
requirements completed by the determined time frame.

## LIST OF TECHNOLOGIES
* HTML
* CSS
* JAVASCRIPT -> jquery(event handler), ajax(API)
* Used curl scripts to test out API in terminal before testing API on browser
to ensure the scripts were working properly.
* Used CRUD acronym to have basic fucntions for storing data in API.

* CRUD
  - Create
  - Read
  - Update
  - Destroy

## WIREFRAME
![Wireframe](https://i.imgur.com/NbAXCD6.jpg)

## USER STORIES
1. As a user, I want to be able to sign in, sign up, sign out and change
password when signed in.
2. As a user, I want to see successful message when I sign in, sign up, sign
out, and change password.
3. As a user, I want to see fail message when I can't sign in, sign up, sign
out, and change password.
4. As a user, I want a button to create new games and to display message
new game created.
5. As a user, I want to see number of games played in signed in account.
6. As a user, I want players to switch between X and O. As well, notifying
player x and player o turns.
7. As a user, I want to see a win or tie message when player x or o wins, or
when both players tie.
8. As a user, I want to see message for already clicked spots on tic tac toe
board.
9. As a user, I want to see message game over when player keeps clicking after
win or tie.
10. As a user, I don't want players to place x or o in empty spots,
once player has won or tie.

### FUTURE ITERATIONS
* Add a multiplayer section, for playing against opponents on other devices
 and to play against a bot.
* Show number of games won by player x and player o.
* User interface on mobile devices.
* Allow user to search games based on game ID and allowing them to keep playing
unfinshed games.
* Give user an option to play as X or O.
