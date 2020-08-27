'use strict';



/*show quiz*/

function startQuiz() {

    document.getElementById('show').style.display = "block";
    document.getElementById('starter').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor = 'azure';
    console.log(document.getElementById('header').style.color);
    getNewQuestion();
}




/* handlers define user interactions

  they read user input
    from events or from the DOM

  they process user data using program logic functions

  they communicate results to the user

  they log any important information for developers

*/