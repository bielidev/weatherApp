import { Input } from "@/components/ui/input";
import { MapContainer, Marker, Pane, Popup, TileLayer } from "react-leaflet";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { divIcon } from "leaflet";
import { useWeatherToIcon } from "../hooks/useWeatherToIcon";

const MapPage = () => {
  const { loading, error, weather, forecast, setCity, fetchWeatherData } =
    useWeatherData();
  const { getIcon } = useWeatherToIcon();

  const addToFavs = () => {
    const currentFavs = JSON.parse(localStorage.getItem("favs") || "[]")

    if (!currentFavs.find(f => f.id === weather.id)) {
      currentFavs.push(weather)
    }
    

    localStorage.setItem("favs", JSON.stringify(currentFavs))
  }

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
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>
      {loading ? (
        <Skeleton className="h-[100%] w-full" />
      ) : error ? (
        <section className="flex flex-col justify-center items-center">
          <h2 className="p-4 text-3xl font-bold text-red-500 tracking-tight">
            Ocurrió un error. Busca de nuevo.
          </h2>

          <img src="https://http.cat/images/500.jpg" alt="error" />
        </section>
      ) : (
        weather?.coord?.lat &&
        weather?.coord?.lon && (
          <MapContainer
            center={[weather.coord.lat, weather.coord.lon]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[weather.coord.lat, weather.coord.lon]}
              icon={divIcon({ html: getIcon(weather) })}
            >
              <Popup>
                <div>
                  <Button onClick={addToFavs}>Add to favorites</Button>
                </div>
                {forecast.length > 0 && (
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">3-Day Forecast</h2>
                    <section className="flex gap-2">
                    {forecast
                      .slice(1, 4)
                      .map((day, index) => (
                        <div key={index} className={`${index > 0 ? 'border-l-2' : null} p-2 flex flex-col gap-2`}>
                          <span className="truncate m-0 font-semibold">
                            {new Date(day.dt_txt).toLocaleDateString()}
                          </span>
                          <span className="truncate">
                            Temp:<b>{day.main.temp}</b> °C
                          </span>
                          <span className="truncate">Condition: {day.weather[0].description}</span>
                          <br />
                        </div>
                      ))}
                    </section>
                  </div>
                )}
              </Popup>
            </Marker>
          </MapContainer>
        )
      )}
    </div>
  );
};

export default MapPage;
