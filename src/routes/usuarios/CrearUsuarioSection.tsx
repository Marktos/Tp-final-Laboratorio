import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUsuariosStore } from "../../stores/UsuarioStore";
import { Usuario } from "../../models/UsuariosModel";

export default function CrearUsuarioSection() {
  const userState = useUsuariosStore.getState();
  const navigate = useNavigate();

  const createUser = userState.crearUsuario;
  const editUser = userState.editUser;

  // Variables para la edición
  const isEditing = userState.isEditing;
  const editingUser = userState.editingUser;

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing
      ? editingUser
      : {
          email: "",
          password: "",
          role: "",
        },
  });

  const onSubmit = (data: Usuario) => {
    if (isEditing) {
      editUser(editingUser.id!, {
        email: data.email,
        password: data.password,
        role: data.role,
      });
    } else {
      createUser(data);
    }
    // Actualizo la lista de usuarios
    userState.getAllUsuarios();
    navigate("/usuarios");
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        maxWidth: 400,
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
        {isEditing ? "Editar Usuario" : "Crear Usuario"}
      </Typography>

      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email es requerido",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Formato de email invalido",
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
            variant="outlined"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Crontrasenia es requerida",
          minLength: {
            value: 6,
            message: "La contrasenia debe de poseer al menos 6 caracteres",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Contrasenia"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        )}
      />

      <Controller
        name="role"
        control={control}
        rules={{
          required: "Es requerido un Rol",
        }}
        render={({ field }) => (
          <FormControl
            fullWidth
            margin="normal"
            error={!!errors.role}
            variant="outlined"
          >
            <InputLabel>Rol</InputLabel>
            <Select {...field} label="Role">
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      {errors.role && (
        <Typography color="error" variant="body2" sx={{ mt: -1, mb: 2 }}>
          {errors.role.message}
        </Typography>
      )}

      <Button type="submit" variant="contained" fullWidth>
        {isEditing ? "Guardar cambios" : "Crear Usuario"}
      </Button>
    </Box>
  );
}
