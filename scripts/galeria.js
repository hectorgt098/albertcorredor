var imagenes = document.querySelectorAll('.gallery img');
var currentIndex = 0;

function mostrarImagenFullscreen(index) {
  var imagen = imagenes[index];

  if (imagen.requestFullscreen) {
    imagen.requestFullscreen();
  } else if (imagen.mozRequestFullScreen) {
    imagen.mozRequestFullScreen();
  } else if (imagen.webkitRequestFullscreen) {
    imagen.webkitRequestFullscreen();
  } else if (imagen.msRequestFullscreen) {
    imagen.msRequestFullscreen();
  }
}

function cambiarImagen(direccion) {
  if (direccion === 'anterior') {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
  } else if (direccion === 'siguiente') {
    currentIndex = (currentIndex + 1) % imagenes.length;
  }

  mostrarImagenFullscreen(currentIndex);
}

document.addEventListener('keydown', function(event) {
  if (document.fullscreenElement && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
    event.preventDefault();

    if (event.key === 'ArrowLeft') {
      cambiarImagen('anterior');
    } else if (event.key === 'ArrowRight') {
      cambiarImagen('siguiente');
    }
  }
});

var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', function() {
  cambiarImagen('anterior');
});

arrowRight.addEventListener('click', function() {
  cambiarImagen('siguiente');
});

for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function() {
    var index = Array.from(imagenes).indexOf(this);
    currentIndex = index;
    mostrarImagenFullscreen(index);
  });
}

document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    arrowLeft.style.display = 'block';
    arrowRight.style.display = 'block';
  } else {
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';
  }
});
