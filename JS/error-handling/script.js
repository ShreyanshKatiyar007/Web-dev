let a = prompt("Enter the first number");

let b = prompt("Enter the second number");

if (isNaN(a) || isNaN(b)) {
	throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);

/*
try{
    console.log("sum is:", sum*x)
} catch (error) {
    console.log("this is error")
}
finally{
    console.log("files are closed")           // finally - it will also run after the return statement in any function.
}
*/

console.log("sum is:", sum);
