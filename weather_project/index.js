
const apikey = "b5241457036d4b3ed7062a07616fc0b0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#search input");
const searchbtn = document.querySelector("#btn");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const resposne = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await resposne.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "℃ ";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "img/cloud.jpeg";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "img/clear.png";

    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "img/mist.jpeg";

    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "img/rain.png";

    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "img/drizzling.webp";

    }
}

// const city= searchbox.value
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

// checkweather(searchbox.value);