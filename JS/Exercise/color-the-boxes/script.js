function getRandomColor() {
	let r = Math.ceil(Math.random() * 255);
	let g = Math.ceil(Math.random() * 255); // Fixed typo
	let b = Math.ceil(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

document.querySelectorAll(".box").forEach((box) => {
	// Fixed forEach typo
	box.style.backgroundColor = getRandomColor();
	box.style.color = getRandomColor();
});
