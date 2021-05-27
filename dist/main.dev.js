"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var firstFlippedCard = [];
var deckGrid = document.querySelector(".memory-game-grid");
var cards = document.querySelectorAll(".memory-card");
var scoreCard = document.querySelector("#score");
var score = 0; // checking if the pairs are matched then add on to score if not return to unflipped state

var getPairs = function getPairs() {
  if (firstFlippedCard.length === 2) if (firstFlippedCard[0].dataset.card == firstFlippedCard[1].dataset.card) {
    matched();
    score++;
    document.querySelector("#score").textContent = "score: ".concat(score);
  } else {
    unmatched();
  }

  if (score === 4) {
    // alert("you win my niggah");
    congratulations();
  }
}; // if the cards are macthed


var matched = function matched() {
  firstFlippedCard[0].classList.add("match");
  firstFlippedCard[1].classList.add("match");
  console.log("match");
  firstFlippedCard = [];
}; // function if the cards arent macthed together


var unmatched = function unmatched() {
  setTimeout(function () {
    firstFlippedCard[0].classList.remove("flip");
    firstFlippedCard[1].classList.remove("flip");
    console.log("not-match");
    firstFlippedCard = [];
  }, 1000);
}; // Flipping card on click and adding event listener on to each card


cards.forEach(function (card) {
  card.addEventListener("click", function () {
    // console.log(card);
    card.classList.add("flip");
    firstFlippedCard.push(card);
    getPairs(card);
  });
});

var cardDeck = _toConsumableArray(cards); // Shuffling cards and randomizing placement


var shuffle = function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // x is the randomised array that we want to now make equal to the original array
    var j = Math.floor(Math.random() * i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}; //just creating a young timer -> run the timer on game start -> if the score reaches the full amount of pairs stop timer -> maybe create a pop up saying well done or something?


var second = 0;
var minute = 0;
var interval;
var timer = document.querySelector("#timer");

var startTimer = function startTimer() {
  interval = setInterval(function () {
    timer.innerHTML = "timer: ".concat(minute, "m : ").concat(second, "s");
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
  }, 1000);
}; // cards randomized on start of game


var startGame = function startGame() {
  var shuffledCards = shuffle(cardDeck);

  for (var i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, function (card) {
      deckGrid.appendChild(card);
    });
  }

  scoreCard.innerHTML = "score: ".concat(score);
  timer.innerHTML = "timer: ".concat(minute, "m : ").concat(second, "s");
  startTimer();
}; // start game on page load


window.onload = startGame(); // quick modal try then i will refactor
// Get the modal

var modal = document.getElementById("myModal");
var finalTime;

var congratulations = function congratulations() {
  if (score === 4) {
    clearInterval(interval);
    finalTime = timer.innerHTML;
    modal.classList.add("modal-content"); // modal.classList.add("modal-content");
  }
}; // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };
// When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};