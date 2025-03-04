import axios from "axios";
import { useCallback, useState } from "react";

export const useWeatherList = () => {
  const [weatherList, setWeatherList] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const getWeatherList = useCallback(async (ids) => {
    setLoading(true)
    try {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${ids.join(",")}&appid=${apiKey}&units=metric`
      );
      
      console.log(currentWeatherResponse);

      const forecast = await Promise.allSettled(currentWeatherResponse.data.list.map(w => 
        axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?id=${w.id}&appid=${apiKey}&units=metric`
          )
      ))

      console.log(forecast)

      setWeatherList(currentWeatherResponse.data.list.map((w, idx) => ({...w, forecast: forecast[idx].value.data})));

    } catch {
       setError("Failed to fetch weather data. Please try again.");
    } finally {
       setLoading(false);
    }
  }, []);

  return {
    getWeatherList,
    weatherList,
    error,
    loading
  };
};
