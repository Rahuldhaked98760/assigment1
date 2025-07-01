const prompt = require("prompt-sync")();

// Task 11: Greatest among three numbers
let num1 = parseInt(prompt("Task 11 - Enter the first number: "));
let num2 = parseInt(prompt("Task 11 - Enter the second number: "));
let num3 = parseInt(prompt("Task 11 - Enter the third number: "));
if (num1 >= num2 && num1 >= num3) {
  console.log("Task 11: The greatest number is", num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("Task 11: The greatest number is", num2);
} else {
  console.log("Task 11: The greatest number is", num3);
}

// Task 12: Leap year check
let year = parseInt(prompt("Task 12 - Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Task 12: It's a leap year.");
} else {
  console.log("Task 12: It's not a leap year.");
}

// Task 13: Character type check
let ch = prompt("Task 13 - Enter a single character: ");
if (ch >= 'A' && ch <= 'Z') {
  console.log("Task 13: Uppercase letter");
} else if (ch >= 'a' && ch <= 'z') {
  console.log("Task 13: Lowercase letter");
} else if (ch >= '0' && ch <= '9') {
  console.log("Task 13: Digit");
} else {
  console.log("Task 13: Special character");
}

// Task 14: Grade from marks
let marks = parseInt(prompt("Task 14 - Enter your marks (out of 100): "));
if (marks >= 90) {
  console.log("Task 14: Grade A");
} else if (marks >= 75) {
  console.log("Task 14: Grade B");
} else if (marks >= 60) {
  console.log("Task 14: Grade C");
} else if (marks >= 40) {
  console.log("Task 14: Grade D");
} else {
  console.log("Task 14: Grade F");
}

// Task 15: Weekday from day number
let day = parseInt(prompt("Task 15 - Enter day number (1 to 7): "));
if (day === 1) console.log("Task 15: Sunday");
else if (day === 2) console.log("Task 15: Monday");
else if (day === 3) console.log("Task 15: Tuesday");
else if (day === 4) console.log("Task 15: Wednesday");
else if (day === 5) console.log("Task 15: Thursday");
else if (day === 6) console.log("Task 15: Friday");
else if (day === 7) console.log("Task 15: Saturday");
else console.log("Task 15: Invalid day number");

// Task 16: Divisible by both 5 and 11
let num = parseInt(prompt("Task 16 - Enter a number: "));
if (num % 5 === 0 && num % 11 === 0) {
  console.log("Task 16: The number is divisible by both 5 and 11.");
} else {
  console.log("Task 16: The number is not divisible by both 5 and 11.");
}

// Task 17: Prime number check
let primeNum = parseInt(prompt("Task 17 - Enter a number: "));
let isPrime = true;
if (primeNum <= 1) {
  isPrime = false;
}
for (let i = 2; i <= Math.sqrt(primeNum); i++) {
  if (primeNum % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Task 17: It's a prime number.");
} else {
  console.log("Task 17: It's not a prime number.");
}

// Task 18: Driving license eligibility
let name = prompt("Task 18 - Enter your name: ");
let age = parseInt(prompt("Task 18 - Enter your age: "));
if (age >= 18) {
  console.log(`Task 18: ${name}, you are eligible for a driving license.`);
} else {
  console.log(`Task 18: ${name}, you are not eligible for a driving license.`);
}

// Task 19: Check if two numbers are equal or which one is greater
let n1 = parseInt(prompt("Task 19 - Enter first number: "));
let n2 = parseInt(prompt("Task 19 - Enter second number: "));
if (n1 === n2) {
  console.log("Task 19: Both numbers are equal.");
} else if (n1 > n2) {
  console.log("Task 19: First number is greater.");
} else {
  console.log("Task 19: Second number is greater.");
}

// Task 20: Even/Odd and Positive/Negative
let number = parseInt(prompt("Task 20 - Enter a number: "));
if (number % 2 === 0) {
  console.log("Task 20: The number is Even.");
} else {
  console.log("Task 20: The number is Odd.");
}
if (number > 0) {
  console.log("Task 20: The number is Positive.");
} else if (number < 0) {
  console.log("Task 20: The number is Negative.");
} else {
  console.log("Task 20: The number is Zero.");
}
