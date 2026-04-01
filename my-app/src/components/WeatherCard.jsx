import React, { useState } from "react";

const WeatherCard = ({ data, loading, error, onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearchClick = () => {
    if (input.trim()) {
      onSearch(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  if (loading) {
    return (
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full max-w-sm text-white text-center">
        <h2 className="text-xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full max-w-sm text-white">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city name..."
            className="flex-1 bg-white/20 text-white placeholder-white/70 rounded-xl p-3 border border-white/30 outline-none focus:bg-white/30 transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-xl transition-all shadow-lg active:scale-95"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-300 text-sm text-center font-medium bg-red-900/20 py-1 rounded-lg">{error}</p>}
      </div>

      {data ? (
        <>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-1">{data.name}</h2>
            <p className="text-white/80">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          </div>

          <div className="flex justify-center my-4">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt={data.weather[0].description}
              className="w-32 h-32 drop-shadow-lg"
            />
          </div>

          <h1 className="text-6xl font-extrabold text-center mb-1">{Math.round(data.main.temp)}°C</h1>
          <p className="text-center capitalize text-xl mb-6 font-medium">{data.weather[0].description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-white/70 mb-1 text-xs uppercase tracking-wider">Feels Like</p>
              <p className="font-bold text-lg">{Math.round(data.main.feels_like)}°C</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-white/70 mb-1 text-xs uppercase tracking-wider">Humidity</p>
              <p className="font-bold text-lg">{data.main.humidity}%</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-white/70 mb-1 text-xs uppercase tracking-wider">Wind Speed</p>
              <p className="font-bold text-lg">{data.wind.speed} m/s</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-white/70 mb-1 text-xs uppercase tracking-wider">Pressure</p>
              <p className="font-bold text-lg">{data.main.pressure} hPa</p>
            </div>
          </div>
        </>
      ) : !loading && !error && (
        <p className="text-center italic opacity-70">Enter a city to see weather data</p>
      )}
    </div>
  );
};

export default WeatherCard;
