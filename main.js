"use strict";
let firstFlippedCard = [];
const deckGrid = document.querySelector(".memory-game-grid");
const cards = document.querySelectorAll(".memory-card");
// Flipping card on click and adding event listener on to each card
const getPairs = (card) => {
  if (firstFlippedCard.length % 2 === 0) {
    console.log(firstFlippedCard[0].classList)
    console.log(firstFlippedCard[1].classList)
    if (
      firstFlippedCard[0].classList[1] ==
      firstFlippedCard[1].classList[1]
    ) {
      card.classList.add("match");
      console.log("match");
    } else {
      card.classList.remove("flip");
      console.log("not-match");
    }
  }
};
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // console.log(card);
    card.classList.add("flip");
    firstFlippedCard.push(card);
    getPairs(card);
  });
});

// store in variable first card

// matching cards
// Card Array to compare the flipped cards
// const flippedCardsArray = [];

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
// cards randomized on start of game
const startGame = () => {
  const shuffledCards = shuffle(cardDeck);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, (card) => {
      deckGrid.appendChild(card);
    });
  }
};

window.onload = startGame();
