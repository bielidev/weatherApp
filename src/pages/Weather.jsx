import { Input } from "@/components/ui/input";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";

const containerStyle = {
  width: "100%",
  margin: "50px auto", // Adds 50px margin to the top and centers horizontally
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
};

export default function Weather() {
  const {city, loading, error, weather, forecast, setCity, fetchWeatherData} = useWeatherData()

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
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div style={containerStyle}>
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
        <div style={containerStyle}>
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
  );
}


