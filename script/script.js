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

// Repeat functions
const showGame = function () {
  boxContainer.classList.remove("hidden");
  luckText.classList.remove("hidden");
  form.classList.add("hidden");
};

// Functionality for choosing the mode
difficulty.addEventListener("change", function (e) {
  //   console.log(difficulty.value);
  let divNumber = 9;

  if (difficulty.value === "easy") {
    showGame();
    addInnerBoxes();
  }

  if (difficulty.value === "medium") {
    boxContainer.style.gridTemplateColumns = "repeat(4,1fr)";
    // difficulty.setAttribute("disabled", ""); //! Later change
    for (let i = 0; i < 3; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);
    }
    showGame();
    addInnerBoxes();
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
    addInnerBoxes();
  }
});

// Implementation for adding images
const addInnerBoxes = function () {
  const boxes = document.querySelectorAll(".box");
  //   test

  boxes.forEach((currentBox, i) => {
    currentBox.addEventListener("click", function () {
      currentBox.innerHTML = "test";
      currentBox.style.backgroundColor = "yellow";
    });
  });
};

// Array for win and lose
const easyArray = ["ok", "ok", "ok", "ok", "ok", "ok", "ok", "ok", "boom"];
function suffler(array) {
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
}

console.log(suffler(easyArray));
