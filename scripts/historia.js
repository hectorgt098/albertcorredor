const articles = document.querySelectorAll("article");
let insetValue = 0;
let instructor = document.getElementById("instructor");


let article = document.querySelectorAll("article");

function resetStyles() {
  const cards = document.querySelectorAll("article");
  const headers = document.querySelectorAll("h2");
  const historias = document.querySelectorAll(".cuento");
  const instructors = document.querySelectorAll("#instructor");

  cards.forEach((card) => {
    card.style.background = "var(--main-bg-color)";
    card.style.transform = "scale(100%)";
    card.style.width = "300px";
    card.style.borderRadius = "100px";
    card.style.alignItems = "flex-end";
  });

  headers.forEach((header) => {
    header.style.marginBottom = "10px";
    header.style.color = "#f6f6f6";
  });

  historias.forEach((historia) => {
    historia.style.display = "none";
  });

  instructors.forEach((instructor) => {
    instructor.style.display = "none";
  });
}
//función para agregar propiedad inset a los articulos

for (let i = 0; i < articles.length; i++) {
  insetValue += 70;
  articles[i].style.top = `${insetValue}px`;
}

//Función de cambio en los elementos e historias


article.forEach((element, i) => {
  element.onclick = funcionar;

  function addStyles() {
    element.style.background = "var(--main-bg-color-1)";
    element.style.transform = "scale(110%)";
    element.style.width = "350px";
    element.style.borderRadius = "0 20px 100px 0";
    element.style.alignItems = "center";
  }

  function funcionar() {
    resetStyles();
    addStyles();
    const articulos = document.querySelectorAll(".cuento");
    articulos.forEach((parrafo, ip) => {
      if (ip == i) {
        parrafo.style.display = "flex";
        element.childNodes[1].style.color = "var(--main-bg-color)";
      }
    });
  }
});
