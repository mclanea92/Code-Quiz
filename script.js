
// here are my variables for this javascript
var time = document.querySelector('#time')
var instructions = document.querySelector('.howto');
var timerInterval = '60';
var start = document.querySelector('#beginButton')
var questionHide = document.querySelector('.questions')
var currentQuestNum = 0;

// questions for the quiz broken into objects
var questions = [{
    ask: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: "<script>"
},
{
    ask: "How do you create a function in JavaScript?",
    answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "func myFunction()"],
    correctAnswer: "function myFunction()"
},
{
    ask: "How do you call a function named 'myFunction' ?",
    answers: ["myFunction", "myFunction()", "call myFunction()", "call function myFunction()"],
    correctAnswer: "myFunction()"
},
{
    ask: "How do you start an IF statement in JavaScript?",
    answers: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
    correctAnswer: "if (i == 5)"
},
{
    ask: "How do you start a FOR loop in JavaScript?",
    answers: ["for i = 1 to 5", "for (i =0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
    correctAnswer: "for (i =0; i <= 5; i++)"
},
{
    ask: "How can you add a comment in JavaScript?",
    answers: ["'This is a comment'", "<!--This is a comment -->", "//This is a comment", "**This is a comment**"],
    correctAnswer: "//This is a comment"
},
{
    ask: "What is the correct way to write a JavaScript array?",
    answers: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']"],
    correctAnswer: "var colors = ['red', 'green', 'blue']"
},
{
    ask: "How do you round the number 7.25, to the nearest integer?",
    answers: ["round (7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
    correctAnswer: "Math.round(7.25)"
},
{
    ask: "What event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick", "onchange", "onmouseover", "onclick"],
    correctAnswer: "onclick"
},
{
    ask: "How do you declare a JavaScript variable?",
    answers: ["v carName;", "var carName;", "variable carName;", "v (carName);"],
    correctAnswer: "var carName;"
},
{
    ask: "Which operator is used to assign a value to a variable?",
    answers: ["x", "*", "-", "="],
    correctAnswer: "="
}
]
// this goes through all the questions and counts if right or wrong.
var correct = 0;
var wrong = 0;
for (var i = 0; i > questions.length; i = i + 1) { 
    var userChoice = questions[i].choices[0];
    if (userChoice === questions[i].answer) {
        ++correct;
    }
    else {
        ++wrong;
    }
}
console.log(correct);
console.log(wrong);
beginButton.addEventListener('click', function () {
    console.log('button 1')
    instructions.style.display = 'none';
    questionHide.classList.add('questions-show');
    beginButton.style.display = 'none';
    return startGame();
})
//timer code
function startGame() {
    // important to clear out previous interval before starting a new one
    clearInterval(timerInterval);
    seconds = 60; 
    timerInterval = setInterval(function () {
        console.log(--seconds);
        displayTimer();
        if (seconds <= 0) {
            clearInterval(timerInterval);
            questionHide.style.display = 'none';
            var endSection = document.querySelector('.highscore-html')
            endSection.style.display = 'block';
        }
    }, 1000);
    displayQuestions();
}
function displayTimer() {
    // adds a leading 0 when seconds remainder is less than 10
    // minutes calculation
    var min = Math.floor(seconds / 60); 
    // put time on page
    time.textContent = seconds;
};
function displayQuestions() {
    var answerTags = document.querySelectorAll('#a1, #a2, #a3, #a4')
    var question = document.querySelector('.question');
    for (var i = 0; i < 4; i++) {
        answerTags[i].textContent = questions[currentQuestNum].answers[i]
        if (i === questions[currentQuestNum].correctAnswer) {
            answerTags[i].setAttribute('data-Correct', true)
        } else {
            answerTags[i].setAttribute('data-Correct', false)
        }
        answerTags[i].addEventListener("click", checkAnswer);
    }
    question.textContent = questions[currentQuestNum].ask
}
//this function finds out if the answer was correct or incorrect and if incorrect
// it will take 10 seconds off. 
function checkAnswer(event) {
     var userChoice = event.target.innerText;
     var correctAnswer = questions[currentQuestNum].correctAnswer;
     answerCheck.style.display = "block"
     if (userChoice === correctAnswer) {
         answerCheck.textContent = "Correct"
     }
     else {
         answerCheck.textContent = "Incorrect, the correct answer: " + questions[currentQuestNum].correctAnswer;
         seconds-=10
         }
     currentQuestNum++;
     if (currentQuestNum < questions.length) {
         displayQuestions();
     } else {
        clearInterval(timerInterval);
        questionHide.style.display = 'none';
        var endSection = document.querySelector('.highscore-html')
        endSection.style.display = 'block';
     }
 }
// this is where you submit your highscore and it takes your initals and stores them with your highscore in localstorage 
 function submitHighscore() {
    var textInput = document.querySelector('#initals');

    var highscoreEntry = [{
        intials: textInput.value,
        score: seconds,
    }];
    localStorage.setItem('highScores', JSON.stringify(highscoreEntry)
    
    )

 }
function displayHighscore(){
 var hScore = JSON.parse(localStorage.getItem('highScores'));


}
