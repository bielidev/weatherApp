import { Input } from "@/components/ui/input";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";
import { useHistoricData } from "../hooks/useHistoricData";

export default function Weather() {
  const {city, loading, error, weather, forecast, setCity, fetchWeatherData} = useWeatherData()
  const {fetchHistoricData, weather: historicData, loading: loadingHistoric, error: errorHistoric} = useHistoricData()

  const handleSearch = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Weather Tracker</h2>
      <form onSubmit={handleSearch} className="flex gap-4 w-3/6">
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleSearch}
        />
        <Button onClick={fetchWeatherData}>Search</Button>
        {weather && (<Button onClick={() => fetchHistoricData(weather.coord.lat, weather.coord.lon)}>Get Historic Data</Button>)}
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="flex gap-2">
        <div className="w-full">
        {weather && (
        <div className="my-4 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-600">
          <h2>Current Weather in {weather.name}</h2>
          <p>
            Temperature:{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
              {" "}
              {weather.main.temp}
            </span>
            °C
          </p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
      {forecast.length > 0 && (
        <div className="my-4 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-600">
          <h2>5-Day Forecast</h2>
          {forecast.map((day, index) => (
            <div key={index}>
              <p>Date: {new Date(day.dt_txt).toLocaleDateString()}</p>
              <p>
                Temp:<b>{day.main.temp}</b> °C
              </p>
              <p>Condition: {day.weather[0].description}</p>
              <br />
            </div>
          ))}
        </div>
      )}
        </div>
        <div className="w-full">

        </div>
      
      </div>
    </div>
  );
}