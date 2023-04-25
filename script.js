const questions = document.querySelectorAll(".question-container");

questions.forEach((question) => {
 const btn = question.querySelector(".question-btn");
 btn.addEventListener("click", function () {

  questions.forEach((item) => {
   if(item !== question) {
    item.classList.remove("show")
   }
  })

  question.classList.toggle("show")
 })
})