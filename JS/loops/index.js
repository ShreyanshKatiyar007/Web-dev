let a = 1;

for (let i = 0; i < 100; i++) {
	console.log(a + i);
}

let obj = {
	name: "Shreyansh",
	role: "coder",
	company: "Google",
};

for (const key in obj) {
	const element = obj[key];
	console.log(key);
}

for (const s of "Shreyansh") {
	console.log(s);
}

let i = 1;
while (i < 5) {
	console.log(i);
	i++;
}

let j = 10;
do {
	console.log(j);
	j--;
} while (j > 0);
