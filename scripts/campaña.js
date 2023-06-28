let t1 = document.querySelector('.tabla1').children
let elem = Array.from(t1)

elem.forEach(function(element, index) {
  setTimeout(function() {
    element.style.animation = "spaceInRight 1s ease forwards";
  }, (index * 500) + 1000); // 0.5 segundos de retraso progresivo después de 2 segundos
});