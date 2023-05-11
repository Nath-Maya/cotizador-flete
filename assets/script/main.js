//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.

//!PARAMETROS FIJOS


//Capacidad de los vehiculos en kg
const maxPesoTurbo = 4500;
const maxPesoSencillo = 8500;
const maxPesoMinimula = 16000;


//!CAPTURAR CANTIDAD Y PESO LAS CAJAS
//Datos que debe ingresar el usuario. 
let cantCajas = prompt('Ingrese cantidad de cajas 📦');
let pesoCaja = prompt('Ingrese el peso de cada caja (en kg): ‼️📦');


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

/*
//!COSTO VEHICULO
//Indicar el costo del vehiculo, teniendo en cuenta el seleccionado en la funcion identificarVehiculo. 

 function costoVehiculo(vehiculo) {
   switch (vehiculo) {
     case "vacio":
       alert("Por favor indiquenos cantidad de cajas ⚠️");
       break;
     case "Turbo":
       alert(
         "Ud debe contratar un servicio de " +
           vehiculo +
           " 🛻 que tendra un costo de 💰 $" +
           costoTurbo
       );
       return costoTurbo;
       break;
     case "Sencillo":
       alert(
         "Ud debe contratar un servicio de " +
           vehiculo +
           " 🚚 que tendra un costo de 💰 $" +
           costoSencillo
       );
       return costoSencillo;
       break;
     case "Minimula":
       alert(
         "Ud debe contratar un servicio de " +
           vehiculo +
           " 🚛 que tendra un costo de 💰 $" +
           costoMinimula
       );
       return costoMinimula;
       break;
     case "Otro":
       alert("Son demasiadas cajas 😟");
       break;
   }
 }

 costoVehiculo(vehiculo); 
*/


//!CAPTURAR CIUDAD
let ciudadEnvio = prompt('Indique a que ciudad desea enviar la mercancia 🏙:');


//!LISTADO DE PRECIOS VEHICULOS
//De acuerdo a la ciudad destino y el vehiculo se asigna un costo.

const costoTurbo = [
  {ciudad: 'Medellin', costo: 1180000},
  {ciudad: 'Cali', costo: 370000},
  {ciudad: 'Pereira', costo: 870000},
  {ciudad: 'Barranquilla', costo: 2500000},
];

const costoSencillo = [
  {ciudad: 'Medellin', costo: 1590000},
  {ciudad: 'Cali', costo: 520000},
  {ciudad: 'Pereira', costo: 1170000},
  {ciudad: 'Barranquilla', costo: 3490000},
];

const costoMinimula = [
  {ciudad: 'Medellin', costo: 2490000},
  {ciudad: 'Cali', costo: 1420000},
  {ciudad: 'Pereira', costo: 2180000},
  {ciudad: 'Barranquilla', costo: 5470000},
];


//!COSTO DE ENVIO


