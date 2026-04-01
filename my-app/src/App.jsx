import React from 'react'
import WeatherCard from './components/WeatherCard'

const App = () => {
  return (
    <div><div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      <WeatherCard />
    </div></div>
  )
}

export default App