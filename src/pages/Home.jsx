import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const obtenerContactos = async () => {
    try {
      const respuesta = await fetch("https://playground.4geeks.com/contact/agendas/daniela/contacts");
      if(!respuesta.ok) {
        await crearAgenda()
        obtenerContactos()
      }
      const datos = await respuesta.json();
     dispatch({ type: "CARGAR_CONTACTOS", payload: datos.contacts });
     console.log(respuesta)
    } catch (error) {
      alert("Error cargando contactos");
    }
  };
console.log (store.contactos)

const crearAgenda = async () => {
  const response = await fetch ("https://playground.4geeks.com/contact/agendas/daniela", {
    method: "POST"
  })
}


const eliminarContacto = async (id) => {
    const confirmar = window.confirm("¿Eliminar este contacto?");
    if (!confirmar) return;

    await fetch(`https://playground.4geeks.com/contact/agendas/daniela/contacts/${id}`, { method: "DELETE" });
    dispatch({ type: "ELIMINAR_CONTACTO", payload: id });
  };

  useEffect(() => {
    obtenerContactos();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Lista de contactos</h2>
        <Link to="/agregar" className="btn btn-success">Nuevo contacto</Link>
      </div>
{store.contactos.length > 0 ? (
        store.contactos.map((contacto) => (
          <ContactCard key={contacto.id} contacto={contacto} onEliminar={eliminarContacto} />
        ))
      ) : (
        <p>No hay contactos disponibles.</p>
      )}
    </div>
  );
};
