let carrusel = document.getElementById("carrusel");
let imagenes = [
  "../imagenes/Fotos/img1.webp",
  "../imagenes/Fotos/img2.webp",
  "../imagenes/Fotos/img3.webp",
  "../imagenes/Fotos/img4.webp",
  "../imagenes/Fotos/img5.webp",
  "../imagenes/Fotos/img6.webp",
  "../imagenes/Fotos/img7.webp",
  "../imagenes/Fotos/img8.webp",
  "../imagenes/Fotos/img9.webp",
  "../imagenes/Fotos/img10.webp",
  "../imagenes/Fotos/img11.webp",
  "../imagenes/Fotos/img12.webp"
];

for (let i = 0; i < 20; i++) {
  let spanElement = document.createElement("span");
  let randomIndex = Math.floor(Math.random() * imagenes.length);
  let randomImage = imagenes[randomIndex];
  spanElement.style.backgroundImage = `url(${randomImage})`;
  carrusel.appendChild(spanElement);
}



/* script para abrir formulario */
let vol = document.querySelector(".btnvol")
window.addEventListener("scroll", function () {
    var nav = document.querySelector(".menu");
    var navOffset = nav.offsetTop + nav.offsetHeight;
    var scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= navOffset) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });

/* cambio de imagenes para donde esta albert corredor */

let donde = document.getElementById("imgcorredor")
let index = 0;
setInterval(() => {
    donde.style.animation = "none"; // Elimina la animación actual
    donde.style.backgroundImage = `url(${imagenes[index]})`;
    index = (index + 1) % imagenes.length;
    donde.offsetHeight; // Forzar el reflow para reiniciar la animación
    donde.style.animation = "entradaform .8s ease";
  }, 2000);

  function restartVideo() {
    var video = document.getElementById("player");
    video.currentTime = 0; // Reiniciar el video al inicio
    video.play(); // Reproducir el video nuevamente
  }
