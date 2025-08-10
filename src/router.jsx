import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { EditarContacto } from "./pages/EditarContacto.jsx";
import { AgregarContacto } from "./pages/AgregarContacto.jsx";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>¡Página no encontrada!</h1>}>
      <Route index element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/agregar" element={<AgregarContacto />} />
      <Route path="/editar/:id" element={<EditarContacto />} />
    </Route>
  )
);
