'use strict';
console.log('--- loading logic: _');

// either expect or assert, up to you
const expect = chai.expect;


/**
 * 
 * @param {string} text  is question 
 * @param {string[]} answerArray the right and wrongs answers
 * @param {Number} correctAnswer the index of correct answer
 * @return {object} is an object
 */
const addQuestion = (text, answerArray, correctAnswer) => {

    let newObject = {};
    newObject.text = text;
    newObject.answersArray = [...answerArray];
    newObject.correctAnswer = correctAnswer;
    return newObject;
};


/**
 * @param {string} is exit
 * @return {string} is good bye message 
 */
const goodBye = (exit) => {

    if (exit === 'exit') {
        return 'Thanks for join our quiz game';
    }
}

// write only one top-level describe in this file
describe('Create a new question', () => {
    // write as many nested describes as you would like
    // write as many it's as you want in each describe
    it('the number of answer choices is 3 in the multiple-choice question', () => {

        const actual = addQuestion('what is the capital of Belgium', ['Brussel', 'Paris', 'Antwerpen'], 0);
        expect(actual).to.have.property('answersArray').with.lengthOf(3)

    });
    it('type of the correct answer is number', () => {

        const actual = addQuestion('what is the capital of Belgium', ['Brussel', 'Paris', 'Antwerpen'], 0);
        expect(actual.correctAnswer).to.be.a('number');

    });
    it('the answers is an array', () => {

        const actual = addQuestion('what is the capital of Belgium', ['Brussel', 'Paris', 'Antwerpen'], 0);
        expect(actual.answersArray).to.be.a('array');

    });


});
describe('User can exit from adding question', () => {
    // write as many nested describes as you would like
    // write as many it's as you want in each describe
    it('if user type exit then should leave from adding question part', () => {

        const actual = goodBye('exit');
        expect(actual).to.equal('Thanks for join our quiz game');


    });

});

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
