// Wtf am I even doing
// Do I even want these to be global? 
let zipcodeInput = document.getElementById('zipcode')
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
let otherInfoContent = document.getElementById('otherInfoContent')

let apiKey = 'aea26e52813982d4b13611732c43f397'


// Not Complete and Confused 
function verifyZipcode(zipcode) {
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
        return false
    } else {
        return true
    }
}

// Not Complete and Confused 
async function retrieveData(zipcode) {
    try {
let weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`)
return weatherData.data
} catch (error) {
    console.log(error)
    throw ('Failed to retrieve data')
}
}





/*Object for storing data. Don't think this is needed anymore
let storage = {
    city: '',
    temperature: '',
    condition: '',
    otherInfo: '',
}
*/ 

// Not Complete and Confused 
function displayData(data) {

    city.textContent = `City: `
    cityInfo.textContent = `${data.name}`
    temperature.textContent = `Temperature: `
    kelvin.textContent = `Kelvin: ${Math.round(data.main.temp)}`
    fahrenheit.textContent = `Fahrenheit: ${Math.round(convertToFahrenheit(data.main.temp))}`
    celsius.textContent = `Celsius: ${Math.round(convertToCelsius(data.main.temp))}`
    condition.textContent = `Condition: `
    conditionInfo.textContent = `${data.weather[0].description}`
    otherInfo.textContent = `Other Info: `
    otherInfoContent.innerHTML = `Humidty  ${data.main.humidity}%<br>Pressure  ${data.main.pressure} hPA`
}


function convertToFahrenheit(kelvin) {
return (kelvin - 273.15) * (9/5) + 32
}


function convertToCelsius(kelvin) {
    return (kelvin - 273.15)
}


// Not Complete and Confused 
getWeatherButton.addEventListener('click', async() => {
    let zipcode = zipcodeInput.value.trim()
    if(verifyZipcode(zipcode) === true) {
        try {
            let data = await retrieveData(zipcode)
            displayData(data)
        } catch (error) {
            console.log(error)
            alert ('Failed to retrieve data')
        }
    }
})

/* Don't think any of this is needed
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
*/

