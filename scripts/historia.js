const articles = document.querySelectorAll("article");
let insetValue = 0;
let instructor = document.getElementById("instructor");

let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let h4 = document.getElementById("h4");
let h5 = document.getElementById("h5");
let h6 = document.getElementById("h6");
let h7 = document.getElementById("h7");
let h8 = document.getElementById("h8");
let h9 = document.getElementById("h9");
let h10 = document.getElementById("h10");

let historia1 = document.getElementById("his1");
let historia2 = document.getElementById("his2");
let historia3 = document.getElementById("his3");
let historia4 = document.getElementById("his4");
let historia5 = document.getElementById("his5");
let historia6 = document.getElementById("his6");
let historia7 = document.getElementById("his7");
let historia8 = document.getElementById("his8");
let historia9 = document.getElementById("his9");
let historia10 = document.getElementById("his10");


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
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");
let f4 = document.getElementById("f4");
let f5 = document.getElementById("f5");
let f6 = document.getElementById("f6");
let f7 = document.getElementById("f7");
let f8 = document.getElementById("f8");
let f9 = document.getElementById("f9");
let f10 = document.getElementById("f10");



article.forEach((element)=>{
element.onclick = funcionar;

function addStyles(){
  element.style.background = "var(--main-bg-color-1)";
    element.style.transform = "scale(110%)";
    element.style.width = "350px";
    element.style.borderRadius = "0 20px 100px 0";
    element.style.alignItems = "center";
}

function funcionar(){
  if(element.id === "f1"){
    resetStyles();
    addStyles();
    historia1.style.display = "flex";
    h1.style.color = "var(--main-bg-color)";
  }else if(element.id === "f2"){
    resetStyles();
    addStyles();
    historia2.style.display = "flex";
    h2.style.color = "var(--main-bg-color)";
  }else if(element.id === "f3"){
    resetStyles();
    addStyles();
    historia3.style.display = "flex";
    h3.style.color = "var(--main-bg-color)";
  }else if(element.id === "f4"){
    resetStyles();
    addStyles();
    historia4.style.display = "flex";
    h4.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f5"){
    resetStyles();
    addStyles();
    historia5.style.display = "flex";
    h5.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f6"){
    resetStyles();
    addStyles();
    historia6.style.display = "flex";
    h6.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f7"){
    resetStyles();
    addStyles();
    historia7.style.display = "flex";
    h7.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f8"){
    resetStyles();
    addStyles();
    historia8.style.display = "flex";
    h8.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f9"){
    resetStyles();
    addStyles();
    historia9.style.display = "flex";
    h9.style.color = "var(--main-bg-color)";
  }
  else if(element.id === "f10"){
    resetStyles();
    addStyles();
    historia3.style.display = "flex";
    h10.style.color = "var(--main-bg-color)";
  }
}


});