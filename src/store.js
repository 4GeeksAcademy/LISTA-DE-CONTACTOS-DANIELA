export const initialState = {
      contactos: [] // ahora usamos contactos, no todos
};

export const reducer = (state, action) => {
      switch (action.type) {
            case "CARGAR_CONTACTOS":
                  return { ...state, contactos: action.payload };

            case "AGREGAR_CONTACTO":
                  return { ...state, contactos: [...state.contactos, action.payload] };

            case "ELIMINAR_CONTACTO":
                  return {
                        ...state,
                        contactos: state.contactos.filter((c) => c.id !== action.payload)
                  };

            case "EDITAR_CONTACTO":
                  return {
                        ...state,
                        contactos: state.contactos.map((c) =>
                              c.id === action.payload.id ? action.payload : c
                        )
                  };

            default:
                  return state;
      }
};
                         