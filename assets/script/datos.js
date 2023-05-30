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

let cantCajas = '';
let pesoCaja = '';
let valor = '';
let selector = '';


function cotizar () {
  //Se toma del html, con el id, el elemento input donde se ingresa la cantidad de cajas y peso de cada caja. 
  cantCajas = document.getElementById('caja').value;
  pesoCaja = document.getElementById('peso').value;
  //Seleccionar una de las opciones de la lista desplegable de la ciudad. 
  valor = document.getElementById('ciudad-envio').value;
  ciudad = document.getElementById('ciudad-envio');
  selector = ciudad.options[ciudad.selectedIndex].text;
 
console.log('....'+ cantCajas, pesoCaja , valor);

return cantCajas, pesoCaja, valor;

};

console.log('----'+ cantCajas);

//!CALCULAR PESO TOTAL 
//Calcular el peso total teniendo en cuenta el peso y cantidad de cajas, ingresado por el usuario


function pesoTotalFlete(cantCajas,pesoCaja) {
  let pesoTotal = '';
  console.log("entro  " + cantCajas + "--" + pesoCaja);
  pesoTotal = cantCajas * pesoCaja;
  console.log("El PESO TOTAL de su mercancia es de: " + pesoTotal + "kg");
  return pesoTotal;

}

function ejecucion() {
  cotizar();
  pesoTotalFlete(cantCajas,pesoCaja);
}





