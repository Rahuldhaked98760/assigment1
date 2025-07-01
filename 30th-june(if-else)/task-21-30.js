const prompt = require("prompt-sync")();

// Task 21: Average of 5 subjects and grade
let total = 0;
for (let i = 1; i <= 5; i++) {
  let mark = parseFloat(prompt(`Task 21 - Enter marks for subject ${i}: `));
  total += mark;
}
let avg = total / 5;
console.log("Task 21: Average marks =", avg);

if (avg >= 90) console.log("Grade: A");
else if (avg >= 75) console.log("Grade: B");
else if (avg >= 60) console.log("Grade: C");
else if (avg >= 40) console.log("Grade: D");
else console.log("Grade: F");

// Task 22: Divisible by 3 or 5 but not both
let num1 = parseInt(prompt("Task 22 - Enter a number: "));
if ((num1 % 3 === 0 || num1 % 5 === 0) && !(num1 % 3 === 0 && num1 % 5 === 0)) {
  console.log("Task 22: Divisible by 3 or 5 but not both");
} else {
  console.log("Task 22: Not valid (either both or none)");
}

// Task 23: Palindrome number
let num2 = prompt("Task 23 - Enter a number: ");
let reversed = num2.split("").reverse().join("");
if (num2 === reversed) {
  console.log("Task 23: It's a palindrome number.");
} else {
  console.log("Task 23: Not a palindrome.");
}

// Task 24: Sum of digits is even or odd
let num3 = prompt("Task 24 - Enter a number: ");
let sum = 0;
for (let digit of num3) {
  sum += parseInt(digit);
}
console.log("Task 24: Sum of digits =", sum);
if (sum % 2 === 0) {
  console.log("Sum is even.");
} else {
  console.log("Sum is odd.");
}

// Task 25: Overtime pay (>40 hrs, Rs.12/hr)
let hours = parseInt(prompt("Task 25 - Enter total hours worked: "));
if (hours > 40) {
  let overtime = (hours - 40) * 12;
  console.log("Task 25: Overtime pay is Rs.", overtime);
} else {
  console.log("Task 25: No overtime pay.");
}

// Task 26: Salary with HRA and DA
let basic = parseFloat(prompt("Task 26 - Enter your basic salary: "));
let hra, da;
if (basic < 10000) {
  hra = basic * 0.2;
  da = basic * 0.5;
} else {
  hra = basic * 0.3;
  da = basic * 0.8;
}
let netSalary = basic + hra + da;
console.log("Task 26: Net salary is Rs.", netSalary);

// Task 27: Days in a month
let month = parseInt(prompt("Task 27 - Enter month number (1-12): "));
if (month === 2) {
  console.log("Task 27: 28 or 29 days");
} else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
  console.log("Task 27: 31 days");
} else if ([4, 6, 9, 11].includes(month)) {
  console.log("Task 27: 30 days");
} else {
  console.log("Task 27: Invalid month number");
}

// Task 28: Password strength check
let password = prompt("Task 28 - Enter your password: ");
let hasNumber = /\d/.test(password);
let hasSpecial = /[!@#$%^&*]/.test(password);
if (password.length >= 8 && hasNumber && hasSpecial) {
  console.log("Task 28: Strong password.");
} else {
  console.log("Task 28: Weak password.");
}

// Task 29: Triangle type check
let s1 = parseFloat(prompt("Task 29 - Enter side 1: "));
let s2 = parseFloat(prompt("Task 29 - Enter side 2: "));
let s3 = parseFloat(prompt("Task 29 - Enter side 3: "));
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
  if (s1 === s2 && s2 === s3) {
    console.log("Task 29: Equilateral triangle");
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    console.log("Task 29: Isosceles triangle");
  } else {
    console.log("Task 29: Scalene triangle");
  }
} else {
  console.log("Task 29: Not a valid triangle");
}
//task 30:
let storedUsername = "admin";
let storedPassword = "1234";
let inputUsername = prompt("Task 30 - Enter username: ");
let inputPassword = prompt("Task 30 - Enter password: ");

if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("Task 30: Login successful.");
} else {
  console.log("Task 30: Invalid username or password.");
}
