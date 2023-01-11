//Data Types 
//There are eight basic types data types in JavaScript

// A variable cant at one moment be a string and then store a number

// let message = 'Avengers'

// message = 123214;

// console.log(message);

// let n = 123;
// n = 12.345;
// console.log(n);

//infinity number
// console.log(1 / 0);// Infinity
// console.log(Infinity);

// //There is also the number NaN. Represents a computational error

// console.log('Not a number' / 2); //Nan, such division is erroneous

// console.log(NaN + 1);//NaN
// console.log(3 * NaN);//NaN
// console.log('Not a number' / 2-1);//NaN

//==> BigInt
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992

// How to create a BigInt value, with the n at the n of the numbers
// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);


//==> String
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed anorher ${str}`;

//In JavaScript there are 3 types of quotes
// 1.Double quotes: "Hello".
// 2.Single quotes: 'Hello'.
// 3.Backticks: `Hello`.

/*
Double and single quotes are "simple" quotes. There's practically no diffirence between them in JavaScript.

// Backticks are "extended funtionality" quotes.They allow us to embed variables and expressions into a string by wrapping them in ${...}, for example
*/

// let name = "John";

// embed a variable
// console.log(`Hello, ${name}!`);

// //embed an expression
// console.log(`the result is ${1 + 2}`); // the result is 3

// // embed variables and expressions are only posible with backticks. 
// console.log('the result is ${1+2}');//the result is ${1+2} (single quotes do nothing )

//==> Boolean (logical type)
// true or false

// let nameFieldChecked = true; //Yes, name field is checked
// let ageFielCheked = false; // No, age field is not checked

// let isGreater = 4 > 1;
// console.log(isGreater);

// // The "Null" value
// let age = null; // The age is unknown

// The "undefined" value
// the meaning of undefined is "value is not assigned"

// if a variable is declared, but not assigned, then its value is undefined

// let age;

// console.log(age); // print in console "undefined"

//Technically, it is possible to explicitly assign undefined to a variable:

// let age = 100;

// change the value to undefined
// age = undefined;

// console.log(age); // undefined
// but is not recommend, it's better uses null to assign an "empty" or "unknown" value to a variable. 

//====> Objects ans Simbols

// The object type is special

//All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex intities. 

// The symbol type is used to create unique identifiers

//=====> The typeof operator
//Returns the type of the operand

console.log(typeof undefined);
console.log(typeof 0); // Number
console.log(typeof 10n); //BigInt
console.log(typeof true); //Boolean
console.log(typeof "foo"); //String
console.log(typeof Symbol("id")); //symbol
console.log(typeof Math); //object (1)
console.log(typeof null);// object (2)
console.log(typeof alert); //function (3)





