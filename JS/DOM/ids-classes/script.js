console.log("Hello")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "aqua"

document.getElementById("pink").style.backgroundColor = "pink"

document.querySelector(".box").style.backgroundColor = "orange"

// document.querySelectorAll(".box").forEach(e=>{
//    e.style.backgroundColor = "orange";
// })

console.log(document.getElementsByTagName("div"))

console.log(boxes[4].matches("#pink"))

console.log(boxes[3].closest("#pink"))
