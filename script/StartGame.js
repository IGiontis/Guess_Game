import { addInnerBoxes } from "./InnerBoxes.js";
import { boxContainer, luckText, form } from "./DomElements.js";

export const showGame = function () {
  boxContainer.classList.remove("hidden");
  luckText.classList.remove("hidden");
  form.classList.add("hidden");
};

export const startGame = function () {
  showGame();
  addInnerBoxes();
};
