const dialog = document.getElementById("portfolio-modal");
const triggers = document.getElementsByClassName("block__modal-trigger");
const closeButton = document.getElementById("close-modal");

// Attach click handler to every .block__modal-trigger element
if (triggers && triggers.length) {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", () => {
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  }
}

// "Close" button closes the dialog (safely)
if (closeButton) {
  closeButton.addEventListener("click", () => {
    if (dialog && typeof dialog.close === "function") {
      dialog.close();
    }
  });
}
