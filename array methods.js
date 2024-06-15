// ARRAY

// callbacks for each method

//////////////////////////
// .every
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements vice versa.

// const ages = [32, 33, 16, 40];
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.every(checkAge));

////////////////////////////
// flatmap
// creates a new flat array with callback
// const myArr = [1, 2, 3, 4, 5, 6];

// const newArr = [[1,2],[3,4],5,6].flat();
// console.log(newArr);

// const newArr1 = myArr.map((x) => x * 2);
// console.log(newArr1);

// const newArr2 = myArr.flatMap((x) => [x * 2, x* 3]);
// console.log(newArr2);

////////////////////////////
// .some
// same as every but returns true if one of the array elements return true for provided callback
// const ages = [3, 10, 18, 20];

// console.log(ages.some(checkAdult));
// function checkAdult(age) {
//   return age > 18;
// }

//////////////////////////
// .map
// let nums = [1,2,3,4,5];
// let square_nums = nums.map((num => {
//     return num * num
// }))
// console.log(square_nums);

//////////////////////////
// filter
// let nums = [1,2,3,4,5,6,7,8,9];
// let square_nums = nums.filter((num => {
//     return num % 2 === 0;
// }))
// console.log(square_nums);

//////////////////////////
// find
// The find method returns the value of the first element that passes a test.
// const ages = [19, 10, 17, 20];

// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.find(checkAge));

//////////////////////////
// findIndex
// same as find but it returs the index of the first element that passes the test
// const ages = [19, 10, 17, 20];
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.findIndex(checkAge));

//////////////////////////
// foreach
// runs callback for each element
// let nums = [1, 2, 3, 4, 5];
// nums.forEach((num) => {
//   console.log(num * num);
// });

//////////////////////////
// reduce
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, current) => {
//   return acc + current;
// }, 0);
// console.log(sum);

////////////////////
// ADD/REMOVE methods
let fruits = ["apple", "banana", "orange"];

// //push
// // can pass many items at once
// fruits.push("grape");
// console.log(fruits);

// //pop
// fruits.pop();
// console.log(fruits);

// //shift
// fruits.shift();
// console.log(fruits);

// //unshift
// fruits.unshift("grape");
// console.log(fruits);
