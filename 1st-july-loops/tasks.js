let num;

// 1. Loop Basics
console.log("Task 1: Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Task 2: Print numbers from 10 down to 1");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

console.log("Task 3: Print numbers from 1 to 5 using do...while");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// 2. Even, Odd, Multiples
console.log("Task 4: Print all even numbers from 1 to 50");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Task 5: Print all odd numbers between 20 and 50");
for (let i = 20; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Task 6: Print all numbers divisible by 3 from 1 to 30");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 3. Summation & Product
console.log("Task 7: Sum of numbers from 1 to 100");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("Task 8: Product of numbers from 1 to 10");
let product = 1;
for (let i = 1; i <= 10; i++) {
  product *= i;
}
console.log(product);

console.log("Task 9: Sum of all even numbers between 1 and 50");
let evenSum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(evenSum);

console.log("Task 10: Sum of squares from 1 to 10");
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
  squareSum += i * i;
}
console.log(squareSum);

//  4. Conditionals Inside Loops
console.log("Task 11: Print numbers from 1 to 20, skip multiples of 4");
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

console.log("Task 12: Print numbers from 1 to 10, stop at 7");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

console.log("Task 13: Count numbers from 1 to 100 divisible by 3 and 5");
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    count++;
  }
}
console.log(count);

// 5. Nested Loops
console.log("Task 14: Print all pairs (i, j) from 1 to 3");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

console.log("Task 15: Combinations (a + b = 5), 1 ≤ a, b ≤ 4");
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(a, b);
    }
  }
}

// 6. Logic-Based Tasks
console.log("Task 16: Check if number is prime");
num = 29;
let isPrime = true;
if (num < 2) {
  isPrime = false;
}
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");

console.log("Task 17: Factorial of a number");
num = 6;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(fact);

console.log("Task 18: Reverse a number");
num = 123;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(rev);

console.log("Task 19: Count digits in a number");
num = 67895;
let digits = 0;
while (num > 0) {
  digits++;
  num = Math.floor(num / 10);
}
console.log(digits);

console.log("Task 20: Check if number is a palindrome");
num = 1331;
let temp = num;
let reversed = 0;
while (temp > 0) {
  reversed = reversed * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log(num === reversed ? "Palindrome" : "Not Palindrome");
