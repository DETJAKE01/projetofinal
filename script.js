const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    openModal(item);
  });
});

function openModal(item) {
  const modal = document.createElement('div');
  modal.className = 'modal';

  const modalImage = document.createElement('img');
  modalImage.src = item.querySelector('img').src;
  modalImage.alt = item.querySelector('img').alt;

  modal.appendChild(modalImage);

  document.body.appendChild(modal);

  modal.addEventListener('click', () => {
    closeModal(modal);
  });
}

function closeModal(modal) {
  document.body.removeChild(modal);
}