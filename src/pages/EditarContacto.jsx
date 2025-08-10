import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditarContacto = () => {
  const navegar = useNavigate();
  const { id } = useParams();

   const [datos, setDatos] = useState({
    nombre_completo: "",
    correo: "",
    telefono: "",
    direccion: ""
  });

  useEffect(() => {
    const obtenerContacto = async () => {
      try {
 const respuesta = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`);
        if (!respuesta.ok) throw new Error("No se pudo cargar el contacto");
        const data = await respuesta.json();
        setDatos({
nombre_completo: data.full_name,
          correo: data.email,
          telefono: data.phone,
          direccion: data.address
        });
      } catch (error) {
        console.error(error);
        alert("Error al cargar el contacto");
      }
    };
 obtenerContacto();
  }, [id]);
 const manejarCambio = (evento) => {
    setDatos({ ...datos, [evento.target.name]: evento.target.value });
  };
   const manejarEnvio = async (evento) => {
    evento.preventDefault();
     const contactoActualizado = {
      full_name: datos.nombre_completo,
      email: datos.correo,
      phone: datos.telefono,
      address: datos.direccion,
      agenda_slug: "ismain-agenda"
    };
 try {
      const respuesta = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactoActualizado)
      });
 if (respuesta.ok) {
        alert("Contacto actualizado correctamente");
        navegar("/");
      } else {
        alert("Error al actualizar el contacto");
      }
    } catch (error) {
      alert("Error de conexión");
      console.error(error);
    }
  };
return (
    <div className="container mt-5">
      <h2 className="mb-4">Editar contacto</h2>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombre_completo"
            className="form-control"
            value={datos.nombre_completo}
            onChange={manejarCambio}
            required
          />
        </div>

<div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            className="form-control"
            value={datos.correo}
            onChange={manejarCambio}
            required
          />
        </div>
 <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            name="telefono"
            className="form-control"
            value={datos.telefono}
            onChange={manejarCambio}
            required
          />
        </div>

<div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            value={datos.direccion}
            onChange={manejarCambio}
            required
          />
        </div>
<button type="submit" className="btn btn-primary">Guardar cambios</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navegar("/")}
        >
 Cancelar
        </button>
      </form>
    </div>
  );
};
