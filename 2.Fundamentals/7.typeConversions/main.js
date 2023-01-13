//======> Type conversions

//Most of the time, operators and functions automatically convert the values givn to them to the right type. 

//But there are also cases when we need to explicitly convert a value to the expected type. 

//=====> String Conversion
//We can use string(value) function to convert a value to a string:

// let value = true;
// console.log(typeof value); //boolean
// console.log(value);

// value = String(value);//now value is a string "true"
// console.log(typeof value)// string
// console.log(value);

//=====> Numeric Conversion 
//Numeric conversion happend in mathematical functions and expressions automatically. 

//For example, when division / is applied to non-numbers
// let number = console.log('6' / '2');
// console.log(number);

//now we use number function
// let str = '123';
// console.log(typeof str); // string

// let num = Number(str); //becomes a number 123
// console.log(typeof num);

// let age = Number('an arbitrary string instead of a number');

// console.log(age);//NaN, conversion failed

// //===> Numeric conversion rules
// console.log(Number('    123   '));//NaN
// console.log(Number('123z'));//NaN (error reading a number at z)
// console.log(Number(true));// 1
// console.log(Number(false));//0

//Boolean conversion
// console.log(Boolean(1));//true
// console.log(Boolean(0));//false
// console.log(Boolean('hello'));//true
// console.log(Boolean(''));//false


//In javascript a non-empty string is always true, otherwise with php