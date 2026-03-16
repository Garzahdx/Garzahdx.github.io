const slides = document.querySelectorAll('.slide');

function updateSlides() {
  const vh = window.innerHeight;
  const centerY = window.scrollY + vh / 2;

  slides.forEach(slide => {
    const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
    const distance = Math.abs(centerY - slideCenter);
    const progress = Math.min(distance / (vh * 0.75), 1);

    const blur = progress * 10;
    const opacity = 1 - progress * 0.85;

    const img = slide.querySelector('.slide-image');
    img.style.filter = `blur(${blur}px)`;
    img.style.opacity = opacity;
  });
}

window.addEventListener('scroll', updateSlides, { passive: true });
updateSlides();
