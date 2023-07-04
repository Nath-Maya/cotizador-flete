//?---VARIABLES
let cantCajas = 0;
let pesoCaja = 0;
let anchoCaja = 0;
let largoCaja = 0;
let altoCaja = 0;
let pesoVolCaja = 0;
let pesoRealFlete = 0;
let ciudadDestino = 0;
let ciudad = 0;
let indexCiudad = 0;
let costoCiudad = 0;
let listaCiudades = 0;
let nombreCiudad = 0;

//* -----INPUTS DE USUARIO
//Datos que registra el usuario necesarios para hacer los calculos de peso neto y peso volumen.
//Los valores se toman desde el input del html, por medio del id asignado.

function getDatos() {
  cantCajas = document.getElementById("caja").value;
  pesoCaja = document.getElementById("peso").value;
  anchoCaja = document.getElementById("ancho-caja").value;
  largoCaja = document.getElementById("largo-caja").value;
  altoCaja = document.getElementById("alto-caja").value;
  console.log("datos: " + cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja);
  return cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja;
}

//! ----CALCULAR PESO VOLUMEN
//Resultado de multipliar las dimensiones de la unidad en mts
// (ancho X largo X alto de la caja) X factor de equivalencia
// El factor de equivalencia = 400kg / m3

function pesoVolumen(anchoCaja, largoCaja, altoCaja) {
  let factorEquivalencia = 400;
  pesoVolCaja =
    (anchoCaja / 100) *
    (largoCaja / 100) *
    (altoCaja / 100) *
    factorEquivalencia;
  pesoVolCaja = Math.round(pesoVolCaja);
  console.log("peso vol caja: " + pesoVolCaja);
  return pesoVolCaja;
}


//!----SELECCIONAR PESO
//Teniendo en cuenta el peso neto de la caja y el peso volumen definido, el cotizador funciona con el mayor de estos dos. Entonces se debe comparar para proceder a cotizar.

function pesoFlete(pesoCaja, pesoVolCaja, cantCajas) {
  if (pesoCaja > pesoVolCaja) {
    pesoRealFlete = pesoCaja * cantCajas;
  } else {
    pesoRealFlete = pesoVolCaja * cantCajas;
  }
  console.log("peso real: " + pesoRealFlete);
  return pesoRealFlete;
}


//!---- IDENTIFICAR CIUDAD------
//Se toma el valor de la lista desplegable del select.

function identificarCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  indexCiudad = ciudad.options[ciudad.selectedIndex].value;
  console.log("index ciudad: " + indexCiudad);
  return indexCiudad;
}


//!LISTADO DE CIUDADES Y PRECIO POR KG GUARDADAS EN EL LOCALSTORAGE
//Cada ciudad tiene su precio por kilogramo.

guardarLocalStorage();
//Guardo el listado de ciudades con sus respectivos precios en un array de objetos en el localstorage.
function guardarLocalStorage() {
  listaCiudades = [
    { indicador: "1", ciudad: "Medellin", costo: 895 },
    { indicador: "2", ciudad: "Cali", costo: 494 },
    { indicador: "3", ciudad: "Pereira", costo: 795 },
    { indicador: "4", ciudad: "Barranquilla", costo: 1250 },
  ];
  //convierto en texto JSON
  localStorage.setItem("listaCiudades", JSON.stringify(listaCiudades));
}

obtenerLocalStorage();
//obtengo los datos guardados inicialmente y los convierto en un array nuevamente
function obtenerLocalStorage() {
  let listaCiudades = JSON.parse(localStorage.getItem("listaCiudades"));
  return listaCiudades;
}

//! OBTENER COSTO CIUDAD

function getlistaCiudades(indexCiudad, listaCiudades) {
  costoCiudad = listaCiudades.find((costo) => costo.indicador === indexCiudad);
  costoCiudad = costoCiudad.costo;
  console.log("costo ciudad: " + costoCiudad);
  return costoCiudad;
}


//! OBTENER NOMBRE CIUDAD

function getNombreCiudad(indexCiudad, listaCiudades) {
  nombreCiudad = listaCiudades.find(
    (ciudad) => ciudad.indicador === indexCiudad
  );
  nombreCiudad = nombreCiudad.ciudad;
  console.log("nombre ciudad: " + nombreCiudad);
  return nombreCiudad;
}


//! POST DATOS CON FETCH

//La recoleccion de los datos se hara con el boton y su asignacion de evento click.
const getDatosBoton = document.querySelector(".button");
getDatosBoton.addEventListener("click", getData);

function getData(event) {
  //Llamar las funciones con sus valores par incluirlos en el objeto data que se enviaran a la API fetch con el metodo POST 
  event.preventDefault();

  getDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  identificarCiudad();
  getlistaCiudades(indexCiudad, listaCiudades);
  getNombreCiudad(indexCiudad, listaCiudades);

  const data = {
    cantCajas: cantCajas,
    pesoRealFlete: pesoRealFlete,
    nombreCiudad: nombreCiudad,
  };

  console.log("---La data para fetch es: ");
  console.log(data);
};


/*
const data = {
  cantCajas: cantCajas,
  pesoRealFlete: pesoRealFlete,
  nombreCiudad: nombreCiudad,
};

function postDatos(event) {
  

  //*LLAMAR FUNCIONES
  getDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  identificarCiudad();
  guardarLocalStorage();
  obtenerLocalStorage();
  getlistaCiudades(indexCiudad, listaCiudades);
  getNombreCiudad(indexCiudad, listaCiudades);

  // Realizamos la solicitud POST a la API
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // La solicitud se completó correctamente
        console.log("Valores almacenados en la API.");
      } else {
        // Ocurrió un error en la solicitud
        console.log("Error al almacenar los valores en la API.");
      }
    })
    .catch((error) => {
      // Ocurrió un error en la comunicación con la API
      console.log("Error de conexión con la API:", error);
    });
}

postDatos();

/*
function crearCotizacion(cantCajas, nombreCiudad, pesoRealFlete) {
  const newElement = document.createElement("div");
  newElement.classList.add("div");
  newElement.innerHTML = `
    <p class="texto-principal">Usted enviara <strong> ${cantCajas} </strong> cajas a la ciudad de <strong> ${nombreCiudad} </strong> , con un costo de <strong> ${pesoRealFlete} </strong>
    </p>
    `;
  document.querySelector(".resultado").appendChild(newElement);
}
*/
