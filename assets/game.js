// List memory card elements
const cards = document.querySelectorAll('.game-card');

// logic for first and second card flip
let hasFlippedCard = false;
let firstCard, secondCard;

// declare flipCard function
function flipCard() {
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


    checkForMatch()
}

// function to check matching of cards
function checkForMatch() {
    // do cards match
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? disableCards() : unflipCards();
}

// function to diable cards if they match
function disableCards() {
    // if cards match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// function that unflips the cards if they don't match
function unflipCards() {
    // if cards don't match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

// add click event listener
cards.forEach(card => card.addEventListener('click', flipCard));