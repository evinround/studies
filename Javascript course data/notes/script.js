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











