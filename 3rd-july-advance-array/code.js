function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log("1. Flatten nested array [1, [2, [3, [4]], 5]] =>", flattenArray([1, [2, [3, [4]], 5]]));

function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log("2. Remove duplicates from [1, 2, 2, 3, 4, 1] =>", removeDuplicates([1, 2, 2, 3, 4, 1]));

const a1 = [1, 2, 3];
const b1 = a1;
b1.push(4);
console.log("3. After pushing to b (which is copy of a):", a1);

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}
console.log("4. Second largest number in [10, 5, 8, 1, 9] =>", secondLargest([10, 5, 8, 1, 9]));

function countOccurrences(arr) {
  let count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  return count;
}
console.log("5. Count of each element in [1, 2, 2, 3, 1, 1] =>", countOccurrences([1, 2, 2, 3, 1, 1]));

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const nums = [1, 2, 3];
console.log("6. Custom map (double each) of [1,2,3] =>", nums.myMap(n => n * 2));

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
people.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log("7. Sorted people by name then age =>", people);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function getPrimes(arr) {
  return arr.filter(isPrime);
}
console.log("8. Prime numbers in [1, 2, 3, 4, 5, 6, 7, 8] =>", getPrimes([1, 2, 3, 4, 5, 6, 7, 8]));

const arr = [1, 2, 3];
arr.length = 0;
console.log("9. After clearing array, arr[0] =>", arr[0]);

const nums1 = [1, 2, 3];
nums1.forEach(n => n * 2);
const nums2 = [1, 2, 3];
const doubled = nums2.map(n => n * 2);
console.log("10. forEach vs map: map returns new array =>", doubled);

const a2 = [1, 2, 3];
const b2 = a2.slice(0, 2);
b2[0] = 100;
console.log("11. After modifying slice of array a =>", a2);

function findPairs(arr, target) {
  let pairs = [];
  let seen = new Set();
  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}
console.log("12. Pairs in [1,2,3,4,5] that sum to 6 =>", findPairs([1, 2, 3, 4, 5], 6));
