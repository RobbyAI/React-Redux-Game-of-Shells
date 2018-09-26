# Programming Challenge: The Game of Shells

## The Game
The Game of Shells involves a flat surface, a row of three small containers, and a ball small enough to fit underneath each of them. On each turn of the game the player is shown the ball being placed under one of the containers before the order of the containers is repeatedly shuffled at random. The player has to guess correctly which container the ball is under in order to win; otherwise they lose.

## The goal
Your goal is to develop a playable version of this game with JS. You can implement it in any way you see fit (e.g. React, Pure JS, Vue, Angular etc.) as long as the end result is playable! We aren't expecting a masterpiece of design, as the focus is more on the JS, but the visuals of the application should be of a high enough quality to ensure that a player can watch the shell the ball is under.

## The rules
General tips and things to think about:
* Animations are important! In this game it is critical that players can follow the shells as they are shuffled.
* Think about how you would expand the game to add different difficulty settings and more shells, and ensure that your application can be easily modified to allow them.
* If you write the game in pure JS then we'd still expect the JS application to be in control of what's being rendered into the DOM and how it's manipulated. We would therefore expect elements, such as the shells, to be created in the JS application as opposed to written directly in the HTML. Naturally, having a single 'root' element (or two, if you're implementing modals for player messages etc.) for you to 'mount' your application is completely fine!
