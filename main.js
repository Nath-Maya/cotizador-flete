//?---VARIABLES

let cantCajas = 0;
let pesoCaja = 0;
let anchoCaja = 0;
let largoCaja = 0;
let altoCaja = 0;
let pesoVolCaja = 0;
let pesoRealFlete = 0;
let ciudadDestino = 0;
let ciudad = 0;
let nombreCiudad = 0;
let resultado = 0;
let costoCiudad = 0;


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
    pesoRealFlete = pesoCaja * cantCajas;
  } else {
    pesoRealFlete = pesoVolCaja * cantCajas;
  }

  return pesoRealFlete;
}

pesoFlete (pesoCaja,pesoVolCaja,cantCajas);


//!---- IDENTIFICAR CIUDAD------
//Se toma el valor de la lista desplegable del select.


function identificarCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  nombreCiudad = ciudad.options[ciudad.selectedIndex].value;
  return nombreCiudad;
}

identificarCiudad();



//!LISTADO DE CIUDADES Y PRECIO POR KG GUARDADAS EN EL LOCALSTORAGE
//Cada ciudad tiene su precio por kilogramo.

guardarLocalStorage();
//Guardo el listado de ciudades con sus respectivos precios en un array de objetos en el localstorage.
function guardarLocalStorage() {
  costoCiudad = [
    { indicador: "1", ciudad: "Medellin", costo: 895 },
    { indicador: "2", ciudad: "Cali", costo: 494 },
    { indicador: "3", ciudad: "Pereira", costo: 795 },
    { indicador: "4", ciudad: "Barranquilla", costo: 1250 },
  ];
  //convierto en texto JSON
  localStorage.setItem("costoCiudad", JSON.stringify(costoCiudad));
}

obtenerLocalStorage();
//obtengo los datos guardados inicialmente y los convierto en un array nuevamente
function obtenerLocalStorage() {
  let costoCiudad = JSON.parse(localStorage.getItem("costoCiudad"));
  console.log(costoCiudad)
  return costoCiudad;
}

//! OBTENER COSTO CIUDAD

function getCostoCiudad(nombreCiudad, costoCiudad) {
  resultado = costoCiudad.find((costo) => costo.indicador === nombreCiudad);
  resultado = resultado.costo;
  console.log(resultado)
  return resultado;
};

getCostoCiudad(nombreCiudad, costoCiudad);


//! ----EJECUTAR BOTON CONTINUAR-----
//Selecciono la clase del boton y le indico que con el evento click ejecute las funciones asignadas. 
const getDatosBoton = document.querySelector(".button");

getDatosBoton.addEventListener('click', botonContinuar);

function botonContinuar() {
  getDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  guardarLocalStorage();
  obtenerLocalStorage();
  identificarCiudad();
  getCostoCiudad(nombreCiudad, costoCiudad);

  //Mostrar alerts de libreria sweetalert cuando esten completos o incompletos los datos

  setTimeout(() => {
    console.log("entramos " + pesoRealFlete + " " + nombreCiudad )
    if(pesoRealFlete == 0 || nombreCiudad == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Es necesario que ingreses todos los datos',
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registro bien los datos",
        showConfirmButton: false,
        timer: 1000,
      });
    };
  }, 1000);
};







