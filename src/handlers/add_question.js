'use strict';
console.log('add question');

/*add Question */

function addNewQuestions() {

    //get input from user

    let questionText = prompt('write your question');

    while (questionText === null || questionText === '') {
        questionText = prompt('write your question, it should not be null and empty');
    }
    const logEntry = {};
    if (questionText === 'exit') {

        logEntry.action = 'exit';
        log.push(logEntry);
        return goodBye(questionText);
    }



    let answerCount = 0
    const answers = [];
    while (answerCount < 3) {

        const userAnswers = prompt('write 3 options');

        if (userAnswers === null || userAnswers === '') {
            continue;
        }

        answers.push(userAnswers);
        answerCount++;
    }
    let correctAnswerIndex = Number(prompt('write correct Answer index'));

    while (Number.isNaN(correctAnswerIndex)) {
        correctAnswerIndex = Number(prompt('write correct Answer index ,it should be number'));
    }

    const newAddedQuestion = addQuestion(questionText, answers, correctAnswerIndex);

    logEntry.action = 'add question'
    log.push(logEntry);

    // log user input
    logEntry.input = newAddedQuestion;

    // update state
    state.questions.push(newAddedQuestion);

    // log new state
    logEntry.state = deepClone(state);



}




/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/