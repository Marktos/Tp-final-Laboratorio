import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useUsuariosStore } from "../stores/UsuarioStore"; // Aquí deberías adaptar el nombre según tu store

type UsuarioProps = {
  id: number;
  email: string;
  role: string;
};

export default function UsuarioCard({ id, email, role }: UsuarioProps) {
  const usuarioState = useUsuariosStore.getState();
  const borrarUsuario = usuarioState.borrarUsuario;

  // Cambio las variables de edición al hacer clic en "editar"
  const cambiarRol = () => {
    usuarioState.cambiarRol(id);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {email}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            <strong>Role:</strong> {role}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color={
            role === "admin"
              ? "success"
              : role === "user"
              ? "info"
              : "secondary"
          }
          onClick={cambiarRol} // Usamos la función cambiarRol
        >
          {role}
        </Button>
        <Button size="small" color="error" onClick={() => borrarUsuario(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
