function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log('Task 1: Reverse a String →', reverseString('hello'));

function isPalindrome(str) {
  const lower = str.toLowerCase();
  const reversed = lower.split('').reverse().join('');
  return lower === reversed;
}

console.log('Task 2: Check Palindrome →', isPalindrome('Madam'));

function countVowels(str) {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}

console.log('Task 3: Count Vowels →', countVowels('JavaScript'));

function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalized = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(' ');
}

console.log('Task 4: Capitalize First Letter of Each Word →', capitalizeWords('hello world'));

function charFrequency(str) {
  const result = {};
  for (let char of str) {
    result[char] = result[char] ? result[char] + 1 : 1;
  }
  return result;
}

console.log('Task 5: Character Frequency →', charFrequency('aabbbc'));

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log('Task 6: Remove Duplicates →', removeDuplicates([1, 2, 2, 3, 4, 4]));

function flattenArray(arr) {
  return arr.flat();
}

console.log('Task 7: Flatten an Array →', flattenArray([[1, 2], [3, 4], [5]]));

function findMaxMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return { max, min };
}

console.log('Task 8: Find Max and Min →', findMaxMin([4, 1, 9, -2]));

function sumEven(arr) {
  return arr.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

console.log('Task 9: Sum of Even Numbers →', sumEven([1, 2, 3, 4, 5, 6]));

function groupByType(arr) {
  const grouped = {};
  for (let item of arr) {
    const type = typeof item;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(item);
  }
  return grouped;
}

console.log('Task 10: Group by Type →', groupByType([1, 'a', true, 2, 'b']));
