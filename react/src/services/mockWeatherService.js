// Mock weather data service
const mockWeatherData = {
  'new york': {
    name: 'New York',
    main: {
      temp: 22,
      feels_like: 24,
      humidity: 65,
      pressure: 1013
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 3.2
    },
    visibility: 10000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3600,
      sunset: Math.floor(Date.now() / 1000) + 3600
    }
  },
  'london': {
    name: 'London',
    main: {
      temp: 15,
      feels_like: 13,
      humidity: 78,
      pressure: 1008
    },
    weather: [{
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    wind: {
      speed: 4.1
    },
    visibility: 8000,
    sys: {
      country: 'GB',
      sunrise: Math.floor(Date.now() / 1000) - 2800,
      sunset: Math.floor(Date.now() / 1000) + 4200
    }
  },
  'tokyo': {
    name: 'Tokyo',
    main: {
      temp: 28,
      feels_like: 31,
      humidity: 82,
      pressure: 1020
    },
    weather: [{
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    wind: {
      speed: 2.7
    },
    visibility: 7500,
    sys: {
      country: 'JP',
      sunrise: Math.floor(Date.now() / 1000) - 4200,
      sunset: Math.floor(Date.now() / 1000) + 2800
    }
  },
  'sydney': {
    name: 'Sydney',
    main: {
      temp: 19,
      feels_like: 18,
      humidity: 71,
      pressure: 1015
    },
    weather: [{
      main: 'Sun',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 5.8
    },
    visibility: 12000,
    sys: {
      country: 'AU',
      sunrise: Math.floor(Date.now() / 1000) - 5000,
      sunset: Math.floor(Date.now() / 1000) + 1800
    }
  },
  'paris': {
    name: 'Paris',
    main: {
      temp: 17,
      feels_like: 16,
      humidity: 68,
      pressure: 1011
    },
    weather: [{
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d'
    }],
    wind: {
      speed: 3.8
    },
    visibility: 9500,
    sys: {
      country: 'FR',
      sunrise: Math.floor(Date.now() / 1000) - 3200,
      sunset: Math.floor(Date.now() / 1000) + 3800
    }
  },
  'dubai': {
    name: 'Dubai',
    main: {
      temp: 35,
      feels_like: 42,
      humidity: 45,
      pressure: 1009
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 2.1
    },
    visibility: 15000,
    sys: {
      country: 'AE',
      sunrise: Math.floor(Date.now() / 1000) - 4800,
      sunset: Math.floor(Date.now() / 1000) + 2200
    }
  }
}

// Mock geolocation data (returns New York as default location)
const mockLocationWeather = {
  name: 'Current Location',
  main: {
    temp: 20,
    feels_like: 22,
    humidity: 62,
    pressure: 1012
  },
  weather: [{
    main: 'Clear',
    description: 'partly cloudy',
    icon: '02d'
  }],
  wind: {
    speed: 2.5
  },
  visibility: 11000,
  sys: {
    country: 'US',
    sunrise: Math.floor(Date.now() / 1000) - 3400,
    sunset: Math.floor(Date.now() / 1000) + 3600
  }
}

export const fetchMockWeather = async (cityName) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const normalizedCity = cityName.toLowerCase().trim()
  const weatherData = mockWeatherData[normalizedCity]
  
  if (!weatherData) {
    throw new Error('City not found')
  }
  
  return weatherData
}

export const fetchMockLocationWeather = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return mockLocationWeather
}

export const getAvailableCities = () => {
  return Object.keys(mockWeatherData).map(city => 
    city.charAt(0).toUpperCase() + city.slice(1)
  )
}