const axios = require('axios')

async function getWeatherData(zipCode) {
    try {
        const apiKey = 'aea26e52813982d4b13611732c43f397'
    const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aea26e52813982d4b13611732c43f397'

    const response = await axios.get(apiUrl)

    const weatherData = reponse.data 

    const temp = document.getElementById('temp')
    const temperature = weatherData.main.temp

    temp.innerHTML = 'g'

    } catch (error) {

    }
}
console.log('Hello')
