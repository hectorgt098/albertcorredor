const carouselWrapper = document.querySelector('.carousel-wrapper');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

carouselWrapper.addEventListener('mousedown', dragStart);
carouselWrapper.addEventListener('touchstart', dragStart);

carouselWrapper.addEventListener('mousemove', drag);
carouselWrapper.addEventListener('touchmove', drag);

carouselWrapper.addEventListener('mouseup', dragEnd);
carouselWrapper.addEventListener('touchend', dragEnd);

carouselWrapper.addEventListener('mouseleave', dragEnd);
carouselWrapper.addEventListener('touchcancel', dragEnd);

function dragStart(event) {
  event.preventDefault();

  if (event.type === 'touchstart') {
    startPos = event.touches[0].clientX;
  } else {
    startPos = event.clientX;
  }

  isDragging = true;
  carouselWrapper.style.cursor = 'grabbing';
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function dragEnd() {
  isDragging = false;
  carouselWrapper.style.cursor = 'grab';

  prevTranslate = currentTranslate;
  cancelAnimationFrame(animationID);
}
