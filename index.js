import express from "express";
import cors from "cors";
import rutaVehiculos from "./src/modules/vehiculos/vehiculos.routes.js";

const app = express();
const PORT = 4100;

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", rutaVehiculos);
app.listen(PORT, () => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});
