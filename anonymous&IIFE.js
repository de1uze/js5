//       1.Print odd numbers in an array

//    // Using Anonymous function
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = array.filter((number) => number % 2 !== 0);
console.log(oddNumbers);
//  // Using IIFE function
(function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let oddNumbers = array.filter(function (number) {
    return number % 2 !== 0;
  });
  console.log(oddNumbers);
})();

//     2.Convert all the strings to title caps in a string array

//    //    Using Anonymous function
let array1 = ["hello", "world", "javascript"];
let titleCaps = array1.map(
  (string) => string.charAt(0).toUpperCase() + string.slice(1)
);
console.log(titleCaps);

//  // Using IIFE function
(function () {
  let array = ["hello", "world", "javascript"];
  let titleCaps = array.map(function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  console.log(titleCaps);
})();

//       3.Sum of all numbers in an array
//    //    Using Anonymous function

let array3 = [1, 2, 3, 4, 5];
let sum = array3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

//  // Using IIFE function
(function () {
  let array = [1, 2, 3, 4, 5];
  let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);
})();

//       4.Return all the prime numbers in an array

//    //    Using Anonymous function
let array4 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
let primeNumbers = array4.filter(isPrime);
console.log(primeNumbers);

//  // Using IIFE function
(function () {
  let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  let isPrime = function (number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  let primeNumbers = array.filter(isPrime);
  console.log(primeNumbers);
})();

//    5.Return all the palindromes in an array

//    //    Using Anonymous function
let array5 = ["level", "hello", "racecar", "world"];
let isPalindrome = (string) => {
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
};
let palindromes = array5.filter(isPalindrome);
console.log(palindromes);

//  // Using IIFE function
(function () {
  let array = ["level", "hello", "racecar", "world"];
  let isPalindrome = function (string) {
    let reversedString = string.split("").reverse().join("");
    return string === reversedString;
  };
  let palindromes = array.filter(isPalindrome);
  console.log(palindromes);
})();

//     6.Return median of two sorted arrays of the same size

//    //    Using Anonymous function
let array6 = [1, 3, 5];
let array7 = [2, 4, 6];
let mergedArray = array6.concat(array7);
let sortedArray = mergedArray.sort((a, b) => a - b);
let length = sortedArray.length;
let median =
  length % 2 === 0
    ? (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2
    : sortedArray[Math.floor(length / 2)];
console.log(median);

//  // Using IIFE function
(function () {
  let array1 = [1, 3, 5];
  let array2 = [2, 4, 6];
  let mergedArray = array1.concat(array2);
  let sortedArray = mergedArray.sort(function (a, b) {
    return a - b;
  });
  let length = sortedArray.length;
  let median =
    length % 2 === 0
      ? (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2
      : sortedArray[Math.floor(length / 2)];
  console.log(median);
})();

//      7.Remove duplicates from an array

//    //    Using Anonymous function
let array8 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = array8.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log(uniqueArray);

//    // Using IIFE function
(function () {
  let array = [1, 2, 2, 3, 4, 4, 5];
  let uniqueArray = array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  console.log(uniqueArray);
})();

//   8.Rotate an array by k times

//    //    Using Anonymous function
let arry9 = [1, 2, 3, 4, 5];
let k = 3;
for (let i = 0; i < k; i++) {
  let element = arry9.pop();
  arry9.unshift(element);
}
console.log(arry9);
//    // Using IIFE function
(function () {
  let array = [1, 2, 3, 4, 5];
  let k = 3;
  for (let i = 0; i < k; i++) {
    let element = array.pop();
    array.unshift(element);
  }
  console.log(array);
})();
