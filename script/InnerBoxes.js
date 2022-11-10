import { resSuffler, mediumSuffler, hardSuffler } from "./Suffle.js";
import {
  winText,
  winOverlay,
  difficulty,
  btnReset,
  lostText,
  overlay,
  luckText,
} from "./DomElements.js";

// *********************************
// Implementation for adding emojis
// *********************************
export const addInnerBoxes = function () {
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
        btnReset.classList.remove("disable-button");
        lostText.classList.remove("hidden");
        overlay.classList.remove("hidden");
      }
    });
  });
};

const winImplamantation = function () {
  winText.classList.remove("hidden");
  winOverlay.classList.remove("hidden");
  luckText.innerHTML = `WON WON WON!!! 🎉`;
  btnReset.classList.remove("disable-button");
};
