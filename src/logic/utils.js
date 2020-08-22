function getCurrentQuestionIndex(currentQuestion, questionArray) {

    const index = questionArray.findIndex((item) => (item.text).toLowerCase() === currentQuestion.toLowerCase());

    if (index === -1) {
        return null;
    }

    return index;
}