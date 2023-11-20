export function enviar(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Función para obtener el valor de un campo o devolver nulo si está vacío
  const obtenerValor = function (id) {
    const elemento = document.getElementById(id);
    return elemento ? elemento.value : null;
  };

  // Obtiene los valores de los campos del formulario
  const id = `id_${Date.now()}`
  const datosCiudadano = {
    nombre: obtenerValor("nombre"),
    apaterno: obtenerValor("apaterno"),
    amaterno: obtenerValor("amaterno"),
    genero: document.querySelector('input[name="genero"]:checked')
      ? document.querySelector('input[name="genero"]:checked').value
      : null,
    direccion: obtenerValor("direccion"),
    num: obtenerValor("num"),
    col: obtenerValor("col"),
    correo: obtenerValor("correo"),
    tel: obtenerValor("telf"),
    cel: obtenerValor("cel"),
    edad: obtenerValor("edad"),
    estado_civil: obtenerValor("estado_civil"),
  };

  const datosServidor = {
    nombreServidor: obtenerValor("nombreServidor"),
    unidad: obtenerValor("unidad"),
    cargo: obtenerValor("cargo"),
    distrito: obtenerValor("distrito"),
  };

  const datosHechos = {
    fechaHora: obtenerValor("fechaHora"),
    hechos: obtenerValor("hechos"),
  };

  // Combina los datos en un objeto JSON
  const datosCompletos = {
    id,
    datosCiudadano: datosCiudadano,
    datosServidor: datosServidor,
    datosHechos: datosHechos,
  };

  // Verifica si ya hay datos en localStorage
  const datosGuardados = localStorage.getItem("datosDenuncia");

  if (datosGuardados) {
    // Si ya hay datos, conviértelos de JSON a objeto
    const datosPrevios = JSON.parse(datosGuardados);

    // Agrega el nuevo conjunto de datos al arreglo existente
    datosPrevios.push(datosCompletos);

    // Actualiza el localStorage con el arreglo actualizado
    localStorage.setItem("datosDenuncia", JSON.stringify(datosPrevios));
  } else {
    // Si no hay datos previos, crea un arreglo con el nuevo conjunto de datos
    const arr = [datosCompletos];

    // Almacena el arreglo en localStorage
    localStorage.setItem("datosDenuncia", JSON.stringify(arr));
  }

  // Puedes imprimir un mensaje en la consola si lo deseas
  console.log("Datos de la denuncia almacenados en localStorage:", JSON.stringify(datosCompletos));
}
