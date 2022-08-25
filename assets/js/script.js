// VARIABLES
var welcome = document.querySelector("#introduction");
var startBtn = document.querySelector("#start");
var introPage =document.querySelector("#intro");

var questionPage = document.querySelector("#questionSec");
var askQuestion = document.querySelector("#askQuestion");

var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#ansbtn1");
var answerBtn2 = document.querySelector("#ansbtn2");
var answerBtn3 = document.querySelector("#ansbtn3");
var answerBtn4 = document.querySelector("#ansbtn4");

var checkLine = document.querySelector("#check");
var scoreBoard = document.querySelector("#submitForm");
var finalScore = document.querySelector("#finalScore");
var userInitial =document.querySelector("#initial");

var submitBtn =document.querySelector("#submitBtn");
var highScorePage =document.querySelector("#hiScore");
var scoreRecord =document.querySelector("#hiRecords");
var scoreCheck =document.querySelector("#highScores");
var finish =document.querySelector("#finish");

var backBtn =document.querySelector("#backBtn");
var clearBtn=document.querySelector("#clearBtn");

// VARIABLE FOR QUESTIONS
var questionList = [
    {
        question: " String values must be enclosed within _____",
        choices: ["a. commas", "b. dollar signs", "c. quotes", "d. hashtags"],
        answer: "c"
    },
    {
        question: " Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: " CSS stands for ___ Style Sheets",
        choices: ["a. crunchy", "b. cascading", "c. captain", "d. circling"],
        answer: "b"
    },
    {
        question: " arrays in javascript can be used to store __",
        choices: ["a. strings" , "b. numbers", "c. booleans" , "d. all of the above"],
        answer: "d"
    },
    {
        question: " The first index of an array is ____.",
        choices: ["a. 2", "b. 1", "c. 3", "d. 0"],
        answer: "d"
    },
];

// VARIABLES FOR TIMER AND OTHERS
var timeLeft = document.getElementById("timer");

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

// FUNCTION- COUNTDOWN BEGINS AFTER START BUTTON PRESSED
function countdown() {
        
    var timerInterval = setInterval(function () {

      secondsLeft--;
      timeLeft.textContent = "It's the final countdown:" + secondsLeft;

        if (secondsLeft <= 0){
            clearInterval(timerInterval); 
            gameOver();

        } else  if(questionCount >= questionList.length +1) {
            clearInterval(timerInterval);
            gameOver();
            } 
}, 1000);
}

// FUNCTION-CLICK BUTTON TO START GAME
function startQuiz () {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
  
}
// FUNCTION FOR QUESTIONS
function showQuestion (n) {
    askQuestion.textContent = questionList[n].question;
    answerBtn1.textContent = questionList[n].choices[0];
    answerBtn2.textContent = questionList[n].choices[1];
    answerBtn3.textContent = questionList[n].choices[2];
    answerBtn4.textContent = questionList[n].choices[3];
    questionNumber = n;
}

// FUNCTION CHECKING ANSWER RIGHT OR WRONG
function checkAnswer(event) {
    event.preventDefault();
    setTimeout(function () {
    }, 1000);

    // if answer right, score 1
    if (questionList[questionNumber].answer == event.target.value) { 
        totalScore = totalScore + 1;
    // if wrong, lose 10secs
    } else {
        secondsLeft = secondsLeft - 10;
    }
         //ask another question until game over
    if (questionNumber < questionList.length -1 ) {
    // call showQuestions to bring in next question when any reactBtn is clicked
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}
questionCount++;
}
