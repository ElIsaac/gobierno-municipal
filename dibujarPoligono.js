export function dibujarPoligono(context, canvas) {
  var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "rgba(88, 32, 53, 1)");
  gradient.addColorStop(0.91, "rgba(228, 82, 136, 1)");
  gradient.addColorStop(1, "rgba(190, 122, 146, 1)");

  // Establecer el color del contexto del canvas igual al color del footer
  context.fillStyle = gradient; // Puedes ajustar el color según sea necesario

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
