let boton = document.getElementById('formTeam')
let form = document.querySelector('.formTeam')
let estado = form.style.display = "none"

boton.onclick = abrirformTeam

function abrirformTeam(){
    if(estado === "none"){
        form.style.display = "flex";
    }
}

let select = document.getElementById("comuna");
const comunas = [
  "Ciudad",
  "Popular",
  "Santa Cruz",
  "Manrrique",
  "Aranjuez",
  "Castilla",
  "Doce de Octubre",
  "Robledo",
  "Villa Hermosa",
  "Buenos aires",
  "La candelaria",
  "Laureles",
  "La América",
  "San javier",
  "El Poblado",
  "Guayabal",
  "Belén",
  "Palmitas",
  "San cristobal",
  "Altavista",
  "San Antonio de Prado",
  "Santa Elena"
];

// Crear y agregar los elementos <option>
comunas.forEach(comuna => {
  let option = document.createElement("option");
  option.text = comuna;
  select.add(option);
});
