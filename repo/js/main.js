// Wtf am I even doing
// Do I even want these to be global? 
let zipcode = document.getElementById('zipcode').value
let getWeatherButton = document.getElementById('getWeatherButton')
let city = document.getElementById('city')
let cityInfo = document.getElementById('cityInfo')
let temperature = document.getElementById('temperature')
let kelvin = document.getElementById('kelvin')
let fahrenheit = document.getElementById('fahrenheit')
let celsius = document.getElementById('celsius')
let condition = document.getElementById('condition')
let conditionInfo = document.getElementById('conditionInfo')
let otherInfo = document.getElementById('otherInfo')
let image = document.getElementById('image')

let apiKey = 'aea26e52813982d4b13611732c43f397'
let apiUrl = 'http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}'


// Not Complete and Confused 
function verifyZipcode(zipcode) {
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
    } 
}

// Not Complete and Confused 
function retrieveData(verifyZipcode) {
let axios = require('axios')
    axios.get('http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}')
        .then(function (response) { })
        .catch(function (response) { })

    let storage = {
        city: '',
        temperature: '',
        condition: '',
        otherInfo: '',
    }
}

// Not Complete and Confused 
function displayData() {

    city.textContent = ''
    cityInfo.textContent = ''
    temperature.textContent = ''
    kelvin.textContent = ''
    fahrenheit.textContent = ''
    celsius.textContent = ''
    condition.textContent = ''
    conditionInfo.textContent = ''
    otherInfo.textContent = ''
    image.textContent = ''
}

function convertFahrenheit(kelvin) {
return (kelvin - 273.15) * (9/5) + 32
}

function convertCelsius(kelvin) {
    return (kelvin - 273.15)
}


// Not Complete and Confused 
getWeatherButton.addEventListener('click', () => {
    verifyZipcode(zipcode.value)
})

function hide() {
    city.style.display = 'none'
    cityInfo.style.display = 'none'
    temperature.style.display = 'none'
    kelvin.style.display = 'none'
    fahrenheit.style.display = 'none'
    celsius.style.display = 'none'
    condition.style.display = 'none'
    conditionInfo.style.display = 'none'
    otherInfo.style.display = 'none'
    image.style.display = 'none'
}
hide()