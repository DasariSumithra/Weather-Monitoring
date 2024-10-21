// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Your OpenWeatherMap API key
const API_KEY = process.env.API_KEY || '5ecac315d8d8627f89298eab2e614174'; // Use env variable or default for testing

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to fetch current weather data
app.get('/current-weather', async (req, res) => {
  const city = req.query.city || 'Delhi'; // Default to Delhi if no city is provided
  try {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    res.json(weatherResponse.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
