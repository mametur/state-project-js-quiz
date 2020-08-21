function removeQuestionHandler() {

    const userAction = confirm("Do you want to remove this question from the list?");
    if (userAction === false) {
        return;
    }

    const questionArticle = document.getElementsByClassName("question")[0];
    const questionParagraph = questionArticle.querySelector('p');

    const answerArticle = document.getElementsByClassName("answers")[0];
    const answers = answerArticle.querySelectorAll('div');


    const currentQuestion = removeCurrentQuestion(questionParagraph.innerHTML);

    if (currentQuestion === null) {
        questionParagraph.innerHTML = "There are no questions at the moment. Add some by clicking 'Add new question' button";
        questionParagraph.style.fontStyle = 'italic';

        answers.forEach(item => item.remove());

        this.disabled = true;

    } else {
        questionParagraph.innerHTML = currentQuestion.text;

        questionParagraph.innerHTML = currentQuestion.text;
        currentQuestion.answers.forEach((item, index) => {

            answers[index].firstElementChild.innerHTML = item;

        });

        // answers.forEach(item => item.remove());
        // currentQuestion.answers.forEach((item, index) => {
        //     let div = document.createElement('div');
        //     div.innerHTML = `<p>${index+1}.<span>${item}</span></p>`;
        //     answerArticle.append(div);
    }

}