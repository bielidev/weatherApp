import { Input } from "@/components/ui/input";
import { MapContainer, TileLayer } from "react-leaflet";
import { useWeatherData } from "../hooks/useWeatherData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const MapPage = () => {
  const { city, loading, error, weather, forecast, setCity, fetchWeatherData } =
    useWeatherData();

  return (
    <div className="flex-1">
      <form onSubmit={e => {e.preventDefault(); fetchWeatherData()}} className="flex gap-2 p-4">
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
        <h2 className="p-4 text-3xl font-bold text-red-500 tracking-tight">Ocurrió un error. Busca de nuevo.</h2>

        <img src="https://http.cat/images/500.jpg" alt="error" />
        </section>
      ) : (
          <MapContainer
          center={[weather?.coord?.lat ?? 41.390205, weather?.coord?.lon ?? 2.154007]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>    
        )}
      
    </div>
  );
};

export default MapPage;
