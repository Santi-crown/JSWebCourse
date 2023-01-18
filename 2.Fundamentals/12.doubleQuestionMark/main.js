//======> Nullish coalescing operator '??'
/*The result of a ?? b  is:

* if a is defined, then a,
* if b isn't defined, then b.

In other words, ?? returns the first argument if it's not null/undefined. Otherwise, the second one. 

We can rewrite result = a ?? b using the operators that we already know, like this:
*/

// let result = (a !== null && a !== undefined) ? a : b;

// Where it helps
/*The common use case for ?? is to provide a default value.

For example, here we show user if its value isn’t null/undefined, otherwise Anonymous: */

// let user;

// alert(user ?? "Anonymous"); // Anonymous (user is undefined

//Example with user assigned to a name
// let user = "John";
// alert(user ?? "Anonymous"); // John

//We can also use a sequance of ?? to select the first value from a list that is not null/undefined. 


//---> This can be useful, for example, when we would like to display the user's data but the user does not complete the inputs. In that case, we can display Anonymous instead of a null message.
// let firstName = null;
// let lastName = null;
// let nickName = "SuperCoder";

// will show "SuperCoder"
// alert(firstName ?? lastName ?? nickName ?? "Anonymous");
// shows the first defined value

//======> Comparison with ||
//The || can be used in the same way as ??
// alert(firstName || lastName || nickName || "Anonymous");// SuperCoder

//The important difference between them is that
// || returns the first truthy value
// ?? returns the first defined value

//---> Sometimes, we may want to use default value only when the variable is null/ undefined,like when the value is really unknow/no set.

// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

//======> Precedence
// || and ?? have the same precedence, 3. 

let height = null;
let width = null;

// // important: use parentheses
// let area = ((height ?? 100) * (width ?? 50))

// console.log(area);

//---> without parentheses
// let area = height ?? 100 * width ?? 50;

// the above are the same like this code
let area = height ?? (100 * width) ?? 50
console.log(area);