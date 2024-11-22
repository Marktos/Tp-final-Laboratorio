import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useUserStore } from "../stores/userStore"; // Aquí deberías adaptar el nombre según tu store
import { useNavigate } from "react-router-dom";

type UserProps = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UserCard({ id, name, email, role }: UserProps) {
  const userState = useUserStore.getState();
  const deleteUser = userState.deleteUser;

  // Navigate para redireccionar
  const navigate = useNavigate();

  // Cambio las variables de edición al hacer clic en "editar"
  const editing = () => {
    userState.isEditing = true;
    userState.editingUser = { id, name, email, role };

    navigate("/editUser");
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
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
        <Button size="small" color="primary" onClick={editing}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => deleteUser(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
