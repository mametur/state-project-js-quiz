'use strict';
console.log('--- loading listener: _');




/*start-quiz */

document.getElementById('start_button').addEventListener('click', startQuiz);

/*Add Question */

document.getElementById('add').addEventListener('click', addNewQuestions);


/*Remove question*/
document.getElementById('remove').addEventListener('click', removeQuestionHandler);

/*Cheat Button*/
document.getElementById('cheat').addEventListener('click', cheatHandler);