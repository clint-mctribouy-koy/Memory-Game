"use strict";

var cards = document.querySelectorAll(".flip-card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("flipCard");
  });
});