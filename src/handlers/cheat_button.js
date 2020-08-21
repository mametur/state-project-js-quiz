function cheatHandler(event) {

    const userInput = confirm('Do you want to get some hint?');

    if (!userInput) {
        return false;
    };

    const questionArticle = document.getElementsByClassName("question")[0];
    const questionParagraph = questionArticle.querySelector('p');

    if (getAnswer(questionParagraph.innerText) === null {
            alert('Question is incorrect - no answer is set');
            return;
        }

        const answerArticle = document.getElementsByClassName("answers")[0];
        const answers = answerArticle.querySelectorAll('div');

    }