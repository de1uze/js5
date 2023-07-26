//Print odd numbers in an array using arrow function.
const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);

//Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
  return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
};

const strings = ["hello", "world", "javascript"];
const titleCaps = convertToTitleCaps(strings);
console.log(titleCaps);

//Sum of all numbers in an array
const calculateSum = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

const numbersList = [1, 2, 3, 4, 5];
const sum = calculateSum(numbersList);
console.log(sum);

//Return all the prime numbers in an array
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(data);
console.log(primeNumbers);

//Return all the palindromes in an array
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

const stringsList = ["level", "hello", "madam", "world"];
const palindromes = getPalindromes(stringsList);
console.log(palindromes);
