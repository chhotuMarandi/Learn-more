const btns = document.querySelectorAll(".question-btn");

// const text = document.querySelectorAll(".text");

btns.forEach((btn)=> {
btn.addEventListener("click", (e) => {
 const btnParent = (e.currentTarget.parentElement.parentElement);
 btnParent.classList.toggle("show")
})
})