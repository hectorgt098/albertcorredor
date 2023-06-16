document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
  
    function animateSections() {
      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var positionFromTop = section.getBoundingClientRect().top;
  
        if (positionFromTop <= window.innerHeight * 0.8) {
            section.style.opacity = 1;
          if (section.classList.contains("sAlbert")) {
            section.style.animation = "swap 2s ease forwards";
          } else if (section.classList.contains("volun")) {
            section.style.animation = "vanishIn 1s ease forwards";
          }else if (section.classList.contains("galeria")) {
            section.style.animation = "spaceInLeft 1s ease forwards";
          }else{
            section.style.animation = "vanishIn 1s ease forwards";
          }
        }
      }
    }
  
    window.addEventListener("scroll", animateSections);
    animateSections();
  });
  