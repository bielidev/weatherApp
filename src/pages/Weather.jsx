import { useWeatherData } from "../hooks/useWeatherData";

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

  return (
    <div>
      <h1>Weather Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <button onClick={fetchWeatherData}>Search</button>
      </div>
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


