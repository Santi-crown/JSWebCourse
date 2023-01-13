//======> Terms: 'unary', 'binary', 'operand'
//Example of unary operator
// let x = 1;

// x = -x;
// console.log(x);// -1, unary negation was applied 

//Example of binary operators 
// let x = 1
// , y = 3;

// console.log(y - x);//2, binary minus subtracts vales

//===> Maths 
/* 
* Addition +
* Substraction -
* Multiplication *
* Division /
* Remainder %
* Exponentiation **
*/

//=====> Remainder %
// console.log( 5 % 2); //1, the remainder of 5 divided by 2
// console.log( 8 % 3); //2, the remainder of 8 divided by 3
// console.log( 8 % 4); //0, the remainder of 8 divided by 4

//=====> Exponentation **
// console.log(1**3);//1
// console.log(2**3)//8
// console.log(3**3)//27

/*
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½:
*/


// console.log( 4 ** (1/2) ); //2 (power of 1/2 is the same as a square root)
// console.log( 8 ** (1/3) ) //2 (power of 1/3 is the same as a cubic root)

//=====> String concatenation with binary +
// let s = 'my' + 'string';
// console.log(s);

//I any of the operands is a string, the the other one is converted to a string too. 

// console.log('1' + 2);//12
// console.log(2 + '1');//12

//See, it doesn’t matter whether the first operand is a string or the second one.

//Here’s a more complex example:

// console.log(2 + 2 + '1');//41 and not 221

//Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// console.log('1' + 2 + 2);//122
//In this case, the first operand is a string, the compiler treats the other two operands as string too.

//The binary + is the only operator that supports in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// console.log( 6 - '2' );//4
// console.log( '6' / '2' );//3


//=====> Numeric conversion, unary
//The plus in its unary form, applied to a single value, doesn't do anything to numbers, but if the operand is not a number, they unary plus converts it into a number

//No affect on numbers
// let x = 1;
// console.log(+x);//1

// let y = -2;
// console.log(+y);//-2

//converts non-numbers
// console.log(+true);//1
// console.log(+'');//0
//It actually does the same thing as Number(...), but is shorter.

// let apples = '2';
// let oranges = '3';

// console.log(apples + oranges); //23 - the binary plus concatenates string


// if we want to treat them as numbers, we need to convert and them sum them.

// let bananas = +'2';
// let grapes = +'3';

// console.log(bananas + grapes);

// let strawberries = '4';
// let watermelons = '3';

// console.log(+strawberries + +watermelons);//7
// //The long variant 
// console.log(Number(strawberries) + Number(watermelons));//7

//=====> Operator precedence
//the + unary works first than + addition because, they unary plus precedence is higher than + addition.

//=====>Assignment
// let x = 2 * 2 + 1;
// console.log(x);

//====> Assignment = return a value
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// console.log( a );//3
// console.log( c );//0

//I shouldn't write code like above

//====> Chaining assignments
//Another interesting feature is the ability to chain assignments

// let a, b, c;

// a = b = c = 2 + 2; 


// //but the purposes of readability it's better to split such code into few lines:

// c = 2 + 2;
// a = c;
// b = c;
// console.log( a )//4
// console.log( b )//4
// console.log( c )//4

//=====> Modify-in-place
//We often need to apply an operator to a variable and store the new result int that same variable. 
// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;

// n += 5;
// n *= 2;
// console.log(n);// result its the same as above

// let n = 2;

// n*= 3+5;
// console.log(n);//16

//=====>Increment/decrement
//Increasing or decreasing a number by one is among the most common numerical operations

//increment ++ increases a variable by 1
// let counter = 2;
// counter++;
// console.log(counter);

//Decrement -- decreases a variable by 1:
// let counter = 2;
// counter--;
// console.log(counter);
//counter++ is postfix for
//++counter is prefix for. 
//both of these statements do the same thing, increase countre by 1. 


//postfix form
// let counter = 1;
// let a = ++counter;
// console.log(a);//2

//prefix form 
// let counter = 1;
// let a = counter++;
// console.log(a);//1

// //if we would like to increase a value and inmediately use the result of the operator, we need the prefix form;
// let counter = 0;
// console.log(++counter);//1

// //if we would like to increment a value but use its previos value, we need the postfix form.
// let counter2 = 0;
// console.log(counter2++);//0
// console.log(counter2);//!

//===> the operators ++/-- can be used inside expressions as well. 
// let counter  = 1;
// console.log(2 * ++counter);//4

// let counter2 = 1;
// console.log(2 * counter2++ );//2}

//that form of anotiation is not recomended.
// let counter = 1;
// console.log(2 * counter);
// counter++;
// console.log(counter);


//======> Comma
//Is one of the rarest and most unusual operators. 
let a = (1 + 2, 3 + 4);
console.log(a);//7 (the result of 3 + 4) because 1+2 is discarded

//The comma operator is use it in more complex constructs

//three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++){
    
}

