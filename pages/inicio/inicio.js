let slideIndex = 0;


export function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-item");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
  return;
}


export function initMap() {
  // Inicializar el mapa
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 }, // Latitud y longitud inicial
    zoom: 8, // Nivel de zoom
  });

  // Obtener la ubicación actual del usuario
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Colocar un marcador en la ubicación actual
      var marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: "Tu ubicación actual",
      });

      // Definir el punto de destino (puedes ajustar estas coordenadas)
      var destination = { lat: 37.7749, lng: -122.4194 }; // Por ejemplo, San Francisco, CA

      // Colocar un marcador en el destino
      var destinationMarker = new google.maps.Marker({
        position: destination,
        map: map,
        title: "Punto de destino",
      });

      // Crear una solicitud de dirección
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);

      // Configurar la solicitud de dirección
      var request = {
        origin: currentLocation,
        destination: destination,
        travelMode: "DRIVING", // Puedes cambiar el modo de transporte según tus necesidades
      };

      // Obtener y mostrar la ruta en el mapa
      directionsService.route(request, function (response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("No se pudo calcular la ruta: " + status);
        }
      });
    },
    function () {
      handleLocationError(true, infoWindow, map.getCenter());
    }
  );
}

export function handleLocationError(
  browserHasGeolocation,
  infoWindow,
  currentLocation
) {
  infoWindow.setPosition(currentLocation);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: La geolocalización ha fallado."
      : "Error: Tu navegador no soporta geolocalización."
  );
  infoWindow.open(map);
}
