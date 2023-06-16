
//*Variables


let cantCajas = 5;
let pesoCaja = 25;
let anchoCaja = 54; 
let largoCaja = 37; 
let altoCaja = 25;
let pesoVol = 0;
let pesoTotalFlete = 0;



//! INPUTS DE USUARIO
//Datos que registra el usuario necesarios para hacer los calculos de peso neto y peso volumen.
//Los valores se toman desde el input del html, por medio del id asignado.

/*
function getDatos() {
  cantCajas = document.getElementById("caja").value;
  pesoCaja = document.getElementById("peso").value;
  anchoCaja = document.getElementById("ancho-caja").value;
  largoCaja = document.getElementById("largo-caja").value;
  altoCaja = document.getElementById("alto-caja").value;

  return cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja;
}

getDatos();
*/


//! CALCULAR PESO VOLUMEN
//Resultado de multipliar las dimensiones de la unidad en mts
// (ancho X largo X alto de la caja) X factor de equivalencia
// El factor de equivalencia = 400kg / m3 

function pesoTotalVolumen(anchoCaja,largoCaja,altoCaja) {
   let factorEquivalencia = 400;
   pesoVol = (((anchoCaja/100) * (largoCaja/100) * (altoCaja/100)) * factorEquivalencia);
   pesoVol = Math.round(pesoVol);
   console.log("1. peso volumen caja= " + Math.round(pesoVol));
   
   return pesoVol;

};

pesoTotalVolumen(anchoCaja,largoCaja,altoCaja);

//!SELECCIONAR PESO 

function pesoFlete (pesoCaja,pesoVol,cantCajas) {
   console.log("2. Entro peso caja = " + pesoCaja);
   console.log("3. Entro peso volumen = " + pesoVol);
   if (pesoCaja > pesoVol) {
      pesoTotalFlete = pesoCaja * cantCajas;
   } else  {
      pesoTotalFlete = pesoVol * cantCajas;
   } console.log("4. peso flete= " + pesoTotalFlete);

   return pesoTotalFlete;

};

pesoFlete (pesoCaja,pesoVol,cantCajas);

