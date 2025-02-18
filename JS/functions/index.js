function hello(name) {
	console.log("hey " + name + " you are nice!");
	console.log("hey " + name + " you are great");
}

hello("rahul");

hello("shreyansh");

function sum(a, b, c = 10) {
	//console.log(a + b + c)
	return a + b + c;
}

result1 = sum(7);
result2 = sum(10, 8);
result3 = sum(10, 20, 15);

console.log("Sum is: " + result1);
console.log("Sum is: " + result2);
console.log("Sum is: " + result3);

const func1 = (x) => {
	//keeping function inside a variable
	console.log("I am arrow", x);
};

func1(7);
func1(18);
func1(45);
