/*
async function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(450);
		}, 3000);
	});
} 
*/

/* settle means resolve or reject.
   resolve means promise has settled successfully.
   reject means promise has not settled successfully.
   promise - promise of code execution.
*/

async function getData() {
	let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	let data = await x.json();
	return data;
}
async function main() {
	console.log("loading modules");

	console.log("do something else");

	console.log("load data");

	let data = await getData(); // most of the time it is used inside asyn only.

	console.log(data);

	console.log("process data");

	console.log("task 2");
}

main();

/*
data.then((v)=>{
    console.log(data)

    console.log("process data")

    console.log("task 2")
})
*/
