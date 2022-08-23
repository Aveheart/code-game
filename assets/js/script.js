// VARIABLES
var startBtn = document.querySelector('#start')
var introduction = document.querySelector('#introduction');
var question1 = document.querySelector('#question-1');
var timer = document.querySelector('timer');
// FUNCTIONS
// click on start
startBtn.addEventListener("click", startQuiz);
function startQuiz () {
    introduction.style.display = "none";
    question1.style.display = "block";
    timer = 0};
    // countdown();
    // showQuestion(questionNumber)};