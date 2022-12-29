
const weatherApi = {
    key:"769606a5dee96d3aef73e9344dd5d2c5",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById(
'input-box')
searchInputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value)
    }
})
//get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWatherReport)
}
// show weather report
function showWatherReport(weather){
    console.log(weather)
    let city = document.getElementById('city')
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temprature = document.getElementById('temp')
    temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMax = document.getElementById('min-max')
    minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`

    let weatherType = document.getElementById('weather')
    weatherType.innerHTML = `${weather.weather[0].main}`

    let date = document.getElementById('date')
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate)
    if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url(images/Haze.jpg)"

    }else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url(images/cloud.jpg)"
    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url(images/rain.jpg)"
    }else if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url(images/clearweather.jpg)"
    }else if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url(images/smoke.jpg)"
    }

}

//Date manage
function dateManage(dateArg){
    let days = ['Sunday', 'Monday', 'Tueaday', 'Wednesday', 'Thrusday', 'Friday','Saturday']

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'septemper', 'Octuber', 'November', 'December']

    let year = dateArg.getFullYear()
    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()
    let day = days[dateArg.getDay()]

    return `${date} ${month} ${day} ${year}`
}

