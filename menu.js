import { cambiarPagina } from "./cambiarPagina.js";

document.addEventListener("DOMContentLoaded", function () {
  const menuNav = document.getElementById("menuNav");

  // Asignar manejadores de eventos a los enlaces del menú
  const links = menuNav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar la acción por defecto del enlace
      const { id } = link;
      cambiarPagina(id);
    });
  });
});
