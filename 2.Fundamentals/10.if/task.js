//TASK NUMBER ONE

//if (a string with zero)

//will alert be shown -- Yes

// if ("0") {
//     console.log( 'Hello' );
//}

// let userAnswer = prompt('Wht is the "official name of JavaScript?');

// if (userAnswer == 'ECMAScript'){
//     alert('Right!');
// }else{
//     alert(`You don't know?, "ECMAScript"!`);
// }

//TASK NUMBER TWO
// let number = prompt('Write a number', '');

// if(number > 0){
//     alert(1);
// }else if(number < 0){
//     alert(-1);
// }else{
//     alert(0);
// }


//TASK NUMBER THREE
//Rewrite this if using the conditional operator '?'

// let result;

// let a = 2, b = 3;
// if( a + b <4){
//     result = 'Below';
// }else{
//     result = 'Over'
// }
// console.log(result);//Over

// a = 1; b = 2;

// result = (a + b < 4) ? 'Below' : 'Over';

// console.log(result)//Below

//TASK NUMBER THREE
let login = prompt('Type your rol in the company please','');

// if (login == 'Employee'){
//     message = 'Hello';
// }else if(login == 'Director'){
//     message = 'Greetings';
// }else if (login == ''){
//     message = 'No login';
// }else{
//     message = '';
// }

// alert(message);

// the same code of above bur using ? operator

let message = 
(login == 'Employee') ? 'Hello' : 
(login == 'Director') ? 'Greetings' : 
(login == '') ? 'No login':
'';

alert(message);