
var highScoresFinal = document.querySelector(".highscoresFinal");
var submitScore = document.querySelector(".submit");
var highScorePage = document.querySelector(".highScoresFinal");
var highScoreSubmit = document.querySelector(".highscore-html");
var beginButton = document.querySelector(".beginButton");


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
    timer--;
}

function startQuiz() {

}

function displayTimer(){
  // adds a leading 0 when seconds remainder is less than 10
  var sec = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
  // minutes calculation
  var min = Math.floor(seconds / 60);

  // put time on page
  timer.textContent = `${min}:${sec}`;
};