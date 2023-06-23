/* 
var sections = document.querySelectorAll('section');
var currentSectionIndex = 0;

document.addEventListener('wheel', function(e) {
  var direction = e.deltaY > 0 ? 'down' : 'up';

  if (direction === 'down') {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }
  } else {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
    }
  }

  scrollToSection(currentSectionIndex);
});

function scrollToSection(index) {
  var section = sections[index];
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}
 */