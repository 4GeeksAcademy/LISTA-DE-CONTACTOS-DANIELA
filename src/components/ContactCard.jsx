import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({contacto, onEliminar}) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{contacto.full_name}</h5>
                <p className="card-text">{contacto.phone}</p>
                <p className="card-text">{contacto.email}</p>
                <p className="card-text">{contacto.address}</p>
                 <div className="d-flex justify-content-end">
                 <Link to={`/editar/${contacto.id}`} className="btn btn-warning btn-sm me-2">
                 Editar
                </Link>
                <button
                className="btn btn-danger btn-sm"
                onClick={() => onEliminar(contacto.id)}
                >
                    Eliminar
                </button>
                 </div>
            </div>
        </div>
    );
};