const zipcode = document.getElementById('zipcode')
const getWeatherButton = document.getElementById('getWeatherButton')
const city = document.getElementById('city')
const cityInfo = document.getElementById('cityInfo')
const temperature = document.getElementById('temperature')
const kelvin = document.getElementById('kelvin')
const fahrenheit = document.getElementById('fahrenheit')
const celsius = document.getElementById('celsius')
const condition = document.getElementById('condition')
const conditionInfo = document.getElementById('conditionInfo')
const otherInfo = document.getElementById('otherInfo')
const image = document.getElementById('image')

const apiKey = aea26e52813982d4b13611732c43f397
const apiUrl = ''



function verifyZipcode(zipcode) {
    zipcode = zipcode.trim()
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert('Invalid Zip Code')
    }
}


function retrieveData(zipcode) {
}


function displayData() {
}



document.getElementById('getWeatherButton').addEventListener('click', function(){
})
