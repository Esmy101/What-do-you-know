let timerEL = document.getElementById("timer");
let quizEL = document.getElementById("quizBox")
let afterAnswerBox = document.getElementById("afterAnswerBox");
let mainMenu = document.getElementById("start")
let answer1EL = document.getElementById("answer1")
let answer2EL = document.getElementById("answer2")
let answer3EL = document.getElementById("answer3")
let answer4EL = document.getElementById("answer4")
let question = document.getElementById("question")
let answerEL = document.getElementById("answer")
let scoreEL = document.getElementById("scoreBox")
let scoreContent = document.getElementById("score")
let submitEL = document.getElementById("submitScore")
let highScoresEL = document.getElementById("highScores")
let initialsEL = document.getElementById("enterInitials")

let play_time = 0
let score = 0
let currentQuestion = 1

let timer = null
let initials = ''

function set_timer(time){
    play_time = time
    timerEL.innerHTML = play_time.toString()
}

function handle_timer(){
    play_time -= 1
    timerEL.innerHTML = play_time.toString()

    if (play_time<= 0){
        clearInterval(timer)
        finalScore()
    }
}

function answer(right, userInput){
    answerEL.classList.remove("invisible")
    currentQuestion +=1
    console.log("in answer")
    if(right == userInput){
        score+=1
        answerEL.innerHTML = "Correct!"
    }
    else{
        play_time-=10
        answerEL.innerHTML = "Wrong!"
    }

    if (currentQuestion < 5){
        switch (currentQuestion){
            case 1: window.setTimeout(function(){question1()}, 3000)
            break;
            case 2: window.setTimeout(function(){question2()}, 3000)
            break;
            case 3: window.setTimeout(function(){question3()}, 3000)
            break;
            case 4: window.setTimeout(function(){question4()}, 3000)
            break
        }
    }
    else{
        finalScore()
    }
}

function finalScore(){
    clearInterval(timer)
    initialsEL.value= ''
    submitEL.onclick = function() {submit_score()}
    console.log(submitEL.onclick)
    quizEL.classList.add("invisible")
    afterAnswerBox.classList.add("invisible")
    scoreEL.classList.remove("invisible")

    scoreContent.innerHTML = `Your score ${score}`
}

function question1(){
    question.innerHTML = "In JavaScript, what data type has a true or false value?"
    answer1EL.innerHTML = "Switch"
    answer2EL.innerHTML = "Boolean"
    answer3EL.innerHTML = "If Else"
    answer4EL.innerHTML = "Array"

    let right_answer = 2

    answer1EL.onclick  = function() {answer(right_answer, 1)}
    answer2EL.onclick  = function() {answer(right_answer, 2)}
    answer3EL.onclick  = function() {answer(right_answer, 3)}
    answer4EL.onclick  = function() {answer(right_answer, 4)}
}

function question2(){
    quizEL.classList.remove("invisible")
    answerEL.classList.add("invisible")
    question.innerHTML = "Arrays in JavaScript are used to store _____."
    answer1EL.innerHTML = "Boolean"
    answer2EL.innerHTML = "Numbers"
    answer3EL.innerHTML = "Strings"
    answer4EL.innerHTML = "All of the above"

    let right_answer = 4

    answer1EL.onclick  = function() {answer(right_answer, 1)}
    answer2EL.onclick  = function() {answer(right_answer, 2)}
    answer3EL.onclick  = function() {answer(right_answer, 3)}
    answer4EL.onclick  = function() {answer(right_answer, 4)}
}

function question3(){
    quizEL.classList.remove("invisible")
    answerEL.classList.add("invisible")
    question.innerHTML = "Which conditional statement is executed if the same condition is false."
    answer1EL.innerHTML = "else"
    answer2EL.innerHTML = "if"
    answer3EL.innerHTML = "else if"
    answer4EL.innerHTML = "i don't know"

    let right_answer = 1

    answer1EL.onclick  = function() {answer(right_answer, 1)}
    answer2EL.onclick  = function() {answer(right_answer, 2)}
    answer3EL.onclick  = function() {answer(right_answer, 3)}
    answer4EL.onclick  = function() {answer(right_answer, 4)}
}

function question4(){
    quizEL.classList.remove("invisible")
    answerEL.classList.add("invisible")
    question.innerHTML = "______ used with Math.floor() can be used to return random integers"
    answer1EL.innerHTML = "Math.ceil()"
    answer2EL.innerHTML = "Math.ramdom()"
    answer3EL.innerHTML = "Math.method()"
    answer4EL.innerHTML = ".random()"

    let right_answer = 2

    answer1EL.onclick  = function() {answer(right_answer, 1)}
    answer2EL.onclick  = function() {answer(right_answer, 2)}
    answer3EL.onclick  = function() {answer(right_answer, 3)}
    answer4EL.onclick  = function() {answer(right_answer, 4)}
}

function start_quiz(){
    mainMenu.classList.add("invisible")
    quizEL.classList.remove("invisible")
    //quizEL.classList.add("visible")
    set_timer(60)
    timer = setInterval(handle_timer, 1000)
    question1()

}

function go_home(){
    mainMenu.classList.remove("invisible")
    highScores.classList.add('invisible')
}

function play_again(){
    highScores.classList.add('invisible')
    mainMenu.classList.remove("invisible")
    start_quiz()
}

function update_initials(){
    let x = document.getElementById('enterInitials').value;
    initials = x
}

function show_scores(){
    highScores.classList.remove('invisible')
    scoreEL.classList.add("invisible")
    mainMenu.classList.add("invisible")


}

function submit_score(){
    let new_score = document.createElement("score")
    new_score.innerHTML = `${initials} scored ${score}`
    highScoresEL.append(new_score)
    score = 0
    show_scores()
}