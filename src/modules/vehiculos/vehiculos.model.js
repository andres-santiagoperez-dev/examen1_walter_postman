import db from "../../config/dbconexion.js";
import bcrypt from "bcryptjs";

export const UserModel = {
  findALL: async () => {
    const sql = "SELECT * FROM vehiculos";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },

  findById: async (id_vehiculo) => {
    const sql = "SELECT * FROM vehiculos WHERE id_vehiculo=?";
  //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id_vehiculo]);
    return rows;
  },

  delete: async (id_vehiculo) => {
    const sql = "DELETE FROM vehiculos WHERE id_vehiculo=?";
    const [rows] = await db.query(sql, [id_vehiculo]);
    return rows;
  },

  create: async (data) => {
    let placa = data.placa;
    console.log(data);
  // validamos que el email no exista ! , el usuario lo validaremos por el
    const [placaExiste] = await db.query(
    "SELECT * FROM vehiculos WHERE placa = ?",
    [placa],
    );
    if (placaExiste.length > 0) {
      throw new Error("La placa ya está registrado");
      }
      if(data.fecha_ingreso=="")
      {
        const vehiculoNuevo = {
      placa:data.placa,
      marca:data.marca,
      modelo:data.modelo,
      anio:data.anio,
      color:data.color,
      kilometraje:data.kilometraje,
      propietario:data.propietario,
      telefono_propietario:data.telefono_propietario,
      estado:data.estado,
      fecha_ingreso:"NOW()"
    };
      }
      else
      {
        const vehiculoNuevo = {
      placa:data.placa,
      marca:data.marca,
      modelo:data.modelo,
      anio:data.anio,
      color:data.color,
      kilometraje:data.kilometraje,
      propietario:data.propietario,
      telefono_propietario:data.telefono_propietario,
      estado:data.estado,
      fecha_ingreso:data.fecha_ingreso
    };
      }
    
    const sql = "INSERT INTO vehiculos SET ?";
    const [rows] = await db.query(sql, [vehiculoNuevo]);
    return rows;
  },
  update: async (id_vehiculo, data) => {
    const sql = "UPDATE vehiculos SET ? WHERE id_vehiculo = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id_vehiculo]);
    return rows;
  },
};
