var articulos = document.querySelectorAll('article');
var p1 = document.querySelectorAll('p');

for (var i = 0; i < articulos.length; i++) {
  var imagen = articulos[i].querySelector('img');
  articulos[i].addEventListener('mouseenter', function(event) {
    var parrafo = event.currentTarget.querySelector('p');
    var imagen = event.currentTarget.querySelector('img');
    parrafo.style.display = "block";
    parrafo.style.animation = "vanishIn .4s ease forwards";
    imagen.style.display = "none";
  });
  articulos[i].addEventListener('mouseleave', function(event) {
    var parrafo = event.currentTarget.querySelector('p');
    var imagen = event.currentTarget.querySelector('img');
    parrafo.style.display = "none";
    imagen.style.display = "block";
  });
}




