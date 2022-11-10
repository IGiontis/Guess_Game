import { startGame } from "./StartGame.js";
import { boxContainer, difficulty } from "./DomElements.js";

export const checkDifficulty = function () {
  let divNumber = 9;
  if (difficulty.value === "easy") {
    startGame();

    // check media
    const media570 = window.matchMedia("(max-width: 570px)");
    if (media570.matches) boxContainer.style.maxWidth = "28rem !important";
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
    const media512 = window.matchMedia("(max-width:512px)");
    if (media512.matches) {
      boxContainer.style.gridTemplateColumns = "repeat(3,1fr)";
    } else {
      boxContainer.style.gridTemplateColumns = "repeat(5,1fr)";
    }
    for (let i = 0; i < 6; i++) {
      const moreDiv = document.createElement("div");
      moreDiv.className = `box box${(divNumber += 1)}`;
      boxContainer.appendChild(moreDiv);
    }
    boxContainer.style.maxWidth = "50rem";
    startGame();
  }
};
