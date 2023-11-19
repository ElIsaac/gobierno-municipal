import { cambiarPagina } from "./cambiarPagina.js";
import { dibujarPoligono } from "./dibujarPoligono.js";
import "./menu.js";
import "./obtenerTemperatura.js";

var canvas = document.getElementById("miCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 8;
var context = canvas.getContext("2d");

dibujarPoligono(context, canvas);
cambiarPagina('inicio')


  /*
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-item");
  console.log(slides)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}
  */
