import { Router } from "express";

import * as vehiculosCtr from "./vehiculos.controller.js";


const router = Router();

router.get("/vehiculos", vehiculosCtr.obtenerVehiculos);
router.get("/vehiculos/:id_vehiculo", vehiculosCtr.obtenerVehiculoId);
router.post("/vehiculos", vehiculosCtr.crearVehiculo);
router.delete("/vehiculos/:id_vehiculo", vehiculosCtr.borrarVehiculo);
router.put("/vehiculos/:id_vehiculo", vehiculosCtr.actualizarVehiculo);

export default router;