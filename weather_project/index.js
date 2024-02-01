
const apikey = "b5241457036d4b3ed7062a07616fc0b0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#search input");
const searchbtn = document.querySelector("#btn");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(!response.status){
        // document.querySelector(".error").style.display = "  ";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();
   
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
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
    document.querySelector(".weather").style.display="block";

    }
   

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

