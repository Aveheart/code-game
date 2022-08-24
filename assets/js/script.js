// VARIABLES
var startBtn = document.querySelector('#start')
var introduction = document.querySelector('#introduction');
var questions = document.querySelector('#questions');
var submitbtn = document.querySelector('#submit');
var highScore = document.querySelector('#hiscore');
var seconds = document.querySelector('#timer'); 
var yourRecord = document.querySelector("#record");
// variable for questions as an array
// start function
startBtn.addEventListener('click', startquiz);
 function startquiz(){
    introduction.style.display= "none";
    questions.style.display = "block";
    seconds = 60;};



  
// var secondsLeft = 60
// var startQuiz = document.querySelector("#start");
var questions = [
    {question: "String values must be enclosed in __",
    answers: ["commas", "quotes", "hash tags", "dollar signs"],
    correct: "quotes",},

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
// var score = 0; 
// var input = document.getElementById("initials")
// var j = 0;
// var interval;
// var rankings = document.querySelector("#hiScores");
// var submitForm = document.querySelector("#submit");

// // This function will pull the questions from the array above
// function renderQuestion(){
//     console.log("test")
//         document.querySelector(".questions").innerHTML = "";
//         startQuiz.setAttribute("style", "display: none");
//         document.querySelector(".quiz").setAttribute("style", "display: block");
//         var q = questions[j].question;
//         var questionEl = document.createElement("h2");
//         var ans = questions[j].answers;
//         questionEl.textContent = q;
//         document.querySelector(".questions").appendChild(questionEl)
    
//        for (var i = 0; i < ans.length; i++) {
//         var ansBtn = document.createElement("button");
//         ansBtn.textContent = ans[i];
//         document.querySelector(".questions").appendChild(ansBtn);
//         ansBtn.addEventListener("click", checkAnswer);
//     } 
// }

// //Perform an answer check before moving on to the next question
// function checkAnswer (event) {
//     console.log("check");
//     if (questions[j].correct !== event.target.textContent) {
//         secondsLeft -=9;
//     } else {
//         console.log("correct!")
//     }

//     if (j < questions.length-1) {
//         j++;
//         renderQuestion();
//     } else endGame();
// }

//This function will end the game
// function endGame () {
//     console.log("endgame");
//     clearInterval(interval);
//     score = secondsLeft;
//     document.querySelector("#initials").setAttribute("style", "display:block");
//     document.querySelector(".quiz").setAttribute("style", "display: none");
//     document.querySelector("#highscore").textContent = "Your final score is " + score;
// }

// Quiz timer
function counter () {
   var timer = document.querySelector("#timer")
    interval = setInterval(function() { 
        timer
        secondsLeft--;
        timer.textContent = secondsLeft
        if(secondsLeft === 0) {
            clearInterval(interval);
            // When timer get to zero, or when all questions have been answered, which ever comes first
        }
        else return secondsLeft;
        
    }, 1000);
}


// //commit scores to local storage so they can be pulled later
// //save player initials
// function saveScores (event) {
//     event.preventDefault();
//    var userName = document.querySelector("#username").value.trim();
//    var finalScore = {
//        score: score,
//        name: userName
//    };
   
//     var highScores = JSON.parse(window.localStorage.getItem("High-Scores")) || [];
//     highScores.push(finalScore);
//    window.localStorage.setItem("High-Scores", JSON.stringify(highScores));

//    input.setAttribute("style", "display: block");
//    alert("Your score has been saved!");
// }

// //call scores from local storage to retrieve high scores
// // display high scores from local storage
// // function returnHighScores () {
// //     var highScores = JSON.parse(window.localStorage.getItem("High-Scores")) || [];
// //     document.querySelector(".results").setAttribute("style", "display: block");
// //     highScores.forEach(function(score) {
// //         var pTag = document.createElement("p");
// //         pTag.textContent = score.name + " " + score.score;

// //         document.querySelector(".results").appendChild(pTag);
// //     });
// // }
    

// // Add event listeners to relevant buttons
// startQuiz.addEventListener("click",renderQuestion)
// startQuiz.addEventListener("click", counter)
// submitForm.addEventListener("submit", saveScores)
// rankings.addEventListener("click", returnHighScores)


    
