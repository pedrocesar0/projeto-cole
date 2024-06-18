const buttons = document.querySelectorAll(".abrirmodal")
const modal = document.querySelector("dialog")
const closeButtons = document.querySelectorAll(".fecharmodal")

buttons.forEach(button => {
  button.onclick = function () {
      const modalId = button.getAttribute("data-modal-id");

      const modal = document.getElementById(modalId);

      modal.showModal();
  };
});

closeButtons.forEach(closeButton => {
  closeButton.onclick = function () {
      const modal = closeButton.closest("dialog");

      modal.close();
  };
});