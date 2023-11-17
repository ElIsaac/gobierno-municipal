// cambiarPagina.js
export function cambiarPagina(pagina) {
    var contenido = document.getElementById('contenido');
    fetch(`pages/${pagina}.html`)
      .then((response) => response.text())
      .then((html) => {
        contenido.innerHTML = html;
      })
      .catch((error) => {
        console.error('Error al cargar la página', error);
        contenido.innerHTML = '<h2>Error</h2><p>No se pudo cargar la página.</p>';
      });
  }
  