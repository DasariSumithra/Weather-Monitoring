const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Route to fetch current weather data
app.post('/current-weather', async (req, res) => {
    const city = req.body.city; // Get city from user input
    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
        res.json(weatherResponse.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Serve index.html on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
