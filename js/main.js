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

                const iconImg = data.weather[0].icon;

                icon.src = `http://openweathermap.org/img/w/${iconImg}.png`;

                switch (iconImg) {

                    // Para el día
                    case '01d':
                        document.body.style.backgroundImage = "url(https://www.muralesyvinilos.com/murales/sol_Fotolia_18822283_S.jpg)";
                        break;

                    case '02d':
                        document.body.style.backgroundImage = "url(https://image.ondacero.es/clipping/cmsimages02/2013/09/22/32778743-029D-46FB-9BDD-CF6362348FFC/27.jpg)";
                        break;

                    case '03d':
                        document.body.style.backgroundImage = "url(https://i2.wp.com/www.bajotecho.com.do/wp-content/uploads/2021/04/NUBES-DISPERSAS.jpeg)";
                        break;

                    case '04d':
                        document.body.style.backgroundImage = "url(https://img.freepik.com/foto-gratis/fondo-soleado-cielo-azul-nubes-blancas-fondo-natural_328046-4563.jpg)";
                        break;

                    case '09d':
                        document.body.style.backgroundImage = "url(https://www.eltiempo.com/contenido/multimedia/fotos/bogota2/IMAGEN/IMAGEN-15185555-2.png)";
                        break;

                    case '10d':
                        document.body.style.backgroundImage = "url(http://www.fmdos.cl/wp-content/uploads/2017/05/So%C3%B1ar-lluvia-e1495057901701.jpg)";
                        break;

                    case '11d':
                        document.body.style.backgroundImage = "url(https://media.metrolatam.com/2020/06/26/shutterstock1271-487f3706777e39f161dcbf1ad24ccc56-1200x800.jpg)";
                        break;

                    case '13d':
                        document.body.style.backgroundImage = "url(https://cdns3.eltiempo.es/eltiempo/blog/noticias/2020/01/21181244/snow-4730565_1280-1024x682.jpg)";
                        break;

                    case '50d':
                        document.body.style.backgroundImage = "url(https://img.fotocommunity.com/neblina-bc983129-3dca-443b-bcd8-eb00a8dc03c2.jpg?height=1080)";
                        break;

                    default:
                        break;
                }

                console.log(iconImg);

                temperatura.innerHTML = `${Math.round(data.main.temp - 273.15)}ºC`;
                humedad.innerHTML = `Humedad: ${data.main.humidity}%`;
                wind.innerHTML = `Wind: ${data.wind.speed}mph`;

                document.getElementById("favicon").href = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            })
            .catch((err) => console.error(err));

    });
}