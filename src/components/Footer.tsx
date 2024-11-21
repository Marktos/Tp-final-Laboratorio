import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#388e3c', // Verde
        color: 'white',
        padding: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">Estudiante: Marcos Neculman</Typography>
    </Box>
  );
};

export default Footer;
