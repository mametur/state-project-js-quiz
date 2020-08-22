function getAnswer(question) {

    const questionArray = state.questions;

    const index = questionArray.findIndex((item) => item.text === currentQuestion);

    if (index === -1) {
        return null;
    }

    return questionArray[index].correctAnswer;


}