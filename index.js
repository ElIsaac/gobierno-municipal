import { dibujarPoligono } from "./dibujarPoligono.js";
import "./menu.js";


var canvas = document.getElementById("miCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/8;
var context = canvas.getContext("2d");

dibujarPoligono(context,canvas);