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

//?---- FUNCION TOMAR DATOS DE LOS INPUT------
//Se toma del html, con el id, el elemento input donde se ingresa la cantidad de cajas y peso de cada caja.

function getDatos() {
  //Valor cantidad de cajas - input number
  cantCajas = document.getElementById("caja").value;
  console.log("cajas: " + cantCajas);

  //Valor peso caja - input number
  pesoCaja = document.getElementById("peso").value;
  console.log("peso: " + pesoCaja);

  return cantCajas, pesoCaja;
}

getDatos();

//?---- FUNCION SELECCIONAR CIUDAD DE LISTA------
//Seleccionar una de las opciones de la lista desplegable de la ciudad

function getCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  selector = ciudad.options[ciudad.selectedIndex].value;

  console.log("ciudad: " + selector);

  return selector;
}

getCiudad();


//?---- FUNCION PESO TOTAL------
//Cantidad de cajas x peso de cada una. 


function pesoTotalFlete(cantCajas,pesoCaja) {

  console.log("Entramos a peso total:" + cantCajas + " y " +  pesoCaja);
  pesoTotal = cantCajas * pesoCaja;
  console.log("Peso total es: " + pesoTotal);
  return pesoTotal;
}

pesoTotalFlete(cantCajas,pesoCaja);


//?---- FUNCION COSTO CIUDAD------

//!LISTADO DE CIUDADES Y PRECIO POR KG
//Cada ciudad tiene su precio por kilogramo.

const costoCiudad = [
  {indicador: '1', ciudad: 'Medellin', costo: 895},
  {indicador: '2', ciudad: 'Cali', costo: 494},
  {indicador: '3', ciudad: 'Pereira', costo: 795},
  {indicador: '4', ciudad: 'Barranquilla', costo: 1250},
];


function getCostoCiudad(selector) {
  let resultado = costoCiudad.find((costo) => costo.indicador === selector);
  console.log("---" + resultado.costo);
  return resultado.costo;
};

getCostoCiudad(selector);


//?---- FUNCION COSTO ENVIO------
//peso total x $ kilogramo de acuerdo a la ciudad


function costoEnvio() {
  

}

costoEnvio();





function ejecucion() {
  getDatos();
  getCiudad();
  pesoTotalFlete(cantCajas, pesoCaja);
  getCostoCiudad(selector);
}
