let selectores = document.querySelector('.selectores');
let selects = document.querySelector('.select');
let sel = document.querySelectorAll('button');
let desplazamiento = 0;

selectores.addEventListener('click', desplazar);

function limpiar() {
  sel.forEach((element, i) => {
    element.style.transform = "scale(1)";
  });
}

function desplazar(event) {
  limpiar();
  
  if (event.clientX > window.innerWidth / 2) {
    desplazamiento -= 300;
  } else {
    desplazamiento += 300;
  }
  
  selects.style.transform = `translateX(${desplazamiento}px)`;
  
  sel.forEach((element, i) => {
    element.addEventListener('click', ampliar);
  });
}

function ampliar(event) {
  const button = event.target;
  button.style.transform = "scale(1.5)";
}

console.log(selects);
console.log(selectores);
