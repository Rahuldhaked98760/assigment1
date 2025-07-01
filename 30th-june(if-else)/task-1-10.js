const prompt = require("prompt-sync")();

// Task 1: Even or Odd
let num1 = parseInt(prompt("Task 1 - Enter a number: "));
if (num1 % 2 === 0) {
  console.log("Task 1: The number is even.");
} else {
  console.log("Task 1: The number is odd.");
}

// Task 2: Positive, Negative, or Zero
let num2 = parseInt(prompt("Task 2 - Enter a number: "));
if (num2 > 0) {
  console.log("Task 2: The number is positive.");
} else if (num2 < 0) {
  console.log("Task 2: The number is negative.");
} else {
  console.log("Task 2: The number is zero.");
}

// Task 3: Greater of Two Numbers
let a = parseInt(prompt("Task 3 - Enter the first number: "));
let b = parseInt(prompt("Task 3 - Enter the second number: "));
if (a > b) {
  console.log("Task 3: The first number is greater.");
} else if (b > a) {
  console.log("Task 3: The second number is greater.");
} else {
  console.log("Task 3: Both numbers are equal.");
}

// Task 4: Divisible by 3
let num3 = parseInt(prompt("Task 4 - Enter a number: "));
if (num3 % 3 === 0) {
  console.log("Task 4: The number is divisible by 3.");
} else {
  console.log("Task 4: The number is not divisible by 3.");
}

// Task 5: Multiple of 7
let num4 = parseInt(prompt("Task 5 - Enter a number: "));
if (num4 % 7 === 0) {
  console.log("Task 5: The number is a multiple of 7.");
} else {
  console.log("Task 5: The number is not a multiple of 7.");
}

// Task 6: Vowel or Consonant (assume lowercase)
let ch = prompt("Task 6 - Enter a lowercase letter: ");
if ("aeiou".includes(ch)) {
  console.log("Task 6: It's a vowel.");
} else {
  console.log("Task 6: It's a consonant.");
}

// Task 7: Number between 10 and 50
let num5 = parseInt(prompt("Task 7 - Enter a number: "));
if (num5 >= 10 && num5 <= 50) {
  console.log("Task 7: The number is between 10 and 50.");
} else {
  console.log("Task 7: The number is outside the range.");
}

// Task 8: Check if it's a 3-digit number
let num6 = parseInt(prompt("Task 8 - Enter a number: "));
if (num6 >= 100 && num6 <= 999) {
  console.log("Task 8: It's a 3-digit number.");
} else {
  console.log("Task 8: It's not a 3-digit number.");
}

// Task 9: Voting Eligibility
let age = parseInt(prompt("Task 9 - Enter your age: "));
if (age >= 18) {
  console.log("Task 9: You are eligible to vote.");
} else {
  console.log("Task 9: You are not eligible to vote.");
}

// Task 10: Temperature Status
let temp = parseFloat(prompt("Task 10 - Enter the temperature: "));
if (temp > 30) {
  console.log("Task 10: It's Hot.");
} else if (temp >= 15) {
  console.log("Task 10: It's Moderate.");
} else {
  console.log("Task 10: It's Cold.");
}
