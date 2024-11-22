import { isAxiosError } from "axios";
import { Credenciales } from "../../models/Auth";
import { AuthRespuesta } from "../../models/AuthResponse";
import { api } from "../api";
import { toast } from "react-toastify";

/**
 * @description
 * Realiza el proceso de login enviando las credenciales al servidor y obteniendo la respuesta.
 *
 * @param {Credenciales} credenciales - Las credenciales del usuario para autenticarse (generalmente, usuario y contraseña)
 * @returns {Promise<AuthRespuesta>} La respuesta de autenticación que incluye el token de acceso si el login es exitoso
 */
export async function login(credenciales: Credenciales) {
  try {
    const { data } = await api.post<AuthRespuesta>("/auth/login", credenciales);

    toast.success("Login Successfully");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      toast.error(error.response.data.message);
    }
  }
}
