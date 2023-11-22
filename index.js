import { cambiarPagina } from "./cambiarPagina.js";
import { dibujarPoligono } from "./dibujarPoligono.js";
import "./menu.js";
import "./obtenerTemperatura.js";

var canvas = document.getElementById("miCanvas");
var coordsFooter = document.getElementById('coords')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 8;
var context = canvas.getContext("2d");

dibujarPoligono(context, canvas);
cambiarPagina('inicio')
function obtenerCoordenadas() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          document.getElementById("coords").innerHTML = `Latitud: ${latitud}, Longitud: ${longitud}`;
        },
        function(error) {
          mostrarError();
        }
      );
    } else {
      alert("La geolocalización no es compatible con este navegador.");
    }
  }

  function mostrarError() {
    document.getElementById("coords").innerHTML = "Permiso denegado";
  }
obtenerCoordenadas()