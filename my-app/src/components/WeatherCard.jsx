const WeatherCard = () => {

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 w-full max-w-sm text-white">
      
    
      <h2 className="text-2xl font-bold text-center mb-2">
  Kolkata
      </h2>

      <div className="flex justify-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/038/143/521/small/ai-generated-realistic-cloud-cut-out-cloud-on-transparent-background-png.png" alt="weather icon" />
      </div>

      
      <h1 className="text-5xl font-extrabold text-center">
        25°C
      </h1>

     
      <p className="text-center capitalize mb-4"> mostly clear
      </p>

    
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <p>Feels Like</p>
          <p className="font-semibold">
            20°C
          </p>
        </div>

        <div className="bg-white/10 p-3 rounded-lg text-center">
          <p>Humidity</p>
          <p className="font-semibold">
            60%
          </p>
        </div>

        <div className="bg-white/10 p-3 rounded-lg text-center">
          <p>Wind</p>
          <p className="font-semibold">
            10 km/h
          </p>
        </div>

        <div className="bg-white/10 p-3 rounded-lg text-center">
          <p>Condition</p>
          <p className="font-semibold">
            Clear
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;