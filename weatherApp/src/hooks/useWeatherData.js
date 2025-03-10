import { useState, useCallback } from "react";
import axios from "axios";

export const useWeatherData = () => {
    const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setCity("")
    setWeather(null)
    setForecast([])
    setLoading(false)
    setError("")
  }

  const fetchWeatherData = useCallback(async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {

     const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(currentWeatherResponse.data);
      console.log(currentWeatherResponse);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecast(
        forecastResponse.data.list.filter((_, index) => index % 8 === 0)
      );
        console.log(forecastResponse);
    } catch {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [city]);

  return {
    weather,
    forecast,
    loading,
    error,
    city,
    setCity,
    fetchWeatherData,
    reset
  }
}