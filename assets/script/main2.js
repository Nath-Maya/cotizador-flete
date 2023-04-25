//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.

//!PARAMETROS FIJOS

//Peso estandar por caja
const pesoCaja = 20;

//Tarifa de los Vehiculos en $
const costoTurbo = 1500000;
const costoSencillo = 2500000;
const costoMinimula = 3250000;


//Capacidad de los vehiculos en kg
const maxPesoTurbo = 4500;
const maxPesoSencillo = 8500;
const maxPesoMinimula = 16000;



//!CAPTURAR CANTIDAD DE CAJAS
//Calcular el peso total teniendo en cuenta el peso estandar de 20kg.

let cantCajas = prompt('Ingrese cantidad de cajas 📦');
console.log(cantCajas);

const pesoTotal = cantCajas * pesoCaja;
console.log(pesoTotal);

//!VEHICULO
//De acuerdo al peso total identifico en que vehiculo se puede hacer el flete, de acuerdo a su capacidad.

let vehiculo = '';

function identificarVehiculo(pesoTotal) {
   if (pesoTotal <= maxPesoTurbo) {
    console.log("--entre Turbo con " + pesoTotal);
     return vehiculo = "Turbo";
   } else if (pesoTotal > maxPesoTurbo && pesoTotal <= maxPesoSencillo) {
    console.log("--entre Sencillo con " + pesoTotal);
     return vehiculo = "Sencillo";
   } else if(pesoTotal > maxPesoSencillo && pesoTotal <= maxPesoMinimula) {
    console.log("--entre Minimula con " + pesoTotal);
     return vehiculo = "Minimula";
   }
   console.log("--entre OTRO VEHICULO con " + pesoTotal);
   return vehiculo = "Consultar por otro vehiculo";
 }
 
 identificarVehiculo(pesoTotal);


//!COSTO VEHICULO
//Indicar el costo del vehiculo, teniendo en cuenta el seleccionado en la funcion identificarVehiculo. 

 function costoVehiculo(vehiculo) {
   switch (vehiculo) {
     case "Turbo":
      alert("Ud debe contratar un servicio de " + vehiculo + "que tendra un costo de $" + costoTurbo);
       return costoTurbo;
       
       break;
     case "Sencillo":
       return costoSencillo;
       break;
     case "Minimula":
       return costoMinimula;
       break;
     case "Consultar por otro vehiculo":
       return "Comuniquese con un asesor";
       break;
   }
 }

 costoVehiculo(vehiculo);



