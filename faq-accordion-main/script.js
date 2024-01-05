var questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");

questions[0].focus();

questions.forEach((question, index) => {
  question.addEventListener("click", function () {
    this.classList.toggle("open");
    answers[index].classList.toggle("active");
  });

  question.addEventListener('focus', function() {
    this.classList.toggle('open');
    answers[index].classList.toggle('active');
  })
});
