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
        if (firstCard.dataset.image === secondCard.dataset.image) {
            // if cards match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            // if cards don't match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500)
        }
    }
}

// add click event listener
cards.forEach(card => card.addEventListener('click', flipCard));