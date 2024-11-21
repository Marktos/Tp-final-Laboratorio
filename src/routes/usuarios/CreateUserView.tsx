import { useForm, Controller } from 'react-hook-form';
import { Card, CardContent, CardActions, TextField, Button, Typography, Box } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { User } from '../../models/UsuarioModel';

export default function CreateUserView() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '', name: '', role: '' },
  });

  const onSubmit = (data: User) => {
    console.log('Form submitted:', data);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: 'auto',
        my: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: '#e3f2fd',
      }}
    >
      <CardContent sx={{ padding: 4, textAlign: 'center' }}>
        <PersonAdd sx={{ fontSize: 60, color: '#1976d2', marginBottom: 2 }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Create New User
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            mt: 3,
          }}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Invalid email format',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="role"
            control={control}
            rules={{ required: 'Role is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Role"
                error={!!errors.role}
                helperText={errors.role?.message}
                fullWidth
                margin="normal"
              />
            )}
          />
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', paddingX: 3, paddingBottom: 3 }}>
        <Button type="submit" variant="contained" size="large" fullWidth onClick={handleSubmit(onSubmit)}>
          Create User
        </Button>
      </CardActions>
    </Card>
  );
}
