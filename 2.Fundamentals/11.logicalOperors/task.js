// What is the code below going to output?

// console.log( null || 2 || undefined );


// What will the code below output?

// alert( alert(1) || 2 || alert(3) );// 1 - 2

// // What is this code going to show?

// alert( 1 && null && 2 ); // null

// // What will this code show?

// alert( alert(1) && alert(2) );

// // What will the result be?

// alert( null || 2 && 3 || 4 ); //3

//Check the range between

// let age = 91;

// if(age >= 14 && age <= 90){
//     console.log(`The age ${age} is between 14 and 90`);
// }else{
//     console.log(`The age ${age} isn't between the accepted range`);
// }

//Check the range outside
let age = 145;

// // //First variant !
// if (!(age >= 14 && age <= 90)) {
//     console.log(`The age ${age} is NOT between 14 and 90`);        
// } else {
//     console.log(`The age ${age} is between 14 and 90 range`);    
// }

// if (age <= 14 || age >= 90) {
//     console.log(`The age ${age} is NOT between 14 and 90`);    
// } else {
//     console.log(`The age ${age} is between 14 and 90 range`);
// }


// A question about "if":
// if (-1 || 0) console.log( 'first' ); // Was printed
// if (-1 && 0) console.log( 'second' ); // Was not printed
// if (null || -1 && 1) console.log( 'third' ); // Was printed

// Check the login
/*

Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

* If it equals “TheMaster”, then show “Welcome!”,
* Another string – show “Wrong password”,
* For an empty string or cancelled input, show “Canceled”
*/

let userName = prompt("Who's there", "");
let password = '';

if (userName == 'Admin') {
    password = prompt('Enter your password please', '');
    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if (password === '' || password == null) {
        alert('Canceled');
    } else if (password != 'TheMaster') {
        alert('Wrong password');
    }
} else if (userName === "" || userName == null) {
    alert('Canceled');
} else if (userName != 'Admin') {
    alert(`User ${userName} don't find in the database`);
}