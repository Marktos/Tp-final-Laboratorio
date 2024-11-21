import { create } from "zustand";
import { API } from "../services";
import { User } from "../models/UserModel";

type ProductStore = {
  allUsers: User[];
  //isEditing: boolean;
  //editingUser: User;

  createUser: (product: User) => Promise<void>;
  getAllUsers: () => Promise<void>;
  //editUser: (id: number, product: User) => Promise<void>;
  changeRole: (id: number) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  reset: () => void
};

export const useUserStore = create<ProductStore>((set, get) => ({
  allUsers: [] as User[],
  // isEditing: false,
  // editingUser: {} as User,

  // Creo un usuario
  createUser: async (user: User) => {
    try {
      const response = await API.createUser(user);

      // Devuelve solo el usuarios si la respuesta es válida y lo guardo en el store
      if (response) {
        set((state) => ({
          allUsers: [...state.allUsers, response],
        }));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Guardo todos los usuarios
  getAllUsers: async () => {
    try {
      const response = await API.getAllUsers();

      // Devuelve solo los usuarios si la respuesta es válida y lo guardo en el store
      if (response) {
        set({ allUsers: response });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Edita un usuario
  //Retirada por muchos bugs
  // editUser: async (id: number, updatedUser: User) => {
  //   try {
  //     const response = await API.editUser(id, updatedUser);

  //     // Reinicio las variables de edición
  //     if (response) {
  //       get().isEditing = false;
  //       get().editingUser = {} as User;
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // },

  // Cambia el rol a un usuario
  changeRole: async (id: number) => {
    try {
      const newUser = await API.changeRole(id);

      if(newUser){
        const currentAllUsers = get().allUsers
        const newAllUsers = currentAllUsers.map(user => user.id === id ? newUser : user )
        set({allUsers: newAllUsers})
      }

    } catch (error) {
      console.error("Error:", error);
    }
  },

  // Borra un usuario
  deleteUser: async (id: number) => {
    try {
      const response = await API.deleteUser(id);
      // Filtra los usuarios
      if (response) {
        const currentAllProducts = get().allUsers;
        const newAllProducts = currentAllProducts.filter(
          (product) => product.id !== id
        );
        set({ allUsers: newAllProducts });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
  reset: () => set({ allUsers: [] }), // Reinicia el estado a su valor inicial
}));