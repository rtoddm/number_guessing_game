'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Low/High Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  score--;
  document.querySelector('.score').textContent = score;
};

//Check Button Functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';

    //When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When Guess is too High
  } else if ((score > 1) & (guess > secretNumber)) {
    displayMessage('📈 Too High!');

    //When Guess is too Low
  } else if ((score > 1) & (guess < secretNumber)) {
    displayMessage('📉 Too Low!');

    //When Player Loses
  } else {
    // document.querySelector('.message').textContent = 'You Lose! Try Again! 😢';
    displayMessage('You Lose! Try Again! 😢');
    document.querySelector('.score').textContent = 0;
  }
});

//Play Again Button Functionality
const again = document.querySelector('.again');

again.addEventListener('click', function (e) {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
