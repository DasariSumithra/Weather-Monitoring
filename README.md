Real-Time Weather Monitoring System

Overview

This project implements a Node.js-based system that tracks real-time weather conditions for various cities using the OpenWeatherMap API. The system allows users to manually input the city name and get weather details. The frontend is simple, displaying the weather details in a structured format, and the system has configurable alerts.

Key Features

Live Weather Data: Retrieves up-to-date weather information for a specific city entered by the user.
Custom Alerts: Optionally notify users when certain weather conditions (e.g., temperature thresholds) are met.
Console Alerts: Instant weather updates displayed on the command line or the server log.
City Input: The user can manually input a city name to retrieve the weather conditions.
Frontend: Basic UI that displays weather information including temperature, weather condition, wind speed, etc.

Design Approach

Modular Architecture: The system is designed with clear separation of concerns, making it easy to extend and maintain.
Node.js and Express: The backend is built using Node.js with Express for handling routes.
Environment Variables: Sensitive information, such as API keys, is managed via environment variables to protect security.
Frontend: Simple HTML, CSS, and JavaScript interface for users to input city names and view weather details.

Prerequisites

To run the weather monitoring application, you need the following:

Prerequisites
Node.js (v14.0.0 or newer)
NPM (Node Package Manager)
An OpenWeatherMap API Key
Git (for version control and deployment)
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/DasariSumithra/Weather-Monitoring.git
cd Weather-Monitoring
2. Install Dependencies
After cloning, install the necessary Node.js packages by running:

bash
Copy code
npm install
3. Create the .env File
Create a .env file in the root directory with the following content. Replace your_api_key_here with your actual OpenWeatherMap API key:

makefile
Copy code
API_KEY=your_api_key_here
PORT=3000
4. Start the Application
To start the application, run the following command:

bash
Copy code
npm start
This will launch the application, and you can access it in the browser at http://localhost:3000.

5. Configure Environment Variables in Vercel (for Deployment)
If you deploy the project to Vercel, make sure to add your environment variables in the Vercel dashboard:

API_KEY: Your OpenWeatherMap API key.
PORT: The port on which the server will run.

6. Deployment to Vercel
Login to Vercel and link your GitHub repository.
Set up environment variables on Vercel.
Deploy: Once you've linked the repository, Vercel will automatically deploy your project from the main branch.

Frontend
The frontend consists of a simple HTML form where the user can input a city name and get weather details.

Sample Frontend Output
When the user enters a city name (e.g., "London") and submits the form, the application will display the following weather details:

Location: London
Main Weather: Clear
Description: clear sky
Temperature: 9.51°C
Feels Like: 9.05°C
Humidity: 92%
This data is dynamically retrieved from the OpenWeatherMap API based on the user’s input.

Configuration Options
API_KEY: OpenWeatherMap API key set in the .env file or Vercel environment.
City Name: Users input the city manually through the frontend form.
Extending the System
Add More Data: Modify the backend to fetch more detailed weather information.
Improve Alerts: Extend the system to notify users via SMS or email.
UI Enhancements: Use frontend frameworks like Bootstrap or Tailwind CSS for a more visually appealing user interface.

Troubleshooting
Ensure the API key is correctly entered in the .env file.
If data isn't being fetched, verify the OpenWeatherMap API is reachable and the API key is valid.
If styles aren't loading, confirm that your CSS file is properly linked in the HTML file.
