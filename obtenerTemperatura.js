document.addEventListener("DOMContentLoaded", function() {
    let city = 'Ciudad Juárez';
    let key = '5374d799563ffab1b478154715115401';
    let temp = document.getElementById("temperatura");
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric')
        .then(response => response.json())
        .then(data => {
            temp.innerHTML = `<p>Temperatura: ${Math.round(data.main.temp)}°C</p>`
        })
        .catch(error => console.error('Error al obtener los datos del clima:', error));
});