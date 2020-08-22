function removeCurrentQuestion(currentQuestion, questionArray) {

    const index = getCurrentQuestionIndex(currentQuestion, questionArray);

    if (index === null) {
        return index;
    }

    const nextQuestion = (questionArray.length > 1) ? questionArray[index + 1] : questionArray[index];

    questionArray.splice(index, 1);
    if (questionArray.length === 0) return null;

    return nextQuestion;

}