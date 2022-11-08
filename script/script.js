"use strict";

const container = document.querySelector(".container");
const headerText = document.querySelector(".header-text");
const btnReset = document.querySelector(".btn-reset");
const btnInfo = document.querySelector(".btn-info");
const mainContainer = document.querySelector(".main-container");
const form = document.querySelector(".form");
const boxEasy = document.querySelector(".box-easy");
const boxMedium = document.querySelector(".box-medium");
const boxHard = document.querySelector(".box-hard");
const boxContainer = document.querySelector(".box-container");

const difficulty = document.querySelector(".difficulty");
const luckText = document.querySelector(".luck-text");
const lostText = document.querySelector(".lost-text");
const winText = document.querySelector(".win-text");
const winOverlay = document.querySelector(".win-overlay");

const modal = document.querySelector(".modal");
const modalInfo = document.querySelector(".modal-info");
const xMarkModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//*********************** */
// Repeat functions
// *************************
const showGame = function () {
  boxContainer.classList.remove("hidden");
  luckText.classList.remove("hidden");
  form.classList.add("hidden");
};

const startGame = function () {
  showGame();
  addInnerBoxes();
};

const winImplamantation = function () {
  winText.classList.remove("hidden");
  winOverlay.classList.remove("hidden");
  luckText.innerHTML = `WON WON WON!!! 🎉`;
};

const checkDifficulty = function () {
  let divNumber = 9;
  if (difficulty.value === "easy") {
    startGame();
  }

  if (difficulty.value === "medium") {
    boxContainer.style.gridTemplateColumns = "repeat(4,1fr)";

    for (let i = 0; i < 3; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);
    }
    boxContainer.style.maxWidth = "45rem";
    startGame();
  }

  if (difficulty.value === "hard") {
    boxContainer.style.gridTemplateColumns = "repeat(5,1fr)";
    for (let i = 0; i < 6; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);
    }
    boxContainer.style.maxWidth = "50rem";
    startGame();
  }
};

// *************************************** */
// Functionality for choosing the mode
//**************************************** */

difficulty.addEventListener("change", checkDifficulty);

// *********************************
// Implementation for adding emojis
// *********************************
const addInnerBoxes = function () {
  const boxes = document.querySelectorAll(".box");

  let dataNum = 1;

  // ********************************************
  //  Adding to each box the value of win or lose
  // ********************************************
  boxes.forEach((currentBox, i) => {
    currentBox.addEventListener("mousedown", function () {
      if (difficulty.value === "easy") {
        currentBox.innerHTML = resSuffler[i];
      }
      if (difficulty.value === "medium") currentBox.innerHTML = mediumSuffler[i];
      if (difficulty.value === "hard") currentBox.innerHTML = hardSuffler[i];

      // Adding the colors

      if (currentBox.innerHTML === "🍀") {
        currentBox.classList.add("pointerEvent", "win-box");
        currentBox.dataset.boxNum = `${dataNum++}`;
        if (currentBox.dataset.boxNum === "8" && difficulty.value === "easy") {
          winImplamantation();
        }
        if (currentBox.dataset.boxNum === "10" && difficulty.value === "medium") {
          winImplamantation();
        }
        if (currentBox.dataset.boxNum === "11" && difficulty.value === "hard") {
          winImplamantation();
        }

        // maybe here i need to add data set, an einai trifili dwse dataset arithmo, an einai dataset = 8 emafnise win
      } else {
        luckText.innerHTML = `LOST ☹️`;
        currentBox.classList.add("lost-box", "pointerEvent");

        lostText.classList.remove("hidden");
        overlay.classList.remove("hidden");
      }
    });
  });
};

//******************************* */
// Array for win and lose
//****************************** */
const easyArray = ["🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🔥"];
const mediumArray = ["🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🍀", "🔥", "🔥"];
const hardArray = [
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🍀",
  "🔥",
  "🔥",
  "🔥",
  "🔥",
];

// Suffle array to make it random
const suffler = function (array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m]; // This is the number of the array -1
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
const resSuffler = suffler(easyArray);
const mediumSuffler = suffler(mediumArray);
const hardSuffler = suffler(hardArray);

//************************************ */
// Close and Show modals
//************************************ */
const winAndLostModal = function () {
  const boxes = document.querySelectorAll(".box");
  lostText.classList.add("hidden");
  winText.classList.add("hidden");
  boxContainer.classList.add("pointerEvent");

  boxes.forEach((box) => (box.style.opacity = "0.5"));
};
const closeModal = function () {
  modalInfo.classList.add("hidden");
  overlay.classList.add("hidden");
  winOverlay.classList.add("hidden");

  if (!lostText.classList.contains("hidden")) winAndLostModal();
  if (!winText.classList.contains("hidden")) winAndLostModal();
};

const openModal = function () {
  modalInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  if (!winText.classList.contains("hidden")) {
    const boxes = document.querySelectorAll(".box");
    lostText.classList.add("hidden");
    boxContainer.classList.add("pointerEvent");

    boxes.forEach((box) => (box.style.opacity = "0.5"));
  }
};

btnInfo.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
winOverlay.addEventListener("click", closeModal);
xMarkModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// test
btnReset.addEventListener("click", function () {
  window.location.reload();
});

// **********************
// QUERY SELECTOR
//*********************** */
