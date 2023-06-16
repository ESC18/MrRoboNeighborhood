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
* Is not completely responsive - may suffer when dealing with smaller screen sizes. For best results use a screen that measures 1920x1080px.

## Licensing:
MIT
Copyright (c) 2023 _Elijah Shawn Cartwright_

## Tests:


Describe: arraySave();

Test: Takes value outputted from tester() and pushes it to an array so as to save it to a long list of values as a string. For tests we. (This tests lines 4-6).
Code (Inserted on line 7): console.log(arr);
Expected output: "0, Boop, Beep, Won't you be my Neighbor?, 4, 5."


Describe: tester();

Test: Code takes value from counter and determines if it contains a 3 and replaces it with "Won't you be my neighbor?" (This tests lines 10-13).
Code (inserted on line 14): console.log(savedValue) 
Expected Output: " won't you be my Neighbor?"

Test: Code takes value from counter and determines if it contains a 2 and replaces it with " Beep". (This tests lines 14-17).
Code (inserted on line 18): console.log(savedValue)
Expected Output: " Beep"

Test: Code takes value from counter and determines if it contains a 1 and reokaces it with " Boop". (This tests lines 18-21).
Code (Inserted on line 22): console.log(savedValue)
Expected Output: " Boop" 

Test: Code takes value from counter and if it doesn't contain a 1,2, or 3 in said number, then it returns said number as is. For the tests we used the integer 5. (This tests lines 22-24).
Code (Inserted on line 25): console.log(savedValue);
Expected Output: 5.

