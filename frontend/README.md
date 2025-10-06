# Weather App

A responsive weather application built with React and Vite using mocked weather data for demonstration purposes.

## Features

- Search weather by city name
- Display temperature, humidity, wind speed, pressure, and visibility
- Show sunrise and sunset times
- Responsive design for all devices
- Mock data service with popular cities worldwide

## Setup

**Prerequisites:** Node.js (v16 or higher)

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

The app runs at `http://localhost:5173`

## Docker Setup

Run with Docker:
```bash
docker-compose up weather-app
```

## Usage

- **Search by city**: Enter a city name in the search bar and press Enter or click the search button
- **Current location**: Click the "📍 Use Current Location" button to get weather for your current position
- **Weather details**: View comprehensive weather information including temperature, humidity, wind speed, pressure, visibility, sunrise, and sunset times

## API

This app uses the OpenWeatherMap API to fetch weather data. You'll need a free API key from [OpenWeatherMap](https://openweathermap.org/api).

## Technologies Used

- React 19, Vite, CSS3
- Mock weather data service

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
