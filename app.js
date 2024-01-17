/* 1. create a string saying what I want the alert to read
"You have received this message because you have chosen to open an important vault. Here is the secret combination:"
2. create 3 variables that use srithmetic operators (are math problems) - each equaling a number of the code
3. Include comments throughout the code
4. create an alert so my JS code generates as a popup in the site
5. Submit via GitHub and also submit a screenshot via Canvas
*/

const message = "You have received this message because you have chosen to open an important vault. Here is the secret combination:";
let firstComboNumber = 20 / 2;
let secondComboNumber = 10 * 4;
let thirdComboNumber = 40 - 1;

alert(message + " " + firstComboNumber + " " + "-" + " " + secondComboNumber + " " + "-" + " " + thirdComboNumber);

//Don't forget to insert spaces " " where needed so ensure the output looks right as alerting or console.logging something will concactenate what you input quite literally! 