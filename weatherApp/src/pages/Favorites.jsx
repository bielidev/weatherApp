import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

const Favorites = () => {

  const [favs, setFavs] = useState([])


  const loadFavs = () => {
    const favorites = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(favorites)
  }


  useEffect(() => {
    loadFavs()
  }, [])

  

  const removeFav = (id) => {
    const newFavs = favs.filter(f => f.id !== id)
    localStorage.setItem("favs", JSON.stringify(newFavs))

    loadFavs()
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-">My fav Cities</h2>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Latitud</TableHead>
          <TableHead>Longitud</TableHead>
          <TableHead>Borrar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {favs.map((f) => (
          <TableRow key={f.id}>
            <TableCell>{f.id}</TableCell>
            <TableCell>{f.name}</TableCell>
            <TableCell>{f.coord.lat}</TableCell>
            <TableCell>{f.coord.lon}</TableCell>
            <TableCell><Button variant="destructive" onClick={() => removeFav(f.id)}>Borrar</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

export default Favorites;