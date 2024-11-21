import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, Avatar, FormHelperText, InputAdornment } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Product } from '../../models/ProductoModel';
import { Warning } from '@mui/icons-material';

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
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        maxWidth: 480,
        mx: 'auto',
        mt: 4,
        bgcolor: '#e3f2fd',
        borderRadius: 2,
        boxShadow: 3,
        padding: 3,
      }}
    >
      {/* Avatar Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: '#1976d2' }}>
          <AddShoppingCart sx={{ color: '#fff' }} />
        </Avatar>
      </Box>

      {/* Title Section */}
      <Typography variant="h5" align="center" sx={{ color: '#1976d2', fontWeight: 'bold', mb: 2 }}>
        Create New Product
      </Typography>

      {/* Product Name */}
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Product name is required',
        }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              label="Product Name"
              error={!!errors.name}
              fullWidth
              margin="normal"
              sx={{ bgcolor: '#fff' }}
              InputProps={{
                endAdornment: errors.name ? (
                  <InputAdornment position="end">
                    <Warning sx={{ color: '#d32f2f' }} />
                  </InputAdornment>
                ) : null,
              }}
            />
            {errors.name && (
              <FormHelperText error sx={{ textAlign: 'center', color: '#d32f2f', fontSize: '0.875rem', fontWeight: 'bold' }}>
                {errors.name.message}
              </FormHelperText>
            )}
          </>
        )}
      />

      {/* Product Description */}
      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <>
            <TextField
              {...field}
              label="Description"
              multiline
              rows={4}
              error={!!errors.description}
              fullWidth
              margin="normal"
              sx={{ bgcolor: '#fff' }}
              InputProps={{
                endAdornment: errors.description ? (
                  <InputAdornment position="end">
                    <Warning sx={{ color: '#d32f2f' }} />
                  </InputAdornment>
                ) : null,
              }}
            />
            {errors.description && (
              <FormHelperText error sx={{ textAlign: 'center', color: '#d32f2f', fontSize: '0.875rem', fontWeight: 'bold' }}>
                {errors.description.message}
              </FormHelperText>
            )}
          </>
        )}
      />

      {/* Quantity */}
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
          <>
            <TextField
              {...field}
              label="Quantity"
              error={!!errors.quantity}
              fullWidth
              margin="normal"
              sx={{ bgcolor: '#fff' }}
              InputProps={{
                endAdornment: errors.quantity ? (
                  <InputAdornment position="end">
                    <Warning sx={{ color: '#d32f2f' }} />
                  </InputAdornment>
                ) : null,
              }}
            />
            {errors.quantity && (
              <FormHelperText error sx={{ textAlign: 'center', color: '#d32f2f', fontSize: '0.875rem', fontWeight: 'bold' }}>
                {errors.quantity.message}
              </FormHelperText>
            )}
          </>
        )}
      />

      {/* Price */}
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
          <>
            <TextField
              {...field}
              label="Price"
              error={!!errors.price}
              fullWidth
              margin="normal"
              sx={{ bgcolor: '#fff' }}
              InputProps={{
                endAdornment: errors.price ? (
                  <InputAdornment position="end">
                    <Warning sx={{ color: '#d32f2f' }} />
                  </InputAdornment>
                ) : null,
              }}
            />
            {errors.price && (
              <FormHelperText error sx={{ textAlign: 'center', color: '#d32f2f', fontSize: '0.875rem', fontWeight: 'bold' }}>
                {errors.price.message}
              </FormHelperText>
            )}
          </>
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#1976d2',
          '&:hover': {
            bgcolor: '#1565c0',
          },
        }}
      >
        Create Product
      </Button>
    </Box>
  );
}
