//======> Logical operators

//=====> ||(OR)

// result = a || b;

// console.log( true || true );// true
// console.log( false || true );// true
// console.log( true || false );// true
// console.log( false || false );// false

// if(1 || 0) { // works just like if( true || false )
//     console.log('truthy');
// }

//Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

// let hour = 11;

// if (hour < 10 || hour > 18) {
//     console.log( 'The office is closed.' );
// }else{
//     console.log( 'The office is open' );
// }

//we can pass more conditions

// let hour = 12;
// let isWeekend = true;

// if(hour < 10 || hour > 18 || isWeekend){
//     console.log( 'The office is closed.' );
// }else{
//     console.log( 'The office is open' );
// }

//=====> OR "||" finds the first truthy value
//This operand evaluate and converted all operands. After, returns the truthy value if there are any or return the last one if they dont found any truthy value

// console.log( 1 || 0 ); // 1 (1 is truthy)
// console.log( null || 1 ); // 1(1 is the firts truthy value)
// console.log( null || 0 || 1 ); // 1 (the first truthy value)
// console.log(undefined || null || 0 ); // 0 (all falsy, returns the last value)

//====> Getting the first value from a list of variables or expressions
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log( firstName || lastName || nickName || "Anonymous" ); // superCoder

//if all variables were falsy, "Anonymous" would show up

//====> Short-circuit evaluation

// true || console.log("not printed");
// false || console.log("printed");
//In the first line, the OR || operator stops the evaluation inmmediately upon seeing true, so the alert isn't run

//sometimes, people use this feature to execute commands only if the condition on the left part is falsy

//======> && (AND)
// result = a && b;
// console.log( true && true ); // true
// console.log( false && true ); // false
// console.log( true && false ); // false
// console.log( false && false ); // false

// An example with if:
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30){
//     console.log( 'The time is 12:30' );
// }

//=====> AND "&&" finds the firts falsy value
// Given multiple AND'ed values

// result = value1 && value2 && value3;

//In other words, AND returns the first falsy value or the last value if none were found.

/*
The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:
 */

// if the first operand is truthy,
// AND returns the second operand:
// console.log( 1 && 0); // 0
// console.log( 1 && 5 ); // 5

// if the first operand is falsy,
//AND returns it. The second operand is ignored
// console.log( null && 5 ); // null
// console.log( 0 && 'no matter what' ); // 0

// we can also several values in a row. See how the first falsy one is returned:
// console.log( 1 && 2 && null && 3 ); // null

//When all values are truthy, the last value is returned
// console.log( 1  && 2 && 3 ); // 3, the last one

// Procedence of AND && is higher than OR ||
//So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

//Don't replace if with || or
// let x = 0;

// (x > 0) && console.log( 'Greater than zero!' );

//=====> 1 (NOT)
// result = !value;

//The operator does the following 
// console.log( !true ); // false
// console.log( !0 ); // true

// A double NOT !! is sometimes used to converting a value to boolean type 
// console.log( !!"non-empty string" ); // true
// console.log( !!null ); // false

//There’s a little more verbose way to do the same thing – a built-in Boolean function:
// console.log( Boolean("non-empty string") ); //true
// console.log( Boolean(null) ); //false
//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.