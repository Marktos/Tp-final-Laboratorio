
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { Product } from '../../models/ProductoModel';

export default function CreateProductView() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      quantity: 0,
      price: 0,
    },
  });

  const onSubmit = (data: Product) => {
    console.log('Product created:', data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ maxWidth: 400, mx: 'auto' }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Product name is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Product Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="quantity"
        control={control}
        rules={{
          required: 'Quantity is required',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Quantity must be a valid number',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Quantity"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        rules={{
          required: 'Price is required',
          pattern: {
            value: /^\d+(\.\d{1,2})?$/,
            message: 'Price must be a valid number with up to 2 decimal places',
          },
          min: {
            value: 1,
            message: 'Price must be at least 1',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Price"
            error={!!errors.price}
            helperText={errors.price?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Create Product
      </Button>
    </Box>
  );
}
