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
let indexCiudad = 0;
let costoCiudad = 0;
let listaCiudades = 0;
let nombreCiudad = 0;
let totalCosto = 0;
let totalEnvio =0;

//* ----INPUTS DE USUARIO
//Datos que registra el usuario necesarios para hacer los calculos de peso neto y peso volumen.
//Los valores se toman desde el input del html, por medio del id asignado.

function capturaDatos() {
  cantCajas = document.getElementById("caja").value;
  pesoCaja = document.getElementById("peso").value;
  anchoCaja = document.getElementById("ancho-caja").value;
  largoCaja = document.getElementById("largo-caja").value;
  altoCaja = document.getElementById("alto-caja").value;
  console.log("datos: " + cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja);
  return cantCajas, pesoCaja, anchoCaja, largoCaja, altoCaja;
}

//! ----CALCULAR PESO VOLUMEN
//Resultado de multipliar las dimensiones de la unidad en mts
// (ancho X largo X alto de la caja) X factor de equivalencia
// El factor de equivalencia = 400kg / m3

function pesoVolumen(anchoCaja, largoCaja, altoCaja) {
  let factorEquivalencia = 400;
  pesoVolCaja =
    (anchoCaja / 100) *
    (largoCaja / 100) *
    (altoCaja / 100) *
    factorEquivalencia;
  pesoVolCaja = Math.round(pesoVolCaja);
  console.log("peso vol caja: " + pesoVolCaja);
  return pesoVolCaja;
}


//!----SELECCIONAR PESO
//Teniendo en cuenta el peso neto de la caja y el peso volumen definido, el cotizador funciona con el mayor de estos dos. Entonces se debe comparar para proceder a cotizar.

function pesoFlete(pesoCaja, pesoVolCaja, cantCajas) {
  if (pesoCaja > pesoVolCaja) {
    pesoRealFlete = pesoCaja * cantCajas;
  } else {
    pesoRealFlete = pesoVolCaja * cantCajas;
  }
  console.log("peso real: " + pesoRealFlete);
  return pesoRealFlete;
}


//!---- IDENTIFICAR CIUDAD------
//Se toma el valor de la lista desplegable del select.

function identificarCiudad() {
  ciudadDestino = document.getElementById("ciudad-envio").value;
  ciudad = document.getElementById("ciudad-envio");
  indexCiudad = ciudad.options[ciudad.selectedIndex].value;
  console.log("index ciudad: " + indexCiudad);
  return indexCiudad;
}


//!LISTADO DE CIUDADES Y PRECIO POR KG GUARDADAS EN EL LOCALSTORAGE
//Cada ciudad tiene su precio por kilogramo.

guardarLocalStorage();
//Guardo el listado de ciudades con sus respectivos precios en un array de objetos en el localstorage.
function guardarLocalStorage() {
  listaCiudades = [
    { indicador: "1", ciudad: "Medellin", costo: 895 },
    { indicador: "2", ciudad: "Cali", costo: 494 },
    { indicador: "3", ciudad: "Pereira", costo: 795 },
    { indicador: "4", ciudad: "Barranquilla", costo: 1250 },
  ];
  //convierto en texto JSON
  localStorage.setItem("listaCiudades", JSON.stringify(listaCiudades));
}

obtenerLocalStorage();
//obtengo los datos guardados inicialmente y los convierto en un array nuevamente
function obtenerLocalStorage() {
  let listaCiudades = JSON.parse(localStorage.getItem("listaCiudades"));
  return listaCiudades;
}

//! OBTENER COSTO CIUDAD

function getlistaCiudades(indexCiudad, listaCiudades) {
  costoCiudad = listaCiudades.find((costo) => costo.indicador === indexCiudad);
  costoCiudad = costoCiudad.costo;
  console.log("costo ciudad: " + costoCiudad);
  return costoCiudad;
}


//! OBTENER NOMBRE CIUDAD

function getNombreCiudad(indexCiudad, listaCiudades) {
  nombreCiudad = listaCiudades.find(
    (ciudad) => ciudad.indicador === indexCiudad
  );
  nombreCiudad = nombreCiudad.ciudad;
  console.log("nombre ciudad: " + nombreCiudad);
  return nombreCiudad;
};

//!FUNCION COSTO DEL ENVIO O FLETE
//Teniendo en cuenta el peso real del flete y el costo de acuerdo a la ciudad, se calcula el costo del envio: peso real flete x $ ciudad.

