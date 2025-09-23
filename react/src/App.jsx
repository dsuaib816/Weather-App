import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('')

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key'
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(
        `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error(response.status === 404 ? 'City not found' : 'Weather data unavailable')
      }

      const data = await response.json()
      setWeather(data)
      setCity(cityName)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const fetchWeatherByLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser')
      return
    }

    setLoading(true)
    setError('')

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const response = await fetch(
            `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          )
          
          if (!response.ok) {
            throw new Error('Weather data unavailable')
          }

          const data = await response.json()
          setWeather(data)
          setCity(data.name)
        } catch (err) {
          setError(err.message)
          setWeather(null)
        } finally {
          setLoading(false)
        }
      },
      () => {
        setError('Unable to retrieve location')
        setLoading(false)
      }
    )
  }

  useEffect(() => {
    // Load weather for user's location on app start
    fetchWeatherByLocation()
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <SearchBar onSearch={fetchWeather} />
        
        <button 
          className="location-btn"
          onClick={fetchWeatherByLocation}
          disabled={loading}
        >
          📍 Use Current Location
        </button>

        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
            {error.includes('demo_key') && (
              <p>Please add your OpenWeatherMap API key to continue.</p>
            )}
          </div>
        )}
        
        {weather && !loading && (
          <WeatherCard weather={weather} city={city} />
        )}
      </div>
    </div>
  )
}

export default App
