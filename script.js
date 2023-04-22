// const ans = document.querySelector(".ans");

const ques = document.querySelector(".question-container");

const toggleBtn = document.querySelector(".questions i");

// console.log(toggleBtn)

function createAnsElm () {
 const newDiv = document.createElement("div")
 newDiv.classList.add("ans");

 const hrTage = document.createElement("hr")
 newDiv.appendChild(hrTage)

 const para = document.createElement("p");
 para.innerHTML =
   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam in exercitationem, totam dolorem odio hic nobis doloremque labore quis libero alias similique magnam quasi cumque culpa dolores sequi voluptates!";

   newDiv.appendChild(para)
   // console.log(newDiv)

   ques.appendChild(newDiv);
}



createAnsElm();