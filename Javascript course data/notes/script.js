let amount = '100';
//ways to convert string to number
amount = parseInt(amount);
//or
amount = +amount;
//or
amount = Number(amount);]

console.log(amount, typeof amount);

//change number to string

amount = amount.toString();
//or
amount = String(amount);
//or
amount =parseFloat(amount);

console.log(amount, typeof amount);

//convert number to boolean
amount = Boolean(amount);

//is it a number true or false?
console.log(amount, typeof amount);

//operators notes

x = 5%2; //division with remainder being the x. % called modulus

//exponent

x = 5**2;
//comparison operators give booleans
x = 2 == '2'; //doesnt test type
x = 2 ===2 //tests type

x = 2!= '2';

//type coercion

let x;

x = 2 + '2'; //string concatenation

x = 2 + Number('2'); //number

x = 5 * '5'; // number

x = 5 + null; // null coerced to number
x = Number(null); //null coerced to number

x = Number(true); //true coerced to number =1
x = Number(false); //false coerced to number =0

x = 5 + undefined //= NaN 
console.log(x, typeof x);

//template literals
const name = 'John';
x = `Hello ${name}`;

//properties and methods

const s = 'Hello world'

x = s.length; 
x = s[0]; //character at index 0
x = s.__proto__;//will display all available methods for string
x = s.toUpperCase();//all methods are functions
x = s.toLowerCase();
x = s.charAt(0); //char at index
x = s.indexOf('h'); //index of character, would get back number 0
x = s.substring(0, 3); //substring from index 0 to index 3, would show letters from one index to another
x = s.slice(0, 3); //slice from index 0 to index 3, would show letters from one index to another. can start from end with negative numbers.
x = s.substring(3); //substring from index 3 to end of string
x = x.trim(); //removes leading and trailing spaces
x = s.replace('world', 'Hello'); //replaces the first word with the second
x = s.includes('world'); //checks if the string includes the word, returning boolean
x = s.valueOf(); //returns the value of the string, primitive type
x = s.split(''); //splits the string into an array

console.log(x);

//numbers
let x;
const num = 5;
x = num.toString();
x = num.length; //undefined
x = num.toString().length; //returns the length of the string
x = num.toFixed();
x = num.toPrecision(); //numbers total
x = num.toExponential();
x = num.toLocaleString('en-US');
x = num.valueOf(); //returns the value of the number, primitive type

x = Number.MAX_VALUE; //largest number possible
x = Number.MIN_VALUE; //smallest number possible
console.log(x);

 //math object

 console.log(Math); //displays methods and properties available for the Math object

let x;

x = Math.sqrt(); //square root
x = Math.abs(); //absolute value
x = Math.floor(); //floor
x = Math.ceil(); //ceil
x = Math.round(); //round
x = Math.pow(); //power of (exponent)
x = Math.min(); //smallest of 2 or more numbers
x = Math.max(); //largest of 2 or more numbers
x = Math.random(); //random number between 0 and 1
x = Math.random() * 10; //random number between 0 and 9
x = Math.random() * 10 + 1; //random number between 1 and 10

//dates and times
let d;

d = new Date();
d = d.toString();
d = new Date(2021, 0, 10)//jan 10, 2021 at 0index
d = new Date(2021, 0, 10, 10, 10, 10); //jan 10, 2021 at 10:10:10 time
d = new Date('2021-01-10T10:10'); //jan 10, 2020 at 10:10:10 time
d = new Date('07/10/2021 12:30:00'); //jan 10, 2021
d = new Date('07-10-2021'); //jan 10, 2021

d = Date.now();
d = new Date('07-10-2021 12:30:00'); //jan 10, 2021
d = d.getTime(); //returns the number of milliseconds
d = d.value();//returns the number of milliseconds
d = new Date(); //put in milliseconds it will read as a timestamp
d = Math.floor(Date.now() / 1000); //returns timestamp in seconds
console.log(d);


//Date Methods & DateTimeFormat API

let x;
let d = new Date(); //instantiates a new date object in variables

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1; // 0 based on 0 index
x = d.getDate(); // of month
x = d.getDay(); // of week

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);//local date api
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);
x = d.toLocaleString('default', { month: 'short'}); // same as above but shorter

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
});

console.log(x);

//arrays and objects
let x;
const numbers = [1, 2, 3, 4, 5, 6];//array literal
const fruits = new Array('apple', 'banana', 'cherry');//array constructor
const mixed = [12, 'Hello', true, null];//mixed array
x =  numbers[0]; //0 index
x = numbers[0] + numbers[1];
x = `my favorite fruit is ${fruits[0]}`;
x = numbers.length;
fruits[2] = 'pear'; //change array elements
//fruits.length = 2; //change array length
fruits[3] = 'grape'; //change array elements
fruits[fruits.length] = 'blueberry'; //adds blueberry to end of array

console.log(numbers);












