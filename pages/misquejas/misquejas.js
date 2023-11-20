export function mostrarDenuncias() {
  // Obtiene el arreglo de denuncias del localStorage
  const denunciasGuardadas =
    JSON.parse(localStorage.getItem("datosDenuncia")) || [];
  let contenido = document.getElementById("quejascont");

  // Selecciona el contenedor donde se mostrarán las denuncias
  const contenedorDenuncias = document.createElement("div");
  contenedorDenuncias.classList.add("galeria");

  // Recorre cada denuncia y crea elementos HTML
  denunciasGuardadas.forEach(function (denuncia) {
    // Crea el contenedor de la card
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.classList.add("galeria-item");

    // Crea el header con el nombre del servidor público
    const header = document.createElement("div");
    header.classList.add("card-header");
    header.textContent =
      "Servidor Público: " + denuncia.datosServidor.nombreServidor;

    // Crea el body con el motivo de la denuncia
    const body = document.createElement("div");
    body.classList.add("card-body");
    const fyh = document.createElement('p')
    const motivo = document.createElement('p')
    motivo.textContent="Motivo: " + denuncia.datosHechos.hechos;
    fyh.textContent = "Fecha y Hora: " + denuncia.datosHechos.fechaHora;
    body.appendChild(fyh)
    body.appendChild(motivo)

    // Crea el footer con la fecha y hora de la denuncia
    const footer = document.createElement("div");
    footer.classList.add("card-footer");

    const btn = document.createElement("button");
    btn.textContent = "eliminar";
    btn.classList.add("eliminar");
    btn.addEventListener("click", function () {
      eliminar(denuncia.id);
    });
    footer.appendChild(btn);
    // Agrega los elementos al contenedor de la card
    cardContainer.appendChild(header);
    cardContainer.appendChild(body);
    cardContainer.appendChild(footer);

    // Agrega la card al contenedor general
    contenedorDenuncias.appendChild(cardContainer);
  });

  contenido.appendChild(contenedorDenuncias);
}

function eliminarDenuncias() {
  let contenido = document.getElementById("quejascont");

  // Elimina todos los hijos del elemento 'contenido'
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
  const titulo = document.createElement("h1");
  titulo.textContent = "Quejas en curso";
  const hr = document.createElement("hr");
  contenido.appendChild(titulo);
  contenido.appendChild(hr);
}

function eliminar(id) {
  // Obtén los datos de localStorage
  const denunciasGuardadas =
    JSON.parse(localStorage.getItem("datosDenuncia")) || [];

  // Encuentra el índice del objeto con el ID especificado
  const nuevoArr = denunciasGuardadas.filter((denuncia) => denuncia.id !== id);
  localStorage.removeItem("datosDenuncia");
  // Verifica si se encontró el objeto con el ID
  localStorage.setItem("datosDenuncia", JSON.stringify(nuevoArr))

  eliminarDenuncias();
  mostrarDenuncias();
}
