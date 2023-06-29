// Obtiene la ruta completa del archivo HTML
var fullPath = window.location.pathname;

// Obtiene el último segmento de la ruta, que será el nombre del archivo
var filename = fullPath.substring(fullPath.lastIndexOf('/') + 1);

// Imprime el nombre del archivo en la consola
console.log(filename);


if(filename == "campa%C3%B1a.html"){
    let enlaces = document.querySelector(".enlaces").childNodes
    enlaces[3].classList.add("active");
}if(filename == "index.html"){
    let enlaces = document.querySelector(".enlaces").childNodes
    enlaces[1].classList.add("active");
}