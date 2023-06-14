const axios = require('axios')

async function getWeatherData(zipCode) {
    try {
        const apiKey = 'aea26e52813982d4b13611732c43f397'
    const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}'

    const response = await axios.get(apiUrl)

    const weatherData = reponse.data 

    const temp = document.getElementById('test')
    const temperature = weatherData.main.temp
    temperature.innerHTML = temperature

    } catch (error) {

    }
}

