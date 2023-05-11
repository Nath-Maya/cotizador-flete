//!CAPTURAR CIUDAD

//!LISTADO DE PRECIOS VEHICULOS
//De acuerdo a la ciudad destino y el vehiculo se asigna un costo.

const costoTurbo = [
  { ciudad: "Medellin", costo: 1180000 },
  { ciudad: "Cali", costo: 370000 },
  { ciudad: "Pereira", costo: 870000 },
  { ciudad: "Barranquilla", costo: 2500000 },
];

const costoSencillo = [
  { ciudad: "Medellin", costo: 1590000 },
  { ciudad: "Cali", costo: 520000 },
  { ciudad: "Pereira", costo: 1170000 },
  { ciudad: "Barranquilla", costo: 3490000 },
];

const costoMinimula = [
  { ciudad: "Medellin", costo: 2490000 },
  { ciudad: "Cali", costo: 1420000 },
  { ciudad: "Pereira", costo: 2180000 },
  { ciudad: "Barranquilla", costo: 5470000 },
];

//!COSTO DE ENVIO



/*
function costoFlete(ciudadEnvio) {
    const resultado = costoTurbo.find((el) => el.ciudad === ciudadEnvio);
    //imprimo el costo.
    console.log(resultado.costo);
    console.log("Costo flete de: " + resultado.costo + " Vehiculo: " + vehiculo);
}
*/

let vehiculo = "Minimula";
let ciudadEnvio = "Medellin";

// function costoFlete(ciudadEnvio,vehiculo) {

//   console.log('Entre ' + vehiculo);
//   console.log('--Entre ' + ciudadEnvio);



// }

// costoFlete(ciudadEnvio,vehiculo);

if(vehiculo == "Turbo") {
  let resultado = costoTurbo.find((el) => el.ciudad === ciudadEnvio);
  console.log(resultado.costo);
  alert("Costo vehiculo " + resultado.costo)
  // return resultado.costo;
} else if (vehiculo == "Sencillo") {
  
  let resultado = costoSencillo.find((el) => el.ciudad === ciudadEnvio);
  console.log(resultado.costo);
  alert("Costo vehiculo " + resultado.costo)
  // return resultado.costo;
} else if (vehiculo == "Minimula") {
  
  let resultado = costoMinimula.find((el) => el.ciudad === ciudadEnvio);
  console.log(resultado.costo);
  alert("Costo vehiculo " + resultado.costo)
  // return resultado.costo;
} else {
  console.log("son demasiadas cajas");
}
