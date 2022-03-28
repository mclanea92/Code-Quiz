
var highScoresFinal = document.querySelector(".highscoresFinal");
var submitScore = document.querySelector(".submit");
var highScorePage = document.querySelector(".highScoresFinal");
var highScoreSubmit = document.querySelector(".highscore-html");
var beginButton = document.querySelector(".beginButton");


// questions
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
    timer--;
}