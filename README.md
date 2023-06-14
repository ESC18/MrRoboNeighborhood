# MR Robo's Neighborhood
#### By Elijah Shawn Cartwright
## Developed as an assignment for Epicodus Web-Dev School.
## Technologies used:
* HTML
* CSS
* GIT
* JS
* Adobe XD
* Chrome & Firefox Web developer tools

## Description of Application:
This web application was designed to simulate the output of a neighbor that is a robot. The user can tell the robot any number and depending on the number - the robot will spew out slightly different responses. It subtracts from the number to produce a longer response.
## Setup and installation requirements/guide:
1. First download the repository _"MrRoboNeighborhood"_ to your device.
2. Proceed to navigate to the highest level of your directory.
3. Open index.html.

## Known Bugs:
* The JS will not delete the entirety of the number if it has more than a single digit; resulting in there being results that show as "beep4" or "boop4" for example.
* Is not completely responsive - may suffer when dealing with smaller screen sizes. For best results use a screen that measures 1920x1080px.

## Licensing:
MIT
Copyright (c) 2023 _Elijah Shawn Cartwright_

## Tests:

Describe: submitFunction()

Test: Should be able to grab input from user.
Code: let inputNumber = document.getElementById("input").value;
Expected Output: 5 (or whatever user inputs - I used the int 5 for my tests)

Test: Should subtract from the user-inputted number to produce an array.
Code: 
        for (let index = 0; index <= inputNumber; index++) {
        numberAr.push(index); }
Expected Output: 1,2,3,4,5 (As stated before - I used the int 5 for my tests).

Test: Should seperate results with '-'.
Code: test = numberAr.join(' - ');
Expected Output: 1 - 2 - 3 - 4 - 5.

Test: Should turn array into string and then turn 1's into 'boop', 2's into 'beep', and 3's into 'Welcome to the Neighborhood'.
Code:             
         test = test.toString().replaceAll("1", "Beep").replaceAll("2", "Boop").replaceAll("3", "Welcome to the neighborhood");
Expected Output: 0 - Beep - Boop - Welcome to the neighborhood - 4 - 5.




