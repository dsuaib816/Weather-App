import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import LoadingSpinner from './components/LoadingSpinner'
import { fetchMockWeather, fetchMockLocationWeather, getAvailableCities } from './services/mockWeatherService'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('')

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return

    setLoading(true)
    setError('')

    try {
      const data = await fetchMockWeather(cityName)
      setWeather(data)
      setCity(cityName)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const fetchWeatherByLocation = async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchMockLocationWeather()
      setWeather(data)
      setCity(data.name)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Load weather for user's location on app start
    fetchWeatherByLocation()
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <p className="app-subtitle">🎭 Demo with Mock Weather Data</p>

        <SearchBar onSearch={fetchWeather} />
        
        <button 
          className="location-btn"
          onClick={fetchWeatherByLocation}
          disabled={loading}
        >
          📍 Use Current Location
        </button>

        <div className="available-cities">
          <h3>Try these cities:</h3>
          <div className="city-chips">
            {getAvailableCities().map(cityName => (
              <button
                key={cityName}
                className="city-chip"
                onClick={() => fetchWeather(cityName)}
                disabled={loading}
              >
                {cityName}
              </button>
            ))}
          </div>
        </div>

        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <p>Try one of the available cities above.</p>
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
