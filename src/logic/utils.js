function getCurrentQuestionIndex(currentQuestion, questionArray) {

    const index = questionArray.findIndex((item) => (item.text).toUpperCase() === currentQuestion);

    if (index === -1) {
        return null;
    }

    return index;
}