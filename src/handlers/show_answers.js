'use strict';

console.log('--- loading handler: show answers.js');

const scoreBoard = document.querySelector('#score');
const informUser = document.querySelector('#userInfo');
let score = 0;

function showAnswers(e){
    const selectedButton = e.target;
    if(selectedButton.tagName !== 'BUTTON') return;
    const selectedAnswer = selectedButton.dataset["number"];
    state.answered++;
    log.push({
        state: deepClone(state)
      });

    if (selectedAnswer == currentQuestion.correctAnswer) {
        selectedButton.classList.add('correct');
        state.correct++;
        log.push({
            state: deepClone(state)
          });
        console.log(log);
        button.forEach(btn=>{
            if(!btn.classList.contains('correct')){
                btn.classList.add('incorrect')
            }
            btn.setAttribute("disabled", true);
        });
        score++;
        scoreBoard.innerHTML = score;
        selectedButton.setAttribute("disabled", true);
        informUser.innerHTML = `CORRECT 😃`;
    } else {
        selectedButton.classList.add('incorrect');
        state.showCorrectAnswers = true;
        log.push({
            state: deepClone(state)
          });
        informUser.innerHTML = `SORRY, YOU ARE WRONG 🙁`;
        button.forEach(btn=>{

            if(btn.dataset.number == currentQuestion.correctAnswer){
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            };
            btn.setAttribute("disabled", true);
        });
        console.log(log);
    }
};