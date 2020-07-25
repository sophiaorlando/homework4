var startButton = document.querySelector("#start-btn")
var questionContainerEl = document.querySelector("#question-container")
var nextButton = document.querySelector("#next-btn")
var question = document.querySelector("#question")
var score = 0
var indexG = 0
var buttonanswer = document.querySelector(".buttonanswer")
var btn1 = document.querySelector(".btn-1")
var btn2 = document.querySelector(".btn-2")
var btn3 = document.querySelector(".btn-3")
var btn4 = document.querySelector(".btn-4")
var scoreValue = document.querySelector("#scoreValue")

//-----------------QUESTION/ANSWER/CORRECT ANSWER ARRAY ------------
var dataStructure = [
    {
        question: "How many lightyears does it take to get to the Sun?",
        answers: [1, 2, 3, 4],
        correctAnswer: 1
    },
    {
        question: "How many miles to the moon?",
        answers: [100000, 238900, 6400, 978655],
        correctAnswer: 238900
    },
    {
        question: "How many moons does Jupiter have?",
        answers: [5, 79, 16, 32],
        correctAnswer: 79
    },
    {
        question: "Roughly how many years old is the Universe?",
        answers: [16, 0, 20, 14],
        correctAnswer: 14
    }
]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', setNextQuestion)
buttonanswer.addEventListener('click', selectAnswer)

var counter = -1

//------------------FUNCTIONS------------------

function startGame() {
    var fiveMinutes = 60 * 5
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    nextButton.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    counter++
    if (dataStructure[counter]) {
        var currentQuestionObj = dataStructure[counter]
        questionContainerEl.innerHTML = ""
        console.log(currentQuestionObj)
        var question = document.createElement("h1")
        question.textContent = currentQuestionObj.question
        questionContainerEl.appendChild(question)
        for (var index = 0; index < currentQuestionObj.answers.length; index++) {
            var answers = document.createElement("button")
            answers.textContent = currentQuestionObj.answers[index]
            answers.setAttribute("class", "btn")
            questionContainerEl.appendChild(answers)
        }
    }

}
// counter++


function selectAnswer() {
    console.log("made it")
    var userSelectedAnswer = (currentQuestionObj.question)
    var correctAnswer = (currentQuestionObj.correctAnswer)
    if (userSelectedAnswer === correctAnswer) {
        score++
        console.log("Correct!")
    } else {
        console.log("Oops, that's wrong!")
        fiveMinutes--
    }
    currentQuestionObj = dataStructure[indexG + 1]
    scoreValue.textContent = "score"
    body.appendChild(scoreValue)
    //renderQuestion()
}




//----------------------------TIMER------------------------
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
