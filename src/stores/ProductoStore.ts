import { create } from "zustand";
import { API } from "../services";
import { Producto } from "../models/ProductoModel";

type ProductoStore = {
  allProductos: Producto[];
  isEditing: boolean;
  editandoProducto: Producto;

  crearProducto: (product: Producto) => Promise<void>;
  getAllProductos: () => Promise<void>;
  editarProducto: (id: number, product: Producto) => Promise<void>;
  borrarProducto: (id: number) => Promise<void>;
  reset: () => void;
};

export const useProductosStore = create<ProductoStore>((set, get) => ({
  allProductos: [] as Producto[],
  isEditing: false,
  editandoProducto: {} as Producto,

  // Creo un producto
  crearProducto: async (producto: Producto) => {
    try {
      const response = await API.crearProducto(producto);

      // Devuelve solo el producto si la respuesta es válida y lo guardo en el store
      if (response) {
        set((state) => ({
          allProductos: [...state.allProductos, response],
        }));
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },

  // Guardo todos los productos
  getAllProductos: async () => {
    try {
      const response = await API.getAllProductos();

      // Devuelve solo los productos si la respuesta es válida y lo guardo en el store
      if (response) {
        set({ allProductos: response });
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },

  // Edita un producto
  editarProducto: async (id: number, actualizarProducto: Producto) => {
    try {
      const response = await API.editarProducto(id, actualizarProducto);

      // Reinicio las variables de edición
      if (response) {
        get().isEditing = false;
        get().editandoProducto = {} as Producto;
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },

  // Borra un producto
  borrarProducto: async (id: number) => {
    try {
      const response = await API.borrarProducto(id);
      // Filtra los productos
      if (response) {
        const currentAllProducts = get().allProductos;
        const newAllProducts = currentAllProducts.filter(
          (producto) => producto.id !== id
        );
        set({ allProductos: newAllProducts });
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  },
  reset: () =>
    set({
      allProductos: [],
      isEditing: false,
      editandoProducto: {} as Producto,
    }), // Reinicia el estado a su valor inicial
}));
