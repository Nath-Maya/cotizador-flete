//?---VARIABLES

let cantCajas = 0;
let pesoCaja = 0;
let anchoCaja = 0;
let largoCaja = 0;
let altoCaja = 0;
let pesoVolCaja = 0;
let pesoTotalFlete = 0;

//* -----INPUTS DE USUARIO
//Datos que registra el usuario necesarios para hacer los calculos de peso neto y peso volumen.
//Los valores se toman desde el input del html, por medio del id asignado.

function getDatos() {
  cantCajas = document.getElementById("caja").value;
  pesoCaja = document.getElementById("peso").value;
  anchoCaja = document.getElementById("ancho-caja").value;
  largoCaja = document.getElementById("largo-caja").value;
  altoCaja = document.getElementById("alto-caja").value;

  return cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja;
}

getDatos();


//! ----CALCULAR PESO VOLUMEN
//Resultado de multipliar las dimensiones de la unidad en mts
// (ancho X largo X alto de la caja) X factor de equivalencia
// El factor de equivalencia = 400kg / m3

function pesoVolumen(anchoCaja, largoCaja, altoCaja) {
  let factorEquivalencia = 400;
  pesoVolCaja =
    ((anchoCaja / 100) *
    (largoCaja / 100) *
    (altoCaja / 100)) *
    factorEquivalencia;
    pesoVolCaja = Math.round(pesoVolCaja);

  return pesoVolCaja;
}

pesoVolumen(anchoCaja, largoCaja, altoCaja);

//!----SELECCIONAR PESO
//Teniendo en cuenta el peso neto de la caja y el peso volumen definido, el cotizador funciona con el mayor de estos dos. Entonces se debe comparar para proceder a cotizar.

function pesoFlete(pesoCaja, pesoVolCaja, cantCajas) {
  if (pesoCaja > pesoVolCaja) {
    pesoTotalFlete = pesoCaja * cantCajas;
  } else {
    pesoTotalFlete = pesoVolCaja * cantCajas;
  }

  return pesoTotalFlete;
}

pesoFlete (pesoCaja,pesoVolCaja,cantCajas);


//!---- IDENTIFICAR CIUDAD------
//Se toma el valor de la lista desplegable del select.

let ciudadDestino = 0;
let ciudad = 0;
let nombreCiudad = 0;

function identificarCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  nombreCiudad = ciudad.options[ciudad.selectedIndex].text;
  return nombreCiudad;
}

identificarCiudad();



//! ----EJECUTAR BOTON CONTINUAR-----

const getDatosBoton = document.querySelector(".button");

getDatosBoton.addEventListener("click", botonContinuar);

function botonContinuar() {
  getDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  identificarCiudad();

  console.log(pesoTotalFlete,nombreCiudad);

};

