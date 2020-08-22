function cheatHandler() {

    const userInput = confirm('Do you want to get some hint? One of the incorrect answers will be shown');

    if (!userInput) {
        return false;
    };

    const questionArticle = document.getElementsByClassName("question")[0];
    const questionParagraph = questionArticle.querySelector('p');

    const questionIndex = getCurrentQuestionIndex(questionParagraph.innerText, state.questions);

    const res = getAnswer(state.questions[questionIndex].correctAnswer, state.questions[questionIndex].answers);

    const answerArticle = document.getElementsByClassName("answers")[0];
    const answersArray = [...answerArticle.querySelectorAll('button')];
    const incorrectButton = answersArray.find(item => item.dataset.number == res);

    if (incorrectButton !== undefined) {
        incorrectButton.classList.add('incorrect');

    }

}