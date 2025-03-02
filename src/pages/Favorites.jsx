import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favs") || "[]");

  return (
    <div className="p-4">
      <h2 className="text-2xl">Ciudades favoritas</h2>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Latitud</TableHead>
          <TableHead>Longitud</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {favorites.map((f) => (
          <TableRow key={f.id}>
            <TableCell>{f.id}</TableCell>
            <TableCell>{f.name}</TableCell>
            <TableCell>{f.coord.lat}</TableCell>
            <TableCell>{f.coord.lon}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
};

export default Favorites;
