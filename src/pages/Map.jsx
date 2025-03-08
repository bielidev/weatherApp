import { Input } from "@/components/ui/input";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { divIcon } from "leaflet";
import { useWeatherToIcon } from "../hooks/useWeatherToIcon";
import { useEffect, useState } from "react";
import { useWeatherList } from "../hooks/useWeatherList";

const MapPage = () => {
  const {
    city,
    loading,
    error,
    weather,
    forecast,
    setCity,
    fetchWeatherData,
    reset,
  } = useWeatherData();
  const { getIcon } = useWeatherToIcon();
  const { getWeatherList, weatherList, error: listError, loading: listLoading } = useWeatherList();
  const [favs, setFavs] = useState(null)

  const loadFavs = () => {
    const favsLocal = JSON.parse(localStorage.getItem("favs") ?? "[]")
    setFavs(favsLocal)
  }

  const addToFavs = () => {
    const currentFavs = JSON.parse(localStorage.getItem("favs") || "[]");

    if (!currentFavs.find((f) => f.id === weather.id)) {
      currentFavs.push(weather);
    }

    localStorage.setItem("favs", JSON.stringify(currentFavs));

    loadFavs()
  };

  useEffect(() => {
    if (!favs) {
      loadFavs()
      return
    }
console.log(favs)
    if (favs.length === 0) return

    getWeatherList(favs.map(f => f.id));
  }, [getWeatherList, favs]);

  return (
    <div className="flex-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeatherData();
        }}
        className="flex gap-2 p-4"
      >
        <Input
          type="text"
          placeholder="Busca una ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {weather && (
          <Button type="button" variant="destructive" onClick={reset}>
            Borrar
          </Button>
        )}
        <Button type="submit">Search</Button>
      </form>
      {loading || listLoading ? (
        <Skeleton className="h-[100%] w-full" />
      ) : error || listError ? (
        <section className="flex flex-col justify-center items-center">
          <h2 className="p-4 text-3xl font-bold text-red-500 tracking-tight">
            Ocurrió un error. Busca de nuevo.
          </h2>

          <img src="https://http.cat/images/500.jpg" alt="error" />
        </section>
      ) : (
        <MapContainer
          center={[
            weather?.coord?.lat || 40.416775,
            weather?.coord?.lon || -3.70379,
          ]}
          zoom={weather ? 13 : 6}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {weather && (
            <Marker
              position={[weather.coord.lat, weather.coord.lon]}
              icon={divIcon({ html: getIcon(weather) })}
            >
              <Popup>
                {forecast.length > 0 && (
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">3-Day Forecast</h2>
                    <section className="flex gap-2">
                      {forecast.slice(1, 4).map((day, index) => (
                        <div
                          key={index}
                          className={`${
                            index > 0 ? "border-l-2" : null
                          } p-2 flex flex-col gap-2`}
                        >
                          <span className="truncate m-0 font-semibold">
                            {new Date(day.dt_txt).toLocaleDateString()}
                          </span>
                          <span className="truncate">
                            Temp:<b>{day.main.temp}</b> °C
                          </span>
                          <span className="truncate">
                            Condition: {day.weather[0].description}
                          </span>
                          <br />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
                <div className="flex justify-center">
                  <Button onClick={addToFavs}>Add to favorites</Button>
                </div>
              </Popup>
            </Marker>
          )}
          {weatherList.map((fav) => (
            <Marker
              key={fav.id}
              position={[fav.coord.lat, fav.coord.lon]}
              icon={divIcon({ html: getIcon(fav) })}
            >
              <Popup>
                {fav.forecast.list.length > 0 && (
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">3-Day Forecast</h2>
                    <section className="flex gap-2">
                      {fav.forecast.list.slice(1, 4).map((day, index) => (
                        <div
                          key={index}
                          className={`${
                            index > 0 ? "border-l-2" : null
                          } p-2 flex flex-col gap-2`}
                        >
                          <span className="truncate m-0 font-semibold">
                            {new Date(day.dt_txt).toLocaleDateString()}
                          </span>
                          <span className="truncate">
                            Temp:<b>{day.main.temp}</b> °C
                          </span>
                          <span className="truncate">
                            Condition: {day.weather[0].description}
                          </span>
                          <br />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default MapPage;