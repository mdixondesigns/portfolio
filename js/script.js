const dialog = document.getElementById("portfolio-modal");
const closeButton = document.getElementById("close-modal");

const triggers = document.getElementsByClassName("block__expand-trigger");
let activeBlock = null; // Track which block is currently active

// Attach click handler to every .block__expand-trigger element
if (triggers && triggers.length) {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", (event) => {
      const block = event.target.closest(".block");
      activeBlock = block;
      if (window.innerWidth > 480) {
        // Close all other expanded blocks
        const allBlocks = document.querySelectorAll(".block");
        allBlocks.forEach((b) => {
          if (b !== block && b.classList.contains("block--expanded")) {
            b.classList.remove("block--expanded");
          }
        });
        block.classList.toggle("block--expanded");
      } else {
        openModal();
      }
    });
  }
}

// "Close" button closes the dialog (safely)
if (closeButton) {
  closeButton.addEventListener("click", () => {
    closeModal();
  });
}

function closeModal() {
  if (dialog && typeof dialog.close === "function") {
    dialog.close();
  }
}

function openModal() {
  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

// Handle responsive transitions when window is resized
window.addEventListener("resize", () => {
  if (!activeBlock) return;

  const isModalOpen = dialog && dialog.open;
  const isBlockExpanded = activeBlock.classList.contains("block--expanded");

  // Transitioning from mobile to desktop: close modal, expand block
  if (window.innerWidth > 480 && isModalOpen) {
    closeModal();
    activeBlock.classList.add("block--expanded");
  }

  // Transitioning from desktop to mobile: collapse block, open modal
  if (window.innerWidth <= 480 && isBlockExpanded) {
    activeBlock.classList.remove("block--expanded");
    openModal();
  }
});
