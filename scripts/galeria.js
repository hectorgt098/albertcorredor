let selectores = document.querySelector('.selectores')
let selects = document.querySelector('.select')
let sel = document.querySelectorAll('button')
let desplazamiento = 0;
let izquierda = document.getElementById('left')
let derecha = document.getElementById('right')
derecha.onclick = dere
izquierda.onclick = izq

function limpiar() {
  sel.forEach((element, i) => {
    element.style.transform = "scale(1)"
  });
}

function desplazar(event) {
  limpiar();
  
  function dere(){
    desplazamiento -= 300;
  }
function izq(){
    desplazamiento += 300;
  }
  
  selects.style.transform = `translateX(${desplazamiento}px)`
  
  sel.forEach((element, i) => {
    element.addEventListener('click', ampliar)
  });
}


console.log(selects);
console.log(selectores);
