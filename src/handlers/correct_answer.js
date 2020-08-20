'use strict';

console.log('--- loading handler: correct ');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
const scoreBoard = document.querySelector('#score');
const informUser = document.querySelector('#userInfo');
const question = document.querySelector('#question');
const button = document.querySelectorAll('#btn');

const questions =  [
    {
      question: 'What are you thinking?',
      answers: [
        'constant, let, variable',
        'var, const, let, function',
        'var, let, const'
      ],
      correct: 2,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables'
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/'
        },
      ]
    },
    {
        question: 'What are the different ways to declare a JS variable?',
        answers: [
          'constant, let, variable',
          'var, const, let, function',
          'var, let, const'
        ],
        correct: 2,
        selected: -1,
        links: [
          {
            text: 'javascript.info',
            href: 'https://javascript.info/variables'
          },
          {
            text: 'Tyler McGinnis',
            href: 'https://ui.dev/var-let-const/'
          },
        ]
      },  
    {
      question: 'What are you doing?',
      answers: [
        'changes the type of a primitive value',
        'returns a string describing the type of a value',
        'determines if a value is primitive',
      ],
      correct: 1,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof'
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'
        },
      ]
    },
    {
      question: 'What does `typeof` do?',
      answers: [
        'changes the type of a primitive value',
        'returns a string describing the type of a value',
        'determines if a value is primitive',
      ],
      correct: 0,
      selected: -1,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof'
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof'
        },
      ]
    },
  ];


function getNewQuestion() {
    availableQuesions = [...questions];
    // console.log(availableQuesions);
  
    for (let questionCounter in questions){
      // availableQuesions = [...questions];
      if (availableQuesions.length === 0 || questionCounter >= availableQuesions.length) {
        return;
      }
      questionCounter++;
      console.log(questions.length);
      console.log(questionCounter);
      // const questionIndex = Math.floor(Math.random() * availableQuesions.length);
      currentQuestion = availableQuesions[questionCounter];
      console.log(currentQuestion);

      console.log(currentQuestion);
      question.innerText = currentQuestion.question;
    
      button.forEach(button => {
        const number = button.dataset["number"];
        // console.log(number);
        button.innerHTML = currentQuestion.answers[number];
        // console.log(button);
      });

      availableQuesions.splice(questionCounter, 1);
    }

    
};

function showAnswers(e){
    const selectedButton = e.target;
    console.log(e.target);
    if(selectedButton.tagName !== 'BUTTON') return;
    
    console.log(selectedButton);
    const selectedAnswer = selectedButton.dataset["number"];
    console.log(selectedAnswer);

    console.log(currentQuestion.correct);
    if (selectedAnswer == currentQuestion.correct) {
        selectedButton.classList.add('correct');
        button.forEach(btn=>{
            if(!btn.classList.contains('correct')){
                btn.classList.add('incorrect')
            }
            btn.setAttribute("disabled", true);
        });
        // console.log(button);
        score++;
        scoreBoard.innerHTML = score;
        selectedButton.setAttribute("disabled", true);
        informUser.innerHTML = `CORRECT 😃`;
        // console.log(button);
    } else {
        selectedButton.classList.add('incorrect');
        informUser.innerHTML = `SORRY, YOU ARE WRONG 🙁`;
        button.forEach(btn=>{

            if(btn.dataset.number == currentQuestion.correct){
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            };
            btn.setAttribute("disabled", true);
        });

        // console.log(button);
    }
};

setTimeout(() => {
    console.log('works');
    getNewQuestion();
  }, 1000);


button.forEach(btn => btn.addEventListener('click', showAnswers));

