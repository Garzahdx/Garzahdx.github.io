const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.project-image-wrap img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});
