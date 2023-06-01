//*COTIZADOR DE FLETES
//Teniendo en cuenta un precio por kg dependiendo de la ciudad y un peso total, se calcula el costo total del envio.

//! OBTENER DATOS DESDE EL DOM

//*Variables

let cantCajas = 0;
let pesoCaja = 0;
let ciudadDestino = 0;
let selector = 0;
let pesoTotal = 0;
let costoTotal = 0;
let resultado = 0;
let totalEnvio = 0;
let nombreCiudad = 0;
let costoCiudad = 0;

//?---- FUNCION TOMAR DATOS DE LOS INPUT------
//Se toma del html, con el id, el elemento input donde se ingresa la cantidad de cajas y peso de cada caja.

function getDatos() {
  //Valor cantidad de cajas - input number
  cantCajas = document.getElementById("caja").value;
  //Valor peso caja - input number
  pesoCaja = document.getElementById("peso").value;
  return cantCajas, pesoCaja;
}

getDatos();

//?---- FUNCION SELECCIONAR CIUDAD DE LISTA------
//Seleccionar una de las opciones de la lista desplegable de la ciudad

function getSelectorCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  selector = ciudad.options[ciudad.selectedIndex].value;
  return selector;
}

getSelectorCiudad();

//?---- FUNCION PESO TOTAL------
//Cantidad de cajas x peso de cada una.

function pesoTotalFlete(cantCajas, pesoCaja) {
  pesoTotal = cantCajas * pesoCaja;
  return pesoTotal;
}

pesoTotalFlete(cantCajas, pesoCaja);

//?---- FUNCION COSTO CIUDAD------

//!LISTADO DE CIUDADES Y PRECIO POR KG
//Cada ciudad tiene su precio por kilogramo.


guardarLocalStorage();
//Guardo el listado de ciudades con sus respectivos precios en un array de objetos en el localstorage.
function guardarLocalStorage() {
  costoCiudad = [
    { indicador: "1", ciudad: "Medellin", costo: 895 },
    { indicador: "2", ciudad: "Cali", costo: 494 },
    { indicador: "3", ciudad: "Pereira", costo: 795 },
    { indicador: "4", ciudad: "Barranquilla", costo: 1250 },
  ];
  //convierto en texto JSON
  localStorage.setItem("costoCiudad", JSON.stringify(costoCiudad));
}

obtenerLocalStorage();
//obtengo los datos guardados inicialmente y los convierto en un array nuevamente
function obtenerLocalStorage() {
  let costoCiudad = JSON.parse(localStorage.getItem("costoCiudad"));
  return costoCiudad;
}

function getCostoCiudad(selector, costoCiudad) {
  resultado = costoCiudad.find((costo) => costo.indicador === selector);
  resultado = resultado.costo;
  return resultado;
}

//?---- IDENTIFICAR CIUDAD------

function identificarCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  nombreCiudad = ciudad.options[ciudad.selectedIndex].text;
  return nombreCiudad;
}

identificarCiudad();

//?---- FUNCION COSTO ENVIO------
//peso total x $ kilogramo de acuerdo a la ciudad

function costoEnvio(pesoTotal, resultado) {
  totalEnvio = pesoTotal * resultado;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  console.log(formatter.format(totalEnvio));
  totalEnvio = formatter.format(totalEnvio);
  return totalEnvio;
}

costoEnvio(pesoTotal, resultado);

function cotizacionFinal(totalEnvio) {}

cotizacionFinal(totalEnvio);

//?---- CREAR RESULTADO------
//Se tomaran los datos de cantidad de cajas, la ciudad a la que se enviara el pedido y el total cotizado para ser reflejados en el html por medio de la manipulacion del DOM

function crearCotizacion(cantCajas, nombreCiudad, totalEnvio) {
  // document.querySelector(".button").addEventListener("click", (e) => {
  if (cantCajas > 0) {
    const newElement = document.createElement("div");
    newElement.classList.add("div");
    newElement.innerHTML = `
    <div class="resultado-title">
     <h1>
         Cotizacion
      <img src="./assets/img /pago.png" alt="logo cotizacion" class="img-cotizacion">
    </h1>
    <p class="texto-principal">Usted enviara <strong> ${cantCajas} </strong> cajas a la ciudad de <strong> ${nombreCiudad} </strong> , con un costo de <strong> ${totalEnvio} </strong>
    </p>
    </div> 
    `;
    document.querySelector(".resultado").appendChild(newElement);
  } else return [];
  // });
}

crearCotizacion(cantCajas, nombreCiudad, totalEnvio);

function ejecucion() {
  getDatos();
  getSelectorCiudad();
  pesoTotalFlete(cantCajas, pesoCaja);
  getCostoCiudad(selector, costoCiudad);
  identificarCiudad();
  costoEnvio(pesoTotal, resultado);
  cotizacionFinal(totalEnvio);
  crearCotizacion(cantCajas, nombreCiudad, totalEnvio);
}
