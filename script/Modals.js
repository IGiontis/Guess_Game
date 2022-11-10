import { lostText, winText, boxContainer, modalInfo, overlay, winOverlay } from "./DomElements.js";

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
export const closeModal = function () {
  modalInfo.classList.add("hidden");
  overlay.classList.add("hidden");
  winOverlay.classList.add("hidden");

  if (!lostText.classList.contains("hidden")) winAndLostModal();
  if (!winText.classList.contains("hidden")) winAndLostModal();
};

export const openModal = function () {
  modalInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  if (!winText.classList.contains("hidden")) {
    const boxes = document.querySelectorAll(".box");
    lostText.classList.add("hidden");
    boxContainer.classList.add("pointerEvent");

    boxes.forEach((box) => (box.style.opacity = "0.5"));
  }
};
