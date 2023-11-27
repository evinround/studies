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




console.log(x);












