console.log("I am shreyansh");
console.log("i am web developer");

setTimeout(() => {
	console.log("this is called asynchronization");
}, 2000);

console.log("The end");

const callback = (arg) => {
	console.log(arg);
};

// passing function as a variable
const loadScript = (src, callback) => {
	let sc = document.createElement("script");
	sc.src = src;
	sc.onload = callback("Shreyansh");
	document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
