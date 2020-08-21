'use strict';

console.log('--- loading handler: get newQuestion.js');

let questionCounter = 0;
let availableQuesions = [...state.questions];
let currentQuestion = {};
const question = document.querySelector('#question');
const button = document.querySelectorAll('.btn');
const finishTheGame = document.querySelector('.main-section');
const finishTheGameSecond = document.querySelector('.modify');


function getNewQuestion() {
    informUser.innerHTML = ``;
    button.forEach(btn=>{
        btn.removeAttribute("disabled");
        btn.classList.remove('correct');
        btn.classList.remove('incorrect');
    });
    if (availableQuesions.length === 0) {
        finishTheGame.innerHTML = ``;
        finishTheGameSecond.innerHTML = `THANK YOU - YOU HAVE COMPLETED THIS QUIZ! 🙂`;
        finishTheGameSecond.classList.add('text', 'center');
    };
    currentQuestion = availableQuesions[questionCounter];
    question.innerText = currentQuestion.text;
    button.forEach(button => {
    const number = button.dataset["number"];
    button.innerHTML = currentQuestion.answers[number];
    });
    availableQuesions.splice(questionCounter, 1);
};