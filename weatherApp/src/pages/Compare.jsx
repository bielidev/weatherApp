import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Input } from "@/components/ui/input";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import { useState } from "react";


export default function Compare() {
  const { city, loading, error, weather, forecast, setCity, fetchWeatherData } =
    useWeatherData();
const { city: city2, loading: loading2, error: error2, weather: weather2, forecast: forecast2, setCity: setCity2, fetchWeatherData: fetchWeatherData2 } =
    useWeatherData();

    const [compareData, setCompareData] = useState(null)
    const [chartConfig, setChartConfig] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleSearch2 = (e) => {
    e.preventDefault();
    setCity2(e.target.value);
  };

  const handleCompare = () => {
    if (!forecast || !forecast2 || forecast.length === 0 || forecast2.length === 0) return
    setChartConfig({
        [weather.id]: {
          label: weather.name,
          color: "#D1D5DB",
        },
        [weather2.id]: {
          label: weather2.name,
          color: "#4B5563",
        },
      })
    setCompareData(forecast.map((f, idx) => ({
        day: new Date(f.dt_txt).toLocaleDateString(),
        [weather.id]: f.main.temp,
        [weather2.id]: forecast2[idx].main.temp,
    })))

  }


  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Weather Comparison</h2>
      {forecast && forecast2 && forecast.length > 0 && forecast2.length > 0 && (<Button className="my-2" onClick={handleCompare}>Compare</Button>)}
      <div className="flex gap-8 w-full">
        <div className="w-full">
          <form onSubmit={handleSearch} className="flex gap-4">
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
          <div className="flex gap-2">
            <div className="w-full">
              {weather && (
                <div className="my-4 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-600">
                  <h2 className="text-lg font-semibold">Current Weather in {weather.name}</h2>
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
                  <h2 className="text-lg font-semibold">5-Day Forecast</h2>
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
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleSearch2} className="flex gap-4">
            <Input
              type="text"
              placeholder="Enter city"
              value={city2}
              onChange={handleSearch2}
            />
            <Button onClick={fetchWeatherData2}>Search</Button>
          </form>
          {loading2 && <p>Loading...</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          <div className="flex gap-2">
            <div className="w-full">
              {weather2 && (
                <div className="my-4 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-600">
                  <h2 className="text-lg font-semibold">Current Weather in {weather2.name}</h2>
                  <p>
                    Temperature:{" "}
                    <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                      {weather2.main.temp}
                    </span>
                    °C
                  </p>
                  <p>Condition: {weather2.weather[0].description}</p>
                </div>
              )}
              {forecast2.length > 0 && (
                <div className="my-4 p-4 border-2 border-gray-300 dark:border-gray-400 rounded-lg shadow-md bg-gray-100 dark:bg-gray-600">
                  <h2 className="text-lg font-semibold">5-Day Forecast</h2>
                  {forecast2.map((day, index) => (
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
          </div>
        </div>
      </div>
      {compareData && (
        <>
        <h2 className="text-2xl">Temp Comparison</h2>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={compareData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey={weather.id} fill={`var(--color-${weather.id})`} radius={4} />
          <Bar dataKey={weather2.id} fill={`var(--color-${weather2.id})`} radius={4} />
        </BarChart>
      </ChartContainer>
        </>
      )}
    </div>
  );
}