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
  },
  // Virginia Cities
  'richmond': {
    name: 'Richmond',
    main: {
      temp: 24,
      feels_like: 26,
      humidity: 70,
      pressure: 1015
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 2.8
    },
    visibility: 9200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3400,
      sunset: Math.floor(Date.now() / 1000) + 3800
    }
  },
  'virginia beach': {
    name: 'Virginia Beach',
    main: {
      temp: 26,
      feels_like: 29,
      humidity: 75,
      pressure: 1012
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 4.5
    },
    visibility: 11000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3200,
      sunset: Math.floor(Date.now() / 1000) + 4000
    }
  },
  'norfolk': {
    name: 'Norfolk',
    main: {
      temp: 25,
      feels_like: 27,
      humidity: 72,
      pressure: 1014
    },
    weather: [{
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    wind: {
      speed: 3.9
    },
    visibility: 10500,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3300,
      sunset: Math.floor(Date.now() / 1000) + 3900
    }
  },
  'chesapeake': {
    name: 'Chesapeake',
    main: {
      temp: 23,
      feels_like: 25,
      humidity: 68,
      pressure: 1016
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 2.6
    },
    visibility: 12000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3350,
      sunset: Math.floor(Date.now() / 1000) + 3850
    }
  },
  'alexandria': {
    name: 'Alexandria',
    main: {
      temp: 21,
      feels_like: 23,
      humidity: 66,
      pressure: 1017
    },
    weather: [{
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d'
    }],
    wind: {
      speed: 3.1
    },
    visibility: 10800,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3450,
      sunset: Math.floor(Date.now() / 1000) + 3750
    }
  },
  'arlington': {
    name: 'Arlington',
    main: {
      temp: 22,
      feels_like: 24,
      humidity: 64,
      pressure: 1018
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 2.9
    },
    visibility: 11200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3440,
      sunset: Math.floor(Date.now() / 1000) + 3760
    }
  },
  'fairfax': {
    name: 'Fairfax',
    main: {
      temp: 20,
      feels_like: 22,
      humidity: 68,
      pressure: 1016
    },
    weather: [{
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d'
    }],
    wind: {
      speed: 3.3
    },
    visibility: 10500,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3460,
      sunset: Math.floor(Date.now() / 1000) + 3740
    }
  },
  'herndon': {
    name: 'Herndon',
    main: {
      temp: 19,
      feels_like: 21,
      humidity: 70,
      pressure: 1017
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 2.7
    },
    visibility: 12000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3470,
      sunset: Math.floor(Date.now() / 1000) + 3730
    }
  },
  'reston': {
    name: 'Reston',
    main: {
      temp: 20,
      feels_like: 22,
      humidity: 67,
      pressure: 1018
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 3.0
    },
    visibility: 11800,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3465,
      sunset: Math.floor(Date.now() / 1000) + 3735
    }
  },
  'falls church': {
    name: 'Falls Church',
    main: {
      temp: 21,
      feels_like: 23,
      humidity: 65,
      pressure: 1019
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 2.8
    },
    visibility: 11500,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3455,
      sunset: Math.floor(Date.now() / 1000) + 3745
    }
  },
  // Maryland Cities
  'baltimore': {
    name: 'Baltimore',
    main: {
      temp: 20,
      feels_like: 22,
      humidity: 73,
      pressure: 1018
    },
    weather: [{
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    wind: {
      speed: 3.7
    },
    visibility: 8500,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3500,
      sunset: Math.floor(Date.now() / 1000) + 3700
    }
  },
  'annapolis': {
    name: 'Annapolis',
    main: {
      temp: 22,
      feels_like: 24,
      humidity: 71,
      pressure: 1016
    },
    weather: [{
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    wind: {
      speed: 3.4
    },
    visibility: 9000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3480,
      sunset: Math.floor(Date.now() / 1000) + 3720
    }
  },
  'silver spring': {
    name: 'Silver Spring',
    main: {
      temp: 19,
      feels_like: 21,
      humidity: 69,
      pressure: 1019
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 2.9
    },
    visibility: 11500,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3460,
      sunset: Math.floor(Date.now() / 1000) + 3740
    }
  },
  'rockville': {
    name: 'Rockville',
    main: {
      temp: 18,
      feels_like: 20,
      humidity: 72,
      pressure: 1020
    },
    weather: [{
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }],
    wind: {
      speed: 3.2
    },
    visibility: 9800,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3470,
      sunset: Math.floor(Date.now() / 1000) + 3730
    }
  },
  'bethesda': {
    name: 'Bethesda',
    main: {
      temp: 20,
      feels_like: 22,
      humidity: 70,
      pressure: 1018
    },
    weather: [{
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }],
    wind: {
      speed: 2.6
    },
    visibility: 12200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3465,
      sunset: Math.floor(Date.now() / 1000) + 3735
    }
  },
  'wheaton': {
    name: 'Wheaton',
    main: {
      temp: 19,
      feels_like: 21,
      humidity: 73,
      pressure: 1017
    },
    weather: [{
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }],
    wind: {
      speed: 3.5
    },
    visibility: 8200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3475,
      sunset: Math.floor(Date.now() / 1000) + 3725
    }
  },
  // Washington DC
  'washington': {
    name: 'Washington',
    main: {
      temp: 21,
      feels_like: 23,
      humidity: 67,
      pressure: 1017
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 3.2
    },
    visibility: 10200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3450,
      sunset: Math.floor(Date.now() / 1000) + 3750
    }
  },
  'washington dc': {
    name: 'Washington DC',
    main: {
      temp: 21,
      feels_like: 23,
      humidity: 67,
      pressure: 1017
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 3.2
    },
    visibility: 10200,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 3450,
      sunset: Math.floor(Date.now() / 1000) + 3750
    }
  },
  // California Cities
  'los angeles': {
    name: 'Los Angeles',
    main: {
      temp: 27,
      feels_like: 30,
      humidity: 55,
      pressure: 1013
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 2.1
    },
    visibility: 14000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4600,
      sunset: Math.floor(Date.now() / 1000) + 2600
    }
  },
  'san francisco': {
    name: 'San Francisco',
    main: {
      temp: 18,
      feels_like: 19,
      humidity: 78,
      pressure: 1012
    },
    weather: [{
      main: 'Clouds',
      description: 'foggy',
      icon: '50d'
    }],
    wind: {
      speed: 4.8
    },
    visibility: 6000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4800,
      sunset: Math.floor(Date.now() / 1000) + 2400
    }
  },
  'san diego': {
    name: 'San Diego',
    main: {
      temp: 24,
      feels_like: 26,
      humidity: 65,
      pressure: 1015
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 3.5
    },
    visibility: 16000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4700,
      sunset: Math.floor(Date.now() / 1000) + 2500
    }
  },
  'sacramento': {
    name: 'Sacramento',
    main: {
      temp: 29,
      feels_like: 32,
      humidity: 45,
      pressure: 1018
    },
    weather: [{
      main: 'Clear',
      description: 'sunny',
      icon: '01d'
    }],
    wind: {
      speed: 2.3
    },
    visibility: 15000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4900,
      sunset: Math.floor(Date.now() / 1000) + 2300
    }
  },
  'fresno': {
    name: 'Fresno',
    main: {
      temp: 32,
      feels_like: 35,
      humidity: 35,
      pressure: 1016
    },
    weather: [{
      main: 'Clear',
      description: 'hot and sunny',
      icon: '01d'
    }],
    wind: {
      speed: 1.8
    },
    visibility: 12000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4850,
      sunset: Math.floor(Date.now() / 1000) + 2350
    }
  },
  'oakland': {
    name: 'Oakland',
    main: {
      temp: 20,
      feels_like: 21,
      humidity: 72,
      pressure: 1014
    },
    weather: [{
      main: 'Clouds',
      description: 'partly cloudy',
      icon: '02d'
    }],
    wind: {
      speed: 3.8
    },
    visibility: 11000,
    sys: {
      country: 'US',
      sunrise: Math.floor(Date.now() / 1000) - 4800,
      sunset: Math.floor(Date.now() / 1000) + 2400
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
  // Return a curated selection of cities to display as chips
  const featuredCities = [
    'washington dc', 'arlington', 'alexandria', 'fairfax', 'bethesda',
    'richmond', 'virginia beach', 'baltimore', 'new york', 'los angeles'
  ]
  
  return featuredCities.map(city => {
    const cityData = mockWeatherData[city]
    return cityData ? cityData.name : city.charAt(0).toUpperCase() + city.slice(1)
  })
}

export const getAllAvailableCities = () => {
  // Return all cities for search functionality
  return Object.keys(mockWeatherData).map(city => 
    mockWeatherData[city].name
  )
}