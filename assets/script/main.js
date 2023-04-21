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

//Capacidad de los vehiculos en volumen mt3
const maxVolumenTurbo = 25;
const maxVolumenSencillo = 45;
const maxVolumenMinimula = 70;


//! CALCULANDO PESO TOTAL

function pesoTotalFlete(cantCajas) {
   const pesoTotal = cantCajas * pesoCaja;
   alert("Peso total de la mercancia a enviar es de " + pesoTotal +"kg");
   return pesoTotal;
}



//!CALCULAR VOLUMEN TOTAL

function volumenTotalFlete(anchoCaja,largoCaja,altoCaja,cantCajas) {
   let convertirMts= 1000000;
   const volumenCaja = ((anchoCaja * largoCaja) * altoCaja)/convertirMts;
   const volumenTotal = volumenCaja * cantCajas;
   alert("Volumen total de la mercancia a enviar es de " + volumenTotal + "mts3");
   return volumenTotal;
}


