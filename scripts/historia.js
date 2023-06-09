// Seleccionar todos los elementos <article>
  const articles = document.querySelectorAll('article');

// Valor inicial de inset
let insetValue = 0;

// Iterar sobre cada elemento <article> en orden ascendente
for (let i = 0; i < articles.length; i++) {
  // Incrementar el valor de inset
  insetValue += 70;

  // Aplicar el nuevo valor de inset al elemento
  articles[i].style.top = `${insetValue}px`;
}

let h2 = document.getElementById("h2");
let instructor = document.getElementById("instructor")
let historia1 = document.getElementById("his1")

function centro(){
  let f1 = document.getElementById("f1");
  f1.style.background = "var(--main-bg-color-1)"
  f1.style.transform = "scale(110%)"
  f1.style.width = "400px"
  f1.style.borderRadius = "0 20px 100px 0"
  f1.style.alignItems = "center"
  h2.style.marginBottom = "0"
  h2.style.color = "var(--main-bg-color)"
  instructor.style.display = "none"
  historia1.style.display = "flex"
}

