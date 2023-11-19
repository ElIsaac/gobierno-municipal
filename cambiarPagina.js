// cambiarPagina.js

import { showSlides } from "./pages/inicio/inicio.js";

export function cambiarPagina(pagina) {
    var contenido = document.getElementById('contenido');
    fetch(`pages/${pagina}/${pagina}.html`)
      .then((response) => response.text())
      .then((html) => {
        contenido.innerHTML = html;
        switch (pagina) {
          case "inicio":
            showSlides();
            break;
          case "cabildo":
            console.log('cabildo')
            break;
          case "sidndicatura":
            break;
          case "servidores":
            break;
          case "servicios":
            break;
          case "transparencia":
            break;
          case "presupuestos":
            break;
  
          default:
            break;
        }
      })
      .catch((error) => {
        console.error('Error al cargar la página', error);
        contenido.innerHTML = '<h2>Error</h2><p>No se pudo cargar la página.</p>';
      });
  }
  