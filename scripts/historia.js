const articles = document.querySelectorAll("article");
let insetValue = 0;
let h2 = document.getElementById("h2");
let instructor = document.getElementById("instructor");
let historia1 = document.getElementById("his1");
let historia2 = document.getElementById("his2");
let article = document.querySelectorAll("article");

//función para agregar propiedad inset a los articulos

for (let i = 0; i < articles.length; i++) {
  insetValue += 70;
  articles[i].style.top = `${insetValue}px`;
}

//Función de cambio en los elementos e historias

article.forEach((element) => {
  element.onclick = centro;
  function centro() {
    if (element.id === "f1") {
      let f1 = document.getElementById("f1");
      f1.style.background = "var(--main-bg-color-1)";
      f1.style.transform = "scale(110%)";
      f1.style.width = "400px";
      f1.style.borderRadius = "0 20px 100px 0";
      f1.style.alignItems = "center";
      h2.style.marginBottom = "0";
      h2.style.color = "var(--main-bg-color)";
      instructor.style.display = "none";
      historia1.style.display = "flex";
      historia2.style.display = "none";
    } else if (element.id === "f2") {
      historia2.style.display = "flex";
      instructor.style.display = "none";
      historia1.style.display = "none";
    }
  }
  console.log(element);
});
