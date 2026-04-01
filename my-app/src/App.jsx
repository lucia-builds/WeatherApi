import React, { useEffect, useState, useCallback } from 'react'
import WeatherCard from './components/WeatherCard'
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
      const response = await axios.get(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
      setData(response.data);
    } catch (err) {
      setError("City not found or API error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather("Kolkata");
  }, [fetchWeather]);

  const handleSearch = (city) => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center p-4">
      <WeatherCard 
        data={data} 
        loading={loading} 
        error={error} 
        onSearch={handleSearch} 
      />
    </div>
  )
}

export default App
