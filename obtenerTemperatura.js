document.addEventListener("DOMContentLoaded", function() {
    let city = 'Ciudad Juárez';
    let key = 'a331e8c73d083e1d3b17c04e1a89d689';
    let temp = document.getElementById("temperatura");
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric')
        .then(response => response.json())
        .then(data => {
            temp.innerHTML = `<p>Temperatura: ${Math.round(data.main.temp)}°C <img src="./images/cloud.png" width="26" alt=""></p>`
        })
        .catch(error => temp.innerHTML ='<p>Error al obtener los datos del clima</p>');
});