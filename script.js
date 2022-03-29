var time = document.querySelector('#time')
var highScoresFinal = document.querySelector(".highscoresFinal");
var submitScore = document.querySelector(".submit");
var highScorePage = document.querySelector(".highScoresFinal");
var highScoreSubmit = document.querySelector(".highscore-html");
var beginButton = document.querySelector("#beginButton");
var choicesBox = document.querySelector('.choiceanswers');
var instructions = document.querySelector('.howto');
var quest = document.querySelector('.question');
var question = document.querySelector('.choiceanswers')
// I put the questions into a var objects below to pull the answers
// and the correct one

var questions = [
    {
        question:"what is my name?", 
        choices:["Tom", "adam"],
        answer:"Tom"
    }, 
    {
        question:"what is your eye color", 
        choices:["green", "blue"],
        answer:"blue"
    }
]

questions[0].question; //"what is your name?"
questions[0].choices; //["Tom", "adam"]
questions[0].choices[0]; //"Tom"
var correctAnswers = 0;
var timer = 60;
if(questions[0].choices[0]===questions[0].answer){
    correctAnswers++;
}
else{
    time--;
}

beginButton.addEventListener('click', function() {
    var timer =setInterval(function () {
        currentTime--;
        timer.textContent = currentTime;
        checkTime(timerStart);
    }, 1000)

    instructions.style.display = 'none';
    question.style.display = 'block';
    beginButton.style.display = 'none';

    quizQuestion(timerStart)
})

function time(beginButton) {
    

}

