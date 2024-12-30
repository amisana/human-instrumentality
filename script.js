document.addEventListener('DOMContentLoaded', () => {
  const trailerBtn = document.getElementById('trailer-btn');
  const trailerModal = document.getElementById('trailer-modal');
  const closeBtn = document.querySelector('.close-btn');

  // Function to open modal
  const openModal = () => {
    if (trailerModal && trailerBtn && closeBtn) {
      trailerModal.classList.add('show');
      trailerModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus(); // Set focus to close button
    }
  };

  // Function to close modal
  const closeModal = () => {
    if (trailerModal && trailerBtn && closeBtn) {
      trailerModal.classList.remove('show');
      trailerModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
      trailerBtn.focus(); // Return focus to trailer button
    }
  };

  // Open modal on button click
  if (trailerBtn) {
    trailerBtn.addEventListener('click', openModal);
  }

  // Close modal on close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close modal if user clicks outside modal content
  if (trailerModal) {
    trailerModal.addEventListener('click', (e) => {
      if (e.target === trailerModal) {
        closeModal();
      }
    });
  }

  // Close modal on 'Escape' key press
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && trailerModal.classList.contains('show')) {
      closeModal();
    }
  });

  // Trap focus within the modal when it's open
  trailerModal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = trailerModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
});
