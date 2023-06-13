let selectores = document.querySelector('.selectores');
let selects = document.querySelector('.select');
let sel = document.querySelectorAll('button');

selectores.addEventListener('click', desplazar);

function limpiar() {
  sel.forEach((element, i) => {
    element.style.scale = "100%";
  });
}

function desplazar() {
  limpiar();
  selects.style.transform = "translateX(-300px)";
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
