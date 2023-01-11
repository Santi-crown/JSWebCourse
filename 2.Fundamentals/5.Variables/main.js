//The variables are named storage for data, in they we can storage data for make awesome things, for example, save data for a chat application. 

// let message;

// message = 'Hello guys, this is a awesome thing, because i learning JavaScript with a English course. Very nice.'//define the variable and assign the value

// alert(message); //show the message as alert.


//===
// let user = 'Cristian', age = 21, message = 'Hello';//This is not recommended, because is not easier to read to other Devs

//this the correct way
// let user = 'Cristian'
// let age = 21;
// let message = 'Hello';


//or  this
// let user = 'Santiago'
//     ,age = 21
//     ,message = 'This is another to declare variables with a single use to keyword let';

// alert(user + ' ' + age+ ' ' +message);

//====>
//we can imagine the variables like boxes with labels. Where we can put data y  change it when we want. 
    
// let message;

// message = 'Hello';

// message = 'Wordl';//Value changed 

// alert(message);

// =====>
// let HidenHello = 'This not will apear in the browser';

// hello = 'Hello wordl!';

// //Copy Hello world from hello into HidenHello
// HidenHello = hello
// // now two variables hold the same data 
// alert(hello); // hello world
// alert(HidenHello); // hello world

// =====>
//DECLARING TWICE TRIGGERS AN ERROR

// let message = 'this';

// //repeated 'let' leads an error
// let message = 'that';

// ===> Variable naming
// There are two limitations on variable names in JavaScript;
// 1. The name must contain only letters digits, or the symbols $ or _.$
// 2. The firts character must not be a digit

//Examples of valid name:
// let userName;
// let test123;

// // When the name contians multiple words, camelCase is commonly used
// //we can use $ and _ like names for our variables.
// let $ = 15;
// let _ = 7;
// console.log($ + _);

// It's important to use the English naming convention to name my variables so that other people understand my code and can read it in the future.

//=====> An assignment without use strict

// 'use strict'
// num = 5
// console.log(num);

//=====> Constants
//There are basically variables that don't change.

// const myBirthDday = '23.08.2001';

// myBirthDday = 1;
// console.log(myBirthDday);

//===> Uppercase constants
/*
There is a widespread practice to use constants as aliases for dificult-to-remember values that are know prior to execution. 

Such constants are named using capital letters and underscores. 

Because is much easier to remember color blue than #00F
*/


// const COLOR_RED = '#F00';
// const COLOR_GREEN = '#0F0';
// const COLOR_BLUE = '#00F';
// const COLOR_ORANGE = '#FF7F00';

// //... when we need to pick a color
// let color = COLOR_BLUE;
// alert(color);

//In other words, capital-named constants are only used as aliases for “hard-coded” values.

//Variable naming is one of the most important and complex skills in programming. 

// Please, spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely. 

//Reuse or create

//Create new variables bro, it's better. Don't be lazy. 


//================> TASKS
//Working with variables.
// 1. Declare two variables: admin and name.
// 2. Assign the value "John" to name.
// 3. Copy the value from name to admin.
// 4. Show the value of admin using alert (must output “John”).

let admin
, name;

name = 'Jhon';

admin = name;

alert(admin);