import ProductoCard from "../../components/ProductoCard";
import { useProductosStore } from "../../stores/ProductoStore";
import { Box, Typography, Grid } from "@mui/material";

export default function ProductosSection() {
  const productos = useProductosStore((state) => state.allProductos);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" align="center" sx={{ mb: 4 }}>
        Lista de Productos
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {productos.map((Producto) => (
          <Grid item key={Producto.id} xs={12} sm={6} md={4} lg={3}>
            <ProductoCard
              id={Producto.id!}
              name={Producto.name}
              description={Producto.description}
              quantity={Producto.quantity}
              price={Producto.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
