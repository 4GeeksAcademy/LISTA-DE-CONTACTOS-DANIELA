import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AgregarContacto = () => {
  const navegar = useNavigate();
  const [datos, setDatos] = useState({
    nombre_completo: "",
    correo: "",
    telefono: "",
    direccion: ""
  });


  const manejarCambio = (e) =>
    setDatos({ ...datos, [e.target.name]: e.target.value });

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const nuevoContacto = {
      name: datos.nombre_completo,
      email: datos.correo,
      phone: datos.telefono,
      address: datos.direccion,
    };

    try {
      const resp = await fetch("https://playground.4geeks.com/contact/agendas/daniela/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoContacto)
      });

      if (resp.ok) {
        alert("Contacto creado");
        navegar("/");
      } else {
        alert("Error al crear el contacto");
      }
    } catch (error) {
      alert("Error de servidor");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Agregar nuevo contacto</h2>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombre_completo"
          placeholder="Nombre completo"
          value={datos.nombre_completo}
          onChange={manejarCambio}
          className="form-control mb-2"
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={datos.correo}
          onChange={manejarCambio}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={datos.telefono}
          onChange={manejarCambio}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={datos.direccion}
          onChange={manejarCambio}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Guardar contacto
        </button>
      </form>
    </div>
  );
};
