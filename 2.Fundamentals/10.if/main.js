//Conditional branching: if, '?'

// let year = prompt('In which year was ECMAScript-2015 specifications pusblishied?','');

// if(year == 2015) alert( 'You are right!' );


//=== Example 2, wrapping the code in braces to execute more than one statement.

// let year = prompt('In which year was ECMAScript-2015 specifications pusblishied?','');

// if (year == 2015){
//     alert("That's correct!");
//     alert("You're so smart!");
// }

// //=====> Boolean conversion
// if(0){//0 is falsy, this code would never execute
//     ...
// }

// // and inside this condition - it always will
// if(1){
//     ...
// }

//we can also pass a pre-evaluated boolean value to if
// let year = 2015;
// let cond = (year == 2015);// equality evaluates to true or false
// if (cond){
// console.log(`A pre-evaluated value ${year}`);
// }


//=====> The else clause
// let year = prompt('In which year was ECMAScript-2015 specifications pusblishied?','');

// if (year == 2015) {
//     alert('You guessed it right')
// }else{
//     {
//         alert('How can you be so wrong?');
//     }
// }

//=====> Several conditions: "else if"
//Sometimes, we'd like to test several variants of a condition. The else if clause lets us do that. 

// let year = prompt('In which year was ECMAScript-2015 specifications pusblishied?','');

// if (year < 2015) {
//     alert( 'Too early' );
// }else if(year > 2015){
//     alert( 'Too late' );
// }else{
//     alert('Exactly');
// }

//=====> Conditional operator '?'
//Sometimes, we need to assign a variable depending on a condition
// let accesAllowe;

// let age = prompt('How old are you');

// if (age > 18){
//     accesAllowe = true;    
// }else{
//     accesAllowe = false;
// }

// alert(accesAllowe);

//? operator lets us to do the above in a shorter and simpler way.

//let result = condition ? value1 : value2;


// let accesAllowed = (age > 18) ? true : false;

//we can omit the parentheses, bet parentheses make the code more readable. It's recommened. 
// let accesAllowed = age > 18 ? true : false;


// let dragonSpitsFire = prompt('Do you want to anger the dragon?','')

// // let scared = dragonSpitsFire > 1 ? true : false;
// // alert(scared);

// let scared = dragonSpitsFire > 1 ? 'You are awaken the dragon rage' : 'You are a coward';
// alert(scared);

//=====> PLEASE NOTE: In the example above, we can avoid the question mark operator because the comparison itself returs true/false

// let accesAllowed = age > 18;


//=====> Multiple ?
// let age = prompt('age?',18);

// let message = ( age < 3) ? 'Hi, baby!' :
//     (age < 18) ? 'Hello!' :
//     (age < 100) ? 'Greetings' :
//     'What an unusual age!';

// alert( message );

// what the above looks like with if..else


// let age = prompt('age','');

// if(age < 3){
//     alert('Hi, baby');
// }else if(age < 18){
//     alert('Hello');
// }else if(age < 100){
//     alert('Greetings');
// }else{
//     alert('What an unusual age!');
// }

//=====> Non-traditional use of ?
//Sometimes the question mark ? is used as a replacement for if:
//But it's not recommended to use this form
// let company = prompt('Which company created JavaScript','');

// (company == 'Netscape') ?
//     alert('Right!') : alert('Wrong.');

//The same code, but using if
// let company = prompt('Which company created JavaScript','');

// if(company == 'Netscape'){
//     alert('Right!');
// }else{
//     alert('Wrong.');
// }


