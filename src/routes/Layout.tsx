import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Add, Inventory, Logout, Person, Menu } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "../stores/AuthStore";
import { useProductosStore } from "../stores/ProductoStore";
import { useUsuariosStore } from "../stores/UsuarioStore";

const drawerWidth = 240;

export default function Root() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const authState = useAuthStore.getState();
  const usuarioState = useUsuariosStore.getState();
  const navigate = useNavigate();

  const getAllProductos = useProductosStore((state) => state.getAllProductos);
  getAllProductos();
  const getAllUsuarios = usuarioState.getAllUsuarios;
  getAllUsuarios();

  // Reviso si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirigir a la vista de login
    }
  }, [navigate]);

  const logout = () => {
    authState.logout();
    usuarioState.allUsuarios = [];
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
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
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
          ml: `${drawerOpen ? drawerWidth : 0}px`,
          backgroundColor: "#1B5E20", // Verde oscuro
        }}
      >
        <Toolbar>
          <Menu onClick={toggleDrawer} sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap component="div">
            Inventory Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2C6B3F", // Fondo verde oscuro
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/home")}>
              <ListItemIcon>
                <Inventory sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={"Products"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={() => navigate("/crearProducto")}>
            <ListItemIcon>
              <Add sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Create Product"} sx={{ color: "white" }} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/usuarios")}>
              <ListItemIcon>
                <Person sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary={"Users"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={() => navigate("/crearUsuario")}>
            <ListItemIcon>
              <Add sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary={"Create User"} sx={{ color: "white" }} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Logout sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary={"Logout"} sx={{ color: "red" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          transition: "margin-left 0.3s", // Animación de transición
          ml: `${drawerOpen ? drawerWidth : 0}px`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