function costoEnvio(pesoRealFlete, costoCiudad) {
  totalCosto = pesoRealFlete* costoCiudad;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
 ;
  totalEnvio = formatter.format(totalCosto);
  console.log("total costo Envio: " + totalEnvio)
  return totalEnvio;
};


//! POST DATOS CON FETCH

//La recoleccion de los datos se hara con el boton y su asignacion de evento click.
const getDatosBoton = document.querySelector(".button");
getDatosBoton.addEventListener("click", getData);

const API_COTIZACIONES = "http://localhost:3000/posts";

async function getData(event) {
  event.preventDefault();
  //Llamar las funciones con sus valores par incluirlos en el objeto data que se enviaran a la API fetch con el metodo POST 
 

  capturaDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  identificarCiudad();
  getlistaCiudades(indexCiudad, listaCiudades);
  getNombreCiudad(indexCiudad, listaCiudades);
  costoEnvio(pesoRealFlete, costoCiudad) 

  const data = {
    cantCajas: cantCajas,
    pesoRealFlete: pesoRealFlete,
    nombreCiudad: nombreCiudad,
    costoCiudad: costoCiudad,
    totalEnvio: totalEnvio,
  };

  console.log("---La data para fetch es: ");
  console.log(data);

  // Realizar la solicitud POST a la API

  try {
  const response = await  fetch(API_COTIZACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      
        if (response.ok) {
          // La solicitud se completó correctamente
          console.log("Valores almacenados en la API.");
        } else {
          // Ocurrió un error en la solicitud
          console.log("Error al almacenar los valores en la API.");
        }
      }
      catch(error) {
        // Ocurrió un error en la comunicación con la API
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Por favor ingrese los datos completos",
        });
        console.log("Error de conexión con la API:", error);
      };
  };



//!---- FUNCION PARA CREAR COTIZACIONES------
// Crear elementos HTML para cada post, el cual incluira los datos de la cantidad de cajas que se enviaran, la ciudad y el costo total del envio.
function createPostElement(post) {
  const newElement = document.createElement("div");
  newElement.classList.add("item-cotizacion");
  newElement.innerHTML = `
  <div class="resultado">
  <p class="texto-resultado">Usted enviara <strong> ${post.cantCajas} </strong> cajas a la ciudad de <strong> ${post.nombreCiudad} </strong> , con un costo de <strong> ${post.totalEnvio} </strong>
  </p>
  <button class="eliminar" data-post-id='${post.id}'> Eliminar </button>
  </div> 
  `;
  document.querySelector(".resultado-cotizacion").appendChild(newElement);
}

// Función para obtener los posts de la API
async function getPosts() {

  try {
  const response = await fetch(API_COTIZACIONES);
  const data = await response.json();
      // Crear elementos HTML por cada post que realice a la API
      data.forEach((post) => createPostElement(post));

      const botonEliminar = document.querySelectorAll('.eliminar');
      botonEliminar.forEach((button) => {
        button.addEventListener('click', () => {
          const postId = button.dataset.postId;
          deletePost(postId);
        });
      });
    } catch(error) {
      console.log("Error al obtener los posts:", error);
    }
};

getPosts();


//!----MOSTRAR LISTADO DE COTIZACIONES
//mostrar o ocultar las cotizaciones realizadas. 

const listadoCotizaciones = document.querySelector('.button-mostrar'); //Selecciono el elemento, en este caso el boton, para agregar la interaccion.
const mostrarCotizaciones = document.querySelector('.resultado-cotizacion');//Selecciono el bloque de codigo que ocultare o mostrare.  


listadoCotizaciones.addEventListener('click', toggleCotizacion);
//Agrego una clase de css al elemento a ocultar/mostrar. Esta clase lo que hara es darle un display: none. 
function toggleCotizacion() {
  mostrarCotizaciones.classList.toggle('inactive'); 
};

//!----ELIMINAR UNA COTIZACION DEL LISTADO
//Utilizando fetch y el id de cada cotizacion se eliminara el elemento. 

function deletePost(postId) {
  const deleteUrl = `${API_COTIZACIONES}/${postId}`;
  fetch(deleteUrl, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        // Eliminación exitosa, puedes actualizar la vista eliminando el elemento del HTML
        const postElement = document.querySelector(`.eliminar[data-post-id="${postId}"]`).parentNode;
        postElement.parentNode.removeChild(postElement);
      } else {
        // Ocurrió un error al eliminar el post
        console.log('Error al eliminar el post');
      }
    })
    .catch((error) => {
      // Ocurrió un error en la comunicación con la API
      console.log('Error de conexión con la API:', error);
    });
};











