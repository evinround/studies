
const firstName = 'John';
const lastName = 'Doe';
const age = 34;
const person = {
    firstName,
    lastName,
    age,
}; //when your key value is referencing a variable with the same name as the key, you can just use the keyName or the variable. you dont have to use both.

//Destructuring

const todo = {
    id: 1,
    title: 'take out trash',
    user: { 
        name: 'John'
    }
};

const { id: todoId, title, user: { name } } = todo; //pulling out variables, when using { } youre destructuring, without youre renaming
console.log(id, title);
//destructuring with arrays
const numbers = [ 23, 67, 33, 49];

const [first, second, ...rest] = numbers; //brings out the first and second element of the array, in this use case ... is called a rest operator and the name rest is the variable name. it puts the remaining array in its own array.


console.log(first, second, rest);