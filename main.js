"use strict";
let firstFlippedCard = [];
const deckGrid = document.querySelector(".memory-game-grid");
const cards = document.querySelectorAll(".memory-card");
const scoreCard = document.querySelector("#score");
let score = 0;

// checking if the pairs are matched then add on to score if not return to unflipped state
const getPairs = () => {
  if (firstFlippedCard.length === 2)
    if (firstFlippedCard[0].dataset.card == firstFlippedCard[1].dataset.card) {
      matched();
      score++;
      document.querySelector("#score").textContent = `Score: ${score}`;
    } else {
      unmatched();
    }

  if (score === 4) {
    // alert("you win my niggah");
    congratulations();
  }
};

// if the cards are macthed
const matched = () => {
  firstFlippedCard[0].classList.add("match");
  firstFlippedCard[1].classList.add("match");
  console.log("match");
  firstFlippedCard = [];
};

// function if the cards arent macthed together
const unmatched = () => {
  setTimeout(() => {
    firstFlippedCard[0].classList.remove("flip");
    firstFlippedCard[1].classList.remove("flip");
    console.log("not-match");
    firstFlippedCard = [];
  }, 1000);
};
// Flipping card on click and adding event listener on to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // console.log(card);
    card.classList.add("flip");
    firstFlippedCard.push(card);
    getPairs(card);
  });
});

const cardDeck = [...cards];
// Shuffling cards and randomizing placement
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // x is the randomised array that we want to now make equal to the original array
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
//just creating a young timer -> run the timer on game start -> if the score reaches the full amount of pairs stop timer -> maybe create a pop up saying well done or something?
let second = 0;
let minute = 0;
let interval;
const timer = document.querySelector("#timer");
const startTimer = () => {
  interval = setInterval(() => {
    timer.innerHTML = `Time: ${minute}m : ${second}s`;
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
  }, 1000);
};
// cards randomized on start of game
const startGame = () => {
  const shuffledCards = shuffle(cardDeck);
  for (let i = 0; i < shuffledCards.length; i++) {
    [].forEach.call(shuffledCards, (card) => {
      deckGrid.appendChild(card);
    });
  }

  scoreCard.innerHTML = `Score: ${score}`;
  timer.innerHTML = `Time: ${minute}m : ${second}s`;
  startTimer();
};
// start game on page load
window.onload = startGame();

// quick modal try then i will refactor
// Get the modal
const modal = document.getElementById("myModal");
// let finalTime;
const finalTime = document.querySelector(".final-time");
const congratulations = () => {
  if (score === 4) {
    clearInterval(interval);
    finalTime.innerHTML = timer.innerHTML;
    modal.classList.add("modal-content");
    // modal.classList.add("modal-content");
  }
};


// Get the <span> element that closes the modal
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
