const slides = document.querySelectorAll('.slide');
const images = document.querySelectorAll('.slide-image');

function updateSlides() {
  const vh = window.innerHeight;

  slides.forEach((slide, i) => {
    const rect = slide.getBoundingClientRect();

    // How many pixels of the slide are visible in the viewport
    const visiblePx = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));

    // 1 when slide fills the viewport, 0 when not visible
    const visibility = visiblePx / vh;

    // Square root curve: sharp zone is wide, blur kicks in hard at the edges
    const t = 1 - Math.pow(visibility, 0.5);

    images[i].style.opacity = Math.max(0, 1 - t * 0.9);
    images[i].style.filter = `blur(${t * 14}px)`;
  });
}

window.addEventListener('scroll', updateSlides, { passive: true });
window.addEventListener('resize', updateSlides);
updateSlides();
