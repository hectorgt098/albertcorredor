let menevent = document.getElementById("menevent");
let menu = document.querySelector(".menu");
menevent.onclick = menuOpen;
menu.style.display = "none";

function menuOpen() {
  if (menu.style.display === "none") {
    menu.style.animation = "";
    menu.style.display = "flex";
    menu.style.animation = "entrada 1s ease forwards";
    menevent.src = "../imagenes/iconos/menucierre.svg";
    menevent.style.animation = "rotate 1s ease";
  } else {
    menu.style.animation = "";
    menu.style.animation = "salidamenu 1s ease forwards";
    menevent.style.animation = "rotate 1s ease";
    menevent.src = "../imagenes/iconos/menu.svg";
    setTimeout(() => {
      menu.style.display = "none";
    }, 1000);
  }
}

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
  "../imagenes/Fotos/img12.webp",
];

for (let i = 0; i < 20; i++) {
  let spanElement = document.createElement("span");
  let randomIndex = Math.floor(Math.random() * imagenes.length);
  let randomImage = imagenes[randomIndex];
  spanElement.style.backgroundImage = `url(${randomImage})`;
  carrusel.appendChild(spanElement);
}

let vol = document.querySelector(".btnvol");

/* cambio de imagenes para donde esta albert corredor */

let donde = document.getElementById("imgcorredor");
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
// Función de callback para el Intersection Observer
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      console.log(section);
      // Realizar acciones específicas para cada sección
      if (section.classList.contains("trayect")) {
        var gridc = section.querySelectorAll(".grid-his");
        var cuadros = section.querySelectorAll(".grid-his article");
        section.style.animation = "vanishIn .7s ease"
        gridc.forEach(function (element, index) {
          setTimeout(function () {
            element.style.animation = "swap 1s ease forwards";
          }, index * 500); // 0.5 segundos de retraso progresivo
        });

        cuadros.forEach(function (element, index) {
          setTimeout(function () {
            element.style.animation = "spaceInLeft 1s ease forwards";
          }, index * 500 + 1000); // 0.5 segundos de retraso progresivo después de 2 segundos
        });
      }
    }
  });
}

// Crear una instancia del Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Observar el viewport
  rootMargin: "0px",
  threshold: 0.5, // Sección visible al menos en un 50%
});

// Obtener todas las secciones
const sections = document.querySelectorAll("section");

// Observar cada sección
sections.forEach((section) => {
  observer.observe(section);
});
