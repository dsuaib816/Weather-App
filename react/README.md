# Weather App

A modern, responsive weather application built with React and Vite. Get current weather conditions for any city worldwide or use your current location.

## Features

- 🌍 Search weather by city name
- 📍 Get weather for current location
- 🌡️ Display temperature, humidity, wind speed, and more
- 🌅 Show sunrise and sunset times
- 📱 Responsive design for mobile and desktop
- 🎨 Beautiful gradient UI with weather icons

## Setup

### Prerequisites
- Node.js (v16 or higher)
- OpenWeatherMap API key (free at https://openweathermap.org/api)

### Installation

1. Clone the repository
2. Navigate to the react directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create environment file:
   ```bash
   cp .env.example .env
   ```

5. Add your OpenWeatherMap API key to `.env`:
   ```
   VITE_WEATHER_API_KEY=your_actual_api_key_here
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Setup

You can also run the application using Docker:

1. For development:
   ```bash
   docker-compose --profile dev up weather-app-dev
   ```

2. For production:
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

- React 19
- Vite
- CSS3 (Grid, Flexbox, Animations)
- OpenWeatherMap API
- Geolocation API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Note: Geolocation features require HTTPS in production environments.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
