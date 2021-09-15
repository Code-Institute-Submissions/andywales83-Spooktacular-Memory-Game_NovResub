// List memory card elements
const cards = document.querySelectorAll('.game-card');

// declare flipCard function
function flipCard() {
    this.classList.toggle('flip');
}

// add click event listener
cards.forEach(card => card.addEventListener('click', flipCard));