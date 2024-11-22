import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProductosStore } from "../../stores/ProductoStore";
import { Producto } from "../../models/ProductoModel";

export default function CrearProductosSection() {
  const productoState = useProductosStore.getState();
  const navigate = useNavigate();

  const crearProducto = productoState.crearProducto;
  const editarProducto = productoState.editarProducto;

  // Variables para la edición
  const isEditing = productoState.isEditing;
  const editandoProducto = productoState.editandoProducto;

  // Valores iniciales del formulario
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing
      ? editandoProducto
      : {
          name: "",
          description: "",
          quantity: 0,
          price: 0,
        },
  });

  const onSubmit = (data: Producto) => {
    if (isEditing) {
      editarProducto(editandoProducto.id!, {
        name: data.name,
        description: data.description,
        quantity: Number(data.quantity),
        price: Number(data.price),
      });
    } else {
      crearProducto({
        ...data,
        quantity: Number(data.quantity),
        price: Number(data.price),
      });
    }

    // Actualizo los productos y redirijo
    productoState.getAllProductos();
    reset();
    navigate("/home");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 2,
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        align="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        {isEditing ? "Editar Producto" : "Crear Producto"}
      </Typography>

      <Controller
        name="name"
        control={control}
        rules={{
          required: "El producto debe de tener un nombre",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombre del producto"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: "Agregar una descripcion del producto",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Descripcion"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Controller
        name="quantity"
        control={control}
        rules={{
          required: "Cantidad requerida",
          pattern: {
            value: /^[0-9]+$/,
            message: "La cantidad debe ser un numero valido!",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Cantidad"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Controller
        name="price"
        control={control}
        rules={{
          required: "Precio Requerido",
          pattern: {
            value: /^\d+(\.\d{1,2})?$/,
            message: "El precio debe de tener 2 decimales",
          },
          min: {
            value: 1,
            message: "Precio debe ser al menos 1",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Precio"
            error={!!errors.price}
            helperText={errors.price?.message}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2, py: 1.5, fontWeight: "bold" }}
      >
        {isEditing ? "Guardar Cambios" : "Añadir productos"}
      </Button>
    </Box>
  );
}
