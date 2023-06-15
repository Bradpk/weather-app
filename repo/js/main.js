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

let data = null
let apiKey = 'aea26e52813982d4b13611732c43f397'
let apiUrl = 'http://api.openweathermap.org/'
let apiPath = '/data/2.5/weather'

// This is just for figuring out the API. The retrieveData function should be called elsewhere. 
window.addEventListener('load', init)
async function init () {
     data = await retrieveData(40503)
     console.log(data)
}

// Not Complete and Confused 
function verifyZipcode() {
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
    } 
}

// Not Complete and Confused 
async function retrieveData(zipcode) {
let weatherData = {}
try {
let options = {
    baseurl: apiUrl,
    params: {
        zip: zipcode,
        appid: apiKey
    }
}
weatherData = await axios.get(apiPath, options)
.then(function (response) {
    return response.data
})
.then(function (data){
    
})

} catch (err) {
    // check screenshot for more info on the below
//message.innerHTML = 'Error: ' + err + '.'
}
    return weatherData
}





//Object for storing data
let storage = {
    city: '',
    temperature: '',
    condition: '',
    otherInfo: '',
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
    appear()
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


function appear() {
    city.style.display = ''
    cityInfo.style.display = ''
    temperature.style.display = ''
    kelvin.style.display = ''
    fahrenheit.style.display = ''
    celsius.style.display = ''
    condition.style.display = ''
    conditionInfo.style.display = ''
    otherInfo.style.display = ''
    image.style.display = ''
}

console.log("hello world")

