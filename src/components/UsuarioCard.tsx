import { Card, CardContent, CardActions, Button, Typography, Box, Avatar } from '@mui/material';
import { Person, Email } from '@mui/icons-material';

type UserProps = {
  email: string;
  role: string;
  name: string;
};

export default function UserCard({ email, role, name }: UserProps) {
  return (
    <Card sx={{ maxWidth: 380, margin: 'auto', my: 2, borderRadius: 2, boxShadow: 3, bgcolor: '#e3f2fd' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', padding: 3 }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: '#1976d2', marginRight: 2 }}>
          <Person sx={{ color: '#fff' }} />
        </Avatar>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            <Email sx={{ fontSize: 14, verticalAlign: 'middle', marginRight: 1 }} />
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            <strong>Role:</strong> {role}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', paddingX: 3 }}>
        <Button size="small" color="primary" variant="outlined">
          Edit
        </Button>
        <Button size="small" color="error" variant="outlined">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
