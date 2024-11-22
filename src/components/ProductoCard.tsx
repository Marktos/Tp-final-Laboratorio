import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProductosStore } from "../stores/ProductoStore";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
};

export default function ProductCard({
  id,
  name,
  description,
  quantity,
  price,
}: ProductProps) {
  const productState = useProductosStore.getState();
  const borrarProducto = productState.borrarProducto;

  // Navigate para redireccionar
  const navigate = useNavigate();

  // Cambio las variables de edición al hacer clic en "editar"
  const editando = () => {
    productState.isEditing = true;
    productState.editandoProducto = { id, name, description, quantity, price };

    navigate("/editProduct");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Quantity:</strong> {quantity}
          </Typography>
          <Typography variant="body1">
            <strong>Price:</strong> ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={editando}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => borrarProducto(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
