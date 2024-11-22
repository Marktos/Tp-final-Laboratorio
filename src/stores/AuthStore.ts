import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { API } from "../services";
import { Credenciales } from "../models/Auth";
import { useProductosStore } from "./ProductoStore";
import { useUsuariosStore } from "./UsuarioStore";

type AuthStore = {
  login: (credenciales: Credenciales) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>()(
  devtools(() => ({
    //Guardo el token en el localStorage
    login: async (credenciales: Credenciales) => {
      const response = await API.login(credenciales);

      if (response) {
        const token = response.token;
        localStorage.setItem("token", token);
      }
    },
    logout: async () => {
      localStorage.removeItem("token");
      localStorage.removeItem("defaultAlertShown");

      // Resetea todos los stores
      const productoStore = useProductosStore.getState();
      const usuarioStore = useUsuariosStore.getState();
      productoStore.reset();
      usuarioStore.reset();
    },
  }))
);
