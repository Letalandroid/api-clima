const icon = document.getElementById("icon");
const temperatura = document.getElementById("temperatura");
const humedad = document.getElementById("humedad");
const wind = document.getElementById("wind");

if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function (position) {

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=8351422c7984532daa1d25e46f5f2b30`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                console.log(data);

                icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                temperatura.innerHTML = `${Math.round(data.main.temp - 273.15)}ºC`;
                humedad.innerHTML = `Humedad: ${data.main.humidity}%`;
                wind.innerHTML = `Wind: ${data.wind.speed}mph`;

            })
            .catch((err) => console.error(err));

    });
} else {

    document.getElementsByClassName("container")[0].innerHTML = "Porfavor activar la geolocalización."

}