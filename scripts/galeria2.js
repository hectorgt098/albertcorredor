document.addEventListener('DOMContentLoaded', function() {
  let ant = document.getElementById('ant');
  let gal = document.querySelector('.gallery');
  let titlegal = document.getElementById('titlegal')
  let mapa = document.querySelector('.centrarmapa');
  let imagenesGal = document.querySelector('.imagenesGal')
  let comunas = Array.from(mapa.children);
  
  comunas.forEach((comuna) => {
    comuna.onclick = verComuna;
  
    function verComuna() {
      if (this.id === "alt") {
        titlegal.innerText = "Altavista"
        imagenesGal.innerHTML = ""
        imgAlt.forEach((imagen)=>{
          const rutaCompleta = `${rutaAlt}/${imagen}`;
          let img = document.createElement("span")
          img.style.background = `url("${rutaCompleta}")`;
          imagenesGal.appendChild(img)
        })
      }else if(this.id === "ant"){
        titlegal.innerText = "San Antonio de Prado"
        imagenesGal.innerHTML = ""
        imgSan.forEach((imagen)=>{
          const rutaCompleta = `${ruta}/${imagen}`;
          let img = document.createElement("span")
          img.style.background = `url("${rutaCompleta}")`;
          imagenesGal.appendChild(img)
        })
      }else if(this.id === "jav"){
        titlegal.innerText = "San Javier"
        imagenesGal.innerHTML = ""
        imgJav.forEach((imagen)=>{
          const rutaCompleta = `${rutaJav}/${imagen}`
          let img = document.createElement("span")
          img.style.background = `url("${rutaCompleta}")`
          imagenesGal.appendChild(img)
        })
      }
      view()
    }
  });

  

  function pintar(){
    ant.firstElementChild.src = "imagenes/mapa/sanantoniop.svg";
  }

  function view() {
    gal.style.display = "flex";
    pintar()
    const scrollPosition = gal.scrollHeight * 0.6;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  }
  


  // Ejemplo de uso:
  var ruta = "imagenes/galeria/SanAntonio";
  var rutaAlt = "imagenes/galeria/Altavista";
  var rutaJav = "imagenes/galeria/SanJavier"
  const imgSan = [
    "san1.webp",
    "san2.webp",
    "san3.webp",
    "san4.webp",
    "san5.webp",
    "san6.webp",
    "san7.webp",
    "san8.webp",
    "san9.webp",
    "san10.webp",
    "san11.webp"
  ];

  const imgAlt = [
    "alt1.webp",
    "alt2.webp",
    "alt3.webp",
    "alt4.webp",
    "alt5.webp",
    "alt6.webp",
    "alt7.webp",
    "alt8.webp",
    "alt9.webp",
    "alt10.webp",
    "alt11.webp",
    "alt12.webp",
    "alt13.webp"
  ]

  const imgJav = [
    "jav1.webp",
    "jav2.webp",
    "jav3.webp",
    "jav4.webp",
    "jav5.webp",
    "jav6.webp",
    "jav7.webp",
    "jav8.webp",
    "jav9.webp",
    "jav10.webp",
    "jav11.webp",
    "jav12.webp",
    "jav13.webp",
    "jav14.webp",
    "jav15.webp",
    "jav16.webp",
    "jav17.webp",
  ]

  let galerycar = document.querySelector(".galerym")
  console.log(galerycar)
  
  imgSan.forEach((imagenes)=>{
    const rutaCompleta = `${ruta}/${imagenes}`;
    let img = document.createElement("img")
    img.src = rutaCompleta
    galerycar.appendChild(img)
  })

});


let botonagain = document.querySelector(".again")
botonagain.onclick = regresoTop

function regresoTop(){
  window.scrollTo(0,0 )
  
}