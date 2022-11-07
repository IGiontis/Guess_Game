"use strict";

const container = document.querySelector(".container");
const headerText = document.querySelector(".header-text");
const btnStart = document.querySelector(".btn-start");
const btnInfo = document.querySelector(".btn-info");
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector(".form");
const boxEasy = document.querySelector(".box-easy");
const boxMedium = document.querySelector(".box-medium");
const boxHard = document.querySelector(".box-hard");
const boxContainer = document.querySelector(".box-container");
const difficulty = document.querySelector("#difficulty");
const luckText = document.querySelector(".luck-text");

// Functionality for choosing the mode

// Repeat functions
const showGame = function () {
  boxContainer.classList.remove("hidden");
  luckText.classList.remove("hidden");
  form.classList.add("hidden");
};

difficulty.addEventListener("change", function (e) {
  //   console.log(difficulty.value);
  let divNumber = 9;

  if (difficulty.value === "easy") {
    showGame();
  }

  if (difficulty.value === "medium") {
    boxContainer.style.gridTemplateColumns = "repeat(4,1fr)";
    // difficulty.setAttribute("disabled", ""); //! Later change
    for (let i = 0; i < 3; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);

      showGame();
    }
  }

  if (difficulty.value === "hard") {
    boxContainer.style.gridTemplateColumns = "repeat(5,1fr)";
    for (let i = 0; i < 6; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);
    }
    boxContainer.style.width = "50rem";

    showGame();
  }
});
