import './WeatherCard.css'

function WeatherCard({ weather, city }) {
  if (!weather) return null

  const {
    name,
    state,
    main: { temp, feels_like, humidity, pressure },
    weather: [{ main: weatherMain, description, icon }],
    wind: { speed },
    visibility,
    sys: { country, sunrise, sunset },
  } = weather

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  const getLocationDisplay = () => {
    if (country === 'US' && state) {
      return `${name}, ${state}`
    } else if (country && country !== 'US') {
      return `${name}, ${country}`
    } else {
      return name
    }
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{getLocationDisplay()}</h2>
        <div className="weather-main">
          <img 
            src={getWeatherIcon(icon)} 
            alt={description}
            className="weather-icon"
          />
          <div className="temperature">
            <span className="temp">{Math.round(temp)}°C</span>
            <span className="description">{description}</span>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Feels like</span>
          <span className="value">{Math.round(feels_like)}°C</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Humidity</span>
          <span className="value">{humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Wind Speed</span>
          <span className="value">{speed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Pressure</span>
          <span className="value">{pressure} hPa</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Visibility</span>
          <span className="value">{(visibility / 1000).toFixed(1)} km</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Sunrise</span>
          <span className="value">{formatTime(sunrise)}</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Sunset</span>
          <span className="value">{formatTime(sunset)}</span>
        </div>
        
        <div className="detail-item">
          <span className="label">UV Index</span>
          <span className="value">{weather.uvi || 'N/A'}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard