function cheatHandler() {

    const userInput = confirm('Do you want to get some hint?');

    if (!userInput) {
        return false;
    };

    const questionArticle = document.getElementsByClassName("question")[0];
    const questionParagraph = questionArticle.querySelector('p');

    const questionIndex = getCurrentQuestionIndex(questionParagraph.innerText, state.questions);

    const res = getAnswer(state.questions[questionIndex].correctAnswer, state.questions[questionIndex].answers);

    alert(`One of the incorrest answers: ${res+1}`);

    const answerArticle = document.getElementsByClassName("answers")[0];
    const answers = answerArticle.querySelectorAll('div');

}