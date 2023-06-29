let boton = document.getElementById('formTeam')
let content = document.querySelector('.formTeam')
let form = document.getElementById('voluntform')
boton.onclick = abrirForm
form.onclick = cerrar

function cerrar(){
    content.style.display="none"
}

function abrirForm(){
    content.style.display = "flex";
}

const comunas = [
    "Ciudad",
    "Popular",
    "Santa Cruz",
    "Manrique",
    "Aranjuez",
    "Castilla",
    "Doce_de_Octubre",
    "Robledo",
    "Villa Hermosa",
    "Buenos_aires",
    "La_Candelaria",
    "Laureles",
    "La_América",
    "San_javier",
    "El_Poblado",
    "Guayabal",
    "Belén",
    "Palmitas",
    "San cristobal",
    "Altavista",
    "San Antonio de Prado",
    "Santa Elena",
  ];
  
  const barriosPorComuna = {
    Popular: [
      "Aldea Pablo VI",
      "Carpinelo",
      "El Compromiso",
      "Granizal",
      "La avanzada",
      "La Esperanza N° 2",
      "Moscú N° 2",
      "Popular",
      "San Pablo",
      "Santo Domingo Sabio N° 2",
      "Villa Guadalupe",
    ],
    Altavista: [
      "Aguas Frías",
      "Altavista Central",
      "Cabecera Altavista",
      "El corazon El Morro",
      "El Jardín",
      "La Esperanza",
      "Patiobonito - Buga",
      "San Jóse del Manzanillo",
      "San Pablo",
      "Suburbano Aguas Frías",
      "Suburbano Altavista",
      "Suburbano El Corazón",
      "Suburbano El Manzanillo",
      "Suburbano La Esperanza",
      "Suburbano Patio Bonito",
      "Suburbano San Pablo",
      "Zona De Expansión Altavista",
      "Zona De Expansión Belen Rincón",
      "Zona De Expansión El Noral",
    ],
    Aranjuez: [
      "Aranjuez",
      "Berlín",
      "Bermejal - Los Álamos",
      "Brasilia",
      "Campo Valdes N° 1",
      "Jardín Botánico",
      "La piñuela",
      "Las Esmeraldas",
      "Manrique Central N° 1",
      "Miranda",
      "Moravia",
      "Palermo",
      "Parque Norte",
      "San Isidro",
      "San Pedro",
      "Sevilla",
    ],
    Belén: [
      "Altavista",
      "Belén",
      "Cerro Nutibara",
      "Diego Echevarría",
      "El Nogal - Los Almendros",
      "El Rincón",
      "Fátima",
      "Granada",
      "La Gloria",
      "La Hondonada",
      "La Loma de Los Bernal",
      "La mota",
      "La Palma",
      "Las Mercedes",
      "Las Playas",
      "Las Violetas",
      "Los Alpes",
      "Miravalle",
      "Nueva Villa de Aburrá",
      "Rosales",
      "San Bernardo",
    ],
    Buenos_aires: [
        "Alejandro Echevarria",
        "Asomadera N° 1",
        "Asomadera N° 2",
        "Asomadera N° 3",
        "Barrio Caicedo",
        "Bomboná N° 2",
        "Buenos Aires",
        "Cataluña",
        "El Salvador",
        "Gerona",
        "Juan Pablo II",
        "La Milagrosa",
        "Loreto",
        "Los Cerros el Vergel",
        "Miraflores",
        "Ocho de Marzo"
    ],
    Castilla: [
        "Alfonso Lopez",
        "Belalcazar",
        "Boyacá",
        "Caribe",
        "Castilla",
        "Cementerio Universal",
        "Everfit",
        "Florencia",
        "Francisco Antonio Zea",
        "Girardot",
        "Héctor Abad Gomez",
        "Las Brisas",
        "Oleoducto",
        "Plaza de Feriaz",
        "Progreso",
        "Tejelo",
        "Terminal de Transporte",
        "Toscana",
        "Tricentenario"
    ],Doce_de_Octubre: [
        "Doce de Octubre N° 1",
        "Doce de Octubre N° 2",
        "El Triunfo",
        "Kennedy",
        "La Esperanza",
        "Mirador del Doce",
        "Pedregal",
        "Picachito",
        "Picacho",
        "Progreso N° 2",
        "San Martín de Porres",
        "Santander"
    ],Ciudad: [
        "No aplica"
    ],El_Poblado:[
        "Alejandría",
        "Altos del Poblado",
        "Astorga",
        "Barrio Colombia",
        "Castropol",
        "El Castillo",
        "El Diamante N° 2",
        "El Poblado",
        "El tesoro",
        "La Aguacatala",
        "La Florida",
        "Lalinde",
        "Las Lomas N° 1",
        "Las Lomas N° 2",
        "Los Balsos N° 1",
        "Los Balsos N° 2",
        "Los Naranjos",
        "Manila",
        "Patio Bonito",
        "San Lucas",
        "Santa Maria de Los Ángeles",
        "Simesa",
        "Villa Carlota"
    ],Guayabal: [
        "Campo Amor",
        "Cristo Rey",
        "El Rodeo",
        "Guayabal",
        "La Colina",
        "Noel",
        "Parque Juan Pablo II",
        "Santa Fe",
        "Shellmar",
        "Tenche",
        "Trinidad",
    ],La_América:[
        "Barrio Cristóbal",
        "Calasanz",
        "Calasanz Parte Alta",
        "Campo Alegre",
        "El Danubio",
        "Ferrini",
        "La América",
        "La Floresta",
        "Lós Pinos",
        "Santa Lucia",
        "Santa Mónica",
        "Santa Teresita",
        "Simón Bolivar"
    ],La_Candelaria: [
        "Barrio Colón",
        "Bomboná N° 1",
        "Boston",
        "Calle Nueva",
        "Centro Administrativo",
        "Corazón de Jesus",
        "El chagualo",
        "Estación Villa",
        "Guayaquil",
        "Hospital San Vicente",
        "Jesús Nazareno",
        "La Alpujarra",
        "La Candelaria",
        "Las Palmas",
        "Lós Angeles",
        "Perpetuo Socorro",
        "Prado",
        "San Benito",
        "San Diego",
        "Villa Nueva"
    ],Laureles:[
        "Bolivariana",
        "Carlos E. Restrepo",
        "Cuarta Brigada",
        "El Velódromo",
        "Estadio",
        "Florida Nueva",
        "La Castellana",
        "Las Acacias",
        "Laureles",
        "Lorena",
        "Los Colores",
        "Los Conquistadores",
        "Naranjal",
        "San Joaquín",
        "Suramericana",
        "U.D Atanasio Girardot",
        "Universidad Pontificia"
    ],Manrique:[
        "Campo Valdes N° 2",
        "El Pomar",
        ""
    ]
    
  };
  
  
  let selectComuna = document.getElementById("comuna");
  let selectBarrio = document.getElementById("barrio");

  comunas.sort()
  
  // Agregar las opciones de comunas al elemento <select> de comunas
  comunas.forEach((comuna) => {
    let option = document.createElement("option");
    option.text = comuna;
    selectComuna.appendChild(option);
  });
  
  // Función para actualizar las opciones de barrios cuando se selecciona una comuna
  function actualizarBarrios() {
    let comunaSeleccionada = selectComuna.value;
  
    // Limpiar opciones anteriores
    selectBarrio.innerHTML = "<option>Seleccione su barrio</option>";
  
    // Obtener los barrios correspondientes a la comuna seleccionada
    let barrios = barriosPorComuna[comunaSeleccionada];
  
    // Agregar las opciones de barrios al elemento <select> de barrios
    barrios.forEach((barrio) => {
      let option = document.createElement("option");
      option.text = barrio;
      selectBarrio.appendChild(option);
    });
  }
  
  // Agregar evento change al elemento <select> de comunas
  selectComuna.addEventListener("change", actualizarBarrios);
  