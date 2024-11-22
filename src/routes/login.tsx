import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { useAuthStore } from "../stores/AuthStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Credenciales } from "../models/Auth";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  // Verificación si el usuario ya está logueado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const onSubmit = async (credenciales: Credenciales) => {
    await login(credenciales);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  };

  const defaultAlert = () => {
    alert(
      "Para poder utilizar este gestor, primero debe clonar y levantar el Backend: https://github.com/Marktos/tp-final-back.git"
    );
    alert("Usuario para ingresar: super@super.com - contraseña: superadmin");
  };

  useEffect(() => {
    const hasShownAlert = localStorage.getItem("defaultAlertShown");
    if (!hasShownAlert) {
      defaultAlert();
      localStorage.setItem("defaultAlertShown", "true");
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container maxWidth="xs">
        <Paper elevation={4} sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "El campo Email es requerido",
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
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Contrasenia es requerida",
                minLength: {
                  value: 6,
                  message:
                    "La contrasenia tiene que poseer al menos 6 caracteres",
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
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: 2,
                padding: "12px",
                borderRadius: "10px",
                boxShadow: 3,
                "&:hover": {
                  backgroundColor: "#1976d2",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
              }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
              <Grid item>
                <Button color="primary" onClick={() => navigate("")}>
                  No tienes una cuenta? Registrate
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
