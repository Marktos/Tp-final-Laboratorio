import { isAxiosError } from "axios";
import { api } from "../api";
import { toast } from "react-toastify";
import { Producto } from "../../models/ProductoModel";

/**
 * @description
 * Crea un nuevo producto enviando los datos al servidor
 *
 * @param {Producto} producto - El objeto producto que contiene los datos a crear
 * @returns {Promise<Producto>} El producto creado con éxito
 */
export async function crearProducto(producto: Producto) {
  try {
    const { data } = await api.post<Producto>("productos", producto);

    toast.success("Producto creado con exito");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}

/**
 * @description
 * Obtiene todos los productos desde el servidor
 *
 * @returns {Promise<Producto[]>} Una lista de todos los productos
 */
export async function getAllProductos() {
  try {
    const { data } = await api.get<Producto[]>("productos");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.message);
    }
  }
}

/**
 * @description
 * Actualiza un producto existente en el servidor
 *
 * @param {number} id - El ID del producto a actualizar
 * @param {Producto} actualizarProducto - El objeto con los datos actualizados del producto
 * @returns {Promise<Producto>} El producto actualizado
 */
export async function editarProducto(id: number, actualizarProducto: Producto) {
  try {
    const { data } = await api.patch<Producto>(
      `productos/${id}`,
      actualizarProducto
    );
    toast.info(`Producto actualizado con éxito`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}

/**
 * @description
 * Elimina un producto del servidor por su ID
 *
 * @param {number} id - El ID del producto a eliminar
 * @returns {Promise<string>} El mensaje de confirmación de eliminación
 */
export async function borrarProducto(id: number) {
  try {
    const { data } = await api.delete<string>(`productos/${id}`);
    toast.dark(`Producto eliminado con éxito`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}
