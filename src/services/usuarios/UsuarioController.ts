import { isAxiosError } from "axios";
import { api } from "../api";
import { toast } from "react-toastify";
import { Usuario } from "../../models/UsuariosModel";

/**
 * @description
 * Crea un nuevo usuario en el sistema enviando los datos al servidor
 *
 * @param {Usuario} usuario - El objeto que contiene los datos del nuevo usuario a crear
 * @returns {Promise<Usuario>} El usuario creado con éxito
 */
export async function crearUsuario(usuario: Usuario) {
  try {
    const { data } = await api.post<Usuario>("usuarios", usuario);

    toast.success("Usuario creado con exito");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}

/**
 * @description
 * Obtiene todos los usuarios desde el servidor
 *
 * @returns {Promise<Usuario[]>} Una lista de todos los usuarios registrados
 */
export async function getAllUsuarios() {
  try {
    const { data } = await api.get<Usuario[]>("Usuarios");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.message);
    }
  }
}

/**
 * @description
 * Actualiza la información de un usuario existente
 *
 * @param {number} id - El ID del usuario a actualizar
 * @param {Usuario} actualizarUsuario - El objeto con los nuevos datos del usuario
 * @returns {Promise<Usuario>} El usuario actualizado
 */
export async function editarUsuario(id: number, actualizarUsuario: Usuario) {
  try {
    const { data } = await api.patch<Usuario>(
      `usuarios/${id}`,
      actualizarUsuario
    );
    toast.info(`Se ha actualizado el usuario`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}

/**
 * @description
 * Cambia el rol de un usuario existente
 *
 * @param {number} id - El ID del usuario cuyo rol se va a cambiar
 * @returns {Promise<Usuario>} El usuario con el rol actualizado
 */
export async function cambiarRol(id: number) {
  try {
    const { data } = await api.patch<Usuario>(`usuarios/role/${id}`);
    toast.info(`Se cambió el rol del usuario con éxito`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}

/**
 * @description
 * Elimina un usuario del sistema por su ID
 *
 * @param {number} id - El ID del usuario a eliminar
 * @returns {Promise<string>} El mensaje de confirmación de eliminación
 */
export async function borrarUsuario(id: number) {
  try {
    const { data } = await api.delete<string>(`usuarios/${id}`);
    toast.dark(`Usuario eliminado con éxito`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}
