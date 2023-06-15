let zipcode = document.getElementById('zipcode')
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


// Not Working
function verifyZipcode(zipcode) {
    zipcode = zipcode.trim()
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
    }
}

// Not Working
function retrieveData(zipcode) {
}

// Not Working 
function displayData() {
}


// Not Working
document.getElementById('getWeatherButton').addEventListener('click', function() {
verifyZipcode(zipcode.value)
})