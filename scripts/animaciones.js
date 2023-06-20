document.addEventListener("DOMContentLoaded", function() {
  var sections = document.querySelectorAll("section");
  var parrafos = document.querySelectorAll('.puntos p');

  function animateSections() {
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var positionFromTop = section.getBoundingClientRect().top;

      if (positionFromTop <= window.innerHeight * 0.8) {
        section.style.opacity = 1;
        if (section.classList.contains("sAlbert")) {
          section.style.animation = "vanishIn 1.3s ease forwards";
        }else if (section.classList.contains("volun")) {
          section.style.animation = "vanishIn 1s ease forwards";
        }else if (section.classList.contains("events")) {
          section.style.animation = "puffIn 1s ease forwards";
        }else if (section.classList.contains("galeria")) {
          section.style.animation = "spaceInLeft 1s ease forwards";
        }else if (section.classList.contains('decal')) {
          section.style.animation = "spaceInLeft 1s ease forwards";

          var puntos = document.querySelectorAll('.puntos');
          puntos.forEach(function(element, index) {
            setTimeout(function() {
              element.style.animation = "swap 1s ease forwards";
            }, index * 500); // 0.5 segundos de retraso progresivo
          });

          parrafos.forEach(function(element, index) {
            setTimeout(function() {
              element.style.animation = "vanishIn 1s ease forwards";
            }, (index * 500) + 1000); // 0.5 segundos de retraso progresivo después de 2 segundos
          });
        } else {
          section.style.animation = "vanishIn 1s ease forwards";
        }
      }
    }
  }

  window.addEventListener("scroll", animateSections);
  animateSections();
});
