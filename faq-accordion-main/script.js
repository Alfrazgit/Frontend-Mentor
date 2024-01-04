var questions = document.querySelectorAll('.question');
var answer = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
    question.addEventListener('click', function() {
        this.classList.toggle('open');
        console.log(answer[index].classList.toggle('active'));
    })
})