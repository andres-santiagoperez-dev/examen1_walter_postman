import { UserModel } from "./vehiculos.model.js";

export const obtenerVehiculos = async (req, res) => {
  try {
    const results = await UserModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const crearVehiculo = async (req, res) => {
const datos = {
placa: req.body.placa,
marca: req.body.marca,
modelo: req.body.modelo,
anio: req.body.anio,
color: req.body.color,
kilometraje: req.body.kilometraje,
propietario: req.body.propietario,
telefono_propietario: req.body.telefono_propietario,
estado: req.body.estado,
fecha_ingreso: req.body.fecha_ingreso,
};
try {
const results = await UserModel.create(datos);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error en la insercion:${error}`,
});
}
};
export const borrarVehiculo = async (req, res) => {
try {
const results = await UserModel.delete(req.params.id_vehiculo);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al eliminar:${error}`,
});
}
};
export const actualizarVehiculo = async (req, res) => {
try {
const results = await UserModel.update(req.params.id_vehiculo, req.body);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error al actualizar ${error}`,
});
}
};
export const obtenerVehiculoId = async (req,res) => {
  try
  {
    const results = await UserModel.findById(req.params.id_vehiculo)
    res.json({results});
  }
  catch (error)
  {
    status:"error";
  }
}