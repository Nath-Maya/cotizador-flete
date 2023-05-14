
//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.


//!CAPTURAR CIUDAD, CANTIDAD Y PESO DE LAS CAJAS
//Datos que debe ingresar el usuario. 

let cantCajas = prompt('Ingrese cantidad de cajas 📦');
let pesoCaja = prompt('Ingrese el peso de cada caja (en kg): ‼️📦');
alert("A continuacion seleccione la ciudad: Medellin: 1 - Cali: 2 - Pereira: 3 - Barranquilla: 4");
let indicadorCiudad = prompt('Indique a que ciudad desea enviar la mercancia 🏙:');


//!CALCULAR PESO TOTAL 
//Calcular el peso total teniendo en cuenta el peso y cantidad de cajas, ingresado por el usuario

let pesoTotal = '';

function pesoTotalFlete(cantCajas,pesoCaja) {
  pesoTotal = cantCajas * pesoCaja;
  return pesoTotal;
  alert("El PESO TOTAL de su mercancia es de: " + pesoTotal + "kg");
}

pesoTotalFlete(cantCajas,pesoCaja);


//!VEHICULO
//De acuerdo al peso total identifico en que vehiculo se puede hacer el flete, de acuerdo a su capacidad.

//Capacidad de los vehiculos en kg
const maxPesoTurbo = 4500;
const maxPesoSencillo = 8500;
const maxPesoMinimula = 16000;

let vehiculo = ''; //inicializo la variable vehiculo.

function identificarVehiculo(pesoTotal) {
   if(pesoTotal == 0) {
   return vehiculo = "vacio";
   } else if(pesoTotal > 0 && pesoTotal <= maxPesoTurbo) {
    return vehiculo = "Turbo";
  } else if (pesoTotal > maxPesoTurbo && pesoTotal <= maxPesoSencillo) {
    return vehiculo = "Sencillo";
  } else if (pesoTotal > maxPesoSencillo && pesoTotal <= maxPesoMinimula) {
    return vehiculo = "Minimula";
  } else if (pesoTotal > maxPesoMinimula) {
    return vehiculo = "Otro";
  }
}

identificarVehiculo(pesoTotal);


//!LISTADO DE PRECIOS VEHICULOS
//De acuerdo a la ciudad destino y el vehiculo se asigna un costo.

const costoTurbo = [
  {indicador: '1', ciudad: 'Medellin', costo: 1180000},
  {indicador: '2', ciudad: 'Cali', costo: 370000},
  {indicador: '3', ciudad: 'Pereira', costo: 870000},
  {indicador: '4', ciudad: 'Barranquilla', costo: 2500000},
];

const costoSencillo = [
  {indicador: '1', ciudad: 'Medellin', costo: 1590000},
  {indicador: '2', ciudad: 'Cali', costo: 520000},
  {indicador: '3', ciudad: 'Pereira', costo: 1170000},
  {indicador: '4', ciudad: 'Barranquilla', costo: 3490000},
];

const costoMinimula = [
  {indicador: '1',ciudad: 'Medellin', costo: 2490000},
  {indicador: '2',ciudad: 'Cali', costo: 1420000},
  {indicador: '3',ciudad: 'Pereira', costo: 2180000},
  {indicador: '4',ciudad: 'Barranquilla', costo: 5470000},
];


//!COSTO DE ENVIO

function costoEnvio(vehiculo,indicadorCiudad) {
  if(vehiculo == "Turbo") {
    let resultado = costoTurbo.find((el) => el.indicador === indicadorCiudad);
    console.log(resultado.costo);
    alert("Ud enviara la mercancia a la ciudad de: "+ resultado.ciudad + " con un costo de: " + resultado.costo);
  } else if (vehiculo == "Sencillo") {
    let resultado = costoSencillo.find((el) => el.indicador === indicadorCiudad);
    console.log(resultado.costo);
    alert("Ud enviara la mercancia a la ciudad de: "+ resultado.ciudad + " con un costo de: " + resultado.costo);
  } else if (vehiculo == "Minimula") {
    let resultado = costoMinimula.find((el) => el.indicador === indicadorCiudad);
    console.log(resultado.costo);
    alert("Ud enviara la mercancia a la ciudad de: "+ resultado.ciudad + " con un costo de: " + resultado.costo);
  } else {
    console.log("son demasiadas cajas");
  }
}

costoEnvio(vehiculo,indicadorCiudad);



