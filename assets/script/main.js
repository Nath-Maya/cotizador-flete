

//*COTIZADOR DE FLETES
//El cliente ingresara la cantidad de cajas que desea enviar y su tamano, se definira en que vehiculo, de acuerdo a su capacidad, puede utilizar y cuanto seria el costo.


//!CAPTURAR CIUDAD, CANTIDAD Y PESO DE LAS CAJAS
//Datos que debe ingresar el usuario. 
let cantCajas = prompt('Ingrese cantidad de cajas 📦');
let pesoCaja = prompt('Ingrese el peso de cada caja (en kg): ‼️📦');
let ciudadEnvio = prompt('Indique a que ciudad desea enviar la mercancia 🏙:');


//!COSTO DE ENVIO

function costoEnvio(vehiculo,ciudadEnvio) {
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
}

costoEnvio(vehiculo,ciudadEnvio);



