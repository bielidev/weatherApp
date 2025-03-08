import { useState, useCallback } from "react";
import axios from "axios";

export const useHistoricData = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setWeather(null)
    setLoading(false)
    setError("")
  }

  const fetchHistoricData = useCallback(async (lat, lon) => {
    setLoading(true);
    setError("");
    try {

     const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

      const currentWeatherResponse = await axios.get(
        `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&appid=${apiKey}`
      );
      setWeather(currentWeatherResponse.data);
      console.log(currentWeatherResponse);
    } catch {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    weather,
    loading,
    error,
    fetchHistoricData,
    reset
  }
}