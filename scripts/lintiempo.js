let first = document.getElementById('first')
let second = document.getElementById('second');
let thir = document.getElementById('thir');
let fourth = document.getElementById('fourth')
let five = document.getElementById('five');
let sixth = document.getElementById('sixth');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
first.onclick = primero;
second.onclick = segundo;
thir.onclick = tercero;
fourth.onclick = cuarto;
five.onclick = quinto;
sixth.onclick = sexto;
seven.onclick = septimo;
eight.onclick = octavo;

function primero(){
    let linea = document.getElementById('lin')
    let grad = document.getElementById('grad')

    linea.style.opacity = 1;
    grad.style.opacity = 1;
    linea.style.animation = "vanishIn .8s ease forwards"
    grad.style.animation = "swap .8s ease forwards"
}

function segundo(){
    let linea2 = document.getElementById('lin2')
    let grmed = document.getElementById('grmed')
    let gradned = document.querySelector('.gradned')
    console.log(gradned)

    linea2.style.opacity = 1;
    grmed.style.opacity = 1;
    gradned.style.opacity = 1;

    linea2.style.animation = "vanishIn .7s ease forwards"
    grmed.style.animation = "swap .7s ease forwards"
    gradned.style.animation = "vanishIn .7s ease forwards"
}

function tercero(){
    let linea = document.getElementById('lin6');
    let mtim = document.getElementById('mtim');
    let mt = document.querySelector('.mt');
    linea.style.opacity = 1;
    mtim.style.opacity = 1;
    mt.style.opacity = 1;

    linea.style.animation = "spaceInLeft 1s ease forwards";
    mtim.style.animation = "spaceInLeft 1s ease forwards";
    mt.style.animation = "spaceInLeft 1s ease forwards";
}

function cuarto(){
    let linea = document.getElementById('lin8');
    let censart = document.getElementById('censart');
    let pers = document.getElementById('pers');
    let linea2 = document.getElementById('lin12');
    let linea3 = document.getElementById('lin13');
    let linea4 = document.getElementById('lin14');
    let correo = document.getElementById('correo');
    let linea5 = document.getElementById('lin9');
    let linea6 = document.getElementById('lin10');
    let linea7 = document.getElementById('lin11');
    
    linea.style.opacity = 1;
    censart.style.opacity = 1;
    pers.style.opacity = 1;
    linea2.style.opacity = 1;
    linea3.style.opacity = 1;
    linea4.style.opacity = 1;
    correo.style.opacity = 1;
    linea5.style.opacity = 1;
    linea6.style.opacity = 1;
    linea7.style.opacity = 1;
    linea.style.animation = "vanishIn 1s ease forwards";
    censart.style.animation = "vanishIn 1s ease forwards";
    pers.style.animation = "vanishIn 1s ease forwards";
    linea2.style.animation = "vanishIn 1s ease forwards";
    linea3.style.animation = "vanishIn 1s ease forwards";
    linea4.style.animation = "vanishIn 1s ease forwards";
    correo.style.animation = "vanishIn 1s ease forwards";
    linea5.style.animation = "vanishIn 1s ease forwards";
    linea6.style.animation = "vanishIn 1s ease forwards";
    linea7.style.animation = "vanishIn 1s ease forwards";
}

function quinto(){
    let linea = document.getElementById('lin15');
    let leng = document.getElementById('leng');
    linea.style.opacity = 1;
    leng.style.opacity = 1;
    leng.style.animation = "entradaform 1s ease";
}

function sexto(){
    let linea = document.getElementById('lin18'); 
    let cofart = document.getElementById('cofart');
    let dom = document.querySelector('.dom');
    linea.style.opacity = 1;
    cofart.style.opacity = 1;
    dom.style.opacity = 1;
    linea.style.animation = "vanishIn 1s ease forwards";
    cofart.style.animation = "swap 1s ease forwards";
    dom.style.animation = "entradaform 1s ease forwards";
}

function septimo(){
    let linea = document.getElementById('lin22');
    let vrn = document.querySelector('.vrn');

    linea.style.opacity = 1;
    vrn.style.opacity = 1;
    linea.style.animation = "vanishIn .7s ease forwards";
    vrn.style.animation = "swap .7s ease ";

}

function octavo(){
    let linea = document.getElementById('lin24')
    let social = document.getElementById('social')

    linea.style.opacity = 1;
    social.style.opacity = 1;
    linea.style.animation  = "vanishIn .7s ease forwards";
    social.style.animation = "spaceInLeft .7s ease"

}


let seguir = document.getElementById('seguir')
let ltiempo = document.querySelector('.ltiempo')
let seguircont = document.querySelector('.seguir')
let historia = document.querySelector('.historia')
seguir.onclick = sigue;


function sigue(){
ltiempo.style.display = "flex";
seguircont.style.display = "none";
historia.style.display = "none";
// Lleva la posición del scroll al 100% de la página
// Lleva la posición del scroll al 100% de la página de manera suave
window.scrollTo({
    top: document.documentElement.scrollHeight - window.innerHeight,
    behavior: "smooth"
  });
  
}