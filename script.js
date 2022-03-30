var time = document.querySelector('#time')
var instructions = document.querySelector('.howto');
var timerInterval = '60';
var start = document.querySelector('#beginButton')
var questionHide = document.querySelector('.questions')
var currentQuestNum = 0;

var questions = [{
    ask: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: 0
},
{
    ask: "How do you create a function in JavaScript?",
    answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "func myFunction()"],
    correctAnswer: 0
},
{
    ask: "How do you call a function named “myFunction”?",
    answers: ["myFunction", "myFunction()", "call myFunction()", "call function myFunction()"],
    correctAnswer: 1
},
{
    ask: "How do you start an IF statement in JavaScript?",
    answers: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
    correctAnswer: 3
},
{
    ask: "How do you start a FOR loop in JavaScript?",
    answers: ["for i = 1 to 5", "for (i =0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
    correctAnswer: 1
},
{
    ask: "How can you add a comment in JavaScript?",
    answers: ["‘This is a comment", "<!--This is a comment -->", "//This is a comment", "**This is a comment**"],
    correctAnswer: 2
},
{
    ask: "What is the correct way to write a JavaScript array?",
    answers: ["var colors = (1:”red”, 2:”green”, 3:”blue”)", "var colors = 1 = (“red”), 2 = (“green”), 3 = (“blue”)", "var colors = “red”, ”green”, ”blue”", "var colors = [“red”, “green”, “blue”]"],
    correctAnswer: 3
},
{
    ask: "How do you round the number 7.25, to the nearest integer?",
    answers: ["round (7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    correctAnswer: 2
},
{
    ask: "What event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick", "onchange", "onmouseover", "onclick"],
    correctAnswer: 3
},
{
    ask: "How do you declare a JavaScript variable?",
    answers: ["v carName;", "var carName;", "variable carName;", "v (carName);"],
    correctAnswer: 1
},
{
    ask: "Which operator is used to assign a value to a variable?",
    answers: ["x", "*", "-", "="],
    correctAnswer: 3
}
]
var correct = 0;
var wrong = 0;
for(var i = 0; i > questions.length; i=i+1){ // we flipped the > from <
    var userChoice = questions[i].choices[0];
    if(userChoice===questions[i].answer){
        ++correct;
    }
    else{
        ++wrong; 
    }
}
console.log(correct);
console.log(wrong); 

beginButton.addEventListener('click', function() {
    console.log('button 1')    
    // var timer =setInterval(function () {
    //         --timer;
    //         // timer = currentTime;   
    //         // checkTime(timerStart);
    //     }, 1000)
    
        instructions.style.display = 'none';
        questionHide.style.display = 'block';
        beginButton.style.display = 'none';
    
        return startGame();
    })
//timer code
function startGame(){
    // important to clear out previous interval before starting a new one
    clearInterval(timerInterval);
    seconds = 60;
    timerInterval = setInterval(function(){
      console.log(--seconds);
  
      displayTimer();
  
      if(seconds <= 0){
        clearInterval(timerInterval);
      }
    }, 1000);
    
    displayQuestions();
  }
  function displayTimer(){
    // adds a leading 0 when seconds remainder is less than 10
    var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    // minutes calculation
    var min = Math.floor(seconds / 60);
  
    // put time on page
    time.textContent = `${min}:${sec}`;
  };

  function displayQuestions() {
      
    
    var answer1=document.querySelector('#a1');
      var answer2=document.querySelector('#a2');
      var answer3=document.querySelector('#a3');
      var answer4=document.querySelector('#a4');
      var question=document.querySelector('.question');

      question.textContent=questions[currentQuestNum].ask
  }





  //   start.addEventListener("click", function(beginButton){
//     console.log('button 2') 
//     var timer =setInterval(function () {
//         --timer;
//         // timer = currentTime;   
//         // checkTime(timerStart);
//     }, 1000)

//     instructions.style.display = 'none';
//     questionHide.style.display = 'block';
//     // beginButton.style.display = 'none';

//     startGame();
//   });
















  
// var highScoresFinal = document.querySelector(".highscoresFinal");
// var submitScore = document.querySelector(".submit");
// var highScorePage = document.querySelector(".highScoresFinal");
// var highScoreSubmit = document.querySelector(".highscore-html");
// var beginButton = document.querySelector("#beginButton");
// var choicesBox = document.querySelector('.choiceanswers');

// var quest = document.querySelector('.question');
// var question = document.querySelector('.choiceanswers')






// // I put the questions into a var objects below to pull the answers
// // and the correct one
//FROM TOM
// var ranQuest = questions;
// var questions = [
//     {
//         question:"what is my name?", 
//         choices:["Tom", "adam"],
//         answer:"Tom"
//     }, 
//     {
//         question:"what is your eye color", 
//         choices:["green", "blue"],
//         answer:"blue"
//     }
// ]

// questions[0].question; //"what is your name?"
// questions[0].choices; //["Tom", "adam"]
// questions[0].choices[0]; //"Tom"
// var correctAnswers = 0;
// var timer = 60;
// if(questions[0].choices[0]===questions[0].answer){
//     correctAnswers++;
// }
// else{
//     timer--;
// }

//

// function startGame() {
//     time = 60;
    
//     multiQuest ()
//     startTimer ()
// }

// function StartTimer() {
//     time = setInterval(funtion(timer)) 
//         timeCount-- ;
//         time.textContent = time;
//     }



