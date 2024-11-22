export interface Producto {
    id?: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: string | null,

}