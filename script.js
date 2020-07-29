var startButton = document.querySelector("#start-btn")
var questionContainerEl = document.querySelector("#question-container")
var restartButton = document.querySelector("#restart-btn")
var nextButton = document.querySelector("#next-btn")
var question = document.querySelector("#question")
var score = 0
var indexG = 0
var timer = 0
var counter = -1
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
nextButton.addEventListener('click', setNextQuestion,)
restartButton.addEventListener('click', startGame)




//------------------FUNCTIONS------------------

function startGame() {
    var fiveMinutes = 60 * 5
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    startButton.classList.add('hide')
    restartButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    nextButton.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion() {
    counter++
    if (dataStructure[counter]) {
        var currentQuestionObj = dataStructure[counter]
        console.log(currentQuestionObj)
        question.textContent = currentQuestionObj.question
        btn1.textContent = currentQuestionObj.answers[0]
        btn1.addEventListener("click", btn1check)
        btn2.textContent = currentQuestionObj.answers[1]
        btn2.addEventListener("click", btn2check)
        btn3.textContent = currentQuestionObj.answers[2]
        btn3.addEventListener("click", btn3check)
        btn4.textContent = currentQuestionObj.answers[3]
        btn4.addEventListener("click", btn4check)
    }
    if (counter == dataStructure.length) {
        startButton.classList.add('hide')
        questionContainerEl.classList.add('hide')
        nextButton.classList.add('hide')
        restartButton.classList.remove('hide')

    }


}
function btn1check() {
    currentQuestionObj = dataStructure[counter]
    if (btn1.textContent == currentQuestionObj.correctAnswer) {
        score++
        console.log("Correct!")
    } else {
        console.log("Oops, that's wrong!")
        timer--
    }
    scoreValue.textContent = score
}
function btn2check() {
    currentQuestionObj = dataStructure[counter]
    if (btn2.textContent == currentQuestionObj.correctAnswer) {
        score++
        console.log("Correct!")
    } else {
        console.log("Oops, that's wrong!")
        timer--
    }
    scoreValue.textContent = score
}
function btn3check() {
    currentQuestionObj = dataStructure[counter]
    if (btn3.textContent == currentQuestionObj.correctAnswer) {
        score++
        console.log("Correct!")
    } else {
        console.log("Oops, that's wrong!")
        timer--
    }
    scoreValue.textContent = score
}
function btn4check() {
    currentQuestionObj = dataStructure[counter]
    if (btn4.textContent == currentQuestionObj.correctAnswer) {
        score++
        console.log("Correct!")
    } else {
        console.log("Oops, that's wrong!")
        timer--
    }
    scoreValue.textContent = score

}






//----------------------------TIMER------------------------
function startTimer(duration, display) {
    timer = duration
    // , minutes, seconds;
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
