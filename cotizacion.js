
/*
//! ----EJECUTAR BOTON CONTINUAR-----
//Selecciono la clase del boton y le indico que con el evento click ejecute las funciones asignadas. 
const getDatosBoton = document.querySelector(".button");

getDatosBoton.addEventListener('click', botonContinuar);

function botonContinuar(event) {
  event.preventDefault()
  getDatos();
  pesoVolumen(anchoCaja, largoCaja, altoCaja);
  pesoFlete(pesoCaja, pesoVolCaja, cantCajas);
  guardarLocalStorage();
  obtenerLocalStorage();
  identificarCiudad();
  getlistaCiudades(indexCiudad, listaCiudades);
  */
  //Mostrar alerts de libreria sweetalert cuando esten completos o incompletos los datos
  /*  
  setTimeout(() => {
    if(pesoRealFlete == 0 || indexCiudad == 0) {
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
  */