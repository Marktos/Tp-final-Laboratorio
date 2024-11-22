import { Box, Typography } from "@mui/material";
import UsuarioCard from "../../components/UsuariosCard";
import { useUsuariosStore } from "../../stores/UsuarioStore";

export default function UsuariosSection() {
  const usuarios = useUsuariosStore((state) => state.allUsuarios);

  if (usuarios.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography variant="h6" color="textSecondary">
          No hay usuarios registrados por el momento.
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={1}>
          Intenta agregar nuevos usuarios para que aparezcan aquí.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {usuarios.map((usuario) => (
        <UsuarioCard
          key={usuario.id}
          id={usuario.id!}
          email={usuario.email}
          role={usuario.role!}
        />
      ))}
    </>
  );
}
