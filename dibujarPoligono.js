export function dibujarPoligono(context, canvas) {
  

  // Establecer el color del contexto del canvas igual al color del footer
  context.fillStyle = "#333"; // Puedes ajustar el color según sea necesario

  var inicioX = 0;
  var inicioY = 0; // La altura del rectángulo
  var aristaX = canvas.width / 2;
  var aristaY = canvas.height / 1.2;
  var finX = canvas.width;
  var finY = canvas.height;

  context.beginPath();
  context.moveTo(inicioX, inicioY);
  context.lineTo(aristaX, aristaY);
  context.lineTo(finX, inicioY);
  context.lineTo(finX, finY);
  context.lineTo(inicioX, finY);
  context.closePath();
  context.fill(); // Rellenar el rectángulo
}
