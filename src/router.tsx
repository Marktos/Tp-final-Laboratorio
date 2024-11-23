import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Layout";
import Login from "./routes/Login";
import CrearProductosSection from "./routes/productos/CrearProductoSection";
import BorrarProductosSection from "./routes/productos/BorrarProductoSection";
import ProductosSection from "./routes/productos/ProductosSection";
import UsuariosSection from "./routes/usuarios/UsuariosSection";
import CrearUsuarioSection from "./routes/usuarios/CrearUsuarioSection";
import BorrarUsuariosSection from "./routes/usuarios/BorrarUsuarioSection";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<Root />}>
          <Route path="/home" element={<ProductosSection />} />
          <Route path="/crearProducto" element={<CrearProductosSection />} />
          <Route path="/borrarProductos" element={<BorrarProductosSection />} />

          <Route path="/usuarios" element={<UsuariosSection />} />
          <Route path="/crearUsuario" element={<CrearUsuarioSection />} />
          <Route path="/borrarUsuarios" element={<BorrarUsuariosSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
