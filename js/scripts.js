/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById('miFormulario').addEventListener('submit', function (e) {
  e.preventDefault();
  
  Swal.fire({
    title: 'Formulario enviado',
    text: '¡Tu formulario se ha enviado con éxito!',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});

/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById('miFormulario').addEventListener('submit', function (e) {
  e.preventDefault();
  
  Swal.fire({
    title: 'Formulario enviado',
    text: '¡Tu formulario se ha enviado con éxito!',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const reloj = document.getElementById("hora");

  function darHora() {
      const now = new Date();
      reloj.textContent = `Hora actual: ${now.toLocaleTimeString()}`;
  }

  setInterval(darHora, 1000);
  darHora();
});
