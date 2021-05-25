"use strict";
const deckGrid = document.querySelector(".deck-grid");
const cards = document.querySelectorAll(".flip-card");
// Flipping card on click and adding event listener on to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipCard");
  });
});

// creating a cards array

const cardDeck = [...cards];
// Shuffling cards and randomizing placement
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // x is the randomised array that we want to now make equal to the original array
    let x = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }
  return array;
};

const startGame = () => {
  const shuffledCards = shuffle(cardDeck);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, (card) => {
      deckGrid.appendChild(card);
    });
  }
};
// cards randomized on start
window.onload = startGame(); 
