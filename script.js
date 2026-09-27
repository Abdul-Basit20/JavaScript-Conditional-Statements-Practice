/*Conditional Statements:  "To implement some condition in the code" */
// If statement: "if statement specified condition is true"
let temperature = 30;
if (temperature >= 25) {
  console.log("It's a warm day");
}

// If else statement:
// "if else statement specified the condition is true or false"
let age = 25;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// Another example of 'if else' statement:
let balance = 4000;
if (balance >= 1000) {
  console.log("withdrawal successful");
} else {
  console.log("Can't withdrawal you entered less than 1000");
}

// Alternative of 'if else' / Ternary Operators:
let weather = 48;
weather > 20
  ? console.log("Weather is warm")
  : console.log("Weather is normal");

// else if statement:
// "Allows you to test multiple sequential conditions when the previous conditions fail."
let userName = prompt("Enter your Username");
let password = prompt("Enter correct Password");

if (userName === "admin" && password === "admin123") {
  console.log("you are login successfully");
} else if (userName !== "admin" && password === "admin123") {
  console.log("Correct your Username!");
} else if (userName === "admin" && password !== "admin123") {
  console.log("correct your Password!");
} else {
  console.log("Invalid values");
}

// Switch statement:
// "used to execute different blocks of code based on the value of a single expression"
let day = Number(prompt("Enter a number of day from 1 to 7"));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid value!");
}
