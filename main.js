"use strict";
let firstFlippedCard = [];
const deckGrid = document.querySelector(".memory-game-grid");
const cards = document.querySelectorAll(".memory-card");
// Flipping card on click and adding event listener on to each card
const getPairs = (card) => {
  if (firstFlippedCard.length === 2)
    //=== 0) {
    console.log(firstFlippedCard[0].dataset.card);
  console.log(firstFlippedCard[firstFlippedCard.length - 1].dataset.card);
  if (firstFlippedCard[0].dataset.card == firstFlippedCard[1].dataset.card) {
    // card.classList.add("match");
    // console.log("match");
    matched();
  } else {
    // setTimeout(() => {
    //   card.classList.remove("flip");
    //   firstFlippedCard[0].classList.remove("flip");
    //   console.log("not-match");
    // }, 1500);
    unmatched();
  }
};
//};

const matched = () => {
  firstFlippedCard[0].classList.add("match");
  firstFlippedCard[1].classList.add("match");
  console.log("match");
  firstFlippedCard = [];
};

const unmatched = () => {
  setTimeout(() => {
    firstFlippedCard[0].classList.remove("flip");
    firstFlippedCard[1].classList.remove("flip");
    console.log("not-match");
    firstFlippedCard = [];
  }, 1500);
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
