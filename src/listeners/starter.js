'use strict';
console.log('--- loading listener: _');




/*start-quiz */

document.getElementById('start_button').addEventListener('click', startQuiz);

/*Add Question */

document.getElementById('add').addEventListener('click', addNewQuestions)

/*Remove question*/
const buttonsArray = [...document.querySelectorAll('button')];
const removeBtn = buttonsArray.find((item) => item.innerHTML === 'Remove this question');
if (removeBtn !== null) {
    removeBtn.addEventListener('click', removeQuestionHandler)
};