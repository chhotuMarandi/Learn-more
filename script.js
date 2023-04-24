const btns = document.querySelectorAll(".plusBtn");

const text = document.querySelectorAll(".text");

btns.forEach((btn)=> {
btn.addEventListener("click", (e) => {
 const btnParent = (e.currentTarget.parentElement.parentElement);
 btnParent.classList.toggle("show")
})
})