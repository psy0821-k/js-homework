const track = document.getElementById('carouselTrack');
const items = track.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function getViewCount() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function getMaxIndex() {
  return Math.ceil(items.length / getViewCount()) - 1;
}

function getMoveDistance() {
  const itemWidth = items[0].offsetWidth;
  const gap = 16; // CSS gap과 동일
  return (itemWidth + gap) * getViewCount();
}

function updateCarousel() {
  const distance = getMoveDistance();
  track.style.transform = `translateX(-${currentIndex * distance}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === getMaxIndex();
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < getMaxIndex()) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  currentIndex = Math.min(currentIndex, getMaxIndex());
  updateCarousel();
});

updateCarousel();
