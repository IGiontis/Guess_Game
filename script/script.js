import { openModal, closeModal } from "./Modals.js";
import { checkDifficulty } from "./Difficulty.js";
import { btnReset, btnInfo, difficulty, winOverlay, xMarkModal, overlay } from "./DomElements.js";

difficulty.addEventListener("change", checkDifficulty);

btnInfo.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
winOverlay.addEventListener("click", closeModal);
xMarkModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
// btnStartGame
btnReset.addEventListener("click", function () {
  window.location.reload();
});
