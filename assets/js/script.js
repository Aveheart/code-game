// VARIABLES
var startBtn = document.querySelector('#start')
var introduction = document.querySelector('#introduction');
var submitbtn = document.querySelector('#submit');
var highScore = document.querySelector('#hiscore');
var seconds = document.querySelector('#timer'); 
var yourRecord = document.querySelector("#record");
var questions = document.querySelector('.questions');


// START FUNCTION- when i click start then intro disappears
 function startquiz(){
    console.log("help");
    introduction.style.display= "none"; 
};
startBtn.addEventListener('click', startquiz);

// TIMER VARIABLES
var secondsLeft= 60;

// TIMER FUNCTION- then the timer starts counting down
function countdown () {
    interval = setInterval(function() { 
       timer
       seconds--;
       timer.textContent = seconds
        if(seconds === 0) {
             clearInterval(interval); }
        else return seconds;
        }, 1000);
 }    
 startBtn.addEventListener("click", countdown)
 
 // ASKQUESTION FUNCTION VARIABLE-ARRAY OF QUESTIONS
var questions = [
    {question: "String values must be enclosed in __",
    answers: ["commas", "quotes", "hash tags", "dollar signs"],
    correct: "quotes"},

    {question: "commonly used data types are all the following EXCEPT",
    answers: ["strings", "numbers", "booleans", "alerts"], 
    correct: "alerts"},

    {question: "CSS stands for _______ Style Sheets",
    answers: ["Cascading", "Combined", "Concept", "Charlie's"],
    correct: "Cascading",},

    {question: "In JavaScript, what is a block of code called that is used to perform a specfic task?",
    answers: ["Conditional Statement", "Variable", "Declaration", "Function"],
    correct: "Function",},

    {question: "the first index of an array is __",
    answers: ["1", "3", "0", "2"],
    correct: "0",}
]; 

// ASKQUESTION FUNCTION- questions and choices should pop up
function askQuestion(){
    console.log("test")
    seconds = 60;
    
}

startBtn.addEventListener("click",askQuestion)


    
