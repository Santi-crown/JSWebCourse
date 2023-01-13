//1. What are the final values of all variables a, b, c and d after the code below?

// let a = 1, b = 1;

// let c = ++a; 
// let d = b++; 
// console.log(c);// 2
// console.log(d);// 1
// console.log(a);// 2
// console.log(b);// 2

//2. Assignment result
// let a = 2;
// let x = 1 + (a *=2);
// console.log(a);//4
// console.log(x);//5



//3. What are results of these expressions?
// console.log("" + 1 + 0);// 10
// console.log("" - 1 + 0);// -1
// console.log(true + false);// 1
// console.log(6 / "3");// 2
// console.log("2" * "3");// 6 
// console.log(4 + 5 + "px");// 9px
// console.log("$" + 4 + 5);// $45
// console.log("4" - 2);// 2
// console.log("4px" - 2);//NaN 
// console.log("  -9  " + 5);//  -9  5
// console.log("  -9  " - 5);// -14
// console.log(null + 1);// 1
// console.log(undefined + 1);//NaN 
// console.log(" \t \n" - 2);// -2

//4. Fix the addition
// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b);