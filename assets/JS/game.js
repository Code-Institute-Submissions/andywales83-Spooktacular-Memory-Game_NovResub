// List memory card elements
const cards = document.querySelectorAll('.game-card');


// declare variable for star icons
const starsContainer = document.querySelector(".stars");


// declare the variable for number of moves
let moves = 0; 
let counter = document.querySelector(".moves");


// Declare variables for the timer function
let timerContainer = document.querySelector(".timer");

let timerId = setInterval(countSeconds, 1000);
let secondsElapsed = 0;
let minutesElapsed = 0;


// logic for first and second card flip
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


// declare flipCard function
function flipCard() {

    // statement to lock board on matching cards
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    // condition for fliping card on click
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        
        return;
    }

    // second click
    hasFlippedCard = false;
    secondCard = this;


    checkForMatch();
    updateScoreCounter();
}


// function to check matching of cards
function checkForMatch() {
    // do cards match
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? disableCards() : unflipCards();
}


// function to disable cards if they match
function disableCards() {
    // if cards match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}


// function that unflips the cards if they don't match
function unflipCards() {
    lockBoard = true;

    // if cards don't match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}


// function to reset board after each round of 2 clicks
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// shuffle the deck for randomisation
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


// add click event listener
cards.forEach(card => card.addEventListener('click', flipCard));


// function for tracking moves
function updateScoreCounter() {
    moves++;
    counter.innerHTML = moves;

    // set the star rating based on the number of moves made
    if (moves === 10) {
        starsContainer.firstElementChild.remove();
    } else if (moves === 15) {
        starsContainer.firstElementChild.remove();
    }
}


// declare timer function
function countSeconds() {

    secondsElapsed++;

    // add 1 minute for every 60 secs elapsed
    if (secondsElapsed % 60 === 0) {
        minutesElapsed++;
        secondsElapsed = 0;
    }

    let secondsDisplay = `${secondsElapsed}`;
    if (secondsElapsed < 10) {
        secondsDisplay = `0${secondsElapsed}`;
    }

    let minutesDisplay = `${minutesElapsed}`;
    if (minutesElapsed < 10) {
        minutesDisplay = `0${minutesElapsed}`;
    }

    timerContainer.innerText = `${minutesDisplay}:${secondsDisplay}`;
}

// pause the timer
var pause = document.querySelector('.pause');

pause.addEventListener('click', function(evt) {
    clearInterval(timerId);
    lockBoard = true;
});

// start the timer
var resume = document.querySelector('.resume');

resume.addEventListener('click', function(evt) {
    timerId = setInterval(countSeconds, 1000);
    lockBoard = false;
});


