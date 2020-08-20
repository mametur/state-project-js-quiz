function removeCurrentQuestion(currentQuestion) {

    const questionArray = state.questions;

    const index = questionArray.findIndex((item) => item.text === currentQuestion);

    if (index === -1) {
        return null;
    }


    const nextQuestion = (questionArray.length > 1) ? questionArray[index + 1] : questionArray[index];

    questionArray.splice(index, 1);
    if (questionArray.length === 0) return null;

    return nextQuestion;

}