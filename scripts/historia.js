const articles = document.querySelectorAll("article");
let insetValue = 0;
let h1 = document.getElementById("h1");
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
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
article.forEach((element) => {
  element.onclick = centro;
  function centro() {
    if (element.id === "f1") {
      f1.style.background = "var(--main-bg-color-1)";
      f1.style.transform = "scale(110%)";
      f1.style.width = "400px";
      f1.style.borderRadius = "0 20px 100px 0";
      f1.style.alignItems = "center";
      h1.style.marginBottom = "0";
      h1.style.color = "var(--main-bg-color)";
      instructor.style.display = "none";
      historia1.style.display = "flex";
      historia2.style.display = "none";
      f2.style.background = "var(--main-bg-color)";
      f2.style.transform = "scale(100%)";
      f2.style.width = "300px";
      f2.style.borderRadius = "100px";
      f2.style.alignItems = "center";
      h2.style.marginBottom = "0";
      h2.style.color = "#f6f6f6";
    } else if (element.id === "f2") {
      historia2.style.display = "flex";
      instructor.style.display = "none";
      historia1.style.display = "none";
      f1.style.background = "var(--main-bg-color)";
      f1.style.transform = "scale(100%)";
      f1.style.width = "300px";
      f1.style.borderRadius = "100px";
      f1.style.alignItems = "center";
      h1.style.marginBottom = "0";
      h1.style.color = "#f6f6f6";
      f2.style.background = "var(--main-bg-color-1)";
      f2.style.transform = "scale(110%)";
      f2.style.width = "400px";
      f2.style.borderRadius = "0 20px 100px 0";
      f2.style.alignItems = "center";
      h2.style.color = "var(--main-bg-color)";
    }
  }
  console.log(element);
});
