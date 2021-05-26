"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var firstFlippedCard = [];
var deckGrid = document.querySelector(".memory-game-grid");
var cards = document.querySelectorAll(".memory-card"); // Flipping card on click and adding event listener on to each card

var getPairs = function getPairs(card) {
  if (firstFlippedCard.length === 2) //=== 0) {
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
}; //};


var matched = function matched() {
  firstFlippedCard[0].classList.add("match");
  firstFlippedCard[1].classList.add("match");
  console.log("match");
  firstFlippedCard = [];
};

var unmatched = function unmatched() {
  setTimeout(function () {
    firstFlippedCard[0].classList.remove("flip");
    firstFlippedCard[1].classList.remove("flip");
    console.log("not-match");
    firstFlippedCard = [];
  }, 1500);
};

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    // console.log(card);
    card.classList.add("flip");
    firstFlippedCard.push(card);
    getPairs(card);
  });
}); // store in variable first card
// matching cards
// Card Array to compare the flipped cards
// const flippedCardsArray = [];

var cardDeck = _toConsumableArray(cards); // Shuffling cards and randomizing placement


var shuffle = function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // x is the randomised array that we want to now make equal to the original array
    var x = Math.floor(Math.random() * i);
    var temp = array[i];
    array[i] = array[x];
    array[x] = temp;
  }

  return array;
}; // cards randomized on start of game


var startGame = function startGame() {
  var shuffledCards = shuffle(cardDeck);

  for (var i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function (card) {
      deckGrid.appendChild(card);
    });
  }
};

window.onload = startGame();