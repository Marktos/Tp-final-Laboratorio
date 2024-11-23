import { create } from "zustand";
import { API } from "../services";
import { Usuario } from "../models/UsuariosModel";

type ProductoStore = {
  allUsuarios: Usuario[];
  isEditing: boolean;
  editingUser: Usuario;

  crearUsuario: (producto: Usuario) => Promise<void>;
  getAllUsuarios: () => Promise<void>;
  editUser: (id: number, product: Usuario) => Promise<void>;
  cambiarRol: (id: number) => Promise<void>;
  borrarUsuario: (id: number) => Promise<void>;
  reset: () => void;
};

export const useUsuariosStore = create<ProductoStore>((set, get) => ({
  allUsuarios: [] as Usuario[],
  isEditing: false,
  editingUser: {} as Usuario,

  // Creo un usuario
  crearUsuario: async (usuario: Usuario) => {
    try {
      const response = await API.crearUsuario(usuario);

      // Devuelve solo el usuarios si la respuesta es válida y lo guardo en el store
      if (response) {
        set((state) => ({
          allUsuarios: [...state.allUsuarios, response],
        }));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Guardo todos los usuarios
  getAllUsuarios: async () => {
    try {
      const response = await API.getAllUsuarios();

      // Devuelve solo los usuarios si la respuesta es válida y lo guardo en el store
      if (response) {
        set({ allUsuarios: response });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  //Retirada por muchos bugs
  editUser: async (id: number, updatedUser: Usuario) => {
    try {
      const response = await API.editarUsuario(id, updatedUser);

      // Reinicio las variables de edición
      if (response) {
        get().isEditing = false;
        get().editingUser = {} as Usuario;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Cambia el rol a un usuario
  cambiarRol: async (id: number) => {
    try {
      const newUser = await API.cambiarRol(id);

      if (newUser) {
        const currentAllUsers = get().allUsuarios;
        const newAllUsers = currentAllUsers.map((user) =>
          user.id === id ? newUser : user
        );
        set({ allUsuarios: newAllUsers });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Borra un usuario
  borrarUsuario: async (id: number) => {
    try {
      const response = await API.borrarUsuario(id);
      // Filtra los usuarios
      if (response) {
        const currentAllProducts = get().allUsuarios;
        const newAllProducts = currentAllProducts.filter(
          (product) => product.id !== id
        );
        set({ allUsuarios: newAllProducts });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
  reset: () => set({ allUsuarios: [] }), // Reinicia el estado a su valor inicial
}));
