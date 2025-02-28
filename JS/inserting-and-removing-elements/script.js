// let div = document.createElement("div");
// div.innerHTML = " I have been inserted by Shreyansh"
// div.setAttribute("class", "created");
// document.querySelector(".container").before(div);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("beforebegin", "I am good");
