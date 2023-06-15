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

let apiKey = aea26e52813982d4b13611732c43f397
let apiUrl = ''


// Not Complete and Confused 
function verifyZipcode() {
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
    }
}

// Not Complete and Confused 
function retrieveData() {

    axios.get()
    .then
    .catch

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


// Not Complete and Confused 
document.getElementById('getWeatherButton').addEventListener('click', () => {
verifyZipcode(zipcode.value)
})