//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.

//!PARAMETROS FIJOS

//Peso estandar por caja
const pesoCaja = 20;

//Tarifa de los Vehiculos
const costoTurbo = 1500000;
const costoSencillo = 2500000;
const costoMinimula = 3250000;

//Capacidad de los vehiculos en kilogramos
const maxPesoTurbo = 4500;
const maxPesoSencillo = 8500;
const maxPesoMinimula = 16000;



//!CAPTURAR CANTIDAD DE CAJAS

let cantCajas = prompt('Ingrese cantidad de cajas');
console.log(cantCajas);

const pesoTotal = cantCajas * pesoCaja;
console.log(pesoTotal);

//!VEHICULO
//De acuerdo al peso total identifico en que vehiculo se puede hacer el flete, de acuerdo a su capacidad.
function identificarVehiculo(pesoTotal) {
  if (pesoTotal <= maxPesoTurbo) {
   console.log("--entre Turbo con " + pesoTotal);
    return "Turbo";
  } else if (pesoTotal > maxPesoTurbo && pesoTotal <= maxPesoSencillo) {
   console.log("--entre Sencillo con " + pesoTotal);
    return "Sencillo";
  } else if(pesoTotal > maxPesoSencillo && pesoTotal <= maxPesoMinimula) {
   console.log("--entre Minimula con " + pesoTotal);
    return "Minimula";
  }
  console.log("--entre OTRO VEHICULO con " + pesoTotal);
  return "Consultar por otro vehiculo";
}

identificarVehiculo(pesoTotal);

//!COSTO VEHICULO





