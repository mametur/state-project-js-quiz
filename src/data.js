/* Suggested Initial State

  this file contains a suggestion of what your initial state should include
  feel free to modify, add or remove properties as your team's project evolves

*/

const state = {
  // how many questions has the user answered?
  //  you can calculate this value by iterating through the questions
  //  is selected === -1?
  answered: 0,
  // how many correct answers has the user submitted?
  //  you can calculate this value by iterating through the questions
  //  is selected === correct?
  correct: 0,
  // should the correct answer be indicated when a user is wrong?
  //  a possible user setting, this could be toggled in the UI
  showCorrectAnswers: false,
  // the questions in the quiz
  questions: [
    {
      text: "Who invented JavaScript?",
      answers: [
        "Brendan Eich",
        "Sheryl Sandberg",
        "Douglas Crockford"
      ],
      correctAnswer: 0
    },
    {
      text: "Which one of these is a JavaScript package manager?",
      answers: [
        "Node.js",
        "TypeScript",
        "npm"
      ],
      correctAnswer: 2
    },
    {
      text: "Which tool can you use to ensure code quality?",
      answers: [
        "Angular",
        "jQuery",
        "ESLint"
      ],
      correctAnswer: 2
    },
    {
      text: "What is the alternate name for Java script?",
      answers: [
        "ECMScript",
        "ECMAScript",
        "LimeScript"
      ],
      correctAnswer: 1
    },
    {
      text: "Which of the following is not a reserved word in JavaScript?",
      answers: [
        "interface",
        "throws",
        "program"
      ],
      correctAnswer: 2
    },
    {
      text: "Inside which element do you put JavaScript??",
      answers: [
        "script",
        "code",
        "const"
      ],
      correctAnswer: 0
    },
  ]
};
