/**
 * returns one random incorrect answers from the answers array
 * @param {number} correctAnswer  - correct answer of the current question
 * @param {string[]} answerArray - an array of answers to the current question
 * @return {number} an index of incorrect answer
 */
function getAnswer(correctAnswer, answersArray) {

    let res = 0;

    while (true) {
        res = Math.floor(Math.random() * (answersArray.length - 1));
        if (res !== correctAnswer) {
            break;
        }
    }

    return res;

}