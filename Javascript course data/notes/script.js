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

//arr methods

const arr = [34, 54, 65, 31, 14];
arr.push(100); //adds 100 to the end of the array
arr.pop(); //removes last element
arr.unshift(99); //adds 99 to the beginning of the array
arr.shift(); //removes first element
arr.reverse(); //reverses the order of the array

let x;
x = arr.includes(20); //boolean method
x = arr.indexOf(20); //returns the index of the element, if doesnt exist will return -1
x = arr.slice(1); //slice from index 1 to end of array
x = arr.slice(1, 3); //slice from index 1 to index 3
x = arr.splice(1, 2); //splice from index 1 to index 2, meaning its changing the variable 
x = arr.splice(3, 1); //splices one item following the item at index 3

x = arr.splice(1, 4).reverse().toString().charAt(0); //you can chain on methods


console.log(x);
console.log(arr); //also shows all methods available for the array

//nesting, concat, spread operator
let x;
const fruits = ['apple', 'banana', 'cherry'];
const berries = ['strawberry', 'grape', 'blueberry'];

fruits.push(berries);

x = fruits[3]; //nested array
x = fruits[3][0]; //first item in nested array
const allFruits = [fruits, berries];
x = allFruits; both arrays nested
x = allFruits[1][2];// first array, second item

x = fruits.concat(berries); //one single array 

//spread operator (...)
x = [...fruits,...berries];//gives the items in both arrays and combines them like concat

//flatten arrays
const arr =[1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();//flattens it to a single array


//static methods on array objects

x = Array.isArray(fruits); //returns true or false
x = Array.from('12345');//turns into an array
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); //turns into an array

//object literals
let n;
const person = {
    name: 'John Doe',
    age: 34,
    isAdmin: true,
    address: {
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    hobbies: ['coding', 'coding', 'coding'],
};

n = person.name;
n = person['age'];
n = person.address.state;
n = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;
delete person.age;
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();
n = person;
console.log(person);

const todo = {};
todo.id = 1;
x = todo;
const todo2 = new Object();
todo2.id = 2;
todo2.name = 'buy milk';
todo2.completed = false;

const person = {
    address:{
        coords:{
            lat: 40.7128,
            lng: -74.0059
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {d: 4, e: 5, f: 6};

const obj3 = {obj1, obj2};
const obj4 = {...obj1,...obj2};
const obj5 = Object.assign({}, obj1, obj2);//does same function as obj4

const todos = [
    {id: 1, name: 'buy milk'},
    {id: 2, name: 'buy eggs'},
    {id: 3, name: 'buy bread'},
];

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo2).length;//cant use length on objects but can on arrays
x = Object.values(todo);
x = Object.entries(todo2);//keyvalue pair array
x = todo.hasOwnProperty('id'); //boolean


//destructuring





