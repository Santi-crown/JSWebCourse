/*
- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
*/

//Boolean is the result

// console.log( 2 > 1 );//true
// console.log( 2 == 1);//false
// console.log( 2 != 1);//true

//A comparison result can be assigned to a variable, just like any value:

// let result = 5 > 4;
// console.log(result);

//=====>String comparison
// o see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.
// console.log( 'Z' > 'A');//True
// console.log( 'Glow' > 'Glee');//True
// console.log( 'Bee' > 'Be');//True

//====- Case matters, an uppercase letter like 'A' is less than 'a' because in the internal encoding table that JavaScript uses, 'a' has a higher index.

//=====> Comparison of different types
//When comparnig values of different types, JavaScript converts the values to numbers. 
// console.log( '2' > 1 ); //true, string '2' becomes a number 2
// console.log( '01' == 1  );//true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

//For example
// console.log( true == 1 ); // true
// console.log( false == 0 ); // true

//It is possible that at the same time
// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
//For example
// let a = 0;
// console.log( Boolean(a)); //false

// let b = '0';
// console.log( Boolean(b)); //true

// console.log( a == b); // true

//=====> Strict equality
//A regular equality check == has a problem. It cannot differentiate 0 from false:

// console.log( 0 == false ); // true

// The same thing happens with an empty string:
// console.log( '' == false ); // true

//For we can differentiate them if we use an strict equality operator '==='

// console.log( 0 === false);//false, because the types are different.

//=====> Comparison with null and undefined
//There’s a non-intuitive behavior when null or undefined are compared to other values.

// For === these values are different because each of them is different type.
// console.log( null === undefined );
// console.log( null == undefined );

//====> Strange result: null vs 0
// console.log( null > 0 ); // false
// console.log( null == 0 ); // false
// console.log( null >=0 ); // true

//=====> An incomparable undefined

//The value undifined shouldn't be compared to other values:
console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false