// cambiarPagina.js

import { showSlides } from "./pages/inicio/inicio.js";
import { mostrarDenuncias } from "./pages/misquejas/misquejas.js";
import { enviar } from "./pages/servidores/servidores.js";

export function cambiarPagina(pagina) {
  var contenido = document.getElementById("contenido");
  fetch(`pages/${pagina}/${pagina}.html`)
    .then((response) => response.text())
    .then((html) => {
      switch (pagina) {
        case "inicio":
          contenido.innerHTML = html;
          showSlides();
          break;
        case "cabildo":
          contenido.innerHTML = html;
          console.log("cabildo");
          break;
        case "sidndicatura":
          contenido.innerHTML = html;
          break;
        case "servidores":1
          contenido.innerHTML = html;
          // Captura el formulario al cargar la página
          const btn = document.getElementById("enviar");
          btn.onclick = enviar;

          // Agrega un evento de escucha al enviar el formulario

          break;
        case "servicios":
          contenido.innerHTML = html;
          break;
          case "misquejas":
            contenido.innerHTML = html;
            mostrarDenuncias()
            break;
          
        case "transparencia":
          contenido.innerHTML = html;
          break;
        case "presupuestos":
          contenido.innerHTML = html;

          break;

        default:
          break;
      }
    })
    .catch((error) => {
      console.error("Error al cargar la página", error);
      contenido.innerHTML = "<h2>Error</h2><p>No se pudo cargar la página.</p>";
    });
}
