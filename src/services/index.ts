import { login } from "./auth/LoginController";
import {
  crearProducto,
  getAllProductos,
  editarProducto,
  borrarProducto,
} from "./productos/ProductoController";
import {
  crearUsuario,
  getAllUsuarios,
  editarUsuario,
  cambiarRol,
  borrarUsuario,
} from "./usuarios/UsuarioController";

export const API = {
  //Auth
  login,

  //Products
  crearProducto,
  getAllProductos,
  editarProducto,
  borrarProducto,

  //Users
  crearUsuario,
  getAllUsuarios,
  editarUsuario,
  cambiarRol,
  borrarUsuario,
};
