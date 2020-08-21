'use strict';

console.log('--- loading handler: get newQuestion.js');

let questionCounter = 0;
let availableQuesions = [];
let currentQuestion = {};
const question = document.querySelector('#question');
const button = document.querySelectorAll('#btn');



function getNewQuestion() {
    availableQuesions = [...state.questions];
    if (availableQuesions.length === 0 || questionCounter >= availableQuesions.length) {
    return;
    };
    currentQuestion = availableQuesions[questionCounter];
    question.innerText = currentQuestion.text;
    button.forEach(button => {
    const number = button.dataset["number"];
    button.innerHTML = currentQuestion.answers[number];
    });
    questionCounter++; 
};