const modalTrigger = document.querySelectorAll('[data-target]');
const modalWindow = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.modal__close');

modalTrigger.forEach(trigger => {
   trigger.addEventListener('click', (event) => {
      event.preventDefault(); 
      const modalID = trigger.getAttribute('data-target');
      document.querySelector('#' + modalID).classList.add('show');
   });
});

const removeShowClass = () => {
   modalWindow.forEach(modal => {
      modal.classList.remove('show');
   });
};

closeModal.forEach(btn => {
   btn.addEventListener('click', () => {
      removeShowClass();
   });
});

modalWindow.forEach(modal => {
   modal.addEventListener('click', (e) => {
      if (e.target === modal) {
         modal.classList.remove('show');
      }
   });
});

document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape') { 
      removeShowClass(); 
   }
});
