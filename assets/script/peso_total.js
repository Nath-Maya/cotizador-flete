//!CALCULAR PESO TOTAL 
//Calcular el peso total teniendo en cuenta el peso y cantidad de cajas, ingresado por el usuario
let pesoTotal = '';

function pesoTotalFlete(cantCajas,pesoCaja) {
  pesoTotal = cantCajas * pesoCaja;
  return pesoTotal;
  alert("El PESO TOTAL de su mercancia es de: " + pesoTotal + "kg");
}

pesoTotalFlete(cantCajas,pesoCaja);
