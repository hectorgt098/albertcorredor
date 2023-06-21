document.addEventListener('DOMContentLoaded', function() {
  let ant = document.getElementById('ant');
  let gal = document.querySelector('.gallery');
  ant.onclick = view;

  function pintar(){
    ant.firstElementChild.src = "../imagenes/mapa/sanantoniop.svg";
  }

  function view() {
    gal.style.display = "grid";
    pintar()
    const scrollPosition = gal.scrollHeight * 1.4;
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
