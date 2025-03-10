import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useWeatherData } from "../hooks/useWeatherData";

export default function Weather() {
  const { city, loading, error, weather, forecast, setCity, fetchWeatherData } =
    useWeatherData();

  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(sessionStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  const saveToHistory = (cityName) => {
    if (!cityName || searchHistory.includes(cityName)) return;
    const updatedHistory = [...searchHistory, cityName].slice(-5);
    setSearchHistory(updatedHistory);
    sessionStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    fetchWeatherData();
    saveToHistory(city);
  };

  const handleHistoryClick = (cityName) => {
    setCity(cityName);
    fetchWeatherData();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Weather Tracker</h2>

      <div className="p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Instructions for Entering a City
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-neutral-800 dark:text-neutral-200">
          <li>Click on the input field.</li>
          <li>Type the name of the city you want to search for.</li>
          <li>
            Press the <b>Search</b> button or hit <b>Enter</b> to get the
            weather data.
          </li>
          <li>
            Your recent searches will be saved in the history section. Click on
            a city name to quickly search for it again.
          </li>
        </ul>
        <p className="mt-3 text-blue-500 font-medium">
          🌍 Tip: Make sure you enter the correct city name to get accurate
          results!
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          {weather && (
            <div className="p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
              <h2 className="text-lg font-semibold">
                Current Weather in {weather.name}
              </h2>
              <p>
                Temperature: <b>{weather.main.temp}°C</b>
              </p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          )}

          {forecast.length > 0 && (
            <div className="p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
              <h2 className="text-lg font-semibold">5-Day Forecast</h2>
              {forecast.map((day, index) => (
                <div key={index} className="border-b border-gray-300 pb-2 mb-2">
                  <p>Date: {new Date(day.dt_txt).toLocaleDateString()}</p>
                  <p>
                    Temp: <b>{day.main.temp}°C</b>
                  </p>
                  <p>Condition: {day.weather[0].description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {searchHistory.length > 0 && (
            <div className="p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-700">
              <h3 className="text-lg font-semibold">Search History</h3>
              <ul className="list-none space-y-2">
                {searchHistory.map((cityName, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-neutral-800 dark:text-neutral-200 
                    hover:text-blue-500 hover:italic transition-all"
                    onClick={() => handleHistoryClick(cityName)}
                  >
                    {cityName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}