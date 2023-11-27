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


