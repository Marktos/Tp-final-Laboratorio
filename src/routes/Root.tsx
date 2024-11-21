import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Add, Delete, Inventory, Person } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'; 

const drawerWidth = 240;

export default function Root() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: '#388e3c', // Verde
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Gestor de inventario
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#2552', // Verde
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/home')}>
              <ListItemIcon>
                <Inventory />
              </ListItemIcon>
              <ListItemText primary={'Products'} />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={() => navigate('/createProduct')}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary={'Create Product'} />
          </ListItemButton>

          <ListItemButton onClick={() => navigate('/deletedProducts')}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary={'Deleted Products'} />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/users')}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary={'Users'} />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={() => navigate('/createUser')}>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary={'Create User'} />
          </ListItemButton>

          <ListItemButton onClick={() => navigate('/deletedUsers')}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText primary={'Deleted Users'} />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
