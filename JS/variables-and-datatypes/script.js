var a = 5; // global variable
var b = 6;
var c = "shreyansh";

let d = 10;

console.log(a + b);

console.log(typeof a, typeof b, typeof c);

{
	var a = 69; // not a block code
	console.log(a);
}
console.log(a);

{
	let d = 69; // it is a block code
	console.log(d);
}
console.log(d);

let x = "Shreyansh";
let y = 20;
let z = 2.5;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
	//object
	name: "shreyansh",
	"job role": 6969,
};

console.log(o);
o.salary = "100000"; // updating object

console.log(o);
