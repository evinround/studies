//capitalize challenge

const myString = 'developer';
let myNewString 

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);


//alt solution

myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);


//---------------------------//

//Number Challenge

let x = Math.random() * 100 + 1;
let y = Math.random() * 50 + 1; 

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
console.log(`The variable x is ${x} and, the variable y is ${y}.`);

///
const x = Math.floor(Math.random()) * 100 + 1;
const x = Math.floor(Math.random()) * 50 + 1;
console.log(x, y);


//---------------------------//

//array challenge1

const arr = [1, 2, 3, 4, 5];

let p = 6;

arr.push(p);
arr.reverse();
arr.push(0);
console.log(arr);

//array challenge2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr1.pop();
arr1.push(...arr2);
console.log(arr1);