document.addEventListener('DOMContentLoaded', function() {
  let rec = document.getElementById('rec');
  let gal = document.querySelector('.gallery');
  rec.onclick = view;

  function view() {
    gal.style.display = "grid";
    const scrollPosition = gal.scrollHeight * 0.8;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  }
  
  function insertarImagenes(ruta, imag) {
    const gallerySection = document.querySelector('.gallery');

    imag.forEach((imagen) => {
      const imgElement = document.createElement('img');
      imgElement.src = `${ruta}/${imagen}`;
      gallerySection.appendChild(imgElement);

      imgElement.addEventListener('click', function() {
        var index = Array.from(imagenes).indexOf(this);
        currentIndex = index;
        mostrarImagenFullscreen(index);
      });
    });
  }

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

  // Ejemplo de uso:
  var ruta = "../imagenes/Fotos";

  const imag = [
    "evento.webp",
    "img1.webp",
    "img2.webp",
    "img3.webp",
    "img4.webp",
    "img5.webp",
    "img6.webp",
    "img7.webp",
    "img8.webp",
    "img9.webp",
    "img10.webp",
    "img11.webp",
    "img12.webp"
  ];

  insertarImagenes(ruta, imag);
});
