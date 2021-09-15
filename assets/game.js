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
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // do cards match
    }
}

// add click event listener
cards.forEach(card => card.addEventListener('click', flipCard));