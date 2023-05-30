//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.

//!LISTADO DE PRECIOS VEHICULOS
//De acuerdo a la ciudad destino y el vehiculo se asigna un costo.

const costoTurbo = [
  { indicador: "1", ciudad: "Medellin", costo: 1180000 },
  { indicador: "2", ciudad: "Cali", costo: 370000 },
  { indicador: "3", ciudad: "Pereira", costo: 870000 },
  { indicador: "4", ciudad: "Barranquilla", costo: 2500000 },
];

const costoSencillo = [
  { indicador: "1", ciudad: "Medellin", costo: 1590000 },
  { indicador: "2", ciudad: "Cali", costo: 520000 },
  { indicador: "3", ciudad: "Pereira", costo: 1170000 },
  { indicador: "4", ciudad: "Barranquilla", costo: 3490000 },
];

const costoMinimula = [
  { indicador: "1", ciudad: "Medellin", costo: 2490000 },
  { indicador: "2", ciudad: "Cali", costo: 1420000 },
  { indicador: "3", ciudad: "Pereira", costo: 2180000 },
  { indicador: "4", ciudad: "Barranquilla", costo: 5470000 },
];

//! OBTENER DATOS DESDE EL DOM

//*Variables 

let cantCajas = 0;
let pesoCaja = 0;
let ciudadDestino = 0;
let selector = 0;

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
  selector = ciudad.options[ciudad.selectedIndex].text;

  console.log("ciudad: " + selector);

  return selector;
}

getCiudad();



/*
//!CALCULAR PESO TOTAL
//Calcular el peso total teniendo en cuenta el peso y cantidad de cajas, ingresado por el usuario

function pesoTotalFlete(cantCajas, pesoCaja) {
  let pesoTotal = "";
  console.log("entro  " + cantCajas + "--" + pesoCaja);
  pesoTotal = cantCajas * pesoCaja;
  console.log("El PESO TOTAL de su mercancia es de: " + pesoTotal + "kg");
  return pesoTotal;
}

function crearNuevaLinea(cantCajas, pesoCaja, ciudadDestino, pesoTotalFlete) {
  console.log(cantCajas, pesoCaja);
  const linea = document.createElement("section");
  const contenido = `
  <div>
  <p>${cantCajas}</p>
  <p>${pesoCaja}</p>
  <p>$ ciudadDestino}</p>
  <p>${pesoTotalFlete}</p>
</div>
  `;
  linea.innerHTML = contenido;

  return linea;
}
*/

function ejecucion() {
  getDatos();
  getCiudad();
  pesoTotalFlete(cantCajas, pesoCaja);
  crearNuevaLinea(cantCajas, pesoCaja, ciudadDestino, pesoTotalFlete);
}
