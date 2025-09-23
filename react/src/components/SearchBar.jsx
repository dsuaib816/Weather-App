import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
      setCity('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </div>
    </form>
  )
}

export default SearchBar