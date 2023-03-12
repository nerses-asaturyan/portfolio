// real map
// const myArr = [2, 23, 6, 3, 30, 65, 15];
// function myMap(arr, func) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const resultForItem = func(arr[i], i, arr);
//     result.push(resultForItem);
//   }
//   return result;
// }
//
// const newArr = myMap(myArr, (k) => {
//   return k + 2;
// });

// real filter

// const myNumbers = [10, 22, 36, 66, 999, 26];
//
// function myFilter(arr, func) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
//
// const consolingFilteredArray = myFilter(myNumbers,(k) => k % 2 === 0);

// real reduce

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function myReduce(arr, func, accumulator) {
//   for (let i = 0; i < arr.length; i++) {
//     accumulator = func(accumulator, arr[i], i, arr);
//   }
//   return accumulator;
// }
// console.log(
//   myReduce(
//     numbers,
//     (k, m) => {
//       return k + m;
//     },
//     0
//   )
// );

// real find
// const numbers = [150, 23, 36, 22, 64, 65, 69, 37];
//
// function myFind(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i], i, arr);
//     if (func(arr[i])) {
//       return arr[i];
//     }
//   }
// }
//
// console.log(
//   myFind(numbers, (k) => {
//     return k === 37;
//   })
// );

// real findIndex

// const nums = [10, 22, 36, 9, 6, 555, 6666, 6, 265, 1564, 1495, 9652, 695];
//
// function myFindIndex(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i], i, arr);
//     if (func(arr[i])) {
//       return i;
//     }
//   }
// }
//
// console.log(
//   myFindIndex(nums, (k) => {
//     return k === 6666;
//   })
// );

// real includes returns undefined(bug)
// const numbers = [10, 23, 36, 96, 36, 64, 144, 121, 64, 64, 64, 33];
//
// function myIncludes(arr, searchingElem, startingFromIndex) {
//   for (let i = 0; i < arr.length; i++) {
//     let countOfSearchingNum = 0;
//     if (i >= startingFromIndex && arr[i] === searchingElem) {
//       countOfSearchingNum++;
//       return true;
//     }
//   }
// }
//
// console.log(myIncludes(numbers, 96, 7));

// real some

// const numbers = [10, 24, 36, 90, 366, -5, 56, 36, 24];
//
// function mySome(arr, func) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i], i, arr);
//     if (func(arr[i])) {
//       sum++;
//     }
//   }
//   return sum < -25;
// }
//
// console.log(
//   mySome(numbers, (k) => {
//     return k > 0;
//   })
// );

// real every
// const nums = [10, 36, 26, 39, 45, 55, 66, 82, 6, 67];
// function myEvery(arr, func) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     func(arr[i], i, arr);
//     if (func(arr[i])) {
//       sum++;
//     }
//   }
//   return sum === arr.length;
// }
//
// console.log(
//   myEvery(nums, (k) => {
//     return k < 911;
//   })
// );

// real reverse

// let numbers = ["one", "two", "three", "four", "five", "six"];
//
// function myReverse(arr) {
//   let valTransportingVariable;
//   for (let i = 0; i < arr.length / 2; i++) {
//     valTransportingVariable = arr[i];
//     arr[i] = arr[arr.length - i - 1];
//     arr[arr.length - i - 1] = valTransportingVariable;
//   }
//   return arr;
// }

// console.log(myReverse(numbers));

// real push

// let arrOfText = ["This", " is", " the", " the", " text"];
//
// function myPush(arr, elem) {
//   arr[arr.length] = elem;
//   return arr;
// }
//
// console.log(myPush(arrOfText, " of array"));
