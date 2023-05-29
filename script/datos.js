

let cantCajas = document.getElementById("cantidad-cajas");
let pesoCaja = document.getElementById("peso-cajas");

console.log(cantCajas,pesoCaja);





const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(nombre, email)
    .then(() => {
      window.location.href = "/screens/registro_completado.html";
    })
    .catch((err) => console.log(err));
});