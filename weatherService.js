// weatherService.js
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const CITIES = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=5ecac315d8d8627f89298eab2e614174`);
    const data = await response.json();
    return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        condition: data.weather[0].main,
        };
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error.message);
    }
};

const fetchWeatherDataForCities = async () => {
    const weatherDataPromises = CITIES.map(fetchWeatherData);
    const results = await Promise.all(weatherDataPromises);
    return results.filter(data => data); // Filter out any undefined data
};

module.exports = { fetchWeatherDataForCities };
